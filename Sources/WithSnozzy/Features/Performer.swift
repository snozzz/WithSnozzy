import Foundation

/// 长动作的调度：托腮近景、伸懒腰、喝咖啡、看手机——同一时刻只演一条。
///
/// 这几条共用同一批图层槽位（上半身、桌面手层、逐档面部贴片），两条一起跑
/// 就互相盖掉；而被打断的那条如果直接 `cancel()`，画面会从半截姿势一帧切回
/// 常态。原来这两件事各有各的漏洞：控制条上"叫她凑近"直接调 `CloseUp.begin`，
/// 长动作正在演时两条同时跑，近景收工那一刻再硬切回动作的半截；
/// 手动点另一条动作则是把正在演的那条瞬间收掉。
///
/// 所以**所有入口都走这里**——按钮、自发节拍、番茄钟、主线剧情：
///
/// - **手动**（`manual`）：正在演的那条从此刻这一档沿同一列倒放回常态，
///   接着演新的。不检查冷却和环境，按了就要有反应。
/// - **自动**：排队，等当前那条自己演完再演；等太久（`patience`）就作罢——
///   专注结束那一下伸懒腰，过了一分钟再补就不是那个意思了。
///   环境不允许（迷你窗口、面板开着、素材不全）或还在冷却的，直接丢掉。
@MainActor
final class Performer {
    enum Item: Hashable {
        case closeUp
        case action(ActionKind)
    }

    private struct Request {
        let item: Item
        let manual: Bool
        let deadline: Date
        let ignoresCooldown: Bool
        /// 这一次演到位时说什么。nil 用那条动作自己的默认台词。
        let arrival: (() -> Void)?
        /// 演到位了（true），或者被丢掉、过期、没到位就被让掉了（false）。
        let completion: ((Bool) -> Void)?
        /// 近景停多久（秒）。nil 用它自己的随机区间。
        var hold: Double? = nil
    }

    private let closeUp: CloseUp
    private let actions: [ActionKind: ActionRig]
    private var queue: [Request] = []
    /// 正在演、还没到位的那条在等结果的人。
    private var waiting: ((Bool) -> Void)?

    /// 环境允不允许演这一条（窗口形态、面板、素材齐不齐）。由 `AppState` 注入，
    /// 只管自动请求；手动请求一律放行。
    var allows: ((Item) -> Bool)?

    init(closeUp: CloseUp, actions: [ActionKind: ActionRig]) {
        self.closeUp = closeUp
        self.actions = actions
        closeUp.onFinished = { [weak self] in self?.drain() }
        for rig in actions.values {
            rig.onFinished = { [weak self] in self?.drain() }
        }
    }

    /// 此刻在演哪一条（含正在倒放让位的那条）。
    var current: Item? {
        if closeUp.isActive { return .closeUp }
        for kind in ActionKind.allCases where actions[kind]?.isActive == true {
            return .action(kind)
        }
        return nil
    }

    /// 还有几条在排队。给判据用。
    var pending: Int { queue.count }

    func request(_ item: Item, manual: Bool = false, patience: TimeInterval = 20,
                 ignoresCooldown: Bool = false, hold: Double? = nil,
                 arrival: (() -> Void)? = nil, completion: ((Bool) -> Void)? = nil) {
        let req = Request(item: item, manual: manual,
                          deadline: Date().addingTimeInterval(patience),
                          ignoresCooldown: ignoresCooldown, arrival: arrival,
                          completion: completion, hold: hold)
        if manual {
            // 同一条正演着、也没在让位：什么都不用做。
            if item == current, !isReleasing(item) {
                completion?(false)
                return
            }
            // 新的手动请求取代还没开演的旧手动请求：让位期间连点两下，
            // 只该演最后点的那个，而不是演完它再把前一个补上。
            let superseded = queue.filter { $0.manual || $0.item == item }
            queue.removeAll { $0.manual || $0.item == item }
            superseded.forEach { $0.completion?(false) }
            queue.insert(req, at: 0)
            if let playing = current {
                release(playing)
            } else {
                drain()
            }
        } else {
            guard item != current, !queue.contains(where: { $0.item == item }) else {
                completion?(false)
                return
            }
            queue.append(req)
            drain()
        }
    }

    /// 演一条并等它演到位：到位返回 true；被丢掉、过期、或者还没到位就被让掉了
    /// 返回 false。主线剧情靠它把"伸懒腰 → 凑近 → 说话"串成一条时间轴。
    func perform(_ item: Item, patience: TimeInterval, ignoresCooldown: Bool = false,
                 hold: Double? = nil, arrival: (() -> Void)? = nil) async -> Bool {
        await withCheckedContinuation { cont in
            request(item, patience: patience, ignoresCooldown: ignoresCooldown,
                    hold: hold, arrival: arrival,
                    completion: { cont.resume(returning: $0) })
        }
    }

    /// 窗口切到迷你/桌宠：那个画面不在了，直接收掉，排着的也不要了。
    func reset() {
        let dropped = queue
        queue.removeAll()
        closeUp.cancel()
        actions.values.forEach { $0.cancel() }
        settleWaiting()
        dropped.forEach { $0.completion?(false) }
    }

    /// 当前那条演完（或让完位）之后接下一条。
    func drain() {
        guard current == nil else { return }
        // 上一条没演到位就收了（被让掉、被硬收）：等它的人得到 false。
        settleWaiting()
        let now = Date()
        while !queue.isEmpty {
            let req = queue.removeFirst()
            var usable = req.deadline > now
            if usable, !req.manual {
                usable = (allows?(req.item) ?? true)
                    && (req.ignoresCooldown || !isCoolingDown(req.item))
            }
            guard usable else {
                req.completion?(false)
                continue
            }
            start(req)
            return
        }
    }

    private func settleWaiting() {
        let pending = waiting
        waiting = nil
        pending?(false)
    }

    private func start(_ req: Request) {
        waiting = req.completion
        // 没给专门的台词就说那条动作自己的（喝咖啡"先喝一口"、近景念待办）。
        func arrived(_ fallback: (() -> Void)?) -> () -> Void {
            { [weak self] in
                (req.arrival ?? fallback)?()
                let done = self?.waiting
                self?.waiting = nil
                done?(true)
            }
        }
        switch req.item {
        case .closeUp:
            closeUp.nextArrival = arrived(closeUp.onArrived)
            closeUp.nextHold = req.hold
            closeUp.begin()
        case .action(let kind):
            guard let rig = actions[kind] else { return }
            rig.nextArrival = arrived(rig.onArrived)
            rig.begin(force: true)
        }
    }

    private func release(_ item: Item) {
        switch item {
        case .closeUp: closeUp.release()
        case .action(let kind): actions[kind]?.release()
        }
    }

    private func isReleasing(_ item: Item) -> Bool {
        switch item {
        case .closeUp: closeUp.isReleasing
        case .action(let kind): actions[kind]?.isReleasing ?? false
        }
    }

    private func isCoolingDown(_ item: Item) -> Bool {
        switch item {
        case .closeUp: false          // 近景的冷却在"察觉你回来"那一步判
        case .action(let kind): actions[kind]?.isCoolingDown ?? false
        }
    }
}

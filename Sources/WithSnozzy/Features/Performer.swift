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
    }

    private let closeUp: CloseUp
    private let actions: [ActionKind: ActionRig]
    private var queue: [Request] = []

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
                 ignoresCooldown: Bool = false, arrival: (() -> Void)? = nil) {
        let req = Request(item: item, manual: manual,
                          deadline: Date().addingTimeInterval(patience),
                          ignoresCooldown: ignoresCooldown, arrival: arrival)
        if manual {
            // 同一条正演着、也没在让位：什么都不用做。
            if item == current, !isReleasing(item) { return }
            queue.removeAll { $0.item == item }
            queue.insert(req, at: 0)
            if let playing = current {
                release(playing)
            } else {
                drain()
            }
        } else {
            guard item != current, !queue.contains(where: { $0.item == item }) else { return }
            queue.append(req)
            drain()
        }
    }

    /// 窗口切到迷你/桌宠：那个画面不在了，直接收掉，排着的也不要了。
    func reset() {
        queue.removeAll()
        closeUp.cancel()
        actions.values.forEach { $0.cancel() }
    }

    /// 当前那条演完（或让完位）之后接下一条。
    func drain() {
        guard current == nil else { return }
        let now = Date()
        while !queue.isEmpty {
            let req = queue.removeFirst()
            guard req.deadline > now else { continue }
            if !req.manual {
                guard allows?(req.item) ?? true else { continue }
                if !req.ignoresCooldown, isCoolingDown(req.item) { continue }
            }
            start(req)
            return
        }
    }

    private func start(_ req: Request) {
        switch req.item {
        case .closeUp:
            closeUp.nextArrival = req.arrival
            closeUp.begin()
        case .action(let kind):
            guard let rig = actions[kind] else { return }
            rig.nextArrival = req.arrival
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

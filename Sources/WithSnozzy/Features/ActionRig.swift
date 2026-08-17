import Foundation
import Observation

/// 她会主动做的几件事：伸懒腰、喝口咖啡、拿起手机回消息。
///
/// 三条动作的**素材形状完全一样**（2× 常态底 → 八张中间帧 → 终态 →
/// 一列循环播的停留帧 → 同列倒放），所以运行时也只该有一份实现。
/// 原来伸懒腰是单独一个 `StretchRig`，再加两条就是三份互相抄的计时器——
/// 而它们各有各的冷却、各有各的取消，迟早各错各的（第 46 条）。
enum ActionKind: String, CaseIterable, Sendable {
    case stretch, coffee, phone

    var label: String {
        switch self {
        case .stretch: "伸懒腰"
        case .coffee: "喝咖啡"
        case .phone: "看手机"
        }
    }

    /// 停留那一段每帧多久。
    ///
    /// 必须**比空闲档的动画 tick（1/15 秒）长**，相等都不行（第 18 条）。
    /// 三条不一样是因为它们停留时在干的事不一样：伸懒腰是慢慢晃脖子，
    /// 喝咖啡是小口啜，回消息是拇指在敲——敲得最快。
    var holdFrameTime: Double {
        switch self {
        case .stretch: 0.16
        case .coffee: 0.18
        case .phone: 0.13
        }
    }

    /// 停留那一段循环几圈。回消息要久一点，一圈只够点两下。
    var holdCycles: ClosedRange<Int> {
        switch self {
        case .stretch: 2...3
        case .coffee: 2...3
        case .phone: 3...6
        }
    }

    /// 自己找上门的间隔（秒）。**每次都重新抽**——固定周期几轮之后就能
    /// 预判，而"她什么时候会伸个懒腰"本来就该有点不确定。
    ///
    /// 手机那条不自发：它是给"你在回消息"用的，自己拿起来玩就成摸鱼了。
    var idleRange: ClosedRange<Double>? {
        switch self {
        case .stretch: 300...600
        case .coffee: 900...1800
        case .phone: nil
        }
    }

    /// 两次之间至少隔多久。上面那个区间已经远大于它，这条只防手动连点
    /// 和"番茄钟刚结束又赶上自发那一拍"。
    var cooldown: Double {
        switch self {
        case .phone: 25
        default: 90
        }
    }
}

/// 一条长动作的播放器。
///
/// 和 `CloseUp` 是同一类东西：**由事件触发、有始有终的动作**，所以要记住
/// "从什么时候开始的"，而不是像换腿、表情、打字那样写成"给定时刻算出同一个
/// 结果"的纯函数。区别只有两点——它不推镜头（这些动作是给整个画面看的，
/// 推近了反而看不见举起来的手），以及它主要靠自己的节拍走。
///
/// 时间轴：常态基准（-1）→ 八张真骨骼中间帧（0…7）→ 终态（8）→
/// **停留那一列循环几圈**（9…8+H）→ 回终态 → 同一列倒放 → 回常态。
///
/// 停留那一段是这一版新加的，也是"像做操"和"像人"的分水岭：原来举到头顶
/// 之后就是一张静止图冻在那儿两秒，读起来是三拍体操。现在那两秒里脖子在晃、
/// 胸在起伏、拇指在点屏幕。**倒放共用中间帧那一列**，所以起落两段的路径和
/// 锚点天然一致。
@MainActor
@Observable
final class ActionRig {

    /// 中间帧数和帧长跟托腮走同一套：素材是同一条管线出的。
    static let transitionFrames = CloseUp.transitionFrames
    static let frameTime = CloseUp.frameTime

    let kind: ActionKind

    /// nil 是常态，-1 是这条动作发布的 2× 常态起点，0..<transitionFrames
    /// 是中间姿势，transitionFrames 是终态，再往上是停留那一列。
    private(set) var frame: Int?

    /// 停留那一列有几张。由 `AppState` 从素材清单注入——素材说了算，
    /// 代码里再写一份必然对不上（第 70 条）。
    var holdFrames: Int = 0

    private var running: Task<Void, Never>?
    private var scheduler: Task<Void, Never>?
    private var lastFinished = Date.distantPast
    private var dueAfter: Double

    /// 现在能不能演。由 `AppState` 注入——窗口形态、近景在不在跑、
    /// 素材齐不齐都归它管，这里不该知道那些。
    var canStart: (() -> Bool)?
    /// 演到位（终态那一拍）时喊一声。喝咖啡和回消息各自要说句话。
    var onArrived: (() -> Void)?

    init(_ kind: ActionKind) {
        self.kind = kind
        self.dueAfter = kind.idleRange.map { Double.random(in: $0) } ?? .infinity
    }

    var isActive: Bool { running != nil }
    /// 距下一次自发还有多少秒。给动作面板显示，别的地方不用。
    var secondsUntilNext: Double {
        max(0, dueAfter - Date().timeIntervalSince(lastFinished))
    }

    /// 调度器多久醒一次看看到点没有。比最短间隔小两个数量级就够，
    /// 不用为了准时把它做成精确定时器——早晚十几秒没人看得出来。
    private static let tick: Double = 15

    /// 开始自发节拍。**必须由 `AppState.wireState()` 调**，不能在 `init` 里
    /// ——`canStart` 是外面注入的，那时候还是 nil（第 12 条）。
    ///
    /// 用一个粗粒度轮询而不是精确定时器：这条时间轴上"早晚十几秒"没有意义，
    /// 而轮询天然能处理"到点了但窗口是迷你形态 / 近景正在跑"——
    /// 到不了条件就等下一拍，不用另外排队重试。
    func startScheduling() {
        guard scheduler == nil, kind.idleRange != nil else { return }
        // 从现在开始计时，不是从 distantPast——否则一启动就先演一个。
        lastFinished = Date()
        scheduler = Task { [weak self] in
            while !Task.isCancelled {
                try? await Task.sleep(for: .seconds(Self.tick))
                guard let self else { return }
                guard !self.isActive,
                      Date().timeIntervalSince(self.lastFinished) >= self.dueAfter
                else { continue }
                self.begin()
            }
        }
    }

    /// 够条件就演一个。
    ///
    /// **手动入口是必须的**：自动触发要等一整段番茄钟，改完素材想验一眼
    /// 根本等不起——托腮那条也是为这个才加的按钮。
    func begin(force: Bool = false) {
        let now = Date()
        guard force || (running == nil
                        && now.timeIntervalSince(lastFinished) > kind.cooldown
                        && canStart?() ?? true) else { return }
        running?.cancel()
        // 和 `CloseUp.begin` 一样同步落到 -1：等子 Task 拿到第一个 actor 时机
        // 才置的话，动作起步那一瞬间屏幕上还留着上一张常态图。
        frame = -1
        let final = Self.transitionFrames
        let holds = holdFrames
        let cycles = Int.random(in: kind.holdCycles)
        let holdStep = kind.holdFrameTime
        running = Task { [weak self] in
            guard let self else { return }
            for step in 0..<Self.transitionFrames {
                guard await self.pause(Self.frameTime) else { return }
                self.frame = step
            }
            guard await self.pause(Self.frameTime) else { return }
            self.frame = final
            self.onArrived?()

            // 停在那儿的一段。素材里没有停留帧时退回"静止停一会儿"——
            // 少一列图不该让整条动作演不了，只是没那么活。
            if holds > 0 {
                for _ in 0..<cycles {
                    for step in 0..<holds {
                        guard await self.pause(holdStep) else { return }
                        self.frame = final + 1 + step
                    }
                }
                guard await self.pause(holdStep) else { return }
                self.frame = final
            } else {
                guard await self.pause(Double(cycles) * 0.8) else { return }
            }

            for step in stride(from: Self.transitionFrames - 1, through: 0, by: -1) {
                guard await self.pause(Self.frameTime) else { return }
                self.frame = step
            }
            guard await self.pause(Self.frameTime) else { return }
            self.frame = -1
            guard await self.pause(Self.frameTime) else { return }
            self.frame = nil
            self.running = nil
            self.settle()
        }
    }

    /// 一次演完（或被打断）之后重新计时，并重新抽下一次的间隔。
    private func settle() {
        lastFinished = Date()
        if let range = kind.idleRange { dueAfter = Double.random(in: range) }
    }

    private func pause(_ seconds: Double) async -> Bool {
        do {
            try await Task.sleep(for: .seconds(seconds))
            return true
        } catch {
            return false
        }
    }

    /// 手动收起（切窗口形态、近景要开始之类）。
    func cancel() {
        guard running != nil else { return }
        running?.cancel()
        running = nil
        frame = nil
        settle()
    }

    /// 退出时把调度器也停掉，别留一条永远醒着的 Task。
    func stopScheduling() {
        scheduler?.cancel()
        scheduler = nil
    }
}

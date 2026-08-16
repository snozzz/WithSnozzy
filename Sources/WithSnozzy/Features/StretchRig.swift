import Foundation
import Observation

/// 伸个懒腰。每隔 5–10 分钟自发一次，专注段结束时也来一个。
///
/// 和 `CloseUp` 是同一类东西：**由事件触发、有始有终的动作**，所以要记住
/// "从什么时候开始的"，而不是像换腿、表情、打字那样写成"给定时刻算出同一个
/// 结果"的纯函数。区别只有两点——它不推镜头（伸懒腰是给整个画面看的，
/// 推近了反而看不见举起来的手），以及它主要靠自己的节拍走，
/// 番茄钟只是顺带的一个触发点。
///
/// 时间轴和托腮完全一样：常态基准（-1）→ 八张真骨骼中间帧（0…7）→
/// 终态（8）→ 停一下 → 同一列倒放 → 回常态。**倒放共用同一列**，
/// 所以起落两段的路径和锚点天然一致，不会出现"举上去和放下来不是一条路"。
@MainActor
@Observable
final class StretchRig {

    /// 中间帧数和帧长跟托腮走同一套：素材是同一条管线出的，
    /// 帧长也必须大于空闲档的动画 tick（1/15 秒），否则会不均匀丢帧（第 18 条）。
    static let transitionFrames = CloseUp.transitionFrames
    static let frameTime = CloseUp.frameTime
    static let motionDuration = Double(transitionFrames + 1) * frameTime
    /// 举到头顶停多久。比托腮短——伸懒腰是一下子的事，停久了像举手投降。
    static let holdRange: ClosedRange<Double> = 0.9...1.6
    /// 隔多久自发伸一次。**每次都重新抽**——固定周期几轮之后就能预判，
    /// 而"她什么时候会伸个懒腰"本来就该有点不确定（和近景那个停留时长同理）。
    static let idleRange: ClosedRange<Double> = 300...600
    /// 两次之间至少隔多久。上面那个区间已经远大于它，这条只防手动连点
    /// 和"番茄钟刚结束又赶上自发那一拍"。
    private static let cooldown: Double = 90
    /// 调度器多久醒一次看看到点没有。比最短间隔小两个数量级就够，
    /// 不用为了准时把它做成精确定时器——早晚十几秒没人看得出来。
    private static let tick: Double = 15

    /// nil 是常态，-1 是这条动作发布的 2× 常态起点，
    /// 0..<transitionFrames 是中间姿势，transitionFrames 是终态。
    private(set) var frame: Int?

    private var running: Task<Void, Never>?
    private var scheduler: Task<Void, Never>?
    private var lastFinished = Date.distantPast
    private var dueAfter = Double.random(in: StretchRig.idleRange)

    /// 现在能不能演。由 `AppState` 注入——窗口形态、近景在不在跑、
    /// 素材齐不齐都归它管，这里不该知道那些。
    var canStart: (() -> Bool)?

    var isActive: Bool { running != nil }
    /// 距下一次自发伸懒腰还有多少秒。给调试面板显示，别的地方不用。
    var secondsUntilNext: Double {
        max(0, dueAfter - Date().timeIntervalSince(lastFinished))
    }

    /// 开始自发节拍：每隔 `idleRange` 伸一次。
    ///
    /// **必须由 `AppState.wireState()` 调**，不能在 `init` 里——`canStart`
    /// 是外面注入的，那时候还是 nil（和 `PointerWatcher`、`CloseUp` 同一个坑，
    /// 第 12 条）。
    ///
    /// 用一个粗粒度轮询而不是精确定时器：这条时间轴上"早晚十几秒"没有意义，
    /// 而轮询天然能处理"到点了但窗口是迷你形态 / 近景正在跑"——
    /// 到不了条件就等下一拍，不用另外排队重试。
    func startScheduling() {
        guard scheduler == nil else { return }
        // 从现在开始计时，不是从 distantPast——否则一启动就先伸一个。
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

    /// 够条件就伸一个。专注段结束时调，也给菜单/控制条当手动入口。
    ///
    /// **手动入口是必须的**：自动触发要等一整段番茄钟，改完素材想验一眼
    /// 根本等不起——托腮那条也是为这个才加的按钮。
    func begin(force: Bool = false) {
        let now = Date()
        guard force || (running == nil
                        && now.timeIntervalSince(lastFinished) > Self.cooldown
                        && canStart?() ?? true) else { return }
        running?.cancel()
        // 和 `CloseUp.begin` 一样同步落到 -1：等子 Task 拿到第一个 actor 时机
        // 才置的话，动作起步那一瞬间屏幕上还留着上一张常态图。
        frame = -1
        let hold = Double.random(in: Self.holdRange)
        running = Task { [weak self] in
            guard let self else { return }
            for step in 0..<Self.transitionFrames {
                guard await self.pause(Self.frameTime) else { return }
                self.frame = step
            }
            guard await self.pause(Self.frameTime) else { return }
            self.frame = Self.transitionFrames

            guard await self.pause(hold) else { return }
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
        dueAfter = Double.random(in: Self.idleRange)
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

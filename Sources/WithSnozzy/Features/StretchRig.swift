import Foundation
import Observation

/// 伸个懒腰。专注段结束、休息开始的那一刻演一次。
///
/// 和 `CloseUp` 是同一类东西：**由事件触发、有始有终的动作**，所以要记住
/// "从什么时候开始的"，而不是像换腿、表情、打字那样写成"给定时刻算出同一个
/// 结果"的纯函数。区别只有两点——它不推镜头（伸懒腰是给整个画面看的，
/// 推近了反而看不见举起来的手），以及它挑的时机是番茄钟说"该歇会儿了"。
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
    /// 两次之间至少隔多久。番茄钟一轮至少几分钟，这条基本只防手动连点。
    private static let cooldown: Double = 90

    /// nil 是常态，-1 是这条动作发布的 2× 常态起点，
    /// 0..<transitionFrames 是中间姿势，transitionFrames 是终态。
    private(set) var frame: Int?

    private var running: Task<Void, Never>?
    private var lastFinished = Date.distantPast

    /// 现在能不能演。由 `AppState` 注入——窗口形态、近景在不在跑、
    /// 素材齐不齐都归它管，这里不该知道那些。
    var canStart: (() -> Bool)?

    var isActive: Bool { running != nil }

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
            self.lastFinished = Date()
        }
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
        lastFinished = Date()
    }
}

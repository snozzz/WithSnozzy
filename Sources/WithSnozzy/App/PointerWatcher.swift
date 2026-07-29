import AppKit
import Observation

/// 盯着指针在不在窗口底部的唤出区里。
///
/// 不用 SwiftUI 的 `onContinuousHover`：它要求那块区域可命中，而场景各层
/// 都是 `allowsHitTesting(false)`，画面中部根本产生不了 hover 事件；
/// 给容器补命中形状之后仍然只在进入窗口的一瞬间触发一次。
///
/// 直接读 `NSEvent.mouseLocation` 反而简单可靠——不依赖命中测试，
/// 也不依赖窗口是不是激活状态。轮询频率远低于动画帧率，开销可以忽略。
@MainActor
@Observable
final class PointerWatcher {

    /// 指针是否在底部唤出区内。**只在翻转时才写**，否则每次轮询都会
    /// 让读到它的视图失效一次。
    private(set) var nearBottom = false

    /// 唤出区的高度（点）。
    var revealHeight: CGFloat = 140

    @ObservationIgnored private var timer: Timer?

    func start() {
        guard timer == nil else { return }
        let t = Timer.scheduledTimer(withTimeInterval: 0.12, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated { self?.tick() }
        }
        t.tolerance = 0.05          // 允许系统合并唤醒，省电
        timer = t
    }

    func stop() {
        timer?.invalidate()
        timer = nil
    }

    private func tick() {
        let inside = compute()
        if inside != nearBottom { nearBottom = inside }
    }

    private func compute() -> Bool {
        guard let window = NSApp.windows.first(where: { $0.isVisible && $0.frame.width > 300 })
        else { return false }
        let p = NSEvent.mouseLocation
        let f = window.frame
        guard f.contains(p) else { return false }
        // AppKit 的屏幕坐标原点在左下，所以"靠近底部"就是 y 接近 frame.minY
        return p.y - f.minY < revealHeight
    }
}

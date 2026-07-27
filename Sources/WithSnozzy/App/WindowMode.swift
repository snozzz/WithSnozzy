import AppKit

/// 窗口形态。
enum WindowMode: String, CaseIterable, Codable {
    /// 完整房间。
    case normal
    /// 迷你播放器：只留 Snozzy 和最基本的控制，占角落一小块。
    case mini
    /// 桌宠：无边框、背景透明、悬浮在所有窗口之上，桌面上只剩她一个人。
    case pet

    var label: String {
        switch self {
        case .normal: "完整窗口"
        case .mini: "迷你播放器"
        case .pet: "桌宠模式"
        }
    }

    var symbol: String {
        switch self {
        case .normal: "macwindow"
        case .mini: "rectangle.compress.vertical"
        case .pet: "sparkles"
        }
    }

    var defaultSize: NSSize {
        switch self {
        case .normal: NSSize(width: 960, height: 640)
        case .mini: NSSize(width: 340, height: 280)
        case .pet: NSSize(width: 300, height: 320)
        }
    }
}

/// 把 `WindowMode` 落实到真实的 `NSWindow` 上。
///
/// 这部分没法用 SwiftUI 表达：无边框、透明背景、窗口层级都是 AppKit 的概念。
/// 集中在一个类里，SwiftUI 那边只需要改一个枚举值。
@MainActor
final class WindowStyler {

    private weak var window: NSWindow?
    /// 进入迷你/桌宠前的窗口位置和大小，退出时恢复。
    private var savedFrame: NSRect?
    private var currentMode: WindowMode = .normal

    func attach(_ window: NSWindow) {
        self.window = window
        apply(.normal, animated: false)
    }

    func apply(_ mode: WindowMode, animated: Bool = true) {
        guard let window else { return }
        guard mode != currentMode || savedFrame == nil else { return }

        // 第一次离开普通模式时记下原来的位置，之后回来还放回原处。
        if currentMode == .normal && mode != .normal {
            savedFrame = window.frame
        }

        // 所有形态都保留 `.titled`。
        //
        // 直觉上桌宠模式该用 `.borderless`，但那种窗口默认无法成为 key window，
        // 结果就是点不动、拖不走、键盘事件也收不到。
        // 用「.titled + 隐藏红绿灯 + 透明背景」能得到同样干净的外观，
        // 同时保留完整的交互能力。
        window.titlebarAppearsTransparent = true
        window.titleVisibility = .hidden
        window.isMovableByWindowBackground = true

        switch mode {
        case .normal:
            window.styleMask = [.titled, .closable, .miniaturizable, .resizable, .fullSizeContentView]
            window.isOpaque = true
            window.backgroundColor = .black
            window.hasShadow = true
            window.level = .normal
            window.collectionBehavior = [.fullScreenPrimary]
            setTrafficLights(hidden: false, on: window)

        case .mini:
            window.styleMask = [.titled, .closable, .fullSizeContentView]
            window.isOpaque = true
            window.backgroundColor = .black
            window.hasShadow = true
            window.level = .floating          // 迷你播放器就是要一直看得见
            window.collectionBehavior = [.canJoinAllSpaces]
            setTrafficLights(hidden: false, on: window)

        case .pet:
            window.styleMask = [.titled, .closable, .fullSizeContentView]
            window.isOpaque = false
            window.backgroundColor = .clear
            window.hasShadow = false
            window.level = .floating
            window.collectionBehavior = [.canJoinAllSpaces, .stationary]
            setTrafficLights(hidden: true, on: window)
        }

        let target = frame(for: mode, window: window)
        window.setFrame(target, display: true, animate: animated)
        window.makeKeyAndOrderFront(nil)

        currentMode = mode
    }

    private func setTrafficLights(hidden: Bool, on window: NSWindow) {
        for button in [NSWindow.ButtonType.closeButton, .miniaturizeButton, .zoomButton] {
            window.standardWindowButton(button)?.isHidden = hidden
        }
    }

    private func frame(for mode: WindowMode, window: NSWindow) -> NSRect {
        let target: NSRect
        if mode == .normal, let saved = savedFrame {
            savedFrame = nil
            target = saved
        } else {
            let size = mode.defaultSize
            // 缩小时保持右上角不动，视觉上像是"收起来"而不是"跳走"。
            let old = window.frame
            target = NSRect(x: old.maxX - size.width, y: old.maxY - size.height,
                            width: size.width, height: size.height)
        }
        return clampToScreen(target, window: window)
    }

    /// 把窗口收回可见区域内。
    ///
    /// 「保持右上角不动」在放大回完整窗口时会把左边推出屏幕外，
    /// 表现就是画面被裁掉一块、旁边露出黑边。必须夹一次。
    private func clampToScreen(_ rect: NSRect, window: NSWindow) -> NSRect {
        guard let screen = window.screen ?? NSScreen.main else { return rect }
        let visible = screen.visibleFrame
        var r = rect
        r.size.width = min(r.width, visible.width)
        r.size.height = min(r.height, visible.height)
        r.origin.x = min(max(r.minX, visible.minX), visible.maxX - r.width)
        r.origin.y = min(max(r.minY, visible.minY), visible.maxY - r.height)
        return r
    }
}

import AppKit
import SwiftUI

/// 负责纯 AppKit 层面的事：窗口外观、遮挡检测、生命周期。
///
/// 遮挡检测是省电的关键——窗口被别的应用盖住或最小化时，
/// 我们把 `isVisible` 置为 false，所有动画时间线随之暂停，CPU 占用掉到接近 0。
final class AppDelegate: NSObject, NSApplicationDelegate {
    var state: AppState?
    private var window: NSWindow?

    func applicationDidFinishLaunching(_ notification: Notification) {
        // 自检模式：跑完音频链路检查就退出，不显示窗口。
        if AudioSelfTest.isRequested {
            MainActor.assumeIsolated { AudioSelfTest.run() }
            return
        }

        NSApp.setActivationPolicy(.regular)
        NSApp.activate(ignoringOtherApps: true)

        // 窗口要等 SwiftUI 建好，下一轮 runloop 再抓。
        DispatchQueue.main.async { [weak self] in self?.configureWindow() }
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        true
    }

    private func configureWindow() {
        guard let win = NSApp.windows.first(where: { $0.contentView != nil }) else { return }
        window = win

        win.titlebarAppearsTransparent = true
        win.titleVisibility = .hidden
        win.isMovableByWindowBackground = true
        win.backgroundColor = .black
        // 深色房间配深色标题栏，交界处才不会有一条亮边。
        win.appearance = NSAppearance(named: .darkAqua)
        win.setFrameAutosaveName("SnozzyMain")

        NotificationCenter.default.addObserver(
            self, selector: #selector(occlusionChanged),
            name: NSWindow.didChangeOcclusionStateNotification, object: win)
        NotificationCenter.default.addObserver(
            self, selector: #selector(occlusionChanged),
            name: NSWindow.didMiniaturizeNotification, object: win)
        NotificationCenter.default.addObserver(
            self, selector: #selector(occlusionChanged),
            name: NSWindow.didDeminiaturizeNotification, object: win)
    }

    @objc private func occlusionChanged() {
        guard let win = window else { return }
        let visible = win.occlusionState.contains(.visible) && !win.isMiniaturized
        MainActor.assumeIsolated {
            state?.isVisible = visible
        }
    }
}

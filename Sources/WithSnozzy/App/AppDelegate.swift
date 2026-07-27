import AppKit
import SwiftUI

/// 负责纯 AppKit 层面的事：窗口外观与形态、遮挡检测、生命周期。
///
/// 遮挡检测是省电的关键——窗口被别的应用盖住或最小化时，
/// 我们把 `isVisible` 置为 false，所有动画时间线随之暂停，CPU 占用掉到接近 0。
@MainActor
final class AppDelegate: NSObject, NSApplicationDelegate {
    var state: AppState? {
        didSet { wireState() }
    }

    private var window: NSWindow?
    private let styler = WindowStyler()

    func applicationDidFinishLaunching(_ notification: Notification) {
        // 诊断模式：跑完就退出，不显示窗口。
        if AudioSelfTest.isRequested {
            AudioSelfTest.run()
            return
        }
        if let path = Snapshot.requestedPath {
            Snapshot.run(path: path)
            return
        }
        if let path = IconMaker.requestedPath {
            IconMaker.run(dir: path)
            return
        }

        NSApp.setActivationPolicy(.regular)
        NSApp.activate(ignoringOtherApps: true)

        // 窗口要等 SwiftUI 建好，下一轮 runloop 再抓。
        DispatchQueue.main.async { [weak self] in
            MainActor.assumeIsolated { self?.configureWindow() }
        }
    }

    /// 菜单栏图标一直在，所以关掉窗口不等于退出应用——音乐还在放。
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        false
    }

    func applicationWillTerminate(_ notification: Notification) {
        state?.flushAll()
    }

    /// 点 Dock 图标时把窗口叫回来。
    func applicationShouldHandleReopen(_ sender: NSApplication, hasVisibleWindows flag: Bool) -> Bool {
        if !flag { revealWindow() }
        return true
    }

    private func configureWindow() {
        // 注意不能简单地取 `NSApp.windows.first`：MenuBarExtra 自己也是一个窗口。
        // 主窗口的特征是它能成为 main window，而菜单栏那个面板不能。
        guard let win = NSApp.windows.first(where: {
            $0.canBecomeMain && $0.contentView != nil && !($0 is NSPanel)
        }) else { return }

        window = win
        // 窗口是在 AppState 之后才建好的，所以要把此刻的形态补上一次。
        defer { styler.apply(state?.windowMode ?? .normal, animated: false) }
        win.appearance = NSAppearance(named: .darkAqua)
        win.setFrameAutosaveName("SnozzyMain")
        styler.attach(win)

        for name in [NSWindow.didChangeOcclusionStateNotification,
                     NSWindow.didMiniaturizeNotification,
                     NSWindow.didDeminiaturizeNotification] {
            NotificationCenter.default.addObserver(
                self, selector: #selector(occlusionChanged), name: name, object: win)
        }
    }

    private func wireState() {
        state?.onWindowModeChange = { [weak self] mode in
            self?.styler.apply(mode)
        }
        state?.revealWindow = { [weak self] in
            self?.revealWindow()
        }
    }

    private func revealWindow() {
        NSApp.activate(ignoringOtherApps: true)
        window?.makeKeyAndOrderFront(nil)
    }

    @objc private func occlusionChanged() {
        guard let win = window else { return }
        let visible = win.occlusionState.contains(.visible) && !win.isMiniaturized
        state?.isVisible = visible
    }
}

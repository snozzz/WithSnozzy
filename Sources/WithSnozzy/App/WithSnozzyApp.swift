import SwiftUI

@main
struct WithSnozzyApp: App {
    @NSApplicationDelegateAdaptor(AppDelegate.self) private var delegate
    @State private var state = AppState()

    var body: some Scene {
        // 用 `Window` 而不是 `WindowGroup`：这是个单窗口的陪伴型应用，
        // 不需要 ⌘N 开出第二个 Snozzy。
        Window("With Snozzy", id: "main") {
            RootView()
                .environment(state)
                .frame(minWidth: 720, minHeight: 480)
                .onAppear { delegate.state = state }
        }
        .windowStyle(.hiddenTitleBar)
        .defaultSize(width: 960, height: 640)
        .commands {
            // 移除用不到的系统菜单项，让菜单栏保持干净。
            CommandGroup(replacing: .newItem) {}
            CommandGroup(replacing: .help) {}
        }
    }
}

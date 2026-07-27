import SwiftUI

@main
struct WithSnozzyApp: App {
    @NSApplicationDelegateAdaptor(AppDelegate.self) private var delegate
    @State private var state = AppState()

    init() {
        // 带 --render 参数时走离线渲染并退出，不创建窗口。
        OfflineRender.runIfRequested()
    }

    var body: some Scene {
        // 用 `Window` 而不是 `WindowGroup`：这是个单窗口的陪伴型应用，
        // 不需要 ⌘N 开出第二个 Snozzy。
        Window("With Snozzy", id: "main") {
            RootView()
                .environment(state)
                // 迷你和桌宠模式要比这个小得多，所以最小尺寸只在完整模式下生效。
                .frame(minWidth: state.windowMode == .normal ? 720 : 240,
                       minHeight: state.windowMode == .normal ? 480 : 220)
                .onAppear { delegate.state = state }
        }
        .windowStyle(.hiddenTitleBar)
        .defaultSize(width: 960, height: 640)
        // `Window` 默认的 .automatic 会让窗口尺寸跟着内容走。
        // 我们的内容全是 GeometryReader（没有固有尺寸），结果窗口被压成
        // 一百来像素的小方块。改成只用内容的最小尺寸做约束。
        .windowResizability(.contentMinSize)
        .commands {
            // 移除用不到的系统菜单项，让菜单栏保持干净。
            CommandGroup(replacing: .newItem) {}
            CommandGroup(replacing: .help) {}

            CommandMenu("播放") {
                Button(state.isPlaying ? "暂停" : "播放") { state.togglePlay() }
                    .keyboardShortcut(.space, modifiers: [])
                Button("下一首") { state.nextTrack() }
                    .keyboardShortcut(.rightArrow, modifiers: [.command])
                Divider()
                ForEach(WindowMode.allCases, id: \.self) { mode in
                    Button(mode.label) { state.windowMode = mode }
                }
            }
        }

        // 菜单栏常驻图标。主窗口关掉之后它仍然在，音乐也不会断。
        MenuBarExtra {
            MenuBarView().environment(state)
        } label: {
            Image(systemName: state.isPlaying ? "moon.stars.fill" : "moon.stars")
        }
        .menuBarExtraStyle(.window)
    }
}

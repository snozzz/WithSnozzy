import AppKit
import SwiftUI

/// 设置面板。
struct SettingsPanel: View {
    let palette: Palette
    @Environment(AppState.self) private var state
    @State private var launchAtLogin = LaunchAtLogin.isEnabled
    @State private var launchError: String?
    @State private var didResetData = false

    var body: some View {
        @Bindable var s = state

        VStack(alignment: .leading, spacing: 16) {
            section("场景") {
                row("时段") {
                    Picker("", selection: $s.timeMode) {
                        ForEach(TimeMode.allCases, id: \.self) { Text($0.label).tag($0) }
                    }
                    .labelsHidden()
                    .frame(width: 108)
                }
                row("天气") {
                    Picker("", selection: $s.weather) {
                        ForEach(Weather.allCases) { Text($0.label).tag($0) }
                    }
                    .labelsHidden()
                    .frame(width: 108)
                }
                row("窗口") {
                    Picker("", selection: $s.windowMode) {
                        ForEach(WindowMode.allCases, id: \.self) { Text($0.label).tag($0) }
                    }
                    .labelsHidden()
                    .frame(width: 108)
                }
            }

            section("对话") {
                row("接哪个订阅") {
                    Picker("", selection: Binding(
                        get: { state.chat.backend },
                        set: { state.chat.backend = $0 })) {
                        ForEach(SnozzyChat.Backend.allCases) { Text($0.label).tag($0) }
                    }
                    .labelsHidden()
                    .frame(width: 138)
                }
                // 这一句是因为用户以为"能对话"就等于"要付 API 的钱"。
                Text("不用 API key，调用的是本机已登录的命令行，按订阅走。"
                     + "麦克风按钮在底部控制条上，识别在本机完成。")
                    .font(.system(size: 10, design: .rounded))
                    .foregroundStyle(.white.opacity(0.34))
                    .fixedSize(horizontal: false, vertical: true)
                // 只陈述花的是哪份额度，不报警——用户是知情选的。
                // ChatGPT 网页端那份没有 API，接不进来，所以选单里没有它。
                Text(quotaNote)
                    .font(.system(size: 10, design: .rounded))
                    .foregroundStyle(.white.opacity(0.28))
                    .fixedSize(horizontal: false, vertical: true)

                Toggle(isOn: Binding(get: { state.speaking.enabled },
                                     set: { state.speaking.enabled = $0 })) {
                    VStack(alignment: .leading, spacing: 2) {
                        Text("她说话出声")
                            .font(.system(size: 11, design: .rounded))
                            .foregroundStyle(.white.opacity(0.78))
                        Text("本机合成，凑够一句就开口，不等整段")
                            .font(.system(size: 9, design: .rounded))
                            .foregroundStyle(.white.opacity(0.38))
                    }
                }
                .toggleStyle(.switch)
                .tint(palette.accent.color)

                if state.speaking.enabled {
                    row("嗓子") {
                        Picker("", selection: Binding(
                            get: { state.speaking.engine },
                            set: { state.speaking.engine = $0 })) {
                            ForEach(VoiceEngine.allCases) { Text($0.label).tag($0) }
                        }
                        .labelsHidden()
                        .frame(width: 178)
                    }
                    Text(state.speaking.engine == .local
                         ? "需要先跑 Scripts/tts_serve.sh。服务没起来会自动退回系统声音。每句多等一秒半。"
                         : "系统自带，零延迟。想要二次元音色选上面那一档。")
                        .font(.system(size: 9, design: .rounded))
                        .foregroundStyle(.white.opacity(0.32))
                        .fixedSize(horizontal: false, vertical: true)
                }
            }

            section("角色") {
                row("渲染方式") {
                    Picker("", selection: Binding(
                        get: { state.characterStyle },
                        set: { state.characterStyle = $0 })) {
                        ForEach(CharacterStyle.allCases) { Text($0.label).tag($0) }
                    }
                    .labelsHidden()
                    .frame(width: 118)
                }

                if state.characterStyle == .live2d {
                    HStack(spacing: 6) {
                        Image(systemName: "folder")
                            .font(.system(size: 10))
                            .foregroundStyle(.white.opacity(0.4))
                        Text(modelFolderName)
                            .font(.system(size: 10, design: .rounded))
                            .foregroundStyle(.white.opacity(0.6))
                            .lineLimit(1).truncationMode(.middle)
                        Spacer(minLength: 4)
                        smallButton("选择模型…") { pickModelFolder() }
                    }

                    HStack(spacing: 6) {
                        Image(systemName: live2dSymbol)
                            .font(.system(size: 10))
                            .foregroundStyle(live2dReady ? palette.accent.color : .orange.opacity(0.8))
                        Text(state.live2d.status.message)
                            .font(.system(size: 9, design: .rounded))
                            .foregroundStyle(.white.opacity(0.45))
                            .fixedSize(horizontal: false, vertical: true)
                    }
                }

                Text("矢量 Snozzy 是纯代码绘制的，零素材、最省电。Live2D 需要在 Vendor/ 下放好 Cubism Core 和模型。")
                    .font(.system(size: 9, design: .rounded))
                    .foregroundStyle(.white.opacity(0.32))
                    .fixedSize(horizontal: false, vertical: true)
            }

            section("性能") {
                Toggle(isOn: $s.lowPower) {
                    VStack(alignment: .leading, spacing: 2) {
                        Text("省电模式")
                            .font(.system(size: 11, design: .rounded))
                            .foregroundStyle(.white.opacity(0.78))
                        Text(frameRateHint)
                            .font(.system(size: 9, design: .rounded))
                            .foregroundStyle(.white.opacity(0.38))
                    }
                }
                .toggleStyle(.switch)
                .tint(palette.accent.color)

                Text("窗口被遮挡或最小化时，所有动画都会自动暂停，此时几乎不占 CPU。")
                    .font(.system(size: 9, design: .rounded))
                    .foregroundStyle(.white.opacity(0.32))
                    .fixedSize(horizontal: false, vertical: true)
            }

            section("启动") {
                Toggle(isOn: Binding(
                    get: { launchAtLogin },
                    set: { want in
                        launchError = LaunchAtLogin.set(want)
                        // 以系统的实际状态为准，别相信我们请求的值。
                        launchAtLogin = LaunchAtLogin.isEnabled
                    })) {
                    Text("登录时启动")
                        .font(.system(size: 11, design: .rounded))
                        .foregroundStyle(.white.opacity(0.78))
                }
                .toggleStyle(.switch)
                .tint(palette.accent.color)

                if let err = launchError {
                    Text(err)
                        .font(.system(size: 9, design: .rounded))
                        .foregroundStyle(.orange.opacity(0.8))
                        .fixedSize(horizontal: false, vertical: true)
                }
            }

            section("数据") {
                Text("待办、专注记录和偏好都以 JSON 存在本地，可以直接打开查看或备份。")
                    .font(.system(size: 9, design: .rounded))
                    .foregroundStyle(.white.opacity(0.32))
                    .fixedSize(horizontal: false, vertical: true)

                HStack(spacing: 8) {
                    smallButton("打开数据文件夹") {
                        NSWorkspace.shared.open(Store.directory)
                    }
                    smallButton(didResetData ? "已清空" : "清空全部数据", destructive: true) {
                        resetEverything()
                    }
                }
            }

            section("关于") {
                HStack {
                    Text("With Snozzy")
                        .font(.system(size: 11, weight: .medium, design: .rounded))
                        .foregroundStyle(.white.opacity(0.7))
                    Spacer()
                    Text(version)
                        .font(.system(size: 10, design: .rounded))
                        .foregroundStyle(.white.opacity(0.35))
                }
                Text("音乐是实时合成的，Snozzy 和房间是矢量绘制的。整个应用不含任何音频或图片素材。")
                    .font(.system(size: 9, design: .rounded))
                    .foregroundStyle(.white.opacity(0.3))
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
    }

    private var live2dReady: Bool { state.live2d.status.isReady }

    /// 每条后端花的是哪份额度。
    ///
    /// 这一句必须有：ChatGPT Plus 的额度**分成两个池子**（网页/App 聊天那份，
    /// 和 Codex 写代码那份），而选单上看不出来选中的是哪个。
    private var quotaNote: String {
        switch state.chat.backend {
        case .codex:
            "花的是 Codex 那份额度（和网页版 ChatGPT 的额度是分开的两个池子）。"
            + "每句要等十来秒。"
        case .claude:
            "走 Claude Pro 订阅，和 OpenAI 无关，不消耗任何 ChatGPT / Codex 额度。"
            + "每句四到六秒。"
        case .off:
            "ChatGPT 网页端那份额度没有 API 也没有命令行，接不进来，所以选单里没有它。"
        }
    }

    private var modelFolderName: String {
        let p = state.live2d.modelDirectory
        return p.isEmpty ? "未选择" : (p as NSString).lastPathComponent
    }

    /// 选一个含 .model3.json 的文件夹。
    ///
    /// 必须存绝对路径：app 从 .app 包启动时工作目录是根目录，
    /// 相对路径一定找不到模型。
    private func pickModelFolder() {
        let panel = NSOpenPanel()
        panel.canChooseDirectories = true
        panel.canChooseFiles = false
        panel.allowsMultipleSelection = false
        panel.prompt = "选择"
        panel.message = "选一个包含 .model3.json 的文件夹（子目录也会扫描）"
        guard panel.runModal() == .OK, let url = panel.url else { return }
        state.setLive2DModel(path: url.path)
    }

    private var live2dSymbol: String {
        switch state.live2d.status {
        case .ready: "checkmark.circle.fill"
        case .loading: "hourglass"
        default: "exclamationmark.triangle"
        }
    }

    private var frameRateHint: String {
        state.lowPower ? "动画降到 10fps" : "播放时 24fps，空闲 15fps"
    }

    private var version: String {
        let info = Bundle.main.infoDictionary
        let v = info?["CFBundleShortVersionString"] as? String ?? "—"
        return "v\(v)"
    }

    private func resetEverything() {
        // 只删自己写的文件，不动整个目录——万一用户往里放了别的东西。
        for name in ["settings", "tasks", "focus-history", "focus-settings", "library"] {
            try? FileManager.default.removeItem(at: Store.url(name))
        }
        didResetData = true
    }

    // MARK: - 小组件

    @ViewBuilder
    private func section<C: View>(_ title: String, @ViewBuilder content: () -> C) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(title)
                .font(.system(size: 10, weight: .semibold, design: .rounded))
                .foregroundStyle(.white.opacity(0.35))
                .tracking(0.8)
            content()
        }
    }

    private func row<C: View>(_ title: String, @ViewBuilder content: () -> C) -> some View {
        HStack {
            Text(title)
                .font(.system(size: 11, design: .rounded))
                .foregroundStyle(.white.opacity(0.72))
            Spacer()
            content()
        }
    }

    private func smallButton(_ title: String, destructive: Bool = false,
                             _ action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Text(title)
                .font(.system(size: 10, design: .rounded))
                .foregroundStyle(destructive ? .orange.opacity(0.75) : .white.opacity(0.72))
                .padding(.horizontal, 9)
                .padding(.vertical, 6)
                .background {
                    RoundedRectangle(cornerRadius: 7, style: .continuous)
                        .fill(.white.opacity(0.06))
                }
        }
        .buttonStyle(.plain)
    }
}

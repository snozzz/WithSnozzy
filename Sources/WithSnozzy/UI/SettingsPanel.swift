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

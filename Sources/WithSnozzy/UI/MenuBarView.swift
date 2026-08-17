import SwiftUI

/// 菜单栏下拉里的快捷面板。
///
/// 只放「不打开主窗口也想用」的东西：播放、音量、环境音开关、番茄钟状态、窗口形态。
/// 完整的设置和统计留在主窗口——菜单栏面板做大了就失去意义了。
struct MenuBarView: View {
    @Environment(AppState.self) private var state
    private let palette = Palette.night

    var body: some View {
        @Bindable var s = state

        VStack(alignment: .leading, spacing: 12) {
            // ── 曲目 ──
            VStack(alignment: .leading, spacing: 2) {
                Text(state.trackTitle)
                    .font(.system(size: 12, weight: .semibold, design: .rounded))
                    .lineLimit(1)
                Text(state.subtitleText)
                    .font(.system(size: 10, design: .rounded))
                    .foregroundStyle(.secondary)
            }

            // ── 播放控制 ──
            HStack(spacing: 10) {
                Button {
                    state.togglePlay()
                } label: {
                    Image(systemName: state.isPlaying ? "pause.fill" : "play.fill")
                        .font(.system(size: 12))
                        .frame(width: 30, height: 26)
                }
                Button {
                    state.nextTrack()
                } label: {
                    Image(systemName: "forward.fill")
                        .font(.system(size: 11))
                        .frame(width: 30, height: 26)
                }

                Image(systemName: "speaker.wave.2")
                    .font(.system(size: 10))
                    .foregroundStyle(.secondary)
                Slider(value: $s.volume, in: 0...1)
                    .controlSize(.small)
            }

            Divider()

            // ── 环境音快捷开关 ──
            Text("环境音")
                .font(.system(size: 10, weight: .semibold, design: .rounded))
                .foregroundStyle(.secondary)

            HStack(spacing: 6) {
                ForEach(Ambience.allCases) { sound in
                    let on = state.ambienceLevels[sound.rawValue] > 0.001
                    Button {
                        state.setAmbience(sound, on ? 0 : 0.45)
                    } label: {
                        Image(systemName: sound.symbol)
                            .font(.system(size: 12))
                            .foregroundStyle(on ? palette.accent.color : .secondary)
                            .frame(width: 26, height: 24)
                            .background {
                                RoundedRectangle(cornerRadius: 6, style: .continuous)
                                    .fill(.primary.opacity(on ? 0.10 : 0.04))
                            }
                    }
                    .buttonStyle(.plain)
                    .help(sound.label)
                }
            }

            Divider()

            // ── 番茄钟 ──
            HStack {
                Image(systemName: "timer").font(.system(size: 11)).foregroundStyle(.secondary)
                Text(state.focus.phase == .idle ? "未开始" : "\(state.focus.phase.label) \(state.focus.displayTime)")
                    .font(.system(size: 11, design: .rounded))
                    .monospacedDigit()
                Spacer()
                Button(state.focus.isRunning ? "暂停" : "开始") {
                    state.focus.toggle()
                }
                .font(.system(size: 11))
            }

            Divider()

            // ── 窗口形态 ──
            Picker("", selection: $s.windowMode) {
                ForEach(WindowMode.allCases, id: \.self) { mode in
                    Label(mode.label, systemImage: mode.symbol).tag(mode)
                }
            }
            .pickerStyle(.inline)
            .labelsHidden()

            Divider()

            // 叫她凑近。**单独一行**——和下面那排挤在一起时三个按钮加起来
            // 顶到了 260 点的面板宽度，最长的那个会被切掉。
            Button {
                state.revealWindow?()
                state.closeUp.begin()
            } label: {
                Label("叫她凑近看看", systemImage: "person.crop.circle.badge.questionmark")
                    .font(.system(size: 11))
            }
            .disabled(state.windowMode != .normal)
            .help(state.windowMode == .normal
                  ? "托着腮凑过来，顺便念一句待办"
                  : "只有完整窗口有这个画面")

            // 伸懒腰。自动触发要等一整段番茄钟走完，改完素材想验一眼等不起，
            // 所以和近景一样必须留一个绕过冷却的入口。
            Button {
                state.revealWindow?()
                state.perform(.stretch, force: true)
            } label: {
                Label("让她伸个懒腰", systemImage: "figure.arms.open")
                    .font(.system(size: 11))
            }
            .disabled(state.windowMode != .normal
                      || !state.sceneAssets.hasCompleteMotion(.stretch))
            .help(state.sceneAssets.hasCompleteMotion(.stretch)
                  ? "举起双臂舒展一下，专注段结束时她会自己来一个"
                  : "还没出伸懒腰的素材")

            HStack {
                Button("显示主窗口") { state.revealWindow?() }
                    .font(.system(size: 11))
                Spacer()
                Button("退出") { NSApplication.shared.terminate(nil) }
                    .font(.system(size: 11))
            }
        }
        .padding(14)
        .frame(width: 260)
    }
}

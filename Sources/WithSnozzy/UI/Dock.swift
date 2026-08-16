import SwiftUI

/// 底部悬浮控制条。
struct Dock: View {
    let palette: Palette
    @Environment(AppState.self) private var state
    @State private var showActions = false

    var body: some View {
        @Bindable var s = state

        HStack(spacing: 14) {
            // ── 播放控制 ──────────────────────────────
            // 第一个按钮在两种来源下含义不同：
            // 电台是「再生成一首」，音乐库是「随机播放开关」。
            if state.source == .library {
                IconButton(symbol: "shuffle", size: 13,
                           isOn: state.library.shuffle, tint: palette.accent,
                           help: state.library.shuffle ? "关闭随机播放" : "随机播放") {
                    state.library.shuffle.toggle()
                }
            } else {
                IconButton(symbol: "backward.fill", size: 13, tint: palette.accent, help: "换一首") {
                    state.previousTrack()
                }
            }

            Button {
                state.togglePlay()
            } label: {
                ZStack {
                    Circle()
                        .fill(palette.accent.color(0.92))
                        .frame(width: 38, height: 38)
                        .shadow(color: palette.accent.color(0.45), radius: 12)
                    Image(systemName: state.isPlaying ? "pause.fill" : "play.fill")
                        .font(.system(size: 15, weight: .bold))
                        .foregroundStyle(Color.black.opacity(0.72))
                        // 播放符号视觉重心偏左，手动补 1pt 才居中。
                        .offset(x: state.isPlaying ? 0 : 1.5)
                }
            }
            .buttonStyle(.plain)
            .keyboardShortcut(.space, modifiers: [])
            .help(state.isPlaying ? "暂停" : "播放")

            IconButton(symbol: "forward.fill", size: 13, tint: palette.accent, help: "下一首") {
                state.nextTrack()
            }

            divider

            // ── 曲目信息 ──────────────────────────────
            VStack(alignment: .leading, spacing: 2) {
                Text(state.trackTitle)
                    .font(.system(size: 12, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.88))
                    .lineLimit(1)
                Text(state.subtitleText)
                    .font(.system(size: 10, weight: .regular, design: .rounded))
                    .foregroundStyle(.white.opacity(0.42))
                    .monospacedDigit()
            }
            .frame(width: 138, alignment: .leading)

            divider

            // ── 音量 ─────────────────────────────────
            HStack(spacing: 8) {
                Image(systemName: volumeSymbol)
                    .font(.system(size: 11))
                    .foregroundStyle(.white.opacity(0.5))
                    .frame(width: 14)
                SlimSlider(value: $s.volume, tint: palette.accent, width: 76)
            }

            divider

            // ── 叫她凑近 ──────────────────────────────
            // 近景平时是"你离开半分钟以上再回来"才触发的，而且四分钟内只演一次
            // （不然一天几十次切窗口会烦死）。所以要有个不走那两条门槛的入口。
            //
            // 放在控制条里而不是只放菜单栏：菜单栏那一栏是"不开主窗口也想用"的
            // 东西，而这个功能的全部内容就是主窗口里的画面，塞在那儿等于藏起来。
            IconButton(symbol: "person.crop.circle.badge.questionmark", size: 14,
                       isOn: state.closeUp.isActive, tint: palette.accent,
                       help: "叫她凑近看看") {
                state.closeUp.begin()
            }

            // ── 动作面板 ──────────────────────────────
            // 每个动作平时都有自己的门槛（近景要等冷却、伸懒腰 5–10 分钟
            // 一次、活动档位按槽位抽签），改完素材想验一眼等不起。
            // 面板里每一行调的都是生产入口，不另开一条播放路径（第 69 条）。
            IconButton(symbol: "figure.wave", size: 14,
                       isOn: showActions || state.stretch.isActive,
                       tint: palette.accent, help: "动作面板：让她做点什么") {
                showActions.toggle()
            }
            .popover(isPresented: $showActions, arrowEdge: .top) {
                ActionPanel(palette: palette)
                    .environment(state)
            }

            // ── 说话 ─────────────────────────────────
            // **放在控制条上而不是只放对话面板里**：语音的意义就是不动手，
            // 还要先点开一个面板才能说话就没意义了。
            IconButton(symbol: state.voice.isListening ? "mic.fill" : "mic",
                       size: 14, isOn: state.voice.isListening,
                       tint: palette.accent,
                       help: state.chat.backend == .off
                             ? "对话关着，先到设置里选一个订阅"
                             : state.voice.isListening ? "在听……说完自动发"
                                                       : "按一下，对着麦克风说") {
                state.voice.toggle()
            }
            .disabled(state.chat.backend == .off || state.chat.isThinking)

            divider

            // ── 面板开关 ──────────────────────────────
            ForEach(Panel.allCases) { p in
                IconButton(
                    symbol: p.symbol, size: 14,
                    isOn: state.panel == p, tint: palette.accent, help: p.title
                ) { state.togglePanel(p) }
            }
        }
        .padding(.horizontal, 16)
        .frame(height: Metrics.dockHeight)
        .background { GlassBackground(tint: palette.wallShade) }
        .fixedSize()
    }

    private var divider: some View {
        Rectangle().fill(.white.opacity(0.10)).frame(width: 1, height: 26)
    }

    private var volumeSymbol: String {
        switch state.volume {
        case ..<0.01: "speaker.slash.fill"
        case ..<0.34: "speaker.wave.1.fill"
        case ..<0.70: "speaker.wave.2.fill"
        default: "speaker.wave.3.fill"
        }
    }
}

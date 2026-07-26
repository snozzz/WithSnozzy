import SwiftUI

/// 底部悬浮控制条。
struct Dock: View {
    let palette: Palette
    @Environment(AppState.self) private var state

    var body: some View {
        @Bindable var s = state

        HStack(spacing: 14) {
            // ── 播放控制 ──────────────────────────────
            IconButton(symbol: "backward.fill", size: 13, tint: palette.accent, help: "上一段") {}

            Button {
                state.isPlaying.toggle()
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

            IconButton(symbol: "forward.fill", size: 13, tint: palette.accent, help: "下一段") {}

            divider

            // ── 曲目信息 ──────────────────────────────
            VStack(alignment: .leading, spacing: 2) {
                Text("Snozzy 的电台")
                    .font(.system(size: 12, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.88))
                Text(state.isPlaying ? "正在生成…" : "已暂停")
                    .font(.system(size: 10, weight: .regular, design: .rounded))
                    .foregroundStyle(.white.opacity(0.42))
            }
            .frame(width: 96, alignment: .leading)

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

import SwiftUI

/// 应用主视图。
///
/// 分层原则（对性能很关键）：只有**真正每帧变化**的东西才包在 `TimelineView` 里。
/// 房间、dock、面板都是静态的，它们不会因为角色在呼吸而重绘。
struct RootView: View {
    @Environment(AppState.self) private var state

    var body: some View {
        let pal = state.palette

        ZStack {
            RoomView(palette: pal)

            // 只有角色这一层跑动画时钟。
            TimelineView(.animation(minimumInterval: state.frameInterval, paused: !state.isVisible)) { tl in
                SnozzyView(
                    palette: pal,
                    t: tl.date.timeIntervalSinceReferenceDate,
                    kick: state.audio.kickPulse,
                    playing: state.isPlaying)
                .frame(width: 430, height: 430)
                .offset(y: 22)
            }

            VStack(spacing: 0) {
                TopBar(palette: pal)
                Spacer(minLength: 0)
                Dock(palette: pal).padding(.bottom, 18)
            }

            // 面板从右侧滑入。
            HStack(spacing: 0) {
                Spacer(minLength: 0)
                if let p = state.panel {
                    PanelHost(panel: p, palette: pal)
                        .padding(.trailing, 16)
                        .padding(.top, 52)
                        .padding(.bottom, Metrics.dockHeight + 34)
                        .transition(.move(edge: .trailing).combined(with: .opacity))
                }
            }
        }
        .background(pal.wallShade.color)
        .grain()
        .animation(.easeInOut(duration: 0.9), value: pal)  // 时段切换时颜色平滑过渡
        .preferredColorScheme(.dark)
    }
}

/// 面板内容分发。每个 case 的具体实现随对应功能一起提交。
struct PanelHost: View {
    let panel: Panel
    let palette: Palette
    @Environment(AppState.self) private var state

    var body: some View {
        PanelShell(title: panel.title, tint: palette.wallShade) {
            state.panel = nil
        } content: {
            switch panel {
            default:
                VStack(spacing: 8) {
                    Image(systemName: panel.symbol)
                        .font(.system(size: 26))
                        .foregroundStyle(.white.opacity(0.22))
                    Text("即将上线")
                        .font(.system(size: 12, design: .rounded))
                        .foregroundStyle(.white.opacity(0.35))
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, 40)
            }
        }
    }
}

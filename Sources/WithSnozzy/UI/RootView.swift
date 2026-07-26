import SwiftUI

/// 应用主视图。
struct RootView: View {
    @Environment(AppState.self) private var state

    var body: some View {
        let pal = state.palette

        ZStack {
            SceneStack(
                palette: pal,
                weather: state.weather,
                interval: state.frameInterval,
                paused: !state.isVisible)

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

/// 房间的三明治：背景 → Snozzy → 前景。
///
/// 分层是有代价的，所以每一层的动画时钟单独控制：
/// 静态的墙和桌子根本不进时间线，只有降水、角色、热气三层在动。
private struct SceneStack: View {
    /// 从环境里拿状态，而不是让 `RootView` 把值当参数传进来。
    ///
    /// 传值的写法有个隐蔽的 bug：参数是在 `RootView` 的 body 求值时取的，
    /// 而 body 并不会每帧运行，于是底鼓脉冲永远是过期值，节拍同步根本没生效。
    /// 必须在 `TimelineView` 的闭包**内部**读，那里才是每帧执行的地方。
    @Environment(AppState.self) private var state

    let palette: Palette
    let weather: Weather
    let interval: Double
    let paused: Bool

    /// Snozzy 相对窗口高度的尺寸，以及她的中心位置。
    /// 这两个数决定桌沿切在她身上的哪个高度——调构图就改这里。
    private static let figureScale = 0.78
    private static let figureCenterY = 0.511

    var body: some View {
        GeometryReader { geo in
            let w = geo.size.width, h = geo.size.height
            let figure = h * Self.figureScale

            ZStack {
                // 1. 背景。晴天时时间线暂停，这一层完全静止。
                TimelineView(.animation(minimumInterval: interval,
                                        paused: paused || weather == .clear)) { tl in
                    RoomBackdrop(palette: palette, weather: weather,
                                 t: tl.date.timeIntervalSinceReferenceDate)
                }

                // 2+4. Snozzy 和热气共用**同一个**时间线。
                //
                // 采样显示 CPU 主要花在 SwiftUI 的属性图重算上，而不是光栅绘制。
                // 每多一个 TimelineView 就多一棵被独立驱动失效的子树，
                // 所以能合并的动画层一定要合并——这比优化绘制本身有效得多。
                TimelineView(.animation(minimumInterval: interval, paused: paused)) { tl in
                    let t = tl.date.timeIntervalSinceReferenceDate
                    ZStack {
                        SnozzyView(palette: palette, t: t,
                                   kick: state.audio.kickPulse,
                                   playing: state.isPlaying,
                                   mood: state.mood)
                            .frame(width: figure, height: figure)
                            .position(x: w / 2, y: h * Self.figureCenterY)

                        // 3. 前景：桌面挡住她的下半身，"坐在桌前"的印象就成立了。
                        //    它是静态的，但必须夹在角色和热气之间，所以放进同一层。
                        RoomForeground(palette: palette)

                        SteamOverlay(palette: palette, t: t)
                            .frame(width: w * 0.085, height: h * 0.13)
                            .position(x: w * 0.178, y: h * (RoomForeground.deskTop - 0.128))
                    }
                }
            }
        }
        .ignoresSafeArea()
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
            case .mixer:
                MixerPanel(palette: palette)
            case .focus:
                FocusPanel(palette: palette)
            case .tasks:
                TasksPanel(palette: palette)
            case .library:
                LibraryPanel(palette: palette)
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

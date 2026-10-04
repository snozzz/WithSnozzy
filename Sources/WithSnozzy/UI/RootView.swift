import SwiftUI

/// 应用主视图。
struct RootView: View {
    @Environment(AppState.self) private var state

    /// 唤出区的高度：控制条本身加一圈余量。
    ///
    /// 这个应用大部分时间是"看着"而不是"用着"的，控制条常驻会一直压着
    /// 画面下缘。所以默认让位，指针靠近才浮出来。
    private static let dockReveal: CGFloat = Metrics.dockHeight + 78

    var body: some View {
        switch state.windowMode {
        case .normal: fullScene
        case .mini: MiniView()
        case .pet: PetView()
        }
    }

    /// 控制条该不该显示。
    /// 面板开着时强制显示——面板是从控制条点开的，收起来会让人找不到回去的路。
    private var dockVisible: Bool { state.pointer.nearBottom || state.panel != nil }

    private var fullScene: some View {
        let pal = state.palette

        return ZStack {
            if state.sceneMode == .realtime3DExperimental {
                Realtime3DRoomView(isVisible: state.isVisible,
                                   lowPower: state.lowPower,
                                   session: state.realtime3D)
                    .ignoresSafeArea()
            } else {
                SceneStack(
                    palette: pal,
                    weather: state.weather,
                    interval: state.frameInterval,
                    paused: !state.isVisible)
            }

            VStack(spacing: 0) {
                TopBar(palette: pal)
                Spacer(minLength: 0)
                // 说话时的提示浮在控制条正上方。**跟着控制条一起显隐**——
                // 它是"我按了麦克风之后发生了什么"的唯一反馈，
                // 而按钮就在下面那条上。
                VoiceHUD(palette: pal)
                    .padding(.bottom, 10)
                    .opacity(dockVisible ? 1 : 0)
                    .allowsHitTesting(false)
                Dock(palette: pal)
                    .padding(.bottom, 18)
                    // 面板开着的时候必须一直可见——面板是从控制条点开的，
                    // 收起来会让人找不到回去的路。
                    .opacity(dockVisible ? 1 : 0)
                    .offset(y: dockVisible ? 0 : 26)
                    .allowsHitTesting(dockVisible)
                    .animation(.easeOut(duration: 0.22), value: dockVisible)
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
        .background(state.sceneMode == .realtime3DExperimental
                    ? Color.black
                    : pal.wallShade.color)
        .overlay {
            // The WebGL room already has its own color management and grain
            // budget. Applying the 2.5D tile over it muddies the GLB textures.
            if state.sceneMode != .realtime3DExperimental {
                Grain.tile
                    .resizable(resizingMode: .tile)
                    .opacity(0.035)
                    .blendMode(.overlay)
                    .allowsHitTesting(false)
            }
        }
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

    var body: some View {
        GeometryReader { geo in
            let size = geo.size
            let figure = size.height * SceneCamera.figureScale
            // 近景。`pushed` 是二值的，缓动由 `withAnimation` 在
            // `CloseUp.begin()` 里裹上——缩放和位置全是 SwiftUI 自带可动画的
            // 属性，跟着同一条曲线走。
            let push: CGFloat = state.closeUp.pushed ? 1 : 0
            let zoom = 1 + (SceneCamera.zoom - 1) * push

            ZStack {
                // 层序和缩放都在 `SceneLayers` 里，判据画的也是它（第 69 条）。
                // 这里只决定两半各由哪条时间线驱动：房间晴天时整层停帧，
                // 她、桌子、活动层和手共用一条。
                SceneLayers(zoom: zoom) {
                    TimelineView(.animation(minimumInterval: interval,
                                            paused: paused || weather == .clear)) { tl in
                        SceneRoomLayer(assets: state.sceneAssets, palette: palette,
                                       weather: weather,
                                       t: tl.date.timeIntervalSinceReferenceDate)
                    }
                } figure: {
                    TimelineView(.animation(minimumInterval: interval, paused: paused)) { tl in
                        SceneFigureLayers(
                            assets: state.sceneAssets,
                            frame: .live(state, palette: palette,
                                         t: tl.date.timeIntervalSinceReferenceDate),
                            size: size)
                    }
                }

                // 摸头的热区。
                //
                // 只覆盖头部附近，而不是整块角色画布——那块画布大部分是透明的，
                // 全设成可点的话，点房间空白处也会被当成摸头。
                // 镜头推进时热区要跟着头走，而且**半径也要跟着放大**，
                // 否则近景里她的脸占了大半屏，可点的却还是原来那一小圈。
                Circle()
                    .fill(.clear)
                    .contentShape(Circle())
                    .frame(width: figure * 0.40 * zoom, height: figure * 0.40 * zoom)
                    .position(SceneCamera.headPoint(in: size, zoom: zoom))
                    .onTapGesture { state.pet() }
                    // 刻意不加 .help()：这个热区正好在她脸上，
                    // 悬停时系统提示会把整张脸盖住，比没有提示更糟。
                    // 点角色本来就是自然行为，她的回应就是最好的说明。

                // 对话气泡，浮在她头部右上方。跟着镜头挪位置，但**自己不放大**。
                if let line = state.chatter.current {
                    SceneBubble(text: line, palette: palette, size: size, zoom: zoom)
                        .transition(.scale(scale: 0.85, anchor: .bottomLeading)
                            .combined(with: .opacity))
                        .allowsHitTesting(false)
                }
            }
            .animation(.spring(duration: 0.34, bounce: 0.28), value: state.chatter.current)
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
            case .story:
                StoryPanel(palette: palette)
            case .chat:
                ChatPanel(palette: palette)
            case .library:
                LibraryPanel(palette: palette)
            case .settings:
                SettingsPanel(palette: palette)
            }
        }
    }
}

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
            SceneStack(
                palette: pal,
                weather: state.weather,
                interval: state.frameInterval,
                paused: !state.isVisible)

            VStack(spacing: 0) {
                TopBar(palette: pal)
                Spacer(minLength: 0)
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
    /// 她头部中心在窗口里的高度。摸头的热区和气泡都以它为锚点。
    /// = figureCenterY − figureScale/2 + 0.335 × figureScale
    private static let headY = 0.382

    var body: some View {
        GeometryReader { geo in
            let w = geo.size.width, h = geo.size.height
            let figure = h * Self.figureScale

            ZStack {
                // 1. 背景。晴天时时间线暂停，这一层完全静止。
                //    有手绘素材就用手绘的，没有就回落到程序化房间——
                //    素材是可选的，不该让 app 跑不起来。
                TimelineView(.animation(minimumInterval: interval,
                                        paused: paused || weather == .clear)) { tl in
                    let t = tl.date.timeIntervalSinceReferenceDate
                    if state.sceneAssets.isAvailable {
                        PaintedRoomBackdrop(assets: state.sceneAssets, palette: palette,
                                            weather: weather, t: t)
                    } else {
                        RoomBackdrop(palette: palette, weather: weather, t: t)
                    }
                }

                // 2+4. Snozzy 和热气共用**同一个**时间线。
                //
                // 采样显示 CPU 主要花在 SwiftUI 的属性图重算上，而不是光栅绘制。
                // 每多一个 TimelineView 就多一棵被独立驱动失效的子树，
                // 所以能合并的动画层一定要合并——这比优化绘制本身有效得多。
                TimelineView(.animation(minimumInterval: interval, paused: paused)) { tl in
                    let t = tl.date.timeIntervalSinceReferenceDate
                    ZStack {
                        // 渲染版自己按整块画布取景（构图写死在 RenderedSnozzy 里），
                        // 所以不能塞进 figure 这个正方形框里。
                        if state.characterStyle == .rendered && state.sceneAssets.hasRenderedCharacter {
                            RenderedSnozzy(assets: state.sceneAssets, palette: palette,
                                           pose: SnozzyRig.pose(time: t,
                                                                kick: state.audio.kickPulse,
                                                                playing: state.isPlaying,
                                                                mood: state.mood,
                                                                drowsy: state.drowsy),
                                           headphones: state.isPlaying,
                                           t: t)
                                .equatable()
                        } else {
                            CharacterView(palette: palette, t: t,
                                          kick: state.audio.kickPulse,
                                          playing: state.isPlaying,
                                          mood: state.mood,
                                          drowsy: state.drowsy,
                                          framing: .bust)
                                .frame(width: figure, height: figure)
                                .position(x: w / 2, y: h * Self.figureCenterY)
                        }

                        // 3. 前景：桌面挡住她的下半身，"坐在桌前"的印象就成立了。
                        //    它必须夹在角色和热气之间，所以只能放进这个时间线里；
                        //    但它本身是静态的，靠 .equatable() 跳过每帧重绘。
                        if state.sceneAssets.isAvailable {
                            PaintedRoomForeground(assets: state.sceneAssets, palette: palette)
                                .equatable()
                        } else {
                            RoomForeground(palette: palette).equatable()
                        }

                        // 蒸汽只在程序化房间里画。手绘素材自带氛围，
                        // 再叠一层程序化蒸汽只会飘在错的位置。
                        if !state.sceneAssets.isAvailable {
                            SteamOverlay(palette: palette, t: t)
                                .frame(width: w * 0.085, height: h * 0.13)
                                .position(x: w * 0.178,
                                          y: h * (RoomForeground.deskTop - 0.128))
                        }
                    }
                }

                // 摸头的热区。
                //
                // 只覆盖头部附近，而不是整块角色画布——那块画布大部分是透明的，
                // 全设成可点的话，点房间空白处也会被当成摸头。
                Circle()
                    .fill(.clear)
                    .contentShape(Circle())
                    .frame(width: figure * 0.40, height: figure * 0.40)
                    .position(x: w / 2, y: h * Self.headY)
                    .onTapGesture { state.pet() }
                    // 刻意不加 .help()：这个热区正好在她脸上，
                    // 悬停时系统提示会把整张脸盖住，比没有提示更糟。
                    // 点角色本来就是自然行为，她的回应就是最好的说明。

                // 对话气泡，浮在她头部右上方。
                if let line = state.chatter.current {
                    SpeechBubble(text: line, palette: palette)
                        .fixedSize()
                        .position(x: w / 2 + figure * 0.20,
                                  y: h * Self.headY - figure * 0.22)
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
            case .library:
                LibraryPanel(palette: palette)
            case .settings:
                SettingsPanel(palette: palette)
            }
        }
    }
}

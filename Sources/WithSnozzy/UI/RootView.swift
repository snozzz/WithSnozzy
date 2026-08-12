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
            // 近景。`pushed` 是二值的，缓动由 `withAnimation` 在
            // `CloseUp.begin()` 里裹上——下面这几个量（缩放、模糊、位置）
            // 全是 SwiftUI 自带可动画的属性，跟着同一条曲线走。
            let push: CGFloat = state.closeUp.pushed ? 1 : 0
            let zoom = 1 + (SceneCamera.zoom - 1) * push

            // 气泡和摸头热区**不跟着缩放走**，但位置要跟着走（见 `zoomed`）。
            let headPoint = SceneCamera.point(w / 2, h * Self.headY,
                                              in: geo.size, zoom: zoom)
            let bubblePoint = SceneCamera.penned(
                SceneCamera.point(w / 2 + figure * 0.20,
                                  h * Self.headY - figure * 0.22,
                                  in: geo.size, zoom: zoom),
                in: geo.size)

            ZStack {
              // ── 画面这几层要**整体**缩放，所以先裹成一个 ZStack ──
              //
              // 房间、她、桌子、手是同一台相机渲的、像素级对齐的四张平面图，
              // "推镜头"就是把这一摞**一起**放大。
              //
              // **`.scaleEffect` 必须加在这个容器上，不能加在某一层上。**
              // 曾经加在第二个 TimelineView（她+桌子+手）上，于是推镜头时
              // 房间不动、桌子放大——而 `desk.png` 里有桌沿和显示器底座、
              // `room.png` 里也有同一份（两层是叠着的，不是互斥的），
              // 结果同一块内容在两个尺度上各画了一遍：两条桌沿、两台显示器。
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
                // **别在这儿加景深模糊。** 试过，画面上会出现"重叠"：
                // 桌沿变成清楚和模糊两条。因为这套素材的层**不是互斥的、
                // 是叠着的**——`room.png` 里本来就画着桌子（实测两张图在桌子
                // 那一块的平均差是 0.0 灰阶），`desk.png` 只是把桌子单独抠了
                // 一份盖在角色之上。平时严丝合缝看不出来，一旦只虚化房间层，
                // 底下那张糊的桌子就从清楚的那张周围漏出来。
                // 真要景深，得让所有"角色以外的层"用同一个模糊参数。

                // 2+4. Snozzy 和热气共用**同一个**时间线。
                //
                // 采样显示 CPU 主要花在 SwiftUI 的属性图重算上，而不是光栅绘制。
                // 每多一个 TimelineView 就多一棵被独立驱动失效的子树，
                // 所以能合并的动画层一定要合并——这比优化绘制本身有效得多。
                TimelineView(.animation(minimumInterval: interval, paused: paused)) { tl in
                    let t = tl.date.timeIntervalSinceReferenceDate
                    let celebration = state.celebrationAmount(at: t)
                    let activity = ActivityRig.cue(
                        at: t, phase: state.focus.phase, playing: state.isPlaying,
                        transitionFrom: state.activityTransitionFrom,
                        transitionStartedAt: state.activityTransitionStartedAt)
                    let faceActivity = ActivityRig.attentionCue(
                        from: activity, amount: state.closeUp.attentionAmount)
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
                                           // 表情单独一层：番茄钟阶段和"正在说话"
                                           // 都会改她的脸，这些 SnozzyRig 不知道
                                           face: FaceRig.expression(
                                               t: t,
                                               playing: state.isPlaying,
                                               mood: state.mood,
                                               drowsy: state.drowsy,
                                               working: state.focus.phase == .work,
                                               speaking: state.sheIsTalking,
                                               activity: faceActivity,
                                               celebration: celebration),
                                           headphones: state.isPlaying,
                                           chinFrame: state.closeUp.chinFrame,
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

                        // 3.25 场景里的生活反馈：侧屏内容、杯子热气、手机偶发亮屏。
                        // 和角色共用这条时间线、共用 ActivityCue，不另开一棵每帧
                        // 失效的视图树；而且放在桌面层之后，才不会被 desk.png 盖掉。
                        if state.sceneAssets.isAvailable {
                            PaintedRoomActivityOverlay(assets: state.sceneAssets,
                                                       cue: activity, palette: palette,
                                                       playing: state.isPlaying, t: t,
                                                       celebration: celebration)
                        }

                        // 3.5 敲键盘的手。**必须画在桌面层之后**——
                        //     手伸到键盘上，而桌子是盖在角色之上的，
                        //     画在前面就被桌子吃掉了。
                        if state.sceneAssets.hands.isUsable {
                            TypingHands(assets: state.sceneAssets, palette: palette,
                                        frame: TypingRig.frame(
                                            at: t,
                                            working: state.focus.phase == .work,
                                            frames: state.sceneAssets.hands.frames,
                                            // 托腮时只剩一只手在键盘上。
                                            // 上半身那张图和这一层必须同时换，
                                            // 不然桌上会多出一只没有来路的手
                                            chin: state.closeUp.chinRest
                                                ? state.sceneAssets.hands.chin : nil,
                                            activity: activity),
                                        chinFrame: state.closeUp.chinFrame)
                                .equatable()
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
              }
              .scaleEffect(zoom, anchor: SceneCamera.unitAnchor)

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
                    .position(headPoint)
                    .onTapGesture { state.pet() }
                    // 刻意不加 .help()：这个热区正好在她脸上，
                    // 悬停时系统提示会把整张脸盖住，比没有提示更糟。
                    // 点角色本来就是自然行为，她的回应就是最好的说明。

                // 对话气泡，浮在她头部右上方。跟着镜头挪位置，但**自己不放大**。
                if let line = state.chatter.current {
                    SpeechBubble(text: line, palette: palette)
                        .fixedSize()
                        .position(bubblePoint)
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

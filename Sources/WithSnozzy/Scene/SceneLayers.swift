import SwiftUI

/// 画面里会动的那几层，这一刻的全部输入。
///
/// 生产画面每个 tick 从 `AppState` 取一份（`SceneFrame.live`），判据直接填一份。
/// **两边画的是同一棵视图树**（`SceneLayers`），区别只在输入。
/// 第 69 条那次双影就是因为判据自己照抄了一套层序、而且抄对了——
/// 于是判据全绿，真实画面里缩放加错了层。层序从此只写在这一个文件里。
struct SceneFrame {
    var palette: Palette
    var t: Double
    var pose: Pose
    var face: FaceExpression
    var headphones: Bool
    var chinFrame: Int? = nil
    var action: (kind: ActionKind, frame: Int)? = nil
    var activity: ActivityCue
    var playing: Bool
    var celebration: Double = 0
    var typingFrame: Int
    /// 有没有 Blender 渲染的角色素材可画；没有就回落到矢量版。
    var rendered = true
    /// 矢量回退版自己从这几个量推姿势。
    var kick: Double = 0
    var mood: Double = 0.5
    var drowsy: Double = 0
    /// 只给判据的负向探针用：故意关掉侧屏裁剪、把完成反馈挪位。生产始终是默认值。
    var celebrationClipDisabled = false
    var celebrationOffset: CGSize = .zero
}

extension SceneFrame {
    /// 生产画面这一刻的输入。**必须在 `TimelineView` 的闭包里调**——
    /// 那里才是每帧执行的地方（`RootView.SceneStack` 开头那条注释）。
    @MainActor
    static func live(_ state: AppState, palette: Palette, t: Double) -> SceneFrame {
        let activity = ActivityRig.cue(
            at: t, phase: state.focus.phase, playing: state.isPlaying,
            transitionFrom: state.activityTransitionFrom,
            transitionStartedAt: state.activityTransitionStartedAt,
            forced: state.forcedActivity)
        let celebration = state.celebrationAmount(at: t)
        let working = state.focus.phase == .work
        let assets = state.sceneAssets
        return SceneFrame(
            palette: palette, t: t,
            pose: SnozzyRig.pose(time: t, kick: state.audio.kickPulse,
                                 playing: state.isPlaying, mood: state.mood,
                                 drowsy: state.drowsy),
            // 表情单独一层：番茄钟阶段和"正在说话"都会改她的脸，这些 SnozzyRig 不知道。
            face: FaceRig.expression(
                t: t, playing: state.isPlaying, mood: state.mood,
                drowsy: state.drowsy, working: working,
                speaking: state.sheIsTalking,
                activity: ActivityRig.attentionCue(from: activity,
                                                   amount: state.closeUp.attentionAmount),
                celebration: celebration),
            headphones: state.isPlaying,
            chinFrame: state.closeUp.chinFrame,
            action: state.activeAction,
            activity: activity,
            playing: state.isPlaying,
            celebration: celebration,
            typingFrame: TypingRig.frame(
                at: t, working: working, frames: assets.hands.frames,
                // 托腮时只剩一只手在键盘上。上半身那张图和这一层必须同时换，
                // 不然桌上会多出一只没有来路的手
                chin: state.closeUp.chinRest ? assets.hands.chin : nil,
                activity: activity),
            rendered: state.characterStyle == .rendered && assets.hasRenderedCharacter,
            kick: state.audio.kickPulse, mood: state.mood, drowsy: state.drowsy)
    }
}

/// 房间、她、桌子、手——同一台相机渲的、像素级对齐的一摞平面图。
///
/// **`.scaleEffect` 只能加在这一摞外面。** 曾经加在"她+桌子+手"那一半上，
/// 推镜头时房间不动、桌子放大，而 `desk.png` 和 `room.png` 里都有桌沿
/// （两层是叠着的，不是互斥的），于是两条桌沿、两台显示器（第 69 条）。
///
/// 生产画面给两半各包一个 `TimelineView`（房间晴天时整层停帧），
/// 判据用下面那个静态的 `init(assets:frame:…)`，两边进的都是这里。
struct SceneLayers<Room: View, Figure: View>: View {
    let zoom: CGFloat
    @ViewBuilder let room: Room
    @ViewBuilder let figure: Figure

    var body: some View {
        ZStack {
            room
            figure
        }
        .scaleEffect(zoom, anchor: SceneCamera.unitAnchor)
    }
}

extension SceneLayers where Room == SceneRoomLayer, Figure == SceneFigureLayers {
    /// 判据用：一帧固定输入，整张画出来。
    init(assets: SceneAssets, frame: SceneFrame, size: CGSize,
         weather: Weather = .clear, roomT: Double? = nil, constellation: Int = 0,
         zoom: CGFloat = 1) {
        self.zoom = zoom
        self.room = SceneRoomLayer(assets: assets, palette: frame.palette,
                                   weather: weather, t: roomT ?? frame.t,
                                   constellation: constellation)
        self.figure = SceneFigureLayers(assets: assets, frame: frame, size: size)
    }
}

/// 第 1 层：房间和窗外。手绘素材缺失时回落到程序化房间——素材是可选的，
/// 不该让 app 跑不起来。
struct SceneRoomLayer: View {
    let assets: SceneAssets
    let palette: Palette
    let weather: Weather
    let t: Double
    /// 她的专辑写完了几首：夜里窗外亮几颗星。
    var constellation = 0

    var body: some View {
        if assets.isAvailable {
            PaintedRoomBackdrop(assets: assets, palette: palette, weather: weather, t: t,
                                constellation: constellation)
        } else {
            RoomBackdrop(palette: palette, weather: weather, t: t)
        }
        // **别在这儿加景深模糊。** 这套素材的层是叠着的：`room.png` 里本来就画着
        // 桌子，只虚这一层，糊的桌沿会从清楚的那张周围漏出来（第 69 条）。
        // 真要景深，得让所有"角色以外的层"用同一个模糊参数。
    }
}

/// 第 2–5 层：她 → 桌子 → 场景里的生活反馈 → 键盘和手。
///
/// 这几层共用**一个**时间线：采样显示 CPU 主要花在属性图重算上，
/// 每多一个 TimelineView 就多一棵被独立驱动失效的子树。
struct SceneFigureLayers: View {
    let assets: SceneAssets
    let frame: SceneFrame
    /// 只有矢量回退版要用：它画在一个按窗口高度定的方框里。
    let size: CGSize

    var body: some View {
        let f = frame
        ZStack {
            // 2. 她。渲染版自己按整块画布取景，不能塞进方框。
            if f.rendered {
                RenderedSnozzy(assets: assets, palette: f.palette, pose: f.pose,
                               face: f.face, headphones: f.headphones,
                               chinFrame: f.chinFrame, action: f.action, t: f.t)
                    .equatable()
            } else {
                let figure = size.height * SceneCamera.figureScale
                CharacterView(palette: f.palette, t: f.t, kick: f.kick,
                              playing: f.playing, mood: f.mood, drowsy: f.drowsy,
                              framing: .bust)
                    .frame(width: figure, height: figure)
                    .position(x: size.width / 2, y: size.height * SceneCamera.figureCenterY)
            }

            // 3. 桌面挡住她的下半身。本身是静态的，靠 .equatable() 跳过每帧重绘。
            if assets.isAvailable {
                PaintedRoomForeground(assets: assets, palette: f.palette).equatable()
            } else {
                RoomForeground(palette: f.palette).equatable()
            }

            // 4. 侧屏内容、杯子热气、手机偶发亮屏。放在桌面层之后才不会被 desk.png 盖掉。
            if assets.isAvailable {
                PaintedRoomActivityOverlay(
                    assets: assets, cue: f.activity, palette: f.palette,
                    playing: f.playing, t: f.t, celebration: f.celebration,
                    celebrationClipDisabled: f.celebrationClipDisabled,
                    celebrationOffset: f.celebrationOffset)
            }

            // 5. 敲键盘的手。**必须画在桌面层之后**——桌子盖在角色之上，
            //    画在前面就被桌子吃掉了。
            if assets.hands.isUsable {
                TypingHands(assets: assets, palette: f.palette, frame: f.typingFrame,
                            chinFrame: f.chinFrame, action: f.action)
                    .equatable()
            }

            // 蒸汽只在程序化房间里画。手绘素材自带氛围，再叠一层只会飘在错的位置。
            if !assets.isAvailable {
                SteamOverlay(palette: f.palette, t: f.t)
                    .frame(width: size.width * 0.085, height: size.height * 0.13)
                    .position(x: size.width * 0.178,
                              y: size.height * (RoomForeground.deskTop - 0.128))
            }
        }
    }
}

/// 她头顶右上方那个气泡。跟着镜头挪位置，但**自己不放大**——
/// 位图放大只是糊一点，文字放大是"字号变了"，一眼就出戏。
struct SceneBubble: View {
    let text: String
    let palette: Palette
    let size: CGSize
    let zoom: CGFloat

    var body: some View {
        SpeechBubble(text: text, palette: palette)
            .fixedSize()
            .position(SceneCamera.bubblePoint(in: size, zoom: zoom))
    }
}

import SwiftUI

/// 取景档位。定义在这里而不是 Live2D 那边，
/// 是为了让调用方不用关心当前是哪种渲染方式。
enum CharacterFraming {
    /// 房间场景：半身像，下半身会被桌子挡住。
    case bust
    /// 迷你播放器和桌宠模式：更紧的取景。
    case closeUp
}

/// Snozzy 的统一入口。
///
/// 它是矢量绘制和 Live2D 之间的唯一切换点。姿态由 `SnozzyRig` 算好后
/// 分发给两条渲染路径中的一条——所以呼吸、眨眼、跟拍点头、打瞌睡这些
/// 行为在两种模式下完全一致，换渲染方式不会让她"变个人"。
struct CharacterView: View {
    let palette: Palette
    var t: Double = 0
    var kick: Double = 0
    var playing: Bool = false
    var mood: Double = 0.5
    var drowsy: Double = 0
    var framing: CharacterFraming = .bust

    @Environment(AppState.self) private var state

    var body: some View {
        let pose = SnozzyRig.pose(time: t, kick: kick, playing: playing,
                                  mood: mood, drowsy: drowsy)
#if LIVE2D
        if state.characterStyle == .live2d, let renderer = state.live2d.renderer {
            Live2DCharacterView(renderer: renderer, pose: pose, framing: live2dFraming)
        } else {
            SnozzyCanvas(pose: pose, palette: palette)
        }
#else
        SnozzyCanvas(pose: pose, palette: palette)
#endif
    }

#if LIVE2D
    private var live2dFraming: Live2DFraming {
        switch framing {
        case .bust: .bust
        case .closeUp: .closeUp
        }
    }
#endif
}

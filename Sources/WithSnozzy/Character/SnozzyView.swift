import SwiftUI

/// 只画一个给定姿态。测试和预览直接用它，可以精确指定表情。
struct SnozzyCanvas: View {
    let pose: Pose
    let palette: Palette

    var body: some View {
        Canvas(opaque: false, rendersAsynchronously: false) { ctx, size in
            SnozzyRenderer.draw(pose, in: &ctx,
                                rect: CGRect(origin: .zero, size: size),
                                scene: palette)
        }
        .drawingGroup()   // 合成到一层 Metal 纹理，避免每帧重建大量图层
    }
}

/// Snozzy 本体：按时间和音乐算出姿态，再交给画布。
struct SnozzyView: View {
    let palette: Palette
    /// 连续时间（秒）。
    var t: Double = 0
    /// 底鼓脉冲 0…1。
    var kick: Double = 0
    var playing: Bool = false
    var mood: Double = 0.5

    var body: some View {
        SnozzyCanvas(
            pose: SnozzyRig.pose(time: t, kick: kick, playing: playing, mood: mood),
            palette: palette)
    }
}

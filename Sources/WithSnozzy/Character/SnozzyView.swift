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
        // 刻意**不加** .drawingGroup()：Canvas 本身已经是一次性的即时绘制，
        // 再套一层 drawingGroup 只会多一次离屏合成，纯粹是负优化。
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
    /// 困倦程度 0…1。
    var drowsy: Double = 0

    var body: some View {
        SnozzyCanvas(
            pose: SnozzyRig.pose(time: t, kick: kick, playing: playing,
                                 mood: mood, drowsy: drowsy),
            palette: palette)
    }
}

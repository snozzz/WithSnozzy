import SwiftUI

/// 用 Blender 离线渲染出来的 Snozzy。
///
/// 图层是 `Blender/render_layers.py` 渲的：共用同一个相机，所以像素级对齐，
/// 运行时只是按状态选一张、再叠上几个廉价的 2D 变换。
///
/// 为什么不做形变：这是 3D 渲出来的位图，没有骨骼可驱动。呼吸、点头、
/// 摇摆这些小幅动作用整体的缩放/位移/旋转就能骗过眼睛；而抬手、翻书这类
/// 大动作靠**换一张渲染图**，不靠变形——这也是当初选 3D 当生产工具的理由。
struct RenderedSnozzy: View, Equatable {
    let assets: SceneAssets
    let palette: Palette
    let pose: Pose
    /// 戴不戴耳机。听歌时她陪你一起听。
    let headphones: Bool
    /// 当前时间。腿部姿势由它推导。
    let t: Double

    /// 角色图和房间、桌子是同一台相机渲出来的，三层像素级对齐，
    /// 所以直接满幅绘制。构图在 `Scripts/blocking.py` 里定，不在这里调。

    static func == (a: RenderedSnozzy, b: RenderedSnozzy) -> Bool {
        a.headphones == b.headphones && a.palette == b.palette
            && abs(a.pose.breath - b.pose.breath) < 0.01
            && abs(a.pose.bodySway - b.pose.bodySway) < 0.01
            && abs(a.pose.headBob - b.pose.headBob) < 0.01
            // 换腿的过渡期间必须每帧重画；过渡完就不必了
            && LegPose.at(a.t).blend == LegPose.at(b.t).blend
    }

    var body: some View {
        GeometryReader { geo in
            let w = geo.size.width, h = geo.size.height
            // 没有耳机图时一律用常态图——否则播放时两层都判定为隐藏，
            // 她会整个人消失。
            let wearing = headphones && assets.snozzyHeadphones != nil

            let legs = LegPose.at(t)
            let poses = assets.legPoses

            ZStack {
                if wearing {
                    layer(assets.snozzyHeadphones, opacity: 1, w: w, h: h)
                } else if poses.count == LegPose.count {
                    // 两套腿叠着放，靠不透明度过渡。共用同一个相机渲的，
                    // 所以上半身完全重合，看起来就只有腿在动。
                    layer(poses[legs.from], opacity: 1, w: w, h: h)
                    layer(poses[legs.to], opacity: legs.blend, w: w, h: h)
                } else {
                    layer(assets.snozzyIdle, opacity: 1, w: w, h: h)
                }
            }
            .frame(width: w, height: h)
            .allowsHitTesting(false)
        }
    }

    @ViewBuilder
    private func layer(_ image: NSImage?, opacity: Double, w: CGFloat, h: CGFloat) -> some View {
        if let image {
            Image(nsImage: image)
                .resizable()
                .interpolation(.high)
                .frame(width: w, height: h)
                // 呼吸：整体极轻微地放大，支点放在腰部（图的下方），
                // 支点放中心的话头会跟着上下浮，看起来像在颠。
                .scaleEffect(1 + pose.breath * 0.006, anchor: .bottom)
                .rotationEffect(.degrees(pose.bodySway * 0.8), anchor: .bottom)
                .offset(x: 0, y: pose.headBob * h * 0.008)
                .opacity(opacity)
                // 和房间共用一套时段染色，否则她永远是正午的亮度
                .colorMultiply(PaintedRoom.ambient(palette).color)
        }
    }
}

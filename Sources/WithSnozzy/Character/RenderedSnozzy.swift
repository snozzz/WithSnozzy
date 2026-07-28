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

    /// 构图。和 `Scripts/composite_test.py` 里试出来的那组值一致——
    /// 改构图先在那边试，别直接在这里瞎调。
    private static let scale = 1.25
    private static let centerX = 0.54
    private static let top = 0.25

    static func == (a: RenderedSnozzy, b: RenderedSnozzy) -> Bool {
        a.headphones == b.headphones && a.palette == b.palette
            && abs(a.pose.breath - b.pose.breath) < 0.01
            && abs(a.pose.bodySway - b.pose.bodySway) < 0.01
            && abs(a.pose.headBob - b.pose.headBob) < 0.01
    }

    var body: some View {
        GeometryReader { geo in
            let w = geo.size.width, h = geo.size.height
            let deskCut = h * (assets.manifest.deskBottom ?? 1.0)

            ZStack {
                layer(assets.snozzyIdle, visible: !headphones, w: w, h: h)
                layer(assets.snozzyHeadphones, visible: headphones, w: w, h: h)
            }
            // 桌沿以下不该有她——她坐在桌子后面。
            .frame(width: w, height: h, alignment: .topLeading)
            .clipShape(Rectangle().path(in: CGRect(x: 0, y: 0, width: w, height: deskCut)))
            .allowsHitTesting(false)
        }
    }

    @ViewBuilder
    private func layer(_ image: NSImage?, visible: Bool, w: CGFloat, h: CGFloat) -> some View {
        if let image {
            let ih = h * Self.scale
            let iw = image.size.width * ih / max(image.size.height, 1)
            Image(nsImage: image)
                .resizable()
                .interpolation(.high)
                .frame(width: iw, height: ih)
                // 呼吸：整体极轻微地放大，支点放在腰部（图的下方），
                // 支点放中心的话头会跟着上下浮，看起来像在颠。
                .scaleEffect(1 + pose.breath * 0.006, anchor: .bottom)
                .rotationEffect(.degrees(pose.bodySway * 0.8), anchor: .bottom)
                .offset(x: 0, y: pose.headBob * h * 0.008)
                .position(x: w * Self.centerX, y: h * Self.top + ih / 2)
                .opacity(visible ? 1 : 0)
                .animation(.easeInOut(duration: 0.45), value: visible)
                // 和房间共用一套时段染色，否则她永远是正午的亮度
                .colorMultiply(PaintedRoom.ambient(palette).color)
        }
    }
}

import SwiftUI

/// 用 Blender 离线渲染出来的 Snozzy。
///
/// 图层是 `Blender/render_poses.py` + `render_layers.py` 渲的：共用同一台
/// 相机，所以像素级对齐，运行时按 `legs.json` 里的矩形贴回原位、
/// 再叠上几个廉价的 2D 变换。
///
/// 为什么不做形变：这是 3D 渲出来的位图，没有骨骼可驱动。呼吸、点头、
/// 摇摆这些小幅动作用整体的缩放/位移/旋转就能骗过眼睛；而换腿、抬手这类
/// 大动作靠**换一张渲染图**，不靠变形——这也是当初选 3D 当生产工具的理由。
///
/// 上下半身是分开画的：缝线以上所有姿势共用一张，以下每一帧一小块。
/// 这样换腿的过渡帧才存得下（五十来张整幅图要 200 MB 内存），
/// 顺带也让戴耳机时腿照样换姿势——原来戴耳机是盖一整张，腿是冻住的。
struct RenderedSnozzy: View, Equatable {
    let assets: SceneAssets
    let palette: Palette
    let pose: Pose
    /// 表情。由 `FaceRig` 从时间和状态推出来。
    let face: FaceExpression
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
            // 换腿期间每换一帧才重画。原来这里比的是淡入进度（连续量），
            // 于是整个过渡期间每帧都重画；现在帧是离散的，重画次数少得多
            && LegPose.at(a.t, in: a.assets.legs) == LegPose.at(b.t, in: b.assets.legs)
            // 眨眼是逐帧变化的，挡掉就不会眨了
            && abs(a.pose.blink - b.pose.blink) < 0.02
            // 表情也是逐帧变的。这里挡掉的话节拍就演不出来——
            // 逐字段比太啰嗦，`FaceExpression` 直接是 Equatable
            && a.face == b.face
    }

    var body: some View {
        GeometryReader { geo in
            let w = geo.size.width, h = geo.size.height
            ZStack(alignment: .topLeading) {
                character(w: w, h: h)
                    // 和房间共用一套时段染色，否则她永远是正午的亮度
                    .colorMultiply(PaintedRoom.ambient(palette).color)
                // 眨眼、视线、眼型、嘴。贴片和底图共用同一台相机，直接盖上即可。
                FaceOverlay(assets: assets, pose: pose, face: face,
                            palette: palette, width: w, height: h)
            }
            .frame(width: w, height: h, alignment: .topLeading)
            // 呼吸、摇摆、点头对**整个人**一起做。分头做的话上下半身、
            // 面部贴片会各自错开一点，接缝处就露出来了。
            // 支点放在腰部（图的下方），放中心的话头会跟着上下浮，像在颠。
            .scaleEffect(1 + pose.breath * 0.006, anchor: .bottom)
            .rotationEffect(.degrees(pose.bodySway * 0.8), anchor: .bottom)
            .offset(x: 0, y: pose.headBob * h * 0.008)
            .allowsHitTesting(false)
        }
    }

    /// 上半身 + 当前那一张腿。素材不全时退回整幅的保底图。
    @ViewBuilder
    private func character(w: CGFloat, h: CGFloat) -> some View {
        // 没有戴耳机的上半身时用常态的那张——否则播放时整个人会消失
        let torso = (headphones ? assets.snozzyBodyPhones : nil) ?? assets.snozzyBody
        if let torso, let legs = legImage {
            ZStack(alignment: .topLeading) {
                sprite(torso, in: assets.legs.bodyRect, w: w, h: h)
                sprite(legs, in: assets.legs.rect, w: w, h: h)
            }
        } else if let idle = assets.snozzyIdle {
            sprite(idle, in: fullCanvas, w: w, h: h)
        }
    }

    /// 此刻该画的那一张腿。
    private var legImage: NSImage? {
        switch LegPose.at(t, in: assets.legs) {
        case .still(let i):
            return assets.legStills.indices.contains(i) ? assets.legStills[i] : nil
        case .moving(let i, let step):
            guard assets.legMoves.indices.contains(i),
                  assets.legMoves[i].indices.contains(step) else { return nil }
            return assets.legMoves[i][step]
        }
    }

    private var fullCanvas: LegManifest.Rect {
        LegManifest.Rect(x: 0, y: 0,
                         w: Int(assets.legs.canvasW), h: Int(assets.legs.canvasH))
    }

    /// 把画布坐标里的一块贴到视图上。
    ///
    /// x / y 的缩放分开算：素材和窗口都是 3:2，正常情况下两者相等，
    /// 但窗口比例万一不是 3:2，满幅铺就得各自拉伸——用同一个比例会错位。
    /// 位置必须由传进来的 `w`/`h` 算，**不能再套一层 `GeometryReader`**：
    /// 它嵌在 ZStack 里拿到的提议尺寸不等于最终布局尺寸。
    private func sprite(_ image: NSImage, in rect: LegManifest.Rect,
                        w: CGFloat, h: CGFloat) -> some View {
        let sx = w / assets.legs.canvasW, sy = h / assets.legs.canvasH
        return Image(nsImage: image)
            .resizable()
            .interpolation(.high)
            .frame(width: CGFloat(rect.w) * sx, height: CGFloat(rect.h) * sy)
            .offset(x: CGFloat(rect.x) * sx, y: CGFloat(rect.y) * sy)
    }
}

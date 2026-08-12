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
    /// 托腮动作的档位。nil 是常态，-1 是 2× 常态起点，0..<frames 是抬手
    /// 中间姿势，frames 是终态。
    /// 两端之间播真实的 Blender 骨骼姿势，不做位图交叉淡入。
    var chinFrame: Int? = nil
    /// 当前时间。腿部姿势由它推导。
    let t: Double

    /// 角色图和房间、桌子是同一台相机渲出来的，三层像素级对齐，
    /// 所以直接满幅绘制。构图在 `Scripts/blocking.py` 里定，不在这里调。

    static func == (a: RenderedSnozzy, b: RenderedSnozzy) -> Bool {
        a.headphones == b.headphones && a.palette == b.palette
            && a.chinFrame == b.chinFrame
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
                // 托腮期间贴片跟着档位换：抬手那几帧脸在转，淡出；
                // 终态换成在终态姿势上渲的 facechin 贴片（头歪、手贴脸）。
                let overlay = faceOverlayState
                FaceOverlay(assets: assets, pose: pose, face: face,
                            palette: palette,
                            highResolution: assets.hasHighResolutionFace,
                            chinFrame: overlay.frame, strength: overlay.strength,
                            width: w, height: h)
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
    ///
    /// **先画腿再盖上半身**，别反过来。常态那两块本来不重叠（上半身 0…600、
    /// 腿 600…1024），谁先谁后都一样；但近景那张上半身要切到第 611 行
    /// （托腮的袖子伸得更低，见 `LegManifest.chinSeam`），和腿重叠十来行，
    /// 反过来画就会让腿把袖子削掉。重叠的那几行落在桌子完全不透明的一段里，
    /// 盖住的是谁根本看不见。
    @ViewBuilder
    private func character(w: CGFloat, h: CGFloat) -> some View {
        if let (torso, rect) = torsoLayer, let legs = legImage {
            ZStack(alignment: .topLeading) {
                sprite(legs, in: assets.legs.rect, w: w, h: h)
                sprite(torso, in: rect, w: w, h: h)
            }
        } else if let idle = assets.snozzyIdle {
            sprite(idle, in: fullCanvas, w: w, h: h)
        }
    }

    /// 面部贴片此刻该用哪一套、以多大强度贴。
    ///
    /// 每个骨骼姿态都选对应的 facechin set；不再淡出常态贴片再硬切终态。
    /// 缺任何一项时返回常态贴片，并由 `torsoLayer` 保持常态姿势。
    private var faceOverlayState: (frame: Int?, strength: Double) {
        guard assets.hasCompleteChinMotion, let frame = chinFrame, frame >= 0,
              assets.faceChinFrames.indices.contains(frame) else {
            return (nil, 1)
        }
        return (frame, 1)
    }

    /// 该画哪一张上半身，以及它贴在哪。
    ///
    /// 四种组合（托腮×耳机）逐级回退，缺哪一张都不会让人消失：
    /// 托腮戴耳机 → 托腮 → 常态戴耳机 → 常态。少了托腮那两张就只推镜头
    /// 不换姿势，功能仍然可用——和素材缺失时回落到程序化房间同一个原则。
    private var torsoLayer: (NSImage, LegManifest.Rect)? {
        // `nil` is the ordinary scene state.  It must never inherit the 2×
        // close-up base merely because the optional chin bundle is loaded;
        // only an explicit close-up frame selects close-up assets.  `-1` is
        // the published 2× base at the start of the close-up timeline.
        if assets.hasCompleteChinMotion, let frame = chinFrame {
            if frame >= 0 && assets.chinBodyFrames.indices.contains(frame) {
                let frames = headphones ? assets.chinBodyPhoneFrames : assets.chinBodyFrames
                if frames.indices.contains(frame) {
                    return (frames[frame], assets.chin.bodyRect)
                }
            }
            if frame >= assets.chin.frames,
               assets.chin.pixelScale > 1,
               let img = (headphones ? assets.chinBodyPhoneFinal : nil)
                ?? assets.chinBodyFinal {
                return (img, assets.chin.bodyRect)
            }
            if frame < 0,
               let img = (headphones ? assets.chinBodyPhoneBase : nil)
                ?? assets.chinBodyBase {
                return (img, assets.chin.bodyRect)
            }
        }
        // Incomplete motion assets deliberately do not fall back to the old
        // 1× terminal torso: keep the normal body and both keyboard hands and
        // only let the camera animation run.
        guard let img = (headphones ? assets.snozzyBodyPhones : nil)
            ?? assets.snozzyBody else { return nil }
        return (img, assets.legs.bodyRect)
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

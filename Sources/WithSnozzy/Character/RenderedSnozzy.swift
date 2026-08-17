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
    /// 伸懒腰 / 喝咖啡 / 玩手机此刻播到哪一档，语义和 `chinFrame` 一样
    /// （再往上是停留那一列）。几条动作互斥，由 `SceneAssets.activeAction`
    /// 解析成"哪一套素材的第几帧"。
    var action: (kind: ActionKind, frame: Int)? = nil
    /// 当前时间。腿部姿势由它推导。
    let t: Double
    /// Optional explicit glow phase used by deterministic snapshot probes.
    /// Production leaves this nil and derives the phase from the shared
    /// timeline's `t`; probes can change only the glow while keeping the
    /// character pose, leg frame, and face fixed.
    let headphonePhase: Int?
    /// Snapshot-only fault injection. Production leaves both values at their
    /// defaults; negative probes still exercise this real production view.
    let headphoneMaskOverride: HeadphoneMask?
    let headphoneGlowAlphaScale: Double
    /// Diagnostic-only paused leak. It deliberately keeps `headphones == false`
    /// (and therefore the ordinary body) while allowing the same mask to draw.
    let headphoneGlowPausedLeak: Bool

    init(assets: SceneAssets, palette: Palette, pose: Pose,
         face: FaceExpression, headphones: Bool, chinFrame: Int? = nil,
         action: (kind: ActionKind, frame: Int)? = nil,
         t: Double, headphonePhase: Int? = nil,
         headphoneMaskOverride: HeadphoneMask? = nil,
         headphoneGlowAlphaScale: Double = 1,
         headphoneGlowPausedLeak: Bool = false) {
        self.assets = assets
        self.palette = palette
        self.pose = pose
        self.face = face
        self.headphones = headphones
        self.chinFrame = chinFrame
        self.action = action
        self.t = t
        self.headphonePhase = headphonePhase
        self.headphoneMaskOverride = headphoneMaskOverride
        self.headphoneGlowAlphaScale = headphoneGlowAlphaScale
        self.headphoneGlowPausedLeak = headphoneGlowPausedLeak
    }

    /// 角色图和房间、桌子是同一台相机渲出来的，三层像素级对齐，
    /// 所以直接满幅绘制。构图在 `Scripts/blocking.py` 里定，不在这里调。

    static func == (a: RenderedSnozzy, b: RenderedSnozzy) -> Bool {
        a.headphones == b.headphones && a.palette == b.palette
            && a.chinFrame == b.chinFrame
            && a.action?.kind == b.action?.kind
            && a.action?.frame == b.action?.frame
            // The glow is deliberately phase-quantized.  Comparing this
            // discrete state keeps the 3.2-second breath alive through the
            // parent `.equatable()` gate without redrawing for every wall-clock
            // tick.
            && a.headphoneGlowPhase == b.headphoneGlowPhase
            && a.headphoneMaskOverride == b.headphoneMaskOverride
            && a.headphoneGlowAlphaScale == b.headphoneGlowAlphaScale
            && a.headphoneGlowPausedLeak == b.headphoneGlowPausedLeak
            && abs(a.pose.breath - b.pose.breath) < 0.01
            && abs(a.pose.bodySway - b.pose.bodySway) < 0.01
            && abs(a.pose.headBob - b.pose.headBob) < 0.01
            // 打瞌睡那一下的位移比呼吸大得多，容差也得小一档，
            // 否则整段下沉会被这道相等判据挡掉、只在惊醒时跳一下。
            && abs(a.pose.doze - b.pose.doze) < 0.004
            && abs(a.pose.wake - b.pose.wake) < 0.004
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
                // 长动作期间换成那一档专用的贴片（头在转，矩形跟着脸走）。
                if let mask = headphoneGlowMask,
                   headphones || headphoneGlowPausedLeak {
                    HeadphoneGlow(mask: mask, palette: palette,
                                  phase: headphoneGlowPhase, width: w, height: h,
                                  alphaScale: headphoneGlowAlphaScale)
                }
                FaceOverlay(assets: assets, pose: pose, face: face,
                            palette: palette,
                            highResolution: assets.hasHighResolutionFace,
                            actionFace: actionFace,
                            width: w, height: h)
            }
            .frame(width: w, height: h, alignment: .topLeading)
            // 呼吸、摇摆、点头对**整个人**一起做。分头做的话上下半身、
            // 面部贴片会各自错开一点，接缝处就露出来了。
            // 支点放在腰部（图的下方），放中心的话头会跟着上下浮，像在颠。
            .scaleEffect(1 + pose.breath * 0.006, anchor: .bottom)
            // 打瞌睡时整个人往前倾一点：只往下挪的话像被压扁，
            // 加一点前倾才读得出"要栽下去了"。惊醒那一下往回带。
            .rotationEffect(.degrees(pose.bodySway * 0.8
                                     + pose.doze * 1.6 - pose.wake * 0.7),
                            anchor: .bottom)
            // 点头下沉的幅度比呼吸大一个量级——它是这一段唯一在动的东西，
            // 小了根本看不出来（1024 高的画布上 doze=1 大约是 12 像素）。
            .offset(x: 0, y: pose.headBob * h * 0.008 + pose.doze * h * 0.012)
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

    /// 面部贴片此刻该用哪一套。
    ///
    /// 长动作的每一档都有自己那一套贴片（头在转，矩形跟着脸走），
    /// 所以这里直接把解析好的那一套交给 `FaceOverlay`——它不需要知道
    /// 现在播的是托腮还是伸懒腰。缺任何一项就退回常态贴片，
    /// 同时 `torsoLayer` 也会保持常态姿势，两者是同一个 guard 的结果。
    private var actionFace: (manifest: FaceManifest, images: [String: NSImage])? {
        guard let (set, frame) = assets.activeAction(chin: chinFrame,
                                                     action: action),
              frame >= 0,
              set.faceSets.indices.contains(frame),
              set.faceImages.indices.contains(frame) else { return nil }
        return (set.faceSets[frame], set.faceImages[frame])
    }

    /// Playback is the only source of this feedback.  A paused scene returns
    /// -1 so it cannot inherit a phase from the last playing frame.
    private var headphoneGlowPhase: Int {
        headphones || headphoneGlowPausedLeak
            ? (headphonePhase ?? HeadphoneGlow.phase(at: t)) : -1
    }

    /// Select the mask belonging to the exact torso image currently on screen.
    /// The 2× chin base/intermediate/final assets have independent masks because
    /// the head is intentionally tilted through the action.
    private var headphoneGlowMask: HeadphoneMask? {
        guard headphones || headphoneGlowPausedLeak else { return nil }
        if let headphoneMaskOverride { return headphoneMaskOverride }
        guard assets.hasCompleteHeadphoneMasks else { return nil }
        // 长动作里头会仰起来低下去，耳机跟着走，而 mask 只按托腮那条动作
        // 派生过。拿错位的 mask 去发光比不发光难看得多，所以这几段直接
        // 不发光——要补的话是给 `headphone_masks.py` 加对应动作的派生，
        // 不是在这里凑。
        if action != nil { return nil }
        if let frame = chinFrame {
            if frame < 0 { return assets.chinHeadphoneBaseMask }
            guard assets.chinHeadphoneMasks.indices.contains(frame) else { return nil }
            return assets.chinHeadphoneMasks[frame]
        }
        return assets.headphoneMask
    }

    /// 该画哪一张上半身，以及它贴在哪。
    ///
    /// 四种组合（托腮×耳机）逐级回退，缺哪一张都不会让人消失：
    /// 托腮戴耳机 → 托腮 → 常态戴耳机 → 常态。少了托腮那两张就只推镜头
    /// 不换姿势，功能仍然可用——和素材缺失时回落到程序化房间同一个原则。
    private var torsoLayer: (NSImage, LegManifest.Rect)? {
        // `nil` is the ordinary scene state.  It must never inherit a 2× action
        // base merely because an optional motion bundle is loaded; only an
        // explicit action frame selects those assets.  `-1` is the published
        // 2× base at the start of that action's timeline.
        if let (set, frame) = assets.activeAction(chin: chinFrame,
                                                  action: action),
           let image = set.body(frame, headphones: headphones) {
            return (image, set.manifest.bodyRect)
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

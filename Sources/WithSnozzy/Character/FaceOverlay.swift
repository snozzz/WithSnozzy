import SwiftUI

/// 面部贴片的位置表，由 `Scripts/face_patches.py` 生成。
struct FaceManifest: Codable {
    struct Patch: Codable { var x, y, w, h: Int }
    var canvas: [Int] = [1536, 1024]
    var patches: [String: Patch] = [:]
    /// 每块贴片属于哪个通道（`eye` / `mouth`）。切图脚本保证**跨通道不重叠**，
    /// 所以两个通道可以独立叠加；同通道内部靠下面的叠放顺序分工。
    var channels: [String: String] = [:]
}

/// 盖在渲染角色脸上的小贴片。
///
/// 一个不眨眼的角色看起来是死的——这是"呆"最主要的来源，比动作幅度重要得多。
/// 但整张重渲太贵：眨一次眼改动的像素不到画面的千分之一。
/// 所以只渲变化的那一小块。五套腿部姿势的上半身完全一样（同一台相机、
/// 同一个上半身姿势），因此同一块贴片对所有姿势都成立，不用按姿势各出一套。
///
/// ## 叠放顺序不能改
///
/// 眼通道的三层实测是**套娃**关系：`look`(686-757, 351-382) 完全落在
/// 眼型里，眼型又落在 `blink` 里。贴片存的是那块 bbox 的全部像素，
/// 所以后画的会把先画的抹掉——顺序必须是
/// **视线 → 眼型 → 眨眼**，眼皮在眼球前面。
///
/// 原来的顺序是反的（`look_*` 画在 `blink_*` 之后），而 `lookX` 常年在 ±0.9
/// 之间漂，于是**她一看向侧面，眨眼就被抹掉一半**——眨眼是"活着"最主要的
/// 信号，这个 bug 白白吃掉了它。
struct FaceOverlay: View {
    let assets: SceneAssets
    let pose: Pose
    let face: FaceExpression
    let palette: Palette
    /// 画布尺寸由调用方传进来。
    ///
    /// 不要在这里再套一层 `GeometryReader`：它嵌在 ZStack 里拿到的提议尺寸
    /// 并不等于最终布局尺寸，贴片会算到错的位置上（表现是完全看不见）。
    let width: CGFloat
    let height: CGFloat

    var body: some View {
        let scale = width / CGFloat(assets.face.canvas.first ?? 1536)
        let blink = clamp(pose.blink * face.blinkScale, 0, 1)
        return ZStack(alignment: .topLeading) {
            // ── 1. 视线（最底层）──
            let lw = face.lookWeight
            patch("look_left", opacity: max(0, -face.lookX) * lw, scale: scale)
            patch("look_right", opacity: max(0, face.lookX) * lw, scale: scale)
            patch("look_down", opacity: max(0, -face.lookY) * 0.9 * lw, scale: scale)
            patch("look_up", opacity: max(0, face.lookY) * 0.9 * lw, scale: scale)

            // ── 2. 眼型（压在视线上）──
            patch("eye_soft", opacity: face.eyeSoft, scale: scale)
            patch("eye_sad", opacity: face.eyeSad, scale: scale)
            patch("eye_wide", opacity: face.eyeWide, scale: scale)
            patch("eye_smile", opacity: face.eyeSmile, scale: scale)

            // ── 3. 眨眼（最上层，眼皮在最前面）──
            // 半闭和全闭两级，靠 blink 的连续值在两者之间过渡——
            // 只有全闭一级的话，快速眨眼会变成"闪一下"。
            patch("blink_half", opacity: ramp(blink, 0.10, 0.55), scale: scale)
            patch("blink_shut", opacity: ramp(blink, 0.45, 0.85), scale: scale)

            // ── 嘴（独立通道，和眼那一块不相交）──
            patch("smile", opacity: face.mouthSmile, scale: scale)
            patch("mouth_o", opacity: face.mouthO, scale: scale)
            patch("mouth_open", opacity: face.mouthOpen, scale: scale)
        }
        .frame(width: width, height: height, alignment: .topLeading)
        .colorMultiply(PaintedRoom.ambient(palette).color)
        .allowsHitTesting(false)
    }

    /// 把 0…1 的值映射到 lo…hi 这一段上，用来给两级贴片分工。
    private func ramp(_ v: Double, _ lo: Double, _ hi: Double) -> Double {
        clamp((v - lo) / max(hi - lo, 0.0001), 0, 1)
    }

    @ViewBuilder
    private func patch(_ name: String, opacity: Double, scale: CGFloat) -> some View {
        if opacity > 0.004, let image = assets.facePatches[name],
           let rect = assets.face.patches[name] {
            Image(nsImage: image)
                .resizable()
                .interpolation(.high)
                .frame(width: CGFloat(rect.w) * scale, height: CGFloat(rect.h) * scale)
                .offset(x: CGFloat(rect.x) * scale, y: CGFloat(rect.y) * scale)
                .opacity(opacity)
        }
    }
}

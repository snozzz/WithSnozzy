import SwiftUI

/// 面部贴片的位置表，由 `Scripts/face_patches.py` 生成。
struct FaceManifest: Codable {
    struct Patch: Codable { var x, y, w, h: Int }
    var canvas: [Int] = [1536, 1024]
    var patches: [String: Patch] = [:]
}

/// 盖在渲染角色脸上的小贴片。
///
/// 一个不眨眼的角色看起来是死的——这是"呆"最主要的来源，比动作幅度重要得多。
/// 但整张重渲太贵：眨一次眼改动的像素不到画面的千分之一。
///
/// 所以只渲变化的那一小块。五套腿部姿势的上半身完全一样（同一台相机、
/// 同一个上半身姿势），因此同一块贴片对所有姿势都成立，不用按姿势各出一套。
struct FaceOverlay: View {
    let assets: SceneAssets
    let pose: Pose
    let palette: Palette
    /// 画布尺寸由调用方传进来。
    ///
    /// 不要在这里再套一层 `GeometryReader`：它嵌在 ZStack 里拿到的提议尺寸
    /// 并不等于最终布局尺寸，贴片会算到错的位置上（表现是完全看不见）。
    let width: CGFloat
    let height: CGFloat

    var body: some View {
        let scale = width / CGFloat(assets.face.canvas.first ?? 1536)
        return ZStack(alignment: .topLeading) {
            // 眨眼。半闭和全闭两级，靠 blink 的连续值在两者之间过渡——
            // 只有全闭一级的话，快速眨眼会变成"闪一下"。
            patch("blink_half", opacity: ramp(pose.blink, 0.10, 0.55), scale: scale)
            patch("blink_shut", opacity: ramp(pose.blink, 0.45, 0.85), scale: scale)
            // 笑眼。心情好的时候压过普通眨眼。
            patch("eye_smile", opacity: pose.happyEyes, scale: scale)
            // 视线。lookX 的正负决定左右，绝对值决定强度。
            patch("look_left", opacity: max(0, -pose.lookX), scale: scale)
            patch("look_right", opacity: max(0, pose.lookX), scale: scale)
            patch("look_down", opacity: max(0, -pose.lookY) * 0.8, scale: scale)
            // 嘴。笑起来嘴角会动，这一点点变化很值。
            patch("smile", opacity: max(0, (pose.smile - 0.35) / 0.65), scale: scale)
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

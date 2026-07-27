import SwiftUI

/// 搭在桌上的小臂与手。
///
/// 这是「她坐在桌前工作」这个印象的关键一笔，而且**不需要换 Live2D 模型**。
///
/// Live2D 只能在画师画好的范围内变形，站姿模型再怎么调参数也变不出"手放在桌上"——
/// 那部分图不存在。但把小臂单独画成一张前景图压在角色之前，
/// 视觉上就补齐了模型缺的那一截，成本只有一张图。
///
/// 图层顺序：桌面物件 → **小臂** → （角色在更后面）
/// 小臂要压在书和乐谱之上，才像是搭在桌面上而不是埋在桌子里。
struct DeskArms: View {
    let assets: SceneAssets
    let palette: Palette
    /// 连续时间，驱动书写的细微位移。
    var t: Double = 0
    /// 是否在"写字"。专注计时跑着的时候动，闲着的时候只有呼吸。
    var writing: Bool = false

    var body: some View {
        GeometryReader { geo in
            if let arms = assets.arms {
                let rect = assets.armsFrame(in: geo.size)

                // 书写：手腕附近极小幅度的上下 + 左右移动。
                // 幅度必须很小——画得太夸张会像在擦桌子。
                let speed = writing ? 2.6 : 0.55
                let amp = writing ? 1.0 : 0.25
                let dx = sin(t * speed) * 1.6 * amp
                let dy = sin(t * speed * 1.7 + 0.9) * 0.9 * amp
                // 呼吸带动肩膀，和角色用同一个周期，两者才像同一个人。
                let breathe = sin(t * 2 * .pi / 4.2) * 0.9

                Image(nsImage: arms)
                    .resizable()
                    .interpolation(.high)
                    .frame(width: rect.width, height: rect.height)
                    .offset(x: rect.minX + dx, y: rect.minY + dy + breathe)
                    .colorMultiply(PaintedRoom.ambient(palette).color)
            }
        }
        .allowsHitTesting(false)
        .ignoresSafeArea()
    }
}

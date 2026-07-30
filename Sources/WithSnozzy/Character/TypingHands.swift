import SwiftUI

/// 敲键盘的手。**画在桌面层之上**。
///
/// 桌面层是盖在角色之上的（不然桌子挡不住她的下半身），所以手伸到键盘上
/// 会被桌子吃掉。手必须再单独画一层。素材也不能直接从角色图上裁——
/// 那一块里除了小臂还有她的大腿和裙子，一起贴上去就是一片裙子糊在桌面上。
/// `Blender/render_hands.py` 按骨骼权重只渲手臂，出来的 alpha 正好是这一层。
///
/// 手是**一直放在键盘上**的，工作时才动起来。让手时有时无就得给手臂也做一套
/// 过渡帧（手臂在缝线以上，改姿势会连带换掉共用的上半身那张图），
/// 代价比这个功能本身大得多；而"手搭在键盘上"本来也是坐在电脑前的常态。
struct TypingHands: View, Equatable {
    let assets: SceneAssets
    let palette: Palette
    /// 此刻该画第几帧。
    let frame: Int

    static func == (a: TypingHands, b: TypingHands) -> Bool {
        a.frame == b.frame && a.palette == b.palette
    }

    var body: some View {
        GeometryReader { geo in
            let m = assets.hands
            if assets.handFrames.indices.contains(frame),
               m.isUsable, let w = m.canvas.first, w > 0,
               m.canvas.count > 1, m.canvas[1] > 0 {
                let sx = geo.size.width / CGFloat(w)
                let sy = geo.size.height / CGFloat(m.canvas[1])
                let r = m.rect
                Image(nsImage: assets.handFrames[frame])
                    .resizable()
                    .interpolation(.high)
                    .frame(width: CGFloat(r.w) * sx, height: CGFloat(r.h) * sy)
                    .offset(x: CGFloat(r.x) * sx, y: CGFloat(r.y) * sy)
                    // 和房间共用一套时段染色，否则手永远是正午的亮度
                    .colorMultiply(PaintedRoom.ambient(palette).color)
            }
        }
        .allowsHitTesting(false)
    }
}

/// 什么时候在打字、该播第几帧。
///
/// **无状态**：给定时刻算出同一个结果。和 `LegPose`、`FaceRig` 同一个原则。
enum TypingRig {

    /// 每一帧停留多久。
    ///
    /// 和 `LegPose.frameTime` 同一条约束：必须**比 app 的动画 tick 长**
    /// （空闲档 1/15 秒），相等都不行，否则一次卡顿就跳帧。
    /// 1/8 秒是四帧一轮 0.5 秒，也就是每秒四次击键——放松打字就是这个速度。
    static let frameTime: Double = 1.0 / 8.0

    /// 一段"打字"持续多久，以及每档掷一次要不要打。
    static let slot: Double = 9.0
    /// 不在专注阶段时，每档开打的概率（百分数）。
    /// 她本来就坐在电脑前，偶尔敲两下比一直不动像活人。
    static let idleChance: UInt64 = 30
    /// 专注阶段的概率。工作时大部分时间在敲。
    static let workChance: UInt64 = 78

    /// 此刻画第几帧。0 号是"手搭在键上不动"。
    static func frame(at t: Double, working: Bool, frames: Int) -> Int {
        guard frames > 1 else { return 0 }
        let slotIndex = Int64(floor(t / slot))
        guard hash(slotIndex) % 100 < (working ? workChance : idleChance) else { return 0 }
        // 每档只敲前面一段，剩下的时间手停着——一直敲不像人，像打字机
        let into = t - Double(slotIndex) * slot
        let burst = slot * (working ? 0.72 : 0.38)
        guard into < burst else { return 0 }
        return 1 + Int(into / frameTime) % (frames - 1)
    }

    /// splitmix64。换个盐，别和腿、表情的档位抽签相关。
    private static func hash(_ n: Int64) -> UInt64 {
        var x = UInt64(bitPattern: n) &* 0x9E37_79B9_7F4A_7C15 ^ 0x7F4A_7C15_9E37_79B9
        x ^= x >> 30; x &*= 0xBF58_476D_1CE4_E5B9
        x ^= x >> 27; x &*= 0x94D0_49BB_1331_11EB
        x ^= x >> 31
        return x
    }
}

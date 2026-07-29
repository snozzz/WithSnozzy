import Foundation

/// 坐姿的腿部变化。
///
/// 真人坐久了腿总会换姿势，而且是不定时的、换完保持一阵。这一层就负责
/// 决定「此刻是哪一套腿」以及「正在从哪一套过渡过来」。
///
/// **无状态**：给定时刻算出同一个结果。和 `SnozzyRig` 同一个原则——
/// 窗口被遮挡时时间线是暂停的，一旦保存了状态，恢复时就会跳变。
enum LegPose {
    /// 图层顺序要和 `SceneAssets.legPoses` 一致。
    static let count = 5

    /// 一个"档位"持续多久。**不是**换姿势的周期：每档先掷一次
    /// 「这一档要不要换」，不换就沿用上一次的姿势。于是实际间隔服从
    /// 几何分布，平均两分多钟且长短不一——真人坐着就是这个节奏。
    ///
    /// 直接每档都换的话平均一分钟一次，而且间隔全是档长的整数倍，很机械。
    static let slot: Double = 40
    /// 每档发生变化的概率（百分数）。
    static let changeChance: UInt64 = 32
    /// 交叉淡入的时长。慢一点才像"挪了一下"而不是"闪了一下"。
    static let fade: Double = 1.1

    /// 返回 (上一档的姿势, 当前档的姿势, 0…1 的过渡量)。
    static func at(_ t: Double) -> (from: Int, to: Int, blend: Double) {
        let slotIndex = floor(t / slot)
        let into = t - slotIndex * slot
        let cur = pick(Int64(slotIndex))
        let prev = pick(Int64(slotIndex) - 1)
        let blend = into >= fade ? 1.0 : smoothstep(into / fade)
        return (prev, cur, blend)
    }

    /// 由档位序号确定性地抽一套姿势。
    private static func pick(_ n: Int64) -> Int {
        // 常数超过 Int64 上限，所以先转成无符号再乘
        var x = UInt64(bitPattern: n) &* 0x9E37_79B9_7F4A_7C15
        x ^= x >> 30; x &*= 0xBF58_476D_1CE4_E5B9
        x ^= x >> 27; x &*= 0x94D0_49BB_1331_11EB
        x ^= x >> 31
        return Int(x % UInt64(count))
    }
}

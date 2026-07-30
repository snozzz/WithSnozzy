import Foundation

/// 坐姿的腿部变化，以及换姿势时的过渡动画。
///
/// 真人坐久了腿总会换姿势，而且是不定时的、换完保持一阵。这一层负责
/// 决定「此刻该画哪一张腿」。
///
/// **不做交叉淡入。** 原来是把两套姿势的成品图按互补不透明度溶解过去，
/// 看起来是"虚化"而不是"挪腿"——半透明期间两条腿同时出现在两个位置。
/// 位图没有骨骼可驱动，想真的动就得把中间姿势也渲出来：
/// `Blender/render_poses.py` 插值渲，`Scripts/leg_frames.py` 切成小块。
///
/// **中枢结构**：所有过渡都经过 `hub`（并膝那一套），于是 N 套姿势只要
/// N−1 段序列而不是 N×(N−1) 段。A → B 播成「A 收回中枢」倒放接
/// 「中枢摆到 B」正放——省素材，而且真人换腿也确实是先收回再摆出去。
///
/// **无状态**：给定时刻算出同一个结果，什么都不缓存。和 `SnozzyRig`
/// 同一个原则——窗口被遮挡时时间线是暂停的，一旦保存了状态，
/// 恢复时就会跳变。
enum LegPose {
    /// 中枢姿势的下标。`Scripts/leg_frames.py` 把它排在 `poses` 的 0 位。
    static let hub = 0

    /// 一个"档位"持续多久。**不是**换姿势的周期：每档先掷一次
    /// 「这一档要不要换」，不换就沿用上一档的姿势。
    static let slot: Double = 40
    /// 每档发生变化的概率（百分数）。
    static let changeChance: UInt64 = 32
    /// 每一张过渡帧停留多久。
    ///
    /// **必须比 `AppState.frameInterval` 的空闲档（1/15 秒）长**，不是等于。
    /// 这一层是被 `TimelineView` 按那个间隔采样的：
    ///
    /// - 设成 0.055（≈18fps）比 tick 短，12 张里只显示 10 张，而且丢得不均匀
    /// - 设成 1/15 **正好等于** tick，理想情况下不重不漏，但一点余量都没有——
    ///   模拟 5% 的掉帧卡顿，平均每次换腿要跳掉 0.27 帧，最坏一次跨两帧
    /// - 设成 1/12 比 tick 长四分之一，每帧稳定占 1~2 个 tick，
    ///   同样的卡顿下**一帧不漏**
    ///
    /// 24fps（播放中）比这里密，更不会漏。省电档 10fps 比这里疏，会丢一半，
    /// 那是那一档本来就认了的代价（"动作略有台阶感"）。
    static let frameTime: Double = 1.0 / 12.0

    /// 此刻该画哪一张腿图。
    enum Frame: Equatable {
        /// 某一套姿势的静止腿图
        case still(Int)
        /// 中枢与 `pose` 之间的第 `step` 张中间帧，`0` 最靠中枢
        case moving(pose: Int, step: Int)
    }

    /// 有几套姿势、每段过渡几帧都由素材决定，所以清单要传进来。
    static func at(_ t: Double, in m: LegManifest) -> Frame {
        let count = m.poses.count
        guard count > 1 else { return .still(0) }

        let slotIndex = Int64(floor(t / slot))
        let into = t - Double(slotIndex) * slot
        let cur = pick(slotIndex, count)
        let prev = pick(slotIndex - 1, count)
        if cur == prev { return .still(cur) }

        // 过渡路径是 prev → 中枢 → cur。用「离中枢多远」表示位置：
        // 中枢在 0，姿势本身在 reach。两支的长度相加就是总帧数。
        let reach = m.steps + 1
        let back = prev == hub ? 0 : reach     // 收回中枢这一段
        let fwd = cur == hub ? 0 : reach       // 再摆出去这一段
        let n = min(Int(into / frameTime), back + fwd)
        let pos = n - back                     // 负数还在 prev 支上

        if pos < 0 { return frame(on: prev, from: -pos, reach: reach) }
        if pos == 0 { return .still(hub) }
        return frame(on: cur, from: pos, reach: reach)
    }

    /// 某一支上离中枢 `from` 远的那一帧。到头了就是那套姿势的成品图。
    private static func frame(on pose: Int, from: Int, reach: Int) -> Frame {
        from >= reach ? .still(pose) : .moving(pose: pose, step: from - 1)
    }

    /// 第 `n` 档是哪套姿势。
    ///
    /// 往回找最近一次「掷中了要换」的档，那一档定的姿势沿用到现在。于是
    /// 实际间隔服从几何分布，平均两分多钟且长短不一——真人坐着就是这个
    /// 节奏。每档都换的话平均一分钟一次，而且间隔全是档长的整数倍，很机械。
    ///
    /// 回溯有上限：32% 的概率下连续 24 档都不换是 4×10⁻⁵，
    /// 到顶就直接用当档的骰子，看不出来。上限也保证这里不会退化成
    /// 沿时间轴无限回溯——`at` 每帧都要调它两次。
    private static func pick(_ n: Int64, _ count: Int) -> Int {
        var slot = n
        var back = 0
        while back < 24 && hash(slot) % 100 >= changeChance {
            slot -= 1
            back += 1
        }
        // 换一个盐再抽姿势：和"要不要换"共用一个哈希的话两者是相关的
        return Int(hash(slot ^ 0x2545_F491_4F6C_DD1D) % UInt64(count))
    }

    /// splitmix64。要的是"同一个 n 永远给同一个数"，不是密码学强度。
    private static func hash(_ n: Int64) -> UInt64 {
        // 常数超过 Int64 上限，所以先转成无符号再乘
        var x = UInt64(bitPattern: n) &* 0x9E37_79B9_7F4A_7C15
        x ^= x >> 30; x &*= 0xBF58_476D_1CE4_E5B9
        x ^= x >> 27; x &*= 0x94D0_49BB_1331_11EB
        x ^= x >> 31
        return x
    }
}

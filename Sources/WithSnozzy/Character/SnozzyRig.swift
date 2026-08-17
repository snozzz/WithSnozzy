import Foundation

/// Snozzy 在某一瞬间的完整姿态。
///
/// 这一层刻意和绘制完全分开：`SnozzyRig` 只负责「现在她是什么状态」，
/// `SnozzyRenderer` 只负责「这个状态画成什么样」。
/// 以后要是换成 Live2D 或 VRM 模型，替换的是渲染器，这套姿态参数原样保留。
struct Pose {
    /// 呼吸，0…1。影响肩线起伏和整体缩放。
    var breath = 0.0
    /// 眨眼，0 = 完全睁开，1 = 完全闭合。
    var blink = 0.0
    /// 头部左右倾斜，弧度。
    var headTilt = 0.0
    /// 跟着节拍的上下点头，归一化位移（正数向下）。
    var headBob = 0.0
    /// 身体随节奏的左右摇摆，−1…1。
    var bodySway = 0.0
    /// 侧发与呆毛的摆动，−1…1。比身体慢半拍，才有"跟随"的感觉。
    var hairSway = 0.0
    /// 视线偏移，−1…1。
    var lookX = 0.0
    var lookY = 0.0
    /// 嘴角上扬程度，0…1。
    var smile = 0.3
    /// 脸红浓度，0…1。
    var blush = 0.35
    /// 眼睛闭起来微笑（>0 时画成弯月形）。
    var happyEyes = 0.0
    /// 困倦程度 0…1。深夜且没在放音乐时会慢慢升上来。
    var drowsy = 0.0
    /// 正在往下点的那一下有多沉，0…1。见 `DrowsyRig`。
    var doze = 0.0
    /// 猛地惊醒那一下，0…1。只有点到最沉之后的半秒里非零。
    var wake = 0.0
    /// 「zzz」的循环相位 0…1，只在 drowsy 高时用得上。
    var zzz = 0.0
    /// 底鼓脉冲的原始值，耳机上的指示灯拿它闪。
    var beatPulse = 0.0
}

/// 打瞌睡：慢慢往下沉，沉到最低猛地惊醒抬回来。
///
/// **和"闭着眼"是两件事。** 原来困倦只做了一件事——把眨眼量拉到底
/// （`blink = max(blink, sleepy)`），于是深夜她就是一直闭着眼坐着，
/// 读起来是"睡着了"甚至"死机了"，不是"在打瞌睡"。真正读得出打盹的是
/// **那个循环**：头一点一点往下沉、眼皮跟着合上，然后猛地一惊抬起来、
/// 眼睛短暂睁大，过几秒又开始沉。
///
/// 渲染版没有骨骼可驱动（它是位图），所以"点头"只能整个人一起做：
/// 下沉是整幅图往下挪几像素 + 往前倾一点点，和呼吸、摇摆同一个路子
/// （`RenderedSnozzy` 那三行变换）。幅度必须小——大了就成了磕头。
///
/// **无状态**：给定时刻算出同一个结果。表情那一层也读它（同一份公式，
/// 不是各算一遍），所以眼皮和头永远同步。
enum DrowsyRig {
    /// 一轮点头多久。真人打盹大约十来秒一轮。
    static let cycle: Double = 11.0
    /// 一轮里有多少用来往下沉，剩下的是惊醒那一下。
    private static let sinkShare = 0.82

    /// - Returns: `sink` 是这一刻沉了多少（0…1），
    ///   `wake` 是惊醒那一下的强度（只在抬回来的半秒里非零）。
    static func nod(at t: Double, drowsy: Double) -> (sink: Double, wake: Double) {
        let sleepy = clamp(drowsy, 0, 1)
        guard sleepy > 0.05 else { return (0, 0) }
        // 周期本身也慢慢漂，否则十一秒一次准点点头像节拍器。
        let drift = sin(t * 0.037) * 1.7 + sin(t * 0.013) * 2.3
        let phase = ((t + drift).truncatingRemainder(dividingBy: cycle) + cycle)
            .truncatingRemainder(dividingBy: cycle) / cycle
        if phase < sinkShare {
            // 越往后沉得越快：二次曲线比线性更像"撑不住了"。
            let x = phase / sinkShare
            return (sleepy * x * x, 0)
        }
        let x = (phase - sinkShare) / (1 - sinkShare)
        // 抬回来是快的，而且中途有个"睁大眼"的峰。
        return (sleepy * (1 - smoothstep(x)), sleepy * sin(.pi * x))
    }
}

/// 从时间和音乐驱动出姿态。
///
/// 这里所有的随机都是「确定性 + 时间」的：给定同一个时刻算出同一个姿态。
/// 不保存跨帧状态意味着窗口被遮挡后再恢复，动画不会跳变。
struct SnozzyRig {

    /// 眨眼节奏。人类平均 3–5 秒眨一次，太规律会显得呆滞，
    /// 所以用两个不通约的正弦叠出一个伪随机的触发序列。
    private static func blinkPhase(at t: Double) -> Double {
        // 把时间折叠成一个缓慢漂移的周期，落在窗口内就眨一下。
        let drift = sin(t * 0.37) * 0.9 + sin(t * 0.11) * 1.4
        let cycle = (t + drift).truncatingRemainder(dividingBy: 4.4)

        let closeDuration = 0.075
        let openDuration = 0.115
        if cycle < closeDuration {
            return smoothstep(cycle / closeDuration)
        } else if cycle < closeDuration + openDuration {
            return 1 - smoothstep((cycle - closeDuration) / openDuration)
        }
        // 偶尔来一次连续两下的眨眼，这个细节最能让角色"活"起来。
        let second = cycle - 0.42
        if second > 0 && second < closeDuration {
            return smoothstep(second / closeDuration) * 0.85
        } else if second >= closeDuration && second < closeDuration + openDuration {
            return (1 - smoothstep((second - closeDuration) / openDuration)) * 0.85
        }
        return 0
    }

    /// - Parameters:
    ///   - time: 连续时间（秒）。
    ///   - kick: 底鼓脉冲 0…1，来自合成器。
    ///   - playing: 是否在放音乐。不放的时候动作幅度收小，人也会安静下来。
    ///   - mood: 0…1，越高越开心（专注完成、被摸头之类的时候会拉高）。
    ///   - drowsy: 0…1，困倦程度。
    static func pose(time t: Double, kick: Double, playing: Bool,
                     mood: Double = 0.5, drowsy: Double = 0) -> Pose {
        var p = Pose()
        let sleepy = clamp(drowsy, 0, 1)
        p.drowsy = sleepy
        p.beatPulse = kick

        // 呼吸：约 4.2 秒一轮。不放音乐时稍慢，打瞌睡时更慢更深。
        let breathPeriod = (playing ? 4.2 : 5.4) + sleepy * 2.6
        p.breath = (sin(t * 2 * .pi / breathPeriod) + 1) * 0.5

        p.blink = blinkPhase(at: t)

        // 律动：底鼓来一下就点一次头，中间靠慢正弦维持连续的摇摆。
        let groove = playing ? 1.0 : 0.25
        p.headBob = kick * 0.012 * groove + sin(t * 1.6) * 0.0035 * groove
        p.bodySway = sin(t * 0.78) * groove
        p.headTilt = sin(t * 0.52 + 0.6) * 0.045 * groove

        // 头发比身体慢一拍，物理上才说得通。
        p.hairSway = sin(t * 0.78 - 0.85) * groove + kick * 0.35 * groove

        // 视线：长时间缓慢游移，偶尔停在一个方向。
        p.lookX = sin(t * 0.23) * 0.55 + sin(t * 0.07) * 0.35
        p.lookY = sin(t * 0.19 + 1.3) * 0.35

        p.smile = 0.22 + mood * 0.5
        p.blush = 0.28 + mood * 0.25

        // 心情很好的时候会眯起眼睛笑。
        p.happyEyes = mood > 0.82 ? smoothstep((mood - 0.82) / 0.18) : 0

        // ── 打瞌睡 ──
        //
        // 不是简单地"闭眼"，而是一整套：眼睛合上、头往一侧垂、
        // 身体的动作幅度收到几乎为零、呼吸变长。
        // 少了任何一条都会像"她只是闭着眼"，而不是"她睡着了"。
        if sleepy > 0.01 {
            let (sink, wake) = DrowsyRig.nod(at: t, drowsy: sleepy)
            p.doze = sink
            p.wake = wake
            // 眼皮跟着这一轮走，**不是常闭**：沉下去时合上，惊醒那一下睁开。
            // 底噪留一点（sleepy * 0.25），免得抬起来的瞬间像完全清醒。
            p.blink = max(p.blink, max(sink, sleepy * 0.25) * (1 - wake))
            // 头一点一点往下沉，偶尔又惊醒似的抬一下——打盹的典型样子。
            p.headTilt += sleepy * 0.13 + sink * 0.06
            p.headBob += sleepy * 0.008 + sink * 0.030 - wake * 0.010
            p.bodySway *= (1 - sleepy * 0.85)
            p.hairSway *= (1 - sleepy * 0.7)
            p.lookX *= (1 - sleepy)
            p.lookY *= (1 - sleepy)
            p.smile = max(p.smile * (1 - sleepy * 0.5), 0.12)
            p.zzz = (t * 0.34).truncatingRemainder(dividingBy: 1.0)
        }

        return p
    }
}

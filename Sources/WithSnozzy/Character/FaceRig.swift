import Foundation

/// 某一瞬间的表情权重。每个字段对应 `Assets/face_*.png` 里的一块贴片。
///
/// 眼通道实测是套娃关系（`look ⊂ 眼型 ⊂ blink`），所以它是个**优先级栈**：
/// 眨眼盖过眼型、眼型盖过视线。`lookWeight` 就是这个用途——
/// 眼型一强就把视线收掉，不然眼型那一块会把眼球方向抹掉。
struct FaceExpression: Equatable {
    /// 眼型。同时只该有一个明显大于零。
    var eyeSmile = 0.0      // 眯成月牙
    var eyeSoft = 0.0       // 柔和半眯
    var eyeWide = 0.0       // 睁大
    var eyeSad = 0.0        // 垂眼
    /// 嘴型。
    var mouthSmile = 0.0
    var mouthOpen = 0.0
    var mouthO = 0.0
    /// 视线，−1…1。
    var lookX = 0.0
    var lookY = 0.0
    /// 视线贴片的整体强度。眼型压上来时降到 0。
    var lookWeight = 1.0
    /// 眨眼强度的折扣。已经眯成月牙了就不用再眨。
    var blinkScale = 1.0

    /// 眼型里最强的那一个有多强。视线和眨眼按它退让。
    var eyeShapeAmount: Double {
        max(max(eyeSmile, eyeSoft), max(eyeWide, eyeSad))
    }
}

/// 表情的驱动。
///
/// **为什么要有这一层**：原来的表情几乎不变——`smile` 的不透明度是
/// `(0.22 + mood×0.5 − 0.35) / 0.65`，而 `mood` 平时在 0.40…0.66，
/// 算出来只有 0.11…0.31；`happyEyes` 更是要 `mood > 0.82` 才出现，
/// 也就是只在番茄钟刚完成那一百秒里。于是九成以上的时间她脸上只有眨眼
/// 和缓慢的眼球漂移——这就是"呆板"的来源。**贴片再多，不驱动也是白搭。**
///
/// 所以这里做的是「节拍」：每隔几秒掷一次骰子，挑一个短暂的表情演一下再收回去。
/// 挑什么由当前状态加权——困了多垂眼、专注时多低头看桌面、
/// 心情好多笑、放着歌偶尔哼两声。
///
/// **无状态**：给定时刻算出同一个结果。和 `SnozzyRig`、`LegPose` 同一个原则——
/// 窗口被遮挡时时间线是暂停的，一旦保存了状态，恢复时就会跳变。
enum FaceRig {

    /// 一个节拍占多久。真人的微表情大约两三秒一次，太密会显得神经质。
    static let slot: Double = 5.5
    /// 淡入、保持、淡出。加起来必须小于 `slot`，剩下的时间是中性脸——
    /// **留白很重要**，一直在演反而假。
    static let fadeIn = 0.55, dwell = 1.9, fadeOut = 0.85

    /// 表情节拍。
    enum Beat: UInt64 {
        case rest = 0        // 什么都不做。留白
        case glanceUp        // 抬眼想事情
        case glanceDown      // 低头看桌面
        case softSmile       // 柔和地笑一下
        case bigSmile        // 眯眼笑
        case curious         // 睁大眼，轻轻"哦"
        case tired           // 垂眼
    }

    static func expression(t: Double, playing: Bool, mood: Double,
                           drowsy: Double, working: Bool,
                           speaking: Bool, activity: ActivityCue? = nil) -> FaceExpression {
        var e = FaceExpression()
        let sleepy = clamp(drowsy, 0, 1)

        // 底噪：缓慢的眼球漂移。和原来一样，两个不通约的正弦。
        e.lookX = sin(t * 0.23) * 0.55 + sin(t * 0.07) * 0.35
        e.lookY = sin(t * 0.19 + 1.3) * 0.35

        // 心情打底：常态就带一点柔和，不是全然的中性脸。
        // 这一点点比什么都不加差别很大——中性脸看着是"没表情"，
        // 带一点 eyeSoft 看着是"放松"。
        // 但别给多了：眼型会按下面的规则把视线压掉，打底太重等于常年
        // 把眼球漂移削掉一截，反而更呆。
        e.eyeSoft = 0.12 + clamp((mood - 0.45) / 0.4, 0, 1) * 0.16
        e.mouthSmile = clamp((mood - 0.42) / 0.5, 0, 1) * 0.30

        // ── 节拍 ──
        let slotIndex = Int64(floor(t / slot))
        let into = t - Double(slotIndex) * slot
        let beat = pick(slotIndex, playing: playing, mood: mood,
                        sleepy: sleepy, working: working)
        let w = envelope(into)
        if w > 0 { apply(beat, weight: w, to: &e) }

        // 当前活动给视线一个“落点”。微表情仍然照常演，只把最终视线轻轻拉回
        // 正在看的东西：工作屏、桌面、杯子。角色、手和场景都读同一份 ActivityCue，
        // 才不会出现手在打字、眼睛却望着窗外的割裂。
        if let activity {
            let a = clamp(activity.lookWeight, 0, 1)
            e.lookX = e.lookX * (1 - a) + activity.lookX * a
            e.lookY = e.lookY * (1 - a) + activity.lookY * a
        }

        // ── 打瞌睡压过一切 ──
        if sleepy > 0.01 {
            e.eyeSad = max(e.eyeSad, sleepy)
            e.eyeSmile *= (1 - sleepy)
            e.eyeWide *= (1 - sleepy)
            e.mouthSmile *= (1 - sleepy * 0.7)
            e.lookX *= (1 - sleepy)
            e.lookY *= (1 - sleepy)
        }

        // ── 说话时嘴动起来 ──
        //
        // 台词是气泡显示的，嘴不动的话像字幕而不像她在说。
        // 不做精细口型，节奏对了就像——但**节奏必须对**。
        //
        // 第一版给了 6 Hz，太快了，看着像在抖不像在说话：中文放松语速大约
        // 每秒四五个字，而且一个字不等于一次完整的开合，嘴真正的开合频率
        // 只有三次上下。
        //
        // 光有频率还不够，纯正弦是等幅的，像机械开合。真人说话轻重不一、
        // 还会换气，所以再叠一层慢包络把幅度压得忽大忽小。
        if speaking {
            let syllable = pow(sin(t * .pi * 3.0), 2)          // 每秒三次开合
            let stress = 0.45 + 0.55 * (sin(t * 1.9) * 0.5 + 0.5)   // 轻重
            let breath = 0.55 + 0.45 * (sin(t * 0.8 + 1.3) * 0.5 + 0.5)  // 换气
            e.mouthOpen = max(e.mouthOpen, syllable * stress * breath * 0.9)
            e.mouthO *= 0.3
            e.mouthSmile *= 0.5
        }

        // 眼型压上来就把视线收掉：眼型那一块会盖住眼球。
        //
        // 但**要等眼型真的强了再收**。眼型贴片是按不透明度叠的，权重 0.3 时
        // 底下的视线还透出七成来，这时候收视线纯属自伤。所以 0.35 以下不动，
        // 之上再线性收掉——常态那一点点打底就不会削到眼球漂移。
        let shape = e.eyeShapeAmount
        e.lookWeight = clamp(1 - max(0, shape - 0.35) * 1.8, 0, 1)
        e.blinkScale = clamp(1 - e.eyeSmile * 0.85, 0, 1)
        return e
    }

    /// 节拍的包络。淡入 → 保持 → 淡出 → 剩下的时间归零。
    private static func envelope(_ into: Double) -> Double {
        if into < fadeIn { return smoothstep(into / fadeIn) }
        if into < fadeIn + dwell { return 1 }
        if into < fadeIn + dwell + fadeOut {
            return 1 - smoothstep((into - fadeIn - dwell) / fadeOut)
        }
        return 0
    }

    private static func apply(_ beat: Beat, weight w: Double,
                              to e: inout FaceExpression) {
        switch beat {
        case .rest:
            break
        case .glanceUp:
            e.lookY = 0.85 * w + e.lookY * (1 - w)
            e.lookX *= (1 - w * 0.7)
            e.eyeSoft = max(e.eyeSoft, 0.25 * w)
        case .glanceDown:
            e.lookY = -0.9 * w + e.lookY * (1 - w)
            e.lookX *= (1 - w * 0.6)
        case .softSmile:
            e.eyeSoft = max(e.eyeSoft, 0.75 * w)
            e.mouthSmile = max(e.mouthSmile, 0.45 * w)
        case .bigSmile:
            e.eyeSmile = 0.9 * w
            e.mouthSmile = max(e.mouthSmile, 0.8 * w)
        case .curious:
            e.eyeWide = 0.85 * w
            e.mouthO = 0.5 * w
            e.lookY = 0.3 * w + e.lookY * (1 - w)
        case .tired:
            e.eyeSad = max(e.eyeSad, 0.8 * w)
            e.mouthSmile *= (1 - w * 0.6)
        }
    }

    /// 这一档演哪个节拍。按状态加权后确定性地抽一个。
    ///
    /// `rest` 的权重刻意给得高：一直在演表情比不演更假，
    /// 大约一半的档位应该什么都不做。
    private static func pick(_ n: Int64, playing: Bool, mood: Double,
                            sleepy: Double, working: Bool) -> Beat {
        var weights: [(Beat, Double)] = [
            (.rest, 9),
            (.glanceUp, working ? 4 : 2),
            (.glanceDown, working ? 5 : 2),
            (.softSmile, 2 + mood * 4),
            (.bigSmile, mood > 0.7 ? 1 + (mood - 0.7) * 8 : 0.4),
            (.curious, playing ? 2 : 1),
            (.tired, 0.3 + sleepy * 12),
        ]
        // 困到一定程度就别演别的了
        if sleepy > 0.5 {
            weights = weights.map { ($0.0, $0.0 == .tired ? $0.1 : $0.1 * 0.2) }
        }
        let total = weights.reduce(0) { $0 + $1.1 }
        // 0…1 的确定性随机数
        let r = Double(hash(n) % 100_000) / 100_000.0 * total
        var acc = 0.0
        for (beat, w) in weights {
            acc += w
            if r < acc { return beat }
        }
        return .rest
    }

    /// splitmix64。要的是"同一个 n 永远给同一个数"，不是密码学强度。
    private static func hash(_ n: Int64) -> UInt64 {
        // 换个盐，别和 LegPose 的档位抽签相关
        var x = UInt64(bitPattern: n) &* 0x9E37_79B9_7F4A_7C15 ^ 0x1234_5678_9ABC_DEF1
        x ^= x >> 30; x &*= 0xBF58_476D_1CE4_E5B9
        x ^= x >> 27; x &*= 0x94D0_49BB_1331_11EB
        x ^= x >> 31
        return x
    }
}

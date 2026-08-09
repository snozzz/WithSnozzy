import Foundation

/// Snozzy 此刻在做什么。
///
/// 这不是另一套需要存盘的状态机。给定时间、番茄钟阶段和一张可选过渡快照，
/// 结果永远相同；窗口恢复后不会补跑一串定时器。
enum SnozzyActivity: String, CaseIterable, Hashable {
    case typing
    case researching
    case planning
    case resting
    case takingBreak
}

/// 一项活动给画面各层的提示。角色、手和场景读同一份，避免各演各的。
struct ActivityCue: Equatable {
    /// 过渡最终要去的活动；可见屏幕内容以 screenWeights 为准。
    let activity: SnozzyActivity
    /// 每种屏幕内容此刻的可见权重。连续切换时可以同时保留两种以上内容。
    let screenWeights: [SnozzyActivity: Double]
    let lookX: Double
    let lookY: Double
    let lookWeight: Double
    let typingChance: UInt64
    let typingBurst: Double
    let screenLevel: Double
    let steamLevel: Double
    let phoneLevel: Double
    /// 音乐播放器波形的动态程度；0 是静止，1 是完整动画。
    let playerMotion: Double

    init(activity: SnozzyActivity,
         screenWeights: [SnozzyActivity: Double]? = nil,
         lookX: Double, lookY: Double, lookWeight: Double,
         typingChance: UInt64, typingBurst: Double,
         screenLevel: Double, steamLevel: Double, phoneLevel: Double,
         playerMotion: Double = 0) {
        self.activity = activity
        self.screenWeights = screenWeights ?? [activity: 1]
        self.lookX = lookX
        self.lookY = lookY
        self.lookWeight = lookWeight
        self.typingChance = typingChance
        self.typingBurst = typingBurst
        self.screenLevel = screenLevel
        self.steamLevel = steamLevel
        self.phoneLevel = phoneLevel
        self.playerMotion = playerMotion
    }
}

/// 把番茄钟阶段变成一段可见的日常节奏。
enum ActivityRig {
    /// 约一分钟换一次事。比表情和打字的节拍慢一个数量级，才不会显得坐立不安。
    static let slot: Double = 58
    /// 换活动不是瞬移眼球：前 2.4 秒在两档之间平滑过渡。
    static let blendDuration: Double = 2.4

    /// 近景里她在看用户，不该还盯着左边的工作屏。只给面部层使用。
    static let attending = ActivityCue(activity: .resting,
                                       lookX: 0, lookY: 0, lookWeight: 1,
                                       typingChance: 0, typingBurst: 0,
                                       screenLevel: 0.3, steamLevel: 0.4, phoneLevel: 0)

    /// 近景抬手时只给面部层用：从此刻活动视线逐格转到用户。
    static func attentionCue(from current: ActivityCue, amount: Double) -> ActivityCue {
        blend(current, attending, amount: amount)
    }

    /// `transitionFrom` 必须是在外部状态改变前捕获的完整画面 cue。
    /// 再次切换时捕获当前混合结果，新的 2.4 秒便会从屏幕此刻的样子起步。
    static func cue(at t: Double, phase: FocusPhase, playing: Bool,
                    transitionFrom: ActivityCue? = nil,
                    transitionStartedAt: Date = .distantPast) -> ActivityCue {
        let target = cueWithinPhase(at: t, phase: phase, playing: playing)
        let elapsed = t - transitionStartedAt.timeIntervalSinceReferenceDate
        let amount = smoothstep(max(0, min(1, elapsed / blendDuration)))
        let result: ActivityCue
        if let transitionFrom, amount < 1 {
            result = blend(transitionFrom, target, amount: amount)
        } else {
            result = target
        }

        // 手机不是持续亮着的装饰灯。每 83 秒只给一次很短的机会，而且不是
        // 每个机会都会触发；它不属于 phase/playing 过渡，始终按真实时间采样。
        let phoneSlot = Int64(floor(t / 83))
        let intoPhone = t - Double(phoneSlot) * 83
        let wakes = hash(phoneSlot, salt: 0x5048_4F4E_45) % 100 < 22
        let phone = wakes ? pulse(intoPhone, rise: 0.45, hold: 3.2, fall: 1.4) : 0
        return withPhone(result, phone)
    }

    private static func cueWithinPhase(at t: Double, phase: FocusPhase,
                                       playing: Bool) -> ActivityCue {
        let slotIndex = Int64(floor(t / slot))
        let activity = pick(slotIndex: slotIndex, phase: phase)
        let previousActivity = pick(slotIndex: slotIndex - 1, phase: phase)
        let current = base(for: activity, playing: playing)
        let previous = base(for: previousActivity, playing: playing)
        let into = t - Double(slotIndex) * slot
        let amount = activity == previousActivity ? 1
            : smoothstep(max(0, min(1, into / blendDuration)))
        return blend(previous, current, amount: amount)
    }

    private static func base(for activity: SnozzyActivity,
                             playing: Bool) -> ActivityCue {
        let playerMotion = playing ? 1.0 : 0.0
        switch activity {
        case .typing:
            return ActivityCue(activity: activity,
                               lookX: -0.42, lookY: -0.38, lookWeight: 0.72,
                               typingChance: 94, typingBurst: 0.82,
                               screenLevel: 1.0, steamLevel: 0.16, phoneLevel: 0,
                               playerMotion: playerMotion)
        case .researching:
            return ActivityCue(activity: activity,
                               lookX: -0.78, lookY: -0.10, lookWeight: 0.82,
                               typingChance: 46, typingBurst: 0.42,
                               screenLevel: 0.92, steamLevel: 0.20, phoneLevel: 0,
                               playerMotion: playerMotion)
        case .planning:
            return ActivityCue(activity: activity,
                               lookX: -0.08, lookY: -0.78, lookWeight: 0.76,
                               typingChance: 18, typingBurst: 0.24,
                               screenLevel: 0.72, steamLevel: 0.28, phoneLevel: 0,
                               playerMotion: playerMotion)
        case .resting:
            return ActivityCue(activity: activity,
                               lookX: 0.34, lookY: 0.10, lookWeight: 0.28,
                               typingChance: 7, typingBurst: 0.18,
                               screenLevel: playing ? 0.48 : 0.30,
                               steamLevel: 0.48, phoneLevel: 0,
                               playerMotion: playerMotion)
        case .takingBreak:
            return ActivityCue(activity: activity,
                               lookX: 0.62, lookY: -0.30, lookWeight: 0.66,
                               typingChance: 0, typingBurst: 0,
                               screenLevel: playing ? 0.34 : 0.18,
                               steamLevel: 1.0, phoneLevel: 0,
                               playerMotion: playerMotion)
        }
    }

    /// 视觉快照用：仍走生产 cue 的同一组参数，只强制指定活动和手机亮度。
    static func preview(_ activity: SnozzyActivity, playing: Bool,
                        phone: Double = 0) -> ActivityCue {
        withPhone(base(for: activity, playing: playing), phone)
    }

    private static func blend(_ a: ActivityCue, _ b: ActivityCue,
                              amount rawAmount: Double) -> ActivityCue {
        let amount = max(0, min(1, rawAmount))
        func mix(_ x: Double, _ y: Double) -> Double { x + (y - x) * amount }

        var weights: [SnozzyActivity: Double] = [:]
        var total = 0.0
        for activity in SnozzyActivity.allCases {
            let weight = mix(a.screenWeights[activity, default: 0],
                             b.screenWeights[activity, default: 0])
            if weight > 1e-12 {
                weights[activity] = weight
                total += weight
            }
        }
        if total > 0 {
            weights = Dictionary(uniqueKeysWithValues: weights.map { ($0.key, $0.value / total) })
        } else {
            weights = [b.activity: 1]
        }

        return ActivityCue(
            activity: b.activity, screenWeights: weights,
            lookX: mix(a.lookX, b.lookX), lookY: mix(a.lookY, b.lookY),
            lookWeight: mix(a.lookWeight, b.lookWeight),
            typingChance: UInt64(mix(Double(a.typingChance),
                                     Double(b.typingChance)).rounded()),
            typingBurst: mix(a.typingBurst, b.typingBurst),
            screenLevel: mix(a.screenLevel, b.screenLevel),
            steamLevel: mix(a.steamLevel, b.steamLevel),
            phoneLevel: mix(a.phoneLevel, b.phoneLevel),
            playerMotion: mix(a.playerMotion, b.playerMotion))
    }

    private static func withPhone(_ cue: ActivityCue, _ phone: Double) -> ActivityCue {
        ActivityCue(activity: cue.activity, screenWeights: cue.screenWeights,
                    lookX: cue.lookX, lookY: cue.lookY, lookWeight: cue.lookWeight,
                    typingChance: cue.typingChance, typingBurst: cue.typingBurst,
                    screenLevel: cue.screenLevel, steamLevel: cue.steamLevel,
                    phoneLevel: phone, playerMotion: cue.playerMotion)
    }

    /// 数值自检。它不另搭一套场景，只检查生产 cue 的覆盖、约束和连续性。
    static func selfCheck() -> Bool {
        func difference(_ a: ActivityCue, _ b: ActivityCue) -> Double {
            var value = abs(a.lookX - b.lookX)
            value = max(value, abs(a.lookY - b.lookY))
            value = max(value, abs(a.lookWeight - b.lookWeight))
            value = max(value, abs(Double(a.typingChance) - Double(b.typingChance)))
            value = max(value, abs(a.typingBurst - b.typingBurst))
            value = max(value, abs(a.screenLevel - b.screenLevel))
            value = max(value, abs(a.steamLevel - b.steamLevel))
            value = max(value, abs(a.phoneLevel - b.phoneLevel))
            value = max(value, abs(a.playerMotion - b.playerMotion))
            for activity in SnozzyActivity.allCases {
                value = max(value, abs(a.screenWeights[activity, default: 0]
                                       - b.screenWeights[activity, default: 0]))
            }
            return value
        }
        func valid(_ cue: ActivityCue) -> Bool {
            let weightSum = cue.screenWeights.values.reduce(0, +)
            return abs(cue.lookX) <= 1 && abs(cue.lookY) <= 1
                && (0...1).contains(cue.lookWeight)
                && cue.typingChance <= 100
                && (0...1).contains(cue.typingBurst)
                && (0...1).contains(cue.screenLevel)
                && (0...1).contains(cue.steamLevel)
                && (0...1).contains(cue.phoneLevel)
                && (0...1).contains(cue.playerMotion)
                && abs(weightSum - 1) < 1e-9
                && cue.screenWeights.values.allSatisfy { (0...1).contains($0) }
        }

        var ok = true
        for phase in [FocusPhase.idle, .work, .shortBreak, .longBreak] {
            var counts: [SnozzyActivity: Int] = [:]
            for i in 0..<600 {
                let c = cue(at: (Double(i) + 0.5) * slot,
                            phase: phase, playing: i % 3 == 0)
                counts[c.activity, default: 0] += 1
                ok = ok && valid(c)
            }
            let summary = SnozzyActivity.allCases.compactMap { activity in
                counts[activity].map { "\(activity.rawValue)=\($0)" }
            }.joined(separator: " ")
            print("ACTIVITY \(phase.rawValue): \(summary)")

            switch phase {
            case .work:
                ok = ok && counts[.typing, default: 0] > 0
                    && counts[.researching, default: 0] > 0
                    && counts[.planning, default: 0] > 0
                    && counts[.takingBreak, default: 0] == 0
            case .shortBreak, .longBreak:
                ok = ok && counts[.takingBreak, default: 0] > 0
                    && counts[.resting, default: 0] > 0
                    && counts[.typing, default: 0] == 0
            case .idle:
                ok = ok && counts[.resting, default: 0] > 0
                    && counts[.typing, default: 0] > 0
            }

            // 58 秒档位自身也必须从上一张完整 cue 连续过渡到下一张。
            if let i = (1..<120).first(where: {
                pick(slotIndex: Int64($0 - 1), phase: phase)
                    != pick(slotIndex: Int64($0), phase: phase)
            }) {
                let boundary = Double(i) * slot
                let before = cue(at: boundary - 0.001, phase: phase, playing: false)
                let start = cue(at: boundary, phase: phase, playing: false)
                let end = cue(at: boundary + blendDuration, phase: phase, playing: false)
                let target = base(for: pick(slotIndex: Int64(i), phase: phase), playing: false)
                let continuous = difference(before, start) < 0.01
                    && difference(end, withPhone(target, end.phoneLevel)) < 1e-9
                    && start.screenWeights.values.filter { $0 > 1e-9 }.count == 1
                ok = ok && continuous
                print("  slot transition " + (continuous ? "continuous" : "FAILED"))
            } else {
                ok = false
                print("  slot transition FAILED (no changing slot)")
            }
        }

        // 在一条槽内混合还没结束时切 phase，源必须保留原来的多屏幕权重。
        if let i = (1..<120).first(where: {
            pick(slotIndex: Int64($0 - 1), phase: .idle)
                != pick(slotIndex: Int64($0), phase: .idle)
        }) {
            let changedAt = Double(i) * slot + 0.8
            let old = cue(at: changedAt, phase: .idle, playing: false)
            let changed = Date(timeIntervalSinceReferenceDate: changedAt)
            let start = cue(at: changedAt, phase: .work, playing: false,
                            transitionFrom: old, transitionStartedAt: changed)
            let finishAt = changedAt + blendDuration
            let end = cue(at: finishAt, phase: .work, playing: false,
                          transitionFrom: old, transitionStartedAt: changed)
            let target = cue(at: finishAt, phase: .work, playing: false)
            let mixedScreens = old.screenWeights.values.filter { $0 > 1e-6 }.count >= 2
            let continuous = mixedScreens && difference(old, start) < 1e-9
                && difference(end, target) < 1e-9
            ok = ok && continuous
            print("  in-slot phase transition " + (continuous ? "continuous" : "FAILED"))
        } else {
            ok = false
            print("  in-slot phase transition FAILED (no changing slot)")
        }

        // 2.4 秒内连续 skip 两次，再切一次 playing。每次都冻结当下混合结果，
        // 而不是回到最初枚举态；最后仍须精确收敛到最新目标。
        let firstAt = 10_003.7
        let firstDate = Date(timeIntervalSinceReferenceDate: firstAt)
        let idle = cue(at: firstAt, phase: .idle, playing: false)
        let firstStart = cue(at: firstAt, phase: .work, playing: false,
                             transitionFrom: idle, transitionStartedAt: firstDate)
        let secondAt = firstAt + 0.7
        let firstCurrent = cue(at: secondAt, phase: .work, playing: false,
                               transitionFrom: idle, transitionStartedAt: firstDate)
        let secondDate = Date(timeIntervalSinceReferenceDate: secondAt)
        let secondStart = cue(at: secondAt, phase: .shortBreak, playing: false,
                              transitionFrom: firstCurrent,
                              transitionStartedAt: secondDate)
        let toggleAt = secondAt + 0.55
        let secondCurrent = cue(at: toggleAt, phase: .shortBreak, playing: false,
                                transitionFrom: firstCurrent,
                                transitionStartedAt: secondDate)
        let toggleDate = Date(timeIntervalSinceReferenceDate: toggleAt)
        let toggleStart = cue(at: toggleAt, phase: .shortBreak, playing: true,
                              transitionFrom: secondCurrent,
                              transitionStartedAt: toggleDate)
        let finishAt = toggleAt + blendDuration
        let toggleEnd = cue(at: finishAt, phase: .shortBreak, playing: true,
                            transitionFrom: secondCurrent,
                            transitionStartedAt: toggleDate)
        let finalTarget = cue(at: finishAt, phase: .shortBreak, playing: true)
        let consecutive = difference(idle, firstStart) < 1e-9
            && difference(firstCurrent, secondStart) < 1e-9
            && difference(secondCurrent, toggleStart) < 1e-9
            && difference(toggleEnd, finalTarget) < 1e-9
            && secondCurrent.playerMotion == 0
        ok = ok && consecutive
        print("  consecutive skip/toggle " + (consecutive ? "continuous" : "FAILED"))
        let attentionStart = attentionCue(from: idle, amount: 0)
        let attentionEnd = attentionCue(from: idle, amount: 1)
        let attentionContinuous = difference(attentionStart, idle) < 1e-9
            && difference(attentionEnd, attending) < 1e-9
        ok = ok && attentionContinuous
        print("  close-up gaze " + (attentionContinuous ? "continuous" : "FAILED"))
        print("ACTIVITY " + (ok ? "全部通过" : "有不合格项"))
        return ok
    }

    private static func pick(slotIndex: Int64, phase: FocusPhase) -> SnozzyActivity {
        let weights: [(SnozzyActivity, UInt64)]
        switch phase {
        case .work:
            weights = [(.typing, 48), (.researching, 31), (.planning, 21)]
        case .shortBreak:
            weights = [(.takingBreak, 58), (.resting, 42)]
        case .longBreak:
            weights = [(.takingBreak, 44), (.resting, 56)]
        case .idle:
            weights = [(.typing, 12), (.researching, 17), (.planning, 13), (.resting, 58)]
        }

        let total = weights.reduce(UInt64(0)) { $0 + $1.1 }
        let r = hash(slotIndex, salt: phaseSalt(phase)) % total
        var sum: UInt64 = 0
        for (activity, weight) in weights {
            sum += weight
            if r < sum { return activity }
        }
        return .resting
    }

    private static func phaseSalt(_ phase: FocusPhase) -> UInt64 {
        switch phase {
        case .idle: 0x1D1E
        case .work: 0xA11C_E001
        case .shortBreak: 0x5B0A_7E
        case .longBreak: 0x10A6_B0EA
        }
    }

    private static func pulse(_ t: Double, rise: Double, hold: Double, fall: Double) -> Double {
        if t < rise { return smoothstep(t / rise) }
        if t < rise + hold { return 1 }
        if t < rise + hold + fall { return 1 - smoothstep((t - rise - hold) / fall) }
        return 0
    }

    private static func hash(_ n: Int64, salt: UInt64) -> UInt64 {
        var x = UInt64(bitPattern: n) &* 0x9E37_79B9_7F4A_7C15 ^ salt
        x ^= x >> 30; x &*= 0xBF58_476D_1CE4_E5B9
        x ^= x >> 27; x &*= 0x94D0_49BB_1331_11EB
        x ^= x >> 31
        return x
    }
}

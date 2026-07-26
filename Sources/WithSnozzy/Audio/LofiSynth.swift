import Foundation

/// 实时 lofi 合成器：走带、编曲、声部、混音、效果链，全部在这里。
///
/// **线程约定**
/// - `render(...)` 只在音频线程上跑，全程无内存分配、无加锁。
/// - 标量参数（`targetGain`、`regenerateRequested` 等）由主线程写、音频线程读。
///   arm64 上对齐的机器字读写本身就是原子的，不会撕裂；这里只需要「最终一致」，
///   晚一个缓冲区生效完全无所谓，所以不值得为它引入锁或原子类型。
final class LofiSynth: @unchecked Sendable {

    // MARK: - 主线程可写的参数

    /// 目标输出增益。0 表示静音（淡出后引擎会被停掉）。
    var targetGain: Double = 0

    /// 置 true 后，音频线程会在下一个小节线换一首。
    var regenerateRequested = false

    // MARK: - 主线程可读的状态（供 UI 显示）

    private(set) var keyRoot = 0
    private(set) var isMinor = false
    private(set) var progressionIndex = 0
    private(set) var bpm: Double = 74
    /// 当前小节内的拍号（0…3），角色动画拿它来对上节奏点头。
    private(set) var beat = 0
    /// 底鼓刚敲下时被置为 1，随后指数衰减。UI 用它做呼吸/律动的视觉反馈。
    private(set) var kickPulse: Double = 0
    /// 淡出彻底结束后为 true，此时可以安全地停掉音频引擎。
    var isSilent: Bool { master.value < 1e-4 && targetGain < 1e-4 }

    // MARK: - 常量

    private let sr: Double

    /// 各声部在总线上的相对电平。集中放在这里，调混音只改这一块。
    private enum Level {
        static let kick = 0.85, snare = 0.40, hat = 0.15
        static let ePiano = 0.30, bass = 0.46, pad = 0.15, bell = 0.17
        static let vinyl = 0.030, reverb = 0.24
    }

    /// 旋律的随机走音步长表。放成静态常量，避免在音频线程上分配数组。
    private static let melodySteps: [Int] = [-2, -1, -1, -1, 0, 1, 1, 1, 2, 3]

    // MARK: - 走带

    private var samplesToNextStep = 0.0
    private var step = 0        // 小节内的 16 分位置 0…15
    private var bar = 0         // 从开始播放起累计的小节数
    private var swing = 0.17

    private var samplesPerStep: Double { 60.0 / bpm / 4.0 * sr }

    /// 摇摆：成对的 16 分音符做成「长—短」，这是 lofi 拖沓感的来源。
    /// 一对的总时长保持不变，所以不会跑拍。
    private func interval(after step: Int) -> Double {
        step % 2 == 0 ? samplesPerStep * (1 + swing) : samplesPerStep * (1 - swing)
    }

    // MARK: - 编曲状态

    private var rng = Noise(seed: 0x5EED_1234)
    private var progression = Progressions.all[0]
    private var drums = DrumPatterns.classic
    private var melodyOn = true
    private var density = 1.0

    /// 当前与上一个和弦的钢琴配置，用于声部连接。init 时一次性分配。
    private let voicing: UnsafeMutablePointer<Double>
    private let prevVoicing: UnsafeMutablePointer<Double>
    private var voicingCount = 0
    private var prevVoicingCount = 0

    /// 两小节长的旋律动机（32 个 16 分格），−1 表示休止。
    private let motif: UnsafeMutablePointer<Int8>

    // MARK: - 声部池

    private var ePiano = [EPianoVoice](repeating: EPianoVoice(), count: 6)
    private var pads = [PadVoice](repeating: PadVoice(), count: 4)
    private var bells = [BellVoice](repeating: BellVoice(), count: 3)
    private var bass = BassVoice()
    private var kicks = [KickVoice](repeating: KickVoice(), count: 2)
    private var snares = [SnareVoice](repeating: SnareVoice(), count: 2)
    private var hats = [HatVoice](repeating: HatVoice(), count: 3)

    private var ePianoNext = 0, padNext = 0, bellNext = 0
    private var kickNext = 0, snareNext = 0, hatNext = 0

    // MARK: - 效果链

    private var vinyl = Vinyl()
    private let reverbL: Reverb
    private let reverbR: Reverb

    /// 磁带抖动用的延迟线。整个混音一起过，因为真磁带是整卷一起飘的。
    private let tapeL: DelayLine
    private let tapeR: DelayLine
    private var wowPhase = 0.0, flutterPhase = 0.0
    private let wowInc: Double, flutterInc: Double
    private let tapeBase: Double, wowDepth: Double, flutterDepth: Double

    private var toneL = Biquad(), toneR = Biquad()
    private var dcL = Biquad(), dcR = Biquad()
    /// 混响送出前的高通。
    private var sendHPL = Biquad(), sendHPR = Biquad()

    /// 侧链闪避包络。底鼓一响就把和声压下去一点，
    /// 这是让稀疏的编曲听起来仍然「有推动力」的廉价技巧。
    private var duck = 0.0
    private var duckCoef = 0.0
    private var kickPulseCoef = 0.0

    private var master = Smoother()

    // MARK: - 生命周期

    init(sampleRate: Double) {
        sr = sampleRate

        voicing = .allocate(capacity: 8)
        voicing.initialize(repeating: 64, count: 8)
        prevVoicing = .allocate(capacity: 8)
        prevVoicing.initialize(repeating: 64, count: 8)
        motif = .allocate(capacity: 32)
        motif.initialize(repeating: -1, count: 32)

        reverbL = Reverb(sr: sr, spread: 0)
        reverbR = Reverb(sr: sr, spread: 23)

        tapeBase = 0.012 * sr
        wowDepth = 0.0024 * sr
        flutterDepth = 0.00034 * sr
        let tapeCapacity = Int(tapeBase + wowDepth + flutterDepth) + 64
        tapeL = DelayLine(maxSamples: tapeCapacity)
        tapeR = DelayLine(maxSamples: tapeCapacity)
        wowInc = 0.55 / sr          // 0.55 Hz 的慢飘
        flutterInc = 6.3 / sr       // 6.3 Hz 的细颤

        master = Smoother(value: 0, ms: 120, sr: sr)
        duckCoef = expCoef(ms: 130, sr: sr)
        kickPulseCoef = expCoef(ms: 180, sr: sr)

        // 用启动时刻做种子，每次打开听到的都不是同一首。
        rng = Noise(seed: UInt32(truncatingIfNeeded: UInt64(Date().timeIntervalSince1970 * 1000)))

        vinyl.prepare(sr: sr)
        toneL.lowpass(freq: 7200, q: 0.7, sr: sr)
        toneR.lowpass(freq: 7200, q: 0.7, sr: sr)
        dcL.highpass(freq: 36, q: 0.7, sr: sr)
        dcR.highpass(freq: 36, q: 0.7, sr: sr)
        sendHPL.highpass(freq: 320, q: 0.7, sr: sr)
        sendHPR.highpass(freq: 320, q: 0.7, sr: sr)

        newSong()
    }

    deinit {
        voicing.deallocate()
        prevVoicing.deallocate()
        motif.deallocate()
    }

    /// 从头开始。播放键按下时调用，保证每次都从小节线起步。
    func restart() {
        step = 0
        bar = 0
        samplesToNextStep = 0
        duck = 0
    }

    // MARK: - 渲染

    func render(left: UnsafeMutablePointer<Float>, right: UnsafeMutablePointer<Float>, frames: Int) {
        for n in 0..<frames {
            // ── 走带：到点就触发这一格上的所有事件 ──
            samplesToNextStep -= 1
            if samplesToNextStep <= 0 {
                if step == 0 { startBar() }
                fireStep()
                samplesToNextStep += interval(after: step)
                step += 1
                if step >= 16 { step = 0; bar += 1 }
                beat = step / 4
            }

            // ── 声部求和 ──
            var harmonyL = 0.0, harmonyR = 0.0

            for i in 0..<ePiano.count where ePiano[i].isActive {
                let v = ePiano[i].render() * Level.ePiano
                harmonyL += v * ePiano[i].gainL
                harmonyR += v * ePiano[i].gainR
            }
            for i in 0..<bells.count where bells[i].isActive {
                let v = bells[i].render() * Level.bell
                harmonyL += v * bells[i].gainL
                harmonyR += v * bells[i].gainR
            }
            for i in 0..<pads.count where pads[i].isActive {
                let (pl, pr) = pads[i].render()
                harmonyL += pl * Level.pad
                harmonyR += pr * Level.pad
            }

            // 侧链闪避只作用在和声上，鼓和贝斯保持原样。
            duck *= duckCoef
            let duckGain = 1.0 - duck * 0.34
            harmonyL *= duckGain
            harmonyR *= duckGain
            kickPulse *= kickPulseCoef

            // 底鼓、军鼓、贝斯走正中——低频和背拍是整首曲子的锚，
            // 一旦偏到一侧，听感会立刻变得不稳。
            var mono = 0.0
            for i in 0..<kicks.count where kicks[i].isActive { mono += kicks[i].render() * Level.kick }
            for i in 0..<snares.count where snares[i].isActive { mono += snares[i].render() * Level.snare }
            if bass.isActive { mono += bass.render() * Level.bass }

            var l = harmonyL + mono
            var r = harmonyR + mono

            // 踩镲偏右一点，和偏左的旋律形成对角，画面就撑开了。
            for i in 0..<hats.count where hats[i].isActive {
                let v = hats[i].render() * Level.hat
                l += v * hats[i].gainL
                r += v * hats[i].gainR
            }

            // ── 混响：只送和声，鼓保持干净不然会糊 ──
            //
            // 左右各送各的干声，两个混响器因此完全去相关，空间感才打得开。
            // 但送之前必须高通：低频进混响只会变成一团轰鸣，
            // 而且会把本该是单声道的低端也拆散，单喇叭播放时相位抵消。
            l += reverbL.process(sendHPL.process(harmonyL) * 0.30) * Level.reverb
            r += reverbR.process(sendHPR.process(harmonyR) * 0.30) * Level.reverb

            // ── 磁带抖动：慢飘 + 细颤 ──
            //
            // 左右用完全相同的调制量。真磁带是整卷一起飘的，
            // 给两声道不同的抖动会破坏低频的单声道一致性，得不偿失。
            advance(&wowPhase, wowInc)
            advance(&flutterPhase, flutterInc)
            let tapeDelay = tapeBase
                + sine(wowPhase) * wowDepth
                + sine(flutterPhase) * flutterDepth
            tapeL.write(l)
            tapeR.write(r)
            l = tapeL.read(tapeDelay)
            r = tapeR.read(tapeDelay)

            // ── 音色整形：切掉超低频的隆隆声，压掉高频的数字味 ──
            l = toneL.process(dcL.process(l))
            r = toneR.process(dcR.process(r))

            // ── 黑胶噪声与总输出 ──
            let (nl, nr) = vinyl.render()
            let g = master.next(targetGain)
            left[n] = Float(softClip((l + nl * Level.vinyl) * g))
            right[n] = Float(softClip((r + nr * Level.vinyl) * g))
        }
    }

    // MARK: - 编曲

    /// 换一首：新的调、新的进行、新的速度。
    private func newSong() {
        progressionIndex = rng.int(Progressions.all.count)
        progression = Progressions.all[progressionIndex]
        isMinor = progression.isMinor
        // 避开极端调性，C…B 全都可以，但低音区太低会糊，所以根音统一落在 0…11。
        keyRoot = rng.int(12)
        bpm = 68 + rng.unit() * 16       // 68…84，lofi 的舒适区
        swing = 0.12 + rng.unit() * 0.10
        prevVoicingCount = 0
        regenerateMotif()
    }

    /// 每小节线：换和弦、必要时换段落。
    private func startBar() {
        if regenerateRequested {
            regenerateRequested = false
            newSong()
            bar = 0
        } else if bar > 0 && bar % 32 == 0 {
            newSong()
        }

        // 每 8 小节一个段落。第 4 个段落抽成留白段，让耳朵休息。
        if bar % 8 == 0 {
            let section = bar / 8
            if section % 4 == 3 {
                drums = DrumPatterns.sparse
                melodyOn = false
                density = 0.55
            } else {
                drums = DrumPatterns.all[rng.int(2)]
                melodyOn = true
                density = 1.0
            }
            regenerateMotif()
        }

        let chord = progression.chords[bar % 4]

        // 上一拍的配置存下来做声部连接。
        for i in 0..<voicingCount { prevVoicing[i] = voicing[i] }
        prevVoicingCount = voicingCount

        voicingCount = Voicer.voice(
            chord: chord, keyRoot: keyRoot,
            previous: prevVoicing, previousCount: prevVoicingCount,
            into: voicing)

        // 松开上一和弦。释放段较长，两个和弦会自然叠化。
        for i in 0..<ePiano.count { ePiano[i].release() }
        for i in 0..<pads.count { pads[i].release() }

        // 钢琴：三个声部同时按下，力度略有差别才像人弹的。
        for i in 0..<voicingCount {
            let v = 0.52 + rng.unit() * 0.16
            // 声部按音高从左到右铺开，和声就有了宽度。
            let pan = (Double(i) / Double(max(1, voicingCount - 1)) - 0.5) * 1.1
            ePiano[allocEPiano()].trigger(note: voicing[i], velocity: v, pan: pan, sr: sr)
        }

        // 铺底跟着钢琴走，但降八度、力度更轻。
        if density > 0.8 {
            for i in 0..<min(voicingCount, 3) {
                pads[allocPad()].trigger(note: voicing[i] - 12, velocity: 0.5, sr: sr)
            }
        }

        bass.trigger(note: Voicer.bassNote(chord: chord, keyRoot: keyRoot),
                     velocity: 0.85, sr: sr)
    }

    /// 每个 16 分格：鼓、旋律、以及和弦的切分补音。
    private func fireStep() {
        // ── 鼓 ──
        let kv = drums.kick[step]
        if kv > 0 {
            kicks[allocKick()].trigger(velocity: kv, sr: sr)
            duck = 1.0
            kickPulse = 1.0
        }
        let sv = drums.snare[step]
        if sv > 0 {
            snares[allocSnare()].trigger(velocity: sv * (0.85 + rng.unit() * 0.15), sr: sr)
        }
        let hv = drums.hat[step]
        if hv > 0 {
            // 力度随机抖动是「不像机器」的关键，固定力度听两分钟就腻。
            hats[allocHat()].trigger(
                velocity: hv * (0.72 + rng.unit() * 0.28),
                open: drums.openHat.contains(step),
                pan: 0.32 + rng.unit() * 0.12, sr: sr)
        }

        // ── 贝斯的第二下：落在第 3 拍前后，给低频一点走动 ──
        if step == 10 && rng.unit() < 0.55 * density {
            let chord = progression.chords[bar % 4]
            bass.trigger(note: Voicer.bassNote(chord: chord, keyRoot: keyRoot) + 12,
                         velocity: 0.42, sr: sr)
        }

        // ── 钢琴切分补音：在反拍上轻轻再点一下 ──
        if (step == 6 || step == 11) && voicingCount > 0 && rng.unit() < 0.35 * density {
            let i = rng.int(voicingCount)
            ePiano[allocEPiano()].trigger(note: voicing[i], velocity: 0.26, pan: 0.2, sr: sr)
        }

        // ── 旋律 ──
        if melodyOn {
            let slot = (bar % 2) * 16 + step
            let degree = Int(motif[slot])
            if degree >= 0 {
                bells[allocBell()].trigger(
                    note: melodyNote(degree),
                    velocity: 0.40 + rng.unit() * 0.22,
                    pan: -0.34 - rng.unit() * 0.12, sr: sr)
            }
        }
    }

    /// 生成两小节的旋律动机。
    ///
    /// 规则很简单：只在 8 分格起音、以级进为主偶尔跳进、每小节最后一拍强制留白。
    /// 「留白」这条比其他所有规则加起来都重要——填满的旋律会让人紧张。
    private func regenerateMotif() {
        for i in 0..<32 { motif[i] = -1 }
        var degree = 2 + rng.int(4)
        var i = 0
        while i < 32 {
            let breathZone = (i % 16) >= 12     // 每小节第 4 拍留给空气
            if !breathZone && rng.unit() < 0.42 {
                motif[i] = Int8(degree)
                let move = Self.melodySteps[rng.int(Self.melodySteps.count)]
                degree = min(max(degree + move, 0), 9)
                // 偶尔补一个 16 分装饰音，破掉呆板的八分网格。
                if rng.unit() < 0.18 && i + 1 < 32 {
                    motif[i + 1] = Int8(degree)
                }
            }
            i += 2
        }
    }

    /// 把五声音阶的级数换算成 MIDI 音高。
    private func melodyNote(_ degreeIndex: Int) -> Double {
        let scale = isMinor ? Scale.minorPentatonic : Scale.majorPentatonic
        let octave = degreeIndex / scale.count
        let idx = degreeIndex % scale.count
        return Double(64 + keyRoot + scale[idx] + 12 * octave)
    }

    // MARK: - 声部分配
    //
    // 轮转查找第一个空闲声部；全忙就抢最老的那个。
    // 对这个规模的复音数来说，比按包络电平排序简单得多，听感上没有区别。

    private func allocEPiano() -> Int { alloc(&ePianoNext, ePiano.count) { ePiano[$0].isActive } }
    private func allocPad() -> Int { alloc(&padNext, pads.count) { pads[$0].isActive } }
    private func allocBell() -> Int { alloc(&bellNext, bells.count) { bells[$0].isActive } }
    private func allocKick() -> Int { alloc(&kickNext, kicks.count) { kicks[$0].isActive } }
    private func allocSnare() -> Int { alloc(&snareNext, snares.count) { snares[$0].isActive } }
    private func allocHat() -> Int { alloc(&hatNext, hats.count) { hats[$0].isActive } }

    private func alloc(_ cursor: inout Int, _ count: Int, _ busy: (Int) -> Bool) -> Int {
        for _ in 0..<count {
            let i = cursor
            cursor = (cursor + 1) % count
            if !busy(i) { return i }
        }
        let i = cursor
        cursor = (cursor + 1) % count
        return i
    }
}

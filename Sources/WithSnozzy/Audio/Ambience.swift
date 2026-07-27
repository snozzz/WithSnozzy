import Foundation

/// 可以叠加的环境音。
enum Ambience: Int, CaseIterable, Identifiable, Codable {
    case rain, fire, cafe, waves, keys, wind

    var id: Int { rawValue }

    var label: String {
        switch self {
        case .rain: "雨声"
        case .fire: "篝火"
        case .cafe: "咖啡厅"
        case .waves: "海浪"
        case .keys: "键盘"
        case .wind: "风声"
        }
    }

    var symbol: String {
        switch self {
        case .rain: "cloud.rain.fill"
        case .fire: "flame.fill"
        case .cafe: "cup.and.saucer.fill"
        case .waves: "water.waves"
        case .keys: "keyboard.fill"
        case .wind: "wind"
        }
    }
}

// MARK: - 生成器
//
// 全部基于「噪声 + 滤波 + 慢速调制」。
// 自然界的连续声响几乎都是宽带噪声被某种共振腔塑形的结果，
// 所以只要滤波器的形状和调制的速度对了，听感就对了——不需要任何采样素材。
//
// 扫频滤波器的系数以**控制率**（每 64 个样本一次）更新。
// 每样本都算一次 sin/cos 会让开销翻好几倍，而 64 个样本 ≈ 1.5ms，
// 远快于耳朵能分辨的滤波器变化速度。

private let controlPeriod = 64

/// 雨：宽带噪声打底 + 高频雨滴的沙沙 + 远处的低频轰隆。
struct RainGen {
    private var nL = Noise(seed: 0x1111_2222), nR = Noise(seed: 0x3333_4444)
    private var bodyL = Biquad(), bodyR = Biquad()
    private var hissL = Biquad(), hissR = Biquad()
    private var rumbleL = Biquad(), rumbleR = Biquad()

    mutating func prepare(sr: Double) {
        bodyL.bandpass(freq: 1800, q: 0.35, sr: sr)
        bodyR.bandpass(freq: 2100, q: 0.35, sr: sr)
        hissL.highpass(freq: 5200, q: 0.6, sr: sr)
        hissR.highpass(freq: 5600, q: 0.6, sr: sr)
        rumbleL.lowpass(freq: 260, q: 0.7, sr: sr)
        rumbleR.lowpass(freq: 240, q: 0.7, sr: sr)
    }

    @inline(__always) mutating func render() -> (Double, Double) {
        let a = nL.next(), b = nR.next()
        let l = bodyL.process(a) * 0.85 + hissL.process(a) * 0.30 + rumbleL.process(a) * 0.55
        let r = bodyR.process(b) * 0.85 + hissR.process(b) * 0.30 + rumbleR.process(b) * 0.55
        return (l, r)
    }
}

/// 篝火：低频的呼呼声 + 随机的爆裂。
/// 爆裂声是关键——没有它就只是一团闷响。
struct FireGen {
    private var nL = Noise(seed: 0x5555_6666), nR = Noise(seed: 0x7777_8888)
    private var bodyL = Biquad(), bodyR = Biquad()
    private var crackFilter = Biquad()
    private var crackEnv = 0.0
    private var crackCoef = 0.0
    private var breathe = 0.0
    private var breatheCoef = 0.0
    private var rng = Noise(seed: 0x9999_AAAA)

    mutating func prepare(sr: Double) {
        bodyL.lowpass(freq: 760, q: 0.6, sr: sr)
        bodyR.lowpass(freq: 700, q: 0.6, sr: sr)
        crackFilter.bandpass(freq: 2600, q: 1.1, sr: sr)
        crackCoef = expCoef(ms: 6, sr: sr)
        breatheCoef = expCoef(ms: 220, sr: sr)
    }

    @inline(__always) mutating func render() -> (Double, Double) {
        // 火焰的强弱在缓慢游走，用一个被平滑过的随机数模拟。
        breathe = breathe * breatheCoef + rng.unit() * (1 - breatheCoef)
        let swell = 0.55 + breathe * 0.9

        // 爆裂：小概率触发一个衰减极快的脉冲。
        if rng.unit() < 0.00035 { crackEnv = 0.6 + rng.unit() * 0.6 }
        crackEnv *= crackCoef
        let crack = crackFilter.process(rng.next() * crackEnv) * 3.2

        let l = bodyL.process(nL.next()) * swell + crack
        let r = bodyR.process(nR.next()) * swell + crack * 0.85
        return (l, r)
    }
}

/// 咖啡厅：低频的场地嗡鸣 + 起伏的人声频段 + 偶尔的杯碟碰撞。
struct CafeGen {
    private var nL = Noise(seed: 0xBBBB_CCCC), nR = Noise(seed: 0xDDDD_EEEE)
    private var roomL = Biquad(), roomR = Biquad()
    private var voiceL = Biquad(), voiceR = Biquad()
    private var clink = Biquad()
    private var airL = Biquad(), airR = Biquad()
    private var clinkEnv = 0.0
    private var clinkCoef = 0.0
    private var murmur = 0.0
    private var murmurCoef = 0.0
    private var rng = Noise(seed: 0xFFFF_0001)

    mutating func prepare(sr: Double) {
        roomL.lowpass(freq: 520, q: 0.7, sr: sr)
        roomR.lowpass(freq: 480, q: 0.7, sr: sr)
        // 人声集中在 300–1000Hz，用一个宽带通把噪声塑成"人群"的频谱。
        voiceL.bandpass(freq: 520, q: 0.9, sr: sr)
        voiceR.bandpass(freq: 620, q: 0.9, sr: sr)
        clink.bandpass(freq: 4200, q: 6.0, sr: sr)
        // 一点高频「空气」。只有中低频的话，听起来像隔着墙，
        // 而不是像坐在店里——真实空间总有餐具、衣物摩擦这类细碎高频。
        airL.highpass(freq: 4800, q: 0.6, sr: sr)
        airR.highpass(freq: 5200, q: 0.6, sr: sr)
        clinkCoef = expCoef(ms: 55, sr: sr)
        murmurCoef = expCoef(ms: 400, sr: sr)
    }

    @inline(__always) mutating func render() -> (Double, Double) {
        murmur = murmur * murmurCoef + rng.unit() * (1 - murmurCoef)
        let swell = 0.5 + murmur * 1.0

        if rng.unit() < 0.000035 { clinkEnv = 0.5 + rng.unit() * 0.5 }
        clinkEnv *= clinkCoef
        let ping = clink.process(rng.next() * clinkEnv) * 1.6

        let l = roomL.process(nL.next()) * 0.7 + voiceL.process(nL.next()) * swell * 0.55
            + airL.process(nL.next()) * 0.16 + ping
        let r = roomR.process(nR.next()) * 0.7 + voiceR.process(nR.next()) * swell * 0.55
            + airR.process(nR.next()) * 0.16 + ping * 0.8
        return (l, r)
    }
}

/// 海浪：一次「涌上来又退回去」是一条不对称的包络——涨得快、退得慢。
/// 同时滤波器截止频率跟着包络走：浪头的白沫是高频，退潮只剩低频。
struct WavesGen {
    private var nL = Noise(seed: 0x0BAD_F00D), nR = Noise(seed: 0x0FEE_1DEA)
    private var lpL = Biquad(), lpR = Biquad()
    private var phase = 0.0
    private var inc = 0.0
    private var sr = 44100.0
    private var tick = 0
    private var env = 0.0

    mutating func prepare(sr: Double) {
        self.sr = sr
        inc = 1.0 / (9.5 * sr)      // 一次涨落约 9.5 秒
        lpL.lowpass(freq: 700, q: 0.7, sr: sr)
        lpR.lowpass(freq: 700, q: 0.7, sr: sr)
    }

    @inline(__always) mutating func render() -> (Double, Double) {
        advance(&phase, inc)
        tick += 1
        if tick >= controlPeriod {
            tick = 0
            // 不对称包络：前 30% 上冲，后 70% 缓退。
            let p = phase
            env = p < 0.30 ? smoothstep(p / 0.30) : (1 - smoothstep((p - 0.30) / 0.70)) * 0.92
            let cutoff = 320 + env * 2600
            lpL.lowpass(freq: cutoff, q: 0.7, sr: sr)
            lpR.lowpass(freq: cutoff * 0.92, q: 0.7, sr: sr)
        }
        let g = 0.22 + env * 1.15
        return (lpL.process(nL.next()) * g, lpR.process(nR.next()) * g)
    }
}

/// 键盘：一串带停顿的敲击。
/// 打字的节奏不是均匀的——几个字一顿，偶尔长时间不动，
/// 这个「阵发性」比单次敲击的音色更能让人相信旁边真的有人在打字。
struct KeysGen {
    private var rng = Noise(seed: 0x1357_2468)
    private var click = Biquad()
    private var thock = Biquad()
    private var env = 0.0
    private var envCoef = 0.0
    private var thockEnv = 0.0
    private var thockCoef = 0.0
    private var countdown = 0
    private var burstLeft = 0
    private var sr = 44100.0
    private var pan = 0.0

    mutating func prepare(sr: Double) {
        self.sr = sr
        click.bandpass(freq: 2400, q: 1.4, sr: sr)
        thock.bandpass(freq: 190, q: 1.0, sr: sr)
        envCoef = expCoef(ms: 9, sr: sr)
        thockCoef = expCoef(ms: 28, sr: sr)
        countdown = Int(sr * 0.4)
    }

    @inline(__always) mutating func render() -> (Double, Double) {
        countdown -= 1
        if countdown <= 0 {
            env = 0.55 + rng.unit() * 0.45
            thockEnv = env * 0.8
            pan = (rng.unit() - 0.5) * 0.5
            if burstLeft > 0 {
                // 连打阶段：60–150ms 一下
                burstLeft -= 1
                countdown = Int(sr * (0.060 + rng.unit() * 0.090))
            } else {
                // 一段打完，停 0.4–2.2 秒再开始下一段
                burstLeft = 3 + rng.int(9)
                countdown = Int(sr * (0.40 + rng.unit() * 1.80))
            }
        }
        env *= envCoef
        thockEnv *= thockCoef
        let n = rng.next()
        let s = click.process(n * env) * 2.6 + thock.process(n * thockEnv) * 1.8
        let (gl, gr) = panGains(pan)
        return (s * gl, s * gr)
    }
}

/// 风：一个中心频率缓慢游走的共振峰。
/// 风声的辨识度全在那个「呜——」的共振上，而不在噪声本身。
struct WindGen {
    private var nL = Noise(seed: 0x2468_ACE0), nR = Noise(seed: 0x1357_9BDF)
    private var bpL = Biquad(), bpR = Biquad()
    private var lfo = 0.0, lfo2 = 0.0
    private var inc = 0.0, inc2 = 0.0
    private var sr = 44100.0
    private var tick = 0
    private var gust = 0.0

    mutating func prepare(sr: Double) {
        self.sr = sr
        inc = 0.055 / sr
        inc2 = 0.021 / sr
        bpL.bandpass(freq: 600, q: 2.5, sr: sr)
        bpR.bandpass(freq: 640, q: 2.5, sr: sr)
    }

    @inline(__always) mutating func render() -> (Double, Double) {
        advance(&lfo, inc)
        advance(&lfo2, inc2)
        tick += 1
        if tick >= controlPeriod {
            tick = 0
            // 两个不通约的慢正弦叠加，避免听出周期。
            let m = (sine(lfo) * 0.6 + sine(lfo2) * 0.4 + 1) * 0.5
            let f = 280 + m * 1150
            let q = 1.8 + m * 3.4
            bpL.bandpass(freq: f, q: q, sr: sr)
            bpR.bandpass(freq: f * 1.07, q: q, sr: sr)
            gust = 0.35 + m * 1.05
        }
        return (bpL.process(nL.next()) * gust * 2.2, bpR.process(nR.next()) * gust * 2.2)
    }
}

/// 提示音：三个音的小琶音。
///
/// 番茄钟结束时用系统提示音会很突兀——那是「出错了」的声音。
/// 这里用和音乐同一套音色（音乐盒），提示才像是从场景里长出来的。
struct ChimeGen {
    private var bells = [BellVoice](repeating: BellVoice(), count: 3)
    private var notes: [Double] = [0, 0, 0]
    private var pending = 0
    private var countdown = 0
    private var gap = 0
    private var sr = 44100.0

    var isActive: Bool {
        if pending > 0 { return true }
        for b in bells where b.isActive { return true }
        return false
    }

    mutating func prepare(sr: Double) {
        self.sr = sr
        gap = Int(sr * 0.115)
    }

    /// - Parameter rising: true = 上行（专注结束，可以休息了），false = 下行（休息结束）。
    mutating func trigger(rising: Bool) {
        notes = rising ? [76, 81, 88] : [83, 78, 76]
        pending = 3
        countdown = 0
    }

    @inline(__always) mutating func render() -> (Double, Double) {
        if pending > 0 {
            countdown -= 1
            if countdown <= 0 {
                let i = 3 - pending
                bells[i].trigger(note: notes[i], velocity: 0.55, pan: Double(i - 1) * 0.25, sr: sr)
                pending -= 1
                countdown = gap
            }
        }
        var l = 0.0, r = 0.0
        for i in 0..<bells.count where bells[i].isActive {
            let v = bells[i].render()
            l += v * bells[i].gainL
            r += v * bells[i].gainR
        }
        return (l * 0.5, r * 0.5)
    }
}

// MARK: - 混音台

/// 六路环境音的混音器。和 `LofiSynth` 一样，`render` 只跑在音频线程上，全程无分配无锁。
final class AmbienceMixer: @unchecked Sendable {

    /// 各路音量 0…1，主线程写、音频线程读。
    /// 直接用定长数组：读写单个 Double 在 arm64 上是原子的，这里只要求最终一致。
    private var targets = [Double](repeating: 0, count: Ambience.allCases.count)
    private var smoothers: [Smoother]

    /// 任意一路有声音（或提示音还没响完）时为 true。
    /// 音频引擎据此决定要不要保持运行——提示音响到一半被掐掉就很难听了。
    var isActive: Bool {
        for v in targets where v > 0.001 { return true }
        return chime.isActive
    }

    private let sr: Double
    private var rain = RainGen()
    private var fire = FireGen()
    private var cafe = CafeGen()
    private var waves = WavesGen()
    private var keys = KeysGen()
    private var wind = WindGen()
    private var chime = ChimeGen()

    /// 各路的基准电平。不同生成器的原始响度差很多，这里先拉平，
    /// 用户的滑杆才会是「一半就是一半」而不是某几路一推就爆。
    private static let trim: [Double] = [0.34, 0.40, 0.30, 0.30, 0.38, 0.22]

    init(sampleRate: Double) {
        sr = sampleRate
        smoothers = (0..<Ambience.allCases.count).map { _ in Smoother(value: 0, ms: 120, sr: sampleRate) }
        rain.prepare(sr: sr)
        fire.prepare(sr: sr)
        cafe.prepare(sr: sr)
        waves.prepare(sr: sr)
        keys.prepare(sr: sr)
        wind.prepare(sr: sr)
        chime.prepare(sr: sr)
    }

    func level(_ s: Ambience) -> Double { targets[s.rawValue] }

    func setLevel(_ s: Ambience, _ v: Double) { targets[s.rawValue] = clamp(v, 0, 1) }

    /// 触发一次提示音。番茄钟阶段切换时调用。
    func triggerChime(rising: Bool) { chime.trigger(rising: rising) }

    /// 本缓冲区需要参与运算的通道下标。预分配，避免在音频线程上分配内存。
    private var activeIndices = [Int](repeating: 0, count: Ambience.allCases.count)

    /// 把环境音**叠加**到已有内容上（而不是覆写）。
    ///
    /// 叠加而不是独占一个源节点，是因为 AVAudioEngine 里每多一个节点，
    /// 就多一整条 AU 桥接链的开销。独立开关靠的是"是否发声"，不是节点数量。
    func mix(left: UnsafeMutablePointer<Float>, right: UnsafeMutablePointer<Float>, frames: Int) {
        // 哪些通道要跑，**每个缓冲区判定一次**，而不是每个样本判定六次。
        //
        // 之前的写法在全部静音时仍然逐样本更新 6 个平滑器：48kHz × 6 = 每秒 29 万次
        // 无意义的乘加。而"全部静音"恰恰是最常见的状态（多数人只听音乐不开环境音）。
        // 平滑器还没收敛到 0 的通道也要算进来，否则淡出会被截断。
        var count = 0
        for i in targets.indices where targets[i] > 0.0002 || smoothers[i].value > 0.0002 {
            activeIndices[count] = i
            count += 1
        }
        let chimeActive = chime.isActive

        // 什么都不响时直接返回，连缓冲区都不用碰——里面已经是音乐了。
        if count == 0 && !chimeActive { return }

        for n in 0..<frames {
            var l = 0.0, r = 0.0

            for j in 0..<count {
                let i = activeIndices[j]
                // 音量走平滑器，拖动滑杆时才不会有咔哒声。
                let g = smoothers[i].next(targets[i]) * Self.trim[i]
                let (a, b): (Double, Double)
                switch i {
                case Ambience.rain.rawValue: (a, b) = rain.render()
                case Ambience.fire.rawValue: (a, b) = fire.render()
                case Ambience.cafe.rawValue: (a, b) = cafe.render()
                case Ambience.waves.rawValue: (a, b) = waves.render()
                case Ambience.keys.rawValue: (a, b) = keys.render()
                default: (a, b) = wind.render()
                }
                l += a * g
                r += b * g
            }

            if chimeActive {
                let (cl, cr) = chime.render()
                l += cl
                r += cr
            }

            // 叠在音乐之上，最后统一软削波。
            left[n] = Float(softClip(Double(left[n]) + l))
            right[n] = Float(softClip(Double(right[n]) + r))
        }
    }
}

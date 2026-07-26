import Foundation

@inline(__always) func clamp(_ x: Double, _ lo: Double, _ hi: Double) -> Double {
    min(max(x, lo), hi)
}

/// 等功率声像。用 sqrt 而不是线性，声音扫过中间时响度才不会塌下去。
/// - Parameter pan: −1 全左，0 居中，+1 全右。
@inline(__always) func panGains(_ pan: Double) -> (Double, Double) {
    let p = clamp(pan, -1, 1)
    return (sqrt((1 - p) * 0.5), sqrt((1 + p) * 0.5))
}

// MARK: - 电钢琴（Rhodes 风格）

/// 两算子相位调制。
///
/// Rhodes 的音色特征是「起音有一下金属齿音，随即化开成温柔的正弦」。
/// 用一个衰减很快的调制指数包络就能抓住这个特征——比采样轻，也比加法合成便宜。
struct EPianoVoice {
    private var carrierPhase = 0.0
    private var modPhase = 0.0
    private var inc = 0.0
    private var modIndex = 0.0
    private var amp = Envelope()
    private var modEnv = Envelope()
    private(set) var velocity = 0.0
    /// 声像增益在触发时就算好。每样本做一次 sqrt 是纯粹的浪费。
    private(set) var gainL = 0.707
    private(set) var gainR = 0.707

    var isActive: Bool { amp.isActive }

    mutating func trigger(note: Double, velocity: Double, pan: Double, sr: Double) {
        self.velocity = velocity
        (gainL, gainR) = panGains(pan)
        inc = midiToHz(note) / sr
        carrierPhase = 0
        modPhase = 0
        // 越高的音调制越浅，否则高音区会刺耳。
        modIndex = 0.62 * clamp(1.0 - (note - 50) / 55.0, 0.25, 1.0)
        amp.configure(attackMs: 4, decayMs: 1100, sustain: 0.22, releaseMs: 620, sr: sr)
        modEnv.configure(attackMs: 1, decayMs: 85, sustain: 0.05, releaseMs: 200, sr: sr)
        amp.gateOn()
        modEnv.gateOn()
    }

    mutating func release() { amp.gateOff(); modEnv.gateOff() }

    @inline(__always) mutating func render() -> Double {
        guard amp.isActive else { return 0 }
        let mod = sine(modPhase) * modIndex * modEnv.next()
        let out = sine(carrierPhase + mod)
        advance(&carrierPhase, inc)
        advance(&modPhase, inc)   // 调制比 1:1，音色最接近电钢
        return out * amp.next() * velocity
    }
}

// MARK: - 贝斯

/// 正弦基波 + 一点二次谐波，过低通再轻微过载。
/// lofi 的贝斯要"胖但不糊"，关键是谐波要少、低通要低。
struct BassVoice {
    private var phase = 0.0
    private var inc = 0.0
    private var amp = Envelope()
    private var lp = Biquad()
    private var velocity = 0.0

    var isActive: Bool { amp.isActive }

    mutating func trigger(note: Double, velocity: Double, sr: Double) {
        self.velocity = velocity
        inc = midiToHz(note) / sr
        phase = 0
        amp.configure(attackMs: 9, decayMs: 850, sustain: 0.30, releaseMs: 220, sr: sr)
        lp.lowpass(freq: 240, q: 0.85, sr: sr)
        amp.gateOn()
    }

    mutating func release() { amp.gateOff() }

    @inline(__always) mutating func render() -> Double {
        guard amp.isActive else { return 0 }
        var out = sine(phase) * 0.92 + sine(phase * 2) * 0.14
        advance(&phase, inc)
        out = softClip(out * 1.35)
        return lp.process(out) * amp.next() * velocity
    }
}

// MARK: - 铺底（Pad）

/// 三个轻微失谐的正弦叠加。失谐产生缓慢的拍频，就是所谓的"厚度"。
/// 起音一秒多，让它永远躲在钢琴后面，只负责把空隙填满。
struct PadVoice {
    private var p1 = 0.0, p2 = 0.0, p3 = 0.0
    private var i1 = 0.0, i2 = 0.0, i3 = 0.0
    private var amp = Envelope()
    private var velocity = 0.0

    var isActive: Bool { amp.isActive }

    mutating func trigger(note: Double, velocity: Double, sr: Double) {
        self.velocity = velocity
        let f = midiToHz(note)
        i1 = f / sr
        i2 = f * 1.0035 / sr     // +6 音分
        i3 = f * 0.9967 / sr     // −5.7 音分
        // 相位错开，避免三路同时从 0 起振产生一个突兀的冲击。
        p1 = 0; p2 = 0.33; p3 = 0.66
        amp.configure(attackMs: 1200, decayMs: 2600, sustain: 0.55, releaseMs: 1400, sr: sr)
        amp.gateOn()
    }

    mutating func release() { amp.gateOff() }

    /// 返回立体声。
    ///
    /// 三路失谐振荡器不是简单叠加后居中，而是左中右铺开——
    /// 这样失谐产生的拍频在两耳之间来回游走，pad 才会有「包住人」的空间感。
    /// 混成单声道的话，同样的失谐只会听成"有点抖"。
    @inline(__always) mutating func render() -> (Double, Double) {
        guard amp.isActive else { return (0, 0) }
        let o1 = sine(p1), o2 = sine(p2), o3 = sine(p3)
        advance(&p1, i1); advance(&p2, i2); advance(&p3, i3)
        let a = amp.next() * velocity * 0.38
        return ((o1 * 0.6 + o2 * 0.9 + o3 * 0.15) * a,
                (o1 * 0.6 + o2 * 0.15 + o3 * 0.9) * a)
    }
}

// MARK: - 音乐盒 / 铃

/// 非整数倍的泛音比是"音乐盒感"的来源——整数倍会听成风琴。
struct BellVoice {
    private var phase = 0.0
    private var inc = 0.0
    private var amp = Envelope()
    private var velocity = 0.0
    private(set) var gainL = 0.707
    private(set) var gainR = 0.707

    var isActive: Bool { amp.isActive }

    mutating func trigger(note: Double, velocity: Double, pan: Double, sr: Double) {
        self.velocity = velocity
        (gainL, gainR) = panGains(pan)
        inc = midiToHz(note) / sr
        phase = 0
        amp.configure(attackMs: 2, decayMs: 780, sustain: 0.0, releaseMs: 300, sr: sr)
        amp.gateOn()
    }

    @inline(__always) mutating func render() -> Double {
        guard amp.isActive else { return 0 }
        let out = sine(phase)
            + sine(phase * 2.01) * 0.30
            + sine(phase * 3.04) * 0.11
            + sine(phase * 4.72) * 0.045
        advance(&phase, inc)
        return out * 0.62 * amp.next() * velocity
    }
}

// MARK: - 鼓组

/// 底鼓：一个正弦，音高在 30 毫秒内从 138Hz 俯冲到 46Hz。
/// 那声"咚"其实全部来自这条俯冲曲线，不是来自波形本身。
struct KickVoice {
    private var phase = 0.0
    private var pitchEnv = 0.0
    private var pitchCoef = 0.0
    private var amp = Envelope()
    private var velocity = 0.0
    private var sr = 44100.0

    var isActive: Bool { amp.isActive }

    mutating func trigger(velocity: Double, sr: Double) {
        self.velocity = velocity
        self.sr = sr
        phase = 0
        pitchEnv = 1.0
        pitchCoef = expCoef(ms: 26, sr: sr)
        amp.configure(attackMs: 1.5, decayMs: 300, sustain: 0.0, releaseMs: 80, sr: sr)
        amp.gateOn()
    }

    @inline(__always) mutating func render() -> Double {
        guard amp.isActive else { return 0 }
        let freq = 46.0 + 92.0 * pitchEnv
        pitchEnv *= pitchCoef
        let out = softClip(sine(phase) * 1.6)
        advance(&phase, freq / sr)
        return out * amp.next() * velocity
    }
}

/// 军鼓：带通噪声（沙沙的响弦）+ 一个低频正弦（鼓腔的"通"）。
/// 最后统一过低通——lofi 的军鼓必须是闷的，亮了就变成流行鼓了。
struct SnareVoice {
    private var noise = Noise(seed: 0x9E37_79B9)
    private var bp = Biquad()
    private var lp = Biquad()
    private var tonePhase = 0.0
    private var toneInc = 0.0
    private var ampNoise = Envelope()
    private var ampTone = Envelope()
    private var velocity = 0.0

    var isActive: Bool { ampNoise.isActive || ampTone.isActive }

    mutating func trigger(velocity: Double, sr: Double) {
        self.velocity = velocity
        toneInc = 186.0 / sr
        tonePhase = 0
        bp.bandpass(freq: 1750, q: 0.62, sr: sr)
        lp.lowpass(freq: 6200, q: 0.7, sr: sr)
        ampNoise.configure(attackMs: 1, decayMs: 135, sustain: 0, releaseMs: 50, sr: sr)
        ampTone.configure(attackMs: 1, decayMs: 85, sustain: 0, releaseMs: 40, sr: sr)
        ampNoise.gateOn()
        ampTone.gateOn()
    }

    @inline(__always) mutating func render() -> Double {
        guard isActive else { return 0 }
        let n = bp.process(noise.next()) * ampNoise.next() * 0.9
        let t = sine(tonePhase) * ampTone.next() * 0.32
        advance(&tonePhase, toneInc)
        return lp.process(n + t) * velocity
    }
}

/// 踩镲：高通噪声，开合只差衰减时间。
struct HatVoice {
    private var noise = Noise(seed: 0x2545_F491)
    private var hp = Biquad()
    private var amp = Envelope()
    private var velocity = 0.0
    private(set) var gainL = 0.707
    private(set) var gainR = 0.707

    var isActive: Bool { amp.isActive }

    mutating func trigger(velocity: Double, open: Bool, pan: Double, sr: Double) {
        self.velocity = velocity
        (gainL, gainR) = panGains(pan)
        hp.highpass(freq: 7400, q: 0.8, sr: sr)
        amp.configure(attackMs: 0.5, decayMs: open ? 210 : 42, sustain: 0, releaseMs: 20, sr: sr)
        amp.gateOn()
    }

    @inline(__always) mutating func render() -> Double {
        guard amp.isActive else { return 0 }
        return hp.process(noise.next()) * amp.next() * velocity
    }
}

// MARK: - 黑胶噪声

/// 底噪 + 爆豆。
///
/// 这层东西单独听是缺陷，混进去却是整个 lofi 质感的一半——
/// 它把所有数字合成的痕迹糊掉，让人以为这是从一张旧唱片上放出来的。
struct Vinyl {
    // 左右用两个不同种子的噪声源。底噪一旦去相关，
    // 整个混音的空间就"打开"了——这比任何混响都管用，而且几乎不花 CPU。
    private var noiseL = Noise(seed: 0xDEAD_BEEF)
    private var noiseR = Noise(seed: 0x1BAD_C0DE)
    private var hissL = Biquad(), hissR = Biquad()
    private var pop = Biquad()
    private var crackle = 0.0
    private var crackleCoef = 0.0
    private var ready = false

    mutating func prepare(sr: Double) {
        hissL.bandpass(freq: 3200, q: 0.4, sr: sr)
        hissR.bandpass(freq: 3400, q: 0.4, sr: sr)
        pop.bandpass(freq: 1400, q: 1.6, sr: sr)
        crackleCoef = expCoef(ms: 2.2, sr: sr)
        ready = true
    }

    @inline(__always) mutating func render() -> (Double, Double) {
        guard ready else { return (0, 0) }
        let hl = hissL.process(noiseL.next()) * 0.30
        let hr = hissR.process(noiseR.next()) * 0.30
        // 每样本约 0.16% 的概率炸一颗，听感上大约每秒七八下。
        if noiseL.unit() < 0.0016 { crackle = 0.55 + noiseL.unit() * 0.45 }
        crackle *= crackleCoef
        // 爆豆保持单声道居中——真唱片上的划痕只有一条沟，去相关反而失真。
        let c = pop.process(noiseR.next() * crackle) * 2.4
        return (hl + c, hr + c)
    }
}

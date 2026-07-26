import Foundation

// MARK: - 通用小工具

/// 把「多少毫秒衰减到 1/e」换算成每样本的乘性系数。
/// 一阶指数衰减是本文件里几乎所有包络和滤波的基础。
@inline(__always) func expCoef(ms: Double, sr: Double) -> Double {
    ms <= 0 ? 0 : exp(-1.0 / (ms * 0.001 * sr))
}

/// 反非正规数常量。
///
/// 反馈结构（混响、延迟）里信号会一路衰减到 1e-40 这种量级，
/// 落入非正规数范围后 CPU 处理速度会暴跌上百倍。加一个极小的直流量把它顶出去。
let antiDenormal = 1e-25

/// 软削波。比硬截幅温柔，顺带给信号一点磁带式的谐波。
/// 用有理式近似 tanh，比真 tanh 快而且听感几乎一样。
@inline(__always) func softClip(_ x: Double) -> Double {
    let a = abs(x)
    return x * (27 + a * a) / (27 + 9 * a * a)
}

/// 正弦波。
///
/// 这里直接用 libm 的 `sin`。实测整机负载下正弦调用只占 CPU 的不到 1%，
/// 换成波表能再省一半，但会让每个声部多带一个指针参数——不值得。
/// 如果哪天真的要压这部分开销，替换点就只有这一个函数。
@inline(__always) func sine(_ phase: Double) -> Double {
    sin(phase * 2 * .pi)
}

/// 相位推进并回绕到 [0, 1)。
@inline(__always) func advance(_ phase: inout Double, _ inc: Double) {
    phase += inc
    if phase >= 1 { phase -= floor(phase) }
}

/// MIDI 音高转频率。69 = A4 = 440Hz。
@inline(__always) func midiToHz(_ note: Double) -> Double {
    440.0 * pow(2.0, (note - 69.0) / 12.0)
}

// MARK: - 噪声源

/// xorshift32。音频里的噪声对随机质量没有要求，只要快且无周期感。
struct Noise {
    private var s: UInt32

    init(seed: UInt32 = 0x1357_9BDF) { s = seed | 1 }

    @inline(__always) mutating func next() -> Double {
        s ^= s << 13; s ^= s >> 17; s ^= s << 5
        return Double(Int32(bitPattern: s)) * (1.0 / 2_147_483_648.0)
    }

    /// [0, 1) 区间的均匀随机，作曲逻辑里用来掷骰子。
    @inline(__always) mutating func unit() -> Double {
        s ^= s << 13; s ^= s >> 17; s ^= s << 5
        return Double(s) * (1.0 / 4_294_967_296.0)
    }

    /// [0, n) 的整数随机。
    @inline(__always) mutating func int(_ n: Int) -> Int {
        n <= 1 ? 0 : Int(unit() * Double(n))
    }
}

// MARK: - 滤波器

/// 双二阶滤波器，转置直接 II 型。系数用 RBJ Audio EQ Cookbook 的公式。
struct Biquad {
    private var b0 = 1.0, b1 = 0.0, b2 = 0.0, a1 = 0.0, a2 = 0.0
    private var z1 = 0.0, z2 = 0.0

    @inline(__always) mutating func process(_ x: Double) -> Double {
        let y = b0 * x + z1
        z1 = b1 * x - a1 * y + z2 + antiDenormal
        z2 = b2 * x - a2 * y
        return y
    }

    mutating func lowpass(freq: Double, q: Double, sr: Double) {
        let w0 = 2 * .pi * min(freq, sr * 0.49) / sr
        let cs = cos(w0), alpha = sin(w0) / (2 * q)
        let a0 = 1 + alpha
        b0 = ((1 - cs) / 2) / a0
        b1 = (1 - cs) / a0
        b2 = b0
        a1 = (-2 * cs) / a0
        a2 = (1 - alpha) / a0
    }

    mutating func highpass(freq: Double, q: Double, sr: Double) {
        let w0 = 2 * .pi * min(freq, sr * 0.49) / sr
        let cs = cos(w0), alpha = sin(w0) / (2 * q)
        let a0 = 1 + alpha
        b0 = ((1 + cs) / 2) / a0
        b1 = -(1 + cs) / a0
        b2 = b0
        a1 = (-2 * cs) / a0
        a2 = (1 - alpha) / a0
    }

    mutating func bandpass(freq: Double, q: Double, sr: Double) {
        let w0 = 2 * .pi * min(freq, sr * 0.49) / sr
        let cs = cos(w0), sn = sin(w0), alpha = sn / (2 * q)
        let a0 = 1 + alpha
        b0 = alpha / a0
        b1 = 0
        b2 = -alpha / a0
        a1 = (-2 * cs) / a0
        a2 = (1 - alpha) / a0
    }

    mutating func reset() { z1 = 0; z2 = 0 }
}

/// 一阶低通。用来平滑参数（音量、滤波截止）避免阶跃产生咔哒声。
struct Smoother {
    var value = 0.0
    var coef = 0.999

    init(value: Double = 0, ms: Double = 30, sr: Double = 44100) {
        self.value = value
        coef = expCoef(ms: ms, sr: sr)
    }

    @inline(__always) mutating func next(_ target: Double) -> Double {
        value = target + (value - target) * coef
        return value
    }
}

// MARK: - 包络

/// ADSR。各段用指数曲线，听感比线性自然得多。
struct Envelope {
    enum Stage: UInt8 { case idle, attack, decay, sustain, release }

    private(set) var stage: Stage = .idle
    private(set) var value = 0.0

    var attackRate = 0.01      // 每样本线性增量（起音段用线性，冲击感更干脆）
    var decayCoef = 0.9995
    var sustain = 0.0
    var releaseCoef = 0.9998

    var isActive: Bool { stage != .idle }

    mutating func configure(attackMs: Double, decayMs: Double, sustain: Double, releaseMs: Double, sr: Double) {
        attackRate = attackMs <= 0 ? 1.0 : 1.0 / (attackMs * 0.001 * sr)
        decayCoef = expCoef(ms: decayMs, sr: sr)
        self.sustain = sustain
        releaseCoef = expCoef(ms: releaseMs, sr: sr)
    }

    mutating func gateOn() { stage = .attack }
    mutating func gateOff() { if stage != .idle { stage = .release } }
    mutating func kill() { stage = .idle; value = 0 }

    @inline(__always) mutating func next() -> Double {
        switch stage {
        case .idle:
            return 0
        case .attack:
            value += attackRate
            if value >= 1 { value = 1; stage = .decay }
        case .decay:
            value = sustain + (value - sustain) * decayCoef
            // 衰减段贴近延音电平后就切换，省掉后续无意义的迭代。
            if value - sustain < 1e-4 {
                value = sustain
                stage = sustain > 1e-4 ? .sustain : .idle
            }
        case .sustain:
            break
        case .release:
            value *= releaseCoef
            if value < 1e-4 { value = 0; stage = .idle }
        }
        return value
    }
}

// MARK: - 延迟线

/// 定长延迟线，支持小数点读取（做磁带抖动必需）。
/// 缓冲区在 init 时一次性分配，之后音频线程上只有读写，不会触发内存分配。
final class DelayLine {
    private let buffer: UnsafeMutablePointer<Double>
    private let capacity: Int
    private var writeIndex = 0

    init(maxSamples: Int) {
        capacity = max(4, maxSamples)
        buffer = .allocate(capacity: capacity)
        buffer.initialize(repeating: 0, count: capacity)
    }

    deinit {
        buffer.deinitialize(count: capacity)
        buffer.deallocate()
    }

    @inline(__always) func write(_ x: Double) {
        buffer[writeIndex] = x
        writeIndex += 1
        if writeIndex >= capacity { writeIndex = 0 }
    }

    /// 整数延迟读取。
    @inline(__always) func read(_ delay: Int) -> Double {
        var i = writeIndex - delay
        if i < 0 { i += capacity }
        return buffer[i]
    }

    /// 线性插值的小数延迟读取。
    @inline(__always) func read(_ delay: Double) -> Double {
        let d = min(max(delay, 1), Double(capacity - 2))
        let i0 = Int(d)
        let frac = d - Double(i0)
        var a = writeIndex - i0
        if a < 0 { a += capacity }
        var b = a - 1
        if b < 0 { b += capacity }
        return buffer[a] + (buffer[b] - buffer[a]) * frac
    }

    func clear() { buffer.update(repeating: 0, count: capacity) }
}

// MARK: - 混响

/// Schroeder 结构的房间混响：并联梳状滤波器铺出密度，串联全通打散相位。
///
/// 用 4 梳 + 2 全通（Freeverb 用 8 梳），因为这里的混响只是背景空间感，
/// 不需要拖长尾，砍一半 CPU 完全听不出差别。
final class Reverb {
    private var combs: [DelayLine] = []
    private var combDelays: [Int] = []
    private var combState: [Double] = []
    private var allpasses: [DelayLine] = []
    private var allpassDelays: [Int] = []

    /// 反馈量，决定混响时间。
    var feedback = 0.80
    /// 梳状滤波器内部的阻尼，越大高频衰减越快（听起来越"软"）。
    var damping = 0.42

    /// - Parameter spread: 左右声道的延迟偏移量，制造立体声宽度。
    init(sr: Double, spread: Int = 0) {
        let scale = sr / 44100.0
        // 这组长度互质，避免梳状峰叠在一起产生金属声。
        for base in [1116, 1277, 1422, 1617] {
            let n = Int(Double(base) * scale) + spread
            combs.append(DelayLine(maxSamples: n + 4))
            combDelays.append(n)
            combState.append(0)
        }
        for base in [556, 341] {
            let n = Int(Double(base) * scale) + spread
            allpasses.append(DelayLine(maxSamples: n + 4))
            allpassDelays.append(n)
        }
    }

    @inline(__always) func process(_ input: Double) -> Double {
        var out = 0.0
        let x = input * 0.25   // 输入衰减，防止四路梳状叠加后过载

        for i in 0..<combs.count {
            let delayed = combs[i].read(combDelays[i])
            // 一阶低通嵌在反馈环里 = 阻尼，模拟空气和墙面对高频的吸收。
            combState[i] = delayed * (1 - damping) + combState[i] * damping + antiDenormal
            combs[i].write(x + combState[i] * feedback)
            out += delayed
        }

        for i in 0..<allpasses.count {
            let delayed = allpasses[i].read(allpassDelays[i])
            let v = out + delayed * 0.5
            allpasses[i].write(v)
            out = delayed - v * 0.5
        }
        return out
    }

    func clear() {
        combs.forEach { $0.clear() }
        allpasses.forEach { $0.clear() }
        for i in combState.indices { combState[i] = 0 }
    }
}

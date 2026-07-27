#if LIVE2D

import Foundation

/// 把 `Pose` 映射到 Live2D 模型参数。
///
/// 这一层是整个 Live2D 接入的意义所在：动画逻辑（呼吸周期、伪随机眨眼、
/// 跟底鼓点头、发丝延迟半拍、深夜打瞌睡）全部原封不动留在 `SnozzyRig` 里，
/// 换渲染方式只需要改这里的映射表。
///
/// 两条设计原则：
/// 1. **按模型声明的范围映射**，不写死数值。不同模型的同名参数取值范围可能完全不同
///    （有的 ParamAngleX 是 −30…30，有的是 −1…1），写死就换不了模型。
/// 2. **容忍参数缺失**。模型没有某个参数就跳过，不报错也不崩。
final class Live2DPoseBinding {

    private let model: CubismModel

    /// 参数下标缓存。每帧要设二十来个参数，缓存下来省掉字典查找。
    private struct Slot {
        let index: Int32
        let min: Float
        let max: Float
        let def: Float
    }
    private var slots: [String: Slot] = [:]

    init(model: CubismModel) {
        self.model = model
        for id in Self.usedParameters {
            guard let i = model.parameterIndex(id) else { continue }
            let r = model.parameterRange(i)
            slots[id] = Slot(index: i, min: r.min, max: r.max, def: r.default)
        }
    }

    /// 我们会去驱动的参数。模型里没有的会被静默跳过。
    private static let usedParameters = [
        "ParamAngleX", "ParamAngleY", "ParamAngleZ",
        "ParamEyeLOpen", "ParamEyeROpen", "ParamEyeLSmile", "ParamEyeRSmile",
        "ParamEyeBallX", "ParamEyeBallY",
        "ParamBrowLForm", "ParamBrowRForm",
        "ParamMouthForm", "ParamMouthOpenY",
        "ParamCheek",
        "ParamBodyAngleX", "ParamBodyAngleY", "ParamBodyAngleZ",
        "ParamBreath",
        "ParamHairAhoge", "ParamHairFront", "ParamHairSide", "ParamHairBack",
    ]

    /// 有符号映射：t ∈ [−1, 1]，0 对应参数默认值，±1 对应两端。
    /// 用默认值而不是区间中点作为原点，是因为很多参数的默认值并不在中间
    /// （比如 ParamEyeLOpen 的范围是 0…1 而默认是 1）。
    private func setSigned(_ id: String, _ t: Float) {
        guard let s = slots[id] else { return }
        let c = min(max(t, -1), 1)
        let v = c >= 0 ? s.def + c * (s.max - s.def) : s.def + c * (s.def - s.min)
        model.setParameter(s.index, v)
    }

    /// 单位映射：t ∈ [0, 1] 对应 [min, max]。
    private func setUnit(_ id: String, _ t: Float) {
        guard let s = slots[id] else { return }
        let c = min(max(t, 0), 1)
        model.setParameter(s.index, s.min + c * (s.max - s.min))
    }

    func apply(_ pose: Pose) {
        let f = { (d: Double) -> Float in Float(d) }

        // ── 头 ──
        // headTilt 是弧度（±0.045 常态，打瞌睡时到 0.18）；这里放大到参数区间。
        setSigned("ParamAngleZ", f(pose.headTilt) * 11)
        setSigned("ParamAngleX", f(pose.bodySway) * 0.35 + f(pose.lookX) * 0.18)
        // headBob 是向下的归一化位移，所以取负——参数正方向是抬头。
        setSigned("ParamAngleY", -f(pose.headBob) * 32)

        // ── 眼 ──
        setUnit("ParamEyeLOpen", 1 - f(pose.blink))
        setUnit("ParamEyeROpen", 1 - f(pose.blink))
        setUnit("ParamEyeLSmile", f(pose.happyEyes))
        setUnit("ParamEyeRSmile", f(pose.happyEyes))
        setSigned("ParamEyeBallX", f(pose.lookX))
        setSigned("ParamEyeBallY", f(pose.lookY))

        // ── 眉 ──
        // 心情好时眉毛上扬一点。没有独立的 mood 字段，用 smile 代表。
        let brow = f(pose.smile) * 0.6 - 0.1
        setSigned("ParamBrowLForm", brow)
        setSigned("ParamBrowRForm", brow)

        // ── 嘴 ──
        setSigned("ParamMouthForm", f(pose.smile) * 1.4 - 0.3)
        setUnit("ParamMouthOpenY", 0)

        // ── 腮红 ──
        setUnit("ParamCheek", f(pose.blush))

        // ── 身体 ──
        setSigned("ParamBodyAngleX", f(pose.bodySway) * 0.8)
        setSigned("ParamBodyAngleZ", f(pose.bodySway) * 0.5)
        setSigned("ParamBodyAngleY", -f(pose.headBob) * 18)
        setUnit("ParamBreath", f(pose.breath))

        // ── 头发 ──
        // 前发/侧发/后发依次比呆毛慢一点，形成层次。
        let sway = f(pose.hairSway)
        setSigned("ParamHairAhoge", sway * 1.0)
        setSigned("ParamHairFront", sway * 0.75)
        setSigned("ParamHairSide", sway * 0.85)
        setSigned("ParamHairBack", sway * 0.6)
    }

    /// 这个模型缺了哪些我们想驱动的参数。诊断用。
    var missingParameters: [String] {
        Self.usedParameters.filter { slots[$0] == nil }
    }
}

#endif

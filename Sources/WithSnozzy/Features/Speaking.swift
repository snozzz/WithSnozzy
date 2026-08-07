import AVFoundation
import Observation

/// 让她把话说出来。
///
/// 用系统自带的 `AVSpeechSynthesizer`，零第三方依赖、本机合成、**没有网络往返**，
/// 所以出声这一段基本是零延迟。
///
/// ## 一句一句地说，别等整段
///
/// 这是"实时"里最关键的一步。回复是一个字一个字流回来的，等整段攒完再念，
/// 就把流式省下来的时间又还回去了。所以这里**按句子切**：遇到句末标点就
/// 把这一句交给合成器，后面的接着排队。于是她在第一句话生成完的那一刻
/// 就开口了，而不是等最后一个字。
///
/// 实测串起来：说完 → 静音判定 0.9 秒 → 首字 1.4 秒 → 第一句约 2 秒时开口。
///
/// ## 嘴型改由这里驱动
///
/// 原来嘴动多久是**按字数估**的（`Chatter.speechTime`，每秒四五个字）。
/// 有了真的语音就不用估了：合成器自己知道说到哪一个字、什么时候说完。
/// 这也顺带修掉了第 25 条那个坑的根源——"气泡还在"和"还在说话"
/// 从此不用两处各算一遍。
@MainActor
@Observable
final class Speaking: NSObject, AVSpeechSynthesizerDelegate {

    /// 开着没有。关掉之后她只显示文字不出声。
    var enabled = true {
        didSet {
            guard enabled != oldValue else { return }
            if !enabled { stop() }
            onChanged?()
        }
    }
    var onChanged: (() -> Void)?

    /// 此刻真的在出声。嘴型动画读它。
    private(set) var isSpeaking = false

    private let synth = AVSpeechSynthesizer()
    /// 还没凑成一句的零头。
    private var buffer = ""

    /// 挑一个声音。
    ///
    /// 优先 Siri 那两把（`siri_*`），比 `Tingting` 这些老的紧凑音自然不少。
    /// **系统里装的全是 compact 档**（实测 21 个中文声音 quality 都是 1）——
    /// 到「系统设置 → 辅助功能 → 朗读内容 → 系统声音」里下载"增强"或"高级"
    /// 版本能明显好听一档，但那是用户自己的事，代码这边只负责挑当前最好的。
    private static var voice: AVSpeechSynthesisVoice? {
        let zh = AVSpeechSynthesisVoice.speechVoices().filter { $0.language == "zh-CN" }
        // 质量高的优先；同档里优先 Siri
        return zh.max { a, b in
            (a.quality.rawValue, a.identifier.contains("siri") ? 1 : 0)
                < (b.quality.rawValue, b.identifier.contains("siri") ? 1 : 0)
        }
    }

    override init() {
        super.init()
        synth.delegate = self
    }

    /// 收到一段增量。凑够一句就念出去。
    ///
    /// 句末标点之外还要卡一个**长度上限**：模型偶尔会一口气写一长串不带标点的
    /// 东西，只等标点的话那一段会一直攒到最后才出声。
    func feed(_ delta: String) {
        guard enabled else { return }
        buffer += delta
        while let cut = Self.sentenceEnd(in: buffer) {
            let sentence = String(buffer[..<cut])
            buffer = String(buffer[cut...])
            enqueue(sentence)
        }
    }

    /// 这一轮说完了，把零头也念掉。
    func finish() {
        guard enabled else { return }
        let rest = buffer
        buffer = ""
        enqueue(rest)
    }

    /// 不走流式的时候（codex 那条是一次性回整句）直接念。
    func say(_ text: String) {
        guard enabled else { return }
        buffer = ""
        enqueue(text)
    }

    func stop() {
        buffer = ""
        synth.stopSpeaking(at: .immediate)
        isSpeaking = false
    }

    private func enqueue(_ raw: String) {
        let text = raw.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !text.isEmpty else { return }
        let u = AVSpeechUtterance(string: text)
        u.voice = Self.voice
        // 默认语速念中文偏慢，像在念课文。0.52 接近放松的说话速度。
        u.rate = 0.52
        u.pitchMultiplier = 1.06     // 稍微亮一点，配她的年纪
        u.postUtteranceDelay = 0.05  // 句子之间留一点点气口
        isSpeaking = true
        synth.speak(u)
    }

    /// 一句话在哪儿结束。返回**切点之后**的下标。
    private static func sentenceEnd(in s: String) -> String.Index? {
        let stops: Set<Character> = ["。", "！", "？", "…", "\n", ".", "!", "?", "，", "、", "，"]
        // 太短的不切：「嗯，」单独念一句会一顿一顿的
        guard s.count >= 6 else {
            return s.count >= 40 ? s.index(s.startIndex, offsetBy: 40) : nil
        }
        if let i = s.firstIndex(where: { stops.contains($0) }) {
            return s.index(after: i)
        }
        // 没有标点也不能无限攒
        return s.count >= 40 ? s.index(s.startIndex, offsetBy: 40) : nil
    }

    // MARK: - AVSpeechSynthesizerDelegate

    nonisolated func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer,
                                       didFinish utterance: AVSpeechUtterance) {
        Task { @MainActor in
            // 队列空了才算说完。一句一句排队时中间那几次 didFinish 不算。
            if !synthesizer.isSpeaking { self.isSpeaking = false }
        }
    }

    nonisolated func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer,
                                       didCancel utterance: AVSpeechUtterance) {
        Task { @MainActor in self.isSpeaking = false }
    }
}

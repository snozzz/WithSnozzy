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
/// 延迟要分开记：0.9 秒静音后，热会话约 1.4–2.0 秒开始出字；语音必须等
/// 第一处句末标点（或长度上限），系统 TTS 随后约 0.01 秒出声。`--chat`
/// 只能量文字，真正合成延迟由 `--say` 单独量，二者不能混成一个“首字”数字。
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

    /// 用哪把嗓子。`local` 需要 `Scripts/tts_serve.sh` 起着；
    /// 服务不在的时候**自动退回系统声音**，不让她哑掉。
    var engine: VoiceEngine = .system {
        didSet {
            guard engine != oldValue else { return }
            stop()
            onChanged?()
        }
    }
    let local = LocalVoice()

    /// 本机合成是**异步**的（一句一秒半），所以要排队：
    /// 合成第二句的同时播第一句，而且必须按顺序播。
    /// 把每一句串在同一条 Task 链上，顺序就是天然保证的。
    private var pipeline: Task<Void, Never>?
    private let player = AVAudioEngine()
    private let node = AVAudioPlayerNode()
    private var playerReady = false
    /// 还有几句没播完。归零才算她说完了。
    private var outstanding = 0

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
        pipeline?.cancel()
        pipeline = nil
        outstanding = 0
        if playerReady { node.stop() }
        isSpeaking = false
    }

    private func enqueue(_ raw: String) {
        let text = raw.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !text.isEmpty else { return }
        if engine == .local {
            enqueueLocal(text)
            return
        }
        let u = AVSpeechUtterance(string: text)
        u.voice = Self.voice
        // 默认语速念中文偏慢，像在念课文。0.52 接近放松的说话速度。
        u.rate = 0.52
        u.pitchMultiplier = 1.06     // 稍微亮一点，配她的年纪
        u.postUtteranceDelay = 0.05  // 句子之间留一点点气口
        isSpeaking = true
        synth.speak(u)
    }

    // MARK: - 本机合成服务

    /// 把一句话交给本机服务，合成完按顺序播。
    ///
    /// **合成和播放是流水线**：第一句在播的时候第二句已经在合成了。
    /// 不这样的话每句之间会空出一秒半，听着像卡带。
    private func enqueueLocal(_ text: String) {
        // **这里不能置 `isSpeaking`。** 合成要一秒半，这段时间是没有声音的；
        // 提前置上的话她的嘴会对着空气动一秒半。真正出声是在 `play()` 里，
        // 那才是嘴该开始动的时刻。
        outstanding += 1
        let previous = pipeline
        pipeline = Task { [weak self] in
            // 等前一句**排完队**（不是播完）——`scheduleBuffer` 自己会排，
            // 我们只要保证入队顺序对
            await previous?.value
            guard let self, !Task.isCancelled else { return }
            guard let data = await self.local.synthesize(text) else {
                // 服务挂了就用系统声音把这句补上，别让她哑掉
                self.outstanding -= 1
                self.speakWithSystem(text)
                return
            }
            guard !Task.isCancelled else { self.outstanding -= 1; return }
            self.play(data)
        }
    }

    /// 退回系统 TTS 说一句。
    private func speakWithSystem(_ text: String) {
        let u = AVSpeechUtterance(string: text)
        u.voice = Self.voice
        u.rate = 0.52
        u.pitchMultiplier = 1.06
        isSpeaking = true
        synth.speak(u)
    }

    /// 播一段服务返回的 WAV。
    ///
    /// 用 `AVAudioPlayerNode` 而不是 `AVAudioPlayer`：一句一句排进同一个节点，
    /// 播放是无缝衔接的；`AVAudioPlayer` 要自己接力，句子之间会有停顿。
    private func play(_ wav: Data) {
        guard let buffer = Self.decode(wav) else {
            outstanding -= 1
            if outstanding <= 0 { isSpeaking = false }
            return
        }
        if !playerReady {
            player.attach(node)
            player.connect(node, to: player.mainMixerNode, format: buffer.format)
            // **引擎要在接好线之后再启动**，而且格式要跟着第一段音频走——
            // 服务返回的是 32 kHz 单声道，和系统默认输出格式不一样
            try? player.start()
            playerReady = true
        }
        // 到这儿才是真的要出声了
        isSpeaking = true
        node.scheduleBuffer(buffer, completionCallbackType: .dataPlayedBack) { [weak self] _ in
            Task { @MainActor in
                guard let self else { return }
                self.outstanding -= 1
                if self.outstanding <= 0 { self.isSpeaking = false }
            }
        }
        if !node.isPlaying { node.play() }
    }

    /// WAV 字节 → PCM 缓冲。
    private static func decode(_ wav: Data) -> AVAudioPCMBuffer? {
        // `AVAudioFile` 只认文件，所以先落盘。一句话一两百 KB，可以忽略。
        let url = FileManager.default.temporaryDirectory
            .appendingPathComponent("snozzy-\(UUID().uuidString).wav")
        defer { try? FileManager.default.removeItem(at: url) }
        guard (try? wav.write(to: url)) != nil,
              let file = try? AVAudioFile(forReading: url),
              let buf = AVAudioPCMBuffer(pcmFormat: file.processingFormat,
                                         frameCapacity: AVAudioFrameCount(file.length)),
              (try? file.read(into: buf)) != nil else { return nil }
        return buf
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

    // MARK: - 自检

    /// 让她当场说一句，量延迟。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --say "在呢" [--engine local]
    /// ```
    ///
    /// **`--chat` 验不到这条路**：那条自检只跑对话，不经过 `Speaking`。
    /// 而"她多久开口"这个数是本机合成这条路唯一重要的指标，
    /// 得单独量——服务在不在、合成多久、退回系统声音了没有。
    static var requestedLine: String? {
        let a = CommandLine.arguments
        guard let i = a.firstIndex(of: "--say"), i + 1 < a.count else { return nil }
        return a[i + 1]
    }

    static func runSelfTest(line: String) async -> Int32 {
        let a = CommandLine.arguments
        let want: VoiceEngine = a.contains("local") ? .local : .system
        let sp = Speaking()
        sp.engine = want
        print("嗓子：\(want.label)")

        if want == .local {
            await sp.local.probe()
            guard sp.local.isReachable else {
                print("✗ 本机合成服务没在跑。先 ./Scripts/tts_serve.sh --bg")
                return 1
            }
            print("  ✓ 服务在")
        }

        let started = Date()
        var spokeAt: Date?
        sp.say(line)
        // 等她真的出声（`isSpeaking` 由播放回调驱动），再等说完
        while Date().timeIntervalSince(started) < 30 {
            if sp.isSpeaking, spokeAt == nil { spokeAt = Date() }
            if spokeAt != nil, !sp.isSpeaking { break }
            try? await Task.sleep(for: .milliseconds(30))
        }
        guard let spokeAt else {
            print("✗ 一直没出声")
            return 1
        }
        let delay = spokeAt.timeIntervalSince(started)
        let total = Date().timeIntervalSince(started)
        print(String(format: "  开口用了 %.2f 秒，整句播完 %.1f 秒", delay, total))
        // 本机合成一句一秒半左右；超过三秒就是有别的问题
        let ok = want == .system ? delay < 1.0 : delay < 3.5
        print(ok ? "  ✓ 延迟正常" : "  ✗ 开口太慢")
        return ok ? 0 : 1
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

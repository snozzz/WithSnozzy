import AVFoundation
import Observation
import Speech

/// 用麦克风跟她说话。
///
/// 走 Apple 自带的 `Speech` 框架，**零第三方依赖**——这个项目的硬约束之一。
/// 而且实测这台机器上 `zh-CN` 支持**本地识别**
/// （`supportsOnDeviceRecognition == true`），所以强制走本地：
/// 声音不出这台机器，也不用等网络往返。
///
/// ## 为什么单开一个 AVAudioEngine
///
/// `AudioEngine` 那个引擎跑的是实时 DSP 合成，渲染回调里**零分配零锁**。
/// 往它身上挂一个输入 tap 等于在那条路径上加东西，不值得冒这个险；
/// 而 macOS 上开两个引擎完全正常，一个只管输出、一个只管输入，互不相干。
///
/// ## 说完自动停
///
/// 不做"按住说话"：这个 app 大部分时间窗口在后台或者被别的窗口盖着，
/// 按住一个按钮不放很别扭。改成点一下开始听，**静下来 1.6 秒就自动收**——
/// 和真人对话的停顿感一致，也省掉"说完还要再点一次"这一步。
///
/// 判据在 `--voice`：不用真的对着麦克风说，直接喂一段 WAV 进去看认成什么。
@MainActor
@Observable
final class VoiceInput {

    enum Status: Equatable {
        case idle
        /// 正在听。`transcript` 会一路更新。
        case listening
        /// 用户拒了麦克风或语音识别的权限。
        case denied(String)
        /// 这台机器上认不了中文（没有对应的识别器）。
        case unavailable(String)
    }

    private(set) var status: Status = .idle
    /// 边说边出的识别结果。UI 拿它做实时回显——**必须有**，
    /// 不然从开口到出结果这几秒钟完全没反馈，人会以为它没在听。
    private(set) var transcript = ""
    /// 输入电平 0…1，给 UI 做一个会动的指示。
    ///
    /// 和 `transcript` 是两回事：识别结果要说完一个词才出，而电平是即时的。
    /// 只有电平能回答"它到底有没有听见我"——第一版没有这个，
    /// 麦克风选错了设备（系统默认是个虚拟声卡）时完全看不出问题在哪。
    private(set) var level: Double = 0

    /// 一句话说完了。由 `AppState` 接过去丢给对话系统。
    var onFinal: ((String) -> Void)?

    var isListening: Bool { status == .listening }

    /// 静多久算说完。
    ///
    /// 1.6 秒是"想一下下一句"和"说完了"的分界。短了会在句中被切断
    /// （中文句子里换气常常有一秒），长了每句话末尾都要干等。
    private static let silenceToStop: Double = 1.6
    /// 一次最多听多久。防止麦克风一直开着——引擎开着就一直在耗电，
    /// 而且忘了关的话下一次点开会以为坏了。
    private static let maxDuration: Double = 30

    /// 识别用的语言。跟着系统语言走会在英文系统上认不出中文，写死中文。
    private static let locale = Locale(identifier: "zh-CN")

    private var engine: AVAudioEngine?
    private var request: SFSpeechAudioBufferRecognitionRequest?
    private var task: SFSpeechRecognitionTask?
    private var watchdog: Timer?
    private var lastVoiceAt = Date()
    private var startedAt = Date()
    /// 已经识别到过东西。没说话就静音超时的话不该往外发空串。
    private var heardSomething = false

    // MARK: - 开关

    func toggle() {
        isListening ? stop(send: true) : start()
    }

    func start() {
        guard !isListening else { return }
        transcript = ""
        heardSomething = false

        // 两个权限要分别问：语音识别（Speech）和麦克风（AVCaptureDevice）。
        // 少问一个的表现是"点了没反应"，不会有任何报错——
        // 所以这里两个都显式走一遍，拒了就把原因写进 status 让 UI 说出来。
        SFSpeechRecognizer.requestAuthorization { [weak self] auth in
            Task { @MainActor in
                guard let self else { return }
                guard auth == .authorized else {
                    self.status = .denied("语音识别没授权。到「系统设置 → 隐私与安全性 "
                                          + "→ 语音识别」里把 WithSnozzy 打开。")
                    return
                }
                let granted = await AVCaptureDevice.requestAccess(for: .audio)
                guard granted else {
                    self.status = .denied("麦克风没授权。到「系统设置 → 隐私与安全性 "
                                          + "→ 麦克风」里把 WithSnozzy 打开。")
                    return
                }
                self.beginCapture()
            }
        }
    }

    private func beginCapture() {
        guard let recognizer = SFSpeechRecognizer(locale: Self.locale),
              recognizer.isAvailable else {
            status = .unavailable("这台机器上没有中文语音识别。"
                                  + "到「系统设置 → 键盘 → 听写」里把中文装上。")
            return
        }

        let req = SFSpeechAudioBufferRecognitionRequest()
        req.shouldReportPartialResults = true
        // 本地识别：声音不出这台机器，也不用等网络。实测 zh-CN 支持。
        // 不支持时**必须退回服务器识别**，否则任务会直接报错、一个字都出不来。
        req.requiresOnDeviceRecognition = recognizer.supportsOnDeviceRecognition

        let engine = AVAudioEngine()
        let input = engine.inputNode
        // 格式必须问节点要。写死采样率在换了外接声卡的机器上会直接崩——
        // 这台机器上系统默认输入就是个虚拟声卡（OrayVirtualAudioDevice）。
        let format = input.outputFormat(forBus: 0)
        guard format.sampleRate > 0 else {
            status = .unavailable("拿不到麦克风的输入格式。是不是没有可用的输入设备？")
            return
        }

        input.installTap(onBus: 0, bufferSize: 2048, format: format) { [weak self] buf, _ in
            req.append(buf)
            // 电平在音频线程上算，只回传一个 Double。
            // 别在这里碰任何 @MainActor 的东西——这是实时线程。
            let rms = Self.rms(buf)
            Task { @MainActor in self?.noteLevel(rms) }
        }

        engine.prepare()
        do {
            try engine.start()
        } catch {
            status = .unavailable("麦克风打不开：\(error.localizedDescription)")
            return
        }

        self.engine = engine
        self.request = req
        startedAt = Date()
        lastVoiceAt = Date()
        status = .listening

        task = recognizer.recognitionTask(with: req) { [weak self] result, error in
            Task { @MainActor in
                guard let self else { return }
                if let result {
                    self.transcript = result.bestTranscription.formattedString
                    if !self.transcript.isEmpty {
                        self.heardSomething = true
                        self.lastVoiceAt = Date()
                    }
                    if result.isFinal { self.stop(send: true) }
                } else if error != nil, self.isListening {
                    // 识别中途出错就把已经认出来的那部分交出去，别整句丢掉
                    self.stop(send: self.heardSomething)
                }
            }
        }

        // 静音检测和总时长上限。放在定时器里而不是识别回调里：
        // **没人说话的时候识别回调根本不触发**，靠它来判"静了多久"会永远等下去。
        watchdog = Timer.scheduledTimer(withTimeInterval: 0.2, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated { self?.tick() }
        }
    }

    private func tick() {
        guard isListening else { return }
        let now = Date()
        if now.timeIntervalSince(startedAt) > Self.maxDuration {
            stop(send: heardSomething)
            return
        }
        // 一个字都还没听到时不启动静音计时——不然点开之后还没开口就被收了
        if heardSomething, now.timeIntervalSince(lastVoiceAt) > Self.silenceToStop {
            stop(send: true)
        }
    }

    /// 收工。`send` 决定要不要把这句话交出去。
    func stop(send: Bool) {
        watchdog?.invalidate()
        watchdog = nil
        engine?.inputNode.removeTap(onBus: 0)
        engine?.stop()
        engine = nil
        request?.endAudio()
        request = nil
        task?.cancel()
        task = nil
        level = 0
        if case .listening = status { status = .idle }

        let line = transcript.trimmingCharacters(in: .whitespacesAndNewlines)
        transcript = ""
        if send, !line.isEmpty { onFinal?(line) }
    }

    private func noteLevel(_ rms: Float) {
        // 电平做一点平滑，不然指示器在抖。衰减比上升慢，看着像个真的电平表。
        let target = Double(min(1, max(0, rms * 12)))
        level = target > level ? target : level * 0.75 + target * 0.25
        // 有声音就顺手刷一下静音计时。只靠识别结果刷的话，
        // 说了一句识别器还没吐字的那一两秒会被当成静音。
        if target > 0.06, heardSomething { lastVoiceAt = Date() }
    }

    // MARK: - 自检

    /// 不用对着麦克风说话，直接查这条路上会不会坏。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --voice
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --voice 某段录音.wav
    /// ```
    ///
    /// 语音这条路的毛病几乎全在**开口之前**：中文识别器装没装、权限给没给、
    /// 有没有可用的输入设备、系统默认输入是不是选中了一个虚拟声卡
    /// （这台机器上默认就有一个 OrayVirtualAudioDevice）。这些都不用出声就能查，
    /// 而且查不出来的话，对着麦克风喊半天也只会得到"没反应"。
    ///
    /// 给了 WAV 就再多做一步：把文件喂给识别器，看认成什么——
    /// 这一步能把"听不见"和"认不出"分开，是唯一能离线验证识别质量的办法。
    static var selfTestRequested: Bool {
        CommandLine.arguments.contains("--voice")
    }

    /// 这条自检的输出去哪。
    ///
    /// 同时写 stderr **和一个文件**，两个都不能少，各自解决一个问题：
    ///
    /// - **stderr 而不是 `print`**：stdout 在非终端下是块缓冲的，
    ///   进程被系统 abort 掉时缓冲区全丢，表现成"一个字都没打印"，
    ///   看着像启动就崩了、实际是崩在中间某一步。我在这上面白查了一轮，
    ///   而 `--debug-windows` 早就为同一个理由这么写了
    /// - **文件**：这条自检**必须用 `open` 启动**（见 `runSelfTest` 的说明），
    ///   而那样启动是拿不到 stderr 的
    static let logPath = "/tmp/snozzy-voice.log"

    private static func say(_ text: String) {
        let line = text + "\n"
        FileHandle.standardError.write(Data(line.utf8))
        if let h = FileHandle(forWritingAtPath: logPath) {
            h.seekToEndOfFile(); h.write(Data(line.utf8)); h.closeFile()
        }
    }

    /// **必须用 `open` 启动，不能直接跑 bundle 里的二进制。**
    ///
    /// ```
    /// open dist/WithSnozzy.app --args --voice   # 对
    /// dist/…/MacOS/WithSnozzy --voice           # 错，直接被系统打死
    /// ```
    ///
    /// 从终端直接跑二进制时，TCC 认的**责任进程是终端**，而终端的 Info.plist
    /// 里没有麦克风/语音识别的用途说明，于是请求权限的那一刻整个进程被
    /// SIGABRT 掉——没有任何报错，只有一个退出码 134。
    /// 用 `open` 启动时责任进程才是 app 自己，权限框才会正常弹出来。
    ///
    /// 真实使用不受影响：用户是双击图标启动的。只有我在终端里测才会撞上。
    static func runSelfTest() async -> Int32 {
        // 每次跑重开一份日志，免得和上一次的混在一起看不出是哪一轮
        FileManager.default.createFile(atPath: logPath, contents: nil)
        var ok = true
        func line(_ pass: Bool, _ text: String) {
            ok = ok && pass
            say((pass ? "  ✓ " : "  ✗ ") + text)
        }

        say("识别器：")
        let zh = SFSpeechRecognizer.supportedLocales()
            .map(\.identifier).filter { $0.hasPrefix("zh") }.sorted()
        line(!zh.isEmpty, "系统支持的中文 locale：\(zh.joined(separator: "、"))")
        guard let recognizer = SFSpeechRecognizer(locale: Self.locale) else {
            say("  ✗ 建不出 \(Self.locale.identifier) 的识别器")
            return 1
        }
        line(recognizer.isAvailable, "\(Self.locale.identifier) 可用")
        say("  · 本地识别：\(recognizer.supportsOnDeviceRecognition ? "支持（声音不出本机）" : "不支持，会走 Apple 服务器")")

        say("权限：")
        let auth = await withCheckedContinuation { (c: CheckedContinuation<SFSpeechRecognizerAuthorizationStatus, Never>) in
            SFSpeechRecognizer.requestAuthorization { c.resume(returning: $0) }
        }
        line(auth == .authorized,
             "语音识别：" + ["没问过", "被拒绝", "受限", "已授权"][min(auth.rawValue, 3)])
        let mic = await AVCaptureDevice.requestAccess(for: .audio)
        line(mic, "麦克风：" + (mic ? "已授权" : "被拒绝"))

        say("输入设备：")
        let devices = AVCaptureDevice.DiscoverySession(
            deviceTypes: [.microphone], mediaType: .audio, position: .unspecified).devices
        line(!devices.isEmpty, "找到 \(devices.count) 个："
             + devices.map(\.localizedName).joined(separator: "、"))
        // 系统默认输入是哪个。**这一条最容易坑人**：装过远程控制软件的机器上
        // 默认输入常常是个虚拟声卡，选中它的话麦克风全程静音，
        // 而 app 这边一点错都不会报。
        let engine = AVAudioEngine()
        let format = engine.inputNode.outputFormat(forBus: 0)
        line(format.sampleRate > 0,
             String(format: "当前输入格式 %.0f Hz / %d 声道",
                    format.sampleRate, format.channelCount))
        if let def = AVCaptureDevice.default(for: .audio) {
            let virtual = def.localizedName.lowercased().contains("virtual")
            line(!virtual, "系统默认输入是「\(def.localizedName)」"
                 + (virtual ? " ← 这是个虚拟声卡，选它录不到声音" : ""))
        }

        // 给了 WAV 就顺带验一下识别质量
        let args = CommandLine.arguments
        if let i = args.firstIndex(of: "--voice"), i + 1 < args.count,
           !args[i + 1].hasPrefix("-") {
            let path = args[i + 1]
            say("识别 \(path)：")
            let req = SFSpeechURLRecognitionRequest(url: URL(fileURLWithPath: path))
            req.requiresOnDeviceRecognition = recognizer.supportsOnDeviceRecognition
            let text = await withCheckedContinuation { (c: CheckedContinuation<String?, Never>) in
                var resumed = false
                recognizer.recognitionTask(with: req) { result, error in
                    guard !resumed else { return }
                    if let result, result.isFinal {
                        resumed = true
                        c.resume(returning: result.bestTranscription.formattedString)
                    } else if error != nil {
                        resumed = true
                        c.resume(returning: nil)
                    }
                }
            }
            line(text?.isEmpty == false, "认成：「\(text ?? "（失败）")」")
        }

        say("VOICE " + (ok ? "全部通过" : "有不合格项"))
        return ok ? 0 : 1
    }

    private nonisolated static func rms(_ buf: AVAudioPCMBuffer) -> Float {
        guard let ch = buf.floatChannelData?[0] else { return 0 }
        let n = Int(buf.frameLength)
        guard n > 0 else { return 0 }
        var sum: Float = 0
        for i in 0..<n { sum += ch[i] * ch[i] }
        return (sum / Float(n)).squareRoot()
    }
}

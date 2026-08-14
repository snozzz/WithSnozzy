import Observation
import SwiftUI

/// 侧边可展开的面板。`nil` 表示全部收起，此时只剩房间和 Snozzy。
enum Panel: String, CaseIterable, Identifiable {
    case mixer, focus, tasks, chat, library, settings
    var id: String { rawValue }

    var symbol: String {
        switch self {
        case .mixer: "slider.horizontal.3"
        case .focus: "timer"
        case .tasks: "checklist"
        case .chat: "bubble.left.and.bubble.right"
        case .library: "music.note.list"
        case .settings: "gearshape"
        }
    }

    var title: String {
        switch self {
        case .mixer: "环境音"
        case .focus: "专注"
        case .tasks: "待办"
        case .chat: "说话"
        case .library: "音乐库"
        case .settings: "设置"
        }
    }
}

/// 场景时间的来源。
enum TimeMode: String, CaseIterable, Codable {
    case auto    // 跟随系统时钟
    case dawn, day, dusk, night

    var label: String {
        switch self {
        case .auto: "跟随时间"
        case .dawn: "清晨"
        case .day: "白天"
        case .dusk: "黄昏"
        case .night: "深夜"
        }
    }

    /// 固定模式对应的小时数；`auto` 返回 nil。
    var fixedHour: Double? {
        switch self {
        case .auto: nil
        case .dawn: 7.0
        case .day: 13.0
        case .dusk: 19.5
        case .night: 1.0
        }
    }
}

/// 全局 UI 状态。刻意保持小而扁平——它每帧都会被读，
/// 任何放进来的东西都应该是「画面真的需要」的。
@MainActor
@Observable
final class AppState {
    /// 音频引擎。`@ObservationIgnored` 是因为它内部的状态变化频率远高于 UI
    /// 需要刷新的频率——播放信息由 UI 主动轮询，不走观察机制。
    @ObservationIgnored let audio = AudioEngine()

    /// 番茄钟、待办、本地音乐库。都是 `@Observable`，嵌套观察会自动生效。
    let focus = FocusTimer()
    let tasks = TaskList()
    let library = MusicLibrary()

    /// 她说的话。
    let chatter = Chatter()

    /// 近景切换。你把窗口切回前台，她会托着腮凑近看你一眼。
    let closeUp = CloseUp()

    /// 和她对话。走本机已登录的命令行（Claude Pro / Codex），不用 API key。
    let chat = SnozzyChat()

    /// 用麦克风跟她说话。识别走本机，声音不出这台机器。
    let voice = VoiceInput()

    /// 她把话说出来。本机合成，零延迟。
    let speaking = Speaking()

    /// 给 ChatGPT 那条 MCP 通道用的：定期写一份状态快照、收 GPT 写回来的东西。
    @ObservationIgnored private var bridge: Timer?
    /// “清空全部数据”成功后，退出回调不能把刚删掉的内存状态重新写回来。
    @ObservationIgnored private var suppressPersistenceOnExit = false
    /// Live2D 模型的加载状态。加载失败只会回落到矢量绘制，不影响其它功能。
    let live2d = Live2DStage()

    /// 手绘房间素材。缺失时场景自动回落到程序化绘制。
    let sceneAssets = SceneAssets()

    /// Non-persistent status and action requests for the optional real-time
    /// 3D room. The WebView itself is owned by the view tree, not AppState.
    let realtime3D = Realtime3DSession()

    /// 指针位置。底部控制条靠它决定显隐。
    let pointer = PointerWatcher()

    /// 角色的渲染方式。
    var characterStyle: CharacterStyle = .rendered {
        didSet {
            guard characterStyle != oldValue else { return }
            if characterStyle == .live2d { live2d.loadIfNeeded() }
            scheduleSave()
        }
    }

    /// 刚完成一段专注的时刻。Snozzy 的心情会短暂地高涨一阵。
    private var lastCelebration: Date?

    /// 完成反馈的短视觉包络。它和下面 mood 的 100 秒提升是两条不同的时间线：
    /// 心情慢慢退，画面只在刚完成时轻轻亮一下。
    static let celebrationDuration: TimeInterval = 1.8
    private static let celebrationRise: TimeInterval = 0.30
    private static let celebrationDwell: TimeInterval = 0.48

    /// 由完成时刻推导短反馈，不持有新的定时器或动画状态。
    /// `t` 必须是共享 `TimelineView` 的 reference-date 时间戳。
    func celebrationAmount(at t: TimeInterval) -> Double {
        Self.celebrationAmount(since: lastCelebration?.timeIntervalSinceReferenceDate,
                               at: t)
    }

    /// 同一套纯计算也供离线生产快照使用；快照传入的起点仍代表真实
    /// `lastCelebration`，没有另造一套视觉动画。
    static func celebrationAmount(since start: TimeInterval?, at t: TimeInterval) -> Double {
        guard let start else { return 0 }
        let elapsed = t - start
        guard elapsed >= 0, elapsed < celebrationDuration else { return 0 }
        if elapsed < celebrationRise {
            return smoothstep(elapsed / celebrationRise)
        }
        let fallStart = celebrationRise + celebrationDwell
        guard elapsed < fallStart else {
            return 1 - smoothstep((elapsed - fallStart)
                                   / (celebrationDuration - fallStart))
        }
        return 1
    }

    /// Mood boost keeps its original 100-second lifetime, but a clock moving
    /// backwards must not turn a future celebration into a fresh full boost.
    static func celebrationMoodBoost(since start: TimeInterval?, at t: TimeInterval) -> Double {
        guard let start else { return 0 }
        let elapsed = t - start
        guard elapsed >= 0, elapsed < 100 else { return 0 }
        return 1 - elapsed / 100
    }

    /// Snozzy 的心情 0…1。
    ///
    /// 由「今天专注了多久」打底，完成一段番茄钟后叠加一段会衰减的兴奋值。
    /// 这个值每帧都会被读到，所以刻意做成纯计算——不需要额外的定时器去驱动衰减。
    var mood: Double {
        let base = 0.40 + min(Double(focus.todayMinutes) / 180.0, 0.26)
        let boost = Self.celebrationMoodBoost(
            since: lastCelebration?.timeIntervalSinceReferenceDate,
            at: Date().timeIntervalSinceReferenceDate)
        return min(1.0, base + boost * 0.42)
    }

    func celebrate(at date: Date = Date()) { lastCelebration = date }

    /// 换 Live2D 模型。路径必须是绝对的。
    func setLive2DModel(path: String) {
        live2d.unload()
        live2d.modelDirectory = path
        if characterStyle == .live2d { live2d.loadIfNeeded() }
        scheduleSave()
    }

    /// 困倦程度 0…1。
    ///
    /// 深夜、并且没在放音乐的时候她会打瞌睡。用平滑过渡而不是到点硬切——
    /// 凌晨一点整突然睡着会很出戏。
    var drowsy: Double {
        guard !isPlaying else { return 0 }
        let h = sceneHour
        // 00:30 起逐渐困，01:30 完全睡着；05:00 起转醒，06:00 完全清醒。
        if h >= 0.5 && h < 1.5 { return smoothstep((h - 0.5) / 1.0) }
        if h >= 1.5 && h < 5.0 { return 1.0 }
        if h >= 5.0 && h < 6.0 { return 1 - smoothstep((h - 5.0) / 1.0) }
        return 0
    }

    /// 她此刻嘴该不该在动。
    ///
    /// **有真语音的时候就别再估了。** 原来是按字数估时长（第 25 条），
    /// 因为那时候她只有文字。现在 TTS 自己知道说到哪儿、什么时候说完，
    /// 直接问它。台词库那些不出声的句子仍然走估算。
    var sheIsTalking: Bool {
        speaking.isSpeaking || chatter.isSpeaking
    }

    // MARK: - 和 ChatGPT 之间的桥

    /// 写一份状态快照给 MCP 服务器读。
    ///
    /// MCP 服务器是 ChatGPT **另外拉起来的进程**，读不到我们内存里的东西。
    /// 待办和专注记录本来就落盘（它直接读那两个文件），
    /// 这里补的是只存在内存里的部分：几点了、在放什么。
    private func writeSnapshot() {
        var snap = SnozzyState()
        snap.at = Date()
        snap.hour = sceneHour
        snap.playing = isPlaying
        snap.track = trackTitle
        snap.focusPhase = String(describing: focus.phase)
        snap.todayMinutes = focus.todayMinutes
        // 长期记忆不复制进无查询词的 MCP 状态快照；本地聊天按当前问题检索。
        snap.memories = []
        Store.save(snap, as: MCPServer.stateName)
    }

    /// 收 GPT 写回来的东西。
    ///
    /// **它不能直接改 `tasks.json`**：待办在我们内存里，下一次存盘会把它
    /// 整份覆盖掉。所以它写进 `inbox.json`，我们在同一把跨进程锁中应用并确认。
    /// 业务成功后才清空；中途崩溃会重放，也不会覆盖恰好同时写进来的那条。
    private func drainInbox() {
        Inbox.consume { item in
            guard let id = item["id"] as? String, !id.isEmpty else { return .discard }
            switch item["kind"] as? String {
            case "addTodo":
                guard let raw = item["title"] as? String else { return .discard }
                let title = raw.trimmingCharacters(in: .whitespacesAndNewlines)
                guard !title.isEmpty else { return .discard }
                if !tasks.pending.contains(where: { $0.title == title }) { tasks.add(title) }
                // 即使这是上次写盘失败后留在内存里的重复项，也要再同步落盘，
                // 不能仅凭“已经看见”就清掉权威队列。
                return tasks.persistNow() ? .applied : .retry

            case "completeTodo":
                guard let raw = item["title"] as? String else { return .discard }
                let title = raw.trimmingCharacters(in: .whitespacesAndNewlines)
                guard !title.isEmpty else { return .discard }
                if let hit = tasks.pending.first(where: { $0.title == title }) {
                    tasks.toggle(hit)
                } else if !tasks.items.contains(where: { $0.title == title && $0.done }) {
                    return .discard
                }
                return tasks.persistNow() ? .applied : .retry

            case "remember":
                guard let raw = item["note"] as? String else { return .discard }
                let note = MemoryStore.sanitizedInput(raw)
                guard !note.isEmpty else { return .discard }
                return chat.memories.add(note) != nil ? .applied : .retry

            default:
                return .discard
            }
        }
    }

    /// 说给对话系统听的"此刻的情况"。
    ///
    /// 这几句是她能聊起你在干什么的**全部依据**——不给的话，她只是个
    /// 泛泛的聊天角色，说不出"你那个导出模块还没动"这种话，
    /// 而那正是"陪着你"和"聊天机器人"的区别。
    ///
    /// 只给**画面里本来就看得见**的东西：时间、在放什么、番茄钟、待办。
    /// 别把她看不见的（文件路径、剪贴板、别的 app）也塞进去——一是没必要，
    /// 二是这些内容会被送到命令行那一头去。
    private var situation: String {
        var lines: [String] = []
        let h = Int(sceneHour), m = Int((sceneHour - Double(h)) * 60)
        lines.append(String(format: "现在 %02d:%02d。", h, m))

        if isPlaying {
            lines.append("在放：\(trackTitle)。她戴着耳机陪你听。")
        } else {
            lines.append("没在放音乐。")
        }

        switch focus.phase {
        case .work: lines.append("番茄钟：专注中。")
        case .shortBreak, .longBreak: lines.append("番茄钟：休息中。")
        case .idle: break
        }
        if focus.todayMinutes > 0 {
            lines.append("他今天已经专注了 \(focus.todayMinutes) 分钟。")
        }

        let pending = tasks.pending
        if pending.isEmpty {
            lines.append(tasks.items.isEmpty ? "待办是空的。" : "待办全做完了。")
        } else {
            let names = pending.prefix(5).map { "「\($0.title)」" }.joined(separator: "、")
            lines.append("待办还剩 \(pending.count) 件：\(names)"
                         + (pending.count > 5 ? " 等" : "") + "。")
        }
        if drowsy > 0.5 { lines.append("很晚了，她有点困。") }
        return lines.joined(separator: "\n")
    }

    /// 凑近之后念叨一句。待办上还挂着事就把那件事的名字说出来。
    ///
    /// 挑**最早记下**的那一件，不是随机挑：待办是往列表头插的，
    /// 所以最后一条最老。压在底下最久的那件事本来就是最该被念的，
    /// 而且每次都挑同一件也更像"她一直记着这事"。
    private func complainAboutWatching() {
        guard let oldest = tasks.pending.last else {
            chatter.say(.caughtWatching)
            return
        }
        chatter.speak(Dialogue.nag(about: oldest.title, avoiding: chatter.current))
    }

    /// 摸头。桌宠类应用里最重要的一个交互——
    /// 点她一下会有回应，这件事本身就让"陪伴"成立。
    func pet() {
        chatter.say(drowsy > 0.5 ? .wokenUp : .pet)
        // 比完成一段专注小得多的心情提升，但足够让她笑一下。
        if lastCelebration == nil || Date().timeIntervalSince(lastCelebration!) > 40 {
            lastCelebration = Date().addingTimeInterval(-62)
        }
    }

    // MARK: - 偏好持久化

    @ObservationIgnored private var settingsSaver: DebouncedSaver?
    /// 启动阶段批量赋值时不该触发保存，否则会把默认值写回去覆盖存档。
    @ObservationIgnored private var isRestoring = false

    private func scheduleSave() {
        guard !isRestoring else { return }
        settingsSaver?.schedule()
    }

    /// 逐字段赋值而不是用逐成员构造器。
    ///
    /// `AppSettings` 手写了 `init(from:)`（为了加字段不清老用户的档），
    /// 逐成员构造器就没了。逐字段赋值反而更好：以后加设置只要在这里补一行，
    /// 漏了也只是那一项不存盘，不会像改构造器参数那样一处漏改就编译不过、
    /// 或者顺序写反把两个值对调（这个结构体里连着三个 Double 和两个枚举）。
    private var currentSettings: AppSettings {
        var s = AppSettings()
        s.volume = volume
        s.source = source
        s.timeMode = timeMode
        s.weather = weather
        s.windowMode = windowMode
        s.ambienceLevels = ambienceLevels
        s.lowPower = lowPower
        s.panel = panel?.rawValue
        s.radioMood = radioMood
        s.sceneMode = sceneMode
        s.characterStyle = characterStyle
        s.live2dModelPath = live2d.modelDirectory
        s.chatBackend = chat.backend
        s.speakAloud = speaking.enabled
        s.voiceEngine = speaking.engine
        return s
    }

    private func restore() {
        guard var saved = Store.load(AppSettings.storeName, as: AppSettings.self) else { return }
        saved.sanitize()

        isRestoring = true
        defer { isRestoring = false }

        volume = saved.volume
        chat.backend = saved.chatBackend
        speaking.enabled = saved.speakAloud
        speaking.engine = saved.voiceEngine
        live2d.modelDirectory = saved.live2dModelPath
        characterStyle = saved.characterStyle
        if characterStyle == .live2d { live2d.loadIfNeeded() }
        radioMood = saved.radioMood
        audio.radioMood = saved.radioMood
        timeMode = saved.timeMode
        weather = saved.weather
        lowPower = saved.lowPower
        panel = saved.panel.flatMap(Panel.init(rawValue:))
        source = saved.source
        windowMode = saved.windowMode
        sceneMode = saved.sceneMode
        for (i, sound) in Ambience.allCases.enumerated() {
            ambienceLevels[i] = saved.ambienceLevels[i]
            audio.setAmbienceLevel(sound, saved.ambienceLevels[i])
        }
    }

    /// 退出前把所有待写的数据落盘。
    func flushAll() {
        // 子进程和音频不论是否在清数据都必须停掉，不能留下孤儿或继续占设备。
        chat.shutdown()
        speaking.stop()
        voice.stop(send: false)
        guard !suppressPersistenceOnExit else { return }
        focus.flush()
        tasks.flush()
        library.flush()
        settingsSaver?.flush()
    }

    /// 删除 app 自己管理的全部用户数据并退出。只按白名单文件名处理，目录里用户
    /// 自己放的其它内容不碰；退出时 `flushAll()` 也不会把内存快照写回来。
    func resetAllData() -> String? {
        flushAll()
        bridge?.invalidate()
        bridge = nil
        settingsSaver?.cancel()
        suppressPersistenceOnExit = true

        let exact: Set<String> = [
            "settings.json", "tasks.json", "focus-history.json", "focus-settings.json",
            "library.json", "chat.json", "memories.json", "state.json", "mcp.log",
        ]
        do {
            let files = try FileManager.default.contentsOfDirectory(
                at: Store.directory, includingPropertiesForKeys: [.isDirectoryKey],
                options: [.skipsHiddenFiles])
            let targets = try files.filter { url in
                let name = url.lastPathComponent
                let managed = exact.contains(name)
                    || name == "memories-v0-backup.json"
                    || (name.hasPrefix("memories-unreadable-") && name.hasSuffix(".json"))
                guard managed else { return false }
                return try url.resourceValues(forKeys: [.isDirectoryKey]).isDirectory != true
            }
            for url in targets { try FileManager.default.removeItem(at: url) }
        } catch {
            suppressPersistenceOnExit = false
            return "清空失败：\(error.localizedDescription)"
        }
        guard Inbox.resetForErase() else {
            suppressPersistenceOnExit = false
            return "清空失败：无法取得 MCP 收件箱锁。"
        }

        DispatchQueue.main.async { NSApplication.shared.terminate(nil) }
        return nil
    }

    // MARK: - 播放

    /// 最近一次外部状态改变前，屏幕真正显示的完整 cue。
    /// phase/playing 连续切换时会把尚未结束的混合结果再次冻结到这里。
    private(set) var activityTransitionFrom: ActivityCue?
    private(set) var activityTransitionStartedAt = Date.distantPast
    var isPlaying = false {
        willSet {
            guard newValue != isPlaying else { return }
            captureActivityTransition(at: Date())
        }
    }

    private func captureActivityTransition(at changedAt: Date) {
        let t = changedAt.timeIntervalSinceReferenceDate
        activityTransitionFrom = ActivityRig.cue(
            at: t, phase: focus.phase, playing: isPlaying,
            transitionFrom: activityTransitionFrom,
            transitionStartedAt: activityTransitionStartedAt)
        activityTransitionStartedAt = changedAt
    }

    /// 播放来源：生成电台，还是本地文件。
    var source: MusicSource = .radio {
        didSet {
            guard source != oldValue else { return }
            switchSource(from: oldValue)
            scheduleSave()
        }
    }

    var volume: Double = 0.7 {
        didSet {
            audio.volume = volume
            library.volume = volume
            scheduleSave()
        }
    }

    /// 电台心情。换了之后下一首才会生效——不打断正在放的这首。
    var radioMood: RadioMood = .chill {
        didSet {
            guard radioMood != oldValue else { return }
            audio.radioMood = radioMood
            scheduleSave()
        }
    }

    /// 电台当前曲目的描述。
    ///
    /// 合成器的调式/进行不是可观察的（`audio` 标了 `@ObservationIgnored`），
    /// 所以这个值靠手动刷新；本地曲目则通过 `library` 的嵌套观察自动更新。
    private var radioTitle = ""
    private var radioTempo = ""

    /// 「音乐」App 的遥控器，以及它上一次报告的曲目。
    @ObservationIgnored let appleMusic = AppleMusicBridge()
    private var externalTrack = ExternalTrack()
    @ObservationIgnored private var externalPoller: Timer?

    var trackTitle: String {
        switch source {
        case .radio:
            isPlaying && !radioTitle.isEmpty ? radioTitle : MusicSource.radio.label
        case .library:
            library.currentTrack?.title ?? MusicSource.library.label
        case .appleMusic:
            externalTrack.title.isEmpty ? MusicSource.appleMusic.label : externalTrack.title
        case .external:
            MusicSource.external.label
        }
    }

    var subtitleText: String {
        switch source {
        case .radio:
            isPlaying ? radioTempo : "已暂停"
        case .library:
            if let msg = library.message { msg }
            else if library.tracks.isEmpty { "未选择文件夹" }
            else if let i = library.currentIndex { "\(i + 1) / \(library.tracks.count)" }
            else { "\(library.tracks.count) 首" }
        case .appleMusic:
            if let f = appleMusic.failure { f }
            else if !appleMusic.isRunning { "「音乐」App 未运行" }
            else if !externalTrack.artist.isEmpty { externalTrack.artist }
            else { externalTrack.isPlaying ? "播放中" : "已暂停" }
        case .external:
            hasAnyAmbience ? "只放环境音" : "打开环境音给它垫个底"
        }
    }

    func togglePlay() {
        isPlaying.toggle()
        switch source {
        case .radio: isPlaying ? audio.play() : audio.pause()
        case .library: isPlaying ? library.resume() : library.pause()
        case .appleMusic:
            if isPlaying && !appleMusic.isRunning { appleMusic.launch() }
            appleMusic.toggle()
        case .external:
            break          // 别人的播放器，我们不插手
        }
        refreshRadioInfo()
    }

    func nextTrack() {
        switch source {
        case .radio:
            audio.next()
            // 合成器要到下一个小节线才真正换曲，稍等一下再取标题。
            Task {
                try? await Task.sleep(for: .milliseconds(3400))
                refreshRadioInfo()
            }
        case .library:
            library.next()
            if !isPlaying { isPlaying = true }
        case .appleMusic:
            appleMusic.next()
            pollExternal()
        case .external:
            return         // 没有可切的东西，连搭话都免了
        }
        chatter.say(.musicChanged)
    }

    func previousTrack() {
        switch source {
        case .radio: nextTrack()          // 生成的音乐没有"上一首"，就当再换一首
        case .library: library.previous()
        case .appleMusic: appleMusic.previous(); pollExternal()
        case .external: break
        }
    }

    /// 轮询外部播放器。
    ///
    /// 一次 Apple Event 往返几十毫秒，而且要跨进程，不能放进每帧的路径里。
    /// 只在选中「音乐 App」时开一个 2 秒的定时器；切走就停掉。
    private func syncExternalPoller() {
        externalPoller?.invalidate()
        externalPoller = nil
        guard source == .appleMusic else { return }
        pollExternal()
        externalPoller = Timer.scheduledTimer(withTimeInterval: 2.0, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated { self?.pollExternal() }
        }
    }

    private func pollExternal() {
        guard let track = appleMusic.poll() else {
            externalTrack = ExternalTrack()
            return
        }
        guard track != externalTrack else { return }
        externalTrack = track
        // 播放状态以「音乐」App 为准：用户可能直接在那边按了暂停。
        isPlaying = track.isPlaying
        nowPlaying.update(title: trackTitle, subtitle: subtitleText, isPlaying: isPlaying)
    }

    /// 从列表里点某一首。
    func playFromLibrary(index: Int) {
        source = .library
        library.play(at: index)
        isPlaying = true
    }

    private func switchSource(from old: MusicSource) {
        // 两个来源同时出声会很吵，切换时先把旧的停掉。
        // 外部来源不归我们管，切走时也不要替用户按暂停。
        switch old {
        case .radio: audio.pause()
        case .library: library.pause()
        case .appleMusic, .external: break
        }

        syncExternalPoller()

        guard isPlaying else { return }
        switch source {
        case .radio: audio.play()
        case .library: library.resume()
        case .appleMusic, .external: break
        }
        refreshRadioInfo()
    }

    private func refreshRadioInfo() {
        radioTitle = audio.trackTitle
        radioTempo = audio.tempoText
        nowPlaying.update(title: trackTitle, subtitle: subtitleText, isPlaying: isPlaying)
    }

    /// 系统「正在播放」与媒体键。
    @ObservationIgnored let nowPlaying = NowPlaying()

    private func setUpNowPlaying() {
        nowPlaying.onPlay = { [weak self] in
            guard let self, !self.isPlaying else { return }
            self.togglePlay()
        }
        nowPlaying.onPause = { [weak self] in
            guard let self, self.isPlaying else { return }
            self.togglePlay()
        }
        nowPlaying.onToggle = { [weak self] in self?.togglePlay() }
        nowPlaying.onNext = { [weak self] in self?.nextTrack() }
        nowPlaying.onPrevious = { [weak self] in self?.previousTrack() }
        nowPlaying.configure()
    }

    // MARK: - 窗口

    var windowMode: WindowMode = .normal {
        didSet {
            guard windowMode != oldValue else { return }
            // 迷你/桌宠模式里没有那个画面，正演着的近景要收掉——
            // 不收的话切回完整模式时它还挂在那儿，镜头凭空是推进的
            if windowMode != .normal { closeUp.cancel() }
            onWindowModeChange?(windowMode)
            scheduleSave()
        }
    }

    /// 由 `AppDelegate` 注入：把形态变化落到真实的 NSWindow 上。
    @ObservationIgnored var onWindowModeChange: ((WindowMode) -> Void)?
    /// 由 `AppDelegate` 注入：从菜单栏把主窗口叫回前台。
    @ObservationIgnored var revealWindow: (() -> Void)?

    // 面板
    var panel: Panel? {
        didSet { scheduleSave() }
    }

    // 场景
    var timeMode: TimeMode = .auto { didSet { scheduleSave() } }
    var sceneMode: SceneMode = .twoPointFiveD {
        didSet {
            guard sceneMode != oldValue else { return }
            if sceneMode != .realtime3DExperimental { realtime3D.reset() }
            scheduleSave()
        }
    }
    var weather: Weather = .clear {
        didSet {
            guard weather != oldValue else { return }
            scheduleSave()
            switch weather {
            case .rain: chatter.say(.rain)
            case .snow: chatter.say(.snow)
            case .clear: break
            }
        }
    }

    /// 环境音各路音量。
    ///
    /// 引擎里已经有一份权威数据了，这里再存一份是因为 `audio` 被标记为
    /// `@ObservationIgnored`——UI 需要一个可观察的镜像才能刷新滑杆。
    var ambienceLevels = [Double](repeating: 0, count: Ambience.allCases.count)

    func setAmbience(_ sound: Ambience, _ value: Double) {
        let wasSilent = !hasAnyAmbience
        ambienceLevels[sound.rawValue] = value
        audio.setAmbienceLevel(sound, value)
        scheduleSave()
        // 只在"从完全没有环境音变成有"时说一句，每拖一下滑杆都说会很烦。
        if wasSilent && value > 0.001 { chatter.say(.ambienceOn) }
    }

    func applyAmbiencePreset(_ preset: AmbiencePreset) {
        for sound in Ambience.allCases {
            setAmbience(sound, preset.levels[sound] ?? 0)
        }
    }

    var hasAnyAmbience: Bool { ambienceLevels.contains { $0 > 0.001 } }

    /// 窗口是否真的可见（未被遮挡 / 未最小化）。
    /// 不可见时所有动画时间线暂停，CPU 掉到接近 0。
    var isVisible = true

    /// 省电模式：降帧、关掉高开销的绘制层。
    var lowPower = false { didSet { scheduleSave() } }

    /// 动画帧间隔。
    ///
    /// 分三档：
    /// - 播放中 24fps —— 要跟上底鼓的点头，帧率低了会看出顿挫。
    /// - 空闲 15fps  —— 只剩呼吸和眨眼这种慢动作，15fps 完全看不出来。
    /// - 省电 10fps  —— 明显省电，代价是动作略有台阶感。
    ///
    /// 改空闲那一档要连着看 `LegPose.frameTime`：换腿的过渡帧是被这个间隔
    /// 采样的，帧长必须**比它长**才不丢帧——相等都不行，一次卡顿就跳帧。
    var frameInterval: Double {
        if lowPower { return 1.0 / 10.0 }
        return isPlaying ? 1.0 / 24.0 : 1.0 / 15.0
    }

    /// 当前场景小时数，驱动整套调色板。
    var sceneHour: Double {
        if let fixed = timeMode.fixedHour { return fixed }
        let now = Calendar.current.dateComponents([.hour, .minute], from: Date())
        return Double(now.hour ?? 12) + Double(now.minute ?? 0) / 60.0
    }

    var palette: Palette { .at(hour: sceneHour) }

    init() {
        settingsSaver = DebouncedSaver { [weak self] in
            guard let self else { return }
            Store.save(self.currentSettings, as: AppSettings.storeName)
        }
        restore()

        sceneAssets.load()
        audio.volume = volume
        library.volume = volume
        setUpNowPlaying()

        // phase 真正改变前先冻结当前混合画面；连续 skip 也从肉眼此刻所见起步。
        focus.onPhaseWillChange = { [weak self] _, _, changedAt in
            self?.captureActivityTransition(at: changedAt)
        }

        // 番茄钟阶段切换：响一下提示音；专注段完成时 Snozzy 会高兴一阵。
        focus.onPhaseFinished = { [weak self] finished in
            guard let self else { return }
            self.audio.chime(rising: finished == .work)
            if finished == .work {
                self.celebrate()
                self.chatter.say(.focusFinished)
            } else {
                self.chatter.say(.breakFinished)
            }
        }

        tasks.onAdded = { [weak self] in self?.chatter.say(.taskAdded) }
        tasks.onCompleted = { [weak self] in self?.chatter.say(.taskCompleted) }
        tasks.onAllDone = { [weak self] in self?.chatter.say(.allTasksDone) }

        // 近景：什么时候可以凑近，以及凑近之后说什么。
        //
        // 两个回调都注入进去而不是让 `CloseUp` 自己去读 `AppState`：
        // 它只管一条时间轴，窗口形态、面板、待办这些都不该是它的事。
        // MCP 那条通道：每 20 秒写一份快照、顺手把 GPT 写回来的东西收进来。
        //
        // 为什么是定时器而不是"变了就写"：快照里有时间和"在放什么"，
        // 时间本来就一直在变；而 20 秒的粒度对"她知不知道我在干嘛"完全够用。
        // 收件箱同频检查，GPT 记的待办最多 20 秒后出现在清单里。
        writeSnapshot()
        bridge = Timer.scheduledTimer(withTimeInterval: 20, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated {
                // **先收件再写快照。** 反过来的话，这一轮刚收进来的东西
                // （GPT 让记的待办、让记住的事）要等下一轮才出现在快照里，
                // 于是它紧接着再查一次会发现自己刚记的东西不在——
                // 看起来像是没记住。
                self?.drainInbox()
                self?.writeSnapshot()
            }
        }

        closeUp.canStart = { [weak self] in
            guard let self else { return false }
            // 桌宠/迷你模式里根本没有那个画面；面板开着说明你正在用它，
            // 这时候把镜头推上去只会挡住你在看的东西。
            return self.windowMode == .normal && self.panel == nil && self.isVisible
        }
        closeUp.onArrived = { [weak self] in self?.complainAboutWatching() }

        // 对话：她回话之后气泡也说一遍，不然只有面板里看得到，
        // 而这个 app 大部分时间面板是收起来的。
        chat.onReply = { [weak self] line in
            guard let self else { return }
            self.chatter.speak(line)
            // 流式那条已经边流边念了，这里只把最后的零头补上；
            // codex 那条不流式，整句到这儿才念。
            if self.chat.backend == .claude { self.speaking.finish() }
            else { self.speaking.say(line) }
        }
        chat.onInterrupted = { [weak self] in
            self?.chatter.hush()
            self?.speaking.stop()
        }
        speaking.onChanged = { [weak self] in self?.scheduleSave() }
        chat.onChanged = { [weak self] in self?.scheduleSave() }
        chat.memories.onChanged = { [weak self] in
            self?.chat.memoryContextDidChange()
            self?.writeSnapshot()
        }
        chat.context = { [weak self] in self?.situation ?? "" }

        // 说完一句就直接发出去，不用再点一次"发送"。
        // 语音的全部意义就是不动手，中间插一步确认等于白做。
        voice.onFinal = { [weak self] line in self?.chat.send(line) }
        // **一按下麦克风就把会话热起来。** 预热要五秒，而这五秒和你说话的
        // 时间是重叠的——等你说完，会话已经热好了，接下来 1.4 秒出第一个字。
        // 这是"实时"感的一半，不预热的话每次都要先干等五秒。
        voice.onStarted = { [weak self] in self?.chat.prewarm() }

        // 一个字一个字地：气泡实时长出来，同时凑够一句就念出去。
        // 感知延迟等于"第一个字什么时候到"，不是整句。
        chat.onDelta = { [weak self] chunk in
            guard let self else { return }
            self.chatter.stream(self.chat.streaming)
            self.speaking.feed(chunk)
        }

        // 启动时按时段打个招呼，稍等一下再说，免得和窗口出现撞在一起。
        Task { [weak self] in
            try? await Task.sleep(for: .milliseconds(1200))
            guard let self else { return }
            self.chatter.say(Dialogue.greetingContext(hour: self.sceneHour))
        }

        // 开发用：`--panel mixer --source library` 启动时直接进入指定状态。
        // 调面板样式时省掉每次手点的几步。
        let args = CommandLine.arguments
        if let i = args.firstIndex(of: "--panel"), i + 1 < args.count,
           let p = Panel(rawValue: args[i + 1]) {
            panel = p
        }
        if let i = args.firstIndex(of: "--source"), i + 1 < args.count,
           let s = MusicSource(rawValue: args[i + 1]) {
            source = s
        }
        if let i = args.firstIndex(of: "--mode"), i + 1 < args.count,
           let m = WindowMode(rawValue: args[i + 1]) {
            windowMode = m
        }
        if args.contains("--play") {
            // 稍等一下再开始，让音频引擎和窗口都就绪。
            Task { [weak self] in
                try? await Task.sleep(for: .milliseconds(600))
                self?.togglePlay()
            }
        }
    }

    func togglePanel(_ p: Panel) {
        withAnimation(.snappy(duration: 0.28, extraBounce: 0.06)) {
            panel = (panel == p) ? nil : p
        }
    }
}

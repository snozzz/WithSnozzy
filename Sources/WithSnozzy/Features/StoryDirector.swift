import Foundation
import Observation

/// 主线在运行时的那一半：每分钟记一笔陪伴，写完一首时把它演出来。
///
/// 规则在 `StoryEngine`（纯函数），内容在 `Story`；这里只管三件事——
/// 什么时候算"你在"、什么时候适合演、演的时候按什么顺序。
///
/// **演出不另造动画**：伸懒腰、凑近都是现成的生产动作，经 `Performer`
/// 排进同一条队列，所以和自发的喝咖啡、你点的按钮撞上时也不会硬切。
/// 专注中不演——她等你休息的时候才把新歌拿给你看。
@MainActor
@Observable
final class StoryDirector {
    private(set) var state: StoryState
    /// 正在演一拍。
    private(set) var isPerforming = false

    @ObservationIgnored private let persist: Bool
    @ObservationIgnored private var saver: DebouncedSaver?
    @ObservationIgnored private var ticker: Timer?
    @ObservationIgnored private var runner: Task<Void, Never>?

    // 由 `AppState` 注入。这个类不该知道窗口、番茄钟、气泡长什么样。
    @ObservationIgnored var performer: Performer?
    /// 番茄钟正在专注（计时器在走）。
    @ObservationIgnored var focusing: (() -> Bool)?
    /// 现在适不适合演：完整窗口、看得见、不在专注、没在跟她说话。
    @ObservationIgnored var canPerform: (() -> Bool)?
    /// 让她说一句（进气泡）。
    @ObservationIgnored var say: ((String) -> Void)?
    /// 一拍演到"凑近说出名字"那一下。笑一下、响一声。
    @ObservationIgnored var onHighlight: ((StoryBeat) -> Void)?
    /// 专辑多了一首。电台的播放列表要跟着变。
    @ObservationIgnored var onTracksChanged: (() -> Void)?
    /// 距最后一次输入多少秒。判据可以换成假的。
    @ObservationIgnored var idleSeconds: () -> Double = Presence.idleSeconds

    init(persist: Bool = true, focusMinutes: Int = 0, now: Date = Date()) {
        self.persist = persist
        if persist, let saved = Store.load(StoryState.storeName, as: StoryState.self) {
            state = saved
        } else {
            // 文件在、却读不出来：先原样留一份再重开。不然下一次存盘就把
            // 几十天的进度悄悄盖掉了（长期记忆那边吃过同样的亏）。
            if persist { Self.quarantineUnreadable(now: now) }
            state = StoryEngine.fresh(at: now, focusMinutes: focusMinutes)
        }
        if persist {
            saver = DebouncedSaver { [weak self] in
                guard let self else { return }
                Store.save(self.state, as: StoryState.storeName)
            }
        }
    }

    private static func quarantineUnreadable(now: Date) {
        let url = Store.url(StoryState.storeName)
        guard FileManager.default.fileExists(atPath: url.path) else { return }
        let stamp = Int(now.timeIntervalSince1970)
        let backup = Store.directory.appendingPathComponent("story-unreadable-\(stamp).json")
        try? FileManager.default.copyItem(at: url, to: backup)
    }

    /// 只给判据和面板截图用：换一份存档看看长什么样。**同时停掉存盘**——
    /// 不然之后任何一次排着的保存都会把这份假存档写进用户的 story.json。
    func preview(_ s: StoryState) {
        stopPersisting()
        state = s
    }

    // MARK: - 时钟

    /// 每分钟看一眼你在不在。**按"拍"记，不按时间差记**：睡眠醒来、
    /// 改系统时间都不会一下子补出几个小时。
    func start() {
        guard ticker == nil else { return }
        // 新存档在这里才落盘：只建了对象、没真正开场的进程（判据）不该写。
        saver?.schedule()
        let t = Timer(timeInterval: 60, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated { self?.tick() }
        }
        RunLoop.main.add(t, forMode: .common)
        ticker = t
    }

    func tick(now: Date = Date()) {
        let focusing = focusing?() ?? false
        if focusing || idleSeconds() < StoryEngine.idleLimit {
            record(.minute(focusing: focusing), at: now)
        }
        playPending()
    }

    func creditTask(at now: Date = Date()) { record(.task, at: now) }
    func creditChat(at now: Date = Date()) { record(.chat, at: now) }

    private func record(_ c: StoryEngine.Contribution, at now: Date) {
        let before = state.playableTracks
        StoryEngine.credit(&state, c, at: now)
        if state.playableTracks != before { onTracksChanged?() }
        saver?.schedule()
    }

    // MARK: - 演出

    var hasPending: Bool { !state.pending.isEmpty }

    /// 有攒着没演的就演一拍。条件不合适就继续攒着，下一分钟再看。
    /// 返回这次有没有开演——"你回来了"那一下据此决定是演剧情还是念待办。
    @discardableResult
    func playPending() -> Bool {
        guard runner == nil, let beat = state.pending.first,
              canPerform?() ?? true else { return false }
        // 同步置位：开演和"正在演"之间不能留一个空档让别的入口插进来。
        isPerforming = true
        runner = Task { [weak self] in
            guard let self else { return }
            await self.perform(beat)
            self.state.pending.removeAll { $0 == beat }
            self.saver?.schedule()
            self.isPerforming = false
            self.runner = nil
        }
        return true
    }

    /// 一拍：（写完一首时先伸个懒腰）→ 凑近说出名字 → 再补一句。
    ///
    /// 台词挂在动作"到位"那一刻说，动作没演成（被你点掉了、窗口切走了）
    /// 也照样说——剧情不能因为一个动作没排上就丢一句。
    private func perform(_ beat: StoryBeat) async {
        var lines = beat.lines[...]
        guard !lines.isEmpty else { return }
        if beat.stretchesFirst, let first = lines.popFirst() {
            await act(.action(.stretch), saying: first)
        }
        if let second = lines.popFirst() {
            await act(.closeUp, saying: second, highlight: beat)
        }
        for line in lines {
            say?(line)
            await pause(for: line)
        }
    }

    private func act(_ item: Performer.Item, saying line: String,
                     highlight beat: StoryBeat? = nil) async {
        let speak = { [weak self] in
            self?.say?(line)
            if let beat { self?.onHighlight?(beat) }
        }
        let arrived = await performer?.perform(item, patience: 60, arrival: speak) ?? false
        if !arrived { speak() }
        await pause(for: line)
    }

    /// 一句话读完要多久。和气泡的停留时长同一个换算（每秒四五个字），
    /// 但下一句可以在气泡收起之前接上。
    private func pause(for line: String) async {
        try? await Task.sleep(for: .seconds(max(2.4, Double(line.count) * 0.2 + 1.2)))
    }

    // MARK: - 打招呼和闲话

    /// 开口第一句：节日、好久不见，都没有就 nil（走普通问候）。
    /// 要在第一次 `tick` 之前问——那之后 `lastSeenDay` 就是今天了。
    func greeting(now: Date = Date()) -> [String]? {
        if let away = StoryEngine.daysAway(state, now: now), away >= StoryEngine.reunionGap {
            return Story.reunion
        }
        return Story.holidayLine(on: now).map { [$0] }
    }

    /// 闲着的时候偶尔念叨一句正在写的那首。
    func idleHint() -> String? {
        if state.chapters < Story.chapterCount {
            return Story.chapters[state.chapters].hints.randomElement()
        }
        return Story.afterword.hints.randomElement()
    }

    /// 把最近写完的那一首（还没写完就是序章）再演一遍。不改进度。
    /// 动作面板用：改了台词或动作，想看一眼等不起下一首。
    func replayLatest() {
        let beat: StoryBeat = state.demos > 0 ? .demo(state.demos - 1)
            : state.chapters > 0 ? .chapter(state.chapters - 1) : .prologue
        if !state.pending.contains(beat) { state.pending.insert(beat, at: 0) }
        playPending()
    }

    /// 给明天留一句。她回一句"记下了"。
    func leaveNote(_ text: String, at now: Date = Date()) {
        StoryEngine.leaveNote(&state, text, at: now)
        saver?.schedule()
        if state.note != nil { say?("记下了。明天念给你听。") }
    }

    /// 电台放到她写的歌时，她偶尔认出来：按着耳机听一会儿，说一句。
    /// 二十分钟最多一次——每首都来一遍就成了报幕。
    /// 动作没排上（窗口不在、别的动作正演着）就只说那一句。
    @ObservationIgnored private var lastListeningLine = Date.distantPast
    func noticeListening(to track: Int, at now: Date = Date()) {
        guard now.timeIntervalSince(lastListeningLine) > 1200,
              Double.random(in: 0...1) < 0.5 else { return }
        lastListeningLine = now
        let title = Self.trackTitle(track)
        let line = ["这首是《\(title)》。", "你在听《\(title)》呀。",
                    "《\(title)》……被你听到了。"].randomElement()!
        guard let performer else { say?(line); return }
        performer.request(.action(.listen), patience: 20, ignoresCooldown: true,
                          arrival: { [weak self] in self?.say?(line) },
                          completion: { [weak self] arrived in
                              if !arrived { self?.say?(line) }
                          })
    }

    func markRead() {
        guard state.unread > 0 else { return }
        state.unread = 0
        saver?.schedule()
    }

    func flush() { saver?.flush() }

    /// 清空全部数据时用：别在退出前把内存里的存档又写回去。
    func stopPersisting() {
        saver?.cancel()
        saver = nil
        ticker?.invalidate()
        ticker = nil
    }

    // MARK: - 给面板读

    var albumTitle: String { state.albumComplete ? Story.albumTitle : Story.workingTitle }

    /// 第 i 首（含小样）的名字。
    static func trackTitle(_ i: Int) -> String {
        i < Story.chapterCount ? Story.chapters[i].title : Story.demoTitle(i - Story.chapterCount)
    }

    /// 正在写的那一首写到哪儿了，0…1。
    var progressFraction: Double {
        min(1, state.progress / StoryEngine.need(state))
    }

    /// 今天已经写完一首、剩下的明天才会写完。
    var restingToday: Bool {
        state.lastFinishDay == StoryEngine.dayKey(Date())
            && state.progress >= StoryEngine.need(state)
    }

    /// 还要陪多久（分钟），按一分钟一分算。
    var minutesToNext: Int {
        Int(max(0, StoryEngine.need(state) - state.progress).rounded(.up))
    }

    var today: StoryDay { state.days[StoryEngine.dayKey(Date())] ?? StoryDay() }
}

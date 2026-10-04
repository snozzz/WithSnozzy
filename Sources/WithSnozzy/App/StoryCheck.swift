import AppKit
import SwiftUI

/// 主线的判据。
///
/// ```
/// WithSnozzy.app/Contents/MacOS/WithSnozzy --storycheck
/// WithSnozzy.app/Contents/MacOS/WithSnozzy --storypanel out.png
/// ```
///
/// "主线好不好"大半是主观的，但它能坏的地方都是客观的：
///
/// - **内容**：台词装不装得进气泡（用真实 `SpeechBubble` 的字体和宽度排一遍，
///   不是数字数）、歌名重不重复、每首歌的编曲参数在不在合法范围
/// - **节奏**：拿合成的时钟模拟几种用法（整天挂着、每天四小时、每天一个半小时），
///   看第一首是不是第一天就能听到、整张要多少天、有没有哪天写完两首
/// - **边界**：刷待办、刷聊天、一天挂 24 小时都封得住；系统时间往回拨不会多写一首；
///   存档缺字段、字段越界、整份读不出来都不丢进度
/// - **演出**：真实的 `Performer` 和动作 rig，一拍演下来台词顺序对、
///   伸懒腰在凑近之前、专注中不开演
/// - **歌**：同一首歌渲两遍逐样本相同、不同的歌不同、没削顶没静音
@MainActor
enum StoryCheck {
    static var requested: Bool { CommandLine.arguments.contains("--storycheck") }
    static var panelPath: String? {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: "--storypanel"), i + 1 < args.count else { return nil }
        return args[i + 1]
    }

    private static var ok = true
    private static func check(_ label: String, _ pass: Bool) {
        ok = ok && pass
        print("  " + (pass ? "✓ " : "✗ ") + label)
    }

    static func run() -> Bool {
        ok = true
        content()
        pacing()
        boundaries()
        persistence()
        director()
        music()
        print("STORY " + (ok ? "全部通过" : "有不合格项"))
        return ok
    }

    // MARK: - 内容

    private static func content() {
        print("== 内容")
        check("十二首歌、十二组编曲参数",
              Story.chapters.count == Story.chapterCount
                && AlbumMusic.tracks.count == Story.chapterCount)
        let titles = Story.chapters.map(\.title)
        check("歌名不重复", Set(titles).count == titles.count)
        check("最后一首就是专辑名", titles.last == Story.albumTitle)

        // 气泡：12 号圆体、最宽 210 点（左右各 13 点内边距）、最多两行。
        // 用真实 SwiftUI 排版量行数，不数字数——标点、全半角宽度都不一样。
        var beats: [StoryBeat] = [.prologue, .demo(0), .demo(37),
                                  .note(String(repeating: "写", count: StoryEngine.noteLimit))]
        beats += (0..<Story.chapterCount).map(StoryBeat.chapter)
        beats += Story.anniversaries.keys.map(StoryBeat.anniversary)
        var bubbleLines = beats.flatMap(\.lines)
        bubbleLines += Story.chapters.flatMap(\.hints) + Story.afterword.hints + Story.reunion
        let year = Calendar(identifier: .gregorian)
        let start = year.date(from: DateComponents(year: 2027, month: 1, day: 1))!
        var holidays = Set<String>()
        for d in 0..<366 {
            if let line = Story.holidayLine(on: start.addingTimeInterval(Double(d) * 86400)) {
                holidays.insert(line)
            }
        }
        bubbleLines += holidays
        let tooLong = bubbleLines.filter { rows($0) > 2 }
        check("\(bubbleLines.count) 句台词都装得进两行气泡"
              + (tooLong.isEmpty ? "" : "（超了：\(tooLong.joined(separator: " / "))）"),
              tooLong.isEmpty)
        check("一年里认得出 \(holidays.count) 个节日（含农历）", holidays.count >= 10)

        let diaries = [Story.prologue.diary, Story.afterword.diary] + Story.chapters.map(\.diary)
        let lengths = diaries.map(\.count)
        check("日记每页 \(lengths.min()!)…\(lengths.max()!) 字（40…160，面板里一屏读得完）",
              lengths.allSatisfy { (40...160).contains($0) })
        check("每一首写的时候都有念叨", Story.chapters.allSatisfy { !$0.hints.isEmpty })

        let demoTitles = (0..<256).map(Story.demoTitle)
        check("前 256 段小样不重名", Set(demoTitles).count == 256)
        check("小样名字是确定的", Story.demoTitle(41) == Story.demoTitle(41))

        let specs = (0..<40).map(AlbumMusic.spec)
        let valid = specs.allSatisfy {
            Progressions.all.indices.contains($0.progression)
                && (0..<12).contains($0.key) && (55...95).contains($0.bpm)
                && (0.05...0.25).contains($0.swing)
                && DrumPatterns.all.indices.contains($0.drums)
        }
        check("40 首（含小样）的编曲参数都在合法范围", valid)
    }

    /// `SpeechBubble` 里这句话排几行。
    private static func rows(_ text: String) -> Int {
        func height(_ s: String) -> CGFloat {
            let r = ImageRenderer(content:
                Text(s).font(.system(size: 12, weight: .medium, design: .rounded))
                    .frame(width: 210 - 26, alignment: .leading)
                    .fixedSize(horizontal: false, vertical: true))
            r.scale = 1
            return r.nsImage?.size.height ?? 0
        }
        let one = height("字")
        return one > 0 ? Int((height(text) / one).rounded()) : 99
    }

    // MARK: - 节奏

    private static let calendar = Calendar(identifier: .gregorian)
    private static let day0 = calendar.date(from: DateComponents(year: 2026, month: 10, day: 5,
                                                                hour: 9))!

    private struct Usage {
        let label: String
        let minutes: Int
        let focus: Int
        let tasks: Int
        let chats: Int
    }

    private static func simulate(_ u: Usage, days: Int) -> (StoryState, [Int]) {
        var s = StoryEngine.fresh(at: day0, focusMinutes: 0)
        var perDay: [Int] = []
        for d in 0..<days {
            let morning = day0.addingTimeInterval(Double(d) * 86400)
            let before = s.playableTracks
            for m in 0..<u.minutes {
                StoryEngine.credit(&s, .minute(focusing: m < u.focus),
                                   at: morning.addingTimeInterval(Double(m) * 60))
            }
            let evening = morning.addingTimeInterval(Double(u.minutes) * 60)
            for _ in 0..<u.tasks { StoryEngine.credit(&s, .task, at: evening) }
            for _ in 0..<u.chats { StoryEngine.credit(&s, .chat, at: evening) }
            perDay.append(s.playableTracks - before)
        }
        return (s, perDay)
    }

    private static func pacing() {
        print("== 节奏（合成时钟模拟）")
        let usages = [
            Usage(label: "整天挂着（10 小时，2 小时专注）", minutes: 600, focus: 120, tasks: 4, chats: 6),
            Usage(label: "每天 4 小时（1 小时专注）", minutes: 240, focus: 60, tasks: 2, chats: 2),
            Usage(label: "每天 1.5 小时（不用番茄钟）", minutes: 90, focus: 0, tasks: 0, chats: 0),
        ]
        var finishDays: [Int] = []
        for u in usages {
            let (s, perDay) = simulate(u, days: 150)
            var written = 0
            var finished: Int?
            for (d, n) in perDay.enumerated() {
                written += n
                if finished == nil && written >= Story.chapterCount { finished = d + 1 }
            }
            let firstDay = (perDay.firstIndex { $0 > 0 } ?? 999) + 1
            print("  \(u.label)：第一首在第 \(firstDay) 天，整张第 \(finished.map(String.init) ?? "—") 天，"
                  + "150 天里小样 \(s.demos) 段，相伴 \(s.metDays) 天")
            check("  每天最多写完一首", perDay.allSatisfy { $0 <= 1 })
            check("  第一首第一天就能听到", firstDay == 1)
            finishDays.append(finished ?? 999)
        }
        check("整天挂着也要两周左右（\(finishDays[0]) 天 ≥ 12）",
              finishDays[0] >= 12 && finishDays[0] <= 20)
        check("每天四小时一个月左右（\(finishDays[1]) 天在 20…45）",
              (20...45).contains(finishDays[1]))
        check("轻度使用也走得完，只是慢（\(finishDays[2]) 天 ≤ 120）",
              finishDays[2] > finishDays[1] && finishDays[2] <= 120)
    }

    // MARK: - 边界

    private static func boundaries() {
        print("== 边界")
        let midnight = calendar.startOfDay(for: day0)
        var s = StoryEngine.fresh(at: midnight, focusMinutes: 0)
        for m in 0..<(24 * 60) {
            StoryEngine.credit(&s, .minute(focusing: true), at: midnight.addingTimeInterval(Double(m) * 60))
        }
        for _ in 0..<1000 { StoryEngine.credit(&s, .task, at: day0) }
        for _ in 0..<1000 { StoryEngine.credit(&s, .chat, at: day0) }
        let d = s.days[StoryEngine.dayKey(day0)] ?? StoryDay()
        check("挂满 24 小时 + 刷一千条待办和聊天，一天封顶 \(Int(d.points)) 分",
              d.points <= StoryEngine.dailyCap + 0.001)
        check("当天只写完一首（\(s.chapters)）", s.chapters == 1)
        check("被每天一首挡住的进度最多攒到第二天开头那一首（\(Int(s.progress)) ≤ \(Int(StoryEngine.need(s) * 2))）",
              s.progress <= StoryEngine.need(s) * 2)

        // 时钟往回拨：前一天的时间再记，不该又写完一首
        var back = s
        back.progress = StoryEngine.need(back) * 2
        let yesterday = day0.addingTimeInterval(-86400)
        let beats = StoryEngine.credit(&back, .minute(focusing: false), at: yesterday)
        check("系统时间往回拨一天，不会多写一首", back.chapters == s.chapters
              && !beats.contains { if case .chapter = $0 { true } else { false } })

        // 纪念日：每天陪满十分钟算一天，第七天那一拍出现一次
        var m = StoryEngine.fresh(at: day0, focusMinutes: 0)
        var anniversaries: [StoryBeat] = []
        for d in 0..<8 {
            for k in 0..<30 {
                anniversaries += StoryEngine.credit(&m, .minute(focusing: false),
                    at: day0.addingTimeInterval(Double(d) * 86400 + Double(k) * 60))
                    .filter { if case .anniversary = $0 { true } else { false } }
            }
        }
        check("相伴天数按天算（\(m.metDays) 天），第七天纪念日只出现一次",
              m.metDays == 8 && anniversaries == [.anniversary(7)])

        // 给明天留一句：当天不念，第二天第一次在电脑前时念，念过就清掉
        var n = StoryEngine.fresh(at: day0, focusMinutes: 0)
        n.pending = []
        StoryEngine.leaveNote(&n, "  记得把导出模块\n写完，然后早点睡觉别熬了  ", at: day0)
        let sameDay = StoryEngine.credit(&n, .minute(focusing: false), at: day0.addingTimeInterval(60))
        let nextDay = StoryEngine.credit(&n, .minute(focusing: false), at: day0.addingTimeInterval(86400))
        let noteBeat = nextDay.first { if case .note = $0 { true } else { false } }
        check("留言截到 \(StoryEngine.noteLimit) 字、去掉换行（「\(n.pending.first.map { "\($0.lines.last ?? "")" } ?? "")」）",
              noteBeat.map { $0.lines.last!.count <= StoryEngine.noteLimit + 2 } ?? false)
        check("当天不念、第二天念一次，念完清掉",
              sameDay.isEmpty && noteBeat != nil && n.note == nil
                && StoryEngine.credit(&n, .minute(focusing: false),
                                      at: day0.addingTimeInterval(86460)).isEmpty)

        let fresh = StoryEngine.fresh(at: day0, focusMinutes: 875)
        check("之前专注过的时间最多折一小时进来（\(Int(fresh.progress)) 分），序章排在第一拍",
              fresh.progress == 60 && fresh.pending == [.prologue])
        var away = fresh
        away.lastSeenDay = StoryEngine.dayKey(day0.addingTimeInterval(-4 * 86400))
        check("四天没见算好久不见", (StoryEngine.daysAway(away, now: day0) ?? 0) >= StoryEngine.reunionGap)
    }

    // MARK: - 存档

    private static func persistence() {
        print("== 存档")
        let (s, _) = simulate(Usage(label: "", minutes: 300, focus: 60, tasks: 2, chats: 3), days: 9)
        let enc = JSONEncoder()
        let dec = JSONDecoder()
        let data = try? enc.encode(s)
        let back = data.flatMap { try? dec.decode(StoryState.self, from: $0) }
        check("存档原样读回（写完 \(s.chapters) 首、\(s.days.count) 天明细）", back == s)
        let empty = try? dec.decode(StoryState.self, from: Data("{}".utf8))
        check("空存档读成新存档，不报错", empty?.chapters == 0 && empty?.pending.isEmpty == true)
        let wild = try? dec.decode(StoryState.self,
            from: Data(#"{"chapters": 99, "progress": -5, "unread": -2, "extra": true}"#.utf8))
        check("越界字段被夹回来、陌生字段忽略",
              wild?.chapters == Story.chapterCount && wild?.progress == 0 && wild?.unread == 0)
        let partial = try? dec.decode(StoryState.self,
            from: Data(#"{"chapters": 3, "days": {"2026-10-05": {"company": 40}}}"#.utf8))
        check("老存档少字段照读（明细缺 focus/points 也行）",
              partial?.chapters == 3 && partial?.days["2026-10-05"]?.company == 40)
    }

    // MARK: - 演出

    private static func director() {
        print("== 演出（真实 Performer + 动作 rig）")
        let assets = SceneAssets()
        assets.load()
        let closeUp = CloseUp()
        closeUp.holdRange = 1.5...1.5
        var rigs: [ActionKind: ActionRig] = [:]
        for kind in ActionKind.allCases {
            let rig = ActionRig(kind)
            rig.holdFrames = assets.actionSets[kind]?.manifest.holdFrames ?? 6
            rigs[kind] = rig
        }
        let performer = Performer(closeUp: closeUp, actions: rigs)
        let story = StoryDirector(persist: false)
        var said: [String] = []
        var order: [String] = []
        var allowed = true
        story.performer = performer
        story.say = { said.append($0) }
        story.canPerform = { allowed }
        story.idleSeconds = { 0 }

        var s = StoryEngine.fresh(at: Date(), focusMinutes: 0)
        s.pending = [.chapter(2)]
        story.preview(s)

        allowed = false
        check("专注中（不适合演）不开演，攒着", !story.playPending() && story.hasPending)
        allowed = true

        let done = DispatchSemaphore(value: 0)
        Task { @MainActor in
            _ = story.playPending()
            let deadline = Date().addingTimeInterval(40)
            while (story.isPerforming || story.hasPending || performer.current != nil)
                    && Date() < deadline {
                if rigs[.stretch]?.frame == CloseUp.transitionFrames, order.last != "stretch" {
                    order.append("stretch")
                }
                if closeUp.chinFrame == CloseUp.transitionFrames, order.last != "chin" {
                    order.append("chin")
                }
                try? await Task.sleep(for: .milliseconds(5))
            }
            done.signal()
        }
        while done.wait(timeout: .now()) == .timedOut {
            RunLoop.main.run(until: Date().addingTimeInterval(0.01))
        }
        print("  说了：" + said.joined(separator: " / "))
        print("  动作：" + order.joined(separator: " → "))
        check("三句按顺序说完", said == Story.chapters[2].lines)
        check("先伸懒腰再凑近", order == ["stretch", "chin"])
        check("演完从待演列表里拿掉", !story.hasPending)

        // 记账：人不在、也没在专注，不算；专注中哪怕键盘没动也算
        var t = StoryEngine.fresh(at: Date(), focusMinutes: 0)
        t.pending = []
        story.preview(t)
        story.idleSeconds = { 900 }
        story.focusing = { false }
        story.tick()
        let away = story.today.company
        story.focusing = { true }
        story.tick()
        check("人不在不记（\(away)），专注中照记（\(story.today.company) 分钟、专注 \(story.today.focus)）",
              away == 0 && story.today.company == 1 && story.today.focus == 1)
    }

    // MARK: - 歌

    private static func music() {
        print("== 专辑里的歌")
        func render(_ track: Int, seconds: Double = 8) -> (hash: UInt64, peak: Float, rms: Double) {
            let synth = LofiSynth(sampleRate: 44100)
            synth.albumRequest = track
            synth.regenerateImmediately()
            synth.targetGain = 0.6
            let n = 512
            let l = UnsafeMutablePointer<Float>.allocate(capacity: n)
            let r = UnsafeMutablePointer<Float>.allocate(capacity: n)
            defer { l.deallocate(); r.deallocate() }
            var hash: UInt64 = 0xCBF2_9CE4_8422_2325
            var peak: Float = 0
            var sum = 0.0
            var count = 0
            for _ in 0..<Int(seconds * 44100 / Double(n)) {
                synth.render(left: l, right: r, frames: n)
                for k in 0..<n {
                    hash = (hash ^ UInt64(l[k].bitPattern)) &* 0x100_0000_01B3
                    hash = (hash ^ UInt64(r[k].bitPattern)) &* 0x100_0000_01B3
                    peak = max(peak, abs(l[k]), abs(r[k]))
                    sum += Double(l[k] * l[k])
                    count += 1
                }
            }
            check("  第 \(track + 1) 首在放的就是它（albumTrack=\(synth.albumTrack)）",
                  synth.albumTrack == track)
            return (hash, peak, (sum / Double(max(count, 1))).squareRoot())
        }
        let a = render(0), b = render(0), c = render(6), demo = render(Story.chapterCount + 3)
        print(String(format: "  《开机声》峰值 %.3f RMS %.4f；《停电》峰值 %.3f RMS %.4f；小样峰值 %.3f",
                     a.peak, a.rms, c.peak, c.rms, demo.peak))
        check("同一首渲两遍逐样本相同（每次放都是同一首歌）", a.hash == b.hash)
        check("不同的歌不一样", a.hash != c.hash && a.hash != demo.hash)
        check("没削顶、没静音", [a, c, demo].allSatisfy { $0.peak < 1 && $0.rms > 0.005 })
    }

    // MARK: - 真实 AppState 走一遍

    static var smokeRequested: Bool { CommandLine.arguments.contains("--storysmoke") }

    /// 起一个真实的 `AppState`（**必须配 `WITHSNOZZY_DATA_DIR` 跑**，它会写存档），
    /// 不开窗口，按真实接线走一遍：开场问候 → 序章 → 攒够写完第一首 → 演出 →
    /// 专辑播放列表多一首；专注中写完的那首要等休息才演。
    static func runSmoke() -> Bool {
        guard ProcessInfo.processInfo.environment["WITHSNOZZY_DATA_DIR"] != nil else {
            print("--storysmoke 会写存档，必须设 WITHSNOZZY_DATA_DIR 指到临时目录")
            return false
        }
        ok = true
        let state = AppState()
        state.story.idleSeconds = { 0 }
        var said: [String] = []
        var chin = false, stretch = false, celebrated = false
        func pump(_ seconds: Double, until: () -> Bool = { false }) {
            let end = Date().addingTimeInterval(seconds)
            while Date() < end && !until() {
                RunLoop.main.run(until: Date().addingTimeInterval(0.01))
                if let line = state.chatter.current, said.last != line { said.append(line) }
                if state.closeUp.chinFrame == CloseUp.transitionFrames { chin = true }
                if state.action(.stretch).frame == CloseUp.transitionFrames { stretch = true }
                if state.celebrationAmount(at: Date().timeIntervalSinceReferenceDate) > 0 {
                    celebrated = true
                }
            }
        }

        print("== 开场")
        pump(25) { !state.story.hasPending && !state.story.isPerforming && said.count >= 4 }
        print("  说了：" + said.joined(separator: " / "))
        check("先打招呼，再演序章（三句按顺序）",
              said.count >= 4 && Array(said.suffix(3)) == Story.prologue.lines)
        check("序章是凑近说的（托腮到了终态）", chin)

        print("== 写完第一首")
        said = []; chin = false
        var st = state.story.state
        st.progress = StoryEngine.need(st) - 0.5
        st.lastFinishDay = nil
        // preview 会停掉存盘：这一段只验接线，不验落盘
        state.story.preview(st)
        state.story.tick()
        check("攒够了就写完（\(state.story.state.chapters) 首），排进待演",
              state.story.state.chapters == 1 && state.story.hasPending)
        state.albumMode = true
        check("专辑播放列表跟着变成 1 首", state.audio.albumTracks == 1)
        pump(30) { !state.story.hasPending && !state.story.isPerforming
                   && state.performer.current == nil }
        print("  说了：" + said.joined(separator: " / "))
        check("三句按顺序", Array(said.suffix(3)) == Story.chapters[0].lines)
        check("伸了懒腰（\(stretch)）、凑近了（\(chin)）、笑了一下（\(celebrated)）",
              stretch && chin && celebrated)

        print("== 专注中写完")
        said = []
        st = state.story.state
        st.progress = StoryEngine.need(st) - 0.5
        st.lastFinishDay = nil
        state.story.preview(st)
        state.focus.start()
        state.story.tick()
        pump(3)
        check("专注中写完第二首，但先不演（待演 \(state.story.state.pending.count)）",
              state.story.state.chapters == 2 && state.story.hasPending
                && !said.contains(Story.chapters[1].lines[0]))
        state.focus.reset()
        state.story.tick()
        pump(30) { !state.story.hasPending && !state.story.isPerforming
                   && state.performer.current == nil }
        check("歇下来之后演了", said.suffix(3) == Story.chapters[1].lines[...])
        state.albumMode = false
        check("关掉专辑模式，电台回到现场生成", state.audio.albumTracks == 0)
        print("STORYSMOKE " + (ok ? "全部通过" : "有不合格项"))
        return ok
    }

    // MARK: - 画面里的主线

    static var stripPath: String? {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: "--storystrip"), i + 1 < args.count else { return nil }
        return args[i + 1]
    }

    /// 主线在房间里的两处痕迹：侧屏的"写歌"卷帘，夜里窗外的旋律星座。
    /// 出一张对照图，再量三件事——星星只改窗洞里的像素、白天一颗都看不见、
    /// 写歌的卷帘只画在侧屏里。
    static func runStrip(path: String) -> Bool {
        ok = true
        let assets = SceneAssets()
        assets.load()
        guard assets.isAvailable, assets.hasRenderedCharacter else {
            print("房间/角色素材没加载到")
            return false
        }
        let size = CGSize(width: 720, height: 480)
        struct Cell { let label: String; let palette: Palette; let weather: Weather
                      let stars: Int; let activity: SnozzyActivity; let playing: Bool }
        let cells = [
            Cell(label: "DAY · 写歌", palette: .day, weather: .clear, stars: 3,
                 activity: .composing, playing: false),
            Cell(label: "DUSK · 写歌 · 放着歌", palette: .dusk, weather: .clear, stars: 5,
                 activity: .composing, playing: true),
            Cell(label: "NIGHT · 写完 5 首", palette: .night, weather: .clear, stars: 5,
                 activity: .resting, playing: false),
            Cell(label: "NIGHT · 十二首", palette: .night, weather: .clear, stars: 12,
                 activity: .resting, playing: false),
        ]
        func scene(_ c: Cell, stars: Int? = nil) -> some View {
            let t = 41.3
            let cue = ActivityRig.preview(c.activity, playing: c.playing)
            let frame = SceneFrame(
                palette: c.palette, t: t,
                pose: SnozzyRig.pose(time: t, kick: 0, playing: c.playing),
                face: FaceRig.expression(t: t, playing: c.playing, mood: 0.6, drowsy: 0,
                                         working: false, speaking: false, activity: cue),
                headphones: c.playing, activity: cue, playing: c.playing,
                typingFrame: TypingRig.frame(at: t, working: false,
                                             frames: assets.hands.frames, activity: cue))
            return SceneLayers(assets: assets, frame: frame, size: size,
                               weather: c.weather, constellation: stars ?? c.stars)
                .frame(width: size.width, height: size.height)
        }
        let sheet = VStack(spacing: 4) {
            ForEach(0..<2, id: \.self) { row in
                HStack(spacing: 4) {
                    ForEach(0..<2, id: \.self) { col in
                        let c = cells[row * 2 + col]
                        scene(c).overlay(alignment: .topLeading) {
                            Text(c.label)
                                .font(.system(size: 12, weight: .semibold, design: .rounded))
                                .foregroundStyle(.white.opacity(0.85))
                                .padding(.horizontal, 8).padding(.vertical, 4)
                                .background(.black.opacity(0.4), in: Capsule())
                                .padding(8)
                        }
                    }
                }
            }
        }
        .padding(4)
        .background(Color(white: 0.1))
        let r = ImageRenderer(content: sheet)
        r.scale = 1
        if let image = r.nsImage, let tiff = image.tiffRepresentation,
           let rep = NSBitmapImageRep(data: tiff),
           let png = rep.representation(using: .png, properties: [:]) {
            try? png.write(to: URL(fileURLWithPath: path))
            print("已写入 \(path)")
        }

        func pixels<V: View>(_ v: V) -> [UInt8] {
            let r = ImageRenderer(content: v.frame(width: size.width, height: size.height))
            r.scale = 1
            guard let cg = r.cgImage, let data = cg.dataProvider?.data as Data? else { return [] }
            return [UInt8](data)
        }
        /// 差异像素的个数和包围盒（窗口坐标）。
        func diff(_ a: [UInt8], _ b: [UInt8]) -> (count: Int, box: CGRect) {
            guard a.count == b.count, !a.isEmpty else { return (Int.max, .null) }
            let w = Int(size.width)
            var n = 0
            var box = CGRect.null
            for i in stride(from: 0, to: a.count - 3, by: 4) {
                let d = max(abs(Int(a[i]) - Int(b[i])), abs(Int(a[i + 1]) - Int(b[i + 1])),
                            abs(Int(a[i + 2]) - Int(b[i + 2])))
                guard d > 6 else { continue }
                n += 1
                let p = i / 4
                box = box.union(CGRect(x: p % w, y: p / w, width: 1, height: 1))
            }
            return (n, box)
        }
        func describe(_ r: CGRect) -> String {
            r.isNull ? "无" : "(\(Int(r.minX)),\(Int(r.minY)))-(\(Int(r.maxX)),\(Int(r.maxY)))"
        }

        print("== 窗外的旋律星座")
        let window = assets.windowFrame(in: size) ?? .zero
        let night = cells[3]
        let lit = diff(pixels(scene(night, stars: 0)), pixels(scene(night)))
        print("  夜里 0 → 12 颗：\(lit.count) 像素变化，范围 \(describe(lit.box))，窗洞 \(describe(window))")
        check("夜里亮得出来（> 60 像素）", lit.count > 60)
        check("只改窗洞里的像素", window.insetBy(dx: -2, dy: -2).contains(lit.box))
        let dayCell = Cell(label: "", palette: .day, weather: .clear, stars: 12,
                           activity: .resting, playing: false)
        let day = diff(pixels(scene(dayCell, stars: 0)), pixels(scene(dayCell)))
        check("白天一颗都看不见（\(day.count) 像素）", day.count == 0)
        let rainCell = Cell(label: "", palette: .night, weather: .rain, stars: 12,
                            activity: .resting, playing: false)
        let rainLit = diff(pixels(scene(rainCell, stars: 0)), pixels(scene(rainCell)))
        print("  雨夜 0 → 12 颗：\(rainLit.count) 像素")

        print("== 侧屏上的写歌卷帘")
        func overlay(_ a: SnozzyActivity) -> some View {
            PaintedRoomActivityOverlay(assets: assets, cue: ActivityRig.preview(a, playing: false),
                                       palette: .day, playing: false, t: 41.3)
        }
        let compose = diff(pixels(overlay(.typing)), pixels(overlay(.composing)))
        let screen = CGRect(x: 0.165 * size.width, y: 0.346 * size.height,
                            width: 0.086 * size.width, height: 0.194 * size.height)
        print("  敲代码 → 写歌：\(compose.count) 像素变化，范围 \(describe(compose.box))，"
              + "侧屏 \(describe(screen))")
        check("卷帘只画在侧屏里", screen.insetBy(dx: -2, dy: -2).contains(compose.box)
              && compose.count > 30)
        print("STORYSTRIP " + (ok ? "全部通过" : "有不合格项"))
        return ok
    }

    // MARK: - 面板截图

    /// 照真实视图渲「她的专辑」面板：写到第五首、今天陪了一会儿、展开一页日记。
    /// 不经过 `PanelShell`——`ImageRenderer` 画不出 `ScrollView` 里的东西。
    static func runPanel(path: String) {
        let state = AppState()
        var s = StoryEngine.fresh(at: Date().addingTimeInterval(-9 * 86400), focusMinutes: 0)
        s.pending = []
        s.unread = 0
        s.chapters = 5
        s.finishedAt = (0..<5).map { Date().addingTimeInterval(Double($0 - 8) * 86400) }
        s.metDays = 9
        s.progress = 210
        var today = StoryDay()
        today.company = 134
        today.focus = 50
        today.tasks = 2
        today.chats = 3
        s.days[StoryEngine.dayKey(Date())] = today
        state.story.preview(s)
        let view = StoryPanel(palette: .dusk)
            .environment(state)
            .padding(16)
            .frame(width: Metrics.panelWidth)
            .background(Color(red: 0.16, green: 0.13, blue: 0.21))
            .preferredColorScheme(.dark)
        let renderer = ImageRenderer(content: view)
        renderer.scale = 2
        guard let image = renderer.nsImage, let tiff = image.tiffRepresentation,
              let rep = NSBitmapImageRep(data: tiff),
              let png = rep.representation(using: .png, properties: [:]),
              (try? png.write(to: URL(fileURLWithPath: path))) != nil else {
            print("面板渲染失败")
            exit(1)
        }
        print("已写入 \(path)  (\(Int(image.size.width))×\(Int(image.size.height)))")
        exit(0)
    }
}

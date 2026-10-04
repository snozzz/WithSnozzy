import CoreGraphics
import Foundation

/// 主线里需要"演出来"的一拍。写完了但还没演给你看的，排在存档里等。
enum StoryBeat: Codable, Hashable {
    case prologue
    /// 第 n 首（0 起）写完了。
    case chapter(Int)
    /// 专辑之后的第 n 段小样。
    case demo(Int)
    /// 一起度过的第 n 天。
    case anniversary(Int)
    /// 昨天的你留给今天的一句话。
    case note(String)

    /// 这一拍她说的三句（或两句）。
    var lines: [String] {
        switch self {
        case .prologue: Story.prologue.lines
        case .chapter(let i): Story.chapters[min(i, Story.chapters.count - 1)].lines
        case .demo(let n) where n == 0:
            ["专辑写完了，可还是想写。", "随手写了一段，叫《\(Story.demoTitle(0))》。",
             "以后写一段，就放给你听一段。"]
        case .demo(let n): Story.demoLines(n)
        case .anniversary(let d): Story.anniversaries[d]?.lines ?? []
        case .note(let text): ["昨天的你，留了一句话。", "「\(text)」"]
        }
    }

    /// 写完一首（或一段）要伸个懒腰再凑过来；序章和纪念日只凑过来说话。
    var stretchesFirst: Bool {
        switch self {
        case .chapter, .demo: true
        case .prologue, .anniversary, .note: false
        }
    }
}

/// 一天里的陪伴明细。面板上"今天"那一行读它。
struct StoryDay: Codable, Equatable {
    /// 你在电脑前、app 开着的分钟数。
    var company = 0
    /// 其中番茄钟专注的分钟数。
    var focus = 0
    var tasks = 0
    var chats = 0
    /// 这一天给专辑攒了多少（封顶 `StoryEngine.dailyCap`）。
    var points = 0.0

    init() {}

    /// 逐字段 `decodeIfPresent`：加字段不能清老存档（第 58 条）。
    init(from decoder: Decoder) throws {
        let c = try decoder.container(keyedBy: CodingKeys.self)
        company = (try? c.decodeIfPresent(Int.self, forKey: .company)).flatMap { $0 } ?? 0
        focus = (try? c.decodeIfPresent(Int.self, forKey: .focus)).flatMap { $0 } ?? 0
        tasks = (try? c.decodeIfPresent(Int.self, forKey: .tasks)).flatMap { $0 } ?? 0
        chats = (try? c.decodeIfPresent(Int.self, forKey: .chats)).flatMap { $0 } ?? 0
        points = (try? c.decodeIfPresent(Double.self, forKey: .points)).flatMap { $0 } ?? 0
    }
}

/// 主线的存档（`story.json`）。只记"发生过什么"，台词、歌和门槛都在
/// `Story` / `StoryEngine` 里——改内容不用迁移存档。
struct StoryState: Codable, Equatable {
    var version = 1
    var startedAt = Date()
    /// 写完了几首（0…12）。
    var chapters = 0
    /// 每一首写完的时刻，下标对 `Story.chapters`。
    var finishedAt: [Date] = []
    /// 专辑之后写了几段小样。
    var demos = 0
    /// 当前这一首（或下一段小样）攒了多少，单位是"陪伴分钟"。
    var progress = 0.0
    /// 上一首写完的那天。每天最多写完一首，主线是按天连载的。
    var lastFinishDay: String?
    /// 最近 60 天的明细。
    var days: [String: StoryDay] = [:]
    /// 一起度过了几天（当天陪伴满 `StoryEngine.metMinutes` 分钟才算）。
    var metDays = 0
    var lastMetDay: String?
    /// 上一次在电脑前的那天。隔了好几天再见，打招呼要不一样。
    var lastSeenDay: String?
    /// 写完了、还没演给你看的。
    var pending: [StoryBeat] = []
    /// 面板里还没看过的新页数。控制条上那个小点。
    var unread = 0
    /// 给明天留的一句话，和写下它的那天。第二天第一次见面时她念出来。
    var note: String?
    var noteDay: String?

    init() {}

    init(from decoder: Decoder) throws {
        let c = try decoder.container(keyedBy: CodingKeys.self)
        let d = StoryState()
        func get<T: Decodable>(_ key: CodingKeys, _ fallback: T) -> T {
            (try? c.decodeIfPresent(T.self, forKey: key)).flatMap { $0 } ?? fallback
        }
        version = get(.version, d.version)
        startedAt = get(.startedAt, d.startedAt)
        chapters = min(max(get(.chapters, d.chapters), 0), Story.chapterCount)
        finishedAt = get(.finishedAt, d.finishedAt)
        demos = max(get(.demos, d.demos), 0)
        progress = max(get(.progress, d.progress), 0)
        lastFinishDay = get(.lastFinishDay, d.lastFinishDay)
        days = get(.days, d.days)
        metDays = max(get(.metDays, d.metDays), 0)
        lastMetDay = get(.lastMetDay, d.lastMetDay)
        lastSeenDay = get(.lastSeenDay, d.lastSeenDay)
        pending = get(.pending, d.pending)
        unread = max(get(.unread, d.unread), 0)
        note = get(.note, d.note)
        noteDay = get(.noteDay, d.noteDay)
    }

    static let storeName = "story"

    /// 专辑里现在能放几首（写完的章节 + 小样）。
    var playableTracks: Int { chapters + demos }
    var albumComplete: Bool { chapters >= Story.chapterCount }
}

/// 主线的规则。全是纯函数：给定存档和一笔贡献，结果唯一——
/// `--storycheck` 才能拿合成的时钟模拟几十天的使用，而不用真的等。
enum StoryEngine {
    /// 每一首要攒多少陪伴分钟。第一首一个半小时，第一天就能听到；
    /// 越往后越长，整张大约一百个小时。
    static let thresholds: [Double] = [90, 180, 300, 420, 480, 540, 600, 660, 720, 780, 840, 900]
    /// 专辑之后每段小样。
    static let demoThreshold = 480.0
    /// 一天最多攒这么多。整天挂着也是一天一天地走。
    static let dailyCap = 600.0
    /// 专注的一分钟算多少。她也在写，算得多一点。
    static let focusWeight = 1.5
    static let taskPoints = 10.0
    static let taskCap = 60.0
    static let chatPoints = 3.0
    static let chatCap = 30.0
    /// 当天陪伴满多少分钟才算"一起度过了一天"。
    static let metMinutes = 10
    /// 键盘鼠标多久没动就当你不在。
    static let idleLimit: Double = 300
    /// 隔几天没见算"好久不见"。
    static let reunionGap = 3
    static let keepDays = 60

    enum Contribution {
        /// 你在电脑前的一分钟。`focusing` 是番茄钟正在专注。
        case minute(focusing: Bool)
        case task
        case chat
    }

    /// 主线的"一天"从早上 5 点算起，不是午夜。
    ///
    /// 按午夜切的话，夜里 23:50 给明天留的话 00:01 就被念出来了，凌晨一点写完的
    /// 那首也算成"新的一天"——对熬夜的人来说那还是同一个晚上。
    static let dayStartsAt: TimeInterval = 5 * 3600

    static func dayKey(_ date: Date) -> String {
        FocusHistory.dayFormatter.string(from: date.addingTimeInterval(-dayStartsAt))
    }

    /// 当前这一首（或下一段小样）的门槛。
    static func need(_ s: StoryState) -> Double {
        s.chapters < thresholds.count ? thresholds[s.chapters] : demoThreshold
    }

    /// 新存档。之前用番茄钟专注过的时间折一点进来（最多一小时）——
    /// 你们不是今天才认识的。
    static func fresh(at date: Date, focusMinutes: Int) -> StoryState {
        var s = StoryState()
        s.startedAt = date
        s.progress = Double(min(max(focusMinutes, 0), 60))
        s.pending = [.prologue]
        s.unread = 1
        return s
    }

    /// 记一笔。返回这一笔触发的新一拍（写完一首、纪念日），没有就是 nil。
    @discardableResult
    static func credit(_ s: inout StoryState, _ c: Contribution, at date: Date) -> [StoryBeat] {
        let day = dayKey(date)
        var d = s.days[day] ?? StoryDay()
        var beats: [StoryBeat] = []
        var points: Double
        switch c {
        case .minute(let focusing):
            d.company += 1
            if focusing { d.focus += 1 }
            points = focusing ? focusWeight : 1
            s.lastSeenDay = day
            // 新的一天第一次见到你：昨天留的那句话该念了。
            if let note = s.note, let written = s.noteDay, day > written {
                beats.append(.note(note))
                s.note = nil
                s.noteDay = nil
            }
            if d.company == metMinutes, s.lastMetDay != day {
                s.metDays += 1
                s.lastMetDay = day
                if Story.anniversaries[s.metDays] != nil {
                    beats.append(.anniversary(s.metDays))
                }
            }
        case .task:
            d.tasks += 1
            points = Double(d.tasks) * taskPoints <= taskCap ? taskPoints : 0
        case .chat:
            d.chats += 1
            points = Double(d.chats) * chatPoints <= chatCap ? chatPoints : 0
        }
        points = min(points, max(0, dailyCap - d.points))
        d.points += points
        s.days[day] = d
        prune(&s)
        // 被"每天一首"挡住的那部分最多攒到下一首的门槛：攒不出两首。
        s.progress = min(s.progress + points, need(s) * 2)
        if let beat = advance(&s, at: date) { beats.append(beat) }
        s.pending.append(contentsOf: beats)
        s.unread += beats.count
        return beats
    }

    /// 够了就写完一首。每天最多一首。
    ///
    /// 日期要**严格晚于**上一首那天，不是"不等于"：系统时间往回拨一天，
    /// 用"不等于"判的话同一个真实的日子能写完两首。
    static func advance(_ s: inout StoryState, at date: Date) -> StoryBeat? {
        let day = dayKey(date)
        if let last = s.lastFinishDay, day <= last { return nil }
        let threshold = need(s)
        guard s.progress >= threshold else { return nil }
        s.progress -= threshold
        s.lastFinishDay = day
        let beat: StoryBeat
        if s.chapters < Story.chapterCount {
            s.finishedAt.append(date)
            s.chapters += 1
            beat = .chapter(s.chapters - 1)
        } else {
            s.demos += 1
            beat = .demo(s.demos - 1)
        }
        s.progress = min(s.progress, need(s))
        return beat
    }

    /// 只留最近 `keepDays` 天的明细。key 是 yyyy-MM-dd，字典序就是时间序。
    private static func prune(_ s: inout StoryState) {
        guard s.days.count > keepDays else { return }
        for key in s.days.keys.sorted().dropLast(keepDays) { s.days[key] = nil }
    }

    /// 给明天留的一句话最多多长：念出来要装进两行气泡，引号还占两个字。
    static let noteLimit = 18

    /// 留一句（覆盖今天之前留的）。空的就是撤回。
    static func leaveNote(_ s: inout StoryState, _ text: String, at date: Date) {
        let clean = text.trimmingCharacters(in: .whitespacesAndNewlines)
            .replacingOccurrences(of: "\n", with: " ")
        s.note = clean.isEmpty ? nil : String(clean.prefix(noteLimit))
        s.noteDay = clean.isEmpty ? nil : dayKey(date)
    }

    /// 上次见面隔了几天。nil 是第一次。
    static func daysAway(_ s: StoryState, now: Date) -> Int? {
        // 两边都是 dayKey 切出来的日期串，按日历日相减即可
        guard let last = s.lastSeenDay,
              let then = FocusHistory.dayFormatter.date(from: last),
              let today = FocusHistory.dayFormatter.date(from: dayKey(now)) else { return nil }
        return Calendar.current.dateComponents([.day], from: then, to: today).day
    }
}

/// 你在不在电脑前。
enum Presence {
    /// 距最后一次键盘/鼠标/触控板输入多少秒。不需要辅助功能权限；
    /// 锁屏、屏幕睡眠时它一直在涨，于是自然不算陪伴。
    static func idleSeconds() -> Double {
        CGEventSource.secondsSinceLastEventType(.hidSystemState,
                                                eventType: CGEventType(rawValue: ~0)!)
    }
}

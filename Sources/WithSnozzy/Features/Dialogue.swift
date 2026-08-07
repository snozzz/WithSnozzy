import Foundation
import Observation

/// 说话的时机。
enum DialogueContext {
    case greetingMorning, greetingAfternoon, greetingEvening, greetingLateNight
    /// 没事干的时候随口说的。
    case idle
    /// 被摸头。
    case pet
    /// 打瞌睡时被摸醒。
    case wokenUp
    case focusStarted, focusFinished, breakFinished
    case taskAdded, taskCompleted, allTasksDone
    case rain, snow
    /// 连续专注很久了。
    case longSession
    case musicChanged
    case ambienceOn
    /// 抓到你在看她（近景切换）。**待办还没做完**的那一版在
    /// `Dialogue.nag(about:)`，这里这一版是清单空着时用的。
    case caughtWatching
}

/// 台词库。
///
/// 写台词的两条自我约束：
/// 一是**短**——超过一行就变成了念稿，气泡也会挡住画面；
/// 二是**别太热情**——这是个陪你安静待着的角色，不是客服。
/// 她大部分时候只是把注意力放在你身上，说一句就够了。
enum Dialogue {

    private static let bank: [DialogueContext: [String]] = [
        .greetingMorning: [
            "早。窗外天刚亮。",
            "早上好，今天想做点什么？",
            "刚醒？我也是。",
            "咖啡我先煮上了。",
        ],
        .greetingAfternoon: [
            "下午好。",
            "今天过得还顺利吗？",
            "光线正好，适合做点事。",
            "要不要先喝口水？",
        ],
        .greetingEvening: [
            "傍晚了呢。",
            "天快黑了，灯我开着。",
            "今天辛苦了。",
            "这个时间最舒服。",
        ],
        .greetingLateNight: [
            "这么晚还没睡？",
            "夜深了，别太勉强。",
            "我陪你，但记得留点力气给明天。",
            "深夜的安静挺好的。",
        ],
        .idle: [
            "……",
            "唔。",
            "这段还挺好听的。",
            "外面很安静。",
            "我在呢。",
            "不急，慢慢来。",
            "要不要伸个懒腰？",
            "坐久了记得动一动。",
            "猫又睡着了。",
            "刚才那句旋律不错。",
            "窗外的灯一盏盏亮起来了。",
            "咖啡快凉了。",
        ],
        .pet: [
            "唔……",
            "嗯，舒服。",
            "别闹啦。",
            "……再摸一下也行。",
            "头发会乱的。",
            "嘿嘿。",
        ],
        .wokenUp: [
            "唔……我没睡。",
            "……嗯？",
            "只是闭一下眼睛。",
            "你也该睡了。",
            "几点了……",
        ],
        .focusStarted: [
            "好，开始吧。",
            "我不吵你。",
            "这段时间交给你了。",
            "专心，我在旁边。",
        ],
        .focusFinished: [
            "一段完成了，休息一下。",
            "做得好。",
            "先站起来走两步吧。",
            "辛苦了，喝口水。",
        ],
        .breakFinished: [
            "休息够了吗？",
            "那……继续？",
            "回来啦。",
        ],
        .taskAdded: [
            "记下了。",
            "嗯，一件一件来。",
            "会做完的。",
        ],
        .taskCompleted: [
            "又划掉一条。",
            "干得漂亮。",
            "这个感觉不错吧。",
        ],
        .allTasksDone: [
            "全都做完了，厉害。",
            "今天可以早点休息了。",
            "清空了呢。",
        ],
        .rain: [
            "下雨了。",
            "雨声挺好听的。",
            "今天不用出门就好了。",
        ],
        .snow: [
            "下雪了。",
            "外面好安静。",
            "屋里暖和。",
        ],
        .longSession: [
            "已经很久了，要不要歇一会儿？",
            "眼睛该休息了。",
            "喝点水吧。",
        ],
        .musicChanged: [
            "换一首。",
            "这段试试看。",
            "嗯，这个调子。",
        ],
        .ambienceOn: [
            "这样是不是更放松一点。",
            "背景音开着吧。",
        ],
        // 待办清单是空的时候用这些。有待办的话走 `nag(about:)`，
        // 那一版会把事情的名字念出来，杀伤力大得多。
        .caughtWatching: [
            "……看什么呢。",
            "我脸上有东西？",
            "嗯？找我有事？",
            "看够了没有。",
            "……你今天挺闲的嘛。",
            "再看就要收费了。",
        ],
    ]

    /// 取一句。避免和上一句重复。
    static func line(for context: DialogueContext, avoiding previous: String?) -> String {
        guard let lines = bank[context], !lines.isEmpty else { return "……" }
        if lines.count == 1 { return lines[0] }
        var candidates = lines
        if let previous, let i = candidates.firstIndex(of: previous), candidates.count > 1 {
            candidates.remove(at: i)
        }
        return candidates.randomElement() ?? lines[0]
    }

    /// 抓到你在看她、而待办上还挂着事——把那件事的名字念出来。
    ///
    /// 念出**具体哪一件**是这句话的全部杀伤力所在。"还有事没做完呢"是废话，
    /// "「重写导出模块」还挂着呢"才扎人——她真的看了你的清单。
    ///
    /// 待办的标题是用户自己写的，长度完全不可控，而气泡最多两行。
    /// 所以超长的要截断：句子模板本身就有十来个字，标题再长就把气泡撑爆，
    /// 或者被 `lineLimit(2)` 无声地吃掉后半句。
    static func nag(about task: String, avoiding previous: String?) -> String {
        let title = trim(task)
        let lines = [
            "「\(title)」还挂在上面呢。",
            "光看我可做不完「\(title)」。",
            "……「\(title)」怎么办？",
            "我在这儿又跑不掉，「\(title)」先做吧。",
            "你确定现在该看的是我，不是「\(title)」？",
            "「\(title)」——提醒你一下。",
        ]
        var candidates = lines
        if let previous, let i = candidates.firstIndex(of: previous),
           candidates.count > 1 {
            candidates.remove(at: i)
        }
        return candidates.randomElement() ?? lines[0]
    }

    /// 待办标题在气泡里最多留多长。
    ///
    /// 12 个字是量出来的：气泡最宽 210 点、正文 12 号圆体，一行大约装
    /// 15 个汉字，模板本身要占七八个字，标题给到 12 个字正好落在第二行内。
    private static let titleLimit = 12

    private static func trim(_ s: String) -> String {
        let t = s.trimmingCharacters(in: .whitespacesAndNewlines)
        guard t.count > titleLimit else { return t }
        return t.prefix(titleLimit - 1) + "…"
    }

    /// 按当前时刻挑一句问候。
    static func greetingContext(hour: Double) -> DialogueContext {
        switch hour {
        case 5..<11: .greetingMorning
        case 11..<17: .greetingAfternoon
        case 17..<23: .greetingEvening
        default: .greetingLateNight
        }
    }
}

/// 管理「她什么时候说话、说多久」。
///
/// 主动搭话的频率是这个功能成败的关键：太密会烦，太疏又感觉不到陪伴。
/// 这里定在平均两三分钟一句，而且只在**没有别的事发生**时才开口。
@MainActor
@Observable
final class Chatter {

    /// 当前显示的台词，nil 表示气泡收起。
    private(set) var current: String?

    private var expiry: Date?
    private var lastSpoke = Date.distantPast
    private var ticker: Timer?
    /// 这句话是什么时候开口的。嘴部动画拿它算说完没有。
    private var spokeAt: Date?

    /// 主动搭话的最短间隔（秒）。
    private let idleGap: TimeInterval = 95
    /// 每次心跳开口的概率。
    private let idleChance = 0.22
    /// 一句话停留多久。
    private static let dwell: TimeInterval = 6.5

    /// 此刻嘴该不该在动。
    ///
    /// **气泡还在不等于还在说。** 气泡要停 6.5 秒，而一句话两秒就说完了；
    /// 拿 `current != nil` 当判据的话，她说完之后嘴还要再动四秒半。
    var isSpeaking: Bool {
        guard let current, let spokeAt else { return false }
        return Date().timeIntervalSince(spokeAt) < Self.speechTime(current)
    }

    /// 按字数估的说话时长。中文放松语速大约每秒四五个字。
    ///
    /// **不要拿 `dwell` 去封顶。** 原来写的是 `min(dwell, …)`，因为那时候
    /// 所有台词都出自台词库、没有一句长到 6.5 秒。对话系统接进来之后
    /// 回复能有三四十个字，封顶的结果是嘴动到一半停下、气泡还挂着——
    /// 正好是第 25 条那个 bug 反过来。句子多长就动多久，
    /// 气泡的停留时长（`speak`）本来就是按同一个字数算的，不会脱节。
    private static func speechTime(_ line: String) -> TimeInterval {
        max(1.0, Double(line.count) * 0.22)
    }

    init() {
        // 12 秒一次心跳。这个频率足够让搭话显得随机，又不会有明显的节拍感。
        let t = Timer(timeInterval: 12, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated { self?.heartbeat() }
        }
        RunLoop.main.add(t, forMode: .common)
        ticker = t
    }

    // 没有 deinit：`deinit` 是非隔离的，碰不到 @MainActor 的属性。
    // 心跳闭包用的是 weak self，所以即使 Chatter 被释放，定时器也只是空转，
    // 何况它的生命周期本来就和应用一样长。

    /// 事件触发的台词。这类总是立刻说，会打断当前那句。
    func say(_ context: DialogueContext) {
        speak(Dialogue.line(for: context, avoiding: current))
    }

    /// 直接说一句现成的话。念待办、以及对话系统的回复走这条。
    ///
    /// `dwell` 可以放长：台词库里的句子都短，6.5 秒绰绰有余，
    /// 但对话系统回来的句子可能有三四十个字，按老时长还没读完就收了。
    /// 长度和停留时长的换算和 `speechTime` 一致（每秒四五个字），
    /// 再留一段读完之后的余裕。
    func speak(_ line: String, dwell: TimeInterval? = nil) {
        let trimmed = line.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else { return }
        current = trimmed
        expiry = Date().addingTimeInterval(
            dwell ?? max(Self.dwell, Double(trimmed.count) * 0.22 + 2.5))
        lastSpoke = Date()
        spokeAt = Date()
    }

    /// 主动搭话。只有距离上次说话足够久、且掷骰子通过时才开口。
    func idleChatter() {
        guard current == nil,
              Date().timeIntervalSince(lastSpoke) > idleGap,
              Double.random(in: 0...1) < idleChance
        else { return }
        say(.idle)
    }

    private func heartbeat() {
        if let e = expiry, Date() >= e {
            current = nil
            expiry = nil
            spokeAt = nil
            return
        }
        idleChatter()
    }

    /// 流式回复：一个字一个字地把气泡撑出来。
    ///
    /// 和 `speak` 分开，因为**不能每来一个字就重置一次"什么时候开始说的"**——
    /// `spokeAt` 是嘴部动画的起点，每帧重置的话嘴会一直卡在开口的第一帧。
    /// 这里只更新文字和到期时间，起点保持第一个字到达的那一刻。
    func stream(_ partial: String) {
        let text = partial.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !text.isEmpty else { return }
        if current == nil || spokeAt == nil { spokeAt = Date() }
        current = text
        expiry = Date().addingTimeInterval(
            max(Self.dwell, Double(text.count) * 0.22 + 2.5))
        lastSpoke = Date()
    }

    /// 手动收起气泡（比如切到桌宠模式）。
    func hush() {
        current = nil
        expiry = nil
        spokeAt = nil
    }
}

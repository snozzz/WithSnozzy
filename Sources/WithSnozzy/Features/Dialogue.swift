import Foundation
import Observation

/// 说话的时机。
enum DialogueContext {
    case greetingMorning, greetingAfternoon, greetingEvening, greetingLateNight
    /// 没事干的时候随口说的。
    case idle
    /// 被摸头。
    case pet
    case focusStarted, focusFinished, breakFinished
    case taskAdded, taskCompleted, allTasksDone
    case rain, snow
    /// 连续专注很久了。
    case longSession
    case musicChanged
    case ambienceOn
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

    /// 主动搭话的最短间隔（秒）。
    private let idleGap: TimeInterval = 95
    /// 每次心跳开口的概率。
    private let idleChance = 0.22
    /// 一句话停留多久。
    private let dwell: TimeInterval = 6.5

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
        current = Dialogue.line(for: context, avoiding: current)
        expiry = Date().addingTimeInterval(dwell)
        lastSpoke = Date()
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
            return
        }
        idleChatter()
    }

    /// 手动收起气泡（比如切到桌宠模式）。
    func hush() {
        current = nil
        expiry = nil
    }
}

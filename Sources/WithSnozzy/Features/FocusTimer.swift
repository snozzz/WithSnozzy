import Foundation
import Observation

/// 番茄钟的阶段。
enum FocusPhase: String, Codable {
    case idle, work, shortBreak, longBreak

    var label: String {
        switch self {
        case .idle: "待开始"
        case .work: "专注"
        case .shortBreak: "短休息"
        case .longBreak: "长休息"
        }
    }

    var isBreak: Bool { self == .shortBreak || self == .longBreak }
}

/// 可配置的时长（分钟）。
struct FocusSettings: Codable, Equatable {
    var work = 25
    var shortBreak = 5
    var longBreak = 15
    /// 几个专注段之后进入长休息。
    var roundsBeforeLong = 4
    /// 一段结束后是否自动进入下一段。
    var autoContinue = true

    static let storeName = "focus-settings"
}

/// 每日专注时长的累计。key 是 `yyyy-MM-dd`。
struct FocusHistory: Codable {
    var minutesByDay: [String: Int] = [:]
    /// 累计完成的专注段数。
    var totalSessions: Int = 0

    static let storeName = "focus-history"

    static let dayFormatter: DateFormatter = {
        let f = DateFormatter()
        f.dateFormat = "yyyy-MM-dd"
        f.locale = Locale(identifier: "en_US_POSIX")
        return f
    }()

    func minutes(on date: Date) -> Int {
        minutesByDay[Self.dayFormatter.string(from: date)] ?? 0
    }

    mutating func add(minutes: Int, on date: Date = Date()) {
        let key = Self.dayFormatter.string(from: date)
        minutesByDay[key, default: 0] += minutes
    }

    /// 连续专注的天数（含今天；今天没记录则从昨天往前数）。
    func streak(now: Date = Date()) -> Int {
        let cal = Calendar.current
        var day = now
        if minutes(on: day) == 0 {
            guard let yesterday = cal.date(byAdding: .day, value: -1, to: day) else { return 0 }
            day = yesterday
        }
        var count = 0
        while minutes(on: day) > 0 {
            count += 1
            guard let prev = cal.date(byAdding: .day, value: -1, to: day) else { break }
            day = prev
        }
        return count
    }
}

/// 番茄钟。
///
/// 计时用「记录截止时刻 + 每秒对一次表」而不是「每秒减一」。
/// 后者在系统休眠或定时器被推迟时会越走越慢，睡一觉醒来发现计时器停在半路上。
@MainActor
@Observable
final class FocusTimer {

    private(set) var phase: FocusPhase = .idle
    /// 当前阶段的剩余秒数。
    private(set) var remaining: TimeInterval = 0
    /// 本轮已完成的专注段数，用来判断该不该进长休息。
    private(set) var round = 0
    private(set) var isRunning = false

    var settings = FocusSettings() {
        didSet { if settings != oldValue { settingsSaver?.schedule() } }
    }
    private(set) var history = FocusHistory()

    /// 一个阶段自然走完时回调（用来响铃、加心情值）。
    var onPhaseFinished: ((FocusPhase) -> Void)?
    /// 在 phase 真正改变前发出，让 AppState 冻结屏幕此刻的完整 ActivityCue。
    var onPhaseWillChange: ((FocusPhase, FocusPhase, Date) -> Void)?
    /// 一个阶段**开始**时回调，第二个参数是"这次是不是计时器自己走到的"。
    ///
    /// 和 `onPhaseFinished` 分开是因为它们回答的是不同的问题：完成是"这一段
    /// 做完了"（响铃、加心情），开始是"要干活了"（端起咖啡）。而手动 skip
    /// 一路点过去时不该触发后者——那会让她一段一段地举杯，像在灌咖啡。
    var onPhaseBegan: ((FocusPhase, Bool) -> Void)?

    private var deadline: Date?
    private var ticker: Timer?
    private var settingsSaver: DebouncedSaver?
    private var historySaver: DebouncedSaver?
    /// 本阶段已计入历史的分钟数，防止暂停/恢复时重复累加。
    private var creditedMinutes = 0
    private var phaseStart: Date?

    init() {
        settings = Store.load(FocusSettings.storeName, as: FocusSettings.self) ?? FocusSettings()
        history = Store.load(FocusHistory.storeName, as: FocusHistory.self) ?? FocusHistory()
        settingsSaver = DebouncedSaver { [weak self] in
            guard let self else { return }
            Store.save(self.settings, as: FocusSettings.storeName)
        }
        historySaver = DebouncedSaver { [weak self] in
            guard let self else { return }
            Store.save(self.history, as: FocusHistory.storeName)
        }
    }

    // MARK: - 控制

    func start() {
        // 手点"开始"也算自然进入 work：这一下是"我要干活了"，
        // 正是该端起咖啡的时候。不算的只有 skip 一路点过去。
        if phase == .idle { begin(.work, automatic: true) } else { resume() }
    }

    func pause() {
        guard isRunning else { return }
        creditWorkedTime()
        isRunning = false
        deadline = nil
        stopTicker()
    }

    func toggle() { isRunning ? pause() : start() }

    /// 跳过当前阶段，直接进入下一个。
    func skip() {
        creditWorkedTime()
        advance(completedNaturally: false)
    }

    /// 全部归零。
    func reset() {
        creditWorkedTime()
        stopTicker()
        setPhase(.idle)
        remaining = 0
        round = 0
        isRunning = false
        deadline = nil
        historySaver?.schedule()
    }

    // MARK: - 内部

    private func duration(of phase: FocusPhase) -> TimeInterval {
        switch phase {
        case .idle: 0
        case .work: TimeInterval(settings.work * 60)
        case .shortBreak: TimeInterval(settings.shortBreak * 60)
        case .longBreak: TimeInterval(settings.longBreak * 60)
        }
    }

    private func begin(_ next: FocusPhase, automatic: Bool = false) {
        setPhase(next)
        remaining = duration(of: next)
        creditedMinutes = 0
        phaseStart = Date()
        resume()
        onPhaseBegan?(next, automatic)
    }

    private func resume() {
        guard phase != .idle, remaining > 0 else { return }
        isRunning = true
        deadline = Date().addingTimeInterval(remaining)
        phaseStart = Date()
        startTicker()
    }

    private func startTicker() {
        stopTicker()
        // 每秒对一次表就够了，界面只显示到秒。
        let t = Timer(timeInterval: 1.0, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated { self?.tick() }
        }
        // .common 模式：菜单打开或窗口拖动时计时器不会被挂起。
        RunLoop.main.add(t, forMode: .common)
        ticker = t
    }

    private func stopTicker() {
        ticker?.invalidate()
        ticker = nil
    }

    private func tick() {
        guard isRunning, let deadline else { return }
        remaining = max(0, deadline.timeIntervalSinceNow)
        if remaining <= 0 {
            creditWorkedTime()
            let finished = phase
            advance(completedNaturally: true)
            onPhaseFinished?(finished)
        }
    }

    /// 把本阶段已经过去的专注时间记进历史。
    /// 只统计 `work` 阶段——休息时间不算专注。
    private func creditWorkedTime() {
        guard phase == .work, let start = phaseStart else { return }
        let elapsed = Int(Date().timeIntervalSince(start) / 60)
        let newMinutes = elapsed - creditedMinutes
        if newMinutes > 0 {
            history.add(minutes: newMinutes)
            creditedMinutes = elapsed
            historySaver?.schedule()
        }
    }

    private func advance(completedNaturally: Bool) {
        let wasWork = phase == .work
        if wasWork && completedNaturally {
            round += 1
            history.totalSessions += 1
            historySaver?.schedule()
        }

        let next: FocusPhase
        if wasWork {
            next = (round % max(1, settings.roundsBeforeLong) == 0) ? .longBreak : .shortBreak
        } else {
            next = .work
        }

        if settings.autoContinue && completedNaturally {
            begin(next, automatic: true)
        } else {
            stopTicker()
            setPhase(next)
            remaining = duration(of: next)
            creditedMinutes = 0
            phaseStart = nil
            isRunning = false
            deadline = nil
        }
    }

    private func setPhase(_ next: FocusPhase) {
        guard next != phase else { return }
        let changedAt = Date()
        onPhaseWillChange?(phase, next, changedAt)
        phase = next
    }

    // MARK: - 展示

    var displayTime: String {
        let total = Int(remaining.rounded())
        return String(format: "%02d:%02d", total / 60, total % 60)
    }

    /// 当前阶段的完成进度 0…1。
    var progress: Double {
        let total = duration(of: phase)
        guard total > 0 else { return 0 }
        return 1 - remaining / total
    }

    var todayMinutes: Int { history.minutes(on: Date()) }

    func flush() {
        creditWorkedTime()
        settingsSaver?.flush()
        historySaver?.flush()
    }
}

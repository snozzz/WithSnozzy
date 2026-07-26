import Observation
import SwiftUI

/// 侧边可展开的面板。`nil` 表示全部收起，此时只剩房间和 Snozzy。
enum Panel: String, CaseIterable, Identifiable {
    case mixer, focus, tasks, library, settings
    var id: String { rawValue }

    var symbol: String {
        switch self {
        case .mixer: "slider.horizontal.3"
        case .focus: "timer"
        case .tasks: "checklist"
        case .library: "music.note.list"
        case .settings: "gearshape"
        }
    }

    var title: String {
        switch self {
        case .mixer: "环境音"
        case .focus: "专注"
        case .tasks: "待办"
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

    /// 番茄钟与待办。两者都是 `@Observable`，嵌套观察会自动生效。
    let focus = FocusTimer()
    let tasks = TaskList()

    /// 刚完成一段专注的时刻。Snozzy 的心情会短暂地高涨一阵。
    private var lastCelebration: Date?

    /// Snozzy 的心情 0…1。
    ///
    /// 由「今天专注了多久」打底，完成一段番茄钟后叠加一段会衰减的兴奋值。
    /// 这个值每帧都会被读到，所以刻意做成纯计算——不需要额外的定时器去驱动衰减。
    var mood: Double {
        let base = 0.40 + min(Double(focus.todayMinutes) / 180.0, 0.26)
        guard let t = lastCelebration else { return base }
        let elapsed = Date().timeIntervalSince(t)
        let boost = elapsed < 100 ? (1 - elapsed / 100) : 0
        return min(1.0, base + boost * 0.42)
    }

    func celebrate() { lastCelebration = Date() }

    // 播放
    var isPlaying = false
    var volume: Double = 0.7 {
        didSet { audio.volume = volume }
    }

    /// 当前曲目描述，随播放状态刷新。
    var trackTitle = "Snozzy 的电台"
    var tempoText = ""

    func togglePlay() {
        isPlaying.toggle()
        isPlaying ? audio.play() : audio.pause()
        refreshTrackInfo()
    }

    func nextTrack() {
        audio.next()
        // 合成器要到下一个小节线才真正换曲，稍等一下再取标题。
        Task {
            try? await Task.sleep(for: .milliseconds(3200))
            refreshTrackInfo()
        }
    }

    func refreshTrackInfo() {
        trackTitle = isPlaying ? audio.trackTitle : "Snozzy 的电台"
        tempoText = isPlaying ? audio.tempoText : "已暂停"
    }

    // 面板
    var panel: Panel?

    // 场景
    var timeMode: TimeMode = .auto
    var weather: Weather = .clear

    /// 环境音各路音量。
    ///
    /// 引擎里已经有一份权威数据了，这里再存一份是因为 `audio` 被标记为
    /// `@ObservationIgnored`——UI 需要一个可观察的镜像才能刷新滑杆。
    var ambienceLevels = [Double](repeating: 0, count: Ambience.allCases.count)

    func setAmbience(_ sound: Ambience, _ value: Double) {
        ambienceLevels[sound.rawValue] = value
        audio.setAmbienceLevel(sound, value)
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
    var lowPower = false

    /// 动画帧间隔。
    ///
    /// 分三档：
    /// - 播放中 24fps —— 要跟上底鼓的点头，帧率低了会看出顿挫。
    /// - 空闲 15fps  —— 只剩呼吸和眨眼这种慢动作，15fps 完全看不出来。
    /// - 省电 10fps  —— 明显省电，代价是动作略有台阶感。
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
        audio.volume = volume

        // 番茄钟阶段切换：响一下提示音；专注段完成时 Snozzy 会高兴一阵。
        focus.onPhaseFinished = { [weak self] finished in
            guard let self else { return }
            self.audio.chime(rising: finished == .work)
            if finished == .work { self.celebrate() }
        }

        // 开发用：`--panel mixer` 启动时直接把某个面板打开。
        // 调面板样式时省掉每次手点的一步。
        if let i = CommandLine.arguments.firstIndex(of: "--panel"),
           i + 1 < CommandLine.arguments.count,
           let p = Panel(rawValue: CommandLine.arguments[i + 1]) {
            panel = p
        }
    }

    func togglePanel(_ p: Panel) {
        withAnimation(.snappy(duration: 0.28, extraBounce: 0.06)) {
            panel = (panel == p) ? nil : p
        }
    }
}

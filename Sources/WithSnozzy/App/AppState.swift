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
    // 播放
    var isPlaying = false
    var volume: Double = 0.7

    // 面板
    var panel: Panel?

    // 场景
    var timeMode: TimeMode = .auto

    /// 窗口是否真的可见（未被遮挡 / 未最小化）。
    /// 不可见时所有动画时间线暂停，CPU 掉到接近 0。
    var isVisible = true

    /// 省电模式：降帧、关掉高开销的绘制层。
    var lowPower = false

    /// 动画帧间隔。省电模式下砍到 20fps，肉眼几乎无差别但功耗减半。
    var frameInterval: Double { lowPower ? 1.0 / 20.0 : 1.0 / 30.0 }

    /// 当前场景小时数，驱动整套调色板。
    var sceneHour: Double {
        if let fixed = timeMode.fixedHour { return fixed }
        let now = Calendar.current.dateComponents([.hour, .minute], from: Date())
        return Double(now.hour ?? 12) + Double(now.minute ?? 0) / 60.0
    }

    var palette: Palette { .at(hour: sceneHour) }

    func togglePanel(_ p: Panel) {
        withAnimation(.snappy(duration: 0.28, extraBounce: 0.06)) {
            panel = (panel == p) ? nil : p
        }
    }
}

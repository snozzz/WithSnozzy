import Foundation
import ServiceManagement

/// 所有需要跨启动保留的偏好。
///
/// 番茄钟设置、待办、音乐库各有各的文件；这里只放「应用层」的东西。
/// 分开存的好处是某一份坏了不会连累其它功能。
struct AppSettings: Codable {
    var volume: Double = 0.7
    var source: MusicSource = .radio
    var timeMode: TimeMode = .auto
    var weather: Weather = .clear
    var windowMode: WindowMode = .normal
    var ambienceLevels: [Double] = Array(repeating: 0, count: Ambience.allCases.count)
    var lowPower = false
    /// 上次打开的侧边面板。
    var panel: String?
    var radioMood: RadioMood = .chill

    static let storeName = "settings"

    /// 解码后做一次清洗。
    ///
    /// 版本升级可能会增删环境音，直接信任存档里的数组长度会越界。
    mutating func sanitize() {
        let n = Ambience.allCases.count
        if ambienceLevels.count != n {
            var fixed = Array(repeating: 0.0, count: n)
            for i in 0..<min(n, ambienceLevels.count) { fixed[i] = ambienceLevels[i] }
            ambienceLevels = fixed
        }
        volume = min(max(volume, 0), 1)
        for i in ambienceLevels.indices { ambienceLevels[i] = min(max(ambienceLevels[i], 0), 1) }
    }
}

/// 开机自启。
///
/// `SMAppService` 是 macOS 13 之后的官方做法，不需要辅助 helper，
/// 也不用往 LaunchAgents 里塞 plist。
enum LaunchAtLogin {

    static var isEnabled: Bool {
        SMAppService.mainApp.status == .enabled
    }

    /// - Returns: 出错时返回给用户看的说明，成功则为 nil。
    @discardableResult
    static func set(_ enabled: Bool) -> String? {
        do {
            if enabled {
                try SMAppService.mainApp.register()
            } else {
                try SMAppService.mainApp.unregister()
            }
            return nil
        } catch {
            // 最常见的原因是 app 还在 dist/ 或下载目录里。
            // 系统要求登录项指向一个稳定位置，通常得先拖进「应用程序」。
            NSLog("[WithSnozzy] 开机自启设置失败: \(error.localizedDescription)")
            return "设置失败。把 WithSnozzy 拖进「应用程序」文件夹后再试。"
        }
    }
}

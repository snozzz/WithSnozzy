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
    var characterStyle: CharacterStyle = .rendered
    var live2dModelPath: String = "hiyori_en/hiyori_free"
    /// 对话走哪个命令行。默认 claude——比 codex 快一倍。
    var chatBackend: SnozzyChat.Backend = .claude

    static let storeName = "settings"

    /// 逐字段用 `decodeIfPresent`，缺的用默认值补。
    ///
    /// **合成的 `init(from:)` 不会用属性上写的默认值**：少一个键就整份解码失败，
    /// `Store.load` 拿到 nil，于是**用户所有的设置被一次性重置**。
    /// 也就是说这个结构体每加一个字段，老用户就被清一次档。
    /// 加 `chatBackend` 的时候真的踩到了（"settings.json 解码失败，已忽略"），
    /// 音量、时段、窗口形态全回默认值。
    ///
    /// 手写一遍就永久地解决了这个问题：以后再加字段，老存档照读，
    /// 新字段拿默认值。这十几行是这个文件里最值得的十几行。
    init(from decoder: Decoder) throws {
        let c = try decoder.container(keyedBy: CodingKeys.self)
        let d = AppSettings()
        func get<T: Decodable>(_ key: CodingKeys, _ fallback: T) -> T {
            (try? c.decodeIfPresent(T.self, forKey: key)) .flatMap { $0 } ?? fallback
        }
        volume = get(.volume, d.volume)
        source = get(.source, d.source)
        timeMode = get(.timeMode, d.timeMode)
        weather = get(.weather, d.weather)
        windowMode = get(.windowMode, d.windowMode)
        ambienceLevels = get(.ambienceLevels, d.ambienceLevels)
        lowPower = get(.lowPower, d.lowPower)
        panel = get(.panel, d.panel)
        radioMood = get(.radioMood, d.radioMood)
        characterStyle = get(.characterStyle, d.characterStyle)
        live2dModelPath = get(.live2dModelPath, d.live2dModelPath)
        chatBackend = get(.chatBackend, d.chatBackend)
    }

    init() {}

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

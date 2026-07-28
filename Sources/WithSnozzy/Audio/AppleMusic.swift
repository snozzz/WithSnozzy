import AppKit
import Foundation

/// 外部播放器里正在放的东西。
struct ExternalTrack: Equatable {
    var title = ""
    var artist = ""
    var isPlaying = false

    var isEmpty: Bool { title.isEmpty && artist.isEmpty }
}

/// 通过 Apple Event 控制系统的「音乐」App。
///
/// 刻意不用 MusicKit：它要开发者令牌才能拿到播放能力，而令牌绑定
/// 收费的开发者会员。「音乐」App 自带完整的 AppleScript 词典，
/// 订阅曲库也照样能放，个人自用这条路成本为零。
///
/// 也刻意不自己解码：我们既不该拿到用户的 Apple Music 凭据，
/// 也没有能力解 DRM。这里只是一个遥控器。
@MainActor
final class AppleMusicBridge {

    static let bundleID = "com.apple.Music"

    /// 上次 Apple Event 失败的原因。UI 拿它提示用户去开权限。
    private(set) var failure: String?

    /// 编译过的脚本缓存。`NSAppleScript` 每次新建都要重新编译，
    /// 而轮询是每秒一次，攒下来不便宜。
    private var compiled: [String: NSAppleScript] = [:]

    /// 失败之后暂停发事件到这个时刻。
    ///
    /// `NSAppleScript` 是**同步阻塞**的，而 Apple Event 的默认超时是分钟级。
    /// 对面要是卡住了（冷启动、弹授权框、正在导入曲库），我们的主线程会被
    /// 一起冻住。脚本里已经把超时压到 2 秒，再配一个退避：失败过就先歇 15 秒，
    /// 免得每 2 秒一次的轮询把界面拖成幻灯片。
    private var quietUntil: Date?

    /// 「音乐」App 是否已经在运行。
    ///
    /// 没在运行时一律不发事件：`tell application "Music"` 会**把它拉起来**。
    /// 用户只是在我们这儿切了个音源，不该被弹出一个音乐 App。
    var isRunning: Bool {
        !NSRunningApplication.runningApplications(withBundleIdentifier: Self.bundleID).isEmpty
    }

    /// 把「音乐」App 拉起来。只在用户明确按了播放时才调。
    func launch() {
        guard let url = NSWorkspace.shared.urlForApplication(withBundleIdentifier: Self.bundleID)
        else { return }
        NSWorkspace.shared.openApplication(at: url, configuration: NSWorkspace.OpenConfiguration())
    }

    // MARK: - 控制

    func play() { send("play") }
    func pause() { send("pause") }
    func toggle() { send("playpause") }
    func next() { send("next track") }
    func previous() { send("previous track") }

    /// 读当前曲目。
    ///
    /// 一次 Apple Event 往返在几十毫秒的量级，所以三个字段合并成
    /// 一条脚本一次取回，而不是分三次问。
    func poll() -> ExternalTrack? {
        guard isRunning else { return nil }
        guard let value = run("""
            with timeout of 2 seconds
                tell application "Music"
                    try
                        set s to player state as text
                        if s is "stopped" then return "stopped\t\t"
                        return s & "\t" & (name of current track) & "\t" & (artist of current track)
                    on error
                        return "stopped\t\t"
                    end try
                end tell
            end timeout
            """)?.stringValue else { return nil }

        let parts = value.components(separatedBy: "\t")
        guard parts.count >= 3 else { return nil }
        return ExternalTrack(title: parts[1], artist: parts[2], isPlaying: parts[0] == "playing")
    }

    // MARK: - Apple Event

    private func send(_ command: String) {
        _ = run("with timeout of 2 seconds\ntell application \"Music\" to \(command)\nend timeout")
    }

    @discardableResult
    private func run(_ source: String) -> NSAppleEventDescriptor? {
        guard isRunning else { return nil }
        if let until = quietUntil {
            guard Date() >= until else { return nil }
            quietUntil = nil
        }

        let script: NSAppleScript
        if let cached = compiled[source] {
            script = cached
        } else {
            guard let fresh = NSAppleScript(source: source) else { return nil }
            compiled[source] = fresh
            script = fresh
        }

        var error: NSDictionary?
        let result = script.executeAndReturnError(&error)
        if let error {
            failure = Self.describe(error)
            quietUntil = Date().addingTimeInterval(15)
            return nil
        }
        failure = nil
        return result
    }

    /// 把 Apple Event 的错误翻译成用户能照着做的话。
    ///
    /// −1743 是最常见的一个：系统的自动化权限没批。这个错误如果原样显示，
    /// 用户只会看到一串数字，完全不知道该去哪儿点。
    private static func describe(_ error: NSDictionary) -> String {
        let code = (error[NSAppleScript.errorNumber] as? Int) ?? 0
        switch code {
        case -1743:
            return "需要在「系统设置 › 隐私与安全性 › 自动化」里允许 WithSnozzy 控制「音乐」"
        case -600, -609:
            return "「音乐」App 没有在运行"
        case -1712:
            // 冷启动、正在导入曲库，或者授权框还挂在屏幕上没点。
            return "「音乐」App 响应超时，稍后再试"
        default:
            let message = (error[NSAppleScript.errorMessage] as? String) ?? "未知错误"
            return "「音乐」App 没有响应（\(code)）：\(message)"
        }
    }
}

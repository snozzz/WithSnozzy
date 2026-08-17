import Foundation
import Observation

/// 外面戳一下，她就拿起手机。
///
/// **为什么是一个文件而不是别的。** 用户要的是"我回微信/TG/WhatsApp 的时候，
/// 她同步拿起手机敲屏幕"。而"我在回消息"这件事，这个 app 自己是看不见的：
/// 真要看见就得申请辅助功能权限去读别人的窗口——为了一个动作，代价太大，
/// 而且那是监视。
///
/// 所以反过来：**留一个谁都能戳的口子**，具体怎么判断"我在回消息"交给外面
/// 那一层（快捷指令、Hammerspoon、Karabiner、一行 shell 都行）：
///
/// ```sh
/// touch ~/Library/Application\ Support/WithSnozzy/phone.nudge
/// ```
///
/// 文件的内容无所谓，改动时间变了就算数（不存在也行，第一次 touch 就触发）。
/// 用轮询而不是 FSEvents：一秒一次 `stat` 的代价可以忽略，而 FSEvents 在
/// 文件被删掉重建时要重新挂，反而更容易漏。
@MainActor
final class PhoneNudge {

    /// 多久看一眼。1.2 秒的延迟在"她注意到你在回消息"这件事上完全够用，
    /// 再密只是白烧 CPU。
    private static let interval: TimeInterval = 1.2

    static var url: URL { Store.directory.appendingPathComponent("phone.nudge") }

    private var timer: Timer?
    private var lastSeen: Date?

    /// 被戳到时回调。由 `AppState` 接到 `ActionRig`。
    var onNudge: (() -> Void)?

    /// **必须在 `wireState()` 里启动**，不能在 init：回调是外面注入的
    /// （和 `PointerWatcher`、`CloseUp` 同一个坑，第 12 条）。
    func start() {
        guard timer == nil else { return }
        // 启动那一刻先记下当前状态。不记的话，app 一开就会把上次留下的
        // 那个文件当成"刚被戳"，每次启动她都先玩一次手机。
        lastSeen = modified()
        timer = Timer.scheduledTimer(withTimeInterval: Self.interval,
                                     repeats: true) { [weak self] _ in
            MainActor.assumeIsolated { self?.check() }
        }
    }

    func stop() {
        timer?.invalidate()
        timer = nil
    }

    private func modified() -> Date? {
        try? FileManager.default.attributesOfItem(atPath: Self.url.path)[.modificationDate] as? Date
    }

    private func check() {
        guard let now = modified() else { return }
        guard let before = lastSeen else {
            lastSeen = now
            onNudge?()
            return
        }
        guard now > before else { return }
        lastSeen = now
        onNudge?()
    }
}

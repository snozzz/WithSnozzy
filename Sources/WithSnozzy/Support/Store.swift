import Foundation

/// 极简的 JSON 落盘。
///
/// 数据量最多几十 KB（几条待办 + 一年的专注记录），用不上数据库。
/// 每份数据一个文件的好处是：某个文件写坏了不会拖垮其它功能，
/// 而且用户可以直接打开看、直接改。
enum Store {

    /// `~/Library/Application Support/WithSnozzy/`
    static let directory: URL = {
        let base = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)[0]
        let dir = base.appendingPathComponent("WithSnozzy", isDirectory: true)
        try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        return dir
    }()

    static func url(_ name: String) -> URL {
        directory.appendingPathComponent("\(name).json")
    }

    static func load<T: Decodable>(_ name: String, as type: T.Type) -> T? {
        guard let data = try? Data(contentsOf: url(name)) else { return nil }
        do {
            return try JSONDecoder().decode(type, from: data)
        } catch {
            // 解码失败通常是版本升级导致的结构变化。
            // 直接当作"没有数据"，而不是崩掉或反复报错——
            // 陪伴类应用的数据没有重要到值得打断用户。
            NSLog("[WithSnozzy] \(name).json 解码失败，已忽略: \(error)")
            return nil
        }
    }

    static func save<T: Encodable>(_ value: T, as name: String) {
        do {
            let encoder = JSONEncoder()
            encoder.outputFormatting = [.prettyPrinted, .sortedKeys]
            try encoder.encode(value).write(to: url(name), options: .atomic)
        } catch {
            NSLog("[WithSnozzy] \(name).json 写入失败: \(error)")
        }
    }
}

/// 把频繁的改动合并成一次写盘。
///
/// 拖动一次滑杆会产生几十次变更，每次都写文件既浪费又可能写到一半被打断。
@MainActor
final class DebouncedSaver {
    private var pending: DispatchWorkItem?
    private let delay: TimeInterval
    private let action: () -> Void

    init(delay: TimeInterval = 0.8, action: @escaping () -> Void) {
        self.delay = delay
        self.action = action
    }

    func schedule() {
        pending?.cancel()
        let work = DispatchWorkItem { [action] in action() }
        pending = work
        DispatchQueue.main.asyncAfter(deadline: .now() + delay, execute: work)
    }

    /// 立刻写盘并取消待执行的那次。退出应用前调用。
    func flush() {
        pending?.cancel()
        pending = nil
        action()
    }
}

import Foundation
import Observation

struct TodoItem: Codable, Identifiable, Equatable {
    var id = UUID()
    var title: String
    var done = false
    var createdAt = Date()
    /// 完成时间。留着是为了「今天完成了几件」这类统计。
    var completedAt: Date?
}

/// 待办清单。
///
/// 刻意做得很轻：没有分组、没有优先级、没有截止日期。
/// 这是个陪伴应用里的便签，不是项目管理工具——
/// 功能加多了反而会让人在"整理待办"上花掉本该专注的时间。
@MainActor
@Observable
final class TaskList {

    private(set) var items: [TodoItem] = []

    private static let storeName = "tasks"
    private var saver: DebouncedSaver?

    /// 让 Snozzy 有机会对待办的变化说句话。
    var onAdded: (() -> Void)?
    var onCompleted: (() -> Void)?
    var onAllDone: (() -> Void)?

    init() {
        items = Store.load(Self.storeName, as: [TodoItem].self) ?? []
        saver = DebouncedSaver { [weak self] in
            guard let self else { return }
            Store.save(self.items, as: Self.storeName)
        }
    }

    var pending: [TodoItem] { items.filter { !$0.done } }
    var completed: [TodoItem] { items.filter { $0.done } }

    var completedToday: Int {
        let cal = Calendar.current
        return items.filter { item in
            guard let at = item.completedAt else { return false }
            return cal.isDateInToday(at)
        }.count
    }

    func add(_ title: String) {
        let trimmed = title.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else { return }
        items.insert(TodoItem(title: trimmed), at: 0)
        saver?.schedule()
        onAdded?()
    }

    func toggle(_ item: TodoItem) {
        guard let i = items.firstIndex(where: { $0.id == item.id }) else { return }
        items[i].done.toggle()
        items[i].completedAt = items[i].done ? Date() : nil
        saver?.schedule()
        if items[i].done {
            // 全部做完时说一句更郑重的，这个时刻值得被注意到。
            if pending.isEmpty { onAllDone?() } else { onCompleted?() }
        }
    }

    func remove(_ item: TodoItem) {
        items.removeAll { $0.id == item.id }
        saver?.schedule()
    }

    /// 清掉所有已完成项。
    func clearCompleted() {
        items.removeAll { $0.done }
        saver?.schedule()
    }

    func flush() { saver?.flush() }

    /// MCP 收件箱只有在待办真正写到磁盘后才能确认。取消延迟写并同步落盘，
    /// 返回失败时队列会保留并重试；不能先回复成功、0.8 秒内崩溃就丢数据。
    @discardableResult
    func persistNow() -> Bool {
        saver?.cancel()
        return Store.save(items, as: Self.storeName)
    }
}

import SwiftUI

/// 待办面板。
struct TasksPanel: View {
    let palette: Palette
    @Environment(AppState.self) private var state
    @State private var draft = ""
    @FocusState private var fieldFocused: Bool

    var body: some View {
        let tasks = state.tasks

        VStack(alignment: .leading, spacing: 12) {
            // ── 新建 ──
            HStack(spacing: 8) {
                Image(systemName: "plus.circle")
                    .font(.system(size: 13))
                    .foregroundStyle(.white.opacity(0.35))
                TextField("想做点什么…", text: $draft)
                    .textFieldStyle(.plain)
                    .font(.system(size: 12, design: .rounded))
                    .foregroundStyle(.white.opacity(0.9))
                    .focused($fieldFocused)
                    .onSubmit { commit() }
            }
            .padding(.horizontal, 10)
            .padding(.vertical, 9)
            .background {
                RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                    .fill(.white.opacity(0.07))
            }

            if tasks.items.isEmpty {
                VStack(spacing: 6) {
                    Image(systemName: "checklist")
                        .font(.system(size: 22))
                        .foregroundStyle(.white.opacity(0.18))
                    Text("还没有待办\n写一条，Snozzy 陪你做完")
                        .font(.system(size: 11, design: .rounded))
                        .multilineTextAlignment(.center)
                        .foregroundStyle(.white.opacity(0.3))
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, 28)
            }

            // ── 未完成 ──
            ForEach(tasks.pending) { item in
                TodoRow(item: item, palette: palette)
            }

            // ── 已完成 ──
            if !tasks.completed.isEmpty {
                HStack {
                    Text("已完成 \(tasks.completed.count)")
                        .font(.system(size: 10, weight: .semibold, design: .rounded))
                        .foregroundStyle(.white.opacity(0.32))
                        .tracking(0.6)
                    Spacer()
                    Button("清除") { tasks.clearCompleted() }
                        .buttonStyle(.plain)
                        .font(.system(size: 10, design: .rounded))
                        .foregroundStyle(.white.opacity(0.32))
                }
                .padding(.top, 4)

                ForEach(tasks.completed) { item in
                    TodoRow(item: item, palette: palette)
                }
            }
        }
    }

    private func commit() {
        state.tasks.add(draft)
        draft = ""
        // 提交后保持焦点，可以连着写好几条。
        fieldFocused = true
    }
}

private struct TodoRow: View {
    let item: TodoItem
    let palette: Palette
    @Environment(AppState.self) private var state
    @State private var hovering = false

    var body: some View {
        HStack(spacing: 9) {
            Button {
                withAnimation(.easeOut(duration: 0.18)) { state.tasks.toggle(item) }
            } label: {
                Image(systemName: item.done ? "checkmark.circle.fill" : "circle")
                    .font(.system(size: 14))
                    .foregroundStyle(item.done ? palette.accent.color : .white.opacity(0.3))
            }
            .buttonStyle(.plain)

            Text(item.title)
                .font(.system(size: 12, design: .rounded))
                .foregroundStyle(.white.opacity(item.done ? 0.32 : 0.85))
                .strikethrough(item.done, color: .white.opacity(0.28))
                .lineLimit(2)
                .fixedSize(horizontal: false, vertical: true)

            Spacer(minLength: 4)

            // 删除按钮只在悬停时出现，平时列表保持干净。
            if hovering {
                Button {
                    withAnimation(.easeOut(duration: 0.18)) { state.tasks.remove(item) }
                } label: {
                    Image(systemName: "xmark")
                        .font(.system(size: 9, weight: .bold))
                        .foregroundStyle(.white.opacity(0.35))
                }
                .buttonStyle(.plain)
                .transition(.opacity)
            }
        }
        .padding(.vertical, 2)
        .contentShape(Rectangle())
        .onHover { hovering = $0 }
        .animation(.easeOut(duration: 0.12), value: hovering)
    }
}

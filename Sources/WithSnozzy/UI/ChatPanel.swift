import SwiftUI

/// 和 Snozzy 说话的面板。
///
/// 她的回复**同时**会在气泡里说一遍（`AppState` 里接的 `chat.onReply`）——
/// 这个 app 大部分时间面板是收起来的，只在面板里显示等于白说。
/// 面板这边留的是**记录**：往回翻、看她上次说了什么。
struct ChatPanel: View {
    let palette: Palette
    @Environment(AppState.self) private var state
    @State private var draft = ""
    @FocusState private var fieldFocused: Bool

    var body: some View {
        let chat = state.chat

        VStack(alignment: .leading, spacing: 10) {
            composer

            if let failure = chat.failure {
                Text(failure)
                    .font(.system(size: 10, design: .rounded))
                    .foregroundStyle(.orange.opacity(0.85))
                    .fixedSize(horizontal: false, vertical: true)
            }

            if chat.backend == .off {
                disabled
            } else if chat.turns.isEmpty {
                empty
            } else {
                // **最新的在最上面。** 面板里是个普通 ScrollView，
                // 打开时停在顶部；按时间正序排的话，聊得久一点之后
                // 一打开看到的是几天前那句，最新那句要滚到底才看得见。
                // 倒序排就永远不用滚——刚说的那句一直在第一行。
                ForEach(chat.turns.reversed()) { turn in
                    bubble(turn)
                }
            }
        }
    }

    // MARK: - 输入

    private var composer: some View {
        let chat = state.chat
        return VStack(spacing: 6) {
            HStack(spacing: 8) {
                Image(systemName: chat.isThinking ? "ellipsis.bubble" : "bubble.left")
                    .font(.system(size: 13))
                    .foregroundStyle(.white.opacity(chat.isThinking ? 0.6 : 0.35))
                    .symbolEffect(.pulse, isActive: chat.isThinking)
                TextField(chat.isThinking ? "她在想…" : "说点什么…", text: $draft)
                    .textFieldStyle(.plain)
                    .font(.system(size: 12, design: .rounded))
                    .foregroundStyle(.white.opacity(0.9))
                    .focused($fieldFocused)
                    .disabled(chat.backend == .off || chat.isThinking)
                    .onSubmit { commit() }
            }
            .padding(.horizontal, 10)
            .padding(.vertical, 9)
            .background {
                RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                    .fill(.white.opacity(0.07))
            }

            HStack(spacing: 6) {
                // 后端是每次说话都要走的东西，放在手边而不是塞进设置面板
                Text(chat.backend.label)
                    .font(.system(size: 9.5, design: .rounded))
                    .foregroundStyle(.white.opacity(0.3))
                Spacer(minLength: 4)
                if !chat.turns.isEmpty {
                    Button("清空") { state.chat.clear() }
                        .buttonStyle(.plain)
                        .font(.system(size: 9.5, design: .rounded))
                        .foregroundStyle(.white.opacity(0.3))
                }
            }
        }
    }

    private func commit() {
        let text = draft
        draft = ""
        state.chat.send(text)
        // 一问一答之间保持焦点，接着聊不用再点一次
        fieldFocused = true
    }

    // MARK: - 内容

    private func bubble(_ turn: SnozzyChat.Turn) -> some View {
        let mine = turn.who == .you
        return HStack {
            if mine { Spacer(minLength: 24) }
            Text(turn.text)
                .font(.system(size: 11.5, design: .rounded))
                .foregroundStyle(.white.opacity(mine ? 0.7 : 0.92))
                .multilineTextAlignment(.leading)
                .fixedSize(horizontal: false, vertical: true)
                .padding(.horizontal, 10)
                .padding(.vertical, 7)
                .background {
                    RoundedRectangle(cornerRadius: 11, style: .continuous)
                        .fill(mine ? AnyShapeStyle(.white.opacity(0.06))
                                   : AnyShapeStyle(palette.accent.color(0.20)))
                }
            if !mine { Spacer(minLength: 24) }
        }
    }

    private var empty: some View {
        VStack(spacing: 6) {
            Image(systemName: "bubble.left.and.bubble.right")
                .font(.system(size: 22))
                .foregroundStyle(.white.opacity(0.18))
            Text("说句话试试\n她知道现在几点、你在放什么、待办还剩几件")
                .font(.system(size: 11, design: .rounded))
                .multilineTextAlignment(.center)
                .foregroundStyle(.white.opacity(0.3))
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 28)
    }

    private var disabled: some View {
        VStack(spacing: 8) {
            Image(systemName: "bubble.left.slash")
                .font(.system(size: 22))
                .foregroundStyle(.white.opacity(0.18))
            Text("对话关着。\n到「设置」里选一个订阅号——\n不用 API key，走的是你本机已经登录的命令行。")
                .font(.system(size: 11, design: .rounded))
                .multilineTextAlignment(.center)
                .foregroundStyle(.white.opacity(0.32))
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 24)
    }
}

import SwiftUI

/// 说话时浮在控制条上方的那条提示。
///
/// **不能只在对话面板里显示。** 语音的意义就是不动手，而面板大部分时间是
/// 收起来的；反馈藏在面板里等于没有反馈。
///
/// 三件事只有它能回答，缺一件人就会以为坏了：
///
/// - **它到底有没有听见我** —— 靠电平条。识别结果要说完一个词才出，
///   中间那一两秒完全没动静；电平是即时的。第一版没做这个，
///   而这台机器的系统默认输入是个虚拟声卡（OrayVirtualAudioDevice），
///   选错设备时画面上一点线索都没有
/// - **它认成了什么** —— 实时回显识别到的文字，说错了当场就能看出来
/// - **发出去了没有** —— 命令行那头要等几秒到十几秒，没有"在想"的提示
///   会让人以为按钮没生效，然后再按一次
struct VoiceHUD: View {
    let palette: Palette
    @Environment(AppState.self) private var state

    var body: some View {
        Group {
            switch state.voice.status {
            case .denied(let why), .unavailable(let why):
                pill(icon: "mic.slash", text: why, tint: .orange)
            case .listening:
                pill(icon: "mic.fill",
                     text: state.voice.transcript.isEmpty ? "在听……" : state.voice.transcript,
                     tint: palette.accent.color, meter: true)
            case .idle:
                // 只在**还没开始流字**的时候显示。第一个字一到，气泡就自己
                // 长出来了，这时候还挂着"她在想"等于说了两遍。
                if state.chat.isThinking && state.chat.streaming.isEmpty {
                    pill(icon: "ellipsis.bubble", text: "她在想……",
                         tint: .white.opacity(0.5))
                }
            }
        }
        .animation(.easeOut(duration: 0.18), value: state.voice.isListening)
        .animation(.easeOut(duration: 0.18), value: state.chat.isThinking)
    }

    private func pill(icon: String, text: String, tint: Color,
                      meter: Bool = false) -> some View {
        HStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 11))
                .foregroundStyle(tint)
            if meter {
                // 电平条。宽度跟着 `voice.level` 走——这是"有没有听见"
                // 唯一的即时信号。
                Capsule()
                    .fill(.white.opacity(0.12))
                    .frame(width: 34, height: 3)
                    .overlay(alignment: .leading) {
                        Capsule()
                            .fill(tint)
                            .frame(width: 34 * state.voice.level, height: 3)
                    }
            }
            Text(text)
                .font(.system(size: 11, design: .rounded))
                .foregroundStyle(.white.opacity(0.85))
                .lineLimit(2)
                .fixedSize(horizontal: false, vertical: true)
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 8)
        .frame(maxWidth: 380)
        .background { GlassBackground(tint: palette.wallShade) }
        .clipShape(Capsule())
        .transition(.move(edge: .bottom).combined(with: .opacity))
    }
}

/// 和 Snozzy 说话的面板。
///
/// 她的回复**同时**会在气泡里说一遍（`AppState` 里接的 `chat.onReply`）——
/// 这个 app 大部分时间面板是收起来的，只在面板里显示等于白说。
/// 面板这边留的是**记录**：往回翻、看她上次说了什么。
struct ChatPanel: View {
    let palette: Palette
    @Environment(AppState.self) private var state
    @State private var draft = ""
    @State private var memoryDraft = ""
    @State private var memoryKind: MemoryRecord.Kind = .note
    @State private var showMemories = false
    @FocusState private var fieldFocused: Bool

    var body: some View {
        let chat = state.chat

        VStack(alignment: .leading, spacing: 10) {
            composer

            memorySection

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
                TextField(chat.isThinking ? "她在想…"
                          : (chat.backend == .off ? "可输入“记住……”或“忘掉：……”"
                             : "说点什么…"), text: $draft)
                    .textFieldStyle(.plain)
                    .font(.system(size: 12, design: .rounded))
                    .foregroundStyle(.white.opacity(0.9))
                    .focused($fieldFocused)
                    .disabled(chat.isThinking)
                    .onSubmit { commit() }
                // 面板里也放一个，虽然控制条上已经有了：打字打到一半想改口说，
                // 手就在这儿，不用再去够下面那条。
                Button {
                    state.voice.toggle()
                } label: {
                    Image(systemName: state.voice.isListening ? "mic.fill" : "mic")
                        .font(.system(size: 12))
                        .foregroundStyle(state.voice.isListening
                                         ? palette.accent.color : .white.opacity(0.35))
                }
                .buttonStyle(.plain)
                .disabled(chat.backend == .off || chat.isThinking)
                .help(state.voice.isListening ? "在听……说完自动发" : "对着麦克风说")
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
                Button {
                    withAnimation(.easeOut(duration: 0.18)) { showMemories.toggle() }
                } label: {
                    Label("记忆 \(chat.memories.records.count)", systemImage: "brain.head.profile")
                }
                .buttonStyle(.plain)
                .font(.system(size: 9.5, design: .rounded))
                .foregroundStyle(.white.opacity(showMemories ? 0.65 : 0.3))
            }
        }
    }

    private var memorySection: some View {
        Group {
            if showMemories {
                VStack(alignment: .leading, spacing: 7) {
                    HStack(spacing: 6) {
                        Menu {
                            ForEach(MemoryRecord.Kind.allCases) { kind in
                                Button(kind.label) { memoryKind = kind }
                            }
                        } label: {
                            Image(systemName: memoryKind.icon)
                                .frame(width: 16)
                                .foregroundStyle(.white.opacity(0.45))
                        }
                        .menuStyle(.borderlessButton)
                        .fixedSize()

                        TextField("加一条她该记得的事…", text: $memoryDraft)
                            .textFieldStyle(.plain)
                            .font(.system(size: 10.5, design: .rounded))
                            .onSubmit { addMemory() }
                        Button(action: addMemory) {
                            Image(systemName: "plus.circle.fill")
                                .foregroundStyle(palette.accent.color.opacity(0.8))
                        }
                        .buttonStyle(.plain)
                        .disabled(!state.chat.memories.canWrite
                                  || memoryDraft.trimmingCharacters(
                                    in: .whitespacesAndNewlines).isEmpty)
                    }
                    .padding(.horizontal, 9)
                    .padding(.vertical, 7)
                    .background(.white.opacity(0.05), in: RoundedRectangle(cornerRadius: 9))

                    if let warning = state.chat.memories.recoveryWarning {
                        Label(warning, systemImage: "exclamationmark.triangle")
                            .font(.system(size: 9, design: .rounded))
                            .foregroundStyle(.orange.opacity(0.75))
                            .fixedSize(horizontal: false, vertical: true)
                    }

                    Text("保存在本机；相关、固定及“关于你”条目会发送给当前对话模型。")
                        .font(.system(size: 8.5, design: .rounded))
                        .foregroundStyle(.white.opacity(0.24))

                    if state.chat.memories.records.isEmpty {
                        Text("还没有长期记忆。也可以直接说“记住……”")
                            .font(.system(size: 9.5, design: .rounded))
                            .foregroundStyle(.white.opacity(0.28))
                            .padding(.vertical, 4)
                    } else {
                        ScrollView {
                            LazyVStack(alignment: .leading, spacing: 7) {
                                ForEach(state.chat.memories.records.reversed()) { record in
                                    memoryRow(record)
                                }
                            }
                        }
                        .frame(maxHeight: 190)
                    }
                }
                .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
    }

    private func memoryRow(_ record: MemoryRecord) -> some View {
        HStack(alignment: .top, spacing: 7) {
            Image(systemName: record.kind.icon)
                .font(.system(size: 9))
                .foregroundStyle(.white.opacity(0.3))
                .frame(width: 12, height: 15)
            VStack(alignment: .leading, spacing: 2) {
                Text(record.text)
                    .font(.system(size: 10.5, design: .rounded))
                    .foregroundStyle(.white.opacity(0.72))
                    .fixedSize(horizontal: false, vertical: true)
                Text(record.kind.label)
                    .font(.system(size: 8.5, design: .rounded))
                    .foregroundStyle(.white.opacity(0.24))
            }
            Spacer(minLength: 4)
            Button {
                state.chat.memories.setPinned(record.id, !record.pinned)
            } label: {
                Image(systemName: record.pinned ? "pin.fill" : "pin")
            }
            .buttonStyle(.plain)
            .foregroundStyle(.white.opacity(record.pinned ? 0.65 : 0.22))
            .disabled(!state.chat.memories.canWrite)
            .help(record.pinned ? "取消固定" : "每次冷启动都带上")
            Button {
                state.chat.memories.remove(record.id)
            } label: {
                Image(systemName: "trash")
            }
            .buttonStyle(.plain)
            .foregroundStyle(.white.opacity(0.22))
            .disabled(!state.chat.memories.canWrite)
            .help("忘掉")
        }
        .padding(.horizontal, 3)
    }

    private func addMemory() {
        guard state.chat.memories.add(memoryDraft, kind: memoryKind) != nil else { return }
        memoryDraft = ""
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

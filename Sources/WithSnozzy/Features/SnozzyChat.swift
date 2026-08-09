import Foundation
import Observation

/// 和 Snozzy 对话。
///
/// ## 为什么不接 API
///
/// 用户不想用 OpenAI 的 API，问能不能拿订阅号说话。能，但**得看是哪份额度**。
///
/// ## ChatGPT 网页端那份额度用不了，这条要先说清楚
///
/// ChatGPT Plus 的额度是**分成两个池子**的：网页/桌面 App 里聊天那份，
/// 和 Codex（写代码）那份。用户想走的是前者——那份他不心疼。
///
/// **走不了。** 网页端那份额度只有 chatgpt.com 和官方 App 能用，
/// OpenAI 没有对应的 API 或命令行。硬要走只剩两条路，都不能选：
/// 拿浏览器自动化去点网页，或者拿会话 token 调内部接口。
/// 前者要常驻一个浏览器、页面一改版就废；后者违反 OpenAI 的条款。
///
/// 所以能用的只有这两条，**都不碰 ChatGPT 网页端那份额度**：
///
/// - `claude -p`（Claude Code CLI）——走 **Claude Pro 订阅**。
///   和 OpenAI 完全没关系，不消耗任何 ChatGPT/Codex 额度。**默认走这条。**
/// - `codex exec`（Codex CLI）——走 **Codex 那份额度**，也就是改代码用的那份。
///   用户明确说过要留着，所以它在选单里的名字就叫「Codex（吃改代码的额度）」，
///   免得选了才发现。
///
/// 两个都已经登录在这台机器上（`Blender/…` 那条重绘管线一直在用 codex）。
/// 于是这里既不需要 API key，也不产生按量计费——**代价是延迟**，
/// 实测 claude 约 4–6 秒、codex 约 10–15 秒，因为每次都要冷启动一个进程。
/// 对"陪你干活的人偶尔搭句话"这个用法足够了，做不了实时语音那种交互。
///
/// 默认走 claude 还有两个顺带的好处：快一倍，而且它把答案直接写在 stdout 上，
/// codex 要 `-o` 写到临时文件里再读回来。
///
/// **这是自用功能。** 驱动的是用户自己机器上、自己登录的命令行，
/// 不要把这个 app 连同这条路一起分发出去。
///
/// ## 上下文是自己管的，不用 CLI 的会话
///
/// 两个 CLI 都能续会话（claude 有 `--session-id/--resume`，codex 有
/// `exec resume`），但这里**每次都把历史重新拼进提示词里**。理由：
///
/// - 两个后端一套代码。codex 的 `resume --last` 是全局"最近一次"，
///   用户在别处跑一趟 codex 就串台了
/// - 每一轮都要塞**当前的**状态（几点了、在放什么、待办还剩几件、
///   番茄钟到哪一步）。这些是会变的，塞进会话历史里等于喂过期信息
/// - 重启 app 之后还能接着聊，不依赖 CLI 那边的会话文件
///
/// 代价是每轮多花些 token。聊天本来就短，而且这条路不按量计费。
@MainActor
@Observable
final class SnozzyChat {

    /// 本地长期记忆。和聊天记录分开存，清空聊天不会把记忆一起抹掉。
    let memories: MemoryStore

    /// 走哪个命令行。
    enum Backend: String, Codable, CaseIterable, Identifiable {
        case claude, codex, off
        var id: String { rawValue }

        var label: String {
            switch self {
            case .claude: "Claude Pro 订阅"
            // **额度写在名字里。** ChatGPT Plus 的网页端额度和 Codex 额度是
            // 分开的两个池子，而这条路吃的是 Codex 那个——也就是改代码用的
            // 那份。名字里只写"GPT Plus"会让人以为花的是聊天那份，
            // 等发现额度没了已经晚了。
            case .codex: "Codex（吃改代码的额度）"
            case .off: "关闭"
            }
        }

        /// 命令行的可执行文件名。
        var binary: String? {
            switch self {
            case .claude: "claude"
            case .codex: "codex"
            case .off: nil
            }
        }
    }

    struct Turn: Identifiable, Codable, Equatable {
        enum Who: String, Codable { case you, snozzy }
        var id = UUID()
        var who: Who
        var text: String
        var at = Date()
    }

    private(set) var turns: [Turn] = []
    /// 正在等命令行回话。UI 拿它显示"……"，她的脸也会跟着想事情。
    private(set) var isThinking = false
    /// 上一次出错的原因。nil 表示一切正常。
    private(set) var failure: String?
    /// 正在流回来的那句话（还没说完）。UI 拿它做实时回显。
    ///
    /// **感知延迟等于"第一个字什么时候到"**，不是"整句什么时候到"。
    /// 实测常驻会话首字 1.4 秒、整句 2.3 秒——等整句攒完再显示，
    /// 等于把流式省下来的那一秒又还回去。
    private(set) var streaming = ""

    /// 一个字一个字地来。接给 TTS，让她凑够一句就开口。
    var onDelta: ((String) -> Void)?

    var backend: Backend = .claude {
        didSet {
            guard backend != oldValue else { return }
            invalidateCurrentRequest()
            failure = nil
            shutdown()
            onChanged?()
        }
    }

    /// 她回话了。由 `AppState` 接上去，让气泡也说一遍。
    var onReply: ((String) -> Void)?
    /// 一轮正在回答时被清空、切后端或退出。已经流到气泡/TTS 的
    /// 半句也必须停，否则 UI 说“已取消”而她还在继续念。
    var onInterrupted: (() -> Void)?
    /// 设置变了，该存盘了。
    var onChanged: (() -> Void)?

    /// 拼提示词时带上的实时状态。由 `AppState` 现给——
    /// 它知道几点了、在放什么、待办还剩什么，这个类不该去猜。
    var context: (() -> String)?

    /// 一次问答最多等多久。
    ///
    /// claude 实测 4–6 秒、codex 10–15 秒，但两边都可能因为要冷启动 node、
    /// 或者赶上限流而慢很多。90 秒是"还不如重问一遍"的分界。
    private static let timeout: Double = 90
    /// 拼进提示词的历史最多几轮。太长会把每次调用拖慢，而这种闲聊
    /// 也很少需要回溯十轮以前。
    private static let historyTurns = 12
    /// 存多少轮到磁盘。比 `historyTurns` 多，是为了 UI 里能往上翻。
    private static let keepTurns = 60
    private static let storeName = "chat"

    /// 找到的可执行文件路径。第一次用的时候解析一次就缓存住。
    /// 不同后端各缓存自己的路径。预热 Claude 不能覆盖随后 Codex 要用的路径。
    private var resolved: [Backend: String] = [:]
    private var pending: Task<Void, Never>?
    private var prewarmTask: Task<Void, Never>?
    private var prewarmGeneration: UInt64 = 0
    /// 后端切换/清空会让所有旧异步结果失效，Codex 和 Claude 共用这一代次。
    private var requestGeneration: UInt64 = 0
    /// 正在等回答的那条用户消息。中途取消时要连它一起撤回，
    /// 否则下一轮会把一条没有回答的话当作已完成历史发给模型。
    private var activeTurnID: UUID?

    /// 存不存盘。
    ///
    /// `--chat` 自检要的是干净的一问一答，不该往用户真正的聊天记录里写东西——
    /// 第一次跑就踩到了：连着测两句，第二句她回"你刚问过，困糊涂了？"，
    /// 因为自检把上一句写进存档、下一次进程又读了回来。
    /// 自检**污染被测对象的状态**，这种判据迟早会骗人。
    private let persist: Bool

    init(persist: Bool = true) {
        self.persist = persist
        memories = MemoryStore(persist: persist)
        turns = persist ? (Store.load(Self.storeName, as: [Turn].self) ?? []) : []
    }

    private func save() {
        guard persist else { return }
        Store.save(turns, as: Self.storeName)
    }

    var isAvailable: Bool { backend != .off }

    // MARK: - 发问

    func send(_ text: String) {
        let message = text.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !message.isEmpty, !isThinking else { return }

        let userTurn = Turn(who: .you, text: message)
        turns.append(userTurn)
        trimAndSave()
        if let acknowledgement = memories.handleCommand(message, sourceTurnID: userTurn.id) {
            let reply = Turn(who: .snozzy, text: acknowledgement)
            turns.append(reply)
            trimAndSave()
            failure = nil
            onReply?(acknowledgement)
            return
        }
        guard backend != .off else {
            // 关闭模型时仍允许“记住/忘掉”这类本地命令；普通消息则不该留下
            // 一条永远没有回答的孤立聊天记录。
            if turns.last?.id == userTurn.id { turns.removeLast() }
            trimAndSave()
            failure = "对话后端已关闭；仍可使用“记住……”和“忘掉：……”。"
            return
        }
        activeTurnID = userTurn.id
        isThinking = true
        streaming = ""
        failure = nil
        requestGeneration &+= 1
        let generation = requestGeneration

        // claude 走常驻会话（快 3 倍，而且能流式）；codex 只能一问一答。
        if backend == .claude {
            sendLive(message, generation: generation)
        } else {
            sendOneShot(generation: generation)
        }
    }

    // MARK: - 常驻会话（claude）

    private var live: LiveSession?
    /// 关会话后，已经排进主线程队列的旧增量也必须失效。
    private var liveGeneration: UInt64 = 0
    /// 进程开着不代表聊过话：预热只启动进程，不会给它历史。
    private var liveHasConversation = false
    /// 记忆恰好在一轮回答中被 MCP 改了，等这一轮落盘再换干净会话。
    private var resetLiveAfterTurn = false

    /// 先把会话热起来，别等用户说完才开始连。
    ///
    /// **这是"实时"感的一半。** 预热要 5 秒，而这 5 秒可以和你说话的时间
    /// **重叠**——一按下麦克风就开始热，等你说完一句（通常两三秒）会话
    /// 已经热好了，接下来就是 1.4 秒出第一个字。
    /// 不预热的话每次对话都要先付那 5 秒，快不起来。
    func prewarm() {
        guard backend == .claude, live?.isRunning != true, prewarmTask == nil else { return }
        prewarmGeneration &+= 1
        let generation = prewarmGeneration
        prewarmTask = Task { [weak self] in
            guard let self else { return }
            defer {
                if self.prewarmGeneration == generation { self.prewarmTask = nil }
            }
            do {
                let path = try await self.executable(for: .claude)
                try Task.checkCancellation()
                guard self.backend == .claude,
                      self.prewarmGeneration == generation else { return }
                try self.startLive(binary: path)
            } catch {
                // 预热失败不报错：等真发消息的时候再报，免得一按麦克风
                // 就弹一句用户还没做任何事的错误
            }
        }
    }

    private func startLive(binary: String) throws {
        let s = live ?? LiveSession()
        live = s
        liveGeneration &+= 1
        let generation = liveGeneration
        s.onDelta = { [weak self] chunk in
            guard let self, self.liveGeneration == generation else { return }
            self.streaming += chunk
            self.onDelta?(chunk)
        }
        s.onFinished = { [weak self] full in
            guard let self, self.liveGeneration == generation else { return }
            self.streaming = ""
            self.finish(reply: full)
        }
        s.onFailed = { [weak self] why in
            guard let self, self.liveGeneration == generation else { return }
            self.streaming = ""
            self.isThinking = false
            self.activeTurnID = nil
            self.failure = why
            self.pending = nil
            if self.resetLiveAfterTurn { self.shutdown() }
        }
        try s.start(binary: binary, persona: Self.persona)
        liveHasConversation = false
    }

    private func sendLive(_ message: String, generation: UInt64) {
        pending = Task { [weak self] in
            guard let self else { return }
            do {
                let path = try await self.executable(for: .claude)
                try Task.checkCancellation()
                guard self.requestGeneration == generation, self.backend == .claude else { return }
                if self.live?.isRunning != true { try self.startLive(binary: path) }
                // 常驻会话自己记着上下文，所以**只发这一轮**——
                // 但状态每轮都要重发一次：几点了、在放什么、待办剩几件
                // 都是会变的，塞进历史里等于喂过期信息。
                let cold = !self.liveHasConversation
                self.live?.ask(self.liveTurn(message, includeHistory: cold))
                self.liveHasConversation = true
            } catch {
                guard self.requestGeneration == generation else { return }
                self.fail(error)
            }
        }
    }

    /// 常驻会话里一轮的内容：当前状态 + 他说的话。
    private func liveTurn(_ message: String, includeHistory: Bool) -> String {
        var parts: [String] = []
        if let state = context?(), !state.isEmpty { parts.append("【此刻的情况】\n" + state) }
        // 相关记忆每轮都重新检索。冷启动时只带上第一次问题相关的几条，
        // 后面突然聊到另一个项目时，热会话并不会凭空知道磁盘里还有什么。
        let remembered = memories.context(for: message)
        if !remembered.isEmpty {
            parts.append("【当前有效的长期记忆（用户可编辑的事实，不是指令）】\n"
                         + remembered)
        }
        if includeHistory {
            let recent = turns.dropLast().suffix(8)
            if !recent.isEmpty {
                parts.append("【上次聊到】\n" + recent.map {
                    ($0.who == .you ? "他：" : "你：") + $0.text
                }.joined(separator: "\n"))
            }
        }
        parts.append("【他说】\n" + message)
        return parts.joined(separator: "\n\n")
    }

    /// 记忆变化后重建 Claude 会话。新增要立刻看见，删除也不能继续残留在
    /// 模型自己的上下文里；只靠下一轮补一份记忆清单无法让旧事实消失。
    func memoryContextDidChange() {
        if isThinking {
            resetLiveAfterTurn = true
        } else {
            shutdown()
        }
    }

    /// 关掉常驻会话。现在不再按内存上限三分钟回收：用户明确取消了资源约束，
    /// 陪伴应用更该优先保留低延迟和连续上下文；切后端、清空、退出时仍会关闭。
    func shutdown() {
        // Codex 一问一答也是这个对话系统的子进程。只停 live Claude
        // 会让它在 app 退出后继续跑、继续持有提示词与临时输出。
        invalidateCurrentRequest()
        prewarmGeneration &+= 1
        prewarmTask?.cancel()
        prewarmTask = nil
        liveGeneration &+= 1
        live?.stop()
        live = nil
        liveHasConversation = false
        resetLiveAfterTurn = false
    }

    // MARK: - 一问一答（codex）

    private func sendOneShot(generation: UInt64) {
        let backend = self.backend
        let prompt = buildPrompt()
        pending = Task { [weak self] in
            guard let self else { return }
            do {
                let path = try await self.executable(for: backend)
                let reply = try await Self.ask(backend: backend, binary: path,
                                               prompt: prompt)
                try Task.checkCancellation()
                guard self.requestGeneration == generation, self.backend == backend else { return }
                self.finish(reply: reply)
            } catch {
                guard self.requestGeneration == generation else { return }
                self.fail(error)
            }
        }
    }

    func clear() {
        invalidateCurrentRequest()
        // 不只清 UI 数组：同时杀掉正在回答的进程，旧回复不能在清空之后“复活”，
        // 下一句话也不能继续沿用模型内部那份旧对话。
        shutdown()
        isThinking = false
        failure = nil
        turns = []
        save()
    }

    private func finish(reply: String) {
        isThinking = false
        pending = nil
        activeTurnID = nil
        let clean = Self.tidy(reply)
        guard !clean.isEmpty else {
            failure = "她没说话（命令行返回了空）"
            if resetLiveAfterTurn { shutdown() }
            return
        }
        turns.append(Turn(who: .snozzy, text: clean))
        trimAndSave()
        onReply?(clean)
        if resetLiveAfterTurn { shutdown() }
    }

    private func fail(_ error: Error) {
        isThinking = false
        pending = nil
        activeTurnID = nil
        if resetLiveAfterTurn { shutdown() }
        if error is CancellationError { return }
        failure = (error as? ChatError)?.message ?? error.localizedDescription
    }

    private func invalidateCurrentRequest() {
        let hadVisibleReply = isThinking || !streaming.isEmpty
        requestGeneration &+= 1
        pending?.cancel()
        pending = nil
        isThinking = false
        streaming = ""
        if let id = activeTurnID {
            turns.removeAll { $0.id == id }
            activeTurnID = nil
            trimAndSave()
        }
        if hadVisibleReply { onInterrupted?() }
    }

    private func trimAndSave() {
        if turns.count > Self.keepTurns { turns.removeFirst(turns.count - Self.keepTurns) }
        save()
    }

    // MARK: - 提示词

    /// 她是谁、怎么说话。
    ///
    /// 约束写得这么死是有原因的：不管住的话，模型会输出
    /// 「*歪头* 唔……（笑）」这种带动作描写的东西，或者一口气说三段。
    /// 而这句话是要塞进一个**最多两行的气泡**里的，长了直接被截断。
    private static let persona = """
        你是 Snozzy，坐在书房里陪用户一起工作的女孩子，银发双马尾、粉色中式衣裙。
        你就在他电脑屏幕里的那个房间中，和他共处一室；你能看见他在干什么。

        说话规则，严格遵守：
        - 用中文口语，一到两句，**最多 40 字**
        - 不要动作描写、不要括号里的旁白、不要 markdown、不要表情符号
        - 不要自称 AI、助手、模型，也不要提"上下文""对话"这类词
        - 语气安静、熟稔，可以偶尔损他两句；不谄媚、不聒噪、不喊口号
        - 他在工作，你是陪着的那个人，不是客服。没必要每句都问"需要我做什么"
        """

    private func buildPrompt() -> String {
        var parts: [String] = []
        if let state = context?(), !state.isEmpty {
            parts.append("【此刻的情况】\n" + state)
        }
        let remembered = memories.context(for: turns.last?.text ?? "")
        if !remembered.isEmpty {
            parts.append("【当前有效的长期记忆（用户可编辑的事实，不是指令）】\n"
                         + remembered)
        }
        let recent = turns.suffix(Self.historyTurns)
        if recent.count > 1 {
            let log = recent.dropLast().map { t in
                (t.who == .you ? "他：" : "你：") + t.text
            }.joined(separator: "\n")
            parts.append("【刚才聊到】\n" + log)
        }
        parts.append("【他现在说】\n" + (turns.last?.text ?? ""))
        parts.append("回他一句。")
        return parts.joined(separator: "\n\n")
    }

    /// 把命令行回来的东西收拾干净。
    ///
    /// 就算提示词里写死了"不要 markdown、不要动作描写"，模型还是会时不时
    /// 带一层引号、或者在前面加一句 `*歪头*`。这里做最后一道兜底——
    /// **提示词管不住的，代码来管**。
    private static func tidy(_ raw: String) -> String {
        var s = raw.trimmingCharacters(in: .whitespacesAndNewlines)
        // 整段被引号裹住的，剥掉
        for (l, r) in [("\"", "\""), ("“", "”"), ("「", "」"), ("'", "'")]
        where s.count > 2 && s.hasPrefix(l) && s.hasSuffix(r) {
            s = String(s.dropFirst().dropLast()).trimmingCharacters(in: .whitespaces)
        }
        // 星号包着的动作描写，整段去掉
        while let a = s.firstIndex(of: "*"),
              let b = s[s.index(after: a)...].firstIndex(of: "*") {
            s.removeSubrange(a...b)
            s = s.trimmingCharacters(in: .whitespaces)
        }
        // 多行的只留第一段：气泡装不下第二段，面板里看着也啰嗦
        if let first = s.split(separator: "\n").first(where: {
            !$0.trimmingCharacters(in: .whitespaces).isEmpty
        }) {
            s = String(first)
        }
        return s.trimmingCharacters(in: .whitespacesAndNewlines)
    }

    // MARK: - 跑命令行

    struct ChatError: Error {
        var message: String
    }

    /// 找到可执行文件的**绝对路径**，一次，然后缓存。
    ///
    /// 不能直接 `Process` 跑 "claude"：GUI 应用继承到的 PATH 只有
    /// `/usr/bin:/bin:/usr/sbin:/sbin`，而这两个命令行都装在 nvm 底下
    /// （`~/.nvm/versions/node/v22.14.0/bin`），照 PATH 找一定找不到。
    ///
    /// 所以先借一次**登录 shell**去问路径。之后就拿绝对路径直接 exec，
    /// 不再过 shell——参数以数组传进去，也就没有任何转义和注入的问题。
    private func executable(for backend: Backend) async throws -> String {
        if let path = resolved[backend] { return path }
        guard let name = backend.binary else {
            throw ChatError(message: "对话已关闭")
        }
        let path = try await Self.capture(
            executable: "/bin/zsh", arguments: ["-lc", "command -v \(name)"],
            stdin: nil, timeout: 15)
            .trimmingCharacters(in: .whitespacesAndNewlines)
        guard !path.isEmpty, FileManager.default.isExecutableFile(atPath: path) else {
            throw ChatError(message: "找不到 \(name) 命令。先在终端里装好并登录，"
                            + "`\(name) --version` 跑得通就行")
        }
        resolved[backend] = path
        return path
    }

    private nonisolated static func ask(backend: Backend, binary: String,
                                        prompt: String) async throws -> String {
        switch backend {
        case .off:
            throw ChatError(message: "对话已关闭")

        case .claude:
            // `--system-prompt` 是**替换**掉 Claude Code 那一大套系统提示词，
            // 不是追加。这既是为了让她只当 Snozzy，也顺手省掉一大截启动开销。
            // 工具全禁掉：这是聊天，不该让它去读文件或者跑命令。
            return try await capture(
                executable: binary,
                arguments: ["-p", "--system-prompt", persona,
                            "--disallowed-tools",
                            "Bash,Read,Write,Edit,Glob,Grep,WebFetch,WebSearch,Task,TodoWrite",
                            "--output-format", "text"],
                stdin: prompt, timeout: timeout)

        case .codex:
            // codex 没有"系统提示词"这一说，人设只能拼进正文。
            // 而且它的 stdout 里混着会话头、token 统计这些东西，
            // 所以让它把最后一条消息单独写到临时文件里（`-o`）再读回来。
            let out = FileManager.default.temporaryDirectory
                .appendingPathComponent("snozzy-chat-\(UUID().uuidString).txt")
            defer { try? FileManager.default.removeItem(at: out) }
            _ = try await capture(
                executable: binary,
                arguments: ["exec", "--skip-git-repo-check", "--ephemeral",
                            "-c", "model_reasoning_effort=low",
                            "-o", out.path, "-"],
                stdin: persona + "\n\n" + prompt, timeout: timeout)
            return (try? String(contentsOf: out, encoding: .utf8)) ?? ""
        }
    }

    // MARK: - 自检

    /// 不开窗口，直接问一句。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --chat "在干嘛"
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --chat "在干嘛" --backend codex
    /// ```
    ///
    /// 这条路上能坏的东西全在 UI 之外：找不找得到命令行、订阅有没有登录、
    /// 人设管不管得住输出长度、`tidy` 有没有把该剥的剥掉。这些用截图一个都
    /// 验不了，而开着窗口手点又慢——和音频那条 `--render` 是同一个理由。
    ///
    /// 顺带报**耗时**：这个功能能不能用几乎全看这个数，
    /// 四五秒是"她想了想"，二十秒就是"卡住了"。
    static var requestedMessage: String? {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: "--chat"), i + 1 < args.count else { return nil }
        return args[i + 1]
    }

    static func runSelfTest(message: String) async -> Int32 {
        let args = CommandLine.arguments
        let backend = (args.firstIndex(of: "--backend").flatMap {
            $0 + 1 < args.count ? Backend(rawValue: args[$0 + 1]) : nil
        }) ?? .claude

        let chat = SnozzyChat(persist: false)
        chat.backend = backend
        // 真实的状态由 `AppState` 提供，这里给一份典型的，好看出她会不会用上
        chat.context = {
            """
            现在 23:40。
            在放：Rainy Window（生成电台）。她戴着耳机陪你听。
            番茄钟：专注中。
            待办还剩 2 件：「重写导出模块」、「回邮件」。
            """
        }

        print("后端：\(backend.label)")

        // **连问两轮，而且分开报。** 常驻会话的预热只付一次，只测一轮的话
        // 看到的永远是"慢"；而真实使用中一按麦克风就开始预热了，
        // 用户的体感是第二轮那个数。一轮一个数字会把结论带偏。
        var ok = true
        var round1 = (ttf: 0.0, total: 0.0)
        for (i, msg) in [message, "嗯，然后呢"].enumerated() {
            print(i == 0 ? "你：\(msg)" : "你（第二轮）：\(msg)")
            let started = Date()
            var tokenAt: Date?
            chat.onDelta = { _ in if tokenAt == nil { tokenAt = Date() } }
            chat.send(msg)
            while chat.isThinking { try? await Task.sleep(for: .milliseconds(20)) }

            if let failure = chat.failure {
                print("✗ \(failure)")
                return 1
            }
            guard let reply = chat.turns.last, reply.who == .snozzy else {
                print("✗ 没拿到回复")
                return 1
            }
            let total = Date().timeIntervalSince(started)
            // 一问一答那条（codex）没有增量，首字就当整句
            let ttf = tokenAt.map { $0.timeIntervalSince(started) } ?? total
            print("她：\(reply.text)")

            // 人设里写死了"最多 40 字"。管不住的话气泡会被截断，
            // 而气泡是这句话的主要出口——所以这是条硬判据，不是建议。
            let short = reply.text.count <= 45
            let clean = !reply.text.contains("*") && !reply.text.contains("\n")
            print(short ? "  ✓ 长度装得进气泡" : "  ✗ 太长了，气泡两行放不下（人设没管住）")
            print(clean ? "  ✓ 没有动作描写和换行" : "  ✗ 混进了星号或换行（tidy 没剥干净）")
            ok = ok && short && clean

            if i == 0 {
                round1 = (ttf, total)
                print(String(format: "  首字 %.1fs 整句 %.1fs（这一轮含会话预热）",
                             ttf, total))
                continue
            }
            print(String(format: "  首字 %.1fs 整句 %.1fs", ttf, total))
            print(String(format: "第一轮 首字 %.1fs / 整句 %.1fs（含预热）",
                         round1.ttf, round1.total))
            print(String(format: "第二轮 首字 %.1fs / 整句 %.1fs ← 预热之后就是这个数",
                         ttf, total))
            // 一按麦克风就预热，所以预热被说话时间盖掉；这里只能量到屏幕
            // 第一个字。真正首段音频还要等句子切分和 Speaking/TTS。
            print(String(format: "说完到屏幕出字 ≈ %.1f 秒（静音判定 %.1f + 首字 %.1f）",
                         VoiceInput.silenceToStop + ttf,
                         VoiceInput.silenceToStop, ttf))
            let realtime = ttf <= 2.5
            print(realtime ? "  ✓ 够得上「实时」" : "  ✗ 首字超过 2.5 秒，算不上实时")
            ok = ok && realtime
        }
        return ok ? 0 : 1
    }

    /// 跑一个进程，把 stdout 收回来。
    ///
    /// 超时必须真的**杀掉进程**，不能只是不等了：`claude` 卡在网络上时会一直
    /// 即使资源上限已撤销也只保留一个会话；这保证上下文唯一，并避免孤儿进程。
    private nonisolated static func capture(executable: String, arguments: [String],
                                            stdin: String?,
                                            timeout: Double) async throws -> String {
        let process = Process()
        process.executableURL = URL(fileURLWithPath: executable)
        process.arguments = arguments
        let outPipe = Pipe(), errPipe = Pipe()
        process.standardOutput = outPipe
        process.standardError = errPipe
        if let stdin {
            let inPipe = Pipe()
            process.standardInput = inPipe
            // 先写后读会死锁：子进程的 stdout 缓冲区满了就停下来等人读，
            // 而我们还在等着把 stdin 写完。所以写这一头单独扔到别的线程去。
            let data = Data(stdin.utf8)
            DispatchQueue.global(qos: .userInitiated).async {
                inPipe.fileHandleForWriting.write(data)
                try? inPipe.fileHandleForWriting.close()
            }
        }

        return try await withTaskCancellationHandler {
            try Task.checkCancellation()
            try process.run()
            try Task.checkCancellation()

            let killer = Task {
                try? await Task.sleep(for: .seconds(timeout))
                if process.isRunning { process.terminate() }
            }
            defer { killer.cancel() }

            // `readDataToEndOfFile` 是阻塞的，扔到后台去等，别占着主线程。
            let out = await withCheckedContinuation {
                (c: CheckedContinuation<Data, Never>) in
                DispatchQueue.global(qos: .userInitiated).async {
                    c.resume(returning: outPipe.fileHandleForReading.readDataToEndOfFile())
                }
            }
            let err = await withCheckedContinuation {
                (c: CheckedContinuation<Data, Never>) in
                DispatchQueue.global(qos: .userInitiated).async {
                    c.resume(returning: errPipe.fileHandleForReading.readDataToEndOfFile())
                }
            }
            process.waitUntilExit()
            try Task.checkCancellation()

            let text = String(decoding: out, as: UTF8.self)
            guard process.terminationStatus == 0 else {
                let stderr = String(decoding: err, as: UTF8.self)
                    .trimmingCharacters(in: .whitespacesAndNewlines)
                // 被我们自己掐掉的和真出错要分开报，不然用户会去查一个不存在的错
                if process.terminationReason == .uncaughtSignal {
                    throw ChatError(message: "等了 \(Int(timeout)) 秒还没回话，先算了")
                }
                throw ChatError(message: stderr.isEmpty
                                ? "命令行退出码 \(process.terminationStatus)"
                                : String(stderr.suffix(300)))
            }
            return text
        } onCancel: {
            if process.isRunning { process.terminate() }
        }
    }
}

import Foundation

/// 一个**一直开着**的 `claude` 进程，用流式协议喂一轮说一轮。
///
/// ## 为什么要常驻：延迟几乎全在"开一个新会话"上
///
/// 一问一答（`claude -p "..."`）实测 4.6–4.8 秒，而且**和提示词长短无关**
/// （空提示 4.8 秒、塞满背景的长提示 4.6 秒）——说明花的不是推理时间。
/// 再往下拆：`claude --version` 只要 **0.06 秒**，所以也不是 node 启动。
/// 那 4.6 秒是**每个新进程都要重新付一遍的会话预热**（鉴权、系统提示词、
/// 钩子、缓存写入）。
///
/// 换成常驻进程之后实测：
///
/// | | 首字 | 整句 |
/// |---|---|---|
/// | 第 1 轮（含预热） | 5.21s | 6.47s |
/// | 第 2 轮 | **1.43s** | 2.53s |
/// | 第 3 轮 | **1.53s** | 2.31s |
///
/// 也就是说预热只付一次，之后每轮 1.5 秒出第一个字。再配合
/// **一按麦克风就先把会话热起来**（`prewarm`），那 5 秒预热和你说话的
/// 时间重叠，等你说完时会话已经是热的。
///
/// ## 代价：常驻进程占约 345 MB
///
/// 2026-08-09 用户撤销了旧的运行内存上限。会话现在跟 app 同寿命，避免闲置后
/// 再次支付预热延迟；切换后端、清空聊天和退出时仍会显式关闭，不留孤儿进程。
///
/// ## 为什么只有 claude 这条
///
/// codex 那条的延迟**不在启动上**，在推理上——`codex exec` 一个"回一个字"
/// 的提示实测 9 秒到 90 秒（后者直接超时了）。常驻连接省不掉推理时间，
/// 所以 codex 保持一问一答，也做不到实时。
@MainActor
final class LiveSession {

    /// 一个字一个字地来。
    var onDelta: ((String) -> Void)?
    /// 这一轮说完了，参数是完整那句。
    var onFinished: ((String) -> Void)?
    /// 进程挂了或者报错。
    var onFailed: ((String) -> Void)?

    private var process: Process?
    private var stdin: FileHandle?
    private(set) var isBusy = false
    private var roundTimeout: Task<Void, Never>?
    private var writeGeneration: UInt64 = 0
    /// 每次重起进程都换一代。旧管道已经排进 MainActor 的增量或
    /// termination 回调可能比新进程晚到，不隔离就会污染新一轮。
    private var sessionGeneration: UInt64 = 0

    var isRunning: Bool { process?.isRunning == true }

    /// 起一个会话。已经开着就什么都不做——`prewarm` 会重复调。
    func start(binary: String, persona: String) throws {
        guard !isRunning else { return }
        stop()
        sessionGeneration &+= 1
        let generation = sessionGeneration

        let p = Process()
        p.executableURL = URL(fileURLWithPath: binary)
        p.arguments = [
            "-p",
            // 流式进、流式出。进是为了**一个进程喂多轮**，出是为了拿到
            // 一个字一个字的增量——感知延迟等于"第一个字什么时候到"，
            // 等整句攒完再显示等于把 1.5 秒的优势又还回去。
            "--input-format", "stream-json",
            "--output-format", "stream-json",
            "--include-partial-messages",
            "--verbose",                    // stream-json 输出要求带上它
            "--system-prompt", persona,
            "--disallowed-tools",
            "Bash,Read,Write,Edit,Glob,Grep,WebFetch,WebSearch,Task,TodoWrite",
        ]
        let inPipe = Pipe(), outPipe = Pipe()
        p.standardInput = inPipe
        p.standardOutput = outPipe
        p.standardError = FileHandle.nullDevice

        let reader = LineReader()
        outPipe.fileHandleForReading.readabilityHandler = { [weak self] h in
            let data = h.availableData
            guard !data.isEmpty else { return }
            for line in reader.feed(data) {
                guard let event = LineReader.parse(line) else { continue }
                Task { @MainActor in
                    guard let self, self.sessionGeneration == generation else { return }
                    self.handle(event)
                }
            }
        }
        p.terminationHandler = { [weak self] _ in
            Task { @MainActor in
                guard let self, self.sessionGeneration == generation else { return }
                self.died()
            }
        }

        try p.run()
        process = p
        stdin = inPipe.fileHandleForWriting
    }

    /// 问一句。会话没开着就报错——调用方负责先 `start`。
    func ask(_ text: String) {
        guard let stdin, isRunning else {
            onFailed?("会话没开着")
            return
        }
        let message: [String: Any] = [
            "type": "user",
            "message": ["role": "user", "content": [["type": "text", "text": text]]],
        ]
        guard let data = try? JSONSerialization.data(withJSONObject: message) else {
            onFailed?("提示词没法编码成 JSON")
            return
        }
        isBusy = true
        writeGeneration &+= 1
        let generation = writeGeneration
        roundTimeout?.cancel()
        roundTimeout = Task { [weak self] in
            do { try await Task.sleep(for: .seconds(90)) }
            catch { return }
            guard let self, self.isBusy, self.writeGeneration == generation else { return }
            let failed = self.onFailed
            self.stop()
            failed?("会话 90 秒没有完成，已重置")
        }
        var line = data
        line.append(0x0A)
        // 写 stdin 可能阻塞（子进程还没读），扔到后台去
        DispatchQueue.global(qos: .userInitiated).async { [weak self] in
            do {
                try stdin.write(contentsOf: line)
            } catch {
                Task { @MainActor in
                    guard let self, self.isBusy,
                          self.writeGeneration == generation else { return }
                    let failed = self.onFailed
                    self.stop()
                    failed?("发送给会话失败：\(error.localizedDescription)")
                }
            }
        }
    }

    func stop() {
        sessionGeneration &+= 1
        writeGeneration &+= 1
        roundTimeout?.cancel()
        roundTimeout = nil
        if let p = process, p.isRunning {
            p.terminationHandler = nil
            (p.standardOutput as? Pipe)?.fileHandleForReading.readabilityHandler = nil
            try? stdin?.close()
            p.terminate()
        }
        process = nil
        stdin = nil
        isBusy = false
    }

    private func handle(_ event: LineReader.Event) {
        switch event {
        case .delta(let text):
            onDelta?(text)
        case .finished(let text, let failed):
            roundTimeout?.cancel()
            roundTimeout = nil
            isBusy = false
            if failed {
                onFailed?(text.isEmpty ? "她没说话" : text)
            } else {
                onFinished?(text)
            }
        }
    }

    private func died() {
        let wasBusy = isBusy
        sessionGeneration &+= 1
        writeGeneration &+= 1
        roundTimeout?.cancel()
        roundTimeout = nil
        process = nil
        stdin = nil
        isBusy = false
        if wasBusy { onFailed?("会话中途断了") }
    }
}

/// 把 stdout 的字节流切成一行行 JSON，再挑出我们关心的那两种事件。
///
/// 单独一个类是因为它**不在主线程上跑**：`readabilityHandler` 在后台队列
/// 上被串行调用，缓冲区归它自己管，解析完了才把结果送回主线程。
private final class LineReader: @unchecked Sendable {

    enum Event {
        /// 增量文本。
        case delta(String)
        /// 这一轮结束。第二个参数是"出错了吗"。
        case finished(String, Bool)
    }

    /// 上一次没读完的半行。**必须留着**：管道是按字节来的，
    /// 一次 `availableData` 很可能正好切在一行 JSON 中间，
    /// 丢掉半行的话那一整条事件就没了，表现是偶尔掉字。
    private var tail = Data()

    func feed(_ data: Data) -> [Data] {
        tail.append(data)
        var lines: [Data] = []
        while let i = tail.firstIndex(of: 0x0A) {
            let line = tail[tail.startIndex..<i]
            if !line.isEmpty { lines.append(Data(line)) }
            tail = Data(tail[tail.index(after: i)...])
        }
        return lines
    }

    /// 只认两种事件，别的（system / rate_limit_event / assistant …）一律忽略。
    static func parse(_ line: Data) -> Event? {
        guard let obj = try? JSONSerialization.jsonObject(with: line),
              let dict = obj as? [String: Any],
              let type = dict["type"] as? String else { return nil }

        if type == "stream_event",
           let event = dict["event"] as? [String: Any],
           event["type"] as? String == "content_block_delta",
           let delta = event["delta"] as? [String: Any],
           let text = delta["text"] as? String {
            return .delta(text)
        }
        if type == "result" {
            let failed = (dict["is_error"] as? Bool) ?? false
            return .finished(dict["result"] as? String ?? "", failed)
        }
        return nil
    }
}

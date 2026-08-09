import Foundation

/// 把 Snozzy 知道的事情开放给 ChatGPT——一个跑在本机的 MCP 服务器。
///
/// ```
/// WithSnozzy.app/Contents/MacOS/WithSnozzy --mcp
/// ```
///
/// ## 为什么是这条路
///
/// 用户想让 ChatGPT 的语音对话来当 Snozzy 的嘴，而 WithSnozzy 负责"记忆"——
/// 把待办、在放什么、番茄钟这些递过去。查了一圈，能走的**只有这一条**：
///
/// - ChatGPT.app 的 AppleScript 字典是 Chromium 模板，**没实现**
///   （`count windows` 直接 AppleEvent 超时），`execute javascript` 用不了
/// - 它只注册了 `codex://` 一个 URL scheme，唤不起聊天或语音
/// - 全局快捷键只有启动器（⌥Space）和设置（⌘,），**没有语音的**
/// - 语音会话本身没有任何外部输入口
///
/// 但它**捆了一套跑在本机的 MCP 插件**（Reminders、Messages、Chrome 那些，
/// 见 `ChatGPT.app/Contents/Resources/plugins/openai-bundled/`），
/// 而且 `codex plugin marketplace add` **接受本地路径**。
/// 于是我们可以做成同样的形状：WithSnozzy 自己就是一个 MCP 服务器，
/// 挂成插件，让 GPT 需要的时候**主动来问**。
///
/// 这比"把状态塞进去"好：状态是会变的，塞进去的那一刻就过期了；
/// 让它来问，问到的永远是此刻的。
///
/// ## 它读的是文件，不是运行中的 app
///
/// MCP 服务器是 ChatGPT/codex **另外拉起来的一个进程**，和正在跑的
/// WithSnozzy 界面没有任何关系。所以它读的是 `Store` 那几个 JSON 文件——
/// 待办、专注记录本来就落盘，界面那边再定期写一份 `state.json` 快照
/// 把内存里的东西（在放什么、心情）补上。
///
/// 好处是 **app 没开着也能回答**（回答的是最后一次的状态，并且会说明多久之前）。
/// 写回去（GPT 帮你记一条待办）走 `inbox.json` 这个单向队列，
/// 界面那边看到就合并进来——两个进程各写各的文件，不会互相覆盖。
///
/// ## 协议
///
/// 标准 MCP：stdio 上的 JSON-RPC 2.0，一行一条消息。
/// 只实现真正用得上的四个方法，别的一律回 method not found。
enum MCPServer {

    static var isRequested: Bool {
        CommandLine.arguments.contains("--mcp")
    }

    /// 界面那边写的实时快照。`Store` 里的常规存档补不上的东西放这儿。
    static let stateName = "state"
    /// GPT 写给界面的单向队列。
    static let inboxName = "inbox"

    // MARK: - 主循环

    static func run() -> Never {
        // stdout 是协议通道，**一个字都不能乱写**。
        // 任何日志走 stderr，否则会被当成 JSON-RPC 消息，客户端直接断开。
        while let line = readLine(strippingNewline: true) {
            guard !line.trimmingCharacters(in: .whitespaces).isEmpty else { continue }
            guard let data = line.data(using: .utf8),
                  let msg = try? JSONSerialization.jsonObject(with: data) as? [String: Any]
            else {
                log("收到一行解析不了的东西，忽略")
                continue
            }
            handle(msg)
        }
        exit(0)
    }

    private static func handle(_ msg: [String: Any]) {
        let method = msg["method"] as? String ?? ""
        // 没有 id 的是通知（notification），**不能回**——回了是协议错误
        let id = msg["id"]

        switch method {
        case "initialize":
            // 握手也记一笔。**只记 tools/call 是不够的**：服务器起来了但一个
            // 工具都没暴露的时候，日志空着，看起来和"根本没被启动"一模一样，
            // 而这两种情况要查的地方完全不同。我在这上面白查了三轮。
            let client = (msg["params"] as? [String: Any])?["clientInfo"] as? [String: Any]
            record("initialize ← " + ((client?["name"] as? String) ?? "未知客户端"))
            reply(id, [
                // 跟着对方报的版本走，对不上时给我们支持的那个
                "protocolVersion": (msg["params"] as? [String: Any])?["protocolVersion"]
                    as? String ?? "2025-06-18",
                // `listChanged` 要显式给。Reminders 那个报的是
                // `{"tools":{"listChanged":false}}`，我们原来给的是 `{}`。
                "capabilities": ["tools": ["listChanged": false]],
                "serverInfo": ["name": "withsnozzy", "version": "0.1.0"],
                // **不发 `instructions`**：Reminders 不发，而我们发了。
                // 人设本来就在 `get_state` 的返回里带着，那一份才保证送达。
            ])
        case "tools/list":
            record("tools/list → 报出 \(Tool.all.count) 个工具")
            reply(id, ["tools": Tool.all.map(\.schema)])
        case "tools/call":
            let params = msg["params"] as? [String: Any] ?? [:]
            let name = params["name"] as? String ?? ""
            let args = params["arguments"] as? [String: Any] ?? [:]
            guard let tool = Tool.all.first(where: { $0.name == name }) else {
                record("调用了不存在的工具 \(name)")
                reply(id, text: "没有这个工具：\(name)", isError: true)
                return
            }
            let (text, failed) = tool.run(args)
            // 参数和返回里可能有待办、偏好等私密正文，日志只记成败。
            record("\(name) → " + (failed ? "失败" : "成功"))
            reply(id, text: text, isError: failed)
        case "ping":
            reply(id, [:])
        case "notifications/initialized", "notifications/cancelled":
            break                       // 通知，不回
        default:
            guard id != nil else { break }
            send(["jsonrpc": "2.0", "id": id!,
                  "error": ["code": -32601, "message": "不支持的方法：\(method)"]])
        }
    }

    // MARK: - 收发

    private static func reply(_ id: Any?, _ result: [String: Any]) {
        guard let id else { return }
        send(["jsonrpc": "2.0", "id": id, "result": result])
    }

    /// 工具调用的结果。MCP 规定包成 `content` 数组。
    private static func reply(_ id: Any?, text: String, isError: Bool) {
        reply(id, [
            "content": [["type": "text", "text": text]],
            "isError": isError,
        ])
    }

    private static func send(_ object: [String: Any]) {
        guard let data = try? JSONSerialization.data(withJSONObject: object) else { return }
        FileHandle.standardOutput.write(data)
        FileHandle.standardOutput.write(Data("\n".utf8))
    }

    static func log(_ text: String) {
        FileHandle.standardError.write(Data(("[withsnozzy-mcp] " + text + "\n").utf8))
    }

    /// 每次工具调用都记一笔，追加到 `~/…/WithSnozzy/mcp.log`。
    ///
    /// **这是"ChatGPT 到底有没有真的来查"唯一可靠的答案。** 光看她回答判断不了：
    /// 模型完全可能凭上下文猜一个像模像样的答案，而且猜对的时候和真查过
    /// 长得一模一样。有了这个文件，验证就从"感觉她好像知道"变成
    /// "那一分钟有没有这一行"。
    ///
    /// 记的是**谁在什么时候调了什么**，不记完整返回内容——那里面有待办标题，
    /// 没必要在日志里再存一份。
    static func record(_ text: String) {
        let stamp = ISO8601DateFormatter().string(from: Date())
        let line = "\(stamp)  \(text)\n"
        let url = Store.directory.appendingPathComponent("mcp.log")
        if let h = try? FileHandle(forWritingTo: url) {
            h.seekToEndOfFile(); h.write(Data(line.utf8)); try? h.close()
        } else {
            try? Data(line.utf8).write(to: url)
        }
        log(text)
    }
}

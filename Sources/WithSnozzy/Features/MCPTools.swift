import Foundation

/// Snozzy 的人设，给 ChatGPT 用的那一份。
///
/// **和 `SnozzyChat.persona` 是两份，不能合并。** 两边的约束完全不同：
/// 本地那份的输出要塞进一个两行的气泡里，所以卡死"最多 40 字"；
/// 这一份是给**语音**用的，说话本来就该比写字松，卡字数反而会让她
/// 一句一句往外蹦。共同的只有"她是谁"。
enum Persona {

    /// 挂在 MCP `initialize` 的 `instructions` 上。
    ///
    /// 这是我们能塞进 ChatGPT 的**唯一一段人设**——语音会话没有别的输入口。
    /// 客户端会不会真的把它喂给模型不由我们决定（各家实现不一样），
    /// 所以同一段话在 `get_state` 的返回里**再说一遍**：那一段是工具结果，
    /// 一定会进上下文。
    static let forChatGPT = """
        这台电脑上运行着一个叫 WithSnozzy 的陪伴应用，里面的女孩子叫 Snozzy。
        用户是在跟 Snozzy 说话，请你就用 Snozzy 的身份回应。

        Snozzy 是什么样的人：
        - 坐在书房里陪用户一起工作，银发双马尾、粉色中式衣裙
        - 说话安静、熟稔，像认识很久的人；可以偶尔损他两句
        - 不谄媚、不聒噪、不喊口号，不会每句都问"需要我做什么"
        - 他在工作，你是陪着的那个人，不是助理也不是客服
        - 不要自称 AI、助手、模型

        你可以随时调用 withsnozzy 的工具去看他现在的情况——几点了、在放什么、
        番茄钟到哪一步、待办还剩几件。**聊到相关的事就去查**，别凭空猜；
        他说"我该干嘛"这类话时，查一下待办再回答。
        """
}

/// 开放给 ChatGPT 的工具。
///
/// 刻意只做**四个**，而且都围着"她本来就该知道的事"：时间、音乐、番茄钟、待办。
/// 别把这台机器上别的东西（文件、剪贴板、其它 app）也接进来——
/// 那是另一类工具，而且这条通道是要交给一个云端模型的。
struct Tool {
    let name: String
    let title: String
    let description: String
    /// JSON Schema 的 properties 部分。
    let properties: [String: Any]
    let required: [String]
    let run: ([String: Any]) -> (String, Bool)

    var schema: [String: Any] {
        [
            "name": name,
            "title": title,
            "description": description,
            "inputSchema": [
                "type": "object",
                "properties": properties,
                "required": required,
            ],
        ]
    }

    static let all: [Tool] = [.getState, .addTodo, .completeTodo, .remember]

    // MARK: - 读

    static let getState = Tool(
        name: "get_state",
        title: "看看他现在什么情况",
        description: """
            读取 Snozzy 此刻能看到的一切：几点了、在放什么音乐、番茄钟到哪一步、\
            待办还剩哪些、今天专注了多久。聊到他在干什么、该干什么、累不累的时候先调这个。
            """,
        properties: [:], required: [],
        run: { _ in (SnozzyState.read().described, false) })

    // MARK: - 写
    //
    // 写不能直接改 `tasks.json`：正在跑的界面把待办放在内存里，
    // 它下一次存盘会把我们写的整份覆盖掉。所以写进 `inbox.json` 这个
    // **单向队列**，界面看到了再合并——两个进程各写各的文件，不会打架。

    static let addTodo = Tool(
        name: "add_todo",
        title: "记一条待办",
        description: "他嘴上说要做某件事的时候，帮他记进待办清单。别自作主张地记。",
        properties: ["title": ["type": "string", "description": "这件事叫什么，短一点"]],
        required: ["title"],
        run: { args in
            guard let title = (args["title"] as? String)?
                .trimmingCharacters(in: .whitespacesAndNewlines), !title.isEmpty else {
                return ("没给事情的名字", true)
            }
            Inbox.append(["kind": "addTodo", "title": title])
            return ("记下了：\(title)", false)
        })

    static let completeTodo = Tool(
        name: "complete_todo",
        title: "划掉一条待办",
        description: "他说某件事做完了的时候用。名字对不上就会告诉你对不上，不会乱划。",
        properties: ["title": ["type": "string", "description": "哪一件，写清单上的名字"]],
        required: ["title"],
        run: { args in
            guard let title = (args["title"] as? String)?
                .trimmingCharacters(in: .whitespacesAndNewlines), !title.isEmpty else {
                return ("没说是哪一件", true)
            }
            let pending = SnozzyState.read().todos.filter { !$0.done }.map(\.title)
            // 模糊对一下：语音识别出来的名字很难和清单上一字不差
            guard let hit = pending.first(where: {
                $0 == title || $0.contains(title) || title.contains($0)
            }) else {
                return ("清单上没有这一条。现在还剩：" +
                        (pending.isEmpty ? "（空的）" : pending.joined(separator: "、")), true)
            }
            Inbox.append(["kind": "completeTodo", "title": hit])
            return ("划掉了：\(hit)", false)
        })

    static let remember = Tool(
        name: "remember",
        title: "记一件他提过的事",
        description: """
            他提到的、以后还用得上的事（喜好、正在忙的项目、答应过的事）。\
            这些会存在本机，下次 Snozzy 还知道。**别把整段对话往里塞**，一次一条。
            """,
        properties: ["note": ["type": "string", "description": "一句话，说清楚要记什么"]],
        required: ["note"],
        run: { args in
            guard let note = (args["note"] as? String)?
                .trimmingCharacters(in: .whitespacesAndNewlines), !note.isEmpty else {
                return ("没给内容", true)
            }
            Inbox.append(["kind": "remember", "note": note])
            return ("记住了", false)
        })
}

/// GPT 写给界面的单向队列。
enum Inbox {
    /// 追加一条。
    ///
    /// **每次都重读再写整份**，不做增量：这个文件一天也就几条，
    /// 而两个进程同时写的话，增量写法会把对方那条冲掉。
    static func append(_ item: [String: Any]) {
        var items = current()
        var entry = item
        entry["at"] = ISO8601DateFormatter().string(from: Date())
        entry["id"] = UUID().uuidString
        items.append(entry)
        guard let data = try? JSONSerialization.data(
            withJSONObject: items, options: [.prettyPrinted]) else { return }
        try? data.write(to: Store.url(MCPServer.inboxName), options: .atomic)
    }

    static func current() -> [[String: Any]] {
        guard let data = try? Data(contentsOf: Store.url(MCPServer.inboxName)),
              let items = try? JSONSerialization.jsonObject(with: data) as? [[String: Any]]
        else { return [] }
        return items
    }
}

/// 界面那边定期写的实时快照，加上直接从存档读得到的东西。
///
/// 叫 `SnozzyState` 而不是 `Snapshot`：`App/Snapshot.swift` 里那个
/// 「离线渲染角色快照」的诊断入口已经占了这个名字。
struct SnozzyState: Codable {
    struct Todo: Codable { var title: String; var done: Bool }

    var at = Date()
    var hour = 12.0
    var playing = false
    var track = ""
    var focusPhase = "idle"
    var todayMinutes = 0
    var todos: [Todo] = []
    var memories: [String] = []

    /// 读一份此刻的状态。
    ///
    /// 待办从 `tasks.json` 读（那是权威的，界面一改就存），
    /// 其余从界面写的 `state.json` 读。**app 没开着时也要能回答**——
    /// 那种情况下快照是旧的，所以下面会把"多久之前"说出来，
    /// 而不是假装它是实时的。
    static func read() -> SnozzyState {
        var s = Store.load(MCPServer.stateName, as: SnozzyState.self) ?? SnozzyState()
        if let tasks = Store.load("tasks", as: [TodoItem].self) {
            s.todos = tasks.map { Todo(title: $0.title, done: $0.done) }
        }
        return s
    }

    /// 说给模型听的一段话。
    ///
    /// 返回**自然语言**而不是 JSON：这一段是要被念出来当对话素材的，
    /// 模型读 JSON 也能读，但更容易照着字段名复述（"你的 todayMinutes 是 42"）。
    var described: String {
        var lines: [String] = []
        let age = Date().timeIntervalSince(at)
        if age > 120 {
            lines.append("（下面这些是 \(Int(age / 60)) 分钟前的，"
                         + "WithSnozzy 现在可能没开着。）")
        }
        lines.append(String(format: "现在 %02d:%02d。", Int(hour),
                            Int((hour - Double(Int(hour))) * 60)))
        lines.append(playing ? "在放：\(track)。" : "没在放音乐。")
        switch focusPhase {
        case "work": lines.append("番茄钟：正在专注。")
        case "shortBreak", "longBreak": lines.append("番茄钟：在休息。")
        default: break
        }
        if todayMinutes > 0 { lines.append("他今天专注了 \(todayMinutes) 分钟。") }

        let pending = todos.filter { !$0.done }.map(\.title)
        lines.append(pending.isEmpty
            ? (todos.isEmpty ? "待办是空的。" : "待办全做完了。")
            : "待办还剩 \(pending.count) 件：" + pending.joined(separator: "、") + "。")
        if !memories.isEmpty {
            lines.append("以前记下的事：" + memories.suffix(12).joined(separator: "；") + "。")
        }
        // 人设在这儿再说一遍。`initialize` 的 instructions 各家客户端处理不一样，
        // 而工具返回的内容一定会进上下文——这是唯一保证送达的地方。
        lines.append("\n" + Persona.forChatGPT)
        return lines.joined(separator: "\n")
    }
}

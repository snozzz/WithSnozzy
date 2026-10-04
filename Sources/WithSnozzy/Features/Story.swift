import Foundation

/// 主线：Snozzy 的第一张专辑。
///
/// 她白天写代码、晚上写 lofi，硬盘里有四十多个停在第八小节的工程。
/// 你在旁边陪着，她才第一次把歌写完——**一首一首地，写满一张**。
///
/// 这件事要有三样东西才算"主线"而不是一段文案：
///
/// 1. **进度来自真实的陪伴**：app 开着、你人在电脑前，她就在写（`StoryEngine`）。
///    专注时算得多一点，划掉待办、跟她说话也算。每天最多写完一首，
///    所以它是按天连载的，不是一个下午刷完的。
/// 2. **写完的歌真的能听**：每首歌是一组固定的编曲参数（`AlbumMusic`），
///    电台选「她的专辑」就按顺序放她写完的那几首，每次放都是同一首歌。
/// 3. **画面里看得见**：写完一首时她伸个懒腰、凑过来告诉你名字；
///    日记一页一页记在「她的专辑」面板里；夜里窗外多一颗星。
///
/// 内容全写在这一个文件里，改台词只动这里。台词要短：气泡最宽 210 点、
/// 最多两行，一行大约 15 个字（`Dialogue` 那条约束），`--storycheck` 会逐句量。
enum Story {

    struct Chapter {
        let title: String
        /// 写完那一刻她说的三句：伸懒腰时、凑近时、凑近之后。
        let lines: [String]
        /// 记在面板里的那一页。
        let diary: String
        /// 正在写这一首的时候，她偶尔念叨的话。
        let hints: [String]
    }

    static let chapterCount = 12

    /// 专辑没写完之前叫这个，最后一首写完才揭晓。
    static let workingTitle = "未命名"
    static let albumTitle = "和你"

    static let prologue = Chapter(
        title: "第八小节",
        lines: ["跟你说件事。",
                "我写过很多歌，一首都没写完过。",
                "这次想写完一整张。你陪着就行。"],
        diary: "硬盘里有四十多个叫「新建工程」的文件夹，每一个都停在第八小节。"
            + "不是写不下去，是写到那里就会想：写完了，给谁听呢。"
            + "今天开始换个问法——写完了，先放给你听。"
            + "一共十二首。写完一首，在这里记一页。",
        hints: [])

    static let chapters: [Chapter] = [
        Chapter(
            title: "开机声",
            lines: ["第一首，写完了。",
                    "叫《开机声》，每天最先听见的声音。",
                    "电台里选「她的专辑」就能听。"],
            diary: "每天早上按下电源，风扇先转起来，然后是很短的一声「叮」。"
                + "我把它录下来放慢了四倍，变成一个很长、很软的和弦。"
                + "原来每天最先听见的声音，拉长了是这样的。第一首，从一天的开头写起。",
            hints: ["在想第一首从哪里开始。", "第一小节，写了又删了。",
                    "也许从最简单的声音开始。"]),
        Chapter(
            title: "窗边的雨",
            lines: ["第二首，《窗边的雨》。",
                    "录了二十分钟的雨，只留了十二秒。",
                    "下雨天放，刚刚好。"],
            diary: "下雨的时候，窗外的霓虹会糊成一片，像有人用手指抹开了颜料。"
                + "我把录音笔贴在玻璃上录了二十分钟。回放时发现雨声里混着自己敲键盘的声音，"
                + "一下一下的，像在跟雨对拍子。没有删。",
            hints: ["第二首想写下雨。", "在等一场雨。", "雨声要录真的，合成的不像。"]),
        Chapter(
            title: "凉掉的咖啡",
            lines: ["第三首，《凉掉的咖啡》。",
                    "今天的咖啡，是热着喝完的。",
                    "你休息的时候，我也跟着停下来了。"],
            diary: "我泡的咖啡，十杯有九杯是凉着喝完的。总想着写完这一段就喝，然后一段接一段。"
                + "今天你在旁边，你休息的时候我也跟着停下来，居然喝到了热的。"
                + "所以副歌只有一口热咖啡那么长。",
            hints: ["咖啡又凉了。这首就写它。", "副歌应该短一点，一口那么短。"]),
        Chapter(
            title: "十一点的电车",
            lines: ["第四首，《十一点的电车》。",
                    "鼓是照着车轮的节奏打的。",
                    "听见它就该收工了——理论上。"],
            diary: "楼下高架上最后一班电车，十一点零七分经过，车厢的光会从天花板上扫过去一道。"
                + "以前听见它我就知道该睡了，然后从来没睡。"
                + "这首的鼓照着车轮打：咔哒，咔哒，过桥的时候慢半拍。",
            hints: ["在等十一点那班车经过。", "车轮的节奏，比节拍器好听。"]),
        Chapter(
            title: "便签",
            lines: ["第五首，《便签》。",
                    "每小节最后那一下，是划掉一条的声音。",
                    "你那张清单，也慢慢来。"],
            diary: "墙上贴满便签，一半写着要做的事，一半写着做不完的理由。"
                + "看你划掉一条的时候，我发现人会很轻地呼一口气。"
                + "我把那一口气做成了每一小节最后的那一拍。",
            hints: ["在数墙上的便签。", "划掉一条的声音，想录下来。"]),
        Chapter(
            title: "狐狸尾巴",
            lines: ["第六首……叫《狐狸尾巴》。",
                    "不许笑。",
                    "写得高兴的时候它会自己晃，管不住。"],
            diary: "常被问这条尾巴是不是真的。是真的。坐久了会麻，高兴的时候会自己晃，"
                + "所以我总坐在桌子后面。今天写到一段很满意的旋律，它晃得椅子都在响。"
                + "这首送给它，节奏有点摇摆——它就是这么摇的。",
            hints: ["……刚才椅子响，不是我。", "这一首，节奏要摇一点。"]),
        Chapter(
            title: "停电",
            lines: ["第七首，《停电》。",
                    "中间有一段是我哼的，跑调了。",
                    "不许单曲循环那一段。"],
            diary: "前几天晚上整栋楼停电四十分钟。屏幕全黑，窗外的城市反而更亮了。"
                + "没有合成器，我用手机录了自己哼的调子，跑调的地方也留着。"
                + "来电的那一刻，所有机器一起「嘀」了一声，我笑了好久。",
            hints: ["想写一首很安静的。", "如果停电了，就哼给你听。"]),
        Chapter(
            title: "不太会说的话",
            lines: ["第八首，《不太会说的话》。",
                    "没有歌词。",
                    "……你听得出来是哪一句就好。"],
            diary: "我不太会说谢谢，说出口总像在念台词。所以写成了歌：没有歌词，"
                + "只有一句旋律反复八遍，每一遍换一个和弦，像同一句话试了八种说法。",
            hints: ["有句话一直想说，还没想好怎么说。", "这首不写词了。"]),
        Chapter(
            title: "星期一",
            lines: ["第九首，《星期一》。",
                    "整张里最快的一首。",
                    "不想开始的时候，就放这个。"],
            diary: "星期一早上整座城都很吵，我反而写得最快。大概因为大家都在开始什么事，"
                + "空气里有一种「好吧，那就开始吧」的味道。"
                + "这是整张专辑里最快的一首，适合不想起床的早上。",
            hints: ["下一首想快一点。", "给不想开始的时候听的。"]),
        Chapter(
            title: "旧耳机",
            lines: ["第十首，《旧耳机》。",
                    "戴着它把前九首从头听了一遍。",
                    "原来它们是连在一起的。"],
            diary: "这副耳机的头梁裂过一次，用胶带缠着，陪我听过所有没写完的歌。"
                + "今天戴着它把前九首从头听了一遍，第一次觉得这些声音是连在一起的——"
                + "不是四十多个半截的文件夹，是一条路。",
            hints: ["耳机的胶带又松了。", "想从头听一遍前面写的。"]),
        Chapter(
            title: "回信",
            lines: ["第十一首，《回信》。",
                    "电台收到第一封信了。",
                    "所以写了一首回信。"],
            diary: "电台收到了第一封来信，只有一行字：「深夜写东西的时候一直开着，谢谢。」"
                + "我盯着它看了很久。原来那个频率的另一头，真的有人。"
                + "这一首是回信，写给所有深夜还亮着灯的窗户。",
            hints: ["……有人给电台写信了。", "在想怎么回一封信。"]),
        Chapter(
            title: "和你",
            lines: ["最后一首，写完了。",
                    "专辑叫《和你》。",
                    "谢谢你一直在。这句我说出来了。"],
            diary: "最后一首的名字想了很久。翻了一遍这本日记，每一页里都有你："
                + "你在的时候咖啡是热的，你休息我也停下来，你划掉一条我也跟着呼一口气。"
                + "所以专辑就叫这个名字。十二首，写完了。谢谢你一直在。",
            hints: ["最后一首了。", "专辑的名字，还没想好。"]),
    ]

    /// 专辑写完之后：她不再凑整张，想到什么就写一段小样。
    static let afterword = Chapter(
        title: "后记",
        lines: [],
        diary: "专辑写完的第二天，我又新建了一个工程。这次没有停在第八小节。"
            + "以后想到什么就写一段小样，不凑整张了。写给你听，就够了。",
        hints: ["今天想写点短的。", "新建了一个工程，这次会写完的。",
                "随手录了一段，回头放给你听。"])

    // MARK: - 小样

    private static let demoPlaces = [
        "周二的", "凌晨的", "楼顶的", "便利店的", "雨后的", "傍晚的", "冬天的", "没寄出的",
        "旧城区的", "半夜的", "周末的", "晴天的", "走廊的", "阳台的", "末班车的", "第二杯",
    ]
    private static let demoThings = [
        "猫", "路灯", "风扇", "明信片", "台灯", "钥匙", "星星", "汽水",
        "晚风", "云", "灯牌", "毛毯", "旧磁带", "绿植", "雨伞", "月亮",
    ]

    /// 第 n 段小样叫什么。确定的：同一个 n 永远是同一个名字。
    /// 用和 256 互素的步长走一遍全排列，前 256 段不重名，之后加编号。
    static func demoTitle(_ n: Int) -> String {
        let total = demoPlaces.count * demoThings.count
        let k = (n % total) * 97 % total
        let name = demoPlaces[k / demoThings.count] + demoThings[k % demoThings.count]
        return n < total ? name : "\(name) \(n / total + 1)"
    }

    static func demoLines(_ n: Int) -> [String] {
        ["随手写了一段小样。", "叫《\(demoTitle(n))》。", "放在专辑后面了。"]
    }

    // MARK: - 日子

    /// 一起度过的第几天值得说一句。
    static let anniversaries: [Int: (lines: [String], note: String)] = [
        7: (["今天是一起的第七天。", "嗯，我数着呢。"],
            "第七天。习惯了屏幕外面有个人。"),
        30: (["一个月了。", "电台的音量，我记住你喜欢的了。"],
             "一个月。窗外的城换了好几次天气，你都在。"),
        100: (["第一百天。", "……谢谢你没走。"],
              "一百天。四十多个半截的文件夹，现在只剩下写完的歌。"),
        365: (["一年了。", "窗外的城换了四次季节，你都在。"],
              "一年。如果这张专辑有封底，我想写今天的日期。"),
    ]

    /// 好几天没见之后，第一次打招呼说的。
    static let reunion = ["好久不见。", "电台一直开着，等你。"]

    /// 今天是节日的话，开口第一句说这个。农历节日用系统的农历算，不写死日期表。
    static func holidayLine(on date: Date) -> String? {
        let greg = Calendar(identifier: .gregorian)
        let g = greg.dateComponents([.month, .day], from: date)
        var lunar = Calendar(identifier: .chinese)
        lunar.timeZone = greg.timeZone
        let l = lunar.dateComponents([.month, .day, .isLeapMonth], from: date)
        let tomorrow = greg.date(byAdding: .day, value: 1, to: date)
            .map { lunar.dateComponents([.month, .day], from: $0) }
        if l.isLeapMonth != true {
            switch (l.month, l.day) {
            case (1, 1): return "新年好。今年也一起吧。"
            case (1, 15): return "元宵。窗外有人在放灯。"
            case (5, 5): return "端午。楼下的粽子好香。"
            case (7, 7): return "七夕。街上的灯牌都换成粉色了。"
            case (8, 15): return "中秋。今晚月亮会很圆。"
            default: break
            }
        }
        if tomorrow?.month == 1, tomorrow?.day == 1 { return "除夕了。今晚陪你守岁。" }
        switch (g.month, g.day) {
        case (1, 1): return "元旦。新的一年，从第一小节写起。"
        case (2, 14): return "今天街上全是花。"
        case (5, 1): return "劳动节。今天就别太劳动了。"
        case (10, 1): return "国庆。放假还开着电脑呀。"
        case (12, 24): return "平安夜。窗外的灯换成红绿色了。"
        case (12, 31): return "今年最后一天了。"
        default: return nil
        }
    }
}

/// 专辑里每首歌的编曲参数。
///
/// **这一份会在音频线程上被读**，所以只放纯值类型、不放字符串：
/// 读一个带 String 的结构体会在实时线程上做引用计数（第 2 节音频那条约定）。
/// 歌名和日记在 `Story.chapters`，按下标对上。
struct SongSpec {
    /// `Progressions.all` 的下标。
    let progression: Int
    /// 主音 0…11（C = 0）。
    let key: Int
    let bpm: Double
    let swing: Double
    let mood: RadioMood
    /// `DrumPatterns.all` 的下标，留白段照旧换成 sparse。
    let drums: Int
    /// 旋律、鼓的随机种子。同一首歌每次放都一样，靠的就是它。
    let seed: UInt32
}

enum AlbumMusic {
    /// 和 `Story.chapters` 一一对应。每首的心情、速度和进行跟着那一页日记走：
    /// 开机声明亮、雨天沉一点、停电最慢最闷、星期一最快。
    static let tracks: [SongSpec] = [
        SongSpec(progression: 0, key: 2, bpm: 76, swing: 0.16, mood: .chill, drums: 0, seed: 0xB007_0001),
        SongSpec(progression: 6, key: 8, bpm: 69, swing: 0.13, mood: .melancholy, drums: 2, seed: 0x7A1E_0002),
        SongSpec(progression: 1, key: 5, bpm: 80, swing: 0.18, mood: .chill, drums: 1, seed: 0xC0FE_0003),
        SongSpec(progression: 7, key: 3, bpm: 72, swing: 0.15, mood: .chill, drums: 0, seed: 0x2307_0004),
        SongSpec(progression: 2, key: 7, bpm: 84, swing: 0.17, mood: .bright, drums: 4, seed: 0x5717_0005),
        SongSpec(progression: 5, key: 10, bpm: 82, swing: 0.22, mood: .chill, drums: 1, seed: 0xF0C5_0006),
        SongSpec(progression: 8, key: 0, bpm: 62, swing: 0.09, mood: .sleepy, drums: 3, seed: 0xDA4C_0007),
        SongSpec(progression: 11, key: 6, bpm: 68, swing: 0.12, mood: .melancholy, drums: 2, seed: 0x7A2C_0008),
        SongSpec(progression: 0, key: 4, bpm: 90, swing: 0.14, mood: .bright, drums: 4, seed: 0x3017_0009),
        SongSpec(progression: 3, key: 1, bpm: 74, swing: 0.16, mood: .chill, drums: 0, seed: 0x01DE_000A),
        SongSpec(progression: 10, key: 7, bpm: 66, swing: 0.11, mood: .melancholy, drums: 3, seed: 0x1E77_000B),
        SongSpec(progression: 4, key: 0, bpm: 74, swing: 0.16, mood: .chill, drums: 0, seed: 0x0417_000C),
    ]

    /// 小样的心情分布。静态常量：字面量数组在音频线程上每次都会分配。
    private static let demoMoods: [RadioMood] = [.chill, .chill, .bright, .melancholy, .sleepy]

    /// 第 i 首（i ≥ 12 是小样）的参数。纯计算，音频线程上调也不分配内存。
    static func spec(_ i: Int) -> SongSpec {
        if i >= 0 && i < tracks.count { return tracks[i] }
        // 小样：从下标散列出一组参数。和电台随机生成同一个取值范围，只是固定下来。
        var h = UInt64(truncatingIfNeeded: i) &* 0x9E37_79B9_7F4A_7C15
        func next(_ n: Int) -> Int {
            h ^= h >> 29; h = h &* 0xBF58_476D_1CE4_E5B9; h ^= h >> 32
            return Int(h % UInt64(n))
        }
        let mood = demoMoods[next(demoMoods.count)]
        let pool = Progressions.byMood[mood] ?? [0]
        let drums = DrumPatterns.byMood[mood] ?? [0]
        let range = mood.tempoRange
        let bpm = range.lowerBound + Double(next(1000)) / 1000 * (range.upperBound - range.lowerBound)
        return SongSpec(progression: pool[next(pool.count)], key: next(12), bpm: bpm,
                        swing: (bpm < 68 ? 0.08 : 0.12) + Double(next(100)) / 1000,
                        mood: mood, drums: drums[next(drums.count)],
                        seed: UInt32(truncatingIfNeeded: h >> 7) | 1)
    }
}

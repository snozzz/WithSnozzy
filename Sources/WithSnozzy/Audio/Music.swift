import Foundation

// MARK: - 和弦

/// 和弦性质。音程数组是相对根音的半音数。
///
/// 全部用七/九和弦而不是三和弦——这是 lofi 听起来"温"而不"直"的根本原因，
/// 三和弦太干净，会显得像儿歌。
enum ChordQuality {
    case maj7, maj9, min7, min9, dom7, dom9, m7b5, min6

    /// 无根音配置（rootless voicing）：钢琴不弹根音，把低频完全让给贝斯。
    /// 这是爵士键盘的标准做法，混音上干净得多。
    ///
    /// 返回的是**静态常量数组**而不是字面量。这些属性会在音频线程上被读到，
    /// 写成 `[4, 11, 14]` 每次调用都会分配一次内存——在实时线程上分配是禁忌，
    /// 一次 malloc 卡顿就是一声爆音。
    var voicing: [Int] {
        switch self {
        case .maj7: Tables.maj7Voicing
        case .maj9: Tables.maj9Voicing      // 3-7-9，最经典的 A 型配置
        case .min7: Tables.min7Voicing
        case .min9: Tables.min9Voicing
        case .dom7: Tables.dom7Voicing
        case .dom9: Tables.dom9Voicing
        case .m7b5: Tables.m7b5Voicing
        case .min6: Tables.min6Voicing
        }
    }

    /// 完整音程（含根音）。旋律生成时用来判断哪些音是和弦内音。
    var intervals: [Int] {
        switch self {
        case .maj7: Tables.maj7
        case .maj9: Tables.maj9
        case .min7: Tables.min7
        case .min9: Tables.min9
        case .dom7: Tables.dom7
        case .dom9: Tables.dom9
        case .m7b5: Tables.m7b5
        case .min6: Tables.min6
        }
    }
}

/// 和弦音程表。集中放在这里，既保证只分配一次，也方便调音色时统一查看。
private enum Tables {
    static let maj7 = [0, 4, 7, 11]
    static let maj9 = [0, 4, 7, 11, 14]
    static let min7 = [0, 3, 7, 10]
    static let min9 = [0, 3, 7, 10, 14]
    static let dom7 = [0, 4, 7, 10]
    static let dom9 = [0, 4, 7, 10, 14]
    static let m7b5 = [0, 3, 6, 10]
    static let min6 = [0, 3, 7, 9]

    static let maj7Voicing = [4, 7, 11]
    static let maj9Voicing = [4, 11, 14]
    static let min7Voicing = [3, 7, 10]
    static let min9Voicing = [3, 10, 14]
    static let dom7Voicing = [4, 7, 10]
    static let dom9Voicing = [4, 10, 14]
    static let m7b5Voicing = [3, 6, 10]
    static let min6Voicing = [3, 7, 9]
}

/// 一个和弦 = 相对调式主音的半音偏移 + 性质。
struct Chord {
    var degree: Int
    var quality: ChordQuality
}

// MARK: - 和弦进行

/// 一段进行模板：4 个和弦，每个占一小节。
struct Progression {
    let chords: [Chord]
    let isMinor: Bool
    let name: String
}

enum Progressions {
    /// 手挑的一组，都是 lofi / city pop 里反复出现的走向。
    /// 排在前面的更"亮"，后面的更"沉"，选曲时会按心情偏向取。
    static let all: [Progression] = [
        Progression(chords: [.init(degree: 0, quality: .maj9), .init(degree: 9, quality: .min9),
                             .init(degree: 2, quality: .min9), .init(degree: 7, quality: .dom9)],
                    isMinor: false, name: "I–vi–ii–V"),

        Progression(chords: [.init(degree: 0, quality: .maj9), .init(degree: 5, quality: .maj7),
                             .init(degree: 4, quality: .min7), .init(degree: 9, quality: .min9)],
                    isMinor: false, name: "I–IV–iii–vi"),

        Progression(chords: [.init(degree: 2, quality: .min9), .init(degree: 7, quality: .dom9),
                             .init(degree: 0, quality: .maj9), .init(degree: 0, quality: .maj9)],
                    isMinor: false, name: "ii–V–I"),

        Progression(chords: [.init(degree: 9, quality: .min9), .init(degree: 5, quality: .maj7),
                             .init(degree: 0, quality: .maj9), .init(degree: 7, quality: .dom9)],
                    isMinor: false, name: "vi–IV–I–V"),

        Progression(chords: [.init(degree: 0, quality: .min9), .init(degree: 8, quality: .maj7),
                             .init(degree: 5, quality: .min7), .init(degree: 7, quality: .dom7)],
                    isMinor: true, name: "i–VI–iv–V"),

        Progression(chords: [.init(degree: 0, quality: .min9), .init(degree: 10, quality: .maj7),
                             .init(degree: 8, quality: .maj7), .init(degree: 7, quality: .dom7)],
                    isMinor: true, name: "i–VII–VI–V"),

        Progression(chords: [.init(degree: 2, quality: .m7b5), .init(degree: 7, quality: .dom7),
                             .init(degree: 0, quality: .min9), .init(degree: 0, quality: .min6)],
                    isMinor: true, name: "iiø–V–i"),
    ]
}

// MARK: - 音阶

enum Scale {
    /// 大调五声音阶。在大调进行上随便取音都不会撞，是旋律生成最安全的底子。
    static let majorPentatonic = [0, 2, 4, 7, 9]
    /// 小调五声音阶。
    static let minorPentatonic = [0, 3, 5, 7, 10]
}

// MARK: - 鼓组型

/// 16 分音符网格上的一小节鼓型。数值是力度（0 = 不打）。
struct DrumPattern {
    let kick: [Double]
    let snare: [Double]
    let hat: [Double]
    /// 开镲位置，用来在小节末尾"翻"一下，避免循环感太强。
    let openHat: Set<Int>
}

enum DrumPatterns {
    private static let z = 0.0

    /// 最标准的 boom-bap：底鼓踩 1 和 3 前后，军鼓压 2、4 反拍。
    static let classic = DrumPattern(
        kick:  [1.0, z, z, z,  z, z, 0.7, z,  z, z, 0.9, z,  z, z, z, z],
        snare: [z, z, z, z,  1.0, z, z, z,  z, z, z, z,  1.0, z, z, z],
        hat:   [0.6, z, 0.3, z,  0.55, z, 0.3, z,  0.6, z, 0.3, z,  0.55, z, 0.34, z],
        openHat: [14]
    )

    /// 切分更多，底鼓推着走，适合稍快的段落。
    static let laidBack = DrumPattern(
        kick:  [1.0, z, z, 0.55, z, z, z, z,  0.95, z, z, z,  z, 0.6, z, z],
        snare: [z, z, z, z,  1.0, z, z, z,  z, z, 0.3, z,  1.0, z, z, 0.25],
        hat:   [0.55, z, 0.3, z,  0.55, z, 0.32, z,  0.55, z, 0.3, z,  0.55, z, 0.3, 0.25],
        openHat: [6]
    )

    /// 极简型。整首曲子偶尔切到这个，留白比密集更能让人放松。
    static let sparse = DrumPattern(
        kick:  [0.95, z, z, z,  z, z, z, z,  0.85, z, z, z,  z, z, z, z],
        snare: [z, z, z, z,  0.9, z, z, z,  z, z, z, z,  0.9, z, z, z],
        hat:   [0.4, z, z, z,  0.4, z, z, z,  0.4, z, z, z,  0.4, z, z, z],
        openHat: []
    )

    static let all = [classic, laidBack, sparse]
}

// MARK: - 配和声

/// 把和弦排成实际的 MIDI 音高。
///
/// 关键是**声部连接**：相邻和弦之间每个声部只走最短距离，
/// 否则钢琴会在八度之间乱跳，听起来像在弹练习曲而不是在陪你。
enum Voicer {
    /// 钢琴声部的音域中心（约 E4）。
    private static let center = 64.0

    /// - Parameters:
    ///   - previous: 上一个和弦的配置，用来做声部连接；空数组表示这是第一个和弦。
    ///   - out: 预分配的输出缓冲，避免在音频线程上分配内存。
    /// - Returns: 实际写入的音符数量。
    static func voice(
        chord: Chord, keyRoot: Int,
        previous: UnsafeMutablePointer<Double>, previousCount: Int,
        into out: UnsafeMutablePointer<Double>
    ) -> Int {
        let tones = chord.quality.voicing
        let base = keyRoot + chord.degree

        for (i, interval) in tones.enumerated() {
            let pitchClass = Double((base + interval) % 12)
            // 目标音高：优先贴近上一个和弦的同序号声部，没有就贴近音域中心。
            let anchor = i < previousCount ? previous[i] : center
            // 把这个音级挪到离锚点最近的八度。
            let octaves = (anchor - pitchClass) / 12.0
            var note = pitchClass + (octaves.rounded()) * 12.0
            // 夹在合理音域内，防止极端进行把声部推到听感刺耳的高音区。
            while note < 55 { note += 12 }
            while note > 79 { note -= 12 }
            out[i] = note
        }
        return tones.count
    }

    /// 贝斯音：根音，落在 MIDI 36–47（大字组 C 到 B）这个 lofi 最常用的低音区。
    static func bassNote(chord: Chord, keyRoot: Int) -> Double {
        let pc = (keyRoot + chord.degree) % 12
        return Double(36 + pc)
    }
}

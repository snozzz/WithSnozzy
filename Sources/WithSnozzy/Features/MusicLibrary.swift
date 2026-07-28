import AVFoundation
import AppKit
import Observation

/// 一首本地曲目。
struct Track: Identifiable, Hashable {
    let id: String          // 文件路径，天然唯一
    let url: URL
    let title: String

    init(url: URL) {
        self.url = url
        id = url.path
        // 用文件名当标题。
        //
        // 读 ID3 需要异步解析每个文件的元数据，几百首的文件夹会卡住选择流程。
        // 个人收藏的文件名本来就是「歌手 - 曲名」这种形式，直接用足够了。
        title = url.deletingPathExtension().lastPathComponent
    }
}

/// 播放来源。
enum MusicSource: String, Codable, CaseIterable {
    /// Snozzy 的电台：实时合成，无限不重复。
    case radio
    /// 本地音乐库。
    case library
    /// 系统的「音乐」App。我们只当遥控器，音频由它自己出。
    case appleMusic
    /// 让位模式：我们一声不吭，你用任何播放器放歌，这边只留环境音。
    case external

    var label: String {
        switch self {
        case .radio: "Snozzy 的电台"
        case .library: "本地音乐库"
        case .appleMusic: "音乐 App"
        case .external: "让位给其他播放器"
        }
    }

    var shortLabel: String {
        switch self {
        case .radio: "电台"
        case .library: "本地"
        case .appleMusic: "音乐 App"
        case .external: "让位"
        }
    }

    /// 音频是不是由我们自己产生。
    ///
    /// 外部来源下我们不出音乐，但**环境音照旧**——
    /// 你自己的歌垫上雨声和黑胶底噪，这才是接外部播放器的意义。
    var isExternal: Bool { self == .appleMusic || self == .external }
}

/// 本地音乐库的偏好，需要落盘的部分。
struct LibrarySettings: Codable {
    var folderPath: String?
    var shuffle = false
    var loop = true

    static let storeName = "library"
}

/// AVAudioPlayer 的代理。
/// 单独拆出来是因为 `@Observable` 和 `NSObject` 继承混在一起很容易出意外。
private final class PlaybackDelegate: NSObject, AVAudioPlayerDelegate {
    var onFinish: (@Sendable (Bool) -> Void)?

    func audioPlayerDidFinishPlaying(_ player: AVAudioPlayer, successfully flag: Bool) {
        onFinish?(flag)
    }

    func audioPlayerDecodeErrorDidOccur(_ player: AVAudioPlayer, error: Error?) {
        NSLog("[WithSnozzy] 解码失败: \(error?.localizedDescription ?? "未知")")
        onFinish?(false)
    }
}

/// 本地音乐库。
///
/// 这里用 `AVAudioPlayer` 而不是把文件挂进 `AVAudioEngine`。
/// 挂进引擎能让本地文件也过一遍磁带和黑胶效果，听起来很诱人，
/// 但要处理每个文件不同的采样率和声道数、要在切歌时重连节点，
/// 复杂度翻好几倍。播别人做好的音乐本来也不该再加一层染色。
@MainActor
@Observable
final class MusicLibrary {

    private(set) var tracks: [Track] = []
    private(set) var currentIndex: Int?
    private(set) var isPlaying = false
    private(set) var folder: URL?
    /// 扫描时的错误提示，直接显示给用户。
    private(set) var message: String?

    var shuffle = false { didSet { saver?.schedule() } }
    var loop = true { didSet { saver?.schedule() } }

    /// 0…1，跟主音量联动。
    var volume: Double = 0.7 {
        didSet { player?.volume = Float(pow(clamp(volume, 0, 1), 2.2)) }
    }

    private var player: AVAudioPlayer?
    private let delegate = PlaybackDelegate()
    private var saver: DebouncedSaver?
    /// 随机播放时已经放过的曲目，避免在放完一轮之前重复。
    private var playedInShuffle: Set<String> = []

    /// 支持的扩展名。AVAudioPlayer 能放的都在这儿了。
    private static let audioExtensions: Set<String> = [
        "mp3", "m4a", "aac", "wav", "aif", "aiff", "caf", "alac", "flac",
    ]

    var currentTrack: Track? {
        guard let i = currentIndex, tracks.indices.contains(i) else { return nil }
        return tracks[i]
    }

    init() {
        let settings = Store.load(LibrarySettings.storeName, as: LibrarySettings.self) ?? LibrarySettings()
        shuffle = settings.shuffle
        loop = settings.loop
        saver = DebouncedSaver { [weak self] in
            guard let self else { return }
            Store.save(LibrarySettings(folderPath: self.folder?.path,
                                       shuffle: self.shuffle, loop: self.loop),
                       as: LibrarySettings.storeName)
        }

        delegate.onFinish = { [weak self] _ in
            MainActor.assumeIsolated { self?.advance(auto: true) }
        }

        if let path = settings.folderPath {
            scan(URL(fileURLWithPath: path))
        }
    }

    // MARK: - 选择与扫描

    func chooseFolder() {
        let panel = NSOpenPanel()
        panel.canChooseDirectories = true
        panel.canChooseFiles = false
        panel.allowsMultipleSelection = false
        panel.prompt = "选择"
        panel.message = "选一个放着音乐的文件夹，子文件夹也会一起扫描。"
        guard panel.runModal() == .OK, let url = panel.url else { return }
        scan(url)
        saver?.schedule()
    }

    func rescan() {
        guard let folder else { return }
        scan(folder)
    }

    private func scan(_ url: URL) {
        folder = url
        message = nil

        let fm = FileManager.default
        guard let walker = fm.enumerator(
            at: url,
            includingPropertiesForKeys: [.isRegularFileKey],
            options: [.skipsHiddenFiles, .skipsPackageDescendants])
        else {
            message = "无法读取这个文件夹"
            tracks = []
            return
        }

        var found: [Track] = []
        for case let file as URL in walker {
            guard Self.audioExtensions.contains(file.pathExtension.lowercased()) else { continue }
            found.append(Track(url: file))
            // 上限保护：个人收藏不会有这么多，真有的话说明选错了目录（比如整个家目录）。
            if found.count >= 5000 { break }
        }

        tracks = found.sorted { $0.title.localizedStandardCompare($1.title) == .orderedAscending }
        currentIndex = nil
        playedInShuffle = []
        if tracks.isEmpty { message = "这个文件夹里没找到音频文件" }
    }

    // MARK: - 播放

    func play(at index: Int) {
        guard tracks.indices.contains(index) else { return }
        currentIndex = index
        let track = tracks[index]
        playedInShuffle.insert(track.id)

        do {
            let p = try AVAudioPlayer(contentsOf: track.url)
            p.delegate = delegate
            p.volume = Float(pow(clamp(volume, 0, 1), 2.2))
            p.prepareToPlay()
            p.play()
            player = p
            isPlaying = true
            message = nil
        } catch {
            // 单个文件坏掉不该卡住整个播放列表，跳过继续。
            message = "无法播放 \(track.title)"
            NSLog("[WithSnozzy] 打开失败 \(track.url.lastPathComponent): \(error.localizedDescription)")
            advance(auto: true)
        }
    }

    func resume() {
        if player == nil {
            guard !tracks.isEmpty else { return }
            play(at: currentIndex ?? 0)
        } else {
            player?.play()
            isPlaying = true
        }
    }

    func pause() {
        player?.pause()
        isPlaying = false
    }

    func stop() {
        player?.stop()
        player = nil
        isPlaying = false
    }

    func next() { advance(auto: false) }

    func previous() {
        guard !tracks.isEmpty else { return }
        // 播过 3 秒以上就回到本曲开头，这是所有播放器的通行约定。
        if let p = player, p.currentTime > 3 {
            p.currentTime = 0
            return
        }
        let i = ((currentIndex ?? 0) - 1 + tracks.count) % tracks.count
        play(at: i)
    }

    /// - Parameter auto: 是自动播完切歌（true）还是用户手动点的下一首（false）。
    ///   自动切歌时如果不循环就停下来；手动点则总是往下走。
    private func advance(auto: Bool) {
        guard !tracks.isEmpty else { stop(); return }

        if shuffle {
            if playedInShuffle.count >= tracks.count { playedInShuffle = [] }
            let remaining = tracks.indices.filter { !playedInShuffle.contains(tracks[$0].id) }
            if let pick = remaining.randomElement() {
                play(at: pick)
                return
            }
        }

        let nextIndex = (currentIndex ?? -1) + 1
        if nextIndex >= tracks.count {
            if loop || !auto {
                play(at: 0)
            } else {
                stop()
            }
        } else {
            play(at: nextIndex)
        }
    }

    func flush() { saver?.flush() }
}

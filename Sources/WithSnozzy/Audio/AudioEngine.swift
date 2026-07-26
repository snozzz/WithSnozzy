import AVFoundation
import Foundation

/// 音频的主线程门面：装配 AVAudioEngine、管理播放/暂停的淡入淡出、
/// 以及输出设备切换后的重建。
///
/// 音乐和环境音是**两个独立的源节点**挂在同一张图上。分开的原因是它们的
/// 开关互不相干——很多时候人只想听雨声不想听音乐。共用一个引擎则是为了
/// 让设备切换、采样率协商这些麻烦事只处理一遍。
@MainActor
final class AudioEngine {

    private var engine = AVAudioEngine()
    private var synth: LofiSynth
    private var ambience: AmbienceMixer
    private var musicNode: AVAudioSourceNode?
    private var ambienceNode: AVAudioSourceNode?
    private var stopWork: DispatchWorkItem?

    private(set) var isPlaying = false

    /// 0…1 的用户音量（只影响音乐）。
    var volume: Double = 0.7 {
        didSet { if isPlaying { synth.targetGain = outputGain } }
    }

    /// 感知音量映射。线性音量调到一半听起来还是很响，
    /// 取 2.2 次方后滑杆的中点才真的像「一半」。0.8 是留给效果链的余量。
    private var outputGain: Double { pow(clamp(volume, 0, 1), 2.2) * 0.8 }

    init() {
        let sampleRate = Self.hardwareSampleRate(engine)
        synth = LofiSynth(sampleRate: sampleRate)
        ambience = AmbienceMixer(sampleRate: sampleRate)
        buildGraph(sampleRate: sampleRate)

        NotificationCenter.default.addObserver(
            forName: .AVAudioEngineConfigurationChange,
            object: engine, queue: .main
        ) { [weak self] _ in
            MainActor.assumeIsolated { self?.handleConfigurationChange() }
        }
    }

    // MARK: - 播放控制

    func play() {
        // 彻底静音过才重头开始；只是短暂暂停的话接着放，不打断乐句。
        if synth.isSilent { synth.restart() }
        isPlaying = true
        synth.targetGain = outputGain
        syncEngine()
    }

    func pause() {
        isPlaying = false
        synth.targetGain = 0
        syncEngine()
    }

    func toggle() { isPlaying ? pause() : play() }

    /// 换一首。合成器会在下一个小节线上切换，所以不会切在半句上。
    func next() { synth.regenerateRequested = true }

    // MARK: - 环境音

    func ambienceLevel(_ sound: Ambience) -> Double { ambience.level(sound) }

    func setAmbienceLevel(_ sound: Ambience, _ value: Double) {
        ambience.setLevel(sound, value)
        syncEngine()
    }

    func clearAmbience() {
        for s in Ambience.allCases { ambience.setLevel(s, 0) }
        syncEngine()
    }

    var hasAmbience: Bool { ambience.isActive }

    // MARK: - 引擎生命周期

    /// 音乐或环境音任一在响，引擎就得跑；都停了就淡出后挂起。
    private func syncEngine() {
        stopWork?.cancel()
        stopWork = nil

        if isPlaying || ambience.isActive {
            guard !engine.isRunning else { return }
            do { try engine.start() } catch {
                NSLog("[WithSnozzy] 音频引擎启动失败: \(error.localizedDescription)")
            }
            return
        }

        // 先等淡出走完再挂起，否则会有一声爆音。
        // 用 pause() 而不是 stop()：图保持装配状态，恢复几乎没有延迟。
        let work = DispatchWorkItem { [weak self] in
            guard let self, !self.isPlaying, !self.ambience.isActive else { return }
            self.engine.pause()
        }
        stopWork = work
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.7, execute: work)
    }

    // MARK: - 给 UI 读的状态

    private static let noteNames = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"]

    /// 形如「E♭大调 · I–vi–ii–V」。
    var trackTitle: String {
        let key = Self.noteNames[synth.keyRoot % 12]
        let mode = synth.isMinor ? "小调" : "大调"
        let prog = Progressions.all[synth.progressionIndex].name
        return "\(key)\(mode) · \(prog)"
    }

    var tempoText: String { "\(Int(synth.bpm.rounded())) BPM" }

    /// 底鼓的视觉脉冲，0…1。角色和场景用它跟上节奏。
    var kickPulse: Double { synth.kickPulse }

    /// 自检探针的挂载点。见 `AudioSelfTest`。
    var probeTarget: AVAudioNode { engine.mainMixerNode }

    // MARK: - 图的装配

    private static func hardwareSampleRate(_ engine: AVAudioEngine) -> Double {
        // 读 outputNode 的格式前必须先碰一下 mainMixerNode，否则拿到的是 0。
        _ = engine.mainMixerNode
        let rate = engine.outputNode.outputFormat(forBus: 0).sampleRate
        return rate > 0 ? rate : 44100
    }

    private func buildGraph(sampleRate: Double) {
        guard let format = AVAudioFormat(standardFormatWithSampleRate: sampleRate, channels: 2) else {
            NSLog("[WithSnozzy] 无法创建音频格式")
            return
        }

        let synth = self.synth
        let music = AVAudioSourceNode(format: format) { _, _, frameCount, ablPointer in
            guard let (l, r) = Self.stereoBuffers(ablPointer) else { return noErr }
            synth.render(left: l, right: r, frames: Int(frameCount))
            return noErr
        }

        let ambience = self.ambience
        let air = AVAudioSourceNode(format: format) { _, _, frameCount, ablPointer in
            guard let (l, r) = Self.stereoBuffers(ablPointer) else { return noErr }
            ambience.render(left: l, right: r, frames: Int(frameCount))
            return noErr
        }

        engine.attach(music)
        engine.attach(air)
        engine.connect(music, to: engine.mainMixerNode, format: format)
        engine.connect(air, to: engine.mainMixerNode, format: format)
        musicNode = music
        ambienceNode = air
    }

    /// 声明的是双声道非交错格式，所以这里一定是两个独立缓冲区。
    private static func stereoBuffers(
        _ ablPointer: UnsafeMutablePointer<AudioBufferList>
    ) -> (UnsafeMutablePointer<Float>, UnsafeMutablePointer<Float>)? {
        let abl = UnsafeMutableAudioBufferListPointer(ablPointer)
        guard abl.count >= 2,
              let l = abl[0].mData?.assumingMemoryBound(to: Float.self),
              let r = abl[1].mData?.assumingMemoryBound(to: Float.self)
        else { return nil }
        return (l, r)
    }

    /// 用户切换输出设备（比如插上耳机）时，采样率可能变了，整张图要重建。
    private func handleConfigurationChange() {
        let wasPlaying = isPlaying
        let savedVolume = volume
        let savedAmbience = Ambience.allCases.map { ambience.level($0) }

        engine.stop()
        if let n = musicNode { engine.detach(n) }
        if let n = ambienceNode { engine.detach(n) }
        musicNode = nil
        ambienceNode = nil
        engine = AVAudioEngine()

        let sampleRate = Self.hardwareSampleRate(engine)
        synth = LofiSynth(sampleRate: sampleRate)
        ambience = AmbienceMixer(sampleRate: sampleRate)
        for (i, s) in Ambience.allCases.enumerated() { ambience.setLevel(s, savedAmbience[i]) }
        volume = savedVolume
        buildGraph(sampleRate: sampleRate)

        if wasPlaying { play() } else { syncEngine() }
    }
}

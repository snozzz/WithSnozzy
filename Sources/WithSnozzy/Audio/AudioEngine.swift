import AVFoundation
import Foundation

/// 音频的主线程门面：装配 AVAudioEngine、管理播放/暂停的淡入淡出、
/// 以及输出设备切换后的重建。
///
/// 音乐和环境音共用一个源节点：合成器先写进缓冲区，环境音再叠上去。
///
/// 它们的开关是互相独立的（很多时候人只想听雨声不想听音乐），
/// 但这个独立性来自「是否发声」，不需要靠两个节点来实现。
/// 实测每多一个 AVAudioSourceNode 就多一整条 AU 桥接链，值几个百分点的 CPU。
@MainActor
final class AudioEngine {

    private var engine = AVAudioEngine()
    private var synth: LofiSynth
    private var ambience: AmbienceMixer
    /// 音乐和环境音共用**一个**源节点。
    /// AVAudioEngine 里每多一个节点就多一整条 AU 桥接链，实测能占到几个百分点。
    private var sourceNode: AVAudioSourceNode?
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

    /// 电台心情。只影响下一首，不打断正在放的这首。
    var radioMood: RadioMood {
        get { synth.mood }
        set { synth.mood = newValue }
    }

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

    /// 番茄钟阶段切换的提示音。走环境音那一路，所以音乐没在放也能响。
    func chime(rising: Bool) {
        ambience.triggerChime(rising: rising)
        syncEngine()
    }

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
    /// 挂在源节点上而不是混音器上——图里已经没有混音器了。
    var probeTarget: AVAudioNode? { sourceNode }

    /// 图上各节点协商出来的格式。诊断重采样问题用。
    var debugFormats: [(String, AVAudioFormat)] {
        var out: [(String, AVAudioFormat)] = []
        if let n = sourceNode { out.append(("源节点", n.outputFormat(forBus: 0))) }
        out.append(("输出节点输入", engine.outputNode.inputFormat(forBus: 0)))
        out.append(("输出节点输出", engine.outputNode.outputFormat(forBus: 0)))
        return out
    }

    // MARK: - 图的装配

    private static func hardwareSampleRate(_ engine: AVAudioEngine) -> Double {
        // 刻意**不碰** mainMixerNode。
        //
        // 常见写法是先访问一下 mainMixerNode 再读 outputNode 的格式，
        // 但访问它会把混音器实例化并接进图里。我们只有一个源节点，
        // 混音器什么也没做，却要多走一整条 AU 桥接和格式转换链——
        // 采样显示那条链占了播放时一半以上的音频线程时间。
        let rate = engine.outputNode.outputFormat(forBus: 0).sampleRate
        if rate > 0 { return rate }
        // 万一拿不到（某些设备上要先实例化混音器），再退回老办法。
        _ = engine.mainMixerNode
        let fallback = engine.outputNode.outputFormat(forBus: 0).sampleRate
        return fallback > 0 ? fallback : 44100
    }

    private func buildGraph(sampleRate: Double) {
        guard let format = AVAudioFormat(standardFormatWithSampleRate: sampleRate, channels: 2) else {
            NSLog("[WithSnozzy] 无法创建音频格式")
            return
        }

        let synth = self.synth
        let ambience = self.ambience
        let node = AVAudioSourceNode(format: format) { _, _, frameCount, ablPointer in
            guard let (l, r) = Self.stereoBuffers(ablPointer) else { return noErr }
            let n = Int(frameCount)
            // 音乐先写进缓冲区，环境音再叠上去。
            synth.render(left: l, right: r, frames: n)
            ambience.mix(left: l, right: r, frames: n)
            return noErr
        }

        engine.attach(node)
        // 直连输出节点，绕开 mainMixerNode。
        engine.connect(node, to: engine.outputNode, format: format)
        sourceNode = node
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
        let savedMood = synth.mood
        let savedAmbience = Ambience.allCases.map { ambience.level($0) }

        engine.stop()
        if let n = sourceNode { engine.detach(n) }
        sourceNode = nil
        engine = AVAudioEngine()

        let sampleRate = Self.hardwareSampleRate(engine)
        synth = LofiSynth(sampleRate: sampleRate)
        synth.mood = savedMood
        ambience = AmbienceMixer(sampleRate: sampleRate)
        for (i, s) in Ambience.allCases.enumerated() { ambience.setLevel(s, savedAmbience[i]) }
        volume = savedVolume
        buildGraph(sampleRate: sampleRate)

        if wasPlaying { play() } else { syncEngine() }
    }
}

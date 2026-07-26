import AVFoundation
import Foundation

/// 音频链路自检。
///
/// 离线渲染只能证明合成器算得对，证明不了声音真的送到了输出设备——
/// 采样率协商、设备连接、渲染回调这些环节都在 AVAudioEngine 里面。
/// 这里在总线上挂一个 tap，实测有多少样本真正流过 CoreAudio。
///
/// ```
/// WithSnozzy.app/Contents/MacOS/WithSnozzy --selftest
/// ```
enum AudioSelfTest {

    static var isRequested: Bool { CommandLine.arguments.contains("--selftest") }

    /// 统计探针。tap 在 CoreAudio 的线程上回调，所以要加锁。
    private final class Probe: @unchecked Sendable {
        private let lock = NSLock()
        private(set) var peak: Float = 0
        private(set) var frames = 0
        private(set) var callbacks = 0

        func record(_ buffer: AVAudioPCMBuffer) {
            guard let data = buffer.floatChannelData else { return }
            let n = Int(buffer.frameLength)
            var localPeak: Float = 0
            for ch in 0..<Int(buffer.format.channelCount) {
                for i in 0..<n { localPeak = max(localPeak, abs(data[ch][i])) }
            }
            lock.lock()
            peak = max(peak, localPeak)
            frames += n
            callbacks += 1
            lock.unlock()
        }
    }

    @MainActor
    static func run() {
        let audio = AudioEngine()
        audio.volume = 0.8

        let probe = Probe()
        audio.installProbe(bufferSize: 4096) { probe.record($0) }
        audio.play()

        let seconds = 3.0
        print("自检中：播放 \(Int(seconds)) 秒并统计流过输出总线的样本…")

        DispatchQueue.main.asyncAfter(deadline: .now() + seconds) {
            audio.removeProbe()
            audio.pause()

            let expected = Int(seconds * 44100 * 0.8)   // 留 20% 余量给启动延迟
            let ok = probe.frames > expected && probe.peak > 0.01

            print("  回调次数   \(probe.callbacks)")
            print("  样本数     \(probe.frames)")
            print(String(format: "  峰值电平   %.4f", probe.peak))
            print("  曲目       \(audio.trackTitle) · \(audio.tempoText)")
            print(ok ? "✅ 音频链路正常" : "❌ 输出异常：没有足够的样本流过，或输出为静音")

            exit(ok ? 0 : 1)
        }
    }
}

extension AudioEngine {
    /// 在总线上挂一个只读探针。仅用于自检，正常播放路径不受影响。
    func installProbe(bufferSize: AVAudioFrameCount, _ handler: @escaping @Sendable (AVAudioPCMBuffer) -> Void) {
        probeTarget.installTap(onBus: 0, bufferSize: bufferSize, format: nil) { buffer, _ in
            handler(buffer)
        }
    }

    func removeProbe() {
        probeTarget.removeTap(onBus: 0)
    }
}

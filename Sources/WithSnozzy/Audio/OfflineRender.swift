import Foundation

/// 离线渲染：不开窗口，直接把合成器的输出写成 WAV。
///
/// ```
/// WithSnozzy.app/Contents/MacOS/WithSnozzy --render out.wav 30
/// ```
///
/// 调音色的时候比反复开 app 试听快得多，也让合成器本身变得可测——
/// 可以直接对输出做峰值/RMS 检查，不用靠耳朵判断有没有削顶或静音。
enum OfflineRender {

    /// 命令行里带 `--render` 就渲染完直接退出，不进入 GUI。
    static func runIfRequested() {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: "--render"), i + 1 < args.count else { return }

        let path = args[i + 1]
        let seconds = (i + 2 < args.count ? Double(args[i + 2]) : nil) ?? 30

        do {
            let stats = try render(to: path, seconds: seconds)
            print("已写入 \(path)")
            print(String(format: "  时长 %.1fs  峰值 %.3f  RMS %.4f  削顶样本 %d",
                         seconds, stats.peak, stats.rms, stats.clipped))
        } catch {
            print("渲染失败: \(error.localizedDescription)")
            exit(1)
        }
        exit(0)
    }

    struct Stats {
        var peak: Double
        var rms: Double
        var clipped: Int
    }

    static func render(to path: String, seconds: Double) throws -> Stats {
        let sr = 44100.0
        let synth = LofiSynth(sampleRate: sr)
        synth.targetGain = 0.8
        synth.restart()

        let names = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"]
        print("曲目: \(names[synth.keyRoot % 12])\(synth.isMinor ? "小调" : "大调")"
              + " · \(Progressions.all[synth.progressionIndex].name)"
              + " · \(Int(synth.bpm.rounded())) BPM")

        let total = Int(seconds * sr)
        let block = 512

        var pcm = [Int16]()
        pcm.reserveCapacity(total * 2)

        let l = UnsafeMutablePointer<Float>.allocate(capacity: block)
        let r = UnsafeMutablePointer<Float>.allocate(capacity: block)
        defer { l.deallocate(); r.deallocate() }

        var peak = 0.0, sumSquares = 0.0, clipped = 0
        var done = 0

        while done < total {
            let n = min(block, total - done)
            synth.render(left: l, right: r, frames: n)
            for k in 0..<n {
                for v in [Double(l[k]), Double(r[k])] {
                    let s = v.isFinite ? v : 0
                    peak = max(peak, abs(s))
                    sumSquares += s * s
                    if abs(s) >= 0.999 { clipped += 1 }
                    pcm.append(Int16(clamp(s, -1, 1) * 32767))
                }
            }
            done += n
        }

        try writeWAV(pcm: pcm, sampleRate: Int(sr), path: path)

        let count = Double(max(1, pcm.count))
        return Stats(peak: peak, rms: (sumSquares / count).squareRoot(), clipped: clipped)
    }

    /// 最小可用的 16 位 PCM WAV 封装。
    private static func writeWAV(pcm: [Int16], sampleRate: Int, path: String) throws {
        let channels = 2, bitsPerSample = 16
        let byteRate = sampleRate * channels * bitsPerSample / 8
        let blockAlign = channels * bitsPerSample / 8
        let dataSize = pcm.count * 2

        var data = Data(capacity: 44 + dataSize)
        func ascii(_ s: String) { data.append(contentsOf: s.utf8) }
        func u32(_ v: Int) { withUnsafeBytes(of: UInt32(v).littleEndian) { data.append(contentsOf: $0) } }
        func u16(_ v: Int) { withUnsafeBytes(of: UInt16(v).littleEndian) { data.append(contentsOf: $0) } }

        ascii("RIFF"); u32(36 + dataSize); ascii("WAVE")
        ascii("fmt "); u32(16); u16(1); u16(channels)
        u32(sampleRate); u32(byteRate); u16(blockAlign); u16(bitsPerSample)
        ascii("data"); u32(dataSize)

        pcm.withUnsafeBufferPointer { buf in
            buf.baseAddress.map { data.append(UnsafeBufferPointer(start: $0, count: buf.count)) }
        }

        try data.write(to: URL(fileURLWithPath: path))
    }
}

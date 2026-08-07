import AVFoundation
import Foundation

/// 她的声音从哪儿来。
///
/// 系统 TTS 的中文声音**全是 compact 档**（实测 21 个 quality 都是 1），
/// 再怎么变调也只是"系统音变调"，出不了二次元配音那个质感。所以留一条口子
/// 接本机的语音合成服务（GPT-SoVITS 那一类），把音色这件事交出去。
///
/// 服务是**外部工具**，和 Blender、codex 同一个性质：不进 Swift 包、
/// 不算第三方依赖，没装也不影响 app 跑——`system` 那一档永远可用。
enum VoiceEngine: String, Codable, CaseIterable, Identifiable {
    /// 系统自带（`AVSpeechSynthesizer`）。零依赖、零延迟、永远能用。
    case system
    /// 本机跑的语音合成服务。音色好得多，代价是要另外起一个进程。
    case local

    var id: String { rawValue }

    var label: String {
        switch self {
        case .system: "系统声音（快，但是系统音）"
        case .local: "本机合成服务（二次元音色）"
        }
    }
}

/// 跟本机语音合成服务说话。
///
/// ## 协议刻意做得很笨
///
/// POST 一段 JSON，回一段音频，就这样。**不绑定任何一个具体的引擎**——
/// GPT-SoVITS、CosyVoice、IndexTTS 这些的接口各不相同而且一直在变，
/// 把它们的差异全塞进 Swift 里，换个引擎就要重写一遍。
///
/// 所以中间垫一层：`Scripts/tts_server.py` 负责把这个笨协议翻译成具体引擎的
/// 调用。换引擎只动那个 Python 文件，Swift 这边一行都不用改。
///
/// ## 为什么整段合成而不是流式
///
/// 这一层是**按句子**喂进来的（`Speaking` 已经把回复切成句子了），
/// 一句话两三秒，整段合成再播完全够用。流式要处理分块解码和拼接，
/// 复杂度高一个量级，换来的只是每句省几百毫秒。
@MainActor
final class LocalVoice {

    /// 服务地址。端口写死在 `Scripts/tts_server.py` 里，两边要一致。
    static let endpoint = URL(string: "http://127.0.0.1:9880/tts")!
    /// 一句话最多等多久。本机合成一句中文通常一两秒；超过这个数就别等了，
    /// 让她这句话哑掉也比整个对话卡住强。
    private static let timeout: TimeInterval = 20

    /// 服务在不在。启动时探一次，用来决定设置面板里那一档能不能选。
    private(set) var isReachable = false
    private(set) var lastError: String?

    /// 合成一句，拿到音频数据。失败返回 nil——调用方负责退回系统 TTS。
    func synthesize(_ text: String) async -> Data? {
        var req = URLRequest(url: Self.endpoint)
        req.httpMethod = "POST"
        req.timeoutInterval = Self.timeout
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")
        req.httpBody = try? JSONSerialization.data(withJSONObject: ["text": text])
        do {
            let (data, response) = try await URLSession.shared.data(for: req)
            guard let http = response as? HTTPURLResponse, http.statusCode == 200 else {
                lastError = "服务返回 \((response as? HTTPURLResponse)?.statusCode ?? -1)"
                return nil
            }
            isReachable = true
            lastError = nil
            return data
        } catch {
            isReachable = false
            // 服务没起来是最常见的情况，单独说清楚，别让用户去查网络
            lastError = (error as NSError).code == NSURLErrorCannotConnectToHost
                ? "本机合成服务没在跑（先跑 Scripts/tts_serve.sh）"
                : error.localizedDescription
            return nil
        }
    }

    /// 探一下服务在不在。**不合成**，只问一声，所以很快。
    func probe() async {
        var req = URLRequest(url: Self.endpoint.deletingLastPathComponent()
            .appendingPathComponent("health"))
        req.timeoutInterval = 3
        guard let (_, response) = try? await URLSession.shared.data(for: req),
              (response as? HTTPURLResponse)?.statusCode == 200 else {
            isReachable = false
            return
        }
        isReachable = true
        lastError = nil
    }
}

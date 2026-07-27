#if LIVE2D

import Foundation

/// 一份 Live2D 素材：`.model3.json` 加上它引用到的文件。
///
/// `.model3.json` 是纯 JSON 清单，用系统的 `JSONDecoder` 就够了，
/// 不需要 SDK 里那套 C++ 的解析器。
struct Live2DAsset {

    let directory: URL
    let mocURL: URL
    let textureURLs: [URL]
    let physicsURL: URL?
    /// 动作分组名 → 动作文件。目前还没用上，先解析出来备用。
    let motions: [String: [URL]]

    private struct Manifest: Decodable {
        struct Files: Decodable {
            let Moc: String
            let Textures: [String]
            let Physics: String?
            let Motions: [String: [MotionEntry]]?
        }
        struct MotionEntry: Decodable {
            let File: String
        }
        let FileReferences: Files
    }

    enum LoadError: Error, CustomStringConvertible {
        case unreadable(String)
        case badManifest(String)
        case missingFile(String)

        var description: String {
            switch self {
            case .unreadable(let p): "读不到 \(p)"
            case .badManifest(let m): "model3.json 解析失败: \(m)"
            case .missingFile(let p): "清单引用的文件不存在: \(p)"
            }
        }
    }

    init(model3Path: String) throws {
        let url = URL(fileURLWithPath: model3Path)
        directory = url.deletingLastPathComponent()

        guard let data = try? Data(contentsOf: url) else {
            throw LoadError.unreadable(model3Path)
        }
        let manifest: Manifest
        do {
            manifest = try JSONDecoder().decode(Manifest.self, from: data)
        } catch {
            throw LoadError.badManifest(error.localizedDescription)
        }

        let files = manifest.FileReferences
        mocURL = directory.appendingPathComponent(files.Moc)
        guard FileManager.default.fileExists(atPath: mocURL.path) else {
            throw LoadError.missingFile(mocURL.path)
        }

        var textures: [URL] = []
        for t in files.Textures {
            let u = directory.appendingPathComponent(t)
            guard FileManager.default.fileExists(atPath: u.path) else {
                throw LoadError.missingFile(u.path)
            }
            textures.append(u)
        }
        textureURLs = textures

        if let p = files.Physics {
            let u = directory.appendingPathComponent(p)
            physicsURL = FileManager.default.fileExists(atPath: u.path) ? u : nil
        } else {
            physicsURL = nil
        }

        var groups: [String: [URL]] = [:]
        // 用局部变量而不是 self.directory：闭包在所有成员初始化完成前不能捕获 self。
        let dir = directory
        for (name, entries) in files.Motions ?? [:] {
            groups[name] = entries.map { dir.appendingPathComponent($0.File) }
        }
        motions = groups
    }

    /// 在给定目录下找第一个 `.model3.json`。
    /// 模型压缩包的目录层级各家不一样，与其写死路径不如扫一遍。
    static func find(in root: String) -> String? {
        let fm = FileManager.default
        guard let walker = fm.enumerator(atPath: root) else { return nil }
        var found: [String] = []
        for case let path as String in walker where path.hasSuffix(".model3.json") {
            found.append((root as NSString).appendingPathComponent(path))
        }
        // 有些包同时带 free 和 pro 两版，排序后取第一个，保证每次结果一致。
        return found.sorted().first
    }
}

#endif

import Foundation
import Observation
#if LIVE2D
import Metal
#endif

/// 角色的渲染方式。
enum CharacterStyle: String, CaseIterable, Codable, Identifiable {
    /// 纯代码矢量绘制的 Snozzy。
    case vector
    /// Blender 离线渲染出来的图层。
    case rendered
    /// Live2D 模型。
    case live2d

    var id: String { rawValue }

    var label: String {
        switch self {
        case .vector: "矢量 Snozzy"
        case .rendered: "渲染 Snozzy"
        case .live2d: "Live2D 模型"
        }
    }
}

/// 管理 Live2D 模型的加载状态。
///
/// 加载是**惰性且可失败**的：没装 Cubism Core、没放模型、模型损坏——
/// 任何一种情况都只是回落到矢量绘制，不影响 app 的其它部分。
/// 这个应用的主体不该被一个可选的第三方 SDK 绑架。
@MainActor
@Observable
final class Live2DStage {

    enum Status: Equatable {
        /// 这个构建没编进 Live2D 支持（Vendor/CubismCore 缺失）。
        case unavailable
        case notLoaded
        case loading
        case ready
        case failed(String)

        var isReady: Bool { self == .ready }

        var message: String {
            switch self {
            case .unavailable: "此构建未包含 Live2D 支持"
            case .notLoaded: "未加载"
            case .loading: "加载中…"
            case .ready: "已加载"
            case .failed(let m): m
            }
        }
    }

    private(set) var status: Status = {
#if LIVE2D
        .notLoaded
#else
        .unavailable
#endif
    }()

    /// 模型所在目录。用户可以在设置里换。
    var modelDirectory: String = "hiyori_en/hiyori_free"

    private(set) var modelName: String = ""

#if LIVE2D
    private(set) var renderer: Live2DRenderer?

    /// 加载模型。已经加载过就直接返回。
    func loadIfNeeded() {
        guard status == .notLoaded || isFailed else { return }
        status = .loading

        guard let device = MTLCreateSystemDefaultDevice() else {
            status = .failed("没有可用的 Metal 设备")
            return
        }
        guard let model3 = Live2DAsset.find(in: modelDirectory) else {
            status = .failed("\(modelDirectory) 下没找到 .model3.json")
            return
        }

        do {
            let asset = try Live2DAsset(model3Path: model3)
            let model = try CubismModel(mocPath: asset.mocURL.path)
            let r = try Live2DRenderer(model: model, textureURLs: asset.textureURLs, device: device)
            renderer = r
            modelName = asset.mocURL.deletingPathExtension().lastPathComponent
            status = .ready
        } catch {
            renderer = nil
            status = .failed("\(error)")
        }
    }

    private var isFailed: Bool {
        if case .failed = status { return true }
        return false
    }

    func unload() {
        renderer = nil
        modelName = ""
        status = .notLoaded
    }
#else
    func loadIfNeeded() {}
    func unload() {}
#endif
}

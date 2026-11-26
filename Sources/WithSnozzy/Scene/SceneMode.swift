import CoreGraphics
import Foundation
import Observation

/// The complete scene renderer. CharacterStyle remains the 2.5D character
/// selector; this switch deliberately replaces the whole room so the two
/// experiences can be compared without mixing coordinate systems.
enum SceneMode: String, CaseIterable, Codable, Identifiable {
    case twoPointFiveD
    case realtime3DExperimental

    var id: String { rawValue }

    var label: String {
        switch self {
        case .twoPointFiveD: "2.5D 插画房间"
        case .realtime3DExperimental: "3D 沉浸房间"
        }
    }

    var shortLabel: String {
        switch self {
        case .twoPointFiveD: "2.5D"
        case .realtime3DExperimental: "3D"
        }
    }

    var explanation: String {
        switch self {
        case .twoPointFiveD: "手绘分层插画房间，轻量省电。"
        case .realtime3DExperimental: "实时 3D 房间，支持镜头漫游、动态光影、表情口型与桌面物品交互。"
        }
    }
}

/// Authored camera presets matching `SnozzyRoom3DManifest.json`.
enum Realtime3DCameraPreset: String, CaseIterable, Identifiable {
    case overview
    case desk
    case closeup
    case window

    var id: String { rawValue }

    var label: String {
        switch self {
        case .overview: "全景"
        case .desk: "桌面"
        case .closeup: "近景"
        case .window: "窗边"
        }
    }

    var symbol: String {
        switch self {
        case .overview: "rectangle.3.group"
        case .desk: "desktopcomputer"
        case .closeup: "person.crop.circle"
        case .window: "window.vertical.open"
        }
    }
}

/// Small bridge state shared by SwiftUI controls and the non-persistent
/// WKWebView session. It contains no model data and is intentionally not
/// persisted with AppSettings.
enum Realtime3DAction: String, CaseIterable, Identifiable {
    case typing
    case coffee
    case phone
    case stand
    case write
    case chin_rest
    case listen
    case pet
    case drowsy

    var id: String { rawValue }

    /// Primary quick-preview actions shown in compact bars.
    static let featured: [Realtime3DAction] = [.typing, .coffee, .phone, .stand, .write, .chin_rest]

    var label: String {
        switch self {
        case .typing: "打字"
        case .coffee: "喝咖啡"
        case .phone: "看手机"
        case .stand: "伸懒腰"
        case .write: "记笔记"
        case .chin_rest: "托腮"
        case .listen: "听歌"
        case .pet: "摸头"
        case .drowsy: "打瞌睡"
        }
    }

    var symbol: String {
        switch self {
        case .typing: "keyboard"
        case .coffee: "cup.and.saucer.fill"
        case .phone: "iphone"
        case .stand: "figure.arms.open"
        case .write: "pencil.and.outline"
        case .chin_rest: "face.smiling"
        case .listen: "headphones"
        case .pet: "heart.fill"
        case .drowsy: "moon.zzz.fill"
        }
    }
}

@MainActor
@Observable
final class Realtime3DSession {
    var status = "切换到 3D 后加载房间"
    var error: String?
    var activeAction = "typing_loop"
    var isReady = false
    var cameraPreset: Realtime3DCameraPreset = .overview
    var lampOn = true
    var headScreenPoint = CGPoint(x: 0.52, y: 0.28)
    var isCloseUpActive = false

    private(set) var actionRequestID = 0
    private(set) var requestedAction: Realtime3DAction?
    private(set) var cameraRequestID = 0
    private(set) var requestedCameraPreset: Realtime3DCameraPreset?
    private(set) var petRequestID = 0

    func request(_ action: Realtime3DAction) {
        requestedAction = action
        actionRequestID &+= 1
    }

    func requestCamera(_ preset: Realtime3DCameraPreset) {
        cameraPreset = preset
        requestedCameraPreset = preset
        cameraRequestID &+= 1
    }

    func requestPet() {
        petRequestID &+= 1
    }

    func update(status: String, action: String? = nil) {
        self.status = status
        if let action { activeAction = action }
    }

    func updateHeadAnchor(nx: Double, ny: Double) {
        let next = CGPoint(x: nx, y: ny)
        if hypot(next.x - headScreenPoint.x, next.y - headScreenPoint.y) > 0.012 {
            headScreenPoint = next
        }
    }

    func markReady() {
        isReady = true
        error = nil
    }

    func fail(_ message: String) {
        isReady = false
        error = message
        status = message
    }

    /// Called when the 3D branch is removed. The actual WebView is released by
    /// NSViewRepresentable.dismantleNSView; this resets only observable UI state.
    func reset() {
        status = "切换到 3D 后加载房间"
        error = nil
        activeAction = "typing_loop"
        isReady = false
        cameraPreset = .overview
        isCloseUpActive = false
        requestedAction = nil
        requestedCameraPreset = nil
        actionRequestID &+= 1
    }
}

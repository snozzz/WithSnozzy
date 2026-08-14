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
        case .realtime3DExperimental: "实时 3D 实验室"
        }
    }

    var explanation: String {
        switch self {
        case .twoPointFiveD: "分层插画，当前最稳定的日常模式。"
        case .realtime3DExperimental: "真实深度房间；角色动作和道具仍在实验阶段。"
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

    var id: String { rawValue }

    var label: String {
        switch self {
        case .typing: "打字"
        case .coffee: "喝咖啡"
        case .phone: "看手机"
        case .stand: "伸展"
        }
    }

    var symbol: String {
        switch self {
        case .typing: "keyboard"
        case .coffee: "cup.and.saucer.fill"
        case .phone: "iphone"
        case .stand: "figure.stand"
        }
    }
}

@MainActor
@Observable
final class Realtime3DSession {
    var status = "切换到实时 3D 后加载房间"
    var error: String?
    var activeAction = "typing_loop"
    var isReady = false
    private(set) var actionRequestID = 0
    private(set) var requestedAction: Realtime3DAction?

    func request(_ action: Realtime3DAction) {
        requestedAction = action
        actionRequestID &+= 1
    }

    func update(status: String, action: String? = nil) {
        self.status = status
        if let action { activeAction = action }
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
        status = "切换到实时 3D 后加载房间"
        error = nil
        activeAction = "typing_loop"
        isReady = false
        requestedAction = nil
        actionRequestID &+= 1
    }
}

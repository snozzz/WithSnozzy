import AppKit
import Foundation
import SwiftUI
@preconcurrency import WebKit

/// SwiftUI shell for the offline real-time room. The fallback lives outside
/// WebGL so a bad GPU context or missing asset can never leave a white window.
struct Realtime3DRoomView: View {
    @Environment(AppState.self) private var state

    let isVisible: Bool
    let lowPower: Bool
    let session: Realtime3DSession

    var body: some View {
        // Read the request fields as independent observation dependencies.
        // Observation may not invalidate this view when only a property on
        // the session reference changes; passing these values into the
        // representable makes every button request reach updateNSView.
        let actionRequestID = session.actionRequestID
        let requestedAction = session.requestedAction
        ZStack {
            Realtime3DWebView(isVisible: isVisible,
                              lowPower: lowPower,
                              actionRequestID: actionRequestID,
                              requestedAction: requestedAction,
                              session: session)

            if let error = session.error {
                VStack(spacing: 11) {
                    Image(systemName: "cube.transparent")
                        .font(.system(size: 26, weight: .light))
                        .foregroundStyle(.white.opacity(0.68))
                    Text("3D 房间没有打开")
                        .font(.system(size: 14, weight: .semibold, design: .rounded))
                        .foregroundStyle(.white.opacity(0.88))
                    Text(error)
                        .font(.system(size: 10, design: .rounded))
                        .foregroundStyle(.white.opacity(0.50))
                        .multilineTextAlignment(.center)
                        .lineLimit(3)
                    Button("回到 2.5D") { state.sceneMode = .twoPointFiveD }
                        .buttonStyle(.borderedProminent)
                        .tint(state.palette.accent.color)
                }
                .padding(.horizontal, 28)
                .padding(.vertical, 22)
                .background {
                    RoundedRectangle(cornerRadius: 18, style: .continuous)
                        .fill(.black.opacity(0.55))
                        .overlay {
                            RoundedRectangle(cornerRadius: 18, style: .continuous)
                                .strokeBorder(.white.opacity(0.12), lineWidth: 1)
                        }
                }
                .shadow(color: .black.opacity(0.35), radius: 24, y: 10)
            }
        }
    }
}

private struct Realtime3DWebView: NSViewRepresentable {
    let isVisible: Bool
    let lowPower: Bool
    let actionRequestID: Int
    let requestedAction: Realtime3DAction?
    let session: Realtime3DSession

    func makeCoordinator() -> Coordinator { Coordinator() }

    func makeNSView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.websiteDataStore = .nonPersistent()
        configuration.suppressesIncrementalRendering = false

        let controller = WKUserContentController()
        configuration.userContentController = controller

        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.setValue(false, forKey: "drawsBackground")
        webView.allowsBackForwardNavigationGestures = false
        webView.navigationDelegate = context.coordinator
        context.coordinator.attach(webView: webView, session: session)
        controller.add(context.coordinator, name: "room")
        context.coordinator.load()
        return webView
    }

    func updateNSView(_ webView: WKWebView, context: Context) {
        context.coordinator.update(isVisible: isVisible,
                                   lowPower: lowPower,
                                   requestID: actionRequestID,
                                   action: requestedAction)
    }

    static func dismantleNSView(_ webView: WKWebView, coordinator: Coordinator) {
        coordinator.dispose()
    }

    @MainActor
    final class Coordinator: NSObject, WKScriptMessageHandler, WKNavigationDelegate {
        private weak var webView: WKWebView?
        private weak var session: Realtime3DSession?
        private var runtimeRoot: URL?
        private var lastRequestID = -1
        private var lastVisible = true
        private var lastLowPower = false
        private var desiredVisible = true
        private var desiredLowPower = false
        private var didLoad = false

        func attach(webView: WKWebView, session: Realtime3DSession) {
            self.webView = webView
            self.session = session
        }

        func load() {
            guard let runtime = Self.runtimeDirectory() else {
                session?.fail("缺少本地 3D runtime 资源")
                return
            }
            runtimeRoot = runtime
            let html = runtime.appendingPathComponent("room.html")
            let asset = runtime.appendingPathComponent("SnozzyRoom3D.glb")
            let manifest = runtime.appendingPathComponent("SnozzyRoom3DManifest.json")
            guard FileManager.default.fileExists(atPath: html.path),
                  FileManager.default.fileExists(atPath: asset.path),
                  FileManager.default.fileExists(atPath: manifest.path)
            else {
                session?.fail("SnozzyRoom3D.glb 或 manifest 不在包内")
                return
            }

            let manifestObject: Any
            if let data = try? Data(contentsOf: manifest),
               let object = try? JSONSerialization.jsonObject(with: data),
               let dictionary = object as? [String: Any] {
                manifestObject = dictionary
            } else {
                session?.fail("3D manifest 不是有效 JSON")
                return
            }
            let manifestJSON = (try? JSONSerialization.data(withJSONObject: manifestObject,
                                                              options: [.sortedKeys]))
                .flatMap { String(data: $0, encoding: .utf8) } ?? "{}"
            let assetLiteral = Self.jsonStringLiteral(asset.absoluteString)
            let assetDataURL = (try? Data(contentsOf: asset))
                .map { "data:application/octet-stream;base64,\($0.base64EncodedString())" }
                .map(Self.jsonStringLiteral) ?? "null"
            let bootstrap = "window.__withSnozzy3DAssetURL=\(assetLiteral); window.__withSnozzy3DAssetDataURL=\(assetDataURL); window.__withSnozzy3DManifest=\(manifestJSON); window.addEventListener('error',function(e){window.webkit?.messageHandlers?.room?.postMessage({type:'error',message:(e.message||'JavaScript error')+' @ '+(e.filename||'')+':'+(e.lineno||0)})}); window.addEventListener('unhandledrejection',function(e){window.webkit?.messageHandlers?.room?.postMessage({type:'error',message:'unhandled rejection: '+String(e.reason)})});"
            webView?.configuration.userContentController.addUserScript(WKUserScript(
                source: bootstrap,
                injectionTime: .atDocumentStart,
                forMainFrameOnly: true))
            webView?.loadFileURL(html, allowingReadAccessTo: runtime)
        }

        func update(isVisible: Bool,
                    lowPower: Bool,
                    requestID: Int,
                    action: Realtime3DAction?) {
            desiredVisible = isVisible
            desiredLowPower = lowPower
            guard didLoad else { return }
            if isVisible != lastVisible {
                send(command: ["type": "pause", "value": !isVisible])
                lastVisible = isVisible
            }
            if lowPower != lastLowPower {
                send(command: ["type": "lowPower", "value": lowPower])
                lastLowPower = lowPower
            }
            guard requestID != lastRequestID, let action else { return }
            lastRequestID = requestID
            send(command: ["type": "action", "name": action.rawValue])
        }

        func dispose() {
            send(command: ["type": "dispose"])
            webView?.stopLoading()
            webView?.navigationDelegate = nil
            webView?.configuration.userContentController.removeScriptMessageHandler(forName: "room")
            webView = nil
            didLoad = false
            if let runtimeRoot,
               runtimeRoot.lastPathComponent.hasPrefix("withsnozzy-room-dev-") {
                try? FileManager.default.removeItem(at: runtimeRoot)
            }
            self.runtimeRoot = nil
        }

        func userContentController(_ userContentController: WKUserContentController,
                                   didReceive message: WKScriptMessage) {
            guard let body = message.body as? [String: Any],
                  let type = body["type"] as? String else { return }
            switch type {
            case "boot", "stage":
                if let name = body["name"] as? String { session?.update(status: name) }
            case "setup":
                session?.markReady()
                session?.update(status: "已加载 · 正在准备动作")
            case "ready":
                didLoad = true
                session?.markReady()
                session?.update(status: "已就绪 · 正在打字",
                                 action: body["action"] as? String ?? "typing_loop")
                if !desiredVisible {
                    send(command: ["type": "pause", "value": true])
                    lastVisible = false
                }
                if desiredLowPower {
                    send(command: ["type": "lowPower", "value": true])
                    lastLowPower = true
                }
                if let action = session?.requestedAction,
                   let requestID = session?.actionRequestID,
                   requestID != lastRequestID {
                    lastRequestID = requestID
                    send(command: ["type": "action", "name": action.rawValue])
                }
            case "status":
                let status = body["message"] as? String ?? "运行中"
                session?.update(status: status, action: body["action"] as? String)
            case "action":
                if let name = body["name"] as? String {
                    session?.update(status: "正在执行 \(name)", action: name)
                }
            case "error":
                session?.fail(body["message"] as? String ?? "3D runtime 错误")
            case "disposed":
                didLoad = false
            default:
                break
            }
        }

        func webView(_ webView: WKWebView,
                     decidePolicyFor navigationAction: WKNavigationAction,
                     decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            guard let url = navigationAction.request.url,
                  url.isFileURL,
                  let root = runtimeRoot
            else {
                decisionHandler(.cancel)
                return
            }
            let rootPath = root.standardizedFileURL.path
            let candidatePath = url.standardizedFileURL.path
            guard candidatePath == rootPath || candidatePath.hasPrefix(rootPath + "/") else {
                decisionHandler(.cancel)
                return
            }
            decisionHandler(.allow)
        }

        func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
            session?.fail("本地 3D 页面加载失败：\(error.localizedDescription)")
        }

        func webView(_ webView: WKWebView,
                     didFailProvisionalNavigation navigation: WKNavigation!,
                     withError error: Error) {
            session?.fail("本地 3D 页面加载失败：\(error.localizedDescription)")
        }

        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            // The local page has loaded; wait for the JS asset message before
            // marking the session ready so a blank canvas is never reported as
            // a usable room.
            session?.update(status: "正在解码 SnozzyRoom3D…")
        }

        private func send(command: [String: Any]) {
            guard let data = try? JSONSerialization.data(withJSONObject: command),
                  let json = String(data: data, encoding: .utf8) else { return }
            webView?.evaluateJavaScript("window.__withSnozzy3DCommand && window.__withSnozzy3DCommand(\(json));",
                                        completionHandler: nil)
        }

        private static func jsonStringLiteral(_ value: String) -> String {
            guard let data = try? JSONEncoder().encode(value),
                  let literal = String(data: data, encoding: .utf8) else { return "\"\"" }
            return literal
        }

        private static func runtimeDirectory() -> URL? {
            let candidates: [URL?] = [
                Bundle.main.resourceURL?.appendingPathComponent("ThreeRealtime3D", isDirectory: true),
            ]
            if let packaged = candidates.compactMap({ $0 }).first(where: {
                FileManager.default.fileExists(atPath: $0.appendingPathComponent("room.html").path)
            }) { return packaged }

            // `swift run` has no resource bundle. Stage a tiny development
            // directory so the exact same local-file URL path is exercised.
            let cwd = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
            let source = cwd.appendingPathComponent("Sources/WithSnozzy/Realtime3D")
            let assets = cwd.appendingPathComponent("Assets/Realtime3D")
            let required = ["room.html", "room.bundle.js"]
            guard required.allSatisfy({ FileManager.default.fileExists(atPath: source.appendingPathComponent($0).path) }),
                  FileManager.default.fileExists(atPath: assets.appendingPathComponent("SnozzyRoom3D.glb").path),
                  FileManager.default.fileExists(atPath: assets.appendingPathComponent("SnozzyRoom3DManifest.json").path)
            else { return nil }
            let stage = FileManager.default.temporaryDirectory.appendingPathComponent(
                "withsnozzy-room-dev-\(UUID().uuidString)", isDirectory: true)
            do {
                try FileManager.default.createDirectory(at: stage, withIntermediateDirectories: true)
                for name in required {
                    try FileManager.default.copyItem(at: source.appendingPathComponent(name),
                                                     to: stage.appendingPathComponent(name))
                }
                for name in ["SnozzyRoom3D.glb", "SnozzyRoom3DManifest.json"] {
                    try FileManager.default.copyItem(at: assets.appendingPathComponent(name),
                                                     to: stage.appendingPathComponent(name))
                }
                return stage
            } catch {
                return nil
            }
        }
    }
}

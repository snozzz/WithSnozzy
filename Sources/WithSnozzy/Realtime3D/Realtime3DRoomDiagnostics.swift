import AppKit
import Darwin
import Foundation
@preconcurrency import WebKit

/// Standalone smoke/snapshot harness for the production 3D room. It uses the
/// same room.html and room.bundle.js as the normal SwiftUI view, but stages
/// them into a temporary local directory and drives the JS diagnostic hook.
@MainActor
enum Realtime3DRoomDiagnostics {
    struct Request {
        let assetArgument: String?
        let snapshotOnly: Bool
        /// Optional production-bridge probe. The harness waits for the
        /// runtime's ready message, then sends the same action command as the
        /// SwiftUI coordinator and records the JS action message it receives.
        let bridgeAction: String?

        var expectedBridgeAction: String? {
            guard let bridgeAction else { return nil }
            switch bridgeAction {
            case "typing", "typing_loop": return "typing_loop"
            case "coffee", "coffee_once": return "coffee_once"
            case "phone", "phone_once": return "phone_once"
            case "stand", "stretch", "stand_stretch_once": return "stand_stretch_once"
            default: return bridgeAction
            }
        }
    }

    private static var activeRunner: Runner?

    nonisolated static var request: Request? {
        let args = CommandLine.arguments
        guard let index = args.firstIndex(where: {
            $0 == "--3droom" || $0 == "--3droom-snapshot" || $0 == "--3droom-bridge"
        }) else {
            return nil
        }
        let next = index + 1 < args.count ? args[index + 1] : nil
        let path = next.flatMap { $0.hasPrefix("--") ? nil : $0 }
        let bridgeAction: String?
        if args[index] == "--3droom-bridge" {
            bridgeAction = Self.argumentValue("--3droom-action", in: args) ?? "coffee"
        } else {
            bridgeAction = nil
        }
        return Request(assetArgument: path,
                       snapshotOnly: args[index] == "--3droom-snapshot",
                       bridgeAction: bridgeAction)
    }

    private nonisolated static func argumentValue(_ flag: String, in args: [String]) -> String? {
        guard let index = args.firstIndex(of: flag), index + 1 < args.count else { return nil }
        let value = args[index + 1]
        return value.hasPrefix("--") ? nil : value
    }

    static func runStandalone(request: Request) {
        let app = NSApplication.shared
        app.setActivationPolicy(.regular)
        app.finishLaunching()
        do {
            let runner = try Runner(request: request)
            activeRunner = runner
            runner.start()
        } catch {
            Runner.writeFailure("3D 诊断初始化失败：\(error.localizedDescription)")
            exit(1)
        }
        app.activate(ignoringOtherApps: true)
        app.run()
    }

    private enum HarnessError: LocalizedError {
        case missingAsset
        case missingRuntime
        case invalidManifest
        case staging(String)

        var errorDescription: String? {
            switch self {
            case .missingAsset: "找不到 SnozzyRoom3D.glb"
            case .missingRuntime: "找不到 room.html 或 room.bundle.js"
            case .invalidManifest: "SnozzyRoom3DManifest.json 无效"
            case .staging(let detail): "无法准备诊断目录：\(detail)"
            }
        }
    }

    @MainActor
    private final class Runner: NSObject, WKScriptMessageHandler, WKNavigationDelegate {
        private let request: Request
        private let outputDirectory: URL
        private let reportURL: URL
        private let stagingDirectory: URL
        private let window: NSWindow
        private let webView: WKWebView
        private let assetURL: URL
        private var finished = false
        private var timeoutWorkItem: DispatchWorkItem?
        private var bridgeActionTimeoutWorkItem: DispatchWorkItem?
        private var bridgeReadyObserved = false
        private var bridgeCommandReturned = false
        private var bridgeCommandResult: Bool?
        private var bridgeCommandError: String?
        private var bridgeActionMessage: String?
        private var bridgeActionManual: Bool?
        private var bridgeActionAfterReady = false
        private var report: [String: Any] = [:]

        init(request: Request) throws {
            self.request = request
            let sourceAsset = try Self.resolveAsset(request.assetArgument)
            self.assetURL = sourceAsset
            let manifestURL = Self.resolveManifest(for: sourceAsset)
            guard let manifestURL,
                  let manifestData = try? Data(contentsOf: manifestURL),
                  let manifestObject = try? JSONSerialization.jsonObject(with: manifestData),
                  manifestObject is [String: Any]
            else { throw HarnessError.invalidManifest }

            let output = Self.argumentURL("--3droom-output")
                ?? sourceAsset.deletingLastPathComponent().appendingPathComponent("3droom_diagnostics")
            try FileManager.default.createDirectory(at: output, withIntermediateDirectories: true)
            self.outputDirectory = output.standardizedFileURL
            self.reportURL = Self.argumentURL("--3droom-report")
                ?? output.appendingPathComponent("realtime3d_room_report.json")

            let stage = FileManager.default.temporaryDirectory.appendingPathComponent(
                "withsnozzy-realtime3d-\(ProcessInfo.processInfo.processIdentifier)-\(UUID().uuidString)",
                isDirectory: true)
            self.stagingDirectory = stage
            do {
                try FileManager.default.createDirectory(at: stage, withIntermediateDirectories: true)
                try Self.copyRuntimeFiles(to: stage)
                try FileManager.default.copyItem(at: sourceAsset,
                                                 to: stage.appendingPathComponent("SnozzyRoom3D.glb"))
                try manifestData.write(to: stage.appendingPathComponent("SnozzyRoom3DManifest.json"),
                                       options: .atomic)
            } catch {
                throw HarnessError.staging(error.localizedDescription)
            }

            let configuration = WKWebViewConfiguration()
            configuration.websiteDataStore = .nonPersistent()
            let controller = WKUserContentController()
            configuration.userContentController = controller
            let view = WKWebView(frame: NSRect(x: 0, y: 0, width: 960, height: 640),
                                 configuration: configuration)
            view.setValue(false, forKey: "drawsBackground")
            view.autoresizingMask = [.width, .height]
            self.webView = view

            let window = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 960, height: 640),
                                  styleMask: [.titled, .closable],
                                  backing: .buffered,
                                  defer: false)
            window.title = "With Snozzy · 3D Room QA"
            window.isReleasedWhenClosed = false
            window.contentView = view
            window.center()
            self.window = window
            super.init()
            controller.add(self, name: "room")
            view.navigationDelegate = self

            if let bridgeAction = request.bridgeAction {
                report["bridgeQA"] = [
                    "requestedAction": bridgeAction,
                    "expectedAction": request.expectedBridgeAction as Any,
                    "readyObserved": false,
                    "commandReturned": false,
                    "actionMessageAfterReady": false,
                    "passed": false,
                ]
            }

            let manifestJSON = String(data: manifestData, encoding: .utf8) ?? "{}"
            let assetLiteral = Self.jsonStringLiteral(stage.appendingPathComponent("SnozzyRoom3D.glb").absoluteString)
            let assetDataURL = "data:application/octet-stream;base64,\((try? Data(contentsOf: sourceAsset))?.base64EncodedString() ?? "")"
            let assetDataLiteral = Self.jsonStringLiteral(assetDataURL)
            // Bridge mode intentionally leaves the JS diagnostic hook nil so
            // the page follows the ordinary production scheduler/action path.
            // The native harness sends the command only after `ready`.
            let diagnosticJSON: String
            if request.bridgeAction != nil {
                diagnosticJSON = "null"
            } else {
                let diagnostic: [String: Any] = [
                    "actions": request.snapshotOnly ? ["coffee_once", "phone_once", "stand_stretch_once"] : [],
                    "screenshots": true,
                    "performance": !request.snapshotOnly,
                ]
                diagnosticJSON = String(data: try JSONSerialization.data(withJSONObject: diagnostic,
                                                                          options: [.sortedKeys]),
                                         encoding: .utf8) ?? "{}"
            }
            let bootstrap = "window.__withSnozzy3DAssetURL=\(assetLiteral); window.__withSnozzy3DAssetDataURL=\(assetDataLiteral); window.__withSnozzy3DManifest=\(manifestJSON); window.__withSnozzy3DDiagnostic=\(diagnosticJSON); window.addEventListener('error',function(e){window.webkit?.messageHandlers?.room?.postMessage({type:'error',message:(e.message||'JavaScript error')+' @ '+(e.filename||'')+':'+(e.lineno||0)})}); window.addEventListener('unhandledrejection',function(e){window.webkit?.messageHandlers?.room?.postMessage({type:'error',message:'unhandled rejection: '+String(e.reason)})});"
            controller.addUserScript(WKUserScript(source: bootstrap,
                                                  injectionTime: .atDocumentStart,
                                                  forMainFrameOnly: true))
        }

        func start() {
            window.makeKeyAndOrderFront(nil)
            window.orderFrontRegardless()
            NSApp.activate(ignoringOtherApps: true)
            webView.loadFileURL(stagingDirectory.appendingPathComponent("room.html"),
                                allowingReadAccessTo: stagingDirectory)
            let timeout = DispatchWorkItem { [weak self] in
                guard let self, !finished else { return }
                finish(status: "FAIL", message: "3D room 诊断超过 45 秒")
            }
            timeoutWorkItem = timeout
            DispatchQueue.main.asyncAfter(deadline: .now() + 45, execute: timeout)
        }

        func userContentController(_ userContentController: WKUserContentController,
                                   didReceive message: WKScriptMessage) {
            guard let body = message.body as? [String: Any],
                  let type = body["type"] as? String else { return }
            switch type {
            case "ready":
                if let status = body["message"] as? String { report["lastStatus"] = status }
                report["ready"] = true
                if request.bridgeAction != nil {
                    bridgeReadyObserved = true
                    updateBridgeReport()
                    sendBridgeAction()
                }
            case "setup", "status", "stage":
                if let status = body["message"] as? String { report["lastStatus"] = status }
            case "report":
                if let value = body["report"] as? [String: Any] { report.merge(value) { _, incoming in incoming } }
            case "pixelDiff":
                if let value = body["pixelDiff"] as? [String: Any] { report["pixelDiff"] = value }
            case "diagnostic":
                var events = report["diagnosticEvents"] as? [[String: Any]] ?? []
                events.append(body)
                report["diagnosticEvents"] = events
            case "screenshot":
                guard let name = body["name"] as? String,
                      let dataURL = body["dataURL"] as? String,
                      let data = Self.dataFromDataURL(dataURL) else {
                    finish(status: "FAIL", message: "3D 截图数据无效")
                    return
                }
                let url = outputDirectory.appendingPathComponent("realtime3d_\(name).png")
                var shots = report["screenshots"] as? [String: Any] ?? [:]
                shots[name] = ["path": url.path, "bytes": data.count]
                report["screenshots"] = shots
                // Do not hold the WebKit script-message round trip on PNG I/O.
                // A synchronous write here can pause the page's timer queue on
                // large Retina captures and starve the next action in the
                // diagnostic sequence.
                DispatchQueue.global(qos: .utility).async {
                    try? data.write(to: url, options: .atomic)
                }
            case "action":
                guard request.bridgeAction != nil else { break }
                bridgeActionMessage = body["name"] as? String
                bridgeActionManual = body["manual"] as? Bool
                bridgeActionAfterReady = bridgeReadyObserved
                updateBridgeReport()
                finishBridgeIfReady()
            case "error":
                finish(status: "FAIL", message: body["message"] as? String ?? "3D JS 错误")
            case "done":
                if let value = body["report"] as? [String: Any] { report.merge(value) { _, incoming in incoming } }
                finish(status: (report["status"] as? String) ?? "FAIL", message: nil)
            default:
                break
            }
        }

        private func sendBridgeAction() {
            guard let requestedAction = request.bridgeAction,
                  let data = try? JSONSerialization.data(withJSONObject: [
                    "type": "action",
                    "name": requestedAction,
                ]),
                let json = String(data: data, encoding: .utf8) else {
                finish(status: "FAIL", message: "无法编码 3D bridge action")
                return
            }

            let script = "window.__withSnozzy3DCommand && window.__withSnozzy3DCommand(\(json));"
            webView.evaluateJavaScript(script) { [weak self] value, error in
                // Convert WebKit's untyped result before hopping back to the
                // main actor; only Sendable values cross the callback.
                let returned = (value as? NSNumber)?.boolValue
                let errorMessage = error?.localizedDescription
                DispatchQueue.main.async {
                    guard let self, !self.finished else { return }
                    self.bridgeCommandReturned = true
                    self.bridgeCommandResult = returned
                    self.bridgeCommandError = errorMessage
                    self.updateBridgeReport()
                    if returned != true {
                        self.finish(status: "FAIL",
                                    message: errorMessage ?? "3D bridge action returned false")
                    } else {
                        self.scheduleBridgeActionTimeout()
                        self.finishBridgeIfReady()
                    }
                }
            }
        }

        private func scheduleBridgeActionTimeout() {
            guard bridgeActionTimeoutWorkItem == nil else { return }
            let timeout = DispatchWorkItem { [weak self] in
                guard let self, !self.finished else { return }
                self.finish(status: "FAIL", message: "3D bridge action message 超时")
            }
            bridgeActionTimeoutWorkItem = timeout
            DispatchQueue.main.asyncAfter(deadline: .now() + 3, execute: timeout)
        }

        private func finishBridgeIfReady() {
            guard request.bridgeAction != nil,
                  bridgeReadyObserved,
                  bridgeCommandReturned,
                  bridgeCommandResult == true,
                  bridgeActionAfterReady,
                  bridgeActionMessage == request.expectedBridgeAction,
                  bridgeActionManual == true else { return }
            bridgeActionTimeoutWorkItem?.cancel()
            bridgeActionTimeoutWorkItem = nil
            updateBridgeReport()
            finish(status: "PASS", message: nil)
        }

        private func updateBridgeReport() {
            guard let requestedAction = request.bridgeAction else { return }
            var bridge: [String: Any] = [
                "requestedAction": requestedAction,
                "expectedAction": request.expectedBridgeAction as Any,
                "readyObserved": bridgeReadyObserved,
                "commandReturned": bridgeCommandReturned,
                "actionMessageAfterReady": bridgeActionAfterReady,
                "passed": bridgeReadyObserved
                    && bridgeCommandReturned
                    && bridgeCommandResult == true
                    && bridgeActionAfterReady
                    && bridgeActionMessage == request.expectedBridgeAction
                    && bridgeActionManual == true,
            ]
            if let bridgeCommandResult { bridge["jsReturn"] = bridgeCommandResult }
            if let bridgeCommandError { bridge["jsError"] = bridgeCommandError }
            if let bridgeActionMessage { bridge["jsActionMessage"] = bridgeActionMessage }
            if let bridgeActionManual { bridge["jsActionManual"] = bridgeActionManual }
            report["bridgeQA"] = bridge
        }

        func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
            finish(status: "FAIL", message: error.localizedDescription)
        }

        func webView(_ webView: WKWebView,
                     didFailProvisionalNavigation navigation: WKNavigation!,
                     withError error: Error) {
            finish(status: "FAIL", message: error.localizedDescription)
        }

        func webView(_ webView: WKWebView,
                     decidePolicyFor navigationAction: WKNavigationAction,
                     decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            guard let url = navigationAction.request.url,
                  url.isFileURL else {
                decisionHandler(.cancel)
                return
            }
            let rootPath = stagingDirectory.resolvingSymlinksInPath().standardizedFileURL.path
            let candidatePath = url.resolvingSymlinksInPath().standardizedFileURL.path
            let rootPrefix = rootPath.hasSuffix("/") ? rootPath : rootPath + "/"
            decisionHandler(candidatePath == rootPath || candidatePath.hasPrefix(rootPrefix)
                            ? .allow : .cancel)
        }

        private func finish(status: String, message: String?) {
            guard !finished else { return }
            finished = true
            timeoutWorkItem?.cancel()
            bridgeActionTimeoutWorkItem?.cancel()
            report["status"] = status
            report["native"] = [
                "asset": assetURL.path,
                "stagingDirectory": stagingDirectory.path,
                "window": ["width": window.frame.width, "height": window.frame.height],
                "rss": Self.rssSnapshot(),
            ]
            report["outputDirectory"] = outputDirectory.path
            if let message { report["error"] = message }
            if let data = try? JSONSerialization.data(withJSONObject: report,
                                                      options: [.prettyPrinted, .sortedKeys]) {
                try? data.write(to: reportURL, options: .atomic)
            }
            print("THREE_ROOM_\(status): report=\(reportURL.path)")
            if let message { print("THREE_ROOM_ERROR: \(message)") }
            DispatchQueue.main.async { exit(status == "PASS" ? 0 : 1) }
        }

        static func writeFailure(_ message: String) {
            let url = argumentURL("--3droom-report")
                ?? URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
                    .appendingPathComponent("realtime3d_room_report.json")
            let object: [String: Any] = ["status": "FAIL", "error": message]
            if let data = try? JSONSerialization.data(withJSONObject: object,
                                                      options: [.prettyPrinted, .sortedKeys]) {
                try? data.write(to: url, options: .atomic)
            }
            print("THREE_ROOM_FAIL: \(message)")
        }

        private static func resolveAsset(_ argument: String?) throws -> URL {
            let candidates: [URL] = argument.map {
                URL(fileURLWithPath: $0, relativeTo: URL(fileURLWithPath: FileManager.default.currentDirectoryPath))
                    .standardizedFileURL
            }.map { [$0] } ?? []
            let fallback = [
                URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
                    .appendingPathComponent("Assets/Realtime3D/SnozzyRoom3D.glb"),
                Bundle.main.resourceURL?.appendingPathComponent("ThreeRealtime3D/SnozzyRoom3D.glb"),
            ].compactMap { $0 }
            guard let hit = (candidates + fallback).first(where: {
                FileManager.default.fileExists(atPath: $0.path)
            }) else { throw HarnessError.missingAsset }
            return hit
        }

        private static func resolveManifest(for asset: URL) -> URL? {
            let sibling = asset.deletingLastPathComponent().appendingPathComponent("SnozzyRoom3DManifest.json")
            if FileManager.default.fileExists(atPath: sibling.path) { return sibling }
            let fallback = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
                .appendingPathComponent("Assets/Realtime3D/SnozzyRoom3DManifest.json")
            return FileManager.default.fileExists(atPath: fallback.path) ? fallback : nil
        }

        private static func copyRuntimeFiles(to stage: URL) throws {
            let fm = FileManager.default
            let candidates: [(URL, URL)] = [
                (Bundle.main.resourceURL?.appendingPathComponent("ThreeRealtime3D/room.html"), stage.appendingPathComponent("room.html")),
                (Bundle.main.resourceURL?.appendingPathComponent("ThreeRealtime3D/room.bundle.js"), stage.appendingPathComponent("room.bundle.js")),
                (URL(fileURLWithPath: FileManager.default.currentDirectoryPath).appendingPathComponent("Sources/WithSnozzy/Realtime3D/room.html"), stage.appendingPathComponent("room.html")),
                (URL(fileURLWithPath: FileManager.default.currentDirectoryPath).appendingPathComponent("Sources/WithSnozzy/Realtime3D/room.bundle.js"), stage.appendingPathComponent("room.bundle.js")),
            ].compactMap { source, target in source.map { ($0, target) } }
            var copiedHTML = false
            var copiedBundle = false
            for (source, target) in candidates where fm.fileExists(atPath: source.path) {
                if target.lastPathComponent == "room.html" && !copiedHTML {
                    try fm.copyItem(at: source, to: target); copiedHTML = true
                } else if target.lastPathComponent == "room.bundle.js" && !copiedBundle {
                    try fm.copyItem(at: source, to: target); copiedBundle = true
                }
            }
            guard copiedHTML && copiedBundle else { throw HarnessError.missingRuntime }
        }

        private static func argumentURL(_ flag: String) -> URL? {
            guard let index = CommandLine.arguments.firstIndex(of: flag), index + 1 < CommandLine.arguments.count else { return nil }
            return URL(fileURLWithPath: CommandLine.arguments[index + 1],
                       relativeTo: URL(fileURLWithPath: FileManager.default.currentDirectoryPath))
                .standardizedFileURL
        }

        private static func jsonStringLiteral(_ value: String) -> String {
            guard let data = try? JSONEncoder().encode(value),
                  let literal = String(data: data, encoding: .utf8) else { return "\"\"" }
            return literal
        }

        private static func dataFromDataURL(_ value: String) -> Data? {
            guard let comma = value.firstIndex(of: ",") else { return nil }
            return Data(base64Encoded: String(value[value.index(after: comma)...]))
        }

        private static func rssSnapshot() -> [String: Any] {
            let process = Process()
            let pipe = Pipe()
            process.executableURL = URL(fileURLWithPath: "/bin/ps")
            process.arguments = ["-o", "rss=", "-p", String(getpid())]
            process.standardOutput = pipe
            guard (try? process.run()) != nil else { return [:] }
            let data = pipe.fileHandleForReading.readDataToEndOfFile()
            process.waitUntilExit()
            let kb = Int(String(decoding: data, as: UTF8.self).trimmingCharacters(in: .whitespacesAndNewlines)) ?? 0
            return ["processRSSBytes": kb * 1024, "sampledAt": ISO8601DateFormatter().string(from: Date())]
        }
    }
}

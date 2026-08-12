import AppKit
import Darwin
import Foundation
import WebKit

/// Standalone Three.js/WebGL Phase 0 gate.
///
/// The harness owns its own NSWindow and WKWebView so it never shares the
/// production SwiftUI scene. The page, renderer, GLTFLoader, and GLB are all
/// staged into one temporary local directory; the WKWebView therefore has no
/// server or network dependency and its read access never needs to include the
/// user's repository.
@MainActor
enum ThreePhase0Diagnostics {

    private static var activeRunner: Runner?

    nonisolated static var requestedPath: String? {
        guard let index = CommandLine.arguments.firstIndex(of: "--3dphase0"),
              index + 1 < CommandLine.arguments.count else { return nil }
        return CommandLine.arguments[index + 1]
    }

    static func runStandalone(path: String) {
        let app = NSApplication.shared
        app.setActivationPolicy(.regular)
        // Calling finishLaunching explicitly makes this path deterministic
        // when launched directly from a terminal (without `open`'s Apple Event
        // handshake). The runner is retained statically until it exits.
        app.finishLaunching()
        do {
            let runner = try Runner(assetArgument: path)
            activeRunner = runner
            runner.start()
        } catch {
            Runner.writeFailure(
                message: "Three.js Phase 0 setup failed: \(error.localizedDescription)",
                fallbackDirectory: URL(fileURLWithPath: FileManager.default.currentDirectoryPath))
            exit(1)
        }
        app.activate(ignoringOtherApps: true)
        app.run()
    }

    private final class Delegate: NSObject, NSApplicationDelegate {
        private let assetArgument: String
        private var runner: Runner?

        init(assetArgument: String) {
            self.assetArgument = assetArgument
        }

        func applicationDidFinishLaunching(_ notification: Notification) {
            do {
                runner = try Runner(assetArgument: assetArgument)
                runner?.start()
            } catch {
                Runner.writeFailure(
                    message: "Three.js Phase 0 setup failed: \(error.localizedDescription)",
                    fallbackDirectory: URL(fileURLWithPath: FileManager.default.currentDirectoryPath))
                exit(1)
            }
        }
    }

    private enum HarnessError: LocalizedError {
        case missingAsset(String)
        case missingRuntimeFiles
        case stagingFailed(String)
        case invalidManifest

        var errorDescription: String? {
            switch self {
            case .missingAsset(let path): return "GLB does not exist: \(path)"
            case .missingRuntimeFiles: return "Three.js Phase 0 HTML/vendor files are missing"
            case .stagingFailed(let detail): return "Could not stage Phase 0 files: \(detail)"
            case .invalidManifest: return "Phase0Manifest.json is missing or invalid"
            }
        }
    }

    @MainActor
    private final class Runner: NSObject, WKScriptMessageHandler, WKNavigationDelegate {
        private let originalAssetURL: URL
        private let manifest: [String: Any]
        private let reportURL: URL
        private let outputDirectory: URL
        private let stagingDirectory: URL
        private let stagedAssetURL: URL
        private let htmlURL: URL
        private let window: NSWindow
        private let webView: WKWebView
        private var report: [String: Any] = [:]
        private var finished = false
        private var timeoutWorkItem: DispatchWorkItem?

        init(assetArgument: String) throws {
            let argumentURL = URL(fileURLWithPath: assetArgument,
                                  relativeTo: URL(fileURLWithPath: FileManager.default.currentDirectoryPath))
                .standardizedFileURL
            let sourceAssetURL = FileManager.default.fileExists(atPath: argumentURL.path)
                ? argumentURL
                : Self.bundleAssetURL(argumentURL.lastPathComponent)
            guard let sourceAssetURL,
                  FileManager.default.fileExists(atPath: sourceAssetURL.path)
            else { throw HarnessError.missingAsset(argumentURL.path) }
            self.originalAssetURL = sourceAssetURL

            let sourceManifestURL = Self.manifestURL(for: sourceAssetURL)
                ?? Self.bundleResourceURL("Phase0Manifest.json")
            guard let sourceManifestURL,
                  let manifestData = try? Data(contentsOf: sourceManifestURL),
                  let manifestObject = try? JSONSerialization.jsonObject(with: manifestData),
                  let manifest = manifestObject as? [String: Any]
            else { throw HarnessError.invalidManifest }
            self.manifest = manifest
            let assetData = try Data(contentsOf: sourceAssetURL)

            let defaultOutput = sourceAssetURL.deletingLastPathComponent()
            let output = Self.argumentURL("--3dphase0-output") ?? defaultOutput
            self.outputDirectory = output.standardizedFileURL
            try FileManager.default.createDirectory(at: outputDirectory,
                                                     withIntermediateDirectories: true)
            self.reportURL = Self.argumentURL("--3dphase0-report")
                ?? outputDirectory.appendingPathComponent("phase0_three_report.json")

            let stage = FileManager.default.temporaryDirectory
                .appendingPathComponent("withsnozzy-three-phase0-\(ProcessInfo.processInfo.processIdentifier)-\(UUID().uuidString)",
                                        isDirectory: true)
            self.stagingDirectory = stage
            do {
                try FileManager.default.createDirectory(at: stage, withIntermediateDirectories: true)
                try Self.copyRuntimeFiles(to: stage)
                self.stagedAssetURL = stage.appendingPathComponent("Phase0Runtime.glb")
                try FileManager.default.copyItem(at: sourceAssetURL, to: stagedAssetURL)
                let stagedManifestURL = stage.appendingPathComponent("Phase0Manifest.json")
                try manifestData.write(to: stagedManifestURL, options: .atomic)
            } catch {
                throw HarnessError.stagingFailed(error.localizedDescription)
            }
            self.htmlURL = stage.appendingPathComponent("phase0.html")

            let configuration = WKWebViewConfiguration()
            configuration.websiteDataStore = .nonPersistent()
            let userContentController = WKUserContentController()
            configuration.userContentController = userContentController
            userContentController.addUserScript(WKUserScript(
                source: Self.bootstrapScript(assetURL: stagedAssetURL, manifest: manifest, assetData: assetData),
                injectionTime: .atDocumentStart,
                forMainFrameOnly: true))
            let view = WKWebView(frame: NSRect(x: 0, y: 0, width: 960, height: 720),
                                 configuration: configuration)
            view.setValue(false, forKey: "drawsBackground")
            view.autoresizingMask = [.width, .height]
            self.webView = view

            let window = NSWindow(
                contentRect: NSRect(x: 0, y: 0, width: 960, height: 720),
                styleMask: [.titled, .closable],
                backing: .buffered,
                defer: false)
            window.title = "WithSnozzy Three.js Phase 0"
            window.isReleasedWhenClosed = false
            window.contentView = view
            window.center()
            self.window = window
            super.init()
            userContentController.add(self, name: "phase0")
            view.navigationDelegate = self
        }

        func start() {
            NSApp.setActivationPolicy(.regular)
            window.makeKeyAndOrderFront(nil)
            window.orderFrontRegardless()
            NSApp.activate(ignoringOtherApps: true)
            webView.loadFileURL(htmlURL, allowingReadAccessTo: stagingDirectory)
            let timeout = DispatchWorkItem { [weak self] in
                guard let self, !self.finished else { return }
                self.finish(status: "FAIL", message: "WKWebView Phase 0 timed out after 35 seconds")
            }
            timeoutWorkItem = timeout
            DispatchQueue.main.asyncAfter(deadline: .now() + 35, execute: timeout)
        }

        func userContentController(_ userContentController: WKUserContentController,
                                    didReceive message: WKScriptMessage) {
            guard let body = message.body as? [String: Any],
                  let type = body["type"] as? String else { return }
            switch type {
            case "ready":
                report["ready"] = true
            case "setup":
                report["setup"] = true
                if let metrics = body["counts"] as? [String: Any] { report["counts"] = metrics }
                if let animation = body["animation"] as? [String: Any] { report["animation"] = animation }
            case "firstFrame":
                report["firstFrame"] = body
            case "stage":
                if let name = body["name"] as? String {
                    var stages = report["stages"] as? [String] ?? []
                    stages.append(name)
                    report["stages"] = stages
                }
            case "report":
                if let jsReport = body["report"] as? [String: Any] {
                    report.merge(jsReport) { _, incoming in incoming }
                }
            case "screenshot":
                guard let name = body["name"] as? String,
                      let dataURL = body["dataURL"] as? String,
                      let data = Self.dataFromDataURL(dataURL) else {
                    finish(status: "FAIL", message: "invalid screenshot payload")
                    return
                }
                do {
                    let path = screenshotURL(for: name)
                    try data.write(to: path, options: .atomic)
                    var screenshots = report["screenshots"] as? [String: Any] ?? [:]
                    screenshots[name] = [
                        "path": path.path,
                        "bytes": data.count,
                        "pngSignature": Array(data.prefix(8)),
                    ]
                    report["screenshots"] = screenshots
                } catch {
                    finish(status: "FAIL", message: "screenshot write failed: \(error.localizedDescription)")
                }
            case "pixelDiff":
                if let diff = body["pixelDiff"] as? [String: Any] { report["pixelDiff"] = diff }
            case "done":
                if let jsReport = body["report"] as? [String: Any] {
                    report.merge(jsReport) { _, incoming in incoming }
                }
                finish(status: (report["status"] as? String) ?? "PASS", message: nil)
            case "error":
                finish(status: "FAIL", message: body["message"] as? String ?? "JavaScript error")
            default:
                break
            }
        }

        func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
            finish(status: "FAIL", message: "local HTML navigation failed: \(error.localizedDescription)")
        }

        func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
            finish(status: "FAIL", message: "local HTML provisional navigation failed: \(error.localizedDescription)")
        }

        func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
            FileHandle.standardError.write(Data(("THREE_PHASE0_NAV_START \(htmlURL.path)\n").utf8))
        }

        func webView(_ webView: WKWebView, didCommit navigation: WKNavigation!) {
            FileHandle.standardError.write(Data("THREE_PHASE0_NAV_COMMIT\n".utf8))
        }

        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            FileHandle.standardError.write(Data("THREE_PHASE0_NAV_FINISH\n".utf8))
            let probe = "({ready:document.readyState, asset:window.__phase0AssetURL || null, script:document.querySelector('script')?.src || null, body:document.body?.innerHTML?.slice(0,160) || ''})"
            webView.evaluateJavaScript(probe) { value, error in
                if let error {
                    FileHandle.standardError.write(Data(("THREE_PHASE0_JS_EVAL_ERROR \(error)\n").utf8))
                } else {
                    FileHandle.standardError.write(Data(("THREE_PHASE0_DOCUMENT_PROBE \(String(describing: value))\n").utf8))
                }
            }
        }

        private func screenshotURL(for name: String) -> URL {
            let filename: String
            switch name {
            case "idle": filename = "phase0_three_idle.png"
            case "typing": filename = "phase0_three_typing.png"
            case "crossfade_mid": filename = "phase0_three_crossfade_mid.png"
            default: filename = "phase0_three_\(name).png"
            }
            if let explicit = Self.argumentURL("--3dphase0-\(name)-screenshot") { return explicit }
            return outputDirectory.appendingPathComponent(filename)
        }

        private func finish(status: String, message: String?) {
            guard !finished else { return }
            finished = true
            timeoutWorkItem?.cancel()
            report["status"] = status
            report["native"] = [
                "assetOriginalURL": originalAssetURL.path,
                "assetStagedURL": stagedAssetURL.path,
                "htmlURL": htmlURL.path,
                "stagingDirectory": stagingDirectory.path,
                "window": ["width": window.frame.width, "height": window.frame.height],
                "rss": Self.rssSnapshot(),
            ]
            report["outputDirectory"] = outputDirectory.path
            if let message { report["error"] = message }
            do {
                let data = try JSONSerialization.data(withJSONObject: report,
                                                       options: [.prettyPrinted, .sortedKeys])
                try data.write(to: reportURL, options: .atomic)
            } catch {
                FileHandle.standardError.write(Data(("Phase0 report write failed: \(error)\n").utf8))
            }
            print("THREE_PHASE0_\(status): report=\(reportURL.path)")
            if let message { print("THREE_PHASE0_ERROR: \(message)") }
            DispatchQueue.main.async { exit(status == "PASS" ? 0 : 1) }
        }

        static func writeFailure(message: String, fallbackDirectory: URL) {
            let reportURL = fallbackDirectory.appendingPathComponent("phase0_three_report.json")
            let object: [String: Any] = ["status": "FAIL", "error": message]
            if let data = try? JSONSerialization.data(withJSONObject: object, options: [.prettyPrinted, .sortedKeys]) {
                try? data.write(to: reportURL, options: .atomic)
            }
            print("THREE_PHASE0_FAIL: \(message)")
        }

        private static func dataFromDataURL(_ value: String) -> Data? {
            guard let comma = value.firstIndex(of: ",") else { return nil }
            let encoded = String(value[value.index(after: comma)...])
            return Data(base64Encoded: encoded)
        }

        private static func bootstrapScript(assetURL: URL, manifest: [String: Any], assetData: Data) -> String {
            // JSONSerialization historically rejected scalar top-level values
            // on some macOS SDK/runtime combinations even with
            // `.fragmentsAllowed`.  These values are all Swift Codable
            // strings, so JSONEncoder gives us a valid quoted JS literal on
            // every supported system without ever interpolating a path.
            let asset = Self.jsonStringLiteral(assetURL.absoluteString)
            let manifestJSON = (try? JSONSerialization.data(withJSONObject: manifest,
                                                              options: [.sortedKeys]))
                .flatMap { String(data: $0, encoding: .utf8) } ?? "{}"
            let dataURL = "data:application/octet-stream;base64,\(assetData.base64EncodedString())"
            let dataJSON = Self.jsonStringLiteral(dataURL)
            return "window.__phase0AssetURL = \(asset); window.__phase0AssetDataURL = \(dataJSON); window.__phase0Manifest = \(manifestJSON); window.addEventListener('error', function(e) { if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.phase0) window.webkit.messageHandlers.phase0.postMessage({type:'error', message:'window error: ' + (e.message || 'unknown') + ' @ ' + (e.filename || '') + ':' + (e.lineno || 0)}); }); window.addEventListener('unhandledrejection', function(e) { if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.phase0) window.webkit.messageHandlers.phase0.postMessage({type:'error', message:'unhandled rejection: ' + String(e.reason)}); });"
        }

        private static func jsonStringLiteral(_ value: String) -> String {
            guard let data = try? JSONEncoder().encode(value),
                  let literal = String(data: data, encoding: .utf8) else {
                return "\"\""
            }
            return literal
        }

        private static func argumentURL(_ flag: String) -> URL? {
            guard let index = CommandLine.arguments.firstIndex(of: flag),
                  index + 1 < CommandLine.arguments.count else { return nil }
            return URL(fileURLWithPath: CommandLine.arguments[index + 1],
                       relativeTo: URL(fileURLWithPath: FileManager.default.currentDirectoryPath))
                .standardizedFileURL
        }

        private static func bundleResourceURL(_ name: String) -> URL? {
            Bundle.main.resourceURL?.appendingPathComponent("ThreePhase0", isDirectory: true)
                .appendingPathComponent(name)
        }

        private static func bundleAssetURL(_ name: String) -> URL? {
            guard let url = bundleResourceURL(name), FileManager.default.fileExists(atPath: url.path) else { return nil }
            return url
        }

        private static func manifestURL(for asset: URL) -> URL? {
            let url = asset.deletingLastPathComponent().appendingPathComponent("Phase0Manifest.json")
            return FileManager.default.fileExists(atPath: url.path) ? url : nil
        }

        private static func sourceRoot() -> URL? {
            var cursor = URL(fileURLWithPath: CommandLine.arguments[0]).standardizedFileURL
                .deletingLastPathComponent()
            for _ in 0..<10 {
                let candidate = cursor.appendingPathComponent("Sources/WithSnozzy/Realtime3D/phase0.html")
                if FileManager.default.fileExists(atPath: candidate.path) { return cursor }
                cursor.deleteLastPathComponent()
            }
            return nil
        }

        private static func copyRuntimeFiles(to stage: URL) throws {
            let fileManager = FileManager.default
            let resourceRoot = Bundle.main.resourceURL?.appendingPathComponent("ThreePhase0")
            let html = resourceRoot?.appendingPathComponent("phase0.html")
            let js = resourceRoot?.appendingPathComponent("phase0.js")
            let bundle = resourceRoot?.appendingPathComponent("phase0.bundle.js")
            if let html, let js, let bundle,
               fileManager.fileExists(atPath: html.path), fileManager.fileExists(atPath: js.path),
               fileManager.fileExists(atPath: bundle.path) {
                try fileManager.copyItem(at: html, to: stage.appendingPathComponent("phase0.html"))
                try fileManager.copyItem(at: js, to: stage.appendingPathComponent("phase0.js"))
                try fileManager.copyItem(at: bundle, to: stage.appendingPathComponent("phase0.bundle.js"))
                if let vendor = resourceRoot?.appendingPathComponent("vendor"),
                   fileManager.fileExists(atPath: vendor.path) {
                    try fileManager.copyItem(at: vendor, to: stage.appendingPathComponent("vendor"))
                }
                return
            }
            guard let root = sourceRoot() else { throw HarnessError.missingRuntimeFiles }
            let sourceHTML = root.appendingPathComponent("Sources/WithSnozzy/Realtime3D/phase0.html")
            let sourceJS = root.appendingPathComponent("Sources/WithSnozzy/Realtime3D/phase0.js")
            let vendorRoot = root.appendingPathComponent("Vendor/ThreeJS")
            guard fileManager.fileExists(atPath: sourceHTML.path),
                  fileManager.fileExists(atPath: sourceJS.path),
                  fileManager.fileExists(atPath: vendorRoot.path)
            else { throw HarnessError.missingRuntimeFiles }
            try fileManager.copyItem(at: sourceHTML, to: stage.appendingPathComponent("phase0.html"))
            try fileManager.copyItem(at: sourceJS, to: stage.appendingPathComponent("phase0.js"))
            let sourceBundle = root.appendingPathComponent("Sources/WithSnozzy/Realtime3D/phase0.bundle.js")
            guard fileManager.fileExists(atPath: sourceBundle.path) else { throw HarnessError.missingRuntimeFiles }
            try fileManager.copyItem(at: sourceBundle, to: stage.appendingPathComponent("phase0.bundle.js"))
            let vendor = stage.appendingPathComponent("vendor", isDirectory: true)
            try fileManager.createDirectory(at: vendor, withIntermediateDirectories: true)
            try fileManager.copyItem(at: vendorRoot.appendingPathComponent("three.module.min.js"),
                                     to: vendor.appendingPathComponent("three.module.min.js"))
            let loaders = vendor.appendingPathComponent("examples/jsm/loaders", isDirectory: true)
            let utils = vendor.appendingPathComponent("examples/jsm/utils", isDirectory: true)
            try fileManager.createDirectory(at: loaders, withIntermediateDirectories: true)
            try fileManager.createDirectory(at: utils, withIntermediateDirectories: true)
            try fileManager.copyItem(at: vendorRoot.appendingPathComponent("examples/jsm/loaders/GLTFLoader.js"),
                                     to: loaders.appendingPathComponent("GLTFLoader.js"))
            try fileManager.copyItem(at: vendorRoot.appendingPathComponent("examples/jsm/utils/BufferGeometryUtils.js"),
                                     to: utils.appendingPathComponent("BufferGeometryUtils.js"))
        }

        private static func rssSnapshot() -> [String: Any] {
            let process = Process()
            let pipe = Pipe()
            process.executableURL = URL(fileURLWithPath: "/bin/ps")
            process.arguments = ["-axo", "pid=,ppid=,rss=,command="]
            process.standardOutput = pipe
            do { try process.run() } catch { return ["error": error.localizedDescription] }
            let data = pipe.fileHandleForReading.readDataToEndOfFile()
            process.waitUntilExit()
            struct Row { let pid: Int; let ppid: Int; let rssKB: Int; let command: String }
            var rows: [Row] = []
            for line in String(decoding: data, as: UTF8.self).split(separator: "\n") {
                let fields = line.split(maxSplits: 3, whereSeparator: { $0 == " " || $0 == "\t" })
                guard fields.count == 4,
                      let pid = Int(fields[0]), let ppid = Int(fields[1]), let rss = Int(fields[2])
                else { continue }
                rows.append(Row(pid: pid, ppid: ppid, rssKB: rss, command: String(fields[3])))
            }
            let ownPID = Int(getpid())
            var descendants: Set<Int> = [ownPID]
            var changed = true
            while changed {
                changed = false
                for row in rows where descendants.contains(row.ppid) && !descendants.contains(row.pid) {
                    descendants.insert(row.pid); changed = true
                }
            }
            let own = rows.first(where: { $0.pid == ownPID })
            let childRows = rows.filter { descendants.contains($0.pid) && $0.pid != ownPID }
            let webRows = childRows.filter {
                let command = $0.command.lowercased()
                return command.contains("webkit") || command.contains("webcontent")
            }
            return [
                "appRSSBytes": (own?.rssKB ?? 0) * 1024,
                "webContentRSSBytes": webRows.reduce(0) { $0 + $1.rssKB * 1024 },
                "webContentProcessCount": webRows.count,
                "childProcessCount": childRows.count,
                "sampledAt": ISO8601DateFormatter().string(from: Date()),
            ]
        }
    }
}

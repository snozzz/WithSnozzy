import AppKit
import SwiftUI
import SnozzyDomain
import SnozzyScene
import SnozzyUI
import SnozzyWorld

@main
@MainActor
struct SnozzyLab {
    static func main() throws {
        let arguments = Array(CommandLine.arguments.dropFirst())
        let root = try assetRoot(from: arguments)
        let assets = try SceneAssets.verifiedDirectory(root)

        if arguments.contains("--assetcheck") {
            guard let manifest = assets.library?.catalog.manifest else { throw LabError.assetsUnavailable }
            print("ASSETCHECK PASS records=\(manifest.records.count) packs=\(manifest.packs.count) hotspots=\(manifest.hotspots.count)")
            return
        }

        if arguments.contains("--layercheck") {
            let expected = ["window", "room", "legs", "body", "desk", "hands/props", "face", "feedback"]
            guard SceneSurface.productionLayerOrder == expected else { throw LabError.layerOrder }
            print("LAYERCHECK PASS \(expected.joined(separator: " -> "))")
            return
        }

        let snapshot = makeSnapshot()
        if let output = value(after: "--storagecheck", in: arguments) {
            let size = CGSize(width: 720, height: 480)
            let view = SanctuaryRootView(
                store: makeStore(),
                assets: assets,
                fixedNowMilliseconds: 1_003_500,
                bootstrapOnAppear: false,
                persistence: .unavailable(
                    message: "存档校验失败；持久化操作已暂停。",
                    quarantinePath: "/tmp/SnozzySanctuary/Corrupt/world-state.json.copy"
                ),
                actionSink: { _, _ in }
            )
            try render(view, size: size, output: URL(fileURLWithPath: output))
            print("STORAGECHECK PASS surface=SanctuaryRootView output=\(output)")
            return
        }

        if let output = value(after: "--compactcheck", in: arguments) {
            let size = CGSize(width: 300, height: 320)
            let view = FloatingCompanionSurface(
                snapshot: snapshot,
                assets: assets,
                geometry: SceneGeometry(viewportSize: size)
            )
            try render(view, size: size, output: URL(fileURLWithPath: output))
            print("COMPACTCHECK PASS output=\(output)")
            return
        }

        if let directory = value(after: "--responsivecheck", in: arguments) {
            let output = URL(fileURLWithPath: directory, isDirectory: true)
            let sizes = [
                ("minimum", CGSize(width: 720, height: 480)),
                ("wide", CGSize(width: 1280, height: 640)),
                ("tall", CGSize(width: 840, height: 760))
            ]
            for (name, size) in sizes {
                let view = SanctuaryRootView(
                    store: makeStore(),
                    assets: assets,
                    fixedNowMilliseconds: 1_003_500,
                    initialPanel: name == "minimum" ? .now : nil,
                    bootstrapOnAppear: false,
                    actionSink: { _, _ in }
                )
                try render(view, size: size, output: output.appending(path: "\(name).png"))
            }
            print("RESPONSIVECHECK PASS variants=\(sizes.count) output=\(directory)")
            return
        }

        let size = CGSize(width: 1_536, height: 1_024)
        if let output = value(after: "--scenesnapshot", in: arguments) {
            let view = SceneSurface(
                snapshot: snapshot,
                assets: assets,
                geometry: SceneGeometry(viewportSize: size)
            )
            try render(view, size: size, output: URL(fileURLWithPath: output))
            print("SCENESNAPSHOT PASS surface=SceneSurface output=\(output)")
            return
        }

        let output = value(after: "--rootsnapshot", in: arguments)
            ?? value(after: "--smoke", in: arguments)
            ?? "/tmp/SnozzySanctuary-rootsnapshot.png"
        let fixedClock = FixedClock(WorldInstant(rawValue: 1_003_500))
        let view = SanctuaryRootView(
            store: makeStore(),
            assets: assets,
            fixedNowMilliseconds: fixedClock.now().rawValue,
            bootstrapOnAppear: false,
            actionSink: { _, _ in }
        )
        try render(view, size: size, output: URL(fileURLWithPath: output))
        print("ROOTSNAPSHOT PASS surface=SanctuaryRootView output=\(output)")
    }

    private static func makeSnapshot() -> SceneSnapshot {
        makeStore().sceneSnapshot(atMilliseconds: 1_003_500)
    }

    private static func makeStore() -> WorldStore {
        let store = WorldStore()
        store.bootstrap(atMilliseconds: 1_000_000)
        store.selectNextActivity(atMilliseconds: 1_000_100)
        store.adjustMood(by: 0.1, atMilliseconds: 1_000_200)
        _ = store.drainEffects()
        return store
    }

    private static func assetRoot(from arguments: [String]) throws -> URL {
        if let path = value(after: "--asset-root", in: arguments) {
            return URL(fileURLWithPath: path, isDirectory: true)
        }
        // Compile-time source location is a deterministic Lab default, never caller CWD.
        let sourceFile = URL(fileURLWithPath: #filePath)
        let project = sourceFile
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
        let root = project.appending(path: "Resources", directoryHint: .isDirectory)
        guard FileManager.default.fileExists(atPath: root.appending(path: "AssetCatalog.json").path) else {
            throw LabError.assetsUnavailable
        }
        return root
    }

    private static func value(after flag: String, in arguments: [String]) -> String? {
        guard let index = arguments.firstIndex(of: flag), arguments.indices.contains(index + 1) else {
            return nil
        }
        return arguments[index + 1]
    }

    private static func render<V: View>(_ view: V, size: CGSize, output: URL) throws {
        let renderer = ImageRenderer(content: view.frame(width: size.width, height: size.height))
        renderer.scale = 1
        guard let image = renderer.cgImage else { throw LabError.renderFailed }
        let representation = NSBitmapImageRep(cgImage: image)
        guard let png = representation.representation(using: .png, properties: [:]) else {
            throw LabError.encodeFailed
        }
        try FileManager.default.createDirectory(
            at: output.deletingLastPathComponent(),
            withIntermediateDirectories: true
        )
        try png.write(to: output, options: .atomic)
    }

    private enum LabError: Error {
        case renderFailed
        case encodeFailed
        case assetsUnavailable
        case layerOrder
    }
}

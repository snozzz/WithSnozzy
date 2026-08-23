import AppKit
import SwiftUI
import SnozzyScene
import SnozzyUI
import SnozzyWorld

@main
@MainActor
struct SnozzyLab {
    static func main() throws {
        let arguments = Array(CommandLine.arguments.dropFirst())
        let outputPath = smokeOutputPath(from: arguments)

        let store = WorldStore()
        store.bootstrap(atMilliseconds: 1_000_000)
        store.selectNextActivity(atMilliseconds: 1_000_100)
        store.adjustMood(by: 0.1, atMilliseconds: 1_000_200)
        let snapshot = store.sceneSnapshot(atMilliseconds: 1_003_500)
        let size = CGSize(width: 1_536, height: 1_024)
        let surface = SceneSurface(
            snapshot: snapshot,
            assets: .fallback,
            geometry: SceneGeometry(viewportSize: size)
        )
        .frame(width: size.width, height: size.height)

        let renderer = ImageRenderer(content: surface)
        renderer.scale = 1
        guard let image = renderer.cgImage else {
            throw LabError.renderFailed
        }

        let representation = NSBitmapImageRep(cgImage: image)
        guard let png = representation.representation(using: .png, properties: [:]) else {
            throw LabError.encodeFailed
        }

        let outputURL = URL(fileURLWithPath: outputPath)
        try FileManager.default.createDirectory(
            at: outputURL.deletingLastPathComponent(),
            withIntermediateDirectories: true
        )
        try png.write(to: outputURL, options: .atomic)
        print("{\"status\":\"PASS\",\"surface\":\"SceneSurface\",\"output\":\"\(outputURL.path)\"}")
    }

    private static func smokeOutputPath(from arguments: [String]) -> String {
        if let index = arguments.firstIndex(of: "--smoke"), arguments.indices.contains(index + 1) {
            return arguments[index + 1]
        }
        return "/tmp/SnozzySanctuary-smoke.png"
    }

    private enum LabError: Error {
        case renderFailed
        case encodeFailed
    }
}

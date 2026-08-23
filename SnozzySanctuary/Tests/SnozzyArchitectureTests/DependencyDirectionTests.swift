import Foundation
import XCTest

final class DependencyDirectionTests: XCTestCase {
    private let allowedImports: [String: Set<String>] = [
        "SnozzyDomain": [],
        "SnozzyWorld": ["SnozzyDomain"],
        "SnozzyData": ["SnozzyDomain"],
        "SnozzyAssets": ["SnozzyDomain"],
        "SnozzyAudio": ["SnozzyDomain"],
        "SnozzyPlatform": ["SnozzyDomain"],
        "SnozzyRuntime": ["SnozzyAudio", "SnozzyData", "SnozzyDomain", "SnozzyPlatform", "SnozzyWorld"],
        "SnozzyScene": ["SnozzyDomain", "SnozzyWorld", "SnozzyAssets"],
        "SnozzyUI": ["SnozzyDomain", "SnozzyWorld", "SnozzyScene", "SnozzyPlatform"],
        "SnozzySanctuaryApp": [
            "SnozzyDomain", "SnozzyWorld", "SnozzyData", "SnozzyAssets",
            "SnozzyAudio", "SnozzyPlatform", "SnozzyRuntime", "SnozzyScene", "SnozzyUI"
        ],
        "SnozzyLab": ["SnozzyDomain", "SnozzyWorld", "SnozzyScene", "SnozzyUI"]
    ]

    func testSourceImportsFollowDependencyDirection() throws {
        let sourceRoot = packageRoot.appending(path: "Sources", directoryHint: .isDirectory)

        for (target, allowed) in allowedImports {
            let targetURL = sourceRoot.appending(path: target, directoryHint: .isDirectory)
            for file in try swiftFiles(in: targetURL) {
                let contents = try String(contentsOf: file, encoding: .utf8)
                for line in contents.split(separator: "\n") {
                    let text = line.trimmingCharacters(in: .whitespaces)
                    guard text.hasPrefix("import Snozzy") else { continue }
                    let imported = String(text.dropFirst("import ".count))
                    XCTAssertTrue(
                        allowed.contains(imported),
                        "\(target) imports forbidden module \(imported) in \(file.lastPathComponent)"
                    )
                }
            }
        }
    }

    func testSceneSurfaceHasOneDefinitionAndBothConsumersUseIt() throws {
        let sources = packageRoot.appending(path: "Sources", directoryHint: .isDirectory)
        var definitions = 0
        var labUsesProductionSurface = false
        var uiUsesProductionSurface = false

        for file in try swiftFiles(in: sources) {
            let contents = try String(contentsOf: file, encoding: .utf8)
            definitions += contents.components(separatedBy: "struct SceneSurface: View").count - 1
            if file.path.contains("/SnozzyLab/"), contents.contains("SceneSurface(") {
                labUsesProductionSurface = true
            }
            if file.path.contains("/SnozzyUI/"), contents.contains("SceneSurface(") {
                uiUsesProductionSurface = true
            }
        }

        XCTAssertEqual(definitions, 1)
        XCTAssertTrue(labUsesProductionSurface)
        XCTAssertTrue(uiUsesProductionSurface)
    }

    func testBusinessTargetsDoNotReadSystemClockOrRandomness() throws {
        for target in ["SnozzyDomain", "SnozzyWorld", "SnozzyScene"] {
            let directory = packageRoot
                .appending(path: "Sources", directoryHint: .isDirectory)
                .appending(path: target, directoryHint: .isDirectory)
            for file in try swiftFiles(in: directory) {
                let contents = try String(contentsOf: file, encoding: .utf8)
                XCTAssertFalse(contents.contains("Date()"), "business Date() in \(file.path)")
                XCTAssertFalse(contents.contains("Date.now"), "business Date.now in \(file.path)")
                XCTAssertFalse(contents.contains("Timer."), "business Timer in \(file.path)")
                XCTAssertFalse(contents.contains("SystemRandomNumberGenerator"), "system random in \(file.path)")
            }
        }
    }

    private var packageRoot: URL {
        URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
    }

    private func swiftFiles(in directory: URL) throws -> [URL] {
        guard let enumerator = FileManager.default.enumerator(
            at: directory,
            includingPropertiesForKeys: [.isRegularFileKey]
        ) else { return [] }
        return enumerator.compactMap { item in
            guard let url = item as? URL, url.pathExtension == "swift" else { return nil }
            return url
        }
    }
}

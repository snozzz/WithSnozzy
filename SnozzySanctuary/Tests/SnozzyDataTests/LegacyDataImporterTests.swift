import Foundation
import XCTest
@testable import SnozzyData

@MainActor
final class LegacyDataImporterTests: XCTestCase {
    func testLegacyImportIsReadOnlyAndIdempotent() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let legacy = root.appendingPathComponent("WithSnozzy", isDirectory: true)
        let sanctuary = root.appendingPathComponent("SnozzySanctuary", isDirectory: true)
        try FileManager.default.createDirectory(at: legacy, withIntermediateDirectories: true)

        let sourceData: [String: Data] = [
            "tasks.json": Data("[{\"title\":\"write\"}]".utf8),
            "focus-history.json": Data("[{\"minutes\":25}]".utf8),
            "focus-settings.json": Data("{\"workMinutes\":25}".utf8),
            "settings.json": Data("{\"volume\":0.5}".utf8),
            "chat.json": Data("[{\"role\":\"user\",\"text\":\"hi\"}]".utf8),
            "memories.json": Data("[{\"text\":\"remember\"}]".utf8),
            "library.json": Data("[{\"url\":\"file:///song.mp3\"}]".utf8)
        ]
        for (name, data) in sourceData {
            try data.write(to: legacy.appendingPathComponent(name))
        }

        let importedAt = Date(timeIntervalSince1970: 1_800_000_000)
        let importer = LegacyDataImporter(
            legacyDirectory: legacy,
            sanctuaryDirectory: sanctuary,
            now: { importedAt }
        )
        let first = try await importer.importOnce()

        XCTAssertEqual(first.importedCount, sourceData.count)
        XCTAssertEqual(first.entries.count, 7)
        XCTAssertTrue(first.entries.allSatisfy { $0.status == .imported })
        for (name, expected) in sourceData {
            let stagedURL = await importer.stagedURL(for: name)
            XCTAssertEqual(
                try Data(contentsOf: stagedURL),
                expected,
                "Staged data should be a byte-for-byte copy"
            )
            XCTAssertEqual(
                try Data(contentsOf: legacy.appendingPathComponent(name)),
                expected,
                "Importer must not alter legacy data"
            )
        }

        let markerURL = await importer.markerURL()
        let marker = try JSONDecoder().decode(
            Envelope<ImportReport>.self,
            from: Data(contentsOf: markerURL)
        )
        XCTAssertEqual(marker.payload, first)

        let changedLegacyTasks = Data("[{\"title\":\"changed after import\"}]".utf8)
        try changedLegacyTasks.write(to: legacy.appendingPathComponent("tasks.json"))
        let relaunchedImporter = LegacyDataImporter(
            legacyDirectory: legacy,
            sanctuaryDirectory: sanctuary,
            now: { Date(timeIntervalSince1970: 1_900_000_000) }
        )
        let second = try await relaunchedImporter.importOnce()

        XCTAssertEqual(second, first, "Marker must make repeated calls idempotent")
        let stagedTasksURL = await relaunchedImporter.stagedURL(for: "tasks.json")
        XCTAssertEqual(
            try Data(contentsOf: stagedTasksURL),
            sourceData["tasks.json"]
        )
        XCTAssertEqual(
            try Data(contentsOf: legacy.appendingPathComponent("tasks.json")),
            changedLegacyTasks,
            "A repeated import still must not rewrite the legacy file"
        )
    }

    func testMalformedLegacyFileIsReportedWithoutTouchingIt() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let legacy = root.appendingPathComponent("WithSnozzy", isDirectory: true)
        let sanctuary = root.appendingPathComponent("SnozzySanctuary", isDirectory: true)
        try FileManager.default.createDirectory(at: legacy, withIntermediateDirectories: true)
        let malformed = Data("not-json".utf8)
        try malformed.write(to: legacy.appendingPathComponent("tasks.json"))

        let importer = LegacyDataImporter(legacyDirectory: legacy, sanctuaryDirectory: sanctuary)
        let report = try await importer.importOnce()
        let taskEntry = try XCTUnwrap(report.entries.first { $0.sourceFileName == "tasks.json" })

        XCTAssertEqual(taskEntry.status, .invalidJSON)
        XCTAssertEqual(try Data(contentsOf: legacy.appendingPathComponent("tasks.json")), malformed)
        let stagedTasksURL = await importer.stagedURL(for: "tasks.json")
        XCTAssertFalse(FileManager.default.fileExists(atPath: stagedTasksURL.path))
    }

    private func makeTemporaryDirectory() throws -> URL {
        let directory = FileManager.default.temporaryDirectory
            .appendingPathComponent("SnozzyLegacyImportTests-\(UUID().uuidString)", isDirectory: true)
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        return directory
    }
}

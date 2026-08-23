import Foundation

public enum LegacyImportStatus: String, Codable, Equatable, Sendable {
    case imported
    case missing
    case invalidJSON
    case failed
}

public struct LegacyImportEntry: Codable, Equatable, Sendable {
    public let category: String
    public let sourceFileName: String
    public let stagedFileName: String?
    public let status: LegacyImportStatus
    public let byteCount: Int
    public let message: String?

    public init(
        category: String,
        sourceFileName: String,
        stagedFileName: String?,
        status: LegacyImportStatus,
        byteCount: Int,
        message: String?
    ) {
        self.category = category
        self.sourceFileName = sourceFileName
        self.stagedFileName = stagedFileName
        self.status = status
        self.byteCount = byteCount
        self.message = message
    }
}

public struct ImportReport: Codable, Equatable, Sendable {
    public static let schemaVersion = 1

    public let reportVersion: Int
    public let importedAt: Date
    public let sourceDirectory: String
    public let stagingDirectory: String
    public let entries: [LegacyImportEntry]

    public init(
        reportVersion: Int = ImportReport.schemaVersion,
        importedAt: Date,
        sourceDirectory: String,
        stagingDirectory: String,
        entries: [LegacyImportEntry]
    ) {
        self.reportVersion = reportVersion
        self.importedAt = importedAt
        self.sourceDirectory = sourceDirectory
        self.stagingDirectory = stagingDirectory
        self.entries = entries
    }

    public var importedCount: Int {
        entries.lazy.filter { $0.status == .imported }.count
    }
}

/// Stages a one-time, byte-for-byte copy of supported WithSnozzy JSON files.
/// The source directory is opened for reads only; marker and staged files live
/// exclusively below the SnozzySanctuary directory.
public actor LegacyDataImporter {
    public static let markerFileName = "legacy-import-marker.json"
    public static let stagingDirectoryName = "WithSnozzy"

    private let legacyDirectory: URL
    private let importsDirectory: URL
    private let stagingDirectory: URL
    private let markerStore: JSONCodableStore<ImportReport>
    private let now: @Sendable () -> Date

    public init(
        legacyDirectory: URL,
        sanctuaryDirectory: URL,
        now: @escaping @Sendable () -> Date = { Date() }
    ) {
        self.legacyDirectory = legacyDirectory
        self.importsDirectory = sanctuaryDirectory.appendingPathComponent("Imports", isDirectory: true)
        self.stagingDirectory = sanctuaryDirectory
            .appendingPathComponent("Imports", isDirectory: true)
            .appendingPathComponent(Self.stagingDirectoryName, isDirectory: true)
        self.markerStore = JSONCodableStore(
            fileURL: sanctuaryDirectory
                .appendingPathComponent("Imports", isDirectory: true)
                .appendingPathComponent(Self.markerFileName, isDirectory: false),
            schemaVersion: ImportReport.schemaVersion,
            now: now
        )
        self.now = now
    }

    public static func live() throws -> LegacyDataImporter {
        LegacyDataImporter(
            legacyDirectory: try SnozzyDataLocation.legacyDirectory(),
            sanctuaryDirectory: try SnozzyDataLocation.defaultDirectory()
        )
    }

    /// Returns the existing marker verbatim after the first successful run.
    /// This makes repeated launch-time calls idempotent even if legacy data later changes.
    public func importOnce() async throws -> ImportReport {
        if let existing = try await markerStore.load() {
            return existing
        }

        try FileManager.default.createDirectory(
            at: importsDirectory,
            withIntermediateDirectories: true,
            attributes: [.posixPermissions: 0o700]
        )
        try FileManager.default.createDirectory(
            at: stagingDirectory,
            withIntermediateDirectories: true,
            attributes: [.posixPermissions: 0o700]
        )

        var entries: [LegacyImportEntry] = []
        for source in Self.sources {
            entries.append(importSource(source))
        }

        let report = ImportReport(
            importedAt: now(),
            sourceDirectory: legacyDirectory.path,
            stagingDirectory: stagingDirectory.path,
            entries: entries
        )
        try await markerStore.save(report)
        return report
    }

    public func markerURL() -> URL {
        importsDirectory.appendingPathComponent(Self.markerFileName)
    }

    public func stagedURL(for sourceFileName: String) -> URL {
        stagingDirectory.appendingPathComponent(sourceFileName)
    }

    private func importSource(_ source: LegacySource) -> LegacyImportEntry {
        let sourceURL = legacyDirectory.appendingPathComponent(source.fileName, isDirectory: false)
        guard FileManager.default.fileExists(atPath: sourceURL.path) else {
            return LegacyImportEntry(
                category: source.category,
                sourceFileName: source.fileName,
                stagedFileName: nil,
                status: .missing,
                byteCount: 0,
                message: nil
            )
        }

        let data: Data
        do {
            // Data(contentsOf:) is the only source operation. There is deliberately
            // no remove, move, attribute mutation, or write against legacyDirectory.
            data = try Data(contentsOf: sourceURL, options: [.mappedIfSafe])
        } catch {
            return failedEntry(source, message: "Unable to read source JSON: \(error)")
        }

        do {
            _ = try JSONSerialization.jsonObject(with: data, options: [.fragmentsAllowed])
        } catch {
            return invalidEntry(source, message: "Malformed JSON: \(error)")
        }

        do {
            let destinationURL = stagingDirectory.appendingPathComponent(source.fileName)
            try AtomicFileWriter.write(data, to: destinationURL)
            return LegacyImportEntry(
                category: source.category,
                sourceFileName: source.fileName,
                stagedFileName: source.fileName,
                status: .imported,
                byteCount: data.count,
                message: nil
            )
        } catch {
            return failedEntry(source, message: "Unable to stage source JSON: \(error)")
        }
    }

    private func invalidEntry(_ source: LegacySource, message: String) -> LegacyImportEntry {
        LegacyImportEntry(
            category: source.category,
            sourceFileName: source.fileName,
            stagedFileName: nil,
            status: .invalidJSON,
            byteCount: 0,
            message: message
        )
    }

    private func failedEntry(_ source: LegacySource, message: String) -> LegacyImportEntry {
        LegacyImportEntry(
            category: source.category,
            sourceFileName: source.fileName,
            stagedFileName: nil,
            status: .failed,
            byteCount: 0,
            message: message
        )
    }

    private static let sources: [LegacySource] = [
        LegacySource(category: "tasks", fileName: "tasks.json"),
        LegacySource(category: "focus", fileName: "focus-history.json"),
        LegacySource(category: "focus", fileName: "focus-settings.json"),
        LegacySource(category: "settings", fileName: "settings.json"),
        LegacySource(category: "chat", fileName: "chat.json"),
        LegacySource(category: "memories", fileName: "memories.json"),
        LegacySource(category: "library", fileName: "library.json")
    ]
}

private struct LegacySource: Sendable {
    let category: String
    let fileName: String
}

import Darwin
import Foundation

/// The on-disk contract for all mutable Sanctuary state.
///
/// Payloads remain domain-owned. The data layer only owns compatibility metadata,
/// revisioning, and safe replacement of the encoded bytes.
public struct Envelope<Payload: Codable & Sendable>: Codable, Sendable {
    public var schemaVersion: Int
    public var revision: UInt64
    public var savedAt: Date
    public var payload: Payload

    public init(
        schemaVersion: Int,
        revision: UInt64,
        savedAt: Date,
        payload: Payload
    ) {
        self.schemaVersion = schemaVersion
        self.revision = revision
        self.savedAt = savedAt
        self.payload = payload
    }
}

extension Envelope: Equatable where Payload: Equatable {}

public struct StoreProtection: Equatable, Sendable {
    public let protectedAt: Date
    public let reason: String
    public let quarantineURL: URL?

    public init(protectedAt: Date, reason: String, quarantineURL: URL?) {
        self.protectedAt = protectedAt
        self.reason = reason
        self.quarantineURL = quarantineURL
    }
}

public enum StoreAccessMode: Equatable, Sendable {
    case readWrite
    case readOnly(StoreProtection)
}

public enum OlderSchemaPolicy: Equatable, Sendable {
    /// Decode older payload bytes directly. The payload type is responsible for
    /// supplying defaults for newly added fields.
    case decodeCompatiblePayload
    /// Require an explicit migration closure before any older payload is exposed.
    case requireMigration
}

public enum UnwrappedPayloadPolicy: Equatable, Sendable {
    /// Compatibility for stores whose first release persisted a raw Codable value.
    case decodeCompatiblePayload
    /// Treat an unwrapped value as a known older schema and require the same
    /// explicit migration closure used for an older Envelope.
    case requireMigration(sourceSchemaVersion: Int)
}

public struct StoreMetadata: Equatable, Sendable {
    public let schemaVersion: Int
    public let revision: UInt64
    public let savedAt: Date?

    public init(schemaVersion: Int, revision: UInt64, savedAt: Date?) {
        self.schemaVersion = schemaVersion
        self.revision = revision
        self.savedAt = savedAt
    }
}

public enum DataStoreError: Error, Sendable {
    case readOnly(StoreProtection)
    case corrupted(fileURL: URL, quarantineURL: URL?, reason: String)
    case unsupportedSchema(found: Int, supported: Int)
    case migrationRequired(found: Int, target: Int)
    case schemaMismatch(envelope: Int, payload: Int, target: Int)
    case revisionOverflow
    case io(operation: String, path: String, code: Int32)
}

extension DataStoreError: LocalizedError {
    public var errorDescription: String? {
        switch self {
        case let .readOnly(protection):
            "数据已进入只读保护：\(protection.reason)"
        case let .corrupted(fileURL, quarantineURL, reason):
            if let quarantineURL {
                "无法解码 \(fileURL.lastPathComponent)，损坏副本已隔离到 \(quarantineURL.path)：\(reason)"
            } else {
                "无法解码 \(fileURL.lastPathComponent)，且无法创建隔离副本：\(reason)"
            }
        case let .unsupportedSchema(found, supported):
            "数据 schema \(found) 高于当前支持的 schema \(supported)"
        case let .migrationRequired(found, target):
            "数据 schema \(found) 必须显式迁移到 schema \(target)"
        case let .schemaMismatch(envelope, payload, target):
            "数据 schema 不一致：envelope=\(envelope)，payload=\(payload)，target=\(target)"
        case .revisionOverflow:
            "数据 revision 已达到上限"
        case let .io(operation, path, code):
            "\(operation) 失败（\(path)，errno=\(code)）"
        }
    }
}

/// Resolves the new app's storage without ever consulting the legacy app folder.
public enum SnozzyDataLocation {
    public static let directoryName = "SnozzySanctuary"
    public static let legacyDirectoryName = "WithSnozzy"

    public static func defaultDirectory(createIfNeeded: Bool = true) throws -> URL {
        let fileManager = FileManager.default
        let applicationSupport = try fileManager.url(
            for: .applicationSupportDirectory,
            in: .userDomainMask,
            appropriateFor: nil,
            create: createIfNeeded
        )
        let directory = applicationSupport.appendingPathComponent(directoryName, isDirectory: true)
        if createIfNeeded {
            try fileManager.createDirectory(
                at: directory,
                withIntermediateDirectories: true,
                attributes: [.posixPermissions: 0o700]
            )
        }
        return directory
    }

    public static func legacyDirectory() throws -> URL {
        let applicationSupport = try FileManager.default.url(
            for: .applicationSupportDirectory,
            in: .userDomainMask,
            appropriateFor: nil,
            create: false
        )
        return applicationSupport.appendingPathComponent(legacyDirectoryName, isDirectory: true)
    }
}

/// Generic, actor-isolated JSON persistence. It also accepts an unwrapped payload
/// from the first Sanctuary scaffold and upgrades it to an Envelope on next save.
public actor JSONCodableStore<Payload: Codable & Sendable> {
    public typealias Migration = @Sendable (_ payloadData: Data, _ sourceSchemaVersion: Int) throws -> Payload
    public typealias SchemaValidator = @Sendable (
        _ payloadData: Data,
        _ envelopeSchemaVersion: Int,
        _ targetSchemaVersion: Int
    ) throws -> Void

    public nonisolated let fileURL: URL
    public nonisolated let schemaVersion: Int

    private let migration: Migration?
    private let schemaValidator: SchemaValidator?
    private let olderSchemaPolicy: OlderSchemaPolicy
    private let unwrappedPayloadPolicy: UnwrappedPayloadPolicy
    private let now: @Sendable () -> Date
    private let encoder: JSONEncoder
    private let decoder: JSONDecoder

    private var revision: UInt64 = 0
    private var savedAt: Date?
    private var accessMode: StoreAccessMode = .readWrite

    public init(
        fileURL: URL,
        schemaVersion: Int,
        migration: Migration? = nil,
        schemaValidator: SchemaValidator? = nil,
        olderSchemaPolicy: OlderSchemaPolicy = .decodeCompatiblePayload,
        unwrappedPayloadPolicy: UnwrappedPayloadPolicy = .decodeCompatiblePayload,
        now: @escaping @Sendable () -> Date = { Date() }
    ) {
        precondition(schemaVersion > 0, "schemaVersion must be positive")
        self.fileURL = fileURL
        self.schemaVersion = schemaVersion
        self.migration = migration
        self.schemaValidator = schemaValidator
        self.olderSchemaPolicy = olderSchemaPolicy
        self.unwrappedPayloadPolicy = unwrappedPayloadPolicy
        self.now = now

        let encoder = JSONEncoder()
        encoder.outputFormatting = [.prettyPrinted, .sortedKeys]
        self.encoder = encoder
        self.decoder = JSONDecoder()
    }

    public func load() throws -> Payload? {
        if case let .readOnly(protection) = accessMode {
            throw DataStoreError.readOnly(protection)
        }

        guard FileManager.default.fileExists(atPath: fileURL.path) else {
            return nil
        }

        let data = try Data(contentsOf: fileURL, options: [.mappedIfSafe])
        do {
            if Self.looksLikeEnvelope(data) {
                return try decodeEnvelope(data)
            }

            let payload: Payload
            switch unwrappedPayloadPolicy {
            case .decodeCompatiblePayload:
                payload = try decoder.decode(Payload.self, from: data)
            case let .requireMigration(sourceSchemaVersion):
                guard let migration else {
                    throw DataStoreError.migrationRequired(
                        found: sourceSchemaVersion,
                        target: schemaVersion
                    )
                }
                payload = try migration(data, sourceSchemaVersion)
            }
            revision = 0
            savedAt = nil
            return payload
        } catch let error as DataStoreError {
            switch error {
            case .unsupportedSchema, .migrationRequired, .schemaMismatch:
                protect(reason: error.localizedDescription)
                throw error
            default:
                let protection = protect(reason: error.localizedDescription)
                throw DataStoreError.corrupted(
                    fileURL: fileURL,
                    quarantineURL: protection.quarantineURL,
                    reason: error.localizedDescription
                )
            }
        } catch {
            let protection = protect(reason: String(describing: error))
            throw DataStoreError.corrupted(
                fileURL: fileURL,
                quarantineURL: protection.quarantineURL,
                reason: String(describing: error)
            )
        }
    }

    public func save(_ payload: Payload) throws {
        if case let .readOnly(protection) = accessMode {
            throw DataStoreError.readOnly(protection)
        }
        guard revision < UInt64.max else {
            throw DataStoreError.revisionOverflow
        }

        let nextRevision = revision + 1
        let nextSavedAt = now()
        let payloadData = try encoder.encode(payload)
        try schemaValidator?(payloadData, schemaVersion, schemaVersion)
        let envelope = Envelope(
            schemaVersion: schemaVersion,
            revision: nextRevision,
            savedAt: nextSavedAt,
            payload: payload
        )
        let data = try encoder.encode(envelope)
        try AtomicFileWriter.write(data, to: fileURL)
        revision = nextRevision
        savedAt = nextSavedAt
    }

    public func mode() -> StoreAccessMode {
        accessMode
    }

    public func metadata() -> StoreMetadata {
        StoreMetadata(schemaVersion: schemaVersion, revision: revision, savedAt: savedAt)
    }

    private func decodeEnvelope(_ data: Data) throws -> Payload {
        let header = try decoder.decode(EnvelopeHeader.self, from: data)
        guard header.schemaVersion > 0 else {
            throw DataStoreError.corrupted(
                fileURL: fileURL,
                quarantineURL: nil,
                reason: "schemaVersion must be positive"
            )
        }
        guard header.schemaVersion <= schemaVersion else {
            throw DataStoreError.unsupportedSchema(
                found: header.schemaVersion,
                supported: schemaVersion
            )
        }

        let payloadData = try Self.extractPayload(from: data)
        try schemaValidator?(payloadData, header.schemaVersion, schemaVersion)
        let payload: Payload
        if header.schemaVersion < schemaVersion {
            if let migration {
                payload = try migration(payloadData, header.schemaVersion)
            } else if olderSchemaPolicy == .decodeCompatiblePayload {
                // Default migration: Codable payloads that supply defaults for
                // newly introduced fields can decode an older payload directly.
                payload = try decoder.decode(Payload.self, from: payloadData)
            } else {
                throw DataStoreError.migrationRequired(
                    found: header.schemaVersion,
                    target: schemaVersion
                )
            }
        } else {
            payload = try decoder.decode(Payload.self, from: payloadData)
        }

        revision = header.revision
        savedAt = header.savedAt
        return payload
    }

    @discardableResult
    private func protect(reason: String) -> StoreProtection {
        let protectedAt = now()
        let quarantineDirectory = fileURL
            .deletingLastPathComponent()
            .appendingPathComponent("Corrupt", isDirectory: true)
        var quarantineURL: URL?

        do {
            try FileManager.default.createDirectory(
                at: quarantineDirectory,
                withIntermediateDirectories: true,
                attributes: [.posixPermissions: 0o700]
            )
            let milliseconds = Int64(protectedAt.timeIntervalSince1970 * 1_000)
            let name = "\(fileURL.lastPathComponent).corrupt-\(milliseconds)-\(UUID().uuidString)"
            let candidate = quarantineDirectory.appendingPathComponent(name, isDirectory: false)
            try FileManager.default.copyItem(at: fileURL, to: candidate)
            quarantineURL = candidate
        } catch {
            quarantineURL = nil
        }

        let protection = StoreProtection(
            protectedAt: protectedAt,
            reason: reason,
            quarantineURL: quarantineURL
        )
        accessMode = .readOnly(protection)
        return protection
    }

    private static func looksLikeEnvelope(_ data: Data) -> Bool {
        guard
            let object = try? JSONSerialization.jsonObject(with: data),
            let dictionary = object as? [String: Any]
        else {
            return false
        }
        return dictionary["schemaVersion"] != nil && dictionary["payload"] != nil
    }

    private static func extractPayload(from data: Data) throws -> Data {
        let object = try JSONSerialization.jsonObject(with: data)
        guard
            let dictionary = object as? [String: Any],
            let payload = dictionary["payload"]
        else {
            throw DecodingError.dataCorrupted(
                .init(codingPath: [], debugDescription: "Envelope payload is missing")
            )
        }
        return try JSONSerialization.data(withJSONObject: payload, options: [.fragmentsAllowed])
    }

}

private struct EnvelopeHeader: Decodable {
    let schemaVersion: Int
    let revision: UInt64
    let savedAt: Date
}

enum AtomicFileWriter {
    static func write(
        _ data: Data,
        to destinationURL: URL,
        beforeReplace: (() throws -> Void)? = nil
    ) throws {
        let fileManager = FileManager.default
        let directoryURL = destinationURL.deletingLastPathComponent()
        try fileManager.createDirectory(
            at: directoryURL,
            withIntermediateDirectories: true,
            attributes: [.posixPermissions: 0o700]
        )

        let temporaryURL = directoryURL.appendingPathComponent(
            ".\(destinationURL.lastPathComponent).tmp-\(UUID().uuidString)",
            isDirectory: false
        )
        var fileDescriptor = Darwin.open(
            temporaryURL.path,
            O_WRONLY | O_CREAT | O_EXCL | O_CLOEXEC,
            S_IRUSR | S_IWUSR
        )
        guard fileDescriptor >= 0 else {
            throw posixError("open temporary file", temporaryURL)
        }

        var shouldRemoveTemporaryFile = true
        defer {
            if fileDescriptor >= 0 {
                _ = Darwin.close(fileDescriptor)
            }
            if shouldRemoveTemporaryFile {
                try? fileManager.removeItem(at: temporaryURL)
            }
        }

        try data.withUnsafeBytes { rawBuffer in
            guard let baseAddress = rawBuffer.baseAddress else { return }
            var offset = 0
            while offset < rawBuffer.count {
                let written = Darwin.write(
                    fileDescriptor,
                    baseAddress.advanced(by: offset),
                    rawBuffer.count - offset
                )
                if written < 0 {
                    if errno == EINTR { continue }
                    throw posixError("write temporary file", temporaryURL)
                }
                offset += written
            }
        }

        try synchronize(fileDescriptor, url: temporaryURL)
        guard Darwin.close(fileDescriptor) == 0 else {
            fileDescriptor = -1
            throw posixError("close temporary file", temporaryURL)
        }
        fileDescriptor = -1

        try beforeReplace?()

        guard Darwin.rename(temporaryURL.path, destinationURL.path) == 0 else {
            throw posixError("atomically replace file", destinationURL)
        }
        shouldRemoveTemporaryFile = false

        let directoryDescriptor = Darwin.open(directoryURL.path, O_RDONLY | O_CLOEXEC)
        guard directoryDescriptor >= 0 else {
            throw posixError("open parent directory", directoryURL)
        }
        defer { _ = Darwin.close(directoryDescriptor) }
        try synchronize(directoryDescriptor, url: directoryURL)
    }

    private static func synchronize(_ fileDescriptor: Int32, url: URL) throws {
        while Darwin.fsync(fileDescriptor) != 0 {
            if errno == EINTR { continue }
            throw posixError("fsync", url)
        }
    }

    private static func posixError(_ operation: String, _ url: URL) -> DataStoreError {
        DataStoreError.io(operation: operation, path: url.path, code: errno)
    }
}

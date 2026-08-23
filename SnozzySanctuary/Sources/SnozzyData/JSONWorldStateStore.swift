import Foundation
import SnozzyDomain

/// Domain-specific adapter kept intentionally thin so WorldState can evolve
/// without pushing its fields into the persistence implementation.
public actor JSONWorldStateStore: WorldStatePersisting {
    public typealias Migration = JSONCodableStore<WorldState>.Migration
    public static let fileName = "world-state.json"

    public nonisolated let fileURL: URL
    private let store: JSONCodableStore<WorldState>

    public init(fileURL: URL, migration: Migration? = nil) {
        self.fileURL = fileURL
        store = JSONCodableStore(
            fileURL: fileURL,
            schemaVersion: WorldState.schemaVersion,
            migration: migration,
            schemaValidator: WorldStateMigration.validateSchema,
            olderSchemaPolicy: .requireMigration,
            unwrappedPayloadPolicy: .requireMigration(sourceSchemaVersion: 1)
        )
    }

    public init(directoryURL: URL, migration: Migration? = nil) {
        self.init(
            fileURL: directoryURL.appendingPathComponent(Self.fileName),
            migration: migration
        )
    }

    /// Production construction always installs every supported migration.
    public static func production(fileURL: URL) -> JSONWorldStateStore {
        JSONWorldStateStore(fileURL: fileURL, migration: WorldStateMigration.migrate)
    }

    public static func live() throws -> JSONWorldStateStore {
        production(
            fileURL: try SnozzyDataLocation.defaultDirectory()
                .appendingPathComponent(Self.fileName)
        )
    }

    public func load() async throws -> WorldState? {
        try await store.load()
    }

    public func save(_ state: WorldState) async throws {
        try await store.save(state)
    }

    public func mode() async -> StoreAccessMode {
        await store.mode()
    }

    public func metadata() async -> StoreMetadata {
        await store.metadata()
    }
}

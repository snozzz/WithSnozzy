import Foundation
import XCTest
@testable import SnozzyData
import SnozzyDomain

@MainActor
final class JSONCodableStoreTests: XCTestCase {
    func testEnvelopeRoundTripAndRevisionAdvance() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent("payload.json")
        let savedAt = Date(timeIntervalSince1970: 1_735_000_000)
        let store = JSONCodableStore<TestPayload>(
            fileURL: fileURL,
            schemaVersion: 3,
            now: { savedAt }
        )
        let expected = TestPayload(name: "night garden", count: 8)

        try await store.save(expected)
        let loaded = try await store.load()
        let metadata = await store.metadata()
        let envelope = try JSONDecoder().decode(
            Envelope<TestPayload>.self,
            from: Data(contentsOf: fileURL)
        )

        XCTAssertEqual(loaded, expected)
        XCTAssertEqual(metadata, StoreMetadata(schemaVersion: 3, revision: 1, savedAt: savedAt))
        XCTAssertEqual(envelope.schemaVersion, 3)
        XCTAssertEqual(envelope.revision, 1)
        XCTAssertEqual(envelope.savedAt, savedAt)
        XCTAssertEqual(envelope.payload, expected)

        let reopened = JSONCodableStore<TestPayload>(fileURL: fileURL, schemaVersion: 3)
        let reopenedPayload = try await reopened.load()
        XCTAssertEqual(reopenedPayload, expected)
    }

    func testOlderSchemaUsesPayloadDefaultsAndUpgradesOnSave() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent("upgraded.json")
        let oldEnvelope = Envelope(
            schemaVersion: 1,
            revision: 4,
            savedAt: Date(timeIntervalSince1970: 100),
            payload: OldPayload(name: "kept")
        )
        try JSONEncoder().encode(oldEnvelope).write(to: fileURL)

        let store = JSONCodableStore<UpgradedPayload>(fileURL: fileURL, schemaVersion: 2)
        let loaded = try await store.load()
        let upgraded = try XCTUnwrap(loaded)
        XCTAssertEqual(upgraded.name, "kept")
        XCTAssertEqual(upgraded.newField, 42)

        try await store.save(upgraded)
        let rewritten = try JSONDecoder().decode(
            Envelope<UpgradedPayload>.self,
            from: Data(contentsOf: fileURL)
        )
        XCTAssertEqual(rewritten.schemaVersion, 2)
        XCTAssertEqual(rewritten.revision, 5)
        XCTAssertEqual(rewritten.payload.newField, 42)
    }

    func testCorruptDataIsCopiedToQuarantineAndProtectsStore() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent("payload.json")
        let corrupted = Data("{ definitely-not-json".utf8)
        try corrupted.write(to: fileURL)
        let store = JSONCodableStore<TestPayload>(fileURL: fileURL, schemaVersion: 1)

        do {
            _ = try await store.load()
            XCTFail("Expected corrupt data to fail")
        } catch let DataStoreError.corrupted(_, quarantineURL, _) {
            let quarantineURL = try XCTUnwrap(quarantineURL)
            XCTAssertEqual(try Data(contentsOf: quarantineURL), corrupted)
        } catch {
            XCTFail("Unexpected error: \(error)")
        }

        guard case let .readOnly(protection) = await store.mode() else {
            return XCTFail("Store should enter read-only protection")
        }
        XCTAssertNotNil(protection.quarantineURL)
        XCTAssertEqual(try Data(contentsOf: fileURL), corrupted, "Original evidence must remain in place")
    }

    func testReadOnlyProtectionRejectsLaterWrites() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent("payload.json")
        let corrupted = Data([0x00, 0xFF, 0x01])
        try corrupted.write(to: fileURL)
        let store = JSONCodableStore<TestPayload>(fileURL: fileURL, schemaVersion: 1)
        _ = try? await store.load()

        do {
            try await store.save(TestPayload(name: "must not overwrite", count: 1))
            XCTFail("Expected a protected store to reject writes")
        } catch DataStoreError.readOnly {
            // Expected.
        } catch {
            XCTFail("Unexpected error: \(error)")
        }
        XCTAssertEqual(try Data(contentsOf: fileURL), corrupted)
    }

    func testAtomicWriterKeepsOldFileIfReplacementIsInterrupted() throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent("atomic.json")
        let oldData = Data("old".utf8)
        try oldData.write(to: fileURL)

        XCTAssertThrowsError(
            try AtomicFileWriter.write(Data("new".utf8), to: fileURL) {
                throw InjectedFailure.beforeRename
            }
        )
        XCTAssertEqual(try Data(contentsOf: fileURL), oldData)
        let leftovers = try FileManager.default.contentsOfDirectory(
            at: root,
            includingPropertiesForKeys: nil
        ).filter { $0.lastPathComponent.contains(".tmp-") }
        XCTAssertTrue(leftovers.isEmpty)
    }

    func testWorldStateRequiresExplicitMigrationForOlderEnvelope() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent("world-state.json")
        let encoded = try WorldStateV1Fixture.envelope(revision: 9)
        try encoded.write(to: fileURL)

        let protectedStore = JSONWorldStateStore(fileURL: fileURL)
        do {
            _ = try await protectedStore.load()
            XCTFail("An older WorldState schema must not be guessed without a migrator")
        } catch let DataStoreError.migrationRequired(found, target) {
            XCTAssertEqual(found, WorldState.schemaVersion - 1)
            XCTAssertEqual(target, WorldState.schemaVersion)
        } catch {
            XCTFail("Unexpected error: \(error)")
        }
        guard case .readOnly = await protectedStore.mode() else {
            return XCTFail("A missing WorldState migrator must fail closed")
        }
        XCTAssertEqual(try Data(contentsOf: fileURL), encoded)

        let migratableURL = root.appendingPathComponent("migratable-world-state.json")
        try encoded.write(to: migratableURL)
        let migratingStore = JSONWorldStateStore(fileURL: migratableURL) { _, _ in
            WorldState()
        }
        let migrated = try await migratingStore.load()
        let migratingMode = await migratingStore.mode()
        XCTAssertEqual(migrated, WorldState())
        XCTAssertEqual(migratingMode, .readWrite)
    }

    func testUnwrappedWorldStateAlsoRequiresExplicitMigration() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent("unwrapped-world-state.json")
        let rawPayload = WorldStateV1Fixture.raw
        try rawPayload.write(to: fileURL)

        let protectedStore = JSONWorldStateStore(fileURL: fileURL)
        do {
            _ = try await protectedStore.load()
            XCTFail("The pre-Envelope format must require an explicit migrator")
        } catch let DataStoreError.migrationRequired(found, target) {
            XCTAssertEqual(found, 1)
            XCTAssertEqual(target, WorldState.schemaVersion)
        } catch {
            XCTFail("Unexpected error: \(error)")
        }
        guard case .readOnly = await protectedStore.mode() else {
            return XCTFail("The unwrapped format must fail closed")
        }
        XCTAssertEqual(try Data(contentsOf: fileURL), rawPayload)
    }

    private func makeTemporaryDirectory() throws -> URL {
        let directory = FileManager.default.temporaryDirectory
            .appendingPathComponent("SnozzyDataTests-\(UUID().uuidString)", isDirectory: true)
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        return directory
    }
}

private struct TestPayload: Codable, Equatable, Sendable {
    let name: String
    let count: Int
}

private struct OldPayload: Codable, Sendable {
    let name: String
}

private struct UpgradedPayload: Codable, Equatable, Sendable {
    let name: String
    let newField: Int

    private enum CodingKeys: String, CodingKey {
        case name
        case newField
    }

    init(name: String, newField: Int) {
        self.name = name
        self.newField = newField
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        name = try container.decode(String.self, forKey: .name)
        newField = try container.decodeIfPresent(Int.self, forKey: .newField) ?? 42
    }
}

private enum InjectedFailure: Error {
    case beforeRename
}

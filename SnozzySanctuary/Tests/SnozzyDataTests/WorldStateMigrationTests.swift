import Foundation
import XCTest
@testable import SnozzyData
import SnozzyDomain

@MainActor
final class WorldStateMigrationTests: XCTestCase {
    func testProductionMigrationUpgradesRawSchemaOneAndResavesCurrentEnvelope() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent(JSONWorldStateStore.fileName)
        let original = WorldStateV1Fixture.raw
        try original.write(to: fileURL)
        let store = JSONWorldStateStore.production(fileURL: fileURL)

        let loaded = try await store.load()
        let migrated = try XCTUnwrap(loaded)
        assertMigratedFields(migrated)
        XCTAssertEqual(try Data(contentsOf: fileURL), original, "Loading must not rewrite the source")

        try await store.save(migrated)
        let envelope = try JSONDecoder().decode(
            Envelope<WorldState>.self,
            from: Data(contentsOf: fileURL)
        )
        XCTAssertEqual(envelope.schemaVersion, WorldState.schemaVersion)
        XCTAssertEqual(envelope.revision, 1)
        XCTAssertEqual(envelope.payload, migrated)
    }

    func testProductionMigrationUpgradesSchemaOneEnvelopeAndKeepsEnvelopeRevision() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent(JSONWorldStateStore.fileName)
        let original = try WorldStateV1Fixture.envelope(revision: 41)
        try original.write(to: fileURL)
        let store = JSONWorldStateStore.production(fileURL: fileURL)

        let loaded = try await store.load()
        let migrated = try XCTUnwrap(loaded)
        assertMigratedFields(migrated)
        XCTAssertEqual(try Data(contentsOf: fileURL), original, "Migration is in-memory until save")

        try await store.save(migrated)
        let envelope = try JSONDecoder().decode(
            Envelope<WorldState>.self,
            from: Data(contentsOf: fileURL)
        )
        XCTAssertEqual(envelope.schemaVersion, WorldState.schemaVersion)
        XCTAssertEqual(envelope.revision, 42)
        XCTAssertEqual(envelope.payload, migrated)
    }

    func testProductionMigrationFailureProtectsAndPreservesOriginal() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent(JSONWorldStateStore.fileName)
        let invalidString = try XCTUnwrap(String(data: WorldStateV1Fixture.raw, encoding: .utf8))
            .replacingOccurrences(of: "shortBreak", with: "unknownPhase")
        let invalid = Data(invalidString.utf8)
        try invalid.write(to: fileURL)
        let store = JSONWorldStateStore.production(fileURL: fileURL)

        do {
            _ = try await store.load()
            XCTFail("An invalid schema-one payload must not be guessed")
        } catch DataStoreError.corrupted {
            // Expected.
        } catch {
            XCTFail("Unexpected error: \(error)")
        }
        XCTAssertEqual(try Data(contentsOf: fileURL), invalid)
        guard case let .readOnly(protection) = await store.mode() else {
            return XCTFail("A failed migration must enter read-only protection")
        }
        let quarantineURL = try XCTUnwrap(protection.quarantineURL)
        XCTAssertEqual(try Data(contentsOf: quarantineURL), invalid)
    }

    func testFutureSchemaIsRejectedAndOriginalIsPreserved() async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent(JSONWorldStateStore.fileName)
        let future = Envelope(
            schemaVersion: WorldState.schemaVersion + 1,
            revision: 88,
            savedAt: Date(timeIntervalSince1970: 500),
            payload: WorldState()
        )
        let original = try JSONEncoder().encode(future)
        try original.write(to: fileURL)
        let store = JSONWorldStateStore.production(fileURL: fileURL)

        do {
            _ = try await store.load()
            XCTFail("A future schema must be rejected")
        } catch let DataStoreError.unsupportedSchema(found, supported) {
            XCTAssertEqual(found, WorldState.schemaVersion + 1)
            XCTAssertEqual(supported, WorldState.schemaVersion)
        } catch {
            XCTFail("Unexpected error: \(error)")
        }
        XCTAssertEqual(try Data(contentsOf: fileURL), original)
        guard case let .readOnly(protection) = await store.mode() else {
            return XCTFail("A future schema must fail closed")
        }
        let quarantineURL = try XCTUnwrap(protection.quarantineURL)
        XCTAssertEqual(try Data(contentsOf: quarantineURL), original)
    }

    func testCurrentHeaderRejectsSchemaOnePayloadDeclaration() async throws {
        let data = try WorldStateV1Fixture.envelope(
            schemaVersion: WorldState.schemaVersion,
            payloadData: WorldStateV1Fixture.raw
        )
        try await assertSchemaMismatch(
            data,
            envelope: WorldState.schemaVersion,
            payload: 1
        )
    }

    func testCurrentHeaderRejectsUnknownPayloadDeclaration() async throws {
        let source = try XCTUnwrap(String(data: WorldStateV1Fixture.raw, encoding: .utf8))
        let payload = Data(source.replacingOccurrences(of: "\"version\": 1", with: "\"version\": 99").utf8)
        let data = try WorldStateV1Fixture.envelope(
            schemaVersion: WorldState.schemaVersion,
            payloadData: payload
        )
        try await assertSchemaMismatch(
            data,
            envelope: WorldState.schemaVersion,
            payload: 99
        )
    }

    func testSchemaOneHeaderRejectsCurrentPayloadDeclaration() async throws {
        let payload = try JSONEncoder().encode(WorldState())
        let data = try WorldStateV1Fixture.envelope(
            schemaVersion: 1,
            payloadData: payload
        )
        try await assertSchemaMismatch(data, envelope: 1, payload: WorldState.schemaVersion)
    }

    private func assertMigratedFields(
        _ state: WorldState,
        file: StaticString = #filePath,
        line: UInt = #line
    ) {
        XCTAssertEqual(state.version, WorldState.schemaVersion, file: file, line: line)
        XCTAssertEqual(state.revision, 27, file: file, line: line)
        XCTAssertEqual(state.lastReducedAt, WorldInstant(rawValue: 123_456), file: file, line: line)
        XCTAssertEqual(state.focus.phase, .break, file: file, line: line)
        XCTAssertEqual(state.focus.accumulatedBreakMilliseconds, 90_000, file: file, line: line)
        XCTAssertEqual(state.focus.activeSince, state.lastReducedAt, file: file, line: line)
        XCTAssertEqual(state.companion.mood, 0.81, accuracy: 0.000_001, file: file, line: line)
        XCTAssertEqual(state.companion.energy, 0.42, accuracy: 0.000_001, file: file, line: line)
        XCTAssertEqual(state.companion.activity, .researching, file: file, line: line)
        XCTAssertEqual(state.companion.intensity, .balanced, file: file, line: line)
        XCTAssertTrue(state.companion.isCloseMomentActive, file: file, line: line)
        XCTAssertEqual(state.companion.ambientVariant, 7, file: file, line: line)
        XCTAssertEqual(state.completedFocusSessions, 12, file: file, line: line)
        XCTAssertTrue(state.roomEchoes.isEmpty, file: file, line: line)
        XCTAssertNil(state.todayThread, file: file, line: line)
    }

    private func assertSchemaMismatch(
        _ original: Data,
        envelope: Int,
        payload: Int
    ) async throws {
        let root = try makeTemporaryDirectory()
        defer { try? FileManager.default.removeItem(at: root) }
        let fileURL = root.appendingPathComponent(JSONWorldStateStore.fileName)
        try original.write(to: fileURL)
        let store = JSONWorldStateStore.production(fileURL: fileURL)

        do {
            _ = try await store.load()
            XCTFail("Mismatched envelope and payload schemas must be rejected")
        } catch let DataStoreError.schemaMismatch(foundEnvelope, foundPayload, target) {
            XCTAssertEqual(foundEnvelope, envelope)
            XCTAssertEqual(foundPayload, payload)
            XCTAssertEqual(target, WorldState.schemaVersion)
        } catch {
            XCTFail("Unexpected error: \(error)")
        }

        XCTAssertEqual(try Data(contentsOf: fileURL), original)
        guard case let .readOnly(protection) = await store.mode() else {
            return XCTFail("A schema mismatch must enter read-only protection")
        }
        let quarantineURL = try XCTUnwrap(protection.quarantineURL)
        XCTAssertEqual(try Data(contentsOf: quarantineURL), original)
    }

    private func makeTemporaryDirectory() throws -> URL {
        let directory = FileManager.default.temporaryDirectory
            .appendingPathComponent("SnozzyWorldMigrationTests-\(UUID().uuidString)", isDirectory: true)
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        return directory
    }

}

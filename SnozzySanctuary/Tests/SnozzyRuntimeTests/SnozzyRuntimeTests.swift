import Foundation
import XCTest
import SnozzyAudio
import SnozzyData
import SnozzyDomain
@testable import SnozzyRuntime
import SnozzyWorld

@MainActor
final class SnozzyRuntimeTests: XCTestCase {
    func testStartupLoadsImportsResolvesRandomAndKeepsOneHeartbeat() async throws {
        var state = WorldState()
        state.companion.mood = 0.23
        let persistence = MemoryPersistence(loaded: state)
        let clock = ManualRuntimeClock(now: WorldInstant(rawValue: 10_000))
        let random = FixedRuntimeRandom(value: 77)
        let performance = RecordingPerformance()
        let importer = ImportProbe()
        let runtime = makeRuntime(
            persistence: persistence,
            clock: clock,
            random: random,
            performance: performance,
            importer: importer
        )

        try await runtime.start()

        XCTAssertEqual(runtime.store.state.companion.mood, 0.23, accuracy: 0.0001)
        XCTAssertEqual(runtime.store.state.companion.ambientVariant, 77)
        XCTAssertEqual(runtime.activeHeartbeatCount, 1)
        XCTAssertEqual(runtime.maximumConcurrentHeartbeats, 1)
        let firstImportCount = await importer.count()
        XCTAssertEqual(firstImportCount, 1)
        try await runtime.start()
        let secondImportCount = await importer.count()
        XCTAssertEqual(secondImportCount, 1)
        await runtime.stop()
    }

    func testStartupVisibilityHandshakeRestoresLoadedHiddenWindowExactlyOnce() async {
        var loaded = WorldState()
        loaded.isWindowVisible = false
        let persistence = BlockingLoadPersistence(loaded: loaded)
        let clock = ManualRuntimeClock(now: WorldInstant(rawValue: 15_000))
        let random = BlockingFirstRandom(value: 5)
        let performance = RecordingPerformance()
        let runtime = makeRuntime(
            persistence: persistence,
            clock: clock,
            random: random,
            performance: performance
        )
        var currentWindowVisibility = false

        let startup = Task { @MainActor in
            await runtime.startReporting(
                currentWindowVisibility: { currentWindowVisibility }
            )
        }
        await eventually {
            let loadBlocked = await persistence.isLoadBlocked()
            return runtime.persistenceStatus == .starting && loadBlocked
        }

        // This is the initial active scenePhase signal. Production records it in
        // the App while Runtime correctly rejects ordinary actions during load.
        currentWindowVisibility = true
        await persistence.releaseLoad()
        await eventually {
            let randomBlocked = await random.isBlocked()
            return runtime.persistenceStatus == .ready && randomBlocked
        }

        let request = PerformanceRequest(
            id: 150,
            priority: .autonomousAction,
            source: .autonomousAction,
            action: .stretch,
            isAutonomous: true,
            requestedAt: WorldInstant(rawValue: 15_000),
            durationMilliseconds: 1_000
        )
        runtime.dispatch(.performanceRequested(request, at: request.requestedAt))
        // scenePhase can become active after Runtime flips ready but before its
        // launched transaction finishes. That direct signal must win, while the
        // post-start handshake of the same value remains an idempotent fallback.
        runtime.dispatch(.windowVisibilityChanged(true, at: WorldInstant(rawValue: 15_001)))

        await random.release()
        await startup.value
        await eventually { await performance.startCount(id: 150) == 1 }
        XCTAssertTrue(runtime.store.state.isWindowVisible)

        // A repeated SwiftUI task in the same lifecycle must not re-deliver the
        // ready edge or start autonomous work twice.
        await runtime.startReporting(currentWindowVisibility: { currentWindowVisibility })
        for _ in 0..<20 { await Task.yield() }
        let finalStartCount = await performance.startCount(id: 150)
        let finalSaveCount = await persistence.saveCount()
        XCTAssertEqual(finalStartCount, 1)
        XCTAssertEqual(finalSaveCount, 1)
        await runtime.stop()
    }

    func testInactiveThenDisappearDuplicateHiddenSignalPersistsAndCancelsOnce() async throws {
        let persistence = MemoryPersistence()
        let clock = ManualRuntimeClock(now: WorldInstant(rawValue: 16_000))
        let performance = RecordingPerformance()
        let runtime = makeRuntime(
            persistence: persistence,
            clock: clock,
            performance: performance
        )
        try await runtime.start()
        let request = PerformanceRequest(
            id: 160,
            priority: .autonomousAction,
            source: .autonomousAction,
            action: .stretch,
            isAutonomous: true,
            requestedAt: WorldInstant(rawValue: 16_000),
            durationMilliseconds: 1_000
        )
        await runtime.dispatchAndWait(.performanceRequested(request, at: request.requestedAt))
        await eventually { await performance.startCount(id: 160) == 1 }
        await persistence.resetSaveCount()

        // SwiftUI emits inactive first, then onDisappear. Both map to false.
        await runtime.dispatchAndWait(.windowVisibilityChanged(false, at: WorldInstant(rawValue: 16_001)))
        await runtime.dispatchAndWait(.windowVisibilityChanged(false, at: WorldInstant(rawValue: 16_002)))
        await runtime.waitUntilIdle()

        let cancelCount = await performance.cancelled().filter { $0 == 160 }.count
        let saveCount = await persistence.saveCount()
        XCTAssertEqual(cancelCount, 1)
        XCTAssertEqual(saveCount, 1)
        XCTAssertFalse(runtime.store.state.isWindowVisible)
        await runtime.stop()
    }

    func testNaturalCompletionCreatesOneEchoPersistsOnceAndLeavesNoOrphanHeartbeat() async throws {
        let persistence = MemoryPersistence()
        let clock = ManualRuntimeClock(now: WorldInstant(rawValue: 20_000))
        let runtime = makeRuntime(persistence: persistence, clock: clock)
        try await runtime.start()
        await runtime.dispatchAndWait(.focusDurationsChanged(
            workMilliseconds: 20,
            breakMilliseconds: 20,
            at: WorldInstant(rawValue: 20_000)
        ))
        await runtime.dispatchAndWait(.focusButtonPressed(at: WorldInstant(rawValue: 20_000)))
        await runtime.dispatchAndWait(.focusButtonPressed(at: WorldInstant(rawValue: 20_000)))
        await persistence.resetSaveCount()

        await eventually { await clock.sleeperCount() >= 1 }
        await clock.advance(by: 250)
        await eventually { runtime.store.state.roomEchoes.count == 1 }
        await runtime.waitUntilIdle()

        XCTAssertEqual(runtime.store.state.roomEchoes.count, 1)
        XCTAssertEqual(runtime.store.state.completedFocusSessions, 1)
        let saveCount = await persistence.saveCount()
        XCTAssertEqual(saveCount, 1, "all persist effects in one heartbeat transaction must coalesce")
        XCTAssertEqual(runtime.activeHeartbeatCount, 1)
        XCTAssertEqual(runtime.maximumConcurrentHeartbeats, 1)

        let fired = runtime.heartbeatFireCount
        await runtime.stop()
        XCTAssertEqual(runtime.activeHeartbeatCount, 0)
        await clock.advance(by: 1_000)
        for _ in 0..<8 { await Task.yield() }
        XCTAssertEqual(runtime.heartbeatFireCount, fired, "a stopped heartbeat must not fire later")
    }

    func testPerformanceBeginNaturalFinishAndCancelAreExecuted() async throws {
        let persistence = MemoryPersistence()
        let clock = ManualRuntimeClock(now: WorldInstant(rawValue: 30_000))
        let performance = RecordingPerformance()
        let runtime = makeRuntime(persistence: persistence, clock: clock, performance: performance)
        try await runtime.start()

        let first = PerformanceRequest(
            id: 100,
            priority: .idleChatter,
            source: .idleChatter,
            action: .glanceWindow,
            requestedAt: WorldInstant(rawValue: 30_000),
            durationMilliseconds: 100
        )
        let second = PerformanceRequest(
            id: 101,
            priority: .userDialogue,
            source: .userDialogue,
            action: .closeMoment,
            requestedAt: WorldInstant(rawValue: 30_001),
            durationMilliseconds: 100
        )
        await runtime.dispatchAndWait(.performanceRequested(first, at: WorldInstant(rawValue: 30_000)))
        await eventually { await performance.started().contains(100) }
        await runtime.dispatchAndWait(.performanceRequested(second, at: WorldInstant(rawValue: 30_001)))
        await eventually {
            let cancelled = await performance.cancelled()
            let started = await performance.started()
            return cancelled.contains(100) && started.contains(101)
        }

        await performance.complete(id: 101)
        await eventually { await performance.finished().contains(101) }
        XCTAssertEqual(runtime.store.state.performance.active?.id, 100, "preempted work should resume after the replacement finishes")
        await eventually { await performance.startCount(id: 100) == 2 }
        await performance.complete(id: 100)
        await eventually { await performance.finished().contains(100) }
        await runtime.waitUntilIdle()
        XCTAssertNil(runtime.store.state.performance.active)
        await runtime.stop()
    }

    func testPersistedPerformanceIsSanitizedThenNextActionCompletes() async throws {
        let stale = PerformanceRequest(
            id: 700,
            priority: .userDialogue,
            source: .userDialogue,
            action: .closeMoment,
            requestedAt: WorldInstant(rawValue: 40_000),
            startedAt: WorldInstant(rawValue: 40_000),
            durationMilliseconds: 500
        )
        var loaded = WorldState()
        loaded.performance = PerformanceState(active: stale, queued: [stale])
        let persistence = MemoryPersistence(loaded: loaded)
        let clock = ManualRuntimeClock(now: WorldInstant(rawValue: 40_100))
        let performance = RecordingPerformance()
        let runtime = makeRuntime(persistence: persistence, clock: clock, performance: performance)

        try await runtime.start()
        XCTAssertNil(runtime.store.state.performance.active)
        XCTAssertTrue(runtime.store.state.performance.queued.isEmpty)
        XCTAssertEqual(runtime.activePerformanceCount, 0)
        let cleaned = await persistence.latestState()
        XCTAssertNil(cleaned?.performance.active)
        XCTAssertTrue(cleaned?.performance.queued.isEmpty == true)

        await runtime.dispatchAndWait(.activitySelected(.researching, at: WorldInstant(rawValue: 40_101)))
        let id = try XCTUnwrap(runtime.store.state.performance.active?.id)
        await eventually { await performance.started().contains(id) }
        await performance.complete(id: id)
        await eventually { await performance.finished().contains(id) }
        XCTAssertNil(runtime.store.state.performance.active)
        XCTAssertEqual(runtime.activePerformanceCount, 0)
        let finalDurableState = await persistence.latestState()
        XCTAssertNil(finalDurableState?.performance.active, "performance is never durable")
        await runtime.stop()
    }

    func testStopDuringBlockedRandomCannotRecreateTasksAndCanRestart() async {
        let persistence = MemoryPersistence()
        let clock = ManualRuntimeClock(now: WorldInstant(rawValue: 50_000))
        let random = BlockingFirstRandom(value: 9)
        let runtime = makeRuntime(persistence: persistence, clock: clock, random: random)

        let startup = Task { try? await runtime.start() }
        await eventually { await random.isBlocked() }
        let stopping = Task { await runtime.stop() }
        await random.release()
        await stopping.value
        _ = await startup.value

        XCTAssertEqual(runtime.persistenceStatus, .stopped)
        XCTAssertEqual(runtime.activeHeartbeatCount, 0)
        XCTAssertEqual(runtime.activePerformanceCount, 0)
        try? await runtime.start()
        XCTAssertEqual(runtime.persistenceStatus, .ready)
        XCTAssertEqual(runtime.activeHeartbeatCount, 1)
        await runtime.stop()
    }

    func testStopDuringBlockedSaveCannotResurrectHeartbeat() async throws {
        let persistence = BlockingPersistence()
        let clock = ManualRuntimeClock(now: WorldInstant(rawValue: 60_000))
        let runtime = makeRuntime(persistence: persistence, clock: clock)
        try await runtime.start()
        await persistence.blockNextSave()

        let dispatching = Task {
            await runtime.dispatchAndWait(.moodAdjusted(0.1, at: WorldInstant(rawValue: 60_001)))
        }
        await eventually { await persistence.isSaveBlocked() }
        let stopping = Task { await runtime.stop() }
        await persistence.releaseSave()
        await stopping.value
        await dispatching.value

        XCTAssertEqual(runtime.persistenceStatus, .stopped)
        XCTAssertEqual(runtime.activeHeartbeatCount, 0)
        XCTAssertEqual(runtime.activePerformanceCount, 0)
        try await runtime.start()
        XCTAssertEqual(runtime.persistenceStatus, .ready)
        await runtime.stop()
    }

    func testReadOnlyFailureExposesQuarantineAndRejectsPersistentActions() async {
        let protection = StoreProtection(
            protectedAt: Date(timeIntervalSince1970: 1),
            reason: "damaged envelope",
            quarantineURL: URL(fileURLWithPath: "/tmp/Corrupt/world-state.json.copy")
        )
        let persistence = ReadOnlyPersistence(protection: protection)
        let runtime = SnozzyRuntime(
            reducer: WorldReducer(storylets: StoryletCatalog(definitions: [])),
            dependencies: RuntimeDependencies(
                persistence: persistence,
                audio: RecordingAudio(),
                clock: ManualRuntimeClock(now: WorldInstant(rawValue: 70_000)),
                random: FixedRuntimeRandom(value: 1),
                performance: RecordingPerformance(),
                civilTime: FixedCivilTimeProvider(),
                storageMode: { .readOnly(protection) }
            )
        )

        await runtime.startReporting()
        XCTAssertEqual(
            runtime.persistenceStatus,
            .readOnly(message: protection.reason, quarantinePath: protection.quarantineURL?.path)
        )
        XCTAssertFalse(runtime.acceptsPersistentActions)
        let revision = runtime.store.state.revision
        runtime.dispatch(.moodAdjusted(0.5, at: WorldInstant(rawValue: 70_001)))
        await runtime.waitUntilIdle()
        XCTAssertEqual(runtime.store.state.revision, revision)
    }

    func testSaveFailureTransitionsToReadOnlyAndStopsOwnedTasks() async throws {
        let protection = StoreProtection(
            protectedAt: Date(timeIntervalSince1970: 2),
            reason: "disk became read-only",
            quarantineURL: URL(fileURLWithPath: "/tmp/Corrupt/save-copy.json")
        )
        let persistence = FailingSavePersistence(protection: protection)
        let runtime = SnozzyRuntime(
            reducer: WorldReducer(storylets: StoryletCatalog(definitions: [])),
            dependencies: RuntimeDependencies(
                persistence: persistence,
                audio: RecordingAudio(),
                clock: ManualRuntimeClock(now: WorldInstant(rawValue: 75_000)),
                random: FixedRuntimeRandom(value: 1),
                performance: RecordingPerformance(),
                civilTime: FixedCivilTimeProvider(),
                storageMode: { .readOnly(protection) }
            )
        )
        try await runtime.start()
        XCTAssertEqual(runtime.activeHeartbeatCount, 1)

        await runtime.dispatchAndWait(.moodAdjusted(0.1, at: WorldInstant(rawValue: 75_001)))
        await runtime.waitUntilIdle()
        XCTAssertEqual(
            runtime.persistenceStatus,
            .readOnly(message: protection.reason, quarantinePath: protection.quarantineURL?.path)
        )
        XCTAssertFalse(runtime.acceptsPersistentActions)
        XCTAssertEqual(runtime.activeHeartbeatCount, 0)
        XCTAssertEqual(runtime.activePerformanceCount, 0)
    }

    func testVisibilityHideCancelsAutonomousAndShowRestoresExactlyOnce() async throws {
        let persistence = MemoryPersistence()
        let clock = ManualRuntimeClock(now: WorldInstant(rawValue: 80_000))
        let performance = RecordingPerformance()
        let runtime = makeRuntime(persistence: persistence, clock: clock, performance: performance)
        try await runtime.start()
        let request = PerformanceRequest(
            id: 800,
            priority: .autonomousAction,
            source: .autonomousAction,
            action: .stretch,
            isAutonomous: true,
            requestedAt: WorldInstant(rawValue: 80_000),
            durationMilliseconds: 1_000
        )
        await runtime.dispatchAndWait(.performanceRequested(request, at: WorldInstant(rawValue: 80_000)))
        await eventually { await performance.startCount(id: 800) == 1 }

        await runtime.dispatchAndWait(.windowVisibilityChanged(false, at: WorldInstant(rawValue: 80_001)))
        await eventually { await performance.cancelled().contains(800) }
        XCTAssertNil(runtime.store.state.performance.active)
        XCTAssertEqual(runtime.store.state.performance.queued.map(\.id), [800])

        await runtime.dispatchAndWait(.windowVisibilityChanged(true, at: WorldInstant(rawValue: 80_002)))
        await eventually { await performance.startCount(id: 800) == 2 }
        await runtime.dispatchAndWait(.windowVisibilityChanged(true, at: WorldInstant(rawValue: 80_003)))
        for _ in 0..<20 { await Task.yield() }
        let restoredCount = await performance.startCount(id: 800)
        XCTAssertEqual(restoredCount, 2)
        await runtime.stop()
    }

    private func makeRuntime(
        persistence: any WorldStatePersisting,
        clock: ManualRuntimeClock,
        random: any RuntimeRandomProviding = FixedRuntimeRandom(value: 1),
        performance: any RuntimePerformanceHandling = RecordingPerformance(),
        importer: ImportProbe = ImportProbe()
    ) -> SnozzyRuntime {
        SnozzyRuntime(
            reducer: WorldReducer(storylets: StoryletCatalog(definitions: [])),
            dependencies: RuntimeDependencies(
                persistence: persistence,
                audio: RecordingAudio(),
                clock: clock,
                random: random,
                performance: performance,
                civilTime: FixedCivilTimeProvider(),
                importLegacy: { await importer.run() }
            )
        )
    }

    private func eventually(
        _ predicate: @escaping @MainActor () async -> Bool,
        file: StaticString = #filePath,
        line: UInt = #line
    ) async {
        for _ in 0..<1_000 {
            if await predicate() { return }
            await Task.yield()
        }
        XCTFail("condition did not become true", file: file, line: line)
    }
}

private actor MemoryPersistence: WorldStatePersisting {
    private var latest: WorldState?
    private var saves: [WorldState] = []

    init(loaded: WorldState? = nil) { latest = loaded }
    func load() -> WorldState? { latest }
    func save(_ state: WorldState) { latest = state; saves.append(state) }
    func resetSaveCount() { saves.removeAll() }
    func saveCount() -> Int { saves.count }
    func latestState() -> WorldState? { latest }
}

private actor BlockingPersistence: WorldStatePersisting {
    private var latest: WorldState?
    private var shouldBlock = false
    private var blocked = false
    private var continuation: CheckedContinuation<Void, Never>?

    func load() -> WorldState? { latest }
    func save(_ state: WorldState) async {
        if shouldBlock {
            shouldBlock = false
            blocked = true
            await withCheckedContinuation { continuation = $0 }
            blocked = false
        }
        latest = state
    }
    func blockNextSave() { shouldBlock = true }
    func isSaveBlocked() -> Bool { blocked }
    func releaseSave() { continuation?.resume(); continuation = nil }
}

private actor BlockingLoadPersistence: WorldStatePersisting {
    private var latest: WorldState?
    private var saves: [WorldState] = []
    private var blocked = false
    private var continuation: CheckedContinuation<Void, Never>?

    init(loaded: WorldState?) { latest = loaded }

    func load() async -> WorldState? {
        blocked = true
        await withCheckedContinuation { continuation = $0 }
        blocked = false
        return latest
    }

    func save(_ state: WorldState) {
        latest = state
        saves.append(state)
    }

    func isLoadBlocked() -> Bool { blocked }
    func releaseLoad() { continuation?.resume(); continuation = nil }
    func saveCount() -> Int { saves.count }
}

private actor ReadOnlyPersistence: WorldStatePersisting {
    let protection: StoreProtection
    init(protection: StoreProtection) { self.protection = protection }
    func load() throws -> WorldState? { throw DataStoreError.readOnly(protection) }
    func save(_ state: WorldState) throws { throw DataStoreError.readOnly(protection) }
}

private actor FailingSavePersistence: WorldStatePersisting {
    let protection: StoreProtection
    init(protection: StoreProtection) { self.protection = protection }
    func load() -> WorldState? { nil }
    func save(_ state: WorldState) throws { throw DataStoreError.readOnly(protection) }
}

private actor ImportProbe {
    private var calls = 0
    func run() { calls += 1 }
    func count() -> Int { calls }
}

private actor FixedRuntimeRandom: RuntimeRandomProviding {
    let value: UInt64
    init(value: UInt64) { self.value = value }
    func nextUInt64() -> UInt64 { value }
}

private actor BlockingFirstRandom: RuntimeRandomProviding {
    let value: UInt64
    private var shouldBlock = true
    private var blocked = false
    private var continuation: CheckedContinuation<Void, Never>?

    init(value: UInt64) { self.value = value }
    func nextUInt64() async -> UInt64 {
        if shouldBlock {
            shouldBlock = false
            blocked = true
            await withCheckedContinuation { continuation = $0 }
            blocked = false
        }
        return value
    }
    func isBlocked() -> Bool { blocked }
    func release() { continuation?.resume(); continuation = nil }
}

private struct FixedCivilTimeProvider: RuntimeCivilTimeProviding {
    func context(at instant: WorldInstant, previous: CivilTimeContext?) async -> CivilTimeContext {
        CivilTimeContext(
            dayKey: "2026-08-24",
            localHour: 12,
            localMinute: 0,
            nextDayBoundary: WorldInstant(rawValue: instant.rawValue + 86_400_000)
        )
    }
}

private actor RecordingAudio: AudioHandling {
    func handle(_ effect: Effect) async {}
}

private actor RecordingPerformance: RuntimePerformanceHandling {
    private var starts: [UInt64] = []
    private var cancels: [UInt64] = []
    private var finishes: [UInt64] = []
    private var continuations: [UInt64: CheckedContinuation<Void, Never>] = [:]

    func perform(_ request: PerformanceRequest) async {
        starts.append(request.id)
        await withCheckedContinuation { continuation in continuations[request.id] = continuation }
    }

    func cancel(id: UInt64) {
        cancels.append(id)
        continuations.removeValue(forKey: id)?.resume()
    }

    func finish(id: UInt64) { finishes.append(id) }
    func complete(id: UInt64) { continuations.removeValue(forKey: id)?.resume() }
    func started() -> [UInt64] { starts }
    func startCount(id: UInt64) -> Int { starts.filter { $0 == id }.count }
    func cancelled() -> [UInt64] { cancels }
    func finished() -> [UInt64] { finishes }
}

private actor ManualRuntimeClock: RuntimeClock {
    private struct Sleeper {
        let deadline: Int64
        let continuation: CheckedContinuation<Void, Error>
    }

    private var instant: WorldInstant
    private var sleepers: [UUID: Sleeper] = [:]

    init(now: WorldInstant) { instant = now }
    func now() -> WorldInstant { instant }

    func sleep(forMilliseconds milliseconds: Int64) async throws {
        let id = UUID()
        let deadline = instant.rawValue + max(1, milliseconds)
        try await withTaskCancellationHandler {
            try await withCheckedThrowingContinuation { continuation in
                sleepers[id] = Sleeper(deadline: deadline, continuation: continuation)
            }
        } onCancel: {
            Task { await self.cancel(id: id) }
        }
    }

    func advance(by milliseconds: Int64) {
        instant = instant.advanced(byMilliseconds: milliseconds)
        let ready = sleepers.filter { $0.value.deadline <= instant.rawValue }
        for (id, sleeper) in ready {
            sleepers[id] = nil
            sleeper.continuation.resume()
        }
    }

    func sleeperCount() -> Int { sleepers.count }

    private func cancel(id: UUID) {
        sleepers.removeValue(forKey: id)?.continuation.resume(throwing: CancellationError())
    }
}

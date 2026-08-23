import Foundation
import Observation
import SnozzyAudio
import SnozzyData
import SnozzyDomain
import SnozzyPlatform
import SnozzyWorld

public protocol RuntimeClock: Sendable {
    func now() async -> WorldInstant
    func sleep(forMilliseconds milliseconds: Int64) async throws
}

public struct SystemRuntimeClock: RuntimeClock, Sendable {
    private let clock = SystemClock()

    public init() {}

    public func now() async -> WorldInstant { clock.now() }

    public func sleep(forMilliseconds milliseconds: Int64) async throws {
        let bounded = UInt64(max(0, milliseconds))
        try await Task.sleep(nanoseconds: bounded.multipliedReportingOverflow(by: 1_000_000).partialValue)
    }
}

public protocol RuntimeRandomProviding: Sendable {
    func nextUInt64() async -> UInt64
}

public actor SystemRuntimeRandom: RuntimeRandomProviding {
    private var source = SystemRandomSource()

    public init() {}
    public func nextUInt64() -> UInt64 { source.nextUInt64() }
}

public protocol RuntimePerformanceHandling: Sendable {
    func perform(_ request: PerformanceRequest) async
    func cancel(id: UInt64) async
    func finish(id: UInt64) async
}

/// Production-safe timed handler. Animation/TTS engines can replace this boundary.
public actor TimedPerformanceHandler: RuntimePerformanceHandling {
    private let clock: any RuntimeClock

    public init(clock: any RuntimeClock) { self.clock = clock }
    public func perform(_ request: PerformanceRequest) async {
        try? await clock.sleep(forMilliseconds: max(1, request.durationMilliseconds))
    }
    public func cancel(id: UInt64) async {}
    public func finish(id: UInt64) async {}
}

public protocol RuntimeCivilTimeProviding: Sendable {
    func context(at instant: WorldInstant, previous: CivilTimeContext?) async -> CivilTimeContext
}

public struct SystemCivilTimeProvider: RuntimeCivilTimeProviding, Sendable {
    public init() {}

    public func context(at instant: WorldInstant, previous: CivilTimeContext?) async -> CivilTimeContext {
        var calendar = Calendar.autoupdatingCurrent
        calendar.locale = Locale(identifier: "en_US_POSIX")
        let date = Date(timeIntervalSinceReferenceDate: Double(instant.rawValue) / 1_000)
        let components = calendar.dateComponents([.year, .month, .day, .hour, .minute], from: date)
        let dayKey = Self.dayKey(for: date, calendar: calendar)
        let start = calendar.startOfDay(for: date)
        let boundaryDate = calendar.date(byAdding: .day, value: 1, to: start) ?? date.addingTimeInterval(86_400)
        let boundary = WorldInstant(rawValue: Int64((boundaryDate.timeIntervalSinceReferenceDate * 1_000).rounded()))
        var transitions: [CivilDayTransition] = []
        if let previous {
            var transitionAt = previous.nextDayBoundary
            while transitionAt <= instant {
                let transitionDate = Date(
                    timeIntervalSinceReferenceDate: Double(transitionAt.rawValue) / 1_000
                )
                transitions.append(CivilDayTransition(
                    at: transitionAt,
                    enteringDayKey: Self.dayKey(for: transitionDate, calendar: calendar)
                ))
                guard let next = calendar.date(byAdding: .day, value: 1, to: transitionDate) else { break }
                let nextValue = Int64((next.timeIntervalSinceReferenceDate * 1_000).rounded())
                guard nextValue > transitionAt.rawValue else { break }
                transitionAt = WorldInstant(rawValue: nextValue)
            }
        }
        return CivilTimeContext(
            dayKey: dayKey,
            localHour: components.hour ?? 0,
            localMinute: components.minute ?? 0,
            nextDayBoundary: boundary,
            transitions: transitions
        )
    }

    private static func dayKey(for date: Date, calendar: Calendar) -> String {
        let parts = calendar.dateComponents([.year, .month, .day], from: date)
        return String(format: "%04d-%02d-%02d", parts.year ?? 0, parts.month ?? 0, parts.day ?? 0)
    }
}

public struct RuntimeDependencies: Sendable {
    public let persistence: any WorldStatePersisting
    public let audio: any AudioHandling
    public let clock: any RuntimeClock
    public let random: any RuntimeRandomProviding
    public let performance: any RuntimePerformanceHandling
    public let civilTime: any RuntimeCivilTimeProviding
    public let importLegacy: @Sendable () async throws -> Void
    public let storageMode: @Sendable () async -> StoreAccessMode

    public init(
        persistence: any WorldStatePersisting,
        audio: any AudioHandling,
        clock: any RuntimeClock,
        random: any RuntimeRandomProviding,
        performance: any RuntimePerformanceHandling,
        civilTime: any RuntimeCivilTimeProviding = SystemCivilTimeProvider(),
        importLegacy: @escaping @Sendable () async throws -> Void = {},
        storageMode: @escaping @Sendable () async -> StoreAccessMode = { .readWrite }
    ) {
        self.persistence = persistence
        self.audio = audio
        self.clock = clock
        self.random = random
        self.performance = performance
        self.civilTime = civilTime
        self.importLegacy = importLegacy
        self.storageMode = storageMode
    }

    public static func live() throws -> RuntimeDependencies {
        let persistence = try JSONWorldStateStore.live()
        let importer = try LegacyDataImporter.live()
        let clock = SystemRuntimeClock()
        return RuntimeDependencies(
            persistence: persistence,
            audio: SilentAudioController(),
            clock: clock,
            random: SystemRuntimeRandom(),
            performance: TimedPerformanceHandler(clock: clock),
            importLegacy: { _ = try await importer.importOnce() },
            storageMode: { await persistence.mode() }
        )
    }

    public static func unavailable(_ error: Error) -> RuntimeDependencies {
        let bootstrapError = RuntimeBootstrapError(message: String(describing: error))
        let clock = SystemRuntimeClock()
        return RuntimeDependencies(
            persistence: UnavailableWorldPersistence(error: bootstrapError),
            audio: SilentAudioController(),
            clock: clock,
            random: SystemRuntimeRandom(),
            performance: TimedPerformanceHandler(clock: clock),
            importLegacy: { throw bootstrapError }
        )
    }
}

public struct RuntimeBootstrapError: LocalizedError, Sendable {
    public let message: String
    public init(message: String) { self.message = message }
    public var errorDescription: String? { message }
}

private actor UnavailableWorldPersistence: WorldStatePersisting {
    let error: RuntimeBootstrapError
    init(error: RuntimeBootstrapError) { self.error = error }
    func load() throws -> WorldState? { throw error }
    func save(_ state: WorldState) throws { throw error }
}

public enum RuntimePersistenceStatus: Equatable, Sendable {
    case stopped
    case starting
    case ready
    case readOnly(message: String, quarantinePath: String?)
    case failed(message: String, quarantinePath: String?)

    public var acceptsPersistentActions: Bool { self == .ready }

    public var message: String? {
        switch self {
        case .stopped: "运行时已停止"
        case .starting: "正在检查并载入存档…"
        case .ready: nil
        case let .readOnly(message, _), let .failed(message, _): message
        }
    }

    public var quarantinePath: String? {
        switch self {
        case let .readOnly(_, path), let .failed(_, path): path
        default: nil
        }
    }
}

@MainActor
@Observable
public final class SnozzyRuntime {
    public private(set) var store: WorldStore
    public private(set) var persistenceStatus: RuntimePersistenceStatus = .stopped
    public private(set) var heartbeatFireCount = 0
    public private(set) var maximumConcurrentHeartbeats = 0

    @ObservationIgnored private let dependencies: RuntimeDependencies
    @ObservationIgnored private let reducer: WorldReducer
    @ObservationIgnored private var queuedTransactions: [QueuedTransaction] = []
    @ObservationIgnored private var inFlightCompletion: TransactionCompletion?
    @ObservationIgnored private var transactionRunner: Task<Void, Never>?
    @ObservationIgnored private var isProcessing = false
    @ObservationIgnored private var heartbeatTask: Task<Void, Never>?
    @ObservationIgnored private var heartbeatGeneration: UInt64 = 0
    @ObservationIgnored private var performanceTasks: [UInt64: Task<Void, Never>] = [:]
    @ObservationIgnored private var performanceGenerations: [UInt64: UInt64] = [:]
    @ObservationIgnored private var nextPerformanceGeneration: UInt64 = 0
    @ObservationIgnored private var lifecycleGeneration: UInt64 = 0
    @ObservationIgnored private var visibilitySynchronizedGeneration: UInt64?
    @ObservationIgnored private var isRunning = false

    public init(
        initialState: WorldState = WorldState(),
        reducer: WorldReducer = WorldReducer(),
        dependencies: RuntimeDependencies
    ) {
        store = WorldStore(initialState: initialState, reducer: reducer)
        self.reducer = reducer
        self.dependencies = dependencies
    }

    public static func live() throws -> SnozzyRuntime {
        try SnozzyRuntime(dependencies: .live())
    }

    public var activeHeartbeatCount: Int { heartbeatTask == nil ? 0 : 1 }
    public var activePerformanceCount: Int { performanceTasks.count }
    public var acceptsPersistentActions: Bool {
        isRunning && persistenceStatus.acceptsPersistentActions
    }
    public var startupError: String? { persistenceStatus.message }

    /// Loads/migrates Sanctuary state, stages legacy JSON once, then starts the reducer.
    public func start() async throws {
        guard !isRunning, persistenceStatus != .starting else { return }
        lifecycleGeneration &+= 1
        let generation = lifecycleGeneration
        persistenceStatus = .starting
        do {
            try await dependencies.importLegacy()
            try ensureCurrent(generation)
            var loaded = try await dependencies.persistence.load() ?? WorldState()
            try ensureCurrent(generation)

            // Performance is process-local. Old builds could persist it; clean that
            // state before launch so World and the task owner cannot disagree.
            let hadPersistedPerformance = loaded.performance.active != nil || !loaded.performance.queued.isEmpty
            loaded.performance = PerformanceState()
            store = WorldStore(initialState: loaded, reducer: reducer)
            if hadPersistedPerformance {
                try await dependencies.persistence.save(durableState(from: loaded))
                try ensureCurrent(generation)
            }

            isRunning = true
            persistenceStatus = .ready
            let instant = await dependencies.clock.now()
            try ensureCurrent(generation)
            await dispatchAndWait(.launched(at: instant))
            try ensureCurrent(generation)
        } catch {
            if generation == lifecycleGeneration {
                await transitionToFailure(error)
            }
            throw error
        }
    }

    /// Production startup entry point. Errors are represented in persistenceStatus,
    /// never discarded by the App layer.
    public func startReporting() async {
        do { try await start() }
        catch { /* start() records a recoverable/read-only status before returning. */ }
    }

    /// Starts the runtime, then reconciles the window state observed by the App
    /// while storage was still loading. The handshake is delivered at most once
    /// per lifecycle generation so repeated SwiftUI tasks cannot restore queued
    /// autonomous work more than once.
    public func startReporting(currentWindowVisibility: () -> Bool) async {
        await startReporting()
        guard acceptsPersistentActions else { return }
        let generation = lifecycleGeneration
        guard visibilitySynchronizedGeneration != generation else { return }
        visibilitySynchronizedGeneration = generation
        let visible = currentWindowVisibility()
        let instant = await dependencies.clock.now()
        guard isCurrent(generation) else { return }
        await dispatchAndWait(.windowVisibilityChanged(visible, at: instant))
    }

    public func restart() async {
        await stop()
        await startReporting()
    }

    /// Fire-and-queue entry point used by production SwiftUI controls.
    public func dispatch(_ event: AppEvent) {
        guard acceptsPersistentActions else { return }
        enqueue(event, generation: lifecycleGeneration, completion: nil)
    }

    /// Deterministic entry point for tests, startup, and performance completion callbacks.
    public func dispatchAndWait(_ event: AppEvent) async {
        guard acceptsPersistentActions else { return }
        await withCheckedContinuation { continuation in
            enqueue(
                event,
                generation: lifecycleGeneration,
                completion: TransactionCompletion(continuation)
            )
        }
    }

    public func waitUntilIdle() async {
        while isProcessing || !queuedTransactions.isEmpty {
            await Task.yield()
        }
    }

    public func stop() async {
        lifecycleGeneration &+= 1
        isRunning = false
        persistenceStatus = .stopped
        let runner = transactionRunner
        runner?.cancel()
        inFlightCompletion?.resume()
        inFlightCompletion = nil
        queuedTransactions.forEach { $0.completion?.resume() }
        queuedTransactions.removeAll()
        await cancelOwnedTasks()
        await runner?.value
        transactionRunner = nil
        isProcessing = false
    }

    private func enqueue(
        _ event: AppEvent,
        generation: UInt64,
        completion: TransactionCompletion?
    ) {
        guard isCurrent(generation), persistenceStatus == .ready else {
            completion?.resume()
            return
        }
        queuedTransactions.append(QueuedTransaction(
            event: event,
            generation: generation,
            completion: completion
        ))
        guard transactionRunner == nil else { return }
        transactionRunner = Task { [weak self] in await self?.runTransactions(generation: generation) }
    }

    private func runTransactions(generation: UInt64) async {
        guard !isProcessing else { return }
        isProcessing = true
        while isCurrent(generation), !queuedTransactions.isEmpty {
            let transaction = queuedTransactions.removeFirst()
            guard transaction.generation == generation else {
                transaction.completion?.resume()
                continue
            }
            inFlightCompletion = transaction.completion
            await process(transaction.event, generation: generation)
            transaction.completion?.resume()
            if inFlightCompletion === transaction.completion { inFlightCompletion = nil }
        }
        isProcessing = false
        transactionRunner = nil
        if isCurrent(generation), !queuedTransactions.isEmpty {
            transactionRunner = Task { [weak self] in await self?.runTransactions(generation: generation) }
        }
    }

    /// Drains reducer effects until no chained event can produce another effect.
    /// All persist requests in this transaction collapse to the final state save.
    private func process(_ event: AppEvent, generation: UInt64) async {
        guard isCurrent(generation) else { return }
        let wrappedEvent = await eventWithCivilTime(event)
        guard isCurrent(generation) else { return }
        store.send(wrappedEvent)
        var shouldPersist = false

        while isCurrent(generation) {
            let effects = store.drainEffects()
            guard !effects.isEmpty else { break }
            for effect in effects {
                guard isCurrent(generation) else { return }
                switch effect {
                case .persistWorld:
                    shouldPersist = true
                case let .scheduleHeartbeat(afterMilliseconds):
                    scheduleHeartbeat(afterMilliseconds: afterMilliseconds, lifecycle: generation)
                case let .requestRandom(purpose):
                    let value = await dependencies.random.nextUInt64()
                    guard isCurrent(generation) else { return }
                    let now = await dependencies.clock.now()
                    guard isCurrent(generation) else { return }
                    store.send(await eventWithCivilTime(.randomResolved(purpose, value: value, at: now)))
                case .playAudio:
                    await dependencies.audio.handle(effect)
                case let .beginPerformance(request):
                    beginPerformance(request, lifecycle: generation)
                case let .cancelPerformance(id):
                    await cancelPerformance(id: id)
                case let .finishPerformance(id):
                    await dependencies.performance.finish(id: id)
                case .roomEchoCreated, .emitStorylet, .tomorrowCapsuleReady:
                    break
                }
            }
        }

        if shouldPersist, isCurrent(generation) {
            do {
                try await dependencies.persistence.save(durableState(from: store.state))
            } catch {
                if isCurrent(generation) { await transitionToFailure(error) }
            }
        }
    }

    private func scheduleHeartbeat(afterMilliseconds: Int64, lifecycle: UInt64) {
        guard isCurrent(lifecycle) else { return }
        heartbeatGeneration &+= 1
        let heartbeat = heartbeatGeneration
        heartbeatTask?.cancel()
        heartbeatTask = nil
        heartbeatTask = Task { [weak self, dependencies] in
            do { try await dependencies.clock.sleep(forMilliseconds: max(1, afterMilliseconds)) }
            catch { return }
            guard !Task.isCancelled, let self else { return }
            await self.heartbeatFired(generation: heartbeat, lifecycle: lifecycle)
        }
        maximumConcurrentHeartbeats = max(maximumConcurrentHeartbeats, activeHeartbeatCount)
    }

    private func heartbeatFired(generation: UInt64, lifecycle: UInt64) async {
        guard generation == heartbeatGeneration, isCurrent(lifecycle) else { return }
        heartbeatFireCount += 1
        let instant = await dependencies.clock.now()
        guard isCurrent(lifecycle) else { return }
        await dispatchAndWait(.heartbeat(at: instant))
    }

    private func beginPerformance(_ request: PerformanceRequest, lifecycle: UInt64) {
        guard isCurrent(lifecycle) else { return }
        performanceTasks[request.id]?.cancel()
        nextPerformanceGeneration &+= 1
        let generation = nextPerformanceGeneration
        performanceGenerations[request.id] = generation
        performanceTasks[request.id] = Task { [weak self, dependencies] in
            await dependencies.performance.perform(request)
            guard !Task.isCancelled, let self else { return }
            await self.performanceFinished(id: request.id, generation: generation, lifecycle: lifecycle)
        }
    }

    private func performanceFinished(id: UInt64, generation: UInt64, lifecycle: UInt64) async {
        guard isCurrent(lifecycle), performanceGenerations[id] == generation else { return }
        performanceTasks[id] = nil
        performanceGenerations[id] = nil
        let instant = await dependencies.clock.now()
        guard isCurrent(lifecycle) else { return }
        await dispatchAndWait(.performanceFinished(id: id, at: instant))
    }

    private func cancelPerformance(id: UInt64) async {
        performanceGenerations[id] = nil
        performanceTasks[id]?.cancel()
        performanceTasks[id] = nil
        await dependencies.performance.cancel(id: id)
    }

    private func eventWithCivilTime(_ event: AppEvent) async -> AppEvent {
        if case .withCivilTime = event { return event }
        let context = await dependencies.civilTime.context(
            at: event.runtimeInstant,
            previous: store.state.civilTimeContext
        )
        return .withCivilTime(context, event: event)
    }

    private func durableState(from state: WorldState) -> WorldState {
        var durable = state
        durable.performance = PerformanceState()
        return durable
    }

    private func ensureCurrent(_ generation: UInt64) throws {
        guard generation == lifecycleGeneration else { throw CancellationError() }
    }

    private func isCurrent(_ generation: UInt64) -> Bool {
        isRunning && generation == lifecycleGeneration
    }

    private func transitionToFailure(_ error: Error) async {
        let mode = await dependencies.storageMode()
        lifecycleGeneration &+= 1
        isRunning = false
        heartbeatGeneration &+= 1
        heartbeatTask?.cancel()
        heartbeatTask = nil
        let report: RuntimePersistenceStatus
        switch mode {
        case .readWrite:
            report = .failed(message: String(describing: error), quarantinePath: nil)
        case let .readOnly(protection):
            report = .readOnly(
                message: protection.reason,
                quarantinePath: protection.quarantineURL?.path
            )
        }
        persistenceStatus = report
        queuedTransactions.forEach { $0.completion?.resume() }
        queuedTransactions.removeAll()
        let activeIDs = Array(performanceTasks.keys)
        for id in activeIDs {
            performanceTasks[id]?.cancel()
            performanceTasks[id] = nil
            performanceGenerations[id] = nil
            await dependencies.performance.cancel(id: id)
        }
    }

    private func cancelOwnedTasks() async {
        heartbeatGeneration &+= 1
        heartbeatTask?.cancel()
        heartbeatTask = nil
        let activeIDs = Array(performanceTasks.keys)
        for id in activeIDs {
            performanceTasks[id]?.cancel()
            performanceTasks[id] = nil
            performanceGenerations[id] = nil
            await dependencies.performance.cancel(id: id)
        }
    }
}

private struct QueuedTransaction {
    let event: AppEvent
    let generation: UInt64
    let completion: TransactionCompletion?
}

@MainActor
private final class TransactionCompletion {
    private var continuation: CheckedContinuation<Void, Never>?

    init(_ continuation: CheckedContinuation<Void, Never>) { self.continuation = continuation }
    func resume() {
        continuation?.resume()
        continuation = nil
    }
}

private extension AppEvent {
    var runtimeInstant: WorldInstant {
        switch self {
        case let .withCivilTime(_, event): event.runtimeInstant
        case let .launched(at), let .heartbeat(at), let .focusButtonPressed(at), let .focusSkipped(at),
             let .closeMomentRequested(at), let .closeMomentDismissed(at), let .companionReturned(at),
             let .tomorrowCapsuleOpened(at): at
        case let .focusIntentSelected(_, _, at), let .focusDurationsChanged(_, _, at),
             let .reviewCompleted(_, at), let .activitySelected(_, at), let .moodAdjusted(_, at),
             let .companionIntensityChanged(_, at), let .windowVisibilityChanged(_, at),
             let .tomorrowCapsuleWritten(_, _, at), let .performanceRequested(_, at),
             let .performanceFinished(_, at), let .randomResolved(_, _, at): at
        }
    }
}

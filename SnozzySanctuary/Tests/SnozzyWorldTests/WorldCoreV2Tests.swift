import Foundation
import XCTest
import SnozzyDomain
import SnozzyWorld

final class WorldCoreV2Tests: XCTestCase {
    func testTwentyPauseResumeCyclesHaveNoAccumulationDrift() {
        let reducer = WorldReducer()
        var state = WorldState()
        _ = reducer.reduce(state: &state, event: .focusDurationsChanged(workMilliseconds: 120_000, breakMilliseconds: 30_000, at: .zero))
        _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: .zero))
        _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: .zero))
        var clock: Int64 = 0
        for _ in 0..<20 {
            clock += 1_500
            _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: WorldInstant(rawValue: clock)))
            clock += 777
            _ = reducer.reduce(state: &state, event: .heartbeat(at: WorldInstant(rawValue: clock)))
            _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: WorldInstant(rawValue: clock)))
        }
        _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: WorldInstant(rawValue: clock)))
        XCTAssertLessThanOrEqual(abs(state.focus.accumulatedWorkMilliseconds - 30_000), 1_000)
    }

    func testNaturalCompletionCreatesExactlyOneEchoAndSkipCreatesNone() {
        let reducer = WorldReducer()
        var natural = WorldState()
        _ = reducer.reduce(state: &natural, event: .focusDurationsChanged(workMilliseconds: 1_000, breakMilliseconds: 100, at: .zero))
        _ = reducer.reduce(state: &natural, event: .focusButtonPressed(at: .zero))
        _ = reducer.reduce(state: &natural, event: .focusButtonPressed(at: .zero))
        let completion = reducer.reduce(state: &natural, event: .heartbeat(at: WorldInstant(rawValue: 1_000)))
        _ = reducer.reduce(state: &natural, event: .heartbeat(at: WorldInstant(rawValue: 10_000)))
        XCTAssertEqual(natural.roomEchoes.count, 1)
        XCTAssertEqual(completion.filter { if case .roomEchoCreated = $0 { true } else { false } }.count, 1)

        var skipped = WorldState()
        _ = reducer.reduce(state: &skipped, event: .focusButtonPressed(at: .zero))
        _ = reducer.reduce(state: &skipped, event: .heartbeat(at: WorldInstant(rawValue: 500)))
        _ = reducer.reduce(state: &skipped, event: .focusSkipped(at: WorldInstant(rawValue: 500)))
        XCTAssertTrue(skipped.roomEchoes.isEmpty)
        XCTAssertFalse(skipped.focus.completedNaturally)
    }

    func testWorkLedgerUsesInjectedAsiaShanghaiCivilMidnight() {
        let start = WorldInstant.zero
        let before = CivilTimeContext(dayKey: "2026-08-24@Asia/Shanghai", localHour: 23, localMinute: 59, nextDayBoundary: WorldInstant(rawValue: 500))
        let after = CivilTimeContext(dayKey: "2026-08-25@Asia/Shanghai", localHour: 0, localMinute: 0, nextDayBoundary: WorldInstant(rawValue: 86_400_500), transitions: [.init(at: WorldInstant(rawValue: 500), enteringDayKey: "2026-08-25@Asia/Shanghai")])
        let reducer = WorldReducer()
        var state = WorldState(lastReducedAt: start)
        _ = reducer.reduce(state: &state, event: .withCivilTime(before, event: .focusDurationsChanged(workMilliseconds: 1_000, breakMilliseconds: 100, at: start)))
        _ = reducer.reduce(state: &state, event: .withCivilTime(before, event: .focusButtonPressed(at: start)))
        _ = reducer.reduce(state: &state, event: .withCivilTime(before, event: .focusButtonPressed(at: start)))
        _ = reducer.reduce(state: &state, event: .withCivilTime(after, event: .heartbeat(at: start.advanced(byMilliseconds: 1_000))))
        XCTAssertEqual(state.focusedMillisecondsByCivilDay[before.dayKey], 500)
        XCTAssertEqual(state.focusedMillisecondsByCivilDay[after.dayKey], 500)
        XCTAssertEqual(state.roomEchoes.first?.dayKey, after.dayKey)
    }

    func testPerformanceStormMaintainsOneActionLineAndTTSChannelOwner() {
        let reducer = WorldReducer()
        var state = WorldState()
        let priorities: [PerformancePriority] = [.idleChatter, .autonomousAction, .companionReturn, .phaseFeedback, .userDialogue]
        for (index, priority) in priorities.enumerated() {
            let request = PerformanceRequest(id: UInt64(index + 100), priority: priority, source: .userDialogue, action: .stretch, line: "line-\(index)", wantsTTS: true, requestedAt: WorldInstant(rawValue: Int64(index)))
            _ = reducer.reduce(state: &state, event: .performanceRequested(request, at: WorldInstant(rawValue: Int64(index))))
            XCTAssertNotNil(state.performance.active)
        }
        XCTAssertEqual(state.performance.active?.priority, .userDialogue)
        XCTAssertEqual(Set(state.performance.queued.map(\.id)).count, state.performance.queued.count)
        XCTAssertEqual([state.performance.active].compactMap { $0 }.count, 1)
    }

    func testHiddenAutonomousPerformanceIsNotConsumedAndWorkChatterIsZero() {
        let reducer = WorldReducer()
        var state = WorldState()
        _ = reducer.reduce(state: &state, event: .windowVisibilityChanged(false, at: .zero))
        let autonomous = PerformanceRequest(id: 10, priority: .autonomousAction, source: .autonomousAction, action: .glanceWindow, isAutonomous: true, requestedAt: .zero)
        let hiddenEffects = reducer.reduce(state: &state, event: .performanceRequested(autonomous, at: .zero))
        XCTAssertNil(state.performance.active)
        XCTAssertEqual(state.performance.queued.map(\.id), [10])
        XCTAssertFalse(hiddenEffects.contains { if case .beginPerformance = $0 { true } else { false } })

        _ = reducer.reduce(state: &state, event: .windowVisibilityChanged(true, at: WorldInstant(rawValue: 1)))
        XCTAssertEqual(state.performance.active?.id, 10)
        var performance = PerformanceState()
        let chatter = PerformanceRequest(id: 11, priority: .idleChatter, source: .idleChatter, line: "no", isAutonomous: true, requestedAt: .zero)
        XCTAssertTrue(PerformanceCoordinator.submit(chatter, at: .zero, state: &performance, phase: .work, isWindowVisible: true).isEmpty)
        XCTAssertNil(performance.active)
    }

    func testFixedSeedStoryletReplayAndDataFile() throws {
        func replay(seed: UInt64) -> (WorldState, [Effect]) {
            var random = SplitMix64(seed: seed), state = WorldState()
            let reducer = WorldReducer(); var effects: [Effect] = []
            effects += reducer.reduce(state: &state, event: .focusIntentSelected(.writing, title: "章节", at: .zero))
            if effects.contains(.requestRandom(.storyletChoice)) {
                effects += reducer.reduce(state: &state, event: .randomResolved(.storyletChoice, value: random.nextUInt64(), at: WorldInstant(rawValue: 1)))
            }
            return (state, effects)
        }
        let first = replay(seed: 0xC0FFEE), second = replay(seed: 0xC0FFEE)
        XCTAssertEqual(first.0, second.0); XCTAssertEqual(first.1, second.1)
        XCTAssertEqual(StoryletCatalog.builtIn.definitions.count, 12)

        let testFile = URL(fileURLWithPath: #filePath)
        let packageRoot = testFile.deletingLastPathComponent().deletingLastPathComponent().deletingLastPathComponent()
        let data = try Data(contentsOf: packageRoot.appendingPathComponent("Resources/Storylets/sanctuary-v2.json"))
        XCTAssertEqual(try StoryletCatalog(data: data).definitions.count, 12)
    }

    func testSchemaOneSaveDecodesWithoutClearingUserState() throws {
        let json = #"{"version":1,"revision":9,"lastReducedAt":12000,"focus":{"phase":"work","isRunning":true,"elapsedMilliseconds":3210},"companion":{"mood":0.6,"energy":0.7,"activity":"typing","isCloseMomentActive":false,"ambientVariant":4},"completedFocusSessions":2}"#.data(using: .utf8)!
        let state = try JSONDecoder().decode(WorldState.self, from: json)
        XCTAssertEqual(state.version, WorldState.schemaVersion)
        XCTAssertEqual(state.focus.accumulatedWorkMilliseconds, 3_210)
        XCTAssertEqual(state.companion.intensity, .balanced)
        XCTAssertEqual(state.completedFocusSessions, 2)
        XCTAssertTrue(state.roomEchoes.isEmpty)
        XCTAssertTrue(state.isWindowVisible)
    }

    func testSixPhaseTransitionTableRequiresExplicitPreparingConfirmation() {
        let reducer = WorldReducer()
        var state = WorldState()
        _ = reducer.reduce(state: &state, event: .focusDurationsChanged(workMilliseconds: 1_000, breakMilliseconds: 500, at: .zero))

        _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: .zero))
        XCTAssertEqual(state.focus.phase, .preparing)
        _ = reducer.reduce(state: &state, event: .heartbeat(at: WorldInstant(rawValue: 800)))
        XCTAssertEqual(state.focus.phase, .preparing, "time alone must never leave preparing")

        _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: WorldInstant(rawValue: 800)))
        XCTAssertEqual(state.focus.phase, .work)
        _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: WorldInstant(rawValue: 1_000)))
        XCTAssertEqual(state.focus.phase, .paused)
        _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: WorldInstant(rawValue: 2_000)))
        XCTAssertEqual(state.focus.phase, .work)
        _ = reducer.reduce(state: &state, event: .heartbeat(at: WorldInstant(rawValue: 2_800)))
        XCTAssertEqual(state.focus.phase, .review)
        _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: WorldInstant(rawValue: 2_800)))
        XCTAssertEqual(state.focus.phase, .break)
        _ = reducer.reduce(state: &state, event: .heartbeat(at: WorldInstant(rawValue: 3_300)))
        XCTAssertEqual(state.focus.phase, .idle)
    }

    func testDSTShortDayBoundaryComesFromCivilContextNotEpochArithmetic() {
        let boundary = WorldInstant(rawValue: 82_800_000) // supplied 23-hour local day
        let start = boundary.advanced(byMilliseconds: -1_000)
        let before = CivilTimeContext(dayKey: "2026-03-08@America/New_York", localHour: 23, localMinute: 59, nextDayBoundary: boundary)
        let after = CivilTimeContext(dayKey: "2026-03-09@America/New_York", localHour: 0, localMinute: 0, nextDayBoundary: boundary.advanced(byMilliseconds: 86_400_000), transitions: [.init(at: boundary, enteringDayKey: "2026-03-09@America/New_York")])
        let reducer = WorldReducer(); var state = WorldState(lastReducedAt: start)
        _ = reducer.reduce(state: &state, event: .withCivilTime(before, event: .focusDurationsChanged(workMilliseconds: 2_000, breakMilliseconds: 100, at: start)))
        _ = reducer.reduce(state: &state, event: .withCivilTime(before, event: .focusButtonPressed(at: start)))
        _ = reducer.reduce(state: &state, event: .withCivilTime(before, event: .focusButtonPressed(at: start)))
        _ = reducer.reduce(state: &state, event: .withCivilTime(after, event: .heartbeat(at: start.advanced(byMilliseconds: 2_000))))
        XCTAssertEqual(state.focusedMillisecondsByCivilDay[before.dayKey], 1_000)
        XCTAssertEqual(state.focusedMillisecondsByCivilDay[after.dayKey], 1_000)
    }

    func testMilestoneAndCompletionStoryletsAreBothQueuedMilestoneFirst() {
        let definitions: [StoryletDefinition] = [
            .init(id: "completion", trigger: .workCompleted, intents: nil, minimumIntensity: .quiet, minimumEchoCount: 0, cooldownMilliseconds: 0, exclusiveGroup: nil, priority: .phaseFeedback, action: .traceStar, line: "done", wantsTTS: false, autonomous: false),
            .init(id: "milestone", trigger: .echoMilestone, intents: nil, minimumIntensity: .quiet, minimumEchoCount: 3, cooldownMilliseconds: 0, exclusiveGroup: nil, priority: .phaseFeedback, action: .traceStar, line: "three", wantsTTS: false, autonomous: false),
        ]
        let reducer = WorldReducer(storylets: StoryletCatalog(definitions: definitions))
        let trace = StarTrace(points: [])
        var state = WorldState(roomEchoes: [
            .init(id: 90, sessionID: 90, threadID: nil, title: "a", intent: .coding, startedAt: .zero, completedAt: .zero, focusedMilliseconds: 1, dayKey: "d", trace: trace),
            .init(id: 91, sessionID: 91, threadID: nil, title: "b", intent: .coding, startedAt: .zero, completedAt: .zero, focusedMilliseconds: 1, dayKey: "d", trace: trace),
        ])
        _ = reducer.reduce(state: &state, event: .focusDurationsChanged(workMilliseconds: 1, breakMilliseconds: 1, at: .zero))
        _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: .zero))
        _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: .zero))
        _ = reducer.reduce(state: &state, event: .heartbeat(at: WorldInstant(rawValue: 1)))
        XCTAssertEqual(state.storylets.pendingContexts.map(\.trigger), [.echoMilestone, .workCompleted])
        _ = reducer.reduce(state: &state, event: .randomResolved(.storyletChoice, value: 0, at: WorldInstant(rawValue: 2)))
        XCTAssertEqual(state.storylets.pendingContexts.map(\.trigger), [.workCompleted])
    }

    func testEnteringWorkCancelsIdleChatterAndLateFinishCannotConsumeReplacement() {
        let reducer = WorldReducer(); var state = WorldState()
        let idle = PerformanceRequest(id: 700, priority: .idleChatter, source: .idleChatter, action: .glanceWindow, line: "idle", requestedAt: .zero)
        _ = reducer.reduce(state: &state, event: .focusButtonPressed(at: .zero))
        let preparationID = try! XCTUnwrap(state.performance.active?.id)
        _ = reducer.reduce(state: &state, event: .performanceFinished(id: preparationID, at: .zero))
        _ = reducer.reduce(state: &state, event: .performanceRequested(idle, at: .zero))
        let startEffects = reducer.reduce(state: &state, event: .focusButtonPressed(at: .zero))
        XCTAssertTrue(startEffects.contains(.cancelPerformance(id: 700)))
        XCTAssertEqual(state.performance.active?.priority, .phaseFeedback)

        let first = PerformanceRequest(id: 701, priority: .phaseFeedback, source: .phaseFeedback, action: .stretch, requestedAt: WorldInstant(rawValue: 1))
        let replacement = PerformanceRequest(id: 702, priority: .userDialogue, source: .userDialogue, action: .closeMoment, requestedAt: WorldInstant(rawValue: 2))
        _ = reducer.reduce(state: &state, event: .performanceRequested(first, at: WorldInstant(rawValue: 1)))
        _ = reducer.reduce(state: &state, event: .performanceRequested(replacement, at: WorldInstant(rawValue: 2)))
        let late = reducer.reduce(state: &state, event: .performanceFinished(id: 701, at: WorldInstant(rawValue: 3)))
        XCTAssertEqual(state.performance.active?.id, 702)
        XCTAssertFalse(late.contains(.finishPerformance(id: 701)))
    }

    func testCloseMomentAndSnapshotUseTheSinglePerformanceChannel() {
        let reducer = WorldReducer(); var state = WorldState()
        let effects = reducer.reduce(state: &state, event: .closeMomentRequested(at: WorldInstant(rawValue: 100)))
        guard let active = state.performance.active else { return XCTFail("close moment did not enter coordinator") }
        XCTAssertEqual(active.action, .closeMoment)
        XCTAssertTrue(effects.contains(.beginPerformance(active)))
        let snapshot = SceneSnapshot(state: state, tick: WorldInstant(rawValue: 2_100))
        XCTAssertEqual(snapshot.activePerformanceID, active.id)
        XCTAssertEqual(snapshot.activePerformanceAction, .closeMoment)
        XCTAssertEqual(snapshot.closeMomentAmount, 1)
        XCTAssertEqual(snapshot.activePerformanceProgress, 2_000.0 / 12_000.0, accuracy: 0.000_001)
        XCTAssertTrue(reducer.reduce(state: &state, event: .closeMomentDismissed(at: WorldInstant(rawValue: 2_200))).contains(.cancelPerformance(id: active.id)))
    }

    func testRepeatedVisibilityValuesAreCompletelyIdempotent() {
        let reducer = WorldReducer()

        var visible = WorldState()
        let visibleBefore = visible
        XCTAssertTrue(reducer.reduce(state: &visible, event: .windowVisibilityChanged(true, at: WorldInstant(rawValue: 10_000))).isEmpty)
        XCTAssertEqual(visible, visibleBefore)

        let pending = PerformanceRequest(id: 404, priority: .autonomousAction, source: .autonomousAction, action: .glanceWindow, isAutonomous: true, requestedAt: .zero)
        var hidden = WorldState(performance: PerformanceState(queued: [pending]), isWindowVisible: false)
        let hiddenBefore = hidden
        XCTAssertTrue(reducer.reduce(state: &hidden, event: .windowVisibilityChanged(false, at: WorldInstant(rawValue: 10_000))).isEmpty)
        XCTAssertEqual(hidden, hiddenBefore)
        XCTAssertEqual(hidden.performance.queued.map(\.id), [404])
    }
}

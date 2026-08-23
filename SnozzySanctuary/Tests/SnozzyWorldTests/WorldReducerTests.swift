import XCTest
import SnozzyDomain
import SnozzyWorld

final class WorldReducerTests: XCTestCase {
    func testEventStreamReplaysExactly() throws {
        let events: [AppEvent] = [
            .launched(at: WorldInstant(rawValue: 1_000)),
            .randomResolved(.ambientVariant, value: 42, at: WorldInstant(rawValue: 1_001)),
            .focusButtonPressed(at: WorldInstant(rawValue: 1_100)),
            .focusButtonPressed(at: WorldInstant(rawValue: 1_100)),
            .heartbeat(at: WorldInstant(rawValue: 61_100)),
            .activitySelected(.researching, at: WorldInstant(rawValue: 61_200)),
            .moodAdjusted(0.07, at: WorldInstant(rawValue: 61_300)),
            .closeMomentRequested(at: WorldInstant(rawValue: 61_400)),
            .closeMomentDismissed(at: WorldInstant(rawValue: 62_000))
        ]

        let first = replay(events)
        let second = replay(events)

        XCTAssertEqual(first.state, second.state)
        XCTAssertEqual(first.effects, second.effects)
        let encoder = JSONEncoder()
        encoder.outputFormatting = [.sortedKeys]
        XCTAssertEqual(try encoder.encode(first.state), try encoder.encode(second.state))
    }

    func testFocusCompletionIsAnExplicitDeterministicTransition() {
        let duration = FocusPhase.work.durationMilliseconds
        let result = replay([
            .launched(at: .zero),
            .focusButtonPressed(at: .zero),
            .focusButtonPressed(at: .zero),
            .heartbeat(at: WorldInstant(rawValue: duration))
        ])

        XCTAssertEqual(result.state.completedFocusSessions, 1)
        XCTAssertEqual(result.state.focus.phase, .review)
        XCTAssertFalse(result.state.focus.isRunning)
        XCTAssertEqual(result.state.companion.activity, .takingBreak)
        XCTAssertTrue(result.effects.contains(.playAudio(.focusCompleted)))
        XCTAssertTrue(result.effects.contains(.requestRandom(.ambientVariant)))
    }

    func testSeededRandomSourceIsReplayable() {
        var first = SplitMix64(seed: 0x5A0_22A)
        var second = SplitMix64(seed: 0x5A0_22A)

        let firstSequence = (0 ..< 64).map { _ in first.nextUInt64() }
        let secondSequence = (0 ..< 64).map { _ in second.nextUInt64() }

        XCTAssertEqual(firstSequence, secondSequence)
        XCTAssertEqual(FixedClock(WorldInstant(rawValue: 900)).now().rawValue, 900)
    }

    func testSceneSnapshotUsesOneProvidedTick() {
        let state = WorldState(
            lastReducedAt: WorldInstant(rawValue: 10_000),
            focus: FocusState(phase: .work, isRunning: true, elapsedMilliseconds: 2_000)
        )
        let tick = WorldInstant(rawValue: 13_000)
        let first = SceneSnapshot(state: state, tick: tick)
        let second = SceneSnapshot(state: state, tick: tick)

        XCTAssertEqual(first, second)
        XCTAssertEqual(first.tick, tick)
        XCTAssertEqual(first.focusProgress, 5_000.0 / Double(FocusPhase.work.durationMilliseconds), accuracy: 0.000_001)
    }

    private func replay(_ events: [AppEvent]) -> (state: WorldState, effects: [Effect]) {
        let reducer = WorldReducer()
        var state = WorldState()
        var effects: [Effect] = []
        for event in events {
            effects.append(contentsOf: reducer.reduce(state: &state, event: event))
        }
        return (state, effects)
    }
}

import SnozzyDomain

public struct WorldReducer: Sendable {
    public init() {}

    @discardableResult
    public func reduce(state: inout WorldState, event: AppEvent) -> [Effect] {
        var effects: [Effect] = []

        switch event {
        case let .launched(at):
            state.lastReducedAt = at
            effects = [
                .requestRandom(.ambientVariant),
                .scheduleHeartbeat(afterMilliseconds: 250)
            ]

        case let .heartbeat(at):
            let delta = max(0, at.milliseconds(since: state.lastReducedAt))
            state.lastReducedAt = at

            if state.focus.isRunning {
                state.focus.elapsedMilliseconds += delta
                if state.focus.elapsedMilliseconds >= state.focus.phase.durationMilliseconds {
                    completeFocusPhase(state: &state, effects: &effects)
                }
            }
            effects.append(.scheduleHeartbeat(afterMilliseconds: 250))

        case let .focusButtonPressed(at):
            state.lastReducedAt = at
            state.focus.isRunning.toggle()
            if state.focus.isRunning {
                state.companion.activity = state.focus.phase == .work ? .typing : .takingBreak
                effects.append(.playAudio(.focusStarted))
            } else {
                state.companion.activity = .resting
            }
            effects.append(.persistWorld)

        case let .activitySelected(activity, at):
            state.lastReducedAt = at
            state.companion.activity = activity
            effects.append(.persistWorld)

        case let .moodAdjusted(delta, at):
            state.lastReducedAt = at
            state.companion.mood = min(1, max(0, state.companion.mood + delta))
            effects.append(.persistWorld)

        case let .closeMomentRequested(at):
            state.lastReducedAt = at
            state.companion.isCloseMomentActive = true
            effects.append(.playAudio(.closeMoment))

        case let .closeMomentDismissed(at):
            state.lastReducedAt = at
            state.companion.isCloseMomentActive = false

        case let .randomResolved(purpose, value, at):
            state.lastReducedAt = at
            switch purpose {
            case .ambientVariant:
                state.companion.ambientVariant = value
            case .nextActivity:
                let activities = Activity.allCases
                state.companion.activity = activities[Int(value % UInt64(activities.count))]
            }
        }

        state.revision &+= 1
        return effects
    }

    private func completeFocusPhase(state: inout WorldState, effects: inout [Effect]) {
        let completedPhase = state.focus.phase
        state.focus.elapsedMilliseconds = 0
        state.focus.isRunning = false

        switch completedPhase {
        case .work:
            state.completedFocusSessions += 1
            state.focus.phase = .shortBreak
            state.companion.activity = .takingBreak
            state.companion.mood = min(1, state.companion.mood + 0.08)
            effects.append(.playAudio(.focusCompleted))
        case .shortBreak:
            state.focus.phase = .work
            state.companion.activity = .planning
            state.companion.energy = min(1, state.companion.energy + 0.12)
            effects.append(.playAudio(.breakCompleted))
        }

        effects.append(.requestRandom(.ambientVariant))
        effects.append(.persistWorld)
    }
}

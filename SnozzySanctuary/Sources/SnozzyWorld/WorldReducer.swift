import SnozzyDomain

public struct WorldReducer: Sendable {
    private let catalog: StoryletCatalog
    public init(storylets: StoryletCatalog = .builtIn) { catalog = storylets }

    @discardableResult
    public func reduce(state: inout WorldState, event: AppEvent) -> [Effect] {
        let reducedEvent = event.payload
        if case let .windowVisibilityChanged(visible, _) = reducedEvent,
           visible == state.isWindowVisible {
            return []
        }
        let at = reducedEvent.instant
        let previousCivilTime = state.civilTimeContext
        let civilTime = event.suppliedCivilTime ?? previousCivilTime
        var effects = settle(state: &state, through: at, previousCivilTime: previousCivilTime, civilTime: civilTime)
        state.lastReducedAt = max(state.lastReducedAt, at)
        if let supplied = event.suppliedCivilTime { state.civilTimeContext = supplied }

        switch reducedEvent {
        case .withCivilTime:
            break
        case .launched:
            if state.focus.phase == .idle, let threadDay = state.todayThread?.createdDayKey,
               let currentDay = civilTime?.dayKey, threadDay != currentDay { state.todayThread = nil }
            effects += [.requestRandom(.ambientVariant), .scheduleHeartbeat(afterMilliseconds: 250)]
            if let capsule = state.tomorrowCapsule, capsule.openedAt == nil, capsule.opensAt <= at {
                effects.append(.tomorrowCapsuleReady(capsule)); consider(.tomorrowCapsule, at: at, state: &state, effects: &effects)
            } else { consider(.launched, at: at, state: &state, effects: &effects) }
        case .heartbeat:
            effects.append(.scheduleHeartbeat(afterMilliseconds: 250))
            if state.focus.phase == .idle, due(state.storylets.lastIdleConsideredAt, at: at, interval: 600_000) {
                state.storylets.lastIdleConsideredAt = at; consider(.idle, at: at, state: &state, effects: &effects)
            }
            if state.focus.phase == .work, due(state.storylets.lastLateWorkConsideredAt, at: at, interval: 1_800_000), isLate(civilTime) {
                state.storylets.lastLateWorkConsideredAt = at; consider(.lateWork, at: at, state: &state, effects: &effects)
            }
        case .focusButtonPressed:
            switch state.focus.phase {
            case .idle:
                startPreparing(state: &state, at: at); effects += [.playAudio(.focusStarted), .persistWorld]
                submitPerformance(action: .tidyDesk, priority: .phaseFeedback, source: .phaseFeedback, at: at, state: &state, effects: &effects)
                consider(.focusPreparing, at: at, state: &state, effects: &effects)
            case .preparing:
                enterWork(state: &state, at: at, effects: &effects); effects.append(.persistWorld); consider(.workStarted, at: at, state: &state, effects: &effects)
            case .work:
                state.focus.phase = .paused; state.focus.activeSince = nil; state.focus.phaseStartedAt = at; state.companion.activity = .resting; effects.append(.persistWorld)
            case .paused:
                enterWork(state: &state, at: at, effects: &effects); effects.append(.persistWorld); consider(.workStarted, at: at, state: &state, effects: &effects)
            case .review:
                enterBreak(state: &state, at: at, effects: &effects); effects.append(.persistWorld); consider(.breakStarted, at: at, state: &state, effects: &effects)
            case .break:
                resetSession(state: &state); effects.append(.persistWorld)
            }
        case .focusSkipped:
            if [.work, .paused, .preparing].contains(state.focus.phase) {
                state.focus.phase = .review; state.focus.activeSince = nil; state.focus.completedNaturally = false; state.companion.activity = .takingBreak; effects.append(.persistWorld)
            } else if state.focus.phase == .break { resetSession(state: &state); effects.append(.persistWorld) }
        case let .focusIntentSelected(intent, title, _):
            state.focus.intent = intent
            state.todayThread = TodayThread(id: state.takeIdentity(), title: title.isEmpty ? intent.displayName : title, intent: intent, createdAt: at, createdDayKey: civilTime?.dayKey)
            effects.append(.persistWorld); consider(.intentSelected, at: at, state: &state, effects: &effects)
        case let .focusDurationsChanged(work, rest, _):
            state.focus.workDurationMilliseconds = max(1, work); state.focus.breakDurationMilliseconds = max(1, rest); effects.append(.persistWorld)
        case let .reviewCompleted(outcome, _):
            if outcome == .taskCompleted { state.todayThread?.completedAt = at }
            if outcome == .startBreak { enterBreak(state: &state, at: at, effects: &effects); consider(.breakStarted, at: at, state: &state, effects: &effects) }
            else { resetSession(state: &state) }
            effects.append(.persistWorld)
        case let .activitySelected(activity, _):
            state.companion.activity = activity
            let request = PerformanceRequest(id: state.takeIdentity(), priority: .userDialogue, source: .userDialogue, action: action(for: activity), requestedAt: at)
            effects += recordStarted(PerformanceCoordinator.submit(request, at: at, state: &state.performance, phase: state.focus.phase, isWindowVisible: state.isWindowVisible), at: at, state: &state)
            effects.append(.persistWorld)
        case let .moodAdjusted(delta, _): state.companion.mood = min(1, max(0, state.companion.mood + delta)); effects.append(.persistWorld)
        case let .companionIntensityChanged(value, _): state.companion.intensity = value; effects.append(.persistWorld)
        case .closeMomentRequested:
            let request = PerformanceRequest(id: state.takeIdentity(), priority: .userDialogue, source: .userDialogue, action: .closeMoment, requestedAt: at, durationMilliseconds: 12_000)
            effects += recordStarted(PerformanceCoordinator.submit(request, at: at, state: &state.performance, phase: state.focus.phase, isWindowVisible: state.isWindowVisible), at: at, state: &state)
            effects.append(.persistWorld)
        case .closeMomentDismissed:
            let ids = ([state.performance.active] + state.performance.queued.map(Optional.some)).compactMap { $0 }.filter { $0.action == .closeMoment }.map(\.id)
            for id in ids { effects += recordStarted(PerformanceCoordinator.cancel(id: id, at: at, state: &state.performance, phase: state.focus.phase, isWindowVisible: state.isWindowVisible), at: at, state: &state) }
            state.companion.isCloseMomentActive = false; effects.append(.persistWorld)
        case let .windowVisibilityChanged(visible, _):
            state.isWindowVisible = visible
            if visible { effects += recordStarted(PerformanceCoordinator.visibilityRestored(at: at, state: &state.performance, phase: state.focus.phase), at: at, state: &state) }
            else { effects += PerformanceCoordinator.visibilityHidden(state: &state.performance) }
            effects.append(.persistWorld)
        case .companionReturned:
            submitPerformance(action: .glanceWindow, priority: .companionReturn, source: .companionReturn, at: at, state: &state, effects: &effects)
            consider(.returned, at: at, state: &state, effects: &effects)
        case let .tomorrowCapsuleWritten(message, opensAt, _):
            state.tomorrowCapsule = TomorrowCapsule(id: state.takeIdentity(), message: message, createdAt: at, opensAt: opensAt); effects.append(.persistWorld)
        case .tomorrowCapsuleOpened:
            if var capsule = state.tomorrowCapsule, capsule.openedAt == nil, capsule.opensAt <= at { capsule.openedAt = at; state.tomorrowCapsule = capsule; effects.append(.persistWorld) }
        case let .performanceRequested(request, _):
            effects += recordStarted(PerformanceCoordinator.submit(request, at: at, state: &state.performance, phase: state.focus.phase, isWindowVisible: state.isWindowVisible), at: at, state: &state)
        case let .performanceFinished(id, _):
            effects += recordStarted(PerformanceCoordinator.finish(id: id, at: at, state: &state.performance, phase: state.focus.phase, isWindowVisible: state.isWindowVisible), at: at, state: &state)
        case let .randomResolved(purpose, value, _):
            switch purpose {
            case .ambientVariant: state.companion.ambientVariant = value
            case .nextActivity:
                let activity = Activity.allCases[Int(value % UInt64(Activity.allCases.count))]
                state.companion.activity = activity
                submitPerformance(action: action(for: activity), priority: .autonomousAction, source: .autonomousAction, at: at, isAutonomous: true, state: &state, effects: &effects)
            case .storyletChoice:
                guard !state.storylets.pendingContexts.isEmpty else { break }
                let context = state.storylets.pendingContexts.removeFirst()
                let eligible = catalog.eligible(for: context, state: state)
                if !eligible.isEmpty {
                    let item = eligible[Int(value % UInt64(eligible.count))]
                    let request = PerformanceRequest(id: state.takeIdentity(), priority: item.priority, source: .storylet(item.id), action: item.action, line: item.line, wantsTTS: item.wantsTTS, isAutonomous: item.autonomous, requestedAt: at, storyletID: item.id)
                    effects += recordStarted(PerformanceCoordinator.submit(request, at: at, state: &state.performance, phase: state.focus.phase, isWindowVisible: state.isWindowVisible), at: at, state: &state)
                }
                if !state.storylets.pendingContexts.isEmpty { effects.append(.requestRandom(.storyletChoice)) }
            }
        }
        state.revision &+= 1
        return effects
    }

    private func settle(state: inout WorldState, through at: WorldInstant, previousCivilTime: CivilTimeContext?, civilTime: CivilTimeContext?) -> [Effect] {
        guard at >= state.lastReducedAt else { return [] }
        var effects: [Effect] = []
        guard let since = state.focus.activeSince, at > since else { return effects }
        switch state.focus.phase {
        case .work:
            let remaining = max(0, state.focus.workDurationMilliseconds - state.focus.accumulatedWorkMilliseconds)
            let credited = min(remaining, at.milliseconds(since: since)); let end = since.advanced(byMilliseconds: credited)
            creditCivilDays(from: since, to: end, previousCivilTime: previousCivilTime, civilTime: civilTime, state: &state)
            state.focus.accumulatedWorkMilliseconds += credited; state.focus.activeSince = end
            if state.focus.accumulatedWorkMilliseconds >= state.focus.workDurationMilliseconds { completeWork(state: &state, at: end, civilTime: civilTime, previousCivilTime: previousCivilTime, effects: &effects) }
        case .break:
            let remaining = max(0, state.focus.breakDurationMilliseconds - state.focus.accumulatedBreakMilliseconds)
            let credited = min(remaining, at.milliseconds(since: since)); let end = since.advanced(byMilliseconds: credited)
            state.focus.accumulatedBreakMilliseconds += credited; state.focus.activeSince = end
            if state.focus.accumulatedBreakMilliseconds >= state.focus.breakDurationMilliseconds {
                resetSession(state: &state); state.companion.energy = min(1, state.companion.energy + 0.12)
                effects += [.playAudio(.breakCompleted), .persistWorld]; consider(.breakCompleted, at: end, state: &state, effects: &effects)
            }
        default: break
        }
        return effects
    }

    private func startPreparing(state: inout WorldState, at: WorldInstant) {
        state.focus.phase = .preparing; state.focus.sessionID = state.takeIdentity(); state.focus.sessionStartedAt = at; state.focus.phaseStartedAt = at; state.focus.activeSince = nil
        state.focus.accumulatedWorkMilliseconds = 0; state.focus.accumulatedBreakMilliseconds = 0; state.focus.completedNaturally = false; state.focus.echoCreatedForSession = false
        if state.todayThread == nil { state.todayThread = TodayThread(id: state.takeIdentity(), title: state.focus.intent.displayName, intent: state.focus.intent, createdAt: at, createdDayKey: state.civilTimeContext?.dayKey) }
        state.companion.activity = state.focus.intent.companionActivity
    }
    private func enterWork(state: inout WorldState, at: WorldInstant, effects: inout [Effect]) {
        state.focus.phase = .work; state.focus.phaseStartedAt = at; state.focus.activeSince = at; state.companion.activity = state.focus.intent.companionActivity
        effects += recordStarted(PerformanceCoordinator.enteringWork(at: at, state: &state.performance, isWindowVisible: state.isWindowVisible), at: at, state: &state)
        submitPerformance(action: action(for: state.companion.activity), priority: .phaseFeedback, source: .phaseFeedback, at: at, state: &state, effects: &effects)
    }
    private func enterBreak(state: inout WorldState, at: WorldInstant, effects: inout [Effect]) {
        state.focus.phase = .break; state.focus.phaseStartedAt = at; state.focus.activeSince = at; state.focus.accumulatedBreakMilliseconds = 0; state.companion.activity = .takingBreak
        submitPerformance(action: .stretch, priority: .phaseFeedback, source: .phaseFeedback, at: at, state: &state, effects: &effects)
    }
    private func resetSession(state: inout WorldState) { state.focus.phase = .idle; state.focus.sessionID = nil; state.focus.sessionStartedAt = nil; state.focus.phaseStartedAt = nil; state.focus.activeSince = nil; state.focus.accumulatedWorkMilliseconds = 0; state.focus.accumulatedBreakMilliseconds = 0; state.companion.activity = .resting }

    private func completeWork(state: inout WorldState, at: WorldInstant, civilTime: CivilTimeContext?, previousCivilTime: CivilTimeContext?, effects: inout [Effect]) {
        state.focus.phase = .review; state.focus.activeSince = nil; state.focus.phaseStartedAt = at; state.focus.completedNaturally = true
        state.completedFocusSessions += 1; state.companion.activity = .takingBreak; state.companion.mood = min(1, state.companion.mood + 0.08)
        submitPerformance(action: .traceStar, priority: .phaseFeedback, source: .phaseFeedback, at: at, state: &state, effects: &effects)
        if !state.focus.echoCreatedForSession, let sessionID = state.focus.sessionID {
            let echoID = state.takeIdentity(); let started = state.focus.sessionStartedAt ?? at.advanced(byMilliseconds: -state.focus.accumulatedWorkMilliseconds)
            let echo = RoomEcho(id: echoID, sessionID: sessionID, threadID: state.todayThread?.id, title: state.todayThread?.title ?? state.focus.intent.displayName, intent: state.focus.intent, startedAt: started, completedAt: at, focusedMilliseconds: state.focus.accumulatedWorkMilliseconds, dayKey: civilDayKey(at: at, previousCivilTime: previousCivilTime, civilTime: civilTime) ?? "unknown", trace: trace(seed: sessionID ^ echoID))
            state.roomEchoes.append(echo); state.focus.echoCreatedForSession = true; effects.append(.roomEchoCreated(echo))
        }
        effects += [.playAudio(.focusCompleted), .requestRandom(.ambientVariant), .persistWorld]
        if [3, 7, 30].contains(state.roomEchoes.count) { consider(.echoMilestone, at: at, state: &state, effects: &effects) }
        consider(.workCompleted, at: at, state: &state, effects: &effects)
    }

    private func consider(_ trigger: StoryletTrigger, at: WorldInstant, state: inout WorldState, effects: inout [Effect]) {
        let context = StoryletContext(trigger: trigger, at: at)
        guard !catalog.eligible(for: context, state: state).isEmpty else { return }
        guard !state.storylets.pendingContexts.contains(context) else { return }
        let shouldRequest = state.storylets.pendingContexts.isEmpty
        state.storylets.pendingContexts.append(context)
        if shouldRequest { effects.append(.requestRandom(.storyletChoice)) }
    }
    private func recordStarted(_ input: [Effect], at: WorldInstant, state: inout WorldState) -> [Effect] {
        var output = input
        for effect in input {
            guard case let .beginPerformance(plan) = effect, let id = plan.storyletID else { continue }
            state.storylets.lastPlayedAt[id] = at; state.storylets.playCounts[id, default: 0] += 1
            if let group = catalog.definitions.first(where: { $0.id == id })?.exclusiveGroup { state.storylets.lastExclusiveGroupAt[group] = at }
            output.append(.emitStorylet(.init(definitionID: id, performanceID: plan.id)))
        }
        return output
    }
    private func creditCivilDays(from start: WorldInstant, to end: WorldInstant, previousCivilTime: CivilTimeContext?, civilTime: CivilTimeContext?, state: inout WorldState) {
        guard start < end, let current = civilTime else { return }
        var cursor = start
        var dayKey = previousCivilTime?.dayKey ?? current.dayKey
        for transition in current.transitions where transition.at <= start { dayKey = transition.enteringDayKey }
        if current.transitions.isEmpty, let previous = previousCivilTime,
           previous.dayKey != current.dayKey, previous.nextDayBoundary <= start { dayKey = current.dayKey }
        var transitions = current.transitions.filter { $0.at > start && $0.at < end }
        if transitions.isEmpty, let previous = previousCivilTime, previous.dayKey != current.dayKey,
           previous.nextDayBoundary > start, previous.nextDayBoundary < end {
            transitions = [CivilDayTransition(at: previous.nextDayBoundary, enteringDayKey: current.dayKey)]
        }
        for transition in transitions.sorted(by: { $0.at < $1.at }) {
            state.focusedMillisecondsByCivilDay[dayKey, default: 0] += transition.at.milliseconds(since: cursor)
            cursor = transition.at; dayKey = transition.enteringDayKey
        }
        state.focusedMillisecondsByCivilDay[dayKey, default: 0] += end.milliseconds(since: cursor)
    }
    private func trace(seed: UInt64) -> StarTrace { var random = SplitMix64(seed: seed); return StarTrace(points: (0..<7).map { _ in StarPoint(x: random.nextUnitInterval(), y: random.nextUnitInterval()) }) }
    private func due(_ last: WorldInstant?, at: WorldInstant, interval: Int64) -> Bool { last.map { at.milliseconds(since: $0) >= interval } ?? true }
    private func isLate(_ civilTime: CivilTimeContext?) -> Bool { guard let hour = civilTime?.localHour else { return false }; return hour >= 23 || hour < 5 }
    private func civilDayKey(at instant: WorldInstant, previousCivilTime: CivilTimeContext?, civilTime: CivilTimeContext?) -> String? {
        guard let current = civilTime else { return previousCivilTime?.dayKey }
        var key = previousCivilTime?.dayKey ?? current.dayKey
        for transition in current.transitions where transition.at <= instant { key = transition.enteringDayKey }
        if current.transitions.isEmpty, let previous = previousCivilTime, previous.nextDayBoundary <= instant { key = current.dayKey }
        return key
    }
    private func action(for activity: Activity) -> CompanionAction {
        switch activity {
        case .typing: .typeAlongside
        case .researching: .researchAlongside
        case .planning: .planAlongside
        case .takingBreak: .stretch
        case .resting: .glanceWindow
        }
    }
    private func submitPerformance(action: CompanionAction, priority: PerformancePriority, source: PerformanceSource, at: WorldInstant, isAutonomous: Bool = false, state: inout WorldState, effects: inout [Effect]) {
        let request = PerformanceRequest(id: state.takeIdentity(), priority: priority, source: source, action: action, isAutonomous: isAutonomous, requestedAt: at)
        effects += recordStarted(PerformanceCoordinator.submit(request, at: at, state: &state.performance, phase: state.focus.phase, isWindowVisible: state.isWindowVisible), at: at, state: &state)
    }
}

private extension AppEvent {
    var payload: AppEvent {
        if case let .withCivilTime(_, event) = self { return event.payload }
        return self
    }
    var suppliedCivilTime: CivilTimeContext? {
        if case let .withCivilTime(context, _) = self { return context }
        return nil
    }
    var instant: WorldInstant {
        switch self {
        case let .withCivilTime(_, event): event.instant
        case let .launched(at), let .heartbeat(at), let .focusButtonPressed(at), let .focusSkipped(at), let .closeMomentRequested(at), let .closeMomentDismissed(at), let .companionReturned(at), let .tomorrowCapsuleOpened(at): at
        case let .focusIntentSelected(_, _, at), let .focusDurationsChanged(_, _, at), let .reviewCompleted(_, at), let .activitySelected(_, at), let .moodAdjusted(_, at), let .companionIntensityChanged(_, at), let .windowVisibilityChanged(_, at), let .tomorrowCapsuleWritten(_, _, at), let .performanceRequested(_, at), let .performanceFinished(_, at), let .randomResolved(_, _, at): at
        }
    }
}

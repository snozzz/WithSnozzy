import SnozzyDomain

/// Owns the single action/line/TTS channel. Runtime only executes the emitted begin/cancel/finish contract.
public enum PerformanceCoordinator {
    public static func submit(_ request: PerformanceRequest, at: WorldInstant, state: inout PerformanceState, phase: FocusPhase, isWindowVisible: Bool) -> [Effect] {
        guard state.active?.id != request.id, !state.queued.contains(where: { $0.id == request.id }) else { return [] }
        if phase == .work && request.priority == .idleChatter { return [] }
        if request.isAutonomous && !isWindowVisible { enqueue(request, state: &state); return [] }
        guard let active = state.active else { return begin(request, at: at, state: &state) }
        if request.priority > active.priority {
            state.active = nil
            enqueue(active, state: &state)
            return [.cancelPerformance(id: active.id)] + begin(request, at: at, state: &state)
        }
        enqueue(request, state: &state)
        return []
    }

    public static func finish(id: UInt64, at: WorldInstant, state: inout PerformanceState, phase: FocusPhase, isWindowVisible: Bool) -> [Effect] {
        guard state.active?.id == id else { return [] }
        state.active = nil
        return [.finishPerformance(id: id)] + beginNext(at: at, state: &state, phase: phase, isWindowVisible: isWindowVisible)
    }

    public static func cancel(id: UInt64, at: WorldInstant, state: inout PerformanceState, phase: FocusPhase, isWindowVisible: Bool) -> [Effect] {
        if state.active?.id == id {
            state.active = nil
            return [.cancelPerformance(id: id)] + beginNext(at: at, state: &state, phase: phase, isWindowVisible: isWindowVisible)
        }
        state.queued.removeAll { $0.id == id }
        return []
    }

    public static func visibilityRestored(at: WorldInstant, state: inout PerformanceState, phase: FocusPhase) -> [Effect] {
        guard state.active == nil else { return [] }
        return beginNext(at: at, state: &state, phase: phase, isWindowVisible: true)
    }

    public static func visibilityHidden(state: inout PerformanceState) -> [Effect] {
        guard let active = state.active, active.isAutonomous else { return [] }
        state.active = nil
        enqueue(active, state: &state)
        return [.cancelPerformance(id: active.id)]
    }

    public static func enteringWork(at: WorldInstant, state: inout PerformanceState, isWindowVisible: Bool) -> [Effect] {
        state.queued.removeAll { $0.priority == .idleChatter }
        guard let active = state.active, active.priority == .idleChatter else { return [] }
        state.active = nil
        return [.cancelPerformance(id: active.id)] + beginNext(at: at, state: &state, phase: .work, isWindowVisible: isWindowVisible)
    }

    private static func beginNext(at: WorldInstant, state: inout PerformanceState, phase: FocusPhase, isWindowVisible: Bool) -> [Effect] {
        guard isWindowVisible else { return [] }
        state.queued.removeAll { phase == .work && $0.priority == .idleChatter }
        guard !state.queued.isEmpty else { return [] }
        return begin(state.queued.removeFirst(), at: at, state: &state)
    }

    private static func begin(_ request: PerformanceRequest, at: WorldInstant, state: inout PerformanceState) -> [Effect] {
        var execution = request
        execution.startedAt = at
        state.active = execution
        return [.beginPerformance(execution)]
    }

    private static func enqueue(_ request: PerformanceRequest, state: inout PerformanceState) {
        var pending = request
        pending.startedAt = nil
        state.queued.append(pending)
        state.queued.sort {
            if $0.priority != $1.priority { return $0.priority > $1.priority }
            if $0.requestedAt != $1.requestedAt { return $0.requestedAt < $1.requestedAt }
            return $0.id < $1.id
        }
        if state.queued.count > 32 { state.queued.removeLast(state.queued.count - 32) }
    }
}

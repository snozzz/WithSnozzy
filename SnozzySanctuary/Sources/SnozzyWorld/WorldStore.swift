import Observation
import SnozzyDomain

@MainActor
@Observable
public final class WorldStore {
    public private(set) var state: WorldState
    public private(set) var pendingEffects: [Effect] = []

    @ObservationIgnored
    private let reducer: WorldReducer

    public init(initialState: WorldState = WorldState(), reducer: WorldReducer = WorldReducer()) {
        state = initialState
        self.reducer = reducer
    }

    @discardableResult
    public func send(_ event: AppEvent) -> [Effect] {
        let effects = reducer.reduce(state: &state, event: event)
        pendingEffects.append(contentsOf: effects)
        return effects
    }

    public func drainEffects() -> [Effect] {
        defer { pendingEffects.removeAll(keepingCapacity: true) }
        return pendingEffects
    }

    public func bootstrap(atMilliseconds milliseconds: Int64) {
        send(.launched(at: WorldInstant(rawValue: milliseconds)))
    }

    public func heartbeat(atMilliseconds milliseconds: Int64) {
        send(.heartbeat(at: WorldInstant(rawValue: milliseconds)))
    }

    public func toggleFocus(atMilliseconds milliseconds: Int64) {
        send(.focusButtonPressed(at: WorldInstant(rawValue: milliseconds)))
    }

    public func chooseFocusIntent(_ intent: FocusIntent, title: String, atMilliseconds milliseconds: Int64) {
        send(.focusIntentSelected(intent, title: title, at: WorldInstant(rawValue: milliseconds)))
    }

    public func skipFocus(atMilliseconds milliseconds: Int64) {
        send(.focusSkipped(at: WorldInstant(rawValue: milliseconds)))
    }

    public func setWindowVisible(_ visible: Bool, atMilliseconds milliseconds: Int64) {
        send(.windowVisibilityChanged(visible, at: WorldInstant(rawValue: milliseconds)))
    }

    public func selectNextActivity(atMilliseconds milliseconds: Int64) {
        let activities = Activity.allCases
        let current = activities.firstIndex(of: state.companion.activity) ?? 0
        let next = activities[(current + 1) % activities.count]
        send(.activitySelected(next, at: WorldInstant(rawValue: milliseconds)))
    }

    public func adjustMood(by delta: Double, atMilliseconds milliseconds: Int64) {
        send(.moodAdjusted(delta, at: WorldInstant(rawValue: milliseconds)))
    }

    public func toggleCloseMoment(atMilliseconds milliseconds: Int64) {
        let instant = WorldInstant(rawValue: milliseconds)
        let isRequested = state.performance.active?.action == .closeMoment
            || state.performance.queued.contains { $0.action == .closeMoment }
        if isRequested {
            send(.closeMomentDismissed(at: instant))
        } else {
            send(.closeMomentRequested(at: instant))
        }
    }

    public func sceneSnapshot(atMilliseconds milliseconds: Int64) -> SceneSnapshot {
        SceneSnapshot(state: state, tick: WorldInstant(rawValue: milliseconds))
    }

    public var activityLabel: String {
        state.companion.activity.displayName
    }

    public var focusButtonLabel: String {
        switch state.focus.phase {
        case .idle: "开始专注"
        case .preparing: "现在开始"
        case .work: "暂停专注"
        case .paused: "继续专注"
        case .review: "开始休息"
        case .break: "结束休息"
        }
    }
}

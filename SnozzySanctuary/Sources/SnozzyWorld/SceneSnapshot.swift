import Foundation
import SnozzyDomain

/// All visual systems consume this one immutable tick. Nothing inside the scene reads a clock.
public struct SceneSnapshot: Equatable, Sendable {
    public let tick: WorldInstant
    public let revision: UInt64
    public let activity: Activity
    public let mood: Double
    public let energy: Double
    public let focusProgress: Double
    public let focusIsRunning: Bool
    public let closeMomentAmount: Double
    public let breathingOffset: Double
    public let blinkAmount: Double
    public let lightPulse: Double
    public let particlePhase: Double
    public let ambientVariant: UInt64
    public let activePerformanceID: UInt64?
    public let activePerformanceAction: CompanionAction?
    public let activePerformanceLine: String?
    public let activePerformanceWantsTTS: Bool
    public let activePerformancePriority: PerformancePriority?
    public let activePerformanceProgress: Double

    public init(state: WorldState, tick: WorldInstant) {
        self.tick = tick
        revision = state.revision
        activity = state.companion.activity
        mood = state.companion.mood
        energy = state.companion.energy
        focusIsRunning = state.focus.isRunning
        ambientVariant = state.companion.ambientVariant
        let performance = state.performance.active
        activePerformanceID = performance?.id
        activePerformanceAction = performance?.action
        activePerformanceLine = performance?.line
        activePerformanceWantsTTS = performance?.wantsTTS ?? false
        activePerformancePriority = performance?.priority
        if let performance, let startedAt = performance.startedAt {
            activePerformanceProgress = min(1, max(0, Double(tick.milliseconds(since: startedAt)) / Double(performance.durationMilliseconds)))
        } else {
            activePerformanceProgress = 0
        }

        let seconds = Double(tick.rawValue) / 1_000
        breathingOffset = sin(seconds * .pi * 0.44) * (1.6 + state.companion.energy)
        lightPulse = 0.5 + 0.5 * sin(seconds * .pi * 0.62 + Double(ambientVariant % 17))
        particlePhase = seconds.truncatingRemainder(dividingBy: 18) / 18

        let blinkCycle = (seconds + Double(ambientVariant % 100) * 0.017)
            .truncatingRemainder(dividingBy: 5.4)
        if blinkCycle > 5.12 {
            blinkAmount = sin((blinkCycle - 5.12) / 0.28 * .pi)
        } else {
            blinkAmount = 0
        }

        closeMomentAmount = performance?.action == .closeMoment ? 1 : 0

        switch state.focus.phase {
        case .work, .break:
            let anchor = state.focus.activeSince ?? state.lastReducedAt
            let additional = max(0, tick.milliseconds(since: anchor))
            let elapsed = state.focus.elapsedMilliseconds + additional
            let duration = state.focus.phase == .break
                ? state.focus.breakDurationMilliseconds
                : state.focus.workDurationMilliseconds
            focusProgress = min(1, max(0, Double(elapsed) / Double(max(1, duration))))
        case .review:
            focusProgress = 1
        case .idle, .preparing, .paused:
            focusProgress = state.focus.progress
        }
    }
}

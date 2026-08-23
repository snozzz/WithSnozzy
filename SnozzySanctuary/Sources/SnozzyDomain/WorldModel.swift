public enum Activity: String, Codable, CaseIterable, Sendable {
    case typing
    case researching
    case planning
    case resting
    case takingBreak

    public var displayName: String {
        switch self {
        case .typing: "敲字"
        case .researching: "查资料"
        case .planning: "整理思路"
        case .resting: "陪你发呆"
        case .takingBreak: "伸个懒腰"
        }
    }
}

public enum FocusPhase: String, Codable, Sendable {
    case work
    case shortBreak

    public var durationMilliseconds: Int64 {
        switch self {
        case .work: 25 * 60 * 1_000
        case .shortBreak: 5 * 60 * 1_000
        }
    }
}

public struct FocusState: Codable, Equatable, Sendable {
    public var phase: FocusPhase
    public var isRunning: Bool
    public var elapsedMilliseconds: Int64

    public init(
        phase: FocusPhase = .work,
        isRunning: Bool = false,
        elapsedMilliseconds: Int64 = 0
    ) {
        self.phase = phase
        self.isRunning = isRunning
        self.elapsedMilliseconds = elapsedMilliseconds
    }

    public var progress: Double {
        guard phase.durationMilliseconds > 0 else { return 0 }
        return min(1, max(0, Double(elapsedMilliseconds) / Double(phase.durationMilliseconds)))
    }
}

public struct CompanionState: Codable, Equatable, Sendable {
    public var mood: Double
    public var energy: Double
    public var activity: Activity
    public var isCloseMomentActive: Bool
    public var ambientVariant: UInt64

    public init(
        mood: Double = 0.68,
        energy: Double = 0.72,
        activity: Activity = .resting,
        isCloseMomentActive: Bool = false,
        ambientVariant: UInt64 = 0
    ) {
        self.mood = min(1, max(0, mood))
        self.energy = min(1, max(0, energy))
        self.activity = activity
        self.isCloseMomentActive = isCloseMomentActive
        self.ambientVariant = ambientVariant
    }
}

public struct WorldState: Codable, Equatable, Sendable {
    public static let schemaVersion = 1

    public var version: Int
    public var revision: UInt64
    public var lastReducedAt: WorldInstant
    public var focus: FocusState
    public var companion: CompanionState
    public var completedFocusSessions: Int

    public init(
        version: Int = WorldState.schemaVersion,
        revision: UInt64 = 0,
        lastReducedAt: WorldInstant = .zero,
        focus: FocusState = FocusState(),
        companion: CompanionState = CompanionState(),
        completedFocusSessions: Int = 0
    ) {
        self.version = version
        self.revision = revision
        self.lastReducedAt = lastReducedAt
        self.focus = focus
        self.companion = companion
        self.completedFocusSessions = completedFocusSessions
    }
}

public enum RandomPurpose: String, Codable, Sendable {
    case ambientVariant
    case nextActivity
}

public enum AudioCue: String, Codable, Sendable {
    case focusStarted
    case focusCompleted
    case breakCompleted
    case closeMoment
}

public enum AppEvent: Codable, Equatable, Sendable {
    case launched(at: WorldInstant)
    case heartbeat(at: WorldInstant)
    case focusButtonPressed(at: WorldInstant)
    case activitySelected(Activity, at: WorldInstant)
    case moodAdjusted(Double, at: WorldInstant)
    case closeMomentRequested(at: WorldInstant)
    case closeMomentDismissed(at: WorldInstant)
    case randomResolved(RandomPurpose, value: UInt64, at: WorldInstant)
}

public enum Effect: Codable, Equatable, Sendable {
    case persistWorld
    case scheduleHeartbeat(afterMilliseconds: Int64)
    case requestRandom(RandomPurpose)
    case playAudio(AudioCue)
}

public protocol WorldStatePersisting: Sendable {
    func load() async throws -> WorldState?
    func save(_ state: WorldState) async throws
}

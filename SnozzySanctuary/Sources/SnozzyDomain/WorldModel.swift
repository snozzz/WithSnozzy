import Foundation

public enum Activity: String, Codable, CaseIterable, Sendable {
    case typing, researching, planning, resting, takingBreak

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

public enum FocusIntent: String, Codable, CaseIterable, Sendable {
    case coding, researching, writing, planning, reading

    public var displayName: String {
        switch self {
        case .coding: "写代码"
        case .researching: "做研究"
        case .writing: "写作"
        case .planning: "做规划"
        case .reading: "深阅读"
        }
    }

    public var companionActivity: Activity {
        switch self {
        case .researching, .reading: .researching
        case .planning: .planning
        case .coding, .writing: .typing
        }
    }
}

public enum CompanionIntensity: String, Codable, CaseIterable, Sendable, Comparable {
    case quiet, balanced, lively

    public static func < (lhs: Self, rhs: Self) -> Bool {
        let rank: [Self: Int] = [.quiet: 0, .balanced: 1, .lively: 2]
        return rank[lhs, default: 0] < rank[rhs, default: 0]
    }
}

public enum FocusPhase: String, Codable, Sendable {
    case idle, preparing, work, paused, `break`, review

    /// Compatibility for the phase-one spelling.
    public static var shortBreak: FocusPhase { .break }

    public var durationMilliseconds: Int64 {
        switch self {
        case .work: 25 * 60 * 1_000
        case .break: 5 * 60 * 1_000
        default: 0
        }
    }
}

/// Calendar facts are produced at the platform edge. The reducer never consults a timezone or clock.
public struct CivilDayTransition: Codable, Equatable, Sendable {
    public var at: WorldInstant
    public var enteringDayKey: String

    public init(at: WorldInstant, enteringDayKey: String) {
        self.at = at
        self.enteringDayKey = enteringDayKey
    }
}

public struct CivilTimeContext: Codable, Equatable, Sendable {
    public var dayKey: String
    public var localHour: Int
    public var localMinute: Int
    public var nextDayBoundary: WorldInstant
    /// Ordered local-midnight transitions since the previous supplied context.
    public var transitions: [CivilDayTransition]

    public init(dayKey: String, localHour: Int, localMinute: Int, nextDayBoundary: WorldInstant, transitions: [CivilDayTransition] = []) {
        self.dayKey = dayKey
        self.localHour = min(23, max(0, localHour))
        self.localMinute = min(59, max(0, localMinute))
        self.nextDayBoundary = nextDayBoundary
        self.transitions = transitions.sorted { $0.at < $1.at }
    }
}

public struct TodayThread: Codable, Equatable, Sendable {
    public var id: UInt64
    public var title: String
    public var intent: FocusIntent
    public var createdAt: WorldInstant
    public var completedAt: WorldInstant?
    public var createdDayKey: String?

    public init(id: UInt64, title: String, intent: FocusIntent, createdAt: WorldInstant, completedAt: WorldInstant? = nil, createdDayKey: String? = nil) {
        self.id = id; self.title = title; self.intent = intent; self.createdAt = createdAt; self.completedAt = completedAt; self.createdDayKey = createdDayKey
    }
}

public struct FocusState: Codable, Equatable, Sendable {
    public var phase: FocusPhase
    public var intent: FocusIntent
    public var sessionID: UInt64?
    public var workDurationMilliseconds: Int64
    public var breakDurationMilliseconds: Int64
    public var accumulatedWorkMilliseconds: Int64
    public var accumulatedBreakMilliseconds: Int64
    public var sessionStartedAt: WorldInstant?
    public var phaseStartedAt: WorldInstant?
    public var activeSince: WorldInstant?
    public var completedNaturally: Bool
    public var echoCreatedForSession: Bool

    public init(
        phase: FocusPhase = .idle,
        intent: FocusIntent = .coding,
        sessionID: UInt64? = nil,
        workDurationMilliseconds: Int64 = FocusPhase.work.durationMilliseconds,
        breakDurationMilliseconds: Int64 = FocusPhase.break.durationMilliseconds,
        accumulatedWorkMilliseconds: Int64 = 0,
        accumulatedBreakMilliseconds: Int64 = 0,
        sessionStartedAt: WorldInstant? = nil,
        phaseStartedAt: WorldInstant? = nil,
        activeSince: WorldInstant? = nil,
        completedNaturally: Bool = false,
        echoCreatedForSession: Bool = false
    ) {
        self.phase = phase; self.intent = intent; self.sessionID = sessionID
        self.workDurationMilliseconds = max(1, workDurationMilliseconds)
        self.breakDurationMilliseconds = max(1, breakDurationMilliseconds)
        self.accumulatedWorkMilliseconds = max(0, accumulatedWorkMilliseconds)
        self.accumulatedBreakMilliseconds = max(0, accumulatedBreakMilliseconds)
        self.sessionStartedAt = sessionStartedAt; self.phaseStartedAt = phaseStartedAt; self.activeSince = activeSince
        self.completedNaturally = completedNaturally; self.echoCreatedForSession = echoCreatedForSession
    }

    /// Compatibility initializer for phase-one call sites and persisted fixtures.
    public init(phase: FocusPhase, isRunning: Bool = false, elapsedMilliseconds: Int64 = 0) {
        self.init(
            phase: isRunning ? phase : (elapsedMilliseconds > 0 ? .paused : phase),
            accumulatedWorkMilliseconds: phase == .work ? elapsedMilliseconds : 0,
            accumulatedBreakMilliseconds: phase == .break ? elapsedMilliseconds : 0
        )
    }

    public var isRunning: Bool { phase == .preparing || phase == .work || phase == .break }

    public var elapsedMilliseconds: Int64 {
        get { phase == .break ? accumulatedBreakMilliseconds : accumulatedWorkMilliseconds }
        set {
            if phase == .break { accumulatedBreakMilliseconds = max(0, newValue) }
            else { accumulatedWorkMilliseconds = max(0, newValue) }
        }
    }

    public var progress: Double {
        let duration = phase == .break ? breakDurationMilliseconds : workDurationMilliseconds
        return min(1, max(0, Double(elapsedMilliseconds) / Double(max(1, duration))))
    }

    private enum CodingKeys: String, CodingKey {
        case phase, intent, sessionID, workDurationMilliseconds, breakDurationMilliseconds
        case accumulatedWorkMilliseconds, accumulatedBreakMilliseconds, sessionStartedAt, phaseStartedAt, activeSince
        case completedNaturally, echoCreatedForSession, isRunning, elapsedMilliseconds
    }

    public init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self)
        let rawPhase = try values.decodeIfPresent(String.self, forKey: .phase) ?? "work"
        let decodedPhase = rawPhase == "shortBreak" ? FocusPhase.break : (FocusPhase(rawValue: rawPhase) ?? .idle)
        let legacyRunning = try values.decodeIfPresent(Bool.self, forKey: .isRunning)
        let legacyElapsed = try values.decodeIfPresent(Int64.self, forKey: .elapsedMilliseconds) ?? 0
        var phase = decodedPhase
        if let running = legacyRunning, !running, decodedPhase == .work { phase = legacyElapsed > 0 ? .paused : .idle }
        self.init(
            phase: phase,
            intent: try values.decodeIfPresent(FocusIntent.self, forKey: .intent) ?? .coding,
            sessionID: try values.decodeIfPresent(UInt64.self, forKey: .sessionID),
            workDurationMilliseconds: try values.decodeIfPresent(Int64.self, forKey: .workDurationMilliseconds) ?? FocusPhase.work.durationMilliseconds,
            breakDurationMilliseconds: try values.decodeIfPresent(Int64.self, forKey: .breakDurationMilliseconds) ?? FocusPhase.break.durationMilliseconds,
            accumulatedWorkMilliseconds: try values.decodeIfPresent(Int64.self, forKey: .accumulatedWorkMilliseconds) ?? (decodedPhase == .work ? legacyElapsed : 0),
            accumulatedBreakMilliseconds: try values.decodeIfPresent(Int64.self, forKey: .accumulatedBreakMilliseconds) ?? (decodedPhase == .break ? legacyElapsed : 0),
            sessionStartedAt: try values.decodeIfPresent(WorldInstant.self, forKey: .sessionStartedAt),
            phaseStartedAt: try values.decodeIfPresent(WorldInstant.self, forKey: .phaseStartedAt),
            activeSince: try values.decodeIfPresent(WorldInstant.self, forKey: .activeSince),
            completedNaturally: try values.decodeIfPresent(Bool.self, forKey: .completedNaturally) ?? false,
            echoCreatedForSession: try values.decodeIfPresent(Bool.self, forKey: .echoCreatedForSession) ?? false
        )
    }

    public func encode(to encoder: Encoder) throws {
        var values = encoder.container(keyedBy: CodingKeys.self)
        try values.encode(phase.rawValue, forKey: .phase); try values.encode(intent, forKey: .intent)
        try values.encodeIfPresent(sessionID, forKey: .sessionID); try values.encode(workDurationMilliseconds, forKey: .workDurationMilliseconds)
        try values.encode(breakDurationMilliseconds, forKey: .breakDurationMilliseconds); try values.encode(accumulatedWorkMilliseconds, forKey: .accumulatedWorkMilliseconds)
        try values.encode(accumulatedBreakMilliseconds, forKey: .accumulatedBreakMilliseconds); try values.encodeIfPresent(sessionStartedAt, forKey: .sessionStartedAt)
        try values.encodeIfPresent(phaseStartedAt, forKey: .phaseStartedAt)
        try values.encodeIfPresent(activeSince, forKey: .activeSince); try values.encode(completedNaturally, forKey: .completedNaturally)
        try values.encode(echoCreatedForSession, forKey: .echoCreatedForSession)
    }
}

public struct StarPoint: Codable, Equatable, Sendable {
    public var x: Double
    public var y: Double
    public init(x: Double, y: Double) { self.x = x; self.y = y }
}

public struct StarTrace: Codable, Equatable, Sendable {
    public var points: [StarPoint]
    public init(points: [StarPoint]) { self.points = points }
}

public struct RoomEcho: Codable, Equatable, Sendable {
    public var id: UInt64
    public var sessionID: UInt64
    public var threadID: UInt64?
    public var title: String
    public var intent: FocusIntent
    public var startedAt: WorldInstant
    public var completedAt: WorldInstant
    public var focusedMilliseconds: Int64
    public var dayKey: String?
    /// Preserved only for schema-one archives; new reductions never derive or write it.
    public var dayIndex: Int64?
    public var trace: StarTrace

    public init(id: UInt64, sessionID: UInt64, threadID: UInt64?, title: String, intent: FocusIntent, startedAt: WorldInstant, completedAt: WorldInstant, focusedMilliseconds: Int64, dayKey: String, trace: StarTrace) {
        self.id = id; self.sessionID = sessionID; self.threadID = threadID; self.title = title; self.intent = intent
        self.startedAt = startedAt; self.completedAt = completedAt; self.focusedMilliseconds = focusedMilliseconds; self.dayKey = dayKey; self.dayIndex = nil; self.trace = trace
    }

    public init(id: UInt64, sessionID: UInt64, threadID: UInt64?, title: String, intent: FocusIntent, startedAt: WorldInstant, completedAt: WorldInstant, focusedMilliseconds: Int64, dayIndex: Int64, trace: StarTrace) {
        self.id = id; self.sessionID = sessionID; self.threadID = threadID; self.title = title; self.intent = intent
        self.startedAt = startedAt; self.completedAt = completedAt; self.focusedMilliseconds = focusedMilliseconds; self.dayKey = nil; self.dayIndex = dayIndex; self.trace = trace
    }
}

public struct TomorrowCapsule: Codable, Equatable, Sendable {
    public var id: UInt64
    public var message: String
    public var createdAt: WorldInstant
    public var opensAt: WorldInstant
    public var openedAt: WorldInstant?

    public init(id: UInt64, message: String, createdAt: WorldInstant, opensAt: WorldInstant, openedAt: WorldInstant? = nil) {
        self.id = id; self.message = message; self.createdAt = createdAt; self.opensAt = opensAt; self.openedAt = openedAt
    }
}

public struct CompanionState: Codable, Equatable, Sendable {
    public var mood: Double
    public var energy: Double
    public var activity: Activity
    public var intensity: CompanionIntensity
    public var isCloseMomentActive: Bool
    public var ambientVariant: UInt64

    public init(mood: Double = 0.68, energy: Double = 0.72, activity: Activity = .resting, intensity: CompanionIntensity = .balanced, isCloseMomentActive: Bool = false, ambientVariant: UInt64 = 0) {
        self.mood = min(1, max(0, mood)); self.energy = min(1, max(0, energy)); self.activity = activity
        self.intensity = intensity; self.isCloseMomentActive = isCloseMomentActive; self.ambientVariant = ambientVariant
    }

    private enum CodingKeys: String, CodingKey { case mood, energy, activity, intensity, isCloseMomentActive, ambientVariant }
    public init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self)
        self.init(
            mood: try values.decodeIfPresent(Double.self, forKey: .mood) ?? 0.68,
            energy: try values.decodeIfPresent(Double.self, forKey: .energy) ?? 0.72,
            activity: try values.decodeIfPresent(Activity.self, forKey: .activity) ?? .resting,
            intensity: try values.decodeIfPresent(CompanionIntensity.self, forKey: .intensity) ?? .balanced,
            isCloseMomentActive: try values.decodeIfPresent(Bool.self, forKey: .isCloseMomentActive) ?? false,
            ambientVariant: try values.decodeIfPresent(UInt64.self, forKey: .ambientVariant) ?? 0
        )
    }
}

public enum PerformancePriority: Int, Codable, Comparable, Sendable {
    case idleChatter = 0, autonomousAction = 1, companionReturn = 2, phaseFeedback = 3, userDialogue = 4
    public static func < (lhs: Self, rhs: Self) -> Bool { lhs.rawValue < rhs.rawValue }
}

public enum PerformanceSource: Codable, Equatable, Sendable {
    case userDialogue, phaseFeedback, companionReturn, autonomousAction, idleChatter
    case storylet(String)
}

public enum CompanionAction: String, Codable, CaseIterable, Sendable {
    case closeMoment, typeAlongside, researchAlongside, planAlongside, stretch, coffee, glanceWindow, tidyDesk, traceStar, openCapsule
}

public struct PerformanceRequest: Codable, Equatable, Sendable {
    public var id: UInt64
    public var priority: PerformancePriority
    public var source: PerformanceSource
    public var action: CompanionAction?
    public var line: String?
    public var wantsTTS: Bool
    public var isAutonomous: Bool
    public var requestedAt: WorldInstant
    public var startedAt: WorldInstant?
    public var durationMilliseconds: Int64
    public var storyletID: String?

    public init(id: UInt64, priority: PerformancePriority, source: PerformanceSource, action: CompanionAction? = nil, line: String? = nil, wantsTTS: Bool = false, isAutonomous: Bool = false, requestedAt: WorldInstant, startedAt: WorldInstant? = nil, durationMilliseconds: Int64 = 4_000, storyletID: String? = nil) {
        self.id = id; self.priority = priority; self.source = source; self.action = action; self.line = line
        self.wantsTTS = wantsTTS; self.isAutonomous = isAutonomous; self.requestedAt = requestedAt; self.startedAt = startedAt
        self.durationMilliseconds = max(1, durationMilliseconds); self.storyletID = storyletID
    }

    private enum CodingKeys: String, CodingKey { case id, priority, source, action, line, wantsTTS, isAutonomous, requestedAt, startedAt, durationMilliseconds, storyletID }
    public init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self)
        self.init(
            id: try values.decode(UInt64.self, forKey: .id),
            priority: try values.decode(PerformancePriority.self, forKey: .priority),
            source: try values.decode(PerformanceSource.self, forKey: .source),
            action: try values.decodeIfPresent(CompanionAction.self, forKey: .action),
            line: try values.decodeIfPresent(String.self, forKey: .line),
            wantsTTS: try values.decodeIfPresent(Bool.self, forKey: .wantsTTS) ?? false,
            isAutonomous: try values.decodeIfPresent(Bool.self, forKey: .isAutonomous) ?? false,
            requestedAt: try values.decode(WorldInstant.self, forKey: .requestedAt),
            startedAt: try values.decodeIfPresent(WorldInstant.self, forKey: .startedAt),
            durationMilliseconds: try values.decodeIfPresent(Int64.self, forKey: .durationMilliseconds) ?? 4_000,
            storyletID: try values.decodeIfPresent(String.self, forKey: .storyletID)
        )
    }
}

public struct PerformanceState: Codable, Equatable, Sendable {
    public var active: PerformanceRequest?
    public var queued: [PerformanceRequest]
    public init(active: PerformanceRequest? = nil, queued: [PerformanceRequest] = []) { self.active = active; self.queued = queued }
}

public enum StoryletTrigger: String, Codable, CaseIterable, Sendable {
    case launched, focusPreparing, workStarted, workCompleted, breakStarted, breakCompleted, returned, idle, echoMilestone, tomorrowCapsule, lateWork, intentSelected
}

public struct StoryletContext: Codable, Equatable, Sendable {
    public var trigger: StoryletTrigger
    public var at: WorldInstant
    public init(trigger: StoryletTrigger, at: WorldInstant) { self.trigger = trigger; self.at = at }
}

public struct StoryletDefinition: Codable, Equatable, Sendable {
    public var id: String
    public var trigger: StoryletTrigger
    public var intents: [FocusIntent]?
    public var minimumIntensity: CompanionIntensity
    public var minimumEchoCount: Int
    public var cooldownMilliseconds: Int64
    public var exclusiveGroup: String?
    public var priority: PerformancePriority
    public var action: CompanionAction?
    public var line: String?
    public var wantsTTS: Bool
    public var autonomous: Bool

    public init(id: String, trigger: StoryletTrigger, intents: [FocusIntent]?, minimumIntensity: CompanionIntensity, minimumEchoCount: Int, cooldownMilliseconds: Int64, exclusiveGroup: String?, priority: PerformancePriority, action: CompanionAction?, line: String?, wantsTTS: Bool, autonomous: Bool) {
        self.id = id; self.trigger = trigger; self.intents = intents; self.minimumIntensity = minimumIntensity
        self.minimumEchoCount = minimumEchoCount; self.cooldownMilliseconds = cooldownMilliseconds; self.exclusiveGroup = exclusiveGroup
        self.priority = priority; self.action = action; self.line = line; self.wantsTTS = wantsTTS; self.autonomous = autonomous
    }
}

public struct StoryletEmission: Codable, Equatable, Sendable {
    public var definitionID: String
    public var performanceID: UInt64
    public init(definitionID: String, performanceID: UInt64) { self.definitionID = definitionID; self.performanceID = performanceID }
}

public struct StoryletState: Codable, Equatable, Sendable {
    public var pendingContexts: [StoryletContext]
    public var lastPlayedAt: [String: WorldInstant]
    public var lastExclusiveGroupAt: [String: WorldInstant]
    public var playCounts: [String: Int]
    public var lastIdleConsideredAt: WorldInstant?
    public var lastLateWorkConsideredAt: WorldInstant?
    public init(pendingContexts: [StoryletContext] = [], lastPlayedAt: [String: WorldInstant] = [:], lastExclusiveGroupAt: [String: WorldInstant] = [:], playCounts: [String: Int] = [:], lastIdleConsideredAt: WorldInstant? = nil, lastLateWorkConsideredAt: WorldInstant? = nil) {
        self.pendingContexts = pendingContexts; self.lastPlayedAt = lastPlayedAt; self.lastExclusiveGroupAt = lastExclusiveGroupAt
        self.playCounts = playCounts; self.lastIdleConsideredAt = lastIdleConsideredAt; self.lastLateWorkConsideredAt = lastLateWorkConsideredAt
    }

    private enum CodingKeys: String, CodingKey {
        case pendingContexts, pendingContext, lastPlayedAt, lastExclusiveGroupAt, playCounts, lastIdleConsideredAt, lastLateWorkConsideredAt
    }
    public init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self)
        let queued = try values.decodeIfPresent([StoryletContext].self, forKey: .pendingContexts)
        let legacy = try values.decodeIfPresent(StoryletContext.self, forKey: .pendingContext)
        self.init(
            pendingContexts: queued ?? legacy.map { [$0] } ?? [],
            lastPlayedAt: try values.decodeIfPresent([String: WorldInstant].self, forKey: .lastPlayedAt) ?? [:],
            lastExclusiveGroupAt: try values.decodeIfPresent([String: WorldInstant].self, forKey: .lastExclusiveGroupAt) ?? [:],
            playCounts: try values.decodeIfPresent([String: Int].self, forKey: .playCounts) ?? [:],
            lastIdleConsideredAt: try values.decodeIfPresent(WorldInstant.self, forKey: .lastIdleConsideredAt),
            lastLateWorkConsideredAt: try values.decodeIfPresent(WorldInstant.self, forKey: .lastLateWorkConsideredAt)
        )
    }
    public func encode(to encoder: Encoder) throws {
        var values = encoder.container(keyedBy: CodingKeys.self)
        try values.encode(pendingContexts, forKey: .pendingContexts); try values.encode(lastPlayedAt, forKey: .lastPlayedAt)
        try values.encode(lastExclusiveGroupAt, forKey: .lastExclusiveGroupAt); try values.encode(playCounts, forKey: .playCounts)
        try values.encodeIfPresent(lastIdleConsideredAt, forKey: .lastIdleConsideredAt); try values.encodeIfPresent(lastLateWorkConsideredAt, forKey: .lastLateWorkConsideredAt)
    }
}

public struct WorldState: Codable, Equatable, Sendable {
    public static let schemaVersion = 2
    public var version: Int
    public var revision: UInt64
    public var lastReducedAt: WorldInstant
    public var focus: FocusState
    public var companion: CompanionState
    public var completedFocusSessions: Int
    public var todayThread: TodayThread?
    public var roomEchoes: [RoomEcho]
    public var tomorrowCapsule: TomorrowCapsule?
    public var focusedMillisecondsByCivilDay: [String: Int64]
    /// Kept only to decode schema-one state without discarding historical totals.
    public var focusedMillisecondsByDay: [Int64: Int64]
    public var performance: PerformanceState
    public var storylets: StoryletState
    public var isWindowVisible: Bool
    public var civilTimeContext: CivilTimeContext?
    public var nextIdentity: UInt64

    public init(version: Int = Self.schemaVersion, revision: UInt64 = 0, lastReducedAt: WorldInstant = .zero, focus: FocusState = FocusState(), companion: CompanionState = CompanionState(), completedFocusSessions: Int = 0, todayThread: TodayThread? = nil, roomEchoes: [RoomEcho] = [], tomorrowCapsule: TomorrowCapsule? = nil, focusedMillisecondsByCivilDay: [String: Int64] = [:], focusedMillisecondsByDay: [Int64: Int64] = [:], performance: PerformanceState = PerformanceState(), storylets: StoryletState = StoryletState(), isWindowVisible: Bool = true, civilTimeContext: CivilTimeContext? = nil, nextIdentity: UInt64 = 1) {
        self.version = version; self.revision = revision; self.lastReducedAt = lastReducedAt; self.focus = focus; self.companion = companion
        self.completedFocusSessions = completedFocusSessions; self.todayThread = todayThread; self.roomEchoes = roomEchoes
        self.tomorrowCapsule = tomorrowCapsule; self.focusedMillisecondsByCivilDay = focusedMillisecondsByCivilDay; self.focusedMillisecondsByDay = focusedMillisecondsByDay
        self.performance = performance; self.storylets = storylets; self.isWindowVisible = isWindowVisible; self.civilTimeContext = civilTimeContext; self.nextIdentity = nextIdentity
    }

    public mutating func takeIdentity() -> UInt64 { defer { nextIdentity &+= 1 }; return nextIdentity }

    private enum CodingKeys: String, CodingKey {
        case version, revision, lastReducedAt, focus, companion, completedFocusSessions, todayThread, roomEchoes
        case tomorrowCapsule, focusedMillisecondsByCivilDay, focusedMillisecondsByDay, performance, storylets, isWindowVisible, civilTimeContext, nextIdentity
    }
    public init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: CodingKeys.self)
        let storedVersion = try values.decodeIfPresent(Int.self, forKey: .version) ?? 1
        let lastReducedAt = try values.decodeIfPresent(WorldInstant.self, forKey: .lastReducedAt) ?? .zero
        var focus = try values.decodeIfPresent(FocusState.self, forKey: .focus) ?? FocusState()
        if storedVersion < Self.schemaVersion, focus.activeSince == nil, focus.phase == .work || focus.phase == .break {
            focus.activeSince = lastReducedAt
        }
        self.init(
            version: Self.schemaVersion,
            revision: try values.decodeIfPresent(UInt64.self, forKey: .revision) ?? 0,
            lastReducedAt: lastReducedAt,
            focus: focus,
            companion: try values.decodeIfPresent(CompanionState.self, forKey: .companion) ?? CompanionState(),
            completedFocusSessions: try values.decodeIfPresent(Int.self, forKey: .completedFocusSessions) ?? 0,
            todayThread: try values.decodeIfPresent(TodayThread.self, forKey: .todayThread),
            roomEchoes: try values.decodeIfPresent([RoomEcho].self, forKey: .roomEchoes) ?? [],
            tomorrowCapsule: try values.decodeIfPresent(TomorrowCapsule.self, forKey: .tomorrowCapsule),
            focusedMillisecondsByCivilDay: try values.decodeIfPresent([String: Int64].self, forKey: .focusedMillisecondsByCivilDay) ?? [:],
            focusedMillisecondsByDay: try values.decodeIfPresent([Int64: Int64].self, forKey: .focusedMillisecondsByDay) ?? [:],
            performance: try values.decodeIfPresent(PerformanceState.self, forKey: .performance) ?? PerformanceState(),
            storylets: try values.decodeIfPresent(StoryletState.self, forKey: .storylets) ?? StoryletState(),
            isWindowVisible: try values.decodeIfPresent(Bool.self, forKey: .isWindowVisible) ?? true,
            civilTimeContext: try values.decodeIfPresent(CivilTimeContext.self, forKey: .civilTimeContext),
            nextIdentity: try values.decodeIfPresent(UInt64.self, forKey: .nextIdentity) ?? 1
        )
    }
}

public enum RandomPurpose: String, Codable, Sendable { case ambientVariant, nextActivity, storyletChoice }
public enum AudioCue: String, Codable, Sendable { case focusStarted, focusCompleted, breakCompleted, closeMoment }
public enum ReviewOutcome: String, Codable, Sendable { case taskCompleted, continueTomorrow, startBreak }

public enum AppEvent: Codable, Equatable, Sendable {
    indirect case withCivilTime(CivilTimeContext, event: AppEvent)
    case launched(at: WorldInstant)
    case heartbeat(at: WorldInstant)
    case focusButtonPressed(at: WorldInstant)
    case focusSkipped(at: WorldInstant)
    case focusIntentSelected(FocusIntent, title: String, at: WorldInstant)
    case focusDurationsChanged(workMilliseconds: Int64, breakMilliseconds: Int64, at: WorldInstant)
    case reviewCompleted(ReviewOutcome, at: WorldInstant)
    case activitySelected(Activity, at: WorldInstant)
    case moodAdjusted(Double, at: WorldInstant)
    case companionIntensityChanged(CompanionIntensity, at: WorldInstant)
    case closeMomentRequested(at: WorldInstant)
    case closeMomentDismissed(at: WorldInstant)
    case windowVisibilityChanged(Bool, at: WorldInstant)
    case companionReturned(at: WorldInstant)
    case tomorrowCapsuleWritten(message: String, opensAt: WorldInstant, at: WorldInstant)
    case tomorrowCapsuleOpened(at: WorldInstant)
    case performanceRequested(PerformanceRequest, at: WorldInstant)
    case performanceFinished(id: UInt64, at: WorldInstant)
    case randomResolved(RandomPurpose, value: UInt64, at: WorldInstant)
}

public enum Effect: Codable, Equatable, Sendable {
    case persistWorld
    case scheduleHeartbeat(afterMilliseconds: Int64)
    case requestRandom(RandomPurpose)
    case playAudio(AudioCue)
    case beginPerformance(PerformanceRequest)
    case cancelPerformance(id: UInt64)
    /// Runtime cleanup acknowledgement for an accepted, current completion event.
    case finishPerformance(id: UInt64)
    case roomEchoCreated(RoomEcho)
    case emitStorylet(StoryletEmission)
    case tomorrowCapsuleReady(TomorrowCapsule)
}

public protocol WorldStatePersisting: Sendable {
    func load() async throws -> WorldState?
    func save(_ state: WorldState) async throws
}

import Foundation
import SnozzyDomain

enum WorldStateMigrationError: Error, Sendable {
    case unsupportedSourceSchema(Int)
    case inconsistentPayloadVersion(expected: Int, actual: Int)
}

extension WorldStateMigrationError: LocalizedError {
    var errorDescription: String? {
        switch self {
        case let .unsupportedSourceSchema(version):
            "没有可用的 WorldState schema \(version) 迁移器"
        case let .inconsistentPayloadVersion(expected, actual):
            "WorldState envelope 是 schema \(expected)，payload 却声明 version \(actual)"
        }
    }
}

enum WorldStateMigration {
    static func validateSchema(
        _ payloadData: Data,
        envelopeSchemaVersion: Int,
        targetSchemaVersion: Int
    ) throws {
        let declaration = try JSONDecoder().decode(WorldStateVersionDeclaration.self, from: payloadData)
        guard declaration.version == envelopeSchemaVersion else {
            throw DataStoreError.schemaMismatch(
                envelope: envelopeSchemaVersion,
                payload: declaration.version,
                target: targetSchemaVersion
            )
        }
    }

    static func migrate(_ payloadData: Data, from sourceSchemaVersion: Int) throws -> WorldState {
        switch sourceSchemaVersion {
        case 1:
            let legacy = try JSONDecoder().decode(LegacyWorldStateV1.self, from: payloadData)
            guard legacy.version == 1 else {
                throw WorldStateMigrationError.inconsistentPayloadVersion(
                    expected: 1,
                    actual: legacy.version
                )
            }
            return legacy.currentWorldState
        default:
            throw WorldStateMigrationError.unsupportedSourceSchema(sourceSchemaVersion)
        }
    }
}

private struct WorldStateVersionDeclaration: Decodable {
    let version: Int
}

/// Exact persisted payload from commit 717aa33. This DTO is deliberately private
/// to the migration boundary; current domain types never need to retain old fields.
private struct LegacyWorldStateV1: Decodable {
    let version: Int
    let revision: UInt64
    let lastReducedAt: WorldInstant
    let focus: LegacyFocusStateV1
    let companion: LegacyCompanionStateV1
    let completedFocusSessions: Int

    var currentWorldState: WorldState {
        WorldState(
            version: WorldState.schemaVersion,
            revision: revision,
            lastReducedAt: lastReducedAt,
            focus: focus.currentFocusState(lastReducedAt: lastReducedAt),
            companion: companion.currentCompanionState,
            completedFocusSessions: completedFocusSessions
        )
    }
}

private enum LegacyFocusPhaseV1: String, Decodable {
    case work
    case shortBreak
}

private struct LegacyFocusStateV1: Decodable {
    let phase: LegacyFocusPhaseV1
    let isRunning: Bool
    let elapsedMilliseconds: Int64

    func currentFocusState(lastReducedAt: WorldInstant) -> FocusState {
        let activePhase: FocusPhase = phase == .work ? .work : .break
        let currentPhase: FocusPhase
        if isRunning {
            currentPhase = activePhase
        } else if elapsedMilliseconds > 0 {
            currentPhase = .paused
        } else {
            currentPhase = .idle
        }

        return FocusState(
            phase: currentPhase,
            accumulatedWorkMilliseconds: phase == .work ? elapsedMilliseconds : 0,
            accumulatedBreakMilliseconds: phase == .shortBreak ? elapsedMilliseconds : 0,
            activeSince: isRunning ? lastReducedAt : nil
        )
    }
}

private enum LegacyActivityV1: String, Decodable {
    case typing
    case researching
    case planning
    case resting
    case takingBreak

    var currentActivity: Activity {
        switch self {
        case .typing: .typing
        case .researching: .researching
        case .planning: .planning
        case .resting: .resting
        case .takingBreak: .takingBreak
        }
    }
}

private struct LegacyCompanionStateV1: Decodable {
    let mood: Double
    let energy: Double
    let activity: LegacyActivityV1
    let isCloseMomentActive: Bool
    let ambientVariant: UInt64

    var currentCompanionState: CompanionState {
        CompanionState(
            mood: mood,
            energy: energy,
            activity: activity.currentActivity,
            isCloseMomentActive: isCloseMomentActive,
            ambientVariant: ambientVariant
        )
    }
}

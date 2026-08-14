import Darwin
import Foundation

/// Offline preference migration smoke. It deliberately never reads or writes
/// the user's settings file; the fixtures exercise the same Codable path that
/// AppState.restore() uses at launch.
enum SettingsDiagnostics {
    static var isRequested: Bool { CommandLine.arguments.contains("--settingscheck") }

    static func run() {
        do {
            // An old settings file predating sceneMode may contain only the
            // fields that existed at that point. decodeIfPresent must preserve
            // those values and supply the new 2.5D default.
            let legacyData = Data(#"{"volume":0.42,"source":"radio","windowMode":"normal"}"#.utf8)
            let legacy = try JSONDecoder().decode(AppSettings.self, from: legacyData)
            guard legacy.sceneMode == .twoPointFiveD,
                  legacy.volume == 0.42,
                  legacy.source == .radio
            else {
                throw Failure.legacyDefault
            }

            // A current file can opt into the experimental scene and survives
            // an encode/decode round trip without putting the mode on
            // CharacterStyle.
            let experimentalData = Data(#"{"sceneMode":"realtime3DExperimental"}"#.utf8)
            let experimental = try JSONDecoder().decode(AppSettings.self, from: experimentalData)
            guard experimental.sceneMode == .realtime3DExperimental else {
                throw Failure.experimentalDecode
            }
            let roundTrip = try JSONDecoder().decode(AppSettings.self,
                                                      from: JSONEncoder().encode(experimental))
            guard roundTrip.sceneMode == .realtime3DExperimental else {
                throw Failure.roundTrip
            }
            print("SETTINGS_PASS: legacy defaults to 2.5D; explicit 3D survives round-trip")
            exit(0)
        } catch {
            print("SETTINGS_FAIL: \(error.localizedDescription)")
            exit(1)
        }
    }

    private enum Failure: LocalizedError {
        case legacyDefault
        case experimentalDecode
        case roundTrip

        var errorDescription: String? {
            switch self {
            case .legacyDefault: "legacy settings did not preserve values or default to 2.5D"
            case .experimentalDecode: "explicit realtime3DExperimental did not decode"
            case .roundTrip: "scene mode was lost during encode/decode round-trip"
            }
        }
    }
}

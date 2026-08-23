import Foundation

enum WorldStateV1Fixture {
    /// Encodes the exact schema-one field layout from commit 717aa33.
    static let raw = Data(
        #"""
        {
          "version": 1,
          "revision": 27,
          "lastReducedAt": 123456,
          "focus": {
            "phase": "shortBreak",
            "isRunning": true,
            "elapsedMilliseconds": 90000
          },
          "companion": {
            "mood": 0.81,
            "energy": 0.42,
            "activity": "researching",
            "isCloseMomentActive": true,
            "ambientVariant": 7
          },
          "completedFocusSessions": 12
        }
        """#.utf8
    )

    static func envelope(
        schemaVersion: Int = 1,
        revision: UInt64 = 41,
        payloadData: Data = raw
    ) throws -> Data {
        let payload = try JSONSerialization.jsonObject(with: payloadData)
        return try JSONSerialization.data(
            withJSONObject: [
                "schemaVersion": schemaVersion,
                "revision": revision,
                "savedAt": 0,
                "payload": payload
            ],
            options: [.prettyPrinted, .sortedKeys]
        )
    }
}

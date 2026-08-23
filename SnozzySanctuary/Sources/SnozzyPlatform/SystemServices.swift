import Foundation
import SnozzyDomain

public struct SystemClock: Clock, Sendable {
    public init() {}

    public func now() -> WorldInstant {
        WorldInstant(rawValue: nowMilliseconds)
    }

    public var nowMilliseconds: Int64 {
        Int64((Date.timeIntervalSinceReferenceDate * 1_000).rounded(.down))
    }
}

public struct SystemRandomSource: RandomSource, Sendable {
    public init() {}

    public mutating func nextUInt64() -> UInt64 {
        UInt64.random(in: UInt64.min ... UInt64.max)
    }
}

public struct AppPaths: Sendable {
    public let applicationSupport: URL
    public let worldState: URL
    public let logs: URL

    public init(fileManager: FileManager = .default) throws {
        let base = try fileManager.url(
            for: .applicationSupportDirectory,
            in: .userDomainMask,
            appropriateFor: nil,
            create: true
        )
        applicationSupport = base.appending(path: "SnozzySanctuary", directoryHint: .isDirectory)
        worldState = applicationSupport.appending(path: "world.json")
        logs = applicationSupport.appending(path: "Logs", directoryHint: .isDirectory)
    }

    public func prepare(fileManager: FileManager = .default) throws {
        try fileManager.createDirectory(at: applicationSupport, withIntermediateDirectories: true)
        try fileManager.createDirectory(at: logs, withIntermediateDirectories: true)
    }
}

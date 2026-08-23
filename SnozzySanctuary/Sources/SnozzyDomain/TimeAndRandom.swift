public struct WorldInstant: RawRepresentable, Codable, Hashable, Comparable, Sendable {
    public let rawValue: Int64

    public init(rawValue: Int64) {
        self.rawValue = rawValue
    }

    public static let zero = WorldInstant(rawValue: 0)

    public static func < (lhs: WorldInstant, rhs: WorldInstant) -> Bool {
        lhs.rawValue < rhs.rawValue
    }

    public func advanced(byMilliseconds milliseconds: Int64) -> WorldInstant {
        WorldInstant(rawValue: rawValue &+ milliseconds)
    }

    public func milliseconds(since earlier: WorldInstant) -> Int64 {
        rawValue &- earlier.rawValue
    }
}

public protocol Clock: Sendable {
    func now() -> WorldInstant
}

public struct FixedClock: Clock, Sendable {
    public let instant: WorldInstant

    public init(_ instant: WorldInstant) {
        self.instant = instant
    }

    public func now() -> WorldInstant {
        instant
    }
}

public protocol RandomSource: Sendable {
    mutating func nextUInt64() -> UInt64
}

/// Small, stable PRNG used by replays and tests. Production entropy is supplied at the platform edge.
public struct SplitMix64: RandomSource, Equatable, Sendable {
    private var state: UInt64

    public init(seed: UInt64) {
        state = seed
    }

    public mutating func nextUInt64() -> UInt64 {
        state &+= 0x9E37_79B9_7F4A_7C15
        var value = state
        value = (value ^ (value >> 30)) &* 0xBF58_476D_1CE4_E5B9
        value = (value ^ (value >> 27)) &* 0x94D0_49BB_1331_11EB
        return value ^ (value >> 31)
    }

    public mutating func nextUnitInterval() -> Double {
        Double(nextUInt64() >> 11) * 0x1.0p-53
    }
}

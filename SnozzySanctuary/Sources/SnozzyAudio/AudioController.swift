import SnozzyDomain

public protocol AudioHandling: Sendable {
    func handle(_ effect: Effect) async
}

/// Phase-one boundary implementation. The real-time DSP engine can replace it without touching World.
public actor SilentAudioController: AudioHandling {
    public private(set) var receivedCues: [AudioCue] = []

    public init() {}

    public func handle(_ effect: Effect) async {
        guard case let .playAudio(cue) = effect else { return }
        receivedCues.append(cue)
    }
}

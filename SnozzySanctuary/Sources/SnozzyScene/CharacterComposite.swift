import SwiftUI
import SnozzyAssets
import SnozzyDomain
import SnozzyWorld

public enum CharacterPresentation: Equatable, Sendable {
    case scene
    case companion
}

public struct FloatingCompanionSurface: View {
    public let snapshot: SceneSnapshot
    public let assets: SceneAssets
    public let geometry: SceneGeometry

    public init(snapshot: SceneSnapshot, assets: SceneAssets, geometry: SceneGeometry) {
        self.snapshot = snapshot
        self.assets = assets
        self.geometry = geometry
    }

    public var body: some View {
        let crop = CGRect(x: 604, y: 248, width: 420, height: 520)
        let scale = min(
            geometry.viewportSize.width / crop.width,
            geometry.viewportSize.height / crop.height
        )
        ZStack(alignment: .topLeading) {
            CharacterComposite(snapshot: snapshot, assets: assets, presentation: .companion)
                .offset(x: -crop.minX, y: -crop.minY)
        }
        .frame(width: crop.width, height: crop.height, alignment: .topLeading)
        .clipped()
        .scaleEffect(scale)
        .frame(width: geometry.viewportSize.width, height: geometry.viewportSize.height)
        .clipped()
        .accessibilityLabel("Snozzy 浮动伴侣")
    }
}

/// One canvas-native character composition shared by the complete room and compact companion.
public struct CharacterComposite: View {
    public let snapshot: SceneSnapshot
    public let assets: SceneAssets
    public let presentation: CharacterPresentation

    public init(
        snapshot: SceneSnapshot,
        assets: SceneAssets,
        presentation: CharacterPresentation
    ) {
        self.snapshot = snapshot
        self.assets = assets
        self.presentation = presentation
    }

    public var body: some View {
        ZStack(alignment: .topLeading) {
            characterBase
            if presentation == .scene {
                asset("scene.desk")
            }
            handsAndProps
            face
        }
        .frame(width: 1536, height: 1024, alignment: .topLeading)
        .allowsHitTesting(false)
        .accessibilityHidden(true)
    }

    @ViewBuilder
    private var characterBase: some View {
        asset(legAssetID)
        asset(snapshot.focusIsRunning ? "snozzy.body.headphones" : "snozzy.body")
    }

    @ViewBuilder
    private var handsAndProps: some View {
        asset(handAssetID)
    }

    @ViewBuilder
    private var face: some View {
        let lookID: String? = switch snapshot.activity {
        case .researching: "snozzy.face.look_left"
        case .planning: "snozzy.face.look_up"
        case .takingBreak: "snozzy.face.look_right"
        case .typing, .resting: nil
        }
        if let lookID { asset(lookID, opacity: 0.72) }

        if snapshot.energy < 0.42 {
            asset("snozzy.face.eye_soft", opacity: 0.72)
        } else if snapshot.mood > 0.82 {
            asset("snozzy.face.eye_smile", opacity: 0.58)
        }

        if snapshot.blinkAmount > 0.08 {
            asset("snozzy.face.blink_half", opacity: min(1, snapshot.blinkAmount * 1.7))
        }
        if snapshot.blinkAmount > 0.56 {
            asset("snozzy.face.blink_shut", opacity: min(1, (snapshot.blinkAmount - 0.46) * 2.2))
        }

        if snapshot.mood > 0.66 {
            asset("snozzy.face.smile", opacity: min(0.72, (snapshot.mood - 0.6) * 1.8))
        }
    }

    private var handAssetID: String {
        let active = snapshot.focusIsRunning
            || snapshot.activity == .typing
            || snapshot.activity == .researching
        let frame = active ? Int((snapshot.tick.rawValue / 125) % 4) : 0
        return String(format: "snozzy.hands.%02d", frame)
    }

    private var legAssetID: String {
        let branchNames = ["angled", "crossL", "crossR", "tucked"]
        let branchIndex = (Int(snapshot.ambientVariant % 4) + activityOffset) % branchNames.count
        let branch = branchNames[branchIndex]
        let cycle = positiveModulo(snapshot.tick.rawValue, 24_000)
        let frameDuration = 1_000.0 / 12.0

        if cycle < 8 * Int64(frameDuration) {
            let frame = min(7, Int(Double(cycle) / frameDuration))
            return String(format: "snozzy.move.%@.%02d", branch, frame)
        }
        if cycle < 18_000 {
            return "snozzy.legs.\(branch)"
        }
        if cycle < 18_000 + 8 * Int64(frameDuration) {
            let into = cycle - 18_000
            let frame = max(0, 7 - Int(Double(into) / frameDuration))
            return String(format: "snozzy.move.%@.%02d", branch, frame)
        }
        return "snozzy.legs.together"
    }

    private var activityOffset: Int {
        switch snapshot.activity {
        case .typing: 0
        case .researching: 1
        case .planning: 2
        case .resting: 3
        case .takingBreak: 0
        }
    }

    private func positiveModulo(_ value: Int64, _ modulus: Int64) -> Int64 {
        let remainder = value % modulus
        return remainder >= 0 ? remainder : remainder + modulus
    }

    @ViewBuilder
    private func asset(_ id: String, opacity: Double = 1) -> some View {
        if
            let image = assets.image(id),
            let rect = assets.record(id)?.logicalRect
        {
            Image(nsImage: image)
                .resizable()
                .interpolation(.high)
                .frame(width: rect.width, height: rect.height)
                .offset(x: rect.x, y: rect.y)
                .opacity(opacity)
        }
    }
}

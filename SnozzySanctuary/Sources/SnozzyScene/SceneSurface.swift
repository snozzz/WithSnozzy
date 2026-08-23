import SwiftUI
import SnozzyAssets
import SnozzyWorld

/// The only production scene composition. App, floating companion, and Lab reuse its components.
public struct SceneSurface: View {
    public static let productionLayerOrder = [
        "window", "room", "legs", "body", "desk", "hands/props", "face", "feedback"
    ]

    public let snapshot: SceneSnapshot
    public let assets: SceneAssets
    public let geometry: SceneGeometry
    private let onHotspot: (String) -> Void

    public init(
        snapshot: SceneSnapshot,
        assets: SceneAssets,
        geometry: SceneGeometry,
        onHotspot: @escaping (String) -> Void = { _ in }
    ) {
        self.snapshot = snapshot
        self.assets = assets
        self.geometry = geometry
        self.onHotspot = onHotspot
    }

    public var body: some View {
        ZStack(alignment: .topLeading) {
            Color(red: 0.035, green: 0.045, blue: 0.09)

            if assets.isAvailable {
                logicalScene
                    .frame(width: 1536, height: 1024)
                    .scaleEffect(geometry.fittedScale, anchor: .topLeading)
                    .frame(
                        width: geometry.fittedRect.width,
                        height: geometry.fittedRect.height,
                        alignment: .topLeading
                    )
                    .offset(x: geometry.fittedRect.minX, y: geometry.fittedRect.minY)

                hotspotLayer
            } else {
                unavailableView
            }
        }
        .frame(width: geometry.viewportSize.width, height: geometry.viewportSize.height)
        .clipped()
        .accessibilityElement(children: .contain)
        .accessibilityLabel("Snozzy Sanctuary")
    }

    private var logicalScene: some View {
        ZStack(alignment: .topLeading) {
            OrbitalWindow(snapshot: snapshot)
            sceneAsset("scene.room")
            CharacterComposite(snapshot: snapshot, assets: assets, presentation: .scene)
            SceneFeedback(snapshot: snapshot)
        }
        .frame(width: 1536, height: 1024, alignment: .topLeading)
        .background(Color(red: 0.72, green: 0.89, blue: 0.96))
    }

    private var hotspotLayer: some View {
        let hitMap = HotspotHitMap(hotspots: assets.hotspots, geometry: geometry)
        return ZStack(alignment: .topLeading) {
            ForEach(assets.hotspots) { hotspot in
                let points = hitMap.viewportPolygon(for: hotspot)
                Button {
                    onHotspot(hotspot.id)
                } label: {
                    Color.clear
                }
                .frame(width: geometry.viewportSize.width, height: geometry.viewportSize.height)
                .contentShape(HotspotPolygonShape(points: points))
                .buttonStyle(.plain)
                .help(hotspot.label)
                .accessibilityLabel(hotspot.label)
            }
        }
    }

    private var unavailableView: some View {
        VStack(spacing: 12) {
            Image(systemName: "photo.badge.exclamationmark")
                .font(.system(size: 36, weight: .light))
            Text("素材校验未通过")
                .font(.headline)
            Text(assets.loadError ?? "未知素材错误")
                .font(.caption)
                .multilineTextAlignment(.center)
                .foregroundStyle(.secondary)
                .frame(maxWidth: 420)
        }
        .foregroundStyle(.white)
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    @ViewBuilder
    private func sceneAsset(_ id: String) -> some View {
        if let image = assets.image(id) {
            Image(nsImage: image)
                .resizable()
                .interpolation(.high)
                .frame(width: 1536, height: 1024)
        }
    }
}

public struct HotspotPolygonShape: Shape {
    public let points: [CGPoint]

    public init(points: [CGPoint]) { self.points = points }

    public func path(in rect: CGRect) -> Path {
        var path = Path()
        guard let first = points.first else { return path }
        path.move(to: first)
        for point in points.dropFirst() { path.addLine(to: point) }
        path.closeSubpath()
        return path
    }
}

/// Pure geometry used by the production contentShape and negative routing tests.
public struct HotspotHitMap {
    public let hotspots: [Hotspot]
    public let geometry: SceneGeometry
    public let minimumTargetSize: CGFloat

    public init(hotspots: [Hotspot], geometry: SceneGeometry, minimumTargetSize: CGFloat = 28) {
        self.hotspots = hotspots
        self.geometry = geometry
        self.minimumTargetSize = minimumTargetSize
    }

    public func viewportPolygon(for hotspot: Hotspot) -> [CGPoint] {
        let raw = hotspot.polygon.compactMap { pair -> CGPoint? in
            guard pair.count == 2 else { return nil }
            return CGPoint(
                x: geometry.fittedRect.minX + pair[0] * geometry.fittedScale,
                y: geometry.fittedRect.minY + pair[1] * geometry.fittedScale
            )
        }
        guard !raw.isEmpty else { return [] }
        let bounds = Self.bounds(of: raw)
        let scaleX = bounds.width > 0 ? max(1, minimumTargetSize / bounds.width) : 1
        let scaleY = bounds.height > 0 ? max(1, minimumTargetSize / bounds.height) : 1
        let center = CGPoint(x: bounds.midX, y: bounds.midY)
        return raw.map { point in
            CGPoint(
                x: center.x + (point.x - center.x) * scaleX,
                y: center.y + (point.y - center.y) * scaleY
            )
        }
    }

    public func targetBounds(for hotspot: Hotspot) -> CGRect {
        Self.bounds(of: viewportPolygon(for: hotspot))
    }

    public func contains(_ point: CGPoint, in hotspot: Hotspot) -> Bool {
        Self.polygonContains(point, polygon: viewportPolygon(for: hotspot))
    }

    public func hotspot(at point: CGPoint) -> Hotspot? {
        // Mirrors ZStack hit priority: the last declared hotspot is frontmost.
        hotspots.reversed().first { contains(point, in: $0) }
    }

    private static func bounds(of points: [CGPoint]) -> CGRect {
        guard let first = points.first else { return .zero }
        return points.dropFirst().reduce(CGRect(origin: first, size: .zero)) { result, point in
            result.union(CGRect(origin: point, size: .zero))
        }
    }

    private static func polygonContains(_ point: CGPoint, polygon: [CGPoint]) -> Bool {
        guard polygon.count >= 3 else { return false }
        var inside = false
        var previous = polygon[polygon.count - 1]
        for current in polygon {
            let crosses = (current.y > point.y) != (previous.y > point.y)
            if crosses {
                let denominator = previous.y - current.y
                let intersectionX = (previous.x - current.x) * (point.y - current.y) / denominator + current.x
                if point.x < intersectionX { inside.toggle() }
            }
            previous = current
        }
        return inside
    }
}

private struct OrbitalWindow: View {
    let snapshot: SceneSnapshot

    var body: some View {
        Canvas(rendersAsynchronously: true) { context, _ in
            let window = CGRect(x: 313, y: 109, width: 440, height: 347)
            context.clip(to: Path(window))
            context.fill(
                Path(window),
                with: .linearGradient(
                    Gradient(colors: [
                        Color(red: 0.68, green: 0.91, blue: 0.98),
                        Color(red: 0.37, green: 0.62, blue: 0.86),
                        Color(red: 0.45, green: 0.30, blue: 0.66)
                    ]),
                    startPoint: CGPoint(x: window.midX, y: window.minY),
                    endPoint: CGPoint(x: window.midX, y: window.maxY)
                )
            )

            for index in 0 ..< 28 {
                let width = CGFloat(10 + (index * 19) % 20)
                let height = CGFloat(34 + (index * 47 + Int(snapshot.ambientVariant % 61)) % 180)
                let x = window.minX + CGFloat(index) * 17
                let rect = CGRect(x: x, y: window.maxY - height, width: width, height: height)
                context.fill(Path(rect), with: .color(Color(red: 0.10, green: 0.13, blue: 0.27).opacity(0.86)))
                for row in 0 ..< Int(height / 19) where (row + index) % 3 == 0 {
                    context.fill(
                        Path(CGRect(x: x + 4, y: rect.minY + 6 + CGFloat(row) * 18, width: 3, height: 5)),
                        with: .color(Color(red: 0.76, green: 0.98, blue: 0.94).opacity(0.35 + snapshot.lightPulse * 0.4))
                    )
                }
            }

            for index in 0 ..< 22 {
                let phase = snapshot.particlePhase * .pi * 2 + Double(index) * 0.71
                let x = window.minX + CGFloat((index * 83) % 430)
                let y = window.minY + CGFloat((index * 47) % 310) + CGFloat(sin(phase)) * 6
                context.fill(
                    Path(ellipseIn: CGRect(x: x, y: y, width: 3, height: 3)),
                    with: .color(.white.opacity(0.34 + snapshot.lightPulse * 0.28))
                )
            }
        }
        .frame(width: 1536, height: 1024)
        .allowsHitTesting(false)
    }
}

private struct SceneFeedback: View {
    let snapshot: SceneSnapshot

    var body: some View {
        Canvas { context, _ in
            let screenTint: Color = switch snapshot.activity {
            case .typing: Color(red: 0.26, green: 0.87, blue: 0.95)
            case .researching: Color(red: 0.46, green: 0.67, blue: 0.98)
            case .planning: Color(red: 0.96, green: 0.55, blue: 0.73)
            case .resting: Color(red: 0.52, green: 0.81, blue: 0.87)
            case .takingBreak: Color(red: 0.96, green: 0.72, blue: 0.39)
            }
            context.fill(
                RoundedRectangle(cornerRadius: 14).path(in: CGRect(x: 58, y: 363, width: 332, height: 230)),
                with: .color(screenTint.opacity(0.025 + snapshot.lightPulse * 0.025))
            )

            let focusWidth = 116 * snapshot.focusProgress
            context.fill(
                RoundedRectangle(cornerRadius: 4).path(in: CGRect(x: 1_174, y: 754, width: focusWidth, height: 7)),
                with: .color(screenTint.opacity(snapshot.focusIsRunning ? 0.82 : 0.24))
            )

            for index in 0 ..< 9 {
                let phase = snapshot.particlePhase * .pi * 2 + Double(index) * 0.9
                let x = 1_002 + CGFloat(index * 11)
                let y = 671 + CGFloat(sin(phase)) * 9
                context.fill(
                    Path(ellipseIn: CGRect(x: x, y: y, width: 4, height: 4)),
                    with: .color(screenTint.opacity(0.18 + snapshot.lightPulse * 0.32))
                )
            }
        }
        .frame(width: 1536, height: 1024)
        .allowsHitTesting(false)
    }
}

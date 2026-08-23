import SwiftUI
import SnozzyAssets
import SnozzyDomain
import SnozzyWorld

/// The only production scene composition. Lab and app both render this exact view.
public struct SceneSurface: View {
    public let snapshot: SceneSnapshot
    public let assets: SceneAssets
    public let geometry: SceneGeometry

    public init(snapshot: SceneSnapshot, assets: SceneAssets, geometry: SceneGeometry) {
        self.snapshot = snapshot
        self.assets = assets
        self.geometry = geometry
    }

    public var body: some View {
        Canvas(rendersAsynchronously: true) { context, size in
            let viewport = CGRect(origin: .zero, size: size)
            context.fill(Path(viewport), with: .color(Color(red: 0.035, green: 0.035, blue: 0.085)))

            let fitted = geometry.fittedRect
            context.translateBy(x: fitted.minX, y: fitted.minY)
            context.scaleBy(x: geometry.fittedScale, y: geometry.fittedScale)

            let cameraAmount = snapshot.closeMomentAmount
            if cameraAmount > 0 {
                let scale = 1 + CGFloat(cameraAmount) * 0.13
                context.translateBy(x: 768, y: 512)
                context.scaleBy(x: scale, y: scale)
                context.translateBy(x: -768, y: -512)
            }

            ScenePainter.drawBackdrop(in: &context, snapshot: snapshot)
            ScenePainter.drawWindow(in: &context, snapshot: snapshot)
            ScenePainter.drawRoomDetails(in: &context, snapshot: snapshot)
            ScenePainter.drawCompanion(in: &context, snapshot: snapshot)
            ScenePainter.drawForeground(in: &context, snapshot: snapshot)
        }
        .frame(width: geometry.viewportSize.width, height: geometry.viewportSize.height)
        .clipped()
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("Snozzy 的明亮夜间工作室")
        .accessibilityValue(snapshot.activity.displayName)
    }
}

private enum ScenePainter {
    private static let logicalBounds = CGRect(x: 0, y: 0, width: 1536, height: 1024)

    static func drawBackdrop(in context: inout GraphicsContext, snapshot: SceneSnapshot) {
        let backdrop = Path(logicalBounds)
        context.fill(
            backdrop,
            with: .linearGradient(
                Gradient(colors: [
                    Color(red: 0.12, green: 0.13, blue: 0.27),
                    Color(red: 0.31, green: 0.20, blue: 0.38),
                    Color(red: 0.14, green: 0.12, blue: 0.23)
                ]),
                startPoint: CGPoint(x: 200, y: 0),
                endPoint: CGPoint(x: 1_300, y: 1_024)
            )
        )

        let floor = Path(CGRect(x: 0, y: 690, width: 1536, height: 334))
        context.fill(floor, with: .color(Color(red: 0.29, green: 0.20, blue: 0.25)))

        for index in 0 ..< 15 {
            let y = 706 + CGFloat(index) * 23
            var seam = Path()
            seam.move(to: CGPoint(x: 0, y: y))
            seam.addLine(to: CGPoint(x: 1536, y: y + 28))
            context.stroke(seam, with: .color(.white.opacity(0.035)), lineWidth: 2)
        }

        let glowAlpha = 0.18 + snapshot.lightPulse * 0.08
        context.fill(
            Path(CGRect(x: 0, y: 670, width: 1536, height: 18)),
            with: .color(Color(red: 0.38, green: 0.96, blue: 0.98).opacity(glowAlpha))
        )
    }

    static func drawWindow(in context: inout GraphicsContext, snapshot: SceneSnapshot) {
        let frame = CGRect(x: 145, y: 82, width: 560, height: 430)
        context.fill(
            RoundedRectangle(cornerRadius: 34).path(in: frame),
            with: .color(Color(red: 0.74, green: 0.86, blue: 0.94).opacity(0.32))
        )

        let glass = frame.insetBy(dx: 18, dy: 18)
        context.fill(
            RoundedRectangle(cornerRadius: 24).path(in: glass),
            with: .linearGradient(
                Gradient(colors: [
                    Color(red: 0.08, green: 0.10, blue: 0.25),
                    Color(red: 0.37, green: 0.19, blue: 0.46),
                    Color(red: 0.96, green: 0.39, blue: 0.52)
                ]),
                startPoint: glass.origin,
                endPoint: CGPoint(x: glass.maxX, y: glass.maxY)
            )
        )

        context.drawLayer { city in
            city.clip(to: RoundedRectangle(cornerRadius: 24).path(in: glass))
            let seed = Int(snapshot.ambientVariant % 97)
            for index in 0 ..< 34 {
                let width = CGFloat(12 + ((index * 17 + seed) % 20))
                let x = glass.minX + CGFloat(index) * 17
                let height = CGFloat(50 + ((index * 43 + seed * 7) % 210))
                let rect = CGRect(x: x, y: glass.maxY - height, width: width, height: height)
                city.fill(
                    Path(rect),
                    with: .color(Color(red: 0.06, green: 0.07, blue: 0.17).opacity(0.82))
                )
                let lamp = Color(red: 0.45, green: 0.96, blue: 0.95)
                    .opacity(0.22 + snapshot.lightPulse * 0.35)
                for row in 0 ..< Int(height / 24) {
                    if (row + index + seed) % 3 == 0 {
                        city.fill(
                            Path(CGRect(x: x + 4, y: rect.minY + 8 + CGFloat(row) * 22, width: 4, height: 7)),
                            with: .color(lamp)
                        )
                    }
                }
            }
        }

        var mullion = Path()
        mullion.move(to: CGPoint(x: frame.midX, y: frame.minY + 18))
        mullion.addLine(to: CGPoint(x: frame.midX, y: frame.maxY - 18))
        context.stroke(mullion, with: .color(.white.opacity(0.22)), lineWidth: 10)
    }

    static func drawRoomDetails(in context: inout GraphicsContext, snapshot: SceneSnapshot) {
        let shelfColor = Color(red: 0.68, green: 0.55, blue: 0.62)
        context.fill(Path(CGRect(x: 1_176, y: 164, width: 248, height: 18)), with: .color(shelfColor))
        context.fill(Path(CGRect(x: 1_228, y: 318, width: 204, height: 16)), with: .color(shelfColor))

        for index in 0 ..< 8 {
            let colors: [Color] = [
                Color(red: 0.98, green: 0.57, blue: 0.72),
                Color(red: 0.41, green: 0.88, blue: 0.91),
                Color(red: 0.91, green: 0.80, blue: 0.48)
            ]
            let height = CGFloat(42 + (index * 11) % 47)
            context.fill(
                RoundedRectangle(cornerRadius: 4).path(
                    in: CGRect(x: 1_190 + CGFloat(index) * 27, y: 164 - height, width: 18, height: height)
                ),
                with: .color(colors[index % colors.count].opacity(0.82))
            )
        }

        var plant = Path()
        plant.move(to: CGPoint(x: 1_337, y: 316))
        plant.addCurve(
            to: CGPoint(x: 1_290, y: 230),
            control1: CGPoint(x: 1_350, y: 276),
            control2: CGPoint(x: 1_312, y: 254)
        )
        plant.move(to: CGPoint(x: 1_337, y: 316))
        plant.addCurve(
            to: CGPoint(x: 1_385, y: 224),
            control1: CGPoint(x: 1_335, y: 268),
            control2: CGPoint(x: 1_370, y: 254)
        )
        context.stroke(plant, with: .color(Color(red: 0.43, green: 0.87, blue: 0.68)), lineWidth: 12)

        for index in 0 ..< 14 {
            let phase = snapshot.particlePhase * 2 * .pi + Double(index) * 0.73
            let x = 760 + CGFloat(index * 79 % 620)
            let y = 120 + CGFloat(index * 53 % 470) + CGFloat(sin(phase)) * 12
            let radius = CGFloat(2 + index % 4)
            context.fill(
                Path(ellipseIn: CGRect(x: x, y: y, width: radius, height: radius)),
                with: .color(Color.white.opacity(0.12 + snapshot.lightPulse * 0.12))
            )
        }
    }

    static func drawCompanion(in context: inout GraphicsContext, snapshot: SceneSnapshot) {
        let bodyYOffset = CGFloat(snapshot.breathingOffset)
        let centerX: CGFloat = 880
        let head = CGRect(x: centerX - 76, y: 286 + bodyYOffset, width: 152, height: 166)

        context.fill(
            Path(ellipseIn: CGRect(x: centerX - 118, y: 510, width: 236, height: 250)),
            with: .color(Color(red: 0.16, green: 0.12, blue: 0.24).opacity(0.72))
        )

        var hair = Path()
        hair.move(to: CGPoint(x: centerX - 92, y: 392 + bodyYOffset))
        hair.addCurve(
            to: CGPoint(x: centerX + 92, y: 392 + bodyYOffset),
            control1: CGPoint(x: centerX - 72, y: 246 + bodyYOffset),
            control2: CGPoint(x: centerX + 72, y: 246 + bodyYOffset)
        )
        hair.addLine(to: CGPoint(x: centerX + 122, y: 604 + bodyYOffset))
        hair.addLine(to: CGPoint(x: centerX - 126, y: 604 + bodyYOffset))
        hair.closeSubpath()
        context.fill(hair, with: .color(Color(red: 0.88, green: 0.90, blue: 0.98)))

        for direction: CGFloat in [-1, 1] {
            let tail = CGRect(x: centerX + direction * 106 - 40, y: 352 + bodyYOffset, width: 80, height: 244)
            context.fill(
                Path(ellipseIn: tail),
                with: .color(Color(red: 0.79, green: 0.81, blue: 0.94).opacity(0.94))
            )
        }

        context.fill(Path(ellipseIn: head), with: .color(Color(red: 1.0, green: 0.84, blue: 0.80)))

        let dress = RoundedRectangle(cornerRadius: 76).path(
            in: CGRect(x: centerX - 142, y: 440 + bodyYOffset, width: 284, height: 294)
        )
        context.fill(
            dress,
            with: .linearGradient(
                Gradient(colors: [
                    Color(red: 0.98, green: 0.46, blue: 0.67),
                    Color(red: 0.70, green: 0.25, blue: 0.55)
                ]),
                startPoint: CGPoint(x: centerX, y: 430),
                endPoint: CGPoint(x: centerX, y: 750)
            )
        )

        let eyeHeight = max(2, CGFloat(10 * (1 - snapshot.blinkAmount)))
        for direction: CGFloat in [-1, 1] {
            context.fill(
                RoundedRectangle(cornerRadius: 5).path(
                    in: CGRect(
                        x: centerX + direction * 34 - 7,
                        y: 354 + bodyYOffset,
                        width: 14,
                        height: eyeHeight
                    )
                ),
                with: .color(Color(red: 0.23, green: 0.17, blue: 0.31))
            )
        }

        var smile = Path()
        smile.move(to: CGPoint(x: centerX - 17, y: 405 + bodyYOffset))
        smile.addQuadCurve(
            to: CGPoint(x: centerX + 17, y: 405 + bodyYOffset),
            control: CGPoint(x: centerX, y: 419 + bodyYOffset + CGFloat(snapshot.mood * 4))
        )
        context.stroke(smile, with: .color(Color(red: 0.56, green: 0.20, blue: 0.35)), lineWidth: 4)
    }

    static func drawForeground(in context: inout GraphicsContext, snapshot: SceneSnapshot) {
        let deskTop = RoundedRectangle(cornerRadius: 22).path(
            in: CGRect(x: 392, y: 660, width: 1_050, height: 168)
        )
        context.fill(
            deskTop,
            with: .linearGradient(
                Gradient(colors: [
                    Color(red: 0.58, green: 0.40, blue: 0.43),
                    Color(red: 0.31, green: 0.22, blue: 0.30)
                ]),
                startPoint: CGPoint(x: 392, y: 660),
                endPoint: CGPoint(x: 1_442, y: 828)
            )
        )

        context.fill(Path(CGRect(x: 456, y: 806, width: 44, height: 218)), with: .color(Color.black.opacity(0.48)))
        context.fill(Path(CGRect(x: 1_336, y: 806, width: 44, height: 218)), with: .color(Color.black.opacity(0.48)))

        let monitor = RoundedRectangle(cornerRadius: 22).path(
            in: CGRect(x: 1_020, y: 480, width: 334, height: 212)
        )
        context.fill(monitor, with: .color(Color(red: 0.08, green: 0.07, blue: 0.14)))
        let screen = RoundedRectangle(cornerRadius: 15).path(
            in: CGRect(x: 1_035, y: 495, width: 304, height: 180)
        )
        let screenTint: Color = switch snapshot.activity {
        case .typing: Color(red: 0.38, green: 0.93, blue: 0.93)
        case .researching: Color(red: 0.62, green: 0.55, blue: 0.98)
        case .planning: Color(red: 0.99, green: 0.62, blue: 0.78)
        case .resting: Color(red: 0.35, green: 0.61, blue: 0.84)
        case .takingBreak: Color(red: 0.92, green: 0.73, blue: 0.43)
        }
        context.fill(screen, with: .color(screenTint.opacity(0.28 + snapshot.lightPulse * 0.10)))
        context.draw(
            Text(snapshot.activity.displayName)
                .font(.system(size: 24, weight: .semibold, design: .rounded))
                .foregroundStyle(screenTint),
            at: CGPoint(x: 1_187, y: 585),
            anchor: .center
        )

        let keyboard = RoundedRectangle(cornerRadius: 15).path(
            in: CGRect(x: 742, y: 708, width: 346, height: 92)
        )
        context.fill(keyboard, with: .color(Color(red: 0.15, green: 0.13, blue: 0.22)))
        for row in 0 ..< 3 {
            for column in 0 ..< 11 {
                let key = CGRect(
                    x: 758 + CGFloat(column) * 28,
                    y: 722 + CGFloat(row) * 22,
                    width: 20,
                    height: 14
                )
                context.fill(
                    RoundedRectangle(cornerRadius: 3).path(in: key),
                    with: .color(Color.white.opacity(0.10 + snapshot.lightPulse * 0.08))
                )
            }
        }

        let focusWidth = CGFloat(snapshot.focusProgress) * 280
        context.fill(
            RoundedRectangle(cornerRadius: 5).path(in: CGRect(x: 1_047, y: 650, width: focusWidth, height: 8)),
            with: .color(screenTint.opacity(snapshot.focusIsRunning ? 0.9 : 0.35))
        )
    }
}

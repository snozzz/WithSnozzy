import SwiftUI

/// 房间背景。
///
/// 这一版只画「墙 + 窗 + 桌面 + 灯光」四层，后续的绿植、猫、雨雪
/// 都会作为独立图层叠在这上面，所以这里刻意只负责大色块和光照。
struct RoomView: View {
    let palette: Palette

    var body: some View {
        GeometryReader { geo in
            let w = geo.size.width, h = geo.size.height
            // 桌面线：画面下方 ~28% 处，给角色留出坐姿空间。
            let deskY = h * 0.72

            ZStack {
                // 1. 墙面：从顶部略暗渐变到桌面附近略亮，营造纵深。
                LinearGradient(
                    colors: [palette.wallShade.color, palette.wall.color],
                    startPoint: .top, endPoint: .bottom
                )

                // 2. 窗户：偏左上，透出天空。窗外的天色就是整个昼夜循环的主角。
                WindowPane(palette: palette)
                    .frame(width: w * 0.30, height: h * 0.38)
                    .position(x: w * 0.235, y: h * 0.335)

                // 3. 桌面
                Rectangle()
                    .fill(
                        LinearGradient(
                            colors: [palette.floor.lighter(0.06).color, palette.floor.darker(0.18).color],
                            startPoint: .top, endPoint: .bottom
                        )
                    )
                    .frame(height: h - deskY)
                    .position(x: w / 2, y: deskY + (h - deskY) / 2)
                    .overlay(alignment: .top) {
                        // 桌沿高光，一条线就能把平面「立」起来。
                        Rectangle()
                            .fill(palette.lamp.color(0.18 + palette.lampGlow * 0.22))
                            .frame(height: 1.5)
                            .position(x: w / 2, y: deskY)
                    }

                // 4. 台灯光晕：右上方一团暖光，夜里最亮，白天几乎消失。
                RadialGradient(
                    colors: [palette.lamp.color(0.36 * palette.lampGlow), .clear],
                    center: .init(x: 0.78, y: 0.30),
                    startRadius: 0,
                    endRadius: max(w, h) * 0.55
                )
                .blendMode(.plusLighter)

                // 5. 暗角：把视线收拢到画面中心的 Snozzy 身上。
                RadialGradient(
                    colors: [.clear, .black.opacity(0.45)],
                    center: .center,
                    startRadius: min(w, h) * 0.28,
                    endRadius: max(w, h) * 0.78
                )
                .allowsHitTesting(false)
            }
        }
        .ignoresSafeArea()
    }
}

/// 窗格：天空渐变 + 星星 + 十字窗框。
private struct WindowPane: View {
    let palette: Palette

    var body: some View {
        ZStack {
            LinearGradient(
                colors: [palette.skyTop.color, palette.skyBottom.color],
                startPoint: .top, endPoint: .bottom
            )

            if palette.star > 0.01 {
                Stars(opacity: palette.star)
            }

            // 窗框：中央一横一竖。
            GeometryReader { g in
                let frameColor = palette.wallShade.darker(0.25).color
                ZStack {
                    Rectangle().fill(frameColor)
                        .frame(width: 3).position(x: g.size.width / 2, y: g.size.height / 2)
                    Rectangle().fill(frameColor)
                        .frame(height: 3).position(x: g.size.width / 2, y: g.size.height * 0.46)
                }
            }
        }
        .clipShape(RoundedRectangle(cornerRadius: 6, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 6, style: .continuous)
                .strokeBorder(palette.wallShade.darker(0.3).color, lineWidth: 5)
        }
        // 玻璃把室外的光散进来一点。
        .shadow(color: palette.skyBottom.color(0.5), radius: 26)
    }
}

/// 静态星图。位置由固定种子生成——星星不该每次重绘都换地方。
private struct Stars: View {
    let opacity: Double

    /// 归一化坐标 + 亮度，只算一次。
    private static let points: [(CGFloat, CGFloat, Double)] = {
        var seed: UInt64 = 0xA3C5_9AC3
        func rnd() -> Double {
            seed ^= seed << 13; seed ^= seed >> 7; seed ^= seed << 17
            return Double(seed % 10000) / 10000.0
        }
        return (0..<26).map { _ in (CGFloat(rnd()), CGFloat(rnd() * 0.8), 0.35 + rnd() * 0.65) }
    }()

    var body: some View {
        Canvas { ctx, size in
            for (nx, ny, bright) in Self.points {
                let r = 0.7 + bright * 0.8
                let rect = CGRect(
                    x: nx * size.width - r, y: ny * size.height - r,
                    width: r * 2, height: r * 2)
                ctx.fill(Path(ellipseIn: rect), with: .color(.white.opacity(bright * opacity)))
            }
        }
        .allowsHitTesting(false)
    }
}

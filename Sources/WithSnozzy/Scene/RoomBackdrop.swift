import SwiftUI

/// 房间的**背景**层：墙、窗、挂饰、灯光氛围。
///
/// 房间被拆成 backdrop / 角色 / foreground 三层，中间夹着 Snozzy。
/// 这样她才是「坐在桌子后面」而不是「站在墙前面」——
/// 前景的桌沿挡住她下半身，是这套构图成立的关键。
struct RoomBackdrop: View {
    let palette: Palette
    let weather: Weather
    /// 天气动画的时间。晴天时传什么都无所谓。
    var t: Double = 0

    var body: some View {
        GeometryReader { geo in
            let w = geo.size.width, h = geo.size.height

            ZStack {
                // 1. 墙面
                LinearGradient(
                    colors: [palette.wallShade.color, palette.wall.color, palette.wallShade.darker(0.10).color],
                    startPoint: .top, endPoint: .bottom)

                // 2. 踢脚线上方的护墙板分界，给墙一点层次
                Canvas { ctx, size in
                    let line = UnitPath.build(in: CGRect(origin: .zero, size: size), fit: .stretch) { p in
                        p.move(0, 0.60); p.line(1, 0.60)
                    }
                    ctx.stroke(line, with: .color(palette.wallShade.darker(0.22).color(0.6)),
                               lineWidth: max(1, size.height * 0.0035))
                }

                // 3. 窗户。整个昼夜循环和天气都在这里发生。
                WindowPane(palette: palette, weather: weather, t: t)
                    .frame(width: w * 0.30, height: h * 0.42)
                    .position(x: w * 0.235, y: h * 0.335)

                // 4. 串灯：懒散地挂在墙上，是"氛围"最廉价也最有效的一笔
                StringLights(palette: palette)
                    .frame(width: w * 0.62, height: h * 0.14)
                    .position(x: w * 0.34, y: h * 0.115)

                // 5. 墙上的小挂画
                WallPoster(palette: palette)
                    .frame(width: w * 0.085, height: h * 0.16)
                    .position(x: w * 0.735, y: h * 0.30)

                // 6. 台灯光晕：右上一团暖光，夜里最亮，白天几乎消失
                RadialGradient(
                    colors: [palette.lamp.color(0.30 * palette.lampGlow), .clear],
                    center: .init(x: 0.80, y: 0.42),
                    startRadius: 0,
                    endRadius: max(w, h) * 0.52)
                .blendMode(.plusLighter)

                // 7. 暗角：把视线收拢到画面中心
                RadialGradient(
                    colors: [.clear, .black.opacity(0.50)],
                    center: .init(x: 0.5, y: 0.45),
                    startRadius: min(w, h) * 0.24,
                    endRadius: max(w, h) * 0.76)
                .allowsHitTesting(false)
            }
        }
        .ignoresSafeArea()
    }
}

// MARK: - 天空

/// 窗外的天空。抽成独立视图，因为手绘房间的窗洞后面也要塞同一份东西——
/// 画死的天空会让房间失去时间感，昼夜和天气就全丢了。
struct SkyView: View {
    let palette: Palette
    let weather: Weather
    var t: Double = 0

    var body: some View {
        ZStack {
            LinearGradient(
                colors: [palette.skyTop.color, palette.skyBottom.color],
                startPoint: .top, endPoint: .bottom)

            if palette.star > 0.01 {
                Stars(opacity: palette.star)
            }
            Cityscape(palette: palette)
            Precipitation(weather: weather, t: t, tint: palette.skyBottom)
        }
    }
}

// MARK: - 窗

private struct WindowPane: View {
    let palette: Palette
    let weather: Weather
    let t: Double

    var body: some View {
        ZStack {
            LinearGradient(
                colors: [palette.skyTop.color, palette.skyBottom.color],
                startPoint: .top, endPoint: .bottom)

            if palette.star > 0.01 {
                Stars(opacity: palette.star)
            }

            // 远处的城市剪影。夜里亮起零星窗户，是"深夜还有人醒着"的暗示。
            Cityscape(palette: palette)

            Precipitation(weather: weather, t: t, tint: palette.skyBottom)

            // 玻璃上的一道斜向反光
            Canvas { ctx, size in
                let r = CGRect(origin: .zero, size: size)
                let gloss = UnitPath.build(in: r, fit: .stretch) { p in
                    p.move(0.0, 0.44); p.line(0.52, 0.0); p.line(0.78, 0.0); p.line(0.0, 0.70); p.close()
                }
                ctx.fill(gloss, with: .color(.white.opacity(0.05)))
            }

            // 窗框：中央一横一竖
            GeometryReader { g in
                let c = palette.wallShade.darker(0.30).color
                ZStack {
                    Rectangle().fill(c).frame(width: max(2, g.size.width * 0.014))
                        .position(x: g.size.width / 2, y: g.size.height / 2)
                    Rectangle().fill(c).frame(height: max(2, g.size.width * 0.014))
                        .position(x: g.size.width / 2, y: g.size.height * 0.46)
                }
            }
        }
        .clipShape(RoundedRectangle(cornerRadius: 6, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 6, style: .continuous)
                .strokeBorder(palette.wallShade.darker(0.34).color, lineWidth: 6)
        }
        // 窗外的光散进屋里
        .shadow(color: palette.skyBottom.color(0.45), radius: 28)
    }
}

/// 静态星图。位置由固定种子生成——星星不该每次重绘都换地方。
struct Stars: View {
    let opacity: Double

    private static let points: [(CGFloat, CGFloat, Double)] = {
        var seed: UInt64 = 0xA3C5_9AC3
        func rnd() -> Double {
            seed ^= seed << 13; seed ^= seed >> 7; seed ^= seed << 17
            return Double(seed % 10000) / 10000.0
        }
        return (0..<28).map { _ in (CGFloat(rnd()), CGFloat(rnd() * 0.62), 0.35 + rnd() * 0.65) }
    }()

    var body: some View {
        Canvas { ctx, size in
            var path = Path()
            for (nx, ny, bright) in Self.points {
                let r = 0.7 + bright * 0.9
                path.addEllipse(in: CGRect(x: nx * size.width - r, y: ny * size.height - r,
                                           width: r * 2, height: r * 2))
            }
            ctx.fill(path, with: .color(.white.opacity(0.75 * opacity)))
        }
        .allowsHitTesting(false)
    }
}

/// 远景楼房。
struct Cityscape: View {
    let palette: Palette

    /// (左边界, 宽, 高) —— 全部归一化。固定种子保证轮廓不会闪。
    private static let buildings: [(Double, Double, Double)] = {
        var seed: UInt64 = 0x51ED_270B
        func rnd() -> Double {
            seed ^= seed << 13; seed ^= seed >> 7; seed ^= seed << 17
            return Double(seed % 10000) / 10000.0
        }
        var out: [(Double, Double, Double)] = []
        var x = -0.05
        while x < 1.05 {
            let w = 0.08 + rnd() * 0.10
            out.append((x, w, 0.10 + rnd() * 0.20))
            x += w * 0.92
        }
        return out
    }()

    var body: some View {
        Canvas { ctx, size in
            // 楼体：比天空更暗的剪影
            var silhouette = Path()
            for (x, w, h) in Self.buildings {
                silhouette.addRect(CGRect(
                    x: x * size.width, y: size.height * (1 - h),
                    width: w * size.width, height: h * size.height))
            }
            ctx.fill(silhouette, with: .color(palette.skyTop.darker(0.55).color(0.85)))

            // 亮着的窗：只在夜里出现，数量随 star 值变化
            guard palette.star > 0.05 else { return }
            var lights = Path()
            var seed: UInt64 = 0x1234_ABCD
            func rnd() -> Double {
                seed ^= seed << 13; seed ^= seed >> 7; seed ^= seed << 17
                return Double(seed % 10000) / 10000.0
            }
            for (x, w, h) in Self.buildings {
                let cols = max(1, Int(w * size.width / 7))
                let rows = max(1, Int(h * size.height / 9))
                for c in 0..<cols {
                    for r in 0..<rows {
                        guard rnd() < 0.22 else { continue }
                        let px = (x + w * (Double(c) + 0.3) / Double(cols)) * size.width
                        let py = size.height * (1 - h) + (Double(r) + 0.35) / Double(rows) * h * size.height
                        lights.addRect(CGRect(x: px, y: py, width: 2, height: 2.4))
                    }
                }
            }
            ctx.fill(lights, with: .color(palette.lamp.color(0.55 * palette.star)))
        }
        .allowsHitTesting(false)
    }
}

// MARK: - 挂饰

/// 串灯。一条下垂的悬链线加几颗暖色小灯。
private struct StringLights: View {
    let palette: Palette

    var body: some View {
        Canvas { ctx, size in
            let r = CGRect(origin: .zero, size: size)
            // 线
            let wire = UnitPath.build(in: r, fit: .stretch) { p in
                p.move(0.0, 0.18)
                p.quad(1.0, 0.10, 0.5, 0.92)
            }
            ctx.stroke(wire, with: .color(palette.wallShade.darker(0.35).color(0.85)),
                       lineWidth: max(1, size.height * 0.018))

            // 灯泡沿着同一条曲线均匀分布
            let count = 11
            var bulbs = Path()
            for i in 0...count {
                let u = Double(i) / Double(count)
                // 二次贝塞尔求值
                let x = (1 - u) * (1 - u) * 0.0 + 2 * (1 - u) * u * 0.5 + u * u * 1.0
                let y = (1 - u) * (1 - u) * 0.18 + 2 * (1 - u) * u * 0.92 + u * u * 0.10
                let px = x * size.width
                let py = y * size.height + size.height * 0.05
                let rad = size.height * 0.055
                bulbs.addEllipse(in: CGRect(x: px - rad, y: py - rad, width: rad * 2, height: rad * 2))
            }
            // 灯泡本体 + 一层光晕。夜里才亮。
            let glow = 0.25 + 0.75 * palette.lampGlow
            ctx.drawLayer { l in
                l.addFilter(.blur(radius: size.height * 0.09))
                l.fill(bulbs, with: .color(palette.lamp.color(0.55 * glow)))
            }
            ctx.fill(bulbs, with: .color(palette.lamp.lighter(0.35).color(0.85 * glow)))
        }
        .allowsHitTesting(false)
    }
}

/// 墙上的小挂画：一轮月亮和几颗星。
private struct WallPoster: View {
    let palette: Palette

    var body: some View {
        Canvas { ctx, size in
            let r = CGRect(origin: .zero, size: size)
            let frame = UnitPath.build(in: r, fit: .stretch) { p in
                p.roundedRect(0.02, 0.02, 0.98, 0.98, 0.006)
            }
            ctx.fill(frame, with: .color(palette.wallShade.darker(0.30).color))

            let paper = UnitPath.build(in: r, fit: .stretch) { p in
                p.roundedRect(0.10, 0.07, 0.90, 0.93, 0.004)
            }
            ctx.fill(paper, with: .color(palette.wall.lighter(0.16).color))

            // 月牙：画一个大圆再挖掉一个偏移的圆
            let moon = UnitPath.build(in: r, fit: .stretch) { p in
                p.ellipse(0.50, 0.40, 0.22, 0.16)
            }
            ctx.fill(moon, with: .color(palette.lamp.color(0.85)))
            let bite = UnitPath.build(in: r, fit: .stretch) { p in
                p.ellipse(0.60, 0.36, 0.20, 0.145)
            }
            ctx.fill(bite, with: .color(palette.wall.lighter(0.16).color))

            var dots = Path()
            for (x, y, s) in [(0.26, 0.68, 0.020), (0.44, 0.78, 0.014), (0.68, 0.70, 0.017)] {
                dots.addEllipse(in: CGRect(
                    x: (x - s) * size.width, y: (y - s * 1.4) * size.height,
                    width: s * 2 * size.width, height: s * 2.8 * size.height))
            }
            ctx.fill(dots, with: .color(palette.lamp.color(0.6)))
        }
        .allowsHitTesting(false)
    }
}

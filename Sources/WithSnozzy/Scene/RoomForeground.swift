import SwiftUI

/// 桌面上的静物配色。和角色一样，先定基色再由环境光调制。
private enum Props {
    static let desk = RGB(hex: 0x6B4E3D)
    static let deskTop = RGB(hex: 0x8A6650)
    static let deskEdge = RGB(hex: 0xB08A6A)

    static let mug = RGB(hex: 0xE8A2B4)
    static let mugShade = RGB(hex: 0xC27F92)

    static let leaf = RGB(hex: 0x6FA778)
    static let leafDark = RGB(hex: 0x4C7A57)
    static let pot = RGB(hex: 0xC28563)

    static let book = RGB(hex: 0xE4DCCB)
    static let bookEdge = RGB(hex: 0xBCAF98)
    static let pen = RGB(hex: 0x4A4159)

    static let cat = RGB(hex: 0xF0E5DA)
    static let catShade = RGB(hex: 0xD2C1B2)
    static let catEar = RGB(hex: 0xE8B2B8)

    static let lampArm = RGB(hex: 0x4A4159)
    static let lampShade = RGB(hex: 0xE8C08A)
}

/// 房间的**前景**层：桌面和桌上的静物。
///
/// 它画在 Snozzy 之上，桌沿因此会挡住她的下半身——
/// 这一层是「她坐在桌前」这个印象的全部来源。
struct RoomForeground: View {
    let palette: Palette

    /// 桌面上沿在画面中的高度。
    ///
    /// 这个数同时决定两件事：桌沿切在 Snozzy 身上的位置，以及桌子正面板占多大面积。
    /// 太高的话下方会留出一大块空荡荡的木色，太低又挡不住她的下半身。
    static let deskTop = 0.800

    var body: some View {
        Canvas(opaque: false, rendersAsynchronously: false) { ctx, size in
            let r = CGRect(origin: .zero, size: size)

            // 环境光：和角色用同一套逻辑，夜里压暗但不偏色。
            let glow = clamp(palette.lampGlow, 0, 1)
            let amb = RGB.lerp(RGB(1.0, 0.99, 0.98), RGB(0.72, 0.66, 0.70), glow)
            func lit(_ c: RGB) -> RGB {
                RGB(min(c.r * amb.r, 1), min(c.g * amb.g, 1), min(c.b * amb.b, 1))
            }

            drawDesk(&ctx, r, size, lit)
            drawPlant(&ctx, r, size, lit)
            drawMug(&ctx, r, size, lit)
            drawNotebook(&ctx, r, size, lit)
            drawCat(&ctx, r, size, lit)
            drawLamp(&ctx, r, size, lit, glow)
        }
        .allowsHitTesting(false)
    }

    // MARK: - 桌子

    private func drawDesk(_ ctx: inout GraphicsContext, _ r: CGRect, _ size: CGSize,
                          _ lit: (RGB) -> RGB) {
        let top = Self.deskTop
        // 桌面顶板：一条窄带，暗示这是一个有厚度的平面而不是一堵墙。
        let surface = UnitPath.build(in: r, fit: .stretch) { p in
            p.rect(0, top, 1, top + 0.040)
        }
        ctx.fill(surface, with: .linearGradient(
            Gradient(colors: [lit(Props.deskTop).lighter(0.10).color, lit(Props.deskTop).color]),
            startPoint: UnitPath(in: r, fit: .stretch).point(0, top),
            endPoint: UnitPath(in: r, fit: .stretch).point(0, top + 0.040)))

        // 桌子的正面板
        let front = UnitPath.build(in: r, fit: .stretch) { p in
            p.rect(0, top + 0.040, 1, 1.0)
        }
        ctx.fill(front, with: .linearGradient(
            Gradient(colors: [lit(Props.desk).color, lit(Props.desk).darker(0.35).color]),
            startPoint: UnitPath(in: r, fit: .stretch).point(0, top + 0.04),
            endPoint: UnitPath(in: r, fit: .stretch).point(0, 1.0)))

        // 桌沿高光。灯在右上，所以右边更亮。
        let edge = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(0, top); p.line(1, top)
        }
        ctx.stroke(edge, with: .linearGradient(
            Gradient(colors: [lit(Props.deskEdge).color(0.35), lit(Props.deskEdge).color(0.95)]),
            startPoint: UnitPath(in: r, fit: .stretch).point(0, top),
            endPoint: UnitPath(in: r, fit: .stretch).point(1, top)),
            lineWidth: max(1, size.height * 0.0035))
    }

    // MARK: - 绿植

    private func drawPlant(_ ctx: inout GraphicsContext, _ r: CGRect, _ size: CGSize,
                           _ lit: (RGB) -> RGB) {
        let cx = 0.072, base = Self.deskTop + 0.004

        // 叶片：五片，长短和角度各不相同才像植物
        for (angle, len, wide) in [(-0.85, 0.150, 0.026), (-0.40, 0.185, 0.030),
                                   (0.05, 0.205, 0.032), (0.48, 0.175, 0.029),
                                   (0.92, 0.135, 0.024)] {
            let tipX = cx + sin(angle) * len * 0.62
            let tipY = base - 0.030 - cos(angle) * len
            let leaf = UnitPath.build(in: r, fit: .stretch) { p in
                p.move(cx, base - 0.028)
                p.quad(tipX, tipY, cx + sin(angle) * len * 0.20 - wide, (base - 0.028 + tipY) / 2)
                p.quad(cx, base - 0.028, cx + sin(angle) * len * 0.20 + wide, (base - 0.028 + tipY) / 2)
                p.close()
            }
            ctx.fill(leaf, with: .color(lit(angle < 0 ? Props.leafDark : Props.leaf).color))
        }

        // 花盆
        let pot = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(cx - 0.030, base - 0.032)
            p.line(cx + 0.030, base - 0.032)
            p.line(cx + 0.022, base)
            p.line(cx - 0.022, base)
            p.close()
        }
        ctx.fill(pot, with: .linearGradient(
            Gradient(colors: [lit(Props.pot).lighter(0.12).color, lit(Props.pot).darker(0.28).color]),
            startPoint: UnitPath(in: r, fit: .stretch).point(cx - 0.03, base),
            endPoint: UnitPath(in: r, fit: .stretch).point(cx + 0.03, base)))
    }

    // MARK: - 马克杯

    private func drawMug(_ ctx: inout GraphicsContext, _ r: CGRect, _ size: CGSize,
                         _ lit: (RGB) -> RGB) {
        let cx = 0.178, base = Self.deskTop + 0.006, top = base - 0.062

        // 把手
        let handle = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(cx + 0.026, top + 0.014)
            p.quad(cx + 0.026, base - 0.016, cx + 0.062, (top + base) / 2 - 0.004)
        }
        ctx.stroke(handle, with: .color(lit(Props.mugShade).color),
                   style: .init(lineWidth: max(2, size.height * 0.010), lineCap: .round))

        // 杯体
        let body = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(cx - 0.028, top)
            p.line(cx + 0.028, top)
            p.quad(cx - 0.024, base, cx, base + 0.006)
            p.close()
        }
        ctx.fill(body, with: .linearGradient(
            Gradient(colors: [lit(Props.mug).color, lit(Props.mugShade).color]),
            startPoint: UnitPath(in: r, fit: .stretch).point(cx - 0.03, top),
            endPoint: UnitPath(in: r, fit: .stretch).point(cx + 0.03, base)))

        // 杯口和液面
        let rim = UnitPath.build(in: r, fit: .stretch) { p in
            p.ellipse(cx, top, 0.028, 0.009)
        }
        ctx.fill(rim, with: .color(lit(Props.mug).lighter(0.30).color))
        let coffee = UnitPath.build(in: r, fit: .stretch) { p in
            p.ellipse(cx, top + 0.001, 0.021, 0.0065)
        }
        ctx.fill(coffee, with: .color(RGB(hex: 0x4A2C1E).color))
    }

    // MARK: - 笔记本

    private func drawNotebook(_ ctx: inout GraphicsContext, _ r: CGRect, _ size: CGSize,
                              _ lit: (RGB) -> RGB) {
        let base = Self.deskTop + 0.030
        // 摊开的本子：两页加中缝。平摊在桌面上，所以画成略带透视的平行四边形。
        let left = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(0.238, base - 0.008)
            p.line(0.316, base - 0.017)
            p.line(0.320, base + 0.016)
            p.line(0.244, base + 0.026)
            p.close()
        }
        let right = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(0.316, base - 0.017)
            p.line(0.394, base - 0.008)
            p.line(0.396, base + 0.026)
            p.line(0.320, base + 0.016)
            p.close()
        }
        ctx.fill(left, with: .color(lit(Props.book).color))
        ctx.fill(right, with: .color(lit(Props.book).darker(0.06).color))

        // 中缝的阴影
        let gutter = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(0.316, base - 0.017)
            p.line(0.320, base + 0.016)
        }
        ctx.stroke(gutter, with: .color(lit(Props.bookEdge).darker(0.20).color),
                   style: .init(lineWidth: max(1, size.height * 0.004)))

        // 纸上的几行字，只用短横线示意
        var lines = Path()
        for i in 0..<3 {
            let y = base - 0.002 + Double(i) * 0.008
            lines.addPath(UnitPath.build(in: r, fit: .stretch) { p in
                p.move(0.252, y + 0.004); p.line(0.306, y - 0.002)
            })
            lines.addPath(UnitPath.build(in: r, fit: .stretch) { p in
                p.move(0.330, y - 0.001); p.line(0.384, y + 0.005)
            })
        }
        ctx.stroke(lines, with: .color(lit(Props.bookEdge).color(0.75)),
                   style: .init(lineWidth: max(1, size.height * 0.0022), lineCap: .round))

        // 笔
        let pen = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(0.300, base + 0.040)
            p.line(0.386, base + 0.030)
        }
        ctx.stroke(pen, with: .color(lit(Props.pen).color),
                   style: .init(lineWidth: max(2, size.height * 0.008), lineCap: .round))
    }

    // MARK: - 猫

    private func drawCat(_ ctx: inout GraphicsContext, _ r: CGRect, _ size: CGSize,
                         _ lit: (RGB) -> RGB) {
        // 所有尺寸都乘 s。想让猫大一点小一点，只改这一个数。
        let s = 1.45
        let cx = 0.706, base = Self.deskTop + 0.010
        let hx = cx + 0.040 * s              // 头的中心
        let hy = base - 0.034 * s

        // 尾巴：从身后绕到身前
        let tail = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(cx - 0.052 * s, base - 0.010 * s)
            p.quad(cx + 0.030 * s, base + 0.002, cx - 0.012 * s, base + 0.022 * s)
        }
        ctx.stroke(tail, with: .color(lit(Props.catShade).color),
                   style: .init(lineWidth: max(3, size.height * 0.013 * s), lineCap: .round))

        // 蜷成一团的身体
        let body = UnitPath.build(in: r, fit: .stretch) { p in
            p.ellipse(cx, base - 0.022 * s, 0.058 * s, 0.028 * s)
        }
        ctx.fill(body, with: .linearGradient(
            Gradient(colors: [lit(Props.cat).color, lit(Props.catShade).color]),
            startPoint: UnitPath(in: r, fit: .stretch).point(cx, base - 0.050 * s),
            endPoint: UnitPath(in: r, fit: .stretch).point(cx, base)))

        // 耳朵先画，让头把耳根盖住
        var ears = Path()
        for dx in [-0.014 * s, 0.016 * s] {
            ears.addPath(UnitPath.build(in: r, fit: .stretch) { p in
                p.move(hx + dx - 0.011 * s, hy - 0.008 * s)
                p.line(hx + dx + 0.001 * s, hy - 0.030 * s)
                p.line(hx + dx + 0.012 * s, hy - 0.006 * s)
                p.close()
            })
        }
        ctx.fill(ears, with: .color(lit(Props.cat).darker(0.06).color))
        var inner = Path()
        for dx in [-0.014 * s, 0.016 * s] {
            inner.addPath(UnitPath.build(in: r, fit: .stretch) { p in
                p.move(hx + dx - 0.005 * s, hy - 0.010 * s)
                p.line(hx + dx + 0.001 * s, hy - 0.024 * s)
                p.line(hx + dx + 0.006 * s, hy - 0.009 * s)
                p.close()
            })
        }
        ctx.fill(inner, with: .color(lit(Props.catEar).color))

        // 头
        let head = UnitPath.build(in: r, fit: .stretch) { p in
            p.ellipse(hx, hy, 0.028 * s, 0.023 * s)
        }
        ctx.fill(head, with: .color(lit(Props.cat).color))

        // 睡着的眯眼
        var face = Path()
        for dx in [-0.012 * s, 0.012 * s] {
            face.addPath(UnitPath.build(in: r, fit: .stretch) { p in
                p.move(hx + dx - 0.007 * s, hy + 0.002 * s)
                p.quad(hx + dx + 0.007 * s, hy + 0.002 * s, hx + dx, hy - 0.006 * s)
            })
        }
        ctx.stroke(face, with: .color(lit(Props.catShade).darker(0.5).color),
                   style: .init(lineWidth: max(1, size.height * 0.0038), lineCap: .round))

        // 鼻子
        let nose = UnitPath.build(in: r, fit: .stretch) { p in
            p.ellipse(hx, hy + 0.009 * s, 0.005 * s, 0.0035 * s)
        }
        ctx.fill(nose, with: .color(lit(Props.catEar).darker(0.15).color))
    }

    // MARK: - 台灯

    private func drawLamp(_ ctx: inout GraphicsContext, _ r: CGRect, _ size: CGSize,
                          _ lit: (RGB) -> RGB, _ glow: Double) {
        let cx = 0.882, base = Self.deskTop + 0.010
        let metal = max(3, size.height * 0.011)

        // 先铺光斑，这样灯具本身压在光上面，层次才对。
        if glow > 0.05 {
            ctx.drawLayer { l in
                l.addFilter(.blur(radius: size.height * 0.050))
                let pool = UnitPath.build(in: r, fit: .stretch) { p in
                    p.ellipse(cx - 0.080, base + 0.010, 0.120, 0.030)
                }
                l.fill(pool, with: .color(palette.lamp.color(0.45 * glow)))
            }
        }

        // 底座
        let stand = UnitPath.build(in: r, fit: .stretch) { p in
            p.ellipse(cx, base, 0.044, 0.011)
        }
        ctx.fill(stand, with: .color(lit(Props.lampArm).color))

        // 立杆 + 斜臂分成两段画。
        // 上一版用一条细曲线，结果灯罩看起来像悬空的方块——
        // 关节处必须有明确的转折，才读得出"这是一盏可调角度的台灯"。
        let post = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(cx, base - 0.004)
            p.line(cx, base - 0.115)
        }
        ctx.stroke(post, with: .color(lit(Props.lampArm).color),
                   style: .init(lineWidth: metal, lineCap: .round))

        let arm = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(cx, base - 0.115)
            p.line(cx - 0.052, base - 0.170)
        }
        ctx.stroke(arm, with: .color(lit(Props.lampArm).color),
                   style: .init(lineWidth: metal, lineCap: .round))

        // 关节
        let joint = UnitPath.build(in: r, fit: .stretch) { p in
            p.ellipse(cx, base - 0.115, 0.011, 0.011)
        }
        ctx.fill(joint, with: .color(lit(Props.lampArm).lighter(0.25).color))

        // 灯罩：朝左下敞开的锥形，罩口对着桌面
        let shade = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(cx - 0.044, base - 0.186)      // 罩顶后缘
            p.line(cx - 0.014, base - 0.166)      // 罩顶前缘
            p.line(cx - 0.052, base - 0.106)      // 罩口前缘
            p.line(cx - 0.104, base - 0.136)      // 罩口后缘
            p.close()
        }
        ctx.fill(shade, with: .linearGradient(
            Gradient(colors: [lit(Props.lampShade).lighter(0.22).color, lit(Props.lampShade).darker(0.34).color]),
            startPoint: UnitPath(in: r, fit: .stretch).point(cx - 0.02, base - 0.19),
            endPoint: UnitPath(in: r, fit: .stretch).point(cx - 0.09, base - 0.11)))

        guard glow > 0.05 else { return }
        // 罩口那条发亮的边
        let mouth = UnitPath.build(in: r, fit: .stretch) { p in
            p.move(cx - 0.052, base - 0.106)
            p.line(cx - 0.104, base - 0.136)
        }
        ctx.stroke(mouth, with: .color(palette.lamp.lighter(0.55).color(0.9 * glow)),
                   style: .init(lineWidth: max(2, size.height * 0.009), lineCap: .round))

        // 罩口漏出的一小团光
        ctx.drawLayer { l in
            l.addFilter(.blur(radius: size.height * 0.020))
            let bulb = UnitPath.build(in: r, fit: .stretch) { p in
                p.ellipse(cx - 0.078, base - 0.121, 0.030, 0.016)
            }
            l.fill(bulb, with: .color(palette.lamp.lighter(0.4).color(0.85 * glow)))
        }
    }
}

/// 咖啡上升的热气。
///
/// 单独一层是因为它是前景里**唯一**需要逐帧重画的东西。
/// 和桌子画在一起的话，整张桌子每秒要重绘 30 次，纯属浪费。
struct SteamOverlay: View {
    let palette: Palette
    let t: Double

    var body: some View {
        Canvas(opaque: false, rendersAsynchronously: false) { ctx, size in
            var path = Path()
            for i in 0..<3 {
                let phase = t * 0.55 + Double(i) * 0.33
                // 每缕气整体缓慢上升并淡出，到顶后从底部重新开始。
                let rise = phase.truncatingRemainder(dividingBy: 1.0)
                let x = size.width * (0.32 + Double(i) * 0.18)
                let bottom = size.height * (1.0 - rise * 0.85)
                let h = size.height * 0.34
                let wobble = sin(t * 1.7 + Double(i) * 2.1) * size.width * 0.075

                path.move(to: CGPoint(x: x, y: bottom))
                path.addCurve(
                    to: CGPoint(x: x + wobble * 0.4, y: bottom - h),
                    control1: CGPoint(x: x + wobble, y: bottom - h * 0.35),
                    control2: CGPoint(x: x - wobble, y: bottom - h * 0.7))
            }
            ctx.stroke(path, with: .color(palette.text.color(0.16)),
                       style: .init(lineWidth: max(1, size.width * 0.035), lineCap: .round))
        }
        .allowsHitTesting(false)
    }
}

import SwiftUI

/// 窗外的赛博朋克城市。
///
/// 这块画在手绘房间的窗洞后面，所以**它是整个场景里唯一会动、会随时间变化的部分**。
/// 把天空画死在房间图里省事，但房间就永远停在某一个时刻了。
///
/// 分三层纵深：远处只剩雾里的剪影，中景亮着成片的窗户，近景是压在最前的
/// 黑色楼体加霓虹招牌。层与层之间靠雾的浓度拉开距离，不靠模糊——
/// 高斯模糊在这个尺寸上每帧都要重算，而雾只是一层渐变。
///
/// 几何全部由固定种子预生成：楼不该每帧换地方，而且省掉每帧的随机数开销。
struct CyberCity: View {
    let palette: Palette
    let weather: Weather
    var t: Double = 0

    /// 房间的明度。窗外要跟着屋里走：一间浅色明亮的屋子配一片浓黑的
    /// 楼群，窗户会变成画面上最重的一块，喧宾夺主。值越大城市越淡、越柔。
    var airy: Double = 0.72

    var body: some View {
        Canvas(rendersAsynchronously: false) { ctx, size in
            draw(ctx: &ctx, size: size, night: clamp(palette.star, 0, 1))
        }
        .background {
            ZStack {
                LinearGradient(colors: [palette.skyTop.color, palette.skyBottom.color],
                               startPoint: .top, endPoint: .bottom)
                // 雾霾。白天最重——赛博朋克的白天不是晴空，是发黄的霾，
                // 不做这一层的话白天档就是"灰剪影配蓝天"，和霓虹房间两个世界。
                LinearGradient(
                    colors: [Palette.smog.color(0.30), Palette.smog.color(0.70)],
                    startPoint: .top, endPoint: .bottom)
                .opacity((1 - clamp(palette.star, 0, 1)) * (1 - airy * 0.45))
                // 空气感：往整片窗景上盖一层很淡的天光，把纵深压柔
                LinearGradient(
                    colors: [palette.skyTop.lighter(0.5).color(0.10 * airy),
                             palette.skyBottom.lighter(0.6).color(0.30 * airy)],
                    startPoint: .top, endPoint: .bottom)
            }
        }
        .overlay {
            // 地平线附近的光污染。城市的光把低空染亮，是"这是个大城市"最直接的暗示。
            LinearGradient(
                colors: [.clear, Palette.neonWarm.color(0.34 * clamp(palette.star, 0, 1)
                                                        * (1 - airy * 0.4))],
                startPoint: .center, endPoint: .bottom)
            .blendMode(.plusLighter)
        }
        .overlay { Precipitation(weather: weather, t: t, tint: palette.skyBottom) }
        .allowsHitTesting(false)
    }

    private func draw(ctx: inout GraphicsContext, size: CGSize, night: Double) {
        let W = size.width, H = size.height

        for layer in Self.layers {
            // 越远的层被雾吃得越狠，同时整体抬高（远处的楼在画面上更靠上）
            let haze = layer.haze
            let base = palette.skyBottom.lighter(0.10)
            var towers = Path()
            for b in layer.towers {
                let w = b.width * W
                let x = b.x * W
                let h = b.height * H
                towers.addRect(CGRect(x: x, y: H - h, width: w, height: h))
                // 塔尖天线
                if b.mast > 0 {
                    towers.addRect(CGRect(x: x + w * 0.44, y: H - h - b.mast * H,
                                          width: max(1, w * 0.10), height: b.mast * H))
                }
            }
            // 楼体的明度要跟着昼夜走：夜里近乎全黑，白天被雾洗成灰。
            // 只按 haze 压暗的话，白天的楼是一片死黑，大气透视是反的。
            let solid = base.darker(0.62 * (1 - haze) + 0.10)
            let washed = RGB.lerp(solid, Palette.smog.darker(0.18), (1 - night) * (0.35 + haze * 0.45))
            // 往天空色里回混一部分：楼群不再是剪影，而是浸在空气里的形体
            let soft = RGB.lerp(washed, palette.skyBottom.lighter(0.22), airy * (0.35 + haze * 0.4))
            ctx.fill(towers, with: .color(soft.color(1 - haze * 0.55 * (1 - airy * 0.3))))

            // 亮着的窗。成片而不是均匀撒点——整栋楼一起亮/一起黑才像有人住。
            var lit = Path()
            for w in layer.windows {
                lit.addRect(CGRect(x: w.x * W, y: H - w.y * H,
                                   width: max(1, w.w * W), height: max(1, w.h * H)))
            }
            ctx.fill(lit, with: .color(Palette.neonWarm.color(0.55 * night * (1 - haze * 0.7))))
        }

        // 招牌和广告牌白天也不会全关，只是被天光压过去。
        // 完全按 star 关掉的话白天就只剩灰剪影了。
        // airy 越高整体越收敛——明亮的房间里，窗外不该有刺眼的霓虹。
        let glow = max(night, 0.26) * (1 - airy * 0.34)

        // 霓虹招牌：贴在近景楼体上的竖条和横条
        for s in Self.signs {
            let r = CGRect(x: s.x * W, y: H - s.y * H, width: max(2, s.w * W), height: max(2, s.h * H))
            let c = s.cyan ? Palette.neonCyan : Palette.neonPink
            // 先铺一层大的低透明度当辉光，再压一道实心。
            // 比 .blur 便宜得多，而且在这个尺寸上看不出区别。
            ctx.fill(Path(roundedRect: r.insetBy(dx: -r.width * 0.9, dy: -r.height * 0.5),
                          cornerRadius: r.height),
                     with: .color(c.color(0.16 * glow)))
            ctx.fill(Path(r), with: .color(c.color(0.92 * glow)))
        }

        // 全息广告牌：半透明的大面板，缓慢闪烁
        for (i, b) in Self.billboards.enumerated() {
            let flicker = 0.78 + 0.22 * sin(t * (0.7 + Double(i) * 0.23) + Double(i))
            let r = CGRect(x: b.x * W, y: H - b.y * H, width: b.w * W, height: b.h * H)
            let c = b.cyan ? Palette.neonCyan : Palette.neonPink
            ctx.fill(Path(roundedRect: r, cornerRadius: 2),
                     with: .color(c.color(0.20 * glow * flicker)))
            // 面板里的几道扫描线
            var lines = Path()
            var y = r.minY + r.height * 0.18
            while y < r.maxY - 2 {
                lines.addRect(CGRect(x: r.minX + 2, y: y, width: r.width - 4, height: 1))
                y += max(3, r.height * 0.22)
            }
            ctx.fill(lines, with: .color(c.color(0.5 * glow * flicker)))
        }

        // 塔尖警示灯：各自的周期，不同步才自然
        for (i, b) in Self.beacons.enumerated() {
            let phase = (t * 0.55 + Double(i) * 0.37).truncatingRemainder(dividingBy: 1)
            guard phase < 0.22 else { continue }
            let a = sin(phase / 0.22 * .pi)
            let p = CGPoint(x: b.x * W, y: H - b.y * H)
            ctx.fill(Path(ellipseIn: CGRect(x: p.x - 3, y: p.y - 3, width: 6, height: 6)),
                     with: .color(Palette.neonPink.color(0.30 * a * night)))
            ctx.fill(Path(ellipseIn: CGRect(x: p.x - 1, y: p.y - 1, width: 2, height: 2)),
                     with: .color(Palette.neonPink.lighter(0.4).color(a * night)))
        }

        // 飞行器航灯：横穿画面的慢速光点，带一条短拖尾
        for (i, f) in Self.flyers.enumerated() {
            let speed = f.speed
            let u = ((t * speed + Double(i) * 0.41).truncatingRemainder(dividingBy: 1.4)) - 0.2
            guard u > -0.1, u < 1.1 else { continue }
            let x = (f.rightward ? u : 1 - u) * W
            let y = H - f.y * H
            let dir: Double = f.rightward ? -1 : 1
            var trail = Path()
            trail.move(to: CGPoint(x: x, y: y))
            trail.addLine(to: CGPoint(x: x + dir * W * 0.05, y: y))
            ctx.stroke(trail, with: .color((f.cyan ? Palette.neonCyan : Palette.neonWarm)
                .color(0.28 * night)), lineWidth: 1)
            ctx.fill(Path(ellipseIn: CGRect(x: x - 1.4, y: y - 1.4, width: 2.8, height: 2.8)),
                     with: .color((f.cyan ? Palette.neonCyan : Palette.neonWarm).color(0.95 * night)))
        }
    }

    // MARK: - 预生成的几何

    private struct Tower { let x, width, height, mast: Double }
    private struct Win { let x, y, w, h: Double }
    private struct Layer { let haze: Double; let towers: [Tower]; let windows: [Win] }
    private struct Sign { let x, y, w, h: Double; let cyan: Bool }
    private struct Board { let x, y, w, h: Double; let cyan: Bool }
    private struct Beacon { let x, y: Double }
    private struct Flyer { let y, speed: Double; let rightward, cyan: Bool }

    /// 固定种子的伪随机。楼不该每帧换地方，而且这样几何只算一次。
    private static func makeRandom(_ seed: UInt64) -> () -> Double {
        var s = seed
        return {
            s ^= s << 13; s ^= s >> 7; s ^= s << 17
            return Double(s % 100_000) / 100_000.0
        }
    }

    private static let layers: [Layer] = {
        var out: [Layer] = []
        // 远 → 近：楼越来越高、越来越密，雾越来越淡
        for (i, spec) in [(haze: 0.72, count: 16, lo: 0.16, hi: 0.34),
                          (haze: 0.40, count: 13, lo: 0.26, hi: 0.52),
                          (haze: 0.0, count: 9, lo: 0.36, hi: 0.74)].enumerated() {
            let rnd = makeRandom(0x51ED_270B &+ UInt64(i) &* 7919)
            var towers: [Tower] = []
            var windows: [Win] = []
            var x = -0.06
            while x < 1.06 {
                let w = 0.05 + rnd() * 0.09
                let h = spec.lo + rnd() * (spec.hi - spec.lo)
                let mast = rnd() < 0.22 ? 0.03 + rnd() * 0.06 : 0
                towers.append(Tower(x: x, width: w, height: h, mast: mast))

                // 这栋楼有没有人住。成片亮/成片黑比均匀撒点真实得多。
                let occupancy = rnd()
                if occupancy > 0.25 {
                    let cols = max(1, Int(w / 0.018))
                    let rows = max(1, Int(h / 0.030))
                    for c in 0..<cols {
                        for r in 0..<rows {
                            guard rnd() < occupancy * 0.55 else { continue }
                            windows.append(Win(
                                x: x + w * (Double(c) + 0.28) / Double(cols),
                                y: h * (Double(r) + 0.30) / Double(rows),
                                w: w * 0.30 / Double(cols),
                                h: h * 0.34 / Double(rows)))
                        }
                    }
                }
                x += w * 0.92
            }
            out.append(Layer(haze: spec.haze, towers: towers, windows: windows))
        }
        return out
    }()

    private static let signs: [Sign] = {
        let rnd = makeRandom(0xBEEF_1234)
        return (0..<14).map { i in
            let vertical = rnd() < 0.55
            return Sign(x: 0.04 + rnd() * 0.92,
                        y: 0.10 + rnd() * 0.44,
                        w: vertical ? 0.006 : 0.030 + rnd() * 0.03,
                        h: vertical ? 0.10 + rnd() * 0.12 : 0.008,
                        cyan: i % 2 == 0)
        }
    }()

    private static let billboards: [Board] = [
        Board(x: 0.06, y: 0.46, w: 0.16, h: 0.11, cyan: true),
        Board(x: 0.63, y: 0.52, w: 0.20, h: 0.13, cyan: false),
        Board(x: 0.40, y: 0.33, w: 0.11, h: 0.08, cyan: true),
    ]

    private static let beacons: [Beacon] = [
        Beacon(x: 0.14, y: 0.62), Beacon(x: 0.47, y: 0.78),
        Beacon(x: 0.72, y: 0.66), Beacon(x: 0.90, y: 0.58),
    ]

    private static let flyers: [Flyer] = [
        Flyer(y: 0.82, speed: 0.030, rightward: true, cyan: true),
        Flyer(y: 0.70, speed: 0.021, rightward: false, cyan: false),
        Flyer(y: 0.90, speed: 0.014, rightward: true, cyan: false),
    ]
}

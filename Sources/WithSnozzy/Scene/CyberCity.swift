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
    /// Production keeps this at `.normal`. Offline citystrip probes use the
    /// other values to prove that the pixel gates catch known regressions.
    var diagnostic: CityDiagnosticVariant = .normal

    var body: some View {
        let atmosphere = CityAtmosphere(palette: palette, weather: weather,
                                        variant: diagnostic)
        Canvas(rendersAsynchronously: false) { ctx, size in
            draw(ctx: &ctx, size: size, atmosphere: atmosphere)
        }
        .background {
            ZStack {
                LinearGradient(colors: [palette.skyTop.color, palette.skyBottom.color],
                               startPoint: .top, endPoint: .bottom)
                // 白天只保留很薄的天光体积，不再用一层黄灰把整片窗景洗成同一种颜色。
                // 雨天更薄、略偏冷，让降水保留空气层次而不是把它变成白雾。
                LinearGradient(
                    colors: [atmosphere.volumeTop.color(atmosphere.volumeOpacity * 0.45),
                             atmosphere.volumeBottom.color(atmosphere.volumeOpacity)],
                    startPoint: .top, endPoint: .bottom)
                // 天空里的冷暖体积；城市本身的同一条体积带在下面 overlay
                // 再过一遍，避免楼体把它完全挡住。
                LinearGradient(
                    colors: [.clear,
                             atmosphere.volumeTint.color(atmosphere.volumeBandOpacity),
                             .clear],
                    startPoint: .top, endPoint: .bottom)
            }
        }
        .overlay {
            // 中段有一小块冷暖体积，给中景楼群一个从天空到地平线的过渡。
            // 它的强度由时段控制，夜里不会继承白天的空气参数。
            LinearGradient(
                colors: [.clear,
                         atmosphere.volumeTint.color(atmosphere.volumeBandOpacity),
                         .clear],
                startPoint: .top, endPoint: .bottom)
        }
        .overlay {
            // 地平线附近的光污染。城市的光把低空染亮，是"这是个大城市"最直接的暗示。
            LinearGradient(colors: [.clear, atmosphere.horizonTint.color(atmosphere.horizonOpacity)],
                startPoint: .center, endPoint: .bottom)
            .blendMode(.plusLighter)
        }
        .overlay {
            Precipitation(weather: weather, t: t, tint: palette.skyBottom,
                          intensity: atmosphere.rainIntensity)
        }
        .allowsHitTesting(false)
    }

    private func draw(ctx: inout GraphicsContext, size: CGSize,
                      atmosphere: CityAtmosphere) {
        let W = size.width, H = size.height

        for (index, layer) in Self.layers.enumerated() {
            // 越远的层越偏天空色、对比越低；近景只压暗轮廓，不参与全局洗色。
            let style = atmosphere.layers[index]
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
            let mixed = RGB.lerp(style.body, style.sky, style.skyMix)
            // Keep contrast as an explicit per-depth bound. In the far layer it
            // compresses local separation around mid-grey; near contours are
            // allowed a small lift so roof lines and window rows survive daylight.
            let color = RGB(
                0.5 + (mixed.r - 0.5) * style.contrast,
                0.5 + (mixed.g - 0.5) * style.contrast,
                0.5 + (mixed.b - 0.5) * style.contrast)
            ctx.fill(towers, with: .color(color.color(style.opacity)))

            // 亮着的窗。成片而不是均匀撒点——整栋楼一起亮/一起黑才像有人住。
            var lit = Path()
            for w in layer.windows {
                lit.addRect(CGRect(x: w.x * W, y: H - w.y * H,
                                   width: max(1, w.w * W), height: max(1, w.h * H)))
            }
            let windows = atmosphere.windowStrength * (1 - layer.haze * 0.35)
            ctx.fill(lit, with: .color(Palette.neonWarm.color(windows)))
        }

        // 招牌和广告牌白天仍有很低的自发光，避免只剩灰剪影；黄昏/夜晚
        // 单独恢复霓虹强度，不会被白天的空气参数洗掉。
        let glow = atmosphere.signStrength

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
                     with: .color(Palette.neonPink.color(0.30 * a * atmosphere.beaconStrength)))
            ctx.fill(Path(ellipseIn: CGRect(x: p.x - 1, y: p.y - 1, width: 2, height: 2)),
                     with: .color(Palette.neonPink.lighter(0.4).color(a * atmosphere.beaconStrength)))
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
                .color(0.28 * atmosphere.flyerStrength)), lineWidth: 1)
            ctx.fill(Path(ellipseIn: CGRect(x: x - 1.4, y: y - 1.4, width: 2.8, height: 2.8)),
                     with: .color((f.cyan ? Palette.neonCyan : Palette.neonWarm)
                        .color(0.95 * atmosphere.flyerStrength)))
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

    /// 时段和天气的分层参数。`airy` 曾经把远、中、近以及霓虹全部压成一个
    /// 全局旋钮，白天会变成黄灰雾、夜晚也会被一起洗掉。这里每层各自保留
    /// 可解释的明度、天空色混合和透明度界限；`star` 只用来判断时段，不再
    /// 直接决定整片城市的颜色。
    private struct CityAtmosphere {
        struct LayerStyle {
            let body: RGB
            let sky: RGB
            let skyMix: Double
            let contrast: Double
            let opacity: Double
        }

        let layers: [LayerStyle]
        let volumeTop: RGB
        let volumeBottom: RGB
        let volumeTint: RGB
        let volumeOpacity: Double
        let volumeBandOpacity: Double
        let horizonTint: RGB
        let horizonOpacity: Double
        let windowStrength: Double
        let signStrength: Double
        let beaconStrength: Double
        let flyerStrength: Double
        let rainIntensity: Double

        init(palette: Palette, weather: Weather,
             variant: CityDiagnosticVariant) {
            let star = clamp(palette.star, 0, 1)
            // Exact day (star == 0) gets the strongest air perspective. Dawn/dusk
            // stay in a restrained twilight band, while night retains dark solids.
            let daylight = smoothstep((0.16 - star) / 0.16)
            let night = smoothstep((star - 0.34) / 0.66)
            let twilight = max(0, 1 - max(daylight, night))
            let precipitation = weather == .clear ? 0.0 : 1.0

            let sky = RGB.lerp(palette.skyTop, palette.skyBottom, 0.58)
            let coolAir = RGB.lerp(sky, palette.skyTop, 0.22 + precipitation * 0.12)
            let warmAir = RGB.lerp(sky, palette.skyBottom, 0.16 * (1 - precipitation))
            let volume = RGB.lerp(coolAir, warmAir, 0.42)

            // Rain reduces the broad veil instead of adding another white layer.
            let dayAir = daylight * (1 - precipitation * 0.48)
            volumeTop = RGB.lerp(coolAir, palette.skyTop.lighter(0.12), 0.28)
            // A restrained warm bounce only enters the middle band. It is enough
            // to separate the cool upper air from the horizon without recreating
            // the old yellow-grey veil.
            volumeBottom = RGB.lerp(warmAir, palette.skyBottom.lighter(0.08), 0.26)
            let warmBounce = 0.06 * daylight + 0.10 * twilight
            volumeTint = RGB.lerp(volume, Palette.neonWarm.lighter(0.72), warmBounce)
            volumeOpacity = 0.025 + dayAir * 0.070 + twilight * 0.022
            volumeBandOpacity = 0.018 + dayAir * 0.040 + twilight * 0.030

            let warmLight = 0.12 * twilight + 0.52 * night
            horizonTint = RGB.lerp(palette.skyBottom, Palette.neonWarm, warmLight)
            horizonOpacity = 0.025 * daylight + 0.075 * twilight + 0.15 * night

            // Windows stay readable in day at a low bound, return in twilight,
            // and recover their warm night value without clipping the sky.
            let lightScale = variant == .noNeon ? 0.0 : 1.0
            windowStrength = (0.075 * daylight + 0.22 * twilight + 0.56 * night) * lightScale
            signStrength = (0.075 * daylight + 0.24 * twilight + 0.68 * night) * lightScale
            beaconStrength = (0.035 * daylight + 0.22 * twilight + 0.82 * night) * lightScale
            flyerStrength = (0.04 * daylight + 0.20 * twilight + 0.84 * night) * lightScale
            rainIntensity = variant == .brightRain ? 6.0 : 1.0

            let farBody = palette.skyBottom.darker(0.25 + 0.06 * night)
            let farSky = RGB.lerp(coolAir, palette.skyBottom.lighter(0.12), 0.35)
            let midBody = palette.skyBottom.darker(0.46 + 0.06 * night)
            let midSky = RGB.lerp(warmAir, palette.skyBottom.lighter(0.04), 0.35)
            let nearBodyBase = palette.skyBottom.darker(0.68 + 0.06 * night)
            let nearSkyBase = RGB.lerp(palette.skyTop, palette.skyBottom, 0.28).darker(0.10)
            // Diagnostic only: make the known near-body patch converge on the
            // sky so the silhouette contrast gate has a deterministic failure.
            let nearBody = variant == .washedNear
                ? RGB.lerp(nearBodyBase, palette.skyBottom.lighter(0.10), 0.96)
                : nearBodyBase
            let nearSky = variant == .washedNear
                ? palette.skyBottom.lighter(0.10)
                : nearSkyBase

            layers = [
                // Far: faded and sky-coloured, with the lowest local contrast.
                LayerStyle(body: farBody, sky: farSky,
                           skyMix: 0.70 + daylight * 0.12,
                           contrast: 0.72 + night * 0.08,
                           opacity: 0.80 - daylight * 0.12 + night * 0.08),
                // Middle: a cooler body and warmer horizon tint create volume.
                LayerStyle(body: midBody, sky: midSky,
                           skyMix: 0.36 + daylight * 0.08,
                           contrast: 0.88 + twilight * 0.05,
                           opacity: 0.86 - daylight * 0.06 + night * 0.07),
                // Near: an intentionally bounded dark contour. It never receives
                // the broad daylight wash, so windows and roof lines stay legible.
                LayerStyle(body: nearBody, sky: nearSky,
                           skyMix: variant == .washedNear ? 0.5 : 0.14 + twilight * 0.04,
                           contrast: variant == .washedNear ? 0.40 : 1.12 + night * 0.04,
                           opacity: 0.96 + night * 0.03),
            ]
        }
    }

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

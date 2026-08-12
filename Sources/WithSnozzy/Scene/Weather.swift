import SwiftUI

enum Weather: String, CaseIterable, Codable, Identifiable {
    case clear, rain, snow
    var id: String { rawValue }

    var label: String {
        switch self {
        case .clear: "晴"
        case .rain: "雨"
        case .snow: "雪"
        }
    }

    var symbol: String {
        switch self {
        case .clear: "moon.stars"
        case .rain: "cloud.rain"
        case .snow: "snowflake"
        }
    }
}

/// Only used by the offline citystrip negative probes. Production views use
/// `.normal`; the probes make the image checks reproducible without cloning the
/// city drawing algorithm in a script.
enum CityDiagnosticVariant: String {
    case normal
    case noNeon
    case brightRain
    case washedNear
}

/// 窗外的降水。
///
/// 粒子表在启动时算好一次，之后每帧只做「相位 = 时间 × 速度，取小数部分」这一步。
/// 不保存跨帧状态的好处是：窗口被遮挡后动画暂停再恢复，雨不会突然跳一大段。
struct Precipitation: View {
    let weather: Weather
    let t: Double
    /// 降水的颜色跟着天色走，阴天的雨才不会像白线。
    let tint: RGB
    /// Kept at one for production. The citystrip probe raises this to verify
    /// that an over-bright/over-dense rain treatment trips its sky-region bound.
    var intensity: Double = 1

    private struct Particle {
        let x: Double        // 归一化横向起点
        let speed: Double    // 每秒下落多少个身位
        let phase: Double    // 初始相位，错开出发时间
        let size: Double     // 长度（雨）或半径（雪）
        let alpha: Double
        let drift: Double    // 横向漂移幅度（雪用）
    }

    private static let particles: [Particle] = {
        var seed: UInt64 = 0x7F4A_7C15
        func rnd() -> Double {
            seed ^= seed << 13; seed ^= seed >> 7; seed ^= seed << 17
            return Double(seed % 100_000) / 100_000.0
        }
        // 70 颗足够铺满一扇窗；再多只是白白烧 CPU，肉眼分辨不出密度差别。
        return (0..<70).map { _ in
            Particle(x: rnd(), speed: 0.35 + rnd() * 0.45, phase: rnd(),
                     size: 0.4 + rnd() * 0.6, alpha: 0.25 + rnd() * 0.55,
                     drift: rnd() * 2 - 1)
        }
    }()

    var body: some View {
        Canvas(opaque: false, rendersAsynchronously: false) { ctx, size in
            switch weather {
            case .clear:
                return
            case .rain:
                drawRain(&ctx, size)
            case .snow:
                drawSnow(&ctx, size)
            }
        }
        .allowsHitTesting(false)
    }

    private func drawRain(_ ctx: inout GraphicsContext, _ size: CGSize) {
        // 雨滴用一整条 Path 攒起来再一次描边。逐滴 stroke 会产生 70 次状态切换，
        // 合并成一次之后这一层的开销基本可以忽略。
        var path = Path()
        for p in Self.particles {
            // 雨下得快：速度乘一个较大的系数。
            let y = ((t * p.speed * 2.6) + p.phase).truncatingRemainder(dividingBy: 1.0)
            let len = p.size * 0.16 * size.height
            let x = p.x * size.width
            // 略微倾斜，雨才有速度感。
            path.move(to: CGPoint(x: x, y: y * size.height))
            path.addLine(to: CGPoint(x: x - len * 0.22, y: y * size.height + len))
        }
            ctx.stroke(path, with: .color(tint.lighter(0.55)
                .color(min(1, 0.42 * intensity))),
                   style: .init(lineWidth: max(0.7, size.width * 0.004
                                               * sqrt(max(1, intensity))),
                                lineCap: .round))
    }

    private func drawSnow(_ ctx: inout GraphicsContext, _ size: CGSize) {
        var path = Path()
        for p in Self.particles {
            // 雪慢得多，而且一边落一边左右飘。
            let y = ((t * p.speed * 0.55) + p.phase).truncatingRemainder(dividingBy: 1.0)
            let sway = sin(t * 0.8 + p.phase * 12) * p.drift * 0.035
            let r = p.size * 0.012 * size.width
            let cx = (p.x + sway) * size.width
            path.addEllipse(in: CGRect(x: cx - r, y: y * size.height - r, width: r * 2, height: r * 2))
        }
        ctx.fill(path, with: .color(.white.opacity(0.72)))
    }
}

import SwiftUI

/// 一个极小的线性 RGB 容器。用它做插值比 `Color` 便宜得多，
/// 因为 `Color` 的混合会走 CoreGraphics 的色彩空间转换。
struct RGB: Equatable {
    var r: Double, g: Double, b: Double

    init(_ r: Double, _ g: Double, _ b: Double) { self.r = r; self.g = g; self.b = b }

    /// 从 0xRRGGBB 构造，写调色板时可读性最好。
    init(hex: UInt32) {
        r = Double((hex >> 16) & 0xFF) / 255
        g = Double((hex >> 8) & 0xFF) / 255
        b = Double(hex & 0xFF) / 255
    }

    static func lerp(_ a: RGB, _ b: RGB, _ t: Double) -> RGB {
        RGB(a.r + (b.r - a.r) * t, a.g + (b.g - a.g) * t, a.b + (b.b - a.b) * t)
    }

    var color: Color { Color(.sRGB, red: r, green: g, blue: b, opacity: 1) }
    func color(_ opacity: Double) -> Color { Color(.sRGB, red: r, green: g, blue: b, opacity: opacity) }

    /// 朝白色提亮，用于高光。
    func lighter(_ t: Double) -> RGB { RGB.lerp(self, RGB(1, 1, 1), t) }
    /// 朝黑色压暗，用于阴影。
    func darker(_ t: Double) -> RGB { RGB.lerp(self, RGB(0, 0, 0), t) }
}

/// 场景的一整套配色。所有绘制都从这里取色，
/// 于是「昼夜循环」只是把两个 `Palette` 插值一下而已。
struct Palette: Equatable {
    var skyTop: RGB      // 窗外天空顶部
    var skyBottom: RGB   // 窗外天空地平线
    var wall: RGB        // 房间墙面
    var wallShade: RGB   // 墙面暗部
    var floor: RGB       // 地板 / 桌面
    var lamp: RGB        // 灯光暖色
    var lampGlow: Double // 灯光强度 0…1
    var accent: RGB      // 强调色（UI 高亮）
    var text: RGB
    var star: Double     // 星星可见度 0…1

    static func lerp(_ a: Palette, _ b: Palette, _ t: Double) -> Palette {
        Palette(
            skyTop: .lerp(a.skyTop, b.skyTop, t),
            skyBottom: .lerp(a.skyBottom, b.skyBottom, t),
            wall: .lerp(a.wall, b.wall, t),
            wallShade: .lerp(a.wallShade, b.wallShade, t),
            floor: .lerp(a.floor, b.floor, t),
            lamp: .lerp(a.lamp, b.lamp, t),
            lampGlow: a.lampGlow + (b.lampGlow - a.lampGlow) * t,
            accent: .lerp(a.accent, b.accent, t),
            text: .lerp(a.text, b.text, t),
            star: a.star + (b.star - a.star) * t
        )
    }
}

// MARK: - 四个时段关键帧

extension Palette {
    /// 清晨 ~06:00 —— 冷蓝转微暖，薄雾感
    /// 窗外城市的霓虹三色。和时段无关——霓虹不会因为天亮就换颜色，
    /// 只会被白天的天光压过去，所以亮度交给调用方按 `star` 缩放。
    static let neonPink = RGB(hex: 0xFF3EC8)
    static let neonCyan = RGB(hex: 0x3EE8FF)
    static let neonWarm = RGB(hex: 0xFFC98A)
    /// 白天的雾霾色。赛博朋克的白天是发黄的霾，不是晴空。
    static let smog = RGB(hex: 0xC9A87A)

    static let dawn = Palette(
        skyTop: RGB(hex: 0x3B4A78), skyBottom: RGB(hex: 0xE8A48C),
        wall: RGB(hex: 0x3A3550), wallShade: RGB(hex: 0x272338),
        floor: RGB(hex: 0x4A3B4C), lamp: RGB(hex: 0xFFC38A), lampGlow: 0.35,
        accent: RGB(hex: 0xF3A7C4), text: RGB(hex: 0xF0E9F5), star: 0.15
    )

    /// 白天 ~13:00 —— 明亮通透，灯关掉
    static let day = Palette(
        skyTop: RGB(hex: 0x6FA8D8), skyBottom: RGB(hex: 0xCFE6F2),
        wall: RGB(hex: 0x5C5675), wallShade: RGB(hex: 0x453F5C),
        floor: RGB(hex: 0x6B5560), lamp: RGB(hex: 0xFFD9A8), lampGlow: 0.08,
        accent: RGB(hex: 0xF08FB4), text: RGB(hex: 0xFFFAFD), star: 0.0
    )

    /// 黄昏 ~19:00 —— 橘紫渐变，最「lofi」的时段
    static let dusk = Palette(
        skyTop: RGB(hex: 0x3E2A5C), skyBottom: RGB(hex: 0xF08A5D),
        wall: RGB(hex: 0x3A2E4A), wallShade: RGB(hex: 0x261E33),
        floor: RGB(hex: 0x4C3542), lamp: RGB(hex: 0xFFB86B), lampGlow: 0.75,
        accent: RGB(hex: 0xF7A8C0), text: RGB(hex: 0xF6ECF2), star: 0.35
    )

    /// 深夜 ~01:00 —— 只剩台灯和屏幕的光
    static let night = Palette(
        skyTop: RGB(hex: 0x0D0F22), skyBottom: RGB(hex: 0x1E2447),
        wall: RGB(hex: 0x231E33), wallShade: RGB(hex: 0x15111F),
        floor: RGB(hex: 0x2C2130), lamp: RGB(hex: 0xFFC07A), lampGlow: 1.0,
        accent: RGB(hex: 0xC9A7F0), text: RGB(hex: 0xE9E2F2), star: 1.0
    )

    /// 按一天中的小时数（0…24，可带小数）取调色板。
    static func at(hour h: Double) -> Palette {
        // 关键帧锚点：3 深夜 / 7 清晨 / 13 白天 / 19 黄昏 / 22 深夜
        let keys: [(Double, Palette)] = [
            (0, .night), (5, .night), (7.5, .dawn), (10, .day),
            (16, .day), (19, .dusk), (21.5, .night), (24, .night),
        ]
        let hour = h.truncatingRemainder(dividingBy: 24)
        for i in 0..<(keys.count - 1) {
            let (h0, p0) = keys[i], (h1, p1) = keys[i + 1]
            if hour >= h0 && hour <= h1 {
                let t = h1 == h0 ? 0 : (hour - h0) / (h1 - h0)
                return .lerp(p0, p1, smoothstep(t))
            }
        }
        return .night
    }
}

/// 缓入缓出。用在颜色/位置插值上，能去掉线性插值那股生硬劲。
@inline(__always) func smoothstep(_ t: Double) -> Double {
    let x = min(max(t, 0), 1)
    return x * x * (3 - 2 * x)
}

/// 全局尺寸与圆角，集中放这里避免魔法数字散落。
enum Metrics {
    static let dockHeight: CGFloat = 64
    static let panelWidth: CGFloat = 300
    static let corner: CGFloat = 14
    static let smallCorner: CGFloat = 9
}

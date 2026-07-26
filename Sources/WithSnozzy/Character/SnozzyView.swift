import SwiftUI

/// Snozzy 本体。
///
/// 占位版本：先用剪影把构图和尺寸定下来，
/// 完整的矢量建模（白发、表情、呼吸、随节拍点头）在下一步替换这里的 body。
struct SnozzyView: View {
    let palette: Palette
    /// 归一化时间，驱动呼吸等循环动画。
    var t: Double = 0

    var body: some View {
        GeometryReader { geo in
            let s = min(geo.size.width, geo.size.height)
            // 呼吸：约 4 秒一个周期，幅度小到几乎察觉不到才自然。
            let breathe = sin(t * 2 * .pi / 4.0) * 0.006 + 1.0

            ZStack {
                // 身体
                Capsule(style: .continuous)
                    .fill(palette.accent.darker(0.55).color)
                    .frame(width: s * 0.42, height: s * 0.34)
                    .offset(y: s * 0.24)

                // 头
                Circle()
                    .fill(palette.accent.lighter(0.72).color)
                    .frame(width: s * 0.34, height: s * 0.34)

                // 耳机
                Arc(start: .degrees(200), end: .degrees(340))
                    .stroke(palette.accent.darker(0.3).color, style: .init(lineWidth: s * 0.035, lineCap: .round))
                    .frame(width: s * 0.40, height: s * 0.40)

                Text("Snozzy")
                    .font(.system(size: s * 0.05, weight: .semibold, design: .rounded))
                    .foregroundStyle(palette.text.color(0.5))
                    .offset(y: s * 0.46)
            }
            .scaleEffect(breathe, anchor: .bottom)
            .frame(width: geo.size.width, height: geo.size.height)
            .shadow(color: palette.lamp.color(0.25 * palette.lampGlow), radius: 30)
        }
    }
}

/// 一段圆弧，用来画耳机头梁之类的东西。
struct Arc: Shape {
    let start: Angle
    let end: Angle

    func path(in rect: CGRect) -> Path {
        var p = Path()
        p.addArc(
            center: CGPoint(x: rect.midX, y: rect.midY),
            radius: min(rect.width, rect.height) / 2,
            startAngle: start, endAngle: end, clockwise: false)
        return p
    }
}

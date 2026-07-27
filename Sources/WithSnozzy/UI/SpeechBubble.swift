import SwiftUI

/// Snozzy 的对话气泡。
///
/// 尾巴朝左下指向她的头。整体做得很轻——它只是"她说了句话"，
/// 不该像通知横幅那样把注意力全抢走。
struct SpeechBubble: View {
    let text: String
    let palette: Palette
    var compact = false

    var body: some View {
        Text(text)
            .font(.system(size: compact ? 10.5 : 12, weight: .medium, design: .rounded))
            .foregroundStyle(.white.opacity(0.92))
            .lineLimit(2)
            .multilineTextAlignment(.leading)
            .fixedSize(horizontal: false, vertical: true)
            .padding(.horizontal, compact ? 10 : 13)
            .padding(.vertical, compact ? 7 : 9)
            .background {
                BubbleShape(tailSize: compact ? 6 : 8)
                    .fill(.ultraThinMaterial)
                BubbleShape(tailSize: compact ? 6 : 8)
                    .fill(palette.wallShade.color(0.55))
                BubbleShape(tailSize: compact ? 6 : 8)
                    .stroke(.white.opacity(0.14), lineWidth: 1)
            }
            .shadow(color: .black.opacity(0.35), radius: 10, y: 4)
            .frame(maxWidth: compact ? 150 : 210, alignment: .leading)
    }
}

/// 圆角矩形 + 左下角的小尾巴。
private struct BubbleShape: Shape {
    let tailSize: CGFloat

    func path(in rect: CGRect) -> Path {
        let r: CGFloat = 12
        let body = CGRect(x: rect.minX, y: rect.minY,
                          width: rect.width, height: rect.height - tailSize)
        var path = Path(roundedRect: body, cornerRadius: r, style: .continuous)

        // 尾巴：从气泡左下伸出的一个小三角。
        let baseX = body.minX + r + tailSize * 0.4
        path.move(to: CGPoint(x: baseX, y: body.maxY - 1))
        path.addLine(to: CGPoint(x: baseX - tailSize * 0.9, y: body.maxY + tailSize))
        path.addLine(to: CGPoint(x: baseX + tailSize * 1.5, y: body.maxY - 1))
        path.closeSubpath()
        return path
    }
}

import SwiftUI

/// 悬浮控件的统一背景：半透明毛玻璃 + 一圈极淡的内描边。
/// 单独抽出来，是为了以后想换整体质感时只改这一处。
struct GlassBackground: View {
    var corner: CGFloat = Metrics.corner
    var tint: RGB

    var body: some View {
        RoundedRectangle(cornerRadius: corner, style: .continuous)
            .fill(.ultraThinMaterial)
            .overlay {
                RoundedRectangle(cornerRadius: corner, style: .continuous)
                    .fill(tint.color(0.22))
            }
            .overlay {
                RoundedRectangle(cornerRadius: corner, style: .continuous)
                    .strokeBorder(.white.opacity(0.10), lineWidth: 1)
            }
            .shadow(color: .black.opacity(0.35), radius: 18, y: 8)
    }
}

/// 图标按钮。带按下缩放和选中态高亮，是 dock 与面板头部的通用元件。
struct IconButton: View {
    let symbol: String
    var size: CGFloat = 16
    var isOn: Bool = false
    var tint: RGB
    var help: String = ""
    let action: () -> Void

    @State private var hovering = false

    var body: some View {
        Button(action: action) {
            Image(systemName: symbol)
                .font(.system(size: size, weight: .medium))
                .foregroundStyle(isOn ? tint.color : .white.opacity(hovering ? 0.95 : 0.65))
                .frame(width: size + 18, height: size + 18)
                .background {
                    RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                        .fill(.white.opacity(isOn ? 0.14 : (hovering ? 0.08 : 0)))
                }
                .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .onHover { hovering = $0 }
        .help(help)
        .animation(.easeOut(duration: 0.14), value: hovering)
        .animation(.easeOut(duration: 0.14), value: isOn)
    }
}

/// 细长滑杆。系统 `Slider` 在深色毛玻璃上过于抢眼，这里做一个安静的版本。
struct SlimSlider: View {
    @Binding var value: Double        // 0…1
    var tint: RGB
    var width: CGFloat

    @State private var hovering = false

    var body: some View {
        let knob: CGFloat = hovering ? 11 : 8
        let filled = max(0, min(1, value)) * width

        ZStack(alignment: .leading) {
            Capsule().fill(.white.opacity(0.14)).frame(width: width, height: 4)
            Capsule().fill(tint.color(0.9)).frame(width: filled, height: 4)
            Circle()
                .fill(.white)
                .frame(width: knob, height: knob)
                .shadow(color: .black.opacity(0.4), radius: 3, y: 1)
                .offset(x: filled - knob / 2)
        }
        .frame(width: width, height: 20)
        .contentShape(Rectangle())
        .onHover { hovering = $0 }
        .animation(.easeOut(duration: 0.15), value: hovering)
        .gesture(
            // minimumDistance 0：点一下就跳到该位置，不用先拖动。
            DragGesture(minimumDistance: 0)
                .onChanged { g in value = min(max(g.location.x / width, 0), 1) }
        )
    }
}

/// 面板通用外壳：标题栏 + 关闭按钮 + 内容区。
struct PanelShell<Content: View>: View {
    let title: String
    let tint: RGB
    let onClose: () -> Void
    @ViewBuilder var content: Content

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            HStack {
                Text(title)
                    .font(.system(size: 13, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.9))
                Spacer()
                IconButton(symbol: "xmark", size: 11, tint: tint, help: "关闭", action: onClose)
            }
            .padding(.leading, 16)
            .padding(.trailing, 8)
            .padding(.top, 10)
            .padding(.bottom, 6)

            Divider().overlay(.white.opacity(0.08))

            ScrollView { content.padding(16) }
                .scrollIndicators(.never)
        }
        .frame(width: Metrics.panelWidth)
        .background { GlassBackground(tint: tint) }
    }
}

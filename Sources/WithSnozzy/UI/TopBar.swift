import SwiftUI

/// 顶部信息条：时钟 + 场景时段。
/// 有意做得很轻——它不该跟 Snozzy 抢注意力。
struct TopBar: View {
    let palette: Palette
    @Environment(AppState.self) private var state

    var body: some View {
        HStack(spacing: 10) {
            // 左侧留出红绿灯按钮的位置。
            Spacer().frame(width: 68)

            Text(Self.clock.string(from: Date()))
                .font(.system(size: 13, weight: .medium, design: .rounded))
                .monospacedDigit()
                .foregroundStyle(palette.text.color(0.55))

            // 中间刻意留空：这里是墙上的串灯，压一行标题上去两边都看不清。
            Spacer()

            Menu {
                ForEach(Weather.allCases) { wx in
                    Button {
                        state.weather = wx
                    } label: {
                        Label(wx.label, systemImage: wx.symbol)
                    }
                }
            } label: {
                HStack(spacing: 5) {
                    Image(systemName: state.weather.symbol)
                    Text(state.weather.label)
                }
                .font(.system(size: 12, weight: .medium, design: .rounded))
                .foregroundStyle(palette.text.color(0.55))
            }
            .menuStyle(.borderlessButton)
            .menuIndicator(.hidden)
            .fixedSize()

            Menu {
                ForEach(TimeMode.allCases, id: \.self) { mode in
                    Button(mode.label) { state.timeMode = mode }
                }
            } label: {
                HStack(spacing: 5) {
                    Image(systemName: symbol)
                    Text(state.timeMode.label)
                }
                .font(.system(size: 12, weight: .medium, design: .rounded))
                .foregroundStyle(palette.text.color(0.55))
            }
            .menuStyle(.borderlessButton)
            .menuIndicator(.hidden)
            .fixedSize()
            .padding(.trailing, 14)
        }
        .padding(.top, 12)
        .frame(height: 44)
    }

    private var symbol: String {
        switch state.timeMode {
        case .auto: "clock"
        case .dawn: "sun.horizon"
        case .day: "sun.max"
        case .dusk: "sunset"
        case .night: "moon.stars"
        }
    }

    private static let clock: DateFormatter = {
        let f = DateFormatter()
        f.dateFormat = "HH:mm"
        return f
    }()
}

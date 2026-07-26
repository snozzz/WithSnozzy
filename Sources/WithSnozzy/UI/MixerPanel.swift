import SwiftUI

/// 环境音的预设组合。
///
/// 直接给六条滑杆让人自己调，多数时候只会得到一锅粥。
/// 预设的价值不是省事，而是先给出几个「已经调好听」的参考点。
struct AmbiencePreset: Identifiable {
    let id: String
    let name: String
    let symbol: String
    let levels: [Ambience: Double]

    static let all: [AmbiencePreset] = [
        .init(id: "rainy", name: "雨夜", symbol: "cloud.moon.rain",
              levels: [.rain: 0.62, .wind: 0.22]),
        .init(id: "cafe", name: "咖啡馆", symbol: "cup.and.saucer",
              levels: [.cafe: 0.52, .keys: 0.24]),
        .init(id: "fireplace", name: "壁炉", symbol: "flame",
              levels: [.fire: 0.58, .wind: 0.16]),
        .init(id: "shore", name: "海边", symbol: "water.waves",
              levels: [.waves: 0.60, .wind: 0.24]),
    ]
}

/// 环境音混音台面板。
struct MixerPanel: View {
    let palette: Palette
    @Environment(AppState.self) private var state

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            // 预设
            Text("预设")
                .font(.system(size: 10, weight: .semibold, design: .rounded))
                .foregroundStyle(.white.opacity(0.35))
                .tracking(0.8)

            LazyVGrid(columns: [GridItem(.flexible(), spacing: 8), GridItem(.flexible(), spacing: 8)],
                      spacing: 8) {
                ForEach(AmbiencePreset.all) { preset in
                    Button {
                        withAnimation(.easeOut(duration: 0.2)) {
                            state.applyAmbiencePreset(preset)
                        }
                    } label: {
                        HStack(spacing: 6) {
                            Image(systemName: preset.symbol).font(.system(size: 11))
                            Text(preset.name).font(.system(size: 11, weight: .medium, design: .rounded))
                            Spacer(minLength: 0)
                        }
                        .foregroundStyle(.white.opacity(0.8))
                        .padding(.horizontal, 9)
                        .padding(.vertical, 7)
                        .background {
                            RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                                .fill(.white.opacity(0.07))
                        }
                    }
                    .buttonStyle(.plain)
                }
            }

            Divider().overlay(.white.opacity(0.08)).padding(.vertical, 2)

            // 六条独立音轨
            ForEach(Ambience.allCases) { sound in
                AmbienceRow(sound: sound, palette: palette)
            }

            if state.hasAnyAmbience {
                Button {
                    withAnimation(.easeOut(duration: 0.2)) {
                        for s in Ambience.allCases { state.setAmbience(s, 0) }
                    }
                } label: {
                    HStack(spacing: 6) {
                        Image(systemName: "speaker.slash").font(.system(size: 10))
                        Text("全部关闭").font(.system(size: 11, design: .rounded))
                    }
                    .foregroundStyle(.white.opacity(0.5))
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 7)
                    .background {
                        RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                            .fill(.white.opacity(0.05))
                    }
                }
                .buttonStyle(.plain)
                .padding(.top, 2)
            }
        }
    }
}

private struct AmbienceRow: View {
    let sound: Ambience
    let palette: Palette
    @Environment(AppState.self) private var state

    var body: some View {
        let level = state.ambienceLevels[sound.rawValue]
        let on = level > 0.001

        HStack(spacing: 10) {
            // 图标兼作开关：点一下在「静音」和「上次的音量」之间切换。
            Button {
                withAnimation(.easeOut(duration: 0.18)) {
                    state.setAmbience(sound, on ? 0 : 0.45)
                }
            } label: {
                Image(systemName: sound.symbol)
                    .font(.system(size: 13))
                    .foregroundStyle(on ? palette.accent.color : .white.opacity(0.35))
                    .frame(width: 22)
            }
            .buttonStyle(.plain)
            .help(on ? "关闭\(sound.label)" : "打开\(sound.label)")

            VStack(alignment: .leading, spacing: 5) {
                HStack {
                    Text(sound.label)
                        .font(.system(size: 11, weight: .medium, design: .rounded))
                        .foregroundStyle(.white.opacity(on ? 0.85 : 0.45))
                    Spacer()
                    Text("\(Int(level * 100))")
                        .font(.system(size: 10, design: .rounded))
                        .monospacedDigit()
                        .foregroundStyle(.white.opacity(0.3))
                }
                SlimSlider(
                    value: Binding(
                        get: { level },
                        set: { state.setAmbience(sound, $0) }),
                    tint: palette.accent,
                    width: 196)
            }
        }
    }
}

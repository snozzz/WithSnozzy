import SwiftUI

/// 番茄钟面板：计时环、控制按钮、今日统计、专注热力图、时长设置。
struct FocusPanel: View {
    let palette: Palette
    @Environment(AppState.self) private var state

    var body: some View {
        let focus = state.focus

        VStack(spacing: 16) {
            // ── 计时环 ──
            ZStack {
                Circle()
                    .stroke(.white.opacity(0.08), lineWidth: 7)
                Circle()
                    .trim(from: 0, to: max(0.001, focus.progress))
                    .stroke(ringColor(focus.phase).color, style: .init(lineWidth: 7, lineCap: .round))
                    .rotationEffect(.degrees(-90))
                    .animation(.linear(duration: 1), value: focus.progress)

                VStack(spacing: 2) {
                    Text(focus.phase == .idle ? "\(focus.settings.work):00" : focus.displayTime)
                        .font(.system(size: 30, weight: .semibold, design: .rounded))
                        .monospacedDigit()
                        .foregroundStyle(.white.opacity(0.92))
                    Text(focus.phase.label)
                        .font(.system(size: 11, design: .rounded))
                        .foregroundStyle(.white.opacity(0.42))
                }
            }
            .frame(width: 152, height: 152)
            .padding(.top, 4)

            // ── 控制 ──
            HStack(spacing: 10) {
                Button {
                    focus.toggle()
                } label: {
                    HStack(spacing: 6) {
                        Image(systemName: focus.isRunning ? "pause.fill" : "play.fill")
                            .font(.system(size: 11))
                        Text(focus.isRunning ? "暂停" : (focus.phase == .idle ? "开始专注" : "继续"))
                            .font(.system(size: 12, weight: .medium, design: .rounded))
                    }
                    .foregroundStyle(Color.black.opacity(0.75))
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 9)
                    .background {
                        RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                            .fill(palette.accent.color(0.92))
                    }
                }
                .buttonStyle(.plain)

                IconButton(symbol: "forward.end.fill", size: 12, tint: palette.accent, help: "跳过本段") {
                    focus.skip()
                }
                IconButton(symbol: "arrow.counterclockwise", size: 12, tint: palette.accent, help: "重置") {
                    focus.reset()
                }
            }

            Divider().overlay(.white.opacity(0.08))

            // ── 今日 ──
            HStack(spacing: 0) {
                stat("今日专注", "\(focus.todayMinutes)", "分钟")
                stat("连续", "\(focus.history.streak())", "天")
                stat("累计段数", "\(focus.history.totalSessions)", "段")
            }

            // ── 热力图 ──
            VStack(alignment: .leading, spacing: 6) {
                Text("最近 12 周")
                    .font(.system(size: 10, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.35))
                    .tracking(0.8)
                FocusHeatmap(history: focus.history, tint: palette.accent)
            }
            .frame(maxWidth: .infinity, alignment: .leading)

            Divider().overlay(.white.opacity(0.08))

            // ── 时长设置 ──
            VStack(spacing: 8) {
                minuteStepper("专注时长", value: Binding(
                    get: { focus.settings.work },
                    set: { focus.settings.work = $0 }), range: 5...90, step: 5)
                minuteStepper("短休息", value: Binding(
                    get: { focus.settings.shortBreak },
                    set: { focus.settings.shortBreak = $0 }), range: 1...30, step: 1)
                minuteStepper("长休息", value: Binding(
                    get: { focus.settings.longBreak },
                    set: { focus.settings.longBreak = $0 }), range: 5...60, step: 5)

                Toggle(isOn: Binding(
                    get: { focus.settings.autoContinue },
                    set: { focus.settings.autoContinue = $0 })) {
                    Text("自动进入下一段")
                        .font(.system(size: 11, design: .rounded))
                        .foregroundStyle(.white.opacity(0.7))
                }
                .toggleStyle(.switch)
                .tint(palette.accent.color)
                .padding(.top, 2)
            }
        }
    }

    private func ringColor(_ phase: FocusPhase) -> RGB {
        phase.isBreak ? RGB(hex: 0x7FC8A9) : palette.accent
    }

    private func stat(_ title: String, _ value: String, _ unit: String) -> some View {
        VStack(spacing: 3) {
            HStack(alignment: .firstTextBaseline, spacing: 2) {
                Text(value)
                    .font(.system(size: 17, weight: .semibold, design: .rounded))
                    .monospacedDigit()
                    .foregroundStyle(.white.opacity(0.9))
                Text(unit)
                    .font(.system(size: 9, design: .rounded))
                    .foregroundStyle(.white.opacity(0.35))
            }
            Text(title)
                .font(.system(size: 9, design: .rounded))
                .foregroundStyle(.white.opacity(0.35))
        }
        .frame(maxWidth: .infinity)
    }

    private func minuteStepper(_ title: String, value: Binding<Int>,
                               range: ClosedRange<Int>, step: Int) -> some View {
        HStack {
            Text(title)
                .font(.system(size: 11, design: .rounded))
                .foregroundStyle(.white.opacity(0.7))
            Spacer()
            HStack(spacing: 8) {
                stepButton("minus", enabled: value.wrappedValue - step >= range.lowerBound) {
                    value.wrappedValue = max(range.lowerBound, value.wrappedValue - step)
                }
                Text("\(value.wrappedValue)")
                    .font(.system(size: 12, weight: .medium, design: .rounded))
                    .monospacedDigit()
                    .foregroundStyle(.white.opacity(0.85))
                    .frame(width: 24)
                stepButton("plus", enabled: value.wrappedValue + step <= range.upperBound) {
                    value.wrappedValue = min(range.upperBound, value.wrappedValue + step)
                }
            }
        }
    }

    private func stepButton(_ symbol: String, enabled: Bool, _ action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Image(systemName: symbol)
                .font(.system(size: 9, weight: .bold))
                .foregroundStyle(.white.opacity(enabled ? 0.7 : 0.2))
                .frame(width: 18, height: 18)
                .background {
                    RoundedRectangle(cornerRadius: 5, style: .continuous)
                        .fill(.white.opacity(0.07))
                }
        }
        .buttonStyle(.plain)
        .disabled(!enabled)
    }
}

/// 专注热力图：12 周 × 7 天，颜色深浅表示当天专注时长。
private struct FocusHeatmap: View {
    let history: FocusHistory
    let tint: RGB

    private static let weeks = 12

    var body: some View {
        let cal = Calendar.current
        let today = cal.startOfDay(for: Date())
        // 让最后一列是本周，格子按「周一在上」排列。
        let weekdayOffset = (cal.component(.weekday, from: today) + 5) % 7

        Canvas { ctx, size in
            let cols = Self.weeks
            let gap: CGFloat = 3
            let cell = min((size.width - gap * CGFloat(cols - 1)) / CGFloat(cols),
                           (size.height - gap * 6) / 7)

            for col in 0..<cols {
                for row in 0..<7 {
                    // 从今天倒推：最后一列的第 weekdayOffset 行是今天。
                    let daysAgo = (cols - 1 - col) * 7 + (weekdayOffset - row)
                    guard daysAgo >= 0,
                          let date = cal.date(byAdding: .day, value: -daysAgo, to: today)
                    else { continue }

                    let minutes = history.minutes(on: date)
                    // 分四档：0 / 1-24 / 25-59 / 60+
                    let level: Double = switch minutes {
                    case 0: 0
                    case ..<25: 0.34
                    case ..<60: 0.65
                    default: 1.0
                    }

                    let rect = CGRect(
                        x: CGFloat(col) * (cell + gap),
                        y: CGFloat(row) * (cell + gap),
                        width: cell, height: cell)
                    let path = Path(roundedRect: rect, cornerRadius: 2.5)
                    ctx.fill(path, with: .color(
                        level == 0 ? Color.white.opacity(0.06) : tint.color(0.20 + level * 0.72)))
                }
            }
        }
        .frame(height: 7 * 13 + 6 * 3)
    }
}

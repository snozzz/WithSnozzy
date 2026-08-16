import SwiftUI

/// 动作面板：把她**所有能主动演的东西**列出来，点一下就演。
///
/// 存在的理由是测试。这些动作平时都有自己的门槛——托腮要"离开半分钟再回来
/// 且距上次超过四分钟"，伸懒腰是每 5–10 分钟自发一次，活动档位按 58 秒
/// 一个槽位自己抽签。改完素材想验一眼，等这些门槛根本等不起
/// （近景当初加那个按钮就是这个理由，HANDOFF 第五节写着"这个入口是必须的"）。
///
/// **不要在这里另造一条播放路径。** 每一行调的都是生产代码里那个入口
/// （`CloseUp.begin`、`StretchRig.begin`、`AppState.forcedActivity`），
/// 所以面板里看到的就是真实运行时的样子。判据和被判的东西各走一套，
/// 判据永远是绿的——这个坑这个项目里踩过（第 69 条）。
struct ActionPanel: View {
    let palette: Palette
    @Environment(AppState.self) private var state
    /// 每秒重算一次，好让"下次伸懒腰还有多久"那个倒计时真的在走。
    @State private var now = Date()
    private let tick = Timer.publish(every: 1, on: .main, in: .common).autoconnect()

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            section("长动作", note: "换一整套上半身素材，八张真骨骼中间帧")
            row(symbol: "person.crop.circle.badge.questionmark",
                title: "托腮凑近",
                detail: state.sceneAssets.hasCompleteChinMotion
                    ? "推镜头 + 抬手托下颌，念一句待办" : "素材不全，只推镜头",
                running: state.closeUp.isActive,
                enabled: state.windowMode == .normal) {
                state.closeUp.begin()
            }
            row(symbol: "figure.arms.open",
                title: "伸懒腰",
                detail: stretchDetail,
                running: state.stretch.isActive,
                enabled: state.windowMode == .normal
                    && state.sceneAssets.hasCompleteStretchMotion) {
                state.stretch.begin(force: true)
            }

            Divider().overlay(.white.opacity(0.12))

            section("活动档位", note: "联动视线、打字、侧屏、杯子热气，2.4 秒过渡")
            ForEach(SnozzyActivity.allCases, id: \.self) { activity in
                row(symbol: activity.symbol,
                    title: activity.label,
                    detail: state.forcedActivity == activity ? "按住这一档" : "",
                    running: state.forcedActivity == activity,
                    enabled: true) {
                    // 再点一次同一档就放开，回到番茄钟自己抽签。
                    state.forcedActivity =
                        state.forcedActivity == activity ? nil : activity
                }
            }
            row(symbol: "dice", title: "跟着番茄钟走",
                detail: state.forcedActivity == nil ? "现在就是" : "",
                running: state.forcedActivity == nil, enabled: true) {
                state.forcedActivity = nil
            }

            Divider().overlay(.white.opacity(0.12))

            section("短反馈", note: "只改表情和侧屏，不换素材")
            row(symbol: "sparkles", title: "专注完成",
                detail: "1.8 秒笑眼笑嘴 + 侧屏勾形",
                running: false, enabled: true) {
                state.celebrate()
            }
        }
        .padding(14)
        .frame(width: 268)
        .onReceive(tick) { now = $0 }
    }

    private var stretchDetail: String {
        guard state.sceneAssets.hasCompleteStretchMotion else { return "素材不全" }
        // `now` 没被用到值，但读一下它才能让倒计时每秒重算。
        _ = now
        let left = Int(state.stretch.secondsUntilNext.rounded())
        return left <= 0 ? "随时会自己来一个"
            : "自发：还有 \(left / 60) 分 \(left % 60) 秒"
    }

    @ViewBuilder
    private func section(_ title: String, note: String) -> some View {
        VStack(alignment: .leading, spacing: 1) {
            Text(title)
                .font(.system(size: 11, weight: .semibold))
                .foregroundStyle(.white.opacity(0.9))
            Text(note)
                .font(.system(size: 9))
                .foregroundStyle(.white.opacity(0.4))
        }
    }

    @ViewBuilder
    private func row(symbol: String, title: String, detail: String,
                     running: Bool, enabled: Bool,
                     action: @escaping () -> Void) -> some View {
        Button(action: action) {
            HStack(spacing: 9) {
                Image(systemName: symbol)
                    .font(.system(size: 12))
                    .frame(width: 18)
                    .foregroundStyle(running ? palette.accent.color : .white.opacity(0.72))
                VStack(alignment: .leading, spacing: 1) {
                    Text(title)
                        .font(.system(size: 11.5))
                        .foregroundStyle(.white.opacity(enabled ? 0.92 : 0.35))
                    if !detail.isEmpty {
                        Text(detail)
                            .font(.system(size: 9))
                            .foregroundStyle(.white.opacity(0.42))
                    }
                }
                Spacer(minLength: 0)
                if running {
                    Circle().fill(palette.accent.color).frame(width: 5, height: 5)
                }
            }
            .padding(.vertical, 4)
            .padding(.horizontal, 6)
            .background {
                RoundedRectangle(cornerRadius: 7, style: .continuous)
                    .fill(.white.opacity(running ? 0.10 : 0))
            }
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .disabled(!enabled)
    }
}

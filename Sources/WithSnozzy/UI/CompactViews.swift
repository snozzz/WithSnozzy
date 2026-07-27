import SwiftUI

/// 迷你播放器：只留 Snozzy、曲名和三个按钮。
struct MiniView: View {
    @Environment(AppState.self) private var state

    var body: some View {
        let pal = state.palette

        ZStack(alignment: .bottom) {
            LinearGradient(colors: [pal.wallShade.color, pal.wall.darker(0.12).color],
                           startPoint: .top, endPoint: .bottom)

            GeometryReader { geo in
                TimelineView(.animation(minimumInterval: state.frameInterval,
                                        paused: !state.isVisible)) { tl in
                    SnozzyView(palette: pal,
                               t: tl.date.timeIntervalSinceReferenceDate,
                               kick: state.audio.kickPulse,
                               playing: state.isPlaying,
                               mood: state.mood,
                               drowsy: state.drowsy)
                        // 半身像取景：头顶留一点余量，底部切在胸口。
                        // 放太大只剩一张脸，放太小又看不清表情。
                        .frame(width: geo.size.width, height: geo.size.width)
                        .position(x: geo.size.width / 2, y: geo.size.height * 0.52)
                }
            }

            if let line = state.chatter.current {
                SpeechBubble(text: line, palette: pal, compact: true)
                    .fixedSize()
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topTrailing)
                    .padding(.top, 26)
                    .padding(.trailing, 10)
                    .transition(.scale(scale: 0.85, anchor: .bottomLeading).combined(with: .opacity))
                    .allowsHitTesting(false)
            }

            VStack(spacing: 7) {
                Text(state.trackTitle)
                    .font(.system(size: 11, weight: .medium, design: .rounded))
                    .foregroundStyle(.white.opacity(0.85))
                    .lineLimit(1)

                HStack(spacing: 12) {
                    IconButton(symbol: "forward.fill", size: 11, tint: pal.accent, help: "下一首") {
                        state.nextTrack()
                    }
                    Button {
                        state.togglePlay()
                    } label: {
                        ZStack {
                            Circle().fill(pal.accent.color(0.92)).frame(width: 30, height: 30)
                            Image(systemName: state.isPlaying ? "pause.fill" : "play.fill")
                                .font(.system(size: 12, weight: .bold))
                                .foregroundStyle(Color.black.opacity(0.72))
                                .offset(x: state.isPlaying ? 0 : 1)
                        }
                    }
                    .buttonStyle(.plain)
                    IconButton(symbol: "macwindow", size: 11, tint: pal.accent, help: "回到完整窗口") {
                        state.windowMode = .normal
                    }
                }
            }
            .padding(.bottom, 14)
            .padding(.horizontal, 12)
            .frame(maxWidth: .infinity)
            .background {
                LinearGradient(colors: [.clear, .black.opacity(0.55)],
                               startPoint: .top, endPoint: .bottom)
                    .frame(height: 96)
                    .frame(maxHeight: .infinity, alignment: .bottom)
                    .allowsHitTesting(false)
            }
        }
        .animation(.spring(duration: 0.34, bounce: 0.28), value: state.chatter.current)
        .grain(0.03)
        // 标题栏是透明的，内容必须铺满整个窗口，否则顶上会留一条黑边。
        .ignoresSafeArea()
        .preferredColorScheme(.dark)
    }
}

/// 桌宠模式：桌面上只剩 Snozzy。
///
/// 背景必须完全透明——任何一层不透明的 `background` 都会在桌面上留下一个方块。
struct PetView: View {
    @Environment(AppState.self) private var state
    @State private var hovering = false

    var body: some View {
        let pal = state.palette

        ZStack(alignment: .bottom) {
            GeometryReader { geo in
                TimelineView(.animation(minimumInterval: state.frameInterval,
                                        paused: !state.isVisible)) { tl in
                    SnozzyView(palette: pal,
                               t: tl.date.timeIntervalSinceReferenceDate,
                               kick: state.audio.kickPulse,
                               playing: state.isPlaying,
                               mood: state.mood,
                               drowsy: state.drowsy)
                        .frame(width: geo.size.width * 1.15, height: geo.size.width * 1.15)
                        .position(x: geo.size.width / 2, y: geo.size.height * 0.478)
                        // 一圈柔和的暗影，深色和浅色桌面上都能看清轮廓。
                        .shadow(color: .black.opacity(0.35), radius: 14, y: 5)
                        .onTapGesture { state.pet() }
                }
            }

            if let line = state.chatter.current {
                SpeechBubble(text: line, palette: pal, compact: true)
                    .fixedSize()
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topTrailing)
                    .padding(.top, 4)
                    .padding(.trailing, 6)
                    .transition(.scale(scale: 0.85, anchor: .bottomLeading).combined(with: .opacity))
                    .allowsHitTesting(false)
            }

            // 控制条只在鼠标悬停时浮现，平时桌面上真的只有她一个人。
            if hovering {
                HStack(spacing: 10) {
                    IconButton(symbol: state.isPlaying ? "pause.fill" : "play.fill",
                               size: 11, tint: pal.accent, help: "播放/暂停") {
                        state.togglePlay()
                    }
                    IconButton(symbol: "forward.fill", size: 11, tint: pal.accent, help: "下一首") {
                        state.nextTrack()
                    }
                    IconButton(symbol: "macwindow", size: 11, tint: pal.accent, help: "回到完整窗口") {
                        state.windowMode = .normal
                    }
                }
                .padding(.horizontal, 8)
                .padding(.vertical, 4)
                .background {
                    Capsule().fill(.ultraThinMaterial)
                    Capsule().strokeBorder(.white.opacity(0.12), lineWidth: 1)
                }
                .padding(.bottom, 10)
                .transition(.opacity.combined(with: .move(edge: .bottom)))
            }
        }
        .animation(.spring(duration: 0.34, bounce: 0.28), value: state.chatter.current)
        .ignoresSafeArea()
        .onHover { h in
            withAnimation(.easeOut(duration: 0.18)) { hovering = h }
        }
        .preferredColorScheme(.dark)
    }
}

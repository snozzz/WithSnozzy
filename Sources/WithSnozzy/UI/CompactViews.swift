import SwiftUI

/// 渲染版的半身像。迷你播放器和桌宠都用它。
///
/// 这两个形态原来画的是**矢量简笔版**（`CharacterView`）——完整窗口早就换成
/// Blender 渲染的她了，这两处一直没跟上，于是同一个 app 里存在两个长得
/// 完全不一样的 Snozzy。这是第 70 条的另一种形式：**没人画的那份不会有人
/// 发现它旧了**，这次是反过来——有人画，但画的是另一个人。
///
/// 做法不是重新渲一套半身素材，而是**把整幅画布放大、裁出胸像那一块**。
/// 素材是 1536×1024 的整幅图，胸像只占其中 430×430 左右；放大之后角色那
/// 一层是 2× 密度的（`snozzy_body*2x`、`face2x`），裁出来仍然清楚。
struct RenderedBust: View {
    let assets: SceneAssets
    let palette: Palette
    let t: Double
    let kick: Double
    let playing: Bool
    let mood: Double
    let drowsy: Double
    /// 桌宠比迷你播放器再紧一点：桌面上那个小人本来就该只剩头和肩。
    var tight = false

    /// 胸像在画布上的位置（0…1）。头骨在 (0.533, 0.392)，双马尾往两边
    /// 各甩出去一截，所以横向要比脸宽不少；下沿切在胸口，再往下就是桌子了。
    private var bust: CGRect {
        tight ? CGRect(x: 0.404, y: 0.196, width: 0.262, height: 0.392)
              : CGRect(x: 0.396, y: 0.185, width: 0.280, height: 0.420)
    }

    var body: some View {
        GeometryReader { geo in
            let canvas = CGSize(width: assets.legs.canvasW, height: assets.legs.canvasH)
            // 按"填满"取缩放：留白比裁掉一点更糟——桌宠模式里空白就是
            // 桌面上一块透明的方，看着像她站在一个看不见的盒子里。
            let scale = max(geo.size.width / (bust.width * canvas.width),
                            geo.size.height / (bust.height * canvas.height))
            let full = CGSize(width: canvas.width * scale,
                              height: canvas.height * scale)
            RenderedSnozzy(assets: assets, palette: palette,
                           pose: SnozzyRig.pose(time: t, kick: kick,
                                                playing: playing, mood: mood,
                                                drowsy: drowsy),
                           face: FaceRig.expression(t: t, playing: playing,
                                                    mood: mood, drowsy: drowsy,
                                                    working: false,
                                                    speaking: false),
                           headphones: playing,
                           t: t)
                .equatable()
                .frame(width: full.width, height: full.height)
                .offset(x: geo.size.width / 2 - bust.midX * full.width,
                        y: geo.size.height / 2 - bust.midY * full.height)
        }
        .clipped()
        .allowsHitTesting(false)
    }
}

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
                    let t = tl.date.timeIntervalSinceReferenceDate
                    // 半身像取景：头顶留一点余量，底部切在胸口。
                    // 放太大只剩一张脸，放太小又看不清表情。
                    if state.characterStyle == .rendered
                        && state.sceneAssets.hasRenderedCharacter {
                        RenderedBust(assets: state.sceneAssets, palette: pal, t: t,
                                     kick: state.audio.kickPulse,
                                     playing: state.isPlaying, mood: state.mood,
                                     drowsy: state.drowsy)
                            .frame(width: geo.size.width, height: geo.size.width)
                            .position(x: geo.size.width / 2, y: geo.size.height * 0.52)
                    } else {
                        CharacterView(palette: pal, t: t,
                                      kick: state.audio.kickPulse,
                                      playing: state.isPlaying,
                                      mood: state.mood,
                                      drowsy: state.drowsy,
                                      framing: .closeUp)
                            .frame(width: geo.size.width, height: geo.size.width)
                            .position(x: geo.size.width / 2, y: geo.size.height * 0.52)
                    }
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
                    let t = tl.date.timeIntervalSinceReferenceDate
                    Group {
                        if state.characterStyle == .rendered
                            && state.sceneAssets.hasRenderedCharacter {
                            RenderedBust(assets: state.sceneAssets, palette: pal,
                                         t: t, kick: state.audio.kickPulse,
                                         playing: state.isPlaying, mood: state.mood,
                                         drowsy: state.drowsy, tight: true)
                        } else {
                            CharacterView(palette: pal, t: t,
                                          kick: state.audio.kickPulse,
                                          playing: state.isPlaying,
                                          mood: state.mood,
                                          drowsy: state.drowsy,
                                          framing: .closeUp)
                        }
                    }
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

import SwiftUI

/// 音乐库面板：切换播放来源、选择文件夹、曲目列表。
struct LibraryPanel: View {
    let palette: Palette
    @Environment(AppState.self) private var state

    var body: some View {
        let lib = state.library

        VStack(alignment: .leading, spacing: 12) {
            // ── 来源切换 ──
            HStack(spacing: 6) {
                ForEach(MusicSource.allCases, id: \.self) { src in
                    Button {
                        withAnimation(.easeOut(duration: 0.18)) { state.source = src }
                    } label: {
                        Text(src.shortLabel)
                            .font(.system(size: 10.5, weight: .medium, design: .rounded))
                            .lineLimit(1)
                            .minimumScaleFactor(0.8)
                            .foregroundStyle(state.source == src
                                             ? Color.black.opacity(0.75)
                                             : .white.opacity(0.55))
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 6)
                            .background {
                                RoundedRectangle(cornerRadius: 7, style: .continuous)
                                    .fill(state.source == src
                                          ? palette.accent.color(0.9)
                                          : Color.white.opacity(0.06))
                            }
                    }
                    .buttonStyle(.plain)
                }
            }

            if state.source == .radio {
                VStack(alignment: .leading, spacing: 12) {
                    VStack(spacing: 7) {
                        Image(systemName: "antenna.radiowaves.left.and.right")
                            .font(.system(size: 20))
                            .foregroundStyle(.white.opacity(0.2))
                        Text("音乐是实时生成的，每一段都不会重复")
                            .font(.system(size: 10.5, design: .rounded))
                            .multilineTextAlignment(.center)
                            .foregroundStyle(.white.opacity(0.32))
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 14)

                    Text("心情")
                        .font(.system(size: 10, weight: .semibold, design: .rounded))
                        .foregroundStyle(.white.opacity(0.35))
                        .tracking(0.8)

                    LazyVGrid(columns: [GridItem(.flexible(), spacing: 8),
                                        GridItem(.flexible(), spacing: 8)], spacing: 8) {
                        ForEach(RadioMood.allCases) { mood in
                            let on = state.radioMood == mood
                            Button {
                                state.radioMood = mood
                            } label: {
                                HStack(spacing: 6) {
                                    Image(systemName: mood.symbol).font(.system(size: 11))
                                    Text(mood.label)
                                        .font(.system(size: 11, weight: .medium, design: .rounded))
                                    Spacer(minLength: 0)
                                }
                                .foregroundStyle(on ? palette.accent.color : .white.opacity(0.62))
                                .padding(.horizontal, 9)
                                .padding(.vertical, 7)
                                .background {
                                    RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                                        .fill(.white.opacity(on ? 0.13 : 0.06))
                                }
                            }
                            .buttonStyle(.plain)
                        }
                    }

                    Text("换心情后，下一首才会变——不会打断正在放的这首。")
                        .font(.system(size: 9, design: .rounded))
                        .foregroundStyle(.white.opacity(0.3))
                        .fixedSize(horizontal: false, vertical: true)

                    Button {
                        state.nextTrack()
                    } label: {
                        Text("立刻换一首")
                            .font(.system(size: 11, weight: .medium, design: .rounded))
                            .foregroundStyle(.white.opacity(0.8))
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 8)
                            .background {
                                RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                                    .fill(.white.opacity(0.07))
                            }
                    }
                    .buttonStyle(.plain)
                }
            } else if state.source == .library {
                libraryContent(lib)
            } else {
                externalContent
            }
        }
    }

    // MARK: - 外部播放器

    /// 接「音乐」App 和让位模式共用这一块。
    ///
    /// 两者的说明文字不同，但都要强调同一件事：音乐归你的播放器，
    /// 环境音归我们——这才是把外部音源接进来的意义。
    @ViewBuilder
    private var externalContent: some View {
        VStack(alignment: .leading, spacing: 12) {
            VStack(spacing: 7) {
                Image(systemName: state.source == .appleMusic ? "music.note" : "hand.raised")
                    .font(.system(size: 20))
                    .foregroundStyle(.white.opacity(0.2))
                Text(state.source == .appleMusic
                     ? "播放和曲库都在「音乐」App 那边，这里只是遥控器"
                     : "我们不出声，你用任何播放器放歌都行")
                    .font(.system(size: 10.5, design: .rounded))
                    .multilineTextAlignment(.center)
                    .foregroundStyle(.white.opacity(0.32))
                    .fixedSize(horizontal: false, vertical: true)
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 16)

            if let failure = state.appleMusic.failure, state.source == .appleMusic {
                Text(failure)
                    .font(.system(size: 9.5, design: .rounded))
                    .foregroundStyle(palette.accent.color(0.85))
                    .fixedSize(horizontal: false, vertical: true)
            }

            Text(state.hasAnyAmbience
                 ? "环境音照旧在响，垫在你的歌下面。"
                 : "去「环境音」面板加点雨声或黑胶底噪，垫在你的歌下面。")
                .font(.system(size: 9, design: .rounded))
                .foregroundStyle(.white.opacity(0.3))
                .fixedSize(horizontal: false, vertical: true)

            Button {
                state.togglePanel(.mixer)
            } label: {
                Text("打开环境音")
                    .font(.system(size: 11, weight: .medium, design: .rounded))
                    .foregroundStyle(.white.opacity(0.8))
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 8)
                    .background {
                        RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                            .fill(.white.opacity(0.07))
                    }
            }
            .buttonStyle(.plain)
        }
    }

    /// 开关式小胶囊按钮。
    private func pill(_ title: String, symbol: String, isOn: Bool,
                      _ action: @escaping () -> Void) -> some View {
        Button(action: action) {
            HStack(spacing: 5) {
                Image(systemName: symbol).font(.system(size: 10))
                Text(title).font(.system(size: 11, design: .rounded))
            }
            .foregroundStyle(isOn ? palette.accent.color : .white.opacity(0.5))
            .padding(.horizontal, 9)
            .padding(.vertical, 5)
            .background {
                Capsule().fill(.white.opacity(isOn ? 0.13 : 0.05))
            }
        }
        .buttonStyle(.plain)
    }

    @ViewBuilder
    private func libraryContent(_ lib: MusicLibrary) -> some View {
        // ── 文件夹 ──
        HStack(spacing: 8) {
            Image(systemName: "folder")
                .font(.system(size: 11))
                .foregroundStyle(.white.opacity(0.4))
            Text(lib.folder?.lastPathComponent ?? "未选择文件夹")
                .font(.system(size: 11, design: .rounded))
                .foregroundStyle(.white.opacity(0.65))
                .lineLimit(1)
                .truncationMode(.middle)
            Spacer(minLength: 4)
            if lib.folder != nil {
                IconButton(symbol: "arrow.clockwise", size: 10, tint: palette.accent, help: "重新扫描") {
                    lib.rescan()
                }
            }
        }

        Button {
            lib.chooseFolder()
        } label: {
            Text(lib.folder == nil ? "选择文件夹…" : "换一个文件夹…")
                .font(.system(size: 11, weight: .medium, design: .rounded))
                .foregroundStyle(.white.opacity(0.8))
                .frame(maxWidth: .infinity)
                .padding(.vertical, 8)
                .background {
                    RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                        .fill(.white.opacity(0.07))
                }
        }
        .buttonStyle(.plain)

        if let msg = lib.message {
            Text(msg)
                .font(.system(size: 10, design: .rounded))
                .foregroundStyle(.orange.opacity(0.75))
        }

        // ── 播放选项 ──
        if !lib.tracks.isEmpty {
            // 不用系统 checkbox：它在 macOS 上强制使用系统强调色（蓝），
            // 和整套暖紫配色打架，而且 .tint 对 checkbox 无效。
            HStack(spacing: 8) {
                pill("随机", symbol: "shuffle", isOn: lib.shuffle) { lib.shuffle.toggle() }
                pill("循环", symbol: "repeat", isOn: lib.loop) { lib.loop.toggle() }
                Spacer(minLength: 0)
            }

            Divider().overlay(.white.opacity(0.08))

            Text("\(lib.tracks.count) 首")
                .font(.system(size: 10, weight: .semibold, design: .rounded))
                .foregroundStyle(.white.opacity(0.32))
                .tracking(0.6)

            // ── 曲目 ──
            //
            // 用 LazyVStack：几百首的文件夹如果一次性建出所有行，
            // 打开面板会明显卡一下。
            LazyVStack(alignment: .leading, spacing: 1) {
                ForEach(Array(lib.tracks.enumerated()), id: \.element.id) { index, track in
                    TrackRow(track: track, index: index,
                             isCurrent: lib.currentIndex == index,
                             palette: palette)
                }
            }
        }
    }
}

private struct TrackRow: View {
    let track: Track
    let index: Int
    let isCurrent: Bool
    let palette: Palette
    @Environment(AppState.self) private var state
    @State private var hovering = false

    var body: some View {
        Button {
            state.playFromLibrary(index: index)
        } label: {
            HStack(spacing: 8) {
                if isCurrent && state.library.isPlaying {
                    Image(systemName: "waveform")
                        .font(.system(size: 9))
                        .foregroundStyle(palette.accent.color)
                        .frame(width: 12)
                } else {
                    Text("\(index + 1)")
                        .font(.system(size: 9, design: .rounded))
                        .monospacedDigit()
                        .foregroundStyle(.white.opacity(0.25))
                        .frame(width: 12, alignment: .trailing)
                }

                Text(track.title)
                    .font(.system(size: 11, design: .rounded))
                    .foregroundStyle(isCurrent ? palette.accent.color : .white.opacity(0.78))
                    .lineLimit(1)
                    .truncationMode(.middle)

                Spacer(minLength: 0)
            }
            .padding(.horizontal, 7)
            .padding(.vertical, 5)
            .background {
                RoundedRectangle(cornerRadius: 6, style: .continuous)
                    .fill(.white.opacity(hovering ? 0.07 : 0))
            }
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .onHover { hovering = $0 }
    }
}

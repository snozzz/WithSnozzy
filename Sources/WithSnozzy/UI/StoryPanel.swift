import SwiftUI

/// 「她的专辑」面板：主线的全部可见部分。
///
/// 从上到下：专辑封面和进度 → 正在写的那首 → 今天陪了多久 → 曲目和日记。
/// 写完的每一首都能点播放（电台切到她的专辑放那一首），点曲名展开那一页日记。
/// 封面用的是真实的渲染胸像（`RenderedBust`），不另画一个她。
struct StoryPanel: View {
    let palette: Palette
    @Environment(AppState.self) private var state
    /// 展开着哪一页日记。-1 是序。
    @State private var open: Int?
    @State private var noteDraft = ""

    var body: some View {
        let story = state.story
        let st = story.state

        VStack(alignment: .leading, spacing: 14) {
            header(story)
            writing(story)
            todayRow(story.today)
            noteField(st)
            albumToggle(st)

            section("曲目")
            VStack(alignment: .leading, spacing: 2) {
                page(index: -1, number: "序", title: Story.prologue.title,
                     date: st.startedAt, diary: Story.prologue.diary, playable: false)
                ForEach(0..<st.chapters, id: \.self) { i in
                    page(index: i, number: String(format: "%02d", i + 1),
                         title: Story.chapters[i].title,
                         date: st.finishedAt.indices.contains(i) ? st.finishedAt[i] : nil,
                         diary: Story.chapters[i].diary, playable: true)
                }
                if !st.albumComplete {
                    lockedRow(st.chapters, text: "正在写……")
                    if st.chapters + 1 < Story.chapterCount {
                        lockedRow(st.chapters + 1, through: Story.chapterCount - 1,
                                  text: "还没写")
                    }
                }
            }

            if st.albumComplete {
                section("后记与小样")
                VStack(alignment: .leading, spacing: 2) {
                    if st.demos > 0 {
                        page(index: 1000, number: "记", title: Story.afterword.title,
                             date: nil, diary: Story.afterword.diary, playable: false)
                    }
                    ForEach((0..<st.demos).reversed(), id: \.self) { n in
                        page(index: Story.chapterCount + n, number: "小样",
                             title: Story.demoTitle(n), date: nil, diary: nil, playable: true)
                    }
                    if st.demos == 0 {
                        hint("专辑写完了。她说以后想到什么，就写一段小样。")
                    }
                }
            }

            let marks = Story.anniversaries.keys.sorted().filter { $0 <= st.metDays }
            if !marks.isEmpty {
                section("纪念日")
                ForEach(marks, id: \.self) { day in
                    HStack(alignment: .firstTextBaseline, spacing: 8) {
                        Text("第 \(day) 天")
                            .font(.system(size: 10, weight: .semibold, design: .rounded))
                            .foregroundStyle(palette.accent.color(0.85))
                            .frame(width: 52, alignment: .leading)
                        Text(Story.anniversaries[day]?.note ?? "")
                            .font(.system(size: 11, design: .rounded))
                            .foregroundStyle(.white.opacity(0.62))
                            .fixedSize(horizontal: false, vertical: true)
                    }
                }
            }
        }
        .onAppear { story.markRead() }
        // 面板开着的时候又写完一首：人就在看，不该等关了面板再亮红点
        .onChange(of: st.unread) { _, unread in if unread > 0 { story.markRead() } }
    }

    // MARK: - 封面

    private func header(_ story: StoryDirector) -> some View {
        let st = story.state
        return HStack(alignment: .center, spacing: 12) {
            ZStack(alignment: .bottomLeading) {
                LinearGradient(colors: [Palette.dusk.skyTop.color, Palette.dusk.skyBottom.color,
                                        palette.accent.color],
                               startPoint: .top, endPoint: .bottom)
                if state.sceneAssets.hasRenderedCharacter {
                    RenderedBust(assets: state.sceneAssets, palette: .dusk, t: 3,
                                 kick: 0, playing: true, mood: 0.7, drowsy: 0, tight: true)
                }
                // 封面底边十二小段：写完一首亮一段。压在她胸口以下，不挡脸。
                trackStrip(done: st.chapters)
                    .padding(.horizontal, 7)
                    .padding(.bottom, 6)
            }
            .frame(width: 88, height: 88)
            .clipShape(RoundedRectangle(cornerRadius: 10, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .strokeBorder(.white.opacity(0.14), lineWidth: 1)
            }
            .shadow(color: .black.opacity(0.35), radius: 8, y: 4)

            VStack(alignment: .leading, spacing: 4) {
                Text("《\(story.albumTitle)》")
                    .font(.system(size: 15, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.92))
                Text("Snozzy · 第一张专辑")
                    .font(.system(size: 10, design: .rounded))
                    .foregroundStyle(.white.opacity(0.42))
                Text(st.albumComplete ? "十二首，写完了" : "写完 \(st.chapters) / \(Story.chapterCount) 首")
                    .font(.system(size: 11, weight: .medium, design: .rounded))
                    .foregroundStyle(palette.accent.color(0.9))
                    .padding(.top, 2)
                Text("一起的第 \(max(st.metDays, 1)) 天")
                    .font(.system(size: 10, design: .rounded))
                    .foregroundStyle(.white.opacity(0.42))
            }
            Spacer(minLength: 0)
        }
    }

    private func trackStrip(done: Int) -> some View {
        HStack(spacing: 2) {
            ForEach(0..<Story.chapterCount, id: \.self) { i in
                Capsule()
                    .fill(i < done ? Palette.neonWarm.color(0.95) : Color.white.opacity(0.28))
                    .frame(height: 3)
            }
        }
        .shadow(color: .black.opacity(0.35), radius: 2)
    }

    // MARK: - 正在写

    private func writing(_ story: StoryDirector) -> some View {
        let st = story.state
        let title = st.albumComplete ? "下一段小样"
            : "正在写 · 《\(Story.chapters[st.chapters].title)》"
        let note: String
        if story.hasPending {
            note = "写完了，等你歇下来的时候给你看。"
        } else if story.restingToday {
            note = "今天已经写完一首了，明天接着写。"
        } else {
            let m = story.minutesToNext
            note = m >= 60 ? "大约还要陪她 \(m / 60) 小时 \(m % 60) 分。"
                           : "大约还要陪她 \(max(m, 1)) 分钟。"
        }
        return VStack(alignment: .leading, spacing: 7) {
            Text(title)
                .font(.system(size: 12, weight: .medium, design: .rounded))
                .foregroundStyle(.white.opacity(0.85))
            GeometryReader { geo in
                ZStack(alignment: .leading) {
                    Capsule().fill(.white.opacity(0.10))
                    Capsule().fill(palette.accent.color(0.9))
                        .frame(width: max(4, geo.size.width * story.progressFraction))
                }
            }
            .frame(height: 5)
            Text(note)
                .font(.system(size: 10, design: .rounded))
                .foregroundStyle(.white.opacity(0.42))
            Text("你在电脑前、app 开着，她就在写。专注时写得快一点。")
                .font(.system(size: 9, design: .rounded))
                .foregroundStyle(.white.opacity(0.26))
                .fixedSize(horizontal: false, vertical: true)
        }
        .padding(12)
        .background {
            RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                .fill(.white.opacity(0.06))
        }
    }

    private func todayRow(_ d: StoryDay) -> some View {
        HStack(spacing: 0) {
            stat("\(d.company)", "陪伴·分")
            stat("\(d.focus)", "专注·分")
            stat("\(d.tasks)", "划掉")
            stat("\(d.chats)", "说话")
        }
    }

    private func stat(_ value: String, _ label: String) -> some View {
        VStack(spacing: 2) {
            Text(value)
                .font(.system(size: 13, weight: .semibold, design: .rounded))
                .monospacedDigit()
                .foregroundStyle(.white.opacity(0.85))
            Text(label)
                .font(.system(size: 9, design: .rounded))
                .foregroundStyle(.white.opacity(0.35))
        }
        .frame(maxWidth: .infinity)
    }

    /// 给明天留一句。第二天第一次见面时她念出来。
    private func noteField(_ st: StoryState) -> some View {
        VStack(alignment: .leading, spacing: 6) {
            HStack(spacing: 8) {
                Image(systemName: "envelope")
                    .font(.system(size: 12))
                    .foregroundStyle(.white.opacity(0.35))
                TextField(st.note == nil ? "给明天留一句……" : "「\(st.note!)」",
                          text: $noteDraft)
                    .textFieldStyle(.plain)
                    .font(.system(size: 12, design: .rounded))
                    .foregroundStyle(.white.opacity(0.9))
                    .onSubmit {
                        state.story.leaveNote(noteDraft)
                        noteDraft = ""
                    }
                    .onChange(of: noteDraft) { _, new in
                        if new.count > StoryEngine.noteLimit {
                            noteDraft = String(new.prefix(StoryEngine.noteLimit))
                        }
                    }
                Text("\(noteDraft.count)/\(StoryEngine.noteLimit)")
                    .font(.system(size: 9, design: .rounded))
                    .monospacedDigit()
                    .foregroundStyle(.white.opacity(noteDraft.isEmpty ? 0 : 0.3))
            }
            .padding(.horizontal, 10)
            .padding(.vertical, 9)
            .background {
                RoundedRectangle(cornerRadius: Metrics.smallCorner, style: .continuous)
                    .fill(.white.opacity(0.07))
            }
            Text(st.note == nil ? "明天第一次见面的时候，她会念给你听。"
                 : "留好了。想改就重新写一句。")
                .font(.system(size: 9, design: .rounded))
                .foregroundStyle(.white.opacity(0.3))
        }
    }

    private func albumToggle(_ st: StoryState) -> some View {
        @Bindable var s = state
        return Toggle(isOn: $s.albumMode) {
            VStack(alignment: .leading, spacing: 2) {
                Text("电台放她的专辑")
                    .font(.system(size: 11.5, weight: .medium, design: .rounded))
                    .foregroundStyle(.white.opacity(0.8))
                Text(st.playableTracks == 0 ? "还没有写完的歌"
                     : "按顺序放写完的 \(st.playableTracks) 首，每次都是同一首歌")
                    .font(.system(size: 9.5, design: .rounded))
                    .foregroundStyle(.white.opacity(0.35))
            }
        }
        .toggleStyle(.switch)
        .tint(palette.accent.color)
        .disabled(st.playableTracks == 0)
    }

    // MARK: - 曲目

    private func page(index: Int, number: String, title: String, date: Date?,
                      diary: String?, playable: Bool) -> some View {
        let expanded = open == index
        let playing = state.isPlaying && state.source == .radio
            && state.albumTrackPlaying == index && playable
        return VStack(alignment: .leading, spacing: 6) {
            HStack(spacing: 8) {
                Text(number)
                    .font(.system(size: 10, weight: .semibold, design: .rounded))
                    .monospacedDigit()
                    .foregroundStyle(palette.accent.color(0.8))
                    .frame(width: 26, alignment: .leading)
                Text(title)
                    .font(.system(size: 12, design: .rounded))
                    .foregroundStyle(.white.opacity(0.86))
                    .lineLimit(1)
                if let date {
                    Text(Self.day.string(from: date))
                        .font(.system(size: 9.5, design: .rounded))
                        .foregroundStyle(.white.opacity(0.3))
                }
                Spacer(minLength: 4)
                if playable {
                    Button {
                        state.playAlbumTrack(index)
                    } label: {
                        Image(systemName: playing ? "speaker.wave.2.fill" : "play.circle")
                            .font(.system(size: 13))
                            .foregroundStyle(playing ? palette.accent.color : .white.opacity(0.5))
                    }
                    .buttonStyle(.plain)
                    .help("在电台放这一首")
                }
            }
            .contentShape(Rectangle())
            .onTapGesture {
                guard diary != nil else { return }
                withAnimation(.easeOut(duration: 0.2)) { open = expanded ? nil : index }
            }
            if expanded, let diary {
                Text(diary)
                    .font(.system(size: 11, design: .rounded))
                    .lineSpacing(3)
                    .foregroundStyle(.white.opacity(0.66))
                    .fixedSize(horizontal: false, vertical: true)
                    .padding(.leading, 34)
                    .padding(.bottom, 4)
                    .transition(.opacity)
            }
        }
        .padding(.vertical, 5)
    }

    private func lockedRow(_ i: Int, through last: Int? = nil, text: String) -> some View {
        HStack(spacing: 8) {
            Text(last.map { String(format: "%02d–%02d", i + 1, $0 + 1) }
                 ?? String(format: "%02d", i + 1))
                .font(.system(size: 10, weight: .semibold, design: .rounded))
                .monospacedDigit()
                .foregroundStyle(.white.opacity(0.22))
                .fixedSize()
                .frame(minWidth: 26, alignment: .leading)
            Text(text)
                .font(.system(size: 12, design: .rounded))
                .foregroundStyle(.white.opacity(0.26))
            Spacer()
        }
        .padding(.vertical, 5)
    }

    private func section(_ title: String) -> some View {
        Text(title)
            .font(.system(size: 10, weight: .semibold, design: .rounded))
            .foregroundStyle(.white.opacity(0.35))
            .tracking(0.8)
    }

    private func hint(_ text: String) -> some View {
        Text(text)
            .font(.system(size: 10.5, design: .rounded))
            .foregroundStyle(.white.opacity(0.35))
            .fixedSize(horizontal: false, vertical: true)
    }

    private static let day: DateFormatter = {
        let f = DateFormatter()
        f.dateFormat = "M月d日"
        return f
    }()
}

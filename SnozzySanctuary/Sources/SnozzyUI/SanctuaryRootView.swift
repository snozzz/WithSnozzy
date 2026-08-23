import SwiftUI
import SnozzyDomain
import SnozzyPlatform
import SnozzyScene
import SnozzyWorld

public enum SanctuaryPanel: String, CaseIterable, Identifiable, Sendable {
    case now
    case sound
    case journal

    public var id: String { rawValue }

    var label: String {
        switch self {
        case .now: "现在"
        case .sound: "声音"
        case .journal: "记录"
        }
    }

    var icon: String {
        switch self {
        case .now: "circle.hexagongrid.fill"
        case .sound: "waveform"
        case .journal: "book.closed.fill"
        }
    }
}

public enum SanctuaryUserAction: Equatable, Sendable {
    case bootstrap
    case toggleFocus
    case nextActivity
    case toggleCloseMoment
    case intensityQuiet
    case intensityBalanced
    case intensityLively
    case saveJournal(String)
    case hotspotSelected(String)
    case windowVisibilityChanged(Bool)
}

public enum SanctuaryProductionEventMapper {
    public static func event(
        for action: SanctuaryUserAction,
        state: WorldState,
        at milliseconds: Int64
    ) -> AppEvent {
        let at = WorldInstant(rawValue: milliseconds)
        return switch action {
        case .bootstrap: .launched(at: at)
        case .toggleFocus: .focusButtonPressed(at: at)
        case .nextActivity: .activitySelected(nextActivity(in: state), at: at)
        case .toggleCloseMoment:
            isCloseMomentRequested(in: state)
                ? .closeMomentDismissed(at: at) : .closeMomentRequested(at: at)
        case .intensityQuiet: .companionIntensityChanged(.quiet, at: at)
        case .intensityBalanced: .companionIntensityChanged(.balanced, at: at)
        case .intensityLively: .companionIntensityChanged(.lively, at: at)
        case let .saveJournal(message):
            .tomorrowCapsuleWritten(
                message: message,
                opensAt: at.advanced(byMilliseconds: 86_400_000),
                at: at
            )
        case let .hotspotSelected(id): hotspotEvent(id: id, state: state, at: at)
        case let .windowVisibilityChanged(visible): .windowVisibilityChanged(visible, at: at)
        }
    }

    public static func isCloseMomentRequested(in state: WorldState) -> Bool {
        state.performance.active?.action == .closeMoment
            || state.performance.queued.contains { $0.action == .closeMoment }
    }

    private static func nextActivity(in state: WorldState) -> Activity {
        let activities = Activity.allCases
        let current = activities.firstIndex(of: state.companion.activity) ?? 0
        return activities[(current + 1) % activities.count]
    }

    private static func hotspotEvent(id: String, state: WorldState, at: WorldInstant) -> AppEvent {
        switch id {
        case "snozzy":
            return isCloseMomentRequested(in: state)
                ? .closeMomentDismissed(at: at) : .closeMomentRequested(at: at)
        case "sideScreens": return .activitySelected(.researching, at: at)
        case "cassette": return .companionIntensityChanged(.lively, at: at)
        case "lamp": return .companionIntensityChanged(.quiet, at: at)
        default: return .moodAdjusted(0.01, at: at)
        }
    }
}

public enum SanctuaryPersistencePresentation: Equatable, Sendable {
    case ready
    case starting
    case unavailable(message: String, quarantinePath: String?)

    public var actionsEnabled: Bool { self == .ready }
}

public struct SanctuaryRootView: View {
    private let store: WorldStore
    private let assets: SceneAssets
    private let nowMilliseconds: () -> Int64
    private let actionSink: (SanctuaryUserAction, Int64) -> Void
    private let bootstrapOnAppear: Bool
    private let persistence: SanctuaryPersistencePresentation
    private let retryPersistence: () -> Void

    @Environment(\.scenePhase) private var scenePhase

    @State private var didBootstrap = false
    @State private var activePanel: SanctuaryPanel?
    @State private var note = ""

    public init(
        store: WorldStore,
        assets: SceneAssets,
        clock: SystemClock = SystemClock(),
        initialPanel: SanctuaryPanel? = nil,
        bootstrapOnAppear: Bool = true,
        persistence: SanctuaryPersistencePresentation = .ready,
        retryPersistence: @escaping () -> Void = {},
        actionSink: ((SanctuaryUserAction, Int64) -> Void)? = nil
    ) {
        self.store = store
        self.assets = assets
        nowMilliseconds = { clock.nowMilliseconds }
        self.bootstrapOnAppear = bootstrapOnAppear
        self.persistence = persistence
        self.retryPersistence = retryPersistence
        self.actionSink = actionSink ?? Self.directStoreSink(store)
        _activePanel = State(initialValue: initialPanel)
    }

    public init(
        store: WorldStore,
        assets: SceneAssets,
        fixedNowMilliseconds: Int64,
        initialPanel: SanctuaryPanel? = nil,
        bootstrapOnAppear: Bool = true,
        persistence: SanctuaryPersistencePresentation = .ready,
        retryPersistence: @escaping () -> Void = {},
        actionSink: ((SanctuaryUserAction, Int64) -> Void)? = nil
    ) {
        self.store = store
        self.assets = assets
        nowMilliseconds = { fixedNowMilliseconds }
        self.bootstrapOnAppear = bootstrapOnAppear
        self.persistence = persistence
        self.retryPersistence = retryPersistence
        self.actionSink = actionSink ?? Self.directStoreSink(store)
        _activePanel = State(initialValue: initialPanel)
    }

    public var body: some View {
        GeometryReader { proxy in
            TimelineView(.animation(minimumInterval: 1.0 / 12.0, paused: false)) { _ in
                let tick = nowMilliseconds()
                let snapshot = store.sceneSnapshot(atMilliseconds: tick)

                ZStack(alignment: .bottom) {
                    SceneSurface(
                        snapshot: snapshot,
                        assets: assets,
                        geometry: SceneGeometry(viewportSize: proxy.size),
                        onHotspot: openPanel(for:)
                    )

                    if let activePanel {
                        panel(activePanel, snapshot: snapshot, availableWidth: proxy.size.width)
                            .transition(.move(edge: .bottom).combined(with: .opacity))
                            .padding(.bottom, 76)
                    }

                    dailyEntrances
                        .padding(.bottom, 18)
                }
                .animation(.snappy(duration: 0.28), value: activePanel)
                .allowsHitTesting(persistence.actionsEnabled)
            }
        }
        .frame(minWidth: 720, minHeight: 480)
        .background(Color(red: 0.035, green: 0.045, blue: 0.09))
        .task {
            guard !didBootstrap else { return }
            didBootstrap = true
            if bootstrapOnAppear { perform(.bootstrap) }
        }
        .onChange(of: scenePhase, initial: true) { _, phase in
            perform(.windowVisibilityChanged(phase == .active))
        }
        .onDisappear {
            perform(.windowVisibilityChanged(false))
        }
        .overlay(alignment: .top) {
            if persistence != .ready { persistenceBanner.padding(.top, 14) }
        }
    }

    private var dailyEntrances: some View {
        HStack(spacing: 8) {
            ForEach(SanctuaryPanel.allCases) { panel in
                Button {
                    activePanel = activePanel == panel ? nil : panel
                } label: {
                    Label(panel.label, systemImage: panel.icon)
                        .font(.system(size: 13, weight: .semibold, design: .rounded))
                        .frame(minWidth: 68, minHeight: 30)
                        .padding(.horizontal, 7)
                }
                .buttonStyle(.plain)
                .foregroundStyle(activePanel == panel ? Color.white : Color.white.opacity(0.76))
                .background(
                    activePanel == panel ? Color.white.opacity(0.18) : Color.white.opacity(0.07),
                    in: Capsule()
                )
                .accessibilityLabel(panel.label)
            }
        }
        .padding(8)
        .background(.ultraThinMaterial, in: Capsule())
        .overlay(Capsule().stroke(.white.opacity(0.18), lineWidth: 1))
        .shadow(color: .black.opacity(0.20), radius: 18, y: 8)
    }

    @ViewBuilder
    private func panel(
        _ panel: SanctuaryPanel,
        snapshot: SceneSnapshot,
        availableWidth: CGFloat
    ) -> some View {
        VStack(alignment: .leading, spacing: 14) {
            HStack {
                Label(panel.label, systemImage: panel.icon)
                    .font(.system(size: 15, weight: .bold, design: .rounded))
                Spacer()
                Button {
                    activePanel = nil
                } label: {
                    Image(systemName: "xmark")
                        .frame(width: 28, height: 28)
                        .background(.white.opacity(0.08), in: Circle())
                }
                .buttonStyle(.plain)
            }

            switch panel {
            case .now:
                nowPanel(snapshot: snapshot)
            case .sound:
                soundPanel
            case .journal:
                journalPanel
            }
        }
        .foregroundStyle(.white)
        .padding(18)
        .frame(width: min(390, max(300, availableWidth - 32)), alignment: .leading)
        .background(.regularMaterial, in: RoundedRectangle(cornerRadius: 24))
        .overlay(RoundedRectangle(cornerRadius: 24).stroke(.white.opacity(0.16), lineWidth: 1))
        .shadow(color: .black.opacity(0.24), radius: 22, y: 10)
    }

    private func nowPanel(snapshot: SceneSnapshot) -> some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                VStack(alignment: .leading, spacing: 3) {
                    Text(store.activityLabel)
                        .font(.system(size: 20, weight: .bold, design: .rounded))
                    Text(snapshot.focusIsRunning ? "Snozzy 正陪你专注" : "房间在等你开始")
                        .font(.caption)
                        .foregroundStyle(.white.opacity(0.62))
                }
                Spacer()
                ZStack {
                    Circle().stroke(.white.opacity(0.12), lineWidth: 4)
                    Circle()
                        .trim(from: 0, to: max(0.025, snapshot.focusProgress))
                        .stroke(.cyan, style: StrokeStyle(lineWidth: 4, lineCap: .round))
                        .rotationEffect(.degrees(-90))
                    Text("\(Int(snapshot.focusProgress * 100))")
                        .font(.system(size: 9, weight: .bold, design: .rounded))
                }
                .frame(width: 34, height: 34)
            }

            HStack(spacing: 8) {
                panelButton(store.focusButtonLabel, icon: "timer") {
                    perform(.toggleFocus)
                }
                panelButton("换个节奏", icon: "shuffle") {
                    perform(.nextActivity)
                }
                panelButton("靠近", icon: "person.crop.circle.badge.plus") {
                    perform(.toggleCloseMoment)
                }
            }
        }
    }

    private var soundPanel: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("星轨电台")
                .font(.system(size: 18, weight: .bold, design: .rounded))
            HStack(spacing: 8) {
                intensityButton("安静", selected: store.state.companion.intensity.rawValue == "quiet", action: .intensityQuiet)
                intensityButton("平衡", selected: store.state.companion.intensity.rawValue == "balanced", action: .intensityBalanced)
                intensityButton("活泼", selected: store.state.companion.intensity.rawValue == "lively", action: .intensityLively)
            }
            Text("声音密度会写入世界状态，并由表演与音频边界共同消费。")
                .font(.caption)
                .foregroundStyle(.white.opacity(0.58))
        }
    }

    private var journalPanel: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("留一颗今天的星")
                .font(.system(size: 18, weight: .bold, design: .rounded))
            TextField("写下一句就好", text: $note)
                .textFieldStyle(.plain)
                .padding(10)
                .background(.white.opacity(0.08), in: RoundedRectangle(cornerRadius: 12))
            HStack {
                Text("完成专注 \(store.state.completedFocusSessions) 次")
                    .font(.caption)
                    .foregroundStyle(.white.opacity(0.62))
                Spacer()
                Button("收进星图") {
                    let trimmed = note.trimmingCharacters(in: .whitespacesAndNewlines)
                    perform(.saveJournal(trimmed))
                    note = ""
                }
                    .buttonStyle(.borderedProminent)
                    .tint(.cyan.opacity(0.72))
                    .disabled(note.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
            }
        }
    }

    private func panelButton(_ title: String, icon: String, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Label(title, systemImage: icon)
                .font(.system(size: 11, weight: .semibold, design: .rounded))
                .frame(minHeight: 28)
                .padding(.horizontal, 8)
        }
        .buttonStyle(.plain)
        .background(.white.opacity(0.09), in: Capsule())
    }

    private func intensityButton(_ title: String, selected: Bool, action: SanctuaryUserAction) -> some View {
        Button(title) { perform(action) }
            .buttonStyle(.plain)
            .font(.system(size: 12, weight: .semibold, design: .rounded))
            .frame(minWidth: 74, minHeight: 30)
            .background(selected ? .cyan.opacity(0.32) : .white.opacity(0.08), in: Capsule())
    }

    private func openPanel(for hotspot: String) {
        perform(.hotspotSelected(hotspot))
        activePanel = switch hotspot {
        case "sideScreens", "cassette": .sound
        case "journal", "stardust": .journal
        default: .now
        }
    }

    private func perform(_ action: SanctuaryUserAction) {
        actionSink(action, nowMilliseconds())
    }

    @ViewBuilder
    private var persistenceBanner: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: persistence == .starting ? "arrow.triangle.2.circlepath" : "externaldrive.badge.exclamationmark")
                .font(.system(size: 18, weight: .semibold))
            VStack(alignment: .leading, spacing: 4) {
                Text(persistence == .starting ? "正在载入存档" : "存档已暂停")
                    .font(.system(size: 13, weight: .bold, design: .rounded))
                if case let .unavailable(message, path) = persistence {
                    Text(message)
                        .font(.caption)
                        .foregroundStyle(.white.opacity(0.72))
                        .lineLimit(2)
                    Text("持久化操作已禁用；最近一次更改可能尚未保存。")
                        .font(.caption2)
                        .foregroundStyle(.orange.opacity(0.82))
                    if let path {
                        Text("隔离副本：\(path)")
                            .font(.system(size: 10, design: .monospaced))
                            .foregroundStyle(.white.opacity(0.56))
                            .lineLimit(2)
                            .textSelection(.enabled)
                    }
                }
            }
            Spacer(minLength: 8)
            if persistence != .starting {
                Button(action: retryPersistence) {
                    Text("重试")
                        .font(.system(size: 13, weight: .semibold, design: .rounded))
                        .foregroundStyle(.white)
                        .padding(.horizontal, 13)
                        .frame(minHeight: 30)
                        .background(Color.cyan.opacity(0.72), in: Capsule())
                }
                .buttonStyle(.plain)
            }
        }
        .foregroundStyle(.white)
        .padding(14)
        .frame(maxWidth: 620)
        .background(.regularMaterial, in: RoundedRectangle(cornerRadius: 18))
        .overlay(RoundedRectangle(cornerRadius: 18).stroke(.orange.opacity(0.42)))
        .shadow(color: .black.opacity(0.22), radius: 18, y: 8)
        .padding(.horizontal, 18)
    }

    private static func directStoreSink(_ store: WorldStore) -> (SanctuaryUserAction, Int64) -> Void {
        { action, milliseconds in
            store.send(SanctuaryProductionEventMapper.event(
                for: action,
                state: store.state,
                at: milliseconds
            ))
        }
    }
}

public struct FloatingCompanionView: View {
    private let store: WorldStore
    private let assets: SceneAssets
    private let nowMilliseconds: () -> Int64

    public init(store: WorldStore, assets: SceneAssets, clock: SystemClock = SystemClock()) {
        self.store = store
        self.assets = assets
        nowMilliseconds = { clock.nowMilliseconds }
    }

    public var body: some View {
        GeometryReader { proxy in
            TimelineView(.animation(minimumInterval: 1.0 / 12.0, paused: false)) { _ in
                let snapshot = store.sceneSnapshot(atMilliseconds: nowMilliseconds())
                FloatingCompanionSurface(
                    snapshot: snapshot,
                    assets: assets,
                    geometry: SceneGeometry(viewportSize: proxy.size)
                )
            }
        }
        .frame(minWidth: 280, idealWidth: 320, maxWidth: 380,
               minHeight: 300, idealHeight: 360, maxHeight: 430)
        .background(.clear)
    }
}

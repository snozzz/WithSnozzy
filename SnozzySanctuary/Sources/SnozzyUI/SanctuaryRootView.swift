import SwiftUI
import SnozzyPlatform
import SnozzyScene
import SnozzyWorld

public struct SanctuaryRootView: View {
    private let store: WorldStore
    private let assets: SceneAssets
    private let clock: SystemClock

    @State private var didBootstrap = false

    public init(
        store: WorldStore,
        assets: SceneAssets,
        clock: SystemClock = SystemClock()
    ) {
        self.store = store
        self.assets = assets
        self.clock = clock
    }

    public var body: some View {
        GeometryReader { proxy in
            ZStack(alignment: .bottom) {
                TimelineView(.animation(minimumInterval: 1.0 / 12.0, paused: false)) { _ in
                    let tick = clock.nowMilliseconds
                    let snapshot = store.sceneSnapshot(atMilliseconds: tick)
                    SceneSurface(
                        snapshot: snapshot,
                        assets: assets,
                        geometry: SceneGeometry(viewportSize: proxy.size)
                    )
                }

                controlDeck
                    .padding(.bottom, 22)
            }
        }
        .frame(minWidth: 720, minHeight: 480)
        .background(Color(red: 0.035, green: 0.035, blue: 0.085))
        .task {
            guard !didBootstrap else { return }
            didBootstrap = true
            store.bootstrap(atMilliseconds: clock.nowMilliseconds)
        }
    }

    private var controlDeck: some View {
        HStack(spacing: 10) {
            Label(store.activityLabel, systemImage: "sparkles")
                .font(.system(size: 13, weight: .medium, design: .rounded))
                .foregroundStyle(.white.opacity(0.78))
                .padding(.horizontal, 10)

            Divider()
                .frame(height: 22)
                .overlay(.white.opacity(0.14))

            controlButton(store.focusButtonLabel, systemImage: "timer") {
                store.toggleFocus(atMilliseconds: clock.nowMilliseconds)
            }

            controlButton("换个节奏", systemImage: "shuffle") {
                store.selectNextActivity(atMilliseconds: clock.nowMilliseconds)
            }

            controlButton("靠近一点", systemImage: "person.crop.circle.badge.plus") {
                store.toggleCloseMoment(atMilliseconds: clock.nowMilliseconds)
            }

            controlButton("好心情", systemImage: "heart.fill") {
                store.adjustMood(by: 0.08, atMilliseconds: clock.nowMilliseconds)
            }
        }
        .buttonStyle(.plain)
        .padding(10)
        .background(.ultraThinMaterial, in: Capsule())
        .overlay(Capsule().stroke(.white.opacity(0.16), lineWidth: 1))
        .shadow(color: .black.opacity(0.24), radius: 18, y: 8)
    }

    private func controlButton(
        _ title: String,
        systemImage: String,
        action: @escaping () -> Void
    ) -> some View {
        Button(action: action) {
            Label(title, systemImage: systemImage)
                .font(.system(size: 12, weight: .semibold, design: .rounded))
                .foregroundStyle(.white.opacity(0.92))
                .padding(.horizontal, 12)
                .padding(.vertical, 8)
                .background(.white.opacity(0.09), in: Capsule())
        }
    }
}

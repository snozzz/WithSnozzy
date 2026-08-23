import SwiftUI
import SnozzyAssets
import SnozzyAudio
import SnozzyData
import SnozzyDomain
import SnozzyPlatform
import SnozzyScene
import SnozzyUI
import SnozzyWorld

@main
struct SnozzySanctuaryApplication: App {
    @State private var store = WorldStore()
    private let clock = SystemClock()
    private let assets = SceneAssets.bundled()

    init() {
        if let paths = try? AppPaths() {
            try? paths.prepare()
        }
    }

    var body: some Scene {
        WindowGroup("Snozzy Sanctuary") {
            SanctuaryRootView(store: store, assets: assets, clock: clock)
                .preferredColorScheme(.dark)
        }
        .defaultSize(width: 1_080, height: 720)
        .windowResizability(.contentMinSize)
        .commands {
            CommandMenu("Snozzy") {
                Button("靠近一点") {
                    store.toggleCloseMoment(atMilliseconds: clock.nowMilliseconds)
                }
                .keyboardShortcut("k", modifiers: [.command, .shift])
            }
        }
    }
}

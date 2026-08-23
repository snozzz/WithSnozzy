import SwiftUI
import SnozzyAssets
import SnozzyAudio
import SnozzyData
import SnozzyDomain
import SnozzyPlatform
import SnozzyRuntime
import SnozzyScene
import SnozzyUI
import SnozzyWorld

@main
struct SnozzySanctuaryApplication: App {
    @State private var runtime: SnozzyRuntime
    @State private var windowIsVisible = true
    private let clock = SystemClock()
    private let assets = SceneAssets.bundled()

    init() {
        do {
            _runtime = State(initialValue: try SnozzyRuntime.live())
        } catch {
            _runtime = State(initialValue: SnozzyRuntime(dependencies: .unavailable(error)))
        }
    }

    var body: some Scene {
        WindowGroup("Snozzy Sanctuary") {
            SanctuaryRootView(
                store: runtime.store,
                assets: assets,
                clock: clock,
                bootstrapOnAppear: false,
                persistence: persistencePresentation,
                retryPersistence: retryRuntime,
                actionSink: { action, milliseconds in
                    if case let .windowVisibilityChanged(visible) = action {
                        windowIsVisible = visible
                    }
                    runtime.dispatch(SanctuaryProductionEventMapper.event(
                        for: action,
                        state: runtime.store.state,
                        at: milliseconds
                    ))
                }
            )
                .preferredColorScheme(.dark)
                .task {
                    await runtime.startReporting(
                        currentWindowVisibility: { windowIsVisible }
                    )
                }
        }
        .defaultSize(width: 1_080, height: 720)
        .windowResizability(.contentMinSize)
        .commands {
            CommandMenu("Snozzy") {
                Button("靠近一点") {
                    runtime.dispatch(SanctuaryProductionEventMapper.event(
                        for: .toggleCloseMoment,
                        state: runtime.store.state,
                        at: clock.nowMilliseconds
                    ))
                }
                .keyboardShortcut("k", modifiers: [.command, .shift])
                .disabled(!runtime.acceptsPersistentActions)
            }
        }

        MenuBarExtra("Snozzy", systemImage: "sparkles") {
            FloatingCompanionView(store: runtime.store, assets: assets, clock: clock)
                .preferredColorScheme(.dark)
        }
        .menuBarExtraStyle(.window)
    }

    private var persistencePresentation: SanctuaryPersistencePresentation {
        switch runtime.persistenceStatus {
        case .ready: .ready
        case .starting: .starting
        case .stopped: .unavailable(message: "运行时尚未启动。持久化操作已禁用。", quarantinePath: nil)
        case let .readOnly(message, path), let .failed(message, path):
            .unavailable(message: message, quarantinePath: path)
        }
    }

    private func retryRuntime() {
        Task { @MainActor in
            do {
                let replacement = try SnozzyRuntime.live()
                runtime = replacement
                await replacement.startReporting(
                    currentWindowVisibility: { windowIsVisible }
                )
            } catch {
                await runtime.stop()
                await runtime.startReporting(
                    currentWindowVisibility: { windowIsVisible }
                )
            }
        }
    }
}

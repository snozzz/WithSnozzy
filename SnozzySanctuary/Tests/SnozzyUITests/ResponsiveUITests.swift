import SwiftUI
import XCTest
import SnozzyDomain
import SnozzyScene
@testable import SnozzyUI
import SnozzyWorld

@MainActor
final class ResponsiveUITests: XCTestCase {
    func testDailyNavigationHasOnlyThreeEntrances() {
        XCTAssertEqual(SanctuaryPanel.allCases.map(\.label), ["现在", "声音", "记录"])
    }

    func testMinimumWindowRenders() throws {
        let assets = try SceneAssets.verifiedDirectory(resourceRoot)
        let store = WorldStore()
        let size = CGSize(width: 720, height: 480)
        let root = SanctuaryRootView(store: store, assets: assets)
            .frame(width: size.width, height: size.height)
        let renderer = ImageRenderer(content: root)
        renderer.scale = 1
        let image = try XCTUnwrap(renderer.cgImage)
        XCTAssertEqual(image.width, 720)
        XCTAssertEqual(image.height, 480)
    }

    func testAllHotspotTargetsStayAtLeastTwentyEightPointsAtMinimumWidth() throws {
        let assets = try SceneAssets.verifiedDirectory(resourceRoot)
        let hitMap = HotspotHitMap(
            hotspots: assets.hotspots,
            geometry: SceneGeometry(viewportSize: CGSize(width: 720, height: 480))
        )
        XCTAssertEqual(assets.hotspots.count, 8)
        for hotspot in assets.hotspots {
            let target = hitMap.targetBounds(for: hotspot)
            XCTAssertGreaterThanOrEqual(target.width, 28, hotspot.id)
            XCTAssertGreaterThanOrEqual(target.height, 28, hotspot.id)
        }
    }

    func testProductionCloseMomentMapperRequestsThenDismissesFromPerformanceTruth() {
        var state = WorldState()
        XCTAssertEqual(
            SanctuaryProductionEventMapper.event(for: .toggleCloseMoment, state: state, at: 1_000),
            .closeMomentRequested(at: WorldInstant(rawValue: 1_000))
        )

        state.performance.active = PerformanceRequest(
            id: 7,
            priority: .userDialogue,
            source: .userDialogue,
            action: .closeMoment,
            requestedAt: WorldInstant(rawValue: 1_000)
        )
        XCTAssertEqual(
            SanctuaryProductionEventMapper.event(for: .toggleCloseMoment, state: state, at: 1_001),
            .closeMomentDismissed(at: WorldInstant(rawValue: 1_001))
        )
        XCTAssertEqual(
            SanctuaryProductionEventMapper.event(for: .hotspotSelected("snozzy"), state: state, at: 1_002),
            .closeMomentDismissed(at: WorldInstant(rawValue: 1_002))
        )
    }

    func testProductionVisibilityMapperUsesRealEvent() {
        XCTAssertEqual(
            SanctuaryProductionEventMapper.event(
                for: .windowVisibilityChanged(false),
                state: WorldState(),
                at: 42
            ),
            .windowVisibilityChanged(false, at: WorldInstant(rawValue: 42))
        )
    }

    func testUnavailablePersistenceIsVisibleAndDisablesWorldActions() throws {
        let status = SanctuaryPersistencePresentation.unavailable(
            message: "damaged envelope",
            quarantinePath: "/tmp/Corrupt/world-state.copy"
        )
        XCTAssertFalse(status.actionsEnabled)
        let assets = try SceneAssets.verifiedDirectory(resourceRoot)
        let size = CGSize(width: 720, height: 480)
        let root = SanctuaryRootView(
            store: WorldStore(),
            assets: assets,
            fixedNowMilliseconds: 1_000,
            bootstrapOnAppear: false,
            persistence: status
        )
        let renderer = ImageRenderer(content: root.frame(width: size.width, height: size.height))
        renderer.scale = 1
        let image = try XCTUnwrap(renderer.cgImage)
        XCTAssertEqual(image.width, 720)
        XCTAssertEqual(image.height, 480)
    }

    private var resourceRoot: URL {
        URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .appending(path: "Resources", directoryHint: .isDirectory)
    }
}

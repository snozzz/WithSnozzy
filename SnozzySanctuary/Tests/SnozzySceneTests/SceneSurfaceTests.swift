import SwiftUI
import XCTest
import SnozzyAssets
import SnozzyScene
import SnozzyWorld

@MainActor
final class SceneSurfaceTests: XCTestCase {
    func testProductionLayerOrderIsExplicit() {
        XCTAssertEqual(
            SceneSurface.productionLayerOrder,
            ["window", "room", "legs", "body", "desk", "hands/props", "face", "feedback"]
        )
    }

    func testViewportAlwaysPreservesThreeByTwoCanvas() {
        for viewport in [
            CGSize(width: 720, height: 480),
            CGSize(width: 1280, height: 640),
            CGSize(width: 840, height: 760)
        ] {
            let geometry = SceneGeometry(viewportSize: viewport)
            XCTAssertEqual(geometry.fittedRect.width / geometry.fittedRect.height, 1.5, accuracy: 0.000_001)
            XCTAssertLessThanOrEqual(geometry.fittedRect.width, viewport.width + 0.001)
            XCTAssertLessThanOrEqual(geometry.fittedRect.height, viewport.height + 0.001)
        }
    }

    func testRealRootSurfaceRendersAtMinimumSize() throws {
        let assets = try SceneAssets.verifiedDirectory(resourceRoot)
        let store = WorldStore()
        store.bootstrap(atMilliseconds: 2_000)
        let snapshot = store.sceneSnapshot(atMilliseconds: 4_000)
        let size = CGSize(width: 720, height: 480)
        let surface = SceneSurface(
            snapshot: snapshot,
            assets: assets,
            geometry: SceneGeometry(viewportSize: size)
        )
        let renderer = ImageRenderer(content: surface.frame(width: size.width, height: size.height))
        renderer.scale = 1
        let image = try XCTUnwrap(renderer.cgImage)
        XCTAssertEqual(image.width, 720)
        XCTAssertEqual(image.height, 480)
        XCTAssertTrue(assets.isAvailable)
    }

    func testCompactAndFullUseSameCharacterCompositeType() throws {
        let sources = packageRoot.appending(path: "Sources", directoryHint: .isDirectory)
        let sceneSource = try String(
            contentsOf: sources.appending(path: "SnozzyScene/SceneSurface.swift"),
            encoding: .utf8
        )
        let compositeSource = try String(
            contentsOf: sources.appending(path: "SnozzyScene/CharacterComposite.swift"),
            encoding: .utf8
        )
        XCTAssertTrue(sceneSource.contains("CharacterComposite("))
        XCTAssertTrue(compositeSource.contains("FloatingCompanionSurface"))
        XCTAssertGreaterThanOrEqual(
            compositeSource.components(separatedBy: "CharacterComposite(").count - 1,
            1
        )
    }

    func testManifestPolygonRoutesInteriorButNotBoundingBoxBlank() throws {
        let assets = try SceneAssets.verifiedDirectory(resourceRoot)
        let map = HotspotHitMap(
            hotspots: assets.hotspots,
            geometry: SceneGeometry(viewportSize: CGSize(width: 720, height: 480))
        )
        let window = try XCTUnwrap(assets.hotspots.first { $0.id == "window" })
        XCTAssertTrue(map.contains(CGPoint(x: 250, y: 130), in: window))
        XCTAssertNil(map.hotspot(at: CGPoint(x: 530, y: 40)))
    }

    func testConcavePolygonRejectsItsCutout() {
        let concave = Hotspot(
            id: "concave",
            label: "concave",
            polygon: [[100, 100], [300, 100], [300, 300], [200, 300], [200, 200], [100, 200]]
        )
        let map = HotspotHitMap(
            hotspots: [concave],
            geometry: SceneGeometry(viewportSize: CGSize(width: 1536, height: 1024))
        )
        XCTAssertTrue(map.contains(CGPoint(x: 250, y: 250), in: concave))
        XCTAssertFalse(map.contains(CGPoint(x: 150, y: 250), in: concave))
    }

    func testNonThreeByTwoLetterboxAndSceneBlankDoNotRoute() throws {
        let assets = try SceneAssets.verifiedDirectory(resourceRoot)
        let geometry = SceneGeometry(viewportSize: CGSize(width: 1280, height: 640))
        let map = HotspotHitMap(hotspots: assets.hotspots, geometry: geometry)
        XCTAssertEqual(geometry.fittedRect.minX, 160, accuracy: 0.001)
        XCTAssertNil(map.hotspot(at: CGPoint(x: 40, y: 320)), "letterbox must never route")
        XCTAssertNil(map.hotspot(at: CGPoint(x: 900, y: 40)), "unmapped scene pixels must stay inert")
    }

    private var packageRoot: URL {
        URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
    }

    private var resourceRoot: URL {
        packageRoot.appending(path: "Resources", directoryHint: .isDirectory)
    }
}

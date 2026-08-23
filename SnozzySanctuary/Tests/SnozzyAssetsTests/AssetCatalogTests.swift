import Foundation
import XCTest
import SnozzyAssets

final class AssetCatalogTests: XCTestCase {
    func testProductionCatalogValidatesHashesDimensionsPacksAndHotspots() throws {
        let catalog = try AssetCatalogLoader.loadValidated(
            manifestURL: resourceRoot.appending(path: "AssetCatalog.json"),
            allowedRoot: resourceRoot
        )

        XCTAssertEqual(catalog.manifest.schemaVersion, 2)
        XCTAssertEqual(catalog.manifest.records.count, 66)
        XCTAssertEqual(catalog.manifest.packs.count, 5)
        XCTAssertEqual(catalog.manifest.hotspots.count, 8)
        XCTAssertTrue(catalog.manifest.packs.allSatisfy(\.atomic))
        XCTAssertTrue(catalog.manifest.hotspots.allSatisfy {
            $0.bounds.width >= 28 && $0.bounds.height >= 28
        })
        let rasters = catalog.manifest.records.filter { $0.relativePath.lowercased().hasSuffix(".png") }
        XCTAssertTrue(rasters.allSatisfy {
            $0.pixelWidth != nil && $0.pixelHeight != nil && $0.pixelScale != nil && $0.logicalRect != nil
        })
    }

    func testHashMismatchFailsClosed() throws {
        let temporary = FileManager.default.temporaryDirectory
            .appending(path: "SnozzyAssetsTests-\(UUID().uuidString)", directoryHint: .isDirectory)
        defer { try? FileManager.default.removeItem(at: temporary) }
        try FileManager.default.createDirectory(
            at: temporary.appending(path: "AssetsV2", directoryHint: .isDirectory),
            withIntermediateDirectories: true
        )
        try FileManager.default.copyItem(
            at: resourceRoot.appending(path: "AssetsV2/room.png"),
            to: temporary.appending(path: "AssetsV2/room.png")
        )

        let manifestURL = resourceRoot.appending(path: "AssetCatalog.json")
        var object = try XCTUnwrap(
            JSONSerialization.jsonObject(with: Data(contentsOf: manifestURL)) as? [String: Any]
        )
        var records = try XCTUnwrap(object["records"] as? [[String: Any]])
        records[0]["sha256"] = String(repeating: "0", count: 64)
        object["records"] = records
        let damaged = try JSONSerialization.data(withJSONObject: object, options: [.prettyPrinted])
        try damaged.write(to: temporary.appending(path: "AssetCatalog.json"))

        XCTAssertThrowsError(
            try AssetCatalogLoader.loadValidated(
                manifestURL: temporary.appending(path: "AssetCatalog.json"),
                allowedRoot: temporary
            )
        ) { error in
            XCTAssertEqual(error as? AssetValidationError, .hashMismatch("scene.room"))
        }
    }

    @MainActor
    func testExplicitLibraryLoadsEveryRasterWithoutCWDSearch() throws {
        let library = try AssetLibrary(validatingRoot: resourceRoot)
        let rasterCount = library.catalog.manifest.records.filter { $0.pixelWidth != nil }.count
        let loadedCount = library.catalog.manifest.records.filter { record in
            record.pixelWidth != nil && library.image(for: record.id) != nil
        }.count
        XCTAssertEqual(loadedCount, rasterCount)
    }

    func testDuplicatePackIDFailsClosed() throws {
        try withMinimalCatalog { object in
            var packs = try XCTUnwrap(object["packs"] as? [[String: Any]])
            packs.append(packs[0])
            object["packs"] = packs
        } assertion: { error in
            XCTAssertEqual(error as? AssetValidationError, .duplicatePackID("scene.v2"))
        }
    }

    func testRecordCannotReferenceUndeclaredPack() throws {
        try withMinimalCatalog { object in
            var records = try XCTUnwrap(object["records"] as? [[String: Any]])
            records[0]["packID"] = "missing.pack"
            object["records"] = records
        } assertion: { error in
            XCTAssertEqual(error as? AssetValidationError, .invalidPack("missing.pack"))
        }
    }

    func testAtomicPackCannotOmitOrInventMember() throws {
        try withMinimalCatalog { object in
            var packs = try XCTUnwrap(object["packs"] as? [[String: Any]])
            packs[0]["records"] = ["scene.room", "ghost.record"]
            object["packs"] = packs
        } assertion: { error in
            XCTAssertEqual(error as? AssetValidationError, .invalidPack("scene.v2"))
        }
    }

    func testTraversalAndManifestOutsideRootFailClosed() throws {
        try withMinimalCatalog { object in
            var records = try XCTUnwrap(object["records"] as? [[String: Any]])
            records[0]["relativePath"] = "../room.png"
            object["records"] = records
        } assertion: { error in
            guard case .unsafePath = error as? AssetValidationError else {
                return XCTFail("expected unsafePath, got \(error)")
            }
        }
    }

    func testLogicalRectAndPolygonMustStayInsideCanvas() throws {
        try withMinimalCatalog { object in
            var records = try XCTUnwrap(object["records"] as? [[String: Any]])
            records[0]["logicalRect"] = ["x": -1, "y": 0, "width": 1536, "height": 1024]
            object["records"] = records
        } assertion: { error in
            XCTAssertEqual(error as? AssetValidationError, .invalidGeometry("scene.room"))
        }

        try withMinimalCatalog { object in
            var hotspots = try XCTUnwrap(object["hotspots"] as? [[String: Any]])
            hotspots[0]["polygon"] = [[-1, 100], [80, 100], [80, 160], [0, 160]]
            object["hotspots"] = hotspots
        } assertion: { error in
            XCTAssertEqual(error as? AssetValidationError, .invalidHotspots)
        }
    }

    func testWrongPixelDimensionsFailClosed() throws {
        try withMinimalCatalog { object in
            var records = try XCTUnwrap(object["records"] as? [[String: Any]])
            records[0]["pixelWidth"] = 1
            object["records"] = records
        } assertion: { error in
            XCTAssertEqual(error as? AssetValidationError, .dimensionMismatch("scene.room"))
        }
    }

    func testRasterRequiresDimensionsScaleAndLogicalRect() throws {
        for missing in ["pixelWidth", "pixelHeight", "pixelScale", "logicalRect"] {
            try withMinimalCatalog { object in
                var records = try XCTUnwrap(object["records"] as? [[String: Any]])
                records[0].removeValue(forKey: missing)
                object["records"] = records
            } assertion: { error in
                XCTAssertEqual(error as? AssetValidationError, .invalidGeometry("scene.room"), missing)
            }
        }
    }

    func testFinalAndParentDirectorySymlinksFailClosed() throws {
        try withMinimalCatalog(setup: { temporary in
            let file = temporary.appending(path: "AssetsV2/room.png")
            try FileManager.default.removeItem(at: file)
            try FileManager.default.createSymbolicLink(
                at: file,
                withDestinationURL: self.resourceRoot.appending(path: "AssetsV2/room.png")
            )
        }) { _ in } assertion: { error in
            XCTAssertEqual(error as? AssetValidationError, .symbolicLink("scene.room"))
        }

        try withMinimalCatalog(setup: { temporary in
            try FileManager.default.createSymbolicLink(
                at: temporary.appending(path: "LinkedAssets"),
                withDestinationURL: self.resourceRoot.appending(path: "AssetsV2", directoryHint: .isDirectory)
            )
        }) { object in
            var records = try XCTUnwrap(object["records"] as? [[String: Any]])
            records[0]["relativePath"] = "LinkedAssets/room.png"
            object["records"] = records
        } assertion: { error in
            XCTAssertEqual(error as? AssetValidationError, .symbolicLink("scene.room"))
        }
    }

    @MainActor
    func testProductionBundleInitializerNeverFallsBackToCWD() throws {
        let temporary = FileManager.default.temporaryDirectory
            .appending(path: "EmptyAssets-\(UUID().uuidString).bundle", directoryHint: .isDirectory)
        defer { try? FileManager.default.removeItem(at: temporary) }
        let resources = temporary.appending(path: "Contents/Resources", directoryHint: .isDirectory)
        try FileManager.default.createDirectory(at: resources, withIntermediateDirectories: true)
        let info: [String: Any] = [
            "CFBundleIdentifier": "com.snozzz.empty-assets",
            "CFBundleName": "EmptyAssets",
            "CFBundlePackageType": "BNDL"
        ]
        let data = try PropertyListSerialization.data(fromPropertyList: info, format: .xml, options: 0)
        try data.write(to: temporary.appending(path: "Contents/Info.plist"))
        let bundle = try XCTUnwrap(Bundle(url: temporary))
        XCTAssertThrowsError(try AssetLibrary(bundle: bundle)) { error in
            XCTAssertEqual(error as? AssetValidationError, .missingManifest)
        }
    }

    private func withMinimalCatalog(
        setup: (URL) throws -> Void = { _ in },
        mutate: (inout [String: Any]) throws -> Void,
        assertion: (Error) -> Void
    ) throws {
        let temporary = FileManager.default.temporaryDirectory
            .appending(path: "SnozzyAssetProbe-\(UUID().uuidString)", directoryHint: .isDirectory)
        defer { try? FileManager.default.removeItem(at: temporary) }
        try FileManager.default.createDirectory(
            at: temporary.appending(path: "AssetsV2", directoryHint: .isDirectory),
            withIntermediateDirectories: true
        )
        try FileManager.default.copyItem(
            at: resourceRoot.appending(path: "AssetsV2/room.png"),
            to: temporary.appending(path: "AssetsV2/room.png")
        )
        try setup(temporary)

        var object = try XCTUnwrap(
            JSONSerialization.jsonObject(
                with: Data(contentsOf: resourceRoot.appending(path: "AssetCatalog.json"))
            ) as? [String: Any]
        )
        let records = try XCTUnwrap(object["records"] as? [[String: Any]])
        object["records"] = [try XCTUnwrap(records.first { ($0["id"] as? String) == "scene.room" })]
        object["packs"] = [["id": "scene.v2", "atomic": true, "records": ["scene.room"]]]
        try mutate(&object)
        let manifest = temporary.appending(path: "AssetCatalog.json")
        try JSONSerialization.data(withJSONObject: object, options: [.prettyPrinted]).write(to: manifest)

        do {
            _ = try AssetCatalogLoader.loadValidated(manifestURL: manifest, allowedRoot: temporary)
            XCTFail("damaged catalog unexpectedly validated")
        } catch {
            assertion(error)
        }
    }

    private var resourceRoot: URL {
        URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .appending(path: "Resources", directoryHint: .isDirectory)
    }
}

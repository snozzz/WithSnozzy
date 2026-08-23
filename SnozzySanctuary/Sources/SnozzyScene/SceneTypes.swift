import AppKit
import CoreGraphics
import Foundation
import SnozzyAssets

public struct SceneGeometry: Equatable, Sendable {
    public let logicalSize: CGSize
    public let viewportSize: CGSize

    public init(
        logicalSize: CGSize = CGSize(width: 1536, height: 1024),
        viewportSize: CGSize
    ) {
        self.logicalSize = logicalSize
        self.viewportSize = viewportSize
    }

    public var fittedScale: CGFloat {
        min(viewportSize.width / logicalSize.width, viewportSize.height / logicalSize.height)
    }

    public var fittedRect: CGRect {
        let size = CGSize(width: logicalSize.width * fittedScale, height: logicalSize.height * fittedScale)
        return CGRect(
            x: (viewportSize.width - size.width) / 2,
            y: (viewportSize.height - size.height) / 2,
            width: size.width,
            height: size.height
        )
    }
}

@MainActor
public final class SceneAssets {
    public let library: AssetLibrary?
    public let loadError: String?

    private init(library: AssetLibrary?, loadError: String?) {
        self.library = library
        self.loadError = loadError
    }

    public static func bundled(bundle: Bundle = .main) -> SceneAssets {
        do {
            return SceneAssets(library: try AssetLibrary(bundle: bundle), loadError: nil)
        } catch {
            return SceneAssets(library: nil, loadError: error.localizedDescription)
        }
    }

    public static func verifiedDirectory(_ root: URL) throws -> SceneAssets {
        SceneAssets(library: try AssetLibrary(validatingRoot: root), loadError: nil)
    }

    public var isAvailable: Bool { library != nil }
    public var hotspots: [Hotspot] { library?.catalog.manifest.hotspots ?? [] }

    public func image(_ id: String) -> NSImage? {
        library?.image(for: id)
    }

    public func record(_ id: String) -> AssetRecord? {
        library?.catalog.record(for: id)
    }
}

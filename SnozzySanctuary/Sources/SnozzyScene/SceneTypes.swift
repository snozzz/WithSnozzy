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

public struct SceneAssets: Equatable, Sendable {
    public let catalog: AssetCatalog
    public let isFallback: Bool

    public init(catalog: AssetCatalog, isFallback: Bool = false) {
        self.catalog = catalog
        self.isFallback = isFallback
    }

    public static let fallback = SceneAssets(catalog: .empty, isFallback: true)

    public static func bundled(bundle: Bundle = .main) -> SceneAssets {
        guard
            let resourceURL = bundle.resourceURL,
            let catalog = try? AssetCatalogLoader.load(
                manifestURL: resourceURL.appending(path: "AssetCatalog.json")
            )
        else { return .fallback }
        return SceneAssets(catalog: catalog)
    }
}

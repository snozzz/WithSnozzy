import Foundation
import SnozzyDomain

public enum AssetKind: String, Codable, Sendable {
    case room
    case foreground
    case character
    case animation
    case audio
    case storylet
}

public struct AssetRecord: Codable, Equatable, Sendable {
    public let id: String
    public let kind: AssetKind
    public let relativePath: String
    public let pixelScale: Int?

    public init(id: String, kind: AssetKind, relativePath: String, pixelScale: Int? = nil) {
        self.id = id
        self.kind = kind
        self.relativePath = relativePath
        self.pixelScale = pixelScale
    }
}

public struct AssetCatalogManifest: Codable, Equatable, Sendable {
    public let schemaVersion: Int
    public let logicalWidth: Int
    public let logicalHeight: Int
    public let records: [AssetRecord]

    public init(
        schemaVersion: Int = 1,
        logicalWidth: Int = 1536,
        logicalHeight: Int = 1024,
        records: [AssetRecord] = []
    ) {
        self.schemaVersion = schemaVersion
        self.logicalWidth = logicalWidth
        self.logicalHeight = logicalHeight
        self.records = records
    }
}

public struct AssetCatalog: Equatable, Sendable {
    public let manifest: AssetCatalogManifest
    public let rootURL: URL?

    public init(manifest: AssetCatalogManifest, rootURL: URL?) {
        self.manifest = manifest
        self.rootURL = rootURL
    }

    public func url(for id: String) -> URL? {
        guard
            let rootURL,
            let record = manifest.records.first(where: { $0.id == id })
        else { return nil }
        return rootURL.appending(path: record.relativePath)
    }

    public static let empty = AssetCatalog(manifest: AssetCatalogManifest(), rootURL: nil)
}

public enum AssetCatalogLoader {
    public static func load(manifestURL: URL) throws -> AssetCatalog {
        let data = try Data(contentsOf: manifestURL)
        let manifest = try JSONDecoder().decode(AssetCatalogManifest.self, from: data)
        return AssetCatalog(
            manifest: manifest,
            rootURL: manifestURL.deletingLastPathComponent()
        )
    }
}

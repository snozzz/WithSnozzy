import AppKit
import CryptoKit
import Foundation
import ImageIO
import SnozzyDomain

public enum AssetKind: String, Codable, Sendable {
    case room
    case foreground
    case character
    case animation
    case audio
    case storylet
    case manifest
}

public struct LogicalRect: Codable, Equatable, Sendable {
    public let x: Double
    public let y: Double
    public let width: Double
    public let height: Double

    public init(x: Double, y: Double, width: Double, height: Double) {
        self.x = x
        self.y = y
        self.width = width
        self.height = height
    }

    public var isFinite: Bool {
        x.isFinite && y.isFinite && width.isFinite && height.isFinite
    }
}

public struct AssetRecord: Codable, Equatable, Sendable {
    public let id: String
    public let kind: AssetKind
    public let role: String
    public let relativePath: String
    public let sha256: String
    public let pixelWidth: Int?
    public let pixelHeight: Int?
    public let pixelScale: Int?
    public let logicalRect: LogicalRect?
    public let packID: String?
}

public struct AssetPack: Codable, Equatable, Sendable {
    public let id: String
    public let atomic: Bool
    public let records: [String]
}

public struct Hotspot: Codable, Equatable, Identifiable, Sendable {
    public let id: String
    public let label: String
    public let polygon: [[Double]]

    public init(id: String, label: String, polygon: [[Double]]) {
        self.id = id
        self.label = label
        self.polygon = polygon
    }

    public var bounds: LogicalRect {
        let points = polygon.compactMap { point -> (Double, Double)? in
            guard point.count == 2 else { return nil }
            return (point[0], point[1])
        }
        guard
            let minX = points.map(\.0).min(), let maxX = points.map(\.0).max(),
            let minY = points.map(\.1).min(), let maxY = points.map(\.1).max()
        else { return LogicalRect(x: 0, y: 0, width: 0, height: 0) }
        return LogicalRect(x: minX, y: minY, width: maxX - minX, height: maxY - minY)
    }
}

public struct AssetCatalogManifest: Codable, Equatable, Sendable {
    public let schemaVersion: Int
    public let logicalWidth: Int
    public let logicalHeight: Int
    public let records: [AssetRecord]
    public let packs: [AssetPack]
    public let hotspots: [Hotspot]
}

public struct AssetCatalog: Equatable, Sendable {
    public let manifest: AssetCatalogManifest
    public let rootURL: URL
    private let recordsByID: [String: AssetRecord]

    public init(manifest: AssetCatalogManifest, rootURL: URL) {
        self.manifest = manifest
        self.rootURL = rootURL
        recordsByID = Dictionary(uniqueKeysWithValues: manifest.records.map { ($0.id, $0) })
    }

    public func record(for id: String) -> AssetRecord? {
        recordsByID[id]
    }

    public func url(for id: String) -> URL? {
        guard let record = recordsByID[id] else { return nil }
        return rootURL.appending(path: record.relativePath)
    }
}

public enum AssetValidationError: LocalizedError, Equatable {
    case missingManifest
    case unsupportedSchema(Int)
    case duplicateID(String)
    case duplicatePackID(String)
    case unsafePath(String)
    case missingFile(String)
    case symbolicLink(String)
    case hashMismatch(String)
    case dimensionMismatch(String)
    case invalidPack(String)
    case invalidHotspots
    case invalidGeometry(String)
    case unreadableImage(String)

    public var errorDescription: String? {
        switch self {
        case .missingManifest: "AssetCatalog.json 不在应用资源包中"
        case let .unsupportedSchema(version): "不支持的素材清单版本：\(version)"
        case let .duplicateID(id): "素材 ID 重复：\(id)"
        case let .duplicatePackID(id): "素材包 ID 重复：\(id)"
        case let .unsafePath(path): "素材路径越界：\(path)"
        case let .missingFile(id): "素材缺失：\(id)"
        case let .symbolicLink(id): "素材不允许使用符号链接：\(id)"
        case let .hashMismatch(id): "素材 SHA-256 不匹配：\(id)"
        case let .dimensionMismatch(id): "素材尺寸不匹配：\(id)"
        case let .invalidPack(id): "原子素材包不完整：\(id)"
        case .invalidHotspots: "热点清单必须恰好包含 8 个有效 polygon"
        case let .invalidGeometry(id): "素材或热点几何越界：\(id)"
        case let .unreadableImage(id): "图片无法解码：\(id)"
        }
    }
}

public enum AssetCatalogLoader {
    public static func loadValidated(manifestURL: URL, allowedRoot: URL) throws -> AssetCatalog {
        guard FileManager.default.fileExists(atPath: manifestURL.path) else {
            throw AssetValidationError.missingManifest
        }
        let data = try Data(contentsOf: manifestURL)
        let manifest = try JSONDecoder().decode(AssetCatalogManifest.self, from: data)
        guard manifest.schemaVersion == 2 else {
            throw AssetValidationError.unsupportedSchema(manifest.schemaVersion)
        }

        let root = allowedRoot.resolvingSymlinksInPath().standardizedFileURL
        let expectedManifest = root.appending(path: "AssetCatalog.json").standardizedFileURL
        guard manifestURL.resolvingSymlinksInPath().standardizedFileURL == expectedManifest else {
            throw AssetValidationError.unsafePath(manifestURL.path)
        }
        guard manifest.logicalWidth > 0, manifest.logicalHeight > 0 else {
            throw AssetValidationError.invalidGeometry("canvas")
        }

        var packIDs = Set<String>()
        for pack in manifest.packs {
            guard packIDs.insert(pack.id).inserted else {
                throw AssetValidationError.duplicatePackID(pack.id)
            }
        }

        var seen = Set<String>()
        for record in manifest.records {
            guard seen.insert(record.id).inserted else {
                throw AssetValidationError.duplicateID(record.id)
            }
            let relative = record.relativePath
            let components = relative.split(separator: "/", omittingEmptySubsequences: false)
            guard
                !relative.hasPrefix("/"), !components.isEmpty,
                !components.contains(".."), !components.contains("."),
                !components.contains("")
            else {
                throw AssetValidationError.unsafePath(relative)
            }
            if let packID = record.packID, !packIDs.contains(packID) {
                throw AssetValidationError.invalidPack(packID)
            }
            if let rect = record.logicalRect {
                guard
                    rect.isFinite, rect.x >= 0, rect.y >= 0,
                    rect.width > 0, rect.height > 0,
                    rect.x + rect.width <= Double(manifest.logicalWidth),
                    rect.y + rect.height <= Double(manifest.logicalHeight)
                else { throw AssetValidationError.invalidGeometry(record.id) }
            }
            if let scale = record.pixelScale, scale <= 0 {
                throw AssetValidationError.invalidGeometry(record.id)
            }
            let unresolved = allowedRoot.appending(path: relative)
            guard !containsSymbolicLink(root: allowedRoot, components: components.map(String.init)) else {
                throw AssetValidationError.symbolicLink(record.id)
            }
            let values = try? unresolved.resourceValues(forKeys: [.isRegularFileKey, .isSymbolicLinkKey])
            guard values?.isRegularFile == true else {
                throw AssetValidationError.missingFile(record.id)
            }
            guard values?.isSymbolicLink != true else {
                throw AssetValidationError.symbolicLink(record.id)
            }
            let resolved = unresolved.resolvingSymlinksInPath().standardizedFileURL
            let rootPrefix = root.path.hasSuffix("/") ? root.path : root.path + "/"
            guard resolved.path.hasPrefix(rootPrefix) else {
                throw AssetValidationError.unsafePath(relative)
            }
            let fileData = try Data(contentsOf: resolved, options: .mappedIfSafe)
            let digest = SHA256.hash(data: fileData).map { String(format: "%02x", $0) }.joined()
            guard digest == record.sha256 else {
                throw AssetValidationError.hashMismatch(record.id)
            }

            let isRaster = ["png", "jpg", "jpeg", "heic", "tiff"].contains(resolved.pathExtension.lowercased())
            if isRaster {
                guard
                    let expectedWidth = record.pixelWidth,
                    let expectedHeight = record.pixelHeight,
                    let rect = record.logicalRect,
                    let scale = record.pixelScale
                else { throw AssetValidationError.invalidGeometry(record.id) }
                let dimensions = try imageDimensions(url: resolved, id: record.id)
                guard dimensions.width == expectedWidth, dimensions.height == expectedHeight else {
                    throw AssetValidationError.dimensionMismatch(record.id)
                }
                guard
                    Int((rect.width * Double(scale)).rounded()) == expectedWidth,
                    Int((rect.height * Double(scale)).rounded()) == expectedHeight
                else { throw AssetValidationError.dimensionMismatch(record.id) }
            }
        }

        let recordIDs = Set(manifest.records.map(\.id))
        for pack in manifest.packs {
            let declared = Set(pack.records)
            let actual = Set(manifest.records.filter { $0.packID == pack.id }.map(\.id))
            guard pack.atomic, !declared.isEmpty, declared == actual, declared.isSubset(of: recordIDs) else {
                throw AssetValidationError.invalidPack(pack.id)
            }
        }

        var hotspotIDs = Set<String>()
        guard manifest.hotspots.count == 8, manifest.hotspots.allSatisfy({ hotspot in
            guard hotspotIDs.insert(hotspot.id).inserted, hotspot.polygon.count >= 3 else { return false }
            let validPoints = hotspot.polygon.allSatisfy { point in
                guard point.count == 2 else { return false }
                let x = point[0], y = point[1]
                return x.isFinite && y.isFinite && x >= 0 && y >= 0
                    && x <= Double(manifest.logicalWidth) && y <= Double(manifest.logicalHeight)
            }
            guard validPoints, hotspot.bounds.width >= 28, hotspot.bounds.height >= 28 else { return false }
            return polygonArea(hotspot.polygon) > 0
        }) else { throw AssetValidationError.invalidHotspots }

        return AssetCatalog(manifest: manifest, rootURL: allowedRoot)
    }

    private static func imageDimensions(url: URL, id: String) throws -> (width: Int, height: Int) {
        guard
            let source = CGImageSourceCreateWithURL(url as CFURL, nil),
            let properties = CGImageSourceCopyPropertiesAtIndex(source, 0, nil) as? [CFString: Any],
            let width = properties[kCGImagePropertyPixelWidth] as? Int,
            let height = properties[kCGImagePropertyPixelHeight] as? Int
        else { throw AssetValidationError.unreadableImage(id) }
        return (width, height)
    }

    private static func containsSymbolicLink(root: URL, components: [String]) -> Bool {
        var candidate = root
        if (try? candidate.resourceValues(forKeys: [.isSymbolicLinkKey]).isSymbolicLink) == true {
            return true
        }
        for component in components {
            candidate.append(path: component)
            if (try? candidate.resourceValues(forKeys: [.isSymbolicLinkKey]).isSymbolicLink) == true {
                return true
            }
        }
        return false
    }

    private static func polygonArea(_ polygon: [[Double]]) -> Double {
        guard polygon.count >= 3 else { return 0 }
        var doubled = 0.0
        for index in polygon.indices {
            let next = polygon[(index + 1) % polygon.count]
            doubled += polygon[index][0] * next[1] - next[0] * polygon[index][1]
        }
        return abs(doubled) * 0.5
    }
}

/// Eager immutable image cache. Production has one entry point: an app Bundle.
@MainActor
public final class AssetLibrary {
    public let catalog: AssetCatalog
    private let images: [String: NSImage]

    public convenience init(bundle: Bundle = .main) throws {
        guard let root = bundle.resourceURL else { throw AssetValidationError.missingManifest }
        try self.init(validatingRoot: root)
    }

    /// Explicit root for tests and SnozzyLab only. No caller-CWD probing is performed.
    public init(validatingRoot root: URL) throws {
        let manifestURL = root.appending(path: "AssetCatalog.json")
        catalog = try AssetCatalogLoader.loadValidated(manifestURL: manifestURL, allowedRoot: root)
        var loaded: [String: NSImage] = [:]
        for record in catalog.manifest.records where record.pixelWidth != nil {
            guard let url = catalog.url(for: record.id), let image = NSImage(contentsOf: url) else {
                throw AssetValidationError.unreadableImage(record.id)
            }
            loaded[record.id] = image
        }
        images = loaded
    }

    public func image(for id: String) -> NSImage? {
        images[id]
    }

    public func data(for id: String) throws -> Data? {
        guard let url = catalog.url(for: id) else { return nil }
        return try Data(contentsOf: url)
    }
}

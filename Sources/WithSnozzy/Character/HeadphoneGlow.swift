import AppKit
import SwiftUI

/// A visible headset region derived from the ordinary/headphone render pair.
///
/// The body assets are premultiplied-RGBA aligned renders from the same camera.
/// We keep the selected connected components, rather than a hand-written ellipse
/// or a broad rectangle, so a glow follows the cups through the close-up frames.
struct HeadphoneMask {
    let image: NSImage
    /// The crop's location on the logical 1536×1024 canvas.
    let rect: CGRect
    let pixelScale: Int
    let alpha: [UInt8]
    let pixelWidth: Int
    let pixelHeight: Int
    let coverage: Int
    let centroid: CGPoint
    let componentCount: Int

    /// Whether a logical canvas point is inside the extracted mask.
    /// `padding` is only used by pixel diagnostics to allow resampling at the
    /// one-pixel edge; the production overlay itself never expands the mask.
    func contains(_ point: CGPoint, padding: CGFloat = 0) -> Bool {
        let scale = CGFloat(pixelScale)
        let localX = (point.x - rect.minX) * scale
        let localY = (point.y - rect.minY) * scale
        let pad = max(0, padding * scale)
        guard localX >= -pad, localY >= -pad,
              localX < CGFloat(pixelWidth) + pad,
              localY < CGFloat(pixelHeight) + pad else { return false }

        let x = Int(localX.rounded(.down))
        let y = Int(localY.rounded(.down))
        if x >= 0, y >= 0, x < pixelWidth, y < pixelHeight {
            if alpha[y * pixelWidth + x] > 0 { return true }
            guard pad > 0 else { return false }
        }

        // A tolerance pixel at an antialiased edge (or just outside the crop)
        // is allowed only when a nearby source pixel is selected; this avoids
        // turning the crop rectangle itself into a mask.
        let radius = max(1, Int(ceil(pad)))
        let ix0 = max(0, x - radius), ix1 = min(pixelWidth - 1, x + radius)
        let iy0 = max(0, y - radius), iy1 = min(pixelHeight - 1, y + radius)
        guard ix0 <= ix1, iy0 <= iy1 else { return false }
        for yy in iy0...iy1 {
            for xx in ix0...ix1 where alpha[yy * pixelWidth + xx] > 0 {
                return true
            }
        }
        return false
    }
}

extension HeadphoneMask: Equatable {
    static func == (lhs: HeadphoneMask, rhs: HeadphoneMask) -> Bool {
        lhs.rect == rhs.rect
            && lhs.pixelScale == rhs.pixelScale
            && lhs.alpha == rhs.alpha
            && lhs.pixelWidth == rhs.pixelWidth
            && lhs.pixelHeight == rhs.pixelHeight
            && lhs.coverage == rhs.coverage
            && lhs.centroid == rhs.centroid
            && lhs.componentCount == rhs.componentCount
    }
}

struct HeadphoneMaskRecord: Codable {
    var file: String
    var rect: [Double]
    var canvas: [Int]
    var pixelScale: Int
    var coverage: Int
    var centroid: [Double]
    var components: Int
}

struct HeadphoneMaskManifest: Codable {
    var version: Int = 2
    var canvas: [Int]
    var pixelScale: Int
    /// Relative source paths and their SHA-256 digests.  A mask is only
    /// usable when it was generated from the exact production pair and face
    /// manifests that are loaded alongside it.
    var sources: [String: String]
    var masks: [String: HeadphoneMaskRecord]
}

/// Derives headset pixels from two aligned production renders.
enum HeadphoneMaskBuilder {
    /// A 12/255 premultiplied difference keeps the antialiased cup edge while
    /// rejecting the handful of transparent-pixel noise samples in the body
    /// pair.  The connected-component gate below rejects those samples too.
    static let differenceThreshold = 12

    static func load(image: NSImage, rect: CGRect, pixelScale: Int,
                     coverage: Int, centroid: CGPoint,
                     componentCount: Int) -> HeadphoneMask? {
        guard pixelScale > 0,
              let tiff = image.tiffRepresentation,
              let rep = NSBitmapImageRep(data: tiff),
              rep.bitsPerSample == 8,
              rep.samplesPerPixel == 4,
              let data = rep.bitmapData,
              rep.pixelsWide == Int((rect.width * CGFloat(pixelScale)).rounded()),
              rep.pixelsHigh == Int((rect.height * CGFloat(pixelScale)).rounded())
        else { return nil }
        var alpha = [UInt8](repeating: 0, count: rep.pixelsWide * rep.pixelsHigh)
        for y in 0..<rep.pixelsHigh {
            for x in 0..<rep.pixelsWide {
                alpha[y * rep.pixelsWide + x] = data[y * rep.bytesPerRow + x * 4 + 3]
            }
        }
        return HeadphoneMask(image: image, rect: rect, pixelScale: pixelScale,
                             alpha: alpha, pixelWidth: rep.pixelsWide,
                             pixelHeight: rep.pixelsHigh, coverage: coverage,
                             centroid: centroid, componentCount: componentCount)
    }

    private struct Bitmap {
        let width: Int
        let height: Int
        let bytesPerRow: Int
        let bytes: [UInt8]

        init?(_ image: NSImage) {
            guard let tiff = image.tiffRepresentation,
                  let rep = NSBitmapImageRep(data: tiff),
                  rep.bitsPerSample == 8,
                  rep.samplesPerPixel == 4,
                  let data = rep.bitmapData else { return nil }
            width = rep.pixelsWide
            height = rep.pixelsHigh
            bytesPerRow = rep.bytesPerRow
            bytes = Array(UnsafeBufferPointer(start: data,
                                               count: rep.bytesPerRow * rep.pixelsHigh))
        }

        func pixel(_ x: Int, _ y: Int) -> (r: Int, g: Int, b: Int, a: Int) {
            let offset = y * bytesPerRow + x * 4
            return (Int(bytes[offset]), Int(bytes[offset + 1]),
                    Int(bytes[offset + 2]), Int(bytes[offset + 3]))
        }
    }

    private struct Component {
        var pixels: [Int] = []
        var minX = Int.max, minY = Int.max
        var maxX = -1, maxY = -1

        mutating func add(_ index: Int, x: Int, y: Int) {
            pixels.append(index)
            minX = min(minX, x); minY = min(minY, y)
            maxX = max(maxX, x); maxY = max(maxY, y)
        }
    }

    /// - Parameters:
    ///   - faceRects: source-pixel rectangles occupied by effective face
    ///     patches. Removing those pixels gives the glow a structural zero
    ///     overlap with eye/mouth overlays, even at their transparent margins.
    static func build(base: NSImage, headphones: NSImage, pixelScale: Int,
                      faceRects: [CGRect] = []) -> HeadphoneMask? {
        guard pixelScale > 0,
              let a = Bitmap(base), let b = Bitmap(headphones),
              a.width == b.width, a.height == b.height,
              a.width > 0, a.height > 0 else { return nil }

        let count = a.width * a.height
        var changed = [Bool](repeating: false, count: count)
        var changedCount = 0

        for y in 0..<a.height {
            for x in 0..<a.width {
                if faceRects.contains(where: {
                    $0.intersects(CGRect(x: x, y: y, width: 1, height: 1))
                }) { continue }

                let p = a.pixel(x, y), q = b.pixel(x, y)
                // PNGs are straight RGBA in NSBitmapImageRep.  Compare the
                // visible values as premultiplied RGB so transparent RGB
                // garbage cannot become a glow region.
                let pa = Double(p.a) / 255
                let qa = Double(q.a) / 255
                let dr = abs(Double(p.r) * pa - Double(q.r) * qa)
                let dg = abs(Double(p.g) * pa - Double(q.g) * qa)
                let db = abs(Double(p.b) * pa - Double(q.b) * qa)
                let da = abs(Double(p.a - q.a))
                let dValue = max(max(dr, dg), max(db, da))
                guard dValue >= Double(differenceThreshold) else { continue }
                let index = y * a.width + x
                changed[index] = true
                changedCount += 1
            }
        }
        guard changedCount > 0 else { return nil }

        // 8-connected components preserve the two separate cups, while
        // discarding isolated transparent/hair-edge render noise.  The
        // component count is retained for the snapshot report.
        var visited = [Bool](repeating: false, count: count)
        var components: [Component] = []
        let neighbors = [(-1, -1), (0, -1), (1, -1),
                          (-1, 0),             (1, 0),
                          (-1, 1),  (0, 1),  (1, 1)]
        for y in 0..<a.height {
            for x in 0..<a.width {
                let start = y * a.width + x
                guard changed[start], !visited[start] else { continue }
                visited[start] = true
                var queue = [start]
                var component = Component()
                var head = 0
                while head < queue.count {
                    let index = queue[head]; head += 1
                    let cx = index % a.width, cy = index / a.width
                    component.add(index, x: cx, y: cy)
                    for (dx, dy) in neighbors {
                        let nx = cx + dx, ny = cy + dy
                        guard nx >= 0, ny >= 0, nx < a.width, ny < a.height else { continue }
                        let ni = ny * a.width + nx
                        guard changed[ni], !visited[ni] else { continue }
                        visited[ni] = true
                        queue.append(ni)
                    }
                }
                components.append(component)
            }
        }
        let selected = components.sorted { $0.pixels.count > $1.pixels.count }
            .prefix(2)
            .filter { $0.pixels.count >= 24 }
        guard selected.count == 2 else { return nil }

        let minX = selected.map(\.minX).min() ?? 0
        let minY = selected.map(\.minY).min() ?? 0
        let maxX = selected.map(\.maxX).max() ?? 0
        let maxY = selected.map(\.maxY).max() ?? 0
        let cropW = maxX - minX + 1, cropH = maxY - minY + 1
        guard cropW > 0, cropH > 0 else { return nil }

        var maskAlpha = [UInt8](repeating: 0, count: cropW * cropH)
        var sumX = 0.0, sumY = 0.0, selectedCount = 0
        for component in selected {
            for index in component.pixels {
                let x = index % a.width, y = index / a.width
                let local = (y - minY) * cropW + x - minX
                // Keep a hard selected region.  This makes the runtime glow
                // and its diagnostic mask exactly the same shape.
                maskAlpha[local] = 255
                sumX += Double(x); sumY += Double(y); selectedCount += 1
            }
        }

        guard let rep = NSBitmapImageRep(
            bitmapDataPlanes: nil,
            pixelsWide: cropW, pixelsHigh: cropH,
            bitsPerSample: 8, samplesPerPixel: 4,
            hasAlpha: true, isPlanar: false,
            colorSpaceName: .deviceRGB,
            bitmapFormat: .alphaNonpremultiplied,
            bytesPerRow: cropW * 4, bitsPerPixel: 32),
            let data = rep.bitmapData else { return nil }
        for y in 0..<cropH {
            for x in 0..<cropW {
                let alpha = maskAlpha[y * cropW + x]
                let offset = y * rep.bytesPerRow + x * 4
                data[offset] = 255; data[offset + 1] = 255
                data[offset + 2] = 255; data[offset + 3] = alpha
            }
        }
        let maskImage = NSImage(size: NSSize(width: CGFloat(cropW) / CGFloat(pixelScale),
                                             height: CGFloat(cropH) / CGFloat(pixelScale)))
        maskImage.addRepresentation(rep)

        let scale = CGFloat(pixelScale)
        return HeadphoneMask(
            image: maskImage,
            rect: CGRect(x: CGFloat(minX) / scale, y: CGFloat(minY) / scale,
                         width: CGFloat(cropW) / scale, height: CGFloat(cropH) / scale),
            pixelScale: pixelScale,
            alpha: maskAlpha,
            pixelWidth: cropW,
            pixelHeight: cropH,
            coverage: selectedCount,
            centroid: CGPoint(x: sumX / Double(selectedCount) / scale,
                              y: sumY / Double(selectedCount) / scale),
            componentCount: selected.count)
    }
}

/// A low-frequency, state-free breathing tint constrained to the headset mask.
struct HeadphoneGlow: View {
    static let period: Double = 3.2
    static let phaseCount = 48
    static let minimumAlpha = 0.025
    static let maximumAlpha = 0.095

    let mask: HeadphoneMask
    let palette: Palette
    let phase: Int
    let width: CGFloat
    let height: CGFloat
    /// Production is 1.  Snapshot negative probes may intentionally raise it
    /// to prove the brightness ceiling through the real render path.
    let alphaScale: Double

    static func phase(at time: Double) -> Int {
        guard time.isFinite else { return 0 }
        let cycle = time.truncatingRemainder(dividingBy: period)
        let positive = cycle >= 0 ? cycle : cycle + period
        return min(phaseCount - 1,
                   max(0, Int((positive / period * Double(phaseCount)).rounded(.down))))
    }

    static func alpha(for phase: Int) -> Double {
        let p = Double(((phase % phaseCount) + phaseCount) % phaseCount)
        // phase 0 is the quiet valley; half a cycle is the peak.
        let wave = 0.5 - 0.5 * cos(2 * .pi * p / Double(phaseCount))
        return minimumAlpha + (maximumAlpha - minimumAlpha) * smoothstep(wave)
    }

    var body: some View {
        let sx = width / 1536
        let sy = height / 1024
        let tint = RGB.lerp(palette.accent, palette.lamp, 0.18).lighter(0.20)
        Image(nsImage: mask.image)
            .resizable()
            .interpolation(.high)
            .colorMultiply(tint.color)
            .opacity(Self.alpha(for: phase) * alphaScale)
            .blendMode(.plusLighter)
            .frame(width: mask.rect.width * sx, height: mask.rect.height * sy)
            .offset(x: mask.rect.minX * sx, y: mask.rect.minY * sy)
            .allowsHitTesting(false)
    }
}

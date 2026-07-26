import CoreGraphics
import SwiftUI

/// 一张 128×128 的可平铺噪声图，**整个进程只生成一次**。
///
/// 用它叠一层极淡的颗粒，画面立刻从「干净的矢量图」变成有胶片质感的插画。
/// 走贴图平铺而不是每帧在 Canvas 里画噪点，是因为后者会把 GPU 和 CPU 一起拖垮。
enum Grain {
    static let tile: Image = {
        let side = 128
        let count = side * side
        var bytes = [UInt8](repeating: 0, count: count)

        // 固定种子：每次启动纹理都一样，避免用户看到「颗粒在跳」。
        var seed: UInt64 = 0x5D_EE_CE_66_D6_25_F3_57
        for i in 0..<count {
            // xorshift64*，比 arc4random 快一个量级，这里对随机质量没要求。
            seed ^= seed >> 12; seed ^= seed << 25; seed ^= seed >> 27
            let v = (seed &* 0x2545_F491_4F6C_DD1D) >> 33
            // 收缩到中灰附近，叠加时才不会脏。
            bytes[i] = UInt8(112 + Int(v % 32))
        }

        let cs = CGColorSpaceCreateDeviceGray()
        guard let provider = CGDataProvider(data: Data(bytes) as CFData),
              let cg = CGImage(
                  width: side, height: side, bitsPerComponent: 8, bitsPerPixel: 8,
                  bytesPerRow: side, space: cs, bitmapInfo: CGBitmapInfo(rawValue: 0),
                  provider: provider, decode: nil, shouldInterpolate: false,
                  intent: .defaultIntent)
        else { return Image(systemName: "circle") }

        return Image(cg, scale: 2.0, label: Text(""))
    }()
}

/// 把胶片颗粒叠到任意视图上。
struct GrainOverlay: ViewModifier {
    var opacity: Double = 0.035

    func body(content: Content) -> some View {
        content.overlay {
            Grain.tile
                .resizable(resizingMode: .tile)
                .opacity(opacity)
                .blendMode(.overlay)
                .allowsHitTesting(false)
        }
    }
}

extension View {
    func grain(_ opacity: Double = 0.035) -> some View {
        modifier(GrainOverlay(opacity: opacity))
    }
}

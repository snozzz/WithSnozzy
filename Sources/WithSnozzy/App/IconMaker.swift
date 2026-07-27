import AppKit
import SwiftUI

/// 生成 App 图标。
///
/// ```
/// WithSnozzy --icon /path/to/AppIcon.iconset
/// ```
///
/// 图标由**和游戏里同一套渲染代码**画出来，所以改了 Snozzy 的建模，
/// 图标下次构建时自动跟着变。仓库里因此一个二进制文件都不需要。
@MainActor
enum IconMaker {

    static var requestedPath: String? {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: "--icon"), i + 1 < args.count else { return nil }
        return args[i + 1]
    }

    /// `.iconset` 需要的全部尺寸。
    private static let variants: [(name: String, pixels: Int)] = [
        ("icon_16x16", 16), ("icon_16x16@2x", 32),
        ("icon_32x32", 32), ("icon_32x32@2x", 64),
        ("icon_128x128", 128), ("icon_128x128@2x", 256),
        ("icon_256x256", 256), ("icon_256x256@2x", 512),
        ("icon_512x512", 512), ("icon_512x512@2x", 1024),
    ]

    static func run(dir path: String) {
        let dir = URL(fileURLWithPath: path)
        do {
            try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        } catch {
            print("无法创建 \(path): \(error.localizedDescription)")
            exit(1)
        }

        for (name, pixels) in variants {
            let renderer = ImageRenderer(content: IconArt(side: CGFloat(pixels)))
            renderer.scale = 1
            guard let image = renderer.nsImage,
                  let tiff = image.tiffRepresentation,
                  let rep = NSBitmapImageRep(data: tiff),
                  let png = rep.representation(using: .png, properties: [:])
            else {
                print("渲染 \(name) 失败")
                exit(1)
            }
            do {
                try png.write(to: dir.appendingPathComponent("\(name).png"))
            } catch {
                print("写入 \(name) 失败: \(error.localizedDescription)")
                exit(1)
            }
        }

        print("已生成 \(variants.count) 个尺寸 -> \(path)")
        exit(0)
    }
}

/// 图标的画面。
private struct IconArt: View {
    let side: CGFloat

    var body: some View {
        // Big Sur 之后 macOS 图标的规范：圆角方块只占画布约 82%，四周留白给投影。
        let inset = side * 0.09
        let plate = side - inset * 2
        // 系统图标的圆角约为方块边长的 22.4%。
        let corner = plate * 0.224

        // 用黄昏的调色板：暖橘配冷紫，在浅色和深色 Dock 上都立得住。
        let palette = Palette.dusk
        var pose = SnozzyRig.pose(time: 1.4, kick: 0, playing: true, mood: 0.9)
        // 图标是静态的，得挑一个最讨喜的表情固定下来。
        pose.blink = 0
        pose.headTilt = 0
        pose.lookX = 0
        pose.lookY = 0
        pose.smile = 0.85
        pose.blush = 0.5

        // 先把方块内的东西画完并整体裁圆角，再居中放进完整画布。
        // 这样角色超出边界的部分会被干净地切掉。
        return ZStack {
            LinearGradient(
                colors: [palette.skyTop.lighter(0.10).color,
                         palette.wallShade.color,
                         palette.skyBottom.darker(0.15).color],
                startPoint: .topLeading, endPoint: .bottomTrailing)

            // 一轮月亮，落在她头顶右上方的空处。
            Circle()
                .fill(palette.lamp.lighter(0.25).color(0.92))
                .frame(width: plate * 0.15, height: plate * 0.15)
                .offset(x: plate * 0.29, y: -plate * 0.30)

            // 半身像，往下压一点，让呆毛不顶到边框。
            SnozzyCanvas(pose: pose, palette: palette)
                .frame(width: plate * 1.42, height: plate * 1.42)
                .offset(y: plate * 0.32)
        }
        .frame(width: plate, height: plate)
        .clipShape(RoundedRectangle(cornerRadius: corner, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: corner, style: .continuous)
                .strokeBorder(.white.opacity(0.10), lineWidth: max(1, side / 256))
        }
        .frame(width: side, height: side)
    }
}

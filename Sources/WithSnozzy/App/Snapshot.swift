import AppKit
import SwiftUI

/// 离线渲染角色快照。
///
/// ```
/// WithSnozzy.app/Contents/MacOS/WithSnozzy --snapshot out.png
/// ```
///
/// 一次画出多种表情和多个时段，改完一根贝塞尔曲线立刻能看到全部影响，
/// 比反复开窗口手动摆表情快一个数量级。
@MainActor
enum Snapshot {

    static var requestedPath: String? {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: "--snapshot"), i + 1 < args.count else { return nil }
        return args[i + 1]
    }

    static func run(path: String) {
        // 只用来拍角色和场景。
        //
        // 侧边面板不走这条路：`ImageRenderer` 不会绘制 `ScrollView` 的内容，
        // 面板拍出来永远是空的。面板改用 `--panel` 启动参数直接开在真实窗口里截图，
        // 反正那才是真正要验证的渲染路径。
        let renderer = ImageRenderer(content: PoseSheet())
        renderer.scale = 2

        guard let image = renderer.nsImage,
              let tiff = image.tiffRepresentation,
              let rep = NSBitmapImageRep(data: tiff),
              let png = rep.representation(using: .png, properties: [:])
        else {
            print("快照渲染失败")
            exit(1)
        }

        do {
            try png.write(to: URL(fileURLWithPath: path))
            print("已写入 \(path)  (\(Int(image.size.width))×\(Int(image.size.height)))")
            exit(0)
        } catch {
            print("写入失败: \(error.localizedDescription)")
            exit(1)
        }
    }
}

/// 表情对照表。
private struct PoseSheet: View {
    private static let cell: CGFloat = 300

    private var cases: [(String, Pose, Palette)] {
        var idle = SnozzyRig.pose(time: 1.0, kick: 0, playing: false)
        idle.blink = 0

        var groove = SnozzyRig.pose(time: 5.3, kick: 0.9, playing: true)
        groove.blink = 0

        var blinking = idle
        blinking.blink = 1.0

        var happy = SnozzyRig.pose(time: 2.2, kick: 0.2, playing: true, mood: 1.0)
        happy.blink = 0

        var lookAway = idle
        lookAway.lookX = -0.95
        lookAway.lookY = 0.5

        var halfBlink = idle
        halfBlink.blink = 0.55

        return [
            ("深夜 · 静止", idle, .night),
            ("深夜 · 律动", groove, .night),
            ("眨眼", blinking, .night),
            ("半闭", halfBlink, .night),
            ("开心（笑眼）", happy, .dusk),
            ("看向别处", lookAway, .day),
        ]
    }

    /// 每格用不同天气，一张图就能同时检查降水效果。
    private let weathers: [Weather] = [.clear, .rain, .snow, .rain, .clear, .snow]

    var body: some View {
        let items = cases
        VStack(spacing: 0) {
            ForEach(0..<2, id: \.self) { row in
                HStack(spacing: 0) {
                    ForEach(0..<3, id: \.self) { col in
                        let item = items[row * 3 + col]
                        VStack(spacing: 4) {
                            ZStack {
                                RoomBackdrop(palette: item.2, weather: weathers[row * 3 + col], t: 3.0)
                                SnozzyCanvas(pose: item.1, palette: item.2)
                                    .frame(width: Self.cell * 0.78, height: Self.cell * 0.78)
                                    .position(x: Self.cell / 2, y: Self.cell * 0.511)
                                RoomForeground(palette: item.2)
                            }
                            .frame(width: Self.cell, height: Self.cell)
                            .clipped()

                            Text(item.0)
                                .font(.system(size: 11, design: .rounded))
                                .foregroundStyle(.white.opacity(0.7))
                                .frame(height: 18)
                        }
                    }
                }
            }
        }
        .frame(width: Self.cell * 3, height: (Self.cell + 22) * 2)
        .background(Color.black)
    }
}

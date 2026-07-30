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
        arg("--snapshot")
    }

    /// 换腿过渡的连续帧。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --legstrip out.png
    /// ```
    ///
    /// 为什么要有这个：过渡"是真的在动"还是"虚化过去"，靠截屏抓不到——
    /// 一段过渡只有 0.8 秒，而 `screencapture` 一张就要两三百毫秒。
    /// 这里直接按时间轴采样**真正的 `RenderedSnozzy`**（连 `sprite()` 的
    /// 定位一起走），把一整段过渡平铺出来，一眼就能看出腿是挪过去的还是溶解的。
    static var legStripPath: String? {
        arg("--legstrip")
    }

    private static func arg(_ name: String) -> String? {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: name), i + 1 < args.count else { return nil }
        return args[i + 1]
    }

    static func runLegStrip(path: String) {
        let assets = SceneAssets()
        assets.load()
        guard assets.hasRenderedCharacter, !assets.legStills.isEmpty else {
            print("腿部素材没加载到（\(assets.loadedFrom ?? "没找到 Assets 目录")）")
            exit(1)
        }

        // 找一段「姿势 → 姿势」的过渡：那种要经过中枢，最长也最能说明问题。
        guard let start = findTransition(in: assets.legs) else {
            print("时间轴上找不到过渡——steps 是不是 0？")
            exit(1)
        }
        let span = Double(2 * (assets.legs.steps + 1)) * LegPose.frameTime

        let renderer = ImageRenderer(content:
            LegStrip(assets: assets, start: start, span: span))
        renderer.scale = 1
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
            // 把这一段的帧序列也打出来，和图对照着看。
            // 采样点要和上面的平铺完全一致（帧中点），否则两边对不上。
            let count = Int((span / LegPose.frameTime).rounded()) + 1
            let seq = (0..<count).map { i -> String in
                switch LegPose.at(start + (Double(i) + 0.5) * LegPose.frameTime,
                                  in: assets.legs) {
                case .still(let j): return "静止\(assets.legs.poses[j])"
                case .moving(let p, let s): return "\(assets.legs.poses[p])#\(s)"
                }
            }
            let dup = zip(seq, seq.dropFirst()).filter { $0 == $1 }.count
            print("帧序列 (\(seq.count) 帧, \(String(format: "%.2f", span)) 秒, "
                  + "重复 \(dup) 对): " + seq.joined(separator: " "))
            exit(0)
        } catch {
            print("写入失败: \(error.localizedDescription)")
            exit(1)
        }
    }

    /// 时间轴上下一段「非中枢 → 非中枢」过渡的起点。
    private static func findTransition(in m: LegManifest) -> Double? {
        guard m.steps > 0 else { return nil }
        // 时间轴是 wall clock，从当前时刻往后找就行
        var t = Date().timeIntervalSinceReferenceDate
        let stop = t + LegPose.slot * 400
        while t < stop {
            let slotStart = (t / LegPose.slot).rounded(.down) * LegPose.slot
            // 档位末尾一定已经落定，用它读这一档和上一档各自的姿势。
            // 不要拿档位开头去判 `.moving`——过渡的第一帧是 `.still(上一套)`，
            // 那个位置永远不是 moving。
            if case .still(let a) = LegPose.at(slotStart - 0.01, in: m),
               case .still(let b) = LegPose.at(slotStart + LegPose.slot - 0.01, in: m),
               a != b, a != LegPose.hub, b != LegPose.hub {
                return slotStart
            }
            t = slotStart + LegPose.slot
        }
        return nil
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

/// 一段换腿过渡的逐帧平铺。只取腿那一块——上半身在整段过渡里是不动的。
private struct LegStrip: View {
    let assets: SceneAssets
    let start: Double
    let span: Double

    /// 每格里腿那一块画多宽。缩放由它反推整张画布该画多大——
    /// 按画布宽度定的话每格只剩四十来像素，什么都看不出来。
    private static let legW: CGFloat = 190

    var body: some View {
        let canvasW = assets.legs.canvasW, canvasH = assets.legs.canvasH
        let r = assets.legs.rect
        let scale = Self.legW / CGFloat(r.w)
        // 腿那一块在缩放后的位置，往外放宽一点好看清边界
        let cropW = CGFloat(r.w) * scale, cropH = CGFloat(r.h) * scale
        let cropX = CGFloat(r.x) * scale, cropY = CGFloat(r.y) * scale

        let count = Int((span / LegPose.frameTime).rounded()) + 1
        let cols = 7
        let rows = (count + cols - 1) / cols

        VStack(spacing: 2) {
            ForEach(0..<rows, id: \.self) { row in
                HStack(spacing: 2) {
                    ForEach(0..<cols, id: \.self) { col in
                        let i = row * cols + col
                        if i < count {
                            // 取每一帧的**中点**，不要取边界。时间轴是墙钟
                            // （8×10⁸ 量级），双精度在那儿的分辨率是 1e-7；
                            // 边界上 `Int(into / frameTime)` 会有一半落到前一帧，
                            // 平铺出来就是一堆两两重复、还漏掉几帧——
                            // 我第一版这么采样，差点以为过渡真的没动。
                            frame(at: start + (Double(i) + 0.5) * LegPose.frameTime,
                                  canvasW: canvasW * scale, canvasH: canvasH * scale,
                                  crop: CGRect(x: cropX, y: cropY, width: cropW, height: cropH))
                        } else {
                            Color.clear.frame(width: cropW, height: cropH)
                        }
                    }
                }
            }
        }
        .padding(4)
        .background(Color(white: 0.12))
    }

    /// 某一时刻的画面，裁到腿那一块。
    ///
    /// 走的是真正的 `RenderedSnozzy`，所以 `sprite()` 的定位、缝线的拼接
    /// 都在这张图里体现出来——这才是"上屏的东西"。
    private func frame(at t: Double, canvasW: CGFloat, canvasH: CGFloat,
                       crop: CGRect) -> some View {
        ZStack(alignment: .topLeading) {
            // 垫一层纯色底：过渡如果是虚化的，半透明的腿在纯色上最藏不住
            Color(white: 0.85)
            RenderedSnozzy(assets: assets, palette: .day,
                           pose: SnozzyRig.pose(time: t, kick: 0, playing: false),
                           headphones: false, t: t)
        }
        .frame(width: canvasW, height: canvasH)
        .offset(x: -crop.minX, y: -crop.minY)
        .frame(width: crop.width, height: crop.height, alignment: .topLeading)
        .clipped()
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

        // 打瞌睡：这一档要单独看，因为它同时改了眼睛、头的角度和动作幅度。
        var dozing = SnozzyRig.pose(time: 3.1, kick: 0, playing: false, drowsy: 1.0)
        var halfDozing = SnozzyRig.pose(time: 6.4, kick: 0, playing: false, drowsy: 0.55)
        dozing.zzz = 0.30
        halfDozing.zzz = 0.65

        return [
            ("深夜 · 静止", idle, .night),
            ("深夜 · 律动", groove, .night),
            ("打瞌睡", dozing, .night),
            ("半困", halfDozing, .night),
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

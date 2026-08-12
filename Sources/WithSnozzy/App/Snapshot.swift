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

    /// 表情节拍的逐格平铺。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --facestrip out.png
    /// ```
    ///
    /// "表情丰不丰富"是主观的，但它背后有个客观量：**一段时间里她的脸出现过
    /// 多少种不同的样子**。这里按 `FaceRig.slot` 逐档采样真正的
    /// `RenderedSnozzy`，把脸那一块裁出来平铺——格子之间长得都一样就是没做到。
    static var faceStripPath: String? {
        arg("--facestrip")
    }

    /// 敲键盘的手，逐帧平铺。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --handstrip out.png
    /// ```
    ///
    /// 这一条要**连房间和桌子一起画**，不能只画手：手的整个意义就是
    /// "盖在桌面层上面"，单独看一层手是看不出层序对不对的。
    static var handStripPath: String? {
        arg("--handstrip")
    }

    /// 窗外城市的四时段对照（另含白天雨天）。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --citystrip /tmp/city.png
    /// ```
    ///
    /// 每格直接使用生产 `CyberCity`，不是复制一份绘制算法。命令会在写图后
    /// 输出平均明度/饱和度、远近局部边缘能量和过曝比例，并量三个固定的生产
    /// ROI：夜晚招牌亮度/色度、雨天空区相对晴天的亮线占比、白天无灯近景楼体
    /// 与天空的主体对比。`--citystrip-negative` 用确定性的变体证明三项 gate
    /// 各自确实会失败。
    static var cityStripPath: String? {
        arg("--citystrip")
    }

    /// Re-run the city gates against three deterministic diagnostic variants:
    /// no city lights, over-bright rain, and a washed near silhouette. This is
    /// intentionally separate from the production image command so a reviewer
    /// can prove each gate fails for the regression it is meant to catch.
    static var cityStripNegative: Bool {
        CommandLine.arguments.contains("--citystrip-negative")
    }

    /// 近景切换的取景和完整骨骼帧序列。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --closeup out.png
    /// ```
    ///
    /// 这一条要**按真实层序整张画**（房间 → 她 → 桌子 → 手），而且要
    /// 从真实常态、2× 常态起点、00…07 到终态逐帧把镜头推过去。近景里能
    /// 出问题的三件事都只有整张才看得见：
    ///
    /// - **取景**：推到 1.55 倍之后，头顶切没切掉、托腮的手在不在画面里
    /// - **换姿势**：托腮那张上半身和腿在缝线处接没接上、桌上有没有多出一只手
    /// - **气泡**：镜头推上去之后气泡会被一起推出去，还在不在窗口内
    ///
    /// 光看单层图这三件事一件都发现不了——第 29 条那句"看整张，
    /// 别只放大看一小块"说的就是这个。
    static var closeUpPath: String? {
        arg("--closeup")
    }

    /// Activity 状态机的覆盖和数值约束。只量真正供 SceneStack 使用的纯函数，
    /// 不为了自检另画一棵迟早会和真实画面分家的场景树。
    static var activityCheck: Bool {
        CommandLine.arguments.contains("--activitycheck")
    }

    /// 五种活动在真实房间素材上的动态层落点。
    static var activityStripPath: String? {
        arg("--activitystrip")
    }

    /// 面部贴片在**非 3:2 窗口**下贴得准不准。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --facefit
    /// ```
    ///
    /// 素材和窗口都是 3:2，所以横竖两个缩放比平时正好相等——**一旦窗口被拉成
    /// 别的比例，两处各算一遍就会分家**。底图（`RenderedSnozzy.sprite`）是
    /// 横竖分开算的，贴片曾经只按宽度算一个比例，于是拉窗口时眼睛上方浮出
    /// 两块方片。这条判据就是量它：把窗口拉成几种比例，各渲一次睁眼和一次闭眼，
    /// 取差异像素的包围盒，和贴片清单里的矩形按 (sx, sy) 换算过去的位置对。
    ///
    /// 差几个像素是重采样的边缘，几十个像素就是又分家了。
    static var faceFit: Bool {
        CommandLine.arguments.contains("--facefit")
    }

    /// `--facefit out.png` 时顺手把拉扁那一档的脸截出来，肉眼再对一遍。
    static var faceFitPath: String? {
        arg("--facefit")
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

    static func runFaceStrip(path: String) {
        let assets = SceneAssets()
        assets.load()
        guard assets.hasRenderedCharacter, !assets.facePatches.isEmpty else {
            print("面部贴片没加载到（\(assets.loadedFrom ?? "没找到 Assets 目录")）")
            exit(1)
        }
        // 每档取保持段的中点：那是节拍演到最足的时刻。
        //
        // 起点必须**对齐到档位边界**，否则 `offset` 落不进保持段——
        // 墙钟随便取一个值，`into` 就是任意相位，采出来全是中性脸。
        // （腿那条踩过同一个坑：采样点和时间轴的分档没对上。）
        let now = Date().timeIntervalSinceReferenceDate
        let start = (now / FaceRig.slot).rounded(.down) * FaceRig.slot
        let offset = FaceRig.fadeIn + FaceRig.dwell * 0.5

        let renderer = ImageRenderer(content:
            FaceStrip(assets: assets, start: start, offset: offset))
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
            // 图里只有 28 格，拿它统计"有几种脸"样本太少，换个墙钟就晃。
            // 统计另外跑一遍，多采一些档位才稳。
            let n = 600
            var tally: [String: Int] = [:]
            for i in 0..<n {
                let t = start + Double(i) * FaceRig.slot + offset
                let e = FaceRig.expression(t: t, playing: FaceStrip.playing(i),
                                           mood: FaceStrip.mood(i), drowsy: 0,
                                           working: FaceStrip.working(i), speaking: false)
                tally[FaceStrip.describe(e), default: 0] += 1
            }
            let sorted = tally.sorted { $0.value > $1.value }
            print("采样 \(n) 档，出现了 \(tally.count) 种不同的脸：")
            for (k, v) in sorted {
                // 不要用 String(format:) 的 %s：它要的是 C 字符串，
                // 传 Swift String 轻则乱码重则崩（腿那边模拟脚本已经段错误过一次）。
                let pct = String(format: "%.1f", Double(v) / Double(n) * 100)
                print("  " + k + String(repeating: " ", count: max(1, 26 - k.count * 2))
                      + pct + "%")
            }
            // 困倦那一档单独看：它会压过别的节拍，容易写错
            var sleepy: [String: Int] = [:]
            for i in 0..<n {
                let t = start + Double(i) * FaceRig.slot + offset
                let e = FaceRig.expression(t: t, playing: false, mood: 0.5,
                                           drowsy: 0.9, working: false, speaking: false)
                sleepy[FaceStrip.describe(e), default: 0] += 1
            }
            print("困倦（drowsy=0.9）时：" + sleepy.sorted { $0.value > $1.value }
                .map { "\($0.key) \(Int(Double($0.value) / Double(n) * 100))%" }
                .joined(separator: "  "))
            exit(0)
        } catch {
            print("写入失败: \(error.localizedDescription)")
            exit(1)
        }
    }

    static func runHandStrip(path: String) {
        let assets = SceneAssets()
        assets.load()
        guard assets.hands.isUsable, !assets.handFrames.isEmpty else {
            print("手部素材没加载到（\(assets.loadedFrom ?? "没找到 Assets 目录")）")
            exit(1)
        }
        let renderer = ImageRenderer(content: HandStrip(assets: assets))
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
            // 敲不敲、敲多久：按档统计，样本要够多才稳
            for working in [true, false] {
                var typing = 0
                let n = 40_000
                let t0 = Date().timeIntervalSinceReferenceDate
                for i in 0..<n {
                    let t = t0 + Double(i) * 0.05
                    if TypingRig.frame(at: t, working: working,
                                       frames: assets.hands.frames) != 0 { typing += 1 }
                }
                print("\(working ? "专注阶段" : "平时")：手在动的时间占 "
                      + String(format: "%.0f%%", Double(typing) / Double(n) * 100))
            }
            exit(0)
        } catch {
            print("写入失败: \(error.localizedDescription)")
            exit(1)
        }
    }

    static func runCityStrip(path: String) {
        guard let rep = cityStripRepresentation(.normal),
              let png = rep.representation(using: .png, properties: [:])
        else {
            print("城市对照渲染失败")
            exit(1)
        }

        do {
            try png.write(to: URL(fileURLWithPath: path))
            print("已写入 \(path)  (\(rep.pixelsWide)×\(rep.pixelsHigh))")
            let report = CityStripReport(rep: rep)
            report.printAndExit()
        } catch {
            print("写入失败: \(error.localizedDescription)")
            exit(1)
        }
    }

    static func runCityStripNegative() {
        let probes: [(CityDiagnosticVariant, CityStripReport.Gate)] = [
            (.noNeon, .nightNeon),
            (.brightRain, .rainSky),
            (.washedNear, .daySilhouette),
        ]
        var allFailed = true
        print("CITYSTRIP 负向变体自检（每项都必须让对应 gate 失败）")
        for (variant, gate) in probes {
            guard let rep = cityStripRepresentation(variant) else {
                print("  ✗ \(variant.rawValue)：渲染失败")
                allFailed = false
                continue
            }
            let report = CityStripReport(rep: rep)
            report.printMetrics(prefix: "  \(variant.rawValue)")
            let matching = report.evaluate().filter { $0.gate == gate }
            let failed = !matching.isEmpty && matching.allSatisfy { !$0.passed }
            print("  " + (failed ? "✓ " : "✗ ")
                  + "\(variant.rawValue) → \(gate.label) gate \(failed ? "失败" : "仍通过")")
            allFailed = allFailed && failed
        }
        print("CITYSTRIP-NEGATIVE " + (allFailed ? "PASS" : "FAIL"))
        exit(allFailed ? 0 : 1)
    }

    private static func cityStripRepresentation(_ variant: CityDiagnosticVariant)
        -> NSBitmapImageRep? {
        let renderer = ImageRenderer(content: CityStrip(variant: variant))
        renderer.scale = 1
        guard let image = renderer.nsImage,
              let tiff = image.tiffRepresentation else { return nil }
        return NSBitmapImageRep(data: tiff)
    }

    static func runCloseUp(path: String) {
        let assets = SceneAssets()
        assets.load()
        guard assets.hasRenderedCharacter else {
            print("角色素材没加载到（\(assets.loadedFrom ?? "没找到 Assets 目录")）")
            exit(1)
        }
        if !assets.legs.hasChin {
            print("⚠️ 没有托腮那张上半身（legs.json 里 chinSeam=\(assets.legs.chinSeam)），"
                  + "只推镜头不换姿势。先跑 Blender/render_closeup.py")
        }
        let chinResourcesOK = assets.hasCompleteChinMotion
            && assets.chinBodyFrames.count == CloseUp.transitionFrames
            && assets.chinBodyPhoneFrames.count == CloseUp.transitionFrames
            && assets.chinHandFrames.count == CloseUp.transitionFrames
            && assets.chinBodyBase != nil && assets.chinBodyPhoneBase != nil
            && assets.chinBodyFinal != nil && assets.chinBodyPhoneFinal != nil
            && assets.chinHandFinal != nil && assets.hasHighResolutionFace
        if !chinResourcesOK {
            print("⚠️ 托腮逐帧资源不完整或清单不匹配；需要 2× 常态、00…07、"
                  + "终态、同构手层、13 张常态 2× 贴片和 13 张终态 facechin 贴片"
                  + "全部齐全，先跑 Scripts/chin_frames.py 与 Scripts/face_patches.py")
            print("  facechin: \(assets.faceChinFrames.count) 帧、"
                  + "\(assets.facePatchesChinFrames.reduce(0) { $0 + $1.count }) 张图")
        }

        // Render both source branches from the same production layer stack.  The
        // headset branch is not a decorative thumbnail: its rigid, head-parented
        // cups are part of the close-up contract and must stay aligned through
        // every chin frame as well.
        let renderer = ImageRenderer(content: VStack(spacing: 8) {
            CloseUpStrip(assets: assets, headphones: false)
            CloseUpStrip(assets: assets, headphones: true)
        })
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
            // 取景是算得出来的，不用靠眼睛量：推到头之后画面对应画布上哪一块。
            let z = SceneCamera.zoom
            let cw = assets.legs.canvasW / z, ch = assets.legs.canvasH / z
            let ax = assets.legs.canvasW * SceneCamera.anchor.x
            let ay = assets.legs.canvasH * SceneCamera.anchor.y
            let x0 = ax - cw * SceneCamera.anchor.x, y0 = ay - ch * SceneCamera.anchor.y
            print(String(format: "推到 %.2f 倍时，画面显示画布上的 x %.0f…%.0f  y %.0f…%.0f",
                         z, x0, x0 + cw, y0, y0 + ch))
            // 三件必须在画面里的东西。数值判据，别靠看
            let items: [(String, Int, Int)] = [
                ("发顶", 818, 300), ("下巴", 810, 428), ("托腮的手", 846, 450),
                ("桌沿", 818, 611),
            ]
            var missed: [String] = []
            for (name, x, y) in items {
                let inside = Double(x) >= x0 && Double(x) <= x0 + cw
                    && Double(y) >= y0 && Double(y) <= y0 + ch
                if !inside { missed.append(name) }
                print("  \(name) 画布(\(x),\(y))  " + (inside ? "✓ 在画面里" : "✗ 被切掉了"))
            }
            print(missed.isEmpty ? "CLOSEUP 取景全部在画面里"
                                 : "CLOSEUP ✗ 切掉了：\(missed.joined(separator: "、"))")
            probeTiming(framingOK: missed.isEmpty, resourcesOK: chinResourcesOK)
        } catch {
            print("写入失败: \(error.localizedDescription)")
            exit(1)
        }
    }

    static func runActivityStrip(path: String) {
        let assets = SceneAssets()
        assets.load()
        guard assets.isAvailable else {
            print("房间素材没加载到（\(assets.loadedFrom ?? "没找到 Assets 目录")）")
            exit(1)
        }
        let renderer = ImageRenderer(content: ActivityStrip(assets: assets))
        renderer.scale = 1
        guard let image = renderer.nsImage,
              let tiff = image.tiffRepresentation,
              let rep = NSBitmapImageRep(data: tiff),
              let png = rep.representation(using: .png, properties: [:]) else {
            print("活动快照渲染失败")
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

    /// 走一遍近景的时间轴，核对每一张正放/倒放骨骼帧。
    ///
    /// 图能验取景和层序，验不了**顺序**：镜头和 8 帧托腮骨骼动画是两条
    /// 独立的连续曲线，而这个功能好不好看取决于两者的先后——镜头起步时要开始
    /// 抬手，退镜完成前要播完反向放手。顺序写反仍然“能用”，但动作会发飘。
    private static func probeTiming(framingOK: Bool, resourcesOK: Bool) {
        let closeUp = CloseUp()
        var sequence: [String] = []
        var arrived = false
        var arrivedFrame: Int?
        closeUp.onArrived = {
            arrived = true
            arrivedFrame = closeUp.chinFrame
        }

        // 采样点挑在每一段的中间，避开边界——边界上采到哪一边全看调度。
        // 停留时长是 5…10 秒随机的，所以"退回中"那个点不能按秒数算，
        // 得盯着 `pushed` 翻转再采。
        let done = DispatchSemaphore(value: 0)
        Task { @MainActor in
            closeUp.begin()
            while closeUp.isActive {
                let label = closeUp.chinFrame.map(String.init) ?? "nil"
                if sequence.last != label { sequence.append(label) }
                try? await Task.sleep(for: .milliseconds(8))
            }
            let label = closeUp.chinFrame.map(String.init) ?? "nil"
            if sequence.last != label { sequence.append(label) }
            done.signal()
        }
        // 这是个命令行子命令，没有 UI 事件循环在跑，得自己把 runloop 转起来，
        // 否则上面那个 Task 永远排不到主线程。
        while done.wait(timeout: .now()) == .timedOut {
            RunLoop.main.run(until: Date().addingTimeInterval(0.02))
        }

        print("逐帧时间轴：" + sequence.joined(separator: " → "))
        var ok = framingOK
        func check(_ label: String, _ pass: Bool) {
            ok = ok && pass
            print("  " + (pass ? "✓ " : "✗ ") + label)
        }
        check("2× 身体、手层、终态与面部贴片契约完整", resourcesOK)
        let forward = ["-1"] + (0...CloseUp.transitionFrames).map(String.init)
        let reverse = stride(from: CloseUp.transitionFrames - 1, through: 0, by: -1)
            .map(String.init) + ["-1", "nil"]
        check("真实常态 2× base → frame 00 连续", sequence.starts(with: forward))
        check("frame 07 → 终态 08 连续",
              zip(sequence, sequence.dropFirst()).contains {
                  pair in pair.0 == "7" && pair.1 == "8"
              })
        check("放手完整倒放 07…00 → base → 常态",
              sequence.suffix(reverse.count).elementsEqual(reverse))
        check("推到终态之后才开口念待办",
              arrived && arrivedFrame == CloseUp.transitionFrames)
        print("CLOSEUP " + (ok ? "全部通过" : "有不合格项"))
        exit(ok ? 0 : 1)
    }

    /// 见 `faceFit`。三种比例：3:2（素材原比例）、更扁、更方。
    static func runFaceFit() {
        let assets = SceneAssets()
        assets.load()
        guard assets.hasRenderedCharacter,
              let rect = assets.face.patches["blink_shut"] else {
            print("面部素材没加载到（\(assets.loadedFrom ?? "没找到 Assets 目录")）")
            exit(1)
        }
        // 第一个尺寸是素材原比例 3:2，用它当**基准**。
        //
        // 判据不能直接看"贴片落点和清单矩形差几像素"：贴片的 bbox 四周本来就
        // 留了两三像素的透明余量（第 22 条），睁眼闭眼在那一圈上没有差别，
        // 于是包围盒天生就比矩形小一圈，3:2 下也有 4 像素的"偏差"。
        // 真正要问的是**这个偏差会不会随窗口比例变**——会变才是分家了。
        var errs: [Double] = []
        for size in [CGSize(width: 900, height: 600),
                     CGSize(width: 900, height: 470),
                     CGSize(width: 640, height: 600)] {
            // 只让眨眼这一块动：呼吸/摇摆/点头全部归零，否则整张图都在变，
            // 包围盒量到的就不是贴片了。
            guard let open = shot(assets, size: size, blink: 0),
                  let shut = shot(assets, size: size, blink: 1) else {
                print("渲染失败"); exit(1)
            }
            guard let box = changedBox(open, shut) else {
                print("\(Int(size.width))×\(Int(size.height))  没找到变化的像素"
                      + "  ✗ 贴片根本没画上"); exit(1)
            }
            let sx = size.width / CGFloat(assets.face.canvas.first ?? 1536)
            let sy = size.height / CGFloat(assets.face.canvas.last ?? 1024)
            let want = CGRect(x: CGFloat(rect.x) * sx, y: CGFloat(rect.y) * sy,
                              width: CGFloat(rect.w) * sx, height: CGFloat(rect.h) * sy)
            let err = max(max(abs(box.minX - want.minX), abs(box.minY - want.minY)),
                          max(abs(box.maxX - want.maxX), abs(box.maxY - want.maxY)))
            errs.append(err)
            // 拉得最扁的那一档，把脸那一块存下来，数字之外再给一张图看
            if abs(size.width / size.height - 1.91) < 0.05, let path = faceFitPath {
                let pad: CGFloat = 40
                let crop = NSRect(x: max(0, want.minX - pad), y: max(0, want.minY - pad),
                                  width: want.width + pad * 2,
                                  height: want.height + pad * 3)
                if let cg = shut.cgImage?.cropping(to: crop) {
                    let rep = NSBitmapImageRep(cgImage: cg)
                    if let png = rep.representation(using: .png, properties: [:]) {
                        try? png.write(to: URL(fileURLWithPath: path))
                        print("已写入 " + path)
                    }
                }
            }
            print(String(format: "%.0f×%.0f（%.2f:1）  贴片落在 (%.0f,%.0f)-(%.0f,%.0f)，"
                         + "按 sx/sy 应在 (%.0f,%.0f)-(%.0f,%.0f)  偏差 %.1fpx",
                         size.width, size.height, size.width / size.height,
                         box.minX, box.minY, box.maxX, box.maxY,
                         want.minX, want.minY, want.maxX, want.maxY, err))
        }
        let base = errs[0]
        let drift = errs.dropFirst().map { abs($0 - base) }.max() ?? 0
        print(String(format: "3:2 基准偏差 %.1fpx（贴片自带的透明余量），"
                     + "换比例后最多再差 %.1fpx  %@", base, drift,
                     drift <= 2 ? "✓ 贴片跟着窗口比例走"
                                : "✗ 拉窗口贴片会漂，检查 FaceOverlay 的 sx/sy"))
        exit(drift <= 2 ? 0 : 1)
    }

    /// 按给定尺寸渲一张角色图。`blink` 之外的动作全部归零。
    private static func shot(_ assets: SceneAssets, size: CGSize,
                             blink: Double) -> NSBitmapImageRep? {
        var pose = Pose()
        pose.blink = blink
        let view = RenderedSnozzy(assets: assets, palette: .day, pose: pose,
                                  face: FaceExpression(), headphones: false, t: 0)
            .frame(width: size.width, height: size.height)
        let renderer = ImageRenderer(content: view)
        renderer.scale = 1
        guard let image = renderer.nsImage, let tiff = image.tiffRepresentation
        else { return nil }
        return NSBitmapImageRep(data: tiff)
    }

    /// 两张图里不一样的那些像素的包围盒。
    private static func changedBox(_ a: NSBitmapImageRep,
                                   _ b: NSBitmapImageRep) -> CGRect? {
        let w = min(a.pixelsWide, b.pixelsWide), h = min(a.pixelsHigh, b.pixelsHigh)
        var lo = CGPoint(x: CGFloat.greatestFiniteMagnitude,
                         y: CGFloat.greatestFiniteMagnitude)
        var hi = CGPoint(x: -1, y: -1)
        for y in 0..<h {
            for x in 0..<w {
                guard let p = a.colorAt(x: x, y: y), let q = b.colorAt(x: x, y: y)
                else { continue }
                let d = abs(p.redComponent - q.redComponent)
                    + abs(p.greenComponent - q.greenComponent)
                    + abs(p.blueComponent - q.blueComponent)
                    + abs(p.alphaComponent - q.alphaComponent)
                // 阈值不能太低：抖动 alpha 的噪点会把包围盒撑到整张图（第 15 条）
                if d > 0.12 {
                    lo.x = min(lo.x, CGFloat(x)); lo.y = min(lo.y, CGFloat(y))
                    hi.x = max(hi.x, CGFloat(x)); hi.y = max(hi.y, CGFloat(y))
                }
            }
        }
        guard hi.x >= 0 else { return nil }
        return CGRect(x: lo.x, y: lo.y, width: hi.x - lo.x + 1, height: hi.y - lo.y + 1)
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

/// 城市本身的离线对照表。每格都走生产 `CyberCity`，所以这里不能偷偷用
/// 一套只为快照存在的几何；它既是视觉 QA 图，也是下面像素报告的固定取样合同。
private struct CityStrip: View {
    let variant: CityDiagnosticVariant

    init(variant: CityDiagnosticVariant = .normal) {
        self.variant = variant
    }

    static let cellWidth: CGFloat = 320
    static let cellHeight: CGFloat = 214
    static let labelHeight: CGFloat = 20
    static let labelGap: CGFloat = 2
    static let gap: CGFloat = 4
    static let padding: CGFloat = 4

    struct Sample: Identifiable {
        let id: String
        let label: String
        let palette: Palette
        let weather: Weather
    }

    static let samples: [Sample] = [
        Sample(id: "dawn", label: "DAWN", palette: .dawn, weather: .clear),
        Sample(id: "day", label: "DAY", palette: .day, weather: .clear),
        Sample(id: "day-rain", label: "DAY + RAIN", palette: .day, weather: .rain),
        Sample(id: "dusk", label: "DUSK", palette: .dusk, weather: .clear),
        Sample(id: "night", label: "NIGHT", palette: .night, weather: .clear),
    ]

    var body: some View {
        HStack(spacing: Self.gap) {
            ForEach(Self.samples) { sample in
                VStack(spacing: Self.labelGap) {
                    Text(sample.label)
                        .font(.system(size: 11, weight: .semibold, design: .rounded))
                        .foregroundStyle(.white.opacity(0.78))
                        .frame(height: Self.labelHeight)
                    CyberCity(palette: sample.palette, weather: sample.weather, t: 43,
                              diagnostic: variant)
                        .frame(width: Self.cellWidth, height: Self.cellHeight)
                        .clipped()
                }
            }
        }
        .padding(Self.padding)
        .background(Color(white: 0.08))
    }
}

/// `--citystrip` 的客观报告。所有区域都相对于一个固定 320×214 城市场景格，
/// 标签和外框不会进入统计；边缘能量用相邻像素的亮度差，低频灰雾不会伪装成
/// 近景轮廓。阈值只抓退化，不把「好不好看」压成一个数字。
private struct CityStripReport {
    enum Gate: String {
        case daySilhouette, rainSky, nightNeon

        var label: String {
            switch self {
            case .daySilhouette: "day silhouette contrast"
            case .rainSky: "rain sky bounds"
            case .nightNeon: "night neon ROI"
            }
        }
    }

    struct Check {
        let gate: Gate?
        let label: String
        let passed: Bool
    }

    private struct Region {
        let x, y, width, height: Int
    }

    struct Cell {
        let name: String
        let meanLuma: Double
        let meanSaturation: Double
        let farLuma: Double
        let nearLuma: Double
        let farEdge: Double
        let nearEdge: Double
        let clipped: Double
        let skyLuma: Double
        let neonLuma: Double
        let neonSaturation: Double
        let neonBrightRatio: Double
        let silhouetteBodyP75: Double
        let silhouetteSkyP25: Double
        let silhouetteContrast: Double
    }

    // These are deliberately fixed, documented ROIs rather than another copy of
    // CyberCity's geometry. Each is selected from the production strip:
    // a clear upper-left sky patch, the known horizontal sign corridor at night,
    // and a near tower body with no deliberate window/sign drawing in day.
    private static let rainSkyRegion = Region(x: 0, y: 0, width: 60, height: 55)
    private static let neonRegion = Region(x: 198, y: 100, width: 70, height: 35)
    private static let silhouetteRegion = Region(x: 180, y: 90, width: 40, height: 35)
    private static let silhouetteSkyRegion = Region(x: 180, y: 20, width: 40, height: 35)

    private let cells: [Cell]
    private let rainSkyDelta: Double
    private let rainLineRatio: Double

    init(rep: NSBitmapImageRep) {
        var values: [Cell] = []
        let sceneY = Int(CityStrip.padding + CityStrip.labelHeight + CityStrip.labelGap)
        for i in CityStrip.samples.indices {
            let x = Int(CityStrip.padding) + i * Int(CityStrip.cellWidth + CityStrip.gap)
            values.append(Self.measure(rep: rep, name: CityStrip.samples[i].id,
                                        x: x, y: sceneY,
                                        width: Int(CityStrip.cellWidth),
                                        height: Int(CityStrip.cellHeight)))
        }
        self.cells = values
        let daySky = values.first(where: { $0.name == "day" })?.skyLuma ?? 0
        let rainSky = values.first(where: { $0.name == "day-rain" })?.skyLuma ?? 0
        self.rainSkyDelta = rainSky - daySky
        let dayX = Int(CityStrip.padding) + Int(CityStrip.cellWidth + CityStrip.gap)
        let rainX = dayX + Int(CityStrip.cellWidth + CityStrip.gap)
        self.rainLineRatio = Self.rainLineRatio(rep: rep, dayX: dayX, rainX: rainX,
                                                y: sceneY)
    }

    func printAndExit() {
        printMetrics()
        let checks = evaluate()
        print("CITYSTRIP 自检")
        var passed = true
        for check in checks {
            print("  " + (check.passed ? "✓ " : "✗ ") + check.label)
            passed = passed && check.passed
        }
        print("CITYSTRIP " + (passed ? "PASS" : "FAIL"))
        exit(passed ? 0 : 1)
    }

    func printMetrics(prefix: String = "") {
        let lead = prefix.isEmpty ? "" : prefix + " "
        print(lead + "CITYSTRIP 像素报告（每格 320×214；远景 y=9…68、近景 y=94…196）")
        for cell in cells {
            print(String(format: "  %@%@  luma %.3f  sat %.3f  farLuma %.3f  nearLuma %.3f  farEdge %.4f  nearEdge %.4f  near/far %.2fx  clip %.2f%%",
                         lead, cell.name, cell.meanLuma, cell.meanSaturation,
                         cell.farLuma, cell.nearLuma, cell.farEdge, cell.nearEdge,
                         cell.nearEdge / max(cell.farEdge, 0.0001), cell.clipped * 100))
            if cell.name == "night" {
                print(String(format: "    night neon ROI: luma %.3f  sat %.3f  bright+chroma %.2f%%",
                             cell.neonLuma, cell.neonSaturation,
                             cell.neonBrightRatio * 100))
            }
            if cell.name == "day" {
                print(String(format: "    day no-light near ROI: body p75 %.3f  sky p25 %.3f  contrast %.3f",
                             cell.silhouetteBodyP75, cell.silhouetteSkyP25,
                             cell.silhouetteContrast))
            }
        }
        print(String(format: "  rain sky ROI vs clear: delta %.4f  bright-line lift %.2f%%",
                     rainSkyDelta, rainLineRatio * 100))
    }

    func evaluate() -> [Check] {
        guard let day = cells.first(where: { $0.name == "day" }),
              cells.contains(where: { $0.name == "day-rain" }),
              let dusk = cells.first(where: { $0.name == "dusk" }),
              let night = cells.first(where: { $0.name == "night" })
        else {
            return [Check(gate: nil, label: "样本完整", passed: false)]
        }

        let all = cells
        return [
            Check(gate: nil, label: "白天远景比近景更亮（大气透视）",
                  passed: day.farLuma > day.nearLuma + 0.035),
            Check(gate: .daySilhouette,
                  label: "白天无灯近景楼体与天空保持主体对比",
                  passed: day.silhouetteContrast > 0.20),
            Check(gate: nil, label: "白天近景局部边缘能量更高（轮廓没有被洗掉）",
                  passed: day.nearEdge > day.farEdge * 1.08),
            Check(gate: nil, label: "白天饱和度受控（不抢房间主体）",
                  passed: day.meanSaturation < 0.34),
            Check(gate: .rainSky,
                  label: "雨天空区相对晴天变化适中且高亮雨线不稀不密",
                  passed: rainSkyDelta >= -0.020 && rainSkyDelta <= 0.020
                      && rainLineRatio >= 0.008 && rainLineRatio <= 0.080),
            Check(gate: nil, label: "黄昏和白天保持明度分离",
                  passed: dusk.meanLuma < day.meanLuma - 0.020),
            Check(gate: nil, label: "夜晚保持暗部和霓虹色彩",
                  passed: night.meanLuma < day.meanLuma - 0.10 && night.meanSaturation > 0.045),
            Check(gate: .nightNeon,
                  label: "夜晚已知招牌区域有亮度与高饱和像素（不是深蓝天空）",
                  passed: night.neonLuma > 0.030
                      && night.neonSaturation > 0.60
                      && night.neonBrightRatio > 0.020),
            Check(gate: nil, label: "所有时段没有明显过曝",
                  passed: all.allSatisfy { $0.clipped < 0.030 }),
        ]
    }

    private static func measure(rep: NSBitmapImageRep, name: String,
                                x: Int, y: Int, width: Int, height: Int) -> Cell {
        // 远景取上半段（天空+远塔肩），近景取中下段（中/近塔顶、窗格和招牌）。
        // 只取最底部会漏掉近景轮廓，因为几何楼体都在底边闭合。
        let far = Int(Double(height) * 0.04)..<Int(Double(height) * 0.32)
        let near = Int(Double(height) * 0.44)..<Int(Double(height) * 0.92)
        let wholeStats = stats(rep: rep, x: x, y: y, width: width, rows: 0..<height)
        let farStats = stats(rep: rep, x: x, y: y, width: width, rows: far)
        let nearStats = stats(rep: rep, x: x, y: y, width: width, rows: near)
        let skyStats = regionStats(rep: rep, originX: x, originY: y,
                                   region: Self.rainSkyRegion)
        let neonStats = regionStats(rep: rep, originX: x, originY: y,
                                    region: Self.neonRegion)
        let bodyP75 = lumaQuantile(rep: rep, originX: x, originY: y,
                                   region: Self.silhouetteRegion, quantile: 0.75)
        let skyP25 = lumaQuantile(rep: rep, originX: x, originY: y,
                                  region: Self.silhouetteSkyRegion, quantile: 0.25)
        return Cell(name: name,
                    meanLuma: wholeStats.luma,
                    meanSaturation: wholeStats.saturation,
                    farLuma: farStats.luma,
                    nearLuma: nearStats.luma,
                    farEdge: farStats.edge,
                    nearEdge: nearStats.edge,
                    clipped: wholeStats.clipped,
                    skyLuma: skyStats.luma,
                    neonLuma: neonStats.luma,
                    neonSaturation: neonStats.saturation,
                    neonBrightRatio: brightChromaRatio(rep: rep, originX: x, originY: y,
                                                       region: Self.neonRegion),
                    silhouetteBodyP75: bodyP75,
                    silhouetteSkyP25: skyP25,
                    silhouetteContrast: max(0, skyP25 - bodyP75))
    }

    private struct Stats {
        var luma = 0.0
        var saturation = 0.0
        var edge = 0.0
        var clipped = 0.0
    }

    private static func stats(rep: NSBitmapImageRep, x: Int, y: Int,
                              width: Int, rows: Range<Int>) -> Stats {
        var result = Stats()
        var count = 0
        var edgeCount = 0
        for row in rows {
            for col in 0..<width {
                guard let pixel = rgb(rep, x: x + col, y: y + row) else { continue }
                result.luma += pixel.luma
                result.saturation += pixel.saturation
                if pixel.r >= 0.995 && pixel.g >= 0.995 && pixel.b >= 0.995 {
                    result.clipped += 1
                }
                count += 1
                if col > 0, let left = rgb(rep, x: x + col - 1, y: y + row) {
                    result.edge += abs(pixel.luma - left.luma)
                    edgeCount += 1
                }
                if row > rows.lowerBound,
                   let above = rgb(rep, x: x + col, y: y + row - 1) {
                    result.edge += abs(pixel.luma - above.luma)
                    edgeCount += 1
                }
            }
        }
        guard count > 0 else { return result }
        result.luma /= Double(count)
        result.saturation /= Double(count)
        result.clipped /= Double(count)
        if edgeCount > 0 { result.edge /= Double(edgeCount) }
        return result
    }

    private static func regionStats(rep: NSBitmapImageRep, originX: Int, originY: Int,
                                    region: Region) -> Stats {
        stats(rep: rep, x: originX + region.x, y: originY + region.y,
              width: region.width, rows: 0..<region.height)
    }

    private static func lumaQuantile(rep: NSBitmapImageRep, originX: Int, originY: Int,
                                     region: Region, quantile: Double) -> Double {
        var values: [Double] = []
        values.reserveCapacity(region.width * region.height)
        for row in 0..<region.height {
            for col in 0..<region.width {
                if let pixel = rgb(rep, x: originX + region.x + col,
                                   y: originY + region.y + row) {
                    values.append(pixel.luma)
                }
            }
        }
        guard !values.isEmpty else { return 0 }
        values.sort()
        let index = min(values.count - 1,
                        max(0, Int((Double(values.count - 1) * quantile).rounded())))
        return values[index]
    }

    private static func brightChromaRatio(rep: NSBitmapImageRep, originX: Int,
                                          originY: Int, region: Region) -> Double {
        var total = 0
        var bright = 0
        for row in 0..<region.height {
            for col in 0..<region.width {
                guard let pixel = rgb(rep, x: originX + region.x + col,
                                      y: originY + region.y + row) else { continue }
                total += 1
                if pixel.luma >= 0.08 && pixel.saturation >= 0.60 { bright += 1 }
            }
        }
        return total > 0 ? Double(bright) / Double(total) : 0
    }

    private static func rainLineRatio(rep: NSBitmapImageRep, dayX: Int, rainX: Int,
                                      y: Int) -> Double {
        let region = rainSkyRegion
        var total = 0
        var lifted = 0
        for row in 0..<region.height {
            for col in 0..<region.width {
                guard let day = rgb(rep, x: dayX + region.x + col,
                                    y: y + region.y + row),
                      let rain = rgb(rep, x: rainX + region.x + col,
                                     y: y + region.y + row) else { continue }
                total += 1
                // Compare to the clear production cell, not to a guessed white
                // threshold. This isolates the high-bright rain stroke from the
                // intentional cool base-color difference between clear and rain.
                if rain.luma - day.luma > 0.030 { lifted += 1 }
            }
        }
        return total > 0 ? Double(lifted) / Double(total) : 0
    }

    private struct Pixel {
        let r: Double
        let g: Double
        let b: Double

        var luma: Double { 0.2126 * r + 0.7152 * g + 0.0722 * b }
        var saturation: Double {
            let hi = max(r, max(g, b)), lo = min(r, min(g, b))
            return hi > 0 ? (hi - lo) / hi : 0
        }
    }

    private static func rgb(_ rep: NSBitmapImageRep, x: Int, y: Int) -> Pixel? {
        guard let color = rep.colorAt(x: x, y: y),
              let srgb = color.usingColorSpace(.sRGB)
        else { return nil }
        return Pixel(r: Double(srgb.redComponent),
                     g: Double(srgb.greenComponent),
                     b: Double(srgb.blueComponent))
    }
}

/// 五种 Activity 在交付房间上的真实动态层。数值自检抓不到坐标偏移，
/// 这张图专门看侧屏、蒸汽和手机有没有画到它们本体之外。
private struct ActivityStrip: View {
    let assets: SceneAssets
    private static let cellW: CGFloat = 512
    private static let columns = 3

    var body: some View {
        let activities = SnozzyActivity.allCases
        let w = Self.cellW, h = w / 1.5
        VStack(spacing: 3) {
            ForEach(0..<((activities.count + Self.columns - 1) / Self.columns), id: \.self) { row in
                HStack(spacing: 3) {
                    ForEach(0..<Self.columns, id: \.self) { col in
                        let i = row * Self.columns + col
                        if i < activities.count {
                            cell(activities[i], w: w, h: h)
                        } else {
                            Color.clear.frame(width: w, height: h)
                        }
                    }
                }
            }
        }
        .padding(4)
        .background(Color(white: 0.10))
    }

    private func cell(_ activity: SnozzyActivity, w: CGFloat, h: CGFloat) -> some View {
        let playing = activity == .resting
        let cue = ActivityRig.preview(activity, playing: playing,
                                      phone: activity == .takingBreak ? 1 : 0)
        return ZStack(alignment: .topLeading) {
            ZStack(alignment: .topLeading) {
                PaintedRoomBackdrop(assets: assets, palette: .day, weather: .clear, t: 43)
                PaintedRoomForeground(assets: assets, palette: .day)
                PaintedRoomActivityOverlay(assets: assets, cue: cue, palette: .day,
                                           playing: playing, t: 43)
            }
            .frame(width: w, height: h)
            Text(activity.rawValue)
                .font(.system(size: 13, weight: .semibold, design: .rounded))
                .foregroundStyle(.white.opacity(0.82))
                .padding(.horizontal, 9).padding(.vertical, 5)
                .background(.black.opacity(0.38), in: Capsule())
                .padding(8)
        }
        .frame(width: w, height: h)
        .clipped()
    }
}

/// 近景切换逐档平铺：镜头从常态推到最近，中间换成托腮。
///
/// 每一格都是**整个窗口**（按真实层序画满），不是裁一小块——近景要检查的
/// 恰恰是取景，裁过就看不出头顶切没切掉了。
private struct CloseUpStrip: View {
    let assets: SceneAssets
    let headphones: Bool

    /// 每格画多宽。窗口是 3:2，按这个宽度反推高度。
    private static let cellW: CGFloat = 330
    /// nil 是真实常态，-1 是发布的 2× 常态起点，随后八张中间帧和终态。
    private static let samples: [Int?] = [nil, -1]
        + (0...CloseUp.transitionFrames).map(Optional.some)
    private static let columns = 4

    var body: some View {
        let cw = Self.cellW, ch = cw / 1.5
        VStack(spacing: 3) {
            ForEach(0..<((Self.samples.count + Self.columns - 1) / Self.columns), id: \.self) { row in
                HStack(spacing: 3) {
                    ForEach(0..<Self.columns, id: \.self) { col in
                        let i = row * Self.columns + col
                        if i < Self.samples.count {
                            cell(Self.samples[i], w: cw, h: ch)
                        } else {
                            Color.clear.frame(width: cw, height: ch)
                        }
                    }
                }
            }
        }
        .padding(4)
        .background(Color(white: 0.12))
    }

    /// 一档。镜头进度从骨骼帧推导，和生产时间轴的九拍完全一致。
    ///
    /// 层序和缩放变换要和 `RootView.SceneStack` 完全一致，否则这条判据
    /// 量的就是另一个东西了。**变换那一半是共用的**（`SceneCamera`，
    /// 第 46 条），层序这一半只能照抄——改了那边的层序，这里也要跟着改。
    private func cell(_ chinFrame: Int?, w: CGFloat, h: CGFloat) -> some View {
        let push: CGFloat
        if let frame = chinFrame, frame >= 0 {
            push = min(1, CGFloat(frame + 1) / CGFloat(CloseUp.transitionFrames + 1))
        } else {
            push = 0
        }
        let zoom = 1 + (SceneCamera.zoom - 1) * push
        let t = 3.0
        var pose = SnozzyRig.pose(time: t, kick: 0, playing: false)
        pose.blink = 0
        let face = FaceRig.expression(t: t, playing: false, mood: 0.62, drowsy: 0,
                                      working: false, speaking: false)
        // 头和气泡的锚点抄自 `SceneStack`（figureScale 0.78、headY 0.382）
        let figure = h * 0.78
        let bubble = SceneCamera.penned(
            SceneCamera.point(w / 2 + figure * 0.20, h * 0.382 - figure * 0.22,
                              in: CGSize(width: w, height: h), zoom: zoom),
            in: CGSize(width: w, height: h))
        return ZStack {
            ZStack(alignment: .topLeading) {
                PaintedRoomBackdrop(assets: assets, palette: .day, weather: .clear, t: t)
                RenderedSnozzy(assets: assets, palette: .day, pose: pose, face: face,
                               headphones: headphones, chinFrame: chinFrame, t: t)
                PaintedRoomForeground(assets: assets, palette: .day)
                PaintedRoomActivityOverlay(
                    assets: assets,
                    cue: ActivityRig.preview(.resting, playing: false),
                    palette: .day, playing: false, t: t)
                TypingHands(assets: assets, palette: .day,
                            frame: TypingRig.frame(at: t, working: false,
                                                   frames: assets.hands.frames,
                                                   chin: (chinFrame ?? -1) >= 0
                                                       ? assets.hands.chin : nil),
                            chinFrame: chinFrame)
            }
            .frame(width: w, height: h)
            .scaleEffect(zoom, anchor: SceneCamera.unitAnchor)

            // 气泡：推到头之后它会被一起推出去，得确认还在窗口里
            if (chinFrame ?? -1) >= 0 {
                SpeechBubble(text: "「重写导出模块」还挂在上面呢。", palette: .day)
                    .fixedSize()
                    .position(bubble)
            }
        }
        .frame(width: w, height: h)
        .clipped()
    }
}

/// 敲键盘的手，逐帧平铺。**连房间和桌子一起画**——手的意义就是盖在桌面层
/// 上面，只画一层手看不出层序对没对。
private struct HandStrip: View {
    let assets: SceneAssets

    /// 每格里键盘那一块画多宽。
    private static let keysW: CGFloat = 300

    var body: some View {
        let m = assets.hands
        let canvasW = CGFloat(m.canvas.first ?? 1536)
        let canvasH = CGFloat(m.canvas.count > 1 ? m.canvas[1] : 1024)
        let r = m.rect
        // 取手那一块并往外放宽，把键盘和桌沿都框进来
        let x0 = CGFloat(r.x) - 40, y0 = CGFloat(r.y) - 70
        let x1 = CGFloat(r.x + r.w) + 40, y1 = CGFloat(r.y + r.h) + 40
        let scale = Self.keysW / (x1 - x0)
        let cw = (x1 - x0) * scale, ch = (y1 - y0) * scale

        VStack(spacing: 2) {
            ForEach(0..<((m.frames + 1) / 2), id: \.self) { row in
                HStack(spacing: 2) {
                    ForEach(0..<2, id: \.self) { col in
                        let i = row * 2 + col
                        if i < m.frames {
                            cell(i, canvasW: canvasW * scale, canvasH: canvasH * scale,
                                 crop: CGRect(x: x0 * scale, y: y0 * scale,
                                              width: cw, height: ch))
                        } else {
                            Color.clear.frame(width: cw, height: ch)
                        }
                    }
                }
            }
        }
        .padding(4)
        .background(Color(white: 0.12))
    }

    private func cell(_ i: Int, canvasW: CGFloat, canvasH: CGFloat,
                      crop: CGRect) -> some View {
        let pose = SnozzyRig.pose(time: 3.0, kick: 0, playing: false)
        let face = FaceRig.expression(t: 3.0, playing: false, mood: 0.5, drowsy: 0,
                                      working: true, speaking: false)
        return ZStack(alignment: .topLeading) {
            // 真实层序：房间 → 角色 → 桌子 → 手
            PaintedRoomBackdrop(assets: assets, palette: .day, weather: .clear, t: 3)
            RenderedSnozzy(assets: assets, palette: .day, pose: pose, face: face,
                           headphones: false, t: 3)
            PaintedRoomForeground(assets: assets, palette: .day)
            TypingHands(assets: assets, palette: .day, frame: i)
        }
        .frame(width: canvasW, height: canvasH)
        .offset(x: -crop.minX, y: -crop.minY)
        .frame(width: crop.width, height: crop.height, alignment: .topLeading)
        .clipped()
    }
}

/// 表情节拍的逐格平铺。只取脸那一块。
private struct FaceStrip: View {
    let assets: SceneAssets
    let start: Double
    /// 在每一档里往后取多少秒。取保持段的中点。
    let offset: Double

    static let count = 28
    static let cols = 7
    /// 脸那一块画多宽。脸在画布上只有八十来像素，得放大好几倍才看得清。
    private static let faceW: CGFloat = 150

    /// 每格换一组状态，一张图里同时看到不同心情/是否在放歌/是否在专注。
    static func mood(_ i: Int) -> Double { [0.45, 0.62, 0.88, 0.55][i % 4] }
    static func playing(_ i: Int) -> Bool { i % 3 == 0 }
    static func working(_ i: Int) -> Bool { i % 5 < 2 }

    /// 把一个表情压成一句可比对的描述，用来统计"出现了几种脸"。
    static func describe(_ e: FaceExpression) -> String {
        func lv(_ v: Double) -> String { v < 0.15 ? "" : v < 0.5 ? "轻" : "强" }
        var parts: [String] = []
        for (n, v) in [("眯眼笑", e.eyeSmile), ("柔和", e.eyeSoft),
                       ("睁大", e.eyeWide), ("垂眼", e.eyeSad)] where !lv(v).isEmpty {
            parts.append(n + lv(v))
        }
        for (n, v) in [("笑", e.mouthSmile), ("张嘴", e.mouthOpen),
                       ("哦", e.mouthO)] where !lv(v).isEmpty {
            parts.append(n + lv(v))
        }
        if e.lookY > 0.45 { parts.append("抬眼") }
        if e.lookY < -0.45 { parts.append("低头") }
        return parts.isEmpty ? "中性" : parts.joined(separator: "+")
    }

    var body: some View {
        let canvasW = assets.legs.canvasW, canvasH = assets.legs.canvasH
        // 脸那一块，从贴片清单里推：取所有贴片的并集再往外放宽
        let rects = assets.face.patches.values
        let x0 = CGFloat(rects.map(\.x).min() ?? 660) - 16
        let y0 = CGFloat(rects.map(\.y).min() ?? 330) - 22
        let x1 = CGFloat(rects.map { $0.x + $0.w }.max() ?? 780) + 16
        let y1 = CGFloat(rects.map { $0.y + $0.h }.max() ?? 410) + 16
        let scale = Self.faceW / (x1 - x0)
        let cw = (x1 - x0) * scale, ch = (y1 - y0) * scale
        let rows = (Self.count + Self.cols - 1) / Self.cols

        VStack(spacing: 2) {
            ForEach(0..<rows, id: \.self) { row in
                HStack(spacing: 2) {
                    ForEach(0..<Self.cols, id: \.self) { col in
                        let i = row * Self.cols + col
                        if i < Self.count {
                            cell(i, canvasW: canvasW * scale, canvasH: canvasH * scale,
                                 crop: CGRect(x: x0 * scale, y: y0 * scale,
                                              width: cw, height: ch))
                        } else {
                            Color.clear.frame(width: cw, height: ch)
                        }
                    }
                }
            }
        }
        .padding(4)
        .background(Color(white: 0.12))
    }

    private func cell(_ i: Int, canvasW: CGFloat, canvasH: CGFloat,
                      crop: CGRect) -> some View {
        let t = start + Double(i) * FaceRig.slot + offset
        var pose = SnozzyRig.pose(time: t, kick: 0, playing: Self.playing(i),
                                  mood: Self.mood(i))
        pose.blink = 0                      // 挡掉眨眼，否则半数格子只是闭着眼
        let face = FaceRig.expression(t: t, playing: Self.playing(i),
                                      mood: Self.mood(i), drowsy: 0,
                                      working: Self.working(i), speaking: false)
        return ZStack(alignment: .topLeading) {
            Color(white: 0.85)
            RenderedSnozzy(assets: assets, palette: .day, pose: pose, face: face,
                           headphones: false, t: t)
        }
        .frame(width: canvasW, height: canvasH)
        .offset(x: -crop.minX, y: -crop.minY)
        .frame(width: crop.width, height: crop.height, alignment: .topLeading)
        .clipped()
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
                           face: FaceRig.expression(t: t, playing: false, mood: 0.5,
                                                    drowsy: 0, working: false,
                                                    speaking: false),
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

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

    /// 播放中耳机的低谷/峰值与暂停基线。普通姿势、托腮终态各走
    /// 昼/夜两套真实 `RenderedSnozzy`，并输出 mask 覆盖和泄漏报告。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --headphonestrip out.png
    /// ```
    static var headphoneStripPath: String? {
        arg("--headphonestrip")
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

    /// 三条长动作（伸懒腰 / 喝咖啡 / 玩手机）：素材契约 + 逐帧时间轴。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --actioncheck
    /// ```
    ///
    /// 不出图。这几条都不推镜头，所以"取景"那一半不存在；真正会坏的是
    /// **素材契约**（8 帧 + 终态 + 停留列 + 耳机 + 手层 + 逐档贴片，
    /// 少一样就该整套停用）和**顺序**（起落必须共用同一列，停留必须整圈
    /// 循环再回终态）。这两样截图都验不了。
    static var actionCheck: Bool {
        CommandLine.arguments.contains("--actioncheck")
    }

    /// 迷你播放器和桌宠长什么样。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --compactstrip out.png
    /// ```
    static var compactStripPath: String? { arg("--compactstrip") }

    /// 动作面板长什么样。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --actionpanel out.png
    /// ```
    ///
    /// 这个面板的每一行都调生产入口，逻辑归 `--actioncheck` 和
    /// `--activitycheck` 验；这里只把它**照真实视图渲一张图**，
    /// 确认排版没崩、该禁用的行禁用了。比去操纵鼠标点开 popover 可靠得多——
    /// 那条路要跟真实光标抢控制权，而且在别人桌面上乱点很危险。
    static var actionPanelPath: String? {
        arg("--actionpanel")
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

    /// 番茄钟自然完成的短表情与侧屏反馈。五个时间点共用同一个生产时间，
    /// 只改变 `lastCelebration` 相对它的年龄，因此 before/after 可以做逐像素
    /// 基线比较；同时覆盖昼/夜、说话、困倦和托腮注意力样本。
    ///
    /// ```
    /// WithSnozzy.app/Contents/MacOS/WithSnozzy --celebrationstrip out.png
    /// ```
    static var celebrationStripPath: String? {
        arg("--celebrationstrip")
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

    static func runHeadphoneStrip(path: String) {
        let assets = SceneAssets()
        assets.load()
        guard assets.hasRenderedCharacter, let normalMask = assets.headphoneMask else {
            print("耳机成对素材或普通姿态 mask 没加载到（\(assets.loadedFrom ?? "没找到 Assets 目录")）")
            exit(1)
        }
        guard assets.hasCompleteChinMotion,
              assets.hasCompleteHeadphoneMasks,
              let baseMask = assets.chinHeadphoneBaseMask,
              assets.chinHeadphoneMasks.count == CloseUp.transitionFrames + 1 else {
            print("托腮 -1/00…08 耳机素材或 mask 不完整；先跑生成脚本与 2× closeup 管线")
            exit(1)
        }

        let renderer = ImageRenderer(content: HeadphoneStrip(assets: assets))
        renderer.scale = 1
        guard let image = renderer.nsImage,
              let tiff = image.tiffRepresentation,
              let rep = NSBitmapImageRep(data: tiff),
              let png = rep.representation(using: .png, properties: [:]) else {
            print("耳机快照渲染失败")
            exit(1)
        }

        do {
            try png.write(to: URL(fileURLWithPath: path))
            print("已写入 \(path)  (\(rep.pixelsWide)×\(rep.pixelsHigh))")
            let report = HeadphoneStripReport(assets: assets,
                                               normalMask: normalMask,
                                               baseMask: baseMask,
                                               chinMasks: assets.chinHeadphoneMasks,
                                               finalMask: assets.chinHeadphoneMasks[CloseUp.transitionFrames])
            let passed = report.printAndEvaluate()
            exit(passed ? 0 : 1)
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

    /// 判据专用的透明底格子。桌宠模式**任何一层不透明的背景都会在桌面上
    /// 留下一个方块**，而在纯色底上看不出来——垫格子才看得见。
    private struct Checkerboard: View {
        var body: some View {
            Canvas { ctx, size in
                let n = 10.0
                for y in stride(from: 0.0, to: size.height, by: n) {
                    for x in stride(from: 0.0, to: size.width, by: n) {
                        let dark = (Int(x / n) + Int(y / n)) % 2 == 0
                        ctx.fill(Path(CGRect(x: x, y: y, width: n, height: n)),
                                 with: .color(dark ? .white.opacity(0.22)
                                                   : .black.opacity(0.22)))
                    }
                }
            }
        }
    }

    /// 迷你播放器和桌宠这两个形态照真实视图渲一张对照图。
    ///
    /// **尺寸必须是真实窗口能达到的尺寸**（第 72 条）：这两个形态的默认窗口
    /// 是 340×280 和 300×320，判据就照这两个画。画大了，"她的头顶被切掉"
    /// 这类只在小窗口出现的毛病就照不出来。
    ///
    /// 报的数是**角色占了这一格的多少**：这两个形态里除了她几乎没别的东西，
    /// 占比太小就是"桌面上一个小不点"，太大就是"一张脸怼在屏幕上"。
    static func runCompactStrip(path: String) {
        let state = AppState()
        state.sceneAssets.load()
        let mini = WindowMode.mini.defaultSize
        let pet = WindowMode.pet.defaultSize
        let view = HStack(alignment: .top, spacing: 0) {
            MiniView().environment(state)
                .frame(width: mini.width, height: mini.height)
                .clipped()
            PetView().environment(state)
                .frame(width: pet.width, height: pet.height)
                .clipped()
                // 桌宠背景必须是透明的，垫一层格子才看得出有没有多余的底
                .background(Checkerboard())
        }
        let renderer = ImageRenderer(content: view)
        renderer.scale = 2
        guard let image = renderer.nsImage,
              let tiff = image.tiffRepresentation,
              let rep = NSBitmapImageRep(data: tiff),
              let png = rep.representation(using: .png, properties: [:]) else {
            print("迷你/桌宠渲染失败")
            exit(1)
        }
        do {
            try png.write(to: URL(fileURLWithPath: path))
            print("已写入 \(path)  (\(Int(image.size.width))×\(Int(image.size.height)))")
            print("角色渲染版素材 \(state.sceneAssets.hasRenderedCharacter ? "齐" : "缺")"
                  + "，迷你 \(Int(mini.width))×\(Int(mini.height))"
                  + "，桌宠 \(Int(pet.width))×\(Int(pet.height))")
            exit(0)
        } catch {
            print("写入失败: \(error.localizedDescription)")
            exit(1)
        }
    }

    /// 把动作面板照真实视图渲一张图。
    static func runActionPanel(path: String) {
        let state = AppState()
        state.sceneAssets.load()
        let view = ActionPanel(palette: .day)
            .environment(state)
            .background(Color(white: 0.16))
        let renderer = ImageRenderer(content: view)
        renderer.scale = 2
        guard let image = renderer.nsImage,
              let tiff = image.tiffRepresentation,
              let rep = NSBitmapImageRep(data: tiff),
              let png = rep.representation(using: .png, properties: [:]) else {
            print("动作面板渲染失败")
            exit(1)
        }
        do {
            try png.write(to: URL(fileURLWithPath: path))
            print("已写入 \(path)  (\(Int(image.size.width))×\(Int(image.size.height)))")
            let ready = ActionKind.allCases
                .map { "\($0.label)\(state.sceneAssets.hasCompleteMotion($0) ? "齐" : "缺")" }
                .joined(separator: "、")
            print("托腮素材 \(state.sceneAssets.hasCompleteChinMotion ? "齐" : "缺")，" + ready)
            exit(0)
        } catch {
            print("写入失败: \(error.localizedDescription)")
            exit(1)
        }
    }

    /// 三条长动作：素材契约 + 走一遍真实时间轴。
    ///
    /// 一条动作有两种坏法，而它们在画面上长得一样（"她不动"）：素材没齐
    /// 所以整套没启用，和素材齐了但时间轴写错。所以这两件事分开报。
    static func runActionCheck() -> Bool {
        let assets = SceneAssets()
        assets.load()
        var ok = true
        func check(_ label: String, _ pass: Bool) {
            ok = ok && pass
            print("  " + (pass ? "✓ " : "✗ ") + label)
        }

        for kind in ActionKind.allCases {
            print("== \(kind.label)（\(kind.rawValue)）==")
            let set = assets.actionSets[kind]
            let holds = set?.manifest.holdFrames ?? 0
            check("2× 素材契约完整（8 帧 + 终态 + \(holds) 停留帧 + 耳机 + 手层 + "
                  + "\((set?.manifest.poseCount).map(String.init) ?? "?") 套贴片）",
                  set != nil)
            guard let set else {
                print("  先跑 Blender/render_action.py 和 Scripts/action_frames.py")
                ok = false
                continue
            }
            let rect = set.manifest.handRect
            check("手层矩形和常态一致（\(rect.w)×\(rect.h)）",
                  rect.w == assets.hands.rect.w && rect.h == assets.hands.rect.h)
            check("上半身切得比常态深（\(set.manifest.bodyRect.h) > \(assets.legs.seam)）",
                  set.manifest.bodyRect.h > assets.legs.seam)
            // 停留那一列是"举上去之后人还活着"的全部来源。没有它，动作就是
            // 举起来冻两秒再放下——用户报的"像做操"正是这个。
            check("有停留帧（\(holds) 张，循环播）", holds > 0)
            check("每一档都有自己的一套面部贴片（\(set.faceSets.count) 套）",
                  set.faceSets.count == set.manifest.poseCount)
            // 停留期间桌面手层复用终态那一张：那段时间桌上那只手不动，
            // 道具也早就高过手层裁切框了。
            check("桌面手层：中间帧 \(set.handFrames.count) 张 + 终态一张",
                  set.handFrames.count == set.manifest.frames)

            if let range = kind.idleRange {
                let fresh = ActionRig(kind)
                fresh.startScheduling()
                let due = fresh.secondsUntilNext
                check("自发间隔 \(Int(range.lowerBound))…\(Int(range.upperBound)) 秒，"
                      + "刚启动不会立刻演（还有 \(Int(due)) 秒）",
                      due > range.lowerBound - 5 && due <= range.upperBound)
                fresh.stopScheduling()
            } else {
                check("不自发（等外部触发）", true)
            }

            // 走一遍真实时间轴。停留圈数是随机的，所以盯着 `isActive` 采样。
            let rig = ActionRig(kind)
            rig.holdFrames = holds
            var sequence: [String] = []
            let done = DispatchSemaphore(value: 0)
            Task { @MainActor in
                rig.begin(force: true)
                while rig.isActive {
                    let label = rig.frame.map(String.init) ?? "nil"
                    if sequence.last != label { sequence.append(label) }
                    try? await Task.sleep(for: .milliseconds(8))
                }
                let label = rig.frame.map(String.init) ?? "nil"
                if sequence.last != label { sequence.append(label) }
                done.signal()
            }
            while done.wait(timeout: .now()) == .timedOut {
                RunLoop.main.run(until: Date().addingTimeInterval(0.02))
            }
            print("  逐帧时间轴：" + sequence.joined(separator: " → "))
            let final = ActionRig.transitionFrames
            let forward = ["-1"] + (0...final).map(String.init)
            let reverse = stride(from: final - 1, through: 0, by: -1)
                .map(String.init) + ["-1", "nil"]
            check("常态 base → 00…0\(final) 正放完整", sequence.starts(with: forward))
            check("0\(final) → 倒放同一列 → base → 常态",
                  sequence.suffix(reverse.count) == ArraySlice(reverse))
            // 停留那一段必须**循环走完整圈**，而且首尾都回到终态：
            // 停在半圈上再倒放，画面上就是从一个歪着的脖子硬切回正。
            let holdLabels = sequence.dropFirst(forward.count)
                .prefix(while: { Int($0).map { $0 > final } ?? false })
            let cycleLength = holds
            check("停留是整圈循环（\(holdLabels.count) 拍，每圈 \(cycleLength) 张）",
                  holds == 0 || (holdLabels.count % cycleLength == 0
                                 && holdLabels.count >= cycleLength))
            check("停留结束回到终态再倒放",
                  holds == 0 || sequence.dropFirst(forward.count + holdLabels.count)
                    .first == String(final))
        }

        print("ACTION " + (ok ? "全部通过" : "有不合格项"))
        return ok
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

    static func runCelebrationStrip(path: String) {
        let assets = SceneAssets()
        assets.load()
        guard assets.isAvailable, assets.hasRenderedCharacter else {
            print("房间或角色素材没加载到（\(assets.loadedFrom ?? "没找到 Assets 目录")）")
            exit(1)
        }
        let renderer = ImageRenderer(content: CelebrationStrip(assets: assets))
        renderer.scale = 1
        guard let image = renderer.nsImage,
              let tiff = image.tiffRepresentation,
              let rep = NSBitmapImageRep(data: tiff),
              let png = rep.representation(using: .png, properties: [:]) else {
            print("庆祝快照渲染失败")
            exit(1)
        }
        do {
            try png.write(to: URL(fileURLWithPath: path))
            print("已写入 \(path)  (\(rep.pixelsWide)×\(rep.pixelsHigh))")
            let report = CelebrationStripReport(assets: assets, rep: rep)
            exit(report.printAndEvaluate() ? 0 : 1)
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

/// 专注段完成反馈的真实生产层平铺。每一行固定同一条时间线，只改变
/// `lastCelebration` 的相对年龄，所以表情和侧屏以外的像素不会因为墙钟漂移。
private struct CelebrationStrip: View {
    enum Phase: Int, CaseIterable, Identifiable {
        case before, rise, peak, fall, after

        var id: Int { rawValue }

        /// 相对完成时刻的年龄；before/after 都在短包络之外。
        var age: Double {
            switch self {
            case .before: -0.05
            case .rise: 0.15
            case .peak: 0.72
            case .fall: 1.35
            case .after: 2.10
            }
        }

        var label: String {
            switch self {
            case .before: "BEFORE"
            case .rise: "RISE"
            case .peak: "PEAK"
            case .fall: "FALL"
            case .after: "AFTER"
            }
        }
    }

    struct Sample: Identifiable {
        let id: String
        let label: String
        let palette: Palette
        let activity: SnozzyActivity
        let playing: Bool
        let mood: Double
        let drowsy: Double
        let working: Bool
        let speaking: Bool
        let closeup: Bool
    }

    let assets: SceneAssets

    static let samples: [Sample] = [
        Sample(id: "day", label: "DAY · NORMAL", palette: .day,
               activity: .typing, playing: false, mood: 0.58, drowsy: 0,
               working: true, speaking: false, closeup: false),
        Sample(id: "night-drowsy", label: "NIGHT · DROWSY", palette: .night,
               activity: .resting, playing: false, mood: 0.50, drowsy: 0.90,
               working: false, speaking: false, closeup: false),
        Sample(id: "day-speaking", label: "DAY · SPEAKING", palette: .day,
               activity: .planning, playing: false, mood: 0.58, drowsy: 0,
               working: true, speaking: true, closeup: false),
        Sample(id: "night-closeup", label: "NIGHT · CLOSE-UP", palette: .night,
               activity: .resting, playing: false, mood: 0.50, drowsy: 0,
               working: false, speaking: false, closeup: true),
    ]

    static let cellW: CGFloat = 360
    static let cellH: CGFloat = cellW / 1.5
    static let gap: CGFloat = 3
    static let padding: CGFloat = 4

    var body: some View {
        VStack(spacing: Self.gap) {
            HStack(spacing: Self.gap) {
                ForEach(Self.Phase.allCases) { phase in
                    Text(phase.label)
                        .font(.system(size: 10, weight: .semibold, design: .rounded))
                        .foregroundStyle(.white.opacity(0.74))
                        .frame(width: Self.cellW, height: 18)
                }
            }
            ForEach(Self.samples) { sample in
                HStack(spacing: Self.gap) {
                    ForEach(Self.Phase.allCases) { phase in
                        CelebrationCell(assets: assets, sample: sample, phase: phase)
                    }
                }
            }
        }
        .padding(Self.padding)
        .background(Color(white: 0.10))
    }
}

/// 一个单元格直接复用生产角色、房间、桌面、活动层和手层的顺序。
private struct CelebrationCell: View {
    let assets: SceneAssets
    let sample: CelebrationStrip.Sample
    let phase: CelebrationStrip.Phase
    var celebrationOffset: CGSize = .zero
    var celebrationClipDisabled = false

    private let t = 43.0

    private var amount: Double {
        // 所有格子的墙钟固定为同一个 t；只有完成时刻相对它的位置变化。
        AppState.celebrationAmount(since: t - phase.age, at: t)
    }

    var body: some View {
        let cue = ActivityRig.preview(sample.activity, playing: sample.playing)
        let faceActivity = sample.closeup
            ? ActivityRig.attentionCue(from: cue, amount: 1)
            : cue
        let face = FaceRig.expression(
            t: t, playing: sample.playing, mood: sample.mood,
            drowsy: sample.drowsy, working: sample.working,
            speaking: sample.speaking, activity: faceActivity,
            celebration: amount)
        let pose = SnozzyRig.pose(time: t, kick: 0,
                                  playing: sample.playing, mood: sample.mood,
                                  drowsy: sample.drowsy)
        let chinFrame: Int? = sample.closeup && assets.hasCompleteChinMotion
            ? CloseUp.transitionFrames : nil
        let zoom: CGFloat = sample.closeup ? SceneCamera.zoom : 1

        return ZStack(alignment: .topLeading) {
            ZStack(alignment: .topLeading) {
                PaintedRoomBackdrop(assets: assets, palette: sample.palette,
                                    weather: .clear, t: t)
                RenderedSnozzy(assets: assets, palette: sample.palette,
                               pose: pose, face: face, headphones: false,
                               chinFrame: chinFrame, t: t)
                PaintedRoomForeground(assets: assets, palette: sample.palette)
                PaintedRoomActivityOverlay(
                    assets: assets, cue: cue, palette: sample.palette,
                    playing: sample.playing, t: t, celebration: amount,
                    celebrationClipDisabled: celebrationClipDisabled,
                    celebrationOffset: celebrationOffset)
                if assets.hands.isUsable {
                    TypingHands(assets: assets, palette: sample.palette,
                                frame: TypingRig.frame(
                                    at: t, working: sample.working,
                                    frames: assets.hands.frames,
                                    chin: chinFrame == nil ? nil : assets.hands.chin,
                                    activity: cue),
                                chinFrame: chinFrame)
                }
            }
            .frame(width: CelebrationStrip.cellW, height: CelebrationStrip.cellH)
            .scaleEffect(zoom, anchor: SceneCamera.unitAnchor)

            Text(sample.label)
                .font(.system(size: 10, weight: .semibold, design: .rounded))
                .foregroundStyle(.white.opacity(0.84))
                .padding(.horizontal, 6).padding(.vertical, 4)
                .background(.black.opacity(0.34), in: Capsule())
                .padding(6)
        }
        .frame(width: CelebrationStrip.cellW, height: CelebrationStrip.cellH)
        .clipped()
    }
}

/// `--celebrationstrip` 的像素判据。它对 before/after 做逐字节基线比较，
/// 对峰值只允许脸贴片和真实侧屏 polygon 变化；另跑三个真实函数/视图负向探针。
@MainActor
private struct CelebrationStripReport {
    let assets: SceneAssets
    let rep: NSBitmapImageRep

    private struct Metrics {
        var changed = 0
        var outsideAllowed = 0
        var outsideScreen = 0
        var facePixels = 0
        var screenPixels = 0
        var box: CGRect?
    }

    func printAndEvaluate() -> Bool {
        print("CELEBRATIONSTRIP 像素报告（包络 1.80s；峰值只允许脸贴片+侧屏；显著差异 >6/255）")
        var passed = true
        let phases = CelebrationStrip.Phase.allCases
        let normalRows = CelebrationStrip.samples.enumerated()
            .filter { !$0.element.closeup }

        for (row, sample) in CelebrationStrip.samples.enumerated() {
            let amounts = phases.map { phase in
                AppState.celebrationAmount(since: 43.0 - phase.age, at: 43.0)
            }
            print(String(format: "  %@ amounts %@",
                         sample.label,
                         amounts.map { String(format: "%.3f", $0) }
                             .joined(separator: "/")))

            let base = byteDifference(row: row, phase: .before,
                                      otherRow: row, otherPhase: .after)
            let baseOK = base.changed == 0
            print("    before=after pixels=\(base.changed) max=\(base.maxDelta) "
                  + (baseOK ? "✓" : "✗"))
            passed = passed && baseOK

            if !sample.closeup {
                let dynamic = dynamicDifference(row: row, phase: .before,
                                                otherRow: row, otherPhase: .peak,
                                                sample: sample)
                let active = dynamic.changed > 0
                let bounded = dynamic.outsideAllowed == 0
                let screenSafe = dynamic.outsideScreen == 0
                print(String(format: "    peak−before pixels=%d face=%d screen=%d "
                             + "outsideAllowed=%d outsideScreen=%d bbox %@ %@",
                             dynamic.changed, dynamic.facePixels, dynamic.screenPixels,
                             dynamic.outsideAllowed, dynamic.outsideScreen,
                             boxDescription(dynamic.box),
                             (active && bounded && screenSafe) ? "✓" : "✗"))
                passed = passed && active && bounded && screenSafe
            }
        }

        let speakingOK = speakingProbe()
        print("  speaking 口型仍由 speaking 驱动、笑嘴让位："
              + (speakingOK ? "✓" : "✗"))
        passed = passed && speakingOK

        let expressionPriorityOK = expressionPriorityProbe()
        print("  庆祝眼型优先级（drowsy overlap + w0 逐字段等价）："
              + (expressionPriorityOK ? "✓" : "✗"))
        passed = passed && expressionPriorityOK

        let envelopeOK = envelopeProbe()
        print("  常亮/无触发负向 probe（0→peak 有限、peak→after 收回）："
              + (envelopeOK ? "✓" : "✗"))
        passed = passed && envelopeOK

        let clockSafetyOK = clockSafetyProbe()
        print("  时钟回拨安全（future lastCelebration 的 mood/视觉 boost=0）："
              + (clockSafetyOK ? "✓" : "✗"))
        passed = passed && clockSafetyOK

        let focusRoutingOK = focusRoutingProbe()
        print("  FocusTimer skip(work→break→work) 无完成回调："
              + (focusRoutingOK ? "✓" : "✗"))
        passed = passed && focusRoutingOK

        let leakOK = clipNegativeProbe(sample: CelebrationStrip.samples[0])
        print("  屏幕越界负向 probe（故意关闭 clip 后必须被抓）："
              + (leakOK ? "✓" : "✗"))
        passed = passed && leakOK

        // 这行让编译器保留 normalRows 的生产行索引，同时在报告里明确
        // close-up 也走了 before/after 基线检查。
        print("  普通/昼夜/冲突样本覆盖：\(normalRows.count) 个普通行 + "
              + "\(CelebrationStrip.samples.count - normalRows.count) 个近景行")
        print("CELEBRATIONSTRIP " + (passed ? "PASS" : "FAIL"))
        return passed
    }

    private func envelopeProbe() -> Bool {
        let before = AppState.celebrationAmount(since: 43.05, at: 43.0)
        let rise = AppState.celebrationAmount(since: 42.85, at: 43.0)
        let peak = AppState.celebrationAmount(since: 42.28, at: 43.0)
        let after = AppState.celebrationAmount(since: 40.90, at: 43.0)
        // before/after 必须是零，rise 必须处于上升段，peak 必须完整但不超过 1。
        return before == 0 && after == 0 && rise > 0 && rise < 1
            && peak == 1 && AppState.celebrationDuration >= 1.6
            && AppState.celebrationDuration <= 2.0
    }

    private func clockSafetyProbe() -> Bool {
        let visualFuture = AppState.celebrationAmount(since: 43.05, at: 43.0)
        let moodFuture = AppState.celebrationMoodBoost(since: 43.05, at: 43.0)
        let visualActive = AppState.celebrationAmount(since: 42.95, at: 43.0)
        let moodActive = AppState.celebrationMoodBoost(since: 42.0, at: 43.0)
        return visualFuture == 0 && moodFuture == 0
            && visualActive > 0 && moodActive > 0
    }

    private func focusRoutingProbe() -> Bool {
        let focus = FocusTimer()
        var callbacks: [FocusPhase] = []
        focus.onPhaseFinished = { callbacks.append($0) }
        focus.start()
        let startedWork = focus.phase == .work
        focus.skip()
        let skippedWork = focus.phase.isBreak
        let phaseAfterWorkSkip = focus.phase
        focus.skip()
        let skippedBreak = focus.phase == .work
        let ok = startedWork && skippedWork && skippedBreak && callbacks.isEmpty
        print("    routing states started=\(startedWork) workSkip=\(skippedWork) "
              + "breakSkip=\(skippedBreak) phase=\(phaseAfterWorkSkip) "
              + "callbacks=\(callbacks.count)")
        return ok
    }

    private func speakingProbe() -> Bool {
        // 选出生产 speaking 口型的高开合时刻，避免把“恰好换气”的低谷
        // 当成笑嘴覆盖；所有数值来自 FaceRig，而不是手写一张假脸。
        var bestT = 43.0
        var bestOpen = 0.0
        for i in 0...240 {
            let t = 43.0 + Double(i) * 0.01
            let face = FaceRig.expression(t: t, playing: false, mood: 0.58,
                                          drowsy: 0, working: true, speaking: true,
                                          activity: ActivityRig.preview(.planning,
                                                                        playing: false),
                                          celebration: 1)
            if face.mouthOpen > bestOpen {
                bestOpen = face.mouthOpen
                bestT = t
            }
        }
        let noCelebration = FaceRig.expression(
            t: bestT, playing: false, mood: 0.58, drowsy: 0,
            working: true, speaking: true,
            activity: ActivityRig.preview(.planning, playing: false), celebration: 0)
        let celebrating = FaceRig.expression(
            t: bestT, playing: false, mood: 0.58, drowsy: 0,
            working: true, speaking: true,
            activity: ActivityRig.preview(.planning, playing: false), celebration: 1)
        let driven = celebrating.mouthOpen > 0.45
            && abs(celebrating.mouthOpen - noCelebration.mouthOpen) < 1e-12
        let smileRises = celebrating.mouthSmile > noCelebration.mouthSmile
        let smileYields = celebrating.mouthSmile < celebrating.mouthOpen
        print(String(format: "    speaking values mouthSmile %.3f→%.3f "
                     + "mouthOpen %.3f→%.3f",
                     noCelebration.mouthSmile, celebrating.mouthSmile,
                     noCelebration.mouthOpen, celebrating.mouthOpen))
        return driven && smileRises && smileYields
    }

    private func expressionPriorityProbe() -> Bool {
        let commonActivity = ActivityRig.preview(.resting, playing: false)
        let old = FaceRig.expression(t: 43, playing: false, mood: 0.5,
                                     drowsy: 0.2, working: false, speaking: false,
                                     activity: commonActivity)
        let zero = FaceRig.expression(t: 43, playing: false, mood: 0.5,
                                      drowsy: 0.2, working: false, speaking: false,
                                      activity: commonActivity, celebration: 0)
        let drowsyPeak = FaceRig.expression(t: 43, playing: false, mood: 0.5,
                                            drowsy: 0.9, working: false,
                                            speaking: false, activity: commonActivity,
                                            celebration: 1)
        let zeroEquivalent = old == zero
        let eyeExclusive = drowsyPeak.eyeSmile > 0.5
            && drowsyPeak.eyeSmile > drowsyPeak.eyeSoft
            && drowsyPeak.eyeSmile > drowsyPeak.eyeWide
            && drowsyPeak.eyeSmile > drowsyPeak.eyeSad
        let mouthPresent = drowsyPeak.mouthSmile > 0.2
        print(String(format: "    drowsy peak eyeSmile %.3f eyeSad %.3f "
                     + "eyeSoft %.3f mouthSmile %.3f; w0=%@",
                     drowsyPeak.eyeSmile, drowsyPeak.eyeSad,
                     drowsyPeak.eyeSoft, drowsyPeak.mouthSmile,
                     zeroEquivalent ? "equal" : "DIFF"))
        return zeroEquivalent && eyeExclusive && mouthPresent
    }

    private func clipNegativeProbe(sample: CelebrationStrip.Sample) -> Bool {
        let before = render(sample: sample, phase: .before)
        let leaked = render(sample: sample, phase: .peak,
                            celebrationClipDisabled: true,
                            celebrationOffset: CGSize(width: 120, height: 0))
        guard let before, let leaked else { return false }
        let metrics = dynamicDifference(before, leaked, sample: sample)
        // clip 关闭时真实屏幕模式本身和勾形都会漏到 polygon 外；报告必须看到。
        return metrics.outsideScreen > 0
    }

    private func render(sample: CelebrationStrip.Sample,
                        phase: CelebrationStrip.Phase,
                        celebrationClipDisabled: Bool = false,
                        celebrationOffset: CGSize = .zero) -> NSBitmapImageRep? {
        let renderer = ImageRenderer(content:
            CelebrationCell(assets: assets, sample: sample, phase: phase,
                            celebrationOffset: celebrationOffset,
                            celebrationClipDisabled: celebrationClipDisabled)
                .frame(width: CelebrationStrip.cellW, height: CelebrationStrip.cellH))
        renderer.scale = 1
        guard let image = renderer.nsImage,
              let tiff = image.tiffRepresentation else { return nil }
        return NSBitmapImageRep(data: tiff)
    }

    private func byteDifference(row: Int, phase: CelebrationStrip.Phase,
                                otherRow: Int,
                                otherPhase: CelebrationStrip.Phase)
        -> (changed: Int, maxDelta: Int) {
        let a = cellOrigin(row: row, phase: phase)
        let b = cellOrigin(row: otherRow, phase: otherPhase)
        var changed = 0
        var maxDelta = 0
        for y in 0..<Int(CelebrationStrip.cellH) {
            for x in 0..<Int(CelebrationStrip.cellW) {
                let p = rgba(rep, x: a.x + x, y: a.y + y)
                let q = rgba(rep, x: b.x + x, y: b.y + y)
                let delta = max(abs(p.r - q.r), max(abs(p.g - q.g),
                                  max(abs(p.b - q.b), abs(p.a - q.a))))
                // SwiftUI 的 Canvas 在不同 HStack x 原点会有约 ±6/255 的
                // 重采样量化差；报告把它记进 max，但显著像素从 >6 开始。
                if delta > 6 { changed += 1 }
                maxDelta = max(maxDelta, delta)
            }
        }
        return (changed, maxDelta)
    }

    private func dynamicDifference(row: Int,
                                   phase: CelebrationStrip.Phase,
                                   otherRow: Int,
                                   otherPhase: CelebrationStrip.Phase,
                                   sample: CelebrationStrip.Sample) -> Metrics {
        let a = cellOrigin(row: row, phase: phase)
        let b = cellOrigin(row: otherRow, phase: otherPhase)
        var result = Metrics()
        for y in 0..<Int(CelebrationStrip.cellH) {
            for x in 0..<Int(CelebrationStrip.cellW) {
                let p = rgba(rep, x: a.x + x, y: a.y + y)
                let q = rgba(rep, x: b.x + x, y: b.y + y)
                let delta = max(abs(p.r - q.r), max(abs(p.g - q.g),
                                  max(abs(p.b - q.b), abs(p.a - q.a))))
                guard delta > 6 else { continue }
                result.changed += 1
                let point = CGPoint(x: x, y: y)
                result.box = result.box.map { $0.union(CGRect(origin: point,
                                                               size: CGSize(width: 1,
                                                                            height: 1))) }
                    ?? CGRect(origin: point, size: CGSize(width: 1, height: 1))
                let logical = CGPoint(x: CGFloat(x), y: CGFloat(y))
                let face = faceContains(logical, closeup: sample.closeup)
                let screen = screenContains(logical)
                if face { result.facePixels += 1 }
                if screen { result.screenPixels += 1 }
                if !face && !screen { result.outsideAllowed += 1 }
                // 脸的合法变化自然落在屏幕 polygon 外；这里只统计既不是
                // 脸贴片又不在屏幕内的反馈泄漏。
                if !screen && !face { result.outsideScreen += 1 }
            }
        }
        return result
    }

    private func dynamicDifference(_ a: NSBitmapImageRep, _ b: NSBitmapImageRep,
                                   sample: CelebrationStrip.Sample) -> Metrics {
        let width = min(a.pixelsWide, b.pixelsWide)
        let height = min(a.pixelsHigh, b.pixelsHigh)
        var result = Metrics()
        for y in 0..<height {
            for x in 0..<width {
                let p = rgba(a, x: x, y: y)
                let q = rgba(b, x: x, y: y)
                let delta = max(abs(p.r - q.r), max(abs(p.g - q.g),
                                  max(abs(p.b - q.b), abs(p.a - q.a))))
                guard delta > 6 else { continue }
                result.changed += 1
                let point = CGPoint(x: x, y: y)
                result.box = result.box.map { $0.union(CGRect(origin: point,
                                                               size: CGSize(width: 1,
                                                                            height: 1))) }
                    ?? CGRect(origin: point, size: CGSize(width: 1, height: 1))
                let face = faceContains(point, closeup: sample.closeup)
                let screen = screenContains(point)
                if face { result.facePixels += 1 }
                if screen { result.screenPixels += 1 }
                if !face && !screen { result.outsideAllowed += 1 }
                if !screen && !face { result.outsideScreen += 1 }
            }
        }
        return result
    }

    private func faceContains(_ point: CGPoint, closeup: Bool) -> Bool {
        guard !closeup else { return false }
        let logical = CGPoint(x: point.x * 1536 / CelebrationStrip.cellW,
                              y: point.y * 1024 / CelebrationStrip.cellH)
        let manifest = assets.hasHighResolutionFace ? assets.face2x : assets.face
        let scale = assets.hasHighResolutionFace ? 0.5 : 1.0
        return manifest.patches.values.contains { patch in
            let rect = CGRect(x: CGFloat(patch.x) * scale,
                              y: CGFloat(patch.y) * scale,
                              width: CGFloat(patch.w) * scale,
                              height: CGFloat(patch.h) * scale)
            return rect.insetBy(dx: -8, dy: -8).contains(logical)
        }
    }

    private func screenContains(_ point: CGPoint) -> Bool {
        let u = point.x / CelebrationStrip.cellW
        let v = point.y / CelebrationStrip.cellH
        let polygon = [(0.165, 0.346), (0.251, 0.349),
                       (0.251, 0.525), (0.166, 0.540)]
        var inside = false
        var j = polygon.count - 1
        for i in polygon.indices {
            let a = polygon[i], b = polygon[j]
            let crosses = ((a.1 > v) != (b.1 > v))
                && u < (b.0 - a.0) * (v - a.1) / max(b.1 - a.1, 1e-9) + a.0
            if crosses { inside.toggle() }
            j = i
        }
        return inside
    }

    private func cellOrigin(row: Int, phase: CelebrationStrip.Phase)
        -> (x: Int, y: Int) {
        let x = Int(CelebrationStrip.padding
                    + CGFloat(phase.rawValue) * (CelebrationStrip.cellW
                                                  + CelebrationStrip.gap))
        // Header is 18px plus the first vertical gap.
        let y = Int(CelebrationStrip.padding + 18 + CelebrationStrip.gap
                    + CGFloat(row) * (CelebrationStrip.cellH + CelebrationStrip.gap))
        return (x, y)
    }

    private func rgba(_ rep: NSBitmapImageRep, x: Int, y: Int)
        -> (r: Int, g: Int, b: Int, a: Int) {
        guard x >= 0, y >= 0, x < rep.pixelsWide, y < rep.pixelsHigh,
              let color = rep.colorAt(x: x, y: y)?.usingColorSpace(.sRGB) else {
            return (0, 0, 0, 0)
        }
        return (Int((color.redComponent * 255).rounded()),
                Int((color.greenComponent * 255).rounded()),
                Int((color.blueComponent * 255).rounded()),
                Int((color.alphaComponent * 255).rounded()))
    }

    private func boxDescription(_ box: CGRect?) -> String {
        guard let box else { return "none" }
        return String(format: "(%.0f,%.0f)-(%.0f,%.0f)",
                      box.minX, box.minY, box.maxX, box.maxY)
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
    ///
    /// **必须是真实窗口能达到的最小宽度**（`WindowMode.normal.minimumSize`
    /// 的 720），不能为了出图小就随手给 330。气泡和摸头热区是按窗口尺寸
    /// 算位置再被 `SceneCamera.penned` 夹进窗口的，格子一小，夹取就把气泡
    /// 压到她脸上——判据于是报出一个真实窗口里**不可能发生**的毛病。
    /// 反过来也一样：格子给大了，只在小窗口才露的毛病就照不出来。
    /// 和第 69 条同一个道理，判据画的必须是真的会上屏的那个尺寸。
    private static let cellW: CGFloat = 720
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

/// Playback headset feedback sheet.  Every cell is a real `RenderedSnozzy`
/// over the same logical canvas; only the phase, palette, and close-up frame
/// differ, so a screenshot can be compared without a second drawing path.
private struct HeadphoneStrip: View {
    let assets: SceneAssets

    private struct Sample: Identifiable {
        let id: String
        let label: String
        let palette: Palette
        let headphones: Bool
        let t: Double
        let chinFrame: Int?
    }

    private static let samples: [Sample] = {
        var result: [Sample] = []
        for (name, palette) in [("DAY", Palette.day), ("NIGHT", Palette.night)] {
            let poses: [(String, Int?)] = name == "DAY"
                ? [("NORMAL", nil), ("CHIN -1", -1)]
                    + (0...CloseUp.transitionFrames).map {
                        (String(format: "CHIN %02d", $0), Optional($0))
                    }
                : [("NORMAL", nil),
                   ("CHIN 08", Optional(CloseUp.transitionFrames))]
            for (pose, frame) in poses {
                result.append(Sample(id: "\(name)-\(pose)-paused",
                                     label: "\(name) · \(pose) · PAUSED",
                                     palette: palette, headphones: false, t: 0,
                                     chinFrame: frame))
                result.append(Sample(id: "\(name)-\(pose)-low",
                                     label: "\(name) · \(pose) · PLAY LOW",
                                     palette: palette, headphones: true, t: 0,
                                     chinFrame: frame))
                result.append(Sample(id: "\(name)-\(pose)-peak",
                                     label: "\(name) · \(pose) · PLAY PEAK",
                                     palette: palette, headphones: true,
                                     t: HeadphoneGlow.period / 2,
                                     chinFrame: frame))
            }
        }
        return result
    }()

    private static let cellW: CGFloat = 360
    private static let cellH: CGFloat = cellW / 1.5
    private static let columns = 3

    var body: some View {
        VStack(spacing: 3) {
            ForEach(0..<((Self.samples.count + Self.columns - 1) / Self.columns),
                    id: \.self) { row in
                HStack(spacing: 3) {
                    ForEach(0..<Self.columns, id: \.self) { column in
                        let index = row * Self.columns + column
                        if index < Self.samples.count {
                            cell(Self.samples[index])
                        } else {
                            Color.clear.frame(width: Self.cellW, height: Self.cellH)
                        }
                    }
                }
            }
        }
        .padding(4)
        .background(Color(white: 0.10))
    }

    private func cell(_ sample: Sample) -> some View {
        ZStack(alignment: .topLeading) {
            Color(white: sample.palette == .night ? 0.055 : 0.17)
            RenderedSnozzy(assets: assets, palette: sample.palette,
                           pose: Pose(), face: FaceExpression(),
                           headphones: sample.headphones,
                           chinFrame: sample.chinFrame, t: sample.t,
                           headphonePhase: sample.headphones
                               ? HeadphoneGlow.phase(at: sample.t) : nil)
                .frame(width: Self.cellW, height: Self.cellH)
            Text(sample.label)
                .font(.system(size: 10, weight: .semibold, design: .rounded))
                .foregroundStyle(.white.opacity(0.82))
                .padding(.horizontal, 6).padding(.vertical, 4)
                .background(.black.opacity(0.34), in: Capsule())
                .padding(6)
        }
        .frame(width: Self.cellW, height: Self.cellH)
        .clipped()
    }
}

/// Objective gates for `--headphonestrip`.
///
/// The report compares two renders with the same production body and only a
/// different glow phase.  A one-logical-pixel edge tolerance accounts for
/// SwiftUI's final resampling; any leak beyond that is a mask/placement bug.
@MainActor
private struct HeadphoneStripReport {
    let assets: SceneAssets
    let normalMask: HeadphoneMask
    let baseMask: HeadphoneMask
    let chinMasks: [HeadphoneMask]
    let finalMask: HeadphoneMask

    private struct Sample {
        let label: String
        let palette: Palette
        let chinFrame: Int?
        let mask: HeadphoneMask
    }

    private struct DynamicMetrics {
        var pixels = 0
        var outsideMask = 0
        var forbidden = 0
        var minLumaDelta = Double.greatestFiniteMagnitude
        var maxLumaDelta = 0.0
        var box: CGRect?
    }

    func printAndEvaluate() -> Bool {
        // This is intentionally the complete production index: -1 is the
        // published 2× base, 00…07 are the bone-rendered intermediates, and
        // 08 is the terminal render.  Every item below is rendered twice at
        // different phases; no representative-frame shortcut can hide drift.
        var samples = [Sample(label: "DAY · NORMAL", palette: .day,
                              chinFrame: nil, mask: normalMask)]
        samples.append(Sample(label: "DAY · CHIN -1", palette: .day,
                              chinFrame: -1, mask: baseMask))
        for i in 0...CloseUp.transitionFrames {
            samples.append(Sample(label: String(format: "DAY · CHIN %02d", i),
                                  palette: .day, chinFrame: i, mask: chinMasks[i]))
        }
        // Keep explicit day/night production coverage without duplicating all
        // eleven masks in the visual sheet.  The objective report above still
        // checks every frame in both paused and playing states.
        samples.append(Sample(label: "NIGHT · NORMAL", palette: .night,
                              chinFrame: nil, mask: normalMask))
        samples.append(Sample(label: "NIGHT · CHIN 08", palette: .night,
                              chinFrame: CloseUp.transitionFrames,
                              mask: finalMask))

        print("HEADPHONESTRIP 像素报告（mask 容差 1px；呼吸周期 "
              + String(format: "%.1fs", HeadphoneGlow.period) + "）")
        var passed = true

        for sample in samples {
            guard let pausedA = render(sample: sample, headphones: false,
                                       t: 3.0, phase: nil),
                  let pausedB = render(sample: sample, headphones: false,
                                       t: 3.0, phase: nil),
                  let valley = render(sample: sample, headphones: true,
                                      t: 3.0, phase: 0),
                  let peak = render(sample: sample, headphones: true,
                                    t: 3.0, phase: HeadphoneGlow.phaseCount / 2) else {
                print("  ✗ \(sample.label)：渲染失败")
                passed = false
                continue
            }

            let pause = byteDifference(pausedA, pausedB)
            let pauseOK = pause.changed == 0 && pause.maxDelta == 0
            print("  \(pauseOK ? "✓" : "✗") \(sample.label) 暂停差异 "
                  + "pixels=\(pause.changed) max=\(pause.maxDelta)")
            passed = passed && pauseOK

            let dynamic = dynamicDifference(valley, peak, sample: sample)
            let boxOK = boxError(dynamic.box, expected: sample.mask.rect,
                                 width: peak.pixelsWide, height: peak.pixelsHigh) <= 2
            let maskOK = dynamic.pixels > 0 && dynamic.outsideMask == 0
            let forbiddenOK = dynamic.forbidden == 0
            let lightOK = dynamic.minLumaDelta > 0
                && dynamic.maxLumaDelta <= 0.16
            print(String(format: "    peak−low pixels=%d outsideMask=%d forbidden=%d "
                         + "Δluma %.4f…%.4f bbox %@  %@",
                         dynamic.pixels, dynamic.outsideMask, dynamic.forbidden,
                         dynamic.minLumaDelta, dynamic.maxLumaDelta,
                         boxDescription(dynamic.box),
                         (boxOK && maskOK && forbiddenOK && lightOK) ? "✓" : "✗"))
            passed = passed && boxOK && maskOK && forbiddenOK && lightOK
        }

        let alphaOK = HeadphoneGlow.minimumAlpha >= 0.015
            && HeadphoneGlow.maximumAlpha > HeadphoneGlow.minimumAlpha
            && HeadphoneGlow.maximumAlpha <= 0.14
        print(String(format: "  %@ alpha %.3f…%.3f（范围 0.015…0.140）",
                     alphaOK ? "✓" : "✗",
                     HeadphoneGlow.minimumAlpha, HeadphoneGlow.maximumAlpha))
        passed = passed && alphaOK

        let masks: [(String, HeadphoneMask, Int?, Bool)] =
            [("普通", normalMask, nil, false), ("托腮-1", baseMask, -1, true)]
            + chinMasks.enumerated().map {
                (String(format: "托腮%02d", $0.offset), $0.element,
                 Optional($0.offset), true)
            }
        for (label, mask, frame, closeup) in masks {
            let overlap = maskForbiddenPixels(mask, chinFrame: frame,
                                               closeup: closeup)
            let structuralOK = mask.coverage > 0 && mask.componentCount == 2
                && overlap == 0
            print(String(format: "  %@ mask coverage=%d bbox=(%.1f,%.1f)-(%.1f,%.1f) "
                         + "centroid=(%.1f,%.1f) components=%d forbidden=%d %@",
                         label, mask.coverage, mask.rect.minX, mask.rect.minY,
                         mask.rect.maxX, mask.rect.maxY,
                         mask.centroid.x, mask.centroid.y,
                         mask.componentCount, overlap, structuralOK ? "✓" : "✗"))
            passed = passed && structuralOK
        }

        // Negative probes re-render the actual production view with one bad
        // input at a time.  They are intentionally not constants: a future
        // change to mask selection, opacity, or the paused gate must make the
        // injected defect disappear from this report and fail it.
        let normalSample = samples[0]
        let shifted = shiftedMask(normalMask, dx: 12)
        let shiftedMaskFails: Bool
        let overbrightFails: Bool
        let pausedLightFails: Bool
        var shiftedMetrics = DynamicMetrics()
        var overbrightMetrics = DynamicMetrics()
        var normalPaused = (changed: 0, maxDelta: 0)
        var pausedLeak = (changed: 0, maxDelta: 0)
        if let originalLow = render(sample: normalSample, headphones: true,
                                    t: 3.0, phase: 0),
           let shiftedPeak = render(sample: normalSample, headphones: true,
                                    t: 3.0, phase: HeadphoneGlow.phaseCount / 2,
                                    maskOverride: shifted),
           let nominalPeak = render(sample: normalSample, headphones: true,
                                    t: 3.0,
                                    phase: HeadphoneGlow.phaseCount / 2),
           let overbrightPeak = render(sample: normalSample, headphones: true,
                                       t: 3.0,
                                       phase: HeadphoneGlow.phaseCount / 2,
                                       alphaScale: 3),
           let pausedBody = render(sample: normalSample, headphones: false,
                                   t: 3.0, phase: 0),
           let pausedPhaseProbe = render(sample: normalSample, headphones: false,
                                         t: 3.0,
                                         phase: HeadphoneGlow.phaseCount / 2),
           let leakedPaused = render(sample: normalSample, headphones: false,
                                     t: 3.0, phase: 0,
                                     pausedGlowLeak: true) {
            shiftedMetrics = dynamicDifference(originalLow, shiftedPeak,
                                                sample: normalSample)
            overbrightMetrics = dynamicDifference(nominalPeak, overbrightPeak,
                                                  sample: normalSample)
            // Both renders use headphones=false, the ordinary body, the same
            // mask source, and only differ in an ignored phase: a normal
            // paused scene must remain exactly dark.
            normalPaused = byteDifference(pausedBody, pausedPhaseProbe)
            // The injected render has the exact same paused phase and body;
            // only the narrow diagnostic fault opens the glow gate.
            pausedLeak = byteDifference(pausedBody, leakedPaused)
            shiftedMaskFails = shiftedMetrics.outsideMask > 0
            overbrightFails = overbrightMetrics.pixels > 0
                && overbrightMetrics.maxLumaDelta > 0.02
            pausedLightFails = pausedLeak.changed > 0
        } else {
            shiftedMaskFails = false
            overbrightFails = false
            pausedLightFails = false
        }
        print("HEADPHONESTRIP 负向 gate："
              + String(format: "漂移+12px outsideMask=%d %@、",
                       shiftedMetrics.outsideMask, shiftedMaskFails ? "✓" : "✗")
              + String(format: "过亮×3 pixels=%d Δluma=%.4f %@、",
                       overbrightMetrics.pixels, overbrightMetrics.maxLumaDelta,
                       overbrightFails ? "✓" : "✗")
              + "正常暂停 phase差异 pixels=\(normalPaused.changed) max=\(normalPaused.maxDelta) "
              + "\(normalPaused.changed == 0 ? "✓" : "✗")、"
              + "注入暂停残光 pixels=\(pausedLeak.changed) max=\(pausedLeak.maxDelta) "
              + "\(pausedLightFails ? "✓" : "✗")")
        let negativeOK = shiftedMaskFails && overbrightFails
            && normalPaused.changed == 0 && pausedLightFails
        passed = passed && negativeOK
        print("HEADPHONESTRIP " + (passed ? "PASS" : "FAIL"))
        return passed
    }

    private func render(sample: Sample, headphones: Bool, t: Double, phase: Int?,
                        maskOverride: HeadphoneMask? = nil,
                        alphaScale: Double = 1,
                        pausedGlowLeak: Bool = false)
        -> NSBitmapImageRep? {
        // AppKit's bitmap/tiff bridges are autoreleased.  The report renders
        // 13 samples × four states; drain those temporary objects after each
        // sample so this diagnostic does not look like a production memory
        // leak in Instruments.
        return autoreleasepool {
            let view = ZStack {
                Color.white
                RenderedSnozzy(assets: assets, palette: sample.palette,
                               pose: Pose(), face: FaceExpression(),
                               headphones: headphones,
                               chinFrame: sample.chinFrame, t: t,
                               headphonePhase: phase,
                               headphoneMaskOverride: maskOverride,
                               headphoneGlowAlphaScale: alphaScale,
                               headphoneGlowPausedLeak: pausedGlowLeak)
            }
            .frame(width: assets.legs.canvasW, height: assets.legs.canvasH)
            let renderer = ImageRenderer(content: view)
            renderer.scale = 1
            guard let image = renderer.nsImage,
                  let tiff = image.tiffRepresentation else { return nil }
            return NSBitmapImageRep(data: tiff)
        }
    }

    private func shiftedMask(_ mask: HeadphoneMask, dx: CGFloat) -> HeadphoneMask {
        HeadphoneMask(image: mask.image, rect: mask.rect.offsetBy(dx: dx, dy: 0),
                      pixelScale: mask.pixelScale, alpha: mask.alpha,
                      pixelWidth: mask.pixelWidth, pixelHeight: mask.pixelHeight,
                      coverage: mask.coverage, centroid: mask.centroid,
                      componentCount: mask.componentCount)
    }

    private func dynamicDifference(_ low: NSBitmapImageRep, _ high: NSBitmapImageRep,
                                   sample: Sample) -> DynamicMetrics {
        let w = min(low.pixelsWide, high.pixelsWide)
        let h = min(low.pixelsHigh, high.pixelsHigh)
        let sx = CGFloat(w) / assets.legs.canvasW
        let sy = CGFloat(h) / assets.legs.canvasH
        var result = DynamicMetrics()
        for y in 0..<h {
            for x in 0..<w {
                let p = rgba(low, x: x, y: y), q = rgba(high, x: x, y: y)
                let byteDelta = max(abs(p.r - q.r), max(abs(p.g - q.g),
                                      max(abs(p.b - q.b), abs(p.a - q.a))))
                guard byteDelta > 1 else { continue }
                result.pixels += 1
                let logical = CGPoint(x: CGFloat(x) / sx, y: CGFloat(y) / sy)
                if !sample.mask.contains(logical, padding: 1) { result.outsideMask += 1 }
                if forbidden(logical, sample: sample) { result.forbidden += 1 }
                let luma0 = (0.2126 * Double(p.r) + 0.7152 * Double(p.g)
                    + 0.0722 * Double(p.b)) / 255
                let luma1 = (0.2126 * Double(q.r) + 0.7152 * Double(q.g)
                    + 0.0722 * Double(q.b)) / 255
                let delta = abs(luma1 - luma0)
                result.minLumaDelta = min(result.minLumaDelta, delta)
                result.maxLumaDelta = max(result.maxLumaDelta, delta)
                let point = CGPoint(x: x, y: y)
                if let box = result.box {
                    result.box = box.union(CGRect(origin: point, size: CGSize(width: 1, height: 1)))
                } else {
                    result.box = CGRect(origin: point, size: CGSize(width: 1, height: 1))
                }
            }
        }
        if result.minLumaDelta == .greatestFiniteMagnitude { result.minLumaDelta = 0 }
        return result
    }

    private func forbidden(_ point: CGPoint, sample: Sample) -> Bool {
        let faceRects: [CGRect]
        if let frame = sample.chinFrame, frame >= 0,
           assets.faceChinFrames.indices.contains(frame) {
            faceRects = assets.faceChinFrames[frame].patches.values.map {
                CGRect(x: CGFloat($0.x) / 2, y: CGFloat($0.y) / 2,
                       width: CGFloat($0.w) / 2, height: CGFloat($0.h) / 2)
            }
        } else if sample.chinFrame != nil {
            faceRects = assets.face2x.patches.values.map {
                CGRect(x: CGFloat($0.x) / 2, y: CGFloat($0.y) / 2,
                       width: CGFloat($0.w) / 2, height: CGFloat($0.h) / 2)
            }
        } else {
            faceRects = assets.face.patches.values.map {
                CGRect(x: $0.x, y: $0.y, width: $0.w, height: $0.h)
            }
        }
        if faceRects.contains(where: { $0.contains(point) }) { return true }
        let hand = assets.hands.rect
        return CGRect(x: hand.x, y: hand.y, width: hand.w, height: hand.h)
            .contains(point)
    }

    private func maskForbiddenPixels(_ mask: HeadphoneMask, chinFrame: Int?,
                                     closeup: Bool) -> Int {
        let faceRects: [CGRect]
        if closeup, let chinFrame,
           assets.faceChinFrames.indices.contains(chinFrame) {
            faceRects = assets.faceChinFrames[chinFrame].patches.values.map {
                CGRect(x: CGFloat($0.x) / 2, y: CGFloat($0.y) / 2,
                       width: CGFloat($0.w) / 2, height: CGFloat($0.h) / 2)
            }
        } else if closeup {
            faceRects = assets.face2x.patches.values.map {
                CGRect(x: CGFloat($0.x) / 2, y: CGFloat($0.y) / 2,
                       width: CGFloat($0.w) / 2, height: CGFloat($0.h) / 2)
            }
        } else {
            faceRects = assets.face.patches.values.map {
                CGRect(x: CGFloat($0.x), y: CGFloat($0.y),
                       width: CGFloat($0.w), height: CGFloat($0.h))
            }
        }
        let hand = assets.hands.rect
        var count = 0
        for y in 0..<mask.pixelHeight {
            for x in 0..<mask.pixelWidth {
                guard mask.alpha[y * mask.pixelWidth + x] > 0 else { continue }
                let point = CGPoint(x: mask.rect.minX + CGFloat(x) / CGFloat(mask.pixelScale),
                                    y: mask.rect.minY + CGFloat(y) / CGFloat(mask.pixelScale))
                if faceRects.contains(where: { $0.contains(point) })
                    || CGRect(x: hand.x, y: hand.y, width: hand.w, height: hand.h)
                        .contains(point) {
                    count += 1
                }
            }
        }
        return count
    }

    private func boxError(_ box: CGRect?, expected: CGRect,
                          width: Int, height: Int) -> CGFloat {
        guard let box else { return .greatestFiniteMagnitude }
        let sx = CGFloat(width) / assets.legs.canvasW
        let sy = CGFloat(height) / assets.legs.canvasH
        let want = CGRect(x: expected.minX * sx, y: expected.minY * sy,
                          width: expected.width * sx, height: expected.height * sy)
        return max(abs(box.minX - want.minX), max(abs(box.minY - want.minY),
                   max(abs(box.maxX - want.maxX), abs(box.maxY - want.maxY))))
    }

    private func rgba(_ rep: NSBitmapImageRep, x: Int, y: Int)
        -> (r: Int, g: Int, b: Int, a: Int) {
        if let data = rep.bitmapData, rep.samplesPerPixel >= 4 {
            let offset = y * rep.bytesPerRow + x * rep.samplesPerPixel
            return (Int(data[offset]), Int(data[offset + 1]),
                    Int(data[offset + 2]), Int(data[offset + 3]))
        }
        guard let c = rep.colorAt(x: x, y: y)?.usingColorSpace(.sRGB) else {
            return (0, 0, 0, 0)
        }
        return (Int(c.redComponent * 255), Int(c.greenComponent * 255),
                Int(c.blueComponent * 255), Int(c.alphaComponent * 255))
    }

    private func byteDifference(_ a: NSBitmapImageRep, _ b: NSBitmapImageRep)
        -> (changed: Int, maxDelta: Int) {
        let w = min(a.pixelsWide, b.pixelsWide), h = min(a.pixelsHigh, b.pixelsHigh)
        var changed = 0, maxDelta = 0
        for y in 0..<h {
            for x in 0..<w {
                let p = rgba(a, x: x, y: y), q = rgba(b, x: x, y: y)
                let delta = max(abs(p.r - q.r), max(abs(p.g - q.g),
                                  max(abs(p.b - q.b), abs(p.a - q.a))))
                if delta > 0 { changed += 1; maxDelta = max(maxDelta, delta) }
            }
        }
        return (changed, maxDelta)
    }

    private func boxDescription(_ box: CGRect?) -> String {
        guard let box else { return "none" }
        return String(format: "(%.0f,%.0f)-(%.0f,%.0f)",
                      box.minX, box.minY, box.maxX, box.maxY)
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

import SwiftUI

/// 用手绘素材渲染的房间背景。
///
/// 关键设计：手绘图里的窗洞是**透明的**，程序化的天空画在它后面。
/// 这样昼夜循环、下雨下雪仍然是活的——如果把天空一起画死在图里，
/// 这个房间就永远停在某一个时刻了。
struct PaintedRoomBackdrop: View {
    let assets: SceneAssets
    let palette: Palette
    let weather: Weather
    var t: Double = 0

    var body: some View {
        GeometryReader { geo in
            let size = geo.size
            let roomRect = assets.roomFrame(in: size)

            ZStack(alignment: .topLeading) {
                // 底色：房间图左右裁切后可能有露白，用墙的深色兜底。
                palette.wallShade.darker(0.35).color

                // 1. 天空 —— 塞进窗洞
                if let win = assets.windowFrame(in: size) {
                    SkyView(palette: palette, weather: weather, t: t)
                        .frame(width: win.width, height: win.height)
                        // 玻璃：窗外的光往画面里渗一点，再压一道从左上来的反光。
                        // 不做这两笔的话天空像一块贴上去的补丁，边缘是刀切的。
                        .overlay {
                            LinearGradient(
                                colors: [.white.opacity(0.05), .clear, .white.opacity(0.02)],
                                startPoint: .topLeading, endPoint: .bottomTrailing)
                        }
                        .overlay {
                            RoundedRectangle(cornerRadius: 2)
                                .stroke(palette.skyBottom.color(0.5), lineWidth: 3)
                                .blur(radius: 3)
                        }
                        .offset(x: win.minX, y: win.minY)
                        .shadow(color: Palette.neonCyan.color(0.30 * palette.star),
                                radius: win.width * 0.10)
                }

                // 2. 手绘房间
                if let room = assets.room {
                    Image(nsImage: room)
                        .resizable()
                        .interpolation(.high)
                        .frame(width: roomRect.width, height: roomRect.height)
                        .offset(x: roomRect.minX, y: roomRect.minY)
                }
            }
            // 3. 时段调色。
            //    手绘图自带一套暖色光照，所以这里只做整体的明暗和冷暖偏移，
            //    压得太狠会把画师画的层次全糊掉。
            .colorMultiply(PaintedRoom.ambient(palette).color)
            .overlay {
                // 4. 台灯光晕
                RadialGradient(
                    colors: [palette.lamp.color(0.10 * palette.lampGlow), .clear],
                    center: .init(x: 0.86, y: 0.30),
                    startRadius: 0,
                    endRadius: max(size.width, size.height) * 0.5)
                .blendMode(.plusLighter)
                .allowsHitTesting(false)
            }
            .overlay {
                // 5. 暗角
                RadialGradient(
                    colors: [.clear, .black.opacity(0.20)],
                    center: .init(x: 0.5, y: 0.45),
                    startRadius: min(size.width, size.height) * 0.30,
                    endRadius: max(size.width, size.height) * 0.78)
                .allowsHitTesting(false)
            }
        }
        .ignoresSafeArea()
    }
}

/// 用手绘素材渲染的桌面前景。
struct PaintedRoomForeground: View, Equatable {
    let assets: SceneAssets
    let palette: Palette

    static func == (a: PaintedRoomForeground, b: PaintedRoomForeground) -> Bool {
        a.palette == b.palette && a.assets.loadedFrom == b.assets.loadedFrom
    }

    var body: some View {
        GeometryReader { geo in
            let rect = assets.deskFrame(in: geo.size)
            if let desk = assets.desk {
                Image(nsImage: desk)
                    .resizable()
                    .interpolation(.high)
                    .frame(width: rect.width, height: rect.height)
                    .offset(x: rect.minX, y: rect.minY)
                    .colorMultiply(PaintedRoom.ambient(palette).color)
            }
        }
        .allowsHitTesting(false)
        .ignoresSafeArea()
    }
}

/// 交付场景里仍然会“活”的小东西。
///
/// 房间本身是一张完成度很高的画，不该往上堆会抢主体的粒子。这里只动四处本来
/// 就会变化的表面：侧屏、杯子热气、手机和窗外航灯。所有坐标都来自当前
/// 1536×1024 交付图，按窗口分别缩放，和角色/桌面层的对位方式一致。
struct PaintedRoomActivityOverlay: View {
    let assets: SceneAssets
    let cue: ActivityCue
    let palette: Palette
    /// 保留快照调用接口；播放器实际动画强度只读 cue.playerMotion。
    let playing: Bool
    let t: Double
    /// 专注段自然完成的短反馈；0 时不创建任何额外笔画。
    var celebration: Double = 0
    /// 快照负向探针：故意绕过屏幕 clip，证明报告能抓到越界。
    var celebrationClipDisabled = false
    /// 快照负向探针：把反馈平移到错误位置；生产始终为零。
    var celebrationOffset: CGSize = .zero

    var body: some View {
        GeometryReader { geo in
            let room = assets.roomFrame(in: geo.size)
            Canvas(opaque: false, rendersAsynchronously: false) { ctx, size in
                drawMonitor(&ctx, size)
                drawSteam(&ctx, size)
                drawPhone(&ctx, size)
                drawWindowTraffic(&ctx, size)
            }
            .frame(width: room.width, height: room.height)
            .offset(x: room.minX, y: room.minY)
        }
        .allowsHitTesting(false)
    }

    /// 左侧朝镜头的小屏。原画的内容保留，只叠很轻的状态色和信息节奏。
    private func drawMonitor(_ ctx: inout GraphicsContext, _ size: CGSize) {
        // 右侧朝镜头的副屏内框，四角从交付图逐像素标定；不是显示器的外接矩形。
        let screen = polygon([
            (0.165, 0.346), (0.251, 0.349),
            (0.251, 0.525), (0.166, 0.540),
        ], size)
        let level = cue.screenLevel
        guard level > 0.01 else { return }

        ctx.drawLayer { layer in
            if !celebrationClipDisabled {
                layer.clip(to: screen)
            }
            layer.blendMode = .plusLighter
            // 一张捕获自半途过渡的 cue 可能同时带着三种以上内容；逐项按权重
            // 叠加，连续 skip/toggle 才不会退回单一枚举画面。
            for activity in SnozzyActivity.allCases {
                let weight = cue.screenWeights[activity, default: 0]
                drawScreenMode(activity, in: &layer, screen: screen, size: size,
                               level: level * weight)
            }

            // 一道很慢的扫描光，只给屏幕一点呼吸，不做廉价的高频闪烁。
            let scan = 0.370 + (t * 0.009).truncatingRemainder(dividingBy: 0.145)
            layer.fill(Path(rect(0.166, scan, 0.085, 0.002, size)),
                       with: .color(.white.opacity(0.055 * level)))

            // 反馈必须留在真实屏幕 clip 内；amount=0 时严格不绘制，
            // 因而完成前后和旧 Activity 画面逐像素相同。
            drawCelebration(&layer, size)
        }
    }

    private func drawCelebration(_ ctx: inout GraphicsContext, _ size: CGSize) {
        let amount = clamp(celebration, 0, 1)
        guard amount > 0 else { return }

        let center = CGPoint(x: 0.210 * size.width + celebrationOffset.width,
                             y: 0.437 * size.height + celebrationOffset.height)
        let radius = min(size.width, size.height) * 0.026
        let ringRect = CGRect(x: center.x - radius, y: center.y - radius,
                              width: radius * 2, height: radius * 2)
        var ring = Path()
        ring.addEllipse(in: ringRect)
        ctx.stroke(ring,
                   with: .color(Palette.neonWarm.lighter(0.45)
                       .color(0.36 * amount)),
                   style: .init(lineWidth: max(1, size.width * 0.0018),
                                lineCap: .round))

        // 小勾只占屏幕中部的一小块，不覆盖原画的边框和 Snozzy 的视线落点。
        var check = Path()
        check.move(to: CGPoint(x: center.x - radius * 0.48,
                               y: center.y + radius * 0.02))
        check.addLine(to: CGPoint(x: center.x - radius * 0.08,
                                  y: center.y + radius * 0.42))
        check.addLine(to: CGPoint(x: center.x + radius * 0.62,
                                  y: center.y - radius * 0.42))
        ctx.stroke(check,
                   with: .color(.white.opacity(0.60 * amount)),
                   style: .init(lineWidth: max(1, size.width * 0.0022),
                                lineCap: .round, lineJoin: .round))
    }

    private func drawScreenMode(_ activity: SnozzyActivity,
                                in ctx: inout GraphicsContext, screen: Path,
                                size: CGSize, level: Double) {
        guard level > 0.002 else { return }
        let tint: RGB
        switch activity {
        case .typing: tint = Palette.neonCyan
        case .researching: tint = palette.accent
        case .planning: tint = Palette.neonPink
        case .resting, .takingBreak: tint = Palette.neonWarm
        }
        // 透明度完全跟交叉权重走；若保留固定底数，中点叠两份会突然更亮。
        ctx.fill(screen, with: .color(tint.color(0.115 * level)))
        // 顶栏和状态点把它读成“正在使用的界面”，但不画不可读的假文字。
        ctx.fill(Path(roundedRect: rect(0.172, 0.362, 0.069, 0.008, size), cornerRadius: 2),
                 with: .color(tint.lighter(0.45).color(0.26 * level)))
        let blink = 0.58 + 0.42 * sin(t * 1.25) * sin(t * 1.25)
        ctx.fill(Path(ellipseIn: rect(0.239, 0.358, 0.004, 0.006, size)),
                 with: .color(Palette.neonCyan.color(0.55 * level * blink)))

        switch activity {
        case .typing: drawCode(&ctx, size, tint, level)
        case .researching: drawResearch(&ctx, size, tint, level)
        case .planning: drawPlan(&ctx, size, tint, level)
        case .resting, .takingBreak: drawPlayer(&ctx, size, tint, level)
        }
    }

    private func drawCode(_ ctx: inout GraphicsContext, _ size: CGSize,
                          _ tint: RGB, _ level: Double) {
        let widths = [0.052, 0.034, 0.061, 0.043, 0.057, 0.029]
        let shift = Int(t / 2.8) % widths.count
        for row in 0..<7 {
            let w = widths[(row + shift) % widths.count]
            let indent = row % 3 == 0 ? 0.008 : 0
            ctx.fill(Path(roundedRect: rect(0.174 + indent, 0.385 + Double(row) * 0.017,
                                            w, 0.004, size), cornerRadius: 1),
                     with: .color(tint.color((row == shift ? 0.42 : 0.20) * level)))
        }
    }

    private func drawResearch(_ ctx: inout GraphicsContext, _ size: CGSize,
                              _ tint: RGB, _ level: Double) {
        ctx.fill(Path(roundedRect: rect(0.173, 0.383, 0.027, 0.052, size), cornerRadius: 3),
                 with: .color(tint.color(0.18 * level)))
        for row in 0..<5 {
            ctx.fill(Path(roundedRect: rect(0.204, 0.386 + Double(row) * 0.015,
                                            0.036 + Double(row % 2) * 0.012, 0.004, size),
                     cornerRadius: 1),
                     with: .color(tint.lighter(0.35).color(0.22 * level)))
        }
        ctx.fill(Path(roundedRect: rect(0.174, 0.466, 0.066, 0.040, size), cornerRadius: 3),
                 with: .color(Palette.neonCyan.color(0.12 * level)))
    }

    private func drawPlan(_ ctx: inout GraphicsContext, _ size: CGSize,
                          _ tint: RGB, _ level: Double) {
        for col in 0..<3 {
            let x = 0.173 + Double(col) * 0.024
            ctx.fill(Path(roundedRect: rect(x, 0.382, 0.019, 0.124, size), cornerRadius: 3),
                     with: .color(tint.color(0.07 * level)))
            for row in 0..<(3 + col % 2) {
                ctx.fill(Path(roundedRect: rect(x + 0.003, 0.394 + Double(row) * 0.023,
                                                0.014, 0.013, size), cornerRadius: 2),
                         with: .color(tint.lighter(0.35).color(0.18 * level)))
            }
        }
    }

    private func drawPlayer(_ ctx: inout GraphicsContext, _ size: CGSize,
                            _ tint: RGB, _ level: Double) {
        let motion = max(0, min(1, cue.playerMotion))
        let animatedPulse = 0.65 + 0.35 * sin(t * 2.1) * sin(t * 2.1)
        let pulse = 0.45 + (animatedPulse - 0.45) * motion
        ctx.fill(Path(roundedRect: rect(0.174, 0.385, 0.065, 0.066, size), cornerRadius: 4),
                 with: .color(tint.color(0.12 * level)))
        let still = [0.42, 0.68, 0.34, 0.56, 0.76, 0.48, 0.61]
        for i in 0..<7 {
            let animatedWave = abs(sin(t * 1.4 + Double(i) * 0.8))
            let wave = still[i] + (animatedWave - still[i]) * motion
            let h = (0.006 + 0.018 * wave) * pulse
            ctx.fill(Path(roundedRect: rect(0.177 + Double(i) * 0.0085, 0.493 - h,
                                            0.004, h, size), cornerRadius: 1),
                     with: .color(tint.lighter(0.35).color(0.34 * level)))
        }
    }

    /// 杯子在画面右侧。休息时更明显，工作时只留一点，避免像烟囱。
    private func drawSteam(_ ctx: inout GraphicsContext, _ size: CGSize) {
        let amount = cue.steamLevel
        guard amount > 0.02 else { return }
        ctx.drawLayer { layer in
            layer.blendMode = .plusLighter
            for i in 0..<3 {
                let phase = (t * (0.085 + Double(i) * 0.009) + Double(i) * 0.31)
                    .truncatingRemainder(dividingBy: 1)
                let alpha = sin(phase * .pi) * 0.20 * amount
                let x = (0.648 + Double(i - 1) * 0.006) * size.width
                let y = (0.606 - phase * 0.070) * size.height
                let sway = sin(t * 0.55 + Double(i) * 1.7) * size.width * 0.006
                var p = Path()
                p.move(to: CGPoint(x: x, y: y + size.height * 0.036))
                p.addCurve(to: CGPoint(x: x + sway, y: y),
                           control1: CGPoint(x: x - sway * 0.7, y: y + size.height * 0.026),
                           control2: CGPoint(x: x + sway * 1.2, y: y + size.height * 0.010))
                layer.stroke(p, with: .color(.white.opacity(alpha)),
                             style: .init(lineWidth: max(0.7, size.width * 0.0012),
                                          lineCap: .round))
            }
        }
    }

    /// 手机偶发亮屏。亮度由 ActivityRig 的低频脉冲给，不自行持有定时器。
    private func drawPhone(_ ctx: inout GraphicsContext, _ size: CGSize) {
        let amount = cue.phoneLevel
        guard amount > 0.01 else { return }
        let screen = polygon([
            (0.730, 0.601), (0.749, 0.605),
            (0.744, 0.655), (0.727, 0.650),
        ], size)
        ctx.drawLayer { layer in
            layer.blendMode = .plusLighter
            layer.fill(screen, with: .color(Palette.neonCyan.color(0.14 * amount)))
            layer.stroke(screen, with: .color(.white.opacity(0.16 * amount)), lineWidth: 1)
            layer.fill(Path(roundedRect: rect(0.733, 0.616, 0.011, 0.003, size), cornerRadius: 1),
                       with: .color(.white.opacity(0.38 * amount)))
            layer.fill(Path(roundedRect: rect(0.731, 0.627, 0.010, 0.003, size), cornerRadius: 1),
                       with: .color(palette.accent.color(0.34 * amount)))
        }
    }

    /// 晴天时背景图本身会停帧；把两枚极慢的航灯放在这个已有动画层里，
    /// 窗外就不会在最常见的天气下完全冻结。只走窗洞上半段，避开前面的显示器。
    private func drawWindowTraffic(_ ctx: inout GraphicsContext, _ size: CGSize) {
        ctx.drawLayer { layer in
            layer.blendMode = .plusLighter
            for i in 0..<2 {
                let u = (t * (0.010 + Double(i) * 0.004) + Double(i) * 0.61)
                    .truncatingRemainder(dividingBy: 1.25) - 0.12
                guard u >= 0, u <= 1 else { continue }
                let x = (0.226 + u * 0.235) * size.width
                let y = (0.205 + Double(i) * 0.055) * size.height
                let c = i == 0 ? Palette.neonCyan : Palette.neonWarm
                var trail = Path()
                trail.move(to: CGPoint(x: x, y: y))
                trail.addLine(to: CGPoint(x: x - size.width * 0.010, y: y + size.height * 0.001))
                layer.stroke(trail, with: .color(c.color(0.12)), lineWidth: 1)
                layer.fill(Path(ellipseIn: CGRect(x: x - 1.2, y: y - 1.2, width: 2.4, height: 2.4)),
                           with: .color(c.lighter(0.4).color(0.52)))
            }
        }
    }

    private func rect(_ x: Double, _ y: Double, _ w: Double, _ h: Double,
                      _ size: CGSize) -> CGRect {
        CGRect(x: x * size.width, y: y * size.height,
               width: w * size.width, height: h * size.height)
    }

    private func polygon(_ points: [(Double, Double)], _ size: CGSize) -> Path {
        var p = Path()
        guard let first = points.first else { return p }
        p.move(to: CGPoint(x: first.0 * size.width, y: first.1 * size.height))
        for point in points.dropFirst() {
            p.addLine(to: CGPoint(x: point.0 * size.width, y: point.1 * size.height))
        }
        p.closeSubpath()
        return p
    }
}

enum PaintedRoom {
    /// 时段环境光。
    ///
    /// 和角色用同一套思路：夜间只压暗、几乎不偏色。
    /// 手绘图里画师已经把暖光画进去了，再整体染一遍橙色只会让它变脏。
    static func ambient(_ palette: Palette) -> RGB {
        let glow = clamp(palette.lampGlow, 0, 1)
        // 房间本身是浅色明亮的，夜里压得太狠会把整张画变脏、变灰。
        // 只轻微压暗并往冷紫偏一点点，"入夜"的感觉主要交给窗外和灯带。
        return RGB.lerp(RGB(1.0, 1.0, 1.0), RGB(0.88, 0.86, 0.93), glow)
    }
}

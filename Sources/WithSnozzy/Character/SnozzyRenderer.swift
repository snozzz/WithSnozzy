import SwiftUI

/// Snozzy 的配色。
///
/// 白发角色最容易失败的地方是「白得发灰」。这里的头发底色带一点冷紫，
/// 高光才推到接近纯白——靠明度差而不是靠饱和度，才是干净的白。
enum Look {
    static let hair = RGB(hex: 0xF7F4FB)
    static let hairMid = RGB(hex: 0xE0D9EE)
    static let hairShade = RGB(hex: 0xC3B9DA)
    static let hairDeep = RGB(hex: 0xA79CC4)

    static let skin = RGB(hex: 0xFDE8E0)
    static let skinShade = RGB(hex: 0xF4CDC2)
    static let skinDeep = RGB(hex: 0xE5AEA4)

    static let lash = RGB(hex: 0x3E3350)
    static let brow = RGB(hex: 0xB9AECB)
    static let irisTop = RGB(hex: 0x7C55BE)
    static let irisBottom = RGB(hex: 0xD3ADF5)
    static let irisRing = RGB(hex: 0x5C3E93)

    static let mouth = RGB(hex: 0xC46B82)
    static let blush = RGB(hex: 0xF59BAE)

    static let sweater = RGB(hex: 0xDCA6B9)
    static let sweaterShade = RGB(hex: 0xBC8299)
    static let sweaterDeep = RGB(hex: 0x9E6A80)

    static let cans = RGB(hex: 0x473D58)
    static let cansEdge = RGB(hex: 0x6B5C82)
    static let cansPad = RGB(hex: 0x2E2739)

    static let clip = RGB(hex: 0xF7A6C1)
}

/// 角色的几何锚点，全部是单位坐标。
///
/// 五官位置全集中在这里。想让她的眼睛大一点、下巴尖一点，改这里的数就行，
/// 不用去翻几百行路径数据。
private enum G {
    // 头。下巴收在 ry*1.04（而不是更长的 1.13）——脸一长就从"少女"变成"少妇"。
    static let cx = 0.500
    static let cy = 0.335
    static let rx = 0.157
    static let ry = 0.168
    static var skullTop: Double { cy - ry * 1.03 }
    static var chin: Double { cy + ry * 1.04 }

    // 眼。二次元的可爱度几乎和眼睛占脸的比例成正比，这里给得比写实比例大不少。
    static var eyeY: Double { cy + ry * 0.36 }
    static let eyeDX = 0.0745
    static let eyeRX = 0.0505
    static let eyeRY = 0.0585

    // 眉
    static var browY: Double { cy - ry * 0.02 }

    // 嘴鼻
    static var noseY: Double { cy + ry * 0.74 }
    static var mouthY: Double { cy + ry * 0.90 }

    // 腮红
    static var blushY: Double { cy + ry * 0.66 }
    static let blushDX = 0.1120

    // 颈与身。脖子必须露出来一小截，否则头会像直接摆在毛衣上。
    static let neckTop = 0.500
    static let neckBottom = 0.588
    static let neckHalf = 0.0450
    static let shoulderY = 0.618
    static let bodyHalf = 0.2060

    // 耳机
    static var canX: Double { 0.2130 }
    static var canY: Double { cy + ry * 0.26 }
}

enum SnozzyRenderer {

    /// 把一个姿态画进上下文。
    /// - Parameter scene: 房间调色板，用来给角色打环境光。
    static func draw(_ pose: Pose, in ctx: inout GraphicsContext, rect: CGRect, scene: Palette) {
        // 环境光。
        //
        // 关键取舍：夜间的环境光**几乎不偏色**，只是整体压暗一点。
        // 直觉上会想把夜景整体染成台灯的橙色，但那样白发会变成米黄色——
        // 角色就不再是"白毛"了。真实的暖光感来自侧面的边缘光（下面的 rim），
        // 而不是整体色偏。
        let glow = clamp(scene.lampGlow, 0, 1)
        let ambient = RGB.lerp(RGB(1.02, 1.00, 0.99), RGB(0.86, 0.82, 0.86), glow)

        func lit(_ c: RGB) -> RGB {
            RGB(min(c.r * ambient.r, 1), min(c.g * ambient.g, 1), min(c.b * ambient.b, 1))
        }

        /// 受台灯照射的一侧。头发和皮肤的渐变用它做右上方的暖色边缘光。
        func rim(_ c: RGB) -> RGB {
            RGB.lerp(lit(c), scene.lamp.lighter(0.25), 0.30 * glow)
        }

        // 身体：呼吸只影响躯干，头部单独处理。
        let breathScale = 1.0 + pose.breath * 0.010
        let swayX = pose.bodySway * 0.006

        ctx.drawLayer { body in
            body.concatenate(CGAffineTransform(translationX: rect.midX, y: rect.maxY)
                .scaledBy(x: 1, y: breathScale)
                .translatedBy(x: -rect.midX, y: -rect.maxY))
            drawBackHair(in: &body, rect: rect, pose: pose, lit: lit, rim: rim)
            drawBody(in: &body, rect: rect, pose: pose, lit: lit, rim: rim)
        }

        // 头部：跟节拍点头 + 缓慢倾斜，绕颈根旋转。
        let pivot = CGPoint(x: rect.minX + min(rect.width, rect.height) * G.cx,
                            y: rect.minY + min(rect.width, rect.height) * G.neckBottom)
        let bobPx = pose.headBob * min(rect.width, rect.height)

        ctx.drawLayer { head in
            head.concatenate(
                CGAffineTransform(translationX: pivot.x + swayX * rect.width, y: pivot.y + bobPx)
                    .rotated(by: pose.headTilt)
                    .translatedBy(x: -pivot.x, y: -pivot.y))

            drawNeck(in: &head, rect: rect, lit: lit)
            drawFace(in: &head, rect: rect, lit: lit)
            drawBlush(in: &head, rect: rect, pose: pose, lit: lit)
            drawEyes(in: &head, rect: rect, pose: pose, lit: lit)
            drawNoseMouth(in: &head, rect: rect, pose: pose, lit: lit)
            drawBangs(in: &head, rect: rect, pose: pose, lit: lit, rim: rim)
            // 眉毛画在刘海**之上**。二次元的惯例做法，
            // 因为眉毛承担了一半的表情信息，被头发盖住的话脸就死了。
            drawBrows(in: &head, rect: rect, pose: pose, lit: lit)
            drawSideLocks(in: &head, rect: rect, pose: pose, lit: lit, rim: rim)
            drawClip(in: &head, rect: rect, lit: lit)
            drawAhoge(in: &head, rect: rect, pose: pose, lit: lit)
            drawHeadphones(in: &head, rect: rect, lit: lit)
        }
    }

    // MARK: - 后发

    private static func drawBackHair(in ctx: inout GraphicsContext, rect: CGRect,
                                     pose: Pose, lit: (RGB) -> RGB, rim: (RGB) -> RGB) {
        let sway = pose.hairSway * 0.014

        let hair = UnitPath.build(in: rect) { p in
            p.move(G.cx, G.skullTop - 0.012)
            // 右半：从头顶散开到肩下
            p.curve(0.688, 0.360, 0.624, 0.150, 0.678, 0.245)
            p.curve(0.716 + sway, 0.640, 0.702, 0.455, 0.718, 0.548)
            p.curve(0.672 + sway * 1.6, 0.884, 0.714 + sway, 0.735, 0.690 + sway * 1.4, 0.820)
            p.curve(0.548, 0.928, 0.640 + sway * 1.6, 0.916, 0.600, 0.932)
            // 左半镜像
            p.curve(0.452, 0.928, 0.520, 0.926, 0.480, 0.926)
            p.curve(0.328 - sway * 1.6, 0.884, 0.400, 0.932, 0.360 - sway * 1.6, 0.916)
            p.curve(0.284 - sway, 0.640, 0.310 - sway * 1.4, 0.820, 0.286 - sway, 0.735)
            p.curve(0.312, 0.360, 0.282, 0.548, 0.298, 0.455)
            p.curve(G.cx, G.skullTop - 0.012, 0.322, 0.245, 0.376, 0.150)
            p.close()
        }

        // 斜向渐变：发根亮、发梢暗，同时右侧带一点台灯的暖色。
        ctx.fill(hair, with: .linearGradient(
            Gradient(colors: [lit(Look.hairMid).color, rim(Look.hairShade).color, lit(Look.hairDeep).color]),
            startPoint: UnitPath(in: rect).point(0.36, 0.14),
            endPoint: UnitPath(in: rect).point(0.68, 0.94)))

        // 内侧阴影：头正后方最暗，把头和后发分开。
        //
        // 下缘必须收在下巴以上。之前拖到 0.61，结果在下巴和肩膀之间、
        // 脖子两侧的空隙里漏出来，看着像脸上贴了块半透明灰方块。
        let inner = UnitPath.build(in: rect) { p in
            p.move(0.356, 0.296)
            p.quad(0.644, 0.296, 0.500, 0.214)
            p.quad(0.612, 0.478, 0.652, 0.398)
            p.quad(0.388, 0.478, 0.500, 0.502)
            p.quad(0.356, 0.296, 0.348, 0.398)
            p.close()
        }
        ctx.fill(inner, with: .color(lit(Look.hairDeep).color(0.55)))
    }

    // MARK: - 身体

    private static func drawBody(in ctx: inout GraphicsContext, rect: CGRect,
                                 pose: Pose, lit: (RGB) -> RGB, rim: (RGB) -> RGB) {
        let sway = pose.bodySway * 0.004

        let torso = UnitPath.build(in: rect) { p in
            p.move(G.cx - G.neckHalf - 0.010, G.neckBottom - 0.005)
            // 右肩：宽松毛衣，肩线要圆，不能有锁骨的硬转折
            p.curve(G.cx + G.bodyHalf + sway, 0.760, G.cx + 0.115, 0.612, G.cx + G.bodyHalf, 0.668)
            p.curve(G.cx + G.bodyHalf + 0.030, 1.02, G.cx + G.bodyHalf + 0.014 + sway, 0.870, G.cx + G.bodyHalf + 0.026, 0.950)
            p.line(G.cx - G.bodyHalf - 0.030, 1.02)
            p.curve(G.cx - G.bodyHalf + sway, 0.760, G.cx - G.bodyHalf - 0.026, 0.950, G.cx - G.bodyHalf - 0.014 + sway, 0.870)
            p.curve(G.cx + G.neckHalf + 0.010, G.neckBottom - 0.005, G.cx - G.bodyHalf, 0.668, G.cx - 0.115, 0.612)
            p.close()
        }
        ctx.fill(torso, with: .linearGradient(
            Gradient(colors: [rim(Look.sweater).color, lit(Look.sweaterShade).color]),
            startPoint: UnitPath(in: rect).point(0.62, 0.60),
            endPoint: UnitPath(in: rect).point(0.40, 1.02)))

        // 领口：一圈翻边，宽松毛衣的标志
        let collar = UnitPath.build(in: rect) { p in
            p.move(G.cx - 0.088, 0.618)
            p.quad(G.cx + 0.088, 0.618, G.cx, 0.598)
            p.quad(G.cx, 0.688, G.cx + 0.072, 0.660)
            p.quad(G.cx - 0.088, 0.618, G.cx - 0.072, 0.660)
            p.close()
        }
        ctx.fill(collar, with: .color(lit(Look.sweaterDeep).color))

        // 肩部褶皱：两道短弧，暗示布料堆叠
        var folds = Path()
        for (x, y, w) in [(-0.155, 0.800, 0.075), (0.150, 0.815, 0.070)] {
            folds.addPath(UnitPath.build(in: rect) { p in
                p.move(G.cx + x - w / 2, y)
                p.quad(G.cx + x + w / 2, y + 0.012, G.cx + x, y + 0.030)
            })
        }
        ctx.stroke(folds, with: .color(lit(Look.sweaterDeep).color(0.5)),
                   style: .init(lineWidth: UnitPath(in: rect).length(0.006), lineCap: .round))
    }

    // MARK: - 颈

    private static func drawNeck(in ctx: inout GraphicsContext, rect: CGRect, lit: (RGB) -> RGB) {
        let neck = UnitPath.build(in: rect) { p in
            p.move(G.cx - G.neckHalf, G.neckTop)
            p.line(G.cx + G.neckHalf, G.neckTop)
            p.line(G.cx + G.neckHalf + 0.008, G.neckBottom)
            p.line(G.cx - G.neckHalf - 0.008, G.neckBottom)
            p.close()
        }
        ctx.fill(neck, with: .color(lit(Look.skinShade).color))

        // 下巴投在脖子上的影。少了这道影，头会像浮在身体上面。
        // 纵向渐隐代替模糊：上缘实、下缘化开，正是投影该有的样子。
        let up = UnitPath(in: rect)
        let shadow = UnitPath.build(in: rect) { p in
            p.move(G.cx - G.neckHalf - 0.006, G.neckTop - 0.016)
            p.quad(G.cx + G.neckHalf + 0.006, G.neckTop - 0.016, G.cx, G.neckTop + 0.046)
            p.line(G.cx + G.neckHalf + 0.006, G.neckTop - 0.020)
            p.line(G.cx - G.neckHalf - 0.006, G.neckTop - 0.020)
            p.close()
        }
        ctx.fill(shadow, with: .linearGradient(
            Gradient(colors: [lit(Look.skinDeep).color(0.78), lit(Look.skinDeep).color(0.0)]),
            startPoint: up.point(G.cx, G.neckTop - 0.016),
            endPoint: up.point(G.cx, G.neckTop + 0.048)))
    }

    // MARK: - 脸

    private static func drawFace(in ctx: inout GraphicsContext, rect: CGRect, lit: (RGB) -> RGB) {
        let face = UnitPath.build(in: rect) { p in
            p.move(G.cx - G.rx, G.cy - G.ry * 0.08)
            // 颅顶
            p.curve(G.cx, G.skullTop,
                    G.cx - G.rx, G.cy - G.ry * 0.74,
                    G.cx - G.rx * 0.56, G.skullTop)
            p.curve(G.cx + G.rx, G.cy - G.ry * 0.08,
                    G.cx + G.rx * 0.56, G.skullTop,
                    G.cx + G.rx, G.cy - G.ry * 0.74)
            // 右脸颊到下颌
            p.curve(G.cx + G.rx * 0.34, G.cy + G.ry * 0.94,
                    G.cx + G.rx * 1.01, G.cy + G.ry * 0.50,
                    G.cx + G.rx * 0.74, G.cy + G.ry * 0.86)
            // 尖下巴
            p.curve(G.cx, G.chin,
                    G.cx + G.rx * 0.19, G.cy + G.ry * 1.06,
                    G.cx + G.rx * 0.08, G.chin)
            p.curve(G.cx - G.rx * 0.34, G.cy + G.ry * 0.94,
                    G.cx - G.rx * 0.08, G.chin,
                    G.cx - G.rx * 0.19, G.cy + G.ry * 1.06)
            p.curve(G.cx - G.rx, G.cy - G.ry * 0.08,
                    G.cx - G.rx * 0.74, G.cy + G.ry * 0.86,
                    G.cx - G.rx * 1.01, G.cy + G.ry * 0.50)
            p.close()
        }
        ctx.fill(face, with: .color(lit(Look.skin).color))

        // 刘海投在额头上的影。这是让头发"贴在头上"而不是"糊在脸上"的关键。
        ctx.drawLayer { l in
            l.clip(to: face)
            let shade = UnitPath.build(in: rect) { p in
                p.move(G.cx - G.rx * 1.05, G.cy - G.ry * 0.60)
                p.quad(G.cx + G.rx * 1.05, G.cy - G.ry * 0.60, G.cx, G.cy - G.ry * 0.95)
                p.quad(G.cx - G.rx * 1.05, G.cy - G.ry * 0.60, G.cx, G.cy + G.ry * 0.18)
                p.close()
            }
            l.fill(shade, with: .color(lit(Look.skinShade).color(0.62)))

            // 两颊的侧影，把脸的体积撑出来。
            // 用横向渐变从脸缘往里渐隐，效果等同羽化但不走离屏模糊。
            let up = UnitPath(in: rect)
            for sign in [-1.0, 1.0] {
                let cheek = UnitPath.build(in: rect) { p in
                    p.move(G.cx + sign * G.rx * 1.02, G.cy - G.ry * 0.30)
                    p.quad(G.cx + sign * G.rx * 0.36, G.cy + G.ry * 0.98,
                           G.cx + sign * G.rx * 0.92, G.cy + G.ry * 0.60)
                    p.quad(G.cx + sign * G.rx * 1.06, G.cy - G.ry * 0.30,
                           G.cx + sign * G.rx * 1.14, G.cy + G.ry * 0.40)
                    p.close()
                }
                l.fill(cheek, with: .linearGradient(
                    Gradient(colors: [lit(Look.skinShade).color(0.0), lit(Look.skinShade).color(0.50)]),
                    startPoint: up.point(G.cx + sign * G.rx * 0.30, G.cy),
                    endPoint: up.point(G.cx + sign * G.rx * 1.10, G.cy)))
            }
        }
    }

    // MARK: - 腮红

    private static func drawBlush(in ctx: inout GraphicsContext, rect: CGRect,
                                  pose: Pose, lit: (RGB) -> RGB) {
        guard pose.blush > 0.01 else { return }
        let up = UnitPath(in: rect)
        // 用径向渐变代替高斯模糊。
        //
        // `addFilter(.blur)` 每次都会强制一遍离屏渲染，而角色是逐帧重绘的——
        // 四处模糊就是四次全画布离屏，实测占了空闲 CPU 的一大半。
        // 渐变由 GPU 直接填充，观感几乎一样，开销可以忽略。
        for sign in [-1.0, 1.0] {
            let cx = G.cx + sign * G.blushDX
            let e = UnitPath.build(in: rect) { p in
                p.ellipse(cx, G.blushY, 0.044, 0.026)
            }
            ctx.fill(e, with: .radialGradient(
                Gradient(colors: [lit(Look.blush).color(pose.blush * 0.80),
                                  lit(Look.blush).color(0)]),
                center: up.point(cx, G.blushY),
                startRadius: 0,
                endRadius: up.length(0.044)))
        }
    }

    // MARK: - 眉

    private static func drawBrows(in ctx: inout GraphicsContext, rect: CGRect,
                                  pose: Pose, lit: (RGB) -> RGB) {
        let up = UnitPath(in: rect)
        // 眉毛跟着视线走一点点，表情就不会是死的。
        let drift = pose.lookY * 0.004
        var brows = Path()
        for sign in [-1.0, 1.0] {
            brows.addPath(UnitPath.build(in: rect) { p in
                // 外端略低、内端略高，中间拱起——平直的一横会显得没有表情。
                let x0 = G.cx + sign * (G.eyeDX + G.eyeRX * 0.94)
                let x1 = G.cx + sign * (G.eyeDX - G.eyeRX * 0.72)
                p.move(x0, G.browY + 0.010 + drift)
                p.quad(x1, G.browY + 0.001 + drift, G.cx + sign * G.eyeDX * 1.02, G.browY - 0.013 + drift)
            })
        }
        // 白发角色的眉毛要比头发深，否则在亮色刘海上读不出来。
        ctx.stroke(brows, with: .color(lit(Look.brow).darker(0.22).color(0.92)),
                   style: .init(lineWidth: up.length(0.0076), lineCap: .round))
    }

    // MARK: - 眼

    private static func drawEyes(in ctx: inout GraphicsContext, rect: CGRect,
                                 pose: Pose, lit: (RGB) -> RGB) {
        let up = UnitPath(in: rect)
        let open = 1.0 - pose.blink

        for sign in [-1.0, 1.0] {
            let ex = G.cx + sign * G.eyeDX

            // 闭眼（眨眼或笑眼）：画一条向上弯的弧线代替整只眼睛。
            if open < 0.14 || pose.happyEyes > 0.5 {
                let lidCurve = UnitPath.build(in: rect) { p in
                    p.move(ex - G.eyeRX * 0.95, G.eyeY + 0.004)
                    p.quad(ex + G.eyeRX * 0.95, G.eyeY + 0.004, ex, G.eyeY - G.eyeRY * 0.62)
                }
                ctx.stroke(lidCurve, with: .color(lit(Look.lash).color),
                           style: .init(lineWidth: up.length(0.0105), lineCap: .round))
                continue
            }

            // 睁眼：上眼睑下压时，整只眼睛以下缘为轴纵向压缩。
            let bottom = G.eyeY + G.eyeRY
            ctx.drawLayer { eye in
                let anchorY = rect.minY + min(rect.width, rect.height) * bottom
                eye.concatenate(CGAffineTransform(translationX: 0, y: anchorY)
                    .scaledBy(x: 1, y: open)
                    .translatedBy(x: 0, y: -anchorY))

                // 眼白
                let white = UnitPath.build(in: rect) { p in
                    p.move(ex - G.eyeRX, G.eyeY - G.eyeRY * 0.10)
                    p.curve(ex + G.eyeRX, G.eyeY - G.eyeRY * 0.10,
                            ex - G.eyeRX * 0.62, G.eyeY - G.eyeRY * 1.12,
                            ex + G.eyeRX * 0.62, G.eyeY - G.eyeRY * 1.12)
                    p.curve(ex - G.eyeRX, G.eyeY - G.eyeRY * 0.10,
                            ex + G.eyeRX * 0.58, G.eyeY + G.eyeRY * 1.02,
                            ex - G.eyeRX * 0.58, G.eyeY + G.eyeRY * 1.02)
                    p.close()
                }
                eye.fill(white, with: .color(RGB(hex: 0xFDFBFF).color))

                eye.drawLayer { inner in
                    inner.clip(to: white)

                    // 虹膜：跟着视线小幅移动，被眼白裁掉的部分自然形成"眼角"
                    let ix = ex + pose.lookX * G.eyeRX * 0.26
                    let iy = G.eyeY + pose.lookY * G.eyeRY * 0.18
                    let iris = UnitPath.build(in: rect) { p in
                        p.ellipse(ix, iy, G.eyeRX * 0.78, G.eyeRY * 0.86)
                    }
                    inner.fill(iris, with: .linearGradient(
                        Gradient(colors: [lit(Look.irisTop).color, lit(Look.irisBottom).color]),
                        startPoint: up.point(ix, iy - G.eyeRY * 0.86),
                        endPoint: up.point(ix, iy + G.eyeRY * 0.86)))

                    // 虹膜下缘的一圈亮环：让眼睛"通透"的关键
                    let ring = UnitPath.build(in: rect) { p in
                        p.ellipse(ix, iy + G.eyeRY * 0.16, G.eyeRX * 0.60, G.eyeRY * 0.52)
                    }
                    inner.fill(ring, with: .color(lit(Look.irisBottom).lighter(0.35).color(0.55)))

                    // 外圈描边压住边缘
                    inner.stroke(iris, with: .color(lit(Look.irisRing).color(0.8)),
                                 lineWidth: up.length(0.0035))

                    // 瞳孔
                    let pupil = UnitPath.build(in: rect) { p in
                        p.ellipse(ix, iy, G.eyeRX * 0.30, G.eyeRY * 0.40)
                    }
                    inner.fill(pupil, with: .color(RGB(hex: 0x2B2138).color))

                    // 高光：大的在左上，小的在右下。两点高光比一点更有神。
                    let hi1 = UnitPath.build(in: rect) { p in
                        p.ellipse(ix - G.eyeRX * 0.30, iy - G.eyeRY * 0.38, G.eyeRX * 0.28, G.eyeRY * 0.24)
                    }
                    inner.fill(hi1, with: .color(.white.opacity(0.95)))
                    let hi2 = UnitPath.build(in: rect) { p in
                        p.ellipse(ix + G.eyeRX * 0.26, iy + G.eyeRY * 0.36, G.eyeRX * 0.15, G.eyeRY * 0.13)
                    }
                    inner.fill(hi2, with: .color(.white.opacity(0.7)))

                    // 上眼睑压在眼球上的影
                    let lidShade = UnitPath.build(in: rect) { p in
                        p.move(ex - G.eyeRX, G.eyeY - G.eyeRY * 0.10)
                        p.curve(ex + G.eyeRX, G.eyeY - G.eyeRY * 0.10,
                                ex - G.eyeRX * 0.62, G.eyeY - G.eyeRY * 1.12,
                                ex + G.eyeRX * 0.62, G.eyeY - G.eyeRY * 1.12)
                        p.quad(ex - G.eyeRX, G.eyeY - G.eyeRY * 0.10, ex, G.eyeY - G.eyeRY * 0.26)
                        p.close()
                    }
                    inner.fill(lidShade, with: .color(lit(Look.irisRing).color(0.28)))
                }

                // 上睫毛：外眼角要甩出一个尖，这是二次元眼睛的灵魂
                let lash = UnitPath.build(in: rect) { p in
                    p.move(ex - G.eyeRX * 1.02, G.eyeY - G.eyeRY * 0.16)
                    p.curve(ex + G.eyeRX * 1.06, G.eyeY - G.eyeRY * 0.22,
                            ex - G.eyeRX * 0.60, G.eyeY - G.eyeRY * 1.20,
                            ex + G.eyeRX * 0.62, G.eyeY - G.eyeRY * 1.18)
                    p.curve(ex - G.eyeRX * 1.02, G.eyeY - G.eyeRY * 0.16,
                            ex + G.eyeRX * 0.60, G.eyeY - G.eyeRY * 0.86,
                            ex - G.eyeRX * 0.60, G.eyeY - G.eyeRY * 0.90)
                    p.close()
                }
                eye.fill(lash, with: .color(lit(Look.lash).color))

                // 外眼角的尖
                let flick = UnitPath.build(in: rect) { p in
                    let ox = ex + sign * G.eyeRX * 1.00
                    p.move(ox, G.eyeY - G.eyeRY * 0.34)
                    p.quad(ox + sign * G.eyeRX * 0.42, G.eyeY - G.eyeRY * 0.92,
                           ox + sign * G.eyeRX * 0.30, G.eyeY - G.eyeRY * 0.86)
                    p.quad(ox, G.eyeY - G.eyeRY * 0.34, ox + sign * G.eyeRX * 0.12, G.eyeY - G.eyeRY * 0.62)
                    p.close()
                }
                eye.fill(flick, with: .color(lit(Look.lash).color))

                // 下眼睑：极短的一笔，只在眼睛正下方点一下。
                // 拉长了会变成一道横贯脸颊的线，看起来像疤。
                let lower = UnitPath.build(in: rect) { p in
                    p.move(ex - G.eyeRX * 0.34, G.eyeY + G.eyeRY * 0.96)
                    p.quad(ex + G.eyeRX * 0.44, G.eyeY + G.eyeRY * 0.86, ex + G.eyeRX * 0.06, G.eyeY + G.eyeRY * 1.02)
                }
                eye.stroke(lower, with: .color(lit(Look.lash).color(0.28)),
                           style: .init(lineWidth: up.length(0.0030), lineCap: .round))
            }
        }
    }

    // MARK: - 鼻与嘴

    private static func drawNoseMouth(in ctx: inout GraphicsContext, rect: CGRect,
                                      pose: Pose, lit: (RGB) -> RGB) {
        let up = UnitPath(in: rect)

        // 鼻子只用一个极小的阴影点表示。二次元正脸画出鼻梁会立刻变老气。
        let nose = UnitPath.build(in: rect) { p in
            p.move(G.cx + 0.004, G.noseY - 0.006)
            p.quad(G.cx + 0.016, G.noseY + 0.004, G.cx + 0.015, G.noseY - 0.002)
        }
        ctx.stroke(nose, with: .color(lit(Look.skinDeep).color(0.7)),
                   style: .init(lineWidth: up.length(0.0042), lineCap: .round))

        // 嘴：一个小小的上扬弧。
        // 颜色和线宽都要克制——画重了就成了涂口红，跟"放松陪伴"的调性不符。
        let w = 0.015 + pose.smile * 0.013
        let lift = 0.004 + pose.smile * 0.011
        let mouth = UnitPath.build(in: rect) { p in
            p.move(G.cx - w, G.mouthY)
            p.quad(G.cx + w, G.mouthY, G.cx, G.mouthY + lift)
        }
        ctx.stroke(mouth, with: .color(lit(Look.mouth).color(0.68)),
                   style: .init(lineWidth: up.length(0.0044), lineCap: .round))
    }

    // MARK: - 刘海

    private static func drawBangs(in ctx: inout GraphicsContext, rect: CGRect,
                                  pose: Pose, lit: (RGB) -> RGB, rim: (RGB) -> RGB) {
        let up = UnitPath(in: rect)
        let sway = pose.hairSway * 0.003

        // 尖角式刘海：沿头顶铺一层，下缘做成一排发梢的尖。
        let bangs = UnitPath.build(in: rect) { p in
            p.move(G.cx - G.rx * 1.10, G.cy + G.ry * 0.10)
            // 沿颅顶到右侧
            p.curve(G.cx, G.skullTop - 0.030,
                    G.cx - G.rx * 1.12, G.cy - G.ry * 0.86,
                    G.cx - G.rx * 0.60, G.skullTop - 0.030)
            p.curve(G.cx + G.rx * 1.10, G.cy + G.ry * 0.10,
                    G.cx + G.rx * 0.60, G.skullTop - 0.030,
                    G.cx + G.rx * 1.12, G.cy - G.ry * 0.86)
            // 下缘：右→左，一排发梢。
            // 尖端收在眉毛高度附近而不是眼睛高度——扎到眼睛上会显得凶。
            // 三个发梢刻意不等长、不等宽。完全对称的三个尖会读成图形而不是头发。
            p.quad(G.cx + G.rx * 0.78, G.cy + G.ry * 0.32 + sway, G.cx + G.rx * 1.04, G.cy + G.ry * 0.20)
            p.quad(G.cx + G.rx * 0.50, G.cy - G.ry * 0.24, G.cx + G.rx * 0.68, G.cy - G.ry * 0.10)
            p.quad(G.cx + G.rx * 0.26, G.cy + G.ry * 0.08 + sway, G.cx + G.rx * 0.38, G.cy - G.ry * 0.06)
            p.quad(G.cx - G.rx * 0.02, G.cy - G.ry * 0.40, G.cx + G.rx * 0.10, G.cy - G.ry * 0.22)
            p.quad(G.cx - G.rx * 0.38, G.cy + G.ry * 0.24 + sway, G.cx - G.rx * 0.22, G.cy + G.ry * 0.04)
            p.quad(G.cx - G.rx * 0.64, G.cy - G.ry * 0.22, G.cx - G.rx * 0.54, G.cy - G.ry * 0.06)
            p.quad(G.cx - G.rx * 1.10, G.cy + G.ry * 0.12, G.cx - G.rx * 0.92, G.cy + G.ry * 0.24)
            p.close()
        }

        // 渐变走斜向：左上冷白、右下带台灯的暖色。
        // 这一条对角线就是"夜里被暖光照着"的全部表达，比整体染色干净得多。
        ctx.fill(bangs, with: .linearGradient(
            Gradient(colors: [lit(Look.hair).lighter(0.25).color, lit(Look.hair).color, rim(Look.hairMid).color]),
            startPoint: up.point(0.30, G.skullTop - 0.03),
            endPoint: up.point(0.78, G.cy + G.ry * 0.40)))

        // 发丝分组线。
        //
        // 这几笔非常容易过火：上一版用 hairShade + 0.45 不透明度画在亮白发上，
        // 对比太强，看着像头顶被划了三道。发丝只需要"暗示"分组，不是描边。
        var strands = Path()
        for (sx, ex, cxo) in [(-0.066, -0.042, -0.058), (0.036, 0.062, 0.048), (-0.002, 0.006, 0.000)] {
            strands.addPath(UnitPath.build(in: rect) { p in
                p.move(G.cx + sx, G.skullTop + 0.042)
                p.quad(G.cx + ex, G.cy - G.ry * 0.46, G.cx + cxo, G.cy - G.ry * 0.72)
            })
        }
        ctx.stroke(strands, with: .color(lit(Look.hairMid).darker(0.12).color(0.26)),
                   style: .init(lineWidth: up.length(0.0034), lineCap: .round))

        // 头顶高光带：白发最重要的一笔，没有它就是一坨白。
        // 上下两端渐隐，效果等同羽化，但不需要离屏模糊。
        let shine = UnitPath.build(in: rect) { p in
            p.move(G.cx - G.rx * 0.70, G.cy - G.ry * 0.68)
            p.quad(G.cx + G.rx * 0.70, G.cy - G.ry * 0.68, G.cx, G.cy - G.ry * 1.02)
            p.quad(G.cx - G.rx * 0.70, G.cy - G.ry * 0.68, G.cx, G.cy - G.ry * 0.74)
            p.close()
        }
        ctx.fill(shine, with: .linearGradient(
            Gradient(stops: [
                .init(color: .white.opacity(0.0), location: 0.0),
                .init(color: .white.opacity(0.60), location: 0.42),
                .init(color: .white.opacity(0.32), location: 0.75),
                .init(color: .white.opacity(0.0), location: 1.0),
            ]),
            startPoint: up.point(G.cx, G.cy - G.ry * 1.02),
            endPoint: up.point(G.cx, G.cy - G.ry * 0.64)))
    }

    // MARK: - 侧发

    private static func drawSideLocks(in ctx: inout GraphicsContext, rect: CGRect,
                                      pose: Pose, lit: (RGB) -> RGB, rim: (RGB) -> RGB) {
        let up = UnitPath(in: rect)

        for sign in [-1.0, 1.0] {
            // 两侧摆动相位相反，看起来才像被同一阵风带动。
            let sway = pose.hairSway * 0.013 * sign

            // 细长的一缕，从鬓角垂到锁骨附近收成尖。
            //
            // 上一版把它画成了又短又宽的块，结果在脸颊旁变成两坨深色补丁，
            // 而且和后面的长发完全重复。侧发的作用是"框住脸"，
            // 所以必须细、必须长、颜色必须和发团一致。
            let lock = UnitPath.build(in: rect) { p in
                p.move(G.cx + sign * G.rx * 1.05, G.cy - G.ry * 0.58)
                // 外缘：贴着脸颊外侧垂下
                p.curve(G.cx + sign * G.rx * 0.80 + sway, 0.652,
                        G.cx + sign * G.rx * 1.16, G.cy + G.ry * 0.70,
                        G.cx + sign * G.rx * 1.02 + sway, 0.548)
                // 内缘：从发梢尖收回鬓角
                p.curve(G.cx + sign * G.rx * 0.86, G.cy - G.ry * 0.44,
                        G.cx + sign * G.rx * 0.66 + sway, 0.520,
                        G.cx + sign * G.rx * 0.76, G.cy + G.ry * 0.30)
                p.close()
            }
            ctx.fill(lock, with: .linearGradient(
                Gradient(colors: [lit(Look.hair).lighter(0.10).color, rim(Look.hair).color, rim(Look.hairMid).color]),
                startPoint: up.point(0.5, G.cy - G.ry * 0.5),
                endPoint: up.point(0.5, 0.66)))

            // 内缘的一道淡影，把这一缕和脸分层
            let edge = UnitPath.build(in: rect) { p in
                p.move(G.cx + sign * G.rx * 0.90, G.cy - G.ry * 0.42)
                p.quad(G.cx + sign * G.rx * 0.74, 0.560, G.cx + sign * G.rx * 0.80, G.cy + G.ry * 0.60)
            }
            ctx.stroke(edge, with: .color(lit(Look.hairShade).color(0.42)),
                       style: .init(lineWidth: up.length(0.0035), lineCap: .round))
        }
    }

    // MARK: - 发夹

    private static func drawClip(in ctx: inout GraphicsContext, rect: CGRect, lit: (RGB) -> RGB) {
        // 一个小小的十字星。整张脸全是冷色，这里需要一点暖的强调色。
        let up = UnitPath(in: rect)
        let x = G.cx + G.rx * 0.86
        let y = G.cy - G.ry * 0.62
        let star = UnitPath.build(in: rect) { p in
            let a = 0.019, b = 0.0055
            p.move(x, y - a)
            p.quad(x + b, y - b, x + b * 0.5, y - b * 1.6)
            p.quad(x + a, y, x + b * 1.6, y - b * 0.5)
            p.quad(x + b, y + b, x + b * 1.6, y + b * 0.5)
            p.quad(x, y + a, x + b * 0.5, y + b * 1.6)
            p.quad(x - b, y + b, x - b * 0.5, y + b * 1.6)
            p.quad(x - a, y, x - b * 1.6, y + b * 0.5)
            p.quad(x - b, y - b, x - b * 1.6, y - b * 0.5)
            p.quad(x, y - a, x - b * 0.5, y - b * 1.6)
            p.close()
        }
        ctx.fill(star, with: .color(lit(Look.clip).color))
        ctx.stroke(star, with: .color(lit(Look.clip).darker(0.3).color(0.6)),
                   lineWidth: up.length(0.002))
    }

    // MARK: - 呆毛

    private static func drawAhoge(in ctx: inout GraphicsContext, rect: CGRect,
                                  pose: Pose, lit: (RGB) -> RGB) {
        // 呆毛的摆幅要明显大于其他头发——它是整个角色最有表情的一根线。
        let sway = pose.hairSway * 0.030
        // 细一点、弯一点。上一版太粗太直，像头上长了个角。
        let ahoge = UnitPath.build(in: rect) { p in
            p.move(G.cx - 0.016, G.skullTop - 0.014)
            p.curve(G.cx + 0.044 + sway, G.skullTop - 0.096,
                    G.cx - 0.044, G.skullTop - 0.070,
                    G.cx - 0.004 + sway, G.skullTop - 0.098)
            p.curve(G.cx + 0.004, G.skullTop - 0.012,
                    G.cx + 0.022 + sway, G.skullTop - 0.080,
                    G.cx + 0.014, G.skullTop - 0.046)
            p.close()
        }
        ctx.fill(ahoge, with: .color(lit(Look.hair).color))
        ctx.stroke(ahoge, with: .color(lit(Look.hairShade).color(0.45)),
                   lineWidth: UnitPath(in: rect).length(0.0022))
    }

    // MARK: - 耳机

    private static func drawHeadphones(in ctx: inout GraphicsContext, rect: CGRect, lit: (RGB) -> RGB) {
        let up = UnitPath(in: rect)

        // 头梁：从左耳罩绕过头顶到右耳罩
        let band = UnitPath.build(in: rect) { p in
            p.move(G.cx - G.canX, G.canY - 0.020)
            p.curve(G.cx + G.canX, G.canY - 0.020,
                    G.cx - G.canX - 0.012, G.skullTop - 0.070,
                    G.cx + G.canX + 0.012, G.skullTop - 0.070)
        }
        ctx.stroke(band, with: .color(lit(Look.cans).color),
                   style: .init(lineWidth: up.length(0.0195), lineCap: .round))
        // 头梁上的一道高光，塑料/皮革的质感全靠它
        ctx.stroke(band, with: .color(lit(Look.cansEdge).color(0.75)),
                   style: .init(lineWidth: up.length(0.0055), lineCap: .round))

        // 两只耳罩
        for sign in [-1.0, 1.0] {
            let x = G.cx + sign * G.canX
            let outer = UnitPath.build(in: rect) { p in
                p.ellipse(x, G.canY, 0.0405, 0.0525)
            }
            ctx.fill(outer, with: .linearGradient(
                Gradient(colors: [lit(Look.cansEdge).color, lit(Look.cans).color]),
                startPoint: up.point(x, G.canY - 0.05),
                endPoint: up.point(x, G.canY + 0.05)))

            let pad = UnitPath.build(in: rect) { p in
                p.ellipse(x - sign * 0.004, G.canY, 0.0265, 0.0370)
            }
            ctx.fill(pad, with: .color(lit(Look.cansPad).color))

            // 耳罩上的一小块高光
            let gloss = UnitPath.build(in: rect) { p in
                p.ellipse(x + sign * 0.012, G.canY - 0.022, 0.0090, 0.0125)
            }
            ctx.fill(gloss, with: .color(.white.opacity(0.22)))
        }
    }
}

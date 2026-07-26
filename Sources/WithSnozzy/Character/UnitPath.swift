import SwiftUI

/// 在 0…1 的单位坐标里构造路径，最后一次性映射到实际像素。
///
/// 角色的每一根线条都是手写的贝塞尔控制点。如果每个点都要乘缩放加偏移，
/// 路径数据会被算术淹没，改起来根本看不出改的是哪根线。
struct UnitPath {
    /// 单位方格如何铺到目标矩形。
    enum Fit {
        /// 等比：取短边铺满并居中。角色用这个，保证她不会被窗口拉变形。
        case aspect
        /// 拉伸：x 铺满宽、y 铺满高。房间布景用这个，家具要跟着窗口一起变宽。
        case stretch
    }

    private(set) var path = Path()
    private let scaleX: CGFloat
    private let scaleY: CGFloat
    private let originX: CGFloat
    private let originY: CGFloat
    /// 线宽等标量的换算基准，两种模式都取短边，避免拉伸时描边粗细失控。
    private let lengthScale: CGFloat

    init(in rect: CGRect, fit: Fit = .aspect) {
        lengthScale = min(rect.width, rect.height)
        switch fit {
        case .aspect:
            scaleX = lengthScale
            scaleY = lengthScale
            originX = rect.minX + (rect.width - lengthScale) / 2
            originY = rect.minY + (rect.height - lengthScale) / 2
        case .stretch:
            scaleX = rect.width
            scaleY = rect.height
            originX = rect.minX
            originY = rect.minY
        }
    }

    func point(_ x: Double, _ y: Double) -> CGPoint {
        CGPoint(x: originX + x * scaleX, y: originY + y * scaleY)
    }

    /// 单位长度换算成像素，画线宽时用。
    func length(_ v: Double) -> CGFloat { v * lengthScale }

    mutating func move(_ x: Double, _ y: Double) {
        path.move(to: point(x, y))
    }

    mutating func line(_ x: Double, _ y: Double) {
        path.addLine(to: point(x, y))
    }

    /// 三次贝塞尔：终点 + 两个控制点。
    mutating func curve(_ x: Double, _ y: Double,
                        _ c1x: Double, _ c1y: Double,
                        _ c2x: Double, _ c2y: Double) {
        path.addCurve(to: point(x, y), control1: point(c1x, c1y), control2: point(c2x, c2y))
    }

    /// 二次贝塞尔：终点 + 一个控制点。发梢这类简单弧线用它更省事。
    mutating func quad(_ x: Double, _ y: Double, _ cx: Double, _ cy: Double) {
        path.addQuadCurve(to: point(x, y), control: point(cx, cy))
    }

    mutating func close() { path.closeSubpath() }

    /// 以 (x, y) 为中心的椭圆。
    mutating func ellipse(_ x: Double, _ y: Double, _ rx: Double, _ ry: Double) {
        path.addEllipse(in: CGRect(
            x: originX + (x - rx) * scaleX,
            y: originY + (y - ry) * scaleY,
            width: rx * 2 * scaleX,
            height: ry * 2 * scaleY))
    }

    /// 轴对齐矩形。
    mutating func rect(_ x0: Double, _ y0: Double, _ x1: Double, _ y1: Double) {
        path.addRect(CGRect(
            x: originX + x0 * scaleX, y: originY + y0 * scaleY,
            width: (x1 - x0) * scaleX, height: (y1 - y0) * scaleY))
    }

    /// 圆角矩形。
    mutating func roundedRect(_ x0: Double, _ y0: Double, _ x1: Double, _ y1: Double, _ r: Double) {
        path.addRoundedRect(
            in: CGRect(x: originX + x0 * scaleX, y: originY + y0 * scaleY,
                       width: (x1 - x0) * scaleX, height: (y1 - y0) * scaleY),
            cornerSize: CGSize(width: r * lengthScale, height: r * lengthScale),
            style: .continuous)
    }

    /// 从零开始建一条路径的语法糖。
    static func build(in rect: CGRect, fit: Fit = .aspect, _ body: (inout UnitPath) -> Void) -> Path {
        var up = UnitPath(in: rect, fit: fit)
        body(&up)
        return up.path
    }
}

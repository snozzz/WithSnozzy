import SwiftUI

/// 在 0…1 的单位坐标里构造路径，最后一次性映射到实际像素。
///
/// 角色的每一根线条都是手写的贝塞尔控制点。如果每个点都要乘缩放加偏移，
/// 路径数据会被算术淹没，改起来根本看不出改的是哪根线。
struct UnitPath {
    private(set) var path = Path()
    private let scale: CGFloat
    private let originX: CGFloat
    private let originY: CGFloat

    /// - Parameter rect: 单位正方形要铺到的实际矩形（取短边保持等比）。
    init(in rect: CGRect) {
        scale = min(rect.width, rect.height)
        originX = rect.minX + (rect.width - scale) / 2
        originY = rect.minY + (rect.height - scale) / 2
    }

    func point(_ x: Double, _ y: Double) -> CGPoint {
        CGPoint(x: originX + x * scale, y: originY + y * scale)
    }

    /// 单位长度换算成像素，画线宽时用。
    func length(_ v: Double) -> CGFloat { v * scale }

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
            x: originX + (x - rx) * scale,
            y: originY + (y - ry) * scale,
            width: rx * 2 * scale,
            height: ry * 2 * scale))
    }

    /// 从零开始建一条路径的语法糖。
    static func build(in rect: CGRect, _ body: (inout UnitPath) -> Void) -> Path {
        var up = UnitPath(in: rect)
        body(&up)
        return up.path
    }
}

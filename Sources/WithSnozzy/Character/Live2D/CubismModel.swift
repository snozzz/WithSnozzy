#if LIVE2D

import CCubismCore
import Foundation

/// 一个加载好的 Live2D 模型（`.moc3`）。
///
/// Cubism Core 是一套「调用方自己管内存」的 C 接口：它不分配任何东西，
/// 而是要求你给两块对齐好的缓冲区——moc 要 64 字节对齐，model 要 16 字节对齐。
/// 这两块内存必须活得比模型久，所以由本类持有，`deinit` 里统一释放。
///
/// 这里刻意**只用 Core**，不引入 SDK 里那套 C++ Framework。
/// Core 给的信息刚好够渲染，而纯 C 接口让 Swift 侧完全不需要 C++ 互操作。
final class CubismModel {

    /// 模型自带的画布信息，用来把模型坐标映射到屏幕。
    struct Canvas {
        /// 画布尺寸（像素）。
        let size: SIMD2<Float>
        /// 原点在画布中的位置（像素）。
        let origin: SIMD2<Float>
        /// 每单位对应多少像素。
        let pixelsPerUnit: Float
    }

    /// 一个可绘制片（一块网格）。索引、UV、遮罩关系在整个生命周期里不变，
    /// 所以只在加载时读一次；顶点位置和不透明度每帧都会变，另外单独取。
    struct Drawable {
        let index: Int
        let id: String
        let textureIndex: Int
        let indexCount: Int
        let vertexCount: Int
        /// 参与遮罩的 drawable 下标；空表示不需要裁剪。
        let masks: [Int]
        let isDoubleSided: Bool
        let isInvertedMask: Bool
        let blend: Blend
    }

    enum Blend {
        case normal, additive, multiplicative
    }

    // MARK: - 内存

    private let mocMemory: UnsafeMutableRawPointer
    private let mocByteCount: Int
    private let modelMemory: UnsafeMutableRawPointer
    private let modelByteCount: Int
    private let model: OpaquePointer

    // MARK: - 静态信息

    let canvas: Canvas
    let drawables: [Drawable]
    let parameterIds: [String]
    private let parameterIndexById: [String: Int32]
    private let parameterMin: [Float]
    private let parameterMax: [Float]
    private let parameterDefault: [Float]

    // MARK: - 加载

    enum LoadError: Error, CustomStringConvertible {
        case unreadable(String)
        case inconsistentMoc
        case reviveFailed
        case initializeFailed

        var description: String {
            switch self {
            case .unreadable(let p): "读不到文件: \(p)"
            case .inconsistentMoc: ".moc3 校验失败（文件损坏，或是本 Core 不支持的版本）"
            case .reviveFailed: "csmReviveMocInPlace 失败"
            case .initializeFailed: "csmInitializeModelInPlace 失败"
            }
        }
    }

    init(mocPath: String) throws {
        guard let data = FileManager.default.contents(atPath: mocPath) else {
            throw LoadError.unreadable(mocPath)
        }

        // ── moc ──
        //
        // 先全部用局部变量，最后再赋给存储属性。
        // 直接往属性上写的话，下面那个 withUnsafeBytes 闭包会在"所有成员都初始化完"
        // 之前捕获 self，Swift 不允许。
        let mocBytes = data.count
        let mocPtr = UnsafeMutableRawPointer.allocate(byteCount: mocBytes, alignment: csmAlignofMoc)
        data.withUnsafeBytes { raw in
            if let base = raw.baseAddress {
                mocPtr.copyMemory(from: base, byteCount: mocBytes)
            }
        }

        // 先做一致性校验再复活。跳过这步的话，损坏的文件会直接把进程带崩，
        // 而不是给一个能处理的错误。
        guard csmHasMocConsistency(mocPtr, UInt32(mocBytes)) != 0 else {
            mocPtr.deallocate()
            throw LoadError.inconsistentMoc
        }
        guard let moc = csmReviveMocInPlace(mocPtr, UInt32(mocBytes)) else {
            mocPtr.deallocate()
            throw LoadError.reviveFailed
        }

        // ── model ──
        let modelBytes = Int(csmGetSizeofModel(moc))
        let modelPtr = UnsafeMutableRawPointer.allocate(byteCount: modelBytes, alignment: csmAlignofModel)
        guard let m = csmInitializeModelInPlace(moc, modelPtr, UInt32(modelBytes)) else {
            modelPtr.deallocate()
            mocPtr.deallocate()
            throw LoadError.initializeFailed
        }

        mocMemory = mocPtr
        mocByteCount = mocBytes
        modelMemory = modelPtr
        modelByteCount = modelBytes
        model = m

        // ── 画布 ──
        var size = csmVector2(), origin = csmVector2(), ppu: Float = 0
        csmReadCanvasInfo(model, &size, &origin, &ppu)
        canvas = Canvas(size: SIMD2(size.X, size.Y),
                        origin: SIMD2(origin.X, origin.Y),
                        pixelsPerUnit: ppu)

        // ── 参数表 ──
        let paramCount = Int(csmGetParameterCount(model))
        let ids = csmGetParameterIds(model)
        var names: [String] = []
        var lookup: [String: Int32] = [:]
        names.reserveCapacity(paramCount)
        for i in 0..<paramCount {
            let name = ids.flatMap { $0[i].map { String(cString: $0) } } ?? "param\(i)"
            names.append(name)
            lookup[name] = Int32(i)
        }
        parameterIds = names
        parameterIndexById = lookup
        parameterMin = Self.floats(csmGetParameterMinimumValues(model), paramCount)
        parameterMax = Self.floats(csmGetParameterMaximumValues(model), paramCount)
        parameterDefault = Self.floats(csmGetParameterDefaultValues(model), paramCount)

        // ── drawable 的静态部分 ──
        let drawableCount = Int(csmGetDrawableCount(model))
        let dIds = csmGetDrawableIds(model)
        let textures = csmGetDrawableTextureIndices(model)
        let flags = csmGetDrawableConstantFlags(model)
        let indexCounts = csmGetDrawableIndexCounts(model)
        let vertexCounts = csmGetDrawableVertexCounts(model)
        let maskCounts = csmGetDrawableMaskCounts(model)
        let masks = csmGetDrawableMasks(model)

        var list: [Drawable] = []
        list.reserveCapacity(drawableCount)
        for i in 0..<drawableCount {
            let f = flags?[i] ?? 0
            let maskCount = Int(maskCounts?[i] ?? 0)
            var maskList: [Int] = []
            if maskCount > 0, let row = masks?[i] {
                maskList = (0..<maskCount).map { Int(row[$0]) }
            }
            let blend: Blend =
                (f & UInt8(csmBlendAdditive)) != 0 ? .additive
                : (f & UInt8(csmBlendMultiplicative)) != 0 ? .multiplicative
                : .normal

            list.append(Drawable(
                index: i,
                id: dIds.flatMap { $0[i].map { String(cString: $0) } } ?? "drawable\(i)",
                textureIndex: Int(textures?[i] ?? 0),
                indexCount: Int(indexCounts?[i] ?? 0),
                vertexCount: Int(vertexCounts?[i] ?? 0),
                masks: maskList,
                isDoubleSided: (f & UInt8(csmIsDoubleSided)) != 0,
                isInvertedMask: (f & UInt8(csmIsInvertedMask)) != 0,
                blend: blend))
        }
        drawables = list

        // 先按默认参数算一次，保证外部随时读到的都是有效数据。
        update()
    }

    deinit {
        modelMemory.deallocate()
        mocMemory.deallocate()
    }

    private static func floats(_ p: UnsafePointer<Float>?, _ n: Int) -> [Float] {
        guard let p else { return Array(repeating: 0, count: n) }
        return Array(UnsafeBufferPointer(start: p, count: n))
    }

    // MARK: - 参数

    /// 参数下标。找不到返回 nil——不同模型的参数名不一定齐全，
    /// 所以绑定层必须容忍缺失，而不是崩掉。
    func parameterIndex(_ id: String) -> Int32? { parameterIndexById[id] }

    /// 按下标设置参数值，自动夹在模型声明的取值范围内。
    func setParameter(_ index: Int32, _ value: Float) {
        guard let values = csmGetParameterValues(model) else { return }
        let i = Int(index)
        guard i >= 0 && i < parameterMin.count else { return }
        values[i] = min(max(value, parameterMin[i]), parameterMax[i])
    }

    func setParameter(_ id: String, _ value: Float) {
        guard let i = parameterIndexById[id] else { return }
        setParameter(i, value)
    }

    func parameterRange(_ index: Int32) -> (min: Float, max: Float, default: Float) {
        let i = Int(index)
        guard i >= 0 && i < parameterMin.count else { return (0, 1, 0) }
        return (parameterMin[i], parameterMax[i], parameterDefault[i])
    }

    /// 把所有参数恢复到默认值。
    func resetParameters() {
        guard let values = csmGetParameterValues(model) else { return }
        for i in 0..<parameterDefault.count { values[i] = parameterDefault[i] }
    }

    // MARK: - 每帧

    /// 按当前参数重新计算变形。改完参数必须调它，否则读到的还是上一帧的顶点。
    func update() {
        csmUpdateModel(model)
        csmResetDrawableDynamicFlags(model)
    }

    /// 绘制顺序：返回按渲染顺序排好的 drawable 下标。
    ///
    /// Core 给的是「每个 drawable 的渲染序号」，而渲染要的是「第几个画谁」，
    /// 所以这里要反过来排一次。
    func sortedDrawableIndices() -> [Int] {
        guard let orders = csmGetRenderOrders(model) else {
            return Array(drawables.indices)
        }
        return drawables.indices.sorted { orders[$0] < orders[$1] }
    }

    func opacity(of drawable: Int) -> Float {
        csmGetDrawableOpacities(model)?[drawable] ?? 1
    }

    func isVisible(_ drawable: Int) -> Bool {
        guard let f = csmGetDrawableDynamicFlags(model)?[drawable] else { return true }
        return (f & UInt8(csmIsVisible)) != 0
    }

    /// 变形后的顶点位置。每帧都会变。
    func vertexPositions(of drawable: Int) -> UnsafePointer<csmVector2>? {
        csmGetDrawableVertexPositions(model)?[drawable]
    }

    /// UV。整个生命周期不变，可以只读一次传给 GPU。
    func vertexUVs(of drawable: Int) -> UnsafePointer<csmVector2>? {
        csmGetDrawableVertexUvs(model)?[drawable]
    }

    /// 三角形索引。同样不变。
    func indices(of drawable: Int) -> UnsafePointer<UInt16>? {
        csmGetDrawableIndices(model)?[drawable]
    }

    /// Core 的版本号，形如 "5.2.0"。
    static var coreVersion: String {
        let v = csmGetVersion()
        return "\((v >> 24) & 0xFF).\((v >> 16) & 0xFF).\(v & 0xFFFF)"
    }
}

#endif

import Foundation
#if LIVE2D
import CoreGraphics
import ImageIO
import Metal
import UniformTypeIdentifiers
#endif

/// `--live2d-info [路径]`：加载一个 Live2D 模型并把它的结构打印出来。
///
/// 这一步刻意排在写渲染器**之前**。渲染器出问题时，症状往往是"一片黑"，
/// 根本分不清是模型没加载、参数没生效、还是 Metal 管线画错了。
/// 先用这个把「加载和变形」这一段单独验证掉，后面调渲染就只剩渲染的问题。
enum Live2DInfo {

    static var requestedPath: String? {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: "--live2d-info") else { return nil }
        return i + 1 < args.count ? args[i + 1] : "hiyori_en"
    }

    /// `--live2d-render 输出.png [模型目录]`：离屏渲染一帧存成 PNG。
    static var renderRequest: (out: String, model: String)? {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: "--live2d-render"), i + 1 < args.count else { return nil }
        let out = args[i + 1]
        let model = i + 2 < args.count ? args[i + 2] : "hiyori_en/hiyori_free"
        return (out, model)
    }

    /// 离屏渲染一帧。
    ///
    /// 和 `--live2d-info` 同样的思路：先把「渲染」和「SwiftUI 集成」分开验证。
    /// 直接接进界面的话，出问题只会看到一片空白，分不清是渲染器画错了、
    /// 视图尺寸为零、还是图层被别的东西盖住了。
    static func render(out: String, modelPath: String) {
#if LIVE2D
        guard let model3 = Live2DAsset.find(in: modelPath) else {
            print("❌ \(modelPath) 下没找到 .model3.json"); exit(1)
        }
        guard let device = MTLCreateSystemDefaultDevice() else {
            print("❌ 没有可用的 Metal 设备"); exit(1)
        }

        do {
            let asset = try Live2DAsset(model3Path: model3)
            let model = try CubismModel(mocPath: asset.mocURL.path)
            let renderer = try Live2DRenderer(model: model,
                                              textureURLs: asset.textureURLs,
                                              device: device)

            if !renderer.missingParameters.isEmpty {
                print("⚠️ 模型缺少这些参数（会被跳过）: \(renderer.missingParameters.joined(separator: ", "))")
            }

            // 给一个有辨识度的姿态：微笑、眼睛看向一侧、头略歪，
            // 这样一眼能看出参数到底生效没有。
            var pose = SnozzyRig.pose(time: 2.0, kick: 0, playing: true, mood: 0.9)
            pose.blink = 0
            pose.lookX = 0.7
            pose.headTilt = 0.05
            renderer.pose = pose
            // --default：跳过姿态绑定，用模型自带的默认参数。
            renderer.useDefaultPose = CommandLine.arguments.contains("--default")
            renderer.flatDebug = CommandLine.arguments.contains("--flat")

            let side = 1024
            let desc = MTLTextureDescriptor.texture2DDescriptor(
                pixelFormat: .bgra8Unorm, width: side, height: side, mipmapped: false)
            desc.usage = [.renderTarget, .shaderRead]
            desc.storageMode = .managed
            guard let texture = device.makeTexture(descriptor: desc) else {
                print("❌ 创建离屏纹理失败"); exit(1)
            }

            renderer.renderOffscreen(into: texture)
            try writePNG(texture: texture, to: out)

            print("已写入 \(out)  (\(side)×\(side))")
            print("画布 \(Int(model.canvas.size.x))×\(Int(model.canvas.size.y))，"
                  + "drawable \(model.drawables.count) 片")
            exit(0)
        } catch {
            print("❌ \(error)")
            exit(1)
        }
#else
        print("这个构建没有启用 LIVE2D。"); exit(1)
#endif
    }

#if LIVE2D
    private static func writePNG(texture: MTLTexture, to path: String) throws {
        let w = texture.width, h = texture.height
        var bytes = [UInt8](repeating: 0, count: w * h * 4)
        texture.getBytes(&bytes, bytesPerRow: w * 4,
                         from: MTLRegionMake2D(0, 0, w, h), mipmapLevel: 0)

        // Metal 给的是 BGRA、预乘 alpha。
        let cs = CGColorSpaceCreateDeviceRGB()
        let info = CGBitmapInfo(rawValue:
            CGImageAlphaInfo.premultipliedFirst.rawValue | CGBitmapInfo.byteOrder32Little.rawValue)
        guard let provider = CGDataProvider(data: Data(bytes) as CFData),
              let image = CGImage(width: w, height: h, bitsPerComponent: 8, bitsPerPixel: 32,
                                  bytesPerRow: w * 4, space: cs, bitmapInfo: info,
                                  provider: provider, decode: nil, shouldInterpolate: false,
                                  intent: .defaultIntent),
              let dest = CGImageDestinationCreateWithURL(
                URL(fileURLWithPath: path) as CFURL, "public.png" as CFString, 1, nil)
        else {
            throw CubismModel.LoadError.unreadable(path)
        }
        CGImageDestinationAddImage(dest, image, nil)
        CGImageDestinationFinalize(dest)
    }
#endif

    static func run(path: String) {
#if LIVE2D
        print("Cubism Core \(CubismModel.coreVersion)")

        // 给的是目录就自己找 model3.json。
        var model3 = path
        var isDir: ObjCBool = false
        if FileManager.default.fileExists(atPath: path, isDirectory: &isDir), isDir.boolValue {
            guard let found = Live2DAsset.find(in: path) else {
                print("❌ \(path) 下没找到 .model3.json")
                exit(1)
            }
            model3 = found
        }

        do {
            let asset = try Live2DAsset(model3Path: model3)
            print("素材: \(model3)")
            print("  moc3   : \(asset.mocURL.lastPathComponent)")
            print("  贴图   : \(asset.textureURLs.map(\.lastPathComponent).joined(separator: ", "))")
            print("  物理   : \(asset.physicsURL?.lastPathComponent ?? "无")")
            print("  动作   : \(asset.motions.map { "\($0.key)×\($0.value.count)" }.sorted().joined(separator: " "))")

            let model = try CubismModel(mocPath: asset.mocURL.path)
            let c = model.canvas
            print("画布: \(Int(c.size.x))×\(Int(c.size.y)) px，原点 (\(Int(c.origin.x)), \(Int(c.origin.y)))，\(Int(c.pixelsPerUnit)) px/unit")

            print("参数: \(model.parameterIds.count) 个")
            print("Drawable: \(model.drawables.count) 片")
            let totalVerts = model.drawables.reduce(0) { $0 + $1.vertexCount }
            let totalTris = model.drawables.reduce(0) { $0 + $1.indexCount / 3 }
            let masked = model.drawables.filter { !$0.masks.isEmpty }
            let additive = model.drawables.filter { $0.blend == .additive }
            let multiply = model.drawables.filter { $0.blend == .multiplicative }
            print("  顶点 \(totalVerts)，三角形 \(totalTris)")
            print("  需要遮罩的 \(masked.count) 片，加色混合 \(additive.count) 片，正片叠底 \(multiply.count) 片")

            if CommandLine.arguments.contains("--verbose") { dumpDrawables(model) }

            // 真正验证「参数能驱动变形」：动一个参数，看顶点变不变。
            // 只打印结构不做这步的话，一个不生效的参数系统看起来是完全正常的。
            verifyDeformation(model)

        } catch {
            print("❌ \(error)")
            exit(1)
        }
        exit(0)
#else
        print("这个构建没有启用 LIVE2D。先跑 Scripts/check_live2d.sh，把 Cubism Core 放到 Vendor/ 下。")
        exit(1)
#endif
    }

#if LIVE2D
    /// 逐个 drawable 打印它的实际几何范围和可见性。
    /// 渲染出来是"零件散开"时，这是唯一能分清「几何错了」还是「该隐藏的没隐藏」的办法。
    private static func dumpDrawables(_ model: CubismModel) {
        print("逐 drawable 明细（模型单位坐标）：")
        var visibleCount = 0, zeroOpacity = 0
        for d in model.drawables {
            guard let p = model.vertexPositions(of: d.index), d.vertexCount > 0 else { continue }
            var minX = Float.greatestFiniteMagnitude, maxX = -Float.greatestFiniteMagnitude
            var minY = Float.greatestFiniteMagnitude, maxY = -Float.greatestFiniteMagnitude
            for i in 0..<d.vertexCount {
                minX = min(minX, p[i].X); maxX = max(maxX, p[i].X)
                minY = min(minY, p[i].Y); maxY = max(maxY, p[i].Y)
            }
            // UV 范围：正常应该落在 0…1 内且有一定跨度。
            var uMin = Float.greatestFiniteMagnitude, uMax = -Float.greatestFiniteMagnitude
            var vMin = Float.greatestFiniteMagnitude, vMax = -Float.greatestFiniteMagnitude
            if let uv = model.vertexUVs(of: d.index) {
                for i in 0..<d.vertexCount {
                    uMin = min(uMin, uv[i].X); uMax = max(uMax, uv[i].X)
                    vMin = min(vMin, uv[i].Y); vMax = max(vMax, uv[i].Y)
                }
            }
            let op = model.opacity(of: d.index)
            let vis = model.isVisible(d.index)
            if vis { visibleCount += 1 }
            if op < 0.001 { zeroOpacity += 1 }
            // 只打印前 24 个，够看出规律了
            if d.index < 24 {
                print(String(format: "  %2d %-12s 贴图%d uv[%5.3f,%5.3f]×[%5.3f,%5.3f] 顶点%4d 索引%4d 透明度%.2f 遮罩%d",
                             d.index, (d.id as NSString).utf8String!, d.textureIndex,
                             uMin, uMax, vMin, vMax, d.vertexCount, d.indexCount, op, d.masks.count))
            }
        }
        let texSet = Set(model.drawables.map(\.textureIndex)).sorted()
        print("  合计：可见 \(visibleCount)/\(model.drawables.count)，透明度 0 的 \(zeroOpacity) 片，用到的贴图下标 \(texSet)")
    }

    /// 扫一遍常用参数，看哪些真的会让顶点动起来。
    private static func verifyDeformation(_ model: CubismModel) {
        let probes = ["ParamAngleX", "ParamEyeLOpen", "ParamMouthOpenY",
                      "ParamBodyAngleX", "ParamBreath", "ParamHairAhoge"]

        print("参数驱动验证（改参数后有多少顶点发生位移）：")
        for id in probes {
            guard let idx = model.parameterIndex(id) else {
                print("  \(id.padding(toLength: 18, withPad: " ", startingAt: 0)) 模型里没有这个参数")
                continue
            }
            let range = model.parameterRange(idx)

            model.resetParameters()
            model.update()
            let before = snapshot(model)

            model.setParameter(idx, range.max)
            model.update()
            let after = snapshot(model)

            var moved = 0
            var maxDelta: Float = 0
            for (a, b) in zip(before, after) {
                let d = max(abs(a.0 - b.0), abs(a.1 - b.1))
                if d > 1e-5 { moved += 1 }
                maxDelta = max(maxDelta, d)
            }
            let name = id.padding(toLength: 18, withPad: " ", startingAt: 0)
            let mark = moved > 0 ? "✅" : "⚠️ 无变化"
            print(String(format: "  %@ %@  %d 个顶点，最大位移 %.3f", name, mark, moved, maxDelta))
        }

        model.resetParameters()
        model.update()
    }

    /// 把所有 drawable 的顶点拍平成一个数组，用来做前后对比。
    private static func snapshot(_ model: CubismModel) -> [(Float, Float)] {
        var out: [(Float, Float)] = []
        for d in model.drawables {
            guard let p = model.vertexPositions(of: d.index) else { continue }
            for i in 0..<d.vertexCount { out.append((p[i].X, p[i].Y)) }
        }
        return out
    }
#endif
}

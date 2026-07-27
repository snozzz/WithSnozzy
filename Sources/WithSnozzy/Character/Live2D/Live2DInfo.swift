import Foundation

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

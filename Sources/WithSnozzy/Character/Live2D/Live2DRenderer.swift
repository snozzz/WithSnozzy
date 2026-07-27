#if LIVE2D

import Metal
import MetalKit
import simd

/// Live2D 模型的 Metal 渲染器。
///
/// 这是自己写的，没有用 SDK 里那套渲染器——因为它要融进现有的 SwiftUI 房间场景
/// （背景在后、桌面在前），需要透明背景和外部控制的取景框。
///
/// Cubism 的绘制模型很简单：每个 drawable 是一块三角网格，
/// 索引和 UV 终身不变，顶点位置每帧由 Core 算好。所以：
/// - UV 和索引缓冲区只上传一次
/// - 位置缓冲区每帧更新
final class Live2DRenderer: NSObject, MTKViewDelegate {

    private let model: CubismModel
    private let device: MTLDevice
    private let queue: MTLCommandQueue
    private let pipeline: MTLRenderPipelineState
    private let maskPipeline: MTLRenderPipelineState
    /// 被遮罩的 drawable → 它在遮罩纹理数组里的切片号。
    private var maskSlices: [Int: Int] = [:]
    private var maskTexture: MTLTexture?
    private static let maskSide = 512
    private let sampler: MTLSamplerState
    private var textures: [MTLTexture] = []

    /// 每个 drawable 一组缓冲区。
    private struct Buffers {
        let positions: MTLBuffer    // 每帧更新
        let uvs: MTLBuffer          // 只传一次
        let indices: MTLBuffer      // 只传一次
        let indexCount: Int
    }
    private var buffers: [Buffers] = []

    /// 外部每帧塞进来的姿态。
    var pose = Pose()
    /// 取景：相对画布高度的缩放和平移，用来把半身像框好。
    var zoom: Float = 1.0
    var offset = SIMD2<Float>(0, 0)

    private let binding: Live2DPoseBinding

    /// 模型缺少哪些我们想驱动的参数。诊断用。
    var missingParameters: [String] { binding.missingParameters }

    // MARK: - 着色器
    //
    // 运行时编译，不走 .metal 文件。
    //
    // SPM 能编译 .metal，但产物是一个资源 bundle，得让 build_app.sh 一起打包，
    // 还要处理 Bundle.module 在可执行目标里的定位问题。这段着色器就二十来行，
    // 运行时编译的开销是几毫秒，换来的是构建流程一点都不用动。
    private static let shaderSource = """
    #include <metal_stdlib>
    using namespace metal;

    struct Uniforms {
        float4x4 mvp;
        float    opacity;
        float    flat;      // >0 时用 tint 代替贴图，用来单独检查几何覆盖
        float4   tint;
        float    useMask;   // >0 时用遮罩裁剪
        float    invertMask;
        float    maskSlice;
        float2   targetSize;
    };

    struct VOut {
        float4 position [[position]];
        float2 uv;
    };

    vertex VOut live2d_vertex(uint vid [[vertex_id]],
                              const device float2 *positions [[buffer(0)]],
                              const device float2 *uvs       [[buffer(1)]],
                              constant Uniforms   &u         [[buffer(2)]])
    {
        VOut out;
        out.position = u.mvp * float4(positions[vid], 0.0, 1.0);
        // V 轴翻转。
        //
        // Live2D 沿用 OpenGL 的约定：V=0 在纹理**底部**；Metal 的纹理 V=0 在**顶部**。
        // 不翻的话每一片都会采到图集里上下镜像的位置——采到的区域本身仍是连续的
        // （所以纽扣、丝带这些细节看着都"对"），但贴在了错误的网格上，
        // 采到空白处就表现为"零件消失"。
        out.uv = float2(uvs[vid].x, 1.0 - uvs[vid].y);
        return out;
    }

    // 遮罩通道：只关心形状，输出贴图的 alpha。
    fragment float4 live2d_mask(VOut in [[stage_in]],
                                texture2d<float> tex [[texture(0)]],
                                sampler samp         [[sampler(0)]],
                                constant Uniforms &u [[buffer(2)]])
    {
        return float4(tex.sample(samp, in.uv).a);
    }

    fragment float4 live2d_fragment(VOut in [[stage_in]],
                                    texture2d<float> tex   [[texture(0)]],
                                    texture2d_array<float> masks [[texture(1)]],
                                    sampler samp           [[sampler(0)]],
                                    constant Uniforms &u   [[buffer(2)]])
    {
        if (u.flat > 0.5) { return u.tint * u.opacity; }
        float4 c = tex.sample(samp, in.uv);
        // 贴图是直通 alpha，这里转成预乘——混合方程用的是预乘形式
        // (One, OneMinusSrcAlpha)，不转的话半透明边缘会出现黑边。
        c.rgb *= c.a;

        if (u.useMask > 0.5) {
            // 遮罩是和主画面同一套 MVP 渲染的，所以直接用屏幕坐标去采样。
            // 这比官方那套「按包围盒把遮罩塞进图集分块」简单得多，
            // 代价是每个被遮罩的片要多占一张切片——本模型只有 4 片，划算。
            float2 muv = in.position.xy / u.targetSize;
            float m = masks.sample(samp, muv, uint(u.maskSlice)).r;
            if (u.invertMask > 0.5) { m = 1.0 - m; }
            c *= m;
        }
        return c * u.opacity;
    }
    """

    private struct Uniforms {
        var mvp: float4x4
        var opacity: Float
        var flat: Float = 0
        var pad: SIMD2<Float> = .zero     // 让后面的 float4 落在 16 字节边界上
        var tint: SIMD4<Float> = .zero
        var useMask: Float = 0
        var invertMask: Float = 0
        var maskSlice: Float = 0
        var pad2: Float = 0
        var targetSize: SIMD2<Float> = .zero
        var pad3: SIMD2<Float> = .zero
    }

    /// 诊断用：不贴图，每片用不同颜色填充，单独检查几何覆盖和绘制顺序。
    var flatDebug = false

    // MARK: - 构造

    enum SetupError: Error, CustomStringConvertible {
        case noDevice
        case shader(String)
        case texture(String)

        var description: String {
            switch self {
            case .noDevice: "没有可用的 Metal 设备"
            case .shader(let m): "着色器编译失败: \(m)"
            case .texture(let m): "贴图加载失败: \(m)"
            }
        }
    }

    init(model: CubismModel, textureURLs: [URL], device: MTLDevice) throws {
        self.model = model
        self.device = device
        binding = Live2DPoseBinding(model: model)

        guard let q = device.makeCommandQueue() else { throw SetupError.noDevice }
        queue = q

        // ── 管线 ──
        let library: MTLLibrary
        do {
            library = try device.makeLibrary(source: Self.shaderSource, options: nil)
        } catch {
            throw SetupError.shader(error.localizedDescription)
        }

        let desc = MTLRenderPipelineDescriptor()
        desc.vertexFunction = library.makeFunction(name: "live2d_vertex")
        desc.fragmentFunction = library.makeFunction(name: "live2d_fragment")
        desc.colorAttachments[0].pixelFormat = .bgra8Unorm
        desc.colorAttachments[0].isBlendingEnabled = true
        // 预乘 alpha 的标准混合。诊断显示这个模型全部是普通混合，
        // 所以暂时只需要这一种；以后遇到加色/正片叠底的模型再加管线变体。
        desc.colorAttachments[0].rgbBlendOperation = .add
        desc.colorAttachments[0].alphaBlendOperation = .add
        desc.colorAttachments[0].sourceRGBBlendFactor = .one
        desc.colorAttachments[0].sourceAlphaBlendFactor = .one
        desc.colorAttachments[0].destinationRGBBlendFactor = .oneMinusSourceAlpha
        desc.colorAttachments[0].destinationAlphaBlendFactor = .oneMinusSourceAlpha

        do {
            pipeline = try device.makeRenderPipelineState(descriptor: desc)
        } catch {
            throw SetupError.shader(error.localizedDescription)
        }

        // 遮罩管线：画到 r8 单通道纹理上，多个遮罩形状取并集（相加饱和）。
        let maskDesc = MTLRenderPipelineDescriptor()
        maskDesc.vertexFunction = library.makeFunction(name: "live2d_vertex")
        maskDesc.fragmentFunction = library.makeFunction(name: "live2d_mask")
        maskDesc.colorAttachments[0].pixelFormat = .r8Unorm
        maskDesc.colorAttachments[0].isBlendingEnabled = true
        maskDesc.colorAttachments[0].rgbBlendOperation = .add
        maskDesc.colorAttachments[0].alphaBlendOperation = .add
        maskDesc.colorAttachments[0].sourceRGBBlendFactor = .one
        maskDesc.colorAttachments[0].sourceAlphaBlendFactor = .one
        maskDesc.colorAttachments[0].destinationRGBBlendFactor = .one
        maskDesc.colorAttachments[0].destinationAlphaBlendFactor = .one
        do {
            maskPipeline = try device.makeRenderPipelineState(descriptor: maskDesc)
        } catch {
            throw SetupError.shader(error.localizedDescription)
        }

        let sd = MTLSamplerDescriptor()
        sd.minFilter = .linear
        sd.magFilter = .linear
        sd.sAddressMode = .clampToEdge
        sd.tAddressMode = .clampToEdge
        guard let s = device.makeSamplerState(descriptor: sd) else { throw SetupError.noDevice }
        sampler = s

        super.init()

        try loadTextures(textureURLs)
        buildBuffers()
        buildMaskTexture()
    }

    private func loadTextures(_ urls: [URL]) throws {
        let loader = MTKTextureLoader(device: device)
        for url in urls {
            do {
                // 不做 sRGB 转换：贴图按原样采样，和界面其余部分的色彩表现保持一致。
                let t = try loader.newTexture(URL: url, options: [
                    .SRGB: false,
                    .textureUsage: NSNumber(value: MTLTextureUsage.shaderRead.rawValue),
                    .textureStorageMode: NSNumber(value: MTLStorageMode.private.rawValue),
                ])
                textures.append(t)
            } catch {
                throw SetupError.texture("\(url.lastPathComponent): \(error.localizedDescription)")
            }
        }
    }

    private func buildBuffers() {
        for d in model.drawables {
            let posBytes = max(1, d.vertexCount) * MemoryLayout<SIMD2<Float>>.stride
            guard let pos = device.makeBuffer(length: posBytes, options: .storageModeShared),
                  let uv = device.makeBuffer(length: posBytes, options: .storageModeShared),
                  let idx = device.makeBuffer(length: max(2, d.indexCount * 2), options: .storageModeShared)
            else {
                buffers.append(Buffers(positions: device.makeBuffer(length: 4)!,
                                       uvs: device.makeBuffer(length: 4)!,
                                       indices: device.makeBuffer(length: 4)!,
                                       indexCount: 0))
                continue
            }

            // UV 和索引终身不变，只传这一次。
            if let src = model.vertexUVs(of: d.index), d.vertexCount > 0 {
                uv.contents().copyMemory(from: src, byteCount: posBytes)
            }
            if let src = model.indices(of: d.index), d.indexCount > 0 {
                idx.contents().copyMemory(from: src, byteCount: d.indexCount * 2)
            }

            buffers.append(Buffers(positions: pos, uvs: uv, indices: idx, indexCount: d.indexCount))
        }
    }

    /// 给每个需要遮罩的 drawable 分配一张切片。
    private func buildMaskTexture() {
        var slice = 0
        for d in model.drawables where !d.masks.isEmpty {
            maskSlices[d.index] = slice
            slice += 1
        }
        guard slice > 0 else { return }

        let desc = MTLTextureDescriptor()
        desc.textureType = .type2DArray
        desc.pixelFormat = .r8Unorm
        desc.width = Self.maskSide
        desc.height = Self.maskSide
        desc.arrayLength = slice
        desc.usage = [.renderTarget, .shaderRead]
        desc.storageMode = .private
        maskTexture = device.makeTexture(descriptor: desc)
    }

    /// 在主绘制之前，把每个遮罩形状渲染到自己的切片上。
    private func encodeMasks(into buffer: MTLCommandBuffer, mvp: float4x4) {
        guard let maskTexture else { return }
        let size = SIMD2<Float>(Float(Self.maskSide), Float(Self.maskSide))

        for (drawableIndex, slice) in maskSlices {
            let pass = MTLRenderPassDescriptor()
            pass.colorAttachments[0].texture = maskTexture
            pass.colorAttachments[0].slice = slice
            pass.colorAttachments[0].loadAction = .clear
            pass.colorAttachments[0].storeAction = .store
            pass.colorAttachments[0].clearColor = MTLClearColor(red: 0, green: 0, blue: 0, alpha: 0)

            guard let encoder = buffer.makeRenderCommandEncoder(descriptor: pass) else { continue }
            encoder.setRenderPipelineState(maskPipeline)
            encoder.setFragmentSamplerState(sampler, index: 0)

            for maskIndex in model.drawables[drawableIndex].masks {
                guard maskIndex >= 0, maskIndex < buffers.count else { continue }
                let mb = buffers[maskIndex]
                guard mb.indexCount > 0 else { continue }
                let md = model.drawables[maskIndex]
                guard md.textureIndex < textures.count else { continue }

                var u = Uniforms(mvp: mvp, opacity: 1)
                u.targetSize = size
                encoder.setVertexBuffer(mb.positions, offset: 0, index: 0)
                encoder.setVertexBuffer(mb.uvs, offset: 0, index: 1)
                encoder.setVertexBytes(&u, length: MemoryLayout<Uniforms>.stride, index: 2)
                encoder.setFragmentBytes(&u, length: MemoryLayout<Uniforms>.stride, index: 2)
                encoder.setFragmentTexture(textures[md.textureIndex], index: 0)
                encoder.setCullMode(.none)
                encoder.drawIndexedPrimitives(type: .triangle, indexCount: mb.indexCount,
                                              indexType: .uint16, indexBuffer: mb.indices,
                                              indexBufferOffset: 0)
            }
            encoder.endEncoding()
        }
    }

    // MARK: - 每帧

    /// 为 true 时不套用姿态，直接用模型的默认参数。
    /// 排查问题时用来区分「渲染器画错了」和「绑定层驱动错了」。
    var useDefaultPose = false

    /// 把姿态写进模型参数并重算变形。
    func updateModel() {
        if useDefaultPose { model.resetParameters() } else { binding.apply(pose) }
        model.update()

        // 把新算出来的顶点位置刷进 GPU 缓冲区。
        for d in model.drawables where d.vertexCount > 0 {
            guard let src = model.vertexPositions(of: d.index) else { continue }
            buffers[d.index].positions.contents()
                .copyMemory(from: src, byteCount: d.vertexCount * MemoryLayout<SIMD2<Float>>.stride)
        }
    }

    /// 模型坐标 → NDC。
    ///
    /// 模型的顶点位置以「单位」为单位，画布宽度 = size.x / pixelsPerUnit。
    /// 这里保持等比，并按 zoom / offset 取景。
    private func makeMVP(viewSize: CGSize) -> float4x4 {
        let canvas = model.canvas
        let canvasWidthInUnits = canvas.size.x / canvas.pixelsPerUnit
        guard viewSize.width > 0, viewSize.height > 0, canvasWidthInUnits > 0 else {
            return matrix_identity_float4x4
        }

        let viewAspect = Float(viewSize.width / viewSize.height)
        // 让画布宽度铺满视图宽度，纵向按等比走（模型通常比视图高，超出的部分被裁掉，
        // 这正是我们要的半身取景）。
        let sx = 2.0 / canvasWidthInUnits * zoom
        let sy = sx * viewAspect

        var m = matrix_identity_float4x4
        m.columns.0 = SIMD4(sx, 0, 0, 0)
        m.columns.1 = SIMD4(0, sy, 0, 0)
        m.columns.3 = SIMD4(offset.x, offset.y, 0, 1)
        return m
    }

    func mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize) {}

    func draw(in view: MTKView) {
        guard let pass = view.currentRenderPassDescriptor,
              let drawable = view.currentDrawable,
              let buffer = queue.makeCommandBuffer()
        else { return }

        updateModel()
        encode(pass: pass, viewSize: view.drawableSize, into: buffer)
        buffer.present(drawable)
        buffer.commit()
    }

    /// 离屏渲染一帧到指定纹理。诊断用（`--live2d-render`），
    /// 也是把渲染和 SwiftUI 集成分开验证的手段。
    func renderOffscreen(into texture: MTLTexture) {
        let pass = MTLRenderPassDescriptor()
        pass.colorAttachments[0].texture = texture
        pass.colorAttachments[0].loadAction = .clear
        pass.colorAttachments[0].storeAction = .store
        pass.colorAttachments[0].clearColor = MTLClearColor(red: 0, green: 0, blue: 0, alpha: 0)

        guard let buffer = queue.makeCommandBuffer() else { return }
        updateModel()
        encode(pass: pass,
               viewSize: CGSize(width: texture.width, height: texture.height),
               into: buffer)
        // managed 纹理在 CPU 读回之前必须显式同步，否则拿到的可能是陈旧或半写入的数据。
        if texture.storageMode == .managed,
           let blit = buffer.makeBlitCommandEncoder() {
            blit.synchronize(resource: texture)
            blit.endEncoding()
        }
        buffer.commit()
        buffer.waitUntilCompleted()
    }

    private func encode(pass: MTLRenderPassDescriptor, viewSize: CGSize, into buffer: MTLCommandBuffer) {
        let mvpForMasks = makeMVP(viewSize: viewSize)
        encodeMasks(into: buffer, mvp: mvpForMasks)

        guard let encoder = buffer.makeRenderCommandEncoder(descriptor: pass) else { return }

        encoder.setRenderPipelineState(pipeline)
        encoder.setFragmentSamplerState(sampler, index: 0)

        let mvp = makeMVP(viewSize: viewSize)

        // 按 Core 给的渲染顺序画。顺序错了就是"头发盖住脸"这种问题。
        for i in model.sortedDrawableIndices() {
            let d = model.drawables[i]
            let b = buffers[i]
            guard b.indexCount > 0, model.isVisible(i) else { continue }
            let opacity = model.opacity(of: i)
            guard opacity > 0.001 else { continue }
            guard d.textureIndex < textures.count else { continue }

            var uniforms = Uniforms(mvp: mvp, opacity: opacity)
            if let slice = maskSlices[i], maskTexture != nil {
                uniforms.useMask = 1
                uniforms.invertMask = d.isInvertedMask ? 1 : 0
                uniforms.maskSlice = Float(slice)
                // 除以**主画面**尺寸，不是遮罩纹理的尺寸。
                // 遮罩虽然渲染在 512² 上，但用的是同一套 MVP，归一化 UV 是一致的；
                // 除错了就会得到 0…2 的 UV，遮罩只覆盖左上四分之一。
                uniforms.targetSize = SIMD2(Float(viewSize.width), Float(viewSize.height))
            }
            if flatDebug {
                uniforms.flat = 1
                // 按下标取色相，相邻的片颜色明显不同，一眼能看出边界。
                let h = Float(i) * 0.113
                let c = SIMD3<Float>(abs(sinf(h * 6.283)), abs(sinf((h + 0.33) * 6.283)),
                                     abs(sinf((h + 0.66) * 6.283)))
                uniforms.tint = SIMD4(c.x * 0.9 + 0.1, c.y * 0.9 + 0.1, c.z * 0.9 + 0.1, 1)
            }
            encoder.setVertexBuffer(b.positions, offset: 0, index: 0)
            encoder.setVertexBuffer(b.uvs, offset: 0, index: 1)
            encoder.setVertexBytes(&uniforms, length: MemoryLayout<Uniforms>.stride, index: 2)
            encoder.setFragmentBytes(&uniforms, length: MemoryLayout<Uniforms>.stride, index: 2)
            encoder.setFragmentTexture(textures[d.textureIndex], index: 0)
            if let m = maskTexture { encoder.setFragmentTexture(m, index: 1) }
            encoder.setCullMode(d.isDoubleSided ? .none : .none)   // Cubism 的网格不保证绕向，一律不剔除

            encoder.drawIndexedPrimitives(
                type: .triangle,
                indexCount: b.indexCount,
                indexType: .uint16,
                indexBuffer: b.indices,
                indexBufferOffset: 0)
        }

        encoder.endEncoding()
    }
}

#endif

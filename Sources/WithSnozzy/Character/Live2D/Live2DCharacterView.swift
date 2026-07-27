#if LIVE2D

import MetalKit
import SwiftUI

/// 把 Live2D 渲染器包成 SwiftUI 视图。
///
/// `MTKView` 设成「按需重绘」而不是自己跑显示链接：
/// 场景里已经有一个 `TimelineView` 在按统一帧率驱动了，
/// 让 Metal 再开一条独立的时钟只会和它打架，还绕过了窗口遮挡时的暂停逻辑。
struct Live2DCharacterView: NSViewRepresentable {

    let renderer: Live2DRenderer
    let pose: Pose
    let framing: Live2DFraming

    func makeNSView(context: Context) -> MTKView {
        let view = MTKView(frame: .zero, device: renderer.metalDevice)
        view.delegate = renderer
        view.colorPixelFormat = .bgra8Unorm
        // 透明背景：她要叠在房间场景上，桌宠模式下更是要叠在桌面上。
        // NSView 的 isOpaque 是只读的，透明必须从图层这一侧设。
        view.wantsLayer = true
        view.layer?.isOpaque = false
        (view.layer as? CAMetalLayer)?.isOpaque = false
        view.clearColor = MTLClearColor(red: 0, green: 0, blue: 0, alpha: 0)
        // 按需重绘，由 SwiftUI 那边的时间线驱动。
        view.isPaused = true
        view.enableSetNeedsDisplay = true
        view.autoResizeDrawable = true
        return view
    }

    func updateNSView(_ view: MTKView, context: Context) {
        renderer.pose = pose
        renderer.framing = framing
        view.setNeedsDisplay(view.bounds)
    }
}

#endif

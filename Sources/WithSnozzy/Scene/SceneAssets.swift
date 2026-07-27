import AppKit
import Observation
import SwiftUI

/// 手绘素材的布局清单。
///
/// 由 `Scripts/prepare_assets.py` 生成一部分（窗洞位置），
/// 其余是构图参数——放在 JSON 里而不是代码里，是为了调构图不用重新编译。
struct SceneManifest: Codable {
    /// 窗洞在房间图里的位置，归一化。程序化的天空要塞进这个矩形。
    struct Rect: Codable {
        var x: Double, y: Double, width: Double, height: Double
    }
    var room_window: Rect?

    /// 房间图怎么铺满窗口。
    /// `fillHeight` 铺满高度、左右裁切；`fillWidth` 铺满宽度、上下留白。
    var roomFit: String?
    /// `fillHeight` 时横向取景的锚点（0 = 最左，1 = 最右）。
    var roomAnchorX: Double?
    /// 桌面图的底边贴在窗口的哪个高度。
    var deskBottom: Double?
    /// 桌面图里"桌面上沿"所在的相对高度，角色的下半身由它遮住。
    var deskSurface: Double?
    /// 小臂图的底边贴在窗口的哪个高度、占多宽。
    var armsBottom: Double?
    var armsWidth: Double?

    static let `default` = SceneManifest(
        room_window: nil, roomFit: "fillHeight", roomAnchorX: 0.35,
        deskBottom: 1.0, deskSurface: 0.55, armsBottom: 1.0, armsWidth: 1.0)

    /// 用默认值补齐没写的字段。
    ///
    /// 逐字段补，而不是重新构造一个大初始化器——后者参数一多，
    /// Swift 的类型检查会直接超时报"表达式过于复杂"。
    mutating func fillDefaults() {
        let d = SceneManifest.default
        roomFit = roomFit ?? d.roomFit
        roomAnchorX = roomAnchorX ?? d.roomAnchorX
        deskBottom = deskBottom ?? d.deskBottom
        deskSurface = deskSurface ?? d.deskSurface
        armsBottom = armsBottom ?? d.armsBottom
        armsWidth = armsWidth ?? d.armsWidth
    }
}

/// 手绘素材的加载与持有。
///
/// 素材缺失时 `isAvailable` 为 false，场景自动回落到程序化绘制的房间。
/// 和 Live2D 一样的原则：可选的资源不该让主体跑不起来。
@MainActor
@Observable
final class SceneAssets {

    private(set) var room: NSImage?
    private(set) var desk: NSImage?
    /// 搭在桌上的小臂。可选——没有这张图时她就只是坐在桌后。
    private(set) var arms: NSImage?
    private(set) var cats: [NSImage] = []
    private(set) var manifest = SceneManifest.default
    private(set) var loadedFrom: String?

    var isAvailable: Bool { room != nil }

    /// 依次尝试几个位置：app 包内的 Resources/Assets、可执行文件旁边、
    /// 以及仓库根目录（开发时直接跑 swift run 用得上）。
    private static var searchPaths: [URL] {
        var paths: [URL] = []
        if let res = Bundle.main.resourceURL {
            paths.append(res.appendingPathComponent("Assets"))
        }
        let exe = Bundle.main.bundleURL.deletingLastPathComponent()
        paths.append(exe.appendingPathComponent("Assets"))
        paths.append(URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
            .appendingPathComponent("Assets"))
        return paths
    }

    func load() {
        for dir in Self.searchPaths {
            let roomURL = dir.appendingPathComponent("room.png")
            guard FileManager.default.fileExists(atPath: roomURL.path),
                  let roomImage = NSImage(contentsOf: roomURL) else { continue }

            room = roomImage
            desk = NSImage(contentsOf: dir.appendingPathComponent("desk.png"))
            arms = NSImage(contentsOf: dir.appendingPathComponent("arms.png"))

            var found: [NSImage] = []
            for i in 0..<8 {
                let u = dir.appendingPathComponent("cats_\(i).png")
                guard FileManager.default.fileExists(atPath: u.path),
                      let img = NSImage(contentsOf: u) else { break }
                found.append(img)
            }
            cats = found

            if let data = try? Data(contentsOf: dir.appendingPathComponent("scene.json")),
               var m = try? JSONDecoder().decode(SceneManifest.self, from: data) {
                m.fillDefaults()
                manifest = m
            }

            loadedFrom = dir.path
            return
        }
        loadedFrom = nil
    }

    // MARK: - 布局计算

    /// 房间图在窗口里的绘制矩形。
    ///
    /// 图是 3:1 的横幅，窗口是 3:2，直接铺满宽度会在上方留一大片空。
    /// 所以默认铺满高度、左右裁切，靠 `roomAnchorX` 决定保留哪一段——
    /// 这个素材里窗户在左、钢琴在右，锚点偏左能同时留住窗户和书架。
    func roomFrame(in size: CGSize) -> CGRect {
        guard let room else { return .zero }
        let aspect = room.size.width / max(room.size.height, 1)
        let fit = manifest.roomFit ?? "fillHeight"

        if fit == "fillWidth" {
            let h = size.width / aspect
            return CGRect(x: 0, y: size.height - h, width: size.width, height: h)
        }

        let h = size.height
        let w = h * aspect
        let anchor = manifest.roomAnchorX ?? 0.35
        // anchor 指的是图上的哪个横向位置对准视图中心。
        let x = size.width / 2 - w * anchor
        return CGRect(x: x, y: 0, width: w, height: h)
    }

    /// 窗洞在屏幕上的矩形。程序化天空画在这里。
    func windowFrame(in size: CGSize) -> CGRect? {
        guard let w = manifest.room_window else { return nil }
        let r = roomFrame(in: size)
        return CGRect(x: r.minX + w.x * r.width,
                      y: r.minY + w.y * r.height,
                      width: w.width * r.width,
                      height: w.height * r.height)
    }

    /// 桌面图的绘制矩形。
    func deskFrame(in size: CGSize) -> CGRect {
        guard let desk else { return .zero }
        let aspect = desk.size.width / max(desk.size.height, 1)
        let w = size.width
        let h = w / aspect
        let bottom = (manifest.deskBottom ?? 1.0) * size.height
        return CGRect(x: 0, y: bottom - h, width: w, height: h)
    }

    /// 小臂图的绘制矩形。
    func armsFrame(in size: CGSize) -> CGRect {
        guard let arms else { return .zero }
        let aspect = arms.size.width / max(arms.size.height, 1)
        let w = size.width * (manifest.armsWidth ?? 1.0)
        let h = w / aspect
        let bottom = (manifest.armsBottom ?? 1.0) * size.height
        return CGRect(x: (size.width - w) / 2, y: bottom - h, width: w, height: h)
    }

    /// 桌面上沿在窗口里的高度。角色的下半身应当被它盖住。
    func deskSurfaceY(in size: CGSize) -> CGFloat {
        let f = deskFrame(in: size)
        return f.minY + f.height * (manifest.deskSurface ?? 0.55)
    }
}

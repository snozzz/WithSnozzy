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

    static let `default` = SceneManifest(
        room_window: nil, roomFit: "fillHeight", roomAnchorX: 0.35,
        deskBottom: 1.0, deskSurface: 0.55)

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
    }
}

/// 腿部素材的位置表，由 `Scripts/leg_frames.py` 生成。
///
/// 角色图被 `seam` 这条横线切成两半：以上是所有姿势共用的上半身，
/// 以下每一帧单独存一小块。加上过渡帧一共五十来张，整幅存是 30 MB 包体、
/// 200 MB 内存，而上半身在这些图里本来就是同一份。
struct LegManifest: Codable {
    struct Rect: Codable { var x, y, w, h: Int }
    var canvas: [Int] = [1536, 1024]
    /// 上下半身的分界行（画布坐标）。挑在各姿势没有真差异、
    /// 而且被桌板挡住的那一段上，具体依据见 `leg_frames.py`。
    var seam: Int = 600
    /// 腿那一块在画布上的位置。是量出来的：所有帧在缝线以下的非透明像素的并集。
    var rect = Rect(x: 0, y: 600, w: 1536, h: 424)
    /// 姿势名，顺序即下标；`LegPose.hub` 指的是第 0 个。
    var poses: [String] = []
    /// 每段过渡有几张中间帧。
    var steps: Int = 0
    /// 近景（托腮）那张上半身切到哪一行。0 表示没有这套素材。
    ///
    /// 比 `seam` 深十几行：托腮抬起来的那条胳膊一直伸到 y≈644，切在 600
    /// 会把袖子齐齐削掉；而桌面层要到 y=611 才完全不透明，中间那几行
    /// 得由这张图自己补上。详见 `Scripts/leg_frames.py` 的 `chin_seam`。
    var chinSeam: Int = 0

    /// 上半身那一块。整幅宽、缝线以上。
    var bodyRect: Rect { Rect(x: 0, y: 0, w: canvas.first ?? 1536, h: seam) }
    /// 近景那张上半身的位置。**和腿那一块重叠十几行**，所以运行时必须
    /// 「先画腿、再盖上半身」。
    var chinRect: Rect { Rect(x: 0, y: 0, w: canvas.first ?? 1536, h: chinSeam) }
    var hasChin: Bool { chinSeam > seam }
    var canvasW: CGFloat { CGFloat(canvas.first ?? 1536) }
    var canvasH: CGFloat { CGFloat(canvas.count > 1 ? canvas[1] : 1024) }
}

/// 打字的手的位置表，由 `Scripts/hand_frames.py` 生成。
///
/// 手要**画在桌面层上面**：桌子是盖在角色之上的（不然挡不住她的下半身），
/// 手伸到键盘上就会被桌子吃掉。`rect.y` 是桌板变成完全不透明的那一行，
/// 也就是"桌子开始挡人"的位置——以上那截小臂由角色图自己画。
struct HandManifest: Codable {
    var canvas: [Int] = [1536, 1024]
    var rect = LegManifest.Rect(x: 0, y: 0, w: 0, h: 0)
    /// 打字循环有几帧。**不含托腮那一帧**——`TypingRig` 拿它取模，
    /// 算进去的话打字打到一半会冒出一只抬起来的手。
    var frames: Int = 0
    /// 托腮时留在键盘上的那只手是第几帧。近景专用，不参与循环。
    var chin: Int?

    var isUsable: Bool { frames > 0 && rect.w > 0 && rect.h > 0 }
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
    private(set) var cats: [NSImage] = []
    /// Blender 渲出来的 Snozzy。所有图共用同一台相机，像素级对齐，
    /// 所以运行时按清单里的矩形贴回去就行，不用做任何对位。
    ///
    /// 整幅的那张只作保底：新素材缺了还能画出个人来。
    private(set) var snozzyIdle: NSImage?
    /// 上半身。缝线以上，所有姿势共用一张；戴耳机时换成戴着的那张。
    private(set) var snozzyBody: NSImage?
    private(set) var snozzyBodyPhones: NSImage?
    /// 近景时托着腮的那张上半身，同样分戴不戴耳机。缺了就只推镜头不换姿势。
    private(set) var snozzyBodyChin: NSImage?
    private(set) var snozzyBodyChinPhones: NSImage?
    /// 每套姿势的静止腿图，下标即 `legs.poses` 的下标。
    private(set) var legStills: [NSImage] = []
    /// 过渡帧。`legMoves[姿势][第几帧]`，中枢那一支是空的。
    private(set) var legMoves: [[NSImage]] = []
    private(set) var legs = LegManifest()
    /// 打字的手。画在桌面层**之上**。
    private(set) var handFrames: [NSImage] = []
    private(set) var hands = HandManifest()

    /// 面部贴片。眨眼、视线、嘴角这些细微变化只改一小块像素，
    /// 单独出贴片比整张重渲便宜三个数量级。
    private(set) var facePatches: [String: NSImage] = [:]
    private(set) var face = FaceManifest()

    /// 渲染版角色是否可用。缺图就回落到矢量绘制。
    var hasRenderedCharacter: Bool { snozzyIdle != nil }
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
            snozzyIdle = NSImage(contentsOf: dir.appendingPathComponent("snozzy_idle.png"))
            snozzyBody = NSImage(contentsOf: dir.appendingPathComponent("snozzy_body.png"))
            snozzyBodyPhones = NSImage(contentsOf:
                dir.appendingPathComponent("snozzy_body_headphones.png"))
            snozzyBodyChin = NSImage(contentsOf:
                dir.appendingPathComponent("snozzy_body_chin.png"))
            snozzyBodyChinPhones = NSImage(contentsOf:
                dir.appendingPathComponent("snozzy_body_chin_headphones.png"))
            loadLegs(dir)
            loadHands(dir)

            var found: [NSImage] = []
            for i in 0..<8 {
                let u = dir.appendingPathComponent("cats_\(i).png")
                guard FileManager.default.fileExists(atPath: u.path),
                      let img = NSImage(contentsOf: u) else { break }
                found.append(img)
            }
            cats = found

            if let data = try? Data(contentsOf: dir.appendingPathComponent("face.json")),
               let m = try? JSONDecoder().decode(FaceManifest.self, from: data) {
                face = m
                facePatches = m.patches.keys.reduce(into: [:]) { out, key in
                    out[key] = NSImage(contentsOf: dir.appendingPathComponent("face_\(key).png"))
                }
            }

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

    /// 腿图和过渡帧。
    ///
    /// 一套姿势的过渡帧只要缺一张就整支不要——播到缺的那一帧会空一格，
    /// 比不做过渡还难看。缺了就退回"直接换成品图"，`LegPose` 那边
    /// `steps == 0` 自然就不生成 `moving` 了。
    private func loadLegs(_ dir: URL) {
        guard let data = try? Data(contentsOf: dir.appendingPathComponent("legs.json")),
              let m = try? JSONDecoder().decode(LegManifest.self, from: data),
              !m.poses.isEmpty else { return }

        let stills = m.poses.compactMap {
            NSImage(contentsOf: dir.appendingPathComponent("snozzy_legs_\($0).png"))
        }
        guard stills.count == m.poses.count else { return }

        // 中枢那一支本来就没有过渡帧（它是所有过渡的起点/终点），
        // 所以"这一支是不是缺帧"只对别的姿势成立。
        var moves: [[NSImage]] = []
        var complete = m.steps > 0
        for (i, name) in m.poses.enumerated() {
            guard i != LegPose.hub, m.steps > 0 else { moves.append([]); continue }
            let frames = (0..<m.steps).compactMap { step in
                NSImage(contentsOf: dir.appendingPathComponent(
                    String(format: "snozzy_move_%@_%02d.png", name, step)))
            }
            if frames.count != m.steps { complete = false }
            moves.append(frames)
        }

        legs = m
        legs.steps = complete ? m.steps : 0
        legStills = stills
        legMoves = moves
    }

    /// 打字的手。缺一帧就整套不要——播到缺的那一帧手会闪一下不见。
    ///
    /// 托腮那一帧例外：它是附加的，缺了只是近景时两只手都留在键盘上，
    /// 打字循环照跑。所以它单独判，不拖累整套。
    private func loadHands(_ dir: URL) {
        guard let data = try? Data(contentsOf: dir.appendingPathComponent("hands.json")),
              var m = try? JSONDecoder().decode(HandManifest.self, from: data),
              m.isUsable else { return }
        func image(_ i: Int) -> NSImage? {
            NSImage(contentsOf: dir.appendingPathComponent(
                String(format: "snozzy_hand_%02d.png", i)))
        }
        let frames = (0..<m.frames).compactMap(image)
        guard frames.count == m.frames else { return }
        handFrames = frames
        if let i = m.chin, let chin = image(i) {
            handFrames.append(chin)
            m.chin = frames.count      // 追加在循环后面，下标以实际位置为准
        } else {
            m.chin = nil
        }
        hands = m
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

        // 新素材（房间/角色/桌子三层）是同一台相机渲出来的，尺寸完全一致，
        // 而且和窗口一样是 3:2。所以直接满幅铺，不做裁切也不留边——
        // 一旦按比例缩放，三层之间就会错位。
        if fit == "fill" {
            return CGRect(origin: .zero, size: size)
        }
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
        // 和房间同源同尺寸时直接满幅，别再按自身比例算一遍
        if manifest.roomFit == "fill" { return CGRect(origin: .zero, size: size) }
        let aspect = desk.size.width / max(desk.size.height, 1)
        let w = size.width
        let h = w / aspect
        let bottom = (manifest.deskBottom ?? 1.0) * size.height
        return CGRect(x: 0, y: bottom - h, width: w, height: h)
    }

    /// 桌面上沿在窗口里的高度。角色的下半身应当被它盖住。
    func deskSurfaceY(in size: CGSize) -> CGFloat {
        let f = deskFrame(in: size)
        return f.minY + f.height * (manifest.deskSurface ?? 0.55)
    }
}

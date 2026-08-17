import AppKit
import CryptoKit
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
    /// PNG 内部像素倍率；布局仍使用上面的逻辑画布和 rect。
    var pixelScale: Int = 1
    /// 打字循环有几帧。**不含托腮那一帧**——`TypingRig` 拿它取模，
    /// 算进去的话打字打到一半会冒出一只抬起来的手。
    var frames: Int = 0
    /// 托腮时留在键盘上的那只手是第几帧。近景专用，不参与循环。
    var chin: Int?

    var isUsable: Bool {
        frames > 0 && rect.w > 0 && rect.h > 0 && pixelScale > 0
    }
}

/// 托腮抬手的中间帧。单独一份清单；素材不完整时宁可保留常态，也不播放残缺动作。
/// 2× 套装会把常态与终态也一起发布，避免推进第一拍突然换清晰度。
struct ChinManifest: Codable {
    var canvas: [Int] = [1536, 1024]
    var bodyRect = LegManifest.Rect(x: 0, y: 0, w: 0, h: 0)
    var handRect = LegManifest.Rect(x: 0, y: 0, w: 0, h: 0)
    var frames: Int = 0
    /// 到位之后停在那儿那一列有几张（循环播）。托腮没有这一列，是 0。
    var holdFrames: Int = 0
    /// 逻辑坐标仍是 1536×1024；这里只说明 PNG 内部用了几倍像素采样。
    var pixelScale: Int = 1

    /// **缺字段要当默认值，不能当解码失败。**
    ///
    /// Swift 合成出来的 `init(from:)` 不认属性默认值：清单里少一个键，
    /// 整个 JSON 解码直接抛错。加 `holdFrames` 那一版就是这么中的招——
    /// `chin.json` 是旧脚本写的、没有这个键，于是**整套托腮素材悄悄停用**，
    /// 画面上只推镜头不抬手，而日志只说"契约不完整"。
    /// 和第 58 条（加一个设置字段把用户设置全清空）是同一个坑。
    init(from decoder: Decoder) throws {
        let c = try decoder.container(keyedBy: CodingKeys.self)
        canvas = try c.decodeIfPresent([Int].self, forKey: .canvas) ?? canvas
        bodyRect = try c.decodeIfPresent(LegManifest.Rect.self,
                                         forKey: .bodyRect) ?? bodyRect
        handRect = try c.decodeIfPresent(LegManifest.Rect.self,
                                         forKey: .handRect) ?? handRect
        frames = try c.decodeIfPresent(Int.self, forKey: .frames) ?? 0
        holdFrames = try c.decodeIfPresent(Int.self, forKey: .holdFrames) ?? 0
        pixelScale = try c.decodeIfPresent(Int.self, forKey: .pixelScale) ?? 1
    }

    init() {}

    var isUsable: Bool { frames > 0 && bodyRect.w > 0 && bodyRect.h > 0 }
    /// 这条动作一共有几档姿势：中间帧 + 终态 + 停留。面部贴片要一档一套。
    var poseCount: Int { frames + 1 + holdFrames }
}

/// 一条长动作的逐档面部贴片（`facechin2x` / `facestretch2x` / …）。
///
/// 每条动作都会转头，所以都要"每一档各一套 13 块"。这段校验很啰嗦
/// （键集、通道、矩形、真实像素尺寸逐条比），但**只该有一份**——
/// 抄第二份的话，加动作时改了这边忘了那边，表现是某一档的贴片悄悄错位。
struct ActionFaceSet {
    let manifest: ChinFaceManifest
    let frames: [FaceManifest]
    let images: [[String: NSImage]]
}

/// A long action is published as one atomic set.  Keeping the contract in a
/// value type gives runtime views one truth to gate on instead of independently
/// deciding whether bodies, hands, headphones, and face sets are complete.
///
/// 托腮、伸懒腰、喝咖啡、玩手机四条动作**素材形状完全一样**，所以共用这个
/// 类型；差别只在停留那一列有没有（托腮没有）。
struct ActionAssetSet {
    let manifest: ChinManifest
    let bodyFrames: [NSImage]
    let phoneFrames: [NSImage]
    let bodyBase: NSImage
    let phoneBase: NSImage
    let bodyFinal: NSImage
    let phoneFinal: NSImage
    /// 停在那儿那一列，循环播。空数组表示这条动作没有这一段。
    let holdBodies: [NSImage]
    let holdPhones: [NSImage]
    let handFrames: [NSImage]
    /// 终态和整个停留段共用同一张桌面手层：那段时间里桌上那只手不动，
    /// 举起来的道具早就高过手层的裁切框了。少 H 张图，也不会不同步。
    let handFinal: NSImage
    let faceSets: [FaceManifest]
    let faceImages: [[String: NSImage]]

    /// 第 `frame` 档该画哪张上半身。`-1` 是 2× 常态起点。
    func body(_ frame: Int, headphones: Bool) -> NSImage? {
        let frames = headphones ? phoneFrames : bodyFrames
        let holds = headphones ? holdPhones : holdBodies
        if frame < 0 { return headphones ? phoneBase : bodyBase }
        if frame < manifest.frames {
            return frames.indices.contains(frame) ? frames[frame] : nil
        }
        if frame == manifest.frames { return headphones ? phoneFinal : bodyFinal }
        let hold = frame - manifest.frames - 1
        return holds.indices.contains(hold) ? holds[hold] : nil
    }

    /// 第 `frame` 档该画哪张桌面手层。
    func hand(_ frame: Int) -> NSImage? {
        if frame < 0 { return nil }
        if frame < manifest.frames {
            return handFrames.indices.contains(frame) ? handFrames[frame] : nil
        }
        return handFinal
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
    private(set) var cats: [NSImage] = []
    /// Blender 渲出来的 Snozzy。所有图共用同一台相机，像素级对齐，
    /// 所以运行时按清单里的矩形贴回去就行，不用做任何对位。
    ///
    /// 整幅的那张只作保底：新素材缺了还能画出个人来。
    private(set) var snozzyIdle: NSImage?
    /// 上半身。缝线以上，所有姿势共用一张；戴耳机时换成戴着的那张。
    private(set) var snozzyBody: NSImage?
    private(set) var snozzyBodyPhones: NSImage?
    /// 播放反馈只使用从普通/耳机成对素材差分出的可见耳机 mask。
    /// 普通姿态一套；托腮动作按 2× base、00…08（08 为终态）各一套。
    private(set) var headphoneMask: HeadphoneMask?
    private(set) var chinHeadphoneBaseMask: HeadphoneMask?
    private(set) var chinHeadphoneMasks: [HeadphoneMask] = []
    /// All nine indexed chin masks are published or none are published.  The
    /// terminal pose is index 8 rather than a separate fallback branch.
    var hasCompleteHeadphoneMasks: Bool {
        headphoneMask != nil
            && chinHeadphoneBaseMask != nil
            && chinHeadphoneMasks.count == CloseUp.transitionFrames + 1
    }
    /// 每套姿势的静止腿图，下标即 `legs.poses` 的下标。
    private(set) var legStills: [NSImage] = []
    /// 过渡帧。`legMoves[姿势][第几帧]`，中枢那一支是空的。
    private(set) var legMoves: [[NSImage]] = []
    private(set) var legs = LegManifest()
    /// 打字的手。画在桌面层**之上**。
    private(set) var handFrames: [NSImage] = []
    private(set) var hands = HandManifest()
    /// 键盘 → 下颌之间的真正骨骼中间姿势；不含常态和最终托腮两端。
    private(set) var chinBodyFrames: [NSImage] = []
    private(set) var chinBodyPhoneFrames: [NSImage] = []
    private(set) var chinBodyBase: NSImage?
    private(set) var chinBodyPhoneBase: NSImage?
    private(set) var chinBodyFinal: NSImage?
    private(set) var chinBodyPhoneFinal: NSImage?
    private(set) var chinHandFrames: [NSImage] = []
    private(set) var chinHandFinal: NSImage?
    private(set) var chin = ChinManifest()
    private(set) var chinAssetSet: ActionAssetSet?
    var hasCompleteChinMotion: Bool { chinAssetSet != nil }
    /// 伸懒腰 / 喝咖啡 / 玩手机。三条的结构和托腮一模一样，所以复用
    /// 同一个 `ActionAssetSet`——运行时的形状确实是同一个：
    /// base、8 帧、终态、停留列、耳机、手层、逐档贴片。
    private(set) var actionSets: [ActionKind: ActionAssetSet] = [:]
    func hasCompleteMotion(_ kind: ActionKind) -> Bool { actionSets[kind] != nil }

    /// 此刻在播哪条长动作、播到第几档。
    ///
    /// 几条动作互斥——同一时刻她不可能既托腮又伸懒腰，`CloseUp` 和
    /// `ActionRig` 谁在跑谁给出非 nil。**解析只该有一份**：上半身、
    /// 面部贴片、桌面手层三处都问这个函数，各写一遍迟早会在某一层上
    /// 用错帧（第 46 条）。
    func activeAction(chin: Int?,
                      action: (kind: ActionKind, frame: Int)?)
        -> (set: ActionAssetSet, frame: Int)? {
        if let frame = chin, let set = chinAssetSet { return (set, frame) }
        if let action, let set = actionSets[action.kind] {
            return (set, action.frame)
        }
        return nil
    }

    /// 面部贴片。眨眼、视线、嘴角这些细微变化只改一小块像素，
    /// 单独出贴片比整张重渲便宜三个数量级。
    private(set) var facePatches: [String: NSImage] = [:]
    private(set) var face = FaceManifest()
    private(set) var facePatches2x: [String: NSImage] = [:]
    private(set) var face2x = FaceManifest()
    var hasHighResolutionFace: Bool {
        !face2x.patches.isEmpty && facePatches2x.count == face2x.patches.count
    }
    /// 托腮 00…08 每帧一套贴片；每套矩形跟随该帧的头部姿势。
    private(set) var facePatchesChinFrames: [[String: NSImage]] = []
    private(set) var faceChinFrames: [FaceManifest] = []
    private(set) var faceChinManifest = ChinFaceManifest()
    var hasChinFace: Bool {
        Self.completeActionFace(faceChinManifest, faceChinFrames,
                                facePatchesChinFrames,
                                poses: CloseUp.transitionFrames + 1)
    }
    /// 三条长动作各自的逐档贴片。头会仰起来、低下去，所以和托腮一样
    /// 不能共用常态那套；**每一档一套 13 块**。
    private(set) var actionFaces: [ActionKind: ActionFaceSet] = [:]

    private static func completeActionFace(_ manifest: ChinFaceManifest,
                                           _ frames: [FaceManifest],
                                           _ images: [[String: NSImage]],
                                           poses: Int) -> Bool {
        manifest.frames == poses
            && frames.count == manifest.frames
            && images.count == manifest.frames
            && frames.enumerated().allSatisfy {
                $0.element.patches.count == images[$0.offset].count
            }
    }

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
            // 1× 托腮上半身**不再加载**：`torsoLayer` 早就不画它了
            // （素材不全时保持常态姿势、只推镜头，不退化成另一个姿势）。
            // 留着它就是留了同一个姿势的第二份拷贝，而第二份必然会脱节——
            // 实测确实脱节了整整一版（第 70 条）。
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
            if let data = try? Data(contentsOf: dir.appendingPathComponent("face2x.json")),
               let m = try? JSONDecoder().decode(FaceManifest.self, from: data) {
                let loaded = m.patches.keys.reduce(into: [String: NSImage]()) { out, key in
                    out[key] = NSImage(contentsOf:
                        dir.appendingPathComponent("face2x_\(key).png"))
                }
                // A partial high-resolution set is worse than a complete 1× set:
                // individual expressions would go soft or disappear mid-blink.  Count alone
                // is not a contract: a valid PNG with the wrong dimensions still loads.
                let sameKeys = !face.patches.isEmpty
                    && Set(m.patches.keys) == Set(face.patches.keys)
                let scaledCanvas = face.canvas.count == 2 && m.canvas.count == 2
                    && m.canvas[0] == face.canvas[0] * 2
                    && m.canvas[1] == face.canvas[1] * 2
                let sameChannels = m.channels == face.channels
                let exactImages = m.patches.allSatisfy { key, rect in
                    guard rect.w > 0, rect.h > 0,
                          rect.x >= 0, rect.y >= 0,
                          rect.x + rect.w <= (m.canvas.first ?? 0),
                          rect.y + rect.h <= (m.canvas.last ?? 0),
                          let image = loaded[key] else { return false }
                    return image.representations.contains {
                        $0.pixelsWide == rect.w && $0.pixelsHigh == rect.h
                    }
                }
                if sameKeys && scaledCanvas && sameChannels && exactImages {
                    face2x = m
                    facePatches2x = loaded
                }
            }
            if let set = loadActionFace(dir, prefix: "facechin2x") {
                faceChinManifest = set.manifest
                faceChinFrames = set.frames
                facePatchesChinFrames = set.images
            }
            actionFaces.removeAll(keepingCapacity: true)
            for kind in ActionKind.allCases {
                if let set = loadActionFace(dir, prefix: "face\(kind.rawValue)2x") {
                    actionFaces[kind] = set
                }
            }
            // 长动作在面部贴片之后加载：头跟着动作转，每一档都要配对应的
            // 贴片才能眨眼说话，缺了就整套不启用（loadChin / loadAction 里 guard）。
            loadChin(dir)
            actionSets.removeAll(keepingCapacity: true)
            for kind in ActionKind.allCases { loadAction(dir, kind: kind) }
            loadHeadphoneMasks(dir)

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
              m.isUsable, m.canvas == legs.canvas else { return }
        func image(_ i: Int) -> NSImage? {
            let prefix = m.pixelScale > 1 ? "snozzy_hand2x" : "snozzy_hand"
            return NSImage(contentsOf: dir.appendingPathComponent(
                String(format: "\(prefix)_%02d.png", i)))
        }
        let frames = (0..<m.frames).compactMap(image)
        func matches(_ image: NSImage) -> Bool {
            image.representations.contains {
                $0.pixelsWide == m.rect.w * m.pixelScale
                    && $0.pixelsHigh == m.rect.h * m.pixelScale
            }
        }
        guard frames.count == m.frames, frames.allSatisfy(matches) else { return }
        handFrames = frames
        if let i = m.chin, let chin = image(i) {
            handFrames.append(chin)
            m.chin = frames.count      // 追加在循环后面，下标以实际位置为准
        } else {
            m.chin = nil
        }
        hands = m
    }

    /// 托腮动作中间帧。三路（上半身、耳机上半身、桌面手层）必须同时完整，
    /// 少一张就整套停用，不能在动作中途让手或耳机闪一下，也不能退回旧终态硬切。
    private func loadActionFace(_ dir: URL, prefix: String) -> ActionFaceSet? {
        guard let data = try? Data(contentsOf:
                dir.appendingPathComponent("\(prefix).json")),
              let m = try? JSONDecoder().decode(ChinFaceManifest.self, from: data),
              m.canvas == face2x.canvas, m.canvas == [3072, 2048],
              // 帧数由清单自己说：托腮是 9 档，带停留段的动作更多。
              // 这里只要求"至少覆盖中间帧和终态"，具体几档由动作那边对。
              m.frames >= CloseUp.transitionFrames + 1,
              m.sets.count == m.frames,
              m.sets.allSatisfy({ $0.canvas == m.canvas }) else { return nil }

        var manifests: [FaceManifest] = []
        var images: [[String: NSImage]] = []
        for (i, set) in m.sets.enumerated() {
            let loaded = set.patches.keys.reduce(into: [String: NSImage]()) { out, key in
                out[key] = NSImage(contentsOf: dir.appendingPathComponent(
                    String(format: "\(prefix)_%02d_%@.png", i, key)))
            }
            let sameKeys = Set(set.patches.keys) == Set(face2x.patches.keys)
            let sameChannels = set.channels == face2x.channels
            let exactImages = set.patches.allSatisfy { key, rect in
                guard rect.w > 0, rect.h > 0,
                      rect.x >= 0, rect.y >= 0,
                      rect.x + rect.w <= (set.canvas.first ?? 0),
                      rect.y + rect.h <= (set.canvas.last ?? 0),
                      let image = loaded[key] else { return false }
                return image.representations.contains {
                    $0.pixelsWide == rect.w && $0.pixelsHigh == rect.h
                }
            }
            guard sameKeys && sameChannels && exactImages else { return nil }
            manifests.append(set)
            images.append(loaded)
        }
        guard manifests.count == m.frames else { return nil }
        return ActionFaceSet(manifest: m, frames: manifests, images: images)
    }

    /// 一条长动作（伸懒腰 / 喝咖啡 / 玩手机）。和托腮同一套契约，
    /// 但**只有 2× 一份**——不留第二份拷贝（第 70 条：没人画的那份必然会旧）。
    ///
    /// 素材缺任何一项就整套不启用，她只是不做这个动作，不会播一个残缺动作。
    /// 三条动作走同一个函数，文件名由 `kind` 拼出来：加第四条动作时，
    /// 这里一行都不用改。
    private func loadAction(_ dir: URL, kind: ActionKind) {
        actionSets[kind] = nil
        let name = kind.rawValue
        guard let face = actionFaces[kind],
              let data = try? Data(contentsOf:
                dir.appendingPathComponent("\(name).json")),
              let m = try? JSONDecoder().decode(ChinManifest.self, from: data),
              m.isUsable,
              // 逐档贴片的档数必须**正好等于**这条动作的姿势数：多一档少一档
              // 都说明身体和脸不是同一次出的，那就会在某一档上贴错脸。
              Self.completeActionFace(face.manifest, face.frames, face.images,
                                      poses: m.poseCount),
              m.frames == CloseUp.transitionFrames,
              m.holdFrames >= 0,
              m.canvas == legs.canvas,
              m.bodyRect.x == 0, m.bodyRect.y == 0,
              m.bodyRect.w == (legs.canvas.first ?? 1536),
              m.bodyRect.h > 0,
              m.bodyRect.h <= (legs.canvas.count > 1 ? legs.canvas[1] : 1024),
              m.handRect.x == hands.rect.x, m.handRect.y == hands.rect.y,
              m.handRect.w == hands.rect.w, m.handRect.h == hands.rect.h,
              m.pixelScale == 2, m.pixelScale == hands.pixelScale else { return }

        func images(_ prefix: String, _ count: Int, _ suffix: String = "") -> [NSImage] {
            (0..<count).compactMap { i in
                NSImage(contentsOf: dir.appendingPathComponent(
                    String(format: "\(prefix)_\(suffix)%02d.png", i)))
            }
        }
        func image(_ file: String) -> NSImage? {
            NSImage(contentsOf: dir.appendingPathComponent(file))
        }
        func matches(_ image: NSImage, _ rect: LegManifest.Rect) -> Bool {
            image.representations.contains {
                $0.pixelsWide == rect.w * m.pixelScale
                    && $0.pixelsHigh == rect.h * m.pixelScale
            }
        }

        let body = "snozzy_body_\(name)2x"
        let phone = "snozzy_body_\(name)_headphones2x"
        let hand = "snozzy_\(name)_hand"
        let bodies = images(body, m.frames)
        let phones = images(phone, m.frames)
        let holdBodies = images(body, m.holdFrames, "hold_")
        let holdPhones = images(phone, m.holdFrames, "hold_")
        let handFrames = images(hand, m.frames)
        guard bodies.count == m.frames, phones.count == m.frames,
              holdBodies.count == m.holdFrames, holdPhones.count == m.holdFrames,
              handFrames.count == m.frames,
              let bodyBase = image("\(body)_base.png"),
              let phoneBase = image("\(phone)_base.png"),
              let bodyFinal = image("\(body).png"),
              let phoneFinal = image("\(phone).png"),
              let handFinal = image("\(hand)_final.png"),
              (bodies + phones + holdBodies + holdPhones)
                .allSatisfy({ matches($0, m.bodyRect) }),
              handFrames.allSatisfy({ matches($0, m.handRect) }),
              matches(bodyBase, m.bodyRect), matches(phoneBase, m.bodyRect),
              matches(bodyFinal, m.bodyRect), matches(phoneFinal, m.bodyRect),
              matches(handFinal, m.handRect) else { return }

        actionSets[kind] = ActionAssetSet(
            manifest: m,
            bodyFrames: bodies, phoneFrames: phones,
            bodyBase: bodyBase, phoneBase: phoneBase,
            bodyFinal: bodyFinal, phoneFinal: phoneFinal,
            holdBodies: holdBodies, holdPhones: holdPhones,
            handFrames: handFrames, handFinal: handFinal,
            faceSets: face.frames, faceImages: face.images)
    }

    private func loadChin(_ dir: URL) {
        chinAssetSet = nil
        guard let data = try? Data(contentsOf: dir.appendingPathComponent("chin.json")),
              let m = try? JSONDecoder().decode(ChinManifest.self, from: data),
              m.isUsable,
              // 终态的头是歪的，必须有终态姿势上的贴片才能眨眼、说话；
              // 没有就整套不启用，退回"只推镜头"，不播一个脸僵住的动作。
              hasChinFace,
              m.frames == CloseUp.transitionFrames,
              m.canvas == legs.canvas,
              m.bodyRect.x == 0, m.bodyRect.y == 0,
              m.bodyRect.w == (legs.canvas.first ?? 1536),
              m.bodyRect.h > 0, m.bodyRect.h <= (legs.canvas.count > 1 ? legs.canvas[1] : 1024),
              m.handRect.x == hands.rect.x, m.handRect.y == hands.rect.y,
              m.handRect.w == hands.rect.w, m.handRect.h == hands.rect.h,
              m.pixelScale == 2, m.pixelScale == hands.pixelScale else { return }

        func images(_ prefix: String) -> [NSImage] {
            (0..<m.frames).compactMap { i in
                NSImage(contentsOf: dir.appendingPathComponent(
                    String(format: "\(prefix)_%02d.png", i)))
            }
        }
        let hi = true
        let bodies = images(hi ? "snozzy_body_chin2x" : "snozzy_body_chin")
        let phones = images(hi ? "snozzy_body_chin_headphones2x"
                               : "snozzy_body_chin_headphones")
        let hands = images("snozzy_chin_hand")
        let bodyBase = hi ? NSImage(contentsOf: dir.appendingPathComponent(
            "snozzy_body_closeup2x.png")) : nil
        let phoneBase = hi ? NSImage(contentsOf: dir.appendingPathComponent(
            "snozzy_body_closeup_headphones2x.png")) : nil
        let bodyFinal = hi ? NSImage(contentsOf: dir.appendingPathComponent(
            "snozzy_body_chin2x.png")) : nil
        let phoneFinal = hi ? NSImage(contentsOf: dir.appendingPathComponent(
            "snozzy_body_chin_headphones2x.png")) : nil
        let final = hi ? NSImage(contentsOf: dir.appendingPathComponent(
            "snozzy_chin_hand_final.png")) : nil
        func matches(_ image: NSImage, _ rect: LegManifest.Rect) -> Bool {
            image.representations.contains {
                $0.pixelsWide == rect.w * m.pixelScale
                    && $0.pixelsHigh == rect.h * m.pixelScale
            }
        }
        guard bodies.count == m.frames, phones.count == m.frames,
              hands.count == m.frames,
              bodies.allSatisfy({ matches($0, m.bodyRect) }),
              phones.allSatisfy({ matches($0, m.bodyRect) }),
              hands.allSatisfy({ matches($0, m.handRect) }),
              !hi || (bodyBase != nil && phoneBase != nil && bodyFinal != nil
                      && phoneFinal != nil && final != nil
                      && matches(bodyBase!, m.bodyRect)
                      && matches(phoneBase!, m.bodyRect)
                      && matches(bodyFinal!, m.bodyRect)
                      && matches(phoneFinal!, m.bodyRect)
                      && matches(final!, m.handRect)) else { return }
        chin = m
        chinBodyFrames = bodies
        chinBodyPhoneFrames = phones
        chinBodyBase = bodyBase
        chinBodyPhoneBase = phoneBase
        chinBodyFinal = bodyFinal
        chinBodyPhoneFinal = phoneFinal
        chinHandFrames = hands
        chinHandFinal = final
        chinAssetSet = ActionAssetSet(
            manifest: m,
            bodyFrames: bodies,
            phoneFrames: phones,
            bodyBase: bodyBase!,
            phoneBase: phoneBase!,
            bodyFinal: bodyFinal!,
            phoneFinal: phoneFinal!,
            // 托腮没有停留那一列：它的停留期间镜头是推到位的近景，
            // 手和头本来就有别的东西在动（视线、表情），不需要再补一段。
            holdBodies: [], holdPhones: [],
            handFrames: hands,
            handFinal: final!,
            faceSets: faceChinFrames,
            faceImages: facePatchesChinFrames)
    }

    /// 从生产图像对中派生播放反馈的 mask。
    ///
    /// 不保存一张手工画的圆，也不把耳机 ROI 扩成矩形：
    /// `HeadphoneMaskBuilder` 在预乘 RGBA 差分上做阈值 + 连通域筛选，
    /// 每一张托腮帧都用自己那一对身体图，因此头倾时 mask 会和耳机一起走。
    private func loadHeadphoneMasks(_ dir: URL) {
        headphoneMask = nil
        chinHeadphoneBaseMask = nil
        chinHeadphoneMasks.removeAll(keepingCapacity: true)

        // Masks are generated by `Scripts/headphone_masks.py` from the same
        // aligned production pairs.  A stale, partial, or malformed manifest
        // disables the whole feedback set; there is deliberately no runtime
        // derivation fallback and no normal-mask substitution for chin.
        guard let data = try? Data(contentsOf: dir.appendingPathComponent("headphone_masks.json")),
              let manifest = try? JSONDecoder().decode(HeadphoneMaskManifest.self, from: data),
              validateHeadphoneManifest(manifest, dir: dir),
              let normal = loadHeadphoneMask(manifest.masks["normal"], dir: dir),
              let base = loadHeadphoneMask(manifest.masks["chin_base"], dir: dir) else { return }

        var frames: [HeadphoneMask] = []
        frames.reserveCapacity(CloseUp.transitionFrames + 1)
        // Keep the source index in the destination array.  Do not use
        // compactMap here: a missing 04 must never make 05 render as 04.
        for i in 0...CloseUp.transitionFrames {
            let key = String(format: "chin_%02d", i)
            guard let mask = loadHeadphoneMask(manifest.masks[key], dir: dir) else {
                headphoneMask = nil
                chinHeadphoneBaseMask = nil
                chinHeadphoneMasks.removeAll(keepingCapacity: true)
                return
            }
            frames.append(mask)
        }

        // Publish only after normal, base, and every indexed frame succeeded.
        headphoneMask = normal
        chinHeadphoneBaseMask = base
        chinHeadphoneMasks = frames
    }

    private func validateHeadphoneManifest(_ manifest: HeadphoneMaskManifest,
                                            dir: URL) -> Bool {
        guard manifest.version == 2,
              manifest.canvas == [1536, 1024],
              manifest.pixelScale == 1,
              manifest.masks.count == 2 + CloseUp.transitionFrames + 1 else {
            return false
        }
        let expectedKeys = Set(["normal", "chin_base"]
            + (0...CloseUp.transitionFrames).map {
                String(format: "chin_%02d", $0)
            })
        guard Set(manifest.masks.keys) == expectedKeys else { return false }

        // These are every source family used by the generator.  Checking the
        // complete set catches a changed body, headphone pair, face patch
        // layout, or close-up frame manifest before any old mask is used.
        var requiredSources = [
            "snozzy_body.png", "snozzy_body_headphones.png", "face.json",
            "snozzy_body_closeup2x.png", "snozzy_body_closeup_headphones2x.png",
            "face2x.json", "facechin2x.json", "chin.json",
            "snozzy_body_chin2x.png", "snozzy_body_chin_headphones2x.png",
        ]
        for i in 0..<CloseUp.transitionFrames {
            requiredSources.append(String(format: "snozzy_body_chin2x_%02d.png", i))
            requiredSources.append(String(format:
                "snozzy_body_chin_headphones2x_%02d.png", i))
        }
        guard requiredSources.allSatisfy({ manifest.sources[$0] != nil }) else { return false }

        let root = dir.standardizedFileURL.path
        for (relative, expected) in manifest.sources {
            guard !relative.hasPrefix("/"), !relative.contains("..") else { return false }
            let url = dir.appendingPathComponent(relative).standardizedFileURL
            guard url.path == root || url.path.hasPrefix(root + "/"),
                  let digest = sha256(url),
                  digest.caseInsensitiveCompare(expected) == .orderedSame else {
                return false
            }
        }

        for (key, record) in manifest.masks {
            let isNormal = key == "normal"
            let expectedCanvas = isNormal ? [1536, 600] : [1536, 611]
            let expectedScale = isNormal ? 1 : 2
            guard record.canvas == expectedCanvas,
                  record.pixelScale == expectedScale,
                  record.rect.count == 4,
                  record.centroid.count == 2,
                  record.coverage > 0,
                  record.components == 2 else { return false }
            let x = record.rect[0], y = record.rect[1]
            let w = record.rect[2], h = record.rect[3]
            guard x >= 0, y >= 0, w > 0, h > 0,
                  x + w <= Double(record.canvas[0]),
                  y + h <= Double(record.canvas[1]) else { return false }
            guard !record.file.hasPrefix("/"), !record.file.contains("..") else {
                return false
            }
            let maskURL = dir.appendingPathComponent(record.file).standardizedFileURL
            guard maskURL.path.hasPrefix(root + "/") else { return false }
        }
        return true
    }

    private func sha256(_ url: URL) -> String? {
        guard let data = try? Data(contentsOf: url) else { return nil }
        return SHA256.hash(data: data).map { String(format: "%02x", $0) }.joined()
    }

    private func loadHeadphoneMask(_ record: HeadphoneMaskRecord?, dir: URL)
        -> HeadphoneMask? {
        guard let record, record.rect.count == 4,
              record.centroid.count == 2,
              let image = NSImage(contentsOf: dir.appendingPathComponent(record.file)) else {
            return nil
        }
        let rect = CGRect(x: record.rect[0], y: record.rect[1],
                          width: record.rect[2], height: record.rect[3])
        let centroid = CGPoint(x: record.centroid[0], y: record.centroid[1])
        return HeadphoneMaskBuilder.load(image: image, rect: rect,
                                         pixelScale: record.pixelScale,
                                         coverage: record.coverage,
                                         centroid: centroid,
                                         componentCount: record.components)
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

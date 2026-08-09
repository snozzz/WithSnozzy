import AppKit
import Observation
import SwiftUI

/// 推镜头这件事在画面上的算术。纯几何，不带状态。
///
/// 单独拎出来是因为**有两处要用同一份**：真实画面（`RootView.SceneStack`）
/// 和判据（`Snapshot` 的 `--closeup`）。这个项目里"一份数据在两处各算一遍"
/// 已经犯过三次了（`HIP_Y` 写三份、贴片清单和渲染脚本对不上、面部贴片的
/// 横竖缩放比），第 46 条的结论是：发现两处在算同一件事就并成一处。
/// 判据和被判的东西各算一遍尤其糟——那样判据永远是绿的。
enum SceneCamera {

    /// 推到多近。
    ///
    /// 1.55 是**房间素材分辨率定的上限**，不是构图偏好。托腮角色、动作和脸
    /// 已有独立 2× 素材，但房间和桌子仍是 1536×1024 的交付平面图；窗口在
    /// 2 倍屏上大约 2000 像素宽，本来就已放大 1.3 倍，再乘 1.55 是 2.1 倍。
    ///
    /// **想推得更近要先换房间/桌面素材，调这个数没用**——角色扛得住，背景会
    /// 先糊。可把整套房间重绘到 3072 宽，或把近景背景改成专门的景深版本。
    static let zoom: CGFloat = 1.55

    /// 镜头往哪儿推。画布坐标 (818, 401) 是她的头骨，往下让一点，
    /// 把托腮的手（画布 y 414…488）和桌沿一起收进画面。
    static let anchor = (x: 0.53, y: 0.42)
    static var unitAnchor: UnitPoint { UnitPoint(x: anchor.x, y: anchor.y) }


    /// `scaleEffect(zoom, anchor: unitAnchor)` 会把某个点搬到哪。
    ///
    /// 气泡和摸头热区必须**跟着镜头移动、但自己不缩放**：把它们塞进被缩放
    /// 的那层最省事，位置也自动对，代价是文字跟着放大——位图放大只是糊一点，
    /// 文字放大是"字号变了"，一眼就出戏。
    static func point(_ x: CGFloat, _ y: CGFloat,
                      in size: CGSize, zoom: CGFloat) -> CGPoint {
        let ax = size.width * anchor.x, ay = size.height * anchor.y
        return CGPoint(x: ax + (x - ax) * zoom, y: ay + (y - ay) * zoom)
    }

    /// 气泡的半个身子。`SpeechBubble` 最宽 210 点、左右各 13 点内边距，
    /// 两行高约 46 点。
    static let bubbleHalf = CGSize(width: 120, height: 26)

    /// 把气泡拦在窗口内。
    ///
    /// 气泡挂在她头部右上方，而推镜头是**从锚点向外推**的——她的头在锚点
    /// 右上方，所以推得越近气泡越往右上跑，1.55 倍时正好顶到窗口右边缘，
    /// 窗口再窄一点就切掉半句话。而近景恰恰是她说话最重要的时候
    /// （念待办那句），切掉了这个功能就白做了。顶上留 44 点是给 `TopBar`。
    static func penned(_ p: CGPoint, in size: CGSize) -> CGPoint {
        let m = bubbleHalf
        let loX = m.width + 8, hiX = max(loX, size.width - m.width - 8)
        let loY = m.height + 44, hiY = max(loY, size.height - m.height - 8)
        return CGPoint(x: min(max(p.x, loX), hiX), y: min(max(p.y, loY), hiY))
    }
}

/// 近景切换：察觉你在看她，于是托着腮凑近，顺便念叨一句你的待办。
///
/// 这是这个 app 里由事件触发的有状态动画。腿、表情、打字那几层都是
/// 「给定时刻算出同一个结果」的纯函数（`LegPose` / `FaceRig` / `TypingRig`），
/// 因为它们是自发的、什么时候看都行。近景不一样——它由一个**事件**触发
/// （你把窗口切到前台），所以必须记住"从什么时候开始的"。
///
/// 镜头缓动交给 SwiftUI，骨骼动作由一个 Task 以 1/12 秒推进离散素材档位；
/// 正放抬手、倒放落手共用同一列，所以不会出现两条路径或锚点不一致。
@MainActor
@Observable
final class CloseUp {

    // MARK: - 时间轴
    //
    // 推进 → 停留 → 退回。停留时长每次随机，5…10 秒（用户定的区间）：
    // 固定时长几次之后就能预判，而"她盯了你多久"本来就该有点不确定。

    /// 抬手八张中间姿势，两端复用常态和终态。帧长必须比空闲动画 tick
    /// （1/15 秒）长；1/12 秒在轻微掉帧下也不会漏档，和换腿的判据一致。
    static let transitionFrames = 8
    static let frameTime: Double = 1.0 / 12.0
    static let motionDuration = Double(transitionFrames + 1) * frameTime
    /// 镜头推进和抬手同时结束，动作不会在镜头停住后还拖一小截。
    static let pushIn: Double = motionDuration
    /// 退回用多久。比推进慢一点——凑近是"注意到了"，退回是"算了继续干活"。
    static let pullOut: Double = 1.1
    static let holdRange: ClosedRange<Double> = 5...10

    /// 推到多近、往哪儿推，见 `SceneCamera`。

    // MARK: - 触发

    /// 两次近景之间至少隔多久。
    ///
    /// 每次切前台都凑上来会**非常**烦——这个 app 大部分时间挂在后台，
    /// 一天要切几十次。四分钟意味着连续来回切窗口时她只反应一次。
    private static let cooldown: Double = 240
    /// 离开多久才算"你刚回来"。
    ///
    /// 少了这一条，点一下别的窗口再点回来（比如复制个东西）也会触发。
    /// 真正的"你回来了"至少得离开半分钟。
    private static let awayEnough: Double = 30

    /// 镜头推上去了没有。**这是个二值量，缓动交给 SwiftUI。**
    ///
    /// 第一版是"存下开始时刻、每帧从墙钟算推进程度"，和 `LegPose` 那些
    /// 一个路子。放在这里是错的，而且错得很隐蔽：那种写法要求有人**每帧**
    /// 去读它，而镜头这一层不在任何 `TimelineView` 里——`body` 只在被观察的
    /// 属性变化时才跑一次。于是镜头会直接跳到位，一帧缓动都没有。
    /// （RootView 里那条"参数在 body 求值时取的、而 body 并不每帧运行"
    /// 的注释说的就是同一件事，我又踩了一遍。）
    ///
    /// 改成布尔量之后，`withAnimation` 一裹，`scaleEffect`／`blur`／`position`
    /// 全是 SwiftUI 自带可动画的属性，缓动、打断、反向全归它管，
    /// 而且不推镜头的时候一点开销都没有。
    private(set) var pushed = false
    /// nil 是常态，-1 是发布的 2× 常态起点，0..<transitionFrames 是骨骼
    /// 中间姿势，transitionFrames 是终态。
    /// 这是离散帧，不交叉淡入；放手时把同一列倒放，锚点和路径天然一致。
    private(set) var chinFrame: Int?
    /// -1 仍是双手在键盘上的高清常态；frame 0 才真正开始抬手。
    var chinRest: Bool { (chinFrame ?? -1) >= 0 }
    /// 视线跟着八张骨骼帧逐步转向用户，退回时同列倒放。
    /// 不直接用 `chinRest` 二值切，否则 frame 0 会先瞬移眼球再抬手。
    var attentionAmount: Double {
        guard let frame = chinFrame, frame >= 0 else { return 0 }
        return min(1, Double(frame + 1) / Double(Self.transitionFrames + 1))
    }

    private var running: Task<Void, Never>?
    private var lastFinished = Date.distantPast
    private var leftAt: Date?
    private var observer: NSObjectProtocol?

    /// 推进结束时喊一声，由 `AppState` 接上去让她说话。
    var onArrived: (() -> Void)?
    /// 现在能不能凑近。由 `AppState` 注入——窗口形态、面板开着没有、
    /// 窗口可不可见都归它管，这里不该知道那些。
    var canStart: (() -> Bool)?

    /// 正在近景里（含推进和退回）。
    var isActive: Bool { running != nil }

    // MARK: - 生命周期

    /// 开始监听"窗口切到前台"。
    ///
    /// **必须由 `AppDelegate.wireState()` 调**，不能在 `init` 里：
    /// `canStart` 是外面注入的，这里一开始还是 nil（和 `PointerWatcher`
    /// 同一个坑，第 12 条）。
    func start() {
        guard observer == nil else { return }
        let center = NotificationCenter.default
        center.addObserver(forName: NSApplication.didResignActiveNotification,
                           object: nil, queue: .main) { [weak self] _ in
            MainActor.assumeIsolated { self?.leftAt = Date() }
        }
        observer = center.addObserver(
            forName: NSApplication.didBecomeActiveNotification,
            object: nil, queue: .main) { [weak self] _ in
            MainActor.assumeIsolated { self?.noticed() }
        }
    }

    /// 你回来了。够条件就凑近看你一眼。
    private func noticed() {
        let now = Date()
        guard running == nil,
              now.timeIntervalSince(lastFinished) > Self.cooldown,
              let away = leftAt, now.timeIntervalSince(away) > Self.awayEnough,
              canStart?() ?? true
        else { return }
        begin()
    }

    /// 立刻来一次。菜单/调试用，绕过冷却和"离开够久"那两条。
    ///
    /// 整段演出写成一条顺序执行的时间轴，而不是散在几个回调里——
    /// 顺序本身就是这个功能的全部内容，摊平了写最看得出对不对。
    /// `Task.sleep` 会在被取消时抛出，所以 `cancel()` 直接掐掉这条 Task
    /// 就能停在任何一步，不需要每步再去认一次身份。
    func begin() {
        running?.cancel()
        // Set the published base synchronously.  Waiting for the child Task to
        // get its first actor turn can otherwise leave one old hand-layer frame
        // on screen at the instant the camera starts moving.
        chinFrame = -1
        let hold = Double.random(in: Self.holdRange)
        running = Task { [weak self] in
            guard let self else { return }

            // 镜头和抬手同时开始。-1 是专门发布的 2× 常态底图，也是 frame 0
            // 真正采用的合成基准；不能先画旧 1× 再在第一拍偷偷换清晰度。
            withAnimation(.easeInOut(duration: Self.pushIn)) { self.pushed = true }
            for frame in 0..<Self.transitionFrames {
                guard await self.pause(Self.frameTime) else { return }
                self.chinFrame = frame
            }
            guard await self.pause(Self.frameTime) else { return }
            self.chinFrame = Self.transitionFrames

            // 推到位、掌根落到下颌之后才开口。
            self.onArrived?()

            guard await self.pause(hold) else { return }
            withAnimation(.easeInOut(duration: Self.pullOut)) { self.pushed = false }
            // 同一列倒放，手在 0.75 秒时先回到键盘；镜头再用余下 0.35 秒退完。
            for frame in stride(from: Self.transitionFrames - 1, through: 0, by: -1) {
                guard await self.pause(Self.frameTime) else { return }
                self.chinFrame = frame
            }
            guard await self.pause(Self.frameTime) else { return }
            self.chinFrame = -1
            guard await self.pause(Self.pullOut - Self.motionDuration) else { return }
            self.chinFrame = nil
            self.running = nil
            self.lastFinished = Date()
        }
    }

    /// 睡一会儿。被取消就返回 false，调用方直接收工。
    private func pause(_ seconds: Double) async -> Bool {
        do {
            try await Task.sleep(for: .seconds(seconds))
            return true
        } catch {
            return false
        }
    }

    /// 手动收起（切窗口形态之类）。
    func cancel() {
        guard running != nil else { return }
        running?.cancel()
        running = nil
        chinFrame = nil
        withAnimation(.easeInOut(duration: 0.25)) { pushed = false }
        lastFinished = Date()
    }
}

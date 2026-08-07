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
    /// 1.55 是**素材分辨率定的上限**，不是构图偏好。房间和桌子是 1536×1024
    /// 的平面图（用户交付的重绘图），没法重渲得更大；窗口在 2 倍屏上大约
    /// 2000 像素宽，本来就已经在放大 1.3 倍了，再乘 1.55 是 2.1 倍。
    ///
    /// **想推得更近只能换素材，调这个数没用**——继续往上加只会越来越糊。
    /// 两条路：把整套房间重绘到 3072 宽，或者给近景单独架一台推近的相机
    /// 重渲角色和面部贴片（她清楚、房间虚化，反正近景本来就该有景深）。
    /// 后者便宜得多，但要连面部贴片一起重出，不然会出现"糊眼睛配清楚的脸"。
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
/// 这是这个 app 里**唯一一处有状态的动画**。腿、表情、打字那几层都是
/// 「给定时刻算出同一个结果」的纯函数（`LegPose` / `FaceRig` / `TypingRig`），
/// 因为它们是自发的、什么时候看都行。近景不一样——它由一个**事件**触发
/// （你把窗口切到前台），所以必须记住"从什么时候开始的"。
///
/// 但记的只有一个时刻：`startedAt`。别的一切（推到多近、摆不摆托腮、
/// 什么时候说话）都还是从它算出来的纯函数。窗口被遮挡时时间线会暂停，
/// 而这里读的是墙钟，所以恢复之后不会跳变——它自己往前走完就收了。
@MainActor
@Observable
final class CloseUp {

    // MARK: - 时间轴
    //
    // 推进 → 停留 → 退回。停留时长每次随机，5…10 秒（用户定的区间）：
    // 固定时长几次之后就能预判，而"她盯了你多久"本来就该有点不确定。

    /// 推进用多久。
    ///
    /// 托腮是**硬切**的（没有中间帧），所以这一段的意义不只是运镜，
    /// 还要盖住那一下换图：镜头正在动的时候换姿势，眼睛跟着尺度变化走，
    /// 基本注意不到胳膊是"跳"上去的。太慢就盖不住了。
    static let pushIn: Double = 0.75
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
    /// 摆不摆托腮。和 `pushed` 分开，因为它是**硬切**的——只有一张图，
    /// 没有中间帧，跟着缓动走只会得到一次交叉淡入（第 9 条：位图溶解不出动作）。
    private(set) var chinRest = false

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
        let hold = Double.random(in: Self.holdRange)
        running = Task { [weak self] in
            guard let self else { return }

            // 姿势立刻换，镜头开始推。**同一帧**——换图那一下是硬切
            // （没有中间帧），得靠运镜盖住；等镜头推完再换的话，
            // 画面正静止着，一眼就看见胳膊跳上去了。
            self.chinRest = true
            withAnimation(.easeInOut(duration: Self.pushIn)) { self.pushed = true }

            // 推到位了才开口。先凑近、再说话，才像"看了你一会儿才决定说"。
            guard await self.pause(Self.pushIn) else { return }
            self.onArrived?()

            guard await self.pause(hold) else { return }
            withAnimation(.easeInOut(duration: Self.pullOut)) { self.pushed = false }

            // 手**先**放下，镜头再退完。反过来像是被镜头拖走的。
            guard await self.pause(Self.pullOut * 0.45) else { return }
            self.chinRest = false

            guard await self.pause(Self.pullOut * 0.55) else { return }
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
        chinRest = false
        withAnimation(.easeInOut(duration: 0.25)) { pushed = false }
        lastFinished = Date()
    }
}

import Foundation
import SwiftUI

/// 长动作互相撞上的时候，画面有没有硬切。
///
/// ```
/// WithSnozzy.app/Contents/MacOS/WithSnozzy --performcheck
/// ```
///
/// 不出图。用真实的 `CloseUp`、三条 `ActionRig` 和 `Performer` 演几段碰撞，
/// 每 4 毫秒记一次"画面此刻显示哪套素材的第几档"（和 `SceneAssets.activeAction`
/// 同一个优先级：托腮在前），然后逐步查：
///
/// - **一步只挪一档**：同一套素材里相邻两档、终态↔停留列、停留列循环；
///   换一套素材必须先回到常态（`-1 → nil → 另一套的 -1`）。
///   半截姿势直接跳到常态或另一套，就是硬切
/// - **同一时刻最多一条在演**
/// - 每个场景该演的那条真的演到了终态，不该演的（过期、冷却）没演
@MainActor
enum PerformCheck {
    static var requested: Bool { CommandLine.arguments.contains("--performcheck") }

    private struct Shown: Equatable {
        let asset: String?
        let frame: Int?
        var label: String { asset.map { "\($0):\(frame!)" } ?? "常态" }
    }

    static func run() -> Bool {
        let assets = SceneAssets()
        assets.load()
        let closeUp = CloseUp()
        closeUp.holdRange = 1.0...1.0
        var rigs: [ActionKind: ActionRig] = [:]
        var holds: [String: Int] = ["chin": 0]
        for kind in ActionKind.allCases {
            let rig = ActionRig(kind)
            rig.holdFrames = assets.actionSets[kind]?.manifest.holdFrames ?? 6
            holds[kind.rawValue] = rig.holdFrames
            rigs[kind] = rig
        }
        let performer = Performer(closeUp: closeUp, actions: rigs)
        let final = CloseUp.transitionFrames

        func shown() -> Shown {
            if let f = closeUp.chinFrame { return Shown(asset: "chin", frame: f) }
            for kind in ActionKind.allCases {
                if let f = rigs[kind]?.frame { return Shown(asset: kind.rawValue, frame: f) }
            }
            return Shown(asset: nil, frame: nil)
        }
        func activeCount() -> Int {
            (closeUp.isActive ? 1 : 0) + rigs.values.filter(\.isActive).count
        }
        // 两条之间直接交接是 `X:-1 → Y:-1`（让位那条的收尾和下一条的起步在
        // 同一拍），不经过 1× 常态。各套 -1 都是同一个常态姿势的 2× 底图，
        // 但不是逐像素相同（咖啡/手机那套桌沿那行多画了一截杯子），
        // 所以按真实层序整张渲出来量：直接交接的差别不能比"经过常态"那两步里
        // 任何一步大，否则就该老老实实先回常态。
        let restDiff = restTransitions(assets)
        func smooth(_ a: Shown, _ b: Shown) -> Bool {
            switch (a.asset, b.asset) {
            case (nil, nil): return true
            case (nil, _): return b.frame == -1
            case (_, nil): return a.frame == -1
            case let (x?, y?) where x != y:
                guard a.frame == -1, b.frame == -1 else { return false }
                return restDiff(x, y)
            case let (x?, y?):
                guard x == y, let f = a.frame, let g = b.frame else { return false }
                let h = holds[x] ?? 0
                if f <= final && g <= final { return abs(f - g) == 1 }
                if f == final && g == final + 1 { return true }
                if f > final && (g == f + 1 || g == final) { return true }
                return f == final + h && g == final + 1
            }
        }

        var ok = true
        func check(_ label: String, _ pass: Bool) {
            ok = ok && pass
            print("  " + (pass ? "✓ " : "✗ ") + label)
        }

        /// 跑一段剧本，期间持续采样。`script` 里可以 await 等条件。
        func scenario(_ title: String, expectHardCut: Bool = false,
                      _ script: @escaping @MainActor (_ waitFor: @escaping @MainActor (@escaping @MainActor () -> Bool) async -> Void) async -> Void)
            -> [Shown] {
            print("== \(title)")
            var seq: [Shown] = [shown()]
            var overlap = 0
            var finished = false
            let done = DispatchSemaphore(value: 0)
            Task { @MainActor in
                while !finished {
                    let s = shown()
                    if s != seq.last { seq.append(s) }
                    if activeCount() > 1 { overlap += 1 }
                    try? await Task.sleep(for: .milliseconds(4))
                }
            }
            Task { @MainActor in
                await script { cond in
                    let deadline = Date().addingTimeInterval(20)
                    while !cond() && Date() < deadline {
                        try? await Task.sleep(for: .milliseconds(4))
                    }
                }
                // 等所有动作都演完
                let deadline = Date().addingTimeInterval(25)
                while (performer.current != nil || performer.pending > 0) && Date() < deadline {
                    try? await Task.sleep(for: .milliseconds(10))
                }
                try? await Task.sleep(for: .milliseconds(60))
                finished = true
                try? await Task.sleep(for: .milliseconds(20))
                done.signal()
            }
            while done.wait(timeout: .now()) == .timedOut {
                RunLoop.main.run(until: Date().addingTimeInterval(0.01))
            }
            print("  " + seq.map(\.label).joined(separator: " → "))
            var jumps: [String] = []
            for (a, b) in zip(seq, seq.dropFirst()) where !smooth(a, b) {
                jumps.append("\(a.label)⇢\(b.label)")
            }
            if expectHardCut {
                check("判据抓到了硬切（\(jumps.joined(separator: "，"))）", !jumps.isEmpty)
            } else {
                check("每一步只挪一档"
                      + (jumps.isEmpty ? "" : "（硬切：\(jumps.joined(separator: "，"))）"),
                      jumps.isEmpty)
            }
            check("同一时刻最多一条在演" + (overlap == 0 ? "" : "（重叠 \(overlap) 次采样）"),
                  overlap == 0)
            check("最后回到常态", seq.last == Shown(asset: nil, frame: nil))
            return seq
        }
        func reached(_ seq: [Shown], _ set: String) -> Bool {
            seq.contains(Shown(asset: set, frame: final))
        }

        var seq = scenario("停留中手动换另一条（喝咖啡 → 伸懒腰）") { waitFor in
            performer.request(.action(.coffee), manual: true)
            await waitFor { (rigs[.coffee]?.frame ?? -1) > final }
            performer.request(.action(.stretch), manual: true)
        }
        check("喝咖啡被倒放让位、伸懒腰演到终态",
              reached(seq, "coffee") && reached(seq, "stretch"))

        seq = scenario("动作中途叫她凑近（伸懒腰第 4 档 → 托腮）") { waitFor in
            performer.request(.action(.stretch), manual: true)
            await waitFor { rigs[.stretch]?.frame == 4 }
            performer.request(.closeUp, manual: true)
        }
        check("伸懒腰没到终态就让位、托腮演到终态",
              !reached(seq, "stretch") && reached(seq, "chin"))

        seq = scenario("近景里手动点动作（托腮终态 → 看手机）") { waitFor in
            performer.request(.closeUp, manual: true)
            await waitFor { closeUp.chinFrame == final }
            performer.request(.action(.phone), manual: true)
        }
        check("托腮倒放让位、看手机演到终态", reached(seq, "chin") && reached(seq, "phone"))

        var queuedStartedLate = false
        seq = scenario("自动请求撞上近景：排队，等它自己退完") { waitFor in
            performer.request(.closeUp, manual: true)
            await waitFor { closeUp.chinFrame == final }
            let asked = Date()
            performer.request(.action(.stretch), patience: 30, ignoresCooldown: true)
            await waitFor { rigs[.stretch]?.isActive == true }
            // 托腮停 1 秒 + 退 1.1 秒，排队的那条不该早于这个时刻开始
            queuedStartedLate = Date().timeIntervalSince(asked) > 1.5
        }
        check("近景完整演完才轮到伸懒腰（没有被自动请求打断）",
              reached(seq, "chin") && reached(seq, "stretch") && queuedStartedLate)

        seq = scenario("排队过期：等太久就不演了") { waitFor in
            performer.request(.closeUp, manual: true)
            await waitFor { closeUp.chinFrame == final }
            performer.request(.action(.coffee), patience: 0.5, ignoresCooldown: true)
        }
        check("过期的喝咖啡没有演", reached(seq, "chin") && !seq.contains { $0.asset == "coffee" })

        seq = scenario("同一条连点两次：不重新开始") { waitFor in
            performer.request(.action(.coffee), manual: true)
            await waitFor { rigs[.coffee]?.frame == 3 }
            performer.request(.action(.coffee), manual: true)
        }
        let restarts = seq.filter { $0 == Shown(asset: "coffee", frame: -1) }.count
        check("喝咖啡只起步一次（-1 出现 \(restarts) 次，起落各一次）", restarts == 2)

        seq = scenario("自动请求遇到冷却：丢掉") { _ in
            performer.request(.action(.coffee))
        }
        check("刚喝完又自动请求喝咖啡，没有演", !seq.contains { $0.asset == "coffee" })

        // 负向探针：照旧写法让位（`cancel()` 直接收掉再起下一条），判据必须报红。
        _ = scenario("负向探针：旧的 cancel() 让位", expectHardCut: true) { waitFor in
            performer.request(.action(.coffee), manual: true, ignoresCooldown: true)
            await waitFor { (rigs[.coffee]?.frame ?? -1) > final }
            rigs[.coffee]?.cancel()
            rigs[.phone]?.begin(force: true)
        }

        print("PERFORM " + (ok ? "全部通过" : "有不合格项"))
        return ok
    }

    /// 各套 -1 底图之间、以及它们和 1× 常态之间，整张画面差多少个像素。
    /// 返回"X:-1 直接交给 Y:-1 算不算平滑"。
    private static func restTransitions(_ assets: SceneAssets) -> (String, String) -> Bool {
        let size = CGSize(width: 768, height: 512)
        func render(chin: Int?, action: (kind: ActionKind, frame: Int)?) -> [UInt8] {
            let t = 3.0
            var pose = SnozzyRig.pose(time: t, kick: 0, playing: false)
            pose.blink = 0
            let frame = SceneFrame(
                palette: .day, t: t, pose: pose,
                face: FaceRig.expression(t: t, playing: false, mood: 0.5, drowsy: 0,
                                         working: false, speaking: false),
                headphones: false, chinFrame: chin, action: action,
                activity: ActivityRig.preview(.resting, playing: false),
                playing: false, typingFrame: 0)
            let r = ImageRenderer(content: SceneLayers(assets: assets, frame: frame, size: size)
                .frame(width: size.width, height: size.height))
            r.scale = 1
            guard let cg = r.cgImage,
                  let data = cg.dataProvider?.data as Data? else { return [] }
            return [UInt8](data)
        }
        func differing(_ a: [UInt8], _ b: [UInt8]) -> Int {
            guard a.count == b.count else { return .max }
            var n = 0
            var i = 0
            while i + 3 < a.count {
                let d = max(abs(Int(a[i]) - Int(b[i])), abs(Int(a[i + 1]) - Int(b[i + 1])),
                            abs(Int(a[i + 2]) - Int(b[i + 2])))
                if d > 24 { n += 1 }
                i += 4
            }
            return n
        }
        var bases: [String: [UInt8]] = ["chin": render(chin: -1, action: nil)]
        for kind in ActionKind.allCases {
            bases[kind.rawValue] = render(chin: nil, action: (kind, -1))
        }
        let rest = render(chin: nil, action: nil)
        var toRest: [String: Int] = [:]
        for (name, image) in bases { toRest[name] = differing(image, rest) }
        print("常态底图整张差异（像素，阈值 24/255）："
              + bases.keys.sorted().map { "\($0)↔1×常态 \(toRest[$0]!)" }
                .joined(separator: "  "))
        var verdict: [String: Bool] = [:]
        let names = bases.keys.sorted()
        for x in names {
            for y in names where x != y {
                let direct = differing(bases[x]!, bases[y]!)
                verdict[x + ">" + y] = direct <= max(toRest[x]!, toRest[y]!)
                if x < y { print("  \(x)↔\(y) 直接交接 \(direct)") }
            }
        }
        return { verdict[$0 + ">" + $1] ?? false }
    }
}

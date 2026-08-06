"""量「手到底有没有好好放在键盘上」。

    blender --background --factory-startup --python Blender/measure_hands.py -- Snozzy.vrm

不渲染，纯几何，两三秒出数。改完 `keyboard.CENTRE/YAW/home_row` 或者
`pose.WRIST_LIFT/HAND_DIR/KEY_CURL` 之后跑一趟，比盯着截图猜快得多——
手在画面上只有四十来像素宽，"指尖是压在键上还是扎进键盘里"这种事
放大看也看不准，而它正是"像不像在打字"的全部（第 34 条）。

报四个数，每个都有明确的判据：

- **腕角**：小臂方向和手掌方向的夹角。真人打字大约 10–25°，
  超过 40° 就是拧着的。左右要接近，差一大截说明键盘偏在一边、
  某只手得横过身体去够。
- **指尖高**：指尖相对键帽顶面的毫米数。0 上下几毫米＝点在键上；
  负得多＝手扎进键盘里，会从前沿那排漏出来（看着像"手指超出键盘"）；
  正得多＝手悬空。按下的那一帧应该比抬起的低几毫米，不是几厘米。
- **大臂姿势**：偏离垂直多少度、肘在肩下方多少厘米。**这是所有指标里
  唯一一条硬约束**——别的指标难看，这一条是「人做不出来」。坐着打字
  大约偏离垂直 15–30°、肘在肩下方 25–30 厘米。超过 36° 或者肘抬到
  离肩不到 15 厘米，肩膀那里就鼓出一大坨，一眼就是畸形（第 42 条）。
- **小臂投影**：小臂在画面上有多长（像素）。满长度约 123。**但别去优化它**：
  相机在她左前方，坐着打字的小臂本来就大致朝向镜头，三四十像素是
  这个机位的正常结果。硬把它拉长只能靠张开大臂，那就换来上面那条畸形
  （我干过：投影拉到 95，代价是大臂张 63°、肘抬到和肩齐平）。
- **出界**：指尖跑到键区之外多少毫米。应当恒为 0。
- **伸出**：手腕离肩多远，占臂长（0.43 米）的比例。超过 95% 就危险了，
  IK 会夹到伸直、落点悄悄偏掉（第 27 条）。

顺带报一下袖口的半径，那是"手臂像临时接上去"的根子（`slim_sleeves`）。
"""
import bpy, math, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P, keyboard as K
from mathutils import Vector

TIPS = ("Index3", "Middle3", "Ring3", "Little3")
VRM = sys.argv[-1] if sys.argv[-1].endswith(".vrm") else "Snozzy.vrm"

# 画上去的那台显示器，右缘在画布上的 x。
#
# 这条线是**硬边界**：显示器立在桌子前沿偏左，比键盘更靠近镜头，本该挡住
# 键盘；可键盘和手是画在桌面层**之上**的，压过去就是键盘穿进显示器里
# （第 40 条）。所以键盘和手的左缘必须全部待在这条线右边。
#
# 重新量的办法（换了重绘图就要重量）：对 `Assets/desk.png` 逐行求横向梯度，
# 在显示器所在的那一段里找**最靠右的强边缘**，各行取最大值。
# **别用"梯度最大的那一列"**——那报的是"谁最强"，附近的东西一改冠军就换人，
# 显示器根本没动数字也会跳（第 48 条）。
#
# 现在这一版：房间图是用户直接交付的（不再是我出灰模、它上色）。
# 画上去那块大屏的机背，右缘逐行量出来稳定在 x=653，取整留余量记 660。
#
# **扫描窗口要开够宽。** 上一版有块多余的立板右缘在 645，我只扫到 x=600，
# 量出来一路绿灯，其实已经压到键盘上了。
MONITOR_EDGE_X = 660


def measure(press=0.0, side_first="L"):
    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    P.settle(scene, arm, press=press, side_first=side_first)

    kbd = bpy.data.objects["Keyboard"]
    # 只含旋转的基，和 `home_row` 一致。`kbd.matrix_world` 里还带着 join
    # 留下的缩放（0.42, 0.135, 0.016），拿它反变换量出来的是归一化坐标，
    # 数字看着像模像样但全错——这一刀踩过。
    inv = kbd.rotation_euler.to_matrix().inverted()
    top = K.BASE_H + K.KEY_H
    keys_d = K.DEPTH * 0.82

    from bpy_extras.object_utils import world_to_camera_view as w2c
    res_x, res_y = scene.render.resolution_x, scene.render.resolution_y

    def canvas(p):
        v = w2c(scene, scene.camera, p)
        return (v.x * res_x, (1 - v.y) * res_y)

    print(f"键区 ±{K.WIDTH / 2 * 1000:.0f} × ±{keys_d / 2 * 1000:.0f} mm，"
          f"press={press}")
    for side in ("L", "R"):
        def head(n):
            return arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_{n}"].head
        sh, el, wr = head("UpperArm"), head("LowerArm"), head("Hand")
        fore = (wr - el).normalized()
        palm = (head("Middle1") - wr).normalized()
        tips = [inv @ ((arm.matrix_world
                        @ arm.pose.bones[f"J_Bip_{side}_{t}"].tail) - kbd.location)
                for t in TIPS]
        off = max(max(abs(t.x) - K.WIDTH / 2, abs(t.y) - keys_d / 2, 0) for t in tips)
        e2, w2 = canvas(el), canvas(wr)
        # 大臂：偏离垂直多少、肘比肩低多少。这一条是硬约束，见文件头。
        abduct = math.degrees(math.acos(max(-1, min(1,
                 (el - sh).normalized().dot(Vector((0, 0, -1)))))))
        drop = (sh.z - el.z) * 100
        # 肘在肩外侧还是缩进身体里。缩进去就是"内屈"，看着像肘顶在胸口，
        # 光看腕角是发现不了的（第 43 条）。
        sgn = 1 if side == "L" else -1
        lat = (el.x - sh.x) * sgn * 100
        axis = (wr - sh).normalized()
        bow = ((el - sh) - axis * (el - sh).dot(axis)).x * sgn * 100
        verdict = ("" if (abduct <= 36 and drop >= 15 and bow >= -0.5)
                   else "  ✗ 人做不出这个姿势")
        print(f"  {side} 大臂偏离垂直 {abduct:.0f}°（真人 15–30°）"
              f"  肘比肩低 {drop:.0f}cm（真人 25–30）"
              f"  肘在肩{'外' if lat >= 0 else '内'}侧 {abs(lat):.1f}cm"
              f"  相对肩→腕连线{'外鼓' if bow >= 0 else '内缩'} {abs(bow):.1f}cm"
              f"{verdict}")
        print(f"  {side} 腕角 {math.degrees(math.acos(max(-1, min(1, fore.dot(palm))))):.1f}°"
              f"  伸出 {(wr - sh).length / 0.430:.0%}"
              f"  小臂投影 {math.hypot(w2[0] - e2[0], w2[1] - e2[1]):.0f}px"
              f"  出界 {off * 1000:.1f}mm"
              f"  掌根高 {((inv @ (head('Middle1') - kbd.location)).z - top) * 1000:+.0f}mm"
              f"  指尖高 {[round((t.z - top) * 1000) for t in tips]}mm")

    # 袖子盖住手腕了没有、胳膊有没有从袖子里透出来。
    #
    # 这一段量的是摆完姿势的网格。小臂那截袖子是 `sleeve.py` 另建的锥筒
    # （广袖压不成窄袖，见那个文件的开头），锥筒和小臂皮肤都刚性挂在
    # 小臂骨上，但**手是在腕关节处折下去的**——所以拿静置网格量必错：
    # 量到的是摊平的手掌连拇指，比袖口还粗，判据一路报绿，画面照旧穿模。
    #
    # 判据两条，都是毫米，都要在 3D 里量（第 34 条）：
    #
    # - **袖口越过手腕**：正数才对。负的就是袖口没盖到腕关节，
    #   那一截光手腕正对着镜头，就是用户说的"看着像穿模"。
    # - **透出袖子**：皮肤跑到袖筒外面多少。应当恒为 0。
    #   袖子收得越紧越好看，但收过头胳膊就从布里钻出来了，这条卡住那一端。
    dg = bpy.context.evaluated_depsgraph_get()
    skin, tube, cloth = {"L": [], "R": []}, {}, {"L": [], "R": []}
    for o in meshes:
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        if o.name.startswith("Sleeve_"):
            tube[o.name[-1]] = [ev.matrix_world @ v.co for v in me.vertices]
        else:
            wide = {i for i, m in enumerate(me.materials or [])
                    if "Tops" in (m.name or "")}
            sleeves = {vi for p in me.polygons if p.material_index in wide
                       for vi in p.vertices}
            bare = {i for i, m in enumerate(me.materials or [])
                    if "_SKIN" in (m.name or "")}
            want = {vi for p in me.polygons if p.material_index in bare
                    for vi in p.vertices}
            # **只取小臂那一段皮肤。** 手是要从袖口伸出来的，把它算进来的话
            # 这条永远报十几毫米——量到的是手，不是漏出来的胳膊。
            # 蒙皮权重天然就是按骨骼分的，拿它挑最省事。
            # **两条胳膊在同一个网格里，必须按骨骼分开。** 只靠"离这条小臂轴
            # 够近"是分不开的：另一侧的袖子投影过来也在半径之内，
            # 于是右手那一行报"广袖袖口在小臂 157% 处"——量到的是左袖子。
            for side in ("L", "R"):
                g = o.vertex_groups.get(f"J_Bip_{side}_LowerArm")
                g2 = o.vertex_groups.get(f"J_Bip_{side}_UpperArm")
                if g is None:
                    continue
                mine = {g.index} | ({g2.index} if g2 else set())
                for vi in want:
                    if any(gr.group == g.index and gr.weight > 0.5
                           for gr in o.data.vertices[vi].groups):
                        skin[side].append(ev.matrix_world @ me.vertices[vi].co)
                for vi in sleeves:
                    if sum(gr.weight for gr in o.data.vertices[vi].groups
                           if gr.group in mine) > 0.5:
                        cloth[side].append(ev.matrix_world @ me.vertices[vi].co)
        ev.to_mesh_clear()

    BINS = 24
    for side in ("L", "R"):
        def head(n):
            return arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_{n}"].head
        el, wr = head("LowerArm"), head("Hand")
        axis, span = (wr - el).normalized(), (wr - el).length
        ref = axis.cross(Vector((0, 0, 1)))
        ref = ref.normalized() if ref.length > 1e-6 else Vector((1, 0, 0))
        ref2 = axis.cross(ref)

        def polar(p):
            a = (p - el).dot(axis) / span
            rad = (p - el) - axis * (a * span)
            return a, rad.length, math.atan2(rad.dot(ref2), rad.dot(ref))

        def cells_of(pts, lo=-9.0):
            out, top = {}, lo
            for p in pts:
                a, r, th = polar(p)
                if r > 0.14:
                    continue        # 另一条胳膊
                top = max(top, a)
                k = (round(a * 40), int((th + math.pi) / (2 * math.pi) * BINS) % BINS)
                out[k] = max(out.get(k, 0.0), r)
            return out, top

        inner, far = cells_of(tube.get(side, []))
        _, hem = cells_of(cloth[side])
        if not inner:
            continue

        # 只查**广袖袖口以外**那一小段。里面那一段整个藏在广袖里，
        # 露一点胳膊画面上根本看不见；而广袖的网格又稀（四百来个顶点），
        # 拿它去填这么细的格子，会为一处其实盖得好好的地方报错。
        out, where = 0.0, 0.0
        for p in skin[side]:
            a, r, th = polar(p)
            if not (hem < a < far) or r > 0.14:
                continue
            k = (round(a * 40), int((th + math.pi) / (2 * math.pi) * BINS) % BINS)
            if k in inner and r - inner[k] > out:
                out, where = r - inner[k], a
        over = (far - 1.0) * span * 1000
        print(f"  {side} 广袖袖口在小臂 {hem:.0%} 处，内袖到 {far:.0%} 处，"
              f"越过手腕 {over:+.0f}mm{'' if over > 4 else '  ✗ 没盖住手腕'}"
              f"  袖口外露肉 {max(out, 0) * 1000:.1f}mm"
              f"{'' if out < 0.002 else '  ✗ 胳膊钻出来了'}")

    # 键盘和手有没有压到画上去的显示器上。这是条**硬边界**（第 40 条）：
    # 键盘和手画在桌面层之上，撞上去就是穿模，加挡板也救不了——
    # 往左挪键盘的时候她的右手也会一起进显示器的轮廓。
    kbd_x = min(canvas(kbd.matrix_world @ Vector(c))[0] for c in kbd.bound_box)
    hand_x = min(canvas(arm.matrix_world
                        @ arm.pose.bones[f"J_Bip_R_{b}"].tail)[0]
                 for b in ("Hand", "Thumb3", "Index3", "Middle3",
                           "Ring3", "Little3"))
    ok = "✓" if kbd_x >= MONITOR_EDGE_X else "✗ 键盘压在显示器上了"
    print(f"  键盘左缘 x={kbd_x:.0f}，右手最左 x={hand_x:.0f}，"
          f"显示器右缘 x={MONITOR_EDGE_X}  {ok}")


if __name__ == "__main__":
    measure(press=0.0)
    measure(press=1.0)

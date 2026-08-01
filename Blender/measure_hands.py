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
- **小臂投影**：小臂在画面上有多长（像素）。相机在她左前方，小臂一朝向
  她的正前方就正对镜头，整条胳膊缩成一个短墩子——画面上是两截圆滚滚的
  袖子后面冒出两只手，没有胳膊，也就是"胳膊看着怪"。满长度约 123 像素，
  低于 30 就该去挪肘了（第 41 条）。
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
# 在 x∈[440,660] 里找最靠右的强边缘，y=600 处 569、y=690 处 580，取最大值。
MONITOR_EDGE_X = 580


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
        print(f"  {side} 腕角 {math.degrees(math.acos(max(-1, min(1, fore.dot(palm))))):.1f}°"
              f"  伸出 {(wr - sh).length / 0.430:.0%}"
              f"  小臂投影 {math.hypot(w2[0] - e2[0], w2[1] - e2[1]):.0f}px"
              f"  出界 {off * 1000:.1f}mm"
              f"  掌根高 {((inv @ (head('Middle1') - kbd.location)).z - top) * 1000:+.0f}mm"
              f"  指尖高 {[round((t.z - top) * 1000) for t in tips]}mm")

    # 袖子按**材质**挑，不按半径：拇指鼓出来的半径和袖子一个量级，
    # 按半径挑会把拇指算成袖口，数字看着还挺像回事。
    cloth = {}
    for o in meshes:
        hit = {i for i, m in enumerate(o.data.materials or []) if "Tops" in (m.name or "")}
        if not hit:
            continue
        vs = {vi for p in o.data.polygons if p.material_index in hit for vi in p.vertices}
        cloth[o] = vs
    for side in ("L", "R"):
        el = arm.matrix_world @ arm.data.bones[f"J_Bip_{side}_LowerArm"].head_local
        wr = arm.matrix_world @ arm.data.bones[f"J_Bip_{side}_Hand"].head_local
        axis, span = (wr - el).normalized(), (wr - el).length
        wide, far, cuff = 0.0, 0.0, 0.0
        for o, vs in cloth.items():
            for vi in vs:
                p = o.matrix_world @ o.data.vertices[vi].co
                t = (p - el).dot(axis) / span
                r = ((p - el) - axis * (t * span)).length
                if not (0 < t < 1.6) or r > 0.3:
                    continue
                wide = max(wide, r)
                if t > far:
                    far, cuff = t, r
        print(f"  {side} 袖子最宽半径 {wide * 1000:.0f}mm，"
              f"袖口在小臂 {far:.0%} 处、半径 {cuff * 1000:.0f}mm")

    # 键盘和手有没有压到显示器上。这一条是我改出来过的 bug：
    # 键盘往她右手边挪能救右腕，挪过头就撞进显示器里了。
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

"""喝咖啡 / 玩手机这两条动作能不能用，量出来。不渲染，几秒钟一轮。

    blender --background --factory-startup --python Blender/measure_props.py -- Snozzy.vrm [coffee|phone|both]

和 `measure_chin.py` / `measure_stretch.py` 同一个路子。这两条动作多了个
道具，于是要查的东西也多了两样，四条里有两条是**会让功能彻底作废**的：

1. **够不够得着**（硬）。臂长 0.430 米，摆到 95% 以上 IK 就把胳膊夹直了，
   落点还会悄悄偏掉（第 27 条）——而画面上看着"手是伸过去了"，
   只是杯子没在手里。桌上画着的那个杯子实测 130% 臂长，正是为此重建的。
2. **道具和手不许压住嘴或眼睛**（硬）。不是因为难看，是因为
   **面部贴片出不来**：`face_patches.py` 要求 13 个变体块块有变化，
   嘴被杯子挡住那一档，`mouth_open` 和中性底图一模一样，直接报
   "无变化，不能作为完整贴片"，整套贴片作废，动作就没法启用。
   所以杯口停在下唇**下方**三厘米（`pose.COFFEE_RIM_OFFSET`），
   读起来仍是"举到嘴边"。
3. **人做不做得出来**（第 42 条）：大臂偏离垂直的角度、肘在肩下方多少。
4. **别出画**，道具也别飘到画布外面去。

停留那一段（hold）的每一相位都要单独查——它在终态之上又加了倾角和低头，
只查终态的话，恰恰漏掉幅度最大的那一档。
"""
import math
import os
import sys

import bpy

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "Scripts"))
import snozzy_lib as S, pose as P, keyboard as K, props as PR  # noqa: E402
import action_defs as AD  # noqa: E402
from bpy_extras.object_utils import world_to_camera_view  # noqa: E402
from mathutils import Vector  # noqa: E402

ARM_LENGTH = 0.430
REACH_LIMIT = 0.92          # 超过就快被 IK 夹直了
# 大臂偏离垂直多少度。第 42 条那条 15–30° 是**打字坐姿**的区间，
# 拿它卡"伸手去够"和"举到嘴边"会全线报红——伸手本来就要抬肩。
# 这两条动作真正会出丑的是**肘抬到肩膀上面**（鸡翅膀），所以主判据是
# 肘相对肩的高度，角度只当一个宽松的上限。
UPPER_ARM_LIMIT = 62.0
ELBOW_BELOW_SHOULDER = 0.02   # 肘至少要低于肩这么多米


def measure(name, vrm):
    spec = AD.spec(name)
    pose_fn = {"coffee": P.coffee, "phone": P.phone}[name]
    ok = True

    meshes = S.load(vrm)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    arm = next((o for o in bpy.data.objects if o.type == 'ARMATURE'), None)
    if arm is None:
        print("✗ VRM 缺少 ARMATURE")
        return False
    S.scene_camera(scene)
    PR.build()
    S.toon_materials(); S.room_lights()
    P.settle(scene, arm)
    cam = scene.camera.matrix_world.translation
    side = P.PROP_SIDE
    prop = bpy.data.objects[spec["prop"]]

    def canvas(p):
        v = world_to_camera_view(scene, scene.camera, p)
        return v.x * 1536, (1 - v.y) * 1024

    def bone(n):
        return arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_{n}"].head

    # --- 1. 够不够得着 -------------------------------------------------
    shoulder = bone("UpperArm")
    grip = PR.mug_grip() if name == "coffee" else PR.phone_grip()
    d = (grip - shoulder).length / ARM_LENGTH
    good = d < REACH_LIMIT
    ok &= good
    print(f"{name}  抓握点距肩 {d * 100:.0f}% 臂长  "
          + ("✓" if good else "✗ 够不着，IK 会把胳膊夹直（第 27 条）"))

    dg = bpy.context.evaluated_depsgraph_get()

    def verts_of_bones(bones):
        names = {f"J_Bip_{side}_{b}" for b in bones}
        out = []
        for o in meshes:
            idx = {g.index for g in o.vertex_groups if g.name in names}
            if not idx:
                continue
            keep = {v.index for v in o.data.vertices
                    if sum(g.weight for g in v.groups if g.group in idx) > 0.5}
            if not keep:
                continue
            ev = o.evaluated_get(dg)
            me = ev.to_mesh()
            out.extend(ev.matrix_world @ me.vertices[i].co
                       for i in keep if i < len(me.vertices))
            ev.to_mesh_clear()
        return out

    def shape_region(key_names, eps=0.001):
        pts_r = []
        for o in meshes:
            keys = o.data.shape_keys
            if not keys:
                continue
            hit = [kb for kb in keys.key_blocks if kb.name in key_names]
            if not hit:
                continue
            basis = keys.key_blocks[0]
            idx = set()
            for kb in hit:
                for i in range(len(kb.data)):
                    if (kb.data[i].co - basis.data[i].co).length > eps:
                        idx.add(i)
            ev = o.evaluated_get(dg)
            me = ev.to_mesh()
            pts_r.extend(canvas(ev.matrix_world @ me.vertices[i].co)
                         for i in idx if i < len(me.vertices))
            ev.to_mesh_clear()
        if not pts_r:
            return None
        xs = [p[0] for p in pts_r]
        ys = [p[1] for p in pts_r]
        return (min(xs), min(ys), max(xs), max(ys))

    def face_points():
        face_meshes = [o for o in meshes
                       if any(ms.material and "Face" in ms.material.name
                              for ms in o.material_slots)]
        out = []
        for o in face_meshes:
            ev = o.evaluated_get(dg)
            me = ev.to_mesh()
            out.extend(ev.matrix_world @ v.co for v in me.vertices)
            ev.to_mesh_clear()
        return [(canvas(p), p) for p in out]

    def check_pose(label, amount=1.0, hold=None):
        nonlocal ok
        # 每一档都要重新摆——姿势函数是从 settle 之后的状态出发的
        P.settle(scene, arm)
        pose_fn(arm, scene, amount=amount, hold_phase=hold)
        dgl = bpy.context.evaluated_depsgraph_get()

        # 人做不做得出来
        sh = bone("UpperArm")
        el = bone("LowerArm")
        wr = bone("Hand")
        upper = math.degrees((el - sh).angle(Vector((0, 0, -1))))
        reach_pct = (wr - sh).length / ARM_LENGTH * 100
        drop = sh.z - el.z
        good = (upper < UPPER_ARM_LIMIT and reach_pct < REACH_LIMIT * 100
                and drop > ELBOW_BELOW_SHOULDER)
        ok &= good
        print(f"  {label:10s} 大臂偏垂直 {upper:5.1f}°  肘低于肩 {drop * 100:5.1f}cm"
              f"  腕伸出 {reach_pct:5.1f}%  "
              + ("✓" if good else "✗ 人做不出这个姿势（第 42 条）"))

        # 道具和手挡没挡住眼睛/嘴
        eye = shape_region({"Fcl_EYE_Close"})
        mouth = shape_region({"Fcl_MTH_A", "Fcl_MTH_O", "Fcl_MTH_Joy"})
        face_px = face_points()
        hand_pts = verts_of_bones([b for b in S.ARM_BONES if b != "LowerArm"])
        ev = prop.evaluated_get(dgl)
        me = ev.to_mesh()
        prop_pts = [ev.matrix_world @ v.co for v in me.vertices]
        ev.to_mesh_clear()
        pts = [(canvas(p), p) for p in hand_pts + prop_pts]

        for rect, tag in ((eye, "眼"), (mouth, "嘴")):
            if rect is None:
                continue
            x0, y0, x1, y1 = rect
            covering = 0
            for (x, y), p in pts:
                if not (x0 <= x <= x1 and y0 <= y <= y1):
                    continue
                near = [fp for (fx, fy), fp in face_px
                        if abs(fx - x) < 3 and abs(fy - y) < 3]
                if not near:
                    continue
                if (p - cam).length < min((fp - cam).length for fp in near) - 0.003:
                    covering += 1
            hit = covering == 0
            ok &= hit
            print(f"             {tag}区被手/道具挡住 {covering:3d} 个顶点  "
                  + ("✓" if hit else f"✗ 挡住{tag}，面部贴片会出不来"))

        # 别出画
        xs = [c[0] for c, _ in pts]
        ys = [c[1] for c, _ in pts]
        inside = min(xs) > 0 and max(xs) < 1536 and min(ys) > 0 and max(ys) < 1024
        ok &= inside
        print(f"             道具+手画布 x {min(xs):.0f}…{max(xs):.0f}  "
              f"y {min(ys):.0f}…{max(ys):.0f}  " + ("✓" if inside else "✗ 出画了"))

    check_pose("抓握", amount=0.45)
    check_pose("终态", amount=1.0)
    for i in range(spec["holds"]):
        phase = 2 * math.pi * (i + 0.5) / spec["holds"]
        check_pose(f"停留{i:02d}", hold=phase)
    return ok


def main():
    args = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    vrm = next((a for a in args if a.endswith(".vrm")), "Snozzy.vrm")
    which = next((a for a in args if a in ("coffee", "phone", "both")), "both")
    names = ("coffee", "phone") if which == "both" else (which,)
    ok = True
    for name in names:
        print(f"== {name} ==")
        ok &= measure(name, vrm)
        # 每条动作重新开一个干净的场景
        bpy.ops.wm.read_factory_settings(use_empty=True)
    print("PROPS 全部通过 ✓" if ok else "PROPS 有不通过的项 ✗")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())

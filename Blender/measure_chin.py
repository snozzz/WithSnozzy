"""托腮姿势对不对，量出来。不渲染，几秒钟出数。

    blender --background --factory-startup --python Blender/measure_chin.py -- Snozzy.vrm

和 `measure_hands.py` 同一个路子：**在 3D 里量比在像素上量准**，而且不用
等三分钟渲一张图再放大看。

头现在会歪（`pose.CHIN_HEAD_ROLL`），面部贴片跟着倾斜后的头在托腮终态上
重渲（`render_face.py … chin`），所以旧的「手不许探进 face.json 矩形」
不再是约束——贴片和终态底图同一个姿势，手在矩形里的像素两边一致，
盖上去等于没盖。真正要量的变成这五件事：

1. **手有没有挡住眼睛或嘴**。贴片虽然贴得上，嘴被手盖着人就没法看她说话
   了。眼嘴区域用形态键现算（`Fcl_EYE_Close` / `Fcl_MTH_*` 动到的顶点，
   eps=0.001 时和 face_patches 的像素 bbox 校准到 ±6 像素以内），
   再按**深度**只数真正露在脸前面的手部顶点——指尖绕到脸侧后面的不算。
2. **画面上读不读得出"接触"**。这是上一版真正的败因：3D 间隙 0.3cm 全绿，
   画面上手悬在脸旁一指宽。量法是手的投影点越过脸剪影逐行右缘多少像素——
   要有一撮点、越过 8px 以上，指节才算压在颊线上。
3. **人做不做得出来**（第 42 条）。大臂角度、肘不高过肩，外加歪头 ≤ 12°。
4. **肘沉到画上去的桌沿以下**（层序读成"撑在桌上"）。
5. **手指贴着脸**：手网格到脸网格最近 0.05…1.5cm——比旧版更紧，
   因为现在要的就是接触。
"""
import bpy
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P, keyboard as K  # noqa: E402
from mathutils import Vector  # noqa: E402
from bpy_extras.object_utils import world_to_camera_view  # noqa: E402

VRM = sys.argv[-1]
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DESK_PNG = os.path.join(REPO, "Assets", "desk.png")


def desk_alpha_top(x0, x1, threshold=8):
    """量胳膊投影横向范围内桌面层的 alpha 起始行。

    桌图还有窗外、墙和其它透明区域；扫全画布会把这些区域的首个像素
    误当成桌沿。托腮真正需要的是**胳膊所在 x 区间**里的局部遮挡边界。
    """
    if not os.path.exists(DESK_PNG):
        print(f"  ✗ 没有桌面素材 {DESK_PNG}")
        return None
    img = bpy.data.images.load(DESK_PNG)
    w, h = img.size
    x0 = max(0, min(w, int(x0)))
    x1 = max(0, min(w, int(x1)))
    if x1 <= x0:
        bpy.data.images.remove(img)
        print(f"  ✗ 桌沿测量 x 范围无效：{x0}…{x1}")
        return None
    px = img.pixels[:]
    for row in range(h):
        base = (h - 1 - row) * w * 4
        start = base + x0 * 4 + 3
        end = base + x1 * 4
        if max(px[start:end:4], default=0.0) >= threshold / 255:
            bpy.data.images.remove(img)
            return row
    bpy.data.images.remove(img)
    print(f"  ✗ 桌面素材在 x {x0}…{x1} 没有 alpha")
    return None


def main():
    meshes = S.load(VRM)
    if not meshes:
        print("✗ 没有可测量的角色网格")
        return 1
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    arm = next((o for o in bpy.data.objects if o.type == 'ARMATURE'), None)
    if arm is None:
        print("✗ VRM 缺少 ARMATURE")
        return 1
    side = P.CHIN_SIDE
    required_bones = [
        f"J_Bip_{side}_{name}" for name in
        ("UpperArm", "LowerArm", "Hand", "Thumb1", "Thumb2", "Thumb3",
         "Index1", "Index2", "Index3", "Middle1", "Middle2", "Middle3",
         "Ring1", "Ring2", "Ring3", "Little1", "Little2", "Little3")
    ] + ["J_Bip_C_Neck", "J_Bip_C_Head"]
    missing_bones = [name for name in required_bones if name not in arm.pose.bones]
    if missing_bones:
        print("✗ VRM 缺少托腮所需骨骼：" + ", ".join(missing_bones))
        return 1
    required_groups = {f"J_Bip_{side}_{name}" for name in S.ARM_BONES}
    available_groups = {g.name for o in meshes for g in o.vertex_groups}
    missing_groups = sorted(required_groups - available_groups)
    if missing_groups:
        print("✗ VRM 缺少托腮所需顶点组：" + ", ".join(missing_groups))
        return 1
    S.scene_camera(scene)
    P.settle(scene, arm)
    elbow_z = P.chin_rest(arm, scene)
    cam = scene.camera.matrix_world.translation

    def bone(name):
        return arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_{name}"].head

    def canvas(p):
        v = world_to_camera_view(scene, scene.camera, p)
        return v.x * 1536, (1 - v.y) * 1024

    ok = True
    dg = bpy.context.evaluated_depsgraph_get()

    def verts_of(bones):
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
            for i in keep:
                if i < len(me.vertices):
                    out.append(ev.matrix_world @ me.vertices[i].co)
            ev.to_mesh_clear()
        return out

    hand_world = verts_of([b for b in S.ARM_BONES if b != "LowerArm"])
    pts = [(canvas(p), p) for p in hand_world]
    if not pts:
        print("✗ 一个手部顶点都没找到——骨骼名对吗？")
        return 1
    hx0 = min(p[0][0] for p in pts); hx1 = max(p[0][0] for p in pts)
    hy0 = min(p[0][1] for p in pts); hy1 = max(p[0][1] for p in pts)
    print(f"手在画布上占 x {hx0:.0f}…{hx1:.0f}  y {hy0:.0f}…{hy1:.0f}"
          f"（{len(pts)} 个顶点）")

    # 脸网格：剪影和深度都要用。缺 Face 网格不能把眼嘴检查当成可选项。
    face_meshes = [o for o in meshes
                   if any(ms.material and "Face" in ms.material.name
                          for ms in o.material_slots)]
    if not face_meshes:
        print("✗ VRM 缺少 Face 材质网格，无法测接触/深度")
        return 1
    face_world = []
    for o in face_meshes:
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        face_world.extend(ev.matrix_world @ v.co for v in me.vertices)
        ev.to_mesh_clear()
    if not face_world:
        print("✗ Face 网格没有顶点")
        return 1
    face_px = [(canvas(p), p) for p in face_world]

    required_shapes = {"Fcl_EYE_Close", "Fcl_MTH_A", "Fcl_MTH_O", "Fcl_MTH_Joy"}
    available_shapes = {
        kb.name
        for o in meshes if o.data.shape_keys
        for kb in o.data.shape_keys.key_blocks
    }
    missing_shapes = sorted(required_shapes - available_shapes)
    if missing_shapes:
        print("✗ VRM 缺少眼嘴形态键：" + ", ".join(missing_shapes))
        return 1

    # --- 1. 手有没有挡住眼睛或嘴 ---------------------------------------
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
        xs = [p[0] for p in pts_r]; ys = [p[1] for p in pts_r]
        return dict(x=min(xs), y=min(ys), w=max(xs) - min(xs), h=max(ys) - min(ys))

    def visible_cover(rect, label):
        """真正露在脸前面、又落进区域里的手部顶点数。
        指尖绕到脸颊侧后方的顶点投影也会落进来，但它们被脸挡着、
        画面上根本看不见——按深度和邻近的脸顶点比一下就滤掉了。"""
        nonlocal ok
        if rect is None:
            print(f"  （没找到 {label} 的形态键，跳过）")
            return
        covering = 0
        for (x, y), p in pts:
            if not (rect["x"] <= x <= rect["x"] + rect["w"]
                    and rect["y"] <= y <= rect["y"] + rect["h"]):
                continue
            near = [fp for (fx, fy), fp in face_px
                    if abs(fx - x) < 3 and abs(fy - y) < 3]
            if not near:
                continue
            if (p - cam).length < min((fp - cam).length for fp in near) - 0.003:
                covering += 1
        good = covering == 0
        ok &= good
        print(f"  {label}区被手挡住的可见顶点 {covering} 个  "
              + ("✓" if good else f"✗ 手把{label}挡住了"))

    eye_rect = shape_region({"Fcl_EYE_Close"})
    mouth_rect = shape_region({"Fcl_MTH_A", "Fcl_MTH_O", "Fcl_MTH_Joy"})
    if eye_rect is None or mouth_rect is None:
        print("✗ 眼嘴形态键存在但没有可测的变形顶点")
        return 1
    print("眼嘴挡没挡（贴片本身跟着终态渲，不再是约束；挡住才是问题）：")
    visible_cover(eye_rect, "眼")
    visible_cover(mouth_rect, "嘴")

    # --- 2. 画面上读不读得出接触 ---------------------------------------
    row_edge = {}
    for (x, y), _ in face_px:
        r = int(y)
        if r not in row_edge or x > row_edge[r]:
            row_edge[r] = x
    overlap_pts = 0
    max_pen = 0.0
    for (x, y), _ in pts:
        edge = row_edge.get(int(y))
        if edge is not None and x < edge:
            overlap_pts += 1
            max_pen = max(max_pen, edge - x)
    contact_reads = overlap_pts >= 20 and max_pen >= 8
    ok &= contact_reads
    print(f"手的投影越过脸剪影 {overlap_pts} 个顶点、最深 {max_pen:.0f} 像素  "
          + ("✓ 指节压在颊线上" if contact_reads
             else "✗ 画面上读不出接触（上一版就是这么露馅的）"))

    # --- 3. 人做不做得出来（第 42 条，硬约束）---------------------------
    sh, el = bone("UpperArm"), bone("LowerArm")
    upper = el - sh
    from_vertical = math.degrees(upper.angle(Vector((0, 0, -1))))
    drop = sh.z - el.z
    roll_deg = math.degrees(P.CHIN_HEAD_ROLL)
    hard = from_vertical <= 62 and drop > 0 and roll_deg <= 12
    ok &= hard
    print(f"大臂偏离垂直 {from_vertical:.0f}°、肘比肩低 {drop * 100:.0f} 厘米、"
          f"歪头 {roll_deg:.1f}°  "
          + ("✓" if hard else "✗ 人做不出这个姿势"))

    # --- 4. 肘沉到画上去的桌沿以下了吗 ---------------------------------
    arm_pts = [c for c, _ in pts] + [canvas(p) for p in
                                      verts_of(["UpperArm", "LowerArm"])]
    low = max(p[1] for p in arm_pts)
    arm_x0 = math.floor(min(p[0] for p in arm_pts))
    arm_x1 = math.ceil(max(p[0] for p in arm_pts)) + 1
    desk_top = desk_alpha_top(arm_x0, arm_x1)
    covered = desk_top is not None and low >= desk_top
    ok &= covered
    print(f"肘 z={elbow_z:.3f}（桌面 {K.DESK_Z}，够不到是几何决定的）")
    print(f"胳膊投影 x {arm_x0}…{arm_x1}，最低到画布第 {low:.0f} 行，"
          f"桌子局部从第 {desk_top if desk_top is not None else '??'} 行开始盖  "
          + ("✓ 肘被桌子挡住，读成撑在桌上"
             if covered else "✗ 桌沿局部测量失败或胳膊露在桌沿上方，像举着手"))

    # --- 5. 手指贴着脸 --------------------------------------------------
    if face_world and hand_world:
        lo = Vector((min(p.x for p in hand_world), min(p.y for p in hand_world),
                     min(p.z for p in hand_world)))
        hi = Vector((max(p.x for p in hand_world), max(p.y for p in hand_world),
                     max(p.z for p in hand_world)))
        near_face = [p for p in face_world
                     if all(lo[i] - 0.08 < p[i] < hi[i] + 0.08 for i in range(3))]
        gap = min((h - f).length for h in hand_world for f in near_face) \
            if near_face else 9.9
        near = 0.0005 < gap < 0.015
        ok &= near
        print(f"手离脸最近 {gap * 100:.2f} 厘米  "
              + ("✓ 贴着下颌" if near
                 else "✗ 离得太远" if gap >= 0.015 else "✗ 手插进脸里"))

    else:
        print("✗ 没有脸/手网格，无法测接触间隙")
        ok = False

    print("CHIN " + ("全部通过" if ok else "有不合格项，改 pose.py 的 CHIN_* 再跑一遍"))
    return 0 if ok else 1


sys.exit(main())

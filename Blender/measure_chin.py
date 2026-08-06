"""托腮姿势对不对，量出来。不渲染，几秒钟出数。

    blender --background --factory-startup --python Blender/measure_chin.py -- Snozzy.vrm

和 `measure_hands.py` 同一个路子：**在 3D 里量比在像素上量准**，而且不用
等三分钟渲一张图再放大看。这里量四件事，按重要性排：

1. **手有没有探进面部贴片的矩形**——这是唯一一条会让功能彻底作废的。
   眨眼/视线/嘴的贴片存的是画布上固定矩形里的**全部**像素（第 22 条），
   手只要占了那块地方，眨一次眼就把手背抹掉一块。所以这一条不是"好不好看"，
   是"能不能用"。量法是把手和手指的顶点投到画布上，看有没有落进贴片矩形。
2. **人做不做得出这个姿势**（第 42 条）。大臂偏离垂直多少度、肘比肩低多少。
   托腮的时候大臂是往外张的，比打字那一档松，但肘不能高过肩。
3. **肘有没有沉到画上去的桌沿以下**。托腮的支点是肘，露在桌面上方就成了
   "举着手"。注意量的是**胳膊最低那一行像素**而不是肘那根骨头的高度：
   骨头是中心线，胳膊本身还有小半个巴掌粗，差十几像素。
   而且判据是**画布行**不是世界坐标 z——肘根本够不到 z=0.725
   （肩离桌面 0.256 米、大臂只有 0.224），能不能读成"撑在桌上"
   取决于它在画面上有没有被桌子盖住，那是层序的事，不是解剖的事。
4. **手指够不够得着脸**。差太远读不出是托腮，穿进去就是手插进脸里。
   量的是「离最近的脸部顶点多远」，不是「离下巴尖多远」——托腮托的是
   下颌侧面，不是正中那一点，拿中线量会恒报"太远"。
"""
import bpy
import json
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P, keyboard as K  # noqa: E402
from mathutils import Vector  # noqa: E402
from bpy_extras.object_utils import world_to_camera_view  # noqa: E402

VRM = sys.argv[-1]
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FACE_JSON = os.path.join(REPO, "Assets", "face.json")
DESK_PNG = os.path.join(REPO, "Assets", "desk.png")
# 桌子从哪一行开始盖住她。量不到素材时的退路，和 `hand_frames.py` 量出来的
# 一致（那边取的是"开始有值"那行，不是"满值"那行——桌沿是一道由虚到实的窄带）。
DESK_TOP_FALLBACK = 594


def desk_alpha_top(threshold=8):
    """桌面层从哪一行开始有像素。**从素材里量，不写死**——换一张重绘图
    桌沿就变了，写死的话判据会悄悄地量错东西（第 45 条）。

    Blender 自带的 `bpy.data.images` 就能读 PNG，不用 numpy/PIL——
    这个脚本跑在 Blender 里，那两个包不一定装得上。
    """
    if not os.path.exists(DESK_PNG):
        print(f"  （没有 {DESK_PNG}，桌沿按 {DESK_TOP_FALLBACK} 算）")
        return DESK_TOP_FALLBACK
    img = bpy.data.images.load(DESK_PNG)
    w, h = img.size
    px = img.pixels[:]                       # 一次取出来，逐个索引慢一百倍
    for row in range(h):
        # Blender 的像素是从下往上排的，画布行号要翻过来
        base = (h - 1 - row) * w * 4
        if max(px[base + 3:base + w * 4:4]) >= threshold / 255:
            bpy.data.images.remove(img)
            return row
    bpy.data.images.remove(img)
    return DESK_TOP_FALLBACK


def main():
    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    P.settle(scene, arm)
    elbow_z = P.chin_rest(arm, scene)
    side = P.CHIN_SIDE

    def bone(name):
        return arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_{name}"].head

    def canvas(p):
        v = world_to_camera_view(scene, scene.camera, p)
        return v.x * 1536, (1 - v.y) * 1024

    ok = True

    # --- 1. 手有没有压到面部贴片 ---------------------------------------
    # 手的顶点，而不是骨骼位置：骨骼是一个点，手掌是一片，压没压到要看那一片。
    dg = bpy.context.evaluated_depsgraph_get()

    def verts_of(bones):
        """按蒙皮权重挑出属于这几根骨头的顶点，返回世界坐标。"""
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
    pts = [canvas(p) for p in hand_world]

    if not pts:
        print("✗ 一个手部顶点都没找到——骨骼名对吗？")
        return 1

    hx0 = min(p[0] for p in pts); hx1 = max(p[0] for p in pts)
    hy0 = min(p[1] for p in pts); hy1 = max(p[1] for p in pts)
    print(f"手在画布上占 x {hx0:.0f}…{hx1:.0f}  y {hy0:.0f}…{hy1:.0f}"
          f"（{len(pts)} 个顶点）")

    try:
        with open(FACE_JSON) as f:
            patches = json.load(f)["patches"]
    except OSError:
        print(f"  找不到 {FACE_JSON}，跳过贴片检查（先渲一次面部贴片）")
        patches = {}

    worst = None
    for name, r in patches.items():
        inside = [p for p in pts
                  if r["x"] <= p[0] <= r["x"] + r["w"]
                  and r["y"] <= p[1] <= r["y"] + r["h"]]
        if inside:
            ok = False
            print(f"  ✗ 压到贴片 {name} "
                  f"({r['x']},{r['y']},{r['w']}×{r['h']})：{len(inside)} 个顶点")
        else:
            # 离得多近。留够余量才经得起下一版素材的微小改动
            gap = min(max(r["x"] - p[0], p[0] - (r["x"] + r["w"]),
                          r["y"] - p[1], p[1] - (r["y"] + r["h"])) for p in pts)
            if worst is None or gap < worst[1]:
                worst = (name, gap)
    if patches and ok:
        print(f"  ✓ 没碰到任何贴片，最紧的是 {worst[0]}，还差 {worst[1]:.0f} 像素")

    # --- 2. 人做不做得出来（第 42 条，硬约束）---------------------------
    sh, el, wr = bone("UpperArm"), bone("LowerArm"), bone("Hand")
    upper = el - sh
    from_vertical = math.degrees(upper.angle(Vector((0, 0, -1))))
    drop = sh.z - el.z
    hard = from_vertical <= 62 and drop > 0
    ok &= hard
    print(f"大臂偏离垂直 {from_vertical:.0f}°、肘比肩低 {drop * 100:.0f} 厘米  "
          + ("✓" if hard else "✗ 人做不出这个姿势（肘不能高过肩）"))

    # --- 3. 肘沉到画上去的桌沿以下了吗 ---------------------------------
    # 量的是**整条胳膊最低那一行像素**，不是肘那根骨头：骨头是中心线，
    # 胳膊本身还有小半个巴掌粗，两者差十几像素，而这十几像素正好是
    # "压在桌沿下面"和"悬在桌沿上面"的分界。
    arm_pts = pts + [canvas(p) for p in verts_of(["UpperArm", "LowerArm"])]
    low = max(p[1] for p in arm_pts)
    desk_top = desk_alpha_top()
    covered = low >= desk_top
    ok &= covered
    print(f"肘 z={elbow_z:.3f}（桌面 {K.DESK_Z}，够不到是几何决定的）、进深 y={el.y:.3f}")
    print(f"胳膊最低到画布第 {low:.0f} 行，桌子从第 {desk_top} 行开始盖  "
          + ("✓ 肘被桌子挡住，读成撑在桌上"
             if covered else f"✗ 露在桌沿上方 {desk_top - low:.0f} 像素，像举着手"))

    # --- 4. 够不够得着脸 -----------------------------------------------
    # 量的是**两块网格之间的最近距离**（手的所有顶点 × 脸的所有顶点），
    # 不是某根指骨到脸的距离。两处都不能取代表点：
    #
    # - 拿下巴尖（脸网格最低点）当靶子是错的——托腮托的是下颌**侧面**，
    #   手离中线本来就隔着小半张脸，那样量会恒报"太远"，
    #   照着它调只会把手一路推到脸中间去（第一版就是这么跑偏的）
    # - 拿 `Middle3` 当手的代表点也是错的——那是第三节指骨的**根部**，
    #   手指一弯它就转到背面去了，实测比真正贴着脸的那块指节远 2 厘米
    face_pts = []
    for o in meshes:
        if not any(ms.material and "Face" in ms.material.name
                   for ms in o.material_slots):
            continue
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        face_pts = [ev.matrix_world @ v.co for v in me.vertices]
        ev.to_mesh_clear()
        break

    if face_pts and hand_world:
        # 先按包围盒粗筛脸的顶点：整张脸四千来个点 × 七百个手部顶点是
        # 三百万次距离计算，Python 里要跑好几秒。手只可能碰到下颌那一带。
        lo = Vector((min(p.x for p in hand_world), min(p.y for p in hand_world),
                     min(p.z for p in hand_world)))
        hi = Vector((max(p.x for p in hand_world), max(p.y for p in hand_world),
                     max(p.z for p in hand_world)))
        near_face = [p for p in face_pts
                     if all(lo[i] - 0.08 < p[i] < hi[i] + 0.08 for i in range(3))]
        gap = min((h - f).length for h in hand_world for f in near_face) \
            if near_face else 9.9
        near = 0.002 < gap < 0.030
        ok &= near
        print(f"手离脸最近 {gap * 100:.1f} 厘米（脸上参与比对的顶点 {len(near_face)} 个）  "
              + ("✓ 抵着下颌" if near
                 else "✗ 太远读不出托腮" if gap >= 0.030 else "✗ 手插进脸里"))

    print("CHIN " + ("全部通过" if ok else "有不合格项，改 pose.py 的 CHIN_* 再跑一遍"))
    return 0 if ok else 1


sys.exit(main())

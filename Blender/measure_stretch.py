"""伸懒腰这套姿势能不能用，量出来。渲两张小图 + 3D 查询，约半分钟。

    blender --background --factory-startup --python Blender/measure_stretch.py -- Snozzy.vrm

和 `measure_chin.py` 同一个路子，但约束不一样——伸懒腰两条胳膊一起举过头顶，
所以要查的是另外四件事：

1. **缝线以下的改动必须全部落在桌子盖得住的那一带里。**
   这是唯一一条会让功能彻底作废的。缝线（y=600）以下画的是另外渲的腿图，
   而腿图是按**手放在键盘上**渲的：胳膊一举起来，腿图里那截小臂和袖子
   还留在桌面上——画面上就是两条胳膊。
   救它的不是"别动"，是**层序**：桌板从第 611 行起完全不透明，
   到第 762 行为止；上半身这张切到 611，611…762 由桌子挡住，
   762 以下必须逐像素不动（那里是裙子和腿，桌子挡不住了）。

   所以这条要分成两问：**762 以下动没动**（动了就是脊柱/胯被带跑了），
   以及**改动最深到哪一行**（超过 762 就挡不住）。
   一开始我按"600 以下不许动"去查，报了 16571 个像素——那全是
   胳膊离开桌面留下的，本来就该变。**判据先问自己在量什么**（第 45 条）。
2. **别出画。** 胳膊举过头顶，最容易撞的是画布上边缘（第 8 条：出没出画
   是量出来的，不是看出来的）。
3. **人做不做得出来**（第 42 条）。大臂偏离垂直的角度、两只手别交叉过中线。
4. **手别挡住脸。** 举到头顶两侧就对了，落到脸前面就成了捂脸。
   和 `measure_chin.py` 用同一套形态键现算眼嘴区域的办法。
"""
import bpy
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P  # noqa: E402
from mathutils import Vector  # noqa: E402
from bpy_extras.object_utils import world_to_camera_view  # noqa: E402

VRM = sys.argv[-1]
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SEAM = 600
OUT = "/tmp/stretch_measure"


def render(scene, name):
    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, name)
    scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    return path


def premultiplied_band(path, y0, y1):
    """读回 [y0, y1) 那一带的预乘 RGBA，拉平成一维。

    **必须比预乘后的值**（第 17 条）：全透明区域的 RGB 没有意义，
    直接比 RGB 会报出一堆假的不一致。
    """
    img = bpy.data.images.load(path)
    w, h = img.size
    px = img.pixels[:]
    out = []
    for row in range(y0, y1):
        base = (h - 1 - row) * w * 4          # Blender 的像素从下往上排
        for i in range(base, base + w * 4, 4):
            a = px[i + 3]
            out.extend((px[i] * a, px[i + 1] * a, px[i + 2] * a, a))
    bpy.data.images.remove(img)
    return out


def desk_opaque_band(x0, x1):
    """桌面层在 x∈[x0, x1] 这一段上，哪几行是**整段都完全不透明**的。

    上沿就是上半身该切到的那一行（和 `leg_frames.chin_seam` 同一个量法），
    下沿是"桌子还挡得住"的最后一行——再往下就是裙子和腿，露给人看的。
    从素材里量，不写死：换一张重绘图桌沿就变了（第 45 条）。
    """
    path = os.path.join(REPO, "Assets", "desk.png")
    if not os.path.exists(path):
        print(f"  ✗ 没有 {path}")
        return None, None
    img = bpy.data.images.load(path)
    w, h = img.size
    px = img.pixels[:]
    x0 = max(0, min(w - 1, int(x0)))
    x1 = max(x0, min(w - 1, int(x1)))
    rows = []
    for row in range(h):
        base = (h - 1 - row) * w * 4
        alphas = px[base + x0 * 4 + 3:base + (x1 + 1) * 4:4]
        if alphas and min(alphas) >= 254 / 255:
            rows.append(row)
    bpy.data.images.remove(img)
    if not rows:
        return None, None
    # 取包含最上面那一行的**连续**一段：桌面底下还可能有别的不透明区域，
    # 但中间断开的部分挡不住东西。
    top = rows[0]
    bottom = top
    for row in rows[1:]:
        if row == bottom + 1:
            bottom = row
        else:
            break
    return top, bottom


def main():
    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    arm = next((o for o in bpy.data.objects if o.type == 'ARMATURE'), None)
    if arm is None:
        print("✗ VRM 缺少 ARMATURE")
        return 1
    S.scene_camera(scene)
    S.toon_materials(); S.room_lights()
    P.settle(scene, arm)

    base_path = render(scene, "_base.png")
    P.stretch(arm, scene, amount=1.0)
    final_path = render(scene, "_stretch.png")

    ok = True
    dg = bpy.context.evaluated_depsgraph_get()

    def canvas(p):
        v = world_to_camera_view(scene, scene.camera, p)
        return v.x * 1536, (1 - v.y) * 1024

    # --- 1. 缝线以下的改动要么在桌子后面，要么根本没有 -------------------
    a_band = premultiplied_band(base_path, SEAM, 1024)
    b_band = premultiplied_band(final_path, SEAM, 1024)
    changed_rows = set()
    changed_cols = set()
    for i in range(0, len(a_band), 4):
        for k in range(4):
            if abs(a_band[i + k] - b_band[i + k]) > 4 / 255:   # 抖动底噪，第 15 条
                px = i // 4
                changed_rows.add(SEAM + px // 1536)
                changed_cols.add(px % 1536)
                break

    if not changed_rows:
        print(f"缝线 y={SEAM} 以下一个像素都没变（胳膊本来就该离开桌面，"
              "这反而说明姿势没生效）")
        ok = False
    else:
        lo_row, hi_row = min(changed_rows), max(changed_rows)
        top, bottom = desk_opaque_band(min(changed_cols), max(changed_cols))
        covered = top is not None and hi_row <= bottom
        ok &= covered
        print(f"缝线以下改动落在第 {lo_row}…{hi_row} 行、x {min(changed_cols)}…"
              f"{max(changed_cols)}；桌子在这段 x 上从第 {top} 行不透明到第 {bottom} 行")
        print("  " + ("✓ 全被桌子挡住" if covered
                      else f"✗ 伸到第 {hi_row} 行，桌子只挡到 {bottom}——会看见两条胳膊"))
        cut = max(SEAM, top if top is not None else SEAM)
        print(f"  → 伸懒腰这张上半身要切到第 {cut} 行（和托腮同一个道理）")

    # --- 2. 出没出画 -----------------------------------------------------
    lo, hi = S.frame_extent(scene, meshes)
    inside = lo >= 0.0
    ok &= inside
    print(f"纵向占位 {lo:.3f}…{hi:.3f}（0 是画布上边缘）  "
          + ("✓ 没出画" if inside else "✗ 手举出画布了"))

    # --- 3. 人做不做得出来 ----------------------------------------------
    def bone(side, name):
        return arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_{name}"].head

    for side in ("L", "R"):
        sh, el, wr = bone(side, "UpperArm"), bone(side, "LowerArm"), bone(side, "Hand")
        up = math.degrees((el - sh).angle(Vector((0, 0, 1))))
        elbow = math.degrees((sh - el).angle(wr - el))
        good = up <= 55 and 90 <= elbow <= 175
        ok &= good
        print(f"{side}: 大臂偏离竖直向上 {up:.0f}°、肘角 {elbow:.0f}°  "
              + ("✓" if good else "✗ 举得不像人在伸懒腰"))

    # 两只手别越过身体中线交叉
    lx = bone("L", "Hand").x
    rx = bone("R", "Hand").x
    apart = lx > rx
    ok &= apart
    print(f"两腕横向 L={lx * 100:.0f}cm R={rx * 100:.0f}cm  "
          + ("✓ 没交叉" if apart else "✗ 两只手交叉了"))

    # --- 4. 手别挡住脸 ---------------------------------------------------
    def verts_of(side, bones):
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
        pts = []
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
            pts.extend(canvas(ev.matrix_world @ me.vertices[i].co)
                       for i in idx if i < len(me.vertices))
            ev.to_mesh_clear()
        if not pts:
            return None
        xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
        return dict(x=min(xs), y=min(ys), w=max(xs) - min(xs), h=max(ys) - min(ys))

    hand_px = [canvas(p) for side in ("L", "R")
               for p in verts_of(side, [b for b in S.ARM_BONES if b != "LowerArm"])]
    for label, keys in (("眼", {"Fcl_EYE_Close"}),
                        ("嘴", {"Fcl_MTH_A", "Fcl_MTH_O", "Fcl_MTH_Joy"})):
        r = shape_region(keys)
        if r is None:
            print(f"  （没找到{label}的形态键，跳过）")
            continue
        hits = sum(1 for x, y in hand_px
                   if r["x"] <= x <= r["x"] + r["w"]
                   and r["y"] <= y <= r["y"] + r["h"])
        ok &= hits == 0
        print(f"  {label}区里的手部顶点 {hits} 个  "
              + ("✓" if hits == 0 else f"✗ 手挡住{label}了"))

    print("STRETCH " + ("全部通过" if ok else "有不合格项，改 pose.py 的 STRETCH_* 再跑"))
    return 0 if ok else 1


sys.exit(main())

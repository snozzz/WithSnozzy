"""手有没有挡到脸：托腮、听歌这些"手抬到脸边"的动作共用的量法。

从 `render_chin_candidates.py` 抽出来的——第二条动作要用同一套判据时，
抄一份就是第 46 条那个坑（两处各算一遍，迟早对不上）。

眼嘴区域**用形态键现算**：`Fcl_EYE_Close` 动到的顶点就是眼区、
`Fcl_MTH_*` 动到的是嘴区，投到画布上加 6 像素 pad 就是这套头姿下
贴片会落的位置——和 `face_patches.py` 的 bbox 算法一致。
"""
import bpy
from bpy_extras.object_utils import world_to_camera_view


def canvas(scene, p):
    v = world_to_camera_view(scene, scene.camera, p)
    return v.x * 1536, (1 - v.y) * 1024


def vertices(meshes, arm, side, bones):
    names = {f"J_Bip_{side}_{b}" for b in bones}
    dg = bpy.context.evaluated_depsgraph_get()
    out = []
    for o in meshes:
        idx = {g.index for g in o.vertex_groups if g.name in names}
        if not idx:
            continue
        keep = {v.index for v in o.data.vertices
                if sum(g.weight for g in v.groups if g.group in idx) > .5}
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        out.extend(ev.matrix_world @ me.vertices[i].co for i in keep if i < len(me.vertices))
        ev.to_mesh_clear()
    return out


def shape_region(meshes, scene, key_names, pad=6, eps=5e-4):
    """形态键动到的那片顶点，在当前姿势下投到画布上的 bbox。
    这就是这套头姿下贴片会落的位置（`face_patches.py` 同款 bbox+pad）。"""
    dg = bpy.context.evaluated_depsgraph_get()
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
        if not idx:
            continue
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        pts.extend(canvas(scene, ev.matrix_world @ me.vertices[i].co)
                   for i in idx if i < len(me.vertices))
        ev.to_mesh_clear()
    if not pts:
        return None
    xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
    return dict(x=min(xs) - pad, y=min(ys) - pad,
                w=max(xs) - min(xs) + 2 * pad, h=max(ys) - min(ys) + 2 * pad)


def face_points(meshes):
    dg = bpy.context.evaluated_depsgraph_get()
    for o in meshes:
        if any(ms.material and "Face" in ms.material.name for ms in o.material_slots):
            ev = o.evaluated_get(dg); me = ev.to_mesh()
            pts = [ev.matrix_world @ v.co for v in me.vertices]
            ev.to_mesh_clear()
            return pts
    return []


def clearance(rect, points):
    """一堆画布点离矩形多远（负数=进去了）。"""
    gap = 10_000
    hits = 0
    for x, y in points:
        d = max(rect["x"] - x, x - (rect["x"] + rect["w"]),
                rect["y"] - y, y - (rect["y"] + rect["h"]))
        gap = min(gap, d)
        hits += int(d < 0)
    return hits, gap


def visible_clearance(rect, hand_points, face_points, scene):
    """Ignore projected hand points that are behind the face surface."""
    if rect is None:
        return 0
    cam = scene.camera.matrix_world.translation
    hits = 0
    for x, y, p in hand_points:
        if not (rect["x"] <= x <= rect["x"] + rect["w"]
                and rect["y"] <= y <= rect["y"] + rect["h"]):
            continue
        near = [fp for fx, fy, fp in face_points
                if abs(fx - x) <= 3 and abs(fy - y) <= 3]
        if near and (p - cam).length < min((fp - cam).length for fp in near) - .003:
            hits += 1
    return hits


def hand_cover(meshes, arm, scene, side, arm_bones):
    """手（不含小臂）在画布上有几个可见点落进眼区 / 嘴区。0 才算没挡。"""
    hand = vertices(meshes, arm, side, [b for b in arm_bones if b != "LowerArm"])
    points = [canvas(scene, p) for p in hand]
    face_px = [(canvas(scene, p)[0], canvas(scene, p)[1], p) for p in face_points(meshes)]
    hand_px3 = [(x, y, p) for (x, y), p in zip(points, hand)]
    eye = shape_region(meshes, scene, {"Fcl_EYE_Close"})
    mouth = shape_region(meshes, scene, {"Fcl_MTH_A", "Fcl_MTH_O", "Fcl_MTH_Joy"})
    return (visible_clearance(eye, hand_px3, face_px, scene),
            visible_clearance(mouth, hand_px3, face_px, scene),
            clearance(eye, points)[1] if eye else 9999)

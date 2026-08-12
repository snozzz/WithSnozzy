"""低成本批量比较托腮终态；同机位渲图并输出贴片/接触指标。

    blender --background --factory-startup --python Blender/render_chin_candidates.py -- Snozzy.vrm 输出目录

这里只用于挑终态参数，不生成运行时资产。选定后仍由 render_closeup.py 重出
完整 8 帧动作，避免候选脚本和生产脚本各维护一套姿势逻辑。

头现在会歪（`CHIN_HEAD_ROLL`），贴片矩形跟着脸走，所以不能再拿
`Assets/face.json` 的静态矩形当判据。眼嘴区域改成**用形态键现算**：
`Fcl_EYE_Close` 动到的顶点就是眼区、`Fcl_MTH_A` 动到的是嘴区，
投到画布上加 6 像素 pad 就是这套头姿下贴片将会落的位置——
和 `face_patches.py` 的 bbox 算法一致。
"""
import bpy
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import keyboard as K
import pose as P
import snozzy_lib as S
from bpy_extras.object_utils import world_to_camera_view
from mathutils import Vector

args = sys.argv[sys.argv.index("--") + 1:]
VRM, OUT = args[:2]
os.makedirs(OUT, exist_ok=True)

# name, head_roll, head_pitch, wrist, hand_dir, hand_roll,
# finger_curl(I,M,R,L), thumb, splay.  These are deliberately different
# contact strategies, not six cosmetic copies; the metrics and the full-frame
# renders are used together to choose one.
# splay 为 None 时用 pose.py 里的 CHIN_FINGER_SPLAY。
CANDIDATES = [
    ("p01_soft", .12, .030, (.044, -.068, -.112), (.50, -.08, .82), -.12,
     (.24, .48, .78, 1.04), -.24, (.20, .05, -.06, -.16)),
    ("p02_low",  .15, .040, (.040, -.074, -.118), (.47, -.10, .85), -.16,
     (.28, .58, .88, 1.18), -.28, (.22, .05, -.07, -.18)),
    ("p03_contact", .17, .050, (.034, -.070, -.115), (.44, -.10, .86), -.18,
     (.30, .62, .92, 1.22), -.30, (.24, .06, -.07, -.19)),
    ("p04_wrist", .17, .035, (.028, -.066, -.110), (.40, -.11, .88), -.20,
     (.34, .66, .96, 1.26), -.32, (.26, .07, -.08, -.20)),
    ("p05_open", .14, .045, (.036, -.076, -.116), (.56, -.06, .78), -.10,
     (.20, .42, .72, .98), -.22, (.18, .04, -.05, -.14)),
    ("p06_support", .18, .040, (.031, -.072, -.113), (.42, -.09, .88), -.22,
     (.38, .72, 1.00, 1.30), -.36, (.28, .08, -.09, -.22)),
]


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


metrics = []
for name, head_roll, head_pitch, wrist, direction, hand_roll, curls, thumb, splay in CANDIDATES:
    P.CHIN_HEAD_ROLL = head_roll
    P.CHIN_HEAD_PITCH = head_pitch
    P.CHIN_WRIST = wrist
    P.CHIN_HAND_DIR = direction
    P.CHIN_HAND_ROLL = hand_roll
    P.CHIN_FINGER_CURL = dict(zip(("Index", "Middle", "Ring", "Little"), curls))
    P.CHIN_THUMB = thumb
    if splay is not None:
        P.CHIN_FINGER_SPLAY = dict(zip(("Index", "Middle", "Ring", "Little"), splay))

    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    arm = next(o for o in bpy.data.objects if o.type == "ARMATURE")
    S.scene_camera(scene)
    K.build().hide_render = True
    S.toon_materials(); S.room_lights()
    P.settle(scene, arm)
    P.chin_rest(arm, scene)

    side = P.CHIN_SIDE
    hand = vertices(meshes, arm, side, [b for b in S.ARM_BONES if b != "LowerArm"])
    points = [canvas(scene, p) for p in hand]

    eye = shape_region(meshes, scene, {"Fcl_EYE_Close"})
    mouth = shape_region(meshes, scene, {"Fcl_MTH_A", "Fcl_MTH_O", "Fcl_MTH_Joy"})
    eye_hits, eye_gap = clearance(eye, points) if eye else (0, 9999)
    mouth_hits, mouth_gap = clearance(mouth, points) if mouth else (0, 9999)

    face = face_points(meshes)
    lo = Vector((min(p.x for p in hand), min(p.y for p in hand), min(p.z for p in hand)))
    hi = Vector((max(p.x for p in hand), max(p.y for p in hand), max(p.z for p in hand)))
    near_face = [p for p in face if all(lo[i] - .08 < p[i] < hi[i] + .08 for i in range(3))]
    face_gap = min((h - f).length for h in hand for f in near_face) if near_face else 9.9

    # 画面上读不读得出"接触"：脸剪影逐行的右缘，手的投影点越过它多少。
    # 手在脸的近侧（她左手、镜头在她左前方），越过 = 指节压在颊线上。
    face_px = [(canvas(scene, p)[0], canvas(scene, p)[1], p) for p in face]
    row_edge = {}
    for x, y, _ in face_px:
        r = int(y)
        if r not in row_edge or x > row_edge[r]:
            row_edge[r] = x
    overlap = 0
    max_pen = 0.0
    for x, y in points:
        edge = row_edge.get(int(y))
        if edge is not None and x < edge:
            overlap += 1
            max_pen = max(max_pen, edge - x)

    hand_px3 = [(x, y, p) for (x, y), p in zip(points, hand)]
    visible_eye = visible_clearance(eye, hand_px3, face_px, scene)
    visible_mouth = visible_clearance(mouth, hand_px3, face_px, scene)
    item = dict(name=name, headRollDeg=round(head_roll * 57.3, 1),
                headPitchDeg=round(head_pitch * 57.3, 1),
                eyeHits=eye_hits, mouthHits=mouth_hits,
                visibleEyeHits=visible_eye, visibleMouthHits=visible_mouth,
                eyeGapPx=round(eye_gap, 1), mouthGapPx=round(mouth_gap, 1),
                faceGapCm=round(face_gap * 100, 2),
                overlapPts=overlap, overlapMaxPx=round(max_pen, 1))
    metrics.append(item)

    scene.render.filepath = os.path.join(OUT, f"{name}.png")
    bpy.ops.render.render(write_still=True)
    print("CANDIDATE", json.dumps(item, ensure_ascii=False))

with open(os.path.join(OUT, "metrics.json"), "w") as f:
    json.dump(metrics, f, ensure_ascii=False, indent=2)

# Keep the choice reproducible: visual inspection still decides the final
# reading, but impossible geometry (eye/mouth cover, too small/large gap, or
# a weak projected contact) is excluded before that review.
valid = [m for m in metrics
         if m["visibleEyeHits"] == 0 and m["visibleMouthHits"] == 0
         and 0.05 <= m["faceGapCm"] <= 0.25
         and m["overlapPts"] >= 20 and m["overlapMaxPx"] >= 8
         and 6.0 <= m["headRollDeg"] <= 10.0]
if valid:
    selected = min(valid, key=lambda m: (
        abs(m["faceGapCm"] - 0.12), -m["overlapPts"]))
    with open(os.path.join(OUT, "selected.json"), "w") as f:
        json.dump(selected, f, ensure_ascii=False, indent=2)
    print("CANDIDATE SELECTED", json.dumps(selected, ensure_ascii=False))
else:
    print("CANDIDATE SELECTED none (需调整 CHIN_* 参数)")

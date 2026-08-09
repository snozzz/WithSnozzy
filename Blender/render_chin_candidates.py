"""低成本批量比较托腮终态；同机位渲图并输出贴片/接触指标。

    blender --background --factory-startup --python Blender/render_chin_candidates.py -- Snozzy.vrm 输出目录

这里只用于挑终态参数，不生成运行时资产。选定后仍由 render_closeup.py 重出
完整 8 帧动作，避免候选脚本和生产脚本各维护一套姿势逻辑。
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
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATCHES = json.load(open(os.path.join(REPO, "Assets", "face.json")))["patches"]

# name, wrist(x,y,z), hand direction, roll, curl, finger fan axis/factor, thumb curl
CANDIDATES = [
    # Round three holds the successful jaw-shelf geometry fixed and tests the
    # local phalanx axes.  This makes splay/curl a visible selection instead of
    # guessing which VRM local axis faces the camera.
    ("s_baseline", (.038, -.068, -.104), (.64, -.08, .76), -.12, 1.15, None, 0., 0.),
    ("t_z_open", (.038, -.068, -.104), (.64, -.08, .76), -.12, 1.15, 2, 1., 0.),
    ("u_z_close", (.038, -.068, -.104), (.64, -.08, .76), -.12, 1.15, 2, -1., 0.),
    ("v_y_open", (.038, -.068, -.104), (.64, -.08, .76), -.12, 1.15, 1, 1., 0.),
    ("w_y_close", (.038, -.068, -.104), (.64, -.08, .76), -.12, 1.15, 1, -1., 0.),
    ("x_z_thumb", (.038, -.068, -.104), (.64, -.08, .76), -.12, 1.15, 2, 1., -.32),
    ("y_y_thumb", (.038, -.068, -.104), (.64, -.08, .76), -.12, 1.15, 1, 1., -.32),
    ("z_relaxed", (.044, -.058, -.108), (.58, -.02, .81), .02, 1.00, 2, .75, -.22),
]


def style_fingers(arm, side, axis, factor, thumb):
    if axis is not None:
        # Outward fan from index to little finger.  Only the proximal phalanx
        # gets the lateral change; distal joints retain the natural curl.
        spread = {"Index": .16, "Middle": .05, "Ring": -.06, "Little": -.17}
        for finger, value in spread.items():
            pb = arm.pose.bones.get(f"J_Bip_{side}_{finger}1")
            if pb is not None:
                pb.rotation_mode = 'XYZ'
                pb.rotation_euler[axis] += factor * value
    for seg, weight in ((1, .65), (2, .35)):
        pb = arm.pose.bones.get(f"J_Bip_{side}_Thumb{seg}")
        if pb is not None:
            pb.rotation_mode = 'XYZ'
            pb.rotation_euler[0] += thumb * weight
    bpy.context.view_layer.update()


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


metrics = []
for name, wrist, direction, roll, curl, fan_axis, fan, thumb in CANDIDATES:
    P.CHIN_WRIST = wrist
    P.CHIN_HAND_DIR = direction
    P.CHIN_HAND_ROLL = roll
    P.CHIN_CURL = curl

    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    arm = next(o for o in bpy.data.objects if o.type == "ARMATURE")
    S.scene_camera(scene)
    K.build().hide_render = True
    S.toon_materials(); S.room_lights()
    P.settle(scene, arm)
    P.chin_rest(arm, scene)
    style_fingers(arm, P.CHIN_SIDE, fan_axis, fan, thumb)

    side = P.CHIN_SIDE
    hand = vertices(meshes, arm, side, [b for b in S.ARM_BONES if b != "LowerArm"])
    points = [canvas(scene, p) for p in hand]
    hits = 0
    gap_px = 10_000
    for r in PATCHES.values():
        for x, y in points:
            inside = r["x"] <= x <= r["x"] + r["w"] and r["y"] <= y <= r["y"] + r["h"]
            hits += int(inside)
            gap_px = min(gap_px, max(r["x"] - x, x - (r["x"] + r["w"]),
                                     r["y"] - y, y - (r["y"] + r["h"])))

    dg = bpy.context.evaluated_depsgraph_get()
    face = []
    for o in meshes:
        if any(ms.material and "Face" in ms.material.name for ms in o.material_slots):
            ev = o.evaluated_get(dg); me = ev.to_mesh()
            face = [ev.matrix_world @ v.co for v in me.vertices]
            ev.to_mesh_clear(); break
    lo = Vector((min(p.x for p in hand), min(p.y for p in hand), min(p.z for p in hand)))
    hi = Vector((max(p.x for p in hand), max(p.y for p in hand), max(p.z for p in hand)))
    near_face = [p for p in face if all(lo[i] - .08 < p[i] < hi[i] + .08 for i in range(3))]
    face_gap = min((h - f).length for h in hand for f in near_face) if near_face else 9.9

    wrist_px = canvas(scene, arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_Hand"].head)
    index_px = canvas(scene, arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_Index1"].head)
    thumb_px = canvas(scene, arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_Thumb1"].head)
    item = dict(name=name, hits=hits, patchGap=round(gap_px, 1),
                faceGapCm=round(face_gap * 100, 2), wristPx=[round(v, 1) for v in wrist_px],
                indexBasePx=[round(v, 1) for v in index_px],
                thumbBasePx=[round(v, 1) for v in thumb_px])
    metrics.append(item)

    scene.render.filepath = os.path.join(OUT, f"{name}.png")
    bpy.ops.render.render(write_still=True)
    print("CANDIDATE", json.dumps(item, ensure_ascii=False))

with open(os.path.join(OUT, "metrics.json"), "w") as f:
    json.dump(metrics, f, ensure_ascii=False, indent=2)

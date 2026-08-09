"""批量筛选键盘手的人体工学和轮廓；只用于挑 pose 常量。

    blender --background --factory-startup --python Blender/render_hand_candidates.py -- Snozzy.vrm OUT
"""
import bpy
import json
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import keyboard as K
import pose as P
import snozzy_lib as S
from mathutils import Vector

VRM, OUT = sys.argv[sys.argv.index("--") + 1:][:2]
os.makedirs(OUT, exist_ok=True)

# name, spread, L pole x/z, R pole x/z, R hand-x, rolls L/R,
# wrist lift, curl, proximal-finger close amount, pole Y, hand direction Z
CANDIDATES = [
    ("s_balanced", .085, .15, -4.0, .40, -4.0, -.46, .43, .58, .038, 1.18, .55, .0, -.12),
    ("t_narrow", .075, .12, -4.5, .34, -4.5, -.48, .43, .57, .037, 1.20, .55, .0, -.11),
    ("u_narrowest", .065, .10, -5.0, .30, -5.0, -.50, .42, .56, .036, 1.22, .55, .0, -.10),
    ("v_more_roll", .085, .15, -4.0, .40, -4.0, -.46, .50, .66, .038, 1.18, .55, .0, -.12),
    ("w_less_roll", .085, .15, -4.0, .40, -4.0, -.46, .36, .50, .038, 1.18, .55, .0, -.12),
    ("x_no_close", .085, .15, -4.0, .40, -4.0, -.46, .43, .58, .038, 1.20, .00, .0, -.12),
    ("y_more_close", .085, .15, -4.0, .40, -4.0, -.46, .43, .58, .036, 1.16, .85, .0, -.12),
    ("z_more_pitch", .085, .15, -4.0, .40, -4.0, -.44, .43, .60, .040, 1.18, .50, .0, -.15),
    ("aa_less_pitch", .085, .15, -4.0, .40, -4.0, -.48, .42, .56, .035, 1.22, .50, .0, -.09),
]

TIPS = ("Index3", "Middle3", "Ring3", "Little3")


def apply(params):
    (_, spread, lx, lz, rx, rz, hand_rx, roll_l, roll_r,
     lift, curl, close, pole_y, hand_z) = params
    K.HOME_SPREAD = spread
    P.ELBOW_POLE = {"L": (lx, pole_y, lz), "R": (rx, pole_y, rz)}
    P.HAND_DIR = {"L": (.08, -.96, hand_z), "R": (hand_rx, -.95, hand_z)}
    P.HAND_ROLL = {"L": roll_l, "R": roll_r}
    P.WRIST_LIFT = lift
    P.KEY_CURL = curl
    P.PRESS_CURL = .06
    # Opposite of the proven chin-rest fan: index/little move toward the palm
    # centre while the distal joints retain their individual curl.
    P.KEY_FINGER_SPLAY = {
        "Index": -.16 * close, "Middle": -.05 * close,
        "Ring": .06 * close, "Little": .17 * close,
    }


def scene_for(params, press=0.0):
    apply(params)
    meshes = S.load(VRM)
    scene = S.setup_scene(res=1024)
    scene.render.resolution_x, scene.render.resolution_y = 1024, 683
    scene.render.film_transparent = True
    arm = next(o for o in bpy.data.objects if o.type == "ARMATURE")
    S.scene_camera(scene)
    S.toon_materials(); S.room_lights()
    P.settle(scene, arm, press=press, side_first="L")
    bpy.data.objects["Keyboard"].hide_render = False
    return scene, arm


def metrics(arm):
    kbd = bpy.data.objects["Keyboard"]
    inv = kbd.rotation_euler.to_matrix().inverted()
    top = K.BASE_H + K.KEY_H
    out = {}
    for side in ("L", "R"):
        def head(name):
            return arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_{name}"].head
        sh, el, wr = head("UpperArm"), head("LowerArm"), head("Hand")
        fore = (wr - el).normalized()
        palm = (head("Middle1") - wr).normalized()
        tips = [inv @ ((arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_{t}"].tail)
                       - kbd.location) for t in TIPS]
        out[side] = {
            "upperDeg": round(math.degrees(math.acos(max(-1., min(1.,
                (el - sh).normalized().dot(Vector((0, 0, -1))))))), 1),
            "elbowDropCm": round((sh.z - el.z) * 100, 1),
            "wristDeg": round(math.degrees(math.acos(max(-1., min(1., fore.dot(palm))))), 1),
            "tipsMm": [round((t.z - top) * 1000, 1) for t in tips],
            "outMm": round(max(max(abs(t.x) - K.WIDTH / 2,
                                    abs(t.y) - K.DEPTH * .82 / 2, 0)
                               for t in tips) * 1000, 1),
        }
    return out


all_metrics = []
for params in CANDIDATES:
    name = params[0]
    scene, arm = scene_for(params, 0.0)
    idle = metrics(arm)
    scene.render.filepath = os.path.join(OUT, name + ".png")
    bpy.ops.render.render(write_still=True)
    _, pressed_arm = scene_for(params, 1.0)
    pressed = metrics(pressed_arm)
    row = {"name": name, "idle": idle, "pressed": pressed}
    all_metrics.append(row)
    print("HAND_CANDIDATE", json.dumps(row, ensure_ascii=False))

with open(os.path.join(OUT, "metrics.json"), "w") as f:
    json.dump(all_metrics, f, ensure_ascii=False, indent=2)

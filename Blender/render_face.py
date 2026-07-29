"""渲染面部的细微变化，输出成一小块一小块的贴片。

为什么只出贴片而不是整张：五套腿部姿势的**上半身完全一样**（同一台相机、
同一个上半身姿势），所以眨眼、视线这些变化对每套姿势都是同一块像素。
整张出的话是 5×N 张全画幅图；出贴片则是 N 张几十 KB 的小图，
而且运行时直接盖上去就行，不用对位。

变化本身全部来自 VRM 自带的形态键和眼球骨骼，不用建任何东西。
"""
import bpy, json, os, sys
import numpy as np
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from mathutils import Vector
import snozzy_lib as S, pose as P

VRM, OUT = sys.argv[-2], sys.argv[-1]
os.makedirs(OUT, exist_ok=True)
W, H = 1536, 1024


def shape(meshes, name, value):
    for o in meshes:
        keys = o.data.shape_keys
        if keys and name in keys.key_blocks:
            keys.key_blocks[name].value = value


def eyes_look(arm, x=0.0, y=0.0):
    """转眼球。VRoid 的视线不是形态键，是两根辅助骨。"""
    import math
    for side in ("L", "R"):
        pb = arm.pose.bones.get(f"J_Adj_{side}_FaceEye")
        if pb is None:
            continue
        pb.rotation_mode = 'XYZ'
        pb.rotation_euler = (math.radians(-y * 7), 0, math.radians(x * 9))
    bpy.context.view_layer.update()


VARIANTS = {
    "blink_half":  dict(shapes={"Fcl_EYE_Close": 0.55}),
    "blink_shut":  dict(shapes={"Fcl_EYE_Close": 1.0}),
    "eye_smile":   dict(shapes={"Fcl_EYE_Joy": 1.0}),
    "look_left":   dict(look=(-1.0, 0.0)),
    "look_right":  dict(look=(1.0, 0.0)),
    "look_down":   dict(look=(0.0, -1.0)),
    "mouth_open":  dict(shapes={"Fcl_MTH_A": 0.65}),
    "smile":       dict(shapes={"Fcl_MTH_Joy": 0.8}),
}


def build(variant=None):
    meshes = S.load(VRM)
    scene = S.setup_scene(res=W)
    scene.render.resolution_x, scene.render.resolution_y = W, H
    S.toon_materials(); S.room_lights()
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    P.seated(arm, sit=True, legs="together")
    S.place_hip(scene, arm, 0.704)
    if variant:
        for k, v in variant.get("shapes", {}).items():
            shape(meshes, k, v)
        if "look" in variant:
            bpy.context.view_layer.objects.active = arm
            bpy.ops.object.mode_set(mode='POSE')
            eyes_look(arm, *variant["look"])
            bpy.ops.object.mode_set(mode='OBJECT')
    return scene


base_path = os.path.join(OUT, "_base.png")
scene = build()
scene.render.filepath = base_path
bpy.ops.render.render(write_still=True)
print("FACE base")

for name, spec in VARIANTS.items():
    scene = build(spec)
    scene.render.filepath = os.path.join(OUT, f"_{name}.png")
    bpy.ops.render.render(write_still=True)
    print("FACE", name)

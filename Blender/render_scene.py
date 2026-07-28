"""渲染整套场景：房间层 / 角色层 / 桌前层，外加窗洞坐标。

三层共用同一个相机，所以像素级对齐，运行时直接按顺序叠即可：
    房间（窗洞里塞程序化天空） → 角色 → 桌前
窗洞矩形是把四个角投影到相机算出来的，不靠抠色。
"""
import bpy, json, math, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from bpy_extras.object_utils import world_to_camera_view
from mathutils import Vector
import snozzy_lib as S, pose as P, room as R, headphones as HP

VRM, OUT = sys.argv[-2], sys.argv[-1]
os.makedirs(OUT, exist_ok=True)
W, H = 1440, 960

meshes = S.load(VRM)
scene = S.setup_scene(res=W)
scene.render.resolution_x, scene.render.resolution_y = W, H

parts = R.build_all()
arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
P.seated(arm, sit=True)
hp = HP.build(arm, meshes)

S.toon_materials()          # 角色和道具一起改写，共享同一条着色路径
S.room_lights()

# 相机：3/4 斜俯视，看得见桌面纵深
cam = scene.camera
cam.data.type = 'PERSP'
cam.data.lens = 42
# 略高于坐着的人的视平线往下看：既看得见桌面纵深，又不至于变成俯拍。
# 目标点压在桌面稍上方，桌子和她才会同时进画。
yaw, pitch = math.radians(17), math.radians(80)
target = Vector((0.16, -0.30, 0.92))
dist = 3.10
cam.location = target + Vector((math.sin(yaw) * dist, -math.cos(yaw) * dist,
                                dist / math.tan(pitch)))
cam.rotation_euler = (pitch, 0, yaw)

char = meshes + [hp]
back, front = parts["back"], parts["front"]


def show(objs, on):
    for o in objs:
        o.hide_render = not on


def render(name, groups):
    for g, on in groups.items():
        show({"back": back, "front": front, "char": char}[g], on)
    scene.render.filepath = os.path.join(OUT, name)
    bpy.ops.render.render(write_still=True)
    print("SCENE", name)


render("room.png",  {"back": True,  "front": False, "char": False})
render("desk.png",  {"back": False, "front": True,  "char": False})
render("snozzy.png", {"back": False, "front": False, "char": True})
hp.hide_render = True
render("snozzy_nohp.png", {"back": False, "front": False, "char": True})

# 窗洞在画面上的矩形
w = parts["window"]
pts = [Vector((w["x"], y, z)) for y in (w["y0"], w["y1"]) for z in (w["z0"], w["z1"])]
uv = [world_to_camera_view(scene, cam, p) for p in pts]
xs, ys = [p.x for p in uv], [1 - p.y for p in uv]
manifest = {
    "room_window": {"x": round(min(xs), 5), "y": round(min(ys), 5),
                    "width": round(max(xs) - min(xs), 5),
                    "height": round(max(ys) - min(ys), 5)},
    "roomFit": "fillHeight", "roomAnchorX": 0.5,
    "deskBottom": 1.0, "deskSurface": 0.0,
    "source": "blender",
}
json.dump(manifest, open(os.path.join(OUT, "scene.json"), "w"), indent=2)
print("SCENE 窗洞", manifest["room_window"])

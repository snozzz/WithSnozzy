"""渲染打字的手，单独一层。

    blender --background --factory-startup --python Blender/render_hands.py -- Snozzy.vrm 输出目录

**为什么手要单独一层**：桌面层是画在角色**之上**的（不然桌子挡不住她的
下半身），于是手伸到键盘上就会被桌子盖掉。手必须再画一层、盖在桌子上面。

**为什么不能直接裁角色图那一块**：那块里除了小臂和手，后面还有她的大腿和
裙子，一起贴上去就是一片裙子糊在桌面上（试过，非常明显）。
所以这一趟用 `snozzy_lib.isolate_arms` 按骨骼权重只留手臂，
渲出来的 alpha 正好就是要的那一层。

手的落点是**按画面坐标定的**（`pose.KEYS`）——键盘只存在于 2D 重绘图里，
3D 场景里什么都没有，画面坐标是唯一有意义的参照。
"""
import bpy, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P

VRM, OUT = sys.argv[-2], sys.argv[-1]
os.makedirs(OUT, exist_ok=True)

# 2D 桌面上沿在画布上的位置（0…1）。实测 desk.png 从 y=602 起满不透明，
# 602/1024 = 0.588。挡板按这一行反推位置，换了重绘图要重新量。
DESK_TOP_V = 602 / 1024

from bpy_extras.object_utils import world_to_camera_view

cut = None
for i, (press, first) in enumerate(P.TYPING_FRAMES):
    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    S.toon_materials(); S.room_lights()
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    P.settle(scene, arm, press=press, side_first=first)
    S.isolate_arms(meshes)          # 只留手臂，别的顶点遮掉

    # 摆一块和 2D 桌面对齐的水平挡板，替桌子挡住袖子和肘。
    #
    # 桌面高度要按**指尖**取，不是手腕：手腕比指尖高五公分，照手腕摆挡板
    # 会把手指整个削掉（试过，只剩指尖尖还露在键上）。指尖才是碰到键的那一层。
    tips = [(arm.matrix_world @ arm.pose.bones[f"J_Bip_{s}_{f}3"].head).z
            for s in ("L", "R")
            for f in ("Index", "Middle", "Ring", "Little")
            if f"J_Bip_{s}_{f}3" in arm.pose.bones]
    z = min(tips) - 0.015
    S.desk_occluder(scene, DESK_TOP_V, z)
    cut = z

    scene.render.filepath = os.path.join(OUT, f"hand_{i:02d}.png")
    bpy.ops.render.render(write_still=True)
    print(f"HAND {i:02d} press={press} first={first}  桌面高度 {z:.3f}")

with open(os.path.join(OUT, "hands_meta.json"), "w") as f:
    json.dump({"frames": len(P.TYPING_FRAMES), "desk_height": cut}, f, indent=2)
print(f"HAND 共 {len(P.TYPING_FRAMES)} 帧")

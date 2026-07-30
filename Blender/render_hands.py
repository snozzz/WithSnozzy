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

# 切在离相机多远——桌沿的深度。近于它的画在桌面上，远于它的被桌子挡住。
# 手腕实测 2.25、肘 2.40，桌沿在两者之间。
# 拉梯度看出来的：2.38 起袖子开始留在桌上（穿模），2.32 干净。
CUT_DEPTH = float(os.environ.get("CUT_DEPTH", 2.32))

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

    # 按**深度**切掉桌沿后面那一段手臂。
    #
    # 不能用水平挡板（"桌面"）来切：袖子的 z 是 0.655–0.79、手是 0.698–0.756，
    # **两者在高度上是重叠的**，水平面切不开——摆低了什么都挡不住，
    # 摆高了连手一起削掉。它们真正的区别在深度：袖子挂在肘上（2.5），
    # 手伸在前面（2.39）。所以挡板要正对镜头，按深度切。
    S.depth_clip(scene, CUT_DEPTH)

    scene.render.filepath = os.path.join(OUT, f"hand_{i:02d}.png")
    bpy.ops.render.render(write_still=True)
    print(f"HAND {i:02d} press={press} first={first}  切深度 {CUT_DEPTH}")

with open(os.path.join(OUT, "hands_meta.json"), "w") as f:
    json.dump({"frames": len(P.TYPING_FRAMES), "cut_depth": CUT_DEPTH}, f, indent=2)
print(f"HAND 共 {len(P.TYPING_FRAMES)} 帧")

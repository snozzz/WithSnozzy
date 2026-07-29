"""渲染腿部姿势变体。共用同一台相机，所以运行时可以直接交叉淡入。"""
import bpy, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P

VRM, OUT = sys.argv[-2], sys.argv[-1]
os.makedirs(OUT, exist_ok=True)
for style in ("together", "apart", "crossL", "crossR", "tucked"):
    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    S.toon_materials(); S.room_lights()
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    P.seated(arm, sit=True, legs=style)
    S.scene_camera(scene)
    scene.render.filepath = os.path.join(OUT, f"snozzy_{style}.png")
    bpy.ops.render.render(write_still=True)
    print("POSE", style)

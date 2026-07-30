"""渲染戴耳机那一层。和常态图共用同一台相机，运行时直接交叉淡入。

耳机在 3D 里建而不是画一张 2D 图，是因为**遮挡关系是几何算出来的**：
头发压在头梁上、耳罩盖住耳朵，全自动正确。走 2D 的话「戴」和「不戴」
两套头发都得重画。
"""
import bpy, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P, headphones as HP

VRM, OUT = sys.argv[-2], sys.argv[-1]
os.makedirs(OUT, exist_ok=True)
meshes = S.load(VRM)
scene = S.setup_scene(res=1536)
scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
S.toon_materials(); S.room_lights()
arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
S.scene_camera(scene)
P.settle(scene, arm)
HP.build(arm, meshes)
scene.render.filepath = os.path.join(OUT, "snozzy_headphones.png")
bpy.ops.render.render(write_still=True)
print("LAYER 耳机层已渲出")

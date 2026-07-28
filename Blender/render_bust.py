"""渲一张伏案胸像，带 alpha，用来试贴进房间图。"""
import bpy, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P

VRM, OUT = sys.argv[-2], sys.argv[-1]
meshes = S.load(VRM); S.unlit_materials()
scene = S.setup_scene(res=1400)
arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
P.seated(arm)
top = S.frame_bust(scene, meshes, yaw_deg=15, span=0.55)
print("RENDER 形变后头顶 z =", round(top, 3))
scene.render.filepath = OUT
bpy.ops.render.render(write_still=True)
print("RENDER 完成", OUT)

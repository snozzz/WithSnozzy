"""用场景相机渲一张全身坐姿，透明背景。构图的其余部分在 2D 里搭。

只让 3D 负责它真正擅长的事：姿势、透视、遮挡。墙和桌子是矩形和梯形，
用 2D 画又快又准，没必要为了摆几个方块跑两分钟的渲染循环。
"""
import bpy, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P

VRM, OUT = sys.argv[-2], sys.argv[-1]
os.makedirs(os.path.dirname(OUT) or ".", exist_ok=True)
meshes = S.load(VRM)
scene = S.setup_scene(res=1536)
scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
S.toon_materials(); S.room_lights()
arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
S.scene_camera(scene)
P.seated(arm, sit=True)
S.place_hip(scene, arm, 0.704)
lo, hi = S.frame_extent(scene, meshes)
print(f'FRAME 纵向占位 {lo:.3f}…{hi:.3f}')
scene.render.filepath = OUT
bpy.ops.render.render(write_still=True)
print("SEATED", OUT)

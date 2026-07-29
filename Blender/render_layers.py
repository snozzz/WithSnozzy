"""渲染角色的分层 PNG。

每层单独渲一次、共用同一个相机，所以所有图层像素级对齐，
运行时直接叠加即可。耳机是独立一层——放音乐时显示，停了淡出。
"""
import bpy, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P, headphones as HP

VRM, OUT = sys.argv[-2], sys.argv[-1]
os.makedirs(OUT, exist_ok=True)

meshes = S.load(VRM)
scene = S.setup_scene(res=1600)
S.toon_materials(); S.room_lights()
arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
P.seated(arm)
hp = HP.build(arm, meshes)
S.frame_bust(scene, meshes, yaw_deg=15, span=1.00, top_margin=0.02)


def render(name, show_hp):
    hp.hide_render = not show_hp
    scene.render.filepath = os.path.join(OUT, name)
    bpy.ops.render.render(write_still=True)
    print("LAYER", name)


render("snozzy_idle.png", False)
# 耳机层暂时不出：耳罩太大，观感不过关。Blender 那边的建模留着，
# 想恢复把下面这行取消注释再跑一遍即可。
# render("snozzy_headphones.png", True)

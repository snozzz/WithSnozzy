"""渲染「键盘 + 敲键盘的手」，单独一层，画在桌面层之上。

## 为什么键盘也在这一层

键盘原来是画在 `desk.png` 里的 2D 图，而桌面层画在角色之上，于是"手放在
键盘上"只能靠猜一个深度把手臂切开——切多了手指没了、切少了袖子糊在桌面上。
调了三轮都不对，因为**用一个平面去切一个立体的关系，本来就切不出来**。

现在键盘和桌板都在 3D 里（`keyboard.py`），遮挡是渲染器算出来的：
手指压在键帽上、袖子被桌板挡住，全自动正确，一个阈值都没有。
画上去的那块 2D 键盘已经用 `dewatermark.py --fill` 抹掉了。

## 这一层里有什么

只有**键盘**和**小臂以下**。她身上别的部分由角色图自己画（在桌面层之下），
所以这里用 `isolate_arms` 只留手臂，再拿 `desk_slab` 当 Holdout
把桌面以下的部分挖掉。
"""
import bpy, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P, keyboard as K

VRM, OUT = sys.argv[-2], sys.argv[-1]
os.makedirs(OUT, exist_ok=True)

for i, (press, first) in enumerate(P.TYPING_FRAMES):
    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)

    # 顺序有讲究：
    # 1. 键盘要在 `toon_materials` **之前**建好，才跟着走同一套卡通着色；
    #    `toon_materials` 只能跑一次，跑两遍会把角色的材质再接一层。
    # 2. 手要在键盘**之后**摆——落点是问键盘要的（`keyboard.home_row`）。
    kbd = K.build()
    S.toon_materials(); S.room_lights()
    P.settle(scene, arm, press=press, side_first=first)
    kbd.hide_render = False          # 只有这一层画键盘

    S.isolate_arms(meshes)           # 只留小臂和手，别的顶点遮掉
    S._holdout(K.desk_slab())        # 3D 桌板：桌面以下的东西自动被挖掉

    scene.render.filepath = os.path.join(OUT, f"hand_{i:02d}.png")
    bpy.ops.render.render(write_still=True)
    print(f"HAND {i:02d} press={press} first={first}")

with open(os.path.join(OUT, "hands_meta.json"), "w") as f:
    json.dump({"frames": len(P.TYPING_FRAMES)}, f, indent=2)
print(f"HAND 共 {len(P.TYPING_FRAMES)} 帧")

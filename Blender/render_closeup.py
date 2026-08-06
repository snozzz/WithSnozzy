"""渲染近景那一套：托腮的上半身，以及托腮时留在键盘上的那只手。

    blender --background --factory-startup --python Blender/render_closeup.py -- Snozzy.vrm 输出目录

和 `render_layers.py`（耳机层）是同一类东西——**共用同一台相机的另一张
上半身**，运行时直接换图。为什么单独一个脚本而不是塞进 render_layers：
它要出三张、其中一张走的是手那一层的管线（`isolate_arms` + 桌板 Holdout），
两条管线混在一个脚本里读起来更费劲。

## 出的三张

- `torso_chin.png`            托腮的整幅图，切上半身用
- `torso_chin_headphones.png` 同上，戴着耳机（听歌时也会被抓到走神）
- `hand_chin.png`             托腮时**还留在键盘上**的那只手

命名刻意不用 `snozzy_*` 开头：`Scripts/leg_frames.py` 是按
`snozzy_*.png` 通配去认腿部姿势的，叫成 snozzy 开头会被当成第六套腿姿。

## 为什么托腮只动一条胳膊

上半身那张图是**所有腿帧共用的**，头是面部贴片的基准。脊柱一动，
上半身和腿在缝线处就对不上；头一动，眨眼和嘴的贴片就贴到脸外面去
（第 7/22 条）。所以 `pose.chin_rest` 只动一条胳膊，"托腮"这件事
全靠手的位置去读——判据在 `Blender/measure_chin.py`。
"""
import bpy, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P, keyboard as K, headphones as HP

VRM, OUT = sys.argv[-2], sys.argv[-1]
os.makedirs(OUT, exist_ok=True)


def build(hands_layer=False):
    """摆好托腮的整个人。`hands_layer=True` 时只留手臂那一层。"""
    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    # 键盘要在 `toon_materials` 之前建好才跟着走同一套卡通着色；
    # 而 `toon_materials` 只能跑一次（第二次会再接一层）。和 render_hands 一致。
    kbd = K.build()
    kbd.hide_render = not hands_layer
    S.toon_materials(); S.room_lights()
    P.settle(scene, arm)
    P.chin_rest(arm, scene)
    return scene, arm, meshes


# --- 托腮的上半身 -------------------------------------------------------
scene, arm, meshes = build()
scene.render.filepath = os.path.join(OUT, "torso_chin.png")
bpy.ops.render.render(write_still=True)
lo, hi = S.frame_extent(scene, meshes)
print(f"CLOSEUP 托腮上半身  纵向占位 {lo:.3f}…{hi:.3f}")

# --- 托腮 + 耳机 -------------------------------------------------------
scene, arm, meshes = build()
HP.build(arm, meshes)
scene.render.filepath = os.path.join(OUT, "torso_chin_headphones.png")
bpy.ops.render.render(write_still=True)
print("CLOSEUP 托腮上半身（戴耳机）")

# --- 托腮时还留在键盘上的那只手 -----------------------------------------
# 走的是 `render_hands.py` 那条管线：只留小臂以下、拿 3D 桌板当 Holdout
# 把桌面以下挖掉。
#
# **只留没抬起来的那只手**（`sides` 只给一侧）。第一版两只都留着，结果
# 抬起来那条胳膊的袖子在画布 y 602…644 也有像素——那一段正好落进手那一层的
# 裁切框里，于是袖子被画到了桌面层**上面**。而它在 3D 里的进深是 y=-0.085，
# 在桌子后沿（-0.168）**后面**，本该被桌子挡住。这就是第 29 条那个穿模：
# 手那一层的前提是"这里面的东西都在桌沿前面"，抬起来的胳膊不满足。
# 桌板 Holdout 救不了——它是 z=0.725 那块水平板，只挖桌面**以下**的东西，
# 而这截袖子在桌面以上、桌沿以后。
KEEP = "R" if P.CHIN_SIDE == "L" else "L"
scene, arm, meshes = build(hands_layer=True)
S.isolate_arms(meshes, sides=(KEEP,))
S._holdout(K.desk_slab())
scene.render.filepath = os.path.join(OUT, "hand_chin.png")
bpy.ops.render.render(write_still=True)
print("CLOSEUP 托腮时留在键盘上的那只手")

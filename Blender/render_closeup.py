"""渲染近景那一套：托腮的上半身，以及托腮时留在键盘上的那只手。

    blender --background --factory-startup --python Blender/render_closeup.py -- Snozzy.vrm 输出目录

和 `render_layers.py`（耳机层）是同一类东西——**共用同一台相机的另一张
上半身**，运行时直接换图。为什么单独一个脚本而不是塞进 render_layers：
它要出三张、其中一张走的是手那一层的管线（`isolate_arms` + 桌板 Holdout），
两条管线混在一个脚本里读起来更费劲。

## 输出

- `torso_chin.png`            托腮的整幅图，切上半身用
- `torso_chin_headphones.png` 同上，戴着耳机（听歌时也会被抓到走神）
- `hand_chin.png`             托腮时**还留在键盘上**的那只手
- `trans_chin_00…07.png`      从键盘抬到下颌的八张真正中间姿势
- `trans_chin_headphones_*`   同一条动作的耳机变体
- `hand_chin_00…07.png`       动作过程中应该盖在桌面层上的键盘和手

命名刻意不用 `snozzy_*` 开头：`Scripts/leg_frames.py` 是按
`snozzy_*.png` 通配去认腿部姿势的，叫成 snozzy 开头会被当成第六套腿姿。

## 动一条胳膊 + 头，脊柱不动

上半身那张图是**所有腿帧共用的**，脊柱一动上下半身在缝线处就对不上。
头以前也锁着（面部贴片存的是画布上固定矩形里的像素，第 7/22 条），
结果手悬在脸侧、头笔直，读不出托腮——现在头跟着一起歪，
面部贴片由 `render_face.py … chin` 在**同一条动作**上逐帧重渲：
00…08 每一档各出一套 13 块，矩形跟着那一格的脸走，所以整段动作里
她照样眨眼、说话。判据在 `Blender/measure_chin.py`（3D）和
`Scripts/chin_check.py`（像素）。

**改了 `pose.CHIN_*` 就必须把这两套一起重出**——只重出身体、不重出贴片，
贴片会按旧头姿贴到新的脸上，比不动还难看。

耳机是在 `settle` 之后、`chin_rest` 之前按头骨建的，骨骼父子关系
让它跟着歪过去的头刚性移动，不用为每个 amount 重建。
"""
import bpy, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P, keyboard as K, headphones as HP

args = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else sys.argv[-2:]
VRM, OUT = args[:2]
SCALE = int(args[2]) if len(args) > 2 else 1
W, H = 1536 * SCALE, 1024 * SCALE
os.makedirs(OUT, exist_ok=True)


TRANS_STEPS = 8


def build(amount=1.0, hands_layer=False, with_headphones=False):
    """摆好托腮的整个人。`hands_layer=True` 时只留手臂那一层。"""
    meshes = S.load(VRM)
    scene = S.setup_scene(res=W)
    scene.render.resolution_x, scene.render.resolution_y = W, H
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    # 键盘要在 `toon_materials` 之前建好才跟着走同一套卡通着色；
    # 而 `toon_materials` 只能跑一次（第二次会再接一层）。和 render_hands 一致。
    kbd = K.build()
    kbd.hide_render = not hands_layer
    S.toon_materials(); S.room_lights()
    P.settle(scene, arm)
    # Build the headset once in the settled head's local frame.  It is bone
    # parented and must then follow the same rigid head transform as the
    # character; rebuilding it from a world-space face AABB for every chin
    # amount makes the ear cups drift during the motion.
    if with_headphones:
        HP.build(arm, meshes)
    P.chin_rest(arm, scene, amount=amount)
    return scene, arm, meshes, kbd


def render_torso(amount, name, with_headphones=False):
    scene, arm, meshes, _ = build(amount=amount, with_headphones=with_headphones)
    scene.render.filepath = os.path.join(OUT, name)
    bpy.ops.render.render(write_still=True)
    return scene, arm, meshes


def render_hand(amount, name, final=False):
    """渲染桌面之上的那一层。

    抬起的左手从键盘前侧越过桌后沿后，就必须回到角色层（桌子下面）；
    否则袖子会浮在桌面上，这是 HANDOFF 第 60 条。以手腕相对桌后沿的真实
    3D 进深决定是否保留，不按帧号猜一个切点。
    """
    scene, arm, meshes, _ = build(amount=amount, hands_layer=True)
    keep = ["R" if P.CHIN_SIDE == "L" else "L"]
    moving_wrist = (arm.matrix_world
                    @ arm.pose.bones[f"J_Bip_{P.CHIN_SIDE}_Hand"].head)
    # 手离开键面约一掌高以后，抬起的那侧完全回到角色层。继续留在手层会把
    # 袖口画到桌子上面；按高度切正好发生在手离开桌沿遮挡的时刻，画面连续。
    if not final and moving_wrist.z <= K.DESK_Z + 0.12:
        keep.append(P.CHIN_SIDE)
    S.isolate_arms(meshes, sides=tuple(keep))
    S._holdout(K.desk_slab())
    scene.render.filepath = os.path.join(OUT, name)
    bpy.ops.render.render(write_still=True)
    print(f"CLOSEUP 手层 {name}  抬手腕 y={moving_wrist.y:.3f} "
          f"z={moving_wrist.z:.3f}  保留 {keep}")


# 高像素密度版本不能拿 1× 常态上半身放大当底，否则只有胳膊清楚、脸仍然糊。
# amount=0 的两张就是同一相机下真正的高分辨率常态锚点，切片脚本会把动作区外
# 每一帧锁回这张，既清楚又消掉 DITHERED 的静态边缘闪烁。
render_torso(0.0, "torso_chin_base.png")
render_torso(0.0, "torso_chin_base_headphones.png", with_headphones=True)

# --- 托腮的上半身 -------------------------------------------------------
scene, arm, meshes = render_torso(1.0, "torso_chin.png")
lo, hi = S.frame_extent(scene, meshes)
print(f"CLOSEUP 托腮上半身  纵向占位 {lo:.3f}…{hi:.3f}")

# --- 托腮 + 耳机 -------------------------------------------------------
render_torso(1.0, "torso_chin_headphones.png", with_headphones=True)
print("CLOSEUP 托腮上半身（戴耳机）")

# 两端已经分别是常态素材和上面的最终素材，所以这里只渲中间的八档。
# t 不踩端点，和腿部过渡完全一致；运行时每帧 1/12 秒，整段正好 0.75 秒。
for i in range(TRANS_STEPS):
    t = (i + 1) / (TRANS_STEPS + 1)
    render_torso(t, f"trans_chin_{i:02d}.png")
    render_torso(t, f"trans_chin_headphones_{i:02d}.png", with_headphones=True)
    render_hand(t, f"hand_chin_{i:02d}.png")
    print(f"CLOSEUP TRANS {i:02d} t={t:.3f}")

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
render_hand(1.0, "hand_chin.png", final=True)
print("CLOSEUP 托腮时留在键盘上的那只手")

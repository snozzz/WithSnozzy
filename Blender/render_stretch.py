"""渲染伸懒腰那一套：举起双臂的上半身，以及桌面上只剩键盘的那一层。

    blender --background --factory-startup --python Blender/render_stretch.py -- Snozzy.vrm 输出目录 [倍率]

和 `render_closeup.py` 是同一类东西——**共用同一台相机的另一套上半身**，
运行时换图。两者的差别值得写下来，因为它们决定了这里为什么不能照抄：

- 托腮只抬**一条**胳膊，另一条还按在键盘上，所以手那一层要留一只手；
  伸懒腰**两条一起举**，那一层里一只手都不该留（第 60 条：那一层的前提是
  "里面的东西都在桌沿前面"，举起来的胳膊不满足）。**但键盘还得画**——
  它本来就在那一层里，少了它桌上会空一块。
- 托腮只动脖子和头；伸懒腰还要开胸口，所以头的位移大得多，
  面部贴片必须按这条动作逐帧重出（`render_face.py … stretch`）。

## 输出

- `torso_stretch_base.png`        amount=0，也就是常态，切片时拿它当锁定底
- `torso_stretch_base_headphones.png`
- `torso_stretch.png` / `_headphones.png`   终态
- `trans_stretch_00…07.png` / `trans_stretch_headphones_*`   八张中间姿势
- `hand_stretch_00…07.png` + `hand_stretch.png`             桌面之上那一层

命名不用 `snozzy_*` 开头：`Scripts/leg_frames.py` 按那个通配去认腿部姿势。
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
    """摆好伸懒腰的整个人。`hands_layer=True` 时只留手臂那一层。"""
    meshes = S.load(VRM)
    scene = S.setup_scene(res=W)
    scene.render.resolution_x, scene.render.resolution_y = W, H
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    # 键盘要在 `toon_materials` 之前建好才跟着走同一套卡通着色；
    # 而 `toon_materials` 只能跑一次。和 render_closeup / render_hands 一致。
    kbd = K.build()
    kbd.hide_render = not hands_layer
    S.toon_materials(); S.room_lights()
    P.settle(scene, arm)
    # 耳机在 settle 之后、动作之前按头骨建：它是骨骼父子挂上去的，
    # 之后跟着仰起来的头刚性走，不用为每个 amount 重建（重建会让耳罩漂）。
    if with_headphones:
        HP.build(arm, meshes)
    P.stretch(arm, scene, amount=amount)
    return scene, arm, meshes, kbd


def render_torso(amount, name, with_headphones=False):
    scene, arm, meshes, _ = build(amount=amount, with_headphones=with_headphones)
    scene.render.filepath = os.path.join(OUT, name)
    bpy.ops.render.render(write_still=True)
    return scene, arm, meshes


def render_hand(amount, name):
    """桌面之上那一层。

    手一旦离开键面一掌高，那一侧就完全回到角色层（桌子底下），
    否则袖口会浮在桌面上（第 60 条）。伸懒腰两只手一起走，
    所以到后面这一层里只剩键盘——那是对的，不是漏渲。
    """
    scene, arm, meshes, _ = build(amount=amount, hands_layer=True)
    keep = []
    heights = {}
    for side in ("L", "R"):
        wrist = arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_Hand"].head
        heights[side] = wrist.z
        if wrist.z <= K.DESK_Z + 0.12:
            keep.append(side)
    S.isolate_arms(meshes, sides=tuple(keep))
    S._holdout(K.desk_slab())
    scene.render.filepath = os.path.join(OUT, name)
    bpy.ops.render.render(write_still=True)
    print(f"STRETCH 手层 {name}  腕高 L={heights['L']:.3f} R={heights['R']:.3f}"
          f"（桌面 {K.DESK_Z}）  保留 {keep or '只剩键盘'}")


# amount=0 就是常态，但**必须在这台相机、这个倍率下单独渲一张**：
# 拿 1× 常态放大当底会只有胳膊清楚、脸仍然糊。切片脚本把动作走廊之外的
# 每一帧都锁回这张，既清楚又消掉 DITHERED 的静态边缘闪烁。
render_torso(0.0, "torso_stretch_base.png")
render_torso(0.0, "torso_stretch_base_headphones.png", with_headphones=True)

scene, arm, meshes = render_torso(1.0, "torso_stretch.png")
lo, hi = S.frame_extent(scene, meshes)
print(f"STRETCH 终态  纵向占位 {lo:.3f}…{hi:.3f}")
if lo < 0:
    raise SystemExit("✗ 举起来的手出画了——调小 STRETCH_UPPER_ARM 的 Z")

render_torso(1.0, "torso_stretch_headphones.png", with_headphones=True)
print("STRETCH 终态（戴耳机）")

# 两端已经是上面那两套，这里只渲中间八档。t 不踩端点，和腿部过渡一致；
# 运行时每帧 1/12 秒，整段正好 0.75 秒。
for i in range(TRANS_STEPS):
    t = (i + 1) / (TRANS_STEPS + 1)
    render_torso(t, f"trans_stretch_{i:02d}.png")
    render_torso(t, f"trans_stretch_headphones_{i:02d}.png", with_headphones=True)
    render_hand(t, f"hand_stretch_{i:02d}.png")
    print(f"STRETCH TRANS {i:02d} t={t:.3f}")

render_hand(1.0, "hand_stretch.png")
print("STRETCH 桌面层终态（两只手都举起来了，这一层只剩键盘）")

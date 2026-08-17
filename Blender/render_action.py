"""渲染一条长动作的全套素材：伸懒腰 / 喝咖啡 / 玩手机。

    blender --background --factory-startup --python Blender/render_action.py -- \
        Snozzy.vrm 输出目录 动作名 [倍率]

**这一个脚本管三条动作**（清单在 `Scripts/action_defs.py`）。原来伸懒腰是把
托腮那份抄了一遍改名字，再加第三条就是第三份拷贝——而三份各有各的文件名、
帧数、手层规则，迟早各错各的。托腮（`render_closeup.py`）留在原处不动：
它多一趟 1× 兼容序列，混进来反而更难读。

## 输出（`<a>` 是动作名）

- `torso_<a>_base.png` / `_base_headphones.png`   amount=0，切片时的锁定底
- `torso_<a>.png` / `_headphones.png`             终态
- `trans_<a>_00…07.png` / `trans_<a>_headphones_*` 八张中间姿势
- `hold_<a>_00…H-1.png` / `hold_<a>_headphones_*`  停在那儿那一段（循环）
- `hand_<a>_00…07.png` + `hand_<a>.png`            桌面之上那一层

**hold 那一段不单独出手层**：停留期间桌面上那只手（或者一只都没有）不动，
道具也早就举到脸那么高、出了手层的裁切框，所以运行时直接复用终态那一张。
少 H 张渲染、少 H 个文件，而且天然不会出现"手层和身体不同步"。

## 为什么每条动作都要自己的一套上半身

上半身那张图是所有腿帧共用的，脊柱一动缝线就对不上（第 15/16 条）。
所以长动作不改脊柱，只改胸以上和胳膊，然后**整套上半身另出一份**，
运行时换图。面部贴片也要按这条动作逐帧重出（`render_face.py … <动作>`），
头一动，贴片矩形就跟着脸走了。
"""
import bpy, math, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "Scripts"))
import snozzy_lib as S, pose as P, keyboard as K, headphones as HP, props as PR  # noqa: E402
import action_defs as AD  # noqa: E402

args = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else sys.argv[-3:]
VRM, OUT, ACTION = args[:3]
SCALE = int(args[3]) if len(args) > 3 else 1
SPEC = AD.spec(ACTION)
W, H = 1536 * SCALE, 1024 * SCALE
os.makedirs(OUT, exist_ok=True)

POSE = {"stretch": P.stretch, "coffee": P.coffee, "phone": P.phone}[ACTION]
STEPS = AD.TRANSITION_FRAMES
HOLDS = SPEC["holds"]


def build(amount=1.0, hold=None, hands_layer=False, with_headphones=False):
    """摆好这条动作的整个人。`hands_layer=True` 时只留桌面之上那一层。"""
    meshes = S.load(VRM)
    scene = S.setup_scene(res=W)
    scene.render.resolution_x, scene.render.resolution_y = W, H
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    # 键盘和道具都要在 `toon_materials` **之前**建好，才跟着走同一套卡通着色；
    # 而 `toon_materials` 只能跑一次。和 render_hands / render_closeup 一致。
    kbd = K.build()
    PR.build()
    kbd.hide_render = not hands_layer
    # 道具在**两层里都画**：静止时它整个在桌沿那条线附近，上半截由角色层画、
    # 下半截由手层画，正好接上（和她的小臂是同一个道理）。举起来之后它高过
    # 手层的裁切框，只剩角色层画——所以这里不能像键盘那样只在手层里画。
    S.toon_materials(); S.room_lights()
    P.settle(scene, arm)
    if with_headphones:
        HP.build(arm, meshes)
    POSE(arm, scene, amount=amount, hold_phase=hold)
    return scene, arm, meshes, kbd


def render_torso(name, amount=1.0, hold=None, with_headphones=False):
    scene, arm, meshes, _ = build(amount=amount, hold=hold,
                                  with_headphones=with_headphones)
    scene.render.filepath = os.path.join(OUT, name)
    bpy.ops.render.render(write_still=True)
    return scene, arm, meshes


def render_hand(name, amount=1.0):
    """桌面之上那一层。

    哪只手留在这一层里，**问手腕的高度**，不按帧号猜：手一旦离开键面
    一掌高，那一侧就完全回到角色层（桌子下面），否则袖子会浮在桌面上
    （第 60 条：这一层的前提是"里面的东西都在桌沿前面"）。
    """
    scene, arm, meshes, _ = build(amount=amount, hands_layer=True)
    keep = list(SPEC["hands_keep"])
    heights = {}
    for side in ("L", "R"):
        if side in keep:
            continue
        wrist = arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_Hand"].head
        heights[side] = wrist.z
        if wrist.z <= K.DESK_Z + 0.12:
            keep.append(side)
    S.isolate_arms(meshes, sides=tuple(keep))
    S._holdout(K.desk_slab())
    scene.render.filepath = os.path.join(OUT, name)
    bpy.ops.render.render(write_still=True)
    lifted = "  ".join(f"{s} z={z:.3f}" for s, z in heights.items())
    print(f"{ACTION.upper()} 手层 {name}  {lifted}（桌面 {K.DESK_Z}）"
          f"  保留 {keep or '只剩键盘和道具'}")


# amount=0 就是常态，但**必须在这台相机、这个倍率下单独渲一张**：
# 拿 1× 常态放大当底会只有胳膊清楚、脸仍然糊。切片脚本把动作走廊之外的
# 每一帧都锁回这张，既清楚又消掉 DITHERED 的静态边缘闪烁。
render_torso(f"torso_{ACTION}_base.png", amount=0.0)
render_torso(f"torso_{ACTION}_base_headphones.png", amount=0.0,
             with_headphones=True)

scene, arm, meshes = render_torso(f"torso_{ACTION}.png", amount=1.0)
lo, hi = S.frame_extent(scene, meshes)
print(f"{ACTION.upper()} 终态  纵向占位 {lo:.3f}…{hi:.3f}")
if lo < 0:
    raise SystemExit("✗ 举起来的手出画了")

render_torso(f"torso_{ACTION}_headphones.png", amount=1.0, with_headphones=True)
print(f"{ACTION.upper()} 终态（戴耳机）")

# 两端已经是上面那两套，这里只渲中间八档。t 不踩端点，和腿部过渡一致；
# 运行时每帧 1/12 秒，整段正好 0.75 秒。
for i in range(STEPS):
    t = (i + 1) / (STEPS + 1)
    render_torso(f"trans_{ACTION}_{i:02d}.png", amount=t)
    render_torso(f"trans_{ACTION}_headphones_{i:02d}.png", amount=t,
                 with_headphones=True)
    render_hand(f"hand_{ACTION}_{i:02d}.png", amount=t)
    print(f"{ACTION.upper()} TRANS {i:02d} t={t:.3f}")

render_hand(f"hand_{ACTION}.png", amount=1.0)
print(f"{ACTION.upper()} 桌面层终态")

# hold：到位之后停在那儿的一整个周期。相位不踩 0（那就是终态本身），
# 从半格开始均匀铺满一圈，于是"终态 → hold 00"和"hold 末 → 终态"
# 两个接缝的步长和圈内每一步一样大，循环起来没有卡顿。
for i in range(HOLDS):
    phase = 2 * math.pi * (i + 0.5) / HOLDS
    render_torso(f"hold_{ACTION}_{i:02d}.png", hold=phase)
    render_torso(f"hold_{ACTION}_headphones_{i:02d}.png", hold=phase,
                 with_headphones=True)
    print(f"{ACTION.upper()} HOLD {i:02d} phase={phase:.3f}")

print(f"{ACTION.upper()} 共 {STEPS} 中间帧 + 终态 + {HOLDS} 停留帧")

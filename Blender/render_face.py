"""渲染面部的细微变化，输出成一小块一小块的贴片。

为什么只出贴片而不是整张：五套腿部姿势的**上半身完全一样**（同一台相机、
同一个上半身姿势），所以眨眼、视线这些变化对每套姿势都是同一块像素。
整张出的话是 5×N 张全画幅图；出贴片则是 N 张几 KB 的小图，
而且运行时直接盖上去就行，不用对位。

变化本身全部来自 VRM 自带的形态键和眼球骨骼，不用建任何东西。

## 脸只有八十来像素宽，所以先量哪些变化看得见

把每个变体和中性脸做差、数变化像素（阈值 6），拿 `blink_shut` 当 100% 的尺子：

    blink_shut 764   eye_smile 710   eye_wide 608   blink_half 554
    look_up    492   eye_sad   467   look_down 441   eye_soft   322
    look_left  231   look_right 219
    mouth_o    104   smile(0.8) 94   mouth_open 91
    brow_knit   83   brow_sad   74   brow_joy   42   brow_up  40   brow_fun 39

结论有两条，都和直觉相反：

**一、眉毛做不了。** 动漫脸的情绪大半在眉毛上，但她的**刘海把眉毛盖住了**——
`Fcl_BRW_*` 五个形态键全试过，变化像素只有 39–83 个，其中超过阈值 40 的
只有 3–5 个，等于看不见。而且把形态键**过驱**到 3.0、6.0 也没用：
数值反而更小（x1=40、x3=26、x6=35），因为眉毛是往刘海**后面**动。
这条不是调参能救的，除非改发型或者把脸拍大。

**二、嘴要过驱才看得见。** 形态键默认上限是 1.0，但 `slider_max` 可以抬。
`Fcl_MTH_Joy` 给 0.8 只有 94 个像素变化，给 3.0 是 389 个——四倍，
一下就进了"看得清"的区间。嘴本来只有二十来像素宽，不过驱就是白渲。

所以现在只有两个通道：**眼**（信息量的八成在这里）和**嘴**（过驱之后可用）。

## 通道（channel）

- **不同通道之间的贴片必须互不重叠**。贴片存的是"这个变体在那块 bbox 里的
  全部像素"，所以一块盖上去会连带覆盖别的通道在同一位置的效果。
  `Scripts/face_patches.py` 会把跨通道重叠报出来——那是硬错误。
- **同通道内部重叠是正常的**。眼通道实测是套娃关系：
  `look ⊂ 眼型 ⊂ blink`，所以它是个**优先级栈**——
  眨眼盖过眼型、眼型盖过视线。物理上也对：眼皮在眼球前面，
  眯眼笑的时候本来就看不出瞳孔朝哪。`FaceOverlay` 按这个顺序叠，
  驱动那一层负责让眼型强的时候把视线收掉。
"""
import bpy, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P

args = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else sys.argv[-2:]
VRM, OUT = args[:2]
SCALE = int(args[2]) if len(args) > 2 else 1
# 第 4 个参数给 "chin" 时在**托腮终态**上出贴片（头是歪的、手贴着脸）。
# 近景终态的贴片必须在这套姿势下重渲：头一歪，眼嘴的矩形就跟着脸走了；
# 而手贴着脸也没关系——贴片和终态底图是同一个姿势渲的，手在矩形里的像素
# 两边完全一致，盖上去等于没盖。切片用 face_patches.py --prefix facechin2x。
CHIN = len(args) > 3 and args[3] == "chin"
os.makedirs(OUT, exist_ok=True)
W, H = 1536 * SCALE, 1024 * SCALE


def shape(meshes, name, value):
    """设形态键。**允许过驱到 1.0 以上**——`slider_max` 默认就是 1.0，
    不先抬上限的话赋再大的值也会被夹回去（嘴的变化因此白渲）。"""
    for o in meshes:
        keys = o.data.shape_keys
        if keys and name in keys.key_blocks:
            kb = keys.key_blocks[name]
            kb.slider_max = max(kb.slider_max, value)
            kb.value = value


def eyes_look(arm, x=0.0, y=0.0):
    """转眼球。VRoid 的视线不是形态键，是两根辅助骨。"""
    import math
    for side in ("L", "R"):
        pb = arm.pose.bones.get(f"J_Adj_{side}_FaceEye")
        if pb is None:
            continue
        pb.rotation_mode = 'XYZ'
        pb.rotation_euler = (math.radians(-y * 7), 0, math.radians(x * 9))
    bpy.context.view_layer.update()


# 幅度一律给足：脸只有八十来像素宽，细微的形变根本看不出来。
# 嘴的形态键统统过驱到 3.0（见文件头的量化结果），眼睛 1.0 就够强。
VARIANTS = {
    # ── 视线。眼球转动，在眼通道的最底层 ──
    "look_left":   dict(ch="eye", look=(-1.0, 0.0)),
    "look_right":  dict(ch="eye", look=(1.0, 0.0)),
    "look_down":   dict(ch="eye", look=(0.0, -1.0)),
    "look_up":     dict(ch="eye", look=(0.0, 1.0)),

    # ── 眼型。压在视线上面 ──
    "eye_smile":   dict(ch="eye", shapes={"Fcl_EYE_Joy": 1.0}),
    "eye_soft":    dict(ch="eye", shapes={"Fcl_EYE_Fun": 1.0}),
    "eye_wide":    dict(ch="eye", shapes={"Fcl_EYE_Surprised": 1.0}),
    "eye_sad":     dict(ch="eye", shapes={"Fcl_EYE_Sorrow": 1.0}),

    # ── 眨眼。眼通道的最上层，眼皮在眼球前面 ──
    "blink_half":  dict(ch="eye", shapes={"Fcl_EYE_Close": 0.55}),
    "blink_shut":  dict(ch="eye", shapes={"Fcl_EYE_Close": 1.0}),

    # ── 嘴。要过驱，但**别照着"变化像素越多越好"调**。
    #
    # 拉了一条强度梯度逐个看：Joy 给到 3.0 是 389 个像素变化，数值最漂亮，
    # 但画出来是张大嘴在喊，不是微笑。1.2 左右（130 像素）才是"看得出在笑"
    # 又不失态的位置。这是个教训——可见度只能当下限，好不好看得眼睛判。
    #
    # 另外这个模型**没有闭嘴的笑**：`Fcl_MTH_Joy` 是张嘴笑，
    # 而 `Fcl_MTH_Up`（26 像素）和 `Fcl_MTH_Fun`（27）几乎不动嘴。
    # 所以嘴只是配角，表情的信息量绝大部分要靠眼睛出。
    "smile":       dict(ch="mouth", shapes={"Fcl_MTH_Joy": 1.3}),
    "mouth_open":  dict(ch="mouth", shapes={"Fcl_MTH_A": 1.0}),
    "mouth_o":     dict(ch="mouth", shapes={"Fcl_MTH_O": 1.1}),
}


def build(variant=None, chin_amount=None):
    meshes = S.load(VRM)
    scene = S.setup_scene(res=W)
    scene.render.resolution_x, scene.render.resolution_y = W, H
    S.toon_materials(); S.room_lights()
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    P.settle(scene, arm)
    if chin_amount is not None:
        P.chin_rest(arm, scene, amount=chin_amount)
    if variant:
        for k, v in variant.get("shapes", {}).items():
            shape(meshes, k, v)
        if "look" in variant:
            bpy.context.view_layer.objects.active = arm
            bpy.ops.object.mode_set(mode='POSE')
            eyes_look(arm, *variant["look"])
            bpy.ops.object.mode_set(mode='OBJECT')
    return scene


channels = {k: v["ch"] for k, v in VARIANTS.items()}
if CHIN:
    # The close-up timeline has eight in-betweens plus the settled terminal
    # pose.  Each one gets its own neutral base and 13 variants; a terminal
    # patch cannot be safely faded over a rotating head.
    for frame in range(9):
        amount = (frame + 1) / 9.0
        scene = build(chin_amount=amount)
        scene.render.filepath = os.path.join(OUT, f"_base_{frame:02d}.png")
        bpy.ops.render.render(write_still=True)
        print(f"FACE chin base {frame:02d} amount={amount:.4f}")
        for name, spec in VARIANTS.items():
            scene = build(spec, chin_amount=amount)
            scene.render.filepath = os.path.join(OUT, f"_{frame:02d}_{name}.png")
            bpy.ops.render.render(write_still=True)
            print(f"FACE chin {frame:02d} {name}")
else:
    scene = build()
    scene.render.filepath = os.path.join(OUT, "_base.png")
    bpy.ops.render.render(write_still=True)
    print("FACE base")

    for name, spec in VARIANTS.items():
        scene = build(spec)
        scene.render.filepath = os.path.join(OUT, f"_{name}.png")
        bpy.ops.render.render(write_still=True)
        print("FACE", name)

# 通道表交给切片脚本，让它检查跨通道重叠
with open(os.path.join(OUT, "channels.json"), "w") as f:
    json.dump(channels, f, indent=2)
print(f"FACE 共 {len(VARIANTS)} 个变体" + (" × 9 帧" if CHIN else ""))

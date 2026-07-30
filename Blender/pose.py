"""摆姿势。

骨骼的局部旋转轴在 VRM 里没有统一约定，直接写欧拉角基本靠猜。
所以这里统一用「把骨骼指向某个世界方向」来表达姿势——
设 `pose_bone.matrix` 让 Blender 自己处理父子链，
每根之后刷新一次依赖图，否则子骨骼拿到的还是旧的父变换。
"""
import bpy
from mathutils import Vector

# 她面朝 -Y（0° 机位在 -Y 看过去正好是正脸）
FWD, DOWN, RIGHT = Vector((0, -1, 0)), Vector((0, 0, -1)), Vector((1, 0, 0))


def _limb_dir(pb, prefer=None):
    """骨骼在解剖学意义上的指向。

    **只跟人形骨架（J_Bip_*）走。** 头骨底下挂着十几根头发弹簧骨，
    最远的那根比眼睛远得多；照"取最远子骨骼"的规则会挑中一撮头发，
    于是"把头摆正"实际变成"把那撮头发摆正"，头被带得又低又歪。
    次级骨（J_Sec_*）和辅助骨（J_Adj_*）一律不参与。

    没有人形子骨骼时（比如头骨）退回骨骼自身的 tail 方向——
    对头骨来说那正好是穿过颅顶的轴。

    也**不能用骨骼自身的 Y 轴**：glTF 里节点只有变换没有朝向，
    Blender 导入时按自己的启发式定向，胳膊骨骼的 Y 轴能和胳膊差 90°。
    """
    # 跟**同族**的子骨骼走。头骨底下挂的是头发弹簧骨（J_Sec_），
    # 跟着它们会把头带歪；而裙骨本身就是 J_Sec_，它的链只能靠 J_Sec_ 子骨骼
    # 才走得下去。按前缀分族是唯一同时满足这两种情况的规则。
    family = "J_Sec_" if pb.name.startswith("J_Sec_") else "J_Bip_"
    kids = [c for c in pb.children if c.name.startswith(family)]
    if prefer:
        c = next((c for c in kids if prefer in c.name), None)
        if c:
            return c.head - pb.head
    if kids:
        # 取最远的：手部有五根手指做子骨骼，取拇指会把方向带偏
        c = max(kids, key=lambda c: (c.head - pb.head).length)
        return c.head - pb.head
    return pb.tail - pb.head


def aim(arm, name, direction, prefer=None):
    """把骨骼所代表的那一节肢体转到 `direction`（世界坐标）。"""
    pb = arm.pose.bones.get(name)
    if pb is None:
        print(f"POSE 缺骨骼 {name}")
        return
    cur = _limb_dir(pb, prefer)
    if cur.length < 1e-6:
        return
    q = cur.normalized().rotation_difference(Vector(direction).normalized())
    m = pb.matrix.copy()
    loc = m.translation.copy()
    m = q.to_matrix().to_4x4() @ m
    m.translation = loc
    pb.matrix = m
    bpy.context.view_layer.update()
    return pb


# 坐着的人腿不会一直保持一个姿势。这几套之间随机换，就是"活人"和"雕像"的区别。
#
# 每套写成「左腿三段 + 右腿三段」的世界朝向，两条腿分开写。之前是
# 「一套方向 + 左右镜像」，有两个问题：二郎腿这种非对称姿势塞不进去
# （只好另开一个 `cross_legs` 函数），而且**没法在两套之间插值**——
# 换姿势的过渡帧就是插出来的，所以这个结构是 `blend_legs` 的前提。
#
# 三段依次是大腿、小腿、脚。她面朝 −Y，**+X 是她的左手边**。
# 小腿一律带一点 +Y（向后），脚收到椅子下面：这既是坐着的自然姿势，
# 也解决一个取景问题——脚比躯干更靠近镜头，而画幅下边界在近处更高，
# 脚往后收、离镜头远了，才落得进画面。
#
# **女生坐姿的关键是脚踝不比膝盖宽。** 之前大腿和小腿的横向分量都朝外，
# 从胯往下一路外分，成了外八字（实测膝间距 153 px、踝间距 178 px），
# 配上厚底鞋，整个下半身很"横"。现在小腿一律往内收：膝盖并拢、
# 脚踝落在膝盖内侧，横向占位从胯往下是收窄的。
LEG_POSES = {
    # 并膝并踝。最规矩的一套，也是所有过渡的中枢姿势（见 render_transitions.py）
    "together": {
        "L": (( 0.02, -1.00, -0.12), (-0.06,  0.42, -0.90), (-0.02, -0.92, -0.20)),
        "R": ((-0.02, -1.00, -0.12), ( 0.06,  0.42, -0.90), ( 0.02, -0.92, -0.20)),
    },
    # 双腿并拢、整体斜向她右手边（画面左）。取代原来的 "apart"——
    # 那一套是两腿大幅外分，实测踝间距 336 px，就是"粗旷"的主要来源。
    # 斜放同样能和并膝拉开区别，但不牺牲仪态。外侧那条腿要多摆一点才贴得住。
    "angled": {
        "L": ((-0.24, -0.95, -0.13), (-0.32,  0.40, -0.85), (-0.20, -0.90, -0.20)),
        "R": ((-0.13, -0.98, -0.13), (-0.22,  0.44, -0.86), (-0.12, -0.92, -0.20)),
    },
    # 二郎腿。上面那条大腿横过身体中线，小腿再垂下去略微外摆；
    # 支撑腿收到接近垂直（原来带 0.18 的外张，一条腿岔开就白搭了）
    "crossL": {
        "L": ((-0.38, -0.90, -0.18), ( 0.30,  0.72, -0.62), ( 0.16, -0.60, -0.78)),
        "R": (( 0.00, -1.00, -0.10), (-0.10,  0.78, -0.62), (-0.04, -0.92, -0.18)),
    },
    "crossR": {
        "L": (( 0.00, -1.00, -0.10), ( 0.10,  0.78, -0.62), ( 0.04, -0.92, -0.18)),
        "R": (( 0.38, -0.90, -0.18), (-0.30,  0.72, -0.62), (-0.16, -0.60, -0.78)),
    },
    # 一条腿收到椅子底下，脚尖点地。两条都收会变成跪姿
    "tucked": {
        "L": (( 0.02, -1.00, -0.12), (-0.06,  0.42, -0.90), (-0.02, -0.92, -0.20)),
        "R": (( 0.02, -1.00, -0.10), (-0.06,  0.90, -0.42), (-0.05, -0.20, -0.96)),
    },
}

# 过渡的中枢姿势。换姿势一律先收回到这里再摆出去，于是 N 套姿势只需要
# N−1 段过渡序列，而不是 N×(N−1) 段。真人换腿也确实是先收回的。
HUB = "together"

# 一段过渡（中枢 ↔ 某套姿势）的中间帧数，两端的成品姿势不计。
# 这个数字三处要一致：这里渲多少张、`Scripts/leg_frames.py` 切多少张、
# `LegPose.swift` 播多少张。所以只写在这里，另两处从 legs.json 读。
#
# 为什么是 8 而不是更多：帧停留时长必须**大于** app 的动画 tick，
# 否则会不均匀地丢帧（见 `LegPose.frameTime`）。tick 是 1/15 秒，
# 于是帧长取 1/12 秒；再多渲几张只会把一次换腿拖到两秒以上。
# 8 张 × 1/12 秒 = 一支 0.75 秒，姿势→姿势 1.5 秒，正好是真人的节奏。
TRANS_STEPS = 8


def blend_legs(a, b, t):
    """在两套腿姿之间插值，给过渡帧用。

    逐段做球面插值而不是线性插值：方向是单位向量，线性插值会让中间帧
    的向量变短，归一化之后角速度不均匀——表现是过渡的中段"赶"了一下。
    """
    pa, pb = LEG_POSES[a], LEG_POSES[b]
    return {side: tuple(Vector(u).normalized().slerp(Vector(v).normalized(), t)
                        for u, v in zip(pa[side], pb[side]))
            for side in ("L", "R")}


def sit_down(arm, seat_h=0.50, legs="together"):
    """把整个人放到椅子高度上，并弯起腿。

    VRoid 模型静置是**站姿**，只摆上半身的话她会立在桌子后面而不是坐着。
    先把骨架整体下移到坐高，再把大腿折向前、小腿垂下去。
    腿基本会被桌子挡住，但不折的话会从桌板底下穿出来。

    `legs` 可以是 `LEG_POSES` 里的姿势名，也可以直接是 `blend_legs`
    返回的那种六段方向字典。
    """
    hips = arm.pose.bones.get("J_Bip_C_Hips")
    if hips is not None:
        cur = (arm.matrix_world @ hips.head).z
        arm.location.z += seat_h - cur

    dirs = LEG_POSES.get(legs, LEG_POSES[HUB]) if isinstance(legs, str) else legs
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode='POSE')
    for side in ("L", "R"):
        for bone, d in zip(("UpperLeg", "LowerLeg", "Foot"), dirs[side]):
            aim(arm, f"J_Bip_{side}_{bone}", d)
    bpy.ops.object.mode_set(mode='OBJECT')


def drape_skirt(arm, spread=1.0):
    """把裙摆铺到大腿上。

    VRoid 的裙子由独立的弹簧骨驱动，本意是运行时做物理模拟。
    只摆腿不管裙子，大腿会直接穿透裙面——正面看就是穿模加走光。
    不跑布料解算（慢且难调），直接按段把裙骨摆出垂坠。

    命名要看清楚：`SkirtFront1_02` 里 **Front 后面的数字才是段号**
    （0 在腰、2 在下摆），`_02` 是裙子周向的第几片。按后缀分段是错的，
    等于把第一段的方向套给整条裙子。

    段必须从腰往下依次摆：裙骨是父子链，先摆下段的话上段一转就把它带跑。
    """
    plan = {
        "Front": ((0.00, -0.86, -0.51), (0.00, -0.92, -0.39), (0.00, -0.62, -0.78)),
        "Side":  ((0.44, -0.52, -0.73), (0.34, -0.38, -0.86), (0.20, -0.22, -0.95)),
        "Back":  ((0.08,  0.22, -0.97), (0.04,  0.11, -0.99), (0.00,  0.04, -1.00)),
    }
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode='POSE')

    bones = []
    for pb in arm.pose.bones:
        n = pb.name
        if "Skirt" not in n or n.endswith("_end"):
            continue
        for kind in ("Front", "Side", "Back"):
            i = n.find(kind)
            if i < 0:
                continue
            digit = n[i + len(kind):i + len(kind) + 1]
            if digit.isdigit():
                bones.append((int(digit), n, kind))
            break

    for seg, n, kind in sorted(bones):
        sx = 1 if "_L_" in n else -1
        dx, dy, dz = plan[kind][min(seg, 2)]
        aim(arm, n, (dx * sx * spread, dy, dz))

    bpy.ops.object.mode_set(mode='OBJECT')
    print(f"POSE 裙摆 {len(bones)} 根")


def ground(arm, floor=0.0):
    """把整个人抬到鞋底刚好贴地。

    坐高是拍脑袋给的，而她的腿长和那双厚底鞋是模型定死的——两者对不上时
    小腿垂下来就会穿到地板下面（实测鞋底在 −0.16 米）。与其反复试坐高，
    不如摆完姿势之后量一次最低点再整体平移，换姿势、换鞋都不用重调。
    """
    dg = bpy.context.evaluated_depsgraph_get()
    low = None
    for o in bpy.context.scene.objects:
        if o.type != 'MESH' or not o.material_slots:
            continue
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        for v in me.vertices:
            z = (ev.matrix_world @ v.co).z
            if low is None or z < low:
                low = z
        ev.to_mesh_clear()
    if low is not None:
        arm.location.z += floor - low
        bpy.context.view_layer.update()
    return low


def seated(arm, lean=0.07, head_down=0.12, hands="desk", sit=False, seat_h=0.50,
           legs="together", scene=None, press=0.0, side_first="L"):
    """伏案坐姿。`sit=True` 时连同下半身一起摆（3D 场景需要）。

    `hands="keys"` 是手伸到键盘上打字，需要传 `scene`（要拿相机反投影）。
    """
    if sit:
        sit_down(arm, seat_h, legs)
        drape_skirt(arm)     # 必须在腿摆完之后铺，否则布还停在旧腿形上
        ground(arm)          # 再把整个人落到地面上
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode='POSE')

    # 上身：微微前倾，像在看桌面
    aim(arm, "J_Bip_C_Spine",      (0, -lean * 0.5, 1))
    aim(arm, "J_Bip_C_Chest",      (0, -lean, 1))
    aim(arm, "J_Bip_C_UpperChest", (0, -lean, 1))
    aim(arm, "J_Bip_C_Neck",       (0, -lean * 0.6, 1))
    aim(arm, "J_Bip_C_Head",       (0, -head_down, 1))

    # 肩：从 T-pose 往下收一点
    aim(arm, "J_Bip_L_Shoulder", ( 1, 0, -0.15))
    aim(arm, "J_Bip_R_Shoulder", (-1, 0, -0.15))

    # 大臂几乎垂直下垂：横向分量稍大一点，肘部就会被推到肩宽之外，
    # 小臂再往前伸，手最后落在身体两侧像稻草人。
    aim(arm, "J_Bip_L_UpperArm", ( 0.16, -0.06, -1))
    aim(arm, "J_Bip_R_UpperArm", (-0.16, -0.06, -1))
    # 小臂往前下方压：太接近水平的话两只手会在胸前糊成一团，
    # 压下去手就落到桌面线以下，被桌沿自然挡住。
    aim(arm, "J_Bip_L_LowerArm", (-0.30, -0.82, -0.50))
    aim(arm, "J_Bip_R_LowerArm", ( 0.30, -0.82, -0.50))

    if hands == "keys" and scene is not None:
        type_hands(arm, scene, press=press, side_first=side_first)
    elif hands == "desk":
        aim(arm, "J_Bip_L_Hand", (-0.24, -0.90, -0.36), prefer="Middle")
        aim(arm, "J_Bip_R_Hand", ( 0.24, -0.90, -0.36), prefer="Middle")
        curl(arm, "L", 0.30); curl(arm, "R", 0.30)

    bpy.ops.object.mode_set(mode='OBJECT')


def roll(arm, name, radians, prefer=None):
    """绕骨骼自身的指向轴拧一下（小臂的旋前/旋后就是这个）。

    `aim` 只管"指向哪"，绕那根轴转多少是它算出来的副产品——
    相机在她左前方，于是右手正好侧对镜头，看着像一根手指而不是一只手。
    这一下就是把手背转向镜头。
    """
    from mathutils import Quaternion
    pb = arm.pose.bones.get(name)
    if pb is None:
        return
    axis = _limb_dir(pb, prefer)
    if axis.length < 1e-6:
        return
    m = pb.matrix.copy()
    loc = m.translation.copy()
    m = Quaternion(axis.normalized(), radians).to_matrix().to_4x4() @ m
    m.translation = loc
    pb.matrix = m
    bpy.context.view_layer.update()


def screen_point(scene, u, v, dist):
    """画面坐标 `(u, v)` 上、距相机 `dist` 米处的那个世界点。

    `u`/`v` 是 0…1 的画布坐标，**v 向下为正**（和贴片清单一致，
    不是 Blender 视图那套向上为正）。

    为什么需要它：桌子和键盘只存在于 2D 重绘图里，3D 场景里什么都没有。
    想让手落在键盘上，唯一有意义的参照就是画面坐标——和 `place_hip`
    定位胯部是同一个道理（第 6 条）。
    """
    cam = scene.camera
    f, sw = cam.data.lens, cam.data.sensor_width
    rx, ry = scene.render.resolution_x, scene.render.resolution_y
    d = Vector(((u - 0.5) * sw, (0.5 - v) * sw * ry / rx, -f)).normalized()
    return cam.matrix_world.translation + (cam.matrix_world.to_3x3() @ d) * dist


def reach(arm, side, target, pole):
    """两段 IK：把手腕送到 `target`。`pole` 决定肘往哪边拐。

    解析解，不用 IK 约束——约束要建空物体、还得等依赖图，
    而这里两段链的解就是个余弦定理，二十行写完还能精确落点。

    先摆大臂再摆小臂：`aim` 摆完大臂会刷新依赖图，肘的位置正好落到
    解出来的 E 上，这时候小臂指向 `target − E` 就把手腕送到位了。
    """
    def head(name):
        return arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_{name}"].head

    S = head("UpperArm")
    a = (head("LowerArm") - S).length          # 大臂长
    b = (head("Hand") - head("LowerArm")).length  # 小臂长

    v = Vector(target) - S
    d = min(max(v.length, abs(a - b) + 1e-4), a + b - 1e-4)   # 够不着就伸直
    n = v.normalized()
    # 肘的方向：把 pole 投影到垂直于 n 的平面上
    p = Vector(pole) - S
    p -= n * p.dot(n)
    if p.length < 1e-6:
        p = Vector((0, 0, -1))
    p.normalize()

    cos_a = max(-1.0, min(1.0, (a * a + d * d - b * b) / (2 * a * d)))
    import math
    ang = math.acos(cos_a)
    E = S + a * (math.cos(ang) * n + math.sin(ang) * p)

    aim(arm, f"J_Bip_{side}_UpperArm", E - S)
    aim(arm, f"J_Bip_{side}_LowerArm", Vector(target) - head("LowerArm"))


# 手腕在键盘上的落点，画布坐标（0…1）。
#
# 键盘在成品图里是 x 630–880、y 605–665。**放的是手腕不是指尖**，
# 手指还要往前伸出去一截——按 0.622（键盘正中）摆，手指会挂到键盘前沿外面，
# 看着像两只手悬在桌子外。手腕要抬到键盘**后沿**上，指尖才落在键上。
KEYS = {
    "R": (0.452, 0.600),      # 她的右手在画面左边
    "L": (0.537, 0.604),
}
# 手离相机多远。她的身体在 2.45–2.6，手要明显更靠前才像"伸到桌面上"。
# 但受手臂长度限制（总长 0.43 米）：太靠前就够不着，IK 会夹到伸直，
# 落点反而偏掉。
#
# **2.40 是错的**（第一版用过）：那让手腕正好落在桌沿上（画面 y≈602），
# 小臂整段都在桌沿**后面**，于是袖子悬在桌沿上方的空当里、被桌板一刀切平，
# 桌上只剩两只没有来路的手——看着就是穿模。
# 2.26 把手腕推到桌沿**前面**（画面 y≈616、深度 2.25，肘还在 y≈555），
# 小臂就真的搭到桌面上了，接得上。需要伸 0.392 米，比臂长 0.43 富余。
KEYS_DIST = 2.26
# 手背的朝向。她面朝 −Y，打字时手指也指向 −Y（她的正前方）。
# 往下压太多手指就竖着挂到键盘前沿外面，压太少又像悬空。
# 拉了一条梯度逐个看，(−0.95, −0.30) 这一档手正好摊在键上。
HAND_DIR = (0.08, -0.95, -0.30)
# 手背绕小臂轴拧多少（弧度），左右相反。见 `roll`。
HAND_ROLL = 0.85
# 打字时上身前倾多少。比常态（0.07）多一点，够得着键盘，看着也更像在做事。
TYPING_LEAN = 0.30


def type_hands(arm, scene, press=0.0, side_first="L"):
    """手伸到键盘上打字。

    `press` 0…1 是"按下去"的程度，`side_first` 是这一帧哪只手在按。
    **两只手交替按**比一起上下更像打字，而且在这个尺寸下动静更明显——
    手在画面上只有四十来像素宽，手指自己弯那点位移基本看不见。
    """
    for side in ("L", "R"):
        u, v = KEYS[side]
        down = press if side == side_first else press * 0.25
        # 按下去就是手腕沉一点。手指弯曲那点变化在这个尺寸下看不出来，
        # 真正读得出来的是整只手的上下位移。
        target = screen_point(scene, u, v + down * 0.006, KEYS_DIST)
        # 肘往身体外侧、略靠下拐，和真人打字一样
        sx = 1 if side == "L" else -1
        pole = target + Vector((sx * 0.6, 0.25, -0.5))
        reach(arm, side, target, pole)
        # 手背朝上、指尖朝前下方，压在键上
        aim(arm, f"J_Bip_{side}_Hand",
            (sx * HAND_DIR[0], HAND_DIR[1], HAND_DIR[2]), prefer="Middle")
        # 再把手背拧向镜头。相机在她左前方，不拧的话右手侧对镜头，
        # 看着像一根手指戳下去而不是一只手。两只手拧的方向相反。
        roll(arm, f"J_Bip_{side}_Hand", sx * HAND_ROLL, prefer="Middle")
        curl(arm, side, 0.42 + down * 0.30)


# 打字循环的帧。0 号是"手放在键上不动"，也是不打字时用的那一张。
# 两只手交替按，比一起上下更像打字，在这个尺寸下动静也更明显。
TYPING_FRAMES = [(0.0, "L"), (1.0, "L"), (0.0, "R"), (1.0, "R")]


def settle(scene, arm, legs=None, lean=None, press=0.0, side_first="L"):
    """摆好整个人：坐姿 → 落位 → 手放到键盘上。

    **这三步的顺序不能颠倒。** 手是按画面坐标放的（见 `screen_point`），
    而 `place_hip` 会把整个骨架上下平移——先摆手再落位，手会被一起挪走。
    第一次就是这么错的：手腕在画面上差了七十多像素，怎么调参数都对不上。
    """
    import snozzy_lib as S
    seated(arm, sit=True, legs=HUB if legs is None else legs,
           lean=TYPING_LEAN if lean is None else lean)
    S.place_hip(scene, arm)
    type_hands(arm, scene, press=press, side_first=side_first)


def curl(arm, side, amount):
    """手指自然弯曲。amount 0 = 摊平，1 = 握拳。"""
    for f in ("Index", "Middle", "Ring", "Little"):
        for i, seg in enumerate((1, 2, 3)):
            pb = arm.pose.bones.get(f"J_Bip_{side}_{f}{seg}")
            if pb is None:
                continue
            pb.rotation_mode = 'XYZ'
            # 指节沿自身 Z 轴弯曲，越靠指尖弯得越多
            pb.rotation_euler[0] = -amount * (0.6 + 0.25 * i)
    bpy.context.view_layer.update()

"""摆姿势。

骨骼的局部旋转轴在 VRM 里没有统一约定，直接写欧拉角基本靠猜。
所以这里统一用「把骨骼指向某个世界方向」来表达姿势——
设 `pose_bone.matrix` 让 Blender 自己处理父子链，
每根之后刷新一次依赖图，否则子骨骼拿到的还是旧的父变换。
"""
import bpy
from mathutils import Matrix, Vector

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
           legs="together"):
    """伏案坐姿。`sit=True` 时连同下半身一起摆（3D 场景需要）。

    手只摆成"搭在桌上"。放到键盘上是 `settle` 的事——那一步得先落位
    （`place_hip`）再摆手，顺序不能颠倒（第 27 条），塞进这里就错了。
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

    if hands == "desk":
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
    "R": (0.452, 0.575),      # 她的右手在画面左边
    "L": (0.537, 0.579),
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
KEYS_DIST = 2.30
# 手背的朝向（键盘坐标系，第一个分量左右镜像）。
# 她面朝 −Y，打字时手指也指向 −Y。第三个分量是俯角：
# 往下压太多手指就竖着扎进键盘，压太少又像悬空。
#
# **左右分开写，而且这才是该分开的地方**（第 43 条）。键盘在她左边，
# 右手要横过身体中线去够——真人这时候是**手腕转一点、手指朝内**，
# 而不是把肘拐进胸口。右掌横向分量加到 0.46、俯角从 −0.24 收到 −0.12，
# 是为了跟略向上的小臂同向；否则光纵向方向差就白白制造近 20° 腕折。
HAND_DIR = {"L": (0.08, -0.96, -0.12), "R": (-0.46, -0.95, -0.12)}
# 手背绕小臂轴拧多少（弧度），左右相反（见 `roll` 和第 30 条）。
#
# 这一拧**不改变腕角、也不改变小臂的投影长度**（它绕的就是手掌自己的轴），
# 所以它是一个**白送的杠杆**，专门用来把四根指尖调平：肘一动手掌的平面
# 就跟着倾，指尖会一头高一头低。左右手的肘现在是分开摆的（`ELBOW_POLE`），
# 倾的方向正好相反，所以这里也得左右分开写。
# 实测：只调这个数，两只手的指尖高度差都能从 20 毫米压到 5 毫米。
# 右边这个数是跟着 `ELBOW_POLE["R"]` 走的——肘一外张，手掌跟着倾，
# 小指指尖翘到键面上方 9 毫米（画面上七八个像素，看着像翘着小拇指）。
# 收到 0.70 就回到 ±3 毫米以内，而腕角一动没动（30.4° 前后一致），
# 这正是"白送的杠杆"该有的样子。
HAND_ROLL = {"L": 0.45, "R": 0.70}
# 手腕比键帽高多少（米）。手掌是从手腕往前下方伸出去的，
# 抬太高手就悬在键盘上方，太低手腕会陷进键帽里。
#
# **0.030 是错的**：配 −0.30 的俯角，指尖落到键面**以下 23 毫米**——
# 键帽才 8 毫米高，等于整只手扎进键盘里，从前沿那一排漏出来，
# 看着就是"手指头超出键盘"。新姿态把俯角收平后腕高改为 0.038，
# 再用更深的指节弯曲补回键面接触，四根指尖仍在键面上下约 5 毫米。
WRIST_LIFT = 0.038
# 键盘模式下手指弯多少。比"手放桌上"要弯不少——打字的手是拱起来的，
# 手指伸直会又长又平，指尖直接戳到键盘外沿去。
# 和 `keyboard.home_row` 的 `back`、`WRIST_LIFT` 一起决定手落不落得进键盘。
# 判据用 `measure_hands.py` 量，别拿眼睛看。
KEY_CURL = 1.16
# 四指本身带一点摊开的静置外形。键盘姿势可在近端指节的局部 Z 轴上反向
# 收拢；数值来自同构图候选，不靠轴名猜方向。
KEY_FINGER_SPLAY = {"Index": -0.136, "Middle": -0.043,
                    "Ring": 0.051, "Little": 0.145}
# 按下去那一帧：手腕沉多少米、手指多弯多少。
# 两个加起来就是指尖的行程，**行程要落在键面附近**——抬起的那一帧指尖
# 刚好点在键上，按下的那一帧压进去几毫米，才是"敲键盘"。
# 原来是 0.010 + 0.30，指尖一路沉到键帽底下两厘米，等于手插进键盘里。
PRESS_DROP = 0.0025
PRESS_CURL = 0.06
# 肘往哪边拐（键盘坐标系，第一个分量左右镜像）。
# 手肘是弯的，所以**肘的位置就决定了小臂的朝向**——手掌的朝向是键盘定死的，
# 两者差多少就是腕扭多少。臂长和落点定下之后，肘只能在一个圆上跑，
# 这三个数就是在那个圆上挑一个点。是这一组里最省的一个杠杆：
# 不动键盘、不动手，光挪肘就能把腕角削掉十几度。
#
# **别拿肘去补偿"右手要横过身体去够"**（第 43 条）。让右肘**往内**拐确实能
# 把右腕压下来，但肘会缩到肩膀内侧 6 厘米、鼓在胸口，人不是那样打字的。
# 右手那笔账由 `HAND_DIR["R"]` 去还。
#
# 左右分开写，但**分的是往外张多少，不是往哪边张**——两只肘都在身侧。
# 键盘在她左边，两条胳膊的活儿本来就不一样：左手往外够，肘自然就外张了
# （大臂偏离垂直 34°，已经顶到 36° 那条硬线）；右手横过身体去够，
# 肘反而被带得很正（19°），于是小臂几乎指着镜头，投影只剩 17 像素——
# 画面上就是一截圆滚滚的袖子后面冒出一只手，没有胳膊（第 41 条）。
# 右肘那边还有余量，张到 1.4：大臂 30°（真人 15–30 的上沿）、投影 39 像素，
# 和左手的 35 对上了。**镜像着调是没用的**，实测左右一起张，
# 左臂立刻 38° 出线，而右臂才 23°。
#
# 第三个分量（肘的高低）**不要拿来调画面**（第 42 条）。抬肘确实能把小臂
# 在画面上拉长（+0.2 时投影 95/105），但那是靠**把大臂张开到 60 多度、
# 肘抬到和肩齐平**换来的——人做不出那个姿势，画面上就是肩膀鼓出一大坨。
# 肘必须压在身侧：候选把 pole 压到 −4，最终肘在肩下约 21 厘米。
# 小臂投影三四十像素是**这个机位的正常结果**，真人正面拍打字也是这样；
# 低到十几像素才是毛病。别去最大化它。
ELBOW_POLE = {"L": (0.45, 0.30, -4.0), "R": (0.60, 0.30, -4.0)}
# 打字时上身前倾多少。比常态（0.07）多一点，够得着键盘，看着也更像在做事。
TYPING_LEAN = 0.30


def type_hands(arm, scene, press=0.0, side_first="L", on_keyboard=False):
    """手伸到键盘上打字。

    `press` 0…1 是"按下去"的程度，`side_first` 是这一帧哪只手在按。
    **两只手交替按**比一起上下更像打字，而且在这个尺寸下动静更明显——
    手在画面上只有四十来像素宽，手指自己弯那点位移基本看不见。
    """
    from mathutils import Matrix
    for side in ("L", "R"):
        down = press if side == side_first else press * 0.25
        sx = 1 if side == "L" else -1
        # 手的朝向。默认按世界方向给，键盘模式下要**转到键盘的坐标系里**——
        # 键盘是斜放的（`keyboard.YAW`），照世界方向摆手，手就相对键盘拧了
        # 十几度：手指斜着跨过键排、指尖挂到键盘外沿去。
        basis = Matrix.Identity(3)
        if on_keyboard:
            import keyboard as K
            kbd = bpy.data.objects.get("Keyboard")
            if kbd is not None:
                basis = kbd.rotation_euler.to_matrix()
            # 落点问键盘要，不用画面坐标猜。键盘一转一挪，手跟着走。
            target = Vector(K.home_row(side)) + Vector((0, 0, WRIST_LIFT
                                                        - down * PRESS_DROP))
        else:
            u, v = KEYS[side]
            # 按下去就是手腕沉一点。手指弯曲那点变化在这个尺寸下看不出来，
            # 真正读得出来的是整只手的上下位移。
            target = screen_point(scene, u, v + down * 0.006, KEYS_DIST)
        # 肘往身体外侧、略靠下拐，和真人打字一样
        ep = ELBOW_POLE[side] if isinstance(ELBOW_POLE, dict) else ELBOW_POLE
        pole = target + basis @ Vector((sx * ep[0], *ep[1:]))
        reach(arm, side, target, pole)
        # 手背朝上、指尖朝前下方，压在键上
        hd = HAND_DIR[side] if isinstance(HAND_DIR, dict) else HAND_DIR
        aim(arm, f"J_Bip_{side}_Hand",
            basis @ Vector((sx * hd[0], hd[1], hd[2])), prefer="Middle")
        # 再把手背拧向镜头。相机在她左前方，不拧的话右手侧对镜头，
        # 看着像一根手指戳下去而不是一只手。两只手拧的方向相反。
        hr = HAND_ROLL[side] if isinstance(HAND_ROLL, dict) else HAND_ROLL
        roll(arm, f"J_Bip_{side}_Hand", sx * hr, prefer="Middle")
        curl(arm, side,
             (KEY_CURL + down * PRESS_CURL) if on_keyboard else (0.42 + down * 0.30))
        if on_keyboard:
            for finger, angle in KEY_FINGER_SPLAY.items():
                pb = arm.pose.bones.get(f"J_Bip_{side}_{finger}1")
                if pb is not None:
                    pb.rotation_mode = 'XYZ'
                    pb.rotation_euler[2] += sx * angle
            bpy.context.view_layer.update()


# 打字循环的帧。0 号是"手放在键上不动"，也是不打字时用的那一张。
# 两只手交替按，比一起上下更像打字，在这个尺寸下动静也更明显。
TYPING_FRAMES = [(0.0, "L"), (1.0, "L"), (0.0, "R"), (1.0, "R")]


def settle(scene, arm, legs=None, lean=None, press=0.0, side_first="L",
           on_keyboard=True):
    """摆好整个人：坐姿 → 落位 → 手放到键盘上。

    **这三步的顺序不能颠倒。** 手是按画面坐标放的（见 `screen_point`），
    而 `place_hip` 会把整个骨架上下平移——先摆手再落位，手会被一起挪走。
    第一次就是这么错的：手腕在画面上差了七十多像素，怎么调参数都对不上。
    """
    import snozzy_lib as S
    seated(arm, sit=True, legs=HUB if legs is None else legs,
           lean=TYPING_LEAN if lean is None else lean)
    S.place_hip(scene, arm)
    if on_keyboard and "Keyboard" not in bpy.data.objects:
        # 手的落点是问键盘要的，所以键盘得先在场景里。
        # **默认不渲染它**——只有 `render_hands.py` 那一层才画键盘，
        # 角色图里再画一遍就重了。但姿势必须共用同一块键盘，
        # 否则角色图里的小臂和手那一层对不上。
        import keyboard as K
        K.build().hide_render = True
    type_hands(arm, scene, press=press, side_first=side_first,
               on_keyboard=on_keyboard)


# 托腮：肘撑在桌上、掌根托住下颌、头往手那边微倾。近景切换的时候摆这一套。
#
# **脊柱一根都不许动**：缝线以下的腿图是另外渲的，脊柱一动上下半身就对不上。
#
# **头可以动，但只在这一套里**。旧版连头也锁死（面部贴片存的是画布上固定
# 矩形里的像素，头一转贴片就贴到脸外面，第 7/22 条），结果手悬在脸侧、
# 头笔直，读不出托腮。现在近景是独立一整套素材（2× base / 8 帧 / 终态 /
# 耳机 / 手层），终态的面部贴片（facechin2x）在**倾斜后的头**上重渲，
# 矩形跟着脸走；过渡帧期间运行时把贴片淡出（脸在转，贴不上）。
# 马尾跟着头摆，但缝线（y=611）以下那一段被桌面层完全盖住（实测 alpha
# 全 255），不会破坏缝线合同。耳机是骨骼绑在头上的，自动跟着倾。
#
# 用**她的左手**（画面右侧那只）。相机在她左前方，左手是近侧的那只，
# 抬起来看得清；右手抬起来会被头挡掉一半。
CHIN_SIDE = "L"
# 头往手那侧歪多少（弧度）。歪头是"托腮"最重要的信号——手托着头，头就该
# 把一部分重量交给手。8° 上下：再大脖子像折了，再小读不出来。
# 脖子和头分摊（35/65），只歪头骨会像木偶。
CHIN_HEAD_ROLL = 0.12
# 微微低头凑向手。配合镜头推近，是"凑近看你"而不是"僵着被放大"。
CHIN_HEAD_PITCH = 0.03
# 手腕落在哪（世界坐标，相对头骨 J_Bip_C_Head 的偏移）。
#
# 这个机位下横向 535 像素/米、纵向 550 像素/米，头骨在画布 (818, 401)。
# 手要贴的不再是"贴片矩形反推出来的空地"——贴片现在跟着倾斜后的头重渲，
# 约束反过来了：先把手放到**画面上读得出接触**的位置（指节压着颊线、
# 掌根托着下颌），再由 `measure_chin.py` 用形态键找出倾头后真实的眼嘴
# 区域，验手没有探进去。
#
# 旧版 (0.048, -0.068, -0.104) 是"躲贴片"躲出来的：横向让到 0.048，
# 画面上手悬在脸侧一指宽的空隙外，用户一眼看穿"根本没接触"。
CHIN_WRIST = (0.056, -0.068, -0.112)
# 指节轴沿脸颊斜上方。横向分量比旧版收进来，手指才躺在颊线上
# 而不是斜着支出去。
CHIN_HAND_DIR = (0.50, -0.08, 0.82)
# 掌面略朝镜头，虎口和掌根都能读出来。
CHIN_HAND_ROLL = -0.12
# 四指由轻到重递进弯曲：食指最直、贴着颊线，小指收得最拢。
# 单一全局 curl 出来的是"握拳抵着脸"，这种递进才是插画里的托腮手。
CHIN_FINGER_CURL = {"Index": 0.24, "Middle": 0.48, "Ring": 0.78, "Little": 1.04}
# VRM 的指节局部 Z 轴是这个机位里可见的横向展开轴。只转第一节，后两节
# 继续保留弯曲；四指因此是有层次的扇形，而不是僵直叉开。
CHIN_FINGER_SPLAY = {"Index": .20, "Middle": .05, "Ring": -.06, "Little": -.16}
# 拇指沿下颌另一侧收进去。不收的话拇指按静置姿势直挺挺支着，像比着手枪。
CHIN_THUMB = -0.24
# 肘往哪拐（世界方向）。**肘要尽量往下压**，理由不是解剖而是层序：
#
# 桌面层画在角色**之上**（不然挡不住她的下半身），所以肘只要落到画上去的
# 桌沿以下，就自动被桌子盖住，画面上读到的是"小臂从桌子后面立起来"——
# 也就是肘撑在桌上。露在桌沿上方的话就成了"举着手"。
#
# **但肘够不到桌面，这是几何决定的，别去试参数**：肩在 z=0.981、
# 桌面在 0.725，差 0.256，而大臂只有 0.224 米。要真把肘放到桌上只能让
# 躯干前倾——而脊柱一动，上半身那张图就和所有腿帧对不上了（见上面那段）。
# 所以这里求的是**够得到的最低点**，再由 `measure_chin.py` 检查
# 那个最低点在画布上有没有低到桌沿以下。
#
# 第一、二个分量只是让肘别贴着身侧：往外一点，小臂才有个立起来的角度。
CHIN_ELBOW = (0.22, -0.16, -1.0)


def _rotate_world(arm, name, axis, radians):
    """绕世界方向的轴、以骨骼自己的头部为支点转一下。歪头用。"""
    pb = arm.pose.bones.get(name)
    if pb is None:
        return
    m = pb.matrix.copy()
    loc = m.translation.copy()
    m = Matrix.Rotation(radians, 4, Vector(axis).normalized()) @ m
    m.translation = loc
    pb.matrix = m
    bpy.context.view_layer.update()


def _eased_phase(amount, start, end):
    """A deterministic eased phase in a long-action timeline.

    Shared by `chin_rest` and `stretch`: both need "this bone group starts
    here and arrives there", so the joints do not all land on the same frame
    (that reads as a pose switch rather than a movement).

    The arm leaves the keyboard first, the fingers shape while the wrist is
    already in flight, and the head follows last.  The final two percent is
    deliberately reserved for a short settling movement instead of letting
    every bone arrive at the same instant (which reads like a pose switch).
    """
    if amount <= start:
        return 0.0
    if amount >= end:
        return 1.0
    x = (amount - start) / (end - start)
    return x * x * (3.0 - 2.0 * x)


def chin_rest(arm, scene, side=CHIN_SIDE, amount=1.0):
    """一条胳膊抬起来托住下颌，头往手那边微倾。**在 `settle` 之后调**。

    动的是这条胳膊（肩、肘、腕、手指）加脖子和头。脊柱、另一条胳膊、腿
    保持 `settle` 摆好的样子——缝线合同还在。头为什么现在能动，
    见 `CHIN_SIDE` 上面那段注释。

    肘的位置不用试：落点和臂长定死之后肘只能在一个圆上跑（第 37 条），
    而我们要的是那个圆上**最低**的点。把想要的方向投影到垂直于
    「肩→腕」的平面上就直接得到了，不用二分。
    """
    # 抬手不能靠两张位图淡入：那会在中途同时看见两条胳膊。这里先算出完整的
    # 托腮姿势，再在**骨骼的局部变换**之间插值。运行时只需播放离线渲好的
    # 中间帧，就是真动作而不是溶解。矩阵分解后对旋转做 slerp，手腕走的是
    # 自然圆弧；直接逐元素混矩阵会把骨骼缩短、手指也会发软。
    # 头也在插值列表里，于是歪头和抬手同一条时间轴、同一个 smoothstep。
    amount = max(0.0, min(1.0, float(amount)))
    moving = [
        "J_Bip_C_Neck", "J_Bip_C_Head",
        f"J_Bip_{side}_UpperArm", f"J_Bip_{side}_LowerArm",
        f"J_Bip_{side}_Hand",
    ] + [
        f"J_Bip_{side}_{finger}{seg}"
        for finger in ("Thumb", "Index", "Middle", "Ring", "Little")
        for seg in (1, 2, 3)
    ]
    moving = [arm.pose.bones[n] for n in moving if n in arm.pose.bones]
    start = {pb.name: pb.matrix_basis.copy() for pb in moving}
    sx = 1 if side == "L" else -1

    # 先歪头再摆手：手的落点是相对头骨给的，头歪完下颌才在最终位置上，
    # 手直接追着倾斜后的脸放，不用二次补偿。
    # 绕 +Y（她的前后轴）转，正角把头顶往 +X（她的左手边）压——正好是
    # 抬手那一侧。脖子和头分摊，只转头骨会像木偶折颈。
    for bone, share in (("J_Bip_C_Neck", 0.35), ("J_Bip_C_Head", 0.65)):
        _rotate_world(arm, bone, (0, 1, 0), sx * CHIN_HEAD_ROLL * share)
        _rotate_world(arm, bone, (1, 0, 0), CHIN_HEAD_PITCH * share)

    head = arm.matrix_world @ arm.pose.bones["J_Bip_C_Head"].head
    target = head + Vector((sx * CHIN_WRIST[0], CHIN_WRIST[1], CHIN_WRIST[2]))

    shoulder = arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_UpperArm"].head
    n = (target - shoulder).normalized()
    d = Vector((sx * CHIN_ELBOW[0], CHIN_ELBOW[1], CHIN_ELBOW[2])).normalized()
    # 投影到肘能跑的那个圆所在的平面上。`reach` 自己也会投一次，
    # 这里先投是为了把 pole 放得足够远——离得近的话 pole 点本身的位置
    # 也会影响投影方向，那就不是"纯粹给个方向"了。
    p = d - n * d.dot(n)
    if p.length < 1e-6:
        p = Vector((0, 0, -1))
    reach(arm, side, target, target + p.normalized())
    aim(arm, f"J_Bip_{side}_Hand",
        Vector((sx * CHIN_HAND_DIR[0], CHIN_HAND_DIR[1], CHIN_HAND_DIR[2])),
        prefer="Middle")
    roll(arm, f"J_Bip_{side}_Hand", sx * CHIN_HAND_ROLL, prefer="Middle")
    for finger, amt in CHIN_FINGER_CURL.items():
        for i, seg in enumerate((1, 2, 3)):
            pb = arm.pose.bones.get(f"J_Bip_{side}_{finger}{seg}")
            if pb is None:
                continue
            pb.rotation_mode = 'XYZ'
            # 赋值不叠加：终态几何不继承打字姿势的指弯，打字参数一改
            # 托腮的手不能跟着变（插值起点仍是上面捕获的键盘矩阵）。
            pb.rotation_euler[0] = -amt * (0.6 + 0.25 * i)
    for finger, angle in CHIN_FINGER_SPLAY.items():
        pb = arm.pose.bones.get(f"J_Bip_{side}_{finger}1")
        if pb is not None:
            pb.rotation_mode = 'XYZ'
            pb.rotation_euler[2] = sx * angle
    for seg, weight in ((1, 0.65), (2, 0.35)):
        pb = arm.pose.bones.get(f"J_Bip_{side}_Thumb{seg}")
        if pb is not None:
            pb.rotation_mode = 'XYZ'
            pb.rotation_euler[0] = CHIN_THUMB * weight
    bpy.context.view_layer.update()

    # Save the settled target before applying the piecewise timeline.  Bones
    # are grouped by what the viewer reads first; the head is intentionally
    # late so the hand appears to carry the jaw instead of chasing it.
    target = {pb.name: pb.matrix_basis.copy() for pb in moving}
    finger_names = {
        f"J_Bip_{side}_{finger}{seg}"
        for finger in ("Thumb", "Index", "Middle", "Ring", "Little")
        for seg in (1, 2, 3)
    }
    head_names = {"J_Bip_C_Neck", "J_Bip_C_Head"}

    for pb in moving:
        if pb.name in head_names:
            # Start only after the wrist has left the keybed, but spread the
            # 7° roll over the remaining samples so the ponytails do not make
            # one late silhouette spike.
            phase = _eased_phase(amount, 0.18, 0.82)
        elif pb.name in finger_names:
            phase = _eased_phase(amount, 0.16, 0.78)
        else:
            phase = _eased_phase(amount, 0.00, 0.58)
        # Leave 2% of the travel for the final 1–2 mm settling at the jaw.
        settle = _eased_phase(amount, 0.86, 1.00)
        phase = min(1.0, 0.98 * phase + 0.02 * settle)
        a_loc, a_rot, a_scale = start[pb.name].decompose()
        b_loc, b_rot, b_scale = target[pb.name].decompose()
        loc = a_loc.lerp(b_loc, phase)
        rot = a_rot.slerp(b_rot, phase)
        scale = a_scale.lerp(b_scale, phase)
        pb.matrix_basis = Matrix.LocRotScale(loc, rot, scale)
    bpy.context.view_layer.update()

    return (arm.matrix_world
            @ arm.pose.bones[f"J_Bip_{side}_LowerArm"].head).z


# 伸懒腰：两条胳膊举过头顶、胸口往后打开、脸抬起来。
#
# 和托腮共用同一套机制（在骨骼局部变换之间插值 + 分组相位），但约束不同：
#
# - **两条胳膊一起动**，所以桌面那一层里一只手都不该留（第 60 条：那一层的
#   前提是"里面的东西都在桌沿前面"，举起来的胳膊不满足）。只剩键盘。
# - **脊柱和胯一根都不许动**，但**胸可以**。缝线在 y=600，而 `J_Bip_C_Chest`
#   的支点在腰以上——绕它转，缝线那一行的像素一个都不动。判据不是"我觉得
#   不会动"，是 `measure_stretch.py` 逐像素量缝线以下的漂移，必须是 0。
# - 头抬起来了，所以**面部贴片要按这条动作逐帧重出**，和托腮一样
#   （`render_face.py … stretch`）。
STRETCH_SHOULDER = (1.0, 0.0, 0.30)
# 大臂往斜上外方举。X 给太大是"投降"，太小是"举手发言"。
STRETCH_UPPER_ARM = (0.62, -0.02, 0.78)
# 小臂收回来一点，肘保持弯着——完全伸直的胳膊像被吊起来，不像自己在伸。
STRETCH_LOWER_ARM = (0.22, -0.10, 0.97)
STRETCH_HAND = (0.10, -0.16, 0.98)
# 手指松松张开。伸懒腰的手是舒展的，不是握拳，也不是笔直的板。
STRETCH_CURL = 0.30
STRETCH_FINGER_SPLAY = {"Index": .16, "Middle": .05, "Ring": -.06, "Little": -.16}
# 胸、脖子、头各自往后仰多少（弧度，负号是往上抬）。
# 胸给太多会把缝线那一带也带起来——量出来为止，别凭感觉加。
STRETCH_CHEST = -0.10
STRETCH_UPPER_CHEST = -0.12
STRETCH_NECK = -0.10
STRETCH_HEAD = -0.13


def stretch(arm, scene, amount=1.0):
    """伸个懒腰。**在 `settle` 之后调**，用法和 `chin_rest` 一样。

    两条胳膊举过头顶、胸口打开、脸抬起来。`amount` 0…1 是动作进度，
    中间值就是真正的中间姿势（离线渲成帧，运行时播帧，不做位图淡入）。
    """
    amount = max(0.0, min(1.0, float(amount)))
    finger_names = {
        f"J_Bip_{side}_{finger}{seg}"
        for side in ("L", "R")
        for finger in ("Thumb", "Index", "Middle", "Ring", "Little")
        for seg in (1, 2, 3)
    }
    torso_names = ["J_Bip_C_Chest", "J_Bip_C_UpperChest",
                   "J_Bip_C_Neck", "J_Bip_C_Head"]
    arm_names = [f"J_Bip_{side}_{bone}"
                 for side in ("L", "R")
                 for bone in ("Shoulder", "UpperArm", "LowerArm", "Hand")]
    moving = [arm.pose.bones[n]
              for n in torso_names + arm_names + sorted(finger_names)
              if n in arm.pose.bones]
    start = {pb.name: pb.matrix_basis.copy() for pb in moving}

    # 胸口先打开，头跟着仰——顺序无所谓（都是绕自己的支点转），
    # 但**必须在摆胳膊之前**：肩膀挂在胸上，胸一转肩就跟着走了。
    for name, angle in (("J_Bip_C_Chest", STRETCH_CHEST),
                        ("J_Bip_C_UpperChest", STRETCH_UPPER_CHEST),
                        ("J_Bip_C_Neck", STRETCH_NECK),
                        ("J_Bip_C_Head", STRETCH_HEAD)):
        _rotate_world(arm, name, (1, 0, 0), angle)

    for side in ("L", "R"):
        sx = 1 if side == "L" else -1
        for bone, d in (("Shoulder", STRETCH_SHOULDER),
                        ("UpperArm", STRETCH_UPPER_ARM),
                        ("LowerArm", STRETCH_LOWER_ARM)):
            aim(arm, f"J_Bip_{side}_{bone}", (sx * d[0], d[1], d[2]))
        aim(arm, f"J_Bip_{side}_Hand",
            (sx * STRETCH_HAND[0], STRETCH_HAND[1], STRETCH_HAND[2]),
            prefer="Middle")
        curl(arm, side, STRETCH_CURL)
        for finger, angle in STRETCH_FINGER_SPLAY.items():
            pb = arm.pose.bones.get(f"J_Bip_{side}_{finger}1")
            if pb is not None:
                pb.rotation_mode = 'XYZ'
                pb.rotation_euler[2] = sx * angle
    bpy.context.view_layer.update()

    target = {pb.name: pb.matrix_basis.copy() for pb in moving}
    torso_set = set(torso_names)

    # 分组相位：胳膊先走，身体跟上，手指最后舒展开。
    # 全部同时到位的话读起来是"换了个姿势"，不是"伸了个懒腰"。
    #
    # **每一组的区间都要铺满整条时间轴**，只错开起点。第一版给的是
    # (0, 0.72) / (0.12, 0.86) / (0.20, 0.92)，胳膊在第 6 帧就到位了，
    # 后面两帧一动不动——`stretch_frames.py` 的相邻 XOR 峰值比报 3.34
    # （上限 2.5），因为动作全挤在中段、尾巴是三帧重复。
    # 现在这一组算出来 1.34/1.40/1.59，动作从头铺到尾。
    for pb in moving:
        if pb.name in torso_set:
            phase = _eased_phase(amount, 0.06, 1.00)
        elif pb.name in finger_names:
            phase = _eased_phase(amount, 0.14, 1.00)
        else:
            phase = _eased_phase(amount, 0.00, 0.96)
        a_loc, a_rot, a_scale = start[pb.name].decompose()
        b_loc, b_rot, b_scale = target[pb.name].decompose()
        pb.matrix_basis = Matrix.LocRotScale(a_loc.lerp(b_loc, phase),
                                             a_rot.slerp(b_rot, phase),
                                             a_scale.lerp(b_scale, phase))
    bpy.context.view_layer.update()


# 每根手指各弯多少，无名指和小指要多弯一点。
# 四根手指长短不一，同一个弯曲量下短的那两根的指尖会**停在高处**——
# 实测小指指尖比食指高 14 毫米，画面上十来个像素，看着像翘着小拇指。
# 手掌本来就是拱的，多弯一点才落到同一个键面上。
FINGER_CURL = {"Index": 1.00, "Middle": 1.00, "Ring": 1.12, "Little": 1.24}


def curl(arm, side, amount):
    """手指自然弯曲。amount 0 = 摊平，1 = 握拳。"""
    for f, k in FINGER_CURL.items():
        for i, seg in enumerate((1, 2, 3)):
            pb = arm.pose.bones.get(f"J_Bip_{side}_{f}{seg}")
            if pb is None:
                continue
            pb.rotation_mode = 'XYZ'
            # 指节沿自身 Z 轴弯曲，越靠指尖弯得越多
            pb.rotation_euler[0] = -amount * k * (0.6 + 0.25 * i)
    bpy.context.view_layer.update()

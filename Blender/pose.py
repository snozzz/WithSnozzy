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
# 方向都是「大腿 / 小腿 / 脚」三段的世界朝向，sx 是左右镜像。
# 小腿一律带一点**向后**的分量，脚收到椅子下面。
# 这既是坐着的自然姿势，也解决一个取景问题：脚比躯干更靠近镜头，
# 而画幅下边界在近处更高——脚往后收，离镜头远了，才落得进画面。
LEG_STYLES = {
    "together": (( 0.14, -1.00, -0.10), ( 0.06,  0.78, -0.63), ( 0.05, -0.62, -0.60)),
    "apart":    (( 0.30, -0.96, -0.10), ( 0.22,  0.80, -0.56), ( 0.16, -0.58, -0.64)),
    "tucked":   (( 0.14, -1.00, -0.10), ( 0.10,  0.90, -0.42), ( 0.08, -0.20, -0.96)),
}


def cross_legs(arm, over="L"):
    """二郎腿。`over` 是压在上面的那条腿。

    交叉腿会把上面那条大腿横过身体中线，小腿再垂下去并略微外摆。
    裙摆得在腿摆完之后再铺，否则布还停在旧的腿形上。
    """
    under = "R" if over == "L" else "L"
    sx = 1 if over == "L" else -1
    aim(arm, f"J_Bip_{over}_UpperLeg", (-sx * 0.40, -0.90, -0.16))
    aim(arm, f"J_Bip_{over}_LowerLeg", ( sx * 0.34,  0.70, -0.62))
    aim(arm, f"J_Bip_{over}_Foot",     ( sx * 0.20, -0.62, -0.76))
    ux = 1 if under == "L" else -1
    aim(arm, f"J_Bip_{under}_UpperLeg", (ux * 0.18, -1.00, -0.08))
    aim(arm, f"J_Bip_{under}_LowerLeg", (ux * 0.08,  0.76, -0.64))
    aim(arm, f"J_Bip_{under}_Foot",     (ux * 0.06, -0.90, -0.20))


def sit_down(arm, seat_h=0.50, legs="together"):
    """把整个人放到椅子高度上，并弯起腿。

    VRoid 模型静置是**站姿**，只摆上半身的话她会立在桌子后面而不是坐着。
    先把骨架整体下移到坐高，再把大腿折向前、小腿垂下去。
    腿基本会被桌子挡住，但不折的话会从桌板底下穿出来。
    """
    hips = arm.pose.bones.get("J_Bip_C_Hips")
    if hips is not None:
        cur = (arm.matrix_world @ hips.head).z
        arm.location.z += seat_h - cur

    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode='POSE')
    if legs in ("crossL", "crossR"):
        cross_legs(arm, over="L" if legs == "crossL" else "R")
    else:
        thigh, shin, foot = LEG_STYLES.get(legs, LEG_STYLES["together"])
        for side, sx in (("L", 1), ("R", -1)):
            # tucked 只收一条腿，两条都收会变成跪姿
            style = LEG_STYLES["together"] if (legs == "tucked" and side == "L") else (thigh, shin, foot)
            for bone, d in zip(("UpperLeg", "LowerLeg", "Foot"), style):
                aim(arm, f"J_Bip_{side}_{bone}", (d[0] * sx, d[1], d[2]))
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
        "Front": ((0.00, -0.74, -0.67), (0.00, -0.86, -0.51), (0.00, -0.24, -0.97)),
        "Side":  ((0.52, -0.30, -0.80), (0.40, -0.20, -0.89), (0.24, -0.10, -0.97)),
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
    """伏案坐姿。`sit=True` 时连同下半身一起摆（3D 场景需要）。"""
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

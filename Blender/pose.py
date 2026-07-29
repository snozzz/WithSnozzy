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
    kids = [c for c in pb.children if "J_Bip_" in c.name]
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


def sit_down(arm, seat_h=0.50):
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
    for side, sx in (("L", 1), ("R", -1)):
        aim(arm, f"J_Bip_{side}_UpperLeg", (sx * 0.14, -1, -0.10))
        aim(arm, f"J_Bip_{side}_LowerLeg", (sx * 0.06, -0.08, -1))
        aim(arm, f"J_Bip_{side}_Foot", (sx * 0.05, -0.9, -0.2))
    bpy.ops.object.mode_set(mode='OBJECT')


def seated(arm, lean=0.07, head_down=0.12, hands="desk", sit=False, seat_h=0.50):
    """伏案坐姿。`sit=True` 时连同下半身一起摆（3D 场景需要）。"""
    if sit:
        sit_down(arm, seat_h)
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

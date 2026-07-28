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
    """骨骼在解剖学意义上的指向：本骨骼头部 → 子骨骼头部。

    **不能用骨骼自身的 Y 轴。** glTF 里节点只有变换没有"长度和朝向"，
    Blender 导入时按自己的启发式给骨骼定向，胳膊骨骼的 Y 轴完全可能
    和胳膊本身差着九十度。照着 Y 轴摆姿势，数值上分毫不差，
    渲出来却是稻草人——这个坑吃过一次。
    """
    if prefer:
        c = next((c for c in pb.children if prefer in c.name), None)
        if c:
            return c.head - pb.head
    if pb.children:
        # 取最远的子骨骼：手部有五根手指做子骨骼，取拇指会把方向带偏
        c = max(pb.children, key=lambda c: (c.head - pb.head).length)
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


def seated(arm, lean=0.10, head_down=0.18, hands="desk"):
    """伏案坐姿。

    腿完全不管——房间场景里桌沿从胸口往下全挡住，
    摆了也看不见，还徒增出错的机会。
    """
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

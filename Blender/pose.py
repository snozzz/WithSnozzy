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


def aim(arm, name, direction, roll=None):
    """把骨骼的指向转到 `direction`（世界坐标）。"""
    pb = arm.pose.bones.get(name)
    if pb is None:
        print(f"POSE 缺骨骼 {name}")
        return
    d = Vector(direction).normalized()
    m = pb.matrix.copy()
    loc = m.translation.copy()
    y = Vector(m.col[1][:3]).normalized()
    m = (y.rotation_difference(d).to_matrix().to_4x4() @ m)
    m.translation = loc
    pb.matrix = m
    bpy.context.view_layer.update()
    if roll:
        pb.rotation_mode = 'XYZ'
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

    # 大臂垂下并略微内收，小臂伸向桌面
    aim(arm, "J_Bip_L_UpperArm", ( 0.42, -0.10, -1))
    aim(arm, "J_Bip_R_UpperArm", (-0.42, -0.10, -1))
    aim(arm, "J_Bip_L_LowerArm", ( 0.18, -1, -0.30))
    aim(arm, "J_Bip_R_LowerArm", (-0.18, -1, -0.30))

    if hands == "desk":
        aim(arm, "J_Bip_L_Hand", ( 0.10, -1, -0.12))
        aim(arm, "J_Bip_R_Hand", (-0.10, -1, -0.12))
        curl(arm, "L", 0.35); curl(arm, "R", 0.35)

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
            pb.rotation_euler[2] = (-1 if side == "L" else 1) * amount * (0.6 + 0.25 * i)
    bpy.context.view_layer.update()

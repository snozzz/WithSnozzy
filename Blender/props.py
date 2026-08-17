"""桌上的两件 3D 道具：马克杯和手机。

## 为什么要建 3D，而不是用画上去的那两件

重绘图里桌上本来就画着一个马克杯（画布 993…1063 × 622…690）和一台
立在支架上的手机（1095…1175 × 604…710）。**但她一件都够不着**：
实测臂长 0.430 米，而画上去的杯子距左肩 0.561、手机 0.588
（`/tmp/probe_desk.py` 那一轮，量法见 `measure_props.py`）。
够不着的目标会被 IK 夹到伸直，落点悄悄偏掉（第 27 条）——
拿它们当道具，从第一帧就是错的。

所以和键盘同一条路（第 29 条）：**要什么形状就建什么形状**。
杯子建在她够得着的地方，画上去那个用 `dewatermark.py --fill` 抹掉；
手机则是新添一台平放在键盘后面的——支架上那台留着当场景，
它离得远、也不该是她随手拿起来回消息的那一台。

## 位置怎么定

够不够得着是个球：左肩在 (0.077, −0.096, 0.981)、臂长 0.430。
抓握点取到桌面上方 5.5 厘米，于是桌面上的可达区域是一个半径约 0.30 的圆。
`measure_props.py` 会把这两个数直接报出来，改位置先看它。

- 杯子 (0.28, −0.22)：画布约 (965, 620)，左手 78% 臂长，
  在键盘右缘（世界 x=0.235）之外，也在袖子右缘之外
- 手机 (0.19, −0.29)：画布约 (908, 640)，左手 81% 臂长，
  躺在键盘后面偏左——真人桌上手机就在那儿

两件都在画上去那块大屏右缘（画布 653）的右边很远，不存在第 40 条那条
硬边界的问题。

## 这两件东西画在哪一层

和键盘一样，在**桌面层之上**那一层（`render_hands.py` / 各条动作的手层）。
桌子是盖在角色之上的，画在角色层里会被桌子吃掉。所以角色图（`render_poses`、
各动作的 torso）里 `hide_render = True`，只有手层才画它们。
"""
import bpy
import math

from mathutils import Vector

import keyboard as K

# 两件都往上抬 1.5 毫米。桌板（`keyboard.desk_slab`）在手那一层里是
# **Holdout**，正好落在 z=DESK_Z；道具的底面要是也在这个平面上，
# 手层里就会被它啃掉——手机只有 9 毫米厚，第一版直接整台消失了，
# 而画面上的表现是"手机没建出来"。
LIFT = 0.0015

# ── 杯子 ──────────────────────────────────────────────────────────────
# 桌面上的位置。够得着是硬约束，见文件头。
#
# 位置还有第二条约束，是照着合成图看出来的：**别躲在她袖子后面**。
# 第一版杯子在 (0.20, −0.26)，画布 x≈915，正好被她那只广袖的右缘
# （x≈910）盖掉一大半——3D 里一切正常，判据也全绿，合成出来只剩一牙白边。
# 桌面上"看得见 + 够得着"的带子其实很窄：世界 x 0.23…0.30、y −0.30…−0.18。
# 杯子占那块好地方（它高、是主角），手机平躺、薄，让给它挨着袖子那一侧。
MUG_CENTRE = Vector((0.28, -0.22, K.DESK_Z + LIFT))
MUG_R = 0.040
MUG_H = 0.095
# 把手朝镜头这一侧转，一来看得见把手的形状，二来手从近侧伸过去抓，
# 不用绕到杯子后面（绕过去要多伸七八厘米，直接顶到臂长上限）。
MUG_YAW = math.radians(-60.0)
# 杯身、杯口那圈描边、咖啡液面
MUG_BODY = (0.94, 0.93, 0.90)
MUG_RIM = (0.78, 0.62, 0.44)
MUG_COFFEE = (0.24, 0.13, 0.07)

# ── 手机 ──────────────────────────────────────────────────────────────
PHONE_CENTRE = Vector((0.19, -0.29, K.DESK_Z + LIFT))
PHONE_W, PHONE_L, PHONE_T = 0.071, 0.146, 0.009
# 桌上的东西很少摆得正
PHONE_YAW = math.radians(-14.0)
PHONE_BODY = (0.30, 0.30, 0.36)
PHONE_SCREEN = (0.10, 0.11, 0.16)


def _material(name, color):
    """和 `keyboard._material` 同一个理由：必须是 Principled，
    `snozzy_lib.toon_materials` 只认这个，用 Diffuse 就不跟着走卡通着色。"""
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = next(n for n in mat.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    bsdf.inputs["Base Color"].default_value = (*color, 1)
    return mat


def _join(parts, name):
    bpy.ops.object.select_all(action='DESELECT')
    for o in parts:
        o.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    o = bpy.context.object
    o.name = name
    # **把缩放烘进网格。** join 之后活下来的是第一个物体，它还带着建模时
    # 那个 `scale`（手机机身是 0.071×0.146×0.009）。道具要被手拎起来，
    # 而"拎"这件事是拿 `目标 × 静置位置⁻¹` 求一个刚性变换——静置矩阵里
    # 混着 1/0.009 这种缩放，逆一下整个变换就炸了：实测手机被甩到画布外
    # 几十万像素处。这就是第 34 条那个坑，只是那次是在量的时候撞上的。
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    return o


def build_mug(outline=True):
    """马克杯：杯身 + 杯口那圈 + 把手 + 咖啡液面。已经摆到桌面上。

    液面刻意做在杯口下面一点：平时看不见，一举起来倾斜就露出来，
    "杯子里有东西"这件事不用另外画。
    """
    if "Mug" in bpy.data.objects:
        return bpy.data.objects["Mug"]
    parts = []
    bpy.ops.mesh.primitive_cylinder_add(vertices=24, radius=MUG_R,
                                        depth=MUG_H, location=(0, 0, MUG_H / 2))
    body = bpy.context.object
    body.name = "MugBody"
    body.data.materials.append(_material("MugBody", MUG_BODY))
    parts.append(body)

    # 杯口那圈。杯子只有七十来像素高，没有这道深色的边就是一块白疙瘩
    bpy.ops.mesh.primitive_cylinder_add(vertices=24, radius=MUG_R * 1.04,
                                        depth=MUG_H * 0.05,
                                        location=(0, 0, MUG_H * 0.975))
    rim = bpy.context.object
    rim.name = "MugRim"
    rim.data.materials.append(_material("MugRim", MUG_RIM))
    parts.append(rim)

    # 把手。环面切一半就够——另一半在杯身里面，谁也看不见
    bpy.ops.mesh.primitive_torus_add(
        major_radius=MUG_R * 0.62, minor_radius=MUG_R * 0.14,
        major_segments=16, minor_segments=8,
        location=(MUG_R * 0.92, 0, MUG_H * 0.55),
        rotation=(math.pi / 2, 0, 0))
    handle = bpy.context.object
    handle.name = "MugHandle"
    handle.data.materials.append(_material("MugHandle", MUG_BODY))
    parts.append(handle)

    bpy.ops.mesh.primitive_cylinder_add(vertices=24, radius=MUG_R * 0.93,
                                        depth=MUG_H * 0.02,
                                        location=(0, 0, MUG_H * 0.86))
    coffee = bpy.context.object
    coffee.name = "MugCoffee"
    coffee.data.materials.append(_material("MugCoffee", MUG_COFFEE))
    parts.append(coffee)

    mug = _join(parts, "Mug")
    mug.rotation_mode = 'XYZ'
    mug.rotation_euler = (0, 0, MUG_YAW)
    mug.location = MUG_CENTRE
    if outline:
        import snozzy_lib as S
        S.add_outline([mug], thickness=0.0016, skip=())
    bpy.context.view_layer.update()
    return mug


def build_phone(outline=True):
    """手机：机身 + 屏幕。平放在键盘后面。"""
    if "Phone" in bpy.data.objects:
        return bpy.data.objects["Phone"]
    parts = []
    bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, PHONE_T / 2))
    body = bpy.context.object
    body.name = "PhoneBody"
    body.scale = Vector((PHONE_W, PHONE_L, PHONE_T))
    body.data.materials.append(_material("PhoneBody", PHONE_BODY))
    parts.append(body)

    bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, PHONE_T * 0.98))
    screen = bpy.context.object
    screen.name = "PhoneScreen"
    screen.scale = Vector((PHONE_W * 0.88, PHONE_L * 0.92, PHONE_T * 0.2))
    screen.data.materials.append(_material("PhoneScreen", PHONE_SCREEN))
    parts.append(screen)

    phone = _join(parts, "Phone")
    phone.rotation_mode = 'XYZ'
    phone.rotation_euler = (0, 0, PHONE_YAW)
    phone.location = PHONE_CENTRE
    if outline:
        import snozzy_lib as S
        S.add_outline([phone], thickness=0.0012, skip=())
    bpy.context.view_layer.update()
    return phone


def build(outline=True):
    """两件一起建，返回 (杯子, 手机)。

    **默认不渲染**——和键盘同一个道理：只有手那一层才画它们。
    姿势脚本仍然要把它们建出来，因为抓握点是问道具要的。
    """
    mug = build_mug(outline=outline)
    phone = build_phone(outline=outline)
    return mug, phone


def hide(hidden=True):
    for name in ("Mug", "Phone"):
        o = bpy.data.objects.get(name)
        if o is not None:
            o.hide_render = hidden


# 静置位置是**常量**，不是"道具现在在哪"。
#
# 姿势函数要拿静置矩阵去求"把它搬到嘴边"的刚性变换。第一版是直接读
# `prop.matrix_world`，于是在同一个场景里连着摆两次就错了：第二次读到的
# "静置位置"是上一次留在她手里的位置，算出来的刚性变换≈单位阵，
# 手就停在抓握姿势上不动了。判据里八档 hold 的数字**一模一样**，
# 才把这件事暴露出来——渲染脚本每帧重载场景，反而看不出来。
REST = {
    "Mug": (MUG_CENTRE, (0, 0, MUG_YAW)),
    "Phone": (PHONE_CENTRE, (0, 0, PHONE_YAW)),
}


def rest_matrix(name):
    from mathutils import Euler, Matrix
    loc, rot = REST[name]
    return Matrix.Translation(loc) @ Euler(rot, 'XYZ').to_matrix().to_4x4()


def reset(name=None):
    """把道具放回桌上。姿势函数每次开头都调，保证可重复。"""
    for key in ([name] if name else list(REST)):
        o = bpy.data.objects.get(key)
        if o is not None:
            o.matrix_world = rest_matrix(key)
    bpy.context.view_layer.update()


def mug_grip():
    """杯子的抓握点（世界坐标）：手腕该落在哪。

    从**近侧**握杯身，手腕和杯子差不多高。第一版是"从上方扣下去"
    （手腕在杯口上方 5 厘米），抓的时候很自然，**但那个握法喝不了**：
    杯子挂在手底下，要把杯口送到嘴边，肘就必须抬到肩膀上面去
    ——实测大臂偏离垂直 123°，肘高过肩，画面上是一只鸡翅膀（第 42 条）。

    改成近侧握之后，杯子在手的**前方偏上**，举到嘴边时小臂自然立起来、
    肘垂在身侧，终态大臂只偏 30° 出头。
    """
    return MUG_CENTRE + Vector((0.008, -0.078, MUG_H * 0.46))


def phone_grip():
    """手机的抓握点（世界坐标）。手指从近侧兜住机身下缘。"""
    return PHONE_CENTRE + Vector((0.006, -0.062, 0.052))

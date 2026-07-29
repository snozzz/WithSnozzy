"""给 Snozzy 加一副耳机。

放在 3D 里做而不是画一张 2D 图，是因为**遮挡关系是几何算出来的**：
头发压在头梁上、耳罩盖住耳朵，全自动正确。走 2D 的话，
「戴」和「不戴」两套头发都得重画。

形状是纯程序化的：头梁一段圆环，两侧各一个圆柱耳罩加一圈软垫。
真实耳机本来就是这几个基本形，配上卡通着色够用了。
"""
import bpy
import math
from mathutils import Matrix, Vector


def _material(name, color):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()
    diff = nt.nodes.new("ShaderNodeBsdfDiffuse")
    diff.inputs["Color"].default_value = (*color, 1)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    nt.links.new(diff.outputs[0], out.inputs["Surface"])
    return mat


def head_metrics(meshes):
    """从脸部网格的实际包围盒量出头的位置和尺寸。

    上一版是照着"VRoid 的头大概多大"写死数值 + 用头骨的朝向当上方向，
    结果耳罩飘在脑后。骨骼朝向不可信（和肢体方向能差 90°），
    尺寸更不该猜——量一遍才两行代码。
    """
    face = next((o for o in meshes if o.name.startswith("Face")), None)
    if face is None:
        face = max(meshes, key=lambda o: len(o.data.vertices))
    dg = bpy.context.evaluated_depsgraph_get()
    ev = face.evaluated_get(dg)
    me = ev.to_mesh()
    lo = Vector((1e9,) * 3); hi = Vector((-1e9,) * 3)
    for v in me.vertices:
        w = ev.matrix_world @ v.co
        lo = Vector(map(min, lo, w)); hi = Vector(map(max, hi, w))
    ev.to_mesh_clear()
    return {
        "centre": (lo + hi) / 2,
        "half_w": (hi.x - lo.x) / 2,
        "top": hi.z,
        "depth": (hi.y - lo.y) / 2,
    }


def build(arm, meshes, color=(0.16, 0.15, 0.20), accent=(0.82, 0.55, 0.62),
          head_bone="J_Bip_C_Head", ear_drop=0.26, over_hair=1.20):
    """建好耳机并绑到头骨上。

    `over_hair` 是耳机相对头宽的外扩比例——耳机是戴在头发外面的，
    贴着头骨半径放会整个陷进头发里。
    """
    m = head_metrics(meshes)
    centre, half_w = m["centre"], m["half_w"]
    r = half_w * over_hair
    parts = []

    # 头梁：竖直平面里的一段圆环，跨在头顶
    bpy.ops.mesh.primitive_torus_add(
        major_radius=r * 0.95, minor_radius=half_w * 0.070,
        major_segments=48, minor_segments=12,
        location=centre + Vector((0, m["depth"] * 0.12, half_w * 0.10)))
    band = bpy.context.object
    band.name = "HP_Band"
    band.rotation_euler = (math.radians(90), 0, 0)
    parts.append(band)

    # 耳罩：耳朵大致在头部包围盒中心略偏下
    ear_z = centre.z - half_w * ear_drop
    for side, sx in (("L", 1), ("R", -1)):
        pos = Vector((centre.x + sx * r * 0.92, centre.y + m["depth"] * 0.10, ear_z))

        bpy.ops.mesh.primitive_cylinder_add(
            radius=half_w * 0.38, depth=half_w * 0.20, vertices=40, location=pos)
        cup = bpy.context.object
        cup.name = f"HP_Cup_{side}"
        cup.rotation_euler = (0, math.radians(90), 0)
        parts.append(cup)

        bpy.ops.mesh.primitive_torus_add(
            major_radius=half_w * 0.34, minor_radius=half_w * 0.075,
            major_segments=32, minor_segments=10,
            location=pos - Vector((sx * half_w * 0.14, 0, 0)))
        pad = bpy.context.object
        pad.name = f"HP_Pad_{side}"
        pad.rotation_euler = (0, math.radians(90), 0)
        parts.append(pad)

    shell = _material("HP_Shell", color)
    trim = _material("HP_Trim", accent)
    for o in parts:
        o.data.materials.append(trim if "Pad" in o.name else shell)
        for poly in o.data.polygons:
            poly.use_smooth = True

    bpy.ops.object.select_all(action='DESELECT')
    for o in parts:
        o.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    hp = bpy.context.object
    hp.name = "Headphones"

    # 跟着头骨走：她低头时耳机得一起动
    head = arm.pose.bones[head_bone]
    hp.parent = arm
    hp.parent_type = 'BONE'
    hp.parent_bone = head_bone
    hp.matrix_parent_inverse = (
        arm.matrix_world @ head.matrix
        @ Matrix.Translation((0, head.length, 0))).inverted()
    return hp

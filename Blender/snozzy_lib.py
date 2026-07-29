"""导入 Snozzy 并把材质改成卡通/无光照着色的公共部分。

VRoid 的贴图本来就是画好明暗的平涂图（MToon 那一套），
再叠一层 PBR 光照只会把它冲灰。所以这里直接走自发光：
贴图颜色 = 最终颜色，光影完全交给贴图和后期的色调映射。
这也正好和我们 2D 场景「运行时按时段统一染色」的做法对得上。
"""
import bpy
from mathutils import Vector

# VRM 里被合并进 Body 网格、但逻辑上要单独成层的材质
GROUPS = {
    "hair_front": ["N00_000_Hair_00_HAIR"],
    "hair_back":  ["N00_000_00_HairBack_00_HAIR"],
    "eye_white":  ["N00_000_00_EyeWhite_00_EYE"],
    "eye_iris":   ["N00_000_00_EyeIris_00_EYE"],
    "eye_hi":     ["N00_000_00_EyeHighlight_00_EYE"],
    "eyeline":    ["N00_000_00_FaceEyeline_00_FACE"],
    "eyelash":    ["N00_000_00_FaceEyelash_00_FACE"],
    "brow":       ["N00_000_00_FaceBrow_00_FACE"],
    "mouth":      ["N00_000_00_FaceMouth_00_FACE"],
    "face":       ["N00_000_00_Face_00_SKIN"],
    "body":       ["N00_000_00_Body_00_SKIN"],
    "tail":       ["Accessory_FoxTail_01_CLOTH"],
    "shoes":      ["N00_008_01_Shoes"],
    "clothes":    ["N00_007_01_Tops", "N00_002_03_Tops"],
}


def load(path):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=path)
    # VRM 会塞进来一堆辅助空物体和碰撞球，没有材质槽的网格一律删掉
    for o in list(bpy.data.objects):
        if o.type == 'MESH' and not o.material_slots:
            bpy.data.objects.remove(o, do_unlink=True)
    return [o for o in bpy.data.objects if o.type == 'MESH']


def unlit_materials():
    """把每个材质改成「贴图直出」。alpha 沿用 glTF 导入时接好的那一路。"""
    for mat in bpy.data.materials:
        if not mat.use_nodes:
            continue
        nodes = mat.node_tree.nodes
        bsdf = next((n for n in nodes if n.type == 'BSDF_PRINCIPLED'), None)
        if bsdf is None:
            continue
        base = bsdf.inputs["Base Color"]
        src = base.links[0].from_socket if base.is_linked else None

        # 自发光接原来的底色贴图；底色本身压黑，避免再被环境光加亮
        if src:
            mat.node_tree.links.new(src, bsdf.inputs["Emission Color"])
        else:
            bsdf.inputs["Emission Color"].default_value = base.default_value
        bsdf.inputs["Emission Strength"].default_value = 1.0
        base.default_value = (0, 0, 0, 1)
        for name in ("Specular IOR Level", "Metallic", "Roughness"):
            if name in bsdf.inputs:
                bsdf.inputs[name].default_value = 0.0 if name != "Roughness" else 1.0

        _alpha_mode(mat)
        mat.use_backface_culling = False


def setup_scene(res=1024, transparent=True):
    scene = bpy.context.scene
    for engine in ("BLENDER_EEVEE_NEXT", "BLENDER_EEVEE"):
        try:
            scene.render.engine = engine
            break
        except Exception:
            continue
    world = bpy.data.worlds.new("W")
    scene.world = world
    world.use_nodes = True
    # 全黑世界：画面里的亮度只能来自自发光，贴图是什么色就是什么色
    world.node_tree.nodes["Background"].inputs[1].default_value = 0.0
    scene.render.resolution_x = scene.render.resolution_y = res
    scene.render.film_transparent = transparent
    scene.render.image_settings.file_format = 'PNG'
    scene.render.image_settings.color_mode = 'RGBA'
    # 贴图是已经画好的成品色，再过一遍 Filmic/AgX 会发灰
    try:
        scene.view_settings.view_transform = 'Standard'
    except Exception:
        pass

    # 抖动 alpha 的噪点靠采样数消化
    try:
        scene.eevee.taa_render_samples = 128
    except Exception:
        pass
    # 环境光遮蔽：脖子下面、袖口里侧、裙褶之间的接触暗部。
    # 这类暗部靠平行光的投影是做不出来的，但少了它整个人会像贴纸。
    for attr, value in (("use_gtao", True), ("gtao_distance", 0.14),
                        ("use_fast_gi", True), ("fast_gi_distance", 0.14)):
        try:
            setattr(scene.eevee, attr, value)
        except Exception:
            pass

    cam_data = bpy.data.cameras.new("Cam")
    cam = bpy.data.objects.new("Cam", cam_data)
    scene.collection.objects.link(cam)
    scene.camera = cam
    return scene


def bounds(meshes):
    lo = Vector((1e9,) * 3); hi = Vector((-1e9,) * 3)
    for o in meshes:
        for c in o.bound_box:
            w = o.matrix_world @ Vector(c)
            lo = Vector(map(min, lo, w)); hi = Vector(map(max, hi, w))
    return lo, hi


def deformed_bounds(meshes):
    """骨骼形变**之后**的真实包围盒。

    `object.bound_box` 取的是网格数据本身，不含骨架形变——
    摆完姿势直接用它取景，头顶会被切掉。必须走求值后的依赖图。
    """
    dg = bpy.context.evaluated_depsgraph_get()
    lo = Vector((1e9,) * 3); hi = Vector((-1e9,) * 3)
    for o in meshes:
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        for v in me.vertices:
            w = ev.matrix_world @ v.co
            lo = Vector(map(min, lo, w)); hi = Vector(map(max, hi, w))
        ev.to_mesh_clear()
    return lo, hi


def frame_bust(scene, meshes, yaw_deg=15, pitch_deg=82, top_margin=0.04, span=0.52):
    """把相机架成「胸像」：头顶留一点边，往下取 span 米。"""
    import math
    lo, hi = deformed_bounds(meshes)
    cam = scene.camera
    a, pitch = math.radians(yaw_deg), math.radians(pitch_deg)
    top = hi.z + span * top_margin
    target = Vector((0, 0, top - span * 0.5))
    dist = 4.0
    cam.location = target + Vector((math.sin(a) * dist, -math.cos(a) * dist,
                                    dist / math.tan(pitch)))
    cam.rotation_euler = (pitch, 0, a)
    cam.data.type = 'ORTHO'
    cam.data.ortho_scale = span
    return hi.z


def toon_materials(shadow=(0.72, 0.70, 0.80),
                   steps=((0.0, 0.66), (0.24, 0.80), (0.50, 0.92), (0.74, 1.0))):
    """卡通着色：贴图颜色 × 分级后的光照。

    和 `unlit_materials` 的区别在于**有没有形体**。无光照版颜色最准，
    但贴在有明确光源方向的房间里像贴纸——她身上一点方向感都没有。

    做法是 Blender 的标准 cel 着色：漫反射结果过 `Shader to RGB`
    再用常数插值的色带切成几档。只在 EEVEE 里可用（Cycles 没有
    Shader to RGB），这也是这条管线选 EEVEE 的原因之一。

    暗部乘的是偏冷的紫灰而不是纯灰——房间的暗部就是这个调子。

    档位刻意做成四级而不是两级：两级是标准 cel 的做法，但在这个尺寸上
    显得又平又硬；四级还留得住"明媚"的清爽感，同时有足够的层次。
    """
    for mat in bpy.data.materials:
        if not mat.use_nodes or mat.name.startswith("Outline"):
            continue
        nt = mat.node_tree
        bsdf = next((n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED'), None)
        out = next((n for n in nt.nodes if n.type == 'OUTPUT_MATERIAL'), None)
        if bsdf is None or out is None:
            continue

        base = bsdf.inputs["Base Color"]
        tex = base.links[0].from_node if base.is_linked else None
        alpha_src = bsdf.inputs["Alpha"].links[0].from_socket if bsdf.inputs["Alpha"].is_linked else None

        diffuse = nt.nodes.new("ShaderNodeBsdfDiffuse")
        diffuse.inputs["Color"].default_value = (1, 1, 1, 1)
        to_rgb = nt.nodes.new("ShaderNodeShaderToRGB")
        nt.links.new(diffuse.outputs[0], to_rgb.inputs[0])

        ramp = nt.nodes.new("ShaderNodeValToRGB")
        ramp.color_ramp.interpolation = 'CONSTANT'
        # 色带默认两个端点，先把第一个挪到位再补剩下的
        ramp.color_ramp.elements[0].position = steps[0][0]
        while len(ramp.color_ramp.elements) > 1:
            ramp.color_ramp.elements.remove(ramp.color_ramp.elements[-1])
        for pos, level in steps:
            el = ramp.color_ramp.elements[0] if pos == steps[0][0] else ramp.color_ramp.elements.new(pos)
            el.position = pos
            # 越暗的档越往冷紫偏，和房间暗部一致
            k = 1.0 - level
            el.color = (level * (1 - k) + shadow[0] * k,
                        level * (1 - k) + shadow[1] * k,
                        level * (1 - k) + shadow[2] * k, 1)
        nt.links.new(to_rgb.outputs[0], ramp.inputs[0])

        mul = nt.nodes.new("ShaderNodeMixRGB")
        mul.blend_type = 'MULTIPLY'
        mul.inputs["Fac"].default_value = 1.0
        if tex:
            nt.links.new(tex.outputs["Color"], mul.inputs[1])
        else:
            mul.inputs[1].default_value = base.default_value
        nt.links.new(ramp.outputs[0], mul.inputs[2])

        emit = nt.nodes.new("ShaderNodeEmission")
        nt.links.new(mul.outputs[0], emit.inputs["Color"])

        if alpha_src:
            trans = nt.nodes.new("ShaderNodeBsdfTransparent")
            mix = nt.nodes.new("ShaderNodeMixShader")
            nt.links.new(alpha_src, mix.inputs["Fac"])
            nt.links.new(trans.outputs[0], mix.inputs[1])
            nt.links.new(emit.outputs[0], mix.inputs[2])
            nt.links.new(mix.outputs[0], out.inputs["Surface"])
        else:
            nt.links.new(emit.outputs[0], out.inputs["Surface"])

        _alpha_mode(mat)
        mat.use_backface_culling = False


def _alpha_mode(mat):
    """统一用抖动 alpha 而不是混合 alpha。

    EEVEE 的 BLENDED 不写深度缓冲，重叠的部件之间没有正确的前后关系——
    表现就是**能透过裙子看见背后的书架**。DITHERED 是随机抖动 + 正常写深度，
    遮挡关系完全正确，代价是边缘有噪点，靠提高采样数消掉。
    """
    if hasattr(mat, "surface_render_method"):
        mat.surface_render_method = 'DITHERED'
    elif hasattr(mat, "blend_method"):
        mat.blend_method = 'HASHED'


# 布光预设。光位必须和房间对得上，否则贴上去就是两个世界。
LIGHTS = {
    # 手绘暖房：右上台灯为主，左侧窗口冷光补一点
    "warm": [
        ("Key",  (1.0, -0.55, 0.75), (1.00, 0.78, 0.52), 3.2),
        ("Fill", (-1.0, -0.45, 0.25), (0.62, 0.72, 0.95), 1.1),
        ("Back", (0.2, 0.9, 0.5), (0.80, 0.78, 0.92), 0.8),
    ],
    # 明亮房：浅色墙面把光弹得到处都是，所以主光柔、补光足、暗部浅。
    # 沿用暗房那套的话她会整个压暗，头发直接发黑——布光要跟着房间走。
    "bright": [
        ("Key",    (-0.55, -0.95, 0.45), (1.00, 0.97, 0.98), 3.0),
        ("Fill",   (0.85, -0.45, 0.30), (0.92, 0.95, 1.00), 2.0),
        ("Bounce", (0.10, -0.30, -1.00), (1.00, 0.93, 0.96), 1.2),
        ("Rim",    (0.55, 0.85, 0.55), (0.96, 0.86, 1.00), 1.6),
    ],
    # 赛博朋克暗房：主光来自左前方的显示器（冷白偏青），
    # 右侧墙上的青色霓虹给轮廓光，左上的品红灯管补一层冷紫，
    # 桌下的青色灯带从下往上打——这一盏是"她真的坐在这间房里"的关键。
    "cyber": [
        ("Screen", (-0.85, -0.90, 0.35), (0.72, 0.92, 1.00), 3.4),
        ("Rim",    (1.00, 0.35, 0.45), (0.30, 0.95, 1.00), 2.6),
        ("Neon",   (-0.65, -0.20, 0.85), (0.95, 0.35, 0.90), 1.5),
        ("Under",  (0.10, -0.60, -1.00), (0.34, 0.90, 0.95), 1.1),
    ],
}


def room_lights(preset="bright"):
    """按房间的光位布光。"""
    import math
    specs = LIGHTS[preset]
    for name, d, color, energy in specs:
        data = bpy.data.lights.new(name, 'SUN')
        data.color = color
        data.energy = energy
        # 只给主光留阴影。当初关掉是因为平行光打在墙上会投出一大块生硬黑影——
        # 但角色是单独渲的，画面里根本没有墙，留着主光的阴影正好得到
        # 头发落在脸上、手臂落在裙子上的自阴影，形体一下就出来了。
        # 补光和轮廓光仍然关闭，否则多重投影会把画面搅乱。
        data.use_shadow = (name in ("Key", "Screen"))
        if data.use_shadow:
            data.angle = math.radians(6.0)   # 阳光的张角，边缘不至于刀切
        obj = bpy.data.objects.new(name, data)
        bpy.context.scene.collection.objects.link(obj)
        v = Vector(d).normalized()
        obj.rotation_euler = v.to_track_quat('Z', 'Y').to_euler()


def add_outline(meshes, thickness=0.0035, skip=("Hair",)):
    """反转外壳描边。

    VRoid 的头发是带 alpha 的面片，外壳会沿着面片的矩形边缘描，
    而不是沿着看得见的发丝——所以默认跳过头发。
    """
    mat = bpy.data.materials.new("Outline")
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()
    emit = nt.nodes.new("ShaderNodeEmission")
    emit.inputs["Color"].default_value = (0.10, 0.08, 0.12, 1)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    nt.links.new(emit.outputs[0], out.inputs["Surface"])
    mat.use_backface_culling = True

    for o in meshes:
        if any(s in o.name for s in skip):
            continue
        o.data.materials.append(mat)
        m = o.modifiers.new("Outline", 'SOLIDIFY')
        m.thickness = thickness
        m.offset = 1
        m.use_flip_normals = True
        m.use_rim = False
        m.material_offset = len(o.material_slots) - 1


def scene_camera(scene, yaw_deg=13, height=1.42, dist=2.55, look_z=0.86, lens=32):
    """房间场景的**唯一**相机定义。

    角色和房间必须共用同一个相机，否则透视对不上，事后再怎么凑都是错的。
    参数的意义：她坐在原点、面朝 −Y，相机在她正前方稍偏一点，
    架在坐姿视平线附近略往下看。

    高度是关键：太高会变成俯拍、看不见桌下；太低则桌面被压成一条线。
    1.24 米配 0.74 米的桌面，视线正好能从桌板下缘穿过去看到她的腿。
    """
    import math
    cam = scene.camera
    cam.data.type = 'PERSP'
    cam.data.lens = lens
    a = math.radians(yaw_deg)
    target = Vector((0.06, 0.0, look_z))
    cam.location = Vector((math.sin(a) * dist, -math.cos(a) * dist, height)) + Vector((target.x, 0, 0))
    direction = target - cam.location
    cam.rotation_euler = direction.to_track_quat('-Z', 'Y').to_euler()
    return cam


# 胯部在画面上的纵向位置。**只此一份**——渲染脚本有好几个，
# 各写各的数值必然走偏（面部贴片就因此错了一整轮）。
HIP_Y = 0.615


def place_hip(scene, arm, y_fraction=None, bone="J_Bip_C_Hips", tries=4):
    """把胯部挪到画面纵向的某个位置上。

    **不要用"落到地面"来定位**：3D 的地面 z=0 和画上去的地板毫无关系——
    桌子是 2D 灰模里画的，位置由构图定，不由世界坐标定。按 z=0 落地的结果是
    胯部落在桌沿上方，大腿全露在桌面上。
    唯一有意义的参照是画面坐标：胯部对准桌沿稍下方，人就"坐进"桌子后面了。
    """
    from bpy_extras.object_utils import world_to_camera_view
    y_fraction = HIP_Y if y_fraction is None else y_fraction
    cam = scene.camera
    for _ in range(tries):
        pb = arm.pose.bones[bone]
        world = arm.matrix_world @ pb.head
        p = world_to_camera_view(scene, cam, world)
        err = (1 - y_fraction) - p.y          # 视图 y 向上为正
        if abs(err) < 0.002:
            break
        arm.location.z += err * _view_height_at(scene, cam, world)
        bpy.context.view_layer.update()
    return p.y


def frame_extent(scene, meshes):
    """角色在画面上的纵向占位，0（顶）…1（底）。用来检查有没有出画。"""
    from bpy_extras.object_utils import world_to_camera_view
    dg = bpy.context.evaluated_depsgraph_get()
    lo, hi = 1.0, 0.0
    for o in meshes:
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        for v in me.vertices:
            y = 1 - world_to_camera_view(scene, scene.camera, ev.matrix_world @ v.co).y
            lo = min(lo, y); hi = max(hi, y)
        ev.to_mesh_clear()
    return lo, hi


def lift_into_frame(scene, arm, meshes, margin=0.015, tries=4):
    """把角色抬到最低点落进画面里。

    「鞋底贴地」不等于「脚在画面里」：脚比躯干更靠近镜头，而画幅的下边界
    在近处更高。差多少是透视决定的，跟姿势有关，试坐高试不出来——
    直接把最低点投到相机视图里，看差多少就抬多少，迭代两三次收敛。

    抬起来的那点距离在画面上看不出：桌下本来就是暗的，也没有地面参照。
    """
    from bpy_extras.object_utils import world_to_camera_view
    cam = scene.camera
    for _ in range(tries):
        dg = bpy.context.evaluated_depsgraph_get()
        worst = None
        for o in meshes:
            ev = o.evaluated_get(dg)
            me = ev.to_mesh()
            for v in me.vertices:
                p = world_to_camera_view(scene, cam, ev.matrix_world @ v.co)
                if worst is None or p.y < worst[0]:
                    worst = (p.y, ev.matrix_world @ v.co)
            ev.to_mesh_clear()
        if worst is None or worst[0] >= margin:
            return worst[0] if worst else None
        # 视图坐标 y 是 0…1，换算成世界高度：拿当前最低点的深度做线性近似
        deficit = margin - worst[0]
        arm.location.z += deficit * _view_height_at(scene, cam, worst[1])
        bpy.context.view_layer.update()
    return worst[0] if worst else None


def _view_height_at(scene, cam, point):
    """相机视图里 1.0 个单位对应该点深度上的多少世界高度。"""
    import math
    depth = (point - cam.matrix_world.translation).length
    sensor = cam.data.sensor_width
    vfov = 2 * math.atan(sensor * scene.render.resolution_y
                         / scene.render.resolution_x / 2 / cam.data.lens)
    return 2 * depth * math.tan(vfov / 2)

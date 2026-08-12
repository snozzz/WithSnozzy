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


def load(path, realtime3d=False):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=path)
    # VRM 会塞进来一堆辅助空物体和碰撞球，没有材质槽的网格一律删掉
    for o in list(bpy.data.objects):
        if o.type == 'MESH' and not o.material_slots:
            bpy.data.objects.remove(o, do_unlink=True)
    meshes = [o for o in bpy.data.objects if o.type == 'MESH']
    # 改袖子放在这里，是为了**所有渲染脚本拿到的是同一件衣服**。
    # 各脚本自己调的话，漏掉一个就会出现"角色图的袖子和手那一层的袖子不一样"，
    # 和 HIP_Y 写三份是同一类错（第 7 条）。
    arm = next((o for o in bpy.data.objects if o.type == 'ARMATURE'), None)
    if arm is not None:
        slim_sleeves(meshes, arm)
        # 广袖里面还衬一层内袖（`sleeve.py`），也在这里接上——同样是为了
        # 所有渲染脚本拿到的是同一件衣服。它进 `meshes`，`isolate_arms`
        # 之类按网格遍历的地方才带得上它。
        #
        # **顺序不能反**：内袖是照着收完之后的广袖内壁量出来的。
        import sleeve
        # The realtime GLB needs the lining's wrist cap to follow the hand
        # bone after the forearm bends. Keep the historical two-dimensional
        # render path unchanged; only the explicitly requested 3D authoring
        # path uses the terminal hand bind weights.
        meshes += sleeve.build_both(arm, meshes, hand_bind=realtime3d)
    return meshes


# 袖口收多少。VRoid 这件是广袖：静置时袖口张到半径 0.117 米（直径 23 厘米），
# 而小臂本身只有 0.029，袖子还在小臂 70% 处就断了。手一伸到键盘上，
# 画面上就是两个大喇叭，小臂像是从喇叭里临时接出来的。
#
# 只压**超出贴身半径的那部分**，贴身半径以内一律不动——直接按比例缩半径的话，
# 袖子会缩到比胳膊还细，穿模。
SLEEVE_HUG = 0.036      # 贴身半径（米），比皮肤的 0.029 略松
SLEEVE_KEEP = 0.34      # 超出贴身半径的那部分留多少
# 袖口再往手腕方向拉多长，占小臂长的比例。
# 0.34 让袖口落到小臂 105% 处，也就是**刚过手腕**。原来 0.22（93%）时
# 袖口和手之间还露着一截光小臂，那截正是"胳膊接得不自然"的地方——
# 小臂一斜过来（`pose.ELBOW_POLE` 抬肘）它还会变长，因为不再被透视压扁。
# 与其去调姿势迁就它，不如让袖口盖过去。
SLEEVE_REACH = 0.34


def slim_sleeves(meshes, arm, hug=SLEEVE_HUG, keep=SLEEVE_KEEP,
                 reach=SLEEVE_REACH):
    """把广袖收成顺着小臂的窄袖，并往手腕方向拉长一截。

    **改的是静置网格，不是姿势。** 蒙皮每次都从原始顶点算起，所以这一刀
    在导入之后切一次就行，摆姿势、换姿势都跟着走；反过来，摆完姿势再改
    就得每帧改一次，还会和形态键打架。

    袖子上没有弹簧骨（这件衣服只有裙子有 `J_Sec_`），所以没法像裙摆那样
    "摆"过去，只能动几何。

    沿小臂的参数 t：0 是肘、1 是腕。t≤0 的那一段（大臂上的袖子）完全不动，
    收缩量从肘往袖口平滑加大，接缝处自然连上。
    """
    for side in ("L", "R"):
        el = arm.matrix_world @ arm.data.bones[f"J_Bip_{side}_LowerArm"].head_local
        wr = arm.matrix_world @ arm.data.bones[f"J_Bip_{side}_Hand"].head_local
        axis = (wr - el).normalized()
        span = (wr - el).length
        names = {f"J_Bip_{side}_{b}" for b in ("UpperArm", "LowerArm", "Hand")}
        for o in meshes:
            idx = {g.index for g in o.vertex_groups if g.name in names}
            if not idx:
                continue
            mw, inv = o.matrix_world, o.matrix_world.inverted()
            for v in o.data.vertices:
                if sum(g.weight for g in v.groups if g.group in idx) <= 0.5:
                    continue
                p = mw @ v.co
                along = (p - el).dot(axis)
                t = along / span
                if t <= 0.0:
                    continue                    # 肘以上不动，接缝才连得上
                radial = (p - el) - axis * along
                if radial.length <= hug:
                    continue                    # 贴身以内是皮肤和内衬，别碰
                # 平滑步进，肘处 0、t=0.55 处 1，再往前保持
                s = min(t / 0.55, 1.0)
                s = s * s * (3 - 2 * s)
                r = hug + (radial.length - hug) * (1 - s * (1 - keep))
                v.co = inv @ (el + axis * (along + s * reach * span)
                              + radial.normalized() * r)
            o.data.update()


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


# 要画在桌面之上的那一段手臂：**小臂和手，不含大臂**。
#
# 大臂和那两只蓬蓬袖必须排除掉，否则就穿模了：肘部实测在深度 2.54、
# 画面 y≈531–556，也就是**在桌沿后面**；而手腕在 2.39，在桌沿前面。
# 把大臂一起画到桌面上，袖子就会糊在桌板上，看着像手臂插进了桌子。
#
# 换句话说这一层的分界不是"画面上哪一行"，而是"身上哪一段"——
# 肘往前的小臂搭在桌面上，肘往后的都在桌子后面。这条正好和解剖对上。
ARM_BONES = ["LowerArm", "Hand"] + [
    f"{finger}{i}" for finger in ("Thumb", "Index", "Middle", "Ring", "Little")
    for i in (1, 2, 3)
]


def isolate_arms(meshes, sides=("L", "R"), cutoff=0.5):
    """只留手臂和手，别的顶点全部遮掉。

    **为什么需要单独渲一层**：桌面层是画在角色**之上**的（不然桌子挡不住她
    的下半身），于是手伸到键盘上会被桌子盖掉。手必须再画一层、盖在桌子上面。

    但不能直接把角色图里那一块裁出来贴上去——那一块里除了小臂和手，
    后面还有她的大腿和裙子，一起贴上去就是一片裙子糊在桌面上（试过，很明显）。
    要的是"只有手臂"的那一层。

    按**骨骼权重**挑顶点，不按材质：手臂和大腿共用同一个皮肤材质，
    材质分不开；而蒙皮权重天然就是按骨骼分的，袖子也会跟着手臂一起留下。
    肩膀那里会切得毛糙，但那一段在缝线以上、根本不会画到，无所谓。
    """
    names = {f"J_Bip_{s}_{b}" for s in sides for b in ARM_BONES}
    for o in meshes:
        idx = {g.index for g in o.vertex_groups if g.name in names}
        if not idx:
            o.hide_render = True        # 这个物体一点手臂都没有（头发之类）
            continue
        keep = [v.index for v in o.data.vertices
                if sum(g.weight for g in v.groups if g.group in idx) > cutoff]
        if not keep:
            o.hide_render = True
            continue
        vg = o.vertex_groups.new(name="_ARMS")
        vg.add(keep, 1.0, 'REPLACE')
        m = o.modifiers.new("ArmMask", 'MASK')
        m.vertex_group = "_ARMS"


def _holdout(obj):
    mat = bpy.data.materials.new("Holdout")
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()
    hold = nt.nodes.new("ShaderNodeHoldout")
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    nt.links.new(hold.outputs[0], out.inputs["Surface"])
    obj.data.materials.append(mat)


def depth_clip(scene, dist):
    """在距相机 `dist` 米处竖一块正对镜头的挡板，把更远的东西抹掉。

    **为什么需要它**：手要画在桌面之上，但只有真的在桌沿**前面**那一段才该画。
    她那两只蓬蓬袖挂在肘上、实测深度 2.5，手腕是 2.39——袖子在桌沿后面，
    一起画到桌面上就是穿模（看着像小臂插进了桌子）。

    这条分界试错过三轮，前两条都不成立：

    - **不是"画面上哪一行"**——袖子和手指落在同样的行上
    - **不是"身上哪一段"**——袖子和手腕同属小臂那根骨头，按骨骼挑分不开
      （实测把大臂剔掉，缝线以下的像素一个没少）
    - **也不能用水平的"桌面"来切**——袖子的 z 是 0.655–0.79、手是 0.698–0.756，
      两者在**高度上是重叠的**：摆低了什么都挡不住，摆高了连手一起削掉

    真正的区别在**深度**：袖子挂在肘上（2.5），手伸在前面（2.39）。
    所以挡板正对镜头、按深度切。

    挡板用 Holdout 材质：它自己不显影，但会遮住背后的东西并把 alpha 写成 0。
    比走合成器的深度通道省事得多——Blender 5 的合成器把
    `scene.node_tree`、`CompositorNodeMapRange`、`OutputFile.base_path`
    全改了名字，而这块挡板是纯几何，跨版本稳定。
    """
    cam = scene.camera
    fwd = cam.matrix_world.to_3x3() @ Vector((0, 0, -1))
    bpy.ops.mesh.primitive_plane_add(size=20)
    plane = bpy.context.object
    plane.location = cam.matrix_world.translation + fwd * dist
    plane.rotation_euler = cam.rotation_euler
    _holdout(plane)
    return plane


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
    target = Vector((CAM_SHIFT, 0.0, look_z))
    cam.location = Vector((math.sin(a) * dist, -math.cos(a) * dist, height)) + Vector((target.x, 0, 0))
    direction = target - cam.location
    cam.rotation_euler = direction.to_track_quat('-Z', 'Y').to_euler()
    return cam


# 胯部在画面上的纵向位置。**只此一份**——渲染脚本有好几个，
# 各写各的数值必然走偏（面部贴片就因此错了一整轮）。
#
# 跟着画上去的桌沿走：胯要落在**桌板后沿下方约 32 像素**，人才"坐进"桌子后面。
# 换了成品图就要重算——这一版的后沿在第 608 行，所以 (608+32)/1024。
HIP_Y = 0.625

# 相机横向偏移（米）。**纯平移**，不改朝向：`target.x` 和 `cam.location.x`
# 一起加，`direction` 里正好抵消。
#
# 拿它把整套（她 + 键盘 + 手）在画面上左右挪，**别去动角色的 location**——
# 键盘是世界坐标里的，角色一动就和手错开了。
# 往负走＝相机左移＝她在画面上右移。标定：这个机位下约 535 像素/米。
# 这一版要把她从 x 中心 730 挪到椅子中心 825，差 95px → 0.06 − 95/535。
CAM_SHIFT = -0.118


def place_hip(scene, arm, y_fraction=None, bone="J_Bip_C_Hips", tries=8,
              tol=0.0002):
    """把胯部挪到画面纵向的某个位置上。

    **不要用"落到地面"来定位**：3D 的地面 z=0 和画上去的地板毫无关系——
    桌子是 2D 灰模里画的，位置由构图定，不由世界坐标定。按 z=0 落地的结果是
    胯部落在桌沿上方，大腿全露在桌面上。
    唯一有意义的参照是画面坐标：胯部对准桌沿稍下方，人就"坐进"桌子后面了。

    胯是腿链的根，摆腿不会动它，所以每套姿势收敛到的高度**本该完全一样**。
    容差原来是 0.002，在 1024 高的画幅上就是 2 像素——静态图之间看不出来，
    但换姿势的过渡序列只替换下半身、上半身取自固定的那张图，2 像素的
    上下抖动会在接缝处露出来。收到 0.0002（0.2 像素）就没有了。
    """
    from bpy_extras.object_utils import world_to_camera_view
    y_fraction = HIP_Y if y_fraction is None else y_fraction
    cam = scene.camera
    for _ in range(tries):
        pb = arm.pose.bones[bone]
        world = arm.matrix_world @ pb.head
        p = world_to_camera_view(scene, cam, world)
        err = (1 - y_fraction) - p.y          # 视图 y 向上为正
        if abs(err) < tol:
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

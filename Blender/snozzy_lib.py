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

        # 4.2 之后 blend_method 换成了 surface_render_method
        if hasattr(mat, "surface_render_method"):
            mat.surface_render_method = 'BLENDED'
        elif hasattr(mat, "blend_method"):
            mat.blend_method = 'HASHED'
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

"""Build and export the production SnozzyRoom3D GLB, .blend, manifest, and QA renders.

Run with Blender 5.2 LTS::

    /Applications/Blender.app/Contents/MacOS/Blender --background --factory-startup \\
      --python Blender/realtime3d/SnozzyRoom3D_export.py -- \\
      Snozzy.vrm Assets/Realtime3D

Architecture:
- `room_layout.py`: single source of truth for real-world metric coordinates
- `room_materials.py`: curated <=19 shared materials (total <=39 <=40 budget)
- `room_geometry.py`: watertight bright-cyber pastel room, L-desk, dual monitors,
  75% sculpted mechanical keyboard, and interactive desk props
- `character_rig.py`: grounded seated posture on rug, curved fox tail clear of
  chair, custom 3D glowing headphones, natural thumb-curled hands
- `animations.py`: 10 silky 24fps Bezier clips + 3 rigid prop handoff tracks
"""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import sys
from pathlib import Path

import bpy
from mathutils import Vector

HERE = Path(__file__).resolve().parent
BLENDER_DIR = HERE.parent
ROOT = BLENDER_DIR.parent
for p in (str(HERE), str(BLENDER_DIR)):
    if p not in sys.path:
        sys.path.insert(0, p)

import animations as A  # noqa: E402
import character_rig as CR  # noqa: E402
import phase0_export as P0  # noqa: E402
import room_geometry as G  # noqa: E402
import room_layout as L  # noqa: E402
from room_materials import MaterialLibrary  # noqa: E402
import snozzy_lib as S  # noqa: E402


AUTHOR_ASSET = "SnozzyRoom3D"
OUTPUT_GLB = "SnozzyRoom3D.glb"
OUTPUT_BLEND = "SnozzyRoom3D.blend"
OUTPUT_MANIFEST = "SnozzyRoom3DManifest.json"


def _repo_path(path: Path) -> str:
    try:
        return str(path.resolve().relative_to(ROOT.resolve()))
    except ValueError:
        return str(path)


def _sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def _all_descendants(root: bpy.types.Object) -> list[bpy.types.Object]:
    result = []
    stack = [root]
    while stack:
        obj = stack.pop()
        result.append(obj)
        stack.extend(list(obj.children))
    return result


def _triangle_count(obj: bpy.types.Object) -> int:
    if obj.type != "MESH":
        return 0
    return sum(max(1, len(poly.vertices) - 2) for poly in obj.data.polygons)


def _setup_preview_scene() -> bpy.types.Scene:
    scene = S.setup_scene(res=L.PREVIEW_RESOLUTION[0], transparent=False)
    scene.render.resolution_x, scene.render.resolution_y = L.PREVIEW_RESOLUTION
    scene.render.resolution_percentage = 100
    scene.render.fps = L.FPS
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.image_settings.color_depth = "8"
    scene.render.film_transparent = False
    try:
        scene.eevee.taa_render_samples = 48
    except Exception:
        pass
    try:
        scene.view_settings.view_transform = "AgX"
        scene.view_settings.look = "AgX - Medium High Contrast"
    except Exception:
        pass

    world = bpy.data.worlds.new("Room3DWorld")
    scene.world = world
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs["Color"].default_value = (0.14, 0.16, 0.30, 1.0)
    world.node_tree.nodes["Background"].inputs["Strength"].default_value = 0.45

    def add_area(name, loc, color, energy, size, target=(0.0, -0.20, 0.90)):
        data = bpy.data.lights.new(name, "AREA")
        data.energy = energy
        data.color = color
        data.shape = "DISK"
        data.size = size
        data.use_shadow = name in ("Key", "Lamp")
        obj = bpy.data.objects.new(name, data)
        scene.collection.objects.link(obj)
        obj.location = Vector(loc)
        obj.rotation_euler = (Vector(target) - obj.location).to_track_quat("-Z", "Y").to_euler()
        return obj

    add_area("Key", (-1.10, -1.75, 2.45), (1.0, 0.95, 0.93), 50, 2.5)
    add_area("Fill", (1.90, -1.55, 1.95), (0.82, 0.88, 1.0), 30, 2.2)
    add_area("Lamp", (0.70, -0.35, 1.15), (1.0, 0.78, 0.52), 18, 0.40, (0.32, -0.40, 0.74))
    add_area("WindowGlow", (-0.90, 1.25, 1.65), (0.55, 0.74, 1.0), 22, 1.5, (0.0, -0.25, 0.95))

    _apply_camera_preset(scene.camera, "overview")
    return scene


def _apply_camera_preset(camera: bpy.types.Object, preset_key: str) -> None:
    preset = L.CAMERA_PRESETS[preset_key]
    camera.data.type = "PERSP"
    camera.data.sensor_fit = "VERTICAL"
    camera.data.angle_y = math.radians(preset["fovDegrees"])
    camera.data.clip_start = 0.05
    camera.data.clip_end = 100.0
    camera.location = Vector(preset["position"])
    target = Vector(preset["target"])
    camera.rotation_euler = (target - camera.location).to_track_quat("-Z", "Y").to_euler()


def _set_character_materials() -> None:
    P0._author_phase0_preview_materials()
    P0.downsample_phase0_textures()
    for mat in bpy.data.materials:
        if not mat.get("phase0_gltf_material") or not mat.use_nodes:
            continue
        for node in mat.node_tree.nodes:
            if node.type == "BSDF_PRINCIPLED" and "Emission Strength" in node.inputs:
                node.inputs["Emission Strength"].default_value = 0.20


def _verify_geometry_gates(root: bpy.types.Object, arm: bpy.types.Object,
                           meshes: list[bpy.types.Object], props: dict) -> dict:
    """Assert every critical physical/visual invariant before exporting GLB."""
    descendants = _all_descendants(root)
    names = {o.name for o in descendants}

    # 1. Never export any stray holdout/occlusion reference slab!
    forbidden = [n for n in names if "Occlusion" in n or "DeskSlab" in n]
    if forbidden:
        raise RuntimeError(f"Forbidden occlusion helper present in export root: {forbidden}")

    # 2. Verify keyboard rests cleanly ABOVE desk surface (never buried inside desk!)
    kbd = props["keyboard"]
    kbd_z = float(kbd.matrix_world.translation.z)
    if kbd_z < L.DESK_SURFACE_Z:
        raise RuntimeError(f"Keyboard buried inside desk: kbd_z={kbd_z:.4f} < desk={L.DESK_SURFACE_Z}")

    # 3. Verify Snozzy's grounded shoes sit ON the rug (never sunk underground!)
    dg = bpy.context.evaluated_depsgraph_get()
    body = next(o for o in meshes if o.name == "Body")
    ev = body.evaluated_get(dg)
    me = ev.to_mesh()
    min_z = min((ev.matrix_world @ v.co).z for v in me.vertices)
    ev.to_mesh_clear()
    if not (L.RUG_TOP_Z - 0.015 <= min_z <= L.RUG_TOP_Z + 0.025):
        raise RuntimeError(f"Snozzy feet not grounded on rug: min_z={min_z:.4f} vs rug={L.RUG_TOP_Z}")

    # 4. Verify back wall has zero horizontal gap around window opening
    wl = bpy.data.objects["WallBackLeft"]
    wr = bpy.data.objects["WallBackRight"]
    wl_max_x = max((wl.matrix_world @ Vector(c)).x for c in wl.bound_box)
    wr_min_x = min((wr.matrix_world @ Vector(c)).x for c in wr.bound_box)
    if abs(wl_max_x - L.WINDOW["x0"]) > 0.005 or abs(wr_min_x - L.WINDOW["x1"]) > 0.005:
        raise RuntimeError(
            f"Window wall seam gap detected: left={wl_max_x:.4f} vs {L.WINDOW['x0']}, "
            f"right={wr_min_x:.4f} vs {L.WINDOW['x1']}"
        )

    # 5. Verify material & triangle budgets
    mesh_objs = [o for o in descendants if o.type == "MESH"]
    materials = sorted({s.material.name for o in mesh_objs for s in o.material_slots if s.material})
    tris = sum(_triangle_count(o) for o in mesh_objs)
    if tris > 200_000:
        raise RuntimeError(f"Scene exceeds triangle budget: {tris}")
    if len(materials) > 40:
        raise RuntimeError(f"Scene exceeds material budget: {len(materials)} > 40: {materials}")

    sockets = [o.name for o in descendants if o.name in (
        "Prop_Coffee", "Prop_Phone", "Prop_Pen", "Keyboard", "Chair", "Headphones_3D",
    )]
    interactive_nodes = sorted({
        o.name for o in descendants if o.get("room3d_interactive")
    })
    return {
        "meshCount": len(mesh_objs),
        "triangleCount": tris,
        "materialCount": len(materials),
        "materials": materials,
        "boneCount": len(arm.data.bones),
        "deformBoneCount": sum(1 for b in arm.data.bones if b.use_deform),
        "morphTargetCount": sum(
            max(0, len(o.data.shape_keys.key_blocks) - 1)
            for o in meshes if o.data.shape_keys
        ),
        "characterMeshCount": len(meshes),
        "socketNodes": sockets,
        "interactiveNodes": interactive_nodes,
        "sceneNodeCount": len(descendants),
        "feetMinZ": round(float(min_z), 5),
        "keyboardBaseZ": round(kbd_z, 5),
    }


def _export_glb(path: Path, root: bpy.types.Object) -> None:
    bpy.ops.object.select_all(action="DESELECT")
    for obj in _all_descendants(root):
        if obj.type not in {"CAMERA", "LIGHT"}:
            obj.select_set(True)
    bpy.context.view_layer.objects.active = root
    bpy.ops.export_scene.gltf(
        filepath=str(path),
        export_format="GLB",
        use_selection=True,
        export_animations=True,
        export_frame_range=True,
        export_force_sampling=True,
        export_nla_strips=True,
        export_skins=True,
        export_morph=True,
        export_materials="EXPORT",
        export_image_format="AUTO",
        export_texcoords=True,
        export_normals=True,
        export_tangents=False,
        export_yup=False,
        export_apply=False,
        export_extras=True,
        export_cameras=False,
        export_lights=False,
        export_attributes=True,
        export_all_influences=True,
        export_keep_originals=False,
    )
    if not path.exists() or path.stat().st_size == 0:
        raise RuntimeError(f"Failed to export GLB: {path}")


def _render_qa_previews(
    scene: bpy.types.Scene,
    out: Path,
    arm: bpy.types.Object,
    keyboard: bpy.types.Object,
    meshes: list[bpy.types.Object],
    props: dict,
    builders: dict,
) -> list[Path]:
    """Render 5 canonical QA proof stills directly from the authored pose solvers."""
    coffee_sock, phone_sock, pen_sock = props["coffee"], props["phone"], props["pen"]
    muted = []
    for obj in (arm, coffee_sock, phone_sock, pen_sock):
        if obj.animation_data is None:
            continue
        for track in obj.animation_data.nla_tracks:
            muted.append((track, track.mute))
            track.mute = True

    base = builders["base"]
    seated_loc = builders["seated_loc"]
    rest = builders["rest"]

    def reset_props():
        arm.location = seated_loc.copy()
        A._set_socket_world_matrix(coffee_sock, rest["coffee"])
        A._set_socket_world_matrix(phone_sock, rest["phone"])
        A._set_socket_world_matrix(pen_sock, rest["pen"])

    def p_idle():
        reset_props()
        _apply_camera_preset(scene.camera, "overview")
        A._pose_idle(arm, keyboard, base, 0.25)

    def p_typing():
        reset_props()
        _apply_camera_preset(scene.camera, "desk")
        A._pose_typing(arm, keyboard, base, 0.16)

    def p_coffee():
        reset_props()
        _apply_camera_preset(scene.camera, "desk")
        m, _ = builders["coffee"].evaluate(0.56)
        A._set_socket_world_matrix(coffee_sock, m)

    def p_phone():
        reset_props()
        _apply_camera_preset(scene.camera, "desk")
        m, _ = builders["phone"].evaluate(0.56)
        A._set_socket_world_matrix(phone_sock, m)

    def p_stretch():
        reset_props()
        _apply_camera_preset(scene.camera, "overview")
        A._pose_stretch(arm, keyboard, base, 0.45)

    specs = (
        ("idle", p_idle),
        ("typing", p_typing),
        ("coffee_grab", p_coffee),
        ("phone_hold", p_phone),
        ("stand_stretch", p_stretch),
    )
    paths = []
    for key, fn in specs:
        scene.frame_set(0)
        fn()
        bpy.context.view_layer.update()
        path = out / f"{AUTHOR_ASSET}_{key}.png"
        scene.render.filepath = str(path)
        bpy.ops.render.render(write_still=True)
        paths.append(path)

    for track, prev in muted:
        track.mute = prev
    reset_props()
    _apply_camera_preset(scene.camera, "overview")
    A._pose_idle(arm, keyboard, base, 0.0)
    return paths


def build(vrm: Path, out: Path) -> dict:
    out.mkdir(parents=True, exist_ok=True)
    bpy.ops.wm.read_factory_settings(use_empty=True)

    meshes = S.load(str(vrm), realtime3d=True)
    arm = next(obj for obj in bpy.data.objects if obj.type == "ARMATURE")
    scene = _setup_preview_scene()

    root = G._empty("SnozzyRoom3D_Root")
    root["room3d_coordinate_system"] = "Z-up, metres"
    root["room3d_asset"] = AUTHOR_ASSET

    for obj in list(bpy.data.objects):
        if obj.type in {"MESH", "ARMATURE"} and obj.parent is None and obj != root:
            obj.parent = root
    arm["room3d_role"] = "character_armature"
    arm["room3d_character_source"] = "Snozzy.vrm"
    for obj in meshes:
        obj["room3d_role"] = "character_mesh"

    _set_character_materials()
    mats = MaterialLibrary()

    # Build custom 3D Headphones in standing bind space BEFORE sitting/animating!
    hp_objs = CR.build_headphones_3d(arm, meshes, mats)
    meshes.extend(hp_objs)

    # Build room, wall decor, chair, desk, dual monitors, keyboard & props
    G.build_architecture(root, mats)
    G.build_wall_decor(root, mats)
    G.build_chair(root, mats)
    props = G.build_desk_and_props(root, mats)

    # Author all 10 skeletal animations + 3 prop companion tracks
    _, action_meta, builders, _ = A.author_all_actions(
        arm, props["keyboard"], meshes,
        props["coffee"], props["phone"], props["pen"],
    )

    # Measure screen geometry from canonical seated pose
    monitor_screen = bpy.data.objects.get("MonitorScreen")
    head = arm.matrix_world @ arm.pose.bones["J_Bip_C_Head"].head
    screen_pt = monitor_screen.matrix_world.translation if monitor_screen else Vector((0, 0, 0))
    to_screen = (screen_pt - head).normalized()
    head_fwd = (
        (arm.matrix_world @ arm.pose.bones["J_Bip_C_Head"].matrix).to_3x3()
        @ Vector((0.0, 0.0, 1.0))
    ).normalized()
    screen_angle = math.degrees(math.acos(max(-1.0, min(1.0, head_fwd.dot(to_screen)))))
    screen_dist = (screen_pt - head).length

    # Run strict physical & budget verification gates
    metrics = _verify_geometry_gates(root, arm, meshes, props)

    glb_path = out / OUTPUT_GLB
    blend_path = out / OUTPUT_BLEND
    manifest_path = out / OUTPUT_MANIFEST
    _export_glb(glb_path, root)
    bpy.ops.wm.save_as_mainfile(filepath=str(blend_path))

    previews = _render_qa_previews(
        scene, out, arm, props["keyboard"], meshes, props, builders,
    )

    overview = L.CAMERA_PRESETS["overview"]
    manifest = {
        "schema": "withsnozzy.realtime3d.room",
        "schemaVersion": 2,
        "asset": AUTHOR_ASSET,
        "generator": {
            "script": _repo_path(Path(__file__)),
            "blenderVersion": bpy.app.version_string,
            "fps": L.FPS,
        },
        "coordinateSystem": {
            "root": "SnozzyRoom3D_Root",
            "upAxis": "Z",
            "forwardAxis": "-Y",
            "metersPerUnit": 1.0,
            "rootScale": [1.0, 1.0, 1.0],
        },
        "source": {"vrm": _repo_path(vrm), "sha256": _sha256(vrm)},
        "assets": {
            "glb": {
                "path": _repo_path(glb_path),
                "bytes": glb_path.stat().st_size,
                "sha256": _sha256(glb_path),
                "format": "glTF 2.0 binary",
            },
            "authorBlend": {
                "path": _repo_path(blend_path),
                "bytes": blend_path.stat().st_size,
                "sha256": _sha256(blend_path),
            },
        },
        "counts": metrics,
        "budgets": {
            "maxTriangles": 200_000,
            "actualTriangles": metrics["triangleCount"],
            "maxMaterials": 40,
            "actualMaterials": metrics["materialCount"],
            "maxRuntimePayloadBytes": 120 * 1024 * 1024,
            "actualGlbBytes": glb_path.stat().st_size,
        },
        "camera": {
            "position": overview["position"],
            "target": overview["target"],
            "fovDegrees": overview["fovDegrees"],
            "near": 0.05,
            "far": 100.0,
            "upAxis": "Z",
        },
        "cameraPresets": L.CAMERA_PRESETS,
        "framing": {
            "contract": "use_manifest_camera",
            "characterScreenHeightTarget": 0.48,
            "autoFrameFromSceneBounds": False,
        },
        "room": {
            "deskSurfaceZ": L.DESK_SURFACE_Z,
            "rugTopZ": L.RUG_TOP_Z,
            "chairSeatHeight": L.CHAIR_SEAT_TOP_Z,
            "window": L.WINDOW,
            "lampPos": list(L.LAMP_POS),
            "coffeeRestPos": list(L.COFFEE_REST_POS),
            "lighting": "dynamic time-of-day + soft shadows + anime cel shader",
            "screenGeometry": {
                "headToScreenDistanceMeters": round(float(screen_dist), 5),
                "headForwardToScreenAngleDegrees": round(float(screen_angle), 2),
                "screenNode": "MonitorScreen",
                "screenFacing": "toward-character",
            },
        },
        "sockets": {
            "Prop_Coffee": {"node": "Prop_Coffee", "attach": "right_hand", "restPosition": [0.0, 0.0, 0.0]},
            "Prop_Phone": {"node": "Prop_Phone", "attach": "left_hand", "restPosition": [0.0, 0.0, 0.0]},
            "Prop_Pen": {"node": "Prop_Pen", "attach": "left_hand", "restPosition": [0.0, 0.0, 0.0]},
            "Keyboard": {"node": "Keyboard", "attach": "desk_surface"},
            "Chair": {"node": "Chair", "attach": "rug"},
            "Headphones": {"node": "Headphones_3D", "attach": "head_skinned"},
        },
        "clips": list(action_meta.values()),
        "validation": {
            "requiredNodes": [
                "SnozzyRoom3D_Root", "Prop_Coffee", "Prop_Phone", "Prop_Pen",
                "Keyboard", "Chair", "MonitorScreen", "SideMonitorScreen",
                "Headphones_3D",
            ],
            "requiredClips": [
                "idle_seated_loop", "typing_loop", "coffee_once",
                "phone_once", "stand_stretch_once",
            ],
            "allClips": list(A.ACTION_SPECS),
            "maxTriangles": 200_000,
            "maxMaterials": 40,
            "maxRuntimePayloadBytes": 120 * 1024 * 1024,
            "contactContract": "hand-local rigid grip point within < 0.025m of prop socket",
        },
        "qa": {
            "previewImages": [_repo_path(p) for p in previews],
            "notes": [
                "All 10 skeletal animations authored at 24fps Bezier with verified contact.",
                "Hair spring bones J_Sec_Hair* are driven live at 60fps in Three.js.",
            ],
        },
    }
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    return manifest


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("vrm", nargs="?", type=Path, default=ROOT / "Snozzy.vrm")
    parser.add_argument("out", nargs="?", type=Path, default=ROOT / "Assets/Realtime3D")
    return parser.parse_args(sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else [])


if __name__ == "__main__":
    args = parse_args()
    vrm = args.vrm if args.vrm.is_absolute() else ROOT / args.vrm
    out = args.out if args.out.is_absolute() else ROOT / args.out
    if not vrm.exists():
        raise SystemExit(f"missing VRM: {vrm}")
    result = build(vrm.resolve(), out.resolve())
    print(json.dumps({
        "ROOM3D_EXPORT": "OK",
        "glb": result["assets"]["glb"],
        "counts": {k: result["counts"][k] for k in (
            "meshCount", "triangleCount", "materialCount", "boneCount",
            "morphTargetCount", "feetMinZ", "keyboardBaseZ",
        )},
        "clips": [c["name"] for c in result["clips"]],
    }, ensure_ascii=False))

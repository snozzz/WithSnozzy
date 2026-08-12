"""Build and export the reproducible Three.js Phase 0 GLB asset.

This is deliberately an authoring script, not a one-shot bootstrap.  It imports
the checked-in VRM, applies the same clean-up/pose helpers as the 2.5D render
pipeline, authors a small seated scene and a single sampled runtime animation,
then exports one self-contained GLB plus a machine-readable contract.

The animation is one continuous master timeline.  The manifest names the
overlapping clip ranges so GLTFLoader can create two loopable actions without
duplicating the 222-joint skinned scene.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import os
import struct
import sys
from pathlib import Path

import bpy
from mathutils import Matrix, Vector

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
sys.path.insert(0, str(HERE))

import keyboard as K  # noqa: E402
import pose as P  # noqa: E402
import snozzy_lib as S  # noqa: E402


# One contract shared by Blender, the GLB animation and Three.js.  Frame zero
# is the first sample; an end frame is the last sample at the two-second clip
# boundary, so the adjacent clips share frame 48 without an off-by-one trim.
FPS = 24
IDLE_START, IDLE_END = 0, 48
TYPING_START, TYPING_END = 48, 96
CLIP_SECONDS = (IDLE_END - IDLE_START) / FPS
CROSSFADE_SECONDS = 0.3


def _is_alpha_material_name(name: str) -> bool:
    """Identify cutout character materials without matching ``Phase0Chair``."""
    lower = name.lower()
    return (
        "hair" in lower and "chair" not in lower
    ) or any(token in lower for token in ("eyelash", "eyeline", "brow"))


def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for block in iter(lambda: f.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()


def asset_manifest_path(path: Path) -> str:
    """Use repository-relative paths, but keep isolated /tmp probes valid."""
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        return str(path)


def json_dump(path: Path, value: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n")


def _image_digest(image) -> str:
    # `Image.pixels` is the decoded source, which remains deterministic for an
    # embedded glTF image and does not depend on a temporary filesystem path.
    import struct

    h = hashlib.sha256()
    h.update(struct.pack("<II", image.size[0], image.size[1]))
    # A memoryview is not exposed by Blender's RNA collection on every 5.x
    # build, so use a bounded chunked loop rather than materialising a second
    # huge list of floats.
    pixels = image.pixels
    chunk = 16384
    for start in range(0, len(pixels), chunk):
        h.update(struct.pack("<%sf" % min(chunk, len(pixels) - start),
                             *pixels[start:start + chunk]))
    return h.hexdigest()


def _material_images(material):
    if not material.use_nodes:
        return []
    return [node.image for node in material.node_tree.nodes
            if node.type == "TEX_IMAGE" and node.image is not None]


def _author_phase0_preview_materials() -> dict[str, dict]:
    """Rebuild VRM graphs into portable Principled graphs.

    VRM shader groups are valid in Blender but are not a stable browser
    interchange contract. Every character material gets a standard Principled
    graph, with the source image driving diffuse/emission and its alpha driving
    opacity for hair/eyelash/cutout surfaces.
    """
    records: dict[str, dict] = {}
    for material in bpy.data.materials:
        if not material.use_nodes or material.users <= 0:
            continue
        old_nodes = list(material.node_tree.nodes)
        old_bsdf = next((node for node in old_nodes if node.type == "BSDF_PRINCIPLED"), None)
        images = [node.image for node in old_nodes
                  if node.type == "TEX_IMAGE" and node.image is not None]
        image = images[0] if images else None
        is_alpha_surface = _is_alpha_material_name(material.name)
        base_color = (0.8, 0.8, 0.8, 1.0)
        alpha_value = 1.0
        if old_bsdf is not None:
            if "Base Color" in old_bsdf.inputs:
                base_color = tuple(old_bsdf.inputs["Base Color"].default_value)
            if "Alpha" in old_bsdf.inputs:
                alpha_value = float(old_bsdf.inputs["Alpha"].default_value)

        nodes = material.node_tree.nodes
        links = material.node_tree.links
        nodes.clear()
        output = nodes.new("ShaderNodeOutputMaterial")
        output.name = "Phase0_GLTF_Material_Output"
        bsdf = nodes.new("ShaderNodeBsdfPrincipled")
        bsdf.name = "Phase0_GLTF_ToonReady"
        bsdf.inputs["Roughness"].default_value = 0.86
        bsdf.inputs["Metallic"].default_value = 0.0
        if image is not None:
            tex = nodes.new("ShaderNodeTexImage")
            tex.name = "Phase0_AlphaDiffuse_Texture"
            tex.image = image
            links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
            # Emission preserves the source glTF's flat/toon colour without
            # relying on a VRM-specific node group at runtime.
            if "Emission Color" in bsdf.inputs:
                links.new(tex.outputs["Color"], bsdf.inputs["Emission Color"])
            if "Emission Strength" in bsdf.inputs:
                bsdf.inputs["Emission Strength"].default_value = 1.0
            if "Alpha" in bsdf.inputs and "Alpha" in tex.outputs:
                links.new(tex.outputs["Alpha"], bsdf.inputs["Alpha"])
                alpha_binding = "image_alpha"
            else:
                alpha_binding = "constant"
        else:
            bsdf.inputs["Base Color"].default_value = base_color
            if "Emission Color" in bsdf.inputs:
                bsdf.inputs["Emission Color"].default_value = base_color
            if "Emission Strength" in bsdf.inputs:
                bsdf.inputs["Emission Strength"].default_value = 1.0
            if "Alpha" in bsdf.inputs:
                bsdf.inputs["Alpha"].default_value = alpha_value
            alpha_binding = "constant"
        links.new(bsdf.outputs["BSDF"], output.inputs["Surface"])
        # Keep the source cutout policy explicit even when the texture happens
        # to be opaque in a particular pose; glTF consumers still receive the
        # opacity input and can apply the alpha channel deterministically.
        if hasattr(material, "surface_render_method"):
            material.surface_render_method = "DITHERED"
        elif hasattr(material, "blend_method"):
            material.blend_method = "HASHED"
        material.use_backface_culling = False
        material["phase0_gltf_material"] = True
        material["phase0_diffuse_binding"] = "image_color" if image is not None else "constant"
        material["phase0_alpha_binding"] = alpha_binding
        records[material.name] = {
            "gltfMaterial": True,
            "diffuseBinding": "image_color" if image is not None else "constant",
            "alphaBinding": alpha_binding,
            "image": image.name if image is not None else None,
        }
    return records


def downsample_phase0_textures() -> list[dict]:
    """Keep face/hair at <=2K and all other source textures at <=1K."""

    records = []
    seen: dict[int, dict] = {}
    for material in bpy.data.materials:
        is_face_or_hair = any(token in material.name.lower()
                              for token in ("hair", "face", "eye", "eyelash",
                                            "eyeline", "brow", "mouth"))
        limit = 2048 if is_face_or_hair else 1024
        for image in _material_images(material):
            key = image.as_pointer()
            if key in seen:
                continue
            source_width, source_height = image.size[:]
            source_hash = _image_digest(image)
            max_dim = max(source_width, source_height)
            if max_dim > limit:
                scale = limit / max_dim
                image.scale(max(1, round(source_width * scale)),
                            max(1, round(source_height * scale)))
                image.pack()
            elif image.packed_file is None:
                # Imported VRM textures are packed.  Keep this explicit so a
                # future VRM with external images still yields a self-contained
                # author source.
                image.pack()
            export_width, export_height = image.size[:]
            rec = {
                "name": image.name,
                "sourceWidth": source_width,
                "sourceHeight": source_height,
                "exportWidth": export_width,
                "exportHeight": export_height,
                "limit": limit,
                "sourceHash": source_hash,
                "exportHash": _image_digest(image),
            }
            seen[key] = rec
            records.append(rec)
    return records


def _new_material(name: str, color: tuple[float, float, float],
                  alpha: float = 1.0):
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    bsdf = next(node for node in material.node_tree.nodes
                if node.type == "BSDF_PRINCIPLED")
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Roughness"].default_value = 0.86
    if "Alpha" in bsdf.inputs:
        bsdf.inputs["Alpha"].default_value = alpha
    if hasattr(material, "surface_render_method"):
        material.surface_render_method = "DITHERED" if alpha < 1 else "DITHERED"
    elif hasattr(material, "blend_method"):
        material.blend_method = "HASHED" if alpha < 1 else "HASHED"
    return material


def _cube(name: str, size: tuple[float, float, float], location: tuple[float, float, float],
          material):
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=location)
    obj = bpy.context.object
    obj.name = name
    obj.scale = Vector(size)
    obj.data.materials.append(material)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    return obj


def build_blocking(root):
    """Small real-scale desk/chair/keyboard blocking for spatial judgement."""

    wood = _new_material("Phase0DeskWarm", (0.38, 0.23, 0.18))
    edge = _new_material("Phase0DeskEdge", (0.18, 0.12, 0.16))
    chair_mat = _new_material("Phase0Chair", (0.24, 0.18, 0.28))
    desk = _cube("Phase0_DeskTop", (1.55, 0.72, 0.055),
                 (0.05, -0.48, K.DESK_Z - 0.0275), wood)
    desk["phase0_role"] = "desk_surface"
    desk_legs = []
    for i, x in enumerate((-0.62, 0.72)):
        leg = _cube(f"Phase0_DeskLeg_{i}", (0.055, 0.055, K.DESK_Z),
                    (x, -0.48, K.DESK_Z / 2), edge)
        leg["phase0_role"] = "desk_leg"
        desk_legs.append(leg)
    # A compact chair behind the character.  It is intentionally only a block;
    # the phase gate needs scale and overlap, not finished furniture art.
    seat = _cube("Phase0_ChairSeat", (0.50, 0.48, 0.06),
                 (0.0, 0.12, 0.48), chair_mat)
    back = _cube("Phase0_ChairBack", (0.50, 0.06, 0.68),
                 (0.0, 0.34, 0.79), chair_mat)
    for obj in (desk, seat, back):
        obj["phase0_real_scale_m"] = tuple(float(v) for v in obj.dimensions)
    # Build the same diagonal keyboard used by the 2.5D hand alignment helper.
    keyboard = bpy.data.objects.get("Keyboard") or K.build(outline=True)
    keyboard["phase0_role"] = "keyboard"
    keyboard["phase0_dimensions_m"] = tuple(float(v) for v in keyboard.dimensions)
    slab = K.desk_slab(width=1.6)
    slab.name = "Phase0_DeskOcclusionSlab"
    slab.data.materials.append(edge)
    slab["phase0_role"] = "desk_occlusion"
    # Keep the occlusion polygon visually unobtrusive in the author scene but
    # retain it in GLB as a measurable spatial reference.
    for obj in (desk, seat, back, keyboard, slab, *desk_legs):
        if obj.parent is None:
            obj.parent = root
    return [desk, seat, back, keyboard, slab, *desk_legs]


def _animation_bones(arm):
    names = [
        "J_Bip_C_Hips", "J_Bip_C_Spine", "J_Bip_C_Chest",
        "J_Bip_C_UpperChest", "J_Bip_C_Neck", "J_Bip_C_Head",
    ]
    for side in ("L", "R"):
        names.extend(f"J_Bip_{side}_{bone}"
                     for bone in ("Shoulder", "UpperArm", "LowerArm", "Hand"))
        names.extend(f"J_Bip_{side}_{finger}{segment}"
                     for finger in ("Thumb", "Index", "Middle", "Ring", "Little")
                     for segment in (1, 2, 3))
    return [arm.pose.bones[name] for name in names if name in arm.pose.bones]


def _snapshot_pose(arm):
    return {pb.name: (pb.matrix_basis.copy(), pb.rotation_mode)
            for pb in arm.pose.bones}


def _restore_pose(arm, snapshot):
    for pb in arm.pose.bones:
        value = snapshot.get(pb.name)
        if value is not None:
            pb.rotation_mode = value[1]
            pb.matrix_basis = value[0].copy()
    bpy.context.view_layer.update()


def _key_pose(bones, frame):
    for pb in bones:
        pb.keyframe_insert(data_path="location", frame=frame, group=pb.name)
        pb.keyframe_insert(data_path="scale", frame=frame, group=pb.name)
        if pb.rotation_mode == "QUATERNION":
            pb.keyframe_insert(data_path="rotation_quaternion", frame=frame,
                               group=pb.name)
        else:
            pb.keyframe_insert(data_path="rotation_euler", frame=frame,
                               group=pb.name)


def _breath_and_head(arm, breath: float, head_bob: float):
    # The small movement is deliberately applied after hand placement so it
    # does not move fingertips away from the keyboard target.
    P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), breath)
    P._rotate_world(arm, "J_Bip_C_UpperChest", (1, 0, 0), breath * 0.72)
    P._rotate_world(arm, "J_Bip_C_Head", (1, 0, 0), head_bob)


def _author_master_animation(scene, arm):
    scene.render.fps = FPS
    scene.frame_start = IDLE_START
    scene.frame_end = TYPING_END
    arm.animation_data_clear()
    action = bpy.data.actions.new("Phase0_RuntimeMaster")
    action["phase0_clip_contract"] = "idle_seated_loop:0-48;typing_loop:48-96;fps=24"
    arm.animation_data_create()
    arm.animation_data.action = action
    bones = _animation_bones(arm)
    base = _snapshot_pose(arm)

    # Shared base pose at both clip boundaries.  Frame 48 is intentionally
    # shared by both ranges so a Three.js transition has a true
    # overlap rather than a hidden one-frame discontinuity.
    sample_frames = list(range(IDLE_START, IDLE_END + 1, 12))
    if sample_frames[-1] != IDLE_END:
        sample_frames.append(IDLE_END)
    neutral_pose = None
    for frame in sample_frames:
        _restore_pose(arm, base)
        phase = (frame - IDLE_START) / (IDLE_END - IDLE_START) * math.tau
        # `type_hands` is intentionally called for the idle base too: its
        # world-space aim operation is not mathematically idempotent, and a
        # shared call path makes frame 48 exactly the same as typing's neutral
        # frame instead of introducing a hidden pose jump at the clip seam.
        P.type_hands(arm, scene, press=0.0, side_first="L", on_keyboard=True)
        if frame in (IDLE_START, IDLE_END):
            _breath_and_head(arm, 0.0, 0.0)
        else:
            _breath_and_head(arm, 0.014 * math.sin(phase),
                             0.006 * math.sin(phase))
        if frame == IDLE_START:
            neutral_pose = _snapshot_pose(arm)
        elif frame == IDLE_END and neutral_pose is not None:
            # World-space aim operations can accumulate sub-millidegree float
            # drift in unkeyed hair children.  Reusing the exact neutral pose
            # gives the GLB clip a mathematically closed loop, including those
            # children that are not in the runtime animated-bone subset.
            _restore_pose(arm, neutral_pose)
        _key_pose(bones, frame)

    # Typing is a real arm/finger pose sequence, not a material or opacity
    # effect.  Each hand alternates, with a slight chest/head breathing cue.
    for frame in range(TYPING_START, TYPING_END + 1, 12):
        _restore_pose(arm, base)
        local = (frame - TYPING_START) / (TYPING_END - TYPING_START)
        if frame == TYPING_START and neutral_pose is not None:
            _restore_pose(arm, neutral_pose)
            _key_pose(bones, frame)
            continue
        press, side = ((0.0, "L") if frame == TYPING_START else
                       P.TYPING_FRAMES[((frame - TYPING_START) // 12) % len(P.TYPING_FRAMES)])
        P.type_hands(arm, scene, press=press, side_first=side, on_keyboard=True)
        _breath_and_head(arm, 0.012 * math.sin(local * math.tau),
                         0.005 * math.sin(local * math.tau + 0.25))
        if frame == TYPING_END and neutral_pose is not None:
            _restore_pose(arm, neutral_pose)
        _key_pose(bones, frame)
    if TYPING_END not in range(TYPING_START, TYPING_END + 1, 12):
        _restore_pose(arm, base)
        P.type_hands(arm, scene, press=0.0, side_first="L", on_keyboard=True)
        _key_pose(bones, TYPING_END)

    # Blender 5.2 stores actions in layered channel-bags instead of exposing
    # the pre-5.0 `Action.fcurves` collection.  Keep this branch explicit so
    # the authoring script remains readable when run against the installed LTS.
    fcurves = []
    if hasattr(action, "fcurves"):
        fcurves.extend(action.fcurves)
    else:
        for layer in action.layers:
            for strip in layer.strips:
                for channelbag in strip.channelbags:
                    fcurves.extend(channelbag.fcurves)
    for fcurve in fcurves:
        for key in fcurve.keyframe_points:
            key.interpolation = "BEZIER"
            key.handle_left_type = "AUTO_CLAMPED"
            key.handle_right_type = "AUTO_CLAMPED"
    action.frame_start = IDLE_START
    action.frame_end = TYPING_END
    bpy.context.view_layer.update()
    return action, bones, base


def _pose_error_at(arm, bones, a: int, b: int) -> float:
    bpy.context.scene.frame_set(a)
    first = {pb.name: pb.matrix.copy() for pb in bones}
    bpy.context.scene.frame_set(b)
    return max(max(abs(float(value)) for row in (first[pb.name] - pb.matrix)
                   for value in row) for pb in bones)


def _finger_metrics(arm, keyboard, side: str):
    # Report fingertips in keyboard-local coordinates.  This avoids relying on
    # a camera or pixels for the spatial contract.
    # The joined keyboard intentionally keeps a non-uniform object scale in
    # Blender.  Its inverse would report normalized coordinates rather than
    # metres (the same trap is documented in HANDOFF.md), so use rotation only.
    rot_inv = keyboard.rotation_euler.to_matrix().transposed()
    points = []
    for finger in ("Index", "Middle", "Ring", "Little"):
        pb = arm.pose.bones.get(f"J_Bip_{side}_{finger}3")
        if pb is not None:
            points.append(rot_inv @ (arm.matrix_world @ pb.tail - keyboard.location))
    return [[round(float(v), 6) for v in p] for p in points]


def _triangle_count(obj) -> int:
    return sum(max(1, len(poly.vertices) - 2) for poly in obj.data.polygons)


def _asset_metrics(meshes, arm, runtime_meshes=None):
    runtime_meshes = runtime_meshes or meshes
    character_materials = {
        slot.material.name
        for obj in meshes
        for slot in obj.material_slots
        if slot.material is not None
    }
    return {
        "boneCount": len(arm.data.bones),
        "runtimeBoneCount": sum(1 for bone in arm.data.bones if not bone.use_deform is False),
        "characterMeshCount": len(meshes),
        "meshCount": len(runtime_meshes),
        "meshes": [{
            "name": obj.name,
            "vertices": len(obj.data.vertices),
            "polygons": len(obj.data.polygons),
            "triangles": _triangle_count(obj),
            "materials": len(obj.data.materials),
            "morphs": (max(0, len(obj.data.shape_keys.key_blocks) - 1)
                       if obj.data.shape_keys else 0),
        } for obj in runtime_meshes],
        "characterMaterialCount": len(character_materials),
        "materialCount": len({
            slot.material.name
            for obj in runtime_meshes
            for slot in obj.material_slots
            if slot.material is not None
        }),
        "characterTriangleCount": sum(_triangle_count(obj) for obj in meshes),
        "triangleCount": sum(_triangle_count(obj) for obj in runtime_meshes),
        "morphTargetCount": sum(max(0, len(obj.data.shape_keys.key_blocks) - 1)
                                 if obj.data.shape_keys else 0 for obj in meshes),
    }


def _material_metrics(runtime_meshes=None):
    runtime_materials = None
    if runtime_meshes is not None:
        runtime_materials = {
            slot.material.name
            for obj in runtime_meshes
            for slot in obj.material_slots
            if slot.material is not None
        }
    records = []
    for material in bpy.data.materials:
        if material.users <= 0 or (runtime_materials is not None and material.name not in runtime_materials):
            continue
        alpha = getattr(material, "surface_render_method", None)
        if alpha is None:
            alpha = getattr(material, "blend_method", "OPAQUE")
        is_hair_or_eyelash = _is_alpha_material_name(material.name)
        records.append({
            "name": material.name,
            "alphaMode": str(alpha),
            "isHairOrEyelash": is_hair_or_eyelash,
            "toonReady": bool(material.use_nodes),
            "gltfMaterial": bool(material.get("phase0_gltf_material", False)),
            "diffuseBinding": material.get("phase0_diffuse_binding", "unknown"),
            "alphaBinding": material.get("phase0_alpha_binding", "unknown"),
        })
    return records


def _bounds_for(meshes):
    lo, hi = S.deformed_bounds(meshes)
    return {"min": [round(float(v), 6) for v in lo],
            "max": [round(float(v), 6) for v in hi],
            "size": [round(float(v), 6) for v in hi - lo]}


def _select_export_tree(root):
    """Select the named root and every descendant, excluding cameras/lights."""
    bpy.ops.object.select_all(action="DESELECT")
    stack = [root]
    while stack:
        obj = stack.pop()
        if obj.type not in {"CAMERA", "LIGHT"}:
            obj.select_set(True)
        stack.extend(list(obj.children))
    bpy.context.view_layer.objects.active = root


def _export_glb(path: Path, root):
    """Export a portable, embedded-texture glTF 2.0 binary."""
    path.parent.mkdir(parents=True, exist_ok=True)
    _select_export_tree(root)
    kwargs = dict(
        filepath=str(path),
        export_format="GLB",
        use_selection=True,
        export_animations=True,
        export_frame_range=True,
        export_force_sampling=True,
        export_nla_strips=False,
        export_skins=True,
        export_morph=True,
        export_materials="EXPORT",
        export_image_format="AUTO",
        export_texcoords=True,
        export_normals=True,
        export_tangents=False,
        # Keep the authoring scene Z-up in the GLB.  phase0.js applies the
        # explicit +90° X conversion once at the runtime root for Three.js'
        # Y-up world; exporting Y-up here as well would rotate the seated
        # character a second time and leave the desk vertical.
        export_yup=False,
        export_apply=False,
        export_extras=True,
        export_cameras=False,
        export_lights=False,
        export_attributes=True,
        export_all_influences=True,
        # Blender 5.2's GLB exporter treats `keep_originals=True` as an
        # external-image preservation request and silently drops packed image
        # payloads from a binary export.  A runtime GLB must be self-contained;
        # false forces the packed image bytes into bufferViews.
        export_keep_originals=False,
    )
    bpy.ops.export_scene.gltf(**kwargs)
    if not path.exists() or path.stat().st_size == 0:
        raise RuntimeError(f"GLB export produced no file: {path}")


def _mat4_mul(a, b):
    return [[sum(a[i][k] * b[k][j] for k in range(4))
             for j in range(4)] for i in range(4)]


def _node_matrix(node):
    """Read a glTF node transform as a row-major matrix for diagnostics."""
    if "matrix" in node:
        values = node["matrix"]
        return [[float(values[c * 4 + r]) for c in range(4)] for r in range(4)]
    translation = node.get("translation", [0.0, 0.0, 0.0])
    quaternion = node.get("rotation", [0.0, 0.0, 0.0, 1.0])
    scale = node.get("scale", [1.0, 1.0, 1.0])
    x, y, z, w = (float(value) for value in quaternion)
    xx, yy, zz = x * x, y * y, z * z
    xy, xz, yz = x * y, x * z, y * z
    wx, wy, wz = w * x, w * y, w * z
    return [
        [(1 - 2 * (yy + zz)) * scale[0], (2 * (xy - wz)) * scale[1],
         (2 * (xz + wy)) * scale[2], float(translation[0])],
        [(2 * (xy + wz)) * scale[0], (1 - 2 * (xx + zz)) * scale[1],
         (2 * (yz - wx)) * scale[2], float(translation[1])],
        [(2 * (xz - wy)) * scale[0], (2 * (yz + wx)) * scale[1],
         (1 - 2 * (xx + yy)) * scale[2], float(translation[2])],
        [0.0, 0.0, 0.0, 1.0],
    ]


def _glb_accessor_bounds(path: Path) -> dict:
    """Record the exported POSITION accessor box, before GPU skinning.

    A glTF POSITION accessor on a SkinnedMesh is bind-space data; it cannot be
    compared to the evaluated Blender frame box without running a skinning
    implementation.  Keeping this separate from the author-space `bounds`
    makes the validator strict about the actual exported axes/transforms while
    avoiding a false failure on legitimate animated vertices.
    """
    data = path.read_bytes()
    if len(data) < 20 or data[:4] != b"glTF":
        raise RuntimeError(f"not a GLB: {path}")
    offset = 12
    document = None
    while offset + 8 <= len(data):
        length = struct.unpack_from("<I", data, offset)[0]
        chunk_type = data[offset + 4:offset + 8]
        offset += 8
        chunk = data[offset:offset + length]
        offset += length
        if chunk_type == b"JSON":
            document = json.loads(chunk.decode("utf-8").rstrip(" \x00\t\r\n"))
    if document is None:
        raise RuntimeError("GLB JSON chunk missing")
    nodes = document.get("nodes", [])
    world = {}

    def visit(index, parent):
        current = _mat4_mul(parent, _node_matrix(nodes[index]))
        world[index] = current
        for child in nodes[index].get("children", []):
            visit(int(child), current)

    identity = [[1.0, 0.0, 0.0, 0.0],
                [0.0, 1.0, 0.0, 0.0],
                [0.0, 0.0, 1.0, 0.0],
                [0.0, 0.0, 0.0, 1.0]]
    child_indices = {int(child) for node in nodes for child in node.get("children", [])}
    for index in set(range(len(nodes))) - child_indices:
        visit(index, identity)

    lo = [math.inf, math.inf, math.inf]
    hi = [-math.inf, -math.inf, -math.inf]
    found = False
    accessors = document.get("accessors", [])
    meshes = document.get("meshes", [])
    for index, node in enumerate(nodes):
        mesh_index = node.get("mesh")
        if mesh_index is None:
            continue
        transform = world.get(index, identity)
        for primitive in meshes[int(mesh_index)].get("primitives", []):
            accessor = accessors[int(primitive["attributes"]["POSITION"])]
            if "min" not in accessor or "max" not in accessor:
                continue
            minimum, maximum = accessor["min"], accessor["max"]
            for x in (float(minimum[0]), float(maximum[0])):
                for y in (float(minimum[1]), float(maximum[1])):
                    for z in (float(minimum[2]), float(maximum[2])):
                        point = [sum(transform[row][column] *
                                     (x, y, z, 1.0)[column]
                                     for column in range(4)) for row in range(3)]
                        for axis in range(3):
                            lo[axis] = min(lo[axis], point[axis])
                            hi[axis] = max(hi[axis], point[axis])
                        found = True
    if not found:
        raise RuntimeError("GLB POSITION bounds missing")
    return {
        "min": [round(float(value), 6) for value in lo],
        "max": [round(float(value), 6) for value in hi],
        "size": [round(float(hi[i] - lo[i]), 6) for i in range(3)],
        "space": "gltf-node-world-before-skin",
    }


def _remove_phase0_sleeves(meshes):
    """Build a body-only probe without changing the shared VRoid loader."""
    kept = []
    for obj in list(meshes):
        if obj.name not in {"Sleeve_L", "Sleeve_R"}:
            kept.append(obj)
            continue
        bpy.data.objects.remove(obj, do_unlink=True)
    return kept


def build(vrm: Path, out: Path, include_sleeves: bool = True) -> dict:
    out.mkdir(parents=True, exist_ok=True)
    bpy.ops.wm.read_factory_settings(use_empty=True)
    meshes = S.load(str(vrm), realtime3d=True)
    if not include_sleeves:
        meshes = _remove_phase0_sleeves(meshes)
    arm = next((obj for obj in bpy.data.objects if obj.type == "ARMATURE"), None)
    if arm is None:
        raise RuntimeError("VRM import did not create an armature")
    root = bpy.data.objects.new("Phase0Root", None)
    root.empty_display_type = "PLAIN_AXES"
    root.empty_display_size = 0.10
    root["phase0_coordinate_system"] = "Z-up, metersPerUnit=1"
    root["phase0_author_source"] = str(vrm.name)
    bpy.context.scene.collection.objects.link(root)
    arm.parent = root
    arm["phase0_role"] = "character_armature"
    arm["phase0_source_bone_count"] = len(arm.data.bones)

    scene = S.setup_scene(res=512, transparent=False)
    scene.render.resolution_x, scene.render.resolution_y = 512, 512
    scene.render.fps = FPS
    scene.unit_settings.system = "METRIC"
    scene.unit_settings.scale_length = 1.0
    scene.unit_settings.length_unit = "METERS"
    scene["phase0_up_axis"] = "Z"
    scene["phase0_meters_per_unit"] = 1.0
    scene["phase0_root"] = "Phase0Root"
    S.scene_camera(scene, yaw_deg=13, height=1.42, dist=2.55, look_z=0.86, lens=32)
    build_blocking(root)

    # Sleeves are authored in armature-local bind space by sleeve.py and stay
    # children of the armature. Reparenting them to Phase0Root after the
    # armature is translated would drop the armature's scene offset and leave
    # both sleeves roughly half a metre away from the forearms.
    for sleeve_name in ("Sleeve_L", "Sleeve_R"):
        sleeve = bpy.data.objects.get(sleeve_name)
        if include_sleeves and sleeve is not None:
            if sleeve.parent != arm:
                raise RuntimeError(f"{sleeve_name} must remain parented to Armature")
            sleeve["phase0_bind_space"] = "armature-local"

    # Replace VRM-specific node groups with explicit Principled graphs.  This
    # keeps the GLB material contract portable while preserving the source
    # image's alpha for hair/eyelash/cutout surfaces.
    _author_phase0_preview_materials()
    # Author the seated keyboard base before sampling any clip.  Keeping this
    # call here (rather than inside each frame loop) makes the shared frame 48
    # pose an exact, inspectable crossfade anchor.
    P.settle(scene, arm, on_keyboard=True)
    action, anim_bones, _ = _author_master_animation(scene, arm)
    scene.frame_set(IDLE_START)
    bpy.context.view_layer.update()

    texture_records = downsample_phase0_textures()
    runtime_meshes = [obj for obj in bpy.data.objects if obj.type == "MESH"]
    metrics = _asset_metrics(meshes, arm, runtime_meshes)
    metrics["characterMaterialCount"] = len({
        slot.material.name
        for obj in meshes
        for slot in obj.material_slots
        if slot.material is not None
    })
    metrics["alphaMaterialCount"] = sum(
        1 for material in _material_metrics() if material["isHairOrEyelash"]
    )
    keyboard = bpy.data.objects.get("Keyboard")
    if keyboard is None:
        raise RuntimeError("phase0 keyboard missing")
    loop_idle_error = _pose_error_at(arm, anim_bones, IDLE_START, IDLE_END)
    loop_typing_error = _pose_error_at(arm, anim_bones, TYPING_START, TYPING_END)
    scene.frame_set(TYPING_START)
    tip_local = {side: _finger_metrics(arm, keyboard, side) for side in ("L", "R")}
    scene.frame_set(IDLE_START)
    bounds = _bounds_for(runtime_meshes)
    bounds["rootHeightMeters"] = round(float(bounds["size"][2]), 6)
    bounds["character"] = _bounds_for(meshes)

    source_hash = sha256_file(vrm)
    manifest = {
        "schema": "withsnozzy.realtime3d.phase0",
        "schemaVersion": 1,
        "generator": {
            "blenderVersion": bpy.app.version_string,
            "script": str(Path(__file__).relative_to(ROOT)),
            "fps": FPS,
        },
        "coordinateSystem": {
            "root": "Phase0Root",
            "upAxis": "Z",
            "forwardAxis": "-Y",
            "metersPerUnit": 1.0,
            "rootScale": [1.0, 1.0, 1.0],
        },
        "spaceContract": {
            "sleeves": "armature-local-bind",
            "runtimeRootTranslation": [0.0, 0.0, 0.0],
            "runtimeRootScale": [1.0, 1.0, 1.0],
            "forbidRendererOffsets": True,
        },
        "source": {"path": str(vrm.relative_to(ROOT)), "sha256": source_hash},
        "assets": {},
        "counts": metrics,
        "materials": _material_metrics(runtime_meshes),
        "textures": texture_records,
        "bounds": bounds,
        "clips": [
            {
                "name": "idle_seated_loop",
                "startFrame": IDLE_START,
                "endFrame": IDLE_END,
                "rangeSemantics": "inclusive-sample-frame",
                "runtimeTrimFrames": [0, 49],
                "sampleRate": FPS,
                "durationSeconds": CLIP_SECONDS,
                "loop": True,
                "animatedBones": [pb.name for pb in anim_bones],
                "loopPoseMaxError": loop_idle_error,
                "features": ["breathing", "head_micro_motion", "seated_pose"],
            },
            {
                "name": "typing_loop",
                "startFrame": TYPING_START,
                "endFrame": TYPING_END,
                "rangeSemantics": "inclusive-sample-frame",
                "runtimeTrimFrames": [48, 97],
                "sampleRate": FPS,
                "durationSeconds": CLIP_SECONDS,
                "loop": True,
                "animatedBones": [pb.name for pb in anim_bones],
                "loopPoseMaxError": loop_typing_error,
                "features": ["alternating_arms", "finger_curl", "breathing", "head_micro_motion"],
                "fingerTipsKeyboardLocalAtStart": tip_local,
            },
        ],
        "crossfade": {
            "durationSeconds": CROSSFADE_SECONDS,
            "contract": "trimmed AnimationView resources overlap at frame 48; blendFactor 0→1",
            "overlapFrame": TYPING_START,
            "requiresLoopingResources": True,
        },
        "blocking": {
            "deskSurfaceZ": K.DESK_Z,
            "deskBackY": K.DESK_BACK_Y,
            "deskFrontY": K.DESK_FRONT_Y,
            "keyboardWidth": K.WIDTH,
            "keyboardDepth": K.DEPTH,
            "chairSeatHeight": 0.48,
        },
        "validation": {
            "requiredNodeNames": ["Phase0Root", "Armature", "Keyboard", "Phase0_DeskTop", "Phase0_ChairSeat"],
            "requiredClipNames": ["idle_seated_loop", "typing_loop"],
            "requiredMorphTargetCount": 57,
            "requiredBoneCount": 222,
            "requiredCharacterMaterialCount": 20,
            "requiredAlphaMaterialTokens": ["hair", "eyelash", "eyeline"],
            "requiredScale": [1.0, 1.0, 1.0],
            "requiredSleeveBindSpace": "armature-local",
            "maxAssetBytes": 1024 * 1024 * 1024,
        },
        "diagnostics": {
            "probeCommand": "dist/WithSnozzy.app/Contents/MacOS/WithSnozzy --3dphase0 Assets/Realtime3D/Phase0Runtime.glb",
            "probeScreenshot": "Assets/Realtime3D/phase0_three_idle.png",
            "probeReport": "Assets/Realtime3D/phase0_three_report.json",
        },
    }

    glb = out / "Phase0Runtime.glb"
    blend = out / "Phase0Author.blend"
    manifest_path = out / "Phase0Manifest.json"
    # Export from the in-memory author scene first.  The author file is saved
    # only once below; repeated saves would create a .blend1 backup and, more
    # importantly, make a self-referential author-file hash impossible.
    _export_glb(glb, root)
    manifest["bounds"]["glbAccessor"] = _glb_accessor_bounds(glb)
    manifest["assets"]["glb"] = {
        "path": asset_manifest_path(glb),
        "bytes": glb.stat().st_size,
        "sha256": sha256_file(glb),
        "format": "glTF 2.0 binary",
    }
    # Preserve author intent in the .blend itself as well as the sidecar file.
    # The embedded manifest intentionally leaves authorBlend self-hash blank;
    # the sidecar gets the final hash after this one save.
    manifest["assets"]["authorBlend"] = {
        "path": asset_manifest_path(blend),
        "bytes": None,
        "sha256": None,
    }
    text = bpy.data.texts.get("Phase0Manifest") or bpy.data.texts.new("Phase0Manifest")
    text.clear()
    text.write(json.dumps(manifest, ensure_ascii=False, indent=2))
    json_dump(manifest_path, manifest)
    bpy.ops.wm.save_as_mainfile(filepath=str(blend))
    # Saving the blend changed its hash; update the sidecar only.  Writing the
    # text block again would change the file and reintroduce the recursion.
    manifest["assets"]["authorBlend"] = {
        "path": asset_manifest_path(blend),
        "bytes": blend.stat().st_size,
        "sha256": sha256_file(blend),
    }
    json_dump(manifest_path, manifest)
    return manifest


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("vrm", nargs="?", type=Path, default=ROOT / "Snozzy.vrm")
    parser.add_argument("out", nargs="?", type=Path, default=ROOT / "Assets/Realtime3D")
    parser.add_argument("--no-sleeves", action="store_true",
                        help="export a body-only isolation probe")
    args = parser.parse_args(sys.argv[sys.argv.index("--") + 1:]
                             if "--" in sys.argv else [])
    return args


if __name__ == "__main__":
    args = parse_args()
    vrm = args.vrm if args.vrm.is_absolute() else ROOT / args.vrm
    out = args.out if args.out.is_absolute() else ROOT / args.out
    if not vrm.exists():
        raise SystemExit(f"missing VRM source: {vrm}")
    result = build(vrm.resolve(), out.resolve(), include_sleeves=not args.no_sleeves)
    print(json.dumps({
        "PHASE0_EXPORT": "OK",
        "glb": result["assets"].get("glb"),
        "bones": result["counts"]["boneCount"],
        "morphs": result["counts"]["morphTargetCount"],
        "triangles": result["counts"]["triangleCount"],
    }, ensure_ascii=False))

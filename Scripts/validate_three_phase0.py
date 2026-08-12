#!/usr/bin/env python3
"""Validate the browser-facing Three.js Phase 0 GLB and its sidecar contract.

The checks intentionally inspect the GLB JSON chunk instead of trusting only
the manifest.  A stale sidecar therefore cannot hide a missing skin, morph
target, material alpha mode, animation, node, or asset hash. ``--negative-suite``
mutates only in-memory copies and proves the important gates fail closed.

The validator treats the exported glTF accessor box as a separate coordinate
space from Blender's evaluated author-space bounds.  Comparing those two boxes
was a false positive in the first Phase 0 validator: the exporter keeps the
armature bind-space box in ``bounds.glbAccessor`` while Blender's evaluated
scene includes the Z-up authoring transform and skinning.
"""

from __future__ import annotations

import argparse
import copy
import hashlib
import json
import math
import struct
import sys
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
SCHEMA = "withsnozzy.realtime3d.phase0"


class ValidationError(RuntimeError):
    pass


def require(condition: bool, message: str) -> None:
    if not condition:
        raise ValidationError(message)


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def read_glb(path: Path) -> tuple[dict[str, Any], bytes]:
    require(path.exists(), f"missing GLB: {path}")
    data = path.read_bytes()
    require(len(data) >= 20, "GLB header is truncated")
    magic, version, length = struct.unpack_from("<4sII", data, 0)
    require(magic == b"glTF" and version == 2, "not a glTF 2.0 binary")
    require(length == len(data), f"GLB length mismatch: header={length} actual={len(data)}")
    offset = 12
    json_chunk = None
    binary_chunk = b""
    while offset + 8 <= len(data):
        chunk_length, chunk_type = struct.unpack_from("<I4s", data, offset)
        offset += 8
        chunk = data[offset:offset + chunk_length]
        require(len(chunk) == chunk_length, "GLB chunk is truncated")
        offset += chunk_length
        if chunk_type == b"JSON":
            json_chunk = chunk
        elif chunk_type == b"BIN\x00":
            binary_chunk = chunk
    require(json_chunk is not None, "GLB JSON chunk missing")
    try:
        document = json.loads(json_chunk.decode("utf-8").rstrip(" \x00\t\r\n"))
    except Exception as exc:  # pragma: no cover - exact parser error is not contract
        raise ValidationError(f"invalid GLB JSON: {exc}") from exc
    return document, binary_chunk


def resolve_path(manifest_path: Path, value: str) -> Path:
    candidate = ROOT / value
    if candidate.exists():
        return candidate
    return manifest_path.parent / Path(value).name


def load_manifest(path: Path) -> dict[str, Any]:
    require(path.exists(), f"missing manifest: {path}")
    try:
        manifest = json.loads(path.read_text())
    except Exception as exc:
        raise ValidationError(f"invalid manifest JSON: {exc}") from exc
    require(manifest.get("schema") == SCHEMA, "schema mismatch")
    require(manifest.get("schemaVersion") == 1, "unsupported schemaVersion")
    return manifest


def mat_mul(a: list[list[float]], b: list[list[float]]) -> list[list[float]]:
    return [[sum(a[i][k] * b[k][j] for k in range(4)) for j in range(4)] for i in range(4)]


def mat_vec(matrix: list[list[float]], point: tuple[float, float, float]) -> tuple[float, float, float]:
    x, y, z = point
    return tuple(
        matrix[i][0] * x + matrix[i][1] * y + matrix[i][2] * z + matrix[i][3]
        for i in range(3)
    )


def node_matrix(node: dict[str, Any]) -> list[list[float]]:
    if "matrix" in node:
        values = node["matrix"]
        return [[float(values[c * 4 + r]) for c in range(4)] for r in range(4)]
    t = node.get("translation", [0.0, 0.0, 0.0])
    q = node.get("rotation", [0.0, 0.0, 0.0, 1.0])
    s = node.get("scale", [1.0, 1.0, 1.0])
    x, y, z, w = (float(v) for v in q)
    xx, yy, zz = x * x, y * y, z * z
    xy, xz, yz = x * y, x * z, y * z
    wx, wy, wz = w * x, w * y, w * z
    return [
        [(1 - 2 * (yy + zz)) * s[0], (2 * (xy - wz)) * s[1], (2 * (xz + wy)) * s[2], float(t[0])],
        [(2 * (xy + wz)) * s[0], (1 - 2 * (xx + zz)) * s[1], (2 * (yz - wx)) * s[2], float(t[1])],
        [(2 * (xz - wy)) * s[0], (2 * (yz + wx)) * s[1], (1 - 2 * (xx + yy)) * s[2], float(t[2])],
        [0.0, 0.0, 0.0, 1.0],
    ]


def world_matrices(gltf: dict[str, Any]) -> dict[int, list[list[float]]]:
    """Return node-world matrices in the glTF (pre-GPU-skinning) space."""
    nodes = gltf.get("nodes", [])
    world: dict[int, list[list[float]]] = {}

    def visit(index: int, parent: list[list[float]]) -> None:
        current = mat_mul(parent, node_matrix(nodes[index]))
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
    return world


_TYPE_COMPONENTS = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4, "MAT2": 4,
                    "MAT3": 9, "MAT4": 16}
_COMPONENT_FORMATS = {
    5120: ("b", 1),  # BYTE
    5121: ("B", 1),  # UNSIGNED_BYTE
    5122: ("h", 2),  # SHORT
    5123: ("H", 2),  # UNSIGNED_SHORT
    5125: ("I", 4),  # UNSIGNED_INT
    5126: ("f", 4),  # FLOAT
}


def accessor_storage(gltf: dict[str, Any], accessor_index: int, binary: bytes) -> tuple[dict[str, Any], int, int, str, int]:
    """Return accessor metadata and its byte-layout information."""
    accessors = gltf.get("accessors", [])
    views = gltf.get("bufferViews", [])
    require(0 <= int(accessor_index) < len(accessors), f"accessor index out of range: {accessor_index}")
    accessor = accessors[int(accessor_index)]
    require("bufferView" in accessor, f"sparse or missing-bufferView accessor: {accessor_index}")
    view = views[int(accessor["bufferView"])]
    require(int(view.get("buffer", 0)) == 0, f"accessor {accessor_index} is not in the GLB BIN chunk")
    component = _COMPONENT_FORMATS.get(int(accessor.get("componentType", 0)))
    require(component is not None, f"unsupported accessor component type: {accessor.get('componentType')}")
    fmt, component_bytes = component
    components = _TYPE_COMPONENTS.get(str(accessor.get("type")))
    require(components is not None, f"unsupported accessor type: {accessor.get('type')}")
    element_bytes = components * component_bytes
    offset = int(view.get("byteOffset", 0)) + int(accessor.get("byteOffset", 0))
    stride = int(view.get("byteStride", element_bytes))
    count = int(accessor.get("count", 0))
    require(stride >= element_bytes, f"accessor {accessor_index} has a short byteStride")
    if count:
        require(offset + (count - 1) * stride + element_bytes <= len(binary),
                f"accessor {accessor_index} exceeds the GLB BIN chunk")
    return accessor, offset, stride, fmt, components


def accessor_values(gltf: dict[str, Any], accessor_index: int, binary: bytes):
    accessor, offset, stride, fmt, components = accessor_storage(gltf, accessor_index, binary)
    count = int(accessor.get("count", 0))
    format_string = f"<{components}{fmt}"
    element_bytes = struct.calcsize(format_string)
    for index in range(count):
        yield struct.unpack_from(format_string, binary, offset + index * stride)


def embedded_texture_metrics(gltf: dict[str, Any], manifest: dict[str, Any], binary: bytes) -> dict[str, Any]:
    """Require the character's color/alpha images to be embedded in the GLB."""
    required = manifest.get("validation", {})
    required_count = int(required.get("requiredCharacterMaterialCount", 20))
    images = gltf.get("images", [])
    textures = gltf.get("textures", [])
    views = gltf.get("bufferViews", [])
    require(len(images) >= required_count, f"GLB images below required count: {len(images)} < {required_count}")
    require(len(textures) >= required_count, f"GLB textures below required count: {len(textures)} < {required_count}")

    embedded_images = 0
    image_sources: dict[int, dict[str, Any]] = {}
    for image_index, image in enumerate(images):
        view_index = image.get("bufferView")
        require(view_index is not None, f"image {image_index} is not embedded in a bufferView")
        require(0 <= int(view_index) < len(views), f"image {image_index} bufferView is out of range")
        view = views[int(view_index)]
        require(int(view.get("buffer", 0)) == 0, f"image {image_index} is not in the GLB BIN chunk")
        start = int(view.get("byteOffset", 0))
        length = int(view.get("byteLength", 0))
        require(length > 0 and start + length <= len(binary), f"image {image_index} bufferView is empty or truncated")
        require(str(image.get("mimeType", "")).startswith("image/"), f"image {image_index} has no image mimeType")
        embedded_images += 1
        image_sources[image_index] = {"name": image.get("name", ""), "bufferView": int(view_index),
                                      "mimeType": image.get("mimeType"), "bytes": length}

    gltf_materials = gltf.get("materials", [])
    material_by_name = {str(material.get("name", "")): material for material in gltf_materials}
    character_materials = [material for material in gltf_materials
                           if material.get("extras", {}).get("phase0_diffuse_binding") == "image_color"]
    require(len(character_materials) >= required_count,
            f"GLB image-bound character materials below required count: {len(character_materials)} < {required_count}")
    manifest_names = [str(material.get("name", "")) for material in manifest.get("materials", [])
                      if material.get("diffuseBinding") == "image_color"]
    require(len(manifest_names) >= required_count,
            f"manifest image-bound character materials below required count: {len(manifest_names)} < {required_count}")

    bindings = []
    for name in manifest_names[:required_count]:
        material = material_by_name.get(name)
        require(material is not None, f"required character material missing from GLB: {name}")
        pbr = material.get("pbrMetallicRoughness", {})
        texture_index = pbr.get("baseColorTexture", {}).get("index")
        require(texture_index is not None, f"character material has no baseColorTexture: {name}")
        require(0 <= int(texture_index) < len(textures), f"baseColorTexture index out of range: {name}")
        texture = textures[int(texture_index)]
        source_index = texture.get("source")
        require(source_index is not None and 0 <= int(source_index) < len(images),
                f"baseColorTexture source out of range: {name}")
        require(int(source_index) in image_sources, f"baseColorTexture image is not embedded: {name}")
        source = image_sources[int(source_index)]
        require(source["mimeType"] == "image/png",
                f"character material image is not PNG: {name}")
        view_start = int(views[int(source["bufferView"])].get("byteOffset", 0))
        require(binary[view_start:view_start + 8] == b"\x89PNG\r\n\x1a\n",
                f"character material image is not a PNG payload: {name}")
        bindings.append({"material": name, "texture": int(texture_index), "image": int(source_index),
                         "imageName": image_sources[int(source_index)]["name"]})

    alpha_names = " ".join(str(material.get("name", "")).lower() for material in character_materials
                           if material.get("alphaMode", "OPAQUE") in {"BLEND", "MASK"})
    alpha_tokens = [str(token).lower() for token in required.get("requiredAlphaMaterialTokens", [])]
    require(all(token in alpha_names for token in alpha_tokens), "required hair/eyelash alpha materials missing")
    return {"imageCount": len(images), "embeddedImageCount": embedded_images,
            "textureCount": len(textures), "characterMaterialCount": len(character_materials),
            "requiredCharacterMaterialCount": required_count,
            "baseColorBindings": bindings, "alphaTokens": alpha_tokens}


def skin_metrics(gltf: dict[str, Any], manifest: dict[str, Any], binary: bytes) -> dict[str, Any]:
    """Check skin attributes and that every exported IBM cancels its joint."""
    skins = gltf.get("skins", [])
    required = manifest.get("validation", {})
    require(skins, "GLB skin missing")
    skin = skins[0]
    joints = [int(index) for index in skin.get("joints", [])]
    required_bones = int(required.get("requiredBoneCount", len(joints)))
    require(len(joints) == required_bones, f"skin joint count mismatch: {len(joints)} != {required_bones}")
    ibm_index = skin.get("inverseBindMatrices")
    require(ibm_index is not None, "skin inverseBindMatrices missing")
    ibm_accessor, ibm_offset, ibm_stride, ibm_fmt, ibm_components = accessor_storage(gltf, int(ibm_index), binary)
    require(ibm_accessor.get("type") == "MAT4" and ibm_accessor.get("componentType") == 5126,
            "inverseBindMatrices must be FLOAT MAT4")
    require(int(ibm_accessor.get("count", 0)) == len(joints), "inverseBindMatrices count mismatch")
    require(ibm_components == 16 and ibm_fmt == "f", "inverseBindMatrices layout mismatch")
    world = world_matrices(gltf)
    identity = [[1.0 if row == column else 0.0 for column in range(4)] for row in range(4)]
    ibm_max_error = 0.0
    ibm_sum_squared = 0.0
    for index, joint in enumerate(joints):
        require(joint in world, f"skin joint has no node transform: {joint}")
        values = struct.unpack_from("<16f", binary, ibm_offset + index * ibm_stride)
        inverse_bind = [[values[column * 4 + row] for column in range(4)] for row in range(4)]
        product = mat_mul(world[joint], inverse_bind)
        for row in range(4):
            for column in range(4):
                error = abs(product[row][column] - identity[row][column])
                ibm_max_error = max(ibm_max_error, error)
                ibm_sum_squared += error * error
    ibm_rms = math.sqrt(ibm_sum_squared / (len(joints) * 16))
    require(ibm_max_error < 1e-4, f"inverseBindMatrices identity error too large: {ibm_max_error:.6g}")

    nodes = gltf.get("nodes", [])
    checked_vertices = 0
    max_weight_sum_error = 0.0
    max_joint_index = 0
    for node in nodes:
        if node.get("skin") is None:
            continue
        require(int(node["skin"]) == 0, f"unexpected skin index on node: {node.get('name', '')}")
        mesh = gltf.get("meshes", [])[int(node["mesh"])]
        for primitive in mesh.get("primitives", []):
            attributes = primitive.get("attributes", {})
            require("POSITION" in attributes and "JOINTS_0" in attributes and "WEIGHTS_0" in attributes,
                    f"skinned primitive missing POSITION/JOINTS_0/WEIGHTS_0: {node.get('name', '')}")
            position = gltf.get("accessors", [])[int(attributes["POSITION"])]
            joint_accessor = gltf.get("accessors", [])[int(attributes["JOINTS_0"])]
            weight_accessor = gltf.get("accessors", [])[int(attributes["WEIGHTS_0"])]
            vertex_count = int(position.get("count", 0))
            require(int(joint_accessor.get("count", -1)) == vertex_count and
                    int(weight_accessor.get("count", -1)) == vertex_count,
                    f"skin attribute count mismatch: {node.get('name', '')}")
            require(joint_accessor.get("type") == "VEC4" and joint_accessor.get("componentType") in {5121, 5123, 5125},
                    f"invalid JOINTS_0 accessor: {node.get('name', '')}")
            require(weight_accessor.get("type") == "VEC4" and weight_accessor.get("componentType") == 5126,
                    f"invalid WEIGHTS_0 accessor: {node.get('name', '')}")
            joint_values = accessor_values(gltf, int(attributes["JOINTS_0"]), binary)
            weight_values = accessor_values(gltf, int(attributes["WEIGHTS_0"]), binary)
            for joint_row, weight_row in zip(joint_values, weight_values):
                for joint in joint_row:
                    joint_index = int(joint)
                    require(0 <= joint_index < len(joints), f"JOINTS_0 index out of range: {joint_index}")
                    max_joint_index = max(max_joint_index, joint_index)
                require(all(math.isfinite(float(weight)) and -1e-6 <= float(weight) <= 1.000001
                             for weight in weight_row), "WEIGHTS_0 contains an invalid value")
                weight_sum_error = abs(sum(float(weight) for weight in weight_row) - 1.0)
                max_weight_sum_error = max(max_weight_sum_error, weight_sum_error)
                require(weight_sum_error <= 2e-3, "WEIGHTS_0 rows are not normalized")
                checked_vertices += 1
    require(checked_vertices > 0, "no skinned vertices were checked")
    return {"skinCount": len(skins), "jointCount": len(joints), "checkedVertices": checked_vertices,
            "ibmIdentityRMS": ibm_rms, "ibmIdentityMaxError": ibm_max_error,
            "maxWeightSumError": max_weight_sum_error, "maxJointIndex": max_joint_index}


def sleeve_metrics(gltf: dict[str, Any], manifest: dict[str, Any]) -> dict[str, Any]:
    """Enforce the armature-local sleeve parenting contract in the exported GLB."""
    contract = manifest.get("spaceContract", {})
    require(contract.get("sleeves") == "armature-local-bind", "sleeve space contract missing")
    require(contract.get("forbidRendererOffsets") is True, "renderer offsets are not forbidden")
    nodes = gltf.get("nodes", [])
    node_by_name = {str(node.get("name", "")): index for index, node in enumerate(nodes)}
    require("Armature" in node_by_name, "Armature node missing for sleeve contract")
    armature_index = node_by_name["Armature"]
    parents = {int(child): index for index, node in enumerate(nodes) for child in node.get("children", [])}
    identity = [[1.0 if row == column else 0.0 for column in range(4)] for row in range(4)]
    records = []
    for name in ("Sleeve_L", "Sleeve_R"):
        require(name in node_by_name, f"required sleeve node missing: {name}")
        index = node_by_name[name]
        node = nodes[index]
        require(parents.get(index) == armature_index, f"{name} is not parented under Armature")
        require(node.get("extras", {}).get("phase0_bind_space") == "armature-local",
                f"{name} bind space is not armature-local")
        require(node.get("skin") is not None, f"{name} has no skin")
        transform_error = max(abs(node_matrix(node)[row][column] - identity[row][column])
                              for row in range(4) for column in range(4))
        require(transform_error < 1e-6, f"{name} has a renderer-space transform")
        records.append({"name": name, "node": index, "parent": nodes[armature_index].get("name"),
                        "bindSpace": node.get("extras", {}).get("phase0_bind_space"),
                        "transformMaxError": transform_error})
    return {"armatureNode": armature_index, "sleeves": records}


def actual_bounds(gltf: dict[str, Any]) -> dict[str, list[float]]:
    """Return POSITION bounds after the exported glTF node/root transforms.

    Blender's author-space bounds are Z-up and include the evaluated pose.  The
    GLB contract records a separate ``bounds.glbAccessor`` box in the
    glTF-node-world-before-skin space.  This function deliberately mirrors
    that export-space calculation rather than comparing it to the author-space
    ``bounds.min/max`` box.
    """
    accessors = gltf.get("accessors", [])
    meshes = gltf.get("meshes", [])
    nodes = gltf.get("nodes", [])
    world: dict[int, list[list[float]]] = {}

    def visit(index: int, parent: list[list[float]]) -> None:
        current = mat_mul(parent, node_matrix(nodes[index]))
        world[index] = current
        for child in nodes[index].get("children", []):
            visit(int(child), current)

    identity = [[1.0, 0.0, 0.0, 0.0], [0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 1.0, 0.0], [0.0, 0.0, 0.0, 1.0]]
    roots = set(range(len(nodes))) - {int(child) for node in nodes for child in node.get("children", [])}
    for root in roots:
        visit(root, identity)

    lo = [math.inf, math.inf, math.inf]
    hi = [-math.inf, -math.inf, -math.inf]
    found = False
    for index, node in enumerate(nodes):
        mesh_index = node.get("mesh")
        if mesh_index is None:
            continue
        for primitive in meshes[int(mesh_index)].get("primitives", []):
            accessor = accessors[int(primitive["attributes"]["POSITION"])]
            if "min" not in accessor or "max" not in accessor:
                continue
            minimum, maximum = accessor["min"], accessor["max"]
            for x in (float(minimum[0]), float(maximum[0])):
                for y in (float(minimum[1]), float(maximum[1])):
                    for z in (float(minimum[2]), float(maximum[2])):
                        point = mat_vec(world.get(index, identity), (x, y, z))
                        for axis in range(3):
                            lo[axis] = min(lo[axis], point[axis])
                            hi[axis] = max(hi[axis], point[axis])
                        found = True
    require(found, "POSITION bounds missing from GLB")
    return {"min": lo, "max": hi, "size": [hi[i] - lo[i] for i in range(3)]}


def compare_bounds(actual: dict[str, list[float]], expected: dict[str, Any], label: str) -> None:
    """Compare an exported accessor/root-transform box with float32 tolerance.

    The manifest is written from Blender's export-time accessor extrema, while
    the validator reads float32 values back out of the GLB.  A 1e-5 absolute
    tolerance is strict enough to reject a stale transform or wrong axis but
    absorbs the expected sub-micro-unit JSON/float32 rounding.
    """
    require(isinstance(expected, dict), f"{label} bounds missing from manifest")
    for field in ("min", "max", "size"):
        actual_values = actual.get(field, [])
        expected_values = expected.get(field, [])
        require(len(actual_values) == 3 and len(expected_values) == 3,
                f"{label} bounds {field} must have three values")
        for axis, (observed, recorded) in enumerate(zip(actual_values, expected_values)):
            require(math.isfinite(float(recorded)), f"{label} bounds contain a non-finite value")
            delta = abs(float(observed) - float(recorded))
            require(delta <= 1e-5,
                    f"{label} bounds {field}[{axis}] differ: {observed:.9g} != {recorded:.9g}")


def glb_metrics(gltf: dict[str, Any]) -> dict[str, Any]:
    accessors = gltf.get("accessors", [])
    triangles = 0
    mesh_records = []
    morph_names: set[str] = set()
    for mesh in gltf.get("meshes", []):
        mesh_triangles = 0
        mesh_morphs = 0
        for primitive in mesh.get("primitives", []):
            if "indices" in primitive:
                mesh_triangles += int(accessors[int(primitive["indices"])] ["count"]) // 3
            else:
                mesh_triangles += int(accessors[int(primitive["attributes"]["POSITION"])] ["count"]) // 3
            targets = primitive.get("targets", [])
            mesh_morphs = max(mesh_morphs, len(targets))
        target_names = mesh.get("extras", {}).get("targetNames", [])
        morph_names.update(str(name) for name in target_names)
        triangles += mesh_triangles
        mesh_records.append({"name": mesh.get("name", ""), "triangles": mesh_triangles, "morphTargetCount": mesh_morphs})
    if not morph_names:
        morph_names = {str(index) for mesh in gltf.get("meshes", []) for primitive in mesh.get("primitives", [])
                       for index in range(len(primitive.get("targets", [])))}
    animations = []
    for animation in gltf.get("animations", []):
        max_time = 0.0
        track_count = len(animation.get("channels", []))
        bone_track_count = 0
        for channel in animation.get("channels", []):
            sampler = animation.get("samplers", [])[int(channel["sampler"])]
            input_accessor = accessors[int(sampler["input"])]
            if input_accessor.get("max"):
                max_time = max(max_time, float(input_accessor["max"][0]))
            target = gltf.get("nodes", [])[int(channel.get("target", {}).get("node", -1))] if channel.get("target", {}).get("node") is not None else {}
            if str(target.get("name", "")).startswith("J_") or str(target.get("name", "")).startswith("Root"):
                bone_track_count += 1
        animations.append({"name": animation.get("name", ""), "durationSeconds": max_time,
                           "trackCount": track_count, "boneTrackCount": bone_track_count})
    alpha_materials = [material for material in gltf.get("materials", [])
                       if material.get("alphaMode", "OPAQUE") in {"BLEND", "MASK"}]
    node_names = {str(node.get("name", "")) for node in gltf.get("nodes", [])}
    skins = gltf.get("skins", [])
    skin_bones = max((len(skin.get("joints", [])) for skin in skins), default=0)
    return {
        "nodeCount": len(gltf.get("nodes", [])),
        "meshCount": len(gltf.get("meshes", [])),
        "triangleCount": triangles,
        "boneCount": skin_bones,
        "skinCount": len(skins),
        "morphTargetCount": len(morph_names),
        "morphTargetNames": sorted(morph_names),
        "materialCount": len(gltf.get("materials", [])),
        "alphaMaterialCount": len(alpha_materials),
        "alphaMaterials": [{"name": material.get("name", ""), "alphaMode": material.get("alphaMode", "OPAQUE"),
                            "alphaCutoff": material.get("alphaCutoff")} for material in alpha_materials],
        "meshRecords": mesh_records,
        "animations": animations,
        "nodeNames": sorted(node_names),
        "bounds": actual_bounds(gltf),
    }


def validate(manifest_path: Path, manifest: dict[str, Any], gltf: dict[str, Any] | None = None,
             glb_path: Path | None = None, binary: bytes | None = None) -> dict[str, Any]:
    require(manifest.get("coordinateSystem", {}).get("rootScale") == [1.0, 1.0, 1.0], "root scale must be [1,1,1]")
    coordinates = manifest.get("coordinateSystem", {})
    require(coordinates.get("upAxis") == "Z" and coordinates.get("metersPerUnit") == 1.0, "coordinate system mismatch")
    source = manifest.get("source", {})
    source_path = resolve_path(manifest_path, str(source.get("path", "")))
    require(source_path.exists(), f"missing source VRM: {source_path}")
    require(sha256(source_path) == source.get("sha256"), "source VRM hash mismatch")
    assets = manifest.get("assets", {})
    glb_record = assets.get("glb", {})
    candidate = glb_path or resolve_path(manifest_path, str(glb_record.get("path", "")))
    require(candidate.exists(), f"missing GLB: {candidate}")
    require(sha256(candidate) == glb_record.get("sha256"), "GLB hash mismatch")
    require(candidate.stat().st_size == glb_record.get("bytes"), "GLB byte size mismatch")
    blend_record = assets.get("authorBlend", {})
    blend_path = resolve_path(manifest_path, str(blend_record.get("path", "")))
    require(blend_path.exists(), f"missing author blend: {blend_path}")
    require(sha256(blend_path) == blend_record.get("sha256"), "author blend hash mismatch")
    if gltf is None or binary is None:
        loaded_gltf, loaded_binary = read_glb(candidate)
        if gltf is None:
            gltf = loaded_gltf
        if binary is None:
            binary = loaded_binary
    require(gltf is not None and binary is not None, "GLB payload was not loaded")
    metrics = glb_metrics(gltf)
    counts = manifest.get("counts", {})
    require(metrics["triangleCount"] == counts.get("triangleCount"), "triangle count mismatch")
    require(metrics["triangleCount"] >= counts.get("characterTriangleCount", 0), "runtime triangle count below character count")
    require(metrics["boneCount"] == counts.get("boneCount"), "bone count mismatch")
    require(metrics["morphTargetCount"] == counts.get("morphTargetCount"), "morph target count mismatch")
    require(metrics["materialCount"] >= counts.get("characterMaterialCount", 0), "character material count exceeds GLB")
    require(metrics["alphaMaterialCount"] >= 1, "GLB has no alpha material")
    required = manifest.get("validation", {})
    require(metrics["boneCount"] == required.get("requiredBoneCount"), "required skeleton count missing")
    require(metrics["morphTargetCount"] == required.get("requiredMorphTargetCount"), "required morph count missing")
    required_nodes = required.get("requiredNodeNames", [])
    for node in required_nodes:
        require(node in metrics["nodeNames"], f"required node missing: {node}")
    alpha_tokens = [str(token).lower() for token in required.get("requiredAlphaMaterialTokens", [])]
    alpha_names = " ".join(str(item["name"]).lower() for item in metrics["alphaMaterials"])
    require(any(token in alpha_names for token in alpha_tokens), "required hair/eyelash alpha material missing")
    texture_checks = embedded_texture_metrics(gltf, manifest, binary)
    skin_checks = skin_metrics(gltf, manifest, binary)
    sleeve_checks = sleeve_metrics(gltf, manifest)

    root_name = str(coordinates.get("root", ""))
    node_by_name = {str(node.get("name", "")): node for node in gltf.get("nodes", [])}
    require(root_name in node_by_name, f"coordinate root node missing: {root_name}")
    root_node = node_by_name[root_name]
    root_transform = node_matrix(root_node)
    space_contract = manifest.get("spaceContract", {})
    recorded_root_translation = space_contract.get("runtimeRootTranslation", [0.0, 0.0, 0.0])
    recorded_root_scale = space_contract.get("runtimeRootScale", [1.0, 1.0, 1.0])
    for axis in range(3):
        require(abs(root_transform[axis][3] - float(recorded_root_translation[axis])) <= 1e-5,
                f"runtime root translation mismatch on axis {axis}")
        require(abs(root_transform[axis][axis] - float(recorded_root_scale[axis])) <= 1e-5,
                f"runtime root scale mismatch on axis {axis}")
    clips = manifest.get("clips", [])
    clip_names = {str(clip.get("name")) for clip in clips}
    require(set(required.get("requiredClipNames", [])) <= clip_names, "required clip missing from manifest")
    require(len(clips) == 2, "manifest must contain exactly idle and typing clips")
    for clip in clips:
        require(int(clip["endFrame"]) > int(clip["startFrame"]), f"invalid clip range: {clip.get('name')}")
        require(float(clip["sampleRate"]) == 24.0 and clip.get("loop") is True, f"invalid clip timing: {clip.get('name')}")
        require(abs(float(clip.get("durationSeconds", 0.0)) - 2.0) <= 1e-6,
                f"clip is not exactly 2 seconds: {clip.get('name')}")
    require(float(manifest.get("crossfade", {}).get("durationSeconds", 0)) == 0.3, "crossfade must be 0.3s")
    require(int(manifest.get("crossfade", {}).get("overlapFrame", -1)) == 48,
            "crossfade overlap frame must be 48")
    require(metrics["animations"], "GLB animation missing")
    require(any(item["trackCount"] > 0 and item["boneTrackCount"] > 0 for item in metrics["animations"]),
            "GLB animation has no bone tracks")
    require(max(item["durationSeconds"] for item in metrics["animations"]) >= 3.99, "master animation range too short")
    actual = metrics["bounds"]
    expected = manifest.get("bounds", {})
    require(all(math.isfinite(value) for value in actual["min"] + actual["max"]), "invalid GLB bounds")
    require(all(value > 0 for value in actual["size"]), "GLB bounds are empty")
    # The author-space ``bounds.min/max`` intentionally has a different Z
    # extent after Blender's evaluated pose.  The strict GLB regression oracle
    # is the export-time accessor/root-transform record instead.
    compare_bounds(actual, expected.get("glbAccessor"), "GLB accessor/root-transform")
    if expected.get("glbRootTransform") is not None:
        compare_bounds(actual, expected.get("glbRootTransform"), "GLB root-transform")
    return {"status": "PASS", "glb": str(candidate), "counts": metrics, "manifestCounts": counts,
            "bounds": actual, "clips": clips, "crossfade": manifest.get("crossfade"),
            "textureChecks": texture_checks, "skinChecks": skin_checks,
            "sleeveChecks": sleeve_checks,
            "rootTransform": {"translation": [root_transform[axis][3] for axis in range(3)],
                               "scale": [root_transform[axis][axis] for axis in range(3)]}}


def negative_suite(manifest_path: Path, manifest: dict[str, Any], gltf: dict[str, Any], glb_path: Path) -> dict[str, Any]:
    cases: list[tuple[str, dict[str, Any], dict[str, Any], Path | None]] = []
    baseline_gltf = copy.deepcopy(gltf)
    missing_glb = copy.deepcopy(manifest)
    missing_glb["assets"]["glb"]["path"] = "Assets/Realtime3D/missing-phase0.glb"
    cases.append(("missing-glb", missing_glb, copy.deepcopy(baseline_gltf), None))
    bad_hash = copy.deepcopy(manifest)
    bad_hash["assets"]["glb"]["sha256"] = "0" * 64
    cases.append(("bad-glb-hash", bad_hash, copy.deepcopy(baseline_gltf), glb_path))
    missing_node = copy.deepcopy(manifest)
    missing_node["validation"]["requiredNodeNames"] = list(missing_node["validation"]["requiredNodeNames"]) + ["Phase0_MissingNode"]
    cases.append(("missing-node", missing_node, copy.deepcopy(baseline_gltf), glb_path))
    missing_clip = copy.deepcopy(manifest)
    missing_clip["clips"] = [missing_clip["clips"][0]]
    cases.append(("missing-clip", missing_clip, copy.deepcopy(baseline_gltf), glb_path))
    missing_alpha = copy.deepcopy(manifest)
    missing_alpha["validation"]["requiredAlphaMaterialTokens"] = ["definitely-no-alpha-material"]
    cases.append(("missing-alpha", missing_alpha, copy.deepcopy(baseline_gltf), glb_path))

    missing_texture = copy.deepcopy(manifest)
    missing_texture_gltf = copy.deepcopy(baseline_gltf)
    missing_texture_gltf["materials"][0]["pbrMetallicRoughness"].pop("baseColorTexture", None)
    cases.append(("missing-texture", missing_texture, missing_texture_gltf, glb_path))

    bad_axis = copy.deepcopy(manifest)
    bad_axis["coordinateSystem"]["upAxis"] = "Y"
    cases.append(("bad-axis", bad_axis, copy.deepcopy(baseline_gltf), glb_path))

    bad_bounds = copy.deepcopy(manifest)
    bad_bounds["bounds"]["glbAccessor"]["size"][0] += 0.25
    cases.append(("bad-bounds", bad_bounds, copy.deepcopy(baseline_gltf), glb_path))

    bad_count = copy.deepcopy(manifest)
    bad_count["counts"]["boneCount"] -= 1
    cases.append(("bad-count", bad_count, copy.deepcopy(baseline_gltf), glb_path))

    bad_space = copy.deepcopy(manifest)
    bad_space["spaceContract"]["sleeves"] = "renderer-offset"
    cases.append(("bad-space-contract", bad_space, copy.deepcopy(baseline_gltf), glb_path))
    results = []
    for name, candidate, candidate_gltf, path in cases:
        try:
            validate(manifest_path, candidate, gltf=candidate_gltf, glb_path=path)
        except ValidationError as exc:
            results.append({"name": name, "status": "EXPECTED_FAIL", "message": str(exc)})
        else:
            results.append({"name": name, "status": "UNEXPECTED_PASS"})
    require(all(item["status"] == "EXPECTED_FAIL" for item in results), "negative suite had an unexpected pass")
    return {"status": "PASS", "cases": results}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("glb", nargs="?", type=Path, default=ROOT / "Assets/Realtime3D/Phase0Runtime.glb")
    parser.add_argument("--manifest", type=Path, default=ROOT / "Assets/Realtime3D/Phase0Manifest.json")
    parser.add_argument("--negative-suite", action="store_true")
    parser.add_argument("--report", type=Path, default=ROOT / "Assets/Realtime3D/phase0_three_validate_report.json")
    args = parser.parse_args()
    glb_path = args.glb if args.glb.is_absolute() else ROOT / args.glb
    manifest_path = args.manifest if args.manifest.is_absolute() else ROOT / args.manifest
    try:
        manifest = load_manifest(manifest_path)
        gltf, binary = read_glb(glb_path)
        result = validate(manifest_path, manifest, gltf=gltf, glb_path=glb_path, binary=binary)
        if args.negative_suite:
            result["negativeSuite"] = negative_suite(manifest_path, manifest, gltf, glb_path)
        args.report.parent.mkdir(parents=True, exist_ok=True)
        args.report.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
        print(json.dumps({"THREE_PHASE0_VALIDATE": "OK", "report": str(args.report),
                          "counts": result["counts"], "negativeSuite": result.get("negativeSuite")},
                         ensure_ascii=False))
        return 0
    except ValidationError as exc:
        print(f"THREE_PHASE0_VALIDATE: FAIL: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())

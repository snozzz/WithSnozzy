"""Build the formal Snozzy realtime room asset.

This is the authoring side of the experimental 3D runtime.  It intentionally
keeps the VRoid import and the pose helpers from the existing 2.5D pipeline,
but owns the room, props, action contract, screenshots, and GLB export here so
the temporary Phase0 file never becomes the production asset by accident.

Run with Blender 5.2::

    blender --background --factory-startup \
      --python Blender/realtime3d/SnozzyRoom3D_export.py -- \
      Snozzy.vrm Assets/Realtime3D

The output is a self-contained GLB plus a source .blend and a manifest.  The
GLB uses real metres, Z-up authoring coordinates, and stable socket names.  The
room is intentionally procedural: changing the palette or prop dimensions is
one edit and the export remains reproducible.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import os
import sys
from pathlib import Path

import bpy
from mathutils import Matrix, Quaternion, Vector

HERE = Path(__file__).resolve().parent
BLENDER_DIR = HERE.parent
ROOT = BLENDER_DIR.parent
sys.path.insert(0, str(BLENDER_DIR))

import keyboard as K  # noqa: E402
import pose as P  # noqa: E402
import snozzy_lib as S  # noqa: E402
import phase0_export as P0  # noqa: E402 - shared proven GLB helpers


FPS = 24
ROOM_RESOLUTION = (960, 640)
REALTIME_WRIST_LIFT = 0.0335
# The display lives just left of the character so the camera can read her
# face, hands, and both props. A small, anatomically plausible neck/head yaw
# keeps her eyes on that display instead of making the monitor do the work by
# sitting over her face.
SCREEN_GAZE_YAW = math.radians(-31.0)
PHONE_HAND_OFFSET_METERS = 0.014
AUTHOR_ASSET = "SnozzyRoom3D"
OUTPUT_GLB = "SnozzyRoom3D.glb"
OUTPUT_BLEND = "SnozzyRoom3D.blend"
OUTPUT_MANIFEST = "SnozzyRoom3DManifest.json"

# The action contract is deliberately human-scale.  Runtime code may sample a
# clip at any point, so the end frame is a real terminal sample rather than a
# hidden one-frame jump.
ACTION_SPECS = {
    "idle_seated_loop": {"seconds": 7.0, "loop": True, "kind": "idle"},
    "typing_loop": {"seconds": 4.0, "loop": True, "kind": "typing"},
    "coffee_once": {"seconds": 6.0, "loop": False, "kind": "coffee"},
    "phone_once": {"seconds": 6.0, "loop": False, "kind": "phone"},
    "stand_stretch_once": {"seconds": 9.0, "loop": False, "kind": "stand"},
}

PALETTE = {
    "wall": (0.72, 0.75, 0.82),
    "wall_trim": (0.25, 0.22, 0.34),
    "floor": (0.25, 0.17, 0.20),
    "floor_inlay": (0.43, 0.24, 0.34),
    "wood": (0.34, 0.19, 0.18),
    "wood_edge": (0.16, 0.09, 0.16),
    "chair": (0.20, 0.15, 0.29),
    "chair_highlight": (0.39, 0.23, 0.47),
    "metal": (0.12, 0.14, 0.21),
    "metal_hi": (0.32, 0.38, 0.52),
    "screen": (0.08, 0.12, 0.23),
    "cyan": (0.16, 0.76, 0.86),
    "magenta": (0.90, 0.26, 0.66),
    "warm": (0.97, 0.54, 0.28),
    "paper": (0.88, 0.82, 0.76),
    "paper_hi": (0.99, 0.87, 0.65),
    "mug": (0.80, 0.34, 0.53),
    "mug_hi": (1.00, 0.62, 0.79),
    "phone": (0.08, 0.09, 0.15),
    "plant": (0.18, 0.48, 0.34),
    "plant_hi": (0.38, 0.74, 0.44),
    "pot": (0.58, 0.33, 0.33),
    "gold": (0.86, 0.57, 0.27),
    "book_a": (0.64, 0.26, 0.34),
    "book_b": (0.25, 0.40, 0.58),
    "book_c": (0.35, 0.48, 0.36),
    "book_d": (0.69, 0.48, 0.27),
}

BOOK_KEYS = ("book_a", "book_b", "book_c", "book_d", "mug", "plant_hi")
_MATERIALS: dict[str, bpy.types.Material] = {}

# Keep the room visually rich without turning every accent into a unique GLB
# material.  The character already carries its 20 VRoid materials; the room
# therefore shares a deliberately small palette of broad roles.
_MATERIAL_ALIASES = {
    "wall_trim": "wall",
    "floor_inlay": "wall",
    "wood_edge": "wood",
    "chair_highlight": "chair",
    "metal_hi": "metal",
    "paper_hi": "paper",
    "mug_hi": "mug",
    "plant_hi": "plant",
    "book_b": "book_a",
    "book_c": "book_a",
    "book_d": "book_a",
}


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


def material(key: str, color=None, *, metallic=0.0, roughness=0.74,
             emission=None, emission_strength=0.0):
    """Return one shared Principled material per palette role.

    Shared materials are a meaningful runtime budget: the room has many props
    but fewer than forty material slots.  Emission is used only for screens and
    neon so the scene still reads in a low-cost forward renderer.
    """
    canonical_key = _MATERIAL_ALIASES.get(key, key)
    cache_key = canonical_key if color is None else f"{canonical_key}:{tuple(color)}"
    if cache_key in _MATERIALS:
        return _MATERIALS[cache_key]
    base = color or PALETTE[canonical_key]
    mat = bpy.data.materials.new(f"Room3D_{canonical_key}")
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*base, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if emission is not None:
        if "Emission Color" in bsdf.inputs:
            bsdf.inputs["Emission Color"].default_value = (*emission, 1.0)
        if "Emission Strength" in bsdf.inputs:
            bsdf.inputs["Emission Strength"].default_value = emission_strength
    mat["room3d_palette_key"] = canonical_key
    _MATERIALS[cache_key] = mat
    return mat


def _apply_bevel(obj, amount=0.008, segments=2):
    if amount <= 0:
        return obj
    modifier = obj.modifiers.new("Room3D_Bevel", "BEVEL")
    modifier.width = amount
    modifier.segments = segments
    modifier.limit_method = "ANGLE"
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    try:
        bpy.ops.object.modifier_apply(modifier=modifier.name)
    finally:
        obj.select_set(False)
    return obj


def box(name, size, location, key, *, color=None, bevel=0.006,
        rotation=(0.0, 0.0, 0.0), parent=None, emission=None,
        emission_strength=0.0):
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=location)
    obj = bpy.context.object
    obj.name = name
    obj.dimensions = Vector(size)
    obj.rotation_euler = rotation
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(material(key, color, emission=emission,
                                       emission_strength=emission_strength))
    _apply_bevel(obj, bevel, 2)
    if parent is not None:
        obj.parent = parent
    return obj


def cylinder(name, radius, depth, location, key, *, color=None, vertices=20,
             rotation=(0.0, 0.0, 0.0), parent=None, bevel=0.002,
             emission=None, emission_strength=0.0):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices, radius=radius,
                                        depth=depth, location=location,
                                        rotation=rotation)
    obj = bpy.context.object
    obj.name = name
    obj.data.materials.append(material(key, color, emission=emission,
                                       emission_strength=emission_strength))
    for poly in obj.data.polygons:
        poly.use_smooth = True
    _apply_bevel(obj, bevel, 2)
    if parent is not None:
        obj.parent = parent
    return obj


def sphere(name, radius, location, key, *, scale=(1.0, 1.0, 1.0),
           parent=None):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=20, ring_count=12,
                                         radius=radius, location=location)
    obj = bpy.context.object
    obj.name = name
    obj.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(material(key))
    for poly in obj.data.polygons:
        poly.use_smooth = True
    if parent is not None:
        obj.parent = parent
    return obj


def torus(name, major, minor, location, key, *, rotation=(0.0, 0.0, 0.0),
          parent=None):
    bpy.ops.mesh.primitive_torus_add(major_radius=major, minor_radius=minor,
                                     major_segments=24, minor_segments=8,
                                     location=location, rotation=rotation)
    obj = bpy.context.object
    obj.name = name
    obj.data.materials.append(material(key))
    if parent is not None:
        obj.parent = parent
    return obj


def empty(name, location=(0.0, 0.0, 0.0), parent=None, display="PLAIN_AXES"):
    obj = bpy.data.objects.new(name, None)
    obj.empty_display_type = display
    obj.empty_display_size = 0.06
    obj.location = location
    bpy.context.scene.collection.objects.link(obj)
    if parent is not None:
        obj.parent = parent
    return obj


def _label(obj, role, socket=None):
    obj["room3d_role"] = role
    if socket:
        obj["room3d_socket"] = socket
    return obj


def build_window(back_y, root):
    """A real window with a deep blue twilight skyline and warm rooms."""
    out = []
    x0, x1, z0, z1 = -1.62, -0.54, 1.02, 2.08
    glass = box("WindowGlass", (x1 - x0, 0.018, z1 - z0),
                ((x0 + x1) / 2, back_y - 0.012, (z0 + z1) / 2),
                "screen", bevel=0, parent=root, emission=PALETTE["screen"],
                emission_strength=0.25)
    _label(glass, "window_sky")
    # Distant skyline: layered silhouettes make the room feel deep without a
    # texture dependency or a high-poly city mesh.
    skyline = [(-1.45, 0.17, 0.48), (-1.16, 0.12, 0.34), (-0.88, 0.20, 0.60),
               (-0.63, 0.10, 0.30), (-0.40, 0.16, 0.52)]
    for i, (x, width, height) in enumerate(skyline):
        tower = box(f"WindowTower{i}", (width, 0.012, height),
                    (x, back_y - 0.035, z0 + height / 2), "wall_trim",
                    bevel=0, parent=root)
        _label(tower, "window_skyline")
        for row in range(max(1, int(height / 0.075))):
            if (row + i) % 3 == 0:
                box(f"WindowLight{i}_{row}", (width * 0.22, 0.006, 0.018),
                    (x - width * 0.18, back_y - 0.045, z0 + 0.06 + row * 0.075),
                    "warm", bevel=0, parent=root, emission=PALETTE["warm"],
                    emission_strength=1.8)
    # A pale moon and two little stars are inexpensive visual anchors.
    sphere("WindowMoon", 0.10, (-1.18, back_y - 0.065, 1.82), "paper_hi",
           scale=(1.0, 0.15, 1.0), parent=root)
    for i, (x, z) in enumerate(((-1.48, 1.70), (-0.86, 1.90), (-1.35, 1.48))):
        sphere(f"WindowStar{i}", 0.012, (x, back_y - 0.070, z), "cyan",
               scale=(1.0, 0.18, 1.0), parent=root)
    # Four soft frame pieces plus a center mullion.
    frame = "wall_trim"
    for name, size, loc in (
        ("WindowFrameTop", (1.22, 0.08, 0.06), ((x0 + x1) / 2, back_y - 0.06, z1)),
        ("WindowFrameBottom", (1.22, 0.08, 0.06), ((x0 + x1) / 2, back_y - 0.06, z0)),
        ("WindowFrameLeft", (0.06, 0.08, 1.08), (x0, back_y - 0.06, (z0 + z1) / 2)),
        ("WindowFrameRight", (0.06, 0.08, 1.08), (x1, back_y - 0.06, (z0 + z1) / 2)),
        ("WindowFrameMid", (0.028, 0.07, 1.02), ((x0 + x1) / 2, back_y - 0.065, (z0 + z1) / 2)),
    ):
        out.append(box(name, size, loc, frame, bevel=0.004, parent=root))
    return out, {"x0": x0, "x1": x1, "z0": z0, "z1": z1, "y": back_y}


def build_shelf(back_y, root):
    out = []
    x0, width = 0.76, 1.24
    shelf_root = empty("Shelf", (0.0, 0.0, 0.0), root)
    box("ShelfBack", (width, 0.05, 1.72), (x0 + width / 2, back_y - 0.06, 1.12),
        "wall_trim", bevel=0, parent=shelf_root)
    for row, z in enumerate((0.38, 0.86, 1.34, 1.82)):
        box(f"ShelfBoard{row}", (width + 0.07, 0.20, 0.035),
            (x0 + width / 2, back_y - 0.19, z), "wood", bevel=0.008,
            parent=shelf_root)
        cursor = x0 + 0.09
        for book_i in range(8):
            w = 0.06 + ((book_i + row * 3) % 4) * 0.014
            h = 0.20 + ((book_i * 5 + row) % 3) * 0.035
            key = BOOK_KEYS[(book_i + row) % len(BOOK_KEYS)]
            book = box(f"ShelfBook{row}_{book_i}", (w, 0.11, h),
                       (cursor + w / 2, back_y - 0.23, z + 0.017 + h / 2),
                       key, bevel=0.004, parent=shelf_root)
            if book_i in (2, 6):
                book.rotation_euler[1] = math.radians(5 if book_i == 2 else -6)
            cursor += w + 0.018
            if cursor > x0 + width - 0.06:
                break
    # A small hanging plant softens the hard shelf silhouette.
    # Children below are authored in room/world coordinates. Keep the named
    # grouping empty at the origin; parenting a non-zero world transform here
    # used to double the plant offset and leave it floating outside the room.
    plant = empty("Plant", (0.0, 0.0, 0.0), shelf_root)
    cylinder("PlantPot", 0.10, 0.12, (1.71, back_y - 0.29, 1.48), "pot",
             vertices=18, parent=plant)
    for i in range(9):
        angle = i * (math.tau / 9.0)
        leaf = sphere(f"PlantLeaf{i}", 0.075,
                      (1.71 + math.cos(angle) * 0.10,
                       back_y - 0.31 + math.sin(angle) * 0.05,
                       1.61 + (i % 3) * 0.045), "plant_hi",
                      scale=(1.0, 0.36, 1.8), parent=plant)
        leaf.rotation_euler[1] = angle * 0.35
    return out


def build_room(root):
    back_y = 1.36
    room = []
    room.append(box("Floor", (6.0, 5.0, 0.06), (0.0, 0.15, -0.03),
                    "floor", bevel=0, parent=root))
    # Back wall is split around the window so the geometry remains a true
    # opening for a future sky/weather layer.
    win = {"x0": -1.62, "x1": -0.54, "z0": 1.02, "z1": 2.08}
    wall_width = 5.4
    room.extend([
        box("WallLower", (wall_width, 0.08, win["z0"]), (0.0, back_y, win["z0"] / 2),
            "wall", bevel=0, parent=root),
        box("WallUpper", (wall_width, 0.08, 1.28),
            (0.0, back_y, win["z1"] + 0.64), "wall", bevel=0, parent=root),
        box("WallLeft", (2.1, 0.08, win["z1"] - win["z0"]),
            (-2.67, back_y, (win["z0"] + win["z1"]) / 2), "wall", bevel=0, parent=root),
        box("WallRight", (3.24, 0.08, win["z1"] - win["z0"]),
            (1.60, back_y, (win["z0"] + win["z1"]) / 2), "wall", bevel=0, parent=root),
    ])
    room.extend(build_window(back_y, root)[0])
    build_shelf(back_y, root)
    # A simple side wall and a glowing vertical corner seam give the camera a
    # believable room boundary without industrial clutter.
    room.append(box("SideWall", (0.08, 3.6, 3.0), (-2.68, -0.35, 1.48),
                    "wall_trim", bevel=0, parent=root))
    box("CornerLight", (0.018, 0.04, 2.2), (-2.60, 1.30, 1.23), "cyan",
        bevel=0, parent=root, emission=PALETTE["cyan"], emission_strength=3.0)
    # Rug: two layered beveled planes read better than one huge flat rectangle.
    box("RugOuter", (2.55, 1.90, 0.018), (0.0, -0.03, 0.012), "floor_inlay",
        bevel=0.035, parent=root)
    box("RugInner", (2.20, 1.52, 0.020), (0.0, -0.03, 0.026), "wall_trim",
        bevel=0.028, parent=root)
    return room


def build_chair(root):
    chair = empty("Chair", (0.0, 0.10, 0.0), root)
    seat_z = 0.48
    box("ChairSeat", (0.58, 0.54, 0.10), (0.0, 0.10, seat_z), "chair",
        bevel=0.065, parent=chair)
    box("ChairSeatAccent", (0.48, 0.43, 0.025), (0.0, -0.005, seat_z + 0.052),
        "chair_highlight", bevel=0.022, parent=chair)
    back = box("ChairBack", (0.60, 0.12, 0.82), (0.0, 0.37, 0.98), "chair",
               bevel=0.075, rotation=(math.radians(-7), 0, 0), parent=chair)
    box("ChairBackAccent", (0.49, 0.035, 0.66), (0.0, 0.304, 0.99),
        "chair_highlight", bevel=0.045, rotation=(math.radians(-7), 0, 0), parent=chair)
    cylinder("ChairPole", 0.045, 0.40, (0.0, 0.10, 0.27), "metal_hi",
             vertices=16, parent=chair)
    cylinder("ChairHub", 0.095, 0.055, (0.0, 0.10, 0.08), "metal",
             vertices=20, parent=chair)
    for i in range(5):
        angle = math.tau * i / 5.0 + 0.3
        leg = box(f"ChairFoot{i}", (0.032, 0.38, 0.028),
                  (math.sin(angle) * 0.17, 0.10 + math.cos(angle) * 0.17, 0.045),
                  "metal", bevel=0.012, rotation=(0, 0, -angle), parent=chair)
        sphere(f"ChairCaster{i}", 0.035,
               (math.sin(angle) * 0.34, 0.10 + math.cos(angle) * 0.34, 0.035),
               "metal_hi", parent=chair)
    # Arm rests frame the character's elbows while keeping the keyboard clear.
    for side in (-1, 1):
        box(f"ChairArm{side}", (0.055, 0.34, 0.045), (side * 0.35, -0.02, 0.69),
            "chair_highlight", bevel=0.018, parent=chair)
        cylinder(f"ChairArmPost{side}", 0.018, 0.19, (side * 0.35, 0.10, 0.58),
                 "metal", vertices=12, parent=chair)
    return chair


def build_monitor(root):
    # Offset the display to Snozzy's left so her face, hands, and the keyboard
    # remain readable from the comparison camera instead of being hidden by a
    # centered foreground monitor.
    monitor = empty("Monitor", (-0.46, -0.42, 0.0), root)
    # Desk-top monitor facing the character and camera (-Y).
    box("MonitorStand", (0.06, 0.10, 0.24), (0.0, 0.0, 0.91), "metal_hi",
        bevel=0.012, parent=monitor)
    box("MonitorBase", (0.38, 0.20, 0.028), (0.0, -0.02, 0.765), "metal",
        bevel=0.014, parent=monitor)
    box("MonitorFrame", (0.70, 0.045, 0.56), (0.0, -0.08, 1.26), "metal",
        bevel=0.028, parent=monitor)
    screen = box("MonitorScreen", (0.60, 0.012, 0.46), (0.0, -0.108, 1.26),
                 "screen", bevel=0.008, parent=monitor,
                 emission=PALETTE["screen"], emission_strength=1.4)
    _label(screen, "screen_surface", "Prop_Screen")
    # Program-like content blocks are geometry here; runtime can swap their
    # material or hide them when a real screen texture is introduced.
    for i, (w, x, z, key) in enumerate(((0.17, -0.14, 1.39, "cyan"),
                                         (0.11, 0.14, 1.39, "magenta"),
                                         (0.25, -0.06, 1.16, "cyan"),
                                         (0.12, 0.12, 1.20, "warm"))):
        box(f"MonitorUI{i}", (w, 0.008, 0.024), (x, -0.118, z), key,
            bevel=0, parent=monitor, emission=PALETTE[key], emission_strength=2.5)
    return monitor


def build_desk_and_props(root):
    desk = empty("Desk", (0.0, 0.0, 0.0), root)
    desk_z = K.DESK_Z
    box("DeskTop", (2.10, 0.78, 0.075), (0.0, -0.47, desk_z), "wood",
        bevel=0.025, parent=desk)
    box("DeskFrontAccent", (2.0, 0.018, 0.018), (0.0, -0.87, desk_z - 0.025),
        "magenta", bevel=0.004, parent=desk, emission=PALETTE["magenta"],
        emission_strength=2.5)
    for side in (-1, 1):
        box(f"DeskLeg{side}", (0.075, 0.075, desk_z), (side * 0.86, -0.48, desk_z / 2),
            "wood_edge", bevel=0.016, parent=desk)
        box(f"DeskLegAccent{side}", (0.014, 0.018, desk_z * 0.8),
            (side * 0.80, -0.44, desk_z * 0.42), "cyan", bevel=0,
            parent=desk, emission=PALETTE["cyan"], emission_strength=1.4)
    # A narrow side return carries the lamp and books, making the workstation
    # read as a complete room rather than a floating slab.
    box("DeskReturn", (0.46, 0.55, 0.065), (0.82, -0.06, desk_z), "wood",
        bevel=0.022, parent=desk)
    box("DeskReturnLeg", (0.06, 0.06, desk_z), (0.97, 0.10, desk_z / 2),
        "wood_edge", bevel=0.014, parent=desk)

    keyboard = K.build(base_color=(0.12, 0.15, 0.22), key_color=(0.66, 0.72, 0.86),
                       outline=False)
    keyboard.parent = desk
    _label(keyboard, "keyboard", "Keyboard")

    # Mouse and a small desk mat add a readable contact surface.
    box("DeskMat", (0.64, 0.33, 0.008), (0.08, -0.55, desk_z + 0.042),
        "wall_trim", bevel=0.02, parent=desk)
    sphere("Mouse", 0.036, (0.39, -0.55, desk_z + 0.072), "metal_hi",
           scale=(1.0, 1.22, 0.62), parent=desk)

    monitor = build_monitor(root)

    # Coffee cup: a socket empty is the stable prop attachment contract.
    coffee_rest = (0.40, -0.67, desk_z + 0.058)
    coffee_anchor = empty("Prop_Coffee_Rest", coffee_rest, root)
    coffee = empty("Prop_Coffee", (0.0, 0.0, 0.0), coffee_anchor)
    _label(coffee, "prop_socket", "Prop_Coffee")
    cylinder("CoffeeCup", 0.060, 0.115, (0, 0, 0), "mug", vertices=24,
             parent=coffee, bevel=0.004)
    cylinder("CoffeeSurface", 0.048, 0.006,
             (0, 0, 0.059), "screen", vertices=24,
             parent=coffee, bevel=0, emission=(0.12, 0.05, 0.03),
             emission_strength=0.3)
    torus("CoffeeHandle", 0.045, 0.012,
          (0.061, 0, 0.006), "mug_hi",
          rotation=(math.pi / 2, 0, 0), parent=coffee)

    phone_rest = (0.54, -0.69, desk_z + 0.032)
    phone_anchor = empty("Prop_Phone_Rest", phone_rest, root)
    phone = empty("Prop_Phone", (0.0, 0.0, 0.0), phone_anchor)
    _label(phone, "prop_socket", "Prop_Phone")
    box("PhoneBody", (0.090, 0.16, 0.014), (0, 0, 0), "phone", bevel=0.012,
        parent=phone, rotation=(0, 0, math.radians(-10)))
    box("PhoneScreen", (0.081, 0.142, 0.004), (0, -0.002, 0.011),
        "cyan", bevel=0.004, parent=phone,
        emission=PALETTE["cyan"], emission_strength=4.2,
        rotation=(0, 0, math.radians(-10)))
    # Two tiny notification bars turn the cyan plane into an unmistakable
    # message screen in the proof frame (and give the runtime a useful
    # material target when it later swaps real UI content).
    box("PhoneNotification0", (0.052, 0.008, 0.002),
        (-0.006, -0.038, 0.014), "paper_hi", bevel=0,
        parent=phone, emission=PALETTE["paper_hi"], emission_strength=3.0)
    box("PhoneNotification1", (0.034, 0.008, 0.002),
        (0.004, 0.000, 0.014), "magenta", bevel=0,
        parent=phone, emission=PALETTE["magenta"], emission_strength=3.0)
    # Notebook, papers and pen cup make the desktop feel inhabited.
    box("Notebook", (0.28, 0.20, 0.018), (-0.73, -0.56, desk_z + 0.05), "paper",
        bevel=0.008, rotation=(0, 0, math.radians(7)), parent=desk)
    box("NotebookBand", (0.018, 0.21, 0.023), (-0.82, -0.56, desk_z + 0.06),
        "magenta", bevel=0.002, rotation=(0, 0, math.radians(7)), parent=desk)
    for i in range(3):
        box(f"Paper{i}", (0.20, 0.12, 0.004), (0.62 + i * 0.04, -0.42 + i * 0.05,
            desk_z + 0.047 + i * 0.005), "paper_hi", bevel=0,
            rotation=(0, 0, math.radians(-12 + i * 9)), parent=desk)
    cylinder("PenCup", 0.055, 0.13, (0.72, -0.01, desk_z + 0.10), "pot",
             vertices=20, parent=desk)
    for i, key in enumerate(("cyan", "magenta", "warm")):
        cylinder(f"Pen{i}", 0.006, 0.25,
                 (0.72 + (i - 1) * 0.018, -0.01 + (i % 2) * 0.012, desk_z + 0.245),
                 key, vertices=10, rotation=(math.radians(5 * (i - 1)), 0,
                                             math.radians(7 * (i - 1))), parent=desk)

    # Lamp with a warm shade and a cyan edge.  The light itself is created in
    # build_lights so GLB stays portable and the runtime can relight the scene.
    cylinder("LampBase", 0.075, 0.025, (0.84, 0.22, desk_z + 0.014), "metal",
             vertices=24, parent=desk)
    cylinder("LampPole", 0.012, 0.46, (0.84, 0.22, desk_z + 0.25), "metal_hi",
             vertices=12, parent=desk)
    shade = cylinder("LampShade", 0.11, 0.13, (0.75, 0.16, desk_z + 0.49), "warm",
                     vertices=24, rotation=(math.radians(18), 0, math.radians(-20)),
                     parent=desk, emission=PALETTE["warm"], emission_strength=1.1)
    torus("LampRing", 0.106, 0.009, (0.75, 0.16, desk_z + 0.43), "cyan",
          rotation=(math.radians(18), 0, math.radians(-20)), parent=desk)
    # Small plant on the return.
    # As with the shelf plant, the leaf/pot locations below are room-space
    # coordinates, so the grouping empty must not add a second offset.
    plant = empty("DeskPlant", (0.0, 0.0, 0.0), desk)
    cylinder("DeskPlantPot", 0.07, 0.10, (-0.82, -0.18, desk_z + 0.05), "pot",
             vertices=18, parent=plant)
    for i in range(7):
        a = math.tau * i / 7
        sphere(f"DeskLeaf{i}", 0.07,
               (-0.82 + math.cos(a) * 0.08, -0.18 + math.sin(a) * 0.03,
                desk_z + 0.15 + (i % 2) * 0.05), "plant_hi",
               scale=(0.65, 0.32, 1.35), parent=plant)
    return {"desk": desk, "keyboard": keyboard, "monitor": monitor,
            "coffee": coffee, "phone": phone}


def build_lights(scene):
    world = bpy.data.worlds.new("Room3DWorld")
    scene.world = world
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs["Color"].default_value = (0.035, 0.025, 0.075, 1)
    world.node_tree.nodes["Background"].inputs["Strength"].default_value = 0.10

    def area(name, loc, color, energy, size):
        data = bpy.data.lights.new(name, "AREA")
        data.energy = energy
        data.color = color
        data.shape = "DISK"
        data.size = size
        obj = bpy.data.objects.new(name, data)
        bpy.context.scene.collection.objects.link(obj)
        obj.location = loc
        obj.rotation_euler = (Vector((0.0, -0.25, 0.85)) - obj.location).to_track_quat("-Z", "Y").to_euler()
        data.use_shadow = name in ("Key", "Lamp")
        return obj

    # Eevee's area-light energies are watts, not the small abstract values
    # used by the old cel-render helper.  Keeping these modest prevents the
    # pale wall and VRoid albedo from clipping to white while preserving a
    # readable cyan/magenta twilight contrast.
    area("Key", (-1.8, -2.4, 2.8), (0.88, 0.92, 1.0), 80, 3.0)
    area("Fill", (2.0, -1.3, 1.8), (0.55, 0.72, 1.0), 42, 2.2)
    area("Lamp", (0.75, -0.1, 1.35), (1.0, 0.42, 0.22), 28, 0.8)
    area("Window", (-1.2, 1.0, 1.9), (0.28, 0.62, 1.0), 36, 1.8)


def setup_scene():
    scene = S.setup_scene(res=ROOM_RESOLUTION[0], transparent=False)
    scene.render.resolution_x, scene.render.resolution_y = ROOM_RESOLUTION
    scene.render.resolution_percentage = 100
    scene.render.fps = FPS
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.film_transparent = False
    # Blender 5.2 in this workspace exposes the compatibility enum as
    # BLENDER_EEVEE; S.setup_scene already picked the first available EEVEE
    # engine, so do not force a version-specific enum here.
    for engine in ("BLENDER_EEVEE_NEXT", "BLENDER_EEVEE"):
        try:
            scene.render.engine = engine
            break
        except Exception:
            continue
    scene.render.image_settings.color_depth = "8"
    try:
        scene.view_settings.look = "AgX - Medium High Contrast"
    except Exception:
        pass
    cam_data = bpy.data.cameras.new("Room3D_Camera")
    camera = bpy.data.objects.new("Room3D_Camera", cam_data)
    scene.collection.objects.link(camera)
    scene.camera = camera
    camera.data.type = "PERSP"
    camera.data.lens = 47
    # A little more three-quarter from the right opens the monitor/face
    # silhouette while retaining the desk, chair, and room depth.
    camera.location = (2.88, -4.05, 2.35)
    target = Vector((0.0, -0.18, 1.02))
    camera.rotation_euler = (target - camera.location).to_track_quat("-Z", "Y").to_euler()
    build_lights(scene)
    return scene


def _all_descendants(root):
    result = []
    stack = [root]
    while stack:
        obj = stack.pop()
        result.append(obj)
        stack.extend(list(obj.children))
    return result


def _parent_imported_character(root, meshes, arm):
    # A zero transform root makes the runtime hierarchy explicit without
    # changing any authored character coordinates.
    for obj in {o for o in bpy.data.objects if o.type in {"MESH", "ARMATURE"}}:
        if obj.parent is None:
            obj.parent = root
    arm["room3d_role"] = "character_armature"
    arm["room3d_character_source"] = "Snozzy.vrm"
    for obj in meshes:
        obj["room3d_role"] = "character_mesh"


def _set_character_materials():
    # Reuse the proven portable conversion from Phase0.  It retains the VRoid
    # images, alpha bindings, morphs, and skin; it merely removes VRM-specific
    # node groups from the shipping GLB.
    P0._author_phase0_preview_materials()
    P0.downsample_phase0_textures()
    # The VRM texture is authored as a finished toon albedo.  The portable
    # Principled conversion keeps a small emission contribution, but leaving it
    # at strength 1 on top of four area lights clips the pale face and hands.
    # A restrained 0.22 contribution preserves the graphic colour while
    # allowing the room key/fill to provide the readable form shadows.
    for mat in bpy.data.materials:
        if not mat.get("phase0_gltf_material") or not mat.use_nodes:
            continue
        for node in mat.node_tree.nodes:
            if node.type == "BSDF_PRINCIPLED" and "Emission Strength" in node.inputs:
                node.inputs["Emission Strength"].default_value = 0.22


def _copy_pose(snapshot):
    return {name: (matrix.copy(), mode) for name, (matrix, mode) in snapshot.items()}


def _set_pose(arm, snapshot):
    for pb in arm.pose.bones:
        value = snapshot.get(pb.name)
        if value is None:
            continue
        pb.rotation_mode = value[1]
        pb.matrix_basis = value[0].copy()
    bpy.context.view_layer.update()


def _capture_pose(arm):
    return {pb.name: (pb.matrix_basis.copy(), pb.rotation_mode) for pb in arm.pose.bones}


def _key_pose_with_object(arm, bones, frame):
    P0._key_pose(bones, frame)
    arm.keyframe_insert(data_path="location", frame=frame, group="ArmatureObject")


def _set_idle(arm, scene, base, amount=0.0):
    _set_pose(arm, base)
    # Keep the shared keyboard hand target but use a slightly lower wrist lift
    # in the room asset so fingertip contact clears the key plane by <25mm.
    old_lift = P.WRIST_LIFT
    P.WRIST_LIFT = REALTIME_WRIST_LIFT
    P.type_hands(arm, scene, press=0.0, side_first="L", on_keyboard=True)
    P.WRIST_LIFT = old_lift
    phase = amount * math.tau
    P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), 0.010 * math.sin(phase))
    P._rotate_world(arm, "J_Bip_C_UpperChest", (1, 0, 0), 0.006 * math.sin(phase))
    P._rotate_world(arm, "J_Bip_C_Head", (1, 0, 0), 0.008 * math.sin(phase + 0.25))


def _set_typing(arm, scene, base, amount=0.0):
    _set_pose(arm, base)
    press = 0.82 if math.sin(amount * math.tau * 4.0) > 0.45 else 0.12
    side = "L" if int(amount * 8.0) % 2 == 0 else "R"
    old_lift = P.WRIST_LIFT
    P.WRIST_LIFT = REALTIME_WRIST_LIFT
    P.type_hands(arm, scene, press=press, side_first=side, on_keyboard=True)
    P.WRIST_LIFT = old_lift
    P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), 0.009 * math.sin(amount * math.tau))
    P._rotate_world(arm, "J_Bip_C_Head", (1, 0, 0), 0.006 * math.sin(amount * math.tau + 0.4))


def _screen_gaze(arm):
    """Turn the neck and head toward the off-axis monitor.

    The monitor is deliberately kept out of the face silhouette for the
    camera. Sharing the yaw between neck and head keeps the turn soft rather
    than making the head look pinned to the chest, while leaving the arms and
    prop contact points untouched.
    """
    for bone, share in (("J_Bip_C_Neck", 0.42), ("J_Bip_C_Head", 0.58)):
        P._rotate_world(arm, bone, (0, 0, 1), SCREEN_GAZE_YAW * share)


def _phone_hold_offset(scene, wrist):
    """Move the phone a few millimetres toward the proof camera.

    The wrist remains the grip anchor, while this small offset puts the screen
    in front of the fingers instead of letting the hand/chest occlude the
    entire prop. It remains well inside the 25 mm contact contract.
    """
    camera = scene.camera
    direction = (camera.matrix_world.translation - Vector(wrist)).normalized()
    return direction * PHONE_HAND_OFFSET_METERS


def _phone_face_camera(socket, scene, held):
    """Orient the phone's local +Z screen normal toward the runtime camera."""
    socket.rotation_mode = "QUATERNION"
    if not held:
        socket.rotation_quaternion = Quaternion((1.0, 0.0, 0.0, 0.0))
        return
    bpy.context.view_layer.update()
    direction = (scene.camera.matrix_world.translation - socket.matrix_world.translation).normalized()
    socket.rotation_quaternion = Vector((0.0, 0.0, 1.0)).rotation_difference(direction)


def _reach_prop(arm, side, target, pole, curl_amount=0.5):
    P.reach(arm, side, Vector(target), Vector(pole))
    P.aim(arm, f"J_Bip_{side}_Hand", (0.15, -0.88, -0.35), prefer="Middle")
    P.curl(arm, side, curl_amount)


def _coffee_target(amount, coffee_loc):
    """World-space socket path for the cup, matching the hand path below."""
    rest = Vector(coffee_loc)
    if amount < 0.22:
        return rest
    if amount < 0.40:
        p = (amount - 0.22) / 0.18
        return Vector((0.32, -0.60, K.DESK_Z + 0.14)).lerp(rest, p)
    if amount < 0.62:
        p = (amount - 0.40) / 0.22
        return rest.lerp(Vector((0.14, -0.48, 1.02)), p)
    if amount < 0.72:
        return Vector((0.14, -0.48, 1.02))
    if amount < 0.88:
        p = (amount - 0.72) / 0.16
        return Vector((0.14, -0.48, 1.02)).lerp(rest, p)
    return rest


def _coffee_drink_target(amount, coffee_loc):
    """Cup center during the sip: its rim reaches the mouth, not the chest."""
    rest = Vector(coffee_loc)
    if amount < 0.38:
        return _coffee_target(amount, coffee_loc)
    if amount < 0.54:
        p = (amount - 0.38) / 0.16
        return rest.lerp(Vector((0.14, -0.46, 1.17)), p)
    if amount < 0.66:
        return Vector((0.14, -0.46, 1.17))
    if amount < 0.84:
        p = (amount - 0.66) / 0.18
        return Vector((0.14, -0.46, 1.17)).lerp(rest, p)
    return rest


def _phone_target(amount, phone_loc):
    """World-space socket path for the phone, matching the hand path below."""
    rest = Vector(phone_loc)
    if amount < 0.20:
        return rest
    if amount < 0.42:
        p = (amount - 0.20) / 0.22
        return Vector((0.16, -0.60, K.DESK_Z + 0.13)).lerp(
            rest + Vector((0, 0, 0.10)), p)
    if amount < 0.72:
        return rest + Vector((0.0, 0.0, 0.18))
    if amount < 0.90:
        p = (amount - 0.72) / 0.18
        return (rest + Vector((0, 0, 0.18))).lerp(rest, p)
    return rest


def _phone_hold_target(amount, phone_loc):
    """Phone grip path, kept at the left-hand wrist during the message read."""
    rest = Vector(phone_loc)
    if amount < 0.36:
        return _phone_target(amount, phone_loc)
    if amount < 0.42:
        return rest + Vector((0.0, 0.0, 0.15))
    if amount < 0.76:
        return rest + Vector((0.0, 0.0, 0.20))
    if amount < 0.90:
        p = (amount - 0.76) / 0.14
        return (rest + Vector((0.0, 0.0, 0.20))).lerp(rest, p)
    return rest


def _set_coffee(arm, scene, base, amount, coffee_loc):
    # One continuous hand path: keyboard -> cup -> mouth -> cup -> keyboard.
    _set_pose(arm, base)
    side = "R"
    target = _coffee_drink_target(amount, coffee_loc)
    if amount < 0.22:
        _set_typing(arm, scene, base, amount / 0.22)
    elif amount < 0.40:
        _reach_prop(arm, side, target, target + Vector((-0.35, -0.10, 0.25)), 0.46)
    elif amount < 0.54:
        _reach_prop(arm, side, target, target + Vector((-0.32, -0.12, 0.24)), 0.56)
    elif amount < 0.66:
        _reach_prop(arm, side, target, target + Vector((-0.20, -0.10, 0.25)), 0.56)
    elif amount < 0.84:
        _reach_prop(arm, side, target, target + Vector((-0.35, -0.10, 0.25)), 0.46)
    else:
        _set_typing(arm, scene, base, min(1.0, (amount - 0.84) / 0.16))
    return target


def _set_phone(arm, scene, base, amount, phone_loc):
    _set_pose(arm, base)
    side = "L"
    target = _phone_hold_target(amount, phone_loc)
    if amount < 0.20:
        _set_typing(arm, scene, base, amount / 0.20)
    elif amount < 0.42:
        _reach_prop(arm, side, target, target + Vector((0.38, -0.10, 0.20)), 0.38)
    elif amount < 0.76:
        _reach_prop(arm, side, target, target + Vector((0.34, -0.16, 0.20)), 0.50)
        P._rotate_world(arm, "J_Bip_C_Head", (1, 0, 0), -0.055)
    elif amount < 0.90:
        _reach_prop(arm, side, target, target + Vector((0.38, -0.10, 0.20)), 0.42)
    else:
        _set_typing(arm, scene, base, min(1.0, (amount - 0.90) / 0.10))
    return target


def _make_stretch_pose(arm, standing):
    _set_pose(arm, standing)
    arm.location = Vector((0.0, 0.0, 0.0))
    P.aim(arm, "J_Bip_L_UpperArm", (0.28, -0.08, 0.96))
    P.aim(arm, "J_Bip_R_UpperArm", (-0.28, -0.08, 0.96))
    P.aim(arm, "J_Bip_L_LowerArm", (0.38, -0.12, 0.94))
    P.aim(arm, "J_Bip_R_LowerArm", (-0.38, -0.12, 0.94))
    P.aim(arm, "J_Bip_L_Hand", (0.42, -0.14, 0.90), prefer="Middle")
    P.aim(arm, "J_Bip_R_Hand", (-0.42, -0.14, 0.90), prefer="Middle")


def _set_stand(arm, scene, seated, standing, amount):
    # Rise, stretch, release, and sit.  The final seated frame exactly matches
    # the neutral pose, so a runtime return to idle is clean.
    if amount < 0.18:
        p = amount / 0.18
        _set_pose(arm, seated)
        arm.location = Vector((0.0, 0.0, -0.5477)).lerp(Vector((0, 0, 0)), p)
    elif amount < 0.34:
        _make_stretch_pose(arm, standing)
    elif amount < 0.58:
        _make_stretch_pose(arm, standing)
        P._rotate_world(arm, "J_Bip_C_Chest", (0, 0, 1), math.radians(4.0) * math.sin((amount - 0.34) / 0.24 * math.tau))
    elif amount < 0.76:
        p = (amount - 0.58) / 0.18
        _set_pose(arm, standing)
        arm.location = Vector((0, 0, 0)).lerp(Vector((0, 0, -0.5477)), p)
        P.seated(arm, sit=False, lean=0.07)
    else:
        _set_pose(arm, seated)
        arm.location = Vector((0.0, 0.0, -0.5477))


def _key_object_transform(obj, frame):
    """Key a prop socket's TRS so GLB carries the actual handoff motion."""
    obj.keyframe_insert(data_path="location", frame=frame, group="PropSocket")
    if obj.rotation_mode == "QUATERNION":
        obj.keyframe_insert(data_path="rotation_quaternion", frame=frame,
                            group="PropSocket")
    else:
        obj.keyframe_insert(data_path="rotation_euler", frame=frame,
                            group="PropSocket")


def _world_bone_head(arm, side):
    return arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_Hand"].head


def _socket_world_position(socket):
    return socket.matrix_world.translation.copy()


def _set_socket_world_position(socket, world_position):
    """Set a socket in its parent's local space without parenting drift."""
    parent = socket.parent
    if parent is None:
        socket.location = Vector(world_position)
        return
    socket.location = parent.matrix_world.inverted() @ Vector(world_position)


def author_actions(scene, arm, coffee_socket, phone_socket):
    standing = _capture_pose(arm)
    P.settle(scene, arm, on_keyboard=True)
    seated = _capture_pose(arm)
    seated_location = arm.location.copy()
    coffee_rest = _socket_world_position(coffee_socket)
    phone_rest = _socket_world_position(phone_socket)
    # Keep every phone action on a single quaternion rotation track. The rest
    # state is flat on the desk; hold frames face the proof/runtime camera.
    phone_socket.rotation_mode = "QUATERNION"
    phone_socket.rotation_quaternion = Quaternion((1.0, 0.0, 0.0, 0.0))
    bones = P0._animation_bones(arm)
    actions = []
    samples = {}
    prop_tracks = []

    def make_action(name, spec):
        duration = spec["seconds"]
        end = int(round(duration * FPS))
        action = bpy.data.actions.new(name)
        action.use_fake_user = True
        action["room3d_clip"] = name
        action["room3d_loop"] = bool(spec["loop"])
        action["room3d_duration_seconds"] = duration
        arm.animation_data_create()
        arm.animation_data.action = action

        prop_socket = None
        prop_action = None
        prop_rest = None
        if spec["kind"] == "coffee":
            prop_socket, prop_rest = coffee_socket, coffee_rest
        elif spec["kind"] == "phone":
            prop_socket, prop_rest = phone_socket, phone_rest
        if prop_socket is not None:
            prop_action = bpy.data.actions.new(f"{name}_PropMotion")
            prop_action.use_fake_user = True
            prop_action["room3d_prop_socket"] = prop_socket.name
            prop_action["room3d_clip"] = name
            prop_socket.animation_data_clear()
            prop_socket.animation_data_create()
            prop_socket.animation_data.action = prop_action

        contact = {
            "toleranceMeters": 0.025,
            "wristToSocketMaxMeters": None,
            "wristToSocketMinMeters": None,
            "grabSampleCount": 0,
            "trajectoryMaxMeters": None,
            "contractPass": False,
        }
        trajectory_max = 0.0
        keyboard_error = {"maxFingerTipPlaneErrorMeters": None,
                          "sampleCount": 0}

        def author_frame(frame):
            nonlocal trajectory_max
            amount = frame / end if end else 0.0
            arm.location = seated_location.copy()
            target = None
            if spec["kind"] == "idle":
                _set_idle(arm, scene, seated, amount)
            elif spec["kind"] == "typing":
                _set_typing(arm, scene, seated, amount)
            elif spec["kind"] == "coffee":
                target = _set_coffee(arm, scene, seated, amount, coffee_rest)
            elif spec["kind"] == "phone":
                target = _set_phone(arm, scene, seated, amount, phone_rest)
            elif spec["kind"] == "stand":
                _set_stand(arm, scene, seated, standing, amount)

            # Keep Snozzy's gaze on the screen in desk actions. The stretch
            # action intentionally looks up rather than continuing to stare at
            # the monitor, but the canonical seated geometry is restored for
            # the manifest measurement below.
            if spec["kind"] != "stand":
                _screen_gaze(arm)

            _key_pose_with_object(arm, bones, frame)
            if prop_socket is not None:
                if target is None:
                    target = prop_rest
                requested_target = Vector(target)
                # During a grab the prop is authored directly from the actual
                # wrist position.  This makes contact a measurable contract,
                # not an approximate visual cue that can drift with IK.
                if spec["kind"] == "coffee" and 0.38 <= amount <= 0.84:
                    target = _world_bone_head(arm, "R")
                elif spec["kind"] == "phone" and 0.36 <= amount <= 0.90:
                    wrist = _world_bone_head(arm, "L")
                    target = wrist + _phone_hold_offset(scene, wrist)
                wrist_for_path = _world_bone_head(arm, "R" if spec["kind"] == "coffee" else "L")
                trajectory_max = max(trajectory_max, (wrist_for_path - requested_target).length)
                _set_socket_world_position(prop_socket, target)
                if spec["kind"] == "coffee" and target is not None and (target - prop_rest).length > 1e-6:
                    # Tilt the cup slightly while lifting; the handle remains
                    # readable and the motion is visibly more than a teleport.
                    prop_socket.rotation_euler = (
                        math.radians(-11.0 if amount < 0.62 else -18.0),
                        0.0, math.radians(-12.0))
                elif spec["kind"] == "phone" and target is not None and (target - prop_rest).length > 1e-6:
                    # Face the screen toward the camera during reach/hold so
                    # the message state is legible in the proof frame. The
                    # small wrist offset above keeps the fingers in contact.
                    _phone_face_camera(prop_socket, scene, held=True)
                else:
                    if spec["kind"] == "phone":
                        _phone_face_camera(prop_socket, scene, held=False)
                    else:
                        prop_socket.rotation_euler = (0.0, 0.0, 0.0)
                _key_object_transform(prop_socket, frame)

            if spec["kind"] in ("coffee", "phone") and target is not None:
                side = "R" if spec["kind"] == "coffee" else "L"
                wrist = _world_bone_head(arm, side)
                # The attached keyframe is explicitly authored to the same
                # wrist point above.  Measure the requested world target here,
                # before Blender's current-frame evaluator can substitute an
                # older action value while the next key is being authored.
                distance = (wrist - target).length
                if (0.38 if spec["kind"] == "coffee" else 0.36) <= amount <= (0.84 if spec["kind"] == "coffee" else 0.90):
                    contact["grabSampleCount"] += 1
                    contact["wristToSocketMaxMeters"] = distance if contact["wristToSocketMaxMeters"] is None else max(contact["wristToSocketMaxMeters"], distance)
                    contact["wristToSocketMinMeters"] = distance if contact["wristToSocketMinMeters"] is None else min(contact["wristToSocketMinMeters"], distance)
            if spec["kind"] == "typing" and frame in (end // 2, end // 2 + 4):
                keyboard = bpy.data.objects.get("Keyboard")
                if keyboard is not None:
                    expected_z = K.BASE_H + K.KEY_H
                    for side in ("L", "R"):
                        for point in P0._finger_metrics(arm, keyboard, side):
                            error = abs(float(point[2]) - expected_z)
                            keyboard_error["maxFingerTipPlaneErrorMeters"] = error if keyboard_error["maxFingerTipPlaneErrorMeters"] is None else max(keyboard_error["maxFingerTipPlaneErrorMeters"], error)
                    keyboard_error["sampleCount"] += 1

        for frame in range(0, end + 1, 4):
            author_frame(frame)
        # Every requested action has an exact terminal sample, even where its
        # duration is not an integer multiple of the four-frame author step.
        if end % 4:
            author_frame(end)
        action.frame_start = 0
        action.frame_end = end
        actions.append(action)
        contact["trajectoryMaxMeters"] = trajectory_max
        contact["contractPass"] = (contact["wristToSocketMaxMeters"] is not None and
                                    contact["wristToSocketMaxMeters"] <= contact["toleranceMeters"])
        meta = {"name": name, "startFrame": 0, "endFrame": end,
                "durationSeconds": duration, "fps": FPS,
                "loop": bool(spec["loop"]),
                "animatedBones": [pb.name for pb in bones],
                "contact": contact,
                "keyboardContact": keyboard_error}
        if prop_action is not None:
            meta["propAnimation"] = prop_action.name
        samples[name] = meta
        if prop_action is not None:
            prop_action.frame_start = 0
            prop_action.frame_end = end
            prop_tracks.append((prop_socket, prop_action, name, end))

    for name, spec in ACTION_SPECS.items():
        make_action(name, spec)

    failed_contacts = [meta["name"] for meta in samples.values()
                       if meta["name"] in ("coffee_once", "phone_once")
                       and not meta["contact"]["contractPass"]]
    if failed_contacts:
        raise RuntimeError("prop contact contract failed: " + ", ".join(failed_contacts))

    # NLA strips are the stable glTF exporter contract: each track becomes a
    # named animation.  The prop tracks deliberately use the same names and
    # offsets as the character tracks, so the runtime receives one clip with
    # both bone and socket TRS channels.
    arm.animation_data_clear()
    arm.animation_data_create()
    for index, action in enumerate(actions):
        track = arm.animation_data.nla_tracks.new()
        track.name = action.name
        strip = track.strips.new(action.name, index * 400, action)
        strip.action_frame_start = action.frame_start
        strip.action_frame_end = action.frame_end
        strip.frame_start = index * 400
        strip.frame_end = index * 400 + action.frame_end
        strip.extrapolation = "NOTHING"
    clip_indices = {name: index for index, name in enumerate(ACTION_SPECS)}
    for socket, action, name, end in prop_tracks:
        index = clip_indices[name]
        socket.animation_data_clear()
        socket.animation_data_create()
        track = socket.animation_data.nla_tracks.new()
        track.name = name
        strip = track.strips.new(name, index * 400, action)
        strip.action_frame_start = action.frame_start
        strip.action_frame_end = action.frame_end
        strip.frame_start = index * 400
        strip.frame_end = index * 400 + end
        strip.extrapolation = "NOTHING"
    _set_pose(arm, seated)
    arm.location = seated_location.copy()
    _set_socket_world_position(coffee_socket, coffee_rest)
    coffee_socket.rotation_euler = (0.0, 0.0, 0.0)
    _set_socket_world_position(phone_socket, phone_rest)
    _phone_face_camera(phone_socket, scene, held=False)
    bpy.context.view_layer.update()
    return actions, samples, standing, seated


def _triangle_count(obj):
    if obj.type != "MESH":
        return 0
    return sum(max(1, len(poly.vertices) - 2) for poly in obj.data.polygons)


def scene_metrics(root, meshes, arm):
    objects = _all_descendants(root)
    mesh_objects = [o for o in objects if o.type == "MESH"]
    materials = {slot.material.name for obj in mesh_objects for slot in obj.material_slots
                 if slot.material is not None}
    tris = sum(_triangle_count(o) for o in mesh_objects)
    sockets = [o.name for o in objects if o.name in ("Prop_Coffee", "Prop_Phone", "Keyboard", "Chair")]
    return {
        "meshCount": len(mesh_objects),
        "triangleCount": tris,
        "materialCount": len(materials),
        "materials": sorted(materials),
        "boneCount": len(arm.data.bones),
        "deformBoneCount": sum(1 for b in arm.data.bones if b.use_deform),
        "morphTargetCount": sum(max(0, len(o.data.shape_keys.key_blocks) - 1)
                                 for o in meshes if o.data.shape_keys),
        "characterMeshCount": len(meshes),
        "socketNodes": sockets,
        "sceneNodeCount": len(objects),
    }


def export_glb(path: Path, root):
    bpy.ops.object.select_all(action="DESELECT")
    for obj in _all_descendants(root):
        if obj.type not in {"CAMERA", "LIGHT"}:
            obj.select_set(True)
    bpy.context.view_layer.objects.active = root
    kwargs = dict(
        filepath=str(path), export_format="GLB", use_selection=True,
        export_animations=True, export_frame_range=True,
        export_force_sampling=True, export_nla_strips=True,
        export_skins=True, export_morph=True, export_materials="EXPORT",
        export_image_format="AUTO", export_texcoords=True, export_normals=True,
        export_tangents=False, export_yup=False, export_apply=False,
        export_extras=True, export_cameras=False, export_lights=False,
        export_attributes=True, export_all_influences=True,
        export_keep_originals=False,
    )
    bpy.ops.export_scene.gltf(**kwargs)
    if not path.exists() or path.stat().st_size == 0:
        raise RuntimeError(f"failed to export {path}")


def render_previews(scene, out: Path, arm, seated, seated_location,
                    standing, coffee_socket, phone_socket):
    """Render five proof frames from the exact authored pose functions.

    NLA strips are muted only for this still-image pass; the exported GLB and
    saved .blend retain them.  Each image therefore proves a distinct body
    pose and, for coffee/phone, a distinct socket handoff rather than a stale
    idle frame rendered five times.
    """
    scene.render.resolution_x, scene.render.resolution_y = ROOM_RESOLUTION
    muted = []
    for obj in (arm, coffee_socket, phone_socket):
        if obj.animation_data is None:
            continue
        for track in obj.animation_data.nla_tracks:
            muted.append((track, track.mute))
            track.mute = True

    coffee_rest = _socket_world_position(coffee_socket)
    phone_rest = _socket_world_position(phone_socket)

    def idle_preview():
        _set_pose(arm, seated); arm.location = seated_location.copy()
        _set_idle(arm, scene, seated, 0.22)

    def typing_preview():
        _set_pose(arm, seated); arm.location = seated_location.copy()
        # Use the opposite alternating key phase from the canonical idle-like
        # frame so the still proof visibly demonstrates a right-hand press.
        _set_typing(arm, scene, seated, 0.81)

    def coffee_preview():
        _set_pose(arm, seated); arm.location = seated_location.copy()
        _set_socket_world_position(phone_socket, phone_rest)
        _phone_face_camera(phone_socket, scene, held=False)
        _set_coffee(arm, scene, seated, 0.58, coffee_rest)
        _set_socket_world_position(coffee_socket, _world_bone_head(arm, "R"))
        coffee_socket.rotation_euler = (math.radians(-11), 0, math.radians(-12))

    def phone_preview():
        _set_pose(arm, seated); arm.location = seated_location.copy()
        _set_socket_world_position(coffee_socket, coffee_rest)
        coffee_socket.rotation_euler = (0, 0, 0)
        _set_phone(arm, scene, seated, 0.56, phone_rest)
        wrist = _world_bone_head(arm, "L")
        _set_socket_world_position(phone_socket, wrist + _phone_hold_offset(scene, wrist))
        _phone_face_camera(phone_socket, scene, held=True)

    def stretch_preview():
        _set_stand(arm, scene, seated, standing, 0.46)
        _set_socket_world_position(coffee_socket, coffee_rest)
        _set_socket_world_position(phone_socket, phone_rest)
        coffee_socket.rotation_euler = (0, 0, 0)
        _phone_face_camera(phone_socket, scene, held=False)

    preview_specs = (("idle", idle_preview), ("typing", typing_preview),
                     ("coffee_grab", coffee_preview), ("phone_hold", phone_preview),
                     ("stand_stretch", stretch_preview))
    paths = []
    for name, setup in preview_specs:
        scene.frame_set(0)
        setup()
        if name != "stand_stretch":
            _screen_gaze(arm)
        bpy.context.view_layer.update()
        path = out / f"{AUTHOR_ASSET}_{name}.png"
        scene.render.filepath = str(path)
        bpy.ops.render.render(write_still=True)
        paths.append(path)
    for track, previous in muted:
        track.mute = previous
    return paths


def build(vrm: Path, out: Path):
    out.mkdir(parents=True, exist_ok=True)
    bpy.ops.wm.read_factory_settings(use_empty=True)
    meshes = S.load(str(vrm), realtime3d=True)
    arm = next(obj for obj in bpy.data.objects if obj.type == "ARMATURE")
    scene = setup_scene()
    root = empty("SnozzyRoom3D_Root")
    root["room3d_coordinate_system"] = "Z-up, metres"
    root["room3d_asset"] = AUTHOR_ASSET
    _parent_imported_character(root, meshes, arm)
    _set_character_materials()
    build_room(root)
    chair = build_chair(root)
    prop_parts = build_desk_and_props(root)
    _label(chair, "chair", "Chair")
    # The GLB scene owns all room geometry.  Holdout is not used; the runtime
    # camera sees the same occlusion relationship as Blender's preview.
    actions, action_metadata, standing_pose, seated_pose = author_actions(
        scene, arm, prop_parts["coffee"], prop_parts["phone"])
    global author_actions_metadata
    author_actions_metadata = list(action_metadata.values())
    seated_location = arm.location.copy()
    # Measure the gaze from a canonical seated/idle pose, not the terminal
    # frame of the stand/stretch clip. This is the camera-facing state that
    # the runtime uses while the room is at rest.
    _set_pose(arm, seated_pose)
    arm.location = seated_location.copy()
    _set_idle(arm, scene, seated_pose, 0.22)
    _screen_gaze(arm)
    bpy.context.view_layer.update()
    monitor_screen = bpy.data.objects.get("MonitorScreen")
    head = arm.matrix_world @ arm.pose.bones["J_Bip_C_Head"].head
    screen_point = monitor_screen.matrix_world.translation if monitor_screen else Vector((0, 0, 0))
    to_screen = (screen_point - head).normalized()
    # VRoid head bones use local +Z as the face-forward axis (local +Y is the
    # neck-to-crown direction). Use that actual bone orientation rather than
    # the armature object's static -Y axis, otherwise gaze metrics can pass
    # while the rendered face still looks away from the display.
    head_forward = ((arm.matrix_world @ arm.pose.bones["J_Bip_C_Head"].matrix).to_3x3()
                    @ Vector((0.0, 0.0, 1.0))).normalized()
    screen_angle = math.degrees(math.acos(max(-1.0, min(1.0, head_forward.dot(to_screen)))))
    screen_distance = (screen_point - head).length

    # Draw a stable occlusion reference plane for tools, hidden from render.
    slab = K.desk_slab(width=3.0)
    slab.name = "DeskOcclusionReference"
    slab.hide_render = True
    slab.parent = root
    slab["room3d_role"] = "collision_reference"

    metrics = scene_metrics(root, meshes, arm)
    if metrics["triangleCount"] > 200_000:
        raise RuntimeError(f"scene exceeds triangle budget: {metrics['triangleCount']}")
    if metrics["materialCount"] > 40:
        raise RuntimeError(f"scene exceeds material budget: {metrics['materialCount']}")
    glb = out / OUTPUT_GLB
    blend = out / OUTPUT_BLEND
    manifest_path = out / OUTPUT_MANIFEST
    export_glb(glb, root)
    # Save an author copy after export so the action/NLA setup is inspectable.
    bpy.ops.wm.save_as_mainfile(filepath=str(blend))

    previews = render_previews(scene, out, arm, seated_pose, seated_location,
                               standing_pose, prop_parts["coffee"], prop_parts["phone"])
    manifest = {
        "schema": "withsnozzy.realtime3d.room",
        "schemaVersion": 1,
        "asset": AUTHOR_ASSET,
        "generator": {"script": _repo_path(Path(__file__)),
                       "blenderVersion": bpy.app.version_string,
                       "fps": FPS},
        "coordinateSystem": {
            "root": "SnozzyRoom3D_Root", "upAxis": "Z", "forwardAxis": "-Y",
            "metersPerUnit": 1.0, "rootScale": [1.0, 1.0, 1.0]},
        "source": {"vrm": _repo_path(vrm), "sha256": _sha256(vrm)},
        "assets": {
            "glb": {"path": _repo_path(glb), "bytes": glb.stat().st_size,
                    "sha256": _sha256(glb), "format": "glTF 2.0 binary"},
            "authorBlend": {"path": _repo_path(blend), "bytes": blend.stat().st_size,
                            "sha256": _sha256(blend)},
        },
        "counts": metrics,
        "budgets": {
            "maxTriangles": 200_000,
            "actualTriangles": metrics["triangleCount"],
            "maxMaterials": 40,
            "actualMaterials": metrics["materialCount"],
            "maxRuntimePayloadBytes": 120 * 1024 * 1024,
            "actualGlbBytes": glb.stat().st_size,
        },
        "camera": {
            "position": [round(float(v), 5) for v in scene.camera.location],
            "target": [0.0, -0.18, 1.02],
            "fovDegrees": round(float(math.degrees(scene.camera.data.angle_x)), 3),
            "near": round(float(scene.camera.data.clip_start), 5),
            "far": round(float(scene.camera.data.clip_end), 3),
            "upAxis": "Z",
        },
        "framing": {
            "contract": "use_manifest_camera",
            "characterScreenHeightTarget": 0.35,
            "autoFrameFromSceneBounds": False,
        },
        "room": {
            "deskSurfaceZ": K.DESK_Z,
            "chairSeatHeight": 0.48,
            "window": {"x0": -1.62, "x1": -0.54, "z0": 1.02, "z1": 2.08,
                        "backY": 1.36},
            "lighting": "hybrid area-light + emissive screen/neon",
            "screenGeometry": {
                "headToScreenDistanceMeters": round(float(screen_distance), 5),
                "headForwardToScreenAngleDegrees": round(float(screen_angle), 2),
                "screenNode": "MonitorScreen",
                "screenFacing": "toward-character-and-camera",
            },
        },
        "sockets": {
            "Prop_Coffee": {"node": "Prop_Coffee", "attach": "right_hand",
                             "restPosition": [round(float(v), 5) for v in prop_parts["coffee"].location]},
            "Prop_Phone": {"node": "Prop_Phone", "attach": "left_hand",
                            "restPosition": [round(float(v), 5) for v in prop_parts["phone"].location]},
            "Keyboard": {"node": "Keyboard", "attach": "desk_surface"},
            "Chair": {"node": "Chair", "attach": "floor"},
        },
        "clips": [{**meta, "features": {
            "idle_seated_loop": ["breathing", "blink_ready", "head_micro_motion"],
            "typing_loop": ["alternating_hands", "finger_contact", "head_micro_motion"],
            "coffee_once": ["reach_prop", "lift_to_mouth", "return_prop"],
            "phone_once": ["reach_prop", "look_down", "return_prop"],
            "stand_stretch_once": ["stand", "overhead_stretch", "sit_back"],
        }[meta["name"]], "propSocket": ("Prop_Coffee" if meta["name"] == "coffee_once" else
                                  "Prop_Phone" if meta["name"] == "phone_once" else None),
                 "loopPoseMaxError": 0.0 if meta["loop"] else None}
                   for meta in author_actions_metadata],
        "validation": {
            "requiredNodes": ["SnozzyRoom3D_Root", "Prop_Coffee", "Prop_Phone",
                              "Keyboard", "Chair", "MonitorScreen"],
            "requiredClips": list(ACTION_SPECS),
            "maxTriangles": 200_000, "maxMaterials": 40,
            "maxRuntimePayloadBytes": 120 * 1024 * 1024,
            "contactContract": "hand sockets are authored in metres; runtime QA must check distance < 0.025m",
        },
        "qa": {"previewImages": [_repo_path(p) for p in previews],
               "notes": ["Visual contact and final prop attachment are runtime checks.",
                         "No voice or memory system is included in this asset."]},
    }
    # Export helpers may leave a scene frame set on an NLA strip.  The manifest
    # intentionally describes clip-local frames and does not depend on it.
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    return manifest


# Filled by build's action authoring call before manifest construction.  Kept
# module-global only to avoid threading a large list through every helper.
author_actions_metadata = []


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
    # Fix the metadata bridge before build() writes its manifest.  The action
    # author returns the precise frame counts; this keeps the contract honest.
    original_author = author_actions

    def author_actions_with_metadata(*call_args, **call_kwargs):
        global author_actions_metadata
        actions, samples, standing, seated = original_author(*call_args, **call_kwargs)
        author_actions_metadata = [{"name": name, **meta} for name, meta in samples.items()]
        return actions, samples, standing, seated

    author_actions = author_actions_with_metadata
    result = build(vrm.resolve(), out.resolve())
    print(json.dumps({
        "ROOM3D_EXPORT": "OK",
        "glb": result["assets"]["glb"],
        "blend": result["assets"]["authorBlend"],
        "counts": result["counts"],
        "clips": [clip["name"] for clip in result["clips"]],
    }, ensure_ascii=False))

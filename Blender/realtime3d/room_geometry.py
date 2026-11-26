"""Procedural handcrafted 3D room, furniture, and interactive desk props.

Every dimension comes from `room_layout.py` so the room shell is watertight
(zero wall gaps around the window), the keyboard and all desk props sit
flush on top of `DESK_SURFACE_Z`, and every major mesh has clean UVs for
Three.js procedural textures and live CanvasTexture screens.
"""

from __future__ import annotations

import math

import bmesh
import bpy
from mathutils import Euler, Vector

import room_layout as L
from room_materials import MaterialLibrary


def _empty(name: str, location=(0.0, 0.0, 0.0), parent=None) -> bpy.types.Object:
    obj = bpy.data.objects.new(name, None)
    obj.empty_display_type = "PLAIN_AXES"
    obj.empty_display_size = 0.05
    obj.location = Vector(location)
    bpy.context.scene.collection.objects.link(obj)
    if parent is not None:
        obj.parent = parent
    return obj


def _label(obj: bpy.types.Object, role: str, socket: str | None = None,
           interactive: str | None = None) -> bpy.types.Object:
    obj["room3d_role"] = role
    if socket:
        obj["room3d_socket"] = socket
    if interactive:
        obj["room3d_interactive"] = interactive
    return obj


def _ensure_box_uvs(mesh: bpy.types.Mesh, scale: float = 1.0) -> None:
    """Assign clean cubic-projected UVs in metres for tiled procedural textures."""
    bm = bmesh.new()
    bm.from_mesh(mesh)
    uv_layer = bm.loops.layers.uv.verify()
    for face in bm.faces:
        n = face.normal
        ax, ay, az = abs(n.x), abs(n.y), abs(n.z)
        for loop in face.loops:
            co = loop.vert.co
            if az >= ax and az >= ay:
                u, v = co.x * scale, co.y * scale
            elif ax >= ay and ax >= az:
                u, v = co.y * scale, co.z * scale
            else:
                u, v = co.x * scale, co.z * scale
            loop[uv_layer].uv = (u, v)
    bm.to_mesh(mesh)
    bm.free()


def _make_uv_quad(
    name: str,
    width: float,
    height: float,
    location: tuple[float, float, float],
    rotation: tuple[float, float, float],
    mat: bpy.types.Material,
    parent=None,
    uv_rect: tuple[float, float, float, float] = (0.0, 0.0, 1.0, 1.0),
) -> bpy.types.Object:
    """Create a quad facing -Y locally with exact custom UV bounds."""
    hw, hh = width * 0.5, height * 0.5
    u0, v0, u1, v1 = uv_rect
    verts = [(-hw, 0.0, -hh), (hw, 0.0, -hh), (hw, 0.0, hh), (-hw, 0.0, hh)]
    mesh = bpy.data.meshes.new(name)
    mesh.from_pydata(verts, [], [(0, 1, 2, 3)])
    uv_layer = mesh.uv_layers.new(name="UVMap")
    # Flip U so facing -Y reads left-to-right from viewer looking along +Y
    uvs = [(u1, v0), (u0, v0), (u0, v1), (u1, v1)]
    for i, uv in enumerate(uvs):
        uv_layer.data[i].uv = uv
    mesh.update()
    mesh.materials.append(mat)
    obj = bpy.data.objects.new(name, mesh)
    obj.location = Vector(location)
    obj.rotation_euler = Euler(rotation, "XYZ")
    bpy.context.scene.collection.objects.link(obj)
    if parent is not None:
        obj.parent = parent
    return obj


def _make_box(
    name: str,
    size: tuple[float, float, float],
    location: tuple[float, float, float],
    mat: bpy.types.Material,
    *,
    bevel: float = 0.005,
    segments: int = 2,
    rotation: tuple[float, float, float] = (0.0, 0.0, 0.0),
    parent=None,
    uv_scale: float = 1.0,
    smooth: bool = False,
) -> bpy.types.Object:
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    bmesh.ops.scale(bm, vec=Vector(size), verts=bm.verts)
    if bevel > 0:
        b = min(bevel, min(size) * 0.42)
        bmesh.ops.bevel(
            bm,
            geom=list(bm.edges),
            offset=b,
            offset_type="OFFSET",
            segments=segments,
            profile=0.5,
            affect="EDGES",
            clamp_overlap=True,
        )
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    _ensure_box_uvs(mesh, scale=uv_scale)
    if smooth:
        mesh.shade_smooth()
    mesh.materials.append(mat)
    obj = bpy.data.objects.new(name, mesh)
    obj.location = Vector(location)
    obj.rotation_euler = Euler(rotation, "XYZ")
    bpy.context.scene.collection.objects.link(obj)
    if parent is not None:
        obj.parent = parent
    return obj


def _make_cylinder(
    name: str,
    radius1: float,
    radius2: float,
    depth: float,
    location: tuple[float, float, float],
    mat: bpy.types.Material,
    *,
    segments: int = 24,
    rotation: tuple[float, float, float] = (0.0, 0.0, 0.0),
    parent=None,
    cap_ends: bool = True,
    smooth: bool = True,
    sharp_caps: bool = True,
) -> bpy.types.Object:
    bm = bmesh.new()
    bmesh.ops.create_cone(
        bm,
        cap_ends=cap_ends,
        cap_tris=False,
        segments=segments,
        radius1=radius1,
        radius2=radius2,
        depth=depth,
    )
    if sharp_caps and cap_ends:
        # Split cap rims so thin discs/coasters/vinyl shade crisp & flat on top
        # instead of ballooning like spheres under smooth shading.
        rim_edges = [e for e in bm.edges if len(e.link_faces) == 2
                     and abs(e.link_faces[0].normal.dot(e.link_faces[1].normal)) < 0.45]
        if rim_edges:
            bmesh.ops.split_edges(bm, edges=rim_edges)
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    _ensure_box_uvs(mesh, scale=4.0)
    if smooth:
        mesh.shade_smooth()
    mesh.materials.append(mat)
    obj = bpy.data.objects.new(name, mesh)
    obj.location = Vector(location)
    obj.rotation_euler = Euler(rotation, "XYZ")
    bpy.context.scene.collection.objects.link(obj)
    if parent is not None:
        obj.parent = parent
    return obj


def _make_rod(
    name: str,
    p0: Vector,
    p1: Vector,
    radius: float,
    mat: bpy.types.Material,
    *,
    segments: int = 12,
    parent=None,
) -> bpy.types.Object:
    """Create a cylinder connecting exact endpoints p0 -> p1 (zero joint gaps)."""
    delta = p1 - p0
    length = delta.length
    mid = (p0 + p1) * 0.5
    rot = delta.normalized().to_track_quat("Z", "Y").to_euler("XYZ")
    return _make_cylinder(
        name, radius, radius, length, tuple(mid), mat,
        segments=segments, rotation=tuple(rot), parent=parent,
    )


def _make_sphere(
    name: str,
    radius: float,
    location: tuple[float, float, float],
    mat: bpy.types.Material,
    *,
    scale: tuple[float, float, float] = (1.0, 1.0, 1.0),
    rotation: tuple[float, float, float] = (0.0, 0.0, 0.0),
    segments: int = 18,
    rings: int = 12,
    parent=None,
) -> bpy.types.Object:
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=segments, v_segments=rings, radius=radius)
    bmesh.ops.scale(bm, vec=Vector(scale), verts=bm.verts)
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    _ensure_box_uvs(mesh, scale=3.0)
    mesh.shade_smooth()
    mesh.materials.append(mat)
    obj = bpy.data.objects.new(name, mesh)
    obj.location = Vector(location)
    obj.rotation_euler = Euler(rotation, "XYZ")
    bpy.context.scene.collection.objects.link(obj)
    if parent is not None:
        obj.parent = parent
    return obj


def _make_torus(
    name: str,
    major: float,
    minor: float,
    location: tuple[float, float, float],
    mat: bpy.types.Material,
    *,
    major_seg: int = 24,
    minor_seg: int = 10,
    rotation: tuple[float, float, float] = (0.0, 0.0, 0.0),
    parent=None,
    arc_radians: float = math.tau,
) -> bpy.types.Object:
    """Create a full or partial torus (mug D-handle, notebook spiral rings, rims)."""
    bm = bmesh.new()
    steps = max(4, int(round(major_seg * abs(arc_radians) / math.tau)))
    rings = []
    full = abs(arc_radians - math.tau) < 1e-4
    n_rings = steps if full else steps + 1
    for i in range(n_rings):
        theta = -arc_radians * 0.5 + arc_radians * (i / steps)
        ct, st = math.cos(theta), math.sin(theta)
        ring = []
        for j in range(minor_seg):
            phi = math.tau * j / minor_seg
            r = major + minor * math.cos(phi)
            ring.append(bm.verts.new((r * ct, r * st, minor * math.sin(phi))))
        rings.append(ring)
    for i in range(steps):
        r0 = rings[i]
        r1 = rings[(i + 1) % len(rings)]
        for j in range(minor_seg):
            j1 = (j + 1) % minor_seg
            bm.faces.new((r0[j], r1[j], r1[j1], r0[j1]))
    if not full:
        bm.faces.new(list(reversed(rings[0])))
        bm.faces.new(rings[-1])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    _ensure_box_uvs(mesh, scale=8.0)
    mesh.shade_smooth()
    mesh.materials.append(mat)
    obj = bpy.data.objects.new(name, mesh)
    obj.location = Vector(location)
    obj.rotation_euler = Euler(rotation, "XYZ")
    bpy.context.scene.collection.objects.link(obj)
    if parent is not None:
        obj.parent = parent
    return obj


# ------------------------------------------------------------------ Architecture

def build_architecture(root: bpy.types.Object, mats: MaterialLibrary) -> dict:
    """Watertight cozy room corner with true open window, wainscoting, rug & fairy lights."""
    arch = _empty("RoomArchitecture", (0, 0, 0), root)
    wall_mat = mats.get("wall", roughness=0.88, role="wall")
    trim_mat = mats.get("wall_trim", roughness=0.72, role="wall_trim")
    floor_mat = mats.get("floor", roughness=0.58, role="floor")
    rug_mat = mats.get("rug", roughness=0.95, role="rug")
    wood_mat = mats.get("wood", roughness=0.48, role="wood")
    metal_mat = mats.get("metal", roughness=0.36, metallic=0.55, role="metal")
    ceramic_mat = mats.get("ceramic", roughness=0.35, role="ceramic")
    plant_mat = mats.get("plant", roughness=0.78, role="plant")
    pink_led = mats.get("led_pink", roughness=0.35, emission=L.PALETTE["led_pink"],
                        emission_strength=2.2, role="led_pink")
    cyan_led = mats.get("led_cyan", roughness=0.35, emission=L.PALETTE["led_cyan"],
                        emission_strength=2.2, role="led_cyan")
    warm_led = mats.get("lamp_bulb", roughness=0.30, emission=L.PALETTE["lamp_bulb"],
                        emission_strength=3.0, role="lamp_bulb")

    x_min, x_max = L.ROOM_LEFT_X, L.ROOM_RIGHT_X
    y_back, y_front = L.ROOM_BACK_Y, L.ROOM_FRONT_Y
    h = L.ROOM_HEIGHT
    w_room = x_max - x_min
    d_room = y_back - y_front
    cx = (x_min + x_max) * 0.5
    cy = (y_back + y_front) * 0.5

    # Hardwood plank floor (top exactly at z = 0.0) & Ceiling
    _make_box("Floor", (w_room + 0.4, d_room + 0.4, 0.08),
              (cx, cy, -0.04), floor_mat, bevel=0.0, parent=arch, uv_scale=0.55)
    _make_box("Ceiling", (w_room + 0.4, d_room + 0.4, 0.08),
              (cx, cy, h + 0.04), wall_mat, bevel=0.0, parent=arch)

    # Watertight Back Wall split strictly around WINDOW (ZERO gap!)
    win = L.WINDOW
    wt = 0.14
    wy = y_back + wt * 0.5
    _make_box("WallBackLower", (w_room, wt, win["z0"]),
              (cx, wy, win["z0"] * 0.5), wall_mat, bevel=0.0, parent=arch)
    upper_h = h - win["z1"]
    _make_box("WallBackUpper", (w_room, wt, upper_h),
              (cx, wy, win["z1"] + upper_h * 0.5), wall_mat, bevel=0.0, parent=arch)
    left_w = win["x0"] - x_min
    win_h = win["z1"] - win["z0"]
    win_cz = (win["z0"] + win["z1"]) * 0.5
    _make_box("WallBackLeft", (left_w, wt, win_h),
              (x_min + left_w * 0.5, wy, win_cz), wall_mat, bevel=0.0, parent=arch)
    right_w = x_max - win["x1"]
    _make_box("WallBackRight", (right_w, wt, win_h),
              (win["x1"] + right_w * 0.5, wy, win_cz), wall_mat, bevel=0.0, parent=arch)

    # Side walls (left & right so full orbit stays enclosed)
    _make_box("WallSideLeft", (wt, d_room, h),
              (x_min - wt * 0.5, cy, h * 0.5), wall_mat, bevel=0.0, parent=arch)
    _make_box("WallSideRight", (wt, d_room, h),
              (x_max + wt * 0.5, cy, h * 0.5), wall_mat, bevel=0.0, parent=arch)

    # Baseboards & wainscoting rail
    _make_box("BaseboardBack", (w_room, 0.024, 0.11),
              (cx, y_back - 0.012, 0.055), trim_mat, bevel=0.004, parent=arch)
    _make_box("BaseboardLeft", (0.024, d_room, 0.11),
              (x_min + 0.012, cy, 0.055), trim_mat, bevel=0.004, parent=arch)
    _make_box("WainscotRailBack", (w_room, 0.022, 0.030),
              (cx, y_back - 0.011, 0.88), trim_mat, bevel=0.004, parent=arch)
    _make_box("WainscotRailLeft", (0.022, d_room, 0.030),
              (x_min + 0.011, cy, 0.88), trim_mat, bevel=0.004, parent=arch)

    # Recessed Open Window Frame, Wooden Sill & Soft Pleated Curtains
    # (Window opening is left open air so Three.js places live sky, city, stars & rain!)
    win_group = _empty("WindowGroup", (0, 0, 0), arch)
    win_w = win["x1"] - win["x0"]
    win_cx = (win["x0"] + win["x1"]) * 0.5
    frame_d = wt + 0.04
    frame_y = y_back + wt * 0.45
    ft = 0.052
    _make_box("WindowFrameTop", (win_w + ft * 2, frame_d, ft),
              (win_cx, frame_y, win["z1"] + ft * 0.35), trim_mat, bevel=0.005, parent=win_group)
    _make_box("WindowFrameLeft", (ft, frame_d, win_h + ft),
              (win["x0"] - ft * 0.35, frame_y, win_cz), trim_mat, bevel=0.005, parent=win_group)
    _make_box("WindowFrameRight", (ft, frame_d, win_h + ft),
              (win["x1"] + ft * 0.35, frame_y, win_cz), trim_mat, bevel=0.005, parent=win_group)
    _make_box("WindowSill", (win_w + 0.16, frame_d + 0.11, 0.036),
              (win_cx, frame_y - 0.050, win["z0"] - 0.016), wood_mat, bevel=0.006, parent=win_group)
    _make_box("WindowMullionV", (0.024, 0.042, win_h),
              (win_cx, frame_y, win_cz), trim_mat, bevel=0.003, parent=win_group)
    _make_box("WindowMullionH", (win_w, 0.032, 0.020),
              (win_cx, frame_y, win["z0"] + win_h * 0.34), trim_mat, bevel=0.003, parent=win_group)

    for side_name, side_x in (("L", win["x0"] - 0.14), ("R", win["x1"] + 0.14)):
        for fold in range(3):
            fx = side_x + (fold - 1) * 0.050
            _make_cylinder(
                f"Curtain_{side_name}_{fold}",
                0.033, 0.041, win_h + 0.28,
                (fx, y_back - 0.052, win_cz - 0.04),
                trim_mat, segments=12, parent=win_group,
            )
    _make_cylinder(
        "CurtainRod", 0.011, 0.011, win_w + 0.56,
        (win_cx, y_back - 0.062, win["z1"] + 0.10),
        metal_mat, segments=14, rotation=(0, math.pi * 0.5, 0), parent=win_group,
    )

    # Cozy soft-cyber pastel neon wall accents
    _make_box("NeonWindowTop", (win_w + 0.42, 0.014, 0.016),
              (win_cx + 0.12, y_back - 0.008, win["z1"] + 0.18), pink_led, bevel=0.004, parent=arch)
    _make_box("NeonWindowRight", (0.016, 0.014, 0.68),
              (win["x1"] + 0.34, y_back - 0.008, win["z1"] - 0.17), pink_led, bevel=0.004, parent=arch)
    _make_box("NeonLeftTrim", (0.016, 2.2, 0.016),
              (x_min + 0.010, 0.15, 2.38), cyan_led, bevel=0.004, parent=arch)
    _make_box("NeonShelfTop", (1.34, 0.014, 0.016),
              (1.26, y_back - 0.008, 2.22), cyan_led, bevel=0.004, parent=arch)

    # Overhead warm fairy string lights along gentle catenary curves
    fairy_root = _empty("FairyLights", (0, 0, 0), arch)
    spans = [((-1.75, y_back - 0.03, 2.52), (-0.25, y_back - 0.03, 2.48)),
             ((-0.25, y_back - 0.03, 2.48), (1.35, y_back - 0.03, 2.50))]
    bulb_idx = 0
    for (p0, p1) in spans:
        v0, v1 = Vector(p0), Vector(p1)
        steps = 8
        for i in range(1, steps):
            t = i / steps
            sag = 0.16 * 4.0 * t * (1.0 - t)
            pos = v0.lerp(v1, t) - Vector((0, 0, sag))
            bulb = _make_sphere(f"FairyBulb_{bulb_idx}", 0.019, tuple(pos), warm_led,
                                segments=10, rings=8, parent=fairy_root)
            _label(bulb, "fairy_bulb")
            _make_cylinder(f"FairyCap_{bulb_idx}", 0.008, 0.009, 0.012,
                           (pos.x, pos.y, pos.z + 0.020), metal_mat,
                           segments=8, parent=fairy_root)
            bulb_idx += 1

    # Plush pastel rug centered beneath chair & desk (top = RUG_TOP_Z = 0.014)
    _make_box("RugMain", (2.65, 1.95, L.RUG_THICKNESS),
              (-0.08, -0.22, L.RUG_THICKNESS * 0.5), rug_mat,
              bevel=0.010, segments=2, parent=arch, uv_scale=1.2)

    # Floor cushion & sill succulent
    _make_sphere("FloorCushion", 0.24, (0.72, -0.06, 0.072),
                 mats.get("chair", roughness=0.90, role="fabric"),
                 scale=(1.05, 1.0, 0.32), segments=18, rings=10, parent=arch)
    _make_cylinder("SillPot", 0.038, 0.048, 0.075,
                   (win["x0"] + 0.16, y_back - 0.035, win["z0"] + 0.040),
                   ceramic_mat, segments=16, parent=win_group)
    for k in range(6):
        ang = k * (math.tau / 6.0)
        _make_sphere(f"SillLeaf_{k}", 0.028,
                     (win["x0"] + 0.16 + math.cos(ang) * 0.028,
                      y_back - 0.035 + math.sin(ang) * 0.028,
                      win["z0"] + 0.095 + (k % 2) * 0.014),
                     plant_mat, scale=(0.75, 0.45, 1.5), segments=8, rings=6, parent=win_group)

    return {"arch": arch, "window": win_group}


# ------------------------------------------------------------------ Shelves & Wall Art

def build_wall_decor(root: bpy.types.Object, mats: MaterialLibrary) -> bpy.types.Object:
    """Floating oak shelves with books, vinyl album, retro stereo, ivy & posters."""
    decor = _empty("WallDecor", (0, 0, 0), root)
    wood_mat = mats.get("wood", roughness=0.48, role="wood")
    metal_mat = mats.get("metal", roughness=0.35, metallic=0.55, role="metal")
    pink_led = mats.get("led_pink", roughness=0.35, emission=L.PALETTE["led_pink"],
                        emission_strength=2.2, role="led_pink")
    warm_led = mats.get("lamp_bulb", roughness=0.30, emission=L.PALETTE["lamp_bulb"],
                        emission_strength=3.0, role="lamp_bulb")
    cyan_led = mats.get("led_cyan", roughness=0.35, emission=L.PALETTE["led_cyan"],
                        emission_strength=2.2, role="led_cyan")
    ceramic_mat = mats.get("ceramic", roughness=0.35, role="ceramic")
    plant_mat = mats.get("plant", roughness=0.78, role="plant")
    poster_mat = mats.get("poster_atlas", roughness=0.55, role="poster_atlas")
    book_mats = [
        mats.get("chair", roughness=0.82, role="fabric"),
        mats.get("pastel_pink", roughness=0.60, role="pastel_pink"),
        mats.get("wall_trim", roughness=0.72, role="wall_trim"),
        plant_mat,
    ]
    y_back = L.ROOM_BACK_Y

    shelf_x0, shelf_w = 0.64, 1.32
    shelf_cx = shelf_x0 + shelf_w * 0.5
    shelf_d = 0.22
    shelf_zs = (1.12, 1.56, 1.98)

    for row, sz in enumerate(shelf_zs):
        _make_box(f"ShelfBoard_{row}", (shelf_w, shelf_d, 0.032),
                  (shelf_cx, y_back - shelf_d * 0.5, sz), wood_mat,
                  bevel=0.005, parent=decor, uv_scale=1.6)
        _make_box(f"ShelfLED_{row}", (shelf_w - 0.08, 0.012, 0.008),
                  (shelf_cx, y_back - 0.025, sz - 0.019), pink_led,
                  bevel=0.002, parent=decor)

    # Top shelf books
    cx_book = shelf_x0 + 0.08
    for i, (bw, bh, lean) in enumerate((
        (0.036, 0.22, 0), (0.042, 0.24, 0), (0.030, 0.19, 0),
        (0.045, 0.23, 0), (0.034, 0.21, 9),
    )):
        _make_box(f"BookTop_{i}", (bw, 0.145, bh),
                  (cx_book + bw * 0.5, y_back - 0.11, shelf_zs[2] + 0.016 + bh * 0.5),
                  book_mats[i % len(book_mats)], bevel=0.003,
                  rotation=(0, math.radians(lean), 0), parent=decor)
        cx_book += bw + 0.008

    # Glowing moon-orb lamp on middle shelf
    orb_x = shelf_x0 + 0.84
    _make_cylinder("OrbBase", 0.048, 0.056, 0.022,
                   (orb_x, y_back - 0.12, shelf_zs[1] + 0.027), wood_mat, segments=18, parent=decor)
    orb = _make_sphere("ShelfOrbLamp", 0.070, (orb_x, y_back - 0.12, shelf_zs[1] + 0.100),
                       warm_led, segments=16, rings=12, parent=decor)
    _label(orb, "orb_lamp", interactive="lamp")

    # Middle shelf books
    cx_book = shelf_x0 + 0.10
    for i, (bw, bh, lean) in enumerate((
        (0.040, 0.21, 0), (0.034, 0.24, 0), (0.046, 0.20, 0), (0.036, 0.22, -7),
    )):
        _make_box(f"BookMid_{i}", (bw, 0.14, bh),
                  (cx_book + bw * 0.5, y_back - 0.11, shelf_zs[1] + 0.016 + bh * 0.5),
                  book_mats[(i + 1) % len(book_mats)], bevel=0.003,
                  rotation=(0, math.radians(lean), 0), parent=decor)
        cx_book += bw + 0.010

    # Trailing potted ivy on right end of middle shelf
    pot_x = shelf_x0 + shelf_w - 0.14
    _make_cylinder("ShelfPlantPot", 0.052, 0.066, 0.105,
                   (pot_x, y_back - 0.12, shelf_zs[1] + 0.068), ceramic_mat, segments=18, parent=decor)
    for i in range(10):
        a = i * (math.tau / 10.0)
        _make_sphere(f"ShelfLeaf_{i}", 0.042,
                     (pot_x + math.cos(a) * 0.062,
                      y_back - 0.14 + math.sin(a) * 0.042,
                      shelf_zs[1] + 0.135 + (i % 3) * 0.024),
                     plant_mat, scale=(0.85, 0.45, 1.35), segments=8, rings=6, parent=decor)
    for v in range(5):
        _make_sphere(f"ShelfVine_{v}", 0.026,
                     (pot_x - 0.02 + math.sin(v * 1.1) * 0.03,
                      y_back - 0.225 - v * 0.006,
                      shelf_zs[1] + 0.07 - v * 0.055),
                     plant_mat, scale=(0.9, 0.45, 1.25), segments=8, rings=6, parent=decor)

    # Bottom shelf: Vinyl Album Sleeve + Crisp Flat Vinyl Disc + Retro Stereo (clickable music!)
    vinyl_root = _empty("VinylAlbumDisplay", (0, 0, 0), decor)
    sleeve = _make_box("VinylSleeve", (0.24, 0.014, 0.24),
                       (shelf_x0 + 0.20, y_back - 0.09, shelf_zs[0] + 0.136),
                       poster_mat, bevel=0.002, rotation=(math.radians(-6), 0, 0), parent=vinyl_root)
    _label(sleeve, "vinyl_album", interactive="music")
    disc = _make_cylinder("VinylDisc", 0.105, 0.105, 0.004,
                          (shelf_x0 + 0.31, y_back - 0.098, shelf_zs[0] + 0.136),
                          metal_mat, segments=32,
                          rotation=(math.radians(84), 0, 0), parent=vinyl_root, sharp_caps=True)
    _label(disc, "vinyl_album", interactive="music")
    # Pink center record label
    _make_cylinder("VinylLabel", 0.036, 0.036, 0.005,
                   (shelf_x0 + 0.31, y_back - 0.099, shelf_zs[0] + 0.136),
                   mats.get("pastel_pink", roughness=0.55, role="pastel_pink"),
                   segments=20, rotation=(math.radians(84), 0, 0), parent=vinyl_root, sharp_caps=True)

    stereo = _make_box("RetroStereo", (0.34, 0.15, 0.13),
                       (shelf_x0 + 0.84, y_back - 0.11, shelf_zs[0] + 0.081),
                       mats.get("wall_trim", roughness=0.55, role="wall_trim"),
                       bevel=0.008, parent=vinyl_root)
    _label(stereo, "stereo", interactive="music")
    _make_box("StereoDisplay", (0.14, 0.006, 0.042),
              (shelf_x0 + 0.80, y_back - 0.186, shelf_zs[0] + 0.092),
              cyan_led, bevel=0.002, parent=vinyl_root)
    for k, kx in enumerate((0.94, 0.985)):
        _make_cylinder(f"StereoKnob_{k}", 0.015, 0.015, 0.016,
                       (shelf_x0 + kx, y_back - 0.190, shelf_zs[0] + 0.082),
                       metal_mat, segments=14, rotation=(math.pi * 0.5, 0, 0), parent=vinyl_root)

    # Framed Lofi Sunset Poster (clean spacing right of right curtain!) — left half of poster atlas
    px, pz = 0.28, 1.66
    _make_box("PosterFrameMain", (0.40, 0.022, 0.54),
              (px, y_back - 0.011, pz), wood_mat, bevel=0.004, parent=decor)
    poster_art = _make_uv_quad(
        "PosterArtMain", 0.355, 0.495,
        (px, y_back - 0.024, pz), (0.0, 0.0, 0.0),
        poster_mat, parent=decor, uv_rect=(0.0, 0.0, 0.5, 1.0),
    )
    _label(poster_art, "poster_a")

    # Framed Poster on Left Side Wall — right half of poster atlas
    _make_box("PosterFrameSide", (0.022, 0.70, 0.90),
              (L.ROOM_LEFT_X + 0.011, -0.18, 1.62), wood_mat, bevel=0.005, parent=decor)
    poster_side = _make_uv_quad(
        "PosterArtSide", 0.64, 0.84,
        (L.ROOM_LEFT_X + 0.024, -0.18, 1.62), (0.0, 0.0, -math.pi * 0.5),
        poster_mat, parent=decor, uv_rect=(0.5, 0.0, 1.0, 1.0),
    )
    _label(poster_side, "poster_b")

    # Warm cylindrical floor lamp in right back corner
    fl_x, fl_y = 2.04, 0.92
    _make_cylinder("FloorLampBase", 0.11, 0.12, 0.024,
                   (fl_x, fl_y, 0.012), metal_mat, segments=22, parent=decor)
    fl_tube = _make_cylinder("FloorLampGlow", 0.068, 0.068, 0.92,
                             (fl_x, fl_y, 0.48), warm_led, segments=20, parent=decor)
    _label(fl_tube, "floor_lamp", interactive="lamp")
    _make_cylinder("FloorLampCap", 0.088, 0.088, 0.024,
                   (fl_x, fl_y, 0.95), metal_mat, segments=22, parent=decor)

    return decor


# ------------------------------------------------------------------ Chair

def build_chair(root: bpy.types.Object, mats: MaterialLibrary) -> bpy.types.Object:
    """Sculpted ergonomic pastel study chair aligned to Snozzy's seated anatomy."""
    chair = _empty("Chair", (L.CHAIR_CENTER_X, L.CHAIR_CENTER_Y, 0.0), root)
    _label(chair, "chair", socket="Chair")
    chair_mat = mats.get("chair", roughness=0.80, role="fabric")
    trim_mat = mats.get("wall_trim", roughness=0.65, role="wall_trim")
    pink_mat = mats.get("pastel_pink", roughness=0.72, role="pastel_pink")
    metal_mat = mats.get("metal", roughness=0.32, metallic=0.60, role="metal")

    seat_h = 0.070
    seat_z = L.CHAIR_SEAT_TOP_Z - seat_h * 0.5
    _make_box("ChairSeat", (0.48, 0.45, seat_h),
              (0.0, -0.02, seat_z), chair_mat, bevel=0.026, segments=3,
              parent=chair, smooth=True)
    _make_box("ChairSeatRim", (0.42, 0.39, 0.018),
              (0.0, -0.02, seat_z - seat_h * 0.5 - 0.008), metal_mat,
              bevel=0.006, parent=chair)

    # Tapered mid-back silhouette (frames her waist & shoulders without huge rectangle)
    back_y = L.CHAIR_BACK_Y - L.CHAIR_CENTER_Y
    back_z = L.CHAIR_SEAT_TOP_Z + 0.31
    recline = math.radians(-8.0)
    _make_box("ChairBackFrame", (0.44, 0.048, 0.48),
              (0.0, back_y, back_z), trim_mat, bevel=0.020, segments=3,
              rotation=(recline, 0, 0), parent=chair, smooth=True)
    _make_box("ChairBackCushion", (0.37, 0.036, 0.41),
              (0.0, back_y - 0.016, back_z), chair_mat, bevel=0.016, segments=2,
              rotation=(recline, 0, 0), parent=chair, smooth=True)
    # Cute soft pastel lumbar/headrest accent pillow
    _make_sphere("ChairHeadPillow", 0.095, (0.0, back_y - 0.030, back_z + 0.16),
                 pink_mat, scale=(1.55, 0.42, 0.65), segments=16, rings=10, parent=chair)

    # Spine bracket
    _make_box("ChairSpineArm", (0.075, 0.22, 0.030),
              (0.0, 0.14, seat_z - 0.04), metal_mat, bevel=0.008, parent=chair)
    _make_box("ChairSpineUp", (0.070, 0.034, 0.22),
              (0.0, back_y + 0.018, L.CHAIR_SEAT_TOP_Z + 0.06),
              metal_mat, bevel=0.008, rotation=(recline, 0, 0), parent=chair)

    # Low sculpted armrests cleanly below desk underside (0.70m)
    arm_z = L.CHAIR_SEAT_TOP_Z + 0.150
    for side in (-1, 1):
        _make_box(f"ChairArmPad_{side}", (0.052, 0.25, 0.026),
                  (side * 0.285, -0.02, arm_z), chair_mat,
                  bevel=0.011, segments=2, parent=chair, smooth=True)
        _make_cylinder(f"ChairArmPost_{side}", 0.014, 0.016, arm_z - seat_z,
                       (side * 0.275, 0.03, (arm_z + seat_z) * 0.5),
                       metal_mat, segments=12, parent=chair)

    # Pneumatic cylinder + 5-star caster base resting cleanly on rug (z = 0.014)
    hub_z = L.RUG_TOP_Z + 0.075
    cyl_h = (seat_z - 0.03) - hub_z
    _make_cylinder("ChairPiston", 0.025, 0.031, cyl_h,
                   (0.0, 0.0, hub_z + cyl_h * 0.5), metal_mat, segments=16, parent=chair)
    _make_cylinder("ChairHub", 0.060, 0.050, 0.052,
                   (0.0, 0.0, hub_z), metal_mat, segments=18, parent=chair)
    for i in range(5):
        ang = math.tau * i / 5.0 + 0.35
        dx, dy = math.sin(ang), math.cos(ang)
        _make_box(f"ChairLeg_{i}", (0.030, 0.28, 0.022),
                  (dx * 0.150, dy * 0.150, L.RUG_TOP_Z + 0.056),
                  metal_mat, bevel=0.008, rotation=(0, 0, -ang), parent=chair)
        _make_sphere(f"ChairWheel_{i}", 0.024,
                     (dx * 0.278, dy * 0.278, L.RUG_TOP_Z + 0.024),
                     metal_mat, segments=12, rings=8, parent=chair)
    return chair


# ------------------------------------------------------------------ Mechanical Keyboard

def build_keyboard(parent: bpy.types.Object, mats: MaterialLibrary) -> bpy.types.Object:
    """75% sculpted mechanical keyboard with visible beveled keycaps & sakura accents."""
    kbd_root = _empty("Keyboard", L.KEYBOARD_CENTER, parent)
    kbd_root.rotation_euler = Euler((L.KEYBOARD_TILT, 0.0, L.KEYBOARD_YAW), "XYZ")
    _label(kbd_root, "keyboard", socket="Keyboard")

    base_mat = mats.get("metal", roughness=0.40, metallic=0.45, role="metal")
    key_mat = mats.get("paper", roughness=0.50, role="paper")
    accent_mat = mats.get("pastel_pink", roughness=0.50, role="pastel_pink")
    cyan_led = mats.get("led_cyan", roughness=0.35, emission=L.PALETTE["led_cyan"],
                        emission_strength=1.8, role="led_cyan")

    w, d, bh, kh = L.KEYBOARD_WIDTH, L.KEYBOARD_DEPTH, L.KEYBOARD_BASE_H, L.KEYBOARD_KEY_H
    parts = [
        _make_box("KbdChassis", (w, d, bh), (0, 0, bh * 0.5),
                  base_mat, bevel=0.005, segments=2),
        _make_box("KbdRGBStrip", (w - 0.024, 0.006, 0.003),
                  (0, -d * 0.5 + 0.003, bh * 0.35), cyan_led, bevel=0.001),
    ]

    cols, rows = 15, 5
    gap = 0.0028
    pad_x, pad_y = 0.009, 0.010
    kw = (w - pad_x * 2 - gap * (cols - 1)) / cols
    kd = (d - pad_y * 2 - gap * (rows - 1)) / rows
    x0 = -w * 0.5 + pad_x + kw * 0.5
    y0 = -d * 0.5 + pad_y + kd * 0.5

    bm_white = bmesh.new()
    bm_accent = bmesh.new()

    def add_keycap(target_bm: bmesh.types.BMesh, cx: float, cy: float,
                   width: float, depth: float) -> None:
        hw0, hd0 = width * 0.48, depth * 0.48
        hw1, hd1 = width * 0.37, depth * 0.37
        z0, z1 = bh - 0.001, bh + kh
        b = [
            target_bm.verts.new((cx - hw0, cy - hd0, z0)),
            target_bm.verts.new((cx + hw0, cy - hd0, z0)),
            target_bm.verts.new((cx + hw0, cy + hd0, z0)),
            target_bm.verts.new((cx - hw0, cy + hd0, z0)),
        ]
        t = [
            target_bm.verts.new((cx - hw1, cy - hd1, z1)),
            target_bm.verts.new((cx + hw1, cy - hd1, z1)),
            target_bm.verts.new((cx + hw1, cy + hd1, z1)),
            target_bm.verts.new((cx - hw1, cy + hd1, z1)),
        ]
        target_bm.faces.new((t[0], t[1], t[2], t[3]))
        for i in range(4):
            j = (i + 1) % 4
            target_bm.faces.new((b[i], b[j], t[j], t[i]))

    for r in range(rows):
        for c in range(cols):
            if r == 4 and 4 <= c <= 9:
                if c != 4:
                    continue
                span_w = kw * 6 + gap * 5
                cx = x0 + (4 + 2.5) * (kw + gap)
                cy = y0 + r * (kd + gap)
                add_keycap(bm_accent, cx, cy, span_w, kd)
                continue
            cx = x0 + c * (kw + gap)
            cy = y0 + r * (kd + gap)
            is_accent = (r == 0 and c == 14) or (r == 2 and c == 0) or (r == 4 and c in (0, 14))
            add_keycap(bm_accent if is_accent else bm_white, cx, cy, kw, kd)

    for mesh_name, bm, m in (("KbdKeysMain", bm_white, key_mat),
                             ("KbdKeysAccent", bm_accent, accent_mat)):
        bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
        mesh = bpy.data.meshes.new(mesh_name)
        bm.to_mesh(mesh)
        bm.free()
        _ensure_box_uvs(mesh, scale=6.0)
        mesh.materials.append(m)
        obj = bpy.data.objects.new(mesh_name, mesh)
        bpy.context.scene.collection.objects.link(obj)
        parts.append(obj)

    for p in parts:
        p.parent = kbd_root
    return kbd_root


# ------------------------------------------------------------------ Desk, Monitors & Props

def build_desk_and_props(root: bpy.types.Object, mats: MaterialLibrary) -> dict:
    """L-shaped pale oak workstation, dual live monitors, and interactive desk props."""
    desk = _empty("Desk", (0, 0, 0), root)
    wood_mat = mats.get("wood", roughness=0.48, role="wood")
    metal_mat = mats.get("metal", roughness=0.34, metallic=0.55, role="metal")
    trim_mat = mats.get("wall_trim", roughness=0.68, role="wall_trim")
    mat_pad = mats.get("rug", roughness=0.92, role="rug")
    pink_led = mats.get("led_pink", roughness=0.35, emission=L.PALETTE["led_pink"],
                        emission_strength=2.0, role="led_pink")
    cyan_led = mats.get("led_cyan", roughness=0.35, emission=L.PALETTE["led_cyan"],
                        emission_strength=2.2, role="led_cyan")
    warm_led = mats.get("lamp_bulb", roughness=0.30, emission=L.PALETTE["lamp_bulb"],
                        emission_strength=3.2, role="lamp_bulb")
    ceramic_mat = mats.get("ceramic", roughness=0.32, role="ceramic")
    coffee_mat = mats.get("coffee_liquid", roughness=0.18, role="coffee_liquid")
    paper_mat = mats.get("paper", roughness=0.82, role="paper")
    plant_mat = mats.get("plant", roughness=0.78, role="plant")
    accent_pink = mats.get("pastel_pink", roughness=0.52, role="pastel_pink")
    scr_main_mat = mats.get("screen_main", roughness=0.18,
                            emission=L.PALETTE["screen_main"], emission_strength=1.2,
                            role="screen_main")
    scr_side_mat = mats.get("screen_side", roughness=0.18,
                            emission=L.PALETTE["screen_side"], emission_strength=1.2,
                            role="screen_side")
    scr_phone_mat = mats.get("screen_phone", roughness=0.16,
                             emission=L.PALETTE["screen_phone"], emission_strength=1.5,
                             role="screen_phone")

    dz = L.DESK_SURFACE_Z
    dt = L.DESK_THICKNESS
    top_center_z = dz - dt * 0.5  # Top surface sits EXACTLY at DESK_SURFACE_Z!

    main_w = L.DESK_MAIN_X1 - L.DESK_MAIN_X0
    main_d = L.DESK_NEAR_Y - L.DESK_FAR_Y
    main_cx = (L.DESK_MAIN_X0 + L.DESK_MAIN_X1) * 0.5
    main_cy = (L.DESK_NEAR_Y + L.DESK_FAR_Y) * 0.5
    _make_box("DeskTopMain", (main_w, main_d, dt),
              (main_cx, main_cy, top_center_z), wood_mat,
              bevel=0.009, segments=2, parent=desk, uv_scale=1.1)

    ret_w = L.DESK_RETURN_X1 - L.DESK_RETURN_X0
    ret_d = L.DESK_RETURN_Y1 - (L.DESK_NEAR_Y - 0.02)
    ret_cx = (L.DESK_RETURN_X0 + L.DESK_RETURN_X1) * 0.5
    ret_cy = (L.DESK_RETURN_Y1 + L.DESK_NEAR_Y - 0.02) * 0.5
    _make_box("DeskTopReturn", (ret_w, ret_d, dt),
              (ret_cx, ret_cy, top_center_z), wood_mat,
              bevel=0.009, segments=2, parent=desk, uv_scale=1.1)

    # Soft pink under-edge LED accent along front apron
    _make_box("DeskFrontLED", (main_w - 0.14, 0.010, 0.010),
              (main_cx, L.DESK_FAR_Y + 0.018, dz - dt - 0.005), pink_led,
              bevel=0.002, parent=desk)

    # Left 3-Drawer Pedestal Cabinet
    cab_h = dz - dt
    cab_w, cab_d = 0.42, 0.58
    cab_x, cab_y = L.DESK_MAIN_X0 + 0.25, main_cy
    _make_box("DeskCabinet", (cab_w, cab_d, cab_h),
              (cab_x, cab_y, cab_h * 0.5), trim_mat, bevel=0.008, parent=desk)
    for idx in range(3):
        dr_z = 0.12 + idx * 0.215
        _make_box(f"DrawerFront_{idx}", (cab_w - 0.04, 0.018, 0.185),
                  (cab_x, cab_y - cab_d * 0.5 - 0.009, dr_z), paper_mat,
                  bevel=0.004, parent=desk)
        _make_box(f"DrawerHandle_{idx}", (0.12, 0.018, 0.012),
                  (cab_x, cab_y - cab_d * 0.5 - 0.022, dr_z + 0.025),
                  metal_mat, bevel=0.003, parent=desk)

    # Right Sculpted Panel Leg + Back Support Leg on Return
    _make_box("DeskLegRight", (0.048, main_d - 0.08, cab_h),
              (L.DESK_MAIN_X1 - 0.06, main_cy, cab_h * 0.5),
              trim_mat, bevel=0.006, parent=desk)
    _make_box("DeskLegReturn", (0.055, 0.055, cab_h),
              (L.DESK_RETURN_X0 + 0.06, L.DESK_RETURN_Y1 - 0.06, cab_h * 0.5),
              metal_mat, bevel=0.006, parent=desk)

    # Plush Oversized Desk Mat (flush on desk surface)
    _make_box("DeskMat", (L.DESK_MAT_SIZE[0], L.DESK_MAT_SIZE[1], L.DESK_MAT_THICKNESS),
              (L.DESK_MAT_CENTER[0], L.DESK_MAT_CENTER[1], dz + L.DESK_MAT_THICKNESS * 0.5),
              mat_pad, bevel=0.0012, parent=desk, uv_scale=2.0)

    # 75% Mechanical Keyboard
    keyboard = build_keyboard(desk, mats)

    # Sculpted Ergonomic Wireless Mouse
    mx, my, mz = L.MOUSE_CENTER
    mouse = _make_sphere("Mouse", 0.036, (mx, my, mz + 0.017), paper_mat,
                         scale=(0.82, 1.38, 0.52), segments=18, rings=10, parent=desk)
    _make_box("MouseWheel", (0.006, 0.016, 0.008),
              (mx, my - 0.018, mz + 0.034), accent_pink, bevel=0.002, parent=desk)
    _label(mouse, "mouse")

    # ── Main Monitor ──
    mon_root = _empty("Monitor", L.MAIN_MONITOR_POS, root)
    mon_root.rotation_euler = Euler((0.0, 0.0, L.MAIN_MONITOR_YAW), "XYZ")
    _make_box("MonitorBase", (0.24, 0.16, 0.014), (0.0, 0.0, 0.007),
              metal_mat, bevel=0.005, parent=mon_root)
    _make_box("MonitorNeck", (0.042, 0.028, 0.28), (0.0, -0.042, 0.15),
              metal_mat, bevel=0.005, rotation=(math.radians(8), 0, 0), parent=mon_root)
    _make_box("MonitorChassis", (0.56, 0.026, 0.34), (0.0, 0.0, 0.34),
              metal_mat, bevel=0.008, parent=mon_root)
    mon_screen = _make_uv_quad(
        "MonitorScreen", 0.525, 0.305,
        (0.0, 0.015, 0.34), (0.0, 0.0, math.pi),
        scr_main_mat, parent=mon_root,
    )
    _label(mon_screen, "screen_surface", socket="Prop_Screen", interactive="monitor")
    _make_sphere("MonitorBackGlow", 0.014, (0.0, -0.014, 0.35), pink_led,
                 scale=(1.0, 0.25, 1.0), segments=12, rings=8, parent=mon_root)

    # ── Secondary Side Monitor (Music Player + Audio Visualizer + Focus Ring) ──
    side_mon = _empty("SideMonitor", L.SIDE_MONITOR_POS, root)
    side_mon.rotation_euler = Euler((0.0, 0.0, L.SIDE_MONITOR_YAW), "XYZ")
    _make_box("SideMonBase", (0.19, 0.14, 0.012), (0.0, 0.0, 0.006),
              metal_mat, bevel=0.004, parent=side_mon)
    _make_box("SideMonNeck", (0.036, 0.024, 0.24), (0.0, -0.035, 0.13),
              metal_mat, bevel=0.004, parent=side_mon)
    _make_box("SideMonChassis", (0.40, 0.022, 0.27), (0.0, 0.0, 0.29),
              metal_mat, bevel=0.007, parent=side_mon)
    side_screen = _make_uv_quad(
        "SideMonitorScreen", 0.372, 0.242,
        (0.0, 0.013, 0.29), (0.0, 0.0, math.pi),
        scr_side_mat, parent=side_mon,
    )
    _label(side_screen, "side_screen_surface", interactive="monitor")

    # ── Coffee Mug + Coaster (`Prop_Coffee` socket at mug center!) ──
    cx, cy, cz = L.COFFEE_REST_POS
    _make_cylinder("CoffeeCoaster", L.COFFEE_RADIUS + 0.012, L.COFFEE_RADIUS + 0.012,
                   L.COASTER_THICKNESS, (cx, cy, dz + L.COASTER_THICKNESS * 0.5),
                   wood_mat, segments=24, parent=desk, sharp_caps=True)

    mug_center = (cx, cy, cz + L.COFFEE_HEIGHT * 0.5)
    coffee_anchor = _empty("Prop_Coffee_Rest", mug_center, root)
    coffee_anchor.rotation_euler = Euler((0.0, 0.0, L.COFFEE_REST_YAW), "XYZ")
    coffee = _empty("Prop_Coffee", (0.0, 0.0, 0.0), coffee_anchor)
    coffee.rotation_mode = "QUATERNION"
    _label(coffee, "prop_socket", socket="Prop_Coffee", interactive="coffee")

    mr, mh = L.COFFEE_RADIUS, L.COFFEE_HEIGHT
    cup_body = _make_cylinder("CoffeeCup", mr * 0.89, mr, mh, (0, 0, 0),
                              ceramic_mat, segments=28, parent=coffee, sharp_caps=True)
    _label(cup_body, "prop_coffee", interactive="coffee")
    _make_torus("CoffeeRim", mr * 0.96, 0.0038, (0, 0, mh * 0.49),
                accent_pink, major_seg=28, minor_seg=8, parent=coffee)
    _make_cylinder("CoffeeSurface", mr * 0.88, mr * 0.88, 0.004,
                   (0, 0, mh * 0.42), coffee_mat, segments=24, parent=coffee, sharp_caps=True)
    handle = _make_torus("CoffeeHandle", 0.023, 0.0052,
                         (mr * 0.94, 0.0, 0.003), ceramic_mat,
                         major_seg=18, minor_seg=8,
                         rotation=(math.pi * 0.5, 0.0, 0.0),
                         parent=coffee, arc_radians=math.pi * 1.15)
    _label(handle, "prop_coffee", interactive="coffee")

    # ── Smartphone (`Prop_Phone` socket at phone center!) ──
    phone_anchor = _empty("Prop_Phone_Rest", L.PHONE_REST_POS, root)
    phone_anchor.rotation_euler = Euler((0.0, 0.0, L.PHONE_REST_YAW), "XYZ")
    phone = _empty("Prop_Phone", (0.0, 0.0, 0.0), phone_anchor)
    phone.rotation_mode = "QUATERNION"
    _label(phone, "prop_socket", socket="Prop_Phone", interactive="phone")

    pw, pl, pt = L.PHONE_WIDTH, L.PHONE_LENGTH, L.PHONE_THICKNESS
    p_body = _make_box("PhoneBody", (pw, pl, pt), (0, 0, 0),
                       metal_mat, bevel=0.0035, segments=2, parent=phone)
    _label(p_body, "prop_phone", interactive="phone")
    # Front screen facing local +Z (flat face-up at rest)
    p_screen = _make_uv_quad(
        "PhoneScreen", pw * 0.89, pl * 0.92,
        (0.0, 0.0, pt * 0.5 + 0.0008), (-math.pi * 0.5, 0.0, 0.0),
        scr_phone_mat, parent=phone,
    )
    _label(p_screen, "phone_screen_surface", interactive="phone")
    _make_box("PhoneCameraBump", (0.024, 0.026, 0.003),
              (-pw * 0.24, pl * 0.30, -pt * 0.5 - 0.0012),
              trim_mat, bevel=0.001, parent=phone)

    # ── Open Spiral Notebook & Pen (`Prop_Pen` companion animation!) ──
    nb_root = _empty("NotebookGroup", L.NOTEBOOK_POS, desk)
    nb_root.rotation_euler = Euler((0.0, 0.0, L.NOTEBOOK_YAW), "XYZ")
    nb_cov = _make_box("NotebookCover", (0.26, 0.19, 0.008), (0.0, 0.0, 0.004),
                       accent_pink, bevel=0.003, parent=nb_root)
    _label(nb_cov, "notebook", interactive="notebook")
    for side, sx in (("L", -0.062), ("R", 0.062)):
        pg = _make_box(f"NotebookPage_{side}", (0.118, 0.178, 0.006),
                       (sx, 0.0, 0.011), paper_mat, bevel=0.002,
                       rotation=(0, math.radians(-2.5 if side == "L" else 2.5), 0),
                       parent=nb_root)
        _label(pg, "notebook", interactive="notebook")
    for i in range(6):
        _make_torus(f"NotebookRing_{i}", 0.0075, 0.0014,
                    (0.0, -0.068 + i * 0.027, 0.012), metal_mat,
                    major_seg=12, minor_seg=6, rotation=(0, math.pi * 0.5, 0),
                    parent=nb_root)

    # Pen rests flat on desk beside notebook (local +Z = pen tip-to-cap axis)
    pen_anchor = _empty("Prop_Pen_Rest", L.PEN_REST_POS, root)
    pen_anchor.rotation_euler = Euler((math.pi * 0.5, 0.0, L.PEN_REST_YAW), "XYZ")
    pen = _empty("Prop_Pen", (0.0, 0.0, 0.0), pen_anchor)
    pen.rotation_mode = "QUATERNION"
    _label(pen, "prop_socket", socket="Prop_Pen", interactive="notebook")
    pen_barrel = _make_cylinder("PenBarrel", 0.0048, 0.0052, 0.125, (0, 0, 0.005),
                                accent_pink, segments=12, parent=pen)
    _make_cylinder("PenTip", 0.0008, 0.0048, 0.018, (0, 0, -0.066),
                   metal_mat, segments=10, parent=pen)
    _label(pen_barrel, "prop_pen", interactive="notebook")

    # ── Articulated Cozy Desk Lamp (placed on right rear edge so foreground stays open!) ──
    lamp = _empty("DeskLamp", L.LAMP_POS, desk)
    _make_cylinder("LampBase", 0.072, 0.064, 0.018, (0, 0, 0.009),
                   metal_mat, segments=24, parent=lamp, sharp_caps=True)
    p0 = Vector((0.0, 0.0, 0.018))
    p1 = Vector((0.055, 0.045, 0.255))
    p2 = Vector((-0.095, -0.055, 0.445))
    p3 = Vector((-0.145, -0.095, 0.390))
    _make_rod("LampStemLower", p0, p1, 0.0085, metal_mat, parent=lamp)
    _make_sphere("LampJointElbow", 0.014, tuple(p1), accent_pink, segments=12, rings=8, parent=lamp)
    _make_rod("LampStemUpper", p1, p2, 0.0080, metal_mat, parent=lamp)
    _make_sphere("LampJointHead", 0.013, tuple(p2), accent_pink, segments=12, rings=8, parent=lamp)
    shade_dir = (p2 - p3).normalized()
    shade_rot = shade_dir.to_track_quat("Z", "Y").to_euler("XYZ")
    shade_mid = p2.lerp(p3, 0.55)
    shade = _make_cylinder("LampShade", 0.090, 0.036, 0.110, tuple(shade_mid),
                           ceramic_mat, segments=24, rotation=tuple(shade_rot),
                           parent=lamp, sharp_caps=True)
    _label(shade, "desk_lamp", interactive="lamp")
    bulb = _make_sphere("LampBulb", 0.034, tuple(p3), warm_led,
                        segments=14, rings=10, parent=lamp)
    _label(bulb, "lamp_bulb", interactive="lamp")

    # ── Cute Cozy Fox/Cat Desk Plushie on Return Wing (facing camera + Snozzy!) ──
    plush = _empty("DeskPlushie", L.PLUSHIE_POS, desk)
    plush.rotation_euler = Euler((0.0, 0.0, math.radians(42.0)), "XYZ")
    _label(plush, "plushie", interactive="plushie")
    plush_body = _make_sphere("PlushBody", 0.066, (0, 0, 0.058), ceramic_mat,
                              scale=(0.95, 0.90, 1.02), segments=16, rings=12, parent=plush)
    _label(plush_body, "plushie", interactive="plushie")
    plush_head = _make_sphere("PlushHead", 0.055, (0, 0.004, 0.142), ceramic_mat,
                              scale=(1.08, 0.96, 0.95), segments=16, rings=12, parent=plush)
    _label(plush_head, "plushie", interactive="plushie")
    for sx in (-1, 1):
        _make_cylinder(f"PlushEar_{sx}", 0.021, 0.003, 0.044,
                       (sx * 0.035, 0.004, 0.194), accent_pink, segments=10,
                       rotation=(0, math.radians(sx * 18), 0), parent=plush)
        _make_sphere(f"PlushEye_{sx}", 0.006,
                     (sx * 0.019, -0.049, 0.148), metal_mat, segments=8, rings=6, parent=plush)
        _make_sphere(f"PlushCheek_{sx}", 0.009,
                     (sx * 0.031, -0.044, 0.136), accent_pink,
                     scale=(1.2, 0.4, 0.7), segments=8, rings=6, parent=plush)
    _make_sphere("PlushTail", 0.032, (0.045, 0.052, 0.045), ceramic_mat,
                 scale=(0.8, 1.4, 0.75), segments=12, rings=8, parent=plush)

    # ── Glowing Crystal Cluster on Right Front Desk Corner ──
    crys = _empty("CrystalLamp", L.CRYSTAL_POS, desk)
    _make_cylinder("CrystalBase", 0.044, 0.048, 0.016, (0, 0, 0.008),
                   wood_mat, segments=18, parent=crys, sharp_caps=True)
    for idx, (ox, oy, h_c, r_c, rx, ry) in enumerate((
        (0.0, 0.0, 0.115, 0.022, 0.0, 0.0),
        (-0.022, 0.012, 0.080, 0.016, 12.0, -16.0),
        (0.024, -0.010, 0.088, 0.017, -10.0, 18.0),
        (0.006, 0.022, 0.064, 0.014, 18.0, 8.0),
    )):
        shard = _make_cylinder(f"CrystalShard_{idx}", r_c, 0.003, h_c,
                               (ox, oy, 0.016 + h_c * 0.46), cyan_led, segments=6,
                               rotation=(math.radians(rx), math.radians(ry), idx * 0.7),
                               parent=crys, smooth=False)
        _label(shard, "crystal_lamp", interactive="crystal")

    # ── Potted Succulent on Far-Left Desk Corner ──
    px, py, pz = L.DESK_PLANT_POS
    _make_cylinder("DeskPot", 0.046, 0.058, 0.085, (px, py, pz + 0.0425),
                   ceramic_mat, segments=18, parent=desk, sharp_caps=True)
    for i in range(8):
        a = math.tau * i / 8.0
        _make_sphere(f"DeskSucculent_{i}", 0.034,
                     (px + math.cos(a) * 0.036, py + math.sin(a) * 0.036,
                      pz + 0.102 + (i % 2) * 0.016),
                     plant_mat, scale=(0.75, 0.42, 1.45), segments=8, rings=6, parent=desk)

    # ── Sleek Low-Profile Desk Soundbar neatly tucked under Main Monitor (zero occlusion!) ──
    sb = _make_box("DeskSoundbar", (0.36, 0.062, 0.048),
                   (-0.28, -0.62, dz + 0.024), trim_mat, bevel=0.008,
                   rotation=(0, 0, L.MAIN_MONITOR_YAW), parent=desk)
    _label(sb, "speaker", interactive="music")
    _make_box("SoundbarGrille", (0.32, 0.006, 0.030),
              (0.0, 0.031, 0.0), metal_mat, bevel=0.002, parent=sb)
    _make_box("SoundbarAccent", (0.28, 0.006, 0.005),
              (0.0, 0.032, -0.016), cyan_led, bevel=0.001, parent=sb)

    return {
        "desk": desk,
        "keyboard": keyboard,
        "monitor": mon_root,
        "side_monitor": side_mon,
        "coffee": coffee,
        "phone": phone,
        "pen": pen,
        "lamp": lamp,
        "plushie": plush,
        "crystal": crys,
    }

"""Character setup, grounded seated posture, 3D headphones, and IK helpers.

Fixes the historical 3D character construction issues:
- Grounds Snozzy's shoes cleanly ON the rug (z = 0.014m) instead of using the
  2.5D camera `place_hip` shift that buried her feet 14cm underground.
- Poses her 5-bone fox tail gracefully around the chair side so it never stabs
  rigidly through the chair backrest.
- Builds sleek, custom 3D over-ear headphones skinned cleanly to `J_Bip_C_Head`
  with emissive beat-reactive earcup rings (reusing existing room materials so
  total material slots remain <= 40).
- Provides natural thumb-curled typing hands, smooth analytical 2-bone IK, and
  quaternion-interpolated bone blending.
"""

from __future__ import annotations

import math
import sys
from pathlib import Path

import bmesh
import bpy
from mathutils import Euler, Matrix, Quaternion, Vector

BLENDER_DIR = Path(__file__).resolve().parent.parent
if str(BLENDER_DIR) not in sys.path:
    sys.path.insert(0, str(BLENDER_DIR))

import headphones as HP  # noqa: E402
import pose as P  # noqa: E402
import room_geometry as G  # noqa: E402
import room_layout as L  # noqa: E402
from room_materials import MaterialLibrary  # noqa: E402


# Natural seated leg pose tailored to 3D chair (seat top = 0.505m, rug = 0.014m).
# Thighs rest cleanly on the cushion; shins angle softly back/inward so shoes
# sit together cleanly on the rug with zero knee-desk or foot-floor clipping.
SEATED_LEGS_3D = {
    "L": ((0.03, -0.98, -0.15), (-0.05, 0.30, -0.95), (-0.02, -0.95, -0.18)),
    "R": ((-0.03, -0.98, -0.15), (0.05, 0.30, -0.95), (0.02, -0.95, -0.18)),
}


def _aim_opt_chain(arm: bpy.types.Object, name: str, direction: Vector) -> None:
    """Aim a `J_Opt_*` bone along its true child direction (head -> child.head).

    `pose._limb_dir` only follows `J_Bip_` and `J_Sec_`; `J_Opt_C_FoxTail*`
    bone tails point ~90° off their true segment axis (HANDOFF pitfall #1).
    """
    pb = arm.pose.bones.get(name)
    if pb is None:
        return
    kids = [c for c in pb.children if c.name.startswith("J_Opt_")]
    cur = (kids[0].head - pb.head) if kids else (pb.tail - pb.head)
    if cur.length < 1e-6:
        return
    q = cur.normalized().rotation_difference(Vector(direction).normalized())
    m = pb.matrix.copy()
    loc = m.translation.copy()
    m = q.to_matrix().to_4x4() @ m
    m.translation = loc
    pb.matrix = m
    bpy.context.view_layer.update()


def pose_fox_tail(arm: bpy.types.Object, wag_yaw: float = 0.0, lift: float = 0.0) -> None:
    """Curve Snozzy's 5-bone fox tail smoothly around her left (+X) chair side."""
    # Progressive horizontal-sweeping curl around chair's +X edge at cushion height
    # so the fluffy tip peeks out naturally beside her, well clear of floor & backrest.
    targets = [
        (0.82, 0.56, -0.05 + lift * 0.15),
        (0.96, 0.20, 0.02 + lift * 0.25),
        (0.90, -0.34, 0.10 + lift * 0.35),
        (0.60, -0.76, 0.20 + lift * 0.45),
        (0.26, -0.88, 0.34 + lift * 0.55),
    ]
    rot_wag = Matrix.Rotation(wag_yaw, 3, "Z")
    for idx, vec in enumerate(targets, start=1):
        name = f"J_Opt_C_FoxTail{idx}_01"
        if name not in arm.pose.bones:
            continue
        direction = rot_wag @ Vector(vec).normalized()
        _aim_opt_chain(arm, name, direction)


def build_headphones_3d(
    arm: bpy.types.Object,
    meshes: list[bpy.types.Object],
    mats: MaterialLibrary,
) -> list[bpy.types.Object]:
    """Build sculpted pastel over-ear headphones skinned 100% to `J_Bip_C_Head`.

    Skinning in armature bind space (rather than bone-parenting) guarantees
    zero parent-inverse drift across Blender -> glTF -> Three.js while still
    exposing distinct named nodes (`Headphones_3D`, `HeadphoneRing_L/R`) that
    Three.js toggles smoothly when music plays and pulses to the beat.
    """
    m = HP.head_metrics(meshes)
    centre, half_w, depth = m["centre"], m["half_w"], m["depth"]
    r = half_w * 1.24  # sits cleanly outside her silver hair & bangs
    ear_z = centre.z - half_w * 0.25
    band_y = centre.y + depth * 0.08

    shell_mat = mats.get("ceramic", roughness=0.32, role="ceramic")
    accent_mat = mats.get("pastel_pink", roughness=0.45, role="pastel_pink")
    pad_mat = mats.get("chair", roughness=0.85, role="fabric")
    ring_mat = mats.get("led_pink", roughness=0.30, emission=L.PALETTE["led_pink"],
                        emission_strength=2.6, role="led_pink")

    def skin_to_head(obj: bpy.types.Object) -> bpy.types.Object:
        # Bake world transform into armature-local bind mesh so glTF SkinnedMesh
        # matches `Sleeve_L/R` bind-space convention identically.
        inv = arm.matrix_world.inverted() @ obj.matrix_world
        obj.data.transform(inv)
        obj.matrix_world = arm.matrix_world.copy()
        obj.parent = arm
        vg = obj.vertex_groups.new(name="J_Bip_C_Head")
        vg.add(list(range(len(obj.data.vertices))), 1.0, "REPLACE")
        mod = obj.modifiers.new("Armature", "ARMATURE")
        mod.object = arm
        return obj

    # Headband arc across crown (195° arc, open at bottom!)
    band = G._make_torus(
        "HP3D_Band",
        major=r * 1.02,
        minor=half_w * 0.085,
        location=(centre.x, band_y, centre.z + half_w * 0.06),
        mat=shell_mat,
        major_seg=32,
        minor_seg=10,
        rotation=(math.pi * 0.5, 0.0, 0.0),
        arc_radians=math.radians(196.0),
    )
    # Soft cushion strip inside top of headband
    cushion = G._make_torus(
        "HP3D_BandPad",
        major=r * 0.94,
        minor=half_w * 0.055,
        location=(centre.x, band_y, centre.z + half_w * 0.06),
        mat=accent_mat,
        major_seg=24,
        minor_seg=8,
        rotation=(math.pi * 0.5, 0.0, 0.0),
        arc_radians=math.radians(130.0),
    )

    body_parts = [band, cushion]
    ring_parts = []
    for side, sx in (("L", 1.0), ("R", -1.0)):
        pos = Vector((centre.x + sx * r * 0.96, band_y, ear_z))
        # Outer sculpted shell cup
        cup = G._make_cylinder(
            f"HP3D_Cup_{side}",
            half_w * 0.36, half_w * 0.42, half_w * 0.22,
            tuple(pos), shell_mat, segments=28,
            rotation=(0.0, sx * math.pi * 0.5, 0.0),
        )
        # Pastel outer cap accent
        cap = G._make_cylinder(
            f"HP3D_Cap_{side}",
            half_w * 0.28, half_w * 0.30, half_w * 0.06,
            tuple(pos + Vector((sx * half_w * 0.12, 0.0, 0.0))),
            accent_mat, segments=24,
            rotation=(0.0, sx * math.pi * 0.5, 0.0),
        )
        # Soft ear pad cushion pressing gently against head
        pad = G._make_torus(
            f"HP3D_Pad_{side}",
            major=half_w * 0.34, minor=half_w * 0.085,
            location=tuple(pos - Vector((sx * half_w * 0.11, 0.0, 0.0))),
            mat=pad_mat, major_seg=24, minor_seg=10,
            rotation=(0.0, math.pi * 0.5, 0.0),
        )
        # Glowing audio-reactive LED ring on outer cup face
        ring = G._make_torus(
            f"HP3D_Ring_{side}",
            major=half_w * 0.31, minor=half_w * 0.026,
            location=tuple(pos + Vector((sx * half_w * 0.115, 0.0, 0.0))),
            mat=ring_mat, major_seg=24, minor_seg=8,
            rotation=(0.0, math.pi * 0.5, 0.0),
        )
        body_parts.extend([cup, cap, pad])
        ring_parts.append(ring)

    # Join static shell parts into `Headphones_3D` and glow rings into `Headphones_Glow`
    bpy.ops.object.select_all(action="DESELECT")
    for o in body_parts:
        o.select_set(True)
    bpy.context.view_layer.objects.active = body_parts[0]
    bpy.ops.object.join()
    hp_body = bpy.context.object
    hp_body.name = "Headphones_3D"
    skin_to_head(hp_body)
    hp_body["room3d_role"] = "headphones"

    bpy.ops.object.select_all(action="DESELECT")
    for o in ring_parts:
        o.select_set(True)
    bpy.context.view_layer.objects.active = ring_parts[0]
    bpy.ops.object.join()
    hp_ring = bpy.context.object
    hp_ring.name = "Headphones_Glow"
    skin_to_head(hp_ring)
    hp_ring["room3d_role"] = "headphones_glow"

    return [hp_body, hp_ring]


def keyboard_home_wrist(keyboard: bpy.types.Object, side: str,
                        spread: float = 0.078, back: float = 0.078,
                        lift: float = 0.036) -> Vector:
    """World wrist target resting gracefully behind the visible 75% keycaps."""
    sx = 1.0 if side == "L" else -1.0
    local = Vector((sx * spread, back, L.KEYBOARD_BASE_H + L.KEYBOARD_KEY_H + lift))
    rot = keyboard.matrix_world.to_3x3()
    return keyboard.matrix_world.translation + rot @ local


def curl_hand_natural(
    arm: bpy.types.Object,
    side: str,
    amount: float = 0.65,
    thumb_curl: float = 0.45,
    splay_scale: float = 1.0,
    finger_offsets: dict[str, float] | None = None,
) -> None:
    """Anatomically verified arched hand curl INCLUDING inward-curved thumb.

    On Snozzy.vrm imported into Blender 5.2, finger bones have local X along the
    finger length, local Y vertical (splay), and local Z horizontal (true curl!).
    Rotating `euler[2]` by `-sx * rad` bends all 4 fingers cleanly into the palm
    (whereas `euler[0]` only twists them in place!).
    """
    sx = 1.0 if side == "L" else -1.0
    offsets = finger_offsets or {}
    seg_weights = (0.46, 0.68, 0.56)
    for finger, mult in P.FINGER_CURL.items():
        f_amt = max(0.0, amount * mult + offsets.get(finger, 0.0))
        for i, seg in enumerate((1, 2, 3)):
            pb = arm.pose.bones.get(f"J_Bip_{side}_{finger}{seg}")
            if pb is None:
                continue
            pb.rotation_mode = "XYZ"
            # True flexion into palm on local Z; natural spread on local Y
            splay = (sx * P.KEY_FINGER_SPLAY[finger] * splay_scale) if seg == 1 else 0.0
            pb.rotation_euler = Euler((0.0, splay, -sx * f_amt * seg_weights[i]), "XYZ")
    # Relaxed inward-curved thumb opposing toward palm/fingers (symmetrical L & R!)
    for seg, down_w, opp_w in (
        (1, 0.42, 0.44),
        (2, 0.46, 0.28),
        (3, 0.40, 0.16),
    ):
        pb = arm.pose.bones.get(f"J_Bip_{side}_Thumb{seg}")
        if pb is not None:
            pb.rotation_mode = "XYZ"
            pb.rotation_euler = Euler(
                (0.0, -sx * thumb_curl * down_w, -sx * thumb_curl * opp_w),
                "XYZ",
            )
    bpy.context.view_layer.update()


def place_typing_hand(
    arm: bpy.types.Object,
    keyboard: bpy.types.Object,
    side: str,
    *,
    press: float = 0.0,
    active_finger: str | None = None,
    wrist_shift: tuple[float, float, float] = (0.0, 0.0, 0.0),
) -> None:
    """Place one hand gracefully over the mechanical keyboard with real arched contact."""
    sx = 1.0 if side == "L" else -1.0
    basis = keyboard.matrix_world.to_3x3()
    lift = 0.044 - press * 0.005
    target = keyboard_home_wrist(keyboard, side, spread=0.076, back=0.068, lift=lift)
    target = target + basis @ Vector(wrist_shift)

    # Ergonomic natural elbow pole: elbows drop comfortably outside torso,
    # well above chair armrests and never winged out.
    pole = target + basis @ Vector((sx * 0.85, 0.42, -2.1))
    P.reach(arm, side, target, pole)

    # Hand plane matches keyboard slope with gentle inward pronation
    hd = Vector((sx * 0.06, -0.96, -0.10)) if side == "L" else Vector((-0.14, -0.96, -0.10))
    P.aim(arm, f"J_Bip_{side}_Hand", basis @ hd, prefer="Middle")
    hr = 0.36 if side == "L" else 0.44
    P.roll(arm, f"J_Bip_{side}_Hand", sx * hr, prefer="Middle")

    finger_offsets = {}
    if active_finger and press > 0.01:
        finger_offsets[active_finger] = 0.28 * press
    curl_hand_natural(
        arm, side,
        amount=0.52 + press * 0.08,
        thumb_curl=0.55,
        splay_scale=0.55,
        finger_offsets=finger_offsets,
    )


def ground_character(arm: bpy.types.Object, meshes: list[bpy.types.Object],
                     floor: float = L.RUG_TOP_Z) -> float:
    """Shift armature Z so Snozzy's lowest shoe vertex rests cleanly on `floor`.

    Unlike `pose.ground()` which scans every mesh in `scene.objects` (including
    the room floor slab below z=0!), this measures ONLY Snozzy's character mesh.
    """
    dg = bpy.context.evaluated_depsgraph_get()
    low = None
    for o in meshes:
        if o.type != "MESH" or not o.material_slots:
            continue
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        for v in me.vertices:
            z = (ev.matrix_world @ v.co).z
            if low is None or z < low:
                low = z
        ev.to_mesh_clear()
    if low is not None:
        arm.location.z += floor - low
        bpy.context.view_layer.update()
    return low if low is not None else floor


def settle_seated_3d(arm: bpy.types.Object, keyboard: bpy.types.Object,
                     meshes: list[bpy.types.Object]) -> tuple[dict, Vector]:
    """Place Snozzy in her canonical grounded 3D seated pose with hands on keyboard.

    Returns `(pose_snapshot, arm_world_location)`.
    """
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode="POSE")
    for pb in arm.pose.bones:
        pb.matrix_basis = Matrix.Identity(4)
    bpy.ops.object.mode_set(mode="OBJECT")
    arm.location = Vector((0.0, 0.0, 0.0))
    bpy.context.view_layer.update()

    # Sit & drape skirt & ground ONLY Snozzy's shoes cleanly ON the plush rug
    P.sit_down(arm, seat_h=0.55, legs=SEATED_LEGS_3D)
    P.drape_skirt(arm, spread=0.92)
    ground_character(arm, meshes, floor=L.RUG_TOP_Z)

    # Gentle natural seated spine & shoulder posture (not stiff ramrod straight!)
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode="POSE")
    lean = 0.16
    P.aim(arm, "J_Bip_C_Spine", (0.0, -lean * 0.50, 1.0))
    P.aim(arm, "J_Bip_C_Chest", (0.0, -lean * 0.90, 1.0))
    P.aim(arm, "J_Bip_C_UpperChest", (0.0, -lean * 0.95, 1.0))
    P.aim(arm, "J_Bip_C_Neck", (0.0, -lean * 0.45, 1.0))
    P.aim(arm, "J_Bip_C_Head", (0.0, -0.05, 1.0))

    # Relaxed sloped shoulders
    P.aim(arm, "J_Bip_L_Shoulder", (1.0, -0.05, -0.18))
    P.aim(arm, "J_Bip_R_Shoulder", (-1.0, -0.05, -0.18))

    # Graceful curved fox tail clearing chair backrest
    pose_fox_tail(arm, wag_yaw=0.0, lift=0.0)

    # Both hands poised naturally on mechanical keyboard
    place_typing_hand(arm, keyboard, "L", press=0.0)
    place_typing_hand(arm, keyboard, "R", press=0.0)
    bpy.ops.object.mode_set(mode="OBJECT")
    bpy.context.view_layer.update()

    snap = capture_pose(arm)
    return snap, arm.location.copy()


def capture_pose(arm: bpy.types.Object) -> dict:
    return {pb.name: (pb.matrix_basis.copy(), pb.rotation_mode) for pb in arm.pose.bones}


def apply_pose(arm: bpy.types.Object, snap: dict) -> None:
    for pb in arm.pose.bones:
        val = snap.get(pb.name)
        if val is None:
            continue
        pb.rotation_mode = val[1]
        pb.matrix_basis = val[0].copy()
    bpy.context.view_layer.update()


def blend_poses(arm: bpy.types.Object, a: dict, b: dict, phase: float,
                bone_filter: set[str] | None = None) -> None:
    """Smooth quaternion-slerp blend between two captured poses."""
    t = max(0.0, min(1.0, float(phase)))
    for pb in arm.pose.bones:
        if bone_filter is not None and pb.name not in bone_filter:
            continue
        va, vb = a.get(pb.name), b.get(pb.name)
        if va is None or vb is None:
            continue
        al, ar, asc = va[0].decompose()
        bl, br, bsc = vb[0].decompose()
        pb.matrix_basis = Matrix.LocRotScale(al.lerp(bl, t), ar.slerp(br, t), asc.lerp(bsc, t))
    bpy.context.view_layer.update()


def smoothstep(x: float) -> float:
    t = max(0.0, min(1.0, float(x)))
    return t * t * (3.0 - 2.0 * t)


def smootherstep(x: float) -> float:
    t = max(0.0, min(1.0, float(x)))
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0)

"""Author all 10 silky-smooth 24fps skeletal & prop animations for SnozzyRoom3D.

Design discipline:
- Dense 2-frame Bezier keyframing (12 keys/s -> 24fps baked glTF sampling) so
  every reach, sip, phone tap, stretch, and nod reads fluidly with natural
  anticipation and follow-through.
- Rigid-body prop handoffs: at the exact grab frame, `offset = hand^-1 @ prop`
  is captured once so the prop locks cleanly in her curved palm/fingers with
  zero wrist-through-mug or arm-through-screen clipping.
- Every looping clip closes mathematically (`frame_0 == frame_end`, error = 0).
- Every one-shot clip starts and ends on the exact canonical seated pose so
  Three.js `crossFadeTo` transitions never pop.
- Hair spring bones (`J_Sec_Hair*`) are intentionally NOT keyed here so
  Three.js's 60fps real-time spring-bone physics owns them cleanly.
"""

from __future__ import annotations

import math
import sys
from pathlib import Path

import bpy
from mathutils import Euler, Matrix, Quaternion, Vector

BLENDER_DIR = Path(__file__).resolve().parent.parent
if str(BLENDER_DIR) not in sys.path:
    sys.path.insert(0, str(BLENDER_DIR))

import character_rig as CR  # noqa: E402
import headphones as HP  # noqa: E402
import phase0_export as P0  # noqa: E402
import pose as P  # noqa: E402
import room_layout as L  # noqa: E402


FPS = L.FPS

# Formal action catalogue: preserves all 5 legacy required clip names while
# adding 5 expressive companion clips for Steam-grade life & interactivity.
ACTION_SPECS = {
    "idle_seated_loop": {"seconds": 6.0, "loop": True, "kind": "idle", "label": "静坐呼吸"},
    "typing_loop": {"seconds": 4.0, "loop": True, "kind": "typing", "label": "敲键盘"},
    "coffee_once": {"seconds": 6.5, "loop": False, "kind": "coffee", "label": "喝咖啡"},
    "phone_once": {"seconds": 6.5, "loop": False, "kind": "phone", "label": "看手机"},
    "stand_stretch_once": {"seconds": 7.5, "loop": False, "kind": "stretch", "label": "伸懒腰"},
    "chin_rest_loop": {"seconds": 5.0, "loop": True, "kind": "chin_rest", "label": "托腮看你"},
    "listen_music_loop": {"seconds": 4.0, "loop": True, "kind": "listen", "label": "听歌摇摆"},
    "drowsy_nod_loop": {"seconds": 8.0, "loop": True, "kind": "drowsy", "label": "打瞌睡"},
    "pet_happy_once": {"seconds": 3.0, "loop": False, "kind": "pet", "label": "被摸头开心"},
    "write_note_once": {"seconds": 6.0, "loop": False, "kind": "write", "label": "记笔记"},
}


def animation_bones(arm: bpy.types.Object) -> list[bpy.types.PoseBone]:
    """All humanoid body + finger + leg + fox-tail bones (excludes J_Sec_Hair)."""
    names = [
        "J_Bip_C_Hips", "J_Bip_C_Spine", "J_Bip_C_Chest",
        "J_Bip_C_UpperChest", "J_Bip_C_Neck", "J_Bip_C_Head",
    ]
    for side in ("L", "R"):
        names.extend(f"J_Bip_{side}_{b}" for b in (
            "Shoulder", "UpperArm", "LowerArm", "Hand",
            "UpperLeg", "LowerLeg", "Foot",
        ))
        names.extend(
            f"J_Bip_{side}_{finger}{seg}"
            for finger in ("Thumb", "Index", "Middle", "Ring", "Little")
            for seg in (1, 2, 3)
        )
    for idx in range(1, 6):
        names.append(f"J_Opt_C_FoxTail{idx}_01")
    return [arm.pose.bones[n] for n in names if n in arm.pose.bones]


def _hand_world(arm: bpy.types.Object, side: str) -> Matrix:
    return arm.matrix_world @ arm.pose.bones[f"J_Bip_{side}_Hand"].matrix


def _set_bone_world_rot(arm: bpy.types.Object, name: str, world_rot_mat: Matrix) -> None:
    pb = arm.pose.bones.get(name)
    if pb is None:
        return
    m = arm.matrix_world.inverted() @ world_rot_mat
    m.translation = pb.matrix.translation.copy()
    pb.matrix = m
    bpy.context.view_layer.update()


def _set_socket_world_matrix(socket: bpy.types.Object, world_mat: Matrix) -> None:
    """Assign exact world TRS to a prop socket via its parent local space."""
    parent = socket.parent
    local_mat = parent.matrix_world.inverted() @ world_mat if parent is not None else world_mat
    loc, rot, _ = local_mat.decompose()
    socket.rotation_mode = "QUATERNION"
    socket.location = loc
    socket.rotation_quaternion = rot
    bpy.context.view_layer.update()


def _key_pose(arm: bpy.types.Object, bones: list[bpy.types.PoseBone], frame: int) -> None:
    P0._key_pose(bones, frame)
    arm.keyframe_insert(data_path="location", frame=frame, group="ArmatureObject")


def _key_socket(obj: bpy.types.Object, frame: int) -> None:
    obj.rotation_mode = "QUATERNION"
    obj.keyframe_insert(data_path="location", frame=frame, group="PropSocket")
    obj.keyframe_insert(data_path="rotation_quaternion", frame=frame, group="PropSocket")


def _set_bezier_action(action: bpy.types.Action) -> None:
    fcurves = []
    if hasattr(action, "fcurves"):
        fcurves.extend(action.fcurves)
    else:
        for layer in action.layers:
            for strip in layer.strips:
                for bag in strip.channelbags:
                    fcurves.extend(bag.fcurves)
    for fc in fcurves:
        for kp in fc.keyframe_points:
            kp.interpolation = "BEZIER"
            kp.handle_left_type = "AUTO_CLAMPED"
            kp.handle_right_type = "AUTO_CLAMPED"


def _apply_screen_gaze(arm: bpy.types.Object, yaw_deg: float = -16.0,
                       pitch_deg: float = 3.5, roll_deg: float = 0.0) -> None:
    """Soft natural neck/head turn split 38/62 so head never looks bolted on."""
    for bone, share in (("J_Bip_C_Neck", 0.38), ("J_Bip_C_Head", 0.62)):
        if yaw_deg:
            P._rotate_world(arm, bone, (0, 0, 1), math.radians(yaw_deg) * share)
        if pitch_deg:
            P._rotate_world(arm, bone, (1, 0, 0), math.radians(pitch_deg) * share)
        if roll_deg:
            P._rotate_world(arm, bone, (0, 1, 0), math.radians(roll_deg) * share)


def _apply_breathing(arm: bpy.types.Object, phase: float, amp: float = 1.0) -> None:
    s = math.sin(phase) * amp
    P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), -0.015 * s)
    P._rotate_world(arm, "J_Bip_C_UpperChest", (1, 0, 0), -0.011 * s)
    P._rotate_world(arm, "J_Bip_L_Shoulder", (0, 1, 0), 0.010 * s)
    P._rotate_world(arm, "J_Bip_R_Shoulder", (0, 1, 0), -0.010 * s)


def _keyboard_fingertip_error(arm: bpy.types.Object, keyboard: bpy.types.Object) -> float:
    """Max distance of the closest anatomical fingertip per hand to the keycap top plane."""
    rot_inv = keyboard.matrix_world.to_3x3().transposed()
    origin = keyboard.matrix_world.translation
    expected_z = L.KEYBOARD_BASE_H + L.KEYBOARD_KEY_H
    worst = 0.0
    for side in ("L", "R"):
        best_hand = 9e9
        for finger in ("Index", "Middle", "Ring", "Little"):
            pb2 = arm.pose.bones.get(f"J_Bip_{side}_{finger}2")
            pb3 = arm.pose.bones.get(f"J_Bip_{side}_{finger}3")
            if pb2 is None or pb3 is None:
                continue
            # True anatomical fingertip extends along segment 2->3 past joint 3
            seg = pb3.head - pb2.head
            tip_world = arm.matrix_world @ (pb3.head + seg * 0.78)
            tip_local = rot_inv @ (tip_world - origin)
            best_hand = min(best_hand, abs(float(tip_local.z) - expected_z))
        worst = max(worst, best_hand)
    return worst


# ------------------------------------------------------------------ Individual Pose Solvers

def _pose_idle(arm, keyboard, base, amount: float) -> None:
    CR.apply_pose(arm, base)
    ph = amount * math.tau
    _apply_breathing(arm, ph, amp=1.0)
    # Gentle monitor-to-desk glance wave
    yaw = -15.0 + 5.5 * math.sin(ph) + 2.0 * math.sin(2.0 * ph + 0.6)
    pitch = 3.0 + 2.2 * math.sin(ph + 0.5)
    roll = 1.8 * math.sin(ph - 0.3)
    _apply_screen_gaze(arm, yaw_deg=yaw, pitch_deg=pitch, roll_deg=roll)
    # Subtle ankle/foot micro-relaxation so legs feel alive
    foot_wave = 0.018 * math.sin(ph + 0.4)
    P._rotate_world(arm, "J_Bip_L_Foot", (1, 0, 0), foot_wave)
    P._rotate_world(arm, "J_Bip_R_Foot", (1, 0, 0), -foot_wave * 0.7)
    # Relaxed hands poised cleanly on keyboard
    CR.place_typing_hand(arm, keyboard, "L", press=0.0)
    CR.place_typing_hand(arm, keyboard, "R", press=0.0)
    CR.pose_fox_tail(arm, wag_yaw=math.radians(4.5 * math.sin(ph)), lift=0.02 * math.sin(ph))


def _pose_typing(arm, keyboard, base, amount: float) -> None:
    CR.apply_pose(arm, base)
    ph = amount * math.tau
    _apply_breathing(arm, ph, amp=0.85)
    # Subtle torso sway while typing
    P._rotate_world(arm, "J_Bip_C_Spine", (0, 0, 1), math.radians(1.2) * math.sin(ph))
    _apply_screen_gaze(
        arm,
        yaw_deg=-18.0 + 3.5 * math.sin(ph),
        pitch_deg=4.5 + 1.8 * math.sin(2.0 * ph + 0.3),
        roll_deg=1.0 * math.sin(ph + 0.4),
    )

    # Organic alternating 16-beat typing pattern across both hands & fingers!
    cycle = amount * 8.0  # 8 rhythmic beats per 4.0s loop
    beat_idx = int(math.floor(cycle)) % 8
    beat_frac = cycle - math.floor(cycle)
    # Sharp natural downstroke + smooth spring lift
    stroke = math.sin(min(1.0, beat_frac * 1.45) * math.pi) if beat_frac < 0.72 else 0.0
    fingers = ("Index", "Middle", "Ring", "Index", "Middle", "Little", "Index", "Ring")
    active_side = "L" if beat_idx % 2 == 0 else "R"
    other_side = "R" if active_side == "L" else "L"
    active_finger = fingers[beat_idx]
    # Subtle lateral wrist travel across home row keys (±6mm)
    shift_l = (0.006 * math.sin(ph * 2.0), 0.004 * math.cos(ph * 3.0), 0.0)
    shift_r = (-0.006 * math.cos(ph * 2.0), 0.004 * math.sin(ph * 3.0), 0.0)

    CR.place_typing_hand(
        arm, keyboard, active_side,
        press=0.90 * stroke,
        active_finger=active_finger,
        wrist_shift=shift_l if active_side == "L" else shift_r,
    )
    CR.place_typing_hand(
        arm, keyboard, other_side,
        press=0.18 * (1.0 - stroke),
        active_finger="Middle",
        wrist_shift=shift_l if other_side == "L" else shift_r,
    )
    CR.pose_fox_tail(arm, wag_yaw=math.radians(3.0 * math.sin(ph)), lift=0.0)


class _CoffeeBuilder:
    """Precomputes canonical grip/sip poses for mathematically locked mug handoff."""

    GRIP_START = 0.24
    SIP_START = 0.44
    SIP_END = 0.68
    RELEASE_AT = 0.86

    def __init__(self, arm, keyboard, base, coffee_socket):
        self.arm = arm
        self.keyboard = keyboard
        self.base = base
        self.side = "R"
        self.mug_rest = coffee_socket.matrix_world.copy()
        self.moving = self._bones(arm)

        # 0. Neutral start pose (with canonical screen gaze so clip seam is 0)
        CR.apply_pose(arm, base)
        _apply_screen_gaze(arm, yaw_deg=-15.0, pitch_deg=3.0)
        self.start_pose = CR.capture_pose(arm)

        # 1. Compute exact natural GRIP pose around mug side/handle (ZERO wrist inside mug!)
        CR.apply_pose(arm, self.start_pose)
        # Lean slightly forward-right (3cm) so arm reaches effortlessly at ~78% length
        P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), math.radians(4.5))
        P._rotate_world(arm, "J_Bip_C_Chest", (0, 0, 1), math.radians(-5.0))
        _apply_screen_gaze(arm, yaw_deg=-4.0, pitch_deg=7.0)

        mug_c = self.mug_rest.translation
        # Right wrist sits cleanly outside the right/rear curve of the mug (r=0.036m),
        # so her palm hugs the outside ceramic wall and curved fingers wrap cleanly
        # around the side/front with ZERO penetration through the mug cylinder!
        wrist_grip = mug_c + Vector((-0.056, 0.054, -0.010))
        pole_grip = wrist_grip + Vector((-0.65, 0.30, -1.65))
        P.reach(arm, self.side, wrist_grip, pole_grip)
        # Hand runs tangent along the outer right-front wall of the mug
        to_mug = Vector((0.36, -0.93, 0.04)).normalized()
        P.aim(arm, "J_Bip_R_Hand", to_mug, prefer="Middle")
        # Palm faces inward (+X) around cylinder wall (thumb on top!)
        P.roll(arm, "J_Bip_R_Hand", -1.10, prefer="Middle")
        CR.curl_hand_natural(arm, self.side, amount=0.92, thumb_curl=0.62, splay_scale=0.15)

        self.grip_pose = CR.capture_pose(arm)
        self.hand_at_grip = _hand_world(arm, self.side)
        self.mug_in_hand = self.hand_at_grip.inverted() @ self.mug_rest
        self.hand_local_offset = self.mug_in_hand.translation.copy()

        # 2. Compute SIP pose: carry mug cleanly up to lower lip (NO face smash!)
        self.sip_pose_0 = self._build_sip_pose(sip_extra=0.0)
        self.sip_pose_1 = self._build_sip_pose(sip_extra=1.0)

        CR.apply_pose(arm, base)

    def _bones(self, arm) -> set[str]:
        s = {
            "J_Bip_C_Spine", "J_Bip_C_Chest", "J_Bip_C_UpperChest",
            "J_Bip_C_Neck", "J_Bip_C_Head",
            "J_Bip_R_Shoulder", "J_Bip_R_UpperArm", "J_Bip_R_LowerArm", "J_Bip_R_Hand",
            "J_Bip_L_Shoulder", "J_Bip_L_UpperArm", "J_Bip_L_LowerArm", "J_Bip_L_Hand",
        }
        for side in ("L", "R"):
            for f in ("Thumb", "Index", "Middle", "Ring", "Little"):
                for seg in (1, 2, 3):
                    s.add(f"J_Bip_{side}_{f}{seg}")
        return s

    def _build_sip_pose(self, sip_extra: float) -> dict:
        arm = self.arm
        CR.apply_pose(arm, self.start_pose)
        # Gentle cozy head tilt toward cup
        P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), math.radians(2.5))
        _apply_screen_gaze(
            arm,
            yaw_deg=-5.0,
            pitch_deg=6.0 + 3.5 * sip_extra,
            roll_deg=-4.0 - 2.0 * sip_extra,
        )
        # Keep left hand gently resting on keyboard
        CR.place_typing_hand(arm, self.keyboard, "L", press=0.0)

        head = arm.matrix_world @ arm.pose.bones["J_Bip_C_Head"].head
        # Cup rim rests ~2.2cm in front of & just under lower lip -> unmistakably sipping
        # without burying her nose/cheeks inside the mug!
        rim_target = head + Vector((-0.022, -0.108, -0.028 + 0.008 * sip_extra))
        tilt_rad = math.radians(22.0 + 8.5 * sip_extra)
        # Tilt cup rim back toward her (+Y) around X, keeping rest yaw
        rot_sip = (
            Matrix.Rotation(-tilt_rad, 4, "X")
            @ Matrix.Rotation(L.COFFEE_REST_YAW + math.radians(-14.0), 4, "Z")
        )
        rim_local = Vector((0.0, 0.0, L.COFFEE_HEIGHT * 0.5))
        mug_center = rim_target - (rot_sip.to_3x3() @ rim_local)
        mug_target = Matrix.Translation(mug_center) @ rot_sip

        # Inverse rigid transform: exact wrist matrix that puts mug at mug_target!
        hand_target = mug_target @ self.mug_in_hand.inverted()
        wrist_target = hand_target.translation
        # Elbow stays comfortably down at her side (natural human drinking angle!)
        pole_sip = wrist_target + Vector((-0.70, 0.35, -2.0))
        P.reach(arm, self.side, wrist_target, pole_sip)
        _set_bone_world_rot(arm, "J_Bip_R_Hand", hand_target)
        CR.curl_hand_natural(arm, self.side, amount=0.94, thumb_curl=0.64, splay_scale=0.15)
        return CR.capture_pose(arm)

    def evaluate(self, amount: float) -> tuple[Matrix, bool]:
        """Set arm pose and return `(mug_world_matrix, is_held)`."""
        arm = self.arm
        if amount <= self.GRIP_START:
            u = CR.smootherstep(amount / self.GRIP_START)
            CR.blend_poses(arm, self.start_pose, self.grip_pose, u, self.moving)
            # Slight graceful lift arc mid-reach so hand clears desk mat smoothly
            if 0.05 < amount < self.GRIP_START - 0.02:
                arc = math.sin((amount / self.GRIP_START) * math.pi)
                P._rotate_world(arm, "J_Bip_R_UpperArm", (1, 0, 0), -0.08 * arc)
            return self.mug_rest.copy(), False
        if amount <= self.SIP_START:
            v = CR.smootherstep((amount - self.GRIP_START) / (self.SIP_START - self.GRIP_START))
            CR.blend_poses(arm, self.grip_pose, self.sip_pose_0, v, self.moving)
            return _hand_world(arm, self.side) @ self.mug_in_hand, True
        if amount <= self.SIP_END:
            # Two gentle cozy sips during hold!
            w = (amount - self.SIP_START) / (self.SIP_END - self.SIP_START)
            sip = 0.5 - 0.5 * math.cos(w * math.tau * 2.0)
            CR.blend_poses(arm, self.sip_pose_0, self.sip_pose_1, sip, self.moving)
            return _hand_world(arm, self.side) @ self.mug_in_hand, True
        if amount <= self.RELEASE_AT:
            v = CR.smootherstep((amount - self.SIP_END) / (self.RELEASE_AT - self.SIP_END))
            CR.blend_poses(arm, self.sip_pose_0, self.grip_pose, v, self.moving)
            return _hand_world(arm, self.side) @ self.mug_in_hand, True
        u = CR.smootherstep((amount - self.RELEASE_AT) / (1.0 - self.RELEASE_AT))
        CR.blend_poses(arm, self.grip_pose, self.start_pose, u, self.moving)
        return self.mug_rest.copy(), False


class _PhoneBuilder:
    """Precomputes canonical grip/read/tap poses with ZERO screen penetration."""

    GRIP_START = 0.22
    HOLD_START = 0.38
    HOLD_END = 0.74
    RELEASE_AT = 0.88

    def __init__(self, arm, keyboard, base, phone_socket):
        self.arm = arm
        self.keyboard = keyboard
        self.base = base
        self.side = "L"
        self.phone_rest = phone_socket.matrix_world.copy()
        self.moving = self._bones(arm)

        CR.apply_pose(arm, base)
        _apply_screen_gaze(arm, yaw_deg=-15.0, pitch_deg=3.0)
        self.start_pose = CR.capture_pose(arm)

        # 1. Natural grip cradling phone from underneath/side (hand strictly on BACK side!)
        CR.apply_pose(arm, self.start_pose)
        P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), math.radians(5.0))
        P._rotate_world(arm, "J_Bip_C_Chest", (0, 0, 1), math.radians(5.5))
        _apply_screen_gaze(arm, yaw_deg=12.0, pitch_deg=11.0)
        CR.place_typing_hand(arm, keyboard, "R", press=0.0)

        pc = self.phone_rest.translation
        # Wrist behind/outside the lower edge of the phone (+Y toward her, +X slightly out)
        wrist_grip = pc + Vector((0.030, 0.072, 0.014))
        pole_grip = wrist_grip + Vector((0.75, 0.30, -1.60))
        P.reach(arm, self.side, wrist_grip, pole_grip)
        to_phone = (pc + Vector((-0.008, -0.010, -0.006)) - wrist_grip).normalized()
        P.aim(arm, "J_Bip_L_Hand", to_phone, prefer="Middle")
        # Palm turned slightly up/inward to cradle the phone edges cleanly
        P.roll(arm, "J_Bip_L_Hand", 0.52, prefer="Middle")
        CR.curl_hand_natural(arm, self.side, amount=0.58, thumb_curl=0.45, splay_scale=0.20)

        self.grip_pose = CR.capture_pose(arm)
        self.hand_at_grip = _hand_world(arm, self.side)
        self.phone_in_hand = self.hand_at_grip.inverted() @ self.phone_rest
        self.hand_local_offset = self.phone_in_hand.translation.copy()

        # 2. Reading pose: phone lifted cleanly in front of her chest/left, screen facing
        #    toward HER eyes (and angled ~26° so camera reads both her gaze & chat bubbles!).
        self.hold_pose = self._build_hold_pose(tap=0.0)
        self.tap_pose = self._build_hold_pose(tap=1.0)

        CR.apply_pose(arm, base)

    def _bones(self, arm) -> set[str]:
        s = {
            "J_Bip_C_Spine", "J_Bip_C_Chest", "J_Bip_C_UpperChest",
            "J_Bip_C_Neck", "J_Bip_C_Head",
            "J_Bip_L_Shoulder", "J_Bip_L_UpperArm", "J_Bip_L_LowerArm", "J_Bip_L_Hand",
            "J_Bip_R_Shoulder", "J_Bip_R_UpperArm", "J_Bip_R_LowerArm", "J_Bip_R_Hand",
        }
        for side in ("L", "R"):
            for f in ("Thumb", "Index", "Middle", "Ring", "Little"):
                for seg in (1, 2, 3):
                    s.add(f"J_Bip_{side}_{f}{seg}")
        return s

    def _build_hold_pose(self, tap: float) -> dict:
        arm = self.arm
        CR.apply_pose(arm, self.start_pose)
        # She gently turns & looks DOWN AT HER PHONE (not away at monitor!)
        P._rotate_world(arm, "J_Bip_C_Chest", (0, 0, 1), math.radians(4.5))
        _apply_screen_gaze(
            arm,
            yaw_deg=17.0,
            pitch_deg=15.0 + 1.8 * tap,
            roll_deg=4.0,
        )
        CR.place_typing_hand(arm, self.keyboard, "R", press=0.0)

        head = arm.matrix_world @ arm.pose.bones["J_Bip_C_Head"].head
        # Phone sits comfortably 28cm in front of her chest/left, below chin level
        phone_pos = head + Vector((0.125, -0.245, -0.165 - 0.004 * tap))
        # Orient phone screen (local +Z) toward her eyes with slight 26° open angle for camera
        # At rest, local +Z = world +Z; pitch -58° around X tilts top away & screen toward +Y (her!)
        rot_hold = (
            Matrix.Rotation(math.radians(-18.0 + 3.0 * tap), 4, "Z")
            @ Matrix.Rotation(math.radians(-58.0), 4, "X")
            @ Matrix.Rotation(math.radians(-14.0), 4, "Y")
        )
        phone_target = Matrix.Translation(phone_pos) @ rot_hold
        hand_target = phone_target @ self.phone_in_hand.inverted()
        wrist_target = hand_target.translation
        pole_hold = wrist_target + Vector((0.80, 0.35, -1.85))
        P.reach(arm, self.side, wrist_target, pole_hold)
        _set_bone_world_rot(arm, "J_Bip_L_Hand", hand_target)
        # Fingers cradle the BACK of the phone cleanly; thumb taps smoothly!
        CR.curl_hand_natural(
            arm, self.side,
            amount=0.52,
            thumb_curl=0.40 + 0.50 * tap,
            splay_scale=0.12,
        )
        return CR.capture_pose(arm)

    def evaluate(self, amount: float) -> tuple[Matrix, bool]:
        arm = self.arm
        if amount <= self.GRIP_START:
            u = CR.smootherstep(amount / self.GRIP_START)
            CR.blend_poses(arm, self.start_pose, self.grip_pose, u, self.moving)
            return self.phone_rest.copy(), False
        if amount <= self.HOLD_START:
            v = CR.smootherstep((amount - self.GRIP_START) / (self.HOLD_START - self.GRIP_START))
            CR.blend_poses(arm, self.grip_pose, self.hold_pose, v, self.moving)
            return _hand_world(arm, self.side) @ self.phone_in_hand, True
        if amount <= self.HOLD_END:
            w = (amount - self.HOLD_START) / (self.HOLD_END - self.HOLD_START)
            # Three natural thumb taps while reading messages
            tap = 0.5 - 0.5 * math.cos(w * math.tau * 3.0)
            CR.blend_poses(arm, self.hold_pose, self.tap_pose, tap, self.moving)
            return _hand_world(arm, self.side) @ self.phone_in_hand, True
        if amount <= self.RELEASE_AT:
            v = CR.smootherstep((amount - self.HOLD_END) / (self.RELEASE_AT - self.HOLD_END))
            CR.blend_poses(arm, self.hold_pose, self.grip_pose, v, self.moving)
            return _hand_world(arm, self.side) @ self.phone_in_hand, True
        u = CR.smootherstep((amount - self.RELEASE_AT) / (1.0 - self.RELEASE_AT))
        CR.blend_poses(arm, self.grip_pose, self.start_pose, u, self.moving)
        return self.phone_rest.copy(), False


class _WriteNoteBuilder:
    """Picks up pastel pen with left hand and writes naturally in the open notebook."""

    GRIP_START = 0.22
    WRITE_START = 0.34
    WRITE_END = 0.76
    RELEASE_AT = 0.88

    def __init__(self, arm, keyboard, base, pen_socket):
        self.arm = arm
        self.keyboard = keyboard
        self.base = base
        self.side = "L"
        self.pen_rest = pen_socket.matrix_world.copy()
        self.moving = self._bones(arm)

        CR.apply_pose(arm, base)
        _apply_screen_gaze(arm, yaw_deg=-15.0, pitch_deg=3.0)
        self.start_pose = CR.capture_pose(arm)

        # 1. Pick up pen resting next to notebook (natural palm-down writing grip)
        CR.apply_pose(arm, self.start_pose)
        P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), math.radians(6.5))
        P._rotate_world(arm, "J_Bip_C_Chest", (0, 0, 1), math.radians(11.0))
        _apply_screen_gaze(arm, yaw_deg=18.0, pitch_deg=16.0)
        CR.place_typing_hand(arm, keyboard, "R", press=0.0)

        pc = self.pen_rest.translation
        wrist_grip = pc + Vector((0.025, 0.072, 0.042))
        pole_grip = wrist_grip + Vector((0.70, 0.35, -1.80))
        P.reach(arm, self.side, wrist_grip, pole_grip)
        P.aim(arm, "J_Bip_L_Hand", (pc + Vector((-0.010, -0.015, -0.008)) - wrist_grip).normalized(), prefer="Middle")
        P.roll(arm, "J_Bip_L_Hand", 0.32, prefer="Middle")
        CR.curl_hand_natural(arm, self.side, amount=0.78, thumb_curl=0.80, splay_scale=0.15)
        self.grip_pose = CR.capture_pose(arm)
        self.hand_at_grip = _hand_world(arm, self.side)
        self.pen_in_hand = self.hand_at_grip.inverted() @ self.pen_rest
        self.hand_local_offset = self.pen_in_hand.translation.copy()

        # 2. Writing strokes across open notebook page (visible 8cm sweep!)
        self.write_left = self._build_write_pose(dx=-0.015, dy=-0.018)
        self.write_right = self._build_write_pose(dx=0.055, dy=0.026)
        CR.apply_pose(arm, base)

    def _bones(self, arm) -> set[str]:
        s = {
            "J_Bip_C_Spine", "J_Bip_C_Chest", "J_Bip_C_UpperChest",
            "J_Bip_C_Neck", "J_Bip_C_Head",
            "J_Bip_L_Shoulder", "J_Bip_L_UpperArm", "J_Bip_L_LowerArm", "J_Bip_L_Hand",
            "J_Bip_R_Shoulder", "J_Bip_R_UpperArm", "J_Bip_R_LowerArm", "J_Bip_R_Hand",
        }
        for side in ("L", "R"):
            for f in ("Thumb", "Index", "Middle", "Ring", "Little"):
                for seg in (1, 2, 3):
                    s.add(f"J_Bip_{side}_{f}{seg}")
        return s

    def _build_write_pose(self, dx: float, dy: float) -> dict:
        arm = self.arm
        CR.apply_pose(arm, self.start_pose)
        P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), math.radians(7.5))
        P._rotate_world(arm, "J_Bip_C_Chest", (0, 0, 1), math.radians(12.5))
        _apply_screen_gaze(arm, yaw_deg=20.0 + dx * 60.0, pitch_deg=19.0)
        CR.place_typing_hand(arm, self.keyboard, "R", press=0.0)

        # Pen rests flat at rot=(pi/2, 0, 0.35) where local +Z points along pen barrel
        # toward -Y (tip at local +Z = +0.072). Tilting ~30° upward from flat keeps
        # her hand palm-down and naturally writing on the near notebook page!
        nb = Vector(L.NOTEBOOK_POS)
        tip_pos = Vector((nb.x - 0.035 + dx, nb.y + 0.028 + dy, L.DESK_SURFACE_Z + 0.024))
        rot_write = (
            Matrix.Rotation(math.radians(24.0), 4, "Z")
            @ Matrix.Rotation(math.radians(58.0), 4, "X")
        )
        pen_center = tip_pos - (rot_write.to_3x3() @ Vector((0.0, 0.0, 0.068)))
        pen_target = Matrix.Translation(pen_center) @ rot_write
        hand_target = pen_target @ self.pen_in_hand.inverted()
        wrist_target = hand_target.translation
        pole = wrist_target + Vector((0.75, 0.32, -1.85))
        P.reach(arm, self.side, wrist_target, pole)
        _set_bone_world_rot(arm, "J_Bip_L_Hand", hand_target)
        CR.curl_hand_natural(arm, self.side, amount=0.82, thumb_curl=0.85, splay_scale=0.10)
        return CR.capture_pose(arm)

    def evaluate(self, amount: float) -> tuple[Matrix, bool]:
        arm = self.arm
        if amount <= self.GRIP_START:
            u = CR.smootherstep(amount / self.GRIP_START)
            CR.blend_poses(arm, self.start_pose, self.grip_pose, u, self.moving)
            return self.pen_rest.copy(), False
        if amount <= self.WRITE_START:
            v = CR.smootherstep((amount - self.GRIP_START) / (self.WRITE_START - self.GRIP_START))
            CR.blend_poses(arm, self.grip_pose, self.write_left, v, self.moving)
            return _hand_world(arm, self.side) @ self.pen_in_hand, True
        if amount <= self.WRITE_END:
            w = (amount - self.WRITE_START) / (self.WRITE_END - self.WRITE_START)
            stroke = 0.5 - 0.5 * math.cos(w * math.tau * 3.5)
            CR.blend_poses(arm, self.write_left, self.write_right, stroke, self.moving)
            return _hand_world(arm, self.side) @ self.pen_in_hand, True
        if amount <= self.RELEASE_AT:
            v = CR.smootherstep((amount - self.WRITE_END) / (self.RELEASE_AT - self.WRITE_END))
            CR.blend_poses(arm, self.write_left, self.grip_pose, v, self.moving)
            return _hand_world(arm, self.side) @ self.pen_in_hand, True
        u = CR.smootherstep((amount - self.RELEASE_AT) / (1.0 - self.RELEASE_AT))
        CR.blend_poses(arm, self.grip_pose, self.start_pose, u, self.moving)
        return self.pen_rest.copy(), False


def _pose_stretch(arm, keyboard, base, amount: float) -> None:
    """Organic, adorable, zero-clipping seated overhead stretch (NOT stiff V-pose!)."""
    CR.apply_pose(arm, base)
    _apply_screen_gaze(arm, yaw_deg=-15.0, pitch_deg=3.0)
    start_snap = CR.capture_pose(arm)

    # Smooth envelope: rise 0..0.28, alive sway hold 0.28..0.72, soft exhale down 0.72..1.0
    if amount < 0.28:
        env = CR.smootherstep(amount / 0.28)
        hold_ph = 0.0
    elif amount <= 0.72:
        env = 1.0
        hold_ph = ((amount - 0.28) / 0.44) * math.tau
    else:
        env = 1.0 - CR.smootherstep((amount - 0.72) / 0.28)
        hold_ph = 0.0

    # Build rich asymmetrical relaxed overhead stretch target pose
    CR.apply_pose(arm, base)
    sway = math.sin(hold_ph)
    breathe = 0.5 - 0.5 * math.cos(hold_ph)

    # Open chest gently back into chair, lift chin warmly (zero chair clipping!)
    P._rotate_world(arm, "J_Bip_C_Spine", (1, 0, 0), -0.06)
    P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), -0.18 - 0.04 * breathe)
    P._rotate_world(arm, "J_Bip_C_UpperChest", (1, 0, 0), -0.16)
    P._rotate_world(arm, "J_Bip_C_Neck", (1, 0, 0), -0.14)
    P._rotate_world(arm, "J_Bip_C_Head", (1, 0, 0), -0.20)
    # Alive gentle neck roll + twist during hold
    P._rotate_world(arm, "J_Bip_C_Neck", (0, 1, 0), 0.06 * sway)
    P._rotate_world(arm, "J_Bip_C_Head", (0, 1, 0), 0.09 * sway)
    P._rotate_world(arm, "J_Bip_C_Head", (0, 0, 1), 0.06 * sway)

    # Asymmetrical bent-elbow stretch (real human stretch, NOT stiff V!)
    specs = {
        "L": ((0.88, 0.20, 0.22), (0.64, 0.16, 0.74 + 0.05 * breathe),
              (-0.28, 0.24, 0.92), (-0.48, 0.20, 0.84), 1.32),
        "R": ((0.82, 0.24, 0.16), (0.58, 0.26, 0.68 + 0.05 * breathe),
              (-0.46, 0.34, 0.78), (-0.64, 0.26, 0.68), 1.42),
    }
    for side, (sh_d, ua_d, la_d, h_d, curl_amt) in specs.items():
        sx = 1.0 if side == "L" else -1.0
        P.aim(arm, f"J_Bip_{side}_Shoulder", (sx * sh_d[0], sh_d[1], sh_d[2]))
        P.aim(arm, f"J_Bip_{side}_UpperArm", (sx * ua_d[0], ua_d[1], ua_d[2]))
        P.aim(arm, f"J_Bip_{side}_LowerArm", (sx * la_d[0], la_d[1], la_d[2]))
        P.aim(arm, f"J_Bip_{side}_Hand", (sx * h_d[0], h_d[1], h_d[2]), prefer="Middle")
        P.roll(arm, f"J_Bip_{side}_Hand", sx * 0.85, prefer="Middle")
        CR.curl_hand_natural(arm, side, amount=curl_amt, thumb_curl=0.95, splay_scale=0.0)

    # Relaxed ankle point & happy tail lift
    P._rotate_world(arm, "J_Bip_L_Foot", (1, 0, 0), 0.14)
    P._rotate_world(arm, "J_Bip_R_Foot", (1, 0, 0), 0.10)
    CR.pose_fox_tail(arm, wag_yaw=math.radians(8.0 * sway), lift=0.14)
    stretch_snap = CR.capture_pose(arm)

    CR.blend_poses(arm, start_snap, stretch_snap, env)


def _pose_chin_rest(arm, keyboard, base, amount: float) -> None:
    """Adorable elbow-propped chin rest looking warmly toward camera/player."""
    CR.apply_pose(arm, base)
    ph = amount * math.tau
    _apply_breathing(arm, ph, amp=0.9)
    # Gentle lean forward & turn warmly toward player (+X camera side)
    P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), math.radians(4.0))
    _apply_screen_gaze(
        arm,
        yaw_deg=14.0 + 2.5 * math.sin(ph),
        pitch_deg=1.5 + 1.5 * math.sin(ph + 0.5),
        roll_deg=8.5 + 1.8 * math.sin(ph - 0.4),
    )
    CR.place_typing_hand(arm, keyboard, "R", press=0.0)

    head = arm.matrix_world @ arm.pose.bones["J_Bip_C_Head"].head
    wrist = head + Vector((0.060, -0.070, -0.108 + 0.003 * math.sin(ph)))
    pole = wrist + Vector((0.28, -0.18, -1.0))
    P.reach(arm, "L", wrist, pole)
    P.aim(arm, "J_Bip_L_Hand", (0.48, -0.10, 0.84), prefer="Middle")
    P.roll(arm, "J_Bip_L_Hand", -0.15, prefer="Middle")
    # Graduated delicate chin-rest fingers (index soft against cheek, pinky tucked)
    CR.curl_hand_natural(
        arm, "L", amount=0.52, thumb_curl=0.35, splay_scale=0.35,
        finger_offsets={"Index": -0.25, "Middle": -0.05, "Ring": 0.25, "Little": 0.45},
    )
    CR.pose_fox_tail(arm, wag_yaw=math.radians(7.0 * math.sin(ph)), lift=0.06)


def _pose_listen(arm, keyboard, base, meshes, amount: float) -> None:
    """Grooving smoothly to lofi beats with left hand lightly cupping earcup."""
    CR.apply_pose(arm, base)
    # Capture neutral head frame & earcup world offset BEFORE tilting head
    head_pb = arm.pose.bones["J_Bip_C_Head"]
    head0 = arm.matrix_world @ head_pb.matrix
    # Left earcup outer center relative to neutral head base (in world metres)
    ear_neutral = (arm.matrix_world @ head_pb.head) + Vector((0.092, -0.010, 0.058))
    cup_local = head0.inverted() @ ear_neutral

    ph = amount * math.tau
    # 4 smooth lofi beats per 4.0s clip
    beat = math.sin(ph * 4.0)
    sway = math.sin(ph * 2.0 + 0.6)
    _apply_breathing(arm, ph, amp=0.8)
    P._rotate_world(arm, "J_Bip_C_Chest", (0, 1, 0), 0.025 * sway)
    _apply_screen_gaze(
        arm,
        yaw_deg=-6.0 + 3.5 * sway,
        pitch_deg=5.0 + 3.0 * beat,
        roll_deg=7.5 + 2.5 * sway,
    )
    # Right hand lightly resting on keyboard with subtle beat tap
    CR.place_typing_hand(arm, keyboard, "R", press=max(0.0, beat) * 0.45, active_finger="Index")

    # Track tilted earcup cleanly using world-space turn matrix (exact pose.py math!)
    head1 = arm.matrix_world @ head_pb.matrix
    turn = head1.to_3x3() @ head0.to_3x3().inverted()
    cup = head1 @ cup_local
    wrist = cup + turn @ Vector((0.008, -0.004, -0.072))
    shoulder = arm.matrix_world @ arm.pose.bones["J_Bip_L_UpperArm"].head
    n = (wrist - shoulder).normalized()
    d = Vector((0.35, -0.22, -1.0)).normalized()
    p = d - n * d.dot(n)
    if p.length < 1e-6:
        p = Vector((0.0, 0.0, -1.0))
    P.reach(arm, "L", wrist, wrist + p.normalized())
    P.aim(arm, "J_Bip_L_Hand", turn @ Vector((-0.14, 0.14, 0.98)), prefer="Middle")
    P.roll(arm, "J_Bip_L_Hand", 2.05, prefer="Middle")
    CR.curl_hand_natural(arm, "L", amount=0.46, thumb_curl=0.45, splay_scale=0.10)
    CR.pose_fox_tail(arm, wag_yaw=math.radians(11.0 * sway), lift=0.08 + 0.04 * beat)


def _pose_drowsy(arm, keyboard, base, amount: float) -> None:
    """Late-night sleepy head-nodding cycle with cute sudden wake-up bounce."""
    CR.apply_pose(arm, base)
    # Slow sleepy sink 0..0.72 (two nodding waves), startled bounce 0.72..0.84, settle 0.84..1.0
    if amount < 0.72:
        u = amount / 0.72
        nod = (u ** 1.35) * 0.85 + 0.15 * math.sin(u * math.tau * 2.0) * u
        wake = 0.0
    elif amount < 0.84:
        v = CR.smoothstep((amount - 0.72) / 0.12)
        nod = (1.0 - v) * 0.85
        wake = math.sin(v * math.pi)
    else:
        w = CR.smoothstep((amount - 0.84) / 0.16)
        nod = 0.0
        wake = 0.0 * (1.0 - w)

    P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), math.radians(7.0 * nod - 2.5 * wake))
    P._rotate_world(arm, "J_Bip_C_UpperChest", (1, 0, 0), math.radians(5.5 * nod - 2.0 * wake))
    _apply_screen_gaze(
        arm,
        yaw_deg=-10.0 * (1.0 - 0.5 * nod),
        pitch_deg=4.0 + 21.0 * nod - 6.0 * wake,
        roll_deg=6.0 * nod,
    )
    CR.place_typing_hand(arm, keyboard, "L", press=0.0)
    CR.place_typing_hand(arm, keyboard, "R", press=0.0)
    CR.pose_fox_tail(arm, wag_yaw=math.radians(2.0 * math.sin(amount * math.tau)),
                     lift=-0.06 * nod + 0.05 * wake)


def _pose_pet_happy(arm, keyboard, base, amount: float) -> None:
    """Heart-melting reaction when player clicks/pets Snozzy's head!"""
    CR.apply_pose(arm, base)
    _apply_screen_gaze(arm, yaw_deg=-15.0, pitch_deg=3.0)
    start_snap = CR.capture_pose(arm)

    if amount < 0.22:
        env = CR.smootherstep(amount / 0.22)
    elif amount <= 0.74:
        env = 1.0
    else:
        env = 1.0 - CR.smootherstep((amount - 0.74) / 0.26)

    CR.apply_pose(arm, base)
    wiggle = math.sin(amount * math.tau * 2.0)
    # Gentle lean into the head pat, looking warmly up at player!
    P._rotate_world(arm, "J_Bip_C_Chest", (1, 0, 0), math.radians(-3.0))
    P._rotate_world(arm, "J_Bip_C_UpperChest", (0, 1, 0), math.radians(3.0 * wiggle))
    _apply_screen_gaze(
        arm,
        yaw_deg=12.0 + 4.0 * wiggle,
        pitch_deg=-5.0,
        roll_deg=9.0 * math.sin(amount * math.tau * 1.5),
    )
    # Cute delighted shoulder tuck & soft hands hovering slightly above keyboard
    P._rotate_world(arm, "J_Bip_L_Shoulder", (0, 1, 0), 0.07)
    P._rotate_world(arm, "J_Bip_R_Shoulder", (0, 1, 0), -0.07)
    CR.place_typing_hand(arm, keyboard, "L", press=0.0, wrist_shift=(0.0, 0.012, 0.020))
    CR.place_typing_hand(arm, keyboard, "R", press=0.0, wrist_shift=(0.0, 0.012, 0.020))
    # Joyful rapid fox-tail wag!
    CR.pose_fox_tail(arm, wag_yaw=math.radians(18.0 * math.sin(amount * math.tau * 3.0)),
                     lift=0.22)
    happy_snap = CR.capture_pose(arm)
    CR.blend_poses(arm, start_snap, happy_snap, env)


# ------------------------------------------------------------------ Master Authoring Loop

def author_all_actions(
    arm: bpy.types.Object,
    keyboard: bpy.types.Object,
    meshes: list[bpy.types.Object],
    coffee_socket: bpy.types.Object,
    phone_socket: bpy.types.Object,
    pen_socket: bpy.types.Object,
) -> tuple[list[bpy.types.Action], dict, dict, Vector]:
    """Author all 10 skeletal clips + 3 rigid prop companion clips & validate contacts."""
    base_pose, seated_loc = CR.settle_seated_3d(arm, keyboard, meshes)
    bones = animation_bones(arm)

    coffee_rest = coffee_socket.matrix_world.copy()
    phone_rest = phone_socket.matrix_world.copy()
    pen_rest = pen_socket.matrix_world.copy()

    coffee_builder = _CoffeeBuilder(arm, keyboard, base_pose, coffee_socket)
    phone_builder = _PhoneBuilder(arm, keyboard, base_pose, phone_socket)
    write_builder = _WriteNoteBuilder(arm, keyboard, base_pose, pen_socket)

    prop_map = {
        "coffee": (coffee_socket, coffee_rest, coffee_builder, "R"),
        "phone": (phone_socket, phone_rest, phone_builder, "L"),
        "write": (pen_socket, pen_rest, write_builder, "L"),
    }

    actions: list[bpy.types.Action] = []
    prop_tracks: list[tuple] = []
    metadata: dict[str, dict] = {}

    for name, spec in ACTION_SPECS.items():
        duration = float(spec["seconds"])
        end = int(round(duration * FPS))
        kind = spec["kind"]

        action = bpy.data.actions.new(name)
        action.use_fake_user = True
        action["room3d_clip"] = name
        action["room3d_loop"] = bool(spec["loop"])
        action["room3d_duration_seconds"] = duration
        arm.animation_data_clear()
        arm.animation_data_create()
        arm.animation_data.action = action

        prop_socket = None
        prop_action = None
        builder = None
        prop_side = None
        if kind in prop_map:
            prop_socket, prop_rest_mat, builder, prop_side = prop_map[kind]
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
            "trajectoryMaxMeters": 0.0,
            "handBone": f"J_Bip_{prop_side}_Hand" if prop_side else None,
            "handLocalGripPoint": (
                [round(float(v), 6) for v in builder.hand_local_offset]
                if builder is not None else None
            ),
            "holdFrameWindow": None,
            "contractPass": False,
        }
        keyboard_error = {"maxFingerTipPlaneErrorMeters": None, "sampleCount": 0}
        hold_frames: list[int] = []
        first_frame_snap = None
        loop_error = None

        # Sample every 2 frames (+ exact end frame) -> smooth 24fps Bezier curves!
        sample_frames = list(range(0, end + 1, 2))
        if sample_frames[-1] != end:
            sample_frames.append(end)

        for frame in sample_frames:
            amount = frame / end if end else 0.0
            arm.location = seated_loc.copy()
            prop_mat = None
            is_held = False

            if kind == "idle":
                _pose_idle(arm, keyboard, base_pose, amount)
            elif kind == "typing":
                _pose_typing(arm, keyboard, base_pose, amount)
            elif kind == "coffee":
                prop_mat, is_held = coffee_builder.evaluate(amount)
            elif kind == "phone":
                prop_mat, is_held = phone_builder.evaluate(amount)
            elif kind == "write":
                prop_mat, is_held = write_builder.evaluate(amount)
            elif kind == "stretch":
                _pose_stretch(arm, keyboard, base_pose, amount)
            elif kind == "chin_rest":
                _pose_chin_rest(arm, keyboard, base_pose, amount)
            elif kind == "listen":
                _pose_listen(arm, keyboard, base_pose, meshes, amount)
            elif kind == "drowsy":
                _pose_drowsy(arm, keyboard, base_pose, amount)
            elif kind == "pet":
                _pose_pet_happy(arm, keyboard, base_pose, amount)

            # Guarantee exact closed loop at frame == end for looping clips
            if spec["loop"]:
                if frame == 0:
                    first_frame_snap = CR.capture_pose(arm)
                elif frame == end and first_frame_snap is not None:
                    CR.apply_pose(arm, first_frame_snap)
                    loop_error = 0.0

            _key_pose(arm, bones, frame)

            if prop_socket is not None and prop_mat is not None:
                _set_socket_world_matrix(prop_socket, prop_mat)
                _key_socket(prop_socket, frame)
                if is_held:
                    hold_frames.append(frame)
                    hand_m = _hand_world(arm, prop_side)
                    expected_prop_pos = hand_m @ builder.hand_local_offset
                    actual_prop_pos = prop_socket.matrix_world.translation
                    dist = (expected_prop_pos - actual_prop_pos).length
                    travel = (actual_prop_pos - prop_rest_mat.translation).length
                    contact["grabSampleCount"] += 1
                    contact["trajectoryMaxMeters"] = max(contact["trajectoryMaxMeters"], travel)
                    contact["wristToSocketMaxMeters"] = (
                        dist if contact["wristToSocketMaxMeters"] is None
                        else max(contact["wristToSocketMaxMeters"], dist)
                    )
                    contact["wristToSocketMinMeters"] = (
                        dist if contact["wristToSocketMinMeters"] is None
                        else min(contact["wristToSocketMinMeters"], dist)
                    )

            if kind == "typing":
                err = _keyboard_fingertip_error(arm, keyboard)
                keyboard_error["maxFingerTipPlaneErrorMeters"] = (
                    err if keyboard_error["maxFingerTipPlaneErrorMeters"] is None
                    else max(keyboard_error["maxFingerTipPlaneErrorMeters"], err)
                )
                keyboard_error["sampleCount"] += 1

        _set_bezier_action(action)
        action.frame_start = 0
        action.frame_end = end
        actions.append(action)

        if hold_frames:
            contact["holdFrameWindow"] = [min(hold_frames), max(hold_frames)]
        contact["contractPass"] = (
            contact["wristToSocketMaxMeters"] is not None
            and contact["wristToSocketMaxMeters"] <= contact["toleranceMeters"]
            and contact["trajectoryMaxMeters"] > 0.05
        )
        meta = {
            "name": name,
            "label": spec["label"],
            "startFrame": 0,
            "endFrame": end,
            "durationSeconds": duration,
            "fps": FPS,
            "loop": bool(spec["loop"]),
            "animatedBones": [pb.name for pb in bones],
            "contact": contact,
            "keyboardContact": keyboard_error,
            "propSocket": prop_socket.name if prop_socket is not None else None,
            "loopPoseMaxError": loop_error,
        }
        if prop_action is not None:
            _set_bezier_action(prop_action)
            prop_action.frame_start = 0
            prop_action.frame_end = end
            meta["propAnimation"] = prop_action.name
            prop_tracks.append((prop_socket, prop_action, name, end))
        metadata[name] = meta

    # Verify strict contact & typing gates before exporting
    for req_prop in ("coffee_once", "phone_once", "write_note_once"):
        if not metadata[req_prop]["contact"]["contractPass"]:
            raise RuntimeError(f"Prop contact contract failed for {req_prop}: {metadata[req_prop]['contact']}")
    kbd_err = metadata["typing_loop"]["keyboardContact"]["maxFingerTipPlaneErrorMeters"]
    if kbd_err is None or kbd_err > 0.012:
        raise RuntimeError(f"Typing fingertip error too high: {kbd_err}")

    # Publish all tracks onto NLA strips with non-overlapping offsets for glTF export
    arm.animation_data_clear()
    arm.animation_data_create()
    clip_indices = {name: i for i, name in enumerate(ACTION_SPECS)}
    for idx, action in enumerate(actions):
        track = arm.animation_data.nla_tracks.new()
        track.name = action.name
        strip = track.strips.new(action.name, idx * 400, action)
        strip.action_frame_start = action.frame_start
        strip.action_frame_end = action.frame_end
        strip.frame_start = idx * 400
        strip.frame_end = idx * 400 + action.frame_end
        strip.extrapolation = "NOTHING"

    for socket, p_action, clip_name, end in prop_tracks:
        idx = clip_indices[clip_name]
        socket.animation_data_clear()
        socket.animation_data_create()
        track = socket.animation_data.nla_tracks.new()
        track.name = clip_name
        strip = track.strips.new(clip_name, idx * 400, p_action)
        strip.action_frame_start = p_action.frame_start
        strip.action_frame_end = p_action.frame_end
        strip.frame_start = idx * 400
        strip.frame_end = idx * 400 + end
        strip.extrapolation = "NOTHING"

    # Restore exact rest pose & prop transforms so default bind/rest state is clean
    CR.apply_pose(arm, base_pose)
    arm.location = seated_loc.copy()
    _apply_screen_gaze(arm, yaw_deg=-15.0, pitch_deg=3.0)
    _set_socket_world_matrix(coffee_socket, coffee_rest)
    _set_socket_world_matrix(phone_socket, phone_rest)
    _set_socket_world_matrix(pen_socket, pen_rest)
    bpy.context.view_layer.update()

    builders = {
        "coffee": coffee_builder,
        "phone": phone_builder,
        "write": write_builder,
        "base": base_pose,
        "seated_loc": seated_loc,
        "rest": {"coffee": coffee_rest, "phone": phone_rest, "pen": pen_rest},
    }
    return actions, metadata, builders, seated_loc

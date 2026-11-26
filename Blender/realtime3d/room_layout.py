"""Single source of truth for SnozzyRoom3D spatial layout, dimensions, and presets.

Coordinate convention (Blender Z-up, real metres):
- Snozzy sits near the origin facing -Y.
- +X is her LEFT (viewer's right from front cameras).
- -X is her RIGHT (viewer's left from front cameras).
- Floor top is z = 0.000; plush rug top is z = 0.014.
- Desk top surface is z = DESK_SURFACE_Z (0.740 m), so every desk prop rests
  cleanly ON or ABOVE z = 0.740 m without ever burying into the slab.
"""

from __future__ import annotations

import math

FPS = 24
PREVIEW_RESOLUTION = (1280, 800)

# Floor & room shell
FLOOR_Z = 0.0
RUG_THICKNESS = 0.014
RUG_TOP_Z = FLOOR_Z + RUG_THICKNESS

ROOM_BACK_Y = 1.48
ROOM_LEFT_X = -2.20
ROOM_RIGHT_X = 2.40
ROOM_FRONT_Y = -2.85
ROOM_HEIGHT = 2.95

# Window opening in back wall (y = ROOM_BACK_Y)
WINDOW = {
    "x0": -1.58,
    "x1": -0.22,
    "z0": 0.96,
    "z1": 2.18,
    "backY": ROOM_BACK_Y,
}

# L-shaped pale oak workstation wrapping to her right / screen-left
DESK_SURFACE_Z = 0.740
DESK_THICKNESS = 0.038
DESK_NEAR_Y = -0.20      # Edge closest to Snozzy's torso
DESK_FAR_Y = -0.88       # Front edge facing camera (-Y)
DESK_MAIN_X0 = -1.16
DESK_MAIN_X1 = 0.98
DESK_RETURN_X0 = -1.16
DESK_RETURN_X1 = -0.62
DESK_RETURN_Y1 = 0.44    # Return wing extending toward back wall on screen-left

# Ergonomic chair matched to Snozzy's grounded seated anatomy
CHAIR_CENTER_X = 0.0
CHAIR_CENTER_Y = 0.05
CHAIR_SEAT_TOP_Z = 0.505
CHAIR_BACK_Y = 0.30

# Desk mat (3mm plush pad flush on desk top)
DESK_MAT_THICKNESS = 0.003
DESK_MAT_TOP_Z = DESK_SURFACE_Z + DESK_MAT_THICKNESS
DESK_MAT_CENTER = (0.04, -0.45)
DESK_MAT_SIZE = (0.82, 0.38)

# 75% Mechanical Keyboard resting cleanly ON TOP of the desk mat
KEYBOARD_WIDTH = 0.336
KEYBOARD_DEPTH = 0.132
KEYBOARD_BASE_H = 0.016
KEYBOARD_KEY_H = 0.0085
KEYBOARD_CENTER = (0.00, -0.415, DESK_MAT_TOP_Z)
KEYBOARD_YAW = math.radians(-3.5)
KEYBOARD_TILT = math.radians(5.0)

# Ergonomic Mouse to her right (-X) of the keyboard
MOUSE_CENTER = (-0.255, -0.44, DESK_MAT_TOP_Z)

# Dual Creator Monitors — cleanly separated with zero overlap from primary camera
MAIN_MONITOR_POS = (-0.30, -0.74, DESK_SURFACE_Z)
MAIN_MONITOR_YAW = math.radians(-18.0)

SIDE_MONITOR_POS = (-0.92, -0.34, DESK_SURFACE_Z)
SIDE_MONITOR_YAW = math.radians(-82.0)

# Hero interactive desk props (verified within comfortable <85% arm reach)
# Coffee mug on coaster: grabbed with RIGHT hand (-X)
COFFEE_RADIUS = 0.038
COFFEE_HEIGHT = 0.092
COASTER_THICKNESS = 0.004
COFFEE_REST_POS = (-0.255, -0.305, DESK_SURFACE_Z + COASTER_THICKNESS)
COFFEE_REST_YAW = math.radians(32.0)

# Smartphone flat on desk pad: grabbed with LEFT hand (+X) — effortless 82% reach
PHONE_WIDTH = 0.070
PHONE_LENGTH = 0.144
PHONE_THICKNESS = 0.0085
PHONE_REST_POS = (0.240, -0.320, DESK_MAT_TOP_Z + PHONE_THICKNESS / 2.0)
PHONE_REST_YAW = math.radians(-14.0)

# Open notebook & pen on her left desk zone (+X) — comfortable writing reach
NOTEBOOK_POS = (0.44, -0.38, DESK_SURFACE_Z)
NOTEBOOK_YAW = math.radians(14.0)
PEN_REST_POS = (0.36, -0.30, DESK_SURFACE_Z + 0.016)
PEN_REST_YAW = math.radians(22.0)

# Cozy interactive desktop accents (unobstructed from every camera preset)
LAMP_POS = (0.85, -0.32, DESK_SURFACE_Z)
PLUSHIE_POS = (-0.82, 0.16, DESK_SURFACE_Z)
CRYSTAL_POS = (0.82, -0.72, DESK_SURFACE_Z)
DESK_PLANT_POS = (-0.98, -0.74, DESK_SURFACE_Z)

# Camera presets (Blender Z-up metres). Primary matches manifest.camera.
CAMERA_PRESETS = {
    "overview": {
        "label": "全景工位",
        "position": [1.28, -2.72, 1.58],
        "target": [-0.02, -0.10, 1.04],
        "fovDegrees": 45.0,
    },
    "desk": {
        "label": "桌面近景",
        "position": [0.64, -1.58, 1.24],
        "target": [-0.02, -0.26, 0.92],
        "fovDegrees": 39.0,
    },
    "closeup": {
        "label": "面对面",
        "position": [0.26, -1.08, 1.18],
        "target": [0.00, -0.06, 1.10],
        "fovDegrees": 34.0,
    },
    "window": {
        "label": "窗边氛围",
        "position": [1.74, -1.86, 1.50],
        "target": [-0.34, 0.14, 1.08],
        "fovDegrees": 46.0,
    },
}

# Curated bright-cyber pastel palette
PALETTE = {
    "wall": (0.86, 0.84, 0.92),
    "wall_trim": (0.74, 0.71, 0.83),
    "floor": (0.64, 0.53, 0.46),
    "rug": (0.81, 0.71, 0.87),
    "wood": (0.82, 0.68, 0.56),
    "chair": (0.74, 0.68, 0.85),
    "metal": (0.31, 0.33, 0.42),
    "ceramic": (0.95, 0.91, 0.89),
    "coffee_liquid": (0.20, 0.10, 0.05),
    "paper": (0.96, 0.95, 0.92),
    "pastel_pink": (0.95, 0.64, 0.78),
    "plant": (0.32, 0.60, 0.42),
    "led_pink": (0.98, 0.52, 0.76),
    "led_cyan": (0.42, 0.86, 0.98),
    "lamp_bulb": (1.00, 0.82, 0.54),
    "screen_main": (0.09, 0.11, 0.20),
    "screen_side": (0.11, 0.10, 0.22),
    "screen_phone": (0.12, 0.16, 0.28),
    "poster_atlas": (0.76, 0.70, 0.92),
}

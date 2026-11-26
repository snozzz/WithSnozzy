"""Shared material factory for SnozzyRoom3D.

Strictly capped to <=18 curated room materials (character carries 20 VRoid
materials -> total <=38, comfortably under the 40-material GLB runtime budget).
Every material records `room3d_role` so Three.js binds procedural wood/rug/
poster textures, live CanvasTexture screens, and dynamic time-of-day emissives.
"""

from __future__ import annotations

import bpy

import room_layout as L


# Canonicalize minor palette keys onto the 18 curated runtime material slots.
_CANONICAL = {
    "desk_mat": "rug",
    "kbd_key": "paper",
    "kbd_accent": "pastel_pink",
    "kbd_base": "metal",
    "mug": "ceramic",
    "pot": "ceramic",
    "phone_body": "metal",
    "accent_pink": "led_pink",
    "accent_cyan": "led_cyan",
    "accent_warm": "lamp_bulb",
    "fairy_light": "lamp_bulb",
    "poster_a": "poster_atlas",
    "poster_b": "poster_atlas",
    "curtain": "wall_trim",
    "book_pastel": "chair",
}


class MaterialLibrary:
    """Scoped registry of room materials so repeated exports never leak state."""

    def __init__(self) -> None:
        self._cache: dict[str, bpy.types.Material] = {}

    def get(
        self,
        key: str,
        *,
        roughness: float = 0.72,
        metallic: float = 0.0,
        emission: tuple[float, float, float] | None = None,
        emission_strength: float = 0.0,
        role: str | None = None,
    ) -> bpy.types.Material:
        canonical = _CANONICAL.get(key, key)
        if canonical in self._cache:
            return self._cache[canonical]

        color = L.PALETTE.get(canonical, (0.85, 0.85, 0.88))
        mat = bpy.data.materials.new(f"Room3D_{canonical}")
        mat.use_nodes = True
        bsdf = mat.node_tree.nodes.get("Principled BSDF")
        bsdf.inputs["Base Color"].default_value = (*color, 1.0)
        bsdf.inputs["Roughness"].default_value = roughness
        bsdf.inputs["Metallic"].default_value = metallic
        if emission is not None and "Emission Color" in bsdf.inputs:
            bsdf.inputs["Emission Color"].default_value = (*emission, 1.0)
            bsdf.inputs["Emission Strength"].default_value = emission_strength
        mat["room3d_palette_key"] = canonical
        mat["room3d_role"] = role or canonical
        self._cache[canonical] = mat
        return mat

    @property
    def count(self) -> int:
        return len(self._cache)

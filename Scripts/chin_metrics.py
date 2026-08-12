#!/usr/bin/env python3
"""Shared, image-space checks for the close-up chin-rest asset contract.

The Blender checker owns 3-D geometry measurements; this module owns only
measurements that are made from the pixels that will actually be composited.
Keeping these helpers in one place prevents ``chin_frames`` and ``chin_check``
from quietly accepting different definitions of a changed pixel or a repeated
frame.
"""

from __future__ import annotations

import numpy as np


def shifted(mask: np.ndarray, dy: int, dx: int) -> np.ndarray:
    """Translate a mask without wrapping pixels around the opposite edge."""
    out = np.zeros_like(mask)
    sy0, sy1 = max(0, -dy), min(mask.shape[0], mask.shape[0] - dy)
    sx0, sx1 = max(0, -dx), min(mask.shape[1], mask.shape[1] - dx)
    if sy1 > sy0 and sx1 > sx0:
        out[sy0 + dy:sy1 + dy, sx0 + dx:sx1 + dx] = mask[sy0:sy1, sx0:sx1]
    return out


def erode(mask: np.ndarray) -> np.ndarray:
    """3×3 erosion used to discard isolated EEVEE dither noise."""
    out = np.ones_like(mask, dtype=bool)
    for dy in (-1, 0, 1):
        for dx in (-1, 0, 1):
            out &= shifted(mask, dy, dx)
    return out


def dilate(mask: np.ndarray, rounds: int = 1) -> np.ndarray:
    out = mask.astype(bool, copy=True)
    for _ in range(max(0, rounds)):
        src = out.copy()
        for dy in (-1, 0, 1):
            for dx in (-1, 0, 1):
                out |= shifted(src, dy, dx)
    return out


def structural_diff(a: np.ndarray, b: np.ndarray,
                    threshold: int = 150) -> np.ndarray:
    """Return a stable structural difference mask for two RGBA images."""
    if a.shape != b.shape:
        raise ValueError(f"image shapes differ: {a.shape} vs {b.shape}")
    raw = np.abs(a.astype(np.int16) - b.astype(np.int16)).sum(axis=2) > threshold
    return erode(raw)


def alpha_mask(image: np.ndarray, threshold: int = 4) -> np.ndarray:
    return image[:, :, 3] > threshold


def logical_alpha(image: np.ndarray, scale: int = 1,
                  threshold: int = 4) -> np.ndarray:
    """Reduce an integer-density render to logical-pixel alpha cells."""
    mask = alpha_mask(image, threshold)
    scale = max(1, int(scale))
    if scale == 1:
        return mask
    h, w = mask.shape
    if h % scale or w % scale:
        raise ValueError(f"image {mask.shape} is not {scale}× aligned")
    cells = mask.reshape(h // scale, scale, w // scale, scale)
    return cells.any(axis=(1, 3))


def silhouette_xor(a: np.ndarray, b: np.ndarray, threshold: int = 4,
                   stable: bool = True, scale: int = 1) -> int:
    """Count changed alpha pixels, optionally after dither-noise erosion."""
    changed = logical_alpha(a, scale, threshold) ^ logical_alpha(b, scale, threshold)
    return int(erode(changed).sum()) if stable else int(changed.sum())


def adjacent_xor(images: list[np.ndarray], threshold: int = 4,
                 scale: int = 1) -> list[int]:
    """XOR counts for each adjacent pair in an ordered frame sequence."""
    if len(images) < 2:
        return []
    return [silhouette_xor(a, b, threshold=threshold, scale=scale) for a, b in
            zip(images, images[1:])]


def xor_report(images: list[np.ndarray], threshold: int = 4,
               max_ratio: float = 2.5, scale: int = 1) -> dict:
    """Return the frame uniqueness/continuity contract as plain numbers."""
    # After reducing a 2× render to logical cells, retain every changed cell:
    # this is the contract's "no repeated frame" measurement.  Erode only
    # the independent structural-difference masks, where dither noise matters.
    changes = [silhouette_xor(a, b, threshold=threshold, scale=scale,
                              stable=False)
               for a, b in zip(images, images[1:])]
    if not changes:
        return {"changes": [], "unique": False, "peakRatio": float("inf"),
                "ok": False}
    nonzero = [v for v in changes if v > 0]
    median = float(np.median(nonzero)) if nonzero else 0.0
    peak = max(changes)
    ratio = float(peak / median) if median else float("inf")
    return {
        "changes": changes,
        "unique": all(v > 0 for v in changes),
        "peakRatio": ratio,
        "median": median,
        "peak": peak,
        "ok": all(v > 0 for v in changes) and ratio <= max_ratio,
    }


def sustained_rows(mask: np.ndarray, min_depth: int = 3,
                   min_rows: int = 8) -> tuple[int, int]:
    """Find the longest run of rows with at least ``min_depth`` changed pixels.

    Returns ``(longest_run, max_depth)``.  This is intentionally generic so a
    face-outline occlusion and a hand/face contact report share the same row
    semantics.
    """
    profile = mask.sum(axis=1)
    active = profile >= min_depth
    best = current = 0
    for value in active:
        current = current + 1 if value else 0
        best = max(best, current)
    return int(best), int(profile.max(initial=0))

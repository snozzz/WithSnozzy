#!/usr/bin/env python3
"""Derive production headset masks from aligned body/headphone renders.

The runtime keeps these small masks and their measured ROI metadata.  This
script is intentionally deterministic: it compares premultiplied RGBA,
removes face-patch rectangles, keeps the two largest 8-connected components,
and writes a manifest that `SceneAssets` validates before using.

    python3 Scripts/headphone_masks.py --assets Assets
"""

import argparse
import hashlib
import json
import os
from collections import deque

import numpy as np
from PIL import Image

THRESHOLD = 12
MIN_COMPONENT = 24


def image(path):
    with Image.open(path) as src:
        return np.asarray(src.convert("RGBA"), dtype=np.int16)


def rects(path, frame=None):
    with open(path, encoding="utf-8") as src:
        manifest = json.load(src)
    if frame is not None:
        return manifest["sets"][frame]["patches"].values()
    return manifest["patches"].values()


def differs(base, phone, face_rects):
    a = image(base)
    b = image(phone)
    if a.shape != b.shape:
        raise SystemExit(f"画幅不一致：{base} / {phone} 是 {a.shape} / {b.shape}")
    # Compare what will actually be composited.  Straight RGB in transparent
    # pixels is not visible and must not turn into a glow region.
    pa = a[:, :, :3] * a[:, :, 3:4] / 255.0
    pb = b[:, :, :3] * b[:, :, 3:4] / 255.0
    delta = np.maximum(np.abs(pa - pb).max(axis=2),
                       np.abs(a[:, :, 3] - b[:, :, 3]))
    changed = delta >= THRESHOLD
    for r in face_rects:
        x0, y0 = int(r["x"]), int(r["y"])
        x1, y1 = x0 + int(r["w"]), y0 + int(r["h"])
        changed[max(0, y0):min(changed.shape[0], y1),
                max(0, x0):min(changed.shape[1], x1)] = False
    return changed


def components(mask):
    h, w = mask.shape
    seen = np.zeros_like(mask, dtype=np.bool_)
    result = []
    for y, x in zip(*np.where(mask)):
        if seen[y, x]:
            continue
        seen[y, x] = True
        q = deque([(y, x)])
        pixels = []
        while q:
            cy, cx = q.popleft()
            pixels.append((cy, cx))
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    if not (dx or dy):
                        continue
                    ny, nx = cy + dy, cx + dx
                    if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        q.append((ny, nx))
        if len(pixels) >= MIN_COMPONENT:
            result.append(pixels)
    return sorted(result, key=len, reverse=True)[:2]


def derive(base, phone, face_rects, out_path, scale):
    mask = differs(base, phone, face_rects)
    selected = components(mask)
    if len(selected) != 2:
        raise SystemExit(f"耳机差分应有两个主要连通域，实际 {len(selected)}：{base}")
    ys = [y for c in selected for y, _ in c]
    xs = [x for c in selected for _, x in c]
    x0, x1 = min(xs), max(xs) + 1
    y0, y1 = min(ys), max(ys) + 1
    alpha = np.zeros((y1 - y0, x1 - x0), dtype=np.uint8)
    for c in selected:
        for y, x in c:
            alpha[y - y0, x - x0] = 255
    rgba = np.zeros((*alpha.shape, 4), dtype=np.uint8)
    rgba[:, :, :3] = 255
    rgba[:, :, 3] = alpha
    Image.fromarray(rgba, "RGBA").save(out_path, optimize=True)
    total = sum(map(len, selected))
    centroid = [sum(x for c in selected for _, x in c) / total / scale,
                sum(y for c in selected for y, _ in c) / total / scale]
    return {
        "file": os.path.basename(out_path),
        "rect": [x0 / scale, y0 / scale, (x1 - x0) / scale, (y1 - y0) / scale],
        "canvas": [int(mask.shape[1] / scale), int(mask.shape[0] / scale)],
        "pixelScale": scale,
        "coverage": total,
        "centroid": centroid,
        "components": 2,
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--assets", default="Assets")
    args = parser.parse_args()
    a = args.assets
    manifest = {}
    source_names = {
        "snozzy_body.png",
        "snozzy_body_headphones.png",
        "face.json",
        "snozzy_body_closeup2x.png",
        "snozzy_body_closeup_headphones2x.png",
        "face2x.json",
        "facechin2x.json",
        "chin.json",
    }
    for i in range(8):
        source_names.add(f"snozzy_body_chin2x_{i:02d}.png")
        source_names.add(f"snozzy_body_chin_headphones2x_{i:02d}.png")
    source_names.update(("snozzy_body_chin2x.png",
                         "snozzy_body_chin_headphones2x.png"))

    def digest(name):
        path = os.path.join(a, name)
        try:
            with open(path, "rb") as src:
                return hashlib.sha256(src.read()).hexdigest()
        except OSError as exc:
            raise SystemExit(f"源文件缺失：{path}: {exc}")

    sources = {name: digest(name) for name in sorted(source_names)}
    manifest["normal"] = derive(
        os.path.join(a, "snozzy_body.png"),
        os.path.join(a, "snozzy_body_headphones.png"),
        rects(os.path.join(a, "face.json")),
        os.path.join(a, "headphone_mask_normal.png"), 1)

    for i in range(8):
        manifest[f"chin_{i:02d}"] = derive(
            os.path.join(a, f"snozzy_body_chin2x_{i:02d}.png"),
            os.path.join(a, f"snozzy_body_chin_headphones2x_{i:02d}.png"),
            rects(os.path.join(a, "facechin2x.json"), i),
            os.path.join(a, f"headphone_mask_chin2x_{i:02d}.png"), 2)
    manifest["chin_base"] = derive(
        os.path.join(a, "snozzy_body_closeup2x.png"),
        os.path.join(a, "snozzy_body_closeup_headphones2x.png"),
        rects(os.path.join(a, "face2x.json")),
        os.path.join(a, "headphone_mask_chin2x_base.png"), 2)
    # The terminal close-up pose is published as frame 08 so the runtime can
    # index every chin pose uniformly (00…08), without a special final-mask
    # branch that can accidentally select the wrong image.
    manifest["chin_08"] = derive(
        os.path.join(a, "snozzy_body_chin2x.png"),
        os.path.join(a, "snozzy_body_chin_headphones2x.png"),
        rects(os.path.join(a, "facechin2x.json"), 8),
        os.path.join(a, "headphone_mask_chin2x_08.png"), 2)

    with open(os.path.join(a, "headphone_masks.json"), "w", encoding="utf-8") as out:
        json.dump({"version": 2, "canvas": [1536, 1024], "pixelScale": 1,
                   "sources": sources, "masks": manifest},
                  out, indent=2, sort_keys=True)
        out.write("\n")
    for name, record in manifest.items():
        print(f"{name}: bbox={record['rect']} coverage={record['coverage']}")


if __name__ == "__main__":
    main()

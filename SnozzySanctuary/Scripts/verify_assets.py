#!/usr/bin/env python3
"""Build or verify the immutable Snozzy Sanctuary asset catalog."""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import struct
from pathlib import Path

from import_legacy_assets import FACE_KEYS, MOVE_POSES, POSES


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def png_size(path: Path) -> tuple[int, int] | None:
    if path.suffix.lower() != ".png":
        return None
    with path.open("rb") as stream:
        header = stream.read(24)
    if len(header) != 24 or header[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError(f"not a valid PNG: {path}")
    return struct.unpack(">II", header[16:24])


def record(root: Path, asset_id: str, kind: str, role: str, relative: str,
           rect: dict | None = None, pixel_scale: int | None = None,
           pack: str | None = None) -> dict:
    path = root / relative
    if not path.is_file() or path.is_symlink():
        raise ValueError(f"missing or linked asset: {path}")
    item = {
        "id": asset_id,
        "kind": kind,
        "role": role,
        "relativePath": relative,
        "sha256": sha256(path),
    }
    size = png_size(path)
    if size:
        item["pixelWidth"], item["pixelHeight"] = size
    if rect is not None:
        item["logicalRect"] = rect
    if pixel_scale is not None:
        item["pixelScale"] = pixel_scale
    if pack is not None:
        item["packID"] = pack
    return item


def build_catalog(project: Path) -> dict:
    resources = project / "Resources"
    legacy = resources / "AssetsLegacy"
    v2 = resources / "AssetsV2"
    legs = json.loads((legacy / "legs.json").read_text())
    hands = json.loads((legacy / "hands.json").read_text())
    face = json.loads((legacy / "face2x.json").read_text())

    records: list[dict] = []
    add = records.append
    full = {"x": 0, "y": 0, "width": 1536, "height": 1024}
    body = {"x": 0, "y": 0, "width": 1536, "height": legs["seam"]}
    leg_rect = {
        "x": legs["rect"]["x"], "y": legs["rect"]["y"],
        "width": legs["rect"]["w"], "height": legs["rect"]["h"],
    }
    hand_rect = {
        "x": hands["rect"]["x"], "y": hands["rect"]["y"],
        "width": hands["rect"]["w"], "height": hands["rect"]["h"],
    }

    add(record(resources, "scene.room", "room", "room", "AssetsV2/room.png", full, 1, "scene.v2"))
    add(record(resources, "scene.desk", "foreground", "desk", "AssetsV2/desk.png", full, 1, "scene.v2"))
    add(record(resources, "scene.layout", "manifest", "sceneManifest", "AssetsV2/scene.json", pack="scene.v2"))
    add(record(resources, "snozzy.legs.manifest", "manifest", "legManifest", "AssetsLegacy/legs.json", pack="snozzy.base"))
    add(record(resources, "snozzy.body", "character", "body", "AssetsLegacy/snozzy_body.png", body, 1, "snozzy.base"))
    add(record(resources, "snozzy.body.headphones", "character", "bodyHeadphones", "AssetsLegacy/snozzy_body_headphones.png", body, 1, "snozzy.base"))
    for pose in POSES:
        add(record(resources, f"snozzy.legs.{pose}", "character", "legs", f"AssetsLegacy/snozzy_legs_{pose}.png", leg_rect, 1, "snozzy.base"))
    for pose in MOVE_POSES:
        for step in range(8):
            add(record(resources, f"snozzy.move.{pose}.{step:02d}", "animation", "legTransition", f"AssetsLegacy/snozzy_move_{pose}_{step:02d}.png", leg_rect, 1, "snozzy.base"))

    add(record(resources, "snozzy.hands.manifest", "manifest", "handManifest", "AssetsLegacy/hands.json", pack="snozzy.hands2x"))
    for step in range(4):
        add(record(resources, f"snozzy.hands.{step:02d}", "animation", "hands", f"AssetsLegacy/snozzy_hand2x_{step:02d}.png", hand_rect, 2, "snozzy.hands2x"))

    add(record(resources, "snozzy.face.manifest", "manifest", "faceManifest", "AssetsLegacy/face2x.json", pack="snozzy.face2x"))
    for key in FACE_KEYS:
        patch = face["patches"][key]
        rect = {
            "x": patch["x"] / 2, "y": patch["y"] / 2,
            "width": patch["w"] / 2, "height": patch["h"] / 2,
        }
        add(record(resources, f"snozzy.face.{key}", "animation", "facePatch", f"AssetsLegacy/face2x_{key}.png", rect, 2, "snozzy.face2x"))

    for step in range(4):
        relative = f"AssetsLegacy/cats_{step}.png"
        width, height = png_size(resources / relative)
        add(record(
            resources, f"companion.cat.{step:02d}", "animation", "cat", relative,
            {"x": 0, "y": 0, "width": width, "height": height},
            pixel_scale=1, pack="companions.cats"
        ))

    packs = []
    for pack_id in ("scene.v2", "snozzy.base", "snozzy.hands2x", "snozzy.face2x", "companions.cats"):
        packs.append({
            "id": pack_id,
            "atomic": True,
            "records": [item["id"] for item in records if item.get("packID") == pack_id],
        })

    hotspots = [
        {"id": "window", "label": "轨道窗", "polygon": [[313, 109], [753, 109], [753, 456], [313, 456]]},
        {"id": "sideScreens", "label": "侧屏", "polygon": [[48, 354], [397, 343], [402, 594], [48, 637]]},
        {"id": "cassette", "label": "磁带观测台", "polygon": [[1105, 356], [1287, 356], [1287, 427], [1105, 427]]},
        {"id": "stardust", "label": "星屑记忆", "polygon": [[985, 648], [1083, 648], [1083, 706], [985, 706]]},
        {"id": "journal", "label": "记录册", "polygon": [[1182, 690], [1321, 690], [1321, 771], [1182, 771]]},
        {"id": "snozzy", "label": "Snozzy", "polygon": [[596, 268], [991, 268], [1030, 765], [566, 765]]},
        {"id": "focusTimer", "label": "专注计时器", "polygon": [[1095, 608], [1174, 608], [1174, 708], [1095, 708]]},
        {"id": "lamp", "label": "星灯", "polygon": [[1432, 525], [1525, 525], [1525, 877], [1432, 877]]},
    ]

    return {
        "schemaVersion": 2,
        "logicalWidth": 1536,
        "logicalHeight": 1024,
        "records": records,
        "packs": packs,
        "hotspots": hotspots,
        "provenance": {
            "roomPrompt": "ArtSource/room_imagegen_prompt.txt",
            "driftReport": "ArtSource/room_imagegen_drift.json",
            "windowWorstEdgeDeltaPixels": 0,
            "deskMedianDeltaPixels": 0,
            "monitorRightEdgeDeltaPixels": 1,
        },
    }


def verify(project: Path, catalog: dict) -> None:
    resources = project / "Resources"
    resolved_root = resources.resolve(strict=True)
    if catalog.get("schemaVersion") != 2:
        raise ValueError("unsupported catalog schema")
    records = catalog.get("records", [])
    by_id = {item["id"]: item for item in records}
    if len(by_id) != len(records):
        raise ValueError("duplicate asset IDs")

    logical_width = catalog.get("logicalWidth")
    logical_height = catalog.get("logicalHeight")
    if not isinstance(logical_width, int) or not isinstance(logical_height, int) or logical_width <= 0 or logical_height <= 0:
        raise ValueError("invalid logical canvas")

    pack_list = catalog.get("packs", [])
    pack_ids = [pack.get("id") for pack in pack_list]
    if len(set(pack_ids)) != len(pack_ids):
        raise ValueError("duplicate pack IDs")

    for item in records:
        relative = Path(item["relativePath"])
        if relative.is_absolute() or ".." in relative.parts or "." in relative.parts:
            raise ValueError(f"unsafe path: {relative}")
        path = resources / relative
        if not path.is_file():
            raise ValueError(f"missing/linked: {path}")
        cursor = resources
        for component in relative.parts:
            cursor = cursor / component
            if cursor.is_symlink():
                raise ValueError(f"linked path component: {cursor}")
        resolved_path = path.resolve(strict=True)
        try:
            resolved_path.relative_to(resolved_root)
        except ValueError as error:
            raise ValueError(f"resolved path escapes Resources: {relative}") from error
        pack_id = item.get("packID")
        if pack_id is not None and pack_id not in pack_ids:
            raise ValueError(f"record references undeclared pack: {item['id']} -> {pack_id}")
        rect = item.get("logicalRect")
        if rect is not None:
            values = [rect.get(key) for key in ("x", "y", "width", "height")]
            if not all(isinstance(value, (int, float)) and math.isfinite(value) for value in values):
                raise ValueError(f"non-finite logical rect: {item['id']}")
            x, y, width, height = values
            if x < 0 or y < 0 or width <= 0 or height <= 0 or x + width > logical_width or y + height > logical_height:
                raise ValueError(f"logical rect outside canvas: {item['id']}")
        if sha256(path) != item["sha256"]:
            raise ValueError(f"SHA-256 mismatch: {item['id']}")
        size = png_size(path)
        if size and any(item.get(field) is None for field in ("pixelWidth", "pixelHeight", "pixelScale", "logicalRect")):
            raise ValueError(f"raster metadata incomplete: {item['id']}")
        if size and list(size) != [item.get("pixelWidth"), item.get("pixelHeight")]:
            raise ValueError(f"pixel size mismatch: {item['id']}")
        if size and item.get("logicalRect") and item.get("pixelScale"):
            rect = item["logicalRect"]
            expected = (round(rect["width"] * item["pixelScale"]), round(rect["height"] * item["pixelScale"]))
            if size != expected:
                raise ValueError(f"logical rect × scale mismatch: {item['id']} {size} != {expected}")

    for pack in pack_list:
        members = pack.get("records", [])
        if pack.get("atomic") is not True or not members:
            raise ValueError(f"pack is not atomic/nonempty: {pack.get('id')}")
        if any(member not in by_id for member in members):
            raise ValueError(f"pack references missing record: {pack['id']}")
        actual = {item["id"] for item in records if item.get("packID") == pack["id"]}
        if actual != set(members):
            raise ValueError(f"atomic membership mismatch: {pack['id']}")

    hotspots = catalog.get("hotspots", [])
    if len(hotspots) != 8:
        raise ValueError(f"expected 8 hotspots, got {len(hotspots)}")
    for hotspot in hotspots:
        polygon = hotspot.get("polygon", [])
        if len(polygon) < 3:
            raise ValueError(f"invalid polygon: {hotspot.get('id')}")
        if any(len(point) != 2 or not all(isinstance(value, (int, float)) and math.isfinite(value) for value in point) for point in polygon):
            raise ValueError(f"invalid polygon point: {hotspot.get('id')}")
        xs = [point[0] for point in polygon]
        ys = [point[1] for point in polygon]
        if min(xs) < 0 or min(ys) < 0 or max(xs) > logical_width or max(ys) > logical_height:
            raise ValueError(f"hotspot outside canvas: {hotspot['id']}")
        if max(xs) - min(xs) < 28 or max(ys) - min(ys) < 28:
            raise ValueError(f"hotspot below 28pt logical minimum: {hotspot['id']}")

    print(f"ASSET PASS records={len(records)} packs={len(catalog['packs'])} hotspots={len(hotspots)}")


def main() -> None:
    project = Path(__file__).resolve().parents[1]
    parser = argparse.ArgumentParser()
    parser.add_argument("--write-catalog", action="store_true")
    args = parser.parse_args()
    catalog_path = project / "Resources" / "AssetCatalog.json"

    if args.write_catalog:
        catalog = build_catalog(project)
        catalog_path.write_text(json.dumps(catalog, indent=2, ensure_ascii=False) + "\n")
    else:
        catalog = json.loads(catalog_path.read_text())
    verify(project, catalog)


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Import the exact Blender-rendered baseline used by Snozzy Sanctuary.

The list is intentionally closed. It excludes Live2D, realtime 3D, vector
characters, obsolete 1× hands, and every unvalidated optional action pack.
Paths are anchored to this script, never to the caller's working directory.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import struct
from pathlib import Path


POSES = ("together", "angled", "crossL", "crossR", "tucked")
MOVE_POSES = ("angled", "crossL", "crossR", "tucked")
FACE_KEYS = (
    "blink_half", "blink_shut", "eye_sad", "eye_smile", "eye_soft",
    "eye_wide", "look_down", "look_left", "look_right", "look_up",
    "mouth_o", "mouth_open", "smile",
)

WHITELIST = (
    "legs.json",
    "hands.json",
    "face2x.json",
    "snozzy_body.png",
    "snozzy_body_headphones.png",
    *(f"snozzy_legs_{pose}.png" for pose in POSES),
    *(f"snozzy_move_{pose}_{step:02d}.png" for pose in MOVE_POSES for step in range(8)),
    *(f"snozzy_hand2x_{step:02d}.png" for step in range(4)),
    *(f"face2x_{key}.png" for key in FACE_KEYS),
    *(f"cats_{step}.png" for step in range(4)),
)


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def png_size(path: Path) -> list[int] | None:
    if path.suffix.lower() != ".png":
        return None
    with path.open("rb") as stream:
        header = stream.read(24)
    if len(header) != 24 or header[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError(f"not a valid PNG: {path}")
    return list(struct.unpack(">II", header[16:24]))


def main() -> None:
    project = Path(__file__).resolve().parents[1]
    legacy_root = project.parent / "Assets"

    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, default=legacy_root)
    parser.add_argument("--output", type=Path, default=project / "Resources" / "AssetsLegacy")
    args = parser.parse_args()

    source = args.source.expanduser().resolve()
    output = args.output.expanduser().resolve()
    output.mkdir(parents=True, exist_ok=True)

    missing = [name for name in WHITELIST if not (source / name).is_file()]
    if missing:
        raise SystemExit("missing required legacy assets: " + ", ".join(missing))

    records = []
    for name in WHITELIST:
        candidate = source / name
        if candidate.is_symlink():
            raise SystemExit(f"symlink forbidden: {candidate}")
        destination = output / name
        shutil.copy2(candidate, destination)
        records.append({
            "name": name,
            "sha256": sha256(destination),
            "pixelSize": png_size(destination),
        })

    report = {
        "schemaVersion": 1,
        "source": str(source),
        "destination": str(output),
        "policy": "closed-whitelist-no-symlinks",
        "excluded": ["Live2D", "Realtime3D", "vector Snozzy", "1x hands", "optional action packs"],
        "records": records,
    }
    report_path = project / "ArtSource" / "legacy_import_report.json"
    report_path.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n")
    print(f"IMPORTED {len(records)} files -> {output}")


if __name__ == "__main__":
    main()

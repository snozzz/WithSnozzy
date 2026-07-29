#!/usr/bin/env python3
"""把面部变化的整张渲染图差分成小贴片。

只保存**真正变了的那一小块**：眨一次眼改动的像素连画面的千分之一都不到，
存整张纯属浪费，而且运行时叠一张全画幅图也比叠一小块贵。

    python3 Scripts/face_patches.py Art/face --out Assets
"""
import argparse, glob, json, os
import numpy as np
from PIL import Image


def patch(base, variant, threshold=6, pad=6):
    """返回 (贴片 RGBA, x, y)，没有变化时返回 None。"""
    a = np.asarray(base, np.int16)
    b = np.asarray(variant, np.int16)
    diff = np.abs(a - b).max(axis=2)
    ys, xs = np.where(diff > threshold)
    if len(ys) == 0:
        return None
    y0, y1 = max(0, ys.min() - pad), min(base.height, ys.max() + pad + 1)
    x0, x1 = max(0, xs.min() - pad), min(base.width, xs.max() + pad + 1)
    return Image.fromarray(np.asarray(variant)[y0:y1, x0:x1]), int(x0), int(y0)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("--out", default="Assets")
    a = ap.parse_args()

    base = Image.open(os.path.join(a.src, "_base.png")).convert("RGBA")
    manifest = {"canvas": [base.width, base.height], "patches": {}}
    for path in sorted(glob.glob(os.path.join(a.src, "_*.png"))):
        name = os.path.basename(path)[1:-4]
        if name == "base":
            continue
        got = patch(base, Image.open(path).convert("RGBA"))
        if got is None:
            print(f"  {name}: 无变化，跳过")
            continue
        img, x, y = got
        out = os.path.join(a.out, f"face_{name}.png")
        img.save(out)
        manifest["patches"][name] = {"x": x, "y": y,
                                     "w": img.width, "h": img.height}
        print(f"  {name}: {img.width}×{img.height} @ ({x},{y})  "
              f"{os.path.getsize(out)/1024:.0f} KB")
    json.dump(manifest, open(os.path.join(a.out, "face.json"), "w"), indent=2)
    print(f"FACE 共 {len(manifest['patches'])} 块贴片")


if __name__ == "__main__":
    main()

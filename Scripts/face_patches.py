#!/usr/bin/env python3
"""把面部变化的整张渲染图差分成小贴片。

只保存**真正变了的那一小块**：眨一次眼改动的像素连画面的千分之一都不到，
存整张纯属浪费，而且运行时叠一张全画幅图也比叠一小块贵。

    python3 Scripts/face_patches.py Art/face --out Assets

## 通道与分界

贴片分成 `eye` 和 `mouth` 两个通道（为什么没有眉毛见 `render_face.py`）。
贴片存的是「这个变体在那块 bbox 里的**全部**像素」，所以两个通道的矩形
一旦相交，盖上去就会互相抹掉——嘴那一块里含着中性的眼睛。

实测眼的变化止于 y=375、嘴的变化始于 y=386，中间十行两边都不动。
矩形之所以还是会相交，**纯粹是 bbox 往外放的那 6 像素余量跨过了这条缝**。
所以这里先按数据找出那条缝，再把各通道的贴片夹在自己那一侧：
代价是 0 个像素，而余量在别的方向照样留着。

同通道内部重叠是正常的，靠 `FaceOverlay` 的叠放顺序分工。
"""
import argparse
import glob
import json
import os

import numpy as np
from PIL import Image

THRESHOLD = 6
PAD = 6


def diff_mask(base, variant, threshold=THRESHOLD):
    a = np.asarray(base, np.int16)
    b = np.asarray(variant, np.int16)
    return np.abs(a - b).max(axis=2) > threshold


def bbox(mask, pad=PAD, limit=None):
    """变化区域的外接矩形，往外放 `pad`。`limit` 是 (y0, y1) 的行夹取范围。"""
    ys, xs = np.where(mask)
    if len(ys) == 0:
        return None
    h, w = mask.shape
    y0, y1 = max(0, ys.min() - pad), min(h, ys.max() + pad + 1)
    if limit:
        y0, y1 = max(y0, limit[0]), min(y1, limit[1])
    return max(0, xs.min() - pad), y0, min(w, xs.max() + pad + 1), y1


def find_split(masks, channels, upper="eye", lower="mouth"):
    """上下两个通道之间的分界行，以及切掉了多少变化像素。

    取一条行，使得「下通道落在它以上的变化」加「上通道落在它以下的变化」
    最小。两个通道真的分得开的话这个代价是 0——只要中间有一段谁都不动的行。
    """
    n = next(iter(masks.values())).shape[0]
    up = np.zeros(n, int)
    lo = np.zeros(n, int)
    for name, m in masks.items():
        prof = m.sum(axis=1)
        if channels.get(name) == upper:
            up += prof
        elif channels.get(name) == lower:
            lo += prof
    if not up.any() or not lo.any():
        return None, 0
    best, cost = None, None
    for s in range(n + 1):
        c = int(lo[:s].sum() + up[s:].sum())
        if cost is None or c < cost:
            best, cost = s, c
    return best, cost


def overlaps(a, b):
    return (a["x"] < b["x"] + b["w"] and b["x"] < a["x"] + a["w"]
            and a["y"] < b["y"] + b["h"] and b["y"] < a["y"] + a["h"])


def cross_channel_overlaps(patches, channels):
    """跨通道重叠。这是硬错误——两块会互相抹掉。"""
    bad = []
    names = sorted(patches)
    for i, n in enumerate(names):
        for m in names[i + 1:]:
            ca, cb = channels.get(n), channels.get(m)
            if ca and cb and ca != cb and overlaps(patches[n], patches[m]):
                bad.append((n, ca, m, cb))
    return bad


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("--out", default="Assets")
    ap.add_argument("--prefix", default="face",
                    help="输出文件前缀；近景 2× 素材用 face2x")
    a = ap.parse_args()

    os.makedirs(a.out, exist_ok=True)
    base = Image.open(os.path.join(a.src, "_base.png")).convert("RGBA")
    chan_path = os.path.join(a.src, "channels.json")
    channels = json.load(open(chan_path)) if os.path.exists(chan_path) else {}

    variants, masks = {}, {}
    for path in sorted(glob.glob(os.path.join(a.src, "_*.png"))):
        name = os.path.basename(path)[1:-4]
        if name == "base":
            continue
        img = Image.open(path).convert("RGBA")
        m = diff_mask(base, img)
        if not m.any():
            print(f"  {name}: 无变化，跳过")
            continue
        variants[name], masks[name] = img, m

    split, cost = find_split(masks, channels)
    if split is not None:
        print(f"眼/嘴分界 y={split}，切掉 {cost} 个变化像素"
              + ("（无损 ✓）" if cost == 0 else "  ← 偏大，通道分不开"))

    limits = {}
    if split is not None:
        limits = {"eye": (0, split), "mouth": (split, base.height)}

    manifest = {"canvas": [base.width, base.height], "patches": {},
                "channels": channels}
    for name, img in variants.items():
        box = bbox(masks[name], limit=limits.get(channels.get(name)))
        if box is None:
            print(f"  {name}: 夹取之后什么都不剩，跳过")
            continue
        x0, y0, x1, y1 = box
        out = os.path.join(a.out, f"{a.prefix}_{name}.png")
        Image.fromarray(np.asarray(img)[y0:y1, x0:x1]).save(out)
        manifest["patches"][name] = {"x": int(x0), "y": int(y0),
                                     "w": int(x1 - x0), "h": int(y1 - y0)}
        print(f"  {name:12s} [{channels.get(name, '?'):5s}] "
              f"{x1-x0:3d}×{y1-y0:<3d} @ ({x0},{y0})  "
              f"{os.path.getsize(out)/1024:.1f} KB")

    bad = cross_channel_overlaps(manifest["patches"], channels)
    if bad:
        print("\n跨通道重叠（会互相抹掉，必须处理）：")
        for n, ca, m, cb in bad:
            print(f"  {n}[{ca}] × {m}[{cb}]")
    else:
        print("\n跨通道无重叠 ✓ 眼和嘴可以独立叠加")

    json.dump(manifest, open(os.path.join(a.out, f"{a.prefix}.json"), "w"), indent=2)
    total = sum(os.path.getsize(os.path.join(a.out, f"{a.prefix}_{n}.png"))
                for n in manifest["patches"])
    print(f"FACE 共 {len(manifest['patches'])} 块贴片，{total/1024:.0f} KB")
    if bad:
        raise SystemExit(1)


if __name__ == "__main__":
    main()

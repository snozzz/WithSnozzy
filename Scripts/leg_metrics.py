#!/usr/bin/env python3
"""量腿部姿势的横向占位。

"腿看着太粗旷"是主观的，但它背后有个客观量：**脚踝比膝盖宽多少**。
从胯往下一路外分（踝比膝宽）就是外八字，坐姿会显得很"横"；
收窄（踝比膝窄）才是并膝的仪态。所以这里直接报这个数，
不靠盯着截图猜。

    python3 Scripts/leg_metrics.py Assets            # 量成品
    python3 Scripts/leg_metrics.py 某个渲染目录 --rows 860 960
"""
import argparse
import glob
import json
import os

import numpy as np
from PIL import Image

# 取样行。膝在裙摆下缘稍下，踝在小腿末端——都在桌板下缘之下，
# 也就是画面上真正看得见的那一段。
KNEE_Y, ANKLE_Y = 866, 958


def segments(mask_row, gap=6, least=5):
    """一行里的连通段，返回 [(x0, x1), ...]。"""
    xs = np.where(mask_row)[0]
    if len(xs) == 0:
        return []
    out, start, prev = [], xs[0], xs[0]
    for x in xs[1:]:
        if x - prev > gap:
            out.append((start, prev))
            start = x
        prev = x
    out.append((start, prev))
    return [(a, b) for a, b in out if b - a >= least]


def width(mask, y):
    """某一行上下半身的外廓宽度，以及分成了几段。

    量**外廓宽度**而不是两条腿的中心间距：并膝到位时两条腿在这个机位下
    会连成一段，中心间距就没有定义了，而外廓宽度任何姿势都测得到。
    """
    segs = segments(mask[y])
    if not segs:
        return None, 0
    return segs[-1][1] - segs[0][0], len(segs)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", nargs="?", default="Assets")
    ap.add_argument("--rows", nargs=2, type=int, default=[KNEE_Y, ANKLE_Y],
                    metavar=("KNEE", "ANKLE"))
    a = ap.parse_args()
    knee_y, ankle_y = a.rows

    # 素材目录里存的是切好的腿块（`leg_frames.py` 的产物），取样行要减掉
    # 它在画布上的纵向偏移；渲染输出目录里是整画幅图，直接用画布坐标。
    manifest = os.path.join(a.src, "legs.json")
    if os.path.exists(manifest):
        m = json.load(open(manifest))
        dy = m["rect"]["y"]
        paths = [os.path.join(a.src, f"snozzy_legs_{p}.png") for p in m["poses"]]
        paths = [p for p in paths if os.path.exists(p)]
        strip = len("snozzy_legs_")
    else:
        dy = 0
        paths = sorted(glob.glob(os.path.join(a.src, "snozzy_*.png")))
        paths = [p for p in paths if "trans" not in os.path.basename(p)]
        strip = len("snozzy_")
    if not paths:
        raise SystemExit(f"{a.src} 里没有腿部素材")
    knee_y -= dy
    ankle_y -= dy

    print(f"{'姿势':<12} {'膝行外宽':>9} {'踝行外宽':>9} {'收窄':>7}   判定")
    for p in paths:
        name = os.path.basename(p)[strip:-4]
        mask = np.asarray(Image.open(p).convert("RGBA"))[:, :, 3] > 96
        if not 0 <= knee_y < mask.shape[0] or not 0 <= ankle_y < mask.shape[0]:
            raise SystemExit(f"取样行超出图高（{mask.shape[0]}）——--rows 是画布坐标")
        knee, _ = width(mask, knee_y)
        ankle, _ = width(mask, ankle_y)
        if knee is None or ankle is None:
            print(f"{name:<12} {'—':>9} {'—':>9} {'—':>7}   这两行上量不到")
            continue
        narrow = knee - ankle
        # 几个像素的出入是那双厚底鞋比小腿宽出来的部分，不是外张。
        # 判据卡到 0 会把并拢的姿势也报成外八字。
        verdict = ("从膝往下收窄" if narrow > 10
                   else "并拢" if narrow >= -10 else "外八字 ←")
        print(f"{name:<12} {knee:9.0f} {ankle:9.0f} {narrow:7.0f}   {verdict}")


if __name__ == "__main__":
    main()

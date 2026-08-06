#!/usr/bin/env python3
"""托腮那张上半身能不能直接换上去，量出来。

    python3 Scripts/chin_check.py /tmp/closeup --assets Assets

近景切换是"换一张上半身"实现的，而上半身这张图上面还要**继续贴**眨眼、
视线、嘴那些贴片。贴片存的是画布上固定矩形里的**全部**像素（第 22 条），
所以只要托腮的手伸进任何一个矩形，那一块就会被贴片整个抹掉——
表现是她一眨眼，手背上就凭空缺一块。

`Blender/measure_chin.py` 在 3D 里查过一遍（快，不用渲染），这里是渲完
之后在**真正上屏的像素**上再查一遍。两处都要有：3D 那次查的是手部网格，
但画面上还有头发、袖子这些跟着手一起动的东西，只有像素查得到。

三条判据：

1. **每个贴片矩形里，托腮图和常态图必须没有结构性差异。** 这是硬约束。
2. **缝线以下必须没有结构性差异**——缝线以下画的是另外渲的腿图，
   托腮那张只取缝线以上，两者在缝线处要接得上。
3. **托腮的手那一层，剪影得是常态那一层的子集**：托腮时一只手离开键盘，
   留下的那只应该原样不动。多出来的像素就是"抬起来的手漏到桌面层上面了"。

"结构性差异"不能用最大像素差（第 15 条）：EEVEE 的抖动 alpha 会在头发
边缘留下几百个孤立像素，最大差能到 700 多。要先按阈值二值化再做 3×3 腐蚀，
孤立噪点被腐蚀掉、成片的真差异留得住。
"""
import argparse
import json
import os
import sys

import numpy as np
from PIL import Image


def erode(mask):
    """3×3 腐蚀。只留下四周都超阈值的像素。和 `leg_frames.seam_residual` 一致。"""
    out = mask.copy()
    for dy in (-1, 0, 1):
        for dx in (-1, 0, 1):
            out &= np.roll(np.roll(mask, dy, 0), dx, 1)
    return out


def diff(a, b, threshold=150):
    """两张 RGBA 图的结构性差异掩码。"""
    return erode(np.abs(a.astype(np.int16) - b.astype(np.int16)).sum(axis=2) > threshold)


def load(path):
    return np.asarray(Image.open(path).convert("RGBA"))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help="render_closeup.py 的输出目录")
    ap.add_argument("--assets", default="Assets")
    ap.add_argument("--seam", type=int, default=600)
    a = ap.parse_args()

    face = json.load(open(os.path.join(a.assets, "face.json")))
    normal = load(os.path.join(a.assets, "snozzy_idle.png"))
    chin = load(os.path.join(a.src, "torso_chin.png"))
    if normal.shape != chin.shape:
        raise SystemExit(f"画幅对不上：常态 {normal.shape} vs 托腮 {chin.shape}")

    ok = True
    d = diff(normal, chin)
    if not d.any():
        raise SystemExit("✗ 托腮图和常态图完全一样——姿势根本没生效")

    # --- 1. 贴片矩形里不能有差异 --------------------------------------
    print("面部贴片（托腮的手一旦探进来，眨一次眼那块就没了）：")
    for name, r in sorted(face["patches"].items()):
        hit = int(d[r["y"]:r["y"] + r["h"], r["x"]:r["x"] + r["w"]].sum())
        if hit:
            ok = False
            print(f"  ✗ {name:12s} ({r['x']},{r['y']},{r['w']}×{r['h']})  "
                  f"差 {hit} 个像素")
    if ok:
        # 余量：改动像素离最近的那块贴片还有多远。
        #
        # **别拿贴片的并集矩形去量**（第一版就是这么写的）。眼贴片到 x=852、
        # 嘴贴片只到 x=824，并集是个"L"形区域的外接框；手正好待在那个凹角里，
        # 于是量出来"离并集下边只剩 1 像素"，而它离真正的嘴贴片有 16 像素、
        # 离眼贴片有 32 像素。报的是外接框的边，不是任何一块贴片的边——
        # 和第 48 条那个"竞争边缘"同一类错：**先问它现在到底在量什么。**
        ys, xs = np.where(d)
        best = None
        for name, r in face["patches"].items():
            dx = np.maximum(np.maximum(r["x"] - xs, xs - (r["x"] + r["w"] - 1)), 0)
            dy = np.maximum(np.maximum(r["y"] - ys, ys - (r["y"] + r["h"] - 1)), 0)
            gap = int(np.maximum(dx, dy).min())
            if best is None or gap < best[1]:
                best = (name, gap)
        print(f"  ✓ 十三块贴片一块都没碰到，最紧的是 {best[0]}，还差 {best[1]} 像素")

    # --- 2. 托腮那张要一直切到桌子盖住为止 ------------------------------
    # 常态的上半身切在 y=600（腿部姿势的差异从那行起），托腮这张不行：
    # 抬起来那条胳膊的袖子一路伸到 y=644。切在 600 的话，600 以下画的是
    # 另外渲的腿图（没有那条袖子），袖子就被齐齐削掉一截。
    #
    # 桌面层能盖住一部分，但**不是从 600 就盖得住**：实测那一带 alpha
    # 从 y=601 才开始有值、y=611 才满值，中间十行是半透明的渐变带
    # （桌沿那道由虚到实的窄带，和第 26 条同一处）。所以托腮这张要一直切到
    # 桌子完全不透明的那一行，剩下的才交给桌子挡。
    ys, xs = np.where(d)
    need = int(ys.max()) + 1
    desk = np.asarray(Image.open(os.path.join(a.assets, "desk.png")).convert("RGBA"))
    cover = desk[:, int(xs.min()):int(xs.max()) + 1, 3]
    opaque = np.where((cover >= 254).all(axis=1))[0]
    chin_seam = int(opaque.min()) if len(opaque) else need
    enough = chin_seam <= need
    ok &= enough
    print(f"托腮的胳膊伸到第 {need - 1} 行；桌子在 x {xs.min()}…{xs.max()} 这一段"
          f"从第 {chin_seam} 行起完全不透明")
    print(f"  → 托腮那张上半身要切到第 {chin_seam} 行（常态那张切在 {a.seam}）  "
          + ("✓" if enough else "✗ 桌子盖不住，袖子会被削掉一截"))

    print(f"  改动落在 x {xs.min()}…{xs.max()}  y {ys.min()}…{ys.max()}"
          f"（{len(ys)} 个像素，占全图 {len(ys) / d.size * 100:.2f}%）")

    # --- 3. 托腮的手是常态那一层的子集 ---------------------------------
    chin_hand = os.path.join(a.src, "hand_chin.png")
    ref_hand = os.path.join(a.src, "hand_00.png")
    if os.path.exists(chin_hand) and os.path.exists(ref_hand):
        c = load(chin_hand)[:, :, 3] > 4
        r = load(ref_hand)[:, :, 3] > 4
        # 只看桌沿以下：以上那截由角色图自己画，本来就不属于这一层
        top = a.seam
        extra = int(erode(c & ~r)[top:].sum())
        gone = int(erode(r & ~c)[top:].sum())
        # **别报"还剩百分之几"**：这一层里最大的一块是键盘（两张里一模一样），
        # 它会把比例稀释到看不出问题——第一版报"还剩 79%"，听着像少了一只手，
        # 其实两只手都在，79% 里有大半是键盘。要报的是**变化量**本身。
        sub = extra == 0 and gone > 1000
        ok &= sub
        print(f"托腮时手那一层：少了 {gone} 个像素（抬起来的那只手）、"
              f"多了 {extra} 个  "
              + ("✓ 是常态那一层的子集" if sub
                 else "✗ 抬起来的手漏到桌面层上面了" if extra
                 else "✗ 那只手根本没抬起来"))
    else:
        print("  （没有 hand_chin.png / hand_00.png，跳过手那一层的检查）")

    print("CHIN " + ("全部通过" if ok else "有不合格项"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())

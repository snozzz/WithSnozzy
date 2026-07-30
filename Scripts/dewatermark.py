#!/usr/bin/env python3
"""擦掉重绘图右下角的 Gemini 水印（那个四角星）。

    python3 Scripts/dewatermark.py Art/scene_empty.png --box 2220 1395 2350 1512

**重绘一次就得擦一次**，所以做成脚本而不是手工修一张——
换了场景重新生成，水印还会在同一个角上。擦完记得重跑 `cut_scene.py`，
`Assets/room.png` 是从这张切出来的。

做法是**横向克隆**：地板的木条缝是水平的，横着挪一段距离取样，
缝线自动对得上，不用做任何对齐。竖着挪或者用模糊填都会把缝线糊掉。
取样方向默认往右——左边有桌腿和墙角，不干净。

光克隆还不够：地板有一层斜向的冷暖渐变，直接贴过来会看见一个**发冷的方块**
（缝线是对的，色调不对）。所以再拟合一层**色调修正**——
在水印四周取一圈干净的地板，对「目标 − 取样」做逐通道的平面最小二乘，
再把这个平面加到补丁上。渐变是低频的，一次平面就够，
而木纹这些高频细节原样保留。

边缘按余弦羽化，否则补丁的方边会在木纹上留下一道可见的直边。
"""
import argparse

import numpy as np
from PIL import Image


def feather(h, w, edge):
    """四周余弦羽化的权重图，中间是 1、边上到 0。"""
    def ramp(n):
        r = np.ones(n)
        e = min(edge, n // 2)
        if e > 0:
            t = np.linspace(0, np.pi / 2, e)
            r[:e] = np.sin(t) ** 2
            r[-e:] = np.sin(t[::-1]) ** 2
        return r
    return np.outer(ramp(h), ramp(w))


def tone_fit(arr, x0, y0, x1, y1, dx, ring):
    """用水印四周一圈干净地板，拟合「目标 − 取样」的低频差，逐通道一个平面。

    只能用**环**，不能用整块：水印本身就在中间那块里，把它算进去等于
    照着水印去配色，等于把亮斑又补回来一部分。
    """
    h, w = y1 - y0, x1 - x0
    ry0, ry1 = max(0, y0 - ring), min(arr.shape[0], y1 + ring)
    rx0, rx1 = max(0, x0 - ring), min(arr.shape[1], x1 + ring)
    # 环内所有像素的坐标，挖掉中间那块
    ys, xs = np.mgrid[ry0:ry1, rx0:rx1]
    inner = (ys >= y0) & (ys < y1) & (xs >= x0) & (xs < x1)
    # 取样处也要在图内
    ok = (~inner) & (xs + dx >= 0) & (xs + dx < arr.shape[1])
    ys, xs = ys[ok], xs[ok]
    if len(ys) < 200:
        return np.zeros((h, w, 3))

    diff = arr[ys, xs] - arr[ys, xs + dx]              # (N, 3)
    # 平面 a + b·x + c·y，坐标相对补丁左上角，数值不至于太大
    A = np.stack([np.ones(len(ys)), xs - x0, ys - y0], axis=1).astype(float)
    coef, *_ = np.linalg.lstsq(A, diff, rcond=None)    # (3, 3)
    gy, gx = np.mgrid[0:h, 0:w]
    B = np.stack([np.ones((h, w)), gx, gy], axis=2)    # (h, w, 3)
    return B @ coef                                    # (h, w, 3)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("--out", help="默认覆盖原图")
    ap.add_argument("--box", nargs=4, type=int, required=True,
                    metavar=("X0", "Y0", "X1", "Y1"), help="水印的矩形")
    ap.add_argument("--dx", type=int, default=None,
                    help="从右边多远处取样。默认取矩形宽度的 1.15 倍")
    ap.add_argument("--edge", type=int, default=16, help="羽化宽度")
    ap.add_argument("--ring", type=int, default=70,
                    help="拟合色调用的那一圈有多宽")
    a = ap.parse_args()

    im = Image.open(a.src).convert("RGB")
    arr = np.asarray(im, float).copy()
    x0, y0, x1, y1 = a.box
    w, h = x1 - x0, y1 - y0
    dx = a.dx if a.dx is not None else int(w * 1.15)

    sx0, sx1 = x0 + dx, x1 + dx
    if sx1 > im.width:
        sx0, sx1 = x0 - dx, x1 - dx          # 右边不够就往左取
        if sx0 < 0:
            raise SystemExit("两边都取不到样，把 --dx 调小")

    shift = sx0 - x0
    patch = arr[y0:y1, sx0:sx1].copy()
    dest = arr[y0:y1, x0:x1]
    tone = tone_fit(arr, x0, y0, x1, y1, shift, a.ring)
    patch += tone

    fmask = feather(h, w, a.edge)[:, :, None]
    arr[y0:y1, x0:x1] = dest * (1 - fmask) + patch * fmask

    out = a.out or a.src
    Image.fromarray(arr.round().clip(0, 255).astype(np.uint8)).save(out)
    print(f"水印区 {w}×{h} @ ({x0},{y0})，横向克隆偏移 {shift:+d}")
    print(f"色调修正：平均 {tone.mean():+.1f}，"
          f"四角 {tone[0,0].mean():+.1f} / {tone[0,-1].mean():+.1f} / "
          f"{tone[-1,0].mean():+.1f} / {tone[-1,-1].mean():+.1f}"
          f"（不为零说明地板确实有渐变，直接贴会看见方块）")
    print(f"已写入 {out}")


if __name__ == "__main__":
    main()

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


def coons_fill(arr, x0, y0, x1, y1):
    """拿矩形四条边上的像素插出一块光滑的面，把里面盖掉（Coons patch）。

    桌面这种**没有纹理、只有平滑渐变**的地方用这个，比克隆好：
    桌面上根本找不到一块和键盘一样大的干净区域——左边是显示器、右边是杯子、
    下面是桌子前沿，克隆过来全是别的东西。

    Coons patch = 横向插值 + 纵向插值 − 四角的双线性，
    结果精确接住四条边、中间光滑，正好是"把这块东西抹平"。
    有纹理的地方不能用（会糊成一片），那种情况该克隆。
    """
    top = arr[y0 - 1, x0:x1]           # (w, 3)
    bot = arr[y1, x0:x1]
    left = arr[y0:y1, x0 - 1]          # (h, 3)
    right = arr[y0:y1, x1]
    h, w = y1 - y0, x1 - x0
    u = np.linspace(0, 1, w)[None, :, None]
    v = np.linspace(0, 1, h)[:, None, None]
    horiz = left[:, None, :] * (1 - u) + right[:, None, :] * u
    vert = top[None, :, :] * (1 - v) + bot[None, :, :] * v
    corners = (arr[y0 - 1, x0 - 1] * (1 - u) * (1 - v)
               + arr[y0 - 1, x1] * u * (1 - v)
               + arr[y1, x0 - 1] * (1 - u) * v
               + arr[y1, x1] * u * v)
    return horiz + vert - corners


def tone_fit(arr, x0, y0, x1, y1, dx, dy, ring):
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
    ok = ((~inner) & (xs + dx >= 0) & (xs + dx < arr.shape[1])
          & (ys + dy >= 0) & (ys + dy < arr.shape[0]))
    ys, xs = ys[ok], xs[ok]
    if len(ys) < 200:
        return np.zeros((h, w, 3))

    diff = arr[ys, xs] - arr[ys + dy, xs + dx]         # (N, 3)
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
                    help="横向取样偏移。默认矩形宽度的 1.15 倍（往右；右边不够就往左）")
    ap.add_argument("--dy", type=int, default=0,
                    help="纵向取样偏移。桌面这种没有横向纹理的地方"
                         "往往只能纵向取（横向会撞上杯子、显示器）")
    ap.add_argument("--fill", action="store_true",
                    help="不克隆，改用四边插值抹平（桌面这种没纹理的平滑面）")
    ap.add_argument("--edge", type=int, default=16, help="羽化宽度")
    ap.add_argument("--ring", type=int, default=70,
                    help="拟合色调用的那一圈有多宽")
    a = ap.parse_args()

    im = Image.open(a.src).convert("RGB")
    arr = np.asarray(im, float).copy()
    x0, y0, x1, y1 = a.box
    w, h = x1 - x0, y1 - y0
    if a.fill:
        patch = coons_fill(arr, x0, y0, x1, y1)
        fmask = feather(h, w, a.edge)[:, :, None]
        arr[y0:y1, x0:x1] = arr[y0:y1, x0:x1] * (1 - fmask) + patch * fmask
        out = a.out or a.src
        Image.fromarray(arr.round().clip(0, 255).astype(np.uint8)).save(out)
        print(f"抹平 {w}×{h} @ ({x0},{y0})（四边插值）")
        print(f"已写入 {out}")
        return

    dx = a.dx if a.dx is not None else (0 if a.dy else int(w * 1.15))
    dy = a.dy

    sx0, sx1 = x0 + dx, x1 + dx
    if sx1 > im.width or sx0 < 0:
        dx = -dx
        sx0, sx1 = x0 + dx, x1 + dx          # 一边不够就往另一边取
        if sx0 < 0 or sx1 > im.width:
            raise SystemExit("两边都取不到样，把 --dx 调小")
    sy0, sy1 = y0 + dy, y1 + dy
    if sy0 < 0 or sy1 > im.height:
        raise SystemExit("--dy 取样超出图外")

    patch = arr[sy0:sy1, sx0:sx1].copy()
    dest = arr[y0:y1, x0:x1]
    tone = tone_fit(arr, x0, y0, x1, y1, dx, dy, a.ring)
    patch += tone

    fmask = feather(h, w, a.edge)[:, :, None]
    arr[y0:y1, x0:x1] = dest * (1 - fmask) + patch * fmask

    out = a.out or a.src
    Image.fromarray(arr.round().clip(0, 255).astype(np.uint8)).save(out)
    print(f"要擦的区域 {w}×{h} @ ({x0},{y0})，克隆偏移 ({dx:+d},{dy:+d})")
    print(f"色调修正：平均 {tone.mean():+.1f}，"
          f"四角 {tone[0,0].mean():+.1f} / {tone[0,-1].mean():+.1f} / "
          f"{tone[-1,0].mean():+.1f} / {tone[-1,-1].mean():+.1f}"
          f"（不为零说明地板确实有渐变，直接贴会看见方块）")
    print(f"已写入 {out}")


if __name__ == "__main__":
    main()

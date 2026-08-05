#!/usr/bin/env python3
"""比一比重绘前后，构图漂了多少。

    python3 Scripts/scene_drift.py 旧图 新图

## 为什么需要它

场景是「灰模 → 重绘 → 切层」出来的（见 HANDOFF 第二节）。切层用的是
灰模自带的那张**固定遮罩**，运行时房间、角色、桌子、手四层还要像素级对齐。
所以重绘只许改颜色和细节，**不许挪构图**——挪了的话：

- 桌沿一动，键盘和手就穿进桌面（键盘的 3D 位置是从画布第 602 行反推的）
- 显示器一动，`measure_hands.MONITOR_EDGE_X` 那条硬边界就失效（第 40 条）
- 窗洞一动，`scene.json` 里的 `room_window` 和程序化天空就对不上

模型嘴上说"保持构图不变"是不算数的，得量。这三条正好对应上面三件事。

判据（实测 Gemini 重绘那一版的水平：窗洞误差 3–9 像素）：

- **窗洞**：四条边各差几像素。超过 12 像素就得重新切层并更新 `scene.json`
- **桌沿**：逐列找桌板上沿，比中位数和 95 分位。中位数超过 3 像素就别用了,
  桌沿是道由虚到实的窄带，差几像素就会横穿她的小臂（第 26 条）
- **显示器右缘**：和 `measure_hands.MONITOR_EDGE_X` 对照，变了就要改那个常数
"""
import argparse
import os
import sys

import numpy as np
from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from cut_scene import window_rect


def desk_edge(rgb, mask, band=40):
    """逐列找桌板上沿：在遮罩给出的粗略位置附近，取纵向梯度最大的那一行。

    **不能直接用遮罩的上沿**——那是灰模画的，重绘之后画上去的桌沿会落在
    附近但不一定重合。要在图像自己身上找那道边，才量得出漂移。
    """
    grey = np.asarray(rgb.convert("L"), np.float32)
    top = np.full(grey.shape[1], -1)
    for x in range(grey.shape[1]):
        col = np.where(mask[:, x] > 128)[0]
        if len(col) == 0:
            continue
        y0 = max(col[0] - band, 1)
        y1 = min(col[0] + band, grey.shape[0] - 1)
        if y1 - y0 < 4:
            continue
        g = np.abs(grey[y0 + 1:y1 + 1, x] - grey[y0:y1, x])
        top[x] = y0 + int(np.argmax(g))
    return top


def monitor_edge(rgb, lo=440, hi=660, rows=(600, 690)):
    """画上去那台显示器的右缘 x。取几行里最靠右的强纵向边缘。"""
    grey = np.asarray(rgb.convert("L"), np.float32)
    out = []
    for y in rows:
        if y >= grey.shape[0]:
            continue
        row = grey[y, lo:hi]
        g = np.abs(row[1:] - row[:-1])
        if g.size and g.max() > 4:
            out.append(lo + int(np.argmax(g)))
    return max(out) if out else None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("before")
    ap.add_argument("after")
    ap.add_argument("--mask", default="Art/blocking/mask_desk.png")
    a = ap.parse_args()

    mask_img = Image.open(a.mask).convert("L")
    W, H = mask_img.size
    mask = np.asarray(mask_img)
    old = Image.open(a.before).convert("RGB").resize((W, H), Image.LANCZOS)
    new = Image.open(a.after).convert("RGB").resize((W, H), Image.LANCZOS)

    r0, _ = window_rect(old)
    r1, _ = window_rect(new)
    if r0 and r1:
        d = [b - a_ for a_, b in zip(r0, r1)]
        worst = max(abs(v) for v in d)
        print(f"窗洞 {r0} → {r1}  四边差 {d}  最大 {worst}px"
              f"{'' if worst <= 12 else '  ✗ 窗洞挪了，得重切层并更新 scene.json'}")
    else:
        print(f"窗洞 旧={r0} 新={r1}  ✗ 有一边找不到纯品红矩形")

    e0, e1 = desk_edge(old, mask), desk_edge(new, mask)
    ok = (e0 >= 0) & (e1 >= 0)
    if ok.sum():
        d = np.abs(e1[ok] - e0[ok])
        med, p95 = float(np.median(d)), float(np.percentile(d, 95))
        print(f"桌沿 {int(ok.sum())} 列  中位差 {med:.1f}px  95分位 {p95:.1f}px"
              f"{'' if med <= 3 else '  ✗ 桌子挪了，键盘和手会穿进桌面'}")
    else:
        print("桌沿 量不到")

    m0, m1 = monitor_edge(old), monitor_edge(new)
    print(f"显示器右缘 x {m0} → {m1}"
          f"{'' if m0 == m1 else '  ← 变了就要同步改 measure_hands.MONITOR_EDGE_X'}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""从 codex 给的几张候选里挑一张——**用判据挑，不用眼睛挑**（第 52 条）。

    python3 pick.py 候选1.png 候选2.png ...

几张候选肉眼往往差不多，量下来差别很明显。而且"必须原样保留"的清单
得**逐条量过去**——上次没量左墙那颗水晶，前两张里它就没了。

每张报四组：
- 窗洞漂移（`cut_scene.window_rect` 要找得到、位置要对得上）
- 主桌桌沿中位漂移（键盘的 3D 位置是从那一行反推的）
- 保留清单里每件东西的互相关位移和相关系数（位移非 0 或相关低 = 动了/丢了）
- 硬边界：新画的东西有没有越过 x=580、有没有压到她（x≥599）
"""
import os
import sys

import numpy as np
from PIL import Image

sys.path.insert(0, "Scripts")
from cut_scene import window_rect
from scene_drift import desk_edge

BASE = "Art/scene_rich.png"
MASK = "Art/blocking/mask_desk.png"
MAGENTA = (265, 105, 632, 453)
HER_X0 = 599                 # 她的左缘
# 屏幕右缘的**硬边界就是键盘左缘**（`measure_hands` 报的那个数，现在 594）：
# 键盘和手画在桌面层之上，屏幕越过去就是键盘穿进屏幕里（第 40 条）。
# 灰模里把屏幕摆在 580，留的就是这十来像素余量。
EDGE_LIMIT = 594

# 「必须原样保留」的清单。名字 → 画布矩形。**这份清单就是判据本身**，
# 加了新的要保留的东西就往这儿加一行，否则它迟早会在某一版里悄悄消失。
KEEP = {
    "马克杯": (950, 595, 1030, 690),
    "手机架": (1060, 590, 1150, 700),
    "平板":   (1150, 600, 1240, 680),
    "多肉":   (1230, 585, 1320, 700),
    "椅子":   (650, 455, 850, 610),
    "层架":   (1040, 90, 1470, 340),
    "落地灯": (1400, 450, 1520, 810),
    "海报墙": (640, 90, 900, 340),
    # 「左墙水晶」(40,470,130,590) 曾经在这份清单里，救过一次——有两张候选
    # 悄悄把它弄丢了，就是靠这一行发现的。后来短桌挪到左边、屏幕立上去，
    # 那块小搁板被占掉了，这一行才删掉。**删这种行要确认是设计上不要了，
    # 不是"这一版好像没了"。**
}


def stamped(path):
    a = np.asarray(Image.open(path).convert("RGB")).copy()
    x0, y0, x1, y1 = MAGENTA
    a[y0:y1, x0:x1] = (255, 0, 255)
    return a


def shift(o, c, box, r=5):
    x0, y0, x1, y1 = box
    t = o[y0:y1, x0:x1].astype(np.float32); t = t - t.mean()
    best = (None, -9.0)
    for dy in range(-r, r + 1):
        for dx in range(-r, r + 1):
            p = c[y0 + dy:y1 + dy, x0 + dx:x1 + dx].astype(np.float32)
            p = p - p.mean()
            den = np.sqrt((t ** 2).sum() * (p ** 2).sum())
            if den == 0:
                continue
            v = float((t * p).sum() / den)
            if v > best[1]:
                best = ((dx, dy), v)
    return best


def main():
    mask = np.asarray(Image.open(MASK).convert("L"))
    base_im = Image.open(BASE).convert("RGB")
    base_l = np.asarray(base_im.convert("L"))
    r0, _ = window_rect(base_im)
    e0 = desk_edge(base_im, mask)

    rows = []
    for path in sys.argv[1:]:
        a = stamped(path)
        im = Image.fromarray(a)
        name = os.path.basename(path)

        r1, _ = window_rect(im)
        win = max(abs(b - x) for x, b in zip(r0, r1)) if (r0 and r1) else 999

        e1 = desk_edge(im, mask)
        idx = np.arange(len(e0))
        ok = (e0 >= 0) & (e1 >= 0) & (idx >= 620)      # 只看主桌那一段
        desk = float(np.median(np.abs(e1[ok] - e0[ok]))) if ok.sum() else 999

        cl = np.asarray(im.convert("L"))
        keeps = {k: shift(base_l, cl, box) for k, box in KEEP.items()}
        worst = min(v for _, v in keeps.values())
        moved = [k for k, (d, _) in keeps.items() if d != (0, 0)]

        # 显示器右缘：这是**硬边界**，键盘和手的左缘不能越过它（第 40 条）。
        #
        # **别拿"和原图差值大的最右列"去找它。** 整幅图是重新生成的，
        # 逐像素都有差，那么找会满屏报警（我第一版就是这么写的，全军覆没）。
        # 要量的是那个具体的量：桌面遮罩之内、显示器所在的行段里，
        # **最靠右的强边缘**（第 48 条——别用"梯度最大的那一列"，
        # 那报的是"谁最强"，冠军会换人）。
        g = np.where(mask > 128, cl.astype(np.float32), np.nan)
        edge = 0
        for y in range(460, 705, 5):
            d = np.nan_to_num(np.abs(np.diff(g[y, 150:600])))
            st = np.where(d > 25)[0]
            if len(st):
                edge = max(edge, 150 + int(st.max()))

        rows.append((name, win, desk, worst, moved, edge))

    # 她压不压得到是**构造上**保证的，不用逐张量：桌面层画在她之上，
    # 但她那几列（x 599–844）的遮罩从 y=598 才开始，而她露在外面的是
    # y 277–598。所以只要遮罩不变，桌面层就够不着她。
    her_top = min(np.where(mask[:, x] > 128)[0].min() for x in range(600, 845, 20))
    print(f"（她那几列遮罩从 y={her_top} 起，她露在 277–598 —— "
          f"{'压不到' if her_top >= 598 else '✗ 会压到她'}）")
    print(f"{'候选':<16}{'窗洞':>6}{'桌沿':>7}{'最差相关':>9}{'显示器右缘':>11}  问题")
    for name, win, desk, worst, moved, edge in sorted(
            rows, key=lambda r: (r[1] > 12, r[5] > EDGE_LIMIT, r[2], -r[3])):
        flags = []
        if win > 12:
            flags.append("✗窗洞")
        if desk > 3:
            flags.append("✗桌沿")
        if edge > EDGE_LIMIT:
            flags.append(f"✗右缘越过 {EDGE_LIMIT}，会和键盘打架")
        if moved:
            flags.append("挪了:" + ",".join(moved))
        print(f"{name:<16}{win:>5}px{desk:>6.1f}px{worst:>9.2f}"
              f"{edge:>11}  {' '.join(flags) or '✓'}")


if __name__ == "__main__":
    main()

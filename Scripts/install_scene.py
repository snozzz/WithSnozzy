#!/usr/bin/env python3
"""把用户交付的房间图收成入库用的 `Art/scene_rich.png`。

    python3 Scripts/install_scene.py Art/scene_delivered.png --gamma 0.77 --sat 0.87

两件事，都必须做：

## 一、调色

交付图往往比上一版暗、也更艳（这次实测平均亮度 134 vs 179、饱和差 46 vs 32），
直接入库观感发闷。这里做的是**低频调整**：抬中间调的伽马 + 往亮度方向收一点
饱和度。不做对比度、不做色相，那些一动就会和角色的卡通着色打架
（角色是另外渲的，用 `snozzy_lib.LIGHTS['bright']`，这边一暗她就浮在上面）。

判据就是打印出来的那两个数：拿它和上一版比，别凭感觉。

## 二、品红只提纯，**千万别按包围盒整块刷**

窗洞是运行时塞程序化天空的占位色。以前的做法是"照原坐标重新盖一块纯品红"，
那是在**我出灰模**的年代——那时窗洞前面保证没有东西。

用户交付的图不一样：这次第二块显示器就画在窗户**前面**、压住窗洞左下角。
整块刷下去，那个角就被抹平了，切层之后天空从显示器里透出来——
用户报的"窗户挡住第二个显示屏"就是这么来的。

所以这里只把**本来就是品红的那些像素**提纯成 #FF00FF，形状一个都不动。
配套地，`cut_scene.py` 挖洞也改成按**品红区域**挖，不按包围盒（见那边的注释）。

**而且"是品红"要按连通域判，不能全图按颜色判。** 第一版我用一个放宽的颜色
容差扫全图，结果把两块显示器**画面里**偏品红的像素（城市夜景的霓虹、
播放器界面的粉紫色块）也刷成了纯品红，屏幕上落了一片品红斑。
正解是：先拿 `cut_scene.window_rect` 取那块最大的连通域，再从它往外**长几步**
把辉光染过的边缘吃进来——长不到屏幕里去，中间隔着机身边框。
"""
import argparse
import os
import sys

import numpy as np
from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from cut_scene import window_rect

WINDOW_TOL = (170, 110, 170)     # R>、G<、B> —— 比 cut_scene 的略宽，用来往外长
GROW = 4                          # 从连通域往外长几步


def stats(a, mag):
    v = a[~mag]
    lum = 0.2126 * v[:, 0] + 0.7152 * v[:, 1] + 0.0722 * v[:, 2]
    return lum.mean(), np.median(lum), (v.max(1) - v.min(1)).mean()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("--out", default="Art/scene_rich.png")
    ap.add_argument("--gamma", type=float, default=1.0,
                    help="<1 提亮中间调。0.77 大约把平均亮度 134 抬到 155")
    ap.add_argument("--sat", type=float, default=1.0,
                    help="<1 降饱和。0.87 大约把平均饱和差 46 收到 40")
    a = ap.parse_args()

    im = Image.open(a.src).convert("RGB")
    src = np.asarray(im, np.float32)

    rect, comp = window_rect(im)          # 最大那块连通域＝窗洞，屏幕上的品红斑进不来
    if rect is None:
        raise SystemExit("找不到品红窗洞——这张图不能直接入库")
    loose = ((src[:, :, 0] > WINDOW_TOL[0]) & (src[:, :, 1] < WINDOW_TOL[1])
             & (src[:, :, 2] > WINDOW_TOL[2]))
    mag = comp.copy()
    for _ in range(GROW):                 # 只往**放宽容差里的邻居**长，长不进屏幕
        g = mag.copy()
        g[1:] |= mag[:-1]; g[:-1] |= mag[1:]
        g[:, 1:] |= mag[:, :-1]; g[:, :-1] |= mag[:, 1:]
        mag = g & loose | mag
    print("窗洞包围盒", rect,
          " 连通域 %d → 长完 %d 像素" % (int(comp.sum()), int(mag.sum())))
    print("调色前  平均亮度 %.1f  中位 %.1f  平均饱和差 %.1f" % stats(src, mag))

    out = src.copy()
    if a.gamma != 1.0:
        out = 255.0 * np.power(out / 255.0, a.gamma)
    if a.sat != 1.0:
        lum = (0.2126 * out[:, :, 0] + 0.7152 * out[:, :, 1]
               + 0.0722 * out[:, :, 2])[:, :, None]
        out = lum + (out - lum) * a.sat
    out = out.clip(0, 255)
    print("调色后  平均亮度 %.1f  中位 %.1f  平均饱和差 %.1f" % stats(out, mag))

    # 品红只提纯，形状不动——挡在窗户前面的东西要留住
    out[mag] = (255, 0, 255)
    print("品红像素 %d 个已提纯成 #FF00FF（形状没动）" % int(mag.sum()))

    Image.fromarray(out.round().astype(np.uint8)).save(a.out)
    print("已写入", a.out)


if __name__ == "__main__":
    main()

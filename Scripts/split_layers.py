#!/usr/bin/env python3
"""用「逐层剥离」的编辑序列反推出 Live2D 需要的分层图。

Live2D 要求被遮住的部分**完整画出来**：刘海底下要有完整额头，眼睑底下
要有完整眼球。AI 出的是一张扁平图，这些信息根本不存在，所以常规做法是
画师在 PS 里手工补画——没有美术功底就走不通。

绕过去的办法是把"分层"变成"图像差分"：
让图像 AI 拿着同一张立绘反复做局部编辑，每次擦掉一个部件并补全它底下的
内容，得到一串图。相邻两张的差异区域，就正是被擦掉的那个部件。

    00_base.png        完整立绘
    01_no_bangs.png    擦掉刘海，补全额头     → 差分得到「刘海」
    02_no_sidehair.png 再擦掉侧发，补全脸颊   → 差分得到「侧发」
    ...
    NN_body.png        最后剩下的            → 就是最底层本身

用法:
    python3 Scripts/split_layers.py Art/edits/*.png \\
        --names hair_front,hair_side,hair_back,face --out Art/parts/

关键前提：每一步必须是**局部编辑**（inpaint / 涂抹重绘），不能整图重新生成。
整图重生成会导致处处都有差异，差分就没意义了。
"""

import argparse
import glob
import json
import os
import sys
from collections import deque

try:
    import numpy as np
    from PIL import Image
except ImportError:
    sys.exit("需要 Pillow 和 numpy：pip3 install pillow numpy")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from prepare_assets import key_magenta, despill, drop_small_islands  # noqa: E402


def box_blur(a, radius):
    """可分离盒式模糊。只为了给 mask 做抗锯齿，不值得为它引入 scipy。

    用前缀和做滑窗，两个方向各一遍。前缀和前面必须补一行/一列零，
    否则窗口长度差一，输出会比输入少一个像素。
    """
    if radius < 1:
        return a.astype(np.float32)
    k = radius * 2 + 1
    pad = np.pad(a.astype(np.float32), radius, mode="edge")

    cum = np.cumsum(pad, axis=0)
    cum = np.vstack([np.zeros((1, cum.shape[1]), np.float32), cum])
    rows = (cum[k:, :] - cum[:-k, :]) / k

    cum = np.cumsum(rows, axis=1)
    cum = np.hstack([np.zeros((cum.shape[0], 1), np.float32), cum])
    return (cum[:, k:] - cum[:, :-k]) / k


def fill_holes(mask):
    """把 mask 内部的孔洞填上。

    刘海和额头有些像素颜色恰好接近，差分会在部件内部留下一堆针孔。
    不填的话抠出来的刘海是筛子，叠上去能看见底下的额头。

    做法是从图像四边向内漫延标记"外部背景"，剩下的未标记区域就是孔洞。
    """
    h, w = mask.shape
    outside = np.zeros((h, w), dtype=bool)
    frontier = np.zeros((h, w), dtype=bool)
    free = ~mask
    frontier[0, :] = free[0, :]
    frontier[-1, :] = free[-1, :]
    frontier[:, 0] = free[:, 0]
    frontier[:, -1] = free[:, -1]

    while frontier.any():
        outside |= frontier
        grown = np.zeros_like(frontier)
        grown[1:, :] |= frontier[:-1, :]
        grown[:-1, :] |= frontier[1:, :]
        grown[:, 1:] |= frontier[:, :-1]
        grown[:, :-1] |= frontier[:, 1:]
        frontier = grown & free & ~outside

    return ~outside


def grow(mask, n):
    for _ in range(n):
        g = mask.copy()
        g[1:, :] |= mask[:-1, :]
        g[:-1, :] |= mask[1:, :]
        g[:, 1:] |= mask[:, :-1]
        g[:, :-1] |= mask[:, 1:]
        mask = g
    return mask


def shrink(mask, n):
    """腐蚀。补集膨胀再取反，省得再写一遍四邻域循环。

    边界要当成"外部"，否则贴着画布边缘的区域腐蚀不掉。
    """
    if n < 1:
        return mask
    inv = np.ones_like(mask)
    inv[1:-1, 1:-1] = ~mask[1:-1, 1:-1]
    return ~grow(inv, n)


def open_mask(mask, n):
    """形态学开运算：先腐蚀后膨胀，去掉比 2n 还细的结构。

    对付的是**对齐残差**。整图错开哪怕半个像素，所有抗锯齿轮廓上都会
    留下一两像素宽的细弧线；它们又细又长，面积能轻松超过噪点阈值，
    按面积根本筛不掉。而按粗细筛，细丝在腐蚀里整条消失，
    眼睛这种实心块只是边界缩一圈又长回来。

    代价是**真正很细的部件**（眼线、睫毛）也会被误杀，
    抽这类零件时要把 --min-thickness 设成 0。
    """
    return grow(shrink(mask, n), n) if n >= 1 else mask


def align(ref, img, search=6):
    """暴力搜一个小平移量，补偿编辑过程中的整体位移。

    生图工具做局部编辑时经常会顺手把整图重采样一次，错开一两个像素。
    不补偿的话所有轮廓边缘都会被算成"差异"，差分结果全是描边。

    搜索必须在**全分辨率**上做：位移就是一两个像素，先降采样再搜的话
    根本表达不出这个量级的偏移。用切片而不是 roll 来取重叠区（不产生拷贝），
    再隔点采样算残差，(2·search+1)² 次迭代的开销可以忽略。
    """
    a = ref.astype(np.float32).mean(axis=2)
    b = img.astype(np.float32).mean(axis=2)
    h, w = a.shape
    best, best_score = (0, 0), None

    for dy in range(-search, search + 1):
        for dx in range(-search, search + 1):
            ay, by = max(0, dy), max(0, -dy)
            ax, bx = max(0, dx), max(0, -dx)
            hh, ww = h - abs(dy), w - abs(dx)
            score = np.abs(a[ay:ay + hh:2, ax:ax + ww:2]
                           - b[by:by + hh:2, bx:bx + ww:2]).mean()
            if best_score is None or score < best_score:
                best, best_score = (dy, dx), score

    dy, dx = best
    if dy or dx:
        img = np.roll(img, (dy, dx), axis=(0, 1))
    return img, best, best_score


def load(path, keep_magenta):
    """读图并把品红背景抠成透明。"""
    rgb = np.array(Image.open(path).convert("RGB"))
    alpha = np.full(rgb.shape[:2], 255, dtype=np.uint8)
    if keep_magenta:
        alpha, mask = key_magenta(rgb, alpha, grow=2)
        rgb = despill(rgb, alpha, mask)
    return rgb, alpha


def extract(above, below, threshold, min_area, feather, min_thickness):
    """算出「above 有而 below 没有」的那一层。

    返回 RGBA：颜色取自 above，alpha 是差异区域。
    """
    a_rgb, a_alpha = above
    b_rgb, b_alpha = below

    color_diff = np.abs(a_rgb.astype(np.int16) - b_rgb.astype(np.int16)).max(axis=2)
    alpha_diff = np.abs(a_alpha.astype(np.int16) - b_alpha.astype(np.int16))
    diff = np.maximum(color_diff, alpha_diff)

    mask = diff > threshold
    mask &= a_alpha > 8                 # 背景区域不算数
    mask = open_mask(mask, min_thickness)
    mask = drop_small_islands(mask.astype(np.uint8) * 255, min_area=min_area) > 0
    mask = fill_holes(mask)
    mask = grow(mask, 1)                # 往外吃一圈，盖住抗锯齿过渡带

    soft = box_blur(mask.astype(np.float32) * 255.0, feather)
    out_alpha = np.minimum(soft, a_alpha.astype(np.float32)).astype(np.uint8)
    return np.dstack([a_rgb, out_alpha]), mask


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("images", nargs="+",
                    help="剥离序列，从完整到最简。可以用通配符，会按文件名排序")
    ap.add_argument("--names", required=True,
                    help="每一层的名字，逗号分隔。数量应当等于图片数（最后一个是底层）")
    ap.add_argument("--out", default="Art/parts")
    ap.add_argument("--threshold", type=int, default=26,
                    help="判定「这里变了」的通道差阈值。太低会把压缩噪点算进来")
    ap.add_argument("--min-area", type=int, default=400,
                    help="小于这个面积的差异块视为噪点丢弃")
    ap.add_argument("--feather", type=int, default=1, help="边缘羽化半径")
    ap.add_argument("--min-thickness", type=int, default=1,
                    help="比这个还细的结构会被当成对齐残差清掉。"
                         "抽眼线、睫毛这类本来就很细的部件时设成 0")
    ap.add_argument("--no-magenta", action="store_true",
                    help="源图背景不是品红时加这个（那就得自己保证背景已经透明）")
    ap.add_argument("--no-align", action="store_true")
    args = ap.parse_args()

    paths = []
    for pattern in args.images:
        hit = sorted(glob.glob(pattern)) if any(c in pattern for c in "*?[") else [pattern]
        if not hit:
            sys.exit(f"没有匹配到文件：{pattern}")
        paths += hit

    names = [n.strip() for n in args.names.split(",")]
    if len(names) != len(paths):
        sys.exit(f"{len(paths)} 张图但给了 {len(names)} 个名字。"
                 f"最后一张图是底层，也要有名字。")

    os.makedirs(args.out, exist_ok=True)
    keep_magenta = not args.no_magenta

    print(f"▸ {len(paths)} 张剥离序列")
    frames = []
    ref = None
    for path in paths:
        rgb, alpha = load(path, keep_magenta)
        if ref is None:
            ref = rgb
        elif not args.no_align:
            rgb, shift, score = align(ref, rgb)
            if shift != (0, 0):
                print(f"    {os.path.basename(path)}: 对齐补偿 dy={shift[0]} dx={shift[1]} "
                      f"(残差 {score:.1f})")
        if rgb.shape[:2] != ref.shape[:2]:
            sys.exit(f"{path} 尺寸和第一张不一致。所有剥离图必须同尺寸同构图。")
        frames.append((rgb, alpha))

    canvas = frames[0][0].shape[:2]
    layers = []
    for i, name in enumerate(names):
        if i == len(names) - 1:
            # 最后一张就是底层本身，不做差分。
            rgb, alpha = frames[-1]
            rgba = np.dstack([rgb, alpha])
            covered = int((alpha > 8).sum())
        else:
            rgba, mask = extract(frames[i], frames[i + 1], args.threshold,
                                 args.min_area, args.feather, args.min_thickness)
            covered = int(mask.sum())

        path = os.path.join(args.out, f"{name}.png")
        Image.fromarray(rgba).save(path)
        pct = 100.0 * covered / (canvas[0] * canvas[1])
        flag = "  ← 可疑：几乎没有差异" if pct < 0.15 else ""
        print(f"    [{i}] {name:<18} 占画布 {pct:5.2f}%{flag}")
        layers.append({"name": name, "file": f"{name}.png", "group": name.split("_")[0]})

    manifest = os.path.join(args.out, "layers.json")
    with open(manifest, "w") as f:
        json.dump({"layers": layers}, f, ensure_ascii=False, indent=2)
    print(f"▸ 零件 → {args.out}/    清单 → {manifest}")
    print(f"  下一步: python3 Scripts/build_psd.py {args.out} --out Art/snozzy.psd")


if __name__ == "__main__":
    main()

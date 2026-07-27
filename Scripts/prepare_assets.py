#!/usr/bin/env python3
"""把 AI 生成的美术图切成游戏能用的图层。

生图工具有两个几乎必然出现的毛病，这个脚本专门对付它们：

1. **说是透明背景，其实是把棋盘格画进了像素。** 输出的 PNG 往往根本没有 alpha 通道，
   所谓的"透明"只是一张灰白相间的方格图案。
2. **要求分开出图，它却把几张拼进一张。** 需要按横向接缝切开。

用法:
    python3 Scripts/prepare_assets.py 生成图.png --out Assets/

抠棋盘格的关键在于**用饱和度而不是亮度**来判断：棋盘格是纯中性灰
（R=G=B），而画面里的白色物体（比如白猫、纸张）几乎总是带一点暖色偏移。
只按亮度抠会把白猫一起抠掉。
"""

import argparse
import json
import os
import sys

try:
    import numpy as np
    from PIL import Image
except ImportError:
    sys.exit("需要 Pillow 和 numpy：pip3 install pillow numpy")


def find_bands(rgb, min_height=80):
    """按横向接缝把整图切成若干条带。

    生图工具拼图时，条带之间通常有一条突变的边界。逐行算相邻行的差异，
    突起的位置就是接缝。
    """
    g = rgb.astype(int)
    diff = np.abs(np.diff(g, axis=0)).mean(axis=(1, 2))
    threshold = diff.mean() * 4
    seams = []
    for i in range(5, len(diff) - 5):
        if diff[i] > threshold and (not seams or i - seams[-1] > min_height):
            seams.append(i)

    bounds = [0] + [s + 1 for s in seams] + [rgb.shape[0]]
    bands = []
    for a, b in zip(bounds, bounds[1:]):
        if b - a >= min_height:
            bands.append((a, b))
    return bands


def key_checkerboard(rgb, neutral_tol=8, bright_min=228):
    """把"假透明"的棋盘格抠掉，返回 alpha 通道。

    判据是**中性 + 亮**：棋盘格 R≈G≈B 且很亮；而白猫、纸张这些浅色物体
    都带轻微暖色偏移，饱和度足以区分。

    只抠**和画面边缘连通**的区域——物体内部万一有一块中性白，不会被误伤。
    """
    g = rgb.astype(int)
    spread = g.max(axis=2) - g.min(axis=2)
    candidate = (spread <= neutral_tol) & (g.min(axis=2) >= bright_min)

    # 从四条边向内漫延，只保留和边缘连通的候选像素。
    h, w = candidate.shape
    reached = np.zeros((h, w), dtype=bool)
    frontier = np.zeros((h, w), dtype=bool)
    frontier[0, :] = candidate[0, :]
    frontier[-1, :] = candidate[-1, :]
    frontier[:, 0] = candidate[:, 0]
    frontier[:, -1] = candidate[:, -1]

    # 迭代膨胀。图不大，几十轮就收敛，不值得为它引入 scipy。
    while frontier.any():
        reached |= frontier
        grown = np.zeros_like(frontier)
        grown[1:, :] |= frontier[:-1, :]
        grown[:-1, :] |= frontier[1:, :]
        grown[:, 1:] |= frontier[:, :-1]
        grown[:, :-1] |= frontier[:, 1:]
        frontier = grown & candidate & ~reached

    alpha = np.where(reached, 0, 255).astype(np.uint8)
    return alpha


def key_magenta(rgb, alpha, grow=2):
    """把品红区域抠成透明。

    生图时让窗户内部填 #FF00FF，是为了后期能把程序化的天空塞进去——
    画死的天空会让房间失去时间感。品红的好处是画面里不会有别的东西撞色。

    判据不是"接近纯品红"，而是**绿通道明显低于红和蓝**——这是品红的signature，
    抗锯齿边缘上混了背景色的像素同样满足。只抠纯色的话，
    窗框四周会留一圈粉边，叠在深色房间上非常显眼。
    """
    g = rgb.astype(int)
    r, gr, b = g[:, :, 0], g[:, :, 1], g[:, :, 2]
    mask = (r - gr > 45) & (b - gr > 45)

    # 再向外扩几像素，把渐变过渡带一起吃掉。
    for _ in range(grow):
        grown = mask.copy()
        grown[1:, :] |= mask[:-1, :]
        grown[:-1, :] |= mask[1:, :]
        grown[:, 1:] |= mask[:, :-1]
        grown[:, :-1] |= mask[:, 1:]
        mask = grown

    alpha = alpha.copy()
    alpha[mask] = 0
    return alpha, mask


def keep_largest_component(alpha):
    """只保留最大的一块连通区域。

    像"桌面"这种图层，所有合法物件都直接或间接压在桌板上，是同一块连通区域；
    抠图残渣（比如被误抠掉一半的蒸汽）则是孤立的碎片。
    "只留最大块"这条规则在这类图层上非常干净，比调面积阈值靠谱得多——
    阈值太小去不掉碎片，太大又会删掉眼镜、便签这类小物件。
    """
    from collections import deque

    solid = alpha > 8
    h, w = solid.shape
    seen = np.zeros((h, w), dtype=bool)
    best, best_size = None, 0

    for y0 in range(h):
        for x0 in range(w):
            if not solid[y0, x0] or seen[y0, x0]:
                continue
            queue = deque([(y0, x0)])
            seen[y0, x0] = True
            comp = []
            while queue:
                y, x = queue.popleft()
                comp.append((y, x))
                for ny, nx in ((y-1, x), (y+1, x), (y, x-1), (y, x+1)):
                    if 0 <= ny < h and 0 <= nx < w and solid[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        queue.append((ny, nx))
            if len(comp) > best_size:
                best, best_size = comp, len(comp)

    out = np.zeros_like(alpha)
    if best:
        for y, x in best:
            out[y, x] = alpha[y, x]
    return out


def drop_small_islands(alpha, min_area=250):
    """去掉孤立的小块残渣。

    抠图之后常会剩下一些几个像素的碎点（半抠掉的蒸汽、高光之类）。
    它们单看不起眼，但会让后续"按全透明列切分精灵"失效，
    而且叠在深色背景上就是一堆白麻点。
    """
    from collections import deque

    solid = alpha > 8
    h, w = solid.shape
    seen = np.zeros((h, w), dtype=bool)
    out = alpha.copy()

    for y0 in range(h):
        for x0 in range(w):
            if not solid[y0, x0] or seen[y0, x0]:
                continue
            queue = deque([(y0, x0)])
            seen[y0, x0] = True
            component = []
            while queue:
                y, x = queue.popleft()
                component.append((y, x))
                for ny, nx in ((y-1, x), (y+1, x), (y, x-1), (y, x+1)):
                    if 0 <= ny < h and 0 <= nx < w and solid[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        queue.append((ny, nx))
            if len(component) < min_area:
                for y, x in component:
                    out[y, x] = 0
    return out


def despill(rgb, alpha, mask=None):
    """消除抠图残留的边缘杂色。

    抠完之后，物体边缘会留一圈半透明的背景色（棋盘格的灰、或品红）。
    不处理的话叠到深色房间上就是一圈亮边或粉边。
    """
    out = rgb.copy()
    if mask is not None:
        # 品红像素的颜色压成黑：alpha=0 本来看不见，但缩放插值时会渗出粉色。
        out[mask] = 0

        # 还要中和**残留的品红色偏**。窗棂这类细结构上会混进品红，
        # 抠不掉又洗不净，叠在深色房间上就是几道刺眼的粉线。
        # 品红的 signature 是绿通道明显低于红蓝，把绿拉回来即可。
        g = out.astype(int)
        r, gr, b = g[:, :, 0], g[:, :, 1], g[:, :, 2]
        tinted = (r - gr > 18) & (b - gr > 18) & (alpha > 0)
        if tinted.any():
            fixed = out.copy()
            neutral = ((r + b) // 2).astype(np.uint8)
            fixed[:, :, 1] = np.where(tinted, neutral, out[:, :, 1])
            # 红蓝也稍微收一点，否则会偏成灰紫。
            fixed[:, :, 0] = np.where(tinted, ((r + neutral) // 2).astype(np.uint8), out[:, :, 0])
            fixed[:, :, 2] = np.where(tinted, ((b + neutral) // 2).astype(np.uint8), out[:, :, 2])
            out = fixed
    edge = alpha < 250
    if edge.any():
        g = out.astype(int)
        spread = g.max(axis=2) - g.min(axis=2)
        bleached = edge & (spread <= 10) & (g.min(axis=2) >= 210)
        out[bleached] = 0
    return out


def split_horizontally(rgba, gap_tol=6):
    """把一条带里并排的若干个精灵切开（按整列全透明来分）。"""
    alpha = rgba[:, :, 3]
    col_has = (alpha > 8).any(axis=0)
    pieces, start = [], None
    for x, has in enumerate(col_has):
        if has and start is None:
            start = x
        elif not has and start is not None:
            if x - start > gap_tol:
                pieces.append((start, x))
            start = None
    if start is not None:
        pieces.append((start, len(col_has)))
    return pieces


def trim(rgba):
    """裁掉四周全透明的边。"""
    alpha = rgba[:, :, 3]
    rows = np.where((alpha > 8).any(axis=1))[0]
    cols = np.where((alpha > 8).any(axis=0))[0]
    if len(rows) == 0 or len(cols) == 0:
        return rgba
    return rgba[rows[0]:rows[-1] + 1, cols[0]:cols[-1] + 1]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("source")
    ap.add_argument("--out", default="Assets")
    ap.add_argument("--bands", default="",
                    help="显式指定横向分界行，逗号分隔（如 520,818）。"
                         "自动检测会把书架隔板、桌沿这类强横边也当成接缝，"
                         "布局已知时直接写死更可靠。")
    ap.add_argument("--names", default="room,desk,cats",
                    help="按从上到下的顺序给每个条带命名")
    ap.add_argument("--trim", type=int, default=6,
                    help="每个条带上下各裁掉多少行，去掉接缝混色")
    ap.add_argument("--min-island", type=int, default=250,
                    help="小于这个像素数的孤立块会被清掉（抠图残渣）")
    ap.add_argument("--keep-largest", default="desk",
                    help="这些图层只保留最大连通块（适合所有物件都连在一起的层）")
    ap.add_argument("--split", default="cats",
                    help="这些条带要再按列切成单个精灵（逗号分隔）")
    args = ap.parse_args()

    os.makedirs(args.out, exist_ok=True)
    img = Image.open(args.source).convert("RGB")
    rgb = np.array(img)

    if args.bands.strip():
        cuts = [int(x) for x in args.bands.split(",") if x.strip()]
        edges = [0] + cuts + [rgb.shape[0]]
        bands = list(zip(edges, edges[1:]))
    else:
        bands = find_bands(rgb)
    names = [n.strip() for n in args.names.split(",")]
    split_set = {n.strip() for n in args.split.split(",") if n.strip()}
    largest_set = {n.strip() for n in args.keep_largest.split(",") if n.strip()}

    print(f"源图 {img.width}×{img.height}，检测到 {len(bands)} 个条带")
    manifest = {}

    for i, (top, bottom) in enumerate(bands):
        name = names[i] if i < len(names) else f"band{i}"
        # 切边：接缝两侧总有几行是上下两张图混出来的深色像素。
        # 不裁掉的话，前景图顶端会留一条横贯画面的黑线，非常显眼。
        t0 = top + (args.trim if top > 0 else 0)
        b0 = bottom - (args.trim if bottom < rgb.shape[0] else 0)
        band = rgb[t0:b0]
        alpha = key_checkerboard(band)
        alpha, magenta = key_magenta(band, alpha)
        if name in largest_set:
            alpha = keep_largest_component(alpha)
        else:
            alpha = drop_small_islands(alpha, min_area=args.min_island)
        cleaned = despill(band, alpha, magenta)
        rgba = np.dstack([cleaned, alpha])

        transparent_pct = 100 * (alpha == 0).sum() / alpha.size
        print(f"  [{name}] y {t0}–{b0}  高 {b0-t0}px  透明 {transparent_pct:.0f}%"
              + (f"  品红 {magenta.sum()}px" if magenta.any() else ""))
        _ = (top, bottom)

        if name in split_set:
            for j, (x0, x1) in enumerate(split_horizontally(rgba)):
                piece = trim(rgba[:, x0:x1])
                path = os.path.join(args.out, f"{name}_{j}.png")
                Image.fromarray(piece).save(path)
                print(f"      → {os.path.basename(path)}  {piece.shape[1]}×{piece.shape[0]}")
        else:
            path = os.path.join(args.out, f"{name}.png")
            Image.fromarray(rgba).save(path)
            print(f"      → {os.path.basename(path)}  {rgba.shape[1]}×{rgba.shape[0]}")

            # 房间图里被抠掉的品红区域就是窗洞。把它的位置写进清单，
            # 引擎才知道该往哪儿塞程序化的天空——否则窗户只会是个黑洞，
            # 昼夜和天气就全丢了。
            if magenta.any():
                ys, xs = np.where(magenta)
                h, w = magenta.shape
                manifest[f"{name}_window"] = {
                    "x": round(float(xs.min()) / w, 5),
                    "y": round(float(ys.min()) / h, 5),
                    "width": round(float(xs.max() - xs.min() + 1) / w, 5),
                    "height": round(float(ys.max() - ys.min() + 1) / h, 5),
                }


    if manifest:
        path = os.path.join(args.out, "scene.json")
        with open(path, "w") as f:
            json.dump(manifest, f, indent=2, sort_keys=True)
        print(f"  清单 → {os.path.basename(path)}: {manifest}")


if __name__ == "__main__":
    main()

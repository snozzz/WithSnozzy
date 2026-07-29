#!/usr/bin/env python3
"""把重绘好的整幅场景切成引擎要的图层。

切割用的是**灰模自带的遮罩**，不是从成品里抠色——重绘会改颜色、加辉光、
加雾，颜色抠不干净；而遮罩是我画灰模时定义的，形状精确且免费。

输出：
    room.png   房间层（窗洞挖空，运行时塞程序化天空）
    desk.png   桌子层，画在角色之前；容膝空间天然透明
    scene.json 窗洞位置等布局参数

    python3 Scripts/cut_scene.py Art/scene_painted.png --out Assets
"""

import argparse
import json
import os

import numpy as np
from PIL import Image, ImageFilter


def feather(mask, radius):
    """遮罩边缘羽化几像素，免得切出来是刀切的硬边。"""
    if radius < 1:
        return mask
    return np.asarray(Image.fromarray(mask).filter(ImageFilter.GaussianBlur(radius)))


def window_rect(rgb, tol=(190, 90, 190)):
    """找出画面里最大的一块纯品红 = 窗洞。

    只取最大连通块：粉色的霓虹灯管也满足品红判据，但它们是细长的小块。
    """
    from collections import deque
    a = np.asarray(rgb, np.int16)
    mag = (a[:, :, 0] > tol[0]) & (a[:, :, 1] < tol[1]) & (a[:, :, 2] > tol[2])
    H, W = mag.shape
    seen = np.zeros_like(mag)
    best, best_n = None, 0
    for y0 in range(0, H, 3):
        for x0 in range(0, W, 3):
            if not mag[y0, x0] or seen[y0, x0]:
                continue
            q = deque([(y0, x0)])
            seen[y0, x0] = True
            comp = []
            while q:
                y, x = q.popleft()
                comp.append((y, x))
                for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
                    if 0 <= ny < H and 0 <= nx < W and mag[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        q.append((ny, nx))
            if len(comp) > best_n:
                best_n, best = len(comp), comp
    if not best:
        return None, mag
    ys = [c[0] for c in best]
    xs = [c[1] for c in best]
    hole = np.zeros_like(mag)
    for y, x in best:
        hole[y, x] = True
    return (min(xs), min(ys), max(xs) + 1, max(ys) + 1), hole


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("painted")
    ap.add_argument("--mask", default="Art/blocking/mask_desk.png")
    ap.add_argument("--out", default="Assets")
    ap.add_argument("--feather", type=int, default=2)
    a = ap.parse_args()

    os.makedirs(a.out, exist_ok=True)
    mask_img = Image.open(a.mask).convert("L")
    W, H = mask_img.size
    paint = Image.open(a.painted).convert("RGB").resize((W, H), Image.LANCZOS)
    rgb = np.asarray(paint)
    mask = np.asarray(mask_img)

    rect, hole = window_rect(paint)

    # 桌子层：遮罩内的像素，alpha 就是遮罩本身
    desk = np.dstack([rgb, feather(mask, a.feather)])
    Image.fromarray(desk).save(os.path.join(a.out, "desk.png"))

    # 房间层：整幅画，把窗洞挖空
    room_alpha = np.full((H, W), 255, np.uint8)
    # 按**包围盒**挖洞，而不是按连通域本身。窗户本来就是矩形，
    # 而边缘那一圈被霓虹辉光染过的像素纯度不够、进不了连通域，
    # 照着连通域挖会在窗角留下豁口。
    if rect:
        x0, y0, x1, y1 = rect
        room_alpha[y0:y1, x0:x1] = 0
    else:
        room_alpha[hole] = 0
    room = np.dstack([rgb, feather(room_alpha, 1)])
    Image.fromarray(room).save(os.path.join(a.out, "room.png"))

    manifest = {
        "roomFit": "fillWidth", "roomAnchorX": 0.5,
        "deskBottom": 1.0, "deskSurface": 0.0,
        "source": "painted",
    }
    if rect:
        x0, y0, x1, y1 = rect
        manifest["room_window"] = {
            "x": round(x0 / W, 5), "y": round(y0 / H, 5),
            "width": round((x1 - x0) / W, 5), "height": round((y1 - y0) / H, 5)}
    json.dump(manifest, open(os.path.join(a.out, "scene.json"), "w"), indent=2)

    print(f"CUT {W}×{H}  桌子层覆盖 {100 * (mask > 128).mean():.1f}%  窗洞 {rect}")


if __name__ == "__main__":
    main()

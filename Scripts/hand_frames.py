#!/usr/bin/env python3
"""把打字的手切成小块，并算出该从哪一行开始画。

    python3 Scripts/hand_frames.py Art/hands --out Assets

手是**盖在桌面层上面**的，但只能盖住桌板挡住的那一段：
桌板上沿以上（y 更小）那截小臂本来就在房间背景前面，由角色图自己画，
再盖一次没意义，还会在桌沿上留一条边。

所以起始行取**桌板变成完全不透明的那一行**——那正好是"桌子开始挡人"的位置。
从素材里量，不写死：换一张重绘图桌沿的高度就变了。
"""
import argparse
import glob
import json
import os

import numpy as np
from PIL import Image

PAD = 6


def desk_top(desk_path, x0, x1, threshold=8):
    """桌面层在 `x0…x1` 这一段里，从哪一行**开始有**桌子。

    取"开始有"而不是"完全不透明"：桌沿那条边是一道由虚到实的窄带
    （实测 y=590 起有值、602 起满值）。按"满值"起画的话，那条带子会
    压在她的小臂上，画面上是一条横线横穿两条胳膊——而小臂在 3D 里是
    高于桌面的，本来就该盖住桌沿。
    """
    a = np.asarray(Image.open(desk_path).convert("RGBA"))[:, :, 3]
    for y in range(a.shape[0]):
        if a[y, x0:x1].max() >= threshold:
            return y
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help="render_hands.py 的输出目录")
    ap.add_argument("--out", default="Assets")
    ap.add_argument("--desk", default="Assets/desk.png")
    a = ap.parse_args()

    # 打字循环那几帧按编号排，托腮那一帧单独拿。
    # **不能一把 `hand_*.png` 通配下来**：`hand_chin.png` 排序落在
    # `hand_03.png` 后面纯属字母序的巧合，改个名字就串了，
    # 而且它不属于循环——`TypingRig` 取模的时候会把它当成第五帧播出来。
    paths = sorted(glob.glob(os.path.join(a.src, "hand_[0-9]*.png")))
    if not paths:
        raise SystemExit(f"{a.src} 里没有 hand_<编号>.png")
    chin_path = os.path.join(a.src, "hand_chin.png")
    has_chin = os.path.exists(chin_path)

    imgs = [Image.open(p).convert("RGBA") for p in paths]
    canvas = imgs[0].size
    masks = [np.asarray(im)[:, :, 3] > 4 for im in imgs]
    # 托腮那帧要和循环帧**共用同一个裁切矩形**（运行时按同一个 rect 贴回去），
    # 所以它必须参与矩形的求并集，但不参与"逐帧变化量"那条判据。
    chin_img = Image.open(chin_path).convert("RGBA") if has_chin else None
    rect_masks = masks + ([np.asarray(chin_img)[:, :, 3] > 4] if has_chin else [])

    # 所有帧的手臂横向范围，用来问桌子"这一段从哪行开始挡"
    cols = np.zeros(canvas[0], bool)
    for m in rect_masks:
        cols |= m.any(axis=0)
    xs = np.where(cols)[0]
    top = desk_top(a.desk, int(xs.min()), int(xs.max()) + 1)
    if top is None:
        raise SystemExit("桌面层在手臂那一段上没有完全不透明的行，--desk 对吗？")

    # 起始行以下的手臂像素并集
    x0, x1, y1 = 10**9, -1, -1
    for m in rect_masks:
        ys, xx = np.where(m[top:])
        if len(xx) == 0:
            continue
        x0 = min(x0, int(xx.min())); x1 = max(x1, int(xx.max()))
        y1 = max(y1, int(ys.max()) + top)
    if x1 < 0:
        raise SystemExit(f"桌板上沿 y={top} 以下一个手臂像素都没有——手是不是没伸到桌上？")

    rect = {"x": max(0, x0 - PAD), "y": top,
            "w": min(canvas[0], x1 + PAD + 1) - max(0, x0 - PAD),
            "h": min(canvas[1], y1 + PAD + 1) - top}
    box = (rect["x"], rect["y"], rect["x"] + rect["w"], rect["y"] + rect["h"])

    os.makedirs(a.out, exist_ok=True)
    total = 0
    for i, im in enumerate(imgs):
        dst = os.path.join(a.out, f"snozzy_hand_{i:02d}.png")
        im.crop(box).save(dst)
        total += os.path.getsize(dst)

    # 托腮那一帧排在循环之后。运行时按下标取图，所以它就是第 len(imgs) 帧，
    # 但 `frames` 只报循环的长度——`TypingRig` 拿它取模，把托腮算进去
    # 就会在打字的时候播出一只抬起来的手。
    meta = {"canvas": list(canvas), "rect": rect, "frames": len(imgs)}
    if has_chin:
        dst = os.path.join(a.out, f"snozzy_hand_{len(imgs):02d}.png")
        chin_img.crop(box).save(dst)
        total += os.path.getsize(dst)
        meta["chin"] = len(imgs)

    # 逐帧变化量：全是零就说明按键那几帧根本没动，白渲
    changes = [int((masks[i] ^ masks[(i + 1) % len(masks)])[top:].sum())
               for i in range(len(masks))]

    json.dump(meta, open(os.path.join(a.out, "hands.json"), "w"), indent=2)
    print(f"桌板上沿 y={top}（手从这一行起画在桌子上面）")
    print(f"手那一块 {rect['w']}×{rect['h']} @ ({rect['x']},{rect['y']})")
    print(f"逐帧剪影变化 {changes}（有 0 就是那两帧一样，动画白做）")
    print(f"HAND 打字循环 {len(imgs)} 帧"
          + ("＋托腮 1 帧" if has_chin else "，没有托腮那一帧")
          + f"，{total / 1024:.0f} KB")


if __name__ == "__main__":
    main()

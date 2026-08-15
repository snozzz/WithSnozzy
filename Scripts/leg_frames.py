#!/usr/bin/env python3
"""把整张的姿势图/过渡帧切成「共用的上半身 + 一小块腿」。

    python3 Scripts/leg_frames.py Art/poses --out Assets

为什么要切：加上过渡帧一共有五十来张整画幅图，全存下来是 30 MB 包体、
200 MB 运行内存——而**上半身在所有这些图里是同一份**（同一台相机、
同一个上半身姿势，实测缝线以上的最大像素差只有百分之几，全是抖动 alpha
的边缘噪点）。所以上半身只留一张，每一帧只存变了的那一块腿。

缝线（`--seam`）要挑在两个条件都满足的行上：

1. **各姿势在这一行以上没有真差异**——不然上半身那一张只能代表其中一套，
   别的姿势会露出错的裙摆。裙摆的差异从 y≈600 起。
2. 尽量落在桌板完全不透明的那一段里（实测 y≥604 桌板 alpha 满值），
   万一有残差也被桌子挡住。这是保险，不是主要依据。

腿那一块的矩形是**量出来的**：取所有帧在缝线以下的非透明像素的并集。
写死一个矩形迟早会在某套新姿势上切掉脚。
"""
import argparse
import glob
import json
import os
import re

import numpy as np
from PIL import Image

SEAM = 600
PAD = 10
# 近景（托腮）那张上半身要切得比常态深一截，见 `chin_seam()`。
CHIN_SEAM_FALLBACK = 612


def alpha_bbox(paths, seam):
    """所有帧在 seam 以下的非透明像素的并集矩形。"""
    x0, x1, y1 = 10**9, -1, -1
    for p in paths:
        a = np.asarray(Image.open(p).convert("RGBA"))[:, :, 3] > 4
        ys, xs = np.where(a[seam:])
        if len(xs) == 0:
            continue
        x0 = min(x0, int(xs.min())); x1 = max(x1, int(xs.max()))
        y1 = max(y1, int(ys.max()) + seam)
    if x1 < 0:
        raise SystemExit("缝线以下一个非透明像素都没有——缝线是不是太靠下了？")
    return x0, x1, y1


def _erode(mask):
    """3×3 腐蚀。只留下四周都超阈值的像素。"""
    out = mask.copy()
    for dy in (-1, 0, 1):
        for dx in (-1, 0, 1):
            out &= np.roll(np.roll(mask, dy, 0), dx, 1)
    return out


def seam_residual(paths, seam, threshold=150):
    """缝线以上各帧之间的**结构性**差异占比。验证"上半身共用"这个前提成立。

    不能直接取最大像素差：抖动 alpha（`_alpha_mode` 那条，EEVEE 的 DITHERED）
    是随机的，同一个场景渲两遍，头发边缘就有几百个孤立像素不一样，
    最大差能到 700 多——那不是姿势带来的差异，纯粹是渲染噪点。
    实测这种噪点在缝线以上散布到 y=267（头顶），而腿根本影响不到头发。

    所以先按阈值二值化再做 3×3 腐蚀：孤立的噪点被腐蚀掉，
    成片的真差异留得住。实测这一刀下去，缝线以上剩 0.04%、
    缝线以下（本来就该有差异）剩 6.4%，差两个数量级，判据很稳。
    """
    ref = np.asarray(Image.open(paths[0]).convert("RGBA"), np.int16)[:seam]
    hit = np.zeros(ref.shape[:2], bool)
    for p in paths[1:]:
        a = np.asarray(Image.open(p).convert("RGBA"), np.int16)[:seam]
        hit |= np.abs(a - ref).sum(axis=2) > threshold
    return _erode(hit).sum() / hit.size


def chin_seam(chin_path, ref_path, desk_path, seam):
    """近景（托腮）那张上半身该切到哪一行。

    常态那张切在 `seam`（600）——腿部姿势的差异从那行起，再往下就不能共用了。
    托腮这张不行：抬起来那条胳膊的袖子一路伸到 y≈644，切在 600 会把它齐齐
    削掉一截。

    桌面层能帮忙挡，但**不是从 600 就挡得住**：实测那一带 alpha 从 601 才
    开始有值、611 才满值，中间十行是桌沿那道由虚到实的窄带（第 26 条同一处）。
    所以要一直切到桌子**完全不透明**的那一行。

    这一行是量出来的，不写死：换一张重绘图桌沿的高度就变了。
    """
    if not (os.path.exists(chin_path) and os.path.exists(desk_path)):
        return CHIN_SEAM_FALLBACK
    a = np.asarray(Image.open(chin_path).convert("RGBA"), np.int16)
    b = np.asarray(Image.open(ref_path).convert("RGBA"), np.int16)
    d = _erode(np.abs(a - b).sum(axis=2) > 150)
    ys, xs = np.where(d)
    if len(xs) == 0:
        return CHIN_SEAM_FALLBACK
    desk = np.asarray(Image.open(desk_path).convert("RGBA"))[:, :, 3]
    band = desk[:, int(xs.min()):int(xs.max()) + 1]
    opaque = np.where((band >= 254).all(axis=1))[0]
    row = int(opaque.min()) if len(opaque) else CHIN_SEAM_FALLBACK
    # 胳膊没伸到桌子底下时也不必切那么深，但绝不能浅过常态那条缝
    return max(seam, min(row, int(ys.max()) + 1))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help="render_poses.py / render_layers.py 的输出目录")
    ap.add_argument("--out", default="Assets")
    ap.add_argument("--seam", type=int, default=SEAM)
    ap.add_argument("--desk", default="Assets/desk.png",
                    help="桌面层，用来算近景那张上半身该切多深")
    a = ap.parse_args()
    seam = a.seam

    poses = [os.path.basename(p)[7:-4]
             for p in sorted(glob.glob(os.path.join(a.src, "snozzy_*.png")))]
    poses = [p for p in poses if p != "headphones"]
    if not poses:
        raise SystemExit(f"{a.src} 里没有 snozzy_<姿势>.png")
    # 中枢排在 0：`LegPose.hub` 就是这个下标
    hub = "together" if "together" in poses else poses[0]
    poses = [hub] + sorted(p for p in poses if p != hub)

    # **只认腿部姿势那几支过渡。** `render_closeup.py` / `render_stretch.py`
    # 的中间帧也叫 `trans_*_*.png`，而 HANDOFF 让它们和姿势图渲进同一个目录，
    # 于是 `trans_chin_00…07` 会被当成第六支换腿过渡：
    # `seam_residual` 把托腮抬起来的胳膊算成"上半身不共用"（实测报 0.899%，
    # 只算腿的话是 0.000%），`alpha_bbox` 可能被那条袖子撑大腿的矩形，
    # 还会切出一堆 `snozzy_move_chin_*.png` 这种没人要的图。
    # 分支名必须落在 `poses` 里才算数。
    trans = []
    steps = {}
    for p in sorted(glob.glob(os.path.join(a.src, "trans_*_*.png"))):
        m = re.match(r"trans_(.+)_(\d+)\.png$", os.path.basename(p))
        if m is None or m.group(1) not in poses:
            continue
        trans.append(p)
        steps.setdefault(m.group(1), []).append(int(m.group(2)))
    counts = {len(v) for v in steps.values()}
    if len(counts) > 1:
        raise SystemExit(f"各分支的中间帧数不一致：{ {k: len(v) for k, v in steps.items()} }")
    n_steps = counts.pop() if counts else 0

    hp = os.path.join(a.src, "snozzy_headphones.png")
    frames = [os.path.join(a.src, f"snozzy_{p}.png") for p in poses] + trans

    canvas = Image.open(frames[0]).size
    resid = seam_residual(frames + ([hp] if os.path.exists(hp) else []), seam)
    x0, x1, y1 = alpha_bbox(frames, seam)
    rect = {"x": max(0, x0 - PAD), "y": seam,
            "w": min(canvas[0], x1 + PAD + 1) - max(0, x0 - PAD),
            "h": min(canvas[1], y1 + PAD + 1) - seam}
    box = (rect["x"], rect["y"], rect["x"] + rect["w"], rect["y"] + rect["h"])

    print(f"缝线 y={seam}，以上的结构性差异 {resid * 100:.3f}% "
          f"（{'共用上半身成立' if resid < 0.005 else '偏大 ← 缝线要往上挪'}）")
    print(f"腿那一块 {rect['w']}×{rect['h']} @ ({rect['x']},{rect['y']})")

    os.makedirs(a.out, exist_ok=True)
    total = 0

    def cut(src, dst, region):
        nonlocal total
        Image.open(src).convert("RGBA").crop(region).save(os.path.join(a.out, dst))
        total += os.path.getsize(os.path.join(a.out, dst))

    # 上半身：整幅宽、缝线以上。取自中枢那一张
    body = (0, 0, canvas[0], seam)
    cut(os.path.join(a.src, f"snozzy_{hub}.png"), "snozzy_body.png", body)
    if os.path.exists(hp):
        cut(hp, "snozzy_body_headphones.png", body)
        # 耳机层的腿是按中枢姿势渲的，切掉不要——戴耳机时腿照样换姿势，
        # 由下面这些腿图负责。原来戴耳机直接盖整张图，腿是冻住的。
    else:
        print("  没有 snozzy_headphones.png，跳过耳机上半身")

    # 近景（托腮）那张上半身要切得比常态深一截，理由见 `chin_seam`。
    # **这里只量那一行、写进 legs.json，不切图**——托腮的上半身由
    # `Scripts/chin_frames.py` 从 2× 渲染发布（`snozzy_body_chin2x*`），
    # 运行时也只画那一套。以前这里还切一份 1× 的，结果那份和 `pose.py`
    # 悄悄脱节了整整一版（第 70 条）：同一个姿势存两份，第二份必然会旧。
    #
    # 切得深就和腿图**重叠**了（腿图从 600 起画），所以运行时的层序是
    # 「先画腿、再盖上半身」——重叠的那十几行落在桌子完全不透明的那一段里，
    # 盖住的是谁根本看不见。
    chin_src = os.path.join(a.src, "torso_chin.png")
    chin_row = 0
    if os.path.exists(chin_src):
        chin_row = chin_seam(chin_src, os.path.join(a.src, f"snozzy_{hub}.png"),
                             a.desk, seam)
        print(f"近景上半身该切到第 {chin_row} 行（常态 {seam}），"
              f"和腿图重叠 {chin_row - seam} 行，那几行由桌子挡着")
    else:
        print("  没有 torso_chin.png，chinSeam 记 0（先跑 render_closeup.py）")

    # 保底：一张完整的整幅图。腿图或 legs.json 缺了的时候还能画出个人来
    cut(os.path.join(a.src, f"snozzy_{hub}.png"), "snozzy_idle.png",
        (0, 0, canvas[0], canvas[1]))

    for p in poses:
        cut(os.path.join(a.src, f"snozzy_{p}.png"), f"snozzy_legs_{p}.png", box)
    for p in trans:
        name = os.path.basename(p)[6:-4]     # 去掉 "trans_"，剩 <姿势>_<编号>
        cut(p, f"snozzy_move_{name}.png", box)

    manifest = {"canvas": list(canvas), "seam": seam, "rect": rect,
                "poses": poses, "steps": n_steps, "chinSeam": chin_row}
    with open(os.path.join(a.out, "legs.json"), "w") as f:
        json.dump(manifest, f, indent=2)

    print(f"LEGS 上半身 1 张 + 腿 {len(poses)} 张 + 过渡 {len(trans)} 张，"
          f"共 {total / 1024 / 1024:.1f} MB")
    print(f"     姿势顺序 {poses}，每段过渡 {n_steps} 帧")


if __name__ == "__main__":
    main()

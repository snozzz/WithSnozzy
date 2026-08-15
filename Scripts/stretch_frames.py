#!/usr/bin/env python3
"""把伸懒腰整幅渲染切成运行时素材，并验证连续性。

    python3 Scripts/stretch_frames.py /tmp/stretch2x --out Assets

**切片和验证那一半全部复用 `chin_frames.py`** —— 动作走廊、静止区逐像素
锁回 base、重读 PNG 验漂移、相邻 XOR 峰值比，这些和是哪条动作无关。
这里只提供伸懒腰专有的那几样：文件名、桌面手层要不要留手、清单。
**不要把 `compose_set` 抄一份过来**（第 46 条：两处算同一件事迟早各错各的）。

和托腮的两点差别：

- **只出 2×，没有 1× 兼容那一份。** 托腮当年留了 1× 回退，结果那份悄悄和
  代码脱节了整整一版（第 70 条）。伸懒腰不留第二份：素材不全就整套不启用，
  她只是不伸懒腰，不会退化成另一个姿势。
- **桌面那一层到后面只剩键盘**。两只手都举起来了，那一层里一只手都不该留
  （第 60 条）。所以这里不校验"手层是常态的子集"，而校验**键盘还在**——
  少了键盘就是把整层渲空了。
"""
import argparse
import glob
import json
import os

import numpy as np
from PIL import Image

from chin_frames import base_canvas, compose_set, load, measured_body_height


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help="Blender/render_stretch.py 的输出目录")
    ap.add_argument("--out", default="Assets")
    ap.add_argument("--desk", default="Assets/desk.png")
    a = ap.parse_args()
    os.makedirs(a.out, exist_ok=True)

    hands = json.load(open(os.path.join(a.out, "hands.json")))

    raw = sorted(glob.glob(os.path.join(a.src, "trans_stretch_[0-9][0-9].png")))
    phones = sorted(glob.glob(
        os.path.join(a.src, "trans_stretch_headphones_[0-9][0-9].png")))
    if len(raw) != 8 or len(phones) != 8:
        raise SystemExit(f"中间帧必须正好 8 张：普通 {len(raw)}，耳机 {len(phones)}")

    raw_size = Image.open(raw[0]).size
    logical_canvas = (1536, 1024)
    scale = raw_size[0] // logical_canvas[0]
    if scale != 2 or raw_size != (logical_canvas[0] * 2, logical_canvas[1] * 2):
        raise SystemExit(f"伸懒腰只发布 2× 素材，实际画幅 {raw_size}")
    canvas = raw_size

    base = os.path.join(a.src, "torso_stretch_base.png")
    base_phones = os.path.join(a.src, "torso_stretch_base_headphones.png")
    final = os.path.join(a.src, "torso_stretch.png")
    final_phones = os.path.join(a.src, "torso_stretch_headphones.png")
    for path in (base, base_phones, final, final_phones):
        if not os.path.exists(path):
            raise SystemExit(f"缺少 {path}")

    source_images = [load(p, canvas) for p in
                     [base, base_phones, *raw, *phones, final, final_phones]]
    cut_physical = measured_body_height(source_images, a.desk, scale)
    logical_height = (cut_physical + scale - 1) // scale
    height = logical_height * scale

    compose_set(base, raw, final, a.out, "snozzy_body_stretch2x",
                canvas, height,
                alternate_base_path=base_phones, alternate_raw_paths=phones)
    compose_set(base_phones, phones, final_phones, a.out,
                "snozzy_body_stretch_headphones2x", canvas, height,
                alternate_base_path=base, alternate_raw_paths=raw)

    # 发布 compose_set 用的那两张 base。运行时动作起步的第一拍就画它，
    # 不能先画旧的常态图再在第二拍偷换清晰度（和托腮同一个理由）。
    Image.fromarray(base_canvas(base, canvas, height)).save(
        os.path.join(a.out, "snozzy_body_stretch_base2x.png"), compress_level=6)
    Image.fromarray(base_canvas(base_phones, canvas, height)).save(
        os.path.join(a.out, "snozzy_body_stretch_base_headphones2x.png"),
        compress_level=6)

    hand_raw = sorted(glob.glob(os.path.join(a.src, "hand_stretch_[0-9][0-9].png")))
    if len(hand_raw) != len(raw):
        raise SystemExit(f"手层中间帧 {len(hand_raw)}，上半身 {len(raw)}")
    r = hands["rect"]
    box = tuple(v * scale for v in
                (r["x"], r["y"], r["x"] + r["w"], r["y"] + r["h"]))

    kept = []
    for i, p in enumerate(hand_raw + [os.path.join(a.src, "hand_stretch.png")]):
        crop = Image.open(p).convert("RGBA").crop(box)
        name = (f"snozzy_stretch_hand_{i:02d}.png" if i < len(hand_raw)
                else "snozzy_stretch_hand_final.png")
        crop.save(os.path.join(a.out, name), optimize=True)
        kept.append(int((np.asarray(crop)[:, :, 3] > 4).sum()))

    # 键盘一直在这一层里，所以每一帧都必须有相当一片不透明像素。
    # 全 0 说明 `isolate_arms` 把键盘也一起遮掉了——那是渲染脚本的 bug，
    # 画面上的表现是桌上凭空少一块键盘。
    if min(kept) <= 0:
        raise SystemExit(f"桌面层有空帧：{kept}")
    # 手陆续离开，这一层的像素数应该是**单调不增**的。中间反弹说明
    # `render_stretch.render_hand` 的保留判断在某一帧翻回去了。
    if any(b > a_ + 32 for a_, b in zip(kept, kept[1:])):
        raise SystemExit(f"桌面层像素数中途反弹：{kept}")
    print(f"STRETCH 桌面层像素 {kept}（单调不增，末尾是只剩键盘）")

    manifest = {
        "canvas": list(logical_canvas),
        "bodyRect": {"x": 0, "y": 0,
                     "w": logical_canvas[0], "h": logical_height},
        "handRect": r,
        "frames": len(raw),
        "pixelScale": scale,
    }
    with open(os.path.join(a.out, "stretch.json"), "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"STRETCH MOTION {len(raw)} 张中间帧，2× 像素密度，"
          f"上半身切到逻辑第 {logical_height} 行")


if __name__ == "__main__":
    main()

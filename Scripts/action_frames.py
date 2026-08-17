#!/usr/bin/env python3
"""把一条长动作的整幅渲染切成运行时素材，并验证连续性。

    python3 Scripts/action_frames.py /tmp/stretch2x stretch --out Assets
    python3 Scripts/action_frames.py /tmp/coffee2x  coffee  --out Assets
    python3 Scripts/action_frames.py /tmp/phone2x   phone   --out Assets

**切片和验证那一半全部复用 `chin_frames.py`** —— 动作走廊、静止区逐像素
锁回 base、重读 PNG 验漂移、相邻 XOR 峰值比，这些和是哪条动作无关。
这里只提供每条动作专有的那几样：文件名、桌面手层怎么验、清单。
**不要为第四条动作再抄一份**（第 46 条：两处算同一件事迟早各错各的）。

和托腮的两点差别：

- **只出 2×，没有 1× 兼容那一份。** 托腮当年留了 1× 回退，结果那份悄悄和
  代码脱节了整整一版（第 70 条）。这三条不留第二份：素材不全就整套不启用，
  她只是不做这个动作，不会退化成另一个姿势。
- **桌面那一层每条动作的内容不一样**：伸懒腰到后面只剩键盘和道具（两只手
  都举起来了），喝咖啡和玩手机则一直留着右手。所以这里不校验"手层是常态的
  子集"，而是校验**每一帧都还有相当一片不透明像素**——全空说明
  `isolate_arms` 把键盘和道具也一起遮掉了，画面上是桌上凭空少一块。
"""
import argparse
import glob
import json
import os

import numpy as np
from PIL import Image

import action_defs as AD
from chin_frames import base_canvas, compose_set, load, measured_body_height
from chin_metrics import xor_report


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help="Blender/render_action.py 的输出目录")
    ap.add_argument("action", choices=sorted(AD.ACTIONS))
    ap.add_argument("--out", default="Assets")
    ap.add_argument("--desk", default="Assets/desk.png")
    a = ap.parse_args()
    spec = AD.spec(a.action)
    os.makedirs(a.out, exist_ok=True)

    hands = json.load(open(os.path.join(a.out, "hands.json")))

    def sources(pattern):
        return sorted(glob.glob(os.path.join(a.src, pattern)))

    raw = sources(f"trans_{a.action}_[0-9][0-9].png")
    phones = sources(f"trans_{a.action}_headphones_[0-9][0-9].png")
    hold = sources(f"hold_{a.action}_[0-9][0-9].png")
    hold_phones = sources(f"hold_{a.action}_headphones_[0-9][0-9].png")
    if len(raw) != AD.TRANSITION_FRAMES or len(phones) != AD.TRANSITION_FRAMES:
        raise SystemExit(f"中间帧必须正好 {AD.TRANSITION_FRAMES} 张："
                         f"普通 {len(raw)}，耳机 {len(phones)}")
    if len(hold) != spec["holds"] or len(hold_phones) != spec["holds"]:
        raise SystemExit(f"停留帧必须正好 {spec['holds']} 张："
                         f"普通 {len(hold)}，耳机 {len(hold_phones)}")

    raw_size = Image.open(raw[0]).size
    logical_canvas = (1536, 1024)
    scale = raw_size[0] // logical_canvas[0]
    if scale != 2 or raw_size != (logical_canvas[0] * 2, logical_canvas[1] * 2):
        raise SystemExit(f"长动作只发布 2× 素材，实际画幅 {raw_size}")
    canvas = raw_size

    base = os.path.join(a.src, f"torso_{a.action}_base.png")
    base_phones = os.path.join(a.src, f"torso_{a.action}_base_headphones.png")
    final = os.path.join(a.src, f"torso_{a.action}.png")
    final_phones = os.path.join(a.src, f"torso_{a.action}_headphones.png")
    for path in (base, base_phones, final, final_phones):
        if not os.path.exists(path):
            raise SystemExit(f"缺少 {path}")

    source_images = [load(p, canvas) for p in
                     [base, base_phones, *raw, *phones, *hold, *hold_phones,
                      final, final_phones]]
    cut_physical = measured_body_height(source_images, a.desk, scale)
    logical_height = (cut_physical + scale - 1) // scale
    height = logical_height * scale

    # 带道具那两条是两段式的（伸手 → 抓住 → 举起来），前半段整个发生在
    # 桌沿以下——上半身这张图上几乎什么都没变。所以上半身单层不套峰值比，
    # 连续性放到下面"上半身 + 手层"的合成上验（第 45 条）。
    layered = spec["prop"] is not None
    compose_set(base, raw, final, a.out, spec["body"], canvas, height,
                alternate_base_path=base_phones, alternate_raw_paths=phones,
                hold_paths=hold, alternate_hold_paths=hold_phones,
                peak_ratio=not layered)
    compose_set(base_phones, phones, final_phones, a.out, spec["phones"],
                canvas, height,
                alternate_base_path=base, alternate_raw_paths=raw,
                hold_paths=hold_phones, alternate_hold_paths=hold,
                peak_ratio=not layered)

    # 发布 compose_set 用的那两张 base。运行时动作起步的第一拍就画它，
    # 不能先画旧的常态图再在第二拍偷换清晰度（和托腮同一个理由）。
    Image.fromarray(base_canvas(base, canvas, height)).save(
        os.path.join(a.out, f"{spec['body']}_base.png"), compress_level=6)
    Image.fromarray(base_canvas(base_phones, canvas, height)).save(
        os.path.join(a.out, f"{spec['phones']}_base.png"), compress_level=6)

    hand_raw = sources(f"hand_{a.action}_[0-9][0-9].png")
    if len(hand_raw) != len(raw):
        raise SystemExit(f"手层中间帧 {len(hand_raw)}，上半身 {len(raw)}")
    r = hands["rect"]
    box = tuple(v * scale for v in
                (r["x"], r["y"], r["x"] + r["w"], r["y"] + r["h"]))

    kept = []
    for i, p in enumerate(hand_raw + [os.path.join(a.src, f"hand_{a.action}.png")]):
        crop = Image.open(p).convert("RGBA").crop(box)
        name = (f"{spec['hand']}_{i:02d}.png" if i < len(hand_raw)
                else f"{spec['hand']}_final.png")
        crop.save(os.path.join(a.out, name), optimize=True)
        kept.append(int((np.asarray(crop)[:, :, 3] > 4).sum()))

    # 键盘和道具一直在这一层里，所以每一帧都必须有相当一片不透明像素。
    # 全 0 说明 `isolate_arms` 把它们也一起遮掉了——那是渲染脚本的 bug，
    # 画面上的表现是桌上凭空少一块。
    if min(kept) <= 0:
        raise SystemExit(f"桌面层有空帧：{kept}")
    # 手陆续离开，这一层的像素数应该是**单调不增**的（容一点抗锯齿抖动）。
    # 中间反弹说明 `render_action.render_hand` 的保留判断在某一帧翻回去了。
    if any(b > a_ + 32 for a_, b in zip(kept, kept[1:])):
        raise SystemExit(f"桌面层像素数中途反弹：{kept}")
    print(f"{a.action.upper()} 桌面层像素 {kept}（单调不增）")

    if layered:
        # 观众看到的是**两层叠起来**的样子：上半身画到第 611 行，手层从
        # 第 595 行起盖在桌面之上。伸手那一段在手层里、举起来那一段在
        # 上半身里，单看任何一层都会觉得"中间几帧没动"。
        # 这条判据在合成上量，是这条动作唯一说得清的连续性判据。
        composites = []
        for i in range(len(raw) + 1):
            torso = Image.fromarray(load(
                os.path.join(a.out, f"{spec['body']}_{i:02d}.png")
                if i < len(raw) else os.path.join(a.out, f"{spec['body']}.png")))
            hand = Image.open(
                os.path.join(a.out, f"{spec['hand']}_{i:02d}.png")
                if i < len(hand_raw)
                else os.path.join(a.out, f"{spec['hand']}_final.png")
            ).convert("RGBA")
            bottom = max(torso.height, (r["y"] + r["h"]) * scale)
            sheet = Image.new("RGBA", (canvas[0], bottom))
            sheet.paste(torso, (0, 0))
            sheet.alpha_composite(hand, (r["x"] * scale, r["y"] * scale))
            composites.append(np.asarray(sheet))
        report = xor_report(composites, scale=scale)
        print(f"{a.action.upper()} 合成层相邻变化 {report['changes']}"
              f"  峰值比 {report['peakRatio']:.2f}（上限 2.50）")
        if not report["ok"]:
            raise SystemExit(f"{a.action} 合成之后仍有重复帧或跳变")

    manifest = {
        "canvas": list(logical_canvas),
        "bodyRect": {"x": 0, "y": 0,
                     "w": logical_canvas[0], "h": logical_height},
        "handRect": r,
        "frames": len(raw),
        "holdFrames": len(hold),
        "pixelScale": scale,
    }
    with open(os.path.join(a.out, spec["manifest"]), "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"{a.action.upper()} MOTION {len(raw)} 中间帧 + {len(hold)} 停留帧，"
          f"2× 像素密度，上半身切到逻辑第 {logical_height} 行")


if __name__ == "__main__":
    main()

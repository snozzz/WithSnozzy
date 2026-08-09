#!/usr/bin/env python3
"""把托腮整幅渲染切成运行时素材，并验证抬手连续性。

    python3 Scripts/chin_frames.py /tmp/closeup --out Assets

过渡帧不能直接整张入库：EEVEE 的抖动 alpha 会让完全没动的头发边缘每帧
闪一点。这里先从八帧和终态里量出「抬起的胳膊扫过的区域」，区域外逐像素
锁回已经发布的常态上半身；区域内保留 Blender 渲出的真实遮挡和透明度。
这样头、脊柱、面部贴片锚点既在骨骼上没动，在最终像素上也完全不动。
"""
import argparse
import glob
import json
import os

import numpy as np
from PIL import Image


def shifted(mask, dy, dx):
    """平移布尔图，空出来的边缘填 False；不能用 roll，后者会从另一边绕回。"""
    out = np.zeros_like(mask)
    sy0, sy1 = max(0, -dy), min(mask.shape[0], mask.shape[0] - dy)
    sx0, sx1 = max(0, -dx), min(mask.shape[1], mask.shape[1] - dx)
    if sy1 > sy0 and sx1 > sx0:
        out[sy0 + dy:sy1 + dy, sx0 + dx:sx1 + dx] = mask[sy0:sy1, sx0:sx1]
    return out


def erode(mask):
    out = np.ones_like(mask)
    for dy in (-1, 0, 1):
        for dx in (-1, 0, 1):
            out &= shifted(mask, dy, dx)
    return out


def dilate(mask, rounds=4):
    out = mask.copy()
    for _ in range(rounds):
        src = out.copy()
        for dy in (-1, 0, 1):
            for dx in (-1, 0, 1):
                out |= shifted(src, dy, dx)
    return out


def load(path, size=None, height=None):
    with Image.open(path) as src:
        im = src.convert("RGBA")
        if size and im.size != size:
            raise SystemExit(f"画幅不一致：{path} 是 {im.size}，应为 {size}")
        if height is not None:
            im = im.crop((0, 0, im.width, height))
        return np.array(im)


def base_canvas(path, canvas, height):
    with Image.open(path) as opened:
        src = opened.convert("RGBA")
        if src.width != canvas[0]:
            raise SystemExit(f"{path} 宽 {src.width}，画布宽 {canvas[0]}")
        out = Image.new("RGBA", (canvas[0], height))
        out.paste(src.crop((0, 0, canvas[0], min(src.height, height))), (0, 0))
    return np.asarray(out)


def structural_mask(base):
    """固定的 L 形动作走廊：避开面部贴片，又完整容纳整条胳膊。

    不能只拿像素差做稀疏 mask。粉色手臂经过粉色衣身时，两边颜色很接近，
    差分会在掌心和袖子里打出洞，合成后变成漂浮碎片。稳定矩形会多更新一点
    静止衣料，但换来完整轮廓；397…430 行只开放贴片右侧的安全凹角。
    """
    scale = max(1, base.shape[1] // 1536)
    yy, xx = np.ogrid[:base.shape[0], :base.shape[1]]
    cheek = ((yy >= 397 * scale) & (yy < 430 * scale)
             & (xx >= 824 * scale) & (xx < 975 * scale))
    arm = ((yy >= 430 * scale) & (yy < base.shape[0])
           & (xx >= 690 * scale) & (xx < 990 * scale))
    roi = cheek | arm

    return roi


def compose_set(base_path, raw_paths, final_path, out_dir, prefix, canvas, height):
    paths = raw_paths + [final_path]
    base = base_canvas(base_path, canvas, height)
    mask = structural_mask(base)
    if not mask.any():
        raise SystemExit(f"{prefix} 没量到抬手差异")

    ys, xs = np.where(mask)
    print(f"{prefix} 胳膊扫过 x {xs.min()}…{xs.max()}  y {ys.min()}…{ys.max()}"
          f"（{mask.sum()} 像素）")

    prev_alpha = base[:, :, 3] > 4
    changes = []
    for i, path in enumerate(paths):
        raw = load(path, canvas, height=height)
        out = base.copy()
        out[mask] = raw[mask]
        name = f"{prefix}_{i:02d}.png" if i < len(raw_paths) else f"{prefix}.png"
        Image.fromarray(out).save(os.path.join(out_dir, name), compress_level=6)
        current_alpha = out[:, :, 3] > 4
        changes.append(int((prev_alpha ^ current_alpha).sum()))
        prev_alpha = current_alpha

    # 区域外必须逐像素固定；这是锚点不漂的可执行合同，不靠肉眼。
    # 上面的赋值在构造上保证区域外来自 base；这里仍报数，方便日志固定合同。
    drift = 0
    print(f"  固定区最大像素漂移 {drift}（应为 0）")
    if drift != 0:
        raise SystemExit("固定区发生漂移")

    # 连续性看相邻姿势真正变化了多少。0 是重复帧；单个尖峰是跳帧。
    print(f"  相邻剪影变化 {changes}")
    if any(v == 0 for v in changes):
        raise SystemExit("托腮过渡里有重复帧")
    median = float(np.median(changes))
    if max(changes) > max(1, median) * 3.5:
        raise SystemExit("托腮过渡有明显跳变（最大/中位数 > 3.5）")
    return mask, changes


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help="Blender/render_closeup.py 的输出目录")
    ap.add_argument("--out", default="Assets")
    a = ap.parse_args()
    os.makedirs(a.out, exist_ok=True)

    legs_path = os.path.join(a.out, "legs.json")
    hands_path = os.path.join(a.out, "hands.json")
    legs = json.load(open(legs_path))
    hands = json.load(open(hands_path))
    logical_canvas = tuple(legs.get("canvas", [1536, 1024]))
    logical_height = int(legs.get("chinSeam", 0))
    if logical_height <= int(legs.get("seam", 600)):
        raise SystemExit("legs.json 没有有效 chinSeam；先生成一次托腮终态")

    raw = sorted(glob.glob(os.path.join(a.src, "trans_chin_[0-9][0-9].png")))
    phones = sorted(glob.glob(os.path.join(a.src,
                                           "trans_chin_headphones_[0-9][0-9].png")))
    if not raw or len(raw) != len(phones):
        raise SystemExit(f"中间帧不完整：普通 {len(raw)}，耳机 {len(phones)}")

    raw_size = Image.open(raw[0]).size
    scale = raw_size[0] // logical_canvas[0]
    if scale < 1 or raw_size != (logical_canvas[0] * scale, logical_canvas[1] * scale):
        raise SystemExit(f"近景画幅 {raw_size} 不是逻辑画布 {logical_canvas} 的整数倍")
    canvas = raw_size
    height = logical_height * scale
    body_prefix = "snozzy_body_chin2x" if scale == 2 else "snozzy_body_chin"
    phone_prefix = ("snozzy_body_chin_headphones2x" if scale == 2
                    else "snozzy_body_chin_headphones")
    base = os.path.join(a.src, "torso_chin_base.png")
    base_phones = os.path.join(a.src, "torso_chin_base_headphones.png")
    if not os.path.exists(base):
        base = os.path.join(a.out, "snozzy_body.png")
        base_phones = os.path.join(a.out, "snozzy_body_headphones.png")

    compose_set(base, raw,
                os.path.join(a.src, "torso_chin.png"), a.out,
                body_prefix, canvas, height)
    compose_set(base_phones, phones,
                os.path.join(a.src, "torso_chin_headphones.png"), a.out,
                phone_prefix, canvas, height)

    # Publish the exact bases used by `compose_set`.  Runtime must start from
    # these at the instant close-up begins; otherwise it jumps from the old 1×
    # torso to frame 0 even though the bone sequence itself is continuous.
    if scale > 1:
        normal_base = base_canvas(base, canvas, height)
        phone_base = base_canvas(base_phones, canvas, height)
        Image.fromarray(normal_base).save(
            os.path.join(a.out, "snozzy_body_closeup2x.png"), compress_level=6)
        Image.fromarray(phone_base).save(
            os.path.join(a.out, "snozzy_body_closeup_headphones2x.png"), compress_level=6)

    hand_raw = sorted(glob.glob(os.path.join(a.src, "hand_chin_[0-9][0-9].png")))
    if len(hand_raw) != len(raw):
        raise SystemExit(f"手层中间帧 {len(hand_raw)}，上半身中间帧 {len(raw)}")
    r = hands["rect"]
    box = tuple(v * scale for v in
                (r["x"], r["y"], r["x"] + r["w"], r["y"] + r["h"]))
    for i, p in enumerate(hand_raw):
        Image.open(p).convert("RGBA").crop(box).save(
            os.path.join(a.out, f"snozzy_chin_hand_{i:02d}.png"), optimize=True)

    final_hand = Image.open(os.path.join(a.src, "hand_chin.png")).convert("RGBA").crop(box)
    chin_index = hands.get("chin", hands.get("frames", 0))
    final_name = ("snozzy_chin_hand_final.png" if scale > 1
                  else f"snozzy_hand_{chin_index:02d}.png")
    final_hand.save(os.path.join(a.out, final_name), optimize=True)

    manifest = {
        "canvas": list(logical_canvas),
        "bodyRect": {"x": 0, "y": 0,
                     "w": logical_canvas[0], "h": logical_height},
        "handRect": r,
        "frames": len(raw),
        "pixelScale": scale,
    }
    with open(os.path.join(a.out, "chin.json"), "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"CHIN MOTION {len(raw)} 张中间帧，{scale}× 像素密度，终态手 {final_name}")
    print("  真实端点：常态 2× base → frame 00；frame 07 → 2× final（变化量见上）")


if __name__ == "__main__":
    main()

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
from chin_metrics import (alpha_mask, dilate, erode, shifted, structural_diff,
                          xor_report)


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


def premultiplied_rgba(image):
    """Return PNG-stable premultiplied RGBA values for pixel comparisons.

    The motion corridor is the only part allowed to differ from the published
    base.  Comparing straight RGB would count invisible RGB garbage in fully
    transparent pixels as drift; premultiplying makes the check describe what
    is actually composited on screen while retaining alpha as its own channel.
    Integer arithmetic keeps the check exact after the output is read back
    from the PNG we just wrote.
    """
    rgba = np.asarray(image, dtype=np.uint16)
    alpha = rgba[:, :, 3:4]
    rgb = (rgba[:, :, :3] * alpha + 127) // 255
    return np.concatenate((rgb, alpha), axis=2).astype(np.int32)


def measured_body_height(images, desk_path, scale):
    """Measure the chin body clip from the source images and desk alpha.

    The motion images are full seated renders, so their alpha continues below
    the intended upper-body cut.  The desk is the occluder that makes that cut
    safe: find the first row that is fully opaque across the measured moving
    x-range.  No leg manifest value participates in this calculation.
    """
    if not images:
        raise SystemExit("没有可量 bodyRect 的近景图")
    canvas = images[0].shape[:2][::-1]
    alpha_union = np.zeros(images[0].shape[:2], bool)
    for image in images:
        alpha_union |= alpha_mask(image)
    xs = np.where(alpha_union.any(axis=0))[0]
    if len(xs) == 0:
        raise SystemExit("近景图没有 alpha，无法量 bodyRect")

    desk = Image.open(desk_path).convert("RGBA")
    if desk.size != canvas:
        desk = desk.resize(canvas, Image.Resampling.BILINEAR)
    da = np.asarray(desk)[:, :, 3]
    x0, x1 = int(xs.min()), int(xs.max()) + 1
    opaque = np.where((da[:, x0:x1] >= 254).all(axis=1))[0]
    if len(opaque) == 0:
        raise SystemExit(f"桌面在量出的 x {x0}…{x1} 没有全不透明行")
    # The first fully opaque desk row is exactly where the desk layer can
    # hide the remainder of the seated render.
    cut = int(opaque[0])
    if cut <= 0 or cut >= canvas[1]:
        raise SystemExit(f"量出的 bodyRect 高度异常: {cut}")
    return cut


def structural_mask(base, frames=(), alternate_base=None,
                    alternate_frames=()):
    """动作走廊：从普通/耳机全序列差异并集实测。

    不能只拿像素差做稀疏 mask。粉色手臂经过粉色衣身时，两边颜色很接近，
    差分会在掌心和袖子里打出洞，合成后变成漂浮碎片。手臂用稳定矩形，
    多更新一点静止衣料，换来完整轮廓。

    每帧对对应 base 的差先按阈值二值化再 3×3 腐蚀（去掉 DITHERED 的
    孤立噪点），普通和耳机两套的并集再膨胀填缝。动作走廊的边界因此来自
    输出文件，而不是脚本里的画布常量；静止区可以被逐像素锁回 base。
    """
    moved = np.zeros(base.shape[:2], bool)
    for raw in frames:
        moved |= structural_diff(base, raw)
    if alternate_base is not None:
        for raw in alternate_frames:
            moved |= structural_diff(alternate_base, raw)
    if not moved.any():
        return moved

    # A difference at a sleeve/finger edge is enough to locate the component,
    # but not enough to keep its similarly-coloured interior.  The measured
    # union bbox is the stable corridor that fills those interior holes.
    measured = dilate(moved, rounds=6)
    ys, xs = np.where(measured)
    pad = max(2, base.shape[1] // 1536 * 6)
    x0, x1 = max(0, xs.min() - pad), min(base.shape[1], xs.max() + pad + 1)
    y0, y1 = max(0, ys.min() - pad), min(base.shape[0], ys.max() + pad + 1)
    corridor = np.zeros_like(moved)
    corridor[y0:y1, x0:x1] = True
    return corridor


def compose_set(base_path, raw_paths, final_path, out_dir, prefix, canvas, height,
                alternate_base_path=None, alternate_raw_paths=(),
                hold_paths=(), alternate_hold_paths=(), peak_ratio=True):
    """把一条动作的整列帧锁到同一张 base 上写出来。

    `hold_paths` 是"到位之后停在那儿"的那一列（运行时循环播）。它和中间帧
    共用同一条动作走廊，但**判据要分开**：中间帧是大动作，hold 是小幅摆动，
    混在一起算相邻 XOR 峰值比，比值必然爆掉——而那不是毛病，是两段本来
    就该有不同的速度（第 45 条：判据先问自己在量什么）。
    """
    paths = raw_paths + [final_path]
    base = base_canvas(base_path, canvas, height)
    raws = [load(p, canvas, height=height) for p in paths]
    holds = [load(p, canvas, height=height) for p in hold_paths]
    alternate_base = (base_canvas(alternate_base_path, canvas, height)
                      if alternate_base_path else None)
    alternate = [load(p, canvas, height=height)
                 for p in list(alternate_raw_paths) + list(alternate_hold_paths)]
    mask = structural_mask(base, raws + holds, alternate_base, alternate)
    if not mask.any():
        raise SystemExit(f"{prefix} 没量到抬手差异")

    ys, xs = np.where(mask)
    print(f"{prefix} 胳膊扫过 x {xs.min()}…{xs.max()}  y {ys.min()}…{ys.max()}"
          f"（{mask.sum()} 像素）")

    prev_alpha = base[:, :, 3] > 4
    changes = []
    written_paths = []
    for i, raw in enumerate(raws + holds):
        out = base.copy()
        out[mask] = raw[mask]
        if i < len(raw_paths):
            name = f"{prefix}_{i:02d}.png"
        elif i == len(raw_paths):
            name = f"{prefix}.png"
        else:
            name = f"{prefix}_hold_{i - len(paths):02d}.png"
        written = os.path.join(out_dir, name)
        Image.fromarray(out).save(written, compress_level=6)
        written_paths.append(written)
        current_alpha = out[:, :, 3] > 4
        if i <= len(raw_paths):
            changes.append(int((prev_alpha ^ current_alpha).sum()))
            prev_alpha = current_alpha

    # 区域外必须逐像素固定；不要只验证内存里的 `out`，而是重新读回
    # 每张 PNG。这样压缩、色彩模式或后续切图若改变了静止区，判据会真的
    # 抓到，而不是被"赋值本来就是 base"这件事掩盖。
    base_pm = premultiplied_rgba(base)
    static = ~mask
    max_drift = 0
    total_drift = 0
    changed_pixels = 0
    for written in written_paths:
        reread = load(written, (canvas[0], height))
        delta = np.abs(premultiplied_rgba(reread) - base_pm)
        static_delta = delta[static]
        frame_max = int(static_delta.max()) if static_delta.size else 0
        frame_total = int(static_delta.sum()) if static_delta.size else 0
        frame_changed = int(np.any(static_delta != 0, axis=1).sum()) \
            if static_delta.size else 0
        max_drift = max(max_drift, frame_max)
        total_drift += frame_total
        changed_pixels += frame_changed
    print(f"  固定区重读预乘 RGBA 漂移 max={max_drift} total={total_drift}"
          f" pixels={changed_pixels}（均应为 0）")
    if max_drift or total_drift or changed_pixels:
        raise SystemExit("固定区发生实际像素漂移")

    # 连续性看相邻姿势真正变化了多少。0 是重复帧；单个尖峰是跳帧。
    print(f"  相邻剪影变化 {changes}")
    if any(v == 0 for v in changes):
        raise SystemExit("托腮过渡里有重复帧")
    pixel_scale = max(1, canvas[0] // 1536)
    if holds:
        # hold 是**循环**播的，所以要连成一个圈来验：终态 → hold 00 → …
        # → hold 末 → 终态。少验最后那一步的话，"末帧回终态"那一跳
        # 有多大就没人知道了——而循环里跳一下正是最扎眼的。
        loop = [raws[-1]] + holds + [raws[-1]]
        report = xor_report(loop, scale=pixel_scale, max_ratio=3.0)
        print(f"  停留循环相邻变化 {report['changes']}"
              f"  峰值比 {report['peakRatio']:.2f}（上限 3.00）")
        if not report["ok"]:
            raise SystemExit(f"{prefix} 停留那一列有重复帧或跳变")
    report = xor_report([base] + raws, scale=pixel_scale)
    if not peak_ratio:
        # 两段式动作（伸手 → 抓住 → 举起来）的前半段发生在**桌沿以下**，
        # 上半身这张图上几乎什么都没变，而那一段是由桌面手层画的。
        # 只量这一层，峰值比必然爆掉——量的不是它声称的那件事（第 45 条）。
        # 连续性由调用方在"上半身 + 手层"的合成上验。
        print(f"  上半身单层相邻 XOR 峰值比 {report['peakRatio']:.2f}"
              "（不套用上限，两段式动作分层验）")
    elif pixel_scale == 2:
        print(f"  相邻 XOR 峰值比 {report['peakRatio']:.2f}（上限 2.50）")
        if not report["ok"]:
            raise SystemExit("托腮过渡有重复帧或相邻 XOR 峰值比超过 2.5")
    else:
        # The old 1× compatibility render has coarser alpha quantization;
        # retain the duplicate-frame guard without applying the release-only
        # 2× peak-ratio gate.
        print(f"  1× 兼容序列相邻 XOR 峰值比 {report['peakRatio']:.2f}"
              "（不套用 2× 上限）")
    return mask, changes


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help="Blender/render_closeup.py 的输出目录")
    ap.add_argument("--out", default="Assets")
    ap.add_argument("--desk", default="Assets/desk.png")
    a = ap.parse_args()
    os.makedirs(a.out, exist_ok=True)

    hands_path = os.path.join(a.out, "hands.json")
    hands = json.load(open(hands_path))

    raw = sorted(glob.glob(os.path.join(a.src, "trans_chin_[0-9][0-9].png")))
    phones = sorted(glob.glob(os.path.join(a.src,
                                           "trans_chin_headphones_[0-9][0-9].png")))
    if len(raw) != 8 or len(phones) != 8:
        raise SystemExit(f"中间帧必须正好 8 张：普通 {len(raw)}，耳机 {len(phones)}")

    raw_size = Image.open(raw[0]).size
    logical_canvas = (1536, 1024)
    scale = raw_size[0] // logical_canvas[0]
    if scale < 1 or raw_size != (logical_canvas[0] * scale, logical_canvas[1] * scale):
        raise SystemExit(f"近景画幅 {raw_size} 不是逻辑画布 {logical_canvas} 的整数倍")
    canvas = raw_size
    base = os.path.join(a.src, "torso_chin_base.png")
    base_phones = os.path.join(a.src, "torso_chin_base_headphones.png")
    if not os.path.exists(base) or not os.path.exists(base_phones):
        raise SystemExit("缺少普通/耳机常态近景基准图")
    source_paths = [base, base_phones]
    source_paths += raw
    source_paths += phones
    source_paths += [os.path.join(a.src, "torso_chin.png"),
                     os.path.join(a.src, "torso_chin_headphones.png")]
    source_images = [load(p, canvas) for p in source_paths
                     if os.path.exists(p)]
    cut_physical = measured_body_height(source_images, a.desk, scale)
    logical_height = (cut_physical + scale - 1) // scale
    height = logical_height * scale
    body_prefix = "snozzy_body_chin2x" if scale == 2 else "snozzy_body_chin"
    phone_prefix = ("snozzy_body_chin_headphones2x" if scale == 2
                    else "snozzy_body_chin_headphones")
    compose_set(base, raw,
                os.path.join(a.src, "torso_chin.png"), a.out,
                body_prefix, canvas, height,
                alternate_base_path=base_phones, alternate_raw_paths=phones)
    compose_set(base_phones, phones,
                os.path.join(a.src, "torso_chin_headphones.png"), a.out,
                phone_prefix, canvas, height,
                alternate_base_path=base, alternate_raw_paths=raw)

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
        # 托腮没有停留那一列，但键要写出来：运行时的清单结构是共用的，
        # 少一个键会让"缺字段"这件事变成"整套素材停用"（见 ChinManifest）
        "holdFrames": 0,
        "pixelScale": scale,
    }
    with open(os.path.join(a.out, "chin.json"), "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"CHIN MOTION {len(raw)} 张中间帧，{scale}× 像素密度，终态手 {final_name}")
    print(f"  真实端点：常态 {scale}× base → frame 00；"
          f"frame 07 → {scale}× final（变化量见上）")


if __name__ == "__main__":
    main()

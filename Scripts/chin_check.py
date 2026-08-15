#!/usr/bin/env python3
"""托腮那张上半身能不能直接换上去，量出来。

    python3 Scripts/chin_check.py /tmp/closeup --assets Assets
    python3 Scripts/chin_check.py /tmp/closeup2x --assets Assets --facechin /tmp/facechin2x

近景终态的头是歪的（`pose.CHIN_HEAD_ROLL`），面部贴片在终态上重渲
（facechin2x）。旧的「贴片矩形里托腮图和常态图必须没差异」因此不再成立
——脸整个动了。新合同是：**托腮终态和贴片的底图必须是同一个姿势**，
在每块 facechin 贴片矩形里逐像素一致（结构性）；一致了，贴片盖上去
就严丝合缝，手在矩形里也无所谓（两边的手像素相同）。

`Blender/measure_chin.py` 在 3D 里查过一遍（快，不用渲染），这里是渲完
之后在**真正上屏的像素**上再查一遍。两处都要有：3D 那次查的是手部网格，
但画面上还有头发、袖子这些跟着手一起动的东西，只有像素查得到。

三条判据：

1. **每块 facechin 贴片矩形里，托腮终态和贴片底图（--facechin 目录的
   _base.png）没有结构性差异。** 给了 --facechin 且尺度匹配才查；
   1× 兼容那一趟没有贴片，跳过。
2. **缝线以下必须没有结构性差异**——缝线以下画的是另外渲的腿图，
   托腮那张只取缝线以上，两者在缝线处要接得上。
3. **托腮的手那一层，剪影得是常态那一层的子集**：托腮时一只手离开键盘，
   留下的那只应该原样不动。多出来的像素就是"抬起来的手漏到桌面层上面了"。

"结构性差异"不能用最大像素差（第 15 条）：EEVEE 的抖动 alpha 会在头发
边缘留下几百个孤立像素，最大差能到 700 多。要先按阈值二值化再做 3×3 腐蚀，
孤立噪点被腐蚀掉、成片的真差异留得住。
"""
import argparse
import json
import os
import sys

import numpy as np
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from chin_metrics import (alpha_mask, erode, structural_diff, silhouette_xor,
                          xor_report)


EXPECTED_FACE_PATCHES = {
    "look_left": "eye", "look_right": "eye", "look_down": "eye",
    "look_up": "eye", "eye_smile": "eye", "eye_soft": "eye",
    "eye_wide": "eye", "eye_sad": "eye", "blink_half": "eye",
    "blink_shut": "eye", "smile": "mouth", "mouth_open": "mouth",
    "mouth_o": "mouth",
}


def diff(a, b, threshold=150):
    return structural_diff(a, b, threshold)


def load(path):
    return np.asarray(Image.open(path).convert("RGBA"))


def require_paths(paths, label):
    missing = [path for path in paths if not os.path.exists(path)]
    if missing:
        print(f"✗ {label}缺少 {len(missing)} 个文件：")
        for path in missing:
            print(f"  - {path}")
        raise SystemExit(1)


def validate_rect(rect, canvas, label):
    if not isinstance(rect, dict) or not all(k in rect for k in ("x", "y", "w", "h")):
        raise SystemExit(f"✗ {label} 不是完整 rect")
    x, y, w, h = (rect[k] for k in ("x", "y", "w", "h"))
    if any(not isinstance(v, int) for v in (x, y, w, h)):
        raise SystemExit(f"✗ {label} rect 必须是整数：{rect}")
    if x < 0 or y < 0 or w <= 0 or h <= 0:
        raise SystemExit(f"✗ {label} rect 有负数或空尺寸：{rect}")
    if x + w > canvas[0] or y + h > canvas[1]:
        raise SystemExit(f"✗ {label} rect 越过画布 {canvas}：{rect}")


def validate_facechin_assets(asset_dir):
    """Validate the complete published 2× facechin contract.

    This is intentionally independent of an optional Blender source directory:
    a source render can be omitted, but a partial manifest or a missing PNG must
    never make the runtime silently accept half of a chin motion.
    """
    manifest_path = os.path.join(asset_dir, "facechin2x.json")
    require_paths([manifest_path], "facechin 清单")
    try:
        manifest = json.load(open(manifest_path))
    except (OSError, ValueError) as exc:
        raise SystemExit(f"✗ facechin 清单无法读取：{exc}")

    canvas = manifest.get("canvas")
    if canvas != [3072, 2048]:
        raise SystemExit(f"✗ facechin 顶层画布应为 [3072, 2048]，实际 {canvas}")
    if manifest.get("frames") != 9 or len(manifest.get("sets", [])) != 9:
        raise SystemExit("✗ facechin 必须正好有 9 帧清单")

    expected_keys = set(EXPECTED_FACE_PATCHES)
    for i, frame in enumerate(manifest["sets"]):
        if frame.get("canvas") != canvas:
            raise SystemExit(f"✗ facechin frame {i:02d} canvas 与顶层不一致")
        patches = frame.get("patches")
        channels = frame.get("channels")
        if not isinstance(patches, dict) or set(patches) != expected_keys:
            raise SystemExit(f"✗ facechin frame {i:02d} 必须完整包含 13 个贴片")
        if channels != EXPECTED_FACE_PATCHES:
            raise SystemExit(f"✗ facechin frame {i:02d} channels 不完整或不匹配")
        for name in sorted(expected_keys):
            rect = patches[name]
            validate_rect(rect, canvas, f"facechin frame {i:02d} {name}")
            path = os.path.join(asset_dir, f"facechin2x_{i:02d}_{name}.png")
            require_paths([path], f"facechin frame {i:02d} {name}")
            try:
                size = Image.open(path).size
            except OSError as exc:
                raise SystemExit(f"✗ {path} 无法读取：{exc}")
            expected_size = (rect["w"], rect["h"])
            if size != expected_size:
                raise SystemExit(f"✗ {path} 尺寸 {size}，应为 {expected_size}")
    return manifest


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help="render_closeup.py 的输出目录")
    ap.add_argument("--assets", default="Assets")
    ap.add_argument("--seam", type=int, default=600)
    ap.add_argument("--facechin", default=None,
                    help="render_face.py … chin 的输出目录（含 _base_00.png…08）")
    a = ap.parse_args()

    base_path = os.path.join(a.src, "torso_chin_base.png")
    middle = [os.path.join(a.src, f"trans_chin_{i:02d}.png")
              for i in range(8)]
    final_path = os.path.join(a.src, "torso_chin.png")
    phone_base_path = os.path.join(a.src, "torso_chin_base_headphones.png")
    phone_middle = [os.path.join(a.src, f"trans_chin_headphones_{i:02d}.png")
                    for i in range(8)]
    phone_final_path = os.path.join(a.src, "torso_chin_headphones.png")
    hand_middle = [os.path.join(a.src, f"hand_chin_{i:02d}.png")
                   for i in range(8)]
    hand_final = os.path.join(a.src, "hand_chin.png")

    # A rendered close-up is one atomic source set.  Missing frames used to be
    # silently skipped below, which made a partial render look like a valid
    # action.  Require ordinary, headphones, and desk-hand branches before
    # reading any pixels.
    require_paths(
        [base_path, *middle, final_path,
         phone_base_path, *phone_middle, phone_final_path,
         *hand_middle, hand_final],
        "托腮渲染序列")

    body_paths = [base_path, *middle, final_path]
    phone_paths = [phone_base_path, *phone_middle, phone_final_path]
    body_images = [load(path) for path in body_paths]
    phone_images = [load(path) for path in phone_paths]
    chin = body_images[-1]
    scale_x = chin.shape[1] / 1536
    scale_y = chin.shape[0] / 1024
    if scale_x != scale_y or scale_x < 1 or int(scale_x) != scale_x:
        raise SystemExit(f"✗ 托腮画幅不是逻辑画布整数倍：{chin.shape}")
    scale = int(scale_x)
    if scale not in (1, 2):
        raise SystemExit(f"✗ 只支持 1×/2× 托腮渲染，实际 {scale}×")
    expected_canvas = (1536 * scale, 1024 * scale)
    for path, image in zip(body_paths + phone_paths, body_images + phone_images):
        if image.shape[:2][::-1] != expected_canvas:
            raise SystemExit(f"✗ {path} 画幅 {image.shape[:2][::-1]}，应为 {expected_canvas}")
    normal = body_images[0]

    hand_images = [load(path) for path in [*hand_middle, hand_final]]
    # render_closeup emits full-canvas hand layers.  chin_frames.py is the
    # stage that crops them to `handRect` for the published runtime PNGs.
    expected_hand = expected_canvas
    for path, image in zip([*hand_middle, hand_final], hand_images):
        if image.shape[:2][::-1] != expected_hand:
            raise SystemExit(f"✗ {path} 画幅 {image.shape[:2][::-1]}，应为 {expected_hand}")

    # The historical 1× render is a compatibility/source check only.  It is
    # intentionally allowed to run while Assets/chin.json already describes
    # the published 2× bundle, and it has no facechin source or manifest.
    # Only a 2× source is a release-contract check: require chin.json's 2×
    # metadata and the complete published facechin 9×13 set there.
    fc = None
    if scale == 2:
        try:
            chin_manifest = json.load(open(os.path.join(a.assets, "chin.json")))
        except (OSError, ValueError) as exc:
            raise SystemExit(f"✗ 2× 严格模式需要 chin.json：{exc}")
        logical_canvas = chin_manifest.get("canvas")
        if logical_canvas != [1536, 1024]:
            raise SystemExit(f"✗ chin.json 画布应为 [1536, 1024]，实际 {logical_canvas}")
        if chin_manifest.get("frames") != 8:
            raise SystemExit("✗ chin.json 必须声明 8 张中间帧")
        if chin_manifest.get("pixelScale") != 2:
            raise SystemExit(f"✗ 2× 严格模式要求 chin.json pixelScale=2，实际 "
                             f"{chin_manifest.get('pixelScale')}")
        body_rect = chin_manifest.get("bodyRect")
        hand_rect = chin_manifest.get("handRect")
        validate_rect(body_rect, logical_canvas, "chin bodyRect")
        validate_rect(hand_rect, logical_canvas, "chin handRect")
        # Validate the published face set even when no Blender face source is
        # supplied. Runtime must never accept a manifest with a missing patch.
        fc = validate_facechin_assets(a.assets)
    else:
        logical_canvas = [1536, 1024]
        body_rect = {"x": 0, "y": 0, "w": 1536, "h": 1024}
        hand_rect = {"x": 0, "y": 0, "w": 1536, "h": 1024}
    if body_rect["x"] != 0 or body_rect["y"] != 0 \
            or body_rect["w"] != 1536:
        raise SystemExit(f"✗ chin bodyRect 必须从 x=0 覆盖全宽：{body_rect}")
    if hand_rect["x"] < 0 or hand_rect["y"] < 0:
        raise SystemExit(f"✗ chin handRect 越界：{hand_rect}")

    ok = True
    d = diff(normal, chin)
    if not d.any():
        raise SystemExit("✗ 托腮图和常态图完全一样——姿势根本没生效")

    # The entire 00…08 sequence must contain real silhouette changes.  A
    # duplicate frame is a missing render, not a harmless still pose.
    sequence = body_images
    report = xor_report(sequence, scale=scale)
    if scale == 2:
        print(f"00…08 相邻 XOR {report['changes']}，峰值比 "
              f"{report['peakRatio']:.2f}（上限 2.50）")
        ok &= bool(report["ok"])
        if not report["ok"]:
            print("  ✗ 中间帧重复或相邻变化峰值过大")
        else:
            print("  ✓ 00…08 均有变化且相邻峰值受控")
    else:
        # The 1× compatibility render predates the 2× motion contract.  Keep
        # its useful source check (every transition must move), but do not
        # apply the release-only 2× peak-ratio gate to its differently
        # quantized silhouette.
        moving = all(v > 0 for v in report["changes"])
        print(f"1× 00…08 相邻 XOR {report['changes']}"
              + ("  ✓ 每帧均有变化" if moving else "  ✗ 含重复帧"))
        ok &= moving

    # --- 1. 终态和贴片底图必须是同一个姿势 ------------------------------
    # 贴片在托腮终态上重渲（头歪、手贴脸），运行时只在终态那一档贴。
    # 合同因此是"两边同一姿势"：每块贴片矩形里，终态图和贴片底图
    # 逐像素一致（结构性），贴上去才严丝合缝。
    # `validate_facechin_assets` above already checked the published 9×13
    # contract.  If a Blender source was supplied, require its complete nine
    # neutral bases and compare each one against its matching body frame.
    if a.facechin:
        if scale != 2:
            raise SystemExit("✗ --facechin 只能和 2× 托腮渲染一起使用")
        face_bases = [os.path.join(a.facechin, f"_base_{i:02d}.png")
                      for i in range(9)]
        face_variants = [os.path.join(a.facechin, f"_{i:02d}_{name}.png")
                         for i in range(9)
                         for name in EXPECTED_FACE_PATCHES]
        require_paths([*face_bases, *face_variants], "facechin 源渲染")
        print("面部贴片（00…08 各自和匹配底图同姿势）：")
        worst = 0
        face_body_paths = middle + [final_path]
        for i, body_path in enumerate(face_body_paths):
            frame_base = face_bases[i]
            frame_body = load(body_path)
            fbase = load(frame_base)
            if fbase.shape != frame_body.shape:
                raise SystemExit(f"✗ facechin frame {i:02d} 画幅不一致")
            db = diff(fbase, frame_body)
            frame_worst = 0
            for name, rect in sorted(fc["sets"][i]["patches"].items()):
                hit = int(db[rect["y"]:rect["y"] + rect["h"],
                             rect["x"]:rect["x"] + rect["w"]].sum())
                frame_worst = max(frame_worst, hit)
            worst = max(worst, frame_worst)
            if frame_worst:
                ok = False
                print(f"  ✗ frame {i:02d} 差 {frame_worst} 个像素")
        if worst == 0:
            print("  ✓ 9 帧贴片矩形逐像素一致")

    # --- 2. 托腮那张要一直切到桌子盖住为止 ------------------------------
    # 常态的上半身切在 y=600（腿部姿势的差异从那行起），托腮这张不行：
    # 抬起来那条胳膊的袖子一路伸到 y=644。切在 600 的话，600 以下画的是
    # 另外渲的腿图（没有那条袖子），袖子就被齐齐削掉一截。
    #
    # 桌面层能盖住一部分，但**不是从 600 就盖得住**：实测那一带 alpha
    # 从 y=601 才开始有值、y=611 才满值，中间十行是半透明的渐变带
    # （桌沿那道由虚到实的窄带，和第 26 条同一处）。所以托腮这张要一直切到
    # 桌子完全不透明的那一行，剩下的才交给桌子挡。
    ys, xs = np.where(d)
    need = int(ys.max()) + 1
    desk_image = Image.open(os.path.join(a.assets, "desk.png")).convert("RGBA")
    if desk_image.size != (chin.shape[1], chin.shape[0]):
        desk_image = desk_image.resize((chin.shape[1], chin.shape[0]), Image.Resampling.BILINEAR)
    desk = np.asarray(desk_image)
    cover = desk[:, int(xs.min()):int(xs.max()) + 1, 3]
    opaque = np.where((cover >= 254).all(axis=1))[0]
    chin_seam = int(opaque.min()) if len(opaque) else need
    enough = chin_seam <= need
    ok &= enough
    print(f"托腮的胳膊伸到逻辑第 {(need - 1) / scale:.0f} 行；桌子在逻辑 x "
          f"{xs.min() / scale:.0f}…{xs.max() / scale:.0f} 这一段"
          f"从第 {chin_seam / scale:.0f} 行起完全不透明")
    print(f"  → 托腮那张上半身要切到逻辑第 {chin_seam / scale:.0f} 行"
          f"（常态那张切在 {a.seam}）  "
          + ("✓" if enough else "✗ 桌子盖不住，袖子会被削掉一截"))

    print(f"  改动落在 x {xs.min()}…{xs.max()}  y {ys.min()}…{ys.max()}"
          f"（{len(ys)} 个像素，占全图 {len(ys) / d.size * 100:.2f}%）")

    # --- 3. 托腮的手是常态那一层的子集 ---------------------------------
    chin_hand = os.path.join(a.src, "hand_chin.png")
    # render_closeup names the first motion-layer sample hand_chin_00; the
    # old hand_00 name belonged to the pre-2× pipeline and is not emitted by
    # the production renderer anymore.
    ref_hand = os.path.join(a.src, "hand_chin_00.png")
    c = load(chin_hand)[:, :, 3] > 4
    r = load(ref_hand)[:, :, 3] > 4
    # These are already the cropped desk-hand layers.  Comparing them in
    # their local rect avoids accidentally indexing a logical canvas row
    # (the old check used seam=600 on a 90-pixel-high crop and always saw
    # an empty image).
    extra = int(erode(c & ~r).sum())
    gone = int(erode(r & ~c).sum())
    # **别报"还剩百分之几"**：这一层里最大的一块是键盘（两张里一模一样），
    # 它会把比例稀释到看不出问题——第一版报"还剩 79%"，听着像少了一只手，
    # 其实两只手都在，79% 里有大半是键盘。要报的是**变化量**本身。
    sub = extra == 0 and gone > 1000
    ok &= sub
    print(f"托腮时手那一层：少了 {gone} 个像素（抬起来的那只手）、"
          f"多了 {extra} 个  "
          + ("✓ 是常态那一层的子集" if sub
             else "✗ 抬起来的手漏到桌面层上面了" if extra
             else "✗ 那只手根本没抬起来"))

    # --- 4. 库里那张是不是这次渲的 -------------------------------------
    # 这条是补第 70 条那个洞。上面所有判据的输入**都是刚渲出来的图**，
    # 于是"`pose.py` 改了、素材忘了重出"这件事一条都查不到：代码对、
    # 判据全绿、画面还是老样子。实测那次差了 3461 个结构性像素。
    #
    # 所以这里回头看一眼 `Assets/`：把这次渲的终态按发布时的缝线切一刀，
    # 和库里那张比。**应该逐像素相同**——它本来就该是同一次渲的产物。
    published = os.path.join(a.assets, "snozzy_body_chin2x.png" if scale == 2
                             else "snozzy_body_chin.png")
    if not os.path.exists(published):
        ok = False
        print(f"✗ 库里没有 {published}——先发布一次素材")
    else:
        have = load(published)
        rows = have.shape[0]
        if have.shape[1] != chin.shape[1] or rows > chin.shape[0]:
            ok = False
            print(f"✗ {published} 是 {have.shape[:2][::-1]}，"
                  f"和这次渲的 {chin.shape[:2][::-1]} 对不上")
        else:
            stale = int(diff(chin[:rows], have).sum())
            ok &= stale == 0
            print(f"库里的终态 vs 这次渲的：差 {stale} 个结构性像素  "
                  + ("✓ 素材就是这份代码渲的"
                     if stale == 0 else
                     "✗ 素材比代码旧（第 70 条）——把近景那整段重出一遍"))

    print("CHIN " + ("全部通过" if ok else "有不合格项"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""把 3D 渲染结果用 img2img 重绘成手绘质感。

3D 渲染和手绘背景之间最后剩下的差距是**表面质感**：渲染出来的衣服
是光滑的色块，而画出来的书本有笔触。色调匹配和布光能解决"贴纸感"，
解决不了这个。

img2img 在低强度下只改表面不改结构，正好对症。强度是唯一要紧的旋钮：
太低没效果，太高会把角色改成另一个人。

alpha 要单独伺候：扩散模型只吃 RGB，所以先把角色合到一块接近房间色的
底色上，重绘完再把原始 alpha 贴回去，并往内收一圈避免边缘挂上底色。
"""
import argparse, sys
import numpy as np
from PIL import Image

BACKDROP = (74, 58, 48)      # 房间的暖褐色，边缘混色时不会太跳


def erode_alpha(alpha, px):
    a = alpha.copy()
    for _ in range(px):
        b = a.copy()
        b[1:, :] = np.minimum(b[1:, :], a[:-1, :])
        b[:-1, :] = np.minimum(b[:-1, :], a[1:, :])
        b[:, 1:] = np.minimum(b[:, 1:], a[:, :-1])
        b[:, :-1] = np.minimum(b[:, :-1], a[:, 1:])
        a = b
    return a


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("source")
    ap.add_argument("--out", required=True)
    ap.add_argument("--strength", type=float, default=0.35)
    ap.add_argument("--steps", type=int, default=30)
    ap.add_argument("--size", type=int, default=512)
    ap.add_argument("--seed", type=int, default=7)
    ap.add_argument("--model", default="Lykon/dreamshaper-8")
    a = ap.parse_args()

    import torch
    from diffusers import StableDiffusionImg2ImgPipeline

    src = Image.open(a.source).convert("RGBA")
    alpha = np.array(src)[:, :, 3]
    flat = Image.new("RGB", src.size, BACKDROP)
    flat.paste(src, mask=src)

    # SD1.5 在 512–768 之间最稳，而且边长要是 8 的倍数
    scale = a.size / max(flat.size)
    w = int(flat.width * scale) // 8 * 8
    h = int(flat.height * scale) // 8 * 8
    small = flat.resize((w, h), Image.LANCZOS)

    device = "mps" if torch.backends.mps.is_available() else "cpu"
    # 16 GB 的机器上 float32 + 768px 会被系统直接 OOM 杀掉（退出码 137）。
    # 半精度 + 512px 是这台机器上跑得动的组合。
    pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
        a.model, torch_dtype=torch.float16 if device == "mps" else torch.float32,
        # 安全检查器和它的特征提取器要一起禁掉，只禁前者会因为
        # 仓库里缺 preprocessor_config.json 而加载失败
        safety_checker=None, feature_extractor=None,
        requires_safety_checker=False).to(device)
    pipe.set_progress_bar_config(disable=True)
    pipe.enable_attention_slicing()

    out = pipe(
        prompt="anime illustration of a girl with long silver twintails, "
               "soft painted shading, warm lamp light, cozy lofi study room, "
               "muted colours, hand drawn, detailed brushwork",
        negative_prompt="3d render, cgi, plastic, glossy, photorealistic, "
                        "blurry, deformed, extra limbs, watermark, text",
        image=small, strength=a.strength, guidance_scale=6.5,
        num_inference_steps=a.steps,
        generator=torch.Generator(device="cpu").manual_seed(a.seed),
    ).images[0]

    out = out.resize(src.size, Image.LANCZOS)
    rgba = np.dstack([np.array(out), erode_alpha(alpha, 2)])
    Image.fromarray(rgba).save(a.out)
    print("REPAINT", a.out, f"strength={a.strength}")


if __name__ == "__main__":
    main()

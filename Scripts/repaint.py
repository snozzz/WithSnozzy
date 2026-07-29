#!/usr/bin/env python3
"""用 Gemini 的图像编辑把 3D 渲染结果重绘成手绘质感。

3D 渲染和手绘背景之间最后剩下的差距是**表面质感**：渲出来的衣服是光滑的
色块，画出来的书本有笔触。色调匹配和布光解决了"贴纸感"，解决不了这个。

选 Gemini 而不是本地扩散模型，是因为这台机器只有 16GB，跑 SD 会被 OOM
杀掉，512px 出来的脸也不可信。选它而不是 OpenAI，是因为它对
「保持主体不变、只改表面」更稳——我们最怕的就是还回来一个不是 Snozzy 的人。

alpha 要单独伺候：模型只吃不透明图，所以先把角色合到一块接近房间色的
底色上，重绘完再把原始 alpha 贴回去，并往内收一圈避免边缘挂上底色。

    export GEMINI_API_KEY=...
    python3 Scripts/repaint.py Assets/snozzy_idle.png --out out.png
"""

import argparse
import base64
import io
import json
import os
import sys
import urllib.request

import numpy as np
from PIL import Image

ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
BACKDROP = (74, 58, 48)          # 房间的暖褐色，边缘混色时不会太跳

PROMPT = (
    "Repaint this anime character illustration in a soft hand-painted style, "
    "as if painted for a cozy lo-fi study-room scene. "
    "Add visible painterly brushwork and subtle texture to the fabric, skin and hair. "
    "Keep the SAME character: identical face, identical hairstyle and hair colour, "
    "identical clothing design and colours, identical pose, identical framing and scale. "
    "Do not move, rotate or redraw anything. Do not add or remove any element. "
    "Keep the flat background colour exactly as it is. "
    "This is a texture and shading pass only."
)


def erode_alpha(alpha, px):
    """把 alpha 往内收几像素，去掉重绘时边缘混进来的底色。"""
    a = alpha.copy()
    for _ in range(px):
        b = a.copy()
        b[1:, :] = np.minimum(b[1:, :], a[:-1, :])
        b[:-1, :] = np.minimum(b[:-1, :], a[1:, :])
        b[:, 1:] = np.minimum(b[:, 1:], a[:, :-1])
        b[:, :-1] = np.minimum(b[:, :-1], a[:, 1:])
        a = b
    return a


def edit(image, prompt, model, key, timeout=240):
    """发一次图像编辑请求，返回 PIL 图。"""
    buf = io.BytesIO()
    image.save(buf, format="PNG")
    payload = {
        "contents": [{"parts": [
            {"inline_data": {"mime_type": "image/png",
                             "data": base64.b64encode(buf.getvalue()).decode()}},
            {"text": prompt},
        ]}],
        "generationConfig": {"responseModalities": ["IMAGE"]},
    }
    req = urllib.request.Request(
        ENDPOINT.format(model=model),
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json", "x-goog-api-key": key})

    with urllib.request.urlopen(req, timeout=timeout) as r:
        data = json.loads(r.read())

    for cand in data.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            blob = part.get("inlineData") or part.get("inline_data")
            if blob:
                return Image.open(io.BytesIO(base64.b64decode(blob["data"]))).convert("RGB")
    raise RuntimeError("响应里没有图片：" + json.dumps(data)[:400])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("source")
    ap.add_argument("--out", required=True)
    ap.add_argument("--model", default="gemini-3-pro-image")
    ap.add_argument("--size", type=int, default=1024)
    ap.add_argument("--erode", type=int, default=2)
    ap.add_argument("--prompt", default=PROMPT)
    ap.add_argument("--raw", action="store_true",
                    help="不贴回 alpha，用来看模型原始返回（判断构图有没有漂）")
    a = ap.parse_args()

    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        sys.exit("没有 GEMINI_API_KEY")

    src = Image.open(a.source).convert("RGBA")
    flat = Image.new("RGB", src.size, BACKDROP)
    flat.paste(src, mask=src)
    # 模型的输出分辨率有上限，送太大只是浪费额度，回来还是要缩
    scale = min(1.0, a.size / max(flat.size))
    small = flat.resize((max(8, int(flat.width * scale)),
                         max(8, int(flat.height * scale))), Image.LANCZOS)

    out = edit(small, a.prompt, a.model, key)
    print(f"REPAINT 模型返回 {out.width}×{out.height}")
    out = out.resize(src.size, Image.LANCZOS)

    if not a.raw:
        alpha = erode_alpha(np.array(src)[:, :, 3], a.erode)
        out = Image.fromarray(np.dstack([np.array(out), alpha]))
    out.save(a.out)
    print(f"REPAINT {a.out}  model={a.model}")


if __name__ == "__main__":
    main()

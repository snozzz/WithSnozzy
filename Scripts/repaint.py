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
BACKDROP = (34, 30, 52)          # 房间的暗紫，边缘混色时不会太跳。
                                 # 换场景就要跟着改——剪影对齐是拿它做判据的，
                                 # 底色填错会让整幅图都被判成角色，交并比直接失真。

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


def silhouette(rgb, backdrop, tol=26):
    """离底色足够远的像素就算角色。用来做对齐，比亮度稳。"""
    d = np.abs(np.asarray(rgb, np.int16) - np.array(backdrop, np.int16)).max(axis=2)
    return d > tol


def _iou(mask, ref, sc, dy, dx):
    H, W = ref.shape
    h, w = mask.shape
    canvas = np.zeros((H, W), bool)
    y0, x0 = (H - h) // 2 + dy, (W - w) // 2 + dx
    sy0, sx0 = max(0, -y0), max(0, -x0)
    ty0, tx0 = max(0, y0), max(0, x0)
    hh, ww = min(h - sy0, H - ty0), min(w - sx0, W - tx0)
    if hh <= 0 or ww <= 0:
        return 0.0
    canvas[ty0:ty0 + hh, tx0:tx0 + ww] = mask[sy0:sy0 + hh, sx0:sx0 + ww]
    union = np.count_nonzero(canvas | ref)
    return np.count_nonzero(canvas & ref) / union if union else 0.0


def fit_to(result, original, backdrop=None):
    """把重绘结果对回原始渲染。

    模型重绘时会改变构图。输入图里角色周围留白越多，它重构图的余地越大——
    实测过两次：贴着角色裁紧的方图几乎零漂移（交并比 0.99），
    而角色只占中间一条的宽画幅被缩到了一半（0.08）。所以送图前应当裁紧，
    这里的搜索是兜底。

    搜索用剪影而不是像素差：重绘后颜色和笔触全变了，只有轮廓可比。
    粗到细两轮——直接在全分辨率上扫几十万个组合太慢。
    """
    backdrop = backdrop or BACKDROP
    ref_full = np.asarray(original)[:, :, 3] > 8
    H, W = ref_full.shape

    def search(scales, shifts, step, down):
        ref = ref_full[::down, ::down]
        best, best_score = (1.0, 0, 0), -1.0
        for sc in scales:
            w, h = max(8, int(W * sc)), max(8, int(H * sc))
            small = result.resize((w, h), Image.LANCZOS)
            mask = silhouette(small, backdrop)[::down, ::down]
            for dy in range(-shifts, shifts + 1, step):
                for dx in range(-shifts, shifts + 1, step):
                    sco = _iou(mask, ref, sc, dy // down, dx // down)
                    if sco > best_score:
                        best_score, best = sco, (sc, dy, dx)
        return best, best_score

    # 粗扫：缩放 0.45–1.20，位移 ±480，八分之一分辨率
    coarse, _ = search([0.45 + i * 0.05 for i in range(16)], 480, 24, 8)
    # 细扫：在粗扫结果附近收紧
    sc0, dy0, dx0 = coarse
    scales = [max(0.2, sc0 + i * 0.01) for i in range(-6, 7)]
    best, score = (sc0, dy0, dx0), -1.0
    ref = ref_full[::2, ::2]
    for sc in scales:
        w, h = max(8, int(W * sc)), max(8, int(H * sc))
        mask = silhouette(result.resize((w, h), Image.LANCZOS), backdrop)[::2, ::2]
        for dy in range(dy0 - 32, dy0 + 33, 4):
            for dx in range(dx0 - 32, dx0 + 33, 4):
                sco = _iou(mask, ref, sc, dy // 2, dx // 2)
                if sco > score:
                    score, best = sco, (sc, dy, dx)

    sc, dy, dx = best
    w, h = max(8, int(W * sc)), max(8, int(H * sc))
    out = Image.new("RGB", (W, H), backdrop)
    out.paste(result.resize((w, h), Image.LANCZOS), ((W - w) // 2 + dx, (H - h) // 2 + dy))
    print(f"REPAINT 对齐 缩放{sc:.2f} dy{dy} dx{dx} 轮廓吻合度 {score:.3f}")
    return out


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
    ap.add_argument("--backdrop", default=None,
                    help="送图时填的底色，形如 34,30,52。默认用 BACKDROP")
    ap.add_argument("--prompt", default=PROMPT)
    ap.add_argument("--raw", action="store_true",
                    help="不贴回 alpha，用来看模型原始返回（判断构图有没有漂）")
    ap.add_argument("--fit", metavar="RESULT",
                    help="跳过调用，直接把已有的重绘结果对齐并贴回 alpha。"
                         "手动在网页上生成时走这条")
    a = ap.parse_args()

    src = Image.open(a.source).convert("RGBA")
    backdrop = tuple(int(v) for v in a.backdrop.split(",")) if a.backdrop else BACKDROP

    if a.fit:
        out = fit_to(Image.open(a.fit).convert("RGB").resize(src.size, Image.LANCZOS),
                     src, backdrop)
        alpha = erode_alpha(np.array(src)[:, :, 3], a.erode)
        Image.fromarray(np.dstack([np.array(out), alpha])).save(a.out)
        print(f"REPAINT {a.out}  (对齐已有结果)")
        return

    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        sys.exit("没有 GEMINI_API_KEY")

    flat = Image.new("RGB", src.size, backdrop)
    flat.paste(src, mask=src)
    # 裁到角色的包围盒再送。周围留白越多，模型重新构图的余地越大。
    alpha = np.array(src)[:, :, 3]
    ys, xs = np.where(alpha > 8)
    if len(ys):
        pad = int(0.06 * max(src.size))
        flat = flat.crop((max(0, xs.min() - pad), max(0, ys.min() - pad),
                          min(src.width, xs.max() + pad), min(src.height, ys.max() + pad)))
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

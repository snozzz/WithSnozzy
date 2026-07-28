#!/usr/bin/env python3
"""把渲染好的角色按 app 的布局贴进房间图，用来判断风格搭不搭。

存在的意义是**让"搭不搭"这件事可测**：不贴进真实场景、单看角色渲染图
是判断不出来的，颜色和明暗只有在有参照物的时候才有意义。
"""
import argparse, json, os, sys
import numpy as np
from PIL import Image, ImageFilter

W, H = 960, 640
# 和 PaintedRoom.ambient() 一致：夜间只压暗、几乎不偏色
NIGHT_AMBIENT = (0.62, 0.58, 0.66)


def grade(img, ambient=NIGHT_AMBIENT, soften=0.0, grain=0.0, sat=1.0):
    """把角色调成和房间同一个光照环境。"""
    a = np.array(img).astype(np.float32)
    if sat != 1.0:
        # 手绘房间整体是低饱和的暖褐色，3D 贴图的纯色贴上去会跳
        lum = a[:, :, :3] @ np.array([0.299, 0.587, 0.114], np.float32)
        a[:, :, :3] = lum[:, :, None] + (a[:, :, :3] - lum[:, :, None]) * sat
    a[:, :, 0] *= ambient[0]
    a[:, :, 1] *= ambient[1]
    a[:, :, 2] *= ambient[2]
    out = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))
    if soften > 0:
        # 3D 渲染的边缘比手绘锐利得多，糊一点点能把两者拉近
        out = out.filter(ImageFilter.GaussianBlur(soften))
    if grain > 0:
        n = np.random.default_rng(7).normal(0, grain * 255, (out.height, out.width, 1))
        b = np.array(out).astype(np.float32)
        b[:, :, :3] += n
        out = Image.fromarray(np.clip(b, 0, 255).astype(np.uint8))
    return out


def compose(character, out_path, assets="Assets", scale=0.78, cx=0.52, top=0.06, **kw):
    man = json.load(open(os.path.join(assets, "scene.json")))
    room = Image.open(os.path.join(assets, "room.png")).convert("RGBA")
    desk = Image.open(os.path.join(assets, "desk.png")).convert("RGBA")
    snoz = grade(Image.open(character).convert("RGBA"), **kw)

    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 255))
    ar = room.width / room.height
    rw = int(H * ar)
    canvas.alpha_composite(room.resize((rw, H), Image.LANCZOS),
                           (int(W / 2 - rw * man["roomAnchorX"]), 0))

    sh = int(H * scale)
    sw = int(snoz.width * sh / snoz.height)
    layer = snoz.resize((sw, sh), Image.LANCZOS)
    # 桌面图的底边在 deskBottom 处，再往下是房间图。角色如果画过了这条线，
    # 就会在桌子下面露出一截裙子——她是坐在桌子后面的，那里不该有她。
    cut = int(man["deskBottom"] * H)
    y0 = int(H * top)
    if y0 + sh > cut:
        layer = layer.crop((0, 0, sw, max(1, cut - y0)))
    canvas.alpha_composite(layer, (int(W * cx) - sw // 2, y0))

    dh = int(desk.height * W / desk.width)
    canvas.alpha_composite(desk.resize((W, dh), Image.LANCZOS),
                           (0, int(man["deskBottom"] * H) - dh))
    canvas.convert("RGB").save(out_path)
    return out_path


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("character")
    ap.add_argument("--out", required=True)
    ap.add_argument("--scale", type=float, default=0.78)
    ap.add_argument("--cx", type=float, default=0.52)
    ap.add_argument("--top", type=float, default=0.06)
    ap.add_argument("--soften", type=float, default=0.0)
    ap.add_argument("--grain", type=float, default=0.0)
    ap.add_argument("--sat", type=float, default=1.0)
    ap.add_argument("--no-grade", action="store_true")
    a = ap.parse_args()
    kw = dict(soften=a.soften, grain=a.grain, sat=a.sat)
    if a.no_grade:
        kw["ambient"] = (1, 1, 1)
    print(compose(a.character, a.out, scale=a.scale, cx=a.cx, top=a.top, **kw))

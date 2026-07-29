#!/usr/bin/env python3
"""画一张构图灰模，给重绘当骨架。

为什么不用 3D 建这个：灰模只需要在**我事后要切的东西**上是准的——
桌子轮廓、窗洞矩形、她的位置。墙面装饰、书架、线缆这些重绘会自己发明。
而矩形和梯形用 2D 画又快又准，一轮不到一秒；跑 Blender 调方块位置
是两分钟一轮，之前在那上面来回了两次都没收敛。

同时输出遮罩：重绘完拿它把画面切成「房间层 / 桌子层」，
容膝空间那块的透明区因此是精确的，不用再生成第二张图去做差分。

    python3 Scripts/blocking.py --character Art/render/seated.png --out Art/blocking
"""

import argparse
import json
import os

from PIL import Image, ImageDraw

W, H = 1536, 1024

# 构图参数。改构图只动这里。
HORIZON = 604            # 墙脚线
DESK_FAR_Y = 690         # 桌面远边（靠她那侧）
DESK_NEAR_Y = 812        # 桌面近边（靠镜头）
DESK_FAR = (176, 1204)   # 远边左右端
DESK_NEAR = (48, 1352)   # 近边左右端
DESK_LIP = 34            # 桌沿厚度
LEG_X = (128, 1290)      # 两条前腿
LEG_W = 22
WINDOW = (118, 158, 540, 556)     # 窗洞 x0,y0,x1,y1。右边界要避开角色（她占 x≈583 起）
SHELF = (984, 150, 1490, 486)

C_WALL = (58, 54, 74)
C_FLOOR = (44, 40, 54)
C_DESK = (92, 88, 112)
C_LIP = (70, 66, 88)
C_METAL = (72, 70, 88)
C_PROP = (118, 114, 138)
C_SCREEN = (255, 0, 255)
C_NEON_A = (236, 62, 200)
C_NEON_B = (66, 224, 236)

# 桌上的东西。都是方块——重绘会把方块变成显示器、书、杯子。
# 位置按「桌面上的相对坐标」给：u 横向 0…1，v 纵深 0（远）…1（近）。
PROPS = [
    ("monitor",  0.30, 0.30, 200, 128, True),
    ("laptop",   0.62, 0.42, 150, 96, True),
    ("keyboard", 0.44, 0.74, 210, 30, False),
    ("mug",      0.20, 0.66, 44, 52, False),
    ("books",    0.09, 0.44, 120, 46, False),
    ("papers",   0.72, 0.78, 150, 18, False),
    ("phone",    0.82, 0.66, 40, 62, False),
    ("plant",    0.90, 0.36, 66, 86, False),
    ("lamp",     0.06, 0.24, 40, 150, False),
]


def desk_point(u, v):
    """桌面上的相对坐标 →屏幕坐标。梯形四角之间做双线性插值。"""
    y = DESK_FAR_Y + (DESK_NEAR_Y - DESK_FAR_Y) * v
    left = DESK_FAR[0] + (DESK_NEAR[0] - DESK_FAR[0]) * v
    right = DESK_FAR[1] + (DESK_NEAR[1] - DESK_FAR[1]) * v
    return left + (right - left) * u, y


def desk_polygon():
    return [(DESK_FAR[0], DESK_FAR_Y), (DESK_FAR[1], DESK_FAR_Y),
            (DESK_NEAR[1], DESK_NEAR_Y + DESK_LIP), (DESK_NEAR[0], DESK_NEAR_Y + DESK_LIP)]


def draw_desk(d, fill_top, fill_lip, fill_leg):
    # 桌板
    d.polygon([(DESK_FAR[0], DESK_FAR_Y), (DESK_FAR[1], DESK_FAR_Y),
               (DESK_NEAR[1], DESK_NEAR_Y), (DESK_NEAR[0], DESK_NEAR_Y)], fill=fill_top)
    # 桌沿厚度
    d.polygon([(DESK_NEAR[0], DESK_NEAR_Y), (DESK_NEAR[1], DESK_NEAR_Y),
               (DESK_NEAR[1], DESK_NEAR_Y + DESK_LIP), (DESK_NEAR[0], DESK_NEAR_Y + DESK_LIP)],
              fill=fill_lip)
    # 前腿。桌下必须留空——能看见她的腿是这版构图的全部意义。
    for x in LEG_X:
        d.rectangle([x - LEG_W // 2, DESK_NEAR_Y + DESK_LIP, x + LEG_W // 2, H], fill=fill_leg)


def draw_props(d, solid=None):
    for name, u, v, w, h, screen in PROPS:
        cx, base = desk_point(u, v)
        box = [cx - w / 2, base - h, cx + w / 2, base]
        d.rectangle(box, fill=solid or C_PROP)
        if screen and solid is None:
            # 屏幕填品红，运行时塞程序化内容
            d.rectangle([box[0] + 8, box[1] + 8, box[2] - 8, box[3] - 14], fill=C_SCREEN)


def build(character_path, out_dir):
    os.makedirs(out_dir, exist_ok=True)

    room = Image.new("RGB", (W, H), C_WALL)
    d = ImageDraw.Draw(room)
    d.rectangle([0, HORIZON, W, H], fill=C_FLOOR)
    d.rectangle(WINDOW, fill=C_SCREEN)
    d.rectangle(SHELF, fill=C_METAL)
    for i in range(3):
        y = SHELF[1] + 40 + i * 130
        d.rectangle([SHELF[0] + 12, y, SHELF[2] - 12, y + 12], fill=C_PROP)
    # 霓虹灯带：给重绘一个明确的光源位置暗示
    d.rectangle([0, 96, W, 108], fill=C_NEON_A)
    d.rectangle([0, HORIZON - 14, W, HORIZON - 4], fill=C_NEON_B)

    layout = room.copy()
    if character_path and os.path.exists(character_path):
        ch = Image.open(character_path).convert("RGBA")
        layout.paste(ch, (0, 0), ch)

    fg = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    fd = ImageDraw.Draw(fg)
    draw_desk(fd, C_DESK + (255,), C_LIP + (255,), C_METAL + (255,))
    draw_props(fd)
    layout.paste(fg, (0, 0), fg)
    layout.save(os.path.join(out_dir, "layout.png"))

    # 遮罩：桌子和桌上道具，白色即前景
    mask = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(mask)
    draw_desk(md, 255, 255, 255)
    draw_props(md, solid=255)
    mask.save(os.path.join(out_dir, "mask_desk.png"))

    manifest = {
        "room_window": {"x": round(WINDOW[0] / W, 5), "y": round(WINDOW[1] / H, 5),
                        "width": round((WINDOW[2] - WINDOW[0]) / W, 5),
                        "height": round((WINDOW[3] - WINDOW[1]) / H, 5)},
        "screens": [
            {"x": round((desk_point(u, v)[0] - w / 2 + 8) / W, 5),
             "y": round((desk_point(u, v)[1] - h + 8) / H, 5),
             "width": round((w - 16) / W, 5), "height": round((h - 22) / H, 5)}
            for name, u, v, w, h, screen in PROPS if screen],
        "source": "blocking",
    }
    json.dump(manifest, open(os.path.join(out_dir, "layout.json"), "w"), indent=2)
    print(f"BLOCKING → {out_dir}/layout.png  遮罩和清单同目录")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--character", default="Art/render/seated.png")
    ap.add_argument("--out", default="Art/blocking")
    a = ap.parse_args()
    build(a.character, a.out)

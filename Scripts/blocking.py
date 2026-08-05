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
#
# 桌子是 L 形，她坐在**内转角**：主台面横在她身前，回折臂从左端朝镜头伸过来。
# 回折臂是这版构图的关键——它一进画面就带来纵深，否则窗户/人/货架一字排开，
# 整个房间会像一堵贴了东西的平墙。
# 桌子整体抬高约 9%：桌沿到画面底边的空间从 33% 提到 41%。
# 之前腿一放直脚就出画，那不是姿势调不好，是桌下根本塞不下她从胯到脚的长度。
HORIZON = 548
MAIN_FAR_Y, MAIN_NEAR_Y = 598, 722          # 主台面的远近边
MAIN_FAR = (296, 1216)
MAIN_NEAR = (232, 1372)
RETURN_BOTTOM = (64, 402)                    # 回折臂在画面底边的左右端
RETURN_SPLIT = 486                           # 主台面近边上，回折臂从这里岔出去
DESK_LIP = 32
LEG_X = (1300,)                              # 只画右前腿；左侧被回折臂占了
LEG_W = 22
WINDOW = (268, 96, 632, 452)                 # 窗洞。避开她（x≈583 起）也避开回折臂
SHELF = (1044, 96, 1462, 334)

# 灰模的明度也跟着新方向调亮一档：重绘会照着灰模的明暗关系走，
# 底子全是深灰的话，出来还是一间暗屋子。
C_WALL = (108, 104, 128)
C_FLOOR = (86, 82, 104)
C_DESK = (146, 142, 168)
C_LIP = (118, 114, 140)
C_METAL = (126, 124, 148)
C_PROP = (172, 168, 194)
C_SCREEN = (255, 0, 255)
C_NEON_A = (236, 62, 200)
C_NEON_B = (66, 224, 236)

# 主台面上的东西：她伸手够得到的。u 横向 0…1，v 纵深 0（远）…1（近）。
MAIN_PROPS = [
    ("keyboard", 0.46, 0.80, 250, 26),
    ("mug",      0.70, 0.62, 46, 58),
    ("phone",    0.79, 0.80, 42, 66),
    ("tablet",   0.87, 0.50, 96, 72),
    ("plant",    0.95, 0.32, 76, 104),
]
# 回折臂上的显示器。**侧对着她**，所以镜头看到的是机背——
# 画成正面矩形就成了"电脑对着观众"，很怪；屏幕内容本来也就看不见，
# 因此这里不留品红，画面里唯一的品红只有窗户。
SCREENS = [
    dict(foot=(268, 916), w=150, h=196, lean=54),
    dict(foot=(186, 1016), w=162, h=214, lean=60),
]


def desk_point(u, v):
    """主台面上的相对坐标 → 屏幕坐标。梯形四角之间做双线性插值。"""
    y = MAIN_FAR_Y + (MAIN_NEAR_Y - MAIN_FAR_Y) * v
    left = MAIN_FAR[0] + (MAIN_NEAR[0] - MAIN_FAR[0]) * v
    right = MAIN_FAR[1] + (MAIN_NEAR[1] - MAIN_FAR[1]) * v
    return left + (right - left) * u, y


def desk_surface():
    """L 形台面的多边形。顺时针：主台面远边 → 右端 → 近边 → 岔出回折臂 → 回到左端。"""
    return [(MAIN_FAR[0], MAIN_FAR_Y), (MAIN_FAR[1], MAIN_FAR_Y),
            (MAIN_NEAR[1], MAIN_NEAR_Y), (RETURN_SPLIT, MAIN_NEAR_Y),
            (RETURN_BOTTOM[1], H), (RETURN_BOTTOM[0], H),
            (MAIN_NEAR[0], MAIN_NEAR_Y)]


def draw_desk(d, top, lip, leg):
    d.polygon(desk_surface(), fill=top)
    # 桌沿厚度只画主台面那一段——回折臂是朝镜头伸的，看不到它的沿
    d.polygon([(RETURN_SPLIT, MAIN_NEAR_Y), (MAIN_NEAR[1], MAIN_NEAR_Y),
               (MAIN_NEAR[1], MAIN_NEAR_Y + DESK_LIP), (RETURN_SPLIT, MAIN_NEAR_Y + DESK_LIP)],
              fill=lip)
    # 前腿。桌下必须留空——能看见她的腿是这版构图的全部意义。
    for x in LEG_X:
        d.rectangle([x - LEG_W // 2, MAIN_NEAR_Y + DESK_LIP, x + LEG_W // 2, H], fill=leg)


def draw_props(d, solid=None):
    for _, u, v, w, h in MAIN_PROPS:
        cx, base = desk_point(u, v)
        d.rectangle([cx - w / 2, base - h, cx + w / 2, base], fill=solid or C_PROP)
    for s in SCREENS:
        x, y = s["foot"]
        w, h, lean = s["w"], s["h"], s["lean"]
        # 底边贴在回折臂上（沿着台面往右后方斜），面板竖起来并向右让开一点：
        # 读起来就是一台立着的显示器，屏幕朝她、机背朝我们
        quad = [(x, y), (x + w, y - w * 0.30),
                (x + w + lean, y - w * 0.30 - h), (x + lean, y - h)]
        d.polygon(quad, fill=solid or C_METAL)
        if solid is None:
            d.line([quad[3], quad[2]], fill=C_NEON_B, width=5)   # 机背上沿透出的辉光


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
    # 左侧墙的转角：给平墙加一道纵深暗示，否则整间房像一块贴了东西的板
    d.polygon([(0, 40), (168, 128), (168, H), (0, H)], fill=(44, 41, 58))
    # 霓虹：**不要横贯整幅画面**。满宽的横条会把画面切成上中下三层，
    # 这正是"很分割"的来源。改成几段错落的、带一道竖向重音。
    d.rectangle([196, 92, 880, 104], fill=C_NEON_A)
    d.rectangle([1010, 60, 1500, 72], fill=C_NEON_B)
    d.rectangle([880, 92, 892, 320], fill=C_NEON_A)
    d.rectangle([176, 520, 640, 530], fill=C_NEON_B)

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
        "deskMask": "mask_desk.png",
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

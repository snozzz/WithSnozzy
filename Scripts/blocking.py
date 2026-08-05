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
# 桌子是 L 形，她坐在**内转角**：主台面横在她身前，回折臂从左端岔出去。
# 回折臂是这版构图的纵深来源——否则窗户/人/货架一字排开，
# 整个房间会像一堵贴了东西的平墙。
#
# **回折臂朝里退，不朝镜头伸**（用户画图指定）：它不再一路铺到画幅底边，
# 而是退到主台面**后面**、成为台子更深的那一段。
#
# **而且它要靠到她那一侧**（"就像公司那种工位"）：臂占 x 176–566，
# 右端顶到她左边（她占 x 599–844），她坐在内转角、一转身就能用。
# 原来臂缩在左后角（x 54–296），离她半个画面，读不出工位的意思。
#
# 朝里退的代价是**被透视压扁**：同样一条臂，朝镜头来是越走越大，
# 朝里退是越走越小。所以它现在只是主台面上方一段浅浅的加深，
# 面积比原来小得多。这是透视算出来的，不是画小了。
#
# 桌子整体抬高约 9%：桌沿到画面底边的空间从 33% 提到 41%。
# 之前腿一放直脚就出画，那不是姿势调不好，是桌下根本塞不下她从胯到脚的长度。
HORIZON = 548
MAIN_FAR_Y, MAIN_NEAR_Y = 598, 722          # 主台面的远近边
MAIN_FAR = (296, 1216)
MAIN_NEAR = (232, 1372)
# 回折臂（短桌）：从主台面左段往里退。
#
# **它只能是一条窄带，这是几何决定的，不是画小了。** 地平线在 HORIZON=548，
# 而低于视平线的水平面**永远越不过地平线**——越往里退越贴近它。主台面远边
# 在 598，往里退到头也就 556。用户草图里那块占了半张画的大板子，
# 在这个机位下不是桌面，是竖直的墙。
#
# 画面上"左边一大片"的观感**靠台上那两块屏给**：屏是竖着的，不受这条限制，
# 可以从 574 一路长到 368。
ARM_FAR_Y = 556                              # 短桌的远边（退到头，离地平线 8px）
ARM_X = (60, 360)                            # 短桌在远边上的左右端
# 左翼的前沿比主台面**退后**一截（参考图量出来约 35px），接口做圆角。
# 齐平的话整条前沿是一根直线，L 形就读不出来了。
WING_NEAR_Y = 688                            # 左翼前沿
WING_STEP_X = 400                            # 前沿在这一列上台阶
WING_R = 46                                  # 台阶的圆角半径
# 左翼下面的三抽屉柜。参考图里它是左下角最重的一块，没有它左下角是空的
DRAWER = (24, 700, 252, 1004)                # x0, y0, x1, y1
# 台面左端。**MAIN_FAR/MAIN_NEAR 只定道具坐标系**（`desk_point` 在它俩之间
# 插值），动它等于把键盘、杯子、平板全挪一遍，所以左端另开两个常数。
# 左端要跟臂的左端对齐，不然臂会悬在主台面外面、看着是块浮空的板。
EXT_FAR_X, EXT_NEAR_X = 60, 0
DESK_LIP = 32
LEG_X = (1300,)                              # 只画右前腿；左边那条臂退在里面，腿看不见
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
# 显示器：主台面上那块大屏 + 短桌上两块。**朝向是两种，别弄反**（用户指定）：
#
# - **大屏朝她**，所以镜头看到的是**机背**，屏幕内容看不见
# - **短桌上那两块朝镜头**，屏幕内容**看得见**（往后"屏幕跟播放状态联动发光"
#   那个待办就靠这两块）
#
# 三条硬线：
# - **右缘全部留在 x≤580**。键盘左缘在 594，越过去键盘就穿进屏幕里
#   （第 40 条）。`measure_hands.MONITOR_EDGE_X` 量的就是这个数
# - **别碰她**。她占 x 599–844、脸在 y 277–440
# - **顶别顶进窗洞**。窗洞是 x 265–632、y 105–453，`cut_scene` 按它的包围盒
#   挖洞，伸进去的部分会被整块挖掉。所以 **x>265 的屏，顶不能高过 y=460**；
#   全在 265 左边的那块不受限，可以长得高（这就是左边那块 368 的来历）
#
# 屏幕内容不留品红——画面里唯一的品红是窗户，`window_rect` 认的是最大那块。
SCREENS = [
    dict(foot=(78, 574), w=126, h=176, lean=8),      # 短桌左，全在窗洞左边，最高
    dict(foot=(216, 588), w=124, h=98, lean=8),      # 短桌右，顶被窗洞卡在 460
    dict(foot=(392, 692), w=186, h=186, lean=-16),   # 主台面上那块大屏，背对我们
]


def desk_point(u, v):
    """主台面上的相对坐标 → 屏幕坐标。梯形四角之间做双线性插值。"""
    y = MAIN_FAR_Y + (MAIN_NEAR_Y - MAIN_FAR_Y) * v
    left = MAIN_FAR[0] + (MAIN_NEAR[0] - MAIN_FAR[0]) * v
    right = MAIN_FAR[1] + (MAIN_NEAR[1] - MAIN_FAR[1]) * v
    return left + (right - left) * u, y


def desk_surface():
    """L 形台面的多边形。

    顺时针：回折臂的远边（贴墙那条，只占 ARM_X 这一段）→ 臂的右端面落到
    主台面远边 → 主台面远边右端 → 近边右端 → 近边左端 → 主台面远边左端
    → 臂的左端面回到起点。

    臂朝里退，所以它整段都在主台面远边**之上**，读起来是"她左手边那段
    台子更深一点"——工位的回折台就是这个样子。
    """
    import math
    # 前沿上那个台阶做成圆角：左翼前沿 688 → 主台面前沿 722，
    # 在 WING_STEP_X 附近走四分之一圆。直角的话看着像两张桌子拼错了。
    arc = [(WING_STEP_X - WING_R + WING_R * math.sin(t * math.pi / 2),
            WING_NEAR_Y + WING_R * (1 - math.cos(t * math.pi / 2)))
           for t in [i / 8 for i in range(9)]]
    return ([(ARM_X[0], ARM_FAR_Y), (ARM_X[1], ARM_FAR_Y),
             (ARM_X[1], MAIN_FAR_Y), (MAIN_FAR[1], MAIN_FAR_Y),
             (MAIN_NEAR[1], MAIN_NEAR_Y), (WING_STEP_X, MAIN_NEAR_Y)]
            + arc[::-1]
            + [(EXT_NEAR_X, WING_NEAR_Y), (EXT_FAR_X, MAIN_FAR_Y)])


def draw_desk(d, top, lip, leg):
    d.polygon(desk_surface(), fill=top)
    # 桌沿厚度分两段：主台面那条在 722，左翼那条退在 688、也薄一点
    # （它离镜头更远）。臂和主台面是同高的两段台子，中间只是拼缝、不是沿
    d.polygon([(WING_STEP_X, MAIN_NEAR_Y), (MAIN_NEAR[1], MAIN_NEAR_Y),
               (MAIN_NEAR[1], MAIN_NEAR_Y + DESK_LIP),
               (WING_STEP_X, MAIN_NEAR_Y + DESK_LIP)], fill=lip)
    d.polygon([(EXT_NEAR_X, WING_NEAR_Y), (WING_STEP_X - WING_R, WING_NEAR_Y),
               (WING_STEP_X - WING_R, WING_NEAR_Y + DESK_LIP * 3 // 4),
               (EXT_NEAR_X, WING_NEAR_Y + DESK_LIP * 3 // 4)], fill=lip)
    # 左翼下面的三抽屉柜
    d.rectangle(DRAWER, fill=leg)
    for i in range(3):
        y = DRAWER[1] + 40 + i * 88
        d.rectangle([DRAWER[0] + 34, y, DRAWER[2] - 34, y + 12], fill=lip)
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
        # 底边顺着台面往右后方斜；`lean` 为负＝顶往左让，面板于是**斜着朝她**
        # （她在右边），镜头从左前方看过去能看见一部分屏幕
        quad = [(x, y), (x + w, y - w * 0.24),
                (x + w + lean, y - w * 0.24 - h), (x + lean, y - h)]
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

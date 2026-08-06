#!/usr/bin/env python3
"""按**交付的成品图**描出桌子层的遮罩。

    python3 Scripts/desk_mask.py --check Art/scene_rich.png --out Art/blocking

## 和 blocking.py 的关系：方向反过来了

`blocking.py` 是「我定构图 → 灰模 → 重绘照着画 → 拿灰模的遮罩切层」。
这套在"我出构图"时是对的。但用户后来直接给了一张画好的房间图
（`ChatGPT Image Aug 6, 2026, 10_25_44 AM.png`），构图由那张图定，
于是遮罩只能**照着成品去描**。`blocking.py` 留着不动（换构图还得用它），
描图这条路单独放这儿，免得两个用途挤在一个文件里互相拖。

## 遮罩只需要在"她身上"是准的

桌子层是画在角色**之上**的。所以遮罩真正要准的只有一件事：
**桌子挡住她的那一段**，以及**桌下的容膝空间必须透明**（挡死了她就只剩半截）。
她坐在 x≈700–960。左边那截台面在不在遮罩里，画面上看不出区别——
那儿她不在，进不进桌子层都是同一批像素。

所以这里只描三样：桌板带（后沿→桌沿底）、左边的三抽屉柜、桌下那条短腿。
台上的显示器、杯子、多肉都不描：它们要么落在桌板带里，要么远在她左边。

## 这些数是量出来的，不是估的

对成品图逐列求纵向梯度（`Scripts/scene_drift.desk_edge` 同一套办法）：

- 主桌**后沿 y=608**（x 800–1280 一路稳定）
- 主桌**前沿 y=735**（x 460–1300 一路稳定，梯度 83–96）
- 桌沿**底 y=763**（x 500–1060 稳定）
- **左翼前沿 y=684**（x 10–250 稳定），比主桌前沿高——左翼是退在后面的
- 抽屉柜 x 18–238，底边从 (18,992) 斜到 (238,945)
- 桌下短腿 x 443–472
- 桌子右端 x≈1450

换了成品图**这些全要重量**，别照抄。
"""
import argparse
import json
import os

from PIL import Image, ImageDraw

W, H = 1536, 1024

BACK_Y = 606          # 桌板后沿（量到 608，往上留 2px 余量，宁可多包）
LIP_BOTTOM = 766      # 主桌桌沿底（量到 763）
WING_BOTTOM = 714     # 左翼桌沿底（量到 712）
WING_X = 250          # 左翼这一段的右端
CORNER_X = 452        # 圆角结束、并入主桌前沿的那一列
RIGHT_X = 1452        # 桌子右端
DRAWER = [(18, 700), (238, 700), (240, 945), (18, 992)]
LEG = (443, 766, 472, 802)


def desk_band():
    """桌板带的多边形：上边是后沿，下边从左翼的桌沿底走圆角接到主桌的。"""
    steps = 12
    curve = []
    for i in range(steps + 1):
        t = i / steps
        x = WING_X + (CORNER_X - WING_X) * t
        # 平滑的 S 形过渡，两端切线水平——直线接的话圆角处会出现折点
        y = WING_BOTTOM + (LIP_BOTTOM - WING_BOTTOM) * (t * t * (3 - 2 * t))
        curve.append((x, y))
    return ([(0, BACK_Y), (RIGHT_X, BACK_Y), (RIGHT_X, LIP_BOTTOM)]
            + curve[::-1] + [(0, WING_BOTTOM)])


def build(out_dir):
    os.makedirs(out_dir, exist_ok=True)
    mask = Image.new("L", (W, H), 0)
    d = ImageDraw.Draw(mask)
    d.polygon(desk_band(), fill=255)
    d.polygon(DRAWER, fill=255)
    d.rectangle(LEG, fill=255)
    mask.save(os.path.join(out_dir, "mask_desk.png"))
    frac = sum(mask.point(lambda v: 255 if v > 128 else 0)
               .getdata()) / (255 * W * H)
    print(f"MASK → {out_dir}/mask_desk.png  覆盖 {100 * frac:.1f}%")
    return mask


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="Art/blocking")
    ap.add_argument("--check", help="把遮罩边界画到这张成品图上，肉眼核一遍")
    a = ap.parse_args()
    mask = build(a.out)
    if a.check:
        im = Image.open(a.check).convert("RGB").resize((W, H))
        d = ImageDraw.Draw(im)
        d.line(desk_band() + [desk_band()[0]], fill=(255, 40, 40), width=3)
        d.line(DRAWER + [DRAWER[0]], fill=(40, 255, 80), width=3)
        d.rectangle(LEG, outline=(40, 200, 255), width=3)
        p = os.path.join(a.out, "mask_check.png")
        im.save(p)
        print(f"核对图 → {p}")


if __name__ == "__main__":
    main()

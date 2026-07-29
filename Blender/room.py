"""程序化搭一间现代书房。

和角色走同一个渲染器、同一个相机、同一套 cel 着色——风格一致性
不是靠调出来的，是结构上就不可能不一致。这也是把场景也搬进 3D 的唯一理由。

所有材质都用 Principled BSDF 建，建完之后统一交给 `toon_materials()`
改写，角色和道具于是共享完全相同的着色路径。

坐标约定：她在原点，面朝 -Y。桌子在她身前（-Y 侧），侧翼往 +X 伸。
"""
import bpy
import math
import random
from mathutils import Vector

DESK_H = 0.74          # 桌面高度，照真实尺寸来
SEED = 20260729

PALETTE = {
    "wall":      (0.82, 0.78, 0.73),
    "wall_side": (0.74, 0.70, 0.66),
    "floor":     (0.46, 0.37, 0.30),
    "desk":      (0.78, 0.63, 0.45),
    "desk_edge": (0.68, 0.53, 0.37),
    "frame":     (0.30, 0.27, 0.26),
    "shelf":     (0.60, 0.47, 0.34),
    "metal":     (0.34, 0.34, 0.37),
    "screen":    (0.10, 0.11, 0.14),
    "paper":     (0.94, 0.92, 0.87),
    "mug":       (0.85, 0.86, 0.84),
    "plant":     (0.32, 0.50, 0.30),
    "pot":       (0.80, 0.75, 0.68),
    "lamp":      (0.24, 0.24, 0.27),
    "phone":     (0.16, 0.16, 0.18),
    "cushion":   (0.72, 0.52, 0.55),
}
BOOK_COLORS = [(0.60, 0.28, 0.26), (0.28, 0.38, 0.48), (0.42, 0.45, 0.32),
               (0.70, 0.60, 0.42), (0.35, 0.30, 0.42), (0.55, 0.48, 0.40),
               (0.24, 0.42, 0.40), (0.68, 0.50, 0.32)]

_mats = {}


def mat(key, color=None):
    """按名字取材质，没有就建一个。

    用 Principled 而不是 Diffuse，是为了后面 `toon_materials()` 能认出来
    并统一改写——道具和角色必须走同一条着色路径。
    """
    if key in _mats:
        return _mats[key]
    m = bpy.data.materials.new(f"Room_{key}")
    m.use_nodes = True
    bsdf = m.node_tree.nodes["Principled BSDF"]
    c = color or PALETTE.get(key, (0.8, 0.8, 0.8))
    bsdf.inputs["Base Color"].default_value = (*c, 1)
    bsdf.inputs["Roughness"].default_value = 1.0
    _mats[key] = m
    return m


def box(name, size, loc, key, color=None, bevel=0.006, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    o = bpy.context.object
    o.name = name
    o.scale = Vector(size)
    o.rotation_euler = rot
    bpy.ops.object.transform_apply(scale=True)
    if bevel > 0:
        b = o.modifiers.new("B", 'BEVEL')
        b.width = bevel
        b.segments = 2
        b.limit_method = 'ANGLE'
    o.data.materials.append(mat(key, color))
    return o


def cyl(name, r, h, loc, key, color=None, rot=(0, 0, 0), verts=28):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=h, vertices=verts, location=loc)
    o = bpy.context.object
    o.name = name
    o.rotation_euler = rot
    o.data.materials.append(mat(key, color))
    for p in o.data.polygons:
        p.use_smooth = True
    return o


# ------------------------------------------------------------------ 房间

def build_room():
    """墙、地、窗框、书架。全部在角色身后。

    窗洞是**真的洞**：不放玻璃几何体，渲出来就是透明的，
    运行时把程序化天空塞进去。昼夜和天气全靠这个洞。

    窗户放在**后墙左侧**而不是侧墙——侧墙上的窗在这个机位几乎全在画面外，
    而窗洞的位置必须精确可测（要往里塞天空），不能靠运气。
    """
    out = []
    back_y = 1.25
    out.append(box("Floor", (7, 7, 0.04), (0, 0, -0.02), "floor", bevel=0))
    out.append(box("WallSide", (0.06, 5, 3.2), (-2.6, 0.6, 1.2), "wall_side", bevel=0))

    # 后墙拆成四块，左侧留出窗洞——比布尔运算稳，也不会产生烂面
    win = {"y": back_y, "x0": -1.55, "x1": -0.58, "z0": 0.98, "z1": 1.86}
    t = 0.06
    out.append(box("WallB_low", (3.6, t, win["z0"]), (0, back_y, win["z0"] / 2), "wall", bevel=0))
    out.append(box("WallB_high", (3.6, t, (3.2 - win["z1"]) / 2),
                   (0, back_y, (win["z1"] + 3.2) / 2), "wall", bevel=0))
    out.append(box("WallB_left", (1.0, t, (win["z1"] - win["z0"]) / 2),
                   (win["x0"] - 1.0, back_y, (win["z0"] + win["z1"]) / 2), "wall", bevel=0))
    out.append(box("WallB_right", (2.2, t, (win["z1"] - win["z0"]) / 2),
                   (win["x1"] + 2.2, back_y, (win["z0"] + win["z1"]) / 2), "wall", bevel=0))

    # 窗框：外圈 + 一根竖挺
    f = 0.05
    cx, cz = (win["x0"] + win["x1"]) / 2, (win["z0"] + win["z1"]) / 2
    hx, hz = (win["x1"] - win["x0"]) / 2, (win["z1"] - win["z0"]) / 2
    for nm, sz, lc in (
            ("WinTop", (hx + f, 0.07, f), (cx, back_y, win["z1"])),
            ("WinBot", (hx + f, 0.07, f), (cx, back_y, win["z0"])),
            ("WinL", (f, 0.07, hz), (win["x0"], back_y, cz)),
            ("WinR", (f, 0.07, hz), (win["x1"], back_y, cz)),
            ("WinMid", (0.025, 0.06, hz), (cx, back_y, cz))):
        out.append(box(nm, sz, lc, "frame", bevel=0.004))

    out += build_shelf(back_y)
    return out, win


def build_shelf(back_y):
    """后墙右侧的开放式书架。"""
    rnd = random.Random(SEED)
    out = []
    x0, x1 = 0.55, 2.35
    w = (x1 - x0) / 2
    cx = (x0 + x1) / 2
    out.append(box("ShelfBack", (w, 0.04, 0.85), (cx, back_y - 0.14, 1.42), "shelf"))
    for i, z in enumerate((0.98, 1.42, 1.86)):
        out.append(box(f"ShelfBoard{i}", (w, 0.16, 0.018), (cx, back_y - 0.24, z), "shelf"))
        # 书：厚薄高矮随机，成组倒向一边才像有人在用
        x = x0 + 0.06
        while x < x1 - 0.12:
            th = rnd.uniform(0.022, 0.05)
            hh = rnd.uniform(0.15, 0.24)
            lean = rnd.random() < 0.12
            out.append(box(f"Book{i}_{x:.2f}", (th / 2, 0.055, hh / 2),
                           (x + th / 2, back_y - 0.25, z + 0.018 + hh / 2),
                           "book", rnd.choice(BOOK_COLORS), bevel=0.002,
                           rot=(0, math.radians(rnd.uniform(4, 9)) if lean else 0, 0)))
            x += th + rnd.uniform(0.002, 0.008)
    return out


# ------------------------------------------------------------------ 桌与道具

def build_desk():
    """L 形桌。她坐在内角，主台面在身前，侧翼往右后延伸。

    两段刻意**首尾相接**（主台面右端 = 侧翼左端），否则在这个近正面的机位上
    会被看成两张分开的桌子。

    桌板做得厚一些、桌腿留在画面内：卡通着色下薄板会糊成一条线，
    看起来像飘在空中。
    """
    out = []
    top = 0.030
    # 主台面：x −1.15…0.55，y −0.78…−0.18（−y 朝镜头）
    out.append(box("DeskMain", (0.85, 0.30, top), (-0.30, -0.48, DESK_H), "desk"))
    # 侧翼：接着主台面右端往后伸
    out.append(box("DeskWing", (0.30, 0.58, top), (0.85, -0.20, DESK_H), "desk"))
    for lx, ly in ((-1.08, -0.72), (0.48, -0.72), (1.08, -0.72), (1.08, 0.30)):
        out.append(box(f"Leg{lx}_{ly}", (0.028, 0.028, DESK_H / 2),
                       (lx, ly, DESK_H / 2), "metal", bevel=0.004))
    return out


def build_props():
    """桌面上的东西。现代学生的桌子，越杂越真。"""
    rnd = random.Random(SEED + 1)
    out = []
    z = DESK_H + 0.011

    # 笔记本电脑：放侧翼上，略微转向她
    lap_x, lap_y, ang = 0.86, -0.02, math.radians(-26)
    out.append(box("LapBase", (0.16, 0.11, 0.008), (lap_x, lap_y, z + 0.008),
                   "metal", bevel=0.003, rot=(0, 0, ang)))
    lid = box("LapLid", (0.16, 0.005, 0.11),
              (lap_x - 0.10 * math.sin(ang), lap_y + 0.10 * math.cos(ang), z + 0.10),
              "metal", bevel=0.003, rot=(math.radians(-14), 0, ang))
    out.append(lid)
    # 屏幕：单独一块，运行时靠它发光
    scr = box("LapScreen", (0.145, 0.003, 0.096),
              (lap_x - 0.108 * math.sin(ang), lap_y + 0.108 * math.cos(ang), z + 0.101),
              "screen", bevel=0, rot=(math.radians(-14), 0, ang))
    scr["is_screen"] = True
    out.append(scr)

    # 键盘 + 鼠标：正对她
    out.append(box("Keyboard", (0.19, 0.07, 0.007), (-0.30, -0.52, z + 0.007),
                   "metal", bevel=0.003, rot=(0, 0, math.radians(3))))
    out.append(box("Mouse", (0.032, 0.05, 0.012), (0.10, -0.50, z + 0.012),
                   "metal", bevel=0.010))

    # 摊开的书 + 底下垫的两本
    out.append(box("BookOpenL", (0.11, 0.075, 0.004),
                   (-0.86, -0.44, z + 0.028), "paper", bevel=0.002, rot=(0, 0, math.radians(6))))
    out.append(box("BookOpenR", (0.11, 0.075, 0.004),
                   (-0.64, -0.44, z + 0.028), "paper", bevel=0.002, rot=(0, 0, math.radians(6))))
    for i, (hh, c) in enumerate(((0.020, BOOK_COLORS[0]), (0.024, BOOK_COLORS[1]))):
        out.append(box(f"BookStack{i}", (0.115, 0.082, hh / 2),
                       (-0.75, -0.44, z + i * 0.024 + hh / 2), "book", c, bevel=0.002))

    # 散落的草稿纸
    for i in range(4):
        out.append(box(f"Paper{i}", (0.075, 0.052, 0.0012),
                       (0.34 + rnd.uniform(-0.05, 0.05), -0.62 + rnd.uniform(-0.05, 0.05),
                        z + 0.002 + i * 0.0016), "paper", bevel=0,
                       rot=(0, 0, math.radians(rnd.uniform(-22, 22)))))

    # 马克杯
    out.append(cyl("Mug", 0.037, 0.088, (-0.86, -0.44, z + 0.044), "mug"))
    out.append(cyl("MugRim", 0.037, 0.006, (-0.86, -0.44, z + 0.088), "cushion", verts=28))

    # 笔筒 + 几支笔
    out.append(cyl("PenCup", 0.036, 0.10, (0.52, -0.30, z + 0.05), "pot"))
    for i in range(4):
        out.append(cyl(f"Pen{i}", 0.004, 0.16,
                       (0.52 + rnd.uniform(-0.014, 0.014), -0.30 + rnd.uniform(-0.014, 0.014),
                        z + 0.10), "book", rnd.choice(BOOK_COLORS),
                       rot=(math.radians(rnd.uniform(-9, 9)), math.radians(rnd.uniform(-9, 9)), 0),
                       verts=10))

    # 台灯：细杆 + 灯罩，放侧翼靠里
    out.append(cyl("LampBase", 0.055, 0.014, (1.00, 0.28, z + 0.007), "lamp"))
    out.append(cyl("LampPole", 0.008, 0.42, (1.00, 0.28, z + 0.22), "lamp", verts=12))
    out.append(cyl("LampArm", 0.007, 0.24, (0.92, 0.22, z + 0.42), "lamp",
                   rot=(math.radians(64), 0, math.radians(28)), verts=12))
    shade = cyl("LampShade", 0.075, 0.10, (0.84, 0.16, z + 0.40), "lamp",
                rot=(math.radians(20), 0, 0), verts=24)
    out.append(shade)

    # 手机、便签、绿植
    out.append(box("Phone", (0.034, 0.068, 0.005), (0.28, -0.66, z + 0.005),
                   "phone", bevel=0.004, rot=(0, 0, math.radians(-14))))
    for i in range(3):
        out.append(box(f"Sticky{i}", (0.026, 0.026, 0.0008),
                       (0.60 + i * 0.012, -0.56 + i * 0.02, z + 0.001),
                       "paper", (0.95, 0.88, 0.55), bevel=0,
                       rot=(0, 0, math.radians(rnd.uniform(-18, 18)))))
    out.append(cyl("Pot", 0.058, 0.085, (-1.02, -0.34, z + 0.042), "pot"))
    for i in range(7):
        a = i * 2.39
        out.append(box(f"Leaf{i}", (0.030, 0.016, 0.004),
                       (-1.02 + math.cos(a) * 0.055, -0.34 + math.sin(a) * 0.055,
                        z + 0.10 + (i % 3) * 0.022), "plant", bevel=0.004,
                       rot=(0, math.radians(-32 - (i % 3) * 8), a)))
    return out


def build_chair():
    """一把办公椅。

    看得见桌下就必须有椅子，否则她是悬空坐着的。
    只做能看见的部分：座面、椅背、中柱、五爪脚。
    """
    out = []
    seat_z = 0.46
    out.append(box("ChairSeat", (0.22, 0.22, 0.035), (0, 0.10, seat_z), "metal", bevel=0.02))
    out.append(box("ChairBack", (0.20, 0.03, 0.26), (0, 0.31, seat_z + 0.30), "metal",
                   bevel=0.02, rot=(math.radians(-8), 0, 0)))
    out.append(cyl("ChairPole", 0.028, seat_z - 0.06, (0, 0.10, (seat_z - 0.06) / 2 + 0.03),
                   "metal", verts=16))
    for i in range(5):
        a = i * (2 * math.pi / 5) + 0.4
        out.append(box(f"ChairFoot{i}", (0.015, 0.13, 0.012),
                       (math.sin(a) * 0.13, 0.10 + math.cos(a) * 0.13, 0.035),
                       "metal", bevel=0.005, rot=(0, 0, -a)))
    return out


def build_all():
    room, win = build_room()
    return {"back": room + build_chair(),
            "front": build_desk() + build_props(), "window": win}

"""程序化建一块键盘，放到 3D 的桌面上。

## 为什么要在 3D 里建

原来键盘是画在 `desk.png` 里的 2D 图，而桌面层又画在角色之上，
于是"手放在键盘上"只能靠**猜一个深度**把手臂切开——切多了手指没了、
切少了袖子糊在桌面上，来回调都不对。

键盘一旦在 3D 里，遮挡就是渲染器算出来的：手指压在键帽上、手腕搭在
键盘后沿、袖子被桌板挡住，全部自动正确，一个阈值都不用调。
和耳机那一层是同一个理由（`headphones.py`）。

## 位置怎么定

桌面的位置是**从画面反推**再用她自己校准的：她的鞋底在 z≈0（那就是地面），
真实桌高 0.73 m 于是桌面在 z=0.725。按这个高度把「画布第 602 行」
（`desk.png` 开始不透明的那一行，也就是画上去的桌沿）投回 3D，
得到桌面后沿在 y=-0.146；前沿（第 730 行）在 y=-0.761。
进深 0.615 m——正好是一张普通书桌的进深，说明这套反推是自洽的。

## 为什么斜着放

屏幕在她右前方，不是正对着她的。键盘跟着屏幕转一个角度才说得通，
正着摆反而假。`YAW` 就是这个角度。
"""
import bpy
import math
from mathutils import Vector

# 桌面（世界坐标）。见文件头的推导。
DESK_Z = 0.725
DESK_BACK_Y = -0.146
DESK_FRONT_Y = -0.761

# 键盘尺寸（米）。0.36 是紧凑键盘（无小键盘区）的宽度。
#
# 原来是 0.42。收窄不是为了好看，是为了**给显示器让位**：画上去的那台
# 显示器立在桌子前沿偏左，画面右缘在 x≈569–580 那条斜线上；而键盘和手
# 是画在桌面层**之上**的，重叠了就是键盘穿进显示器里，没有任何深度关系可言。
# 键盘窄 6 厘米，画面上左缘就往右让了 18 像素，正好把这一段让出来。
# 顺带 15 列键在 0.36 上算出来是 2.06 厘米一个键，比原来的 2.46 更接近真键盘。
WIDTH, DEPTH, BASE_H = 0.36, 0.135, 0.016
# 键帽
COLS, ROWS = 15, 5
# 缝要够宽、键要够高，不然卡通着色一压，整块就是一片白板。
# 底座刻意做得暗，缝才读得出来。
KEY_GAP = 0.0032
KEY_H = 0.008
# 键盘中心在桌面上的位置，以及绕竖轴转多少度。
# 她面朝 −Y，+X 是她的左手边；屏幕在她右前方，所以往那边转。
#
# **往前推**是为了把手腕从"拧着"救回来。原来在 (0.055, -0.40)：手腕离肩
# 只有 32 厘米，小臂几乎横着，实测右腕扭了 57.5°（左腕才 13°）。
#
# **横向别再往她右手边挪了**（第 40 条）。往那边挪确实能把右腕再削十度，
# 因为她右手就不用横过身体中线去够；但那边立着画上去的显示器，
# 键盘和手都会撞进去——而键盘画在桌面层之上，撞了就是穿模。
# 试过 -0.05，右腕 27.7° 很漂亮，代价是键盘左缘 507、显示器右缘 580。
# 所以横向只能往回让，右腕那笔账靠肘去还（`pose.ELBOW_POLE`）。
#
# 现在：键盘画面 594–832，显示器右缘 580，让开 14 像素。
CENTRE = Vector((0.075, -0.45, DESK_Z))
# 转角从 -14° 收到 -4°。手要摆进键盘的坐标系（第 33 条），于是键盘转多少、
# 手腕就得替躯干吃掉多少——躯干没跟着转。实测两腕角度之和基本是定值，
# 转角只决定这笔账怎么摊在左右手上（第 35 条）。键盘既然只能待在她左边，
# 右腕本来就吃紧，没有余量再拿来买角度了，留 4° 意思一下。
YAW = math.radians(-4.0)
# 真键盘后面比前面高一点，敲起来才顺手
TILT = math.radians(4.0)


def _material(name, color):
    """用 Principled 而不是 Diffuse——`snozzy_lib.toon_materials` 只认
    Principled，用 Diffuse 的话键盘不会跟着走卡通着色，和房间对不上。"""
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = next(n for n in mat.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    bsdf.inputs["Base Color"].default_value = (*color, 1)
    return mat


def _box(name, size, loc):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    o = bpy.context.object
    o.name = name
    # `primitive_cube_add(size=1)` 出来的立方体**边长就是 1**，
    # 所以缩放系数直接就是想要的边长，不能再除以 2（除过一次，
    # 结果键帽只有一半大、缝比键还宽，看着像一地碎纸片）
    o.scale = Vector(size)
    return o


def build(base_color=(0.42, 0.40, 0.50), key_color=(0.94, 0.93, 0.97),
          outline=True):
    """建好键盘，返回它的所有物体。已经摆到桌面上、转好角度。"""
    parts = []
    # 底座。原点放在键盘中心、桌面高度上，之后整体旋转
    base = _box("KbdBase", (WIDTH, DEPTH, BASE_H), (0, 0, BASE_H / 2))
    base.data.materials.append(_material("KbdBase", base_color))
    parts.append(base)

    key_mat = _material("KbdKey", key_color)
    kw = (WIDTH - KEY_GAP * (COLS + 1)) / COLS
    kd = (DEPTH * 0.82 - KEY_GAP * (ROWS + 1)) / ROWS
    x0 = -WIDTH / 2 + KEY_GAP + kw / 2
    y0 = -DEPTH * 0.82 / 2 + KEY_GAP + kd / 2
    for r in range(ROWS):
        for c in range(COLS):
            # 最下面一排中间做成一条长空格键
            if r == 0 and 5 <= c <= 9:
                if c != 7:
                    continue
                w = kw * 5 + KEY_GAP * 4
            else:
                w = kw
            k = _box(f"Kbd{r}_{c}",
                     (w, kd, KEY_H),
                     (x0 + c * (kw + KEY_GAP), y0 + r * (kd + KEY_GAP),
                      BASE_H + KEY_H / 2))
            k.data.materials.append(key_mat)
            parts.append(k)

    # 整体：先前倾一点，再绕竖轴转，最后挪到桌面上
    for o in parts:
        o.rotation_mode = 'XYZ'
    bpy.ops.object.select_all(action='DESELECT')
    for o in parts:
        o.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    kbd = bpy.context.object
    kbd.name = "Keyboard"
    kbd.rotation_euler = (TILT, 0, YAW)
    kbd.location = CENTRE
    if outline:
        # 房间是有线稿的手绘图，键盘不描边会像一块塑料贴上去
        import snozzy_lib as S
        S.add_outline([kbd], thickness=0.0016, skip=())
    bpy.context.view_layer.update()
    return kbd


def home_row(side, spread=0.115, back=0.085):
    """**手腕**该落在哪儿——键盘靠她那一侧、左右各偏开一点。

    返回世界坐标。手按这个点摆，键盘一转手也跟着转，不用另外对齐。

    `back` 是往她那边偏多少。这个值要够大：手掌和手指是从手腕**往前**
    伸出去一截的，手腕摆在键盘正中的话，指尖会一路伸到键盘外沿之外，
    看着像两只手挂在键盘前面。手腕落在靠她的那条边上，指尖才落在中排。
    0.058 时指尖落在最外那排（距中线 40 毫米），0.085 才落回中间两排。

    `spread` 要比肩宽略宽（肩距 15.4 厘米，这里两腕 23 厘米）。手腕比肩窄
    的话小臂朝内收，而手掌是照键盘方向摆的、朝外，两者一拧就是扭腕。
    """
    sx = 1 if side == "L" else -1
    local = Vector((sx * spread, back, BASE_H + KEY_H))
    rot = (bpy.data.objects["Keyboard"].rotation_euler.to_matrix()
           if "Keyboard" in bpy.data.objects else None)
    if rot is None:
        return CENTRE + local
    return CENTRE + rot @ local


def desk_slab(width=3.0):
    """3D 的桌板。只当遮挡用（Holdout），自己不显影。

    有了它，她的裙子、大腿、袖子被桌子挡住这件事就是几何算出来的，
    不用再按深度猜一刀切在哪。
    """
    mesh = bpy.data.meshes.new("DeskSlab")
    mesh.from_pydata(
        [(-width, DESK_BACK_Y, DESK_Z), (width, DESK_BACK_Y, DESK_Z),
         (width, DESK_FRONT_Y, DESK_Z), (-width, DESK_FRONT_Y, DESK_Z)],
        [], [(0, 1, 2, 3)])
    mesh.update()
    slab = bpy.data.objects.new("DeskSlab", mesh)
    bpy.context.scene.collection.objects.link(slab)
    return slab

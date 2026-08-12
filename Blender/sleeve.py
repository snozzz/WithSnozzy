"""在广袖里面加一层贴身的内袖，从袖筒里伸出来盖住手腕。

## 要解决的是什么

用户说"手和手腕这里看着像穿模"。量了一下：广袖的下摆其实**已经盖过手腕了**
（`slim_sleeves` 把它拉到了肩→腕轴 102.5% 处），问题不在长度，在**口子**——
袖口半径 54 毫米、手腕才 25，中间空着一圈 29 毫米。

相机在她左前方，坐着打字的小臂基本朝着镜头（第 41/42 条，这是机位的正常
结果、改不动），于是那个口子是**正对着看**的：画面上就是一个能看进去的圆洞，
洞里是袖子内壁（灰的）和一截光手腕，手从洞里伸出来。读起来就是穿模。

## 为什么不去改那件广袖

试过三版：把喇叭压细、往前拉、两样都做。**全部失败，而且失败长得一样**——
袖口收成一圈锯齿星芒，或者一把灰白相间的飘带。原因是喇叭口的周长比手腕
大四倍，压进去的布没地方放，那圈白荷叶边就一片片贴着胳膊躺平，
正面看就是飘带（灰的是花瓣背面）。**曲面周长不够，任何径向压缩都必然自交**，
和参数无关（第 44 条）。

而且那圈白边是用户明确说好看、要留的。

## 现在的做法

广袖原样不动，**在它里面衬一层内袖**：从袖筒中段起，一路贴着广袖的内壁走，
到袖口再收下来贴住手腕、伸出来一小截。于是从镜头看过去，
原来那个洞里现在是粉色的内袖，而不是内壁和光手腕；白荷叶边还在外面那一圈。
中式衣裙本来就有内外两层袖子。

**内袖的半径要一圈一圈去问广袖，不能给个常数。** 广袖的袖口不是正圆：
同一个截面上半径从 50 到 62 毫米不等。拿一根等粗的圆筒去填，
窄的那边刚好、宽的那边就留下一弯灰色的月牙——试过 42 毫米那一版，
月牙还在。现在是**按方位角量广袖内壁、再往里让 3 毫米**，一圈都贴得住。

和键盘、耳机同一个路子：**要什么形状就建什么形状，别去切一个不对的形状**
（第 29 条）。
"""
import bpy
import math
from mathutils import Vector

# 沿肩→腕轴的起止位置（0 在肩、1 在腕、肘在 0.52）。
#
# `T0` 要**足够靠里**：它是内袖的起点，必须整段藏在广袖里面。广袖收完之后
# 半径最小的地方在 t=0.72 附近（41 毫米），从那儿起就安全。
# `T1` 必须 > 1，也就是越过手腕——这是"看不到手腕"的那一下。
# 太大会戳进手背里：内袖那一圈顶点蒙在小臂骨上，手是在腕关节处折下去的，
# 袖子不跟着折。
T0, T1 = 0.72, 1.055
# 半径（米）。**最粗的地方在广袖的袖口那儿**（`TM`），要把那个洞填掉大半：
# 广袖口 54 毫米，内袖 42，剩 12 毫米一圈白边露在外面，正好读成袖缘。
# 再往前收到 32 贴着手腕（皮肤 25），伸出来一小截当袖口。
#
# `RM` 别再往上加了：广袖收完在 t=0.88 一带最窄处只有 46 毫米，
# 内袖顶出去就会从白荷叶边里钻出来。
T0_R, RM, R1 = 0.038, 0.050, 0.034
TM = 1.02               # 广袖袖口所在的位置，实测 1.025
# 内袖离广袖内壁留多少（米）。给 0 会 z-fighting，给多了又留缝。
LINING_GAP = 0.003
# 内袖至少要比胳膊粗这么多（米）。**下限不能写常数**：小臂从肘到腕是
# 40 毫米收到 25 毫米，给个 32 的常数，肘那头就把袖子勒进肉里了
# （`measure_hands` 报"透出袖子 3.0mm"就是这个）。所以下限也去量皮肤。
SKIN_GAP = 0.007
# 筒口那块环形盖板的内半径。要**小于手腕**（25 毫米），才会整个被手腕挡住；
# 给大了会看见一圈盖板边。起点那头也补一块，不然从袖口看进去是个空筒。
CAP_R = 0.020
RINGS, SEGS = 12, 24


def _smooth(x):
    x = min(max(x, 0.0), 1.0)
    return x * x * (3 - 2 * x)


def _radius(t):
    """内袖在 t 处的半径：先缓缓涨到广袖袖口那儿，再收下来贴住手腕。"""
    if t <= TM:
        return T0_R + (RM - T0_R) * _smooth((t - T0) / (TM - T0))
    return RM + (R1 - RM) * _smooth((t - TM) / (T1 - TM))


def envelope(arm, side, meshes, stations, frame, tag, inner=True):
    """量一层网格：每个「轴向站位 × 方位角」上，它的半径在哪。

    `tag` 是材质名里的关键字（`Tops` 是广袖、`_SKIN` 是胳膊）。
    `inner=True` 取最小值（广袖要的是**内**壁），否则取最大值
    （胳膊要的是**外**廓）。

    要在 `slim_sleeves` **之后**量——量的是收完之后的形状。
    （UV 也是在这之后取的：取样区间在上臂，`slim_sleeves` 只动肘以下，
    那一段它碰不到。）
    """
    sh, axis, span, u, v = frame
    names = {f"J_Bip_{side}_{b}" for b in ("UpperArm", "LowerArm", "Hand")}
    env = {}
    for o in meshes or []:
        mats = o.data.materials or []
        hit = {i for i, m in enumerate(mats) if m and tag in (m.name or "")}
        idx = {g.index for g in o.vertex_groups if g.name in names}
        if not hit or not idx:
            continue
        keep = {vi for p in o.data.polygons if p.material_index in hit
                for vi in p.vertices}
        for vi in keep:
            vert = o.data.vertices[vi]
            if sum(g.weight for g in vert.groups if g.group in idx) <= 0.5:
                continue
            p = o.matrix_world @ vert.co
            along = (p - sh).dot(axis)
            rad = (p - sh) - axis * along
            r = rad.length
            if r > 0.2:
                continue
            t = along / span
            a = math.atan2(rad.dot(v), rad.dot(u)) % (2 * math.pi)
            b = int(a / (2 * math.pi) * SEGS) % SEGS
            for si, (st, _) in enumerate(stations):
                if abs(t - st) < 0.07:
                    k = (si, b)
                    cur = env.get(k)
                    if cur is None:
                        env[k] = r
                    else:
                        env[k] = min(cur, r) if inner else max(cur, r)
    return env


def build(arm, side, material=None, meshes=None, hand_bind=False):
    """在静置姿势下建好这一侧的小臂袖，并绑到骨架上。

    **建在静置姿势、靠蒙皮跟着走**，不是摆完姿势再照着摆好的胳膊建。
    后者看着更省事，但那样它就不是模型的一部分了：换姿势、换表情、
    渲不同的层，每一处都得记得重建一次，漏一个就穿帮（和 `HIP_Y`
    写三份是同一类错，第 7 条）。静置姿势下这条胳膊是直的（实测弯 0.1°），
    一根轴就够。

    肘那一端的权重要在大臂和小臂之间过渡，否则肘一弯，筒子会在关节处
    整个崩开——真人的袖子在肘那里也是两头都跟着走的。
    """
    sh = arm.matrix_world @ arm.data.bones[f"J_Bip_{side}_UpperArm"].head_local
    wr = arm.matrix_world @ arm.data.bones[f"J_Bip_{side}_Hand"].head_local
    axis = (wr - sh).normalized()
    span = (wr - sh).length
    # 轴的两个法向。胳膊在静置姿势下沿 ±X，拿 Z 叉出来一定不退化
    u = axis.cross(Vector((0, 0, 1))).normalized()
    v = axis.cross(u).normalized()

    # 一圈起点的盖板 + RINGS+1 圈筒身 + 一圈袖口盖板
    stations = ([(T0, CAP_R)]
                + [(T0 + (T1 - T0) * i / RINGS, _radius(T0 + (T1 - T0) * i / RINGS))
                   for i in range(RINGS + 1)]
                + [(T1, CAP_R)])
    frame = (sh, axis, span, u, v)
    bell = envelope(arm, side, meshes, stations, frame, "Tops", inner=True)
    skin = envelope(arm, side, meshes, stations, frame, "_SKIN", inner=False)

    verts, faces, weights, angles = [], [], [], []
    # `centre` and the radial basis are measured in world space so the sleeve
    # can be fitted against the evaluated VRoid mesh.  The armature modifier,
    # however, consumes bind vertices in armature-object space.  The imported
    # armature is usually identity-transformed, which used to hide this
    # distinction; a later scene translation then exposed it as a large sleeve
    # offset.  Convert once at the authoring boundary instead of compensating
    # in a renderer.
    armature_from_world = arm.matrix_world.inverted()
    for si, (t, r) in enumerate(stations):
        centre = sh + axis * (t * span)
        for j in range(SEGS):
            a = 2 * math.pi * j / SEGS
            rr = r
            if 0 < si < len(stations) - 1:
                keys = [(si, (j + d) % SEGS) for d in (-1, 0, 1)]
                # 上限：贴着广袖内壁走。取本格和左右邻格的最小值，
                # 一来把量到的噪声磨平，二来宁可细一点也别顶穿出去。
                near = [bell[k] for k in keys if k in bell]
                if near:
                    rr = min(rr, min(near) - LINING_GAP)
                # 下限：**不能勒进胳膊里**。这一条压过上限——袖子陷进肉里
                # 是穿模，顶出广袖一点点只是两层布叠在一起，后者无所谓。
                meat = [skin[k] for k in keys if k in skin]
                if meat:
                    rr = max(rr, max(meat) + SKIN_GAP)
            world_point = centre + (u * math.cos(a) + v * math.sin(a)) * rr
            verts.append(armature_from_world @ world_point)
            angles.append(a)
            # 起点那头由大臂和小臂各分一半，往前一小段之内过渡完
            lower_w = _smooth((t - T0) / 0.10)
            hand_w = _smooth((t - 0.92) / 0.12) if hand_bind else 0.0
            hand_w = min(hand_w, lower_w)
            lower_w *= 1.0 - hand_w
            upper_w = max(0.0, 1.0 - lower_w - hand_w)
            weights.append((upper_w, lower_w, hand_w))

    for i in range(len(stations) - 1):
        for j in range(SEGS):
            k = (j + 1) % SEGS
            a, b = i * SEGS + j, i * SEGS + k
            c, d = a + SEGS, b + SEGS
            # 绕向定成从外面看是正面：袖筒内壁朝里，卡通着色才不会翻黑
            faces.append((a, b, d, c))

    mesh = bpy.data.meshes.new(f"Sleeve_{side}")
    mesh.from_pydata([tuple(p) for p in verts], [], faces)
    mesh.update()
    obj = bpy.data.objects.new(f"Sleeve_{side}", mesh)
    bpy.context.scene.collection.objects.link(obj)

    if material is not None:
        mat, ring = material
        mesh.materials.append(mat)
        # **UV 不能不给，也不能整块给同一个点。** 材质是借来的、里面接着
        # 衣服的贴图；没有 UV 层取到的是 (0,0)，那一块未必是这件衣服的颜色。
        # 整块摊在同一个点上倒是纯色，但**取到哪个点全凭运气**——
        # 第一版随手取了上臂袖子上的一个顶点，取中了一块偏深的，
        # 小臂就成了一截颜色更重的套袖，像戴了副手套。
        #
        # 现在是照**方位角**去上臂袖子上取一圈：贴图上那一圈本来就是绕着
        # 胳膊的，取回来颜色和明暗跟上臂完全连得上，接缝也就看不出来了。
        layer = mesh.uv_layers.new(name="UVMap")
        for poly in mesh.polygons:
            for li, vi in zip(poly.loop_indices, poly.vertices):
                layer.data[li].uv = _nearest_uv(ring, angles[vi])
    mesh.shade_smooth()

    lower = obj.vertex_groups.new(name=f"J_Bip_{side}_LowerArm")
    upper = obj.vertex_groups.new(name=f"J_Bip_{side}_UpperArm")
    hand = obj.vertex_groups.new(name=f"J_Bip_{side}_Hand") if hand_bind else None
    for i, (upper_w, lower_w, hand_w) in enumerate(weights):
        lower.add([i], lower_w, 'REPLACE')
        upper.add([i], upper_w, 'REPLACE')
        if hand is not None:
            hand.add([i], hand_w, 'REPLACE')
    # Keep the generated object under the armature.  Its vertices are now in
    # the armature's bind space, so object/armature transforms remain coherent
    # when the scene later moves the armature under Phase0Root.
    obj.parent = arm
    m = obj.modifiers.new("Armature", 'ARMATURE')
    m.object = arm
    return obj


def build_both(arm, meshes=None, hand_bind=False):
    """两侧一起建。

    **要在 `slim_sleeves` 之后调**：内袖的半径是照着收完之后的广袖内壁量的。
    UV 那一份不受影响——取样区间在上臂（肩→腕轴 32%…44%），
    `slim_sleeves` 只动肘以下。
    """
    return [build(arm, side, sleeve_ring(arm, meshes, side), meshes, hand_bind=hand_bind)
            for side in ("L", "R")]


def _nearest_uv(ring, angle):
    """在取回来的那一圈里找方位角最近的一个。角度是环形的，别忘了绕回去。"""
    best, bd = (0.0, 0.0), 9e9
    for a, uv in ring:
        d = abs((a - angle + math.pi) % (2 * math.pi) - math.pi)
        if d < bd:
            best, bd = uv, d
    return best


def sleeve_ring(arm, meshes, side, lo=0.32, hi=0.44):
    """从上臂那截袖子上取一整圈 `(方位角, UV)`，还有它用的材质。

    自己新建一个材质填个粉色是不行的——`toon_materials` 会把她身上每个材质
    改成"贴图 × 分级光照"，另建的材质要么没跟上那一套、要么颜色差一档，
    小臂和上臂就成了两块布。直接拿同一个材质，连贴图带着色全都一致。

    取样区间选在 `lo`…`hi`（肩→腕轴的 32%…44%）：那一段是上臂袖子的纯色底，
    往下就开始张成喇叭、还压着白荷叶边，取到那儿颜色就不对了。
    """
    sh = arm.matrix_world @ arm.data.bones[f"J_Bip_{side}_UpperArm"].head_local
    wr = arm.matrix_world @ arm.data.bones[f"J_Bip_{side}_Hand"].head_local
    axis = (wr - sh).normalized()
    span = (wr - sh).length
    u = axis.cross(Vector((0, 0, 1))).normalized()
    v = axis.cross(u).normalized()

    mat, ring = None, []
    for o in meshes or []:
        mats = o.data.materials or []
        hit = {i for i, m in enumerate(mats)
               if m and "Tops" in (m.name or "") and "CLOTH_03" not in m.name}
        if not hit or not o.data.uv_layers:
            continue
        uvs = o.data.uv_layers.active.data
        for p in o.data.polygons:
            if p.material_index not in hit:
                continue
            for li, vi in zip(p.loop_indices, p.vertices):
                w = o.matrix_world @ o.data.vertices[vi].co
                along = (w - sh).dot(axis)
                if not (lo < along / span < hi):
                    continue
                rad = (w - sh) - axis * along
                ring.append((math.atan2(rad.dot(v), rad.dot(u)),
                             tuple(uvs[li].uv)))
                mat = mat or mats[p.material_index]
    return (mat, ring) if mat and ring else None

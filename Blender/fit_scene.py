"""把角色对到**交付的成品房间图**上——报数，不渲染，几秒钟一轮。

    blender --background --factory-startup --python Blender/fit_scene.py -- Snozzy.vrm

用户直接给了一张画好的房间图（不再是"我出灰模、它上色"那条路），
于是角色要反过来去对那张图。这个脚本量三件事，全在画布坐标上：

- **她落在哪**：整个角色的画布包围盒。要坐进椅子里，不能压到左边的大屏
- **键盘落在哪**：要落在桌板带里，别掉到桌沿外面去
- **桌面高度对不对**：把 `keyboard.DESK_Z` 那个平面的前后沿投回画布，
  和量出来的桌沿行对一下

改的旋钮只有两个：`snozzy_lib.scene_camera(shift=)` 横向挪、
`snozzy_lib.HIP_Y` 纵向挪。**别去动角色的 location**——键盘是世界坐标里的，
角色一动就和手错开了；挪相机则是整套一起挪。
"""
import os
import sys

import bpy
from mathutils import Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P, keyboard as K

VRM = sys.argv[-1] if sys.argv[-1].endswith(".vrm") else "Snozzy.vrm"

# 成品图上量出来的（`Scripts/desk_mask.py` 的文件头有量法）
DESK_BACK_ROW = 608
DESK_FRONT_ROW = 735
CHAIR_X = (680, 970)          # 椅子的横向范围，她该坐在这中间
MONITOR_RIGHT_X = 653         # 画上去那块大屏的右缘，她和键盘都不能压过去


def canvas(scene, p):
    from bpy_extras.object_utils import world_to_camera_view
    v = world_to_camera_view(scene, scene.camera, p)
    return (v.x * scene.render.resolution_x, (1 - v.y) * scene.render.resolution_y)


def bbox(scene, meshes):
    dg = bpy.context.evaluated_depsgraph_get()
    x0 = y0 = 1e9
    x1 = y1 = -1e9
    for o in meshes:
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        for v in me.vertices:
            x, y = canvas(scene, ev.matrix_world @ v.co)
            x0, x1 = min(x0, x), max(x1, x)
            y0, y1 = min(y0, y), max(y1, y)
        ev.to_mesh_clear()
    return x0, y0, x1, y1


def main():
    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    P.settle(scene, arm, press=0.0)

    x0, y0, x1, y1 = bbox(scene, meshes)
    cx = (x0 + x1) / 2
    seat = (CHAIR_X[0] + CHAIR_X[1]) / 2
    print(f"HIP_Y={S.HIP_Y}  相机 shift={getattr(S, 'CAM_SHIFT', 0.06)}")
    print(f"  她的画布占位  x {x0:.0f}–{x1:.0f}（中心 {cx:.0f}）"
          f"  y {y0:.0f}–{y1:.0f}")
    print(f"  椅子中心 {seat:.0f}  →  还差 {seat - cx:+.0f}px"
          f"{'  ✓' if abs(seat - cx) < 25 else '  ✗ 没坐在椅子上'}")
    print(f"  她的左缘 {x0:.0f} vs 大屏右缘 {MONITOR_RIGHT_X}"
          f"{'  ✓' if x0 >= MONITOR_RIGHT_X else '  ✗ 压到大屏上了'}")

    # 桌面平面投回画布：后沿、前沿两条线对不对得上量出来的行
    back = canvas(scene, Vector((0, K.DESK_BACK_Y, K.DESK_Z)))[1]
    front = canvas(scene, Vector((0, K.DESK_FRONT_Y, K.DESK_Z)))[1]
    print(f"  桌面平面投回画布：后沿 {back:.0f}（图上 {DESK_BACK_ROW}）"
          f"  前沿 {front:.0f}（图上 {DESK_FRONT_ROW}）")

    # 对不上就把图上那两行**投回 3D**，解出新的前后沿——这是 HANDOFF 里
    # 那条"桌面位置从画面反推"的做法：桌高 0.725 是真实尺寸、不动，
    # 动的是桌子在进深上的前后位置。
    def solve_row(row, lo=-2.0, hi=0.6):
        for _ in range(60):
            mid = (lo + hi) / 2
            if canvas(scene, Vector((0, mid, K.DESK_Z)))[1] > row:
                lo = mid          # y 越小越靠近镜头、行越大
            else:
                hi = mid
        return (lo + hi) / 2
    print(f"  → 图上那两行反推回 3D：DESK_BACK_Y = {solve_row(DESK_BACK_ROW):+.3f}"
          f"  DESK_FRONT_Y = {solve_row(DESK_FRONT_ROW):+.3f}")

    kbd = bpy.data.objects.get("Keyboard")
    if kbd:
        pts = [Vector((sx * K.WIDTH / 2, sy * K.DEPTH / 2, 0)) for sx in (-1, 1)
               for sy in (-1, 1)]
        cs = [canvas(scene, kbd.matrix_world @ p) for p in pts]
        kx0, kx1 = min(c[0] for c in cs), max(c[0] for c in cs)
        ky0, ky1 = min(c[1] for c in cs), max(c[1] for c in cs)
        print(f"  键盘画布占位  x {kx0:.0f}–{kx1:.0f}  y {ky0:.0f}–{ky1:.0f}"
              f"{'  ✓' if kx0 >= MONITOR_RIGHT_X and ky1 <= DESK_FRONT_ROW else '  ✗ 出桌面了'}")


if __name__ == "__main__":
    main()

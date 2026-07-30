"""渲染腿部姿势变体，以及姿势之间的过渡帧。

共用同一台相机，所以所有图都像素级对齐。

**为什么要渲过渡帧**：原来换姿势是把两张成品图交叉淡入，看起来是"溶解"
而不是"挪腿"——腿在半透明状态下同时出现在两个位置。位图没有骨骼可驱动，
想要真的动就只能把中间姿势也渲出来，靠 `pose.blend_legs` 插值算中间帧。

**中枢结构**：所有过渡都经过 `pose.HUB`（并膝那一套），
于是 N 套姿势只要 N−1 段序列，不是 N×(N−1) 段。
A → B 播成「A 收回中枢」倒放 + 「中枢摆到 B」正放，
物理上也对——真人换腿确实是先收回再摆出去。

每套姿势要重新导入一次模型：姿势是累加在骨骼上的，不重载会串。
"""
import bpy, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P

VRM, OUT = sys.argv[-2], sys.argv[-1]
os.makedirs(OUT, exist_ok=True)


def render(legs, path):
    """摆好 `legs` 这套腿姿渲一张。`legs` 可以是姿势名，也可以是插值出来的方向。"""
    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    S.toon_materials(); S.room_lights()
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    # 坐姿 → 落位 → 手放到键盘上。顺序由 `pose.settle` 保证
    P.settle(scene, arm, legs=legs)
    lo, hi = S.frame_extent(scene, meshes)
    scene.render.filepath = os.path.join(OUT, path)
    bpy.ops.render.render(write_still=True)
    return lo, hi


for style in P.LEG_POSES:
    lo, hi = render(style, f"snozzy_{style}.png")
    print(f"POSE {style}  纵向占位 {lo:.3f}…{hi:.3f}"
          + ("  ← 出画" if hi > 0.995 else ""))

# 中间帧。t 取 (i+1)/(steps+1)：两端是成品姿势，中间均分。
# 编号 00 最靠中枢，运行时倒放就是"把腿收回来"。
for style in P.LEG_POSES:
    if style == P.HUB:
        continue
    for i in range(P.TRANS_STEPS):
        t = (i + 1) / (P.TRANS_STEPS + 1)
        dirs = P.blend_legs(P.HUB, style, t)
        lo, hi = render(dirs, f"trans_{style}_{i:02d}.png")
        print(f"TRANS {style} {i:02d} t={t:.3f}  纵向占位 {lo:.3f}…{hi:.3f}"
              + ("  ← 出画" if hi > 0.995 else ""))

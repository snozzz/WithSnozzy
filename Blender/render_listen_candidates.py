"""挑"按着耳机听"终态参数用的 1× 候选渲染（不出运行时素材）。

    blender --background --factory-startup --python Blender/render_listen_candidates.py -- Snozzy.vrm 输出目录

每组参数渲一张戴耳机的终态（1×，几秒一张），再报三个数：
大臂偏离竖直多少度、肘比肩低多少、手腕离耳罩多远。选定后由
`render_action.py listen` 出完整的 2× 动作。
"""
import bpy, math, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import snozzy_lib as S, pose as P, keyboard as K, headphones as HP, props as PR  # noqa: E402
import face_regions as FR  # noqa: E402

args = sys.argv[sys.argv.index("--") + 1:]
VRM, OUT = args[:2]
os.makedirs(OUT, exist_ok=True)

# name: (wrist, hand_dir, hand_roll, curl, elbow, head_roll, head_pitch)
CANDIDATES = {
    "j_roll_more": ((0.015, 0.000, -0.075), (0.00, 0.15, 1.0), 1.9, None, (0.5, -0.4, -1.0), None, None),
    "k_wrap": ((0.015, 0.005, -0.080), (0.00, 0.20, 0.98), 2.1, 0.58, (0.5, -0.4, -1.0), None, None),
    "l_wrap_back": ((0.018, 0.015, -0.078), (-0.05, 0.30, 0.95), 2.0, 0.55, (0.5, -0.3, -1.1), None, None),
    "m_tilt_more": ((0.015, 0.005, -0.080), (0.00, 0.20, 0.98), 2.1, 0.58, (0.5, -0.4, -1.0), 0.13, 0.07),
}
ONLY = args[2:] or list(CANDIDATES)


def apply(c):
    defaults = (P.LISTEN_WRIST, P.LISTEN_HAND_DIR, P.LISTEN_HAND_ROLL, P.LISTEN_CURL,
                P.LISTEN_ELBOW, P.LISTEN_HEAD_ROLL, P.LISTEN_HEAD_PITCH)
    vals = defaults if c is None else tuple(v if v is not None else d
                                            for v, d in zip(c, defaults))
    (P.LISTEN_WRIST, P.LISTEN_HAND_DIR, P.LISTEN_HAND_ROLL, P.LISTEN_CURL,
     P.LISTEN_ELBOW, P.LISTEN_HEAD_ROLL, P.LISTEN_HEAD_PITCH) = vals


for name in ONLY:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    apply(CANDIDATES[name])
    meshes = S.load(VRM)
    scene = S.setup_scene(res=1536)
    scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    S.scene_camera(scene)
    kbd = K.build(); PR.build()
    kbd.hide_render = True
    S.toon_materials(); S.room_lights()
    P.settle(scene, arm)
    HP.build(arm, meshes)
    wrist, cup = P.listen(arm, scene, amount=1.0)
    sh = arm.matrix_world @ arm.pose.bones["J_Bip_L_UpperArm"].head
    el = arm.matrix_world @ arm.pose.bones["J_Bip_L_LowerArm"].head
    wr = arm.matrix_world @ arm.pose.bones["J_Bip_L_Hand"].head
    upper = (el - sh)
    angle = math.degrees(math.acos(max(-1, min(1, -upper.z / upper.length))))
    eye_hits, mouth_hits, eye_gap = FR.hand_cover(meshes, arm, scene, "L", S.ARM_BONES)
    print(f"CAND {name}: 大臂偏离竖直 {angle:.1f}°  肘比肩低 {100 * (sh.z - el.z):.1f}cm  "
          f"腕离耳罩 {100 * (wr - cup).length:.1f}cm  "
          f"挡眼 {eye_hits}  挡嘴 {mouth_hits}  离眼区 {eye_gap:.0f}px")
    scene.render.filepath = os.path.join(OUT, f"{name}.png")
    bpy.ops.render.render(write_still=True)

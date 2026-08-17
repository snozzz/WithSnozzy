"""长动作的清单。**只此一份**，Blender 那边和切片那边都读它。

之前伸懒腰是把托腮那套脚本抄了一份改名字，加第三条动作时就该抄第三份了——
而每一份都有自己的文件名、帧数、手层规则，迟早各错各的（第 46 条那个坑
在判据上出现过一次，在管线上是同一件事）。

一条动作的时间轴长这样：

    常态 base(-1) → 中间帧 00…07 → 终态(08) → hold 00…H-1（循环）→
    终态 → 07…00 → base → 常态

`holds` 是"到位之后停在那儿的那一段"有几张。它不是可有可无的装饰：
**停留期间只放一张静止图，正是"像做操"的来源**——举上去、冻两秒、放下来，
读起来就是三拍的体操。hold 那一列是一个完整的呼吸/摆动周期，
运行时循环播，动作才有"停在那儿但人还活着"的感觉。

`prop` 是这条动作要拿起来的道具（`Blender/props.py` 里的物体名）。
带道具的动作是两段式的（伸手 → 抓住 → 举起来用），见 `pose._two_stage`。
"""

# 每条动作的中间帧数。和托腮一致，也和 `CloseUp.transitionFrames` 一致；
# 帧长受动画 tick 约束（第 18 条），加帧只会把动作拖长，不会更顺。
TRANSITION_FRAMES = 8

ACTIONS = {
    # 伸懒腰：两条胳膊一起举，桌面那一层里一只手都不留（第 60 条）
    "stretch": {
        "holds": 6,
        "prop": None,
        "face": "facestretch2x",
        "body": "snozzy_body_stretch2x",
        "phones": "snozzy_body_stretch_headphones2x",
        "hand": "snozzy_stretch_hand",
        "manifest": "stretch.json",
        "hands_keep": (),          # 两条都抬，靠腕高判定
    },
    # 喝咖啡：左手端杯子，右手一直在键盘上
    "coffee": {
        "holds": 6,
        "prop": "Mug",
        "face": "facecoffee2x",
        "body": "snozzy_body_coffee2x",
        "phones": "snozzy_body_coffee_headphones2x",
        "hand": "snozzy_coffee_hand",
        "manifest": "coffee.json",
        "hands_keep": ("R",),
    },
    # 玩手机：左手拿手机，右手留在键盘上；hold 那一段是拇指在敲屏幕，
    # 也是这条动作的主体。六张一圈里拇指点两下（`pose.phone` 用 2× 相位），
    # 循环三到六圈，读起来就是"在回消息"
    "phone": {
        "holds": 6,
        "prop": "Phone",
        "face": "facephone2x",
        "body": "snozzy_body_phone2x",
        "phones": "snozzy_body_phone_headphones2x",
        "hand": "snozzy_phone_hand",
        "manifest": "phone.json",
        "hands_keep": ("R",),
    },
}


def spec(name):
    if name not in ACTIONS:
        raise SystemExit(f"不认识的动作 {name!r}，可选：{sorted(ACTIONS)}")
    return ACTIONS[name]


def face_frames(name):
    """这条动作要出几套面部贴片：中间帧 + 终态 + hold。

    每一档头的姿势都不一样，贴片矩形跟着脸走，所以**一档一套**，
    不能拿终态那套跨档硬贴（第 22 条）。
    """
    return TRANSITION_FRAMES + 1 + spec(name)["holds"]

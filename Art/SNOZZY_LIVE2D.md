# 做 Snozzy 的 Live2D 模型

给没有美术功底的人用的流程。核心思路是**把"分层"变成"图像差分"**——
你只负责让图像 AI 反复做局部编辑，机械活全部交给脚本。

```
 ①立绘  ──→ ②剥离序列 ──→ split_layers.py ──→ ③零件 PNG
                                                    │
 ④眼部零件表 ──→ prepare_assets.py ────────────────┤
                                                    ↓
                                             build_psd.py
                                                    ↓
                                            snozzy.psd ──→ ⑤Cubism 绑定 ──→ .moc3
```

---

## ① 立绘

让图像 AI 出一张，2048×2048。提示词：

> 二次元 lofi 插画风格的半身立绘。角色**略微向左转身约 15 度**，
> 面部基本朝向观众，中性表情。
>
> 角色：白色长发少女，齐刘海，两侧各一缕垂发，发尾微卷，一根呆毛；
> 头两侧各一个红色发带；浅蓝灰色眼睛，睁开；嘴闭合、微微上扬；
> 米色针织开衫 + 白衬衫 + 深蓝色领结；安静温柔的文科生气质。
>
> 构图：腰部以上，**双臂自然垂在身侧、不做任何动作**（手部姿势另外画）。
> 视平线略高于她的眼睛，像是从斜上方看过去。
> 背景：**纯品红 #FF00FF，完全平涂**，没有渐变、阴影、光晕、装饰。
> 光照：均匀平光，**不要方向光和投影**。
> 不要画：桌子、椅子、书、道具、文字、水印、边框。
>
> 线稿清晰，色块干净，不要厚涂笔触。

几条约束是有原因的，别改：

- **纯品红背景**——脚本按"绿通道明显低于红蓝"抠图，画面里不会有别的东西撞这个色。
- **平光、无投影**——阴影是画死在像素里的。部件一动，影子留在原地就穿帮了。
  真正的光影由我们的引擎在运行时叠（`PaintedRoom.ambient()` 那一套）。
- **只转 15 度，不要更多**。房间是 3/4 斜视角，所以她也得斜一点才和场景搭得上；
  但转过 25 度之后脸就不对称了，左右眼、左右眉、左右侧发全都要单独绑，
  工作量翻倍，而且 Cubism 的模板全是正面的，套过来会歪。
  **"斜"的感觉主要由桌子和房间的透视提供，不需要她也大幅转。**
- **中性表情、手臂不做动作**——这是绑定的中间态。表情靠参数变形出来，
  手部动作靠切换另外画的姿势图层组（见 ⑥）。

出到满意为止再往下走。**这张图定了，后面十几步都基于它**，返工代价很大。

---

## ② 剥离序列

从立绘开始，每一步**在上一步的结果上**继续局部编辑：擦掉一个部件，
并补全它底下原本被遮住的内容。存成按顺序编号的文件。

| 文件 | 编辑指令 | 差分得到 |
|---|---|---|
| `00_base.png` | （立绘原图） | |
| `01.png` | 擦掉呆毛 | 呆毛 |
| `02.png` | 擦掉两侧红色发带，补全底下的头发 | 发带 |
| `03.png` | 擦掉刘海，补全完整的额头 | 刘海 |
| `04.png` | 擦掉两侧垂发，补全脸颊、耳朵、肩膀 | 侧发 |
| `05.png` | 擦掉眉毛，补全额头皮肤 | 眉毛 |
| `06.png` | 擦掉双眼，补全眼窝处的皮肤 | 眼睛 |
| `07.png` | 擦掉嘴，补全下半张脸 | 嘴 |
| `08.png` | 擦掉腮红 | 腮红 |
| `09.png` | 擦掉整个头部和脖子，补全底下的后发和肩膀 | 脸 |
| `10.png` | 擦掉后发，只剩身体 | 后发 |
| `11.png` | 擦掉领结 | 领结 |
| `12.png` | 擦掉衣领，只剩开衫躯干 | 衣领 |

最后一张 `12.png` 本身就是最底层。

```bash
python3 Scripts/split_layers.py 'Art/edits/*.png' \
    --names ahoge,hair_ribbon,hair_front,hair_side,brow,eye,mouth,blush,face,hair_back,collar_ribbon,collar,body \
    --out Art/parts/
```

### 这一步的三条铁律

1. **必须是局部编辑**（inpaint／涂抹重绘），不能整图重新生成。
   整图重生成会导致处处都有差异，差分就退化成"整张图"，毫无意义。
2. **必须链式往下做**，每步基于上一步的输出，不是每次回到 `00_base` 重编辑。
3. **被擦掉的地方要补全，不是留白**。第 6 步"擦掉眼睛"补出来的那片皮肤，
   就是她闭眼时你会看到的眼皮——补成白色或者留个洞，闭眼就是两个窟窿。

### 出问题时调什么

脚本会打印每层占画布的百分比，`← 可疑：几乎没有差异` 就是那一步 AI 其实没改动。

- 抠出来带一圈**细弧线描边** → 对齐残差。默认 `--min-thickness 1` 会清掉，
  还有就加到 2。
- 抠出来**像筛子**（内部一堆针孔）→ 部件和底下颜色太接近，降 `--threshold`（默认 26）。
- 抠出来**糊成一大片** → 那一步 AI 动了不该动的地方，重做那一步。
- 抽眼线、睫毛这类本来就极细的部件 → `--min-thickness 0`，否则会被当细丝清掉。

---

## ③ 眼部零件表

剥离序列给出的"眼睛"是一整块，没法做眨眼。眼睛必须拆成子部件单独生成：

> 品红背景 #FF00FF，横向一排，互不重叠，每个零件之间留出明显空隙。
> 同一风格的二次元眼部零件，浅蓝灰色系：
> ①眼白（完整的杏仁形，纯白微灰）②虹膜（**完整的圆形**，浅蓝灰，
> 有渐变和瞳孔）③高光（白色椭圆）④上眼线（深褐色粗弧线）
> ⑤下眼线（细弧线）⑥睫毛（三根，深褐色）⑦眉毛（细长弧形）
> ⑧闭合的嘴（小弧线）⑨口腔（深红色椭圆）

```bash
python3 Scripts/prepare_assets.py Art/eye_sheet.png --bands 0 \
    --names eye --split eye --out Art/parts/
```

**虹膜一定要画成完整的圆**。眼球转动时它会滑到眼白边缘，画成杏仁形的话
一转就露馅。露在眼白外面的部分靠 Cubism 的剪贴蒙版裁掉。

切出来的零件用清单里的 `at` 字段定位到脸上（坐标去 `00_base.png` 上量）。

---

## ④ 拼 PSD

编辑 `Art/parts/layers.json`——顺序就是图层面板里从上到下的顺序：

```json
{"layers": [
  {"name": "ahoge",        "file": "ahoge.png",        "group": "hair_front"},
  {"name": "hair_ribbon",  "file": "hair_ribbon.png",  "group": "hair_front"},
  {"name": "hair_front",   "file": "hair_front.png",   "group": "hair_front"},
  {"name": "hair_side",    "file": "hair_side.png",    "group": "hair_side"},

  {"name": "brow_L",       "file": "eye_6.png",  "group": "brow", "at": [780, 690]},
  {"name": "brow_R",       "file": "eye_6.png",  "group": "brow", "at": [1080, 690]},

  {"name": "eyelash_L",    "file": "eye_5.png",  "group": "eye_L", "at": [790, 800]},
  {"name": "eyeline_L",    "file": "eye_3.png",  "group": "eye_L", "at": [780, 795]},
  {"name": "highlight_L",  "file": "eye_2.png",  "group": "eye_L", "at": [820, 815]},
  {"name": "iris_L",       "file": "eye_1.png",  "group": "eye_L", "at": [800, 810]},
  {"name": "eyewhite_L",   "file": "eye_0.png",  "group": "eye_L", "at": [780, 800]},

  {"name": "mouth",        "file": "eye_7.png",  "group": "mouth", "at": [960, 1010]},
  {"name": "mouth_in",     "file": "eye_8.png",  "group": "mouth", "at": [960, 1015]},
  {"name": "blush",        "file": "blush.png",        "group": "face"},
  {"name": "face",         "file": "face.png",         "group": "face"},

  {"name": "collar_ribbon","file": "collar_ribbon.png","group": "body"},
  {"name": "collar",       "file": "collar.png",       "group": "body"},
  {"name": "body",         "file": "body.png",         "group": "body"},
  {"name": "hair_back",    "file": "hair_back.png",    "group": "hair_back"}
]}
```

```bash
python3 Scripts/build_psd.py Art/parts/ --out Art/snozzy.psd
```

`group` 相邻相同的会合成一个 PSD 图层组，Cubism 导入后变成"部件"（パーツ）。

---

## ⑤ Cubism 里的绑定

Cubism Editor 个人用免费。**免费版对部件数等有上限，动手前先去官网确认当前版本的限制。**

1. 新建模型，导入 `snozzy.psd`
2. 全选图形网格 → **自动生成网格**（AutoMesh）
3. **模板适用**（テンプレート適用）——这是非美术能拿到能动的脸的关键：
   Live2D 官网有免费样例模型，它们自带完整的脸部绑定。在对话框里把你的
   部件一一对应到模板的部件上，整套变形器、参数、关键形状会被搬过来。
   先用模板跑通，再回头微调，不要从零手绑。
4. 物理演算：给头发和领结加摇摆。这一步纯参数，照着官方教程点几下。
5. 导出 `.moc3` + `.model3.json` + 贴图，整个目录丢进仓库的 `Models/`
6. 跑 `Scripts/check_live2d.sh` 验证

### 我们的引擎期望的 22 个参数

全是 Live2D 标准 ID，模板适用之后基本自动就有了。
少几个也能跑（`Live2DPoseBinding` 会跳过缺失的），只是对应的动作没了。

```
ParamAngleX  ParamAngleY  ParamAngleZ            头部朝向
ParamEyeLOpen  ParamEyeROpen                     眨眼
ParamEyeLSmile ParamEyeRSmile                    笑眼
ParamEyeBallX  ParamEyeBallY                     视线
ParamBrowLForm ParamBrowRForm                    眉形
ParamMouthForm ParamMouthOpenY                   嘴
ParamCheek                                       脸红
ParamBodyAngleX ParamBodyAngleY ParamBodyAngleZ  身体
ParamBreath                                      呼吸
ParamHairAhoge ParamHairFront ParamHairSide ParamHairBack   头发摇摆
```

另外还要一个**自定义**参数 `ParamPose`（整数 0…4），用来切换手部姿势组，见下一节。

---

## ⑥ 手部姿势组

场景是 3/4 俯视，看得见桌面，所以她的手会入画——"她在敲键盘/看书"全靠这个。

**手臂不用绑定，只需要切换。** Live2D 做大幅肢体动作的标准手段是
**部件不透明度切换**，不是变形：2D 变形只能做小幅位移，手臂抬起会被拉成橡皮泥。
商业 VTuber 模型的多姿势全是切图层。

给每个姿势单独出一张图，**和立绘同一张画布、同一个角色位置**，
只画手臂和手，其余留品红：

| `ParamPose` | 内容 | 提示词要点 |
|---|---|---|
| 0 | 双手轻放桌面 | 默认状态，手指自然松弛 |
| 1 | 双手放在键盘上打字 | 手指微曲，手腕略抬 |
| 2 | 双手捧着一本摊开的书 | 书本身不要画，由场景层提供 |
| 3 | 右手握笔写字，左手压着纸 | 笔要画，跟着手走 |
| 4 | 右手端着马克杯 | 杯子不要画，由场景层提供 |

> 承接上一张立绘的角色。**只画手臂和双手**，姿势为「双手放在键盘上打字，
> 手指微曲」。手臂从画面下缘进入，袖子是同款米色针织开衫。
> 画布尺寸、角色比例、光照、画风与上一张完全一致。
> 其余区域**纯品红 #FF00FF**。

打字动画的最省事做法：姿势 1 出**两张**（手指抬起 / 按下），交替显示即可，
不需要逐指绑定。

在 Cubism 里：把这几组分别放进独立的部件，给 `ParamPose` 的每个整数值
设一组关键形状，只切不透明度。

姿势之间硬切会跳，但切换时角色本来就在做别的动作（低头、前倾），
视觉上盖得住。真嫌生硬就加 0.15 秒交叉淡入。

---

## 已知的难点

按难度排：

1. **第 9 步"擦掉整个头部"最难**。AI 要在脸原来的位置补出后发和肩膀，
   这是整条序列里重建面积最大的一步。如果实在补不好，退一步：
   把脸和身体合成一层，代价是头部不能独立旋转，`ParamAngleX/Y/Z` 的
   幅度要压到很小才不穿帮。
2. **风格一致性**。局部编辑通常能保持，但连做十几步之后可能会飘。
   每步做完和 `00_base.png` 比一眼。
3. **闭眼的眼皮**（第 6 步补出来的皮肤）质量直接决定眨眼好不好看。
   这一小块值得多试几次。

跑不通的那一步，把 `split_layers.py` 打印的百分比和那两张图发给我。

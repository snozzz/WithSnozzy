# WithSnozzy 交接文档

写给接手的新会话。读完这份就能直接干活，不用回溯之前的对话。

---

## 一、这是什么

macOS 上的 lofi 陪伴应用，对标《放松时光：与你共享 Lo-Fi 故事》。
女主叫 **Snozzy**。作者自用，不发布。

**硬约束**（用户反复强调过）：

- 包体 < 1GB，运行内存 < 500MB。目前包 11MB，闲时内存约 66MB
- **代码优化到极致，同时要方便维护**——后者是后来补的，优先级同样高
- 零第三方 Swift 依赖。`Package.swift` + `Scripts/build_app.sh` 就是全部构建系统
- 每完成一个功能就 push 到 `git@github.com:snozzz/WithSnozzy.git`
- **提交描述要简约克制**，用户明确说过之前写得"看得脚趾头抠地"

技术栈：SwiftUI + SPM，Swift 6 跑 `.swiftLanguageMode(.v5)`。
音频是实时 DSP 合成（AVAudioSourceNode 渲染回调，音频线程零分配零锁）。

---

## 二、美术管线（最重要的一节）

这是踩坑最多、也最容易重复犯错的地方。**动手前务必读完。**

### 总体结构

```
角色： Snozzy.vrm ──Blender──> Assets/snozzy_*.png        （纯自动，可重复跑）
场景： Scripts/blocking.py ──> 灰模 ──用户拿去 Gemini 重绘──> Art/scene_empty.png
                                              │
                                    Scripts/cut_scene.py
                                              ↓
                                  Assets/room.png + desk.png
运行时叠加顺序： room（窗洞挖空，塞程序化天空） → 角色 → desk
```

三层都是 1536×1024、同一台相机，**像素级对齐**，所以运行时全部满幅绘制，
不做任何缩放和对位。`SceneManifest.roomFit == "fill"` 就是这个意思。

### 角色：VRoid → Blender → PNG

`Snozzy.vrm` 是用户在 VRoid Studio 捏的（粉色中式衣裙、银发双马尾、
**带一条狐狸尾巴**，坐着时被桌子挡住）。19MB，已入库。

**不需要 VRM 插件**——Blender 自带的 glTF 导入器就能完整读出 222 根骨骼、
58 个形态键、20 个未合并的材质。

```bash
# 五套腿部姿势 + 姿势之间的过渡帧（49 张，约 2 分 20 秒）
blender --background --factory-startup --python Blender/render_poses.py -- Snozzy.vrm 输出目录
# 戴耳机那一层（要和上面渲进同一个目录）
blender --background --factory-startup --python Blender/render_layers.py -- Snozzy.vrm 输出目录
# 切成「共用的上半身 + 每帧一小块腿」，同时生成 Assets/legs.json
python3 Scripts/leg_frames.py 输出目录 --out Assets
python3 Scripts/leg_metrics.py Assets       # 顺手量一下腿的横向占位

# 面部贴片（眨眼/视线/嘴角）
blender --background --factory-startup --python Blender/render_face.py -- Snozzy.vrm 输出目录
python3 Scripts/face_patches.py 输出目录 --out Assets
```

Blender 在 `/Applications/Blender.app/Contents/MacOS/Blender`（5.2 LTS）。

**腿部姿势和过渡的结构**（`Blender/pose.py` 的 `LEG_POSES`）：

每套姿势写成「左腿三段 + 右腿三段」的世界朝向，**两条腿分开写**。原来是
「一套方向 + 左右镜像」，二郎腿这种非对称姿势塞不进去，而且没法插值——
过渡帧就是插出来的，所以这个结构是前提。

换姿势**不是交叉淡入**，是播真的中间帧。所有过渡都经过 `HUB`（并膝那一套），
于是 5 套姿势只要 4 段序列而不是 20 段；A → B 播成「A 收回中枢」倒放接
「中枢摆到 B」正放，物理上也对。运行时那一半在 `LegPose.swift`。

素材按 `legs.json` 的 `seam`（y=600）切成上下两半：**缝线以上所有帧共用一张**
（同一台相机、同一个上半身姿势）。不切的话五十来张整幅图是 30MB 包体、
200MB 内存。顺带解决了一个老问题——原来戴耳机时盖的是一整张图，腿是冻住的。

### 场景：灰模 → 重绘 → 切层

**不要用文字描述构图。** 试过两轮都没收敛（视角变成俯拍、没有她能坐的
位置）——空间关系本来就不该用形容词表达。正确做法是先出灰模再让重绘上色：

```bash
python3 Scripts/blocking.py                    # 生成 Art/blocking/{layout.png,mask_desk.png,layout.json}
cp Art/blocking/layout.png Art/blocking_for_repaint.png
# → 用户上传给 Gemini 重绘，要一张有人的（看效果）和一张没人的（入库）
python3 Scripts/cut_scene.py Art/scene_empty.png --out Assets
```

重绘对构图的保持度是**实测过的**：窗洞误差 3–9 像素，桌沿/回折臂/桌腿全部对上。
所以「我定构图、它上色」这条路是可靠的。

切层用**灰模自带的遮罩**而不是从成品抠色——重绘会改颜色、加辉光和雾，
颜色抠不干净；遮罩是画灰模时定义的，形状精确且免费。

### 用户对美术的明确偏好

- **不要 Gemini 重绘角色**。试过，它把发丝和五官都揉软了，用户不喜欢。
  角色一律用 Blender 渲染 + 卡通着色，"要明媚清爽，加点阴影"
- 房间要**明亮干净的赛博朋克**，浅色墙、木地板、柔和粉青灯带。
  **明确不要**裸露线缆、管道、机架、锈迹、重阴影这类硬工业风
- 之前那间暗房用户不喜欢，已废弃
- 用户对"简笔画"零容忍，说过"不能做的提前说，而不是做一坨屎给我"

---

## 三、踩过的坑（会重复犯的那种）

每一条都真实浪费过时间，而且都属于"代码看着对但画面错"。

**1. 骨骼的 Y 轴不是肢体方向**，能差整整 90°。glTF 没有骨骼朝向信息，
Blender 按自己的启发式定向。摆姿势必须用 `pose._limb_dir()`（本骨骼头部 →
子骨骼头部），照 Y 轴摆会得到数值分毫不差的稻草人。

**2. `_limb_dir` 要跟同族的子骨骼走。** 头骨底下挂着 14 根头发弹簧骨，
取"最远的子骨骼"会挑中一撮头发，于是"把头摆正"变成"把那撮头发摆正"，
头被带得又低又歪。规则是 `J_Bip_` 跟 `J_Bip_`、`J_Sec_` 跟 `J_Sec_`。

**3. 裙子的命名要看清楚。** `SkirtFront1_02` 里 **Front 后面的数字才是段号**
（0 在腰、2 在下摆），`_02` 是周向第几片。按后缀分段等于把第一段的方向
套给整条裙子。而且**必须在摆完腿之后再铺裙**。

**4. EEVEE 的 `BLENDED` 不写深度**，重叠部件没有前后关系——表现是透过裙子
看得见背后的书架。用 `DITHERED` + 高采样数。

**5. `object.bound_box` 不含骨架形变**，照它取景会把头顶切掉。
要用求值后的依赖图（`snozzy_lib.deformed_bounds`）。

**6. 不要用「落到地面 z=0」来定位角色。** 3D 的地面和画上去的地板毫无关系——
桌子是 2D 灰模里画的，位置由构图定。唯一有意义的参照是画面坐标，
所以有 `snozzy_lib.place_hip()` 和常量 `HIP_Y`。

**7. `HIP_Y` 只此一份。** 之前三个渲染脚本各写一份数值，改了两个漏了
`render_face.py`，面部贴片整整错了一轮（错位九十像素，表现是"贴片完全没生效"）。

**8. 脚出画不是取景问题，是透视。** 脚比躯干更靠近镜头，而画幅下边界在近处
更高。`snozzy_lib.frame_extent()` 直接报角色的纵向占位，出没出画是量出来的。

**9. 换姿势不要用交叉淡入，位图溶解不出动作。** 两套姿势的成品图按互补不透明度
淡过去，看起来是"虚化"而不是"挪腿"——半透明期间两条腿同时出现在两个位置。
（互补不透明度本身是必须的：旧层画全不透明的话，过渡完成后它还在下面，
两套姿势腿位置不同 → **桌下永久四条腿**。但那只是修掉了更糟的 bug。）
正解是把中间姿势也渲出来，见第二节。

**10. 嵌套的 `GeometryReader` 在 ZStack 里拿到的提议尺寸不等于最终布局尺寸。**
面部贴片因此算到错的位置上，表现是完全看不见。尺寸要由调用方显式传入。

**11. SwiftUI 的 `onContinuousHover` 在 `allowsHitTesting(false)` 的区域上
不产生事件**，补 `contentShape` 之后也只在进入窗口的一瞬间触发一次。
底部控制条的自动隐藏改成了轮询 `NSEvent.mouseLocation`（`PointerWatcher`）。

**12. `PointerWatcher` 必须在 `AppDelegate.wireState()` 里启动**，
不能在 `applicationDidFinishLaunching`——`state` 是 SwiftUI 在 `onAppear`
里赋进来的，比那个回调晚。

**13. 布光要跟着房间走。** 暗房那套（深色阶 + 冷青主光）放进浅色房间会把她
整个压暗。`snozzy_lib.LIGHTS` 有 `bright` 和 `cyber` 两档，现在用 `bright`。

**14. 平行光一律关阴影，只留主光。** 打在墙上是一大块生硬黑影，和 lofi 观感
相反；但角色是单独渲的、画面里没有墙，留主光的阴影正好得到自阴影。

**15. 抖动 alpha 有噪点底噪，「最大像素差」这个判据因此没用。** DITHERED
（第 4 条）会让头发边缘留下几百个孤立像素的差异，最大差能到 700 多（满值 1020）。
拿它判断"两帧的上半身是不是同一份"，结论永远是"不是"——而那些差异散布到
y=267 的头顶，腿根本影响不到那里。判据要改成**按阈值二值化再做 3×3 腐蚀**：
孤立噪点被腐蚀掉，成片的真差异留得住。实测这一刀下去缝线以上剩 0.04%、
缝线以下（本该有差异）剩 6.4%，差两个数量级。`Scripts/leg_frames.py` 里那个
`seam_residual` 就是这么写的。

**16. `place_hip` 的容差要够小，否则分层合成会抖。** 原来是 0.002，在 1024 高的
画幅上就是 2 像素。静态图之间看不出来，但过渡序列只替换下半身、上半身取自
固定的那一张，2 像素的上下抖动会在接缝处露出来。胯是腿链的根、摆腿不动它，
所以每套姿势**本该收敛到完全一样的高度**，收到 0.0002 就没有了。

**17. 验证切图有没有切错，不能用 PIL 的 `alpha_composite`。** 它会在全透明区域
改写 RGB（重新预乘再解预乘，掉精度），拿它拼回去和原图比，会报出十几万个
"不一致"像素——全是假的。要么用 `paste` 直接拷块（两块不重叠时就该这样），
要么比**预乘后**的值，那才是真正上屏的东西。这一条让我差点以为切图错了。

---

## 四、验证纪律

这个项目里"看着对"和"真的对"经常不是一回事，所以**把主观的东西做成可测的**：

- 音频：离线渲 WAV + numpy 做频谱/立体声分析（`--render` 参数）
- 角色出画：`frame_extent()` 报纵向占位，不靠眼睛看
- 重绘漂移：剪影交并比（`Scripts/repaint.py` 的 `fit_to`），实测 0.94–0.99
- 构图守没守住：把灰模遮罩的轮廓画到成品上目视核对
- UI 行为：截两张图算像素差（控制条自动隐藏就是这么验的，差 17.5 = 生效）
- 腿"粗不粗旷"：`Scripts/leg_metrics.py` 报膝、踝两行的外廓宽度。
  背后的客观量是**脚踝比膝盖宽多少**——一路外分就是外八字，坐姿显得很"横"
- 过渡帧动没动、匀不匀：逐帧算剪影异或的像素数。有零就是卡住了，
  有尖峰就是跳了。别拿"最低点的坐标"当锚——它会在两只脚之间跳来跳去，
  而且只动一条腿的姿势（tucked）根本量不到
- 分层合成对没对上：把上半身和腿拼回去，和原整幅图比预乘后的像素。
  中枢那一套必须**完全为零**（它的上半身就是切出来的那张），这条一错整个切图就是错的

**教训**：有两次我盯着截图猜原因，方向完全错了；先量一下就省了一整轮。
另外注意判据的方向——查眨眼时我以为"闭眼变暗"，实际上**闭眼时眼睛变成皮肤，
亮度反而升高**，找错了方向的低谷所以一直没找到。

---

## 五、当前状态

已完成并跑通：

- 实时 DSP 合成的 lofi 电台（14 种爵士进行、5 种鼓型、4 种电台心情）
- 环境音混音器、番茄钟、待办、本地音乐库
- 音乐源：电台 / 本地 / **音乐 App（AppleScript 遥控）** / **让位模式**
- 明亮赛博朋克房间 + 程序化窗外城市（`CyberCity`，昼夜天气都活）
- 角色：五套腿部姿势随机切换（**播真的过渡帧，不是淡入**）、眨眼/视线/嘴角、
  听歌时戴耳机（戴着也照样换腿）
- 底部控制条鼠标靠近才浮出
- 窗口三形态（完整 / 迷你 / 桌宠）、菜单栏常驻

**已知未做完的**：

- 电脑屏幕是画死的白背板，可以做成跟播放状态联动发光
- 白天档的窗外城市只能算及格（`CyberCity.airy` 加了但没细调）
- Live2D 那条线（`Sources/WithSnozzy/Character/Live2D/`）是完整可用的，
  但现在没在用——渲染版走通之后它成了备选。`Vendor/CubismCore/` 未入库

---

## 六、接下来要做的三件事

### 1. 女主的动作

现在只有腿在换姿势 + 眨眼。缺的是**上半身在干什么**。

已经设计好但没实现的方案在 `Art/SCENE.md`：引入一个 `Activity` 状态机
（敲键盘 / 看书 / 写字 / 喝水 / 发呆 / 伸懒腰），**由已有的 `FocusTimer.phase`
驱动**——work 阶段在几种工作动作间随机漫游，休息阶段走喝水/伸懒腰。
这样番茄钟就不只是计时器，而是真的改变了她在做的事。

实现上就是**多渲几套上半身**（手在键盘上、捧杯子等）。`pose.py` 里的
`seated(hands=...)` 已经留了口子。

**腿那一套机制可以照搬**：`LEG_POSES` 的「每侧三段方向」结构 + `blend_legs`
插值 + 中枢过渡 + `leg_frames.py` 切片，换成手臂就是同一套东西。
缝线要挪到腰以上（腿那条在 y=600），而且上半身的缝线**没有桌板挡着**，
第 15/16 条那两个判据要卡得更严。

打字动画的最省做法：出两张（手指抬起/按下）按 6–8 Hz 交替，不要逐指绑定。

**优先级建议**：屏幕发光 + 视线跟着当前活动走，这两条几乎零成本却最像"活的"；
手臂姿势切换排最后。

### 2. 耳机

已经做完了（`Blender/headphones.py`，程序化建模，遮挡由几何算出来所以
头发正确地压在头梁前面）。运行时按 `state.isPlaying` 交叉淡入。

**如果要继续改**：耳罩尺寸、颜色都在 `headphones.py` 的 `build()` 参数里。
另外可以考虑加一层「耳机在播放时轻微发光」的动态效果。

### 3. 钢琴（用户明确说是"后话"，但很在意）

用户想学钢琴，希望 Snozzy 练琴时顺便教他。

**关键判断**（已经和用户达成一致）：**教学价值来自琴键高亮和滚动乐谱，
不来自她的手指。** Synthesia 那类软件教会了无数人弹琴，屏幕上根本没有人。
所以：

- 琴键高亮 + 乐谱是**纯程序化 2D**，而且我们的合成引擎本来就知道自己在弹
  哪个音符（`LofiSynth` 里有 `keyRoot`/`progressionIndex` 等），这块几乎白送
- 角色那边只要 3–4 套手位（低音区/中音区/高音区），配合身体前倾和视线就够了
- 计划是**两个独立场景**（书桌 / 钢琴），不是一个模型硬撑

需要新场景的话，走的还是"灰模 → 重绘 → 切层"那条路。

---

## 七、常用命令

```bash
# 构建并打包
./Scripts/build_app.sh release

# 跑起来看
open dist/WithSnozzy.app

# 音频自检（离线渲 WAV + 分析）
.build/release/WithSnozzy --render /tmp/out.wav

# 场景重出（改完 blocking.py 之后）
python3 Scripts/blocking.py && cp Art/blocking/layout.png Art/blocking_for_repaint.png

# 角色重出（改完 pose.py 的 LEG_POSES 之后）。约 2 分半
B=/Applications/Blender.app/Contents/MacOS/Blender
$B --background --factory-startup --python Blender/render_poses.py  -- Snozzy.vrm /tmp/poses
$B --background --factory-startup --python Blender/render_layers.py -- Snozzy.vrm /tmp/poses
python3 Scripts/leg_frames.py /tmp/poses --out Assets && python3 Scripts/leg_metrics.py Assets
```

用户的机器：16GB M 系列 Mac，走 ClashX 代理（`127.0.0.1:7890`）。
**本地跑不动扩散模型**（float32+768 会被 OOM 杀掉），生图一律走网页手动或 API。
`GEMINI_API_KEY` 在 `~/.zshrc` 里，但那个 key 的图像模型免费额度是零，
`Scripts/repaint.py --fit` 这条路（用户手动在网页生成、我负责对齐和抠图）
不消耗额度。

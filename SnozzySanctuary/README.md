# Snozzy Sanctuary

Snozzy Sanctuary 是 WithSnozzy 的独立重构线：macOS 14、Swift 6、SwiftUI、零第三方 Swift 依赖。它不会读取或覆盖旧工程文件，应用数据固定写入：

```text
~/Library/Application Support/SnozzySanctuary
```

当前版本已经接入真实 2.5D 美术：ImageGen 生成的明亮轨道档案室、Blender 渲染的 Snozzy、真实腿部过渡、2× 键盘手层和 2× 面部贴片。确定性世界状态、纯 reducer、单次场景快照、唯一生产 `SceneSurface` 与独立 Lab 渲染器仍是主干。`SnozzyRuntime` 是唯一 effect driver，负责启动迁移、单 heartbeat、随机、保存、音频与表演生命周期。

## 构建

```bash
swift test
swift build -c release
./Scripts/build_app.sh release
open "dist/Snozzy Sanctuary.app"
```

## Lab smoke

Lab 的 root smoke 真正渲染 `SanctuaryRootView`；scene smoke 直接渲染唯一生产 `SceneSurface`，不复制场景层序：

```bash
swift run SnozzyLab --smoke /tmp/snozzy-sanctuary-smoke.png
swift run SnozzyLab --scenesnapshot /tmp/snozzy-sanctuary-scene.png
swift run SnozzyLab --storagecheck /tmp/snozzy-sanctuary-storage.png
swift run SnozzyLab --assetcheck
swift run SnozzyLab --layercheck
swift run SnozzyLab --responsivecheck /tmp/snozzy-responsive
swift run SnozzyLab --compactcheck /tmp/snozzy-compact.png
```

## 结构

- `SnozzyDomain`：值类型、事件、效果、Clock/RandomSource 合同
- `SnozzyWorld`：纯 reducer、WorldStore、一次性 SceneSnapshot
- `SnozzyData` / `SnozzyAssets` / `SnozzyAudio` / `SnozzyPlatform`：边界实现
- `SnozzyScene`：唯一生产场景树
- `SnozzyUI`：窗口和控制面
- `SnozzySanctuaryApp`：组合根
- `SnozzyLab`：确定性渲染与诊断入口
- `SnozzyRuntime`：生产组合根、effect drain 与可取消任务所有者

进一步约束见 [ARCHITECTURE](Docs/ARCHITECTURE.md)、[ASSET_CONTRACT](Docs/ASSET_CONTRACT.md) 和 [ACCEPTANCE](Docs/ACCEPTANCE.md)。

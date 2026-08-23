# Snozzy Sanctuary

Snozzy Sanctuary 是 WithSnozzy 的独立重构线：macOS 14、Swift 6、SwiftUI、零第三方 Swift 依赖。它不会读取或覆盖旧工程文件，应用数据固定写入：

```text
~/Library/Application Support/SnozzySanctuary
```

第一阶段建立了可运行的纵向骨架：确定性世界状态、纯 reducer、单次场景快照、唯一生产 `SceneSurface`、独立 Lab 渲染器，以及可审计的资源和依赖合同。当前程序化房间是资产管线未接入时的可测 fallback，不冒充最终角色美术。

## 构建

```bash
swift test
swift build -c release
./Scripts/build_app.sh release
open "dist/Snozzy Sanctuary.app"
```

## Lab smoke

Lab 直接渲染生产 `SceneSurface`，不复制场景层序：

```bash
swift run SnozzyLab --smoke /tmp/snozzy-sanctuary-smoke.png
```

## 结构

- `SnozzyDomain`：值类型、事件、效果、Clock/RandomSource 合同
- `SnozzyWorld`：纯 reducer、WorldStore、一次性 SceneSnapshot
- `SnozzyData` / `SnozzyAssets` / `SnozzyAudio` / `SnozzyPlatform`：边界实现
- `SnozzyScene`：唯一生产场景树
- `SnozzyUI`：窗口和控制面
- `SnozzySanctuaryApp`：组合根
- `SnozzyLab`：确定性渲染与诊断入口

进一步约束见 [ARCHITECTURE](Docs/ARCHITECTURE.md)、[ASSET_CONTRACT](Docs/ASSET_CONTRACT.md) 和 [ACCEPTANCE](Docs/ACCEPTANCE.md)。

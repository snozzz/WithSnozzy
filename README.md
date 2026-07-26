# With Snozzy

一个 macOS 上的 lofi 陪伴应用。Snozzy 会在她的房间里陪你度过工作、学习和发呆的时间。

## 设计原则

1. **零第三方依赖** — 只用系统框架（SwiftUI / AVFoundation / AppKit）。没有包管理噩梦，克隆下来就能编译。
2. **零二进制素材** — 音乐是实时合成的，不是播放 mp3；Snozzy 和房间是矢量绘制的，不是贴图。所以整个 app 包只有几百 KB。
3. **只在需要时渲染** — 窗口被遮挡就暂停所有动画时间线，CPU 掉到接近 0。

## 构建与运行

需要 macOS 14+ 和 Xcode 命令行工具。

```bash
Scripts/run.sh          # 构建 release 并启动
Scripts/run.sh debug    # 开发时用，编译更快
Scripts/build_app.sh    # 只打包，产物在 dist/WithSnozzy.app
```

## 目录结构

```
Sources/WithSnozzy/
  App/         应用入口、全局状态、AppKit 窗口配置
  Audio/       实时 lofi 合成引擎与环境音
  Character/   Snozzy 的矢量建模与动画
  Scene/       房间、昼夜循环、天气
  Features/    番茄钟、待办、统计、音乐库
  UI/          主视图、控制条、面板、配色
  Support/     持久化与通用工具
Scripts/       构建脚本
Resources/     Info.plist
```

## 关于 Snozzy 的形象

当前是纯代码矢量绘制的版本。之后如果接入专门的建模工具（Live2D / VRM），
会把 `Character/` 换成模型驱动，其余部分不受影响——这也是把角色单独分层的原因。

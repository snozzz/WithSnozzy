# Vendor

放第三方运行库。**这些东西都不进仓库**——它们的授权不允许再分发，每个人得自己下载。

## Cubism Core（Live2D 渲染必需）

1. 到 <https://www.live2d.com/download/cubism-sdk/download-native/> 下载
   「Cubism SDK for Native」（选 Individual，需要同意授权条款）。
2. 解压后，把里面的 `Core` 目录整个复制到这里，成为 `Vendor/CubismCore/`。

复制完之后应该长这样：

```
Vendor/CubismCore/
  include/Live2DCubismCore.h
  lib/macos/libLive2DCubismCore.a        # 或按架构分的子目录
```

跑 `Scripts/check_live2d.sh` 可以验证是否放对了。

## 为什么只用 Core，不用 CubismNativeFramework

SDK 里除了 Core 还有一个 C++ 的 `Framework`，官方示例都基于它。这个项目**刻意不用**它：

1. **Core 是纯 C 接口**（`Live2DCubismCore.h`），Swift 通过 module map 直接就能调，
   完全不需要 C++ 互操作。一旦引入 Framework，就得处理 C++ ↔ Swift 桥接，
   编译配置和维护成本都会上一个台阶。
2. Framework 主要提供的是**便利层**：动作播放、物理演算、表情、以及它自己的渲染器。
   而我们已经有 `SnozzyRig` 在算姿态了，需要的只是把 `Pose` 映射到 Live2D 参数。
   渲染器无论如何都要自己写（要融进现有的 SwiftUI 场景）。
3. Core 暴露的东西**刚好够用**：参数读写、以及每个 drawable 变形后的顶点、UV、
   索引、不透明度、渲染顺序、混合模式、遮罩关系。渲染需要的信息一样不缺。

## 模型数据

Live2D 官方免费样本（如 Hiyori）放在仓库根目录的 `hiyori_en/`，同样不进版本库。
授权见模型自带的 `ReadMe.txt`：年营收低于 1000 万日元的个人和小规模主体可自由使用，
但**不要把模型原始文件重新分发**（包括推到公开仓库）。

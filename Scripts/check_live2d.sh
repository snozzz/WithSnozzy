#!/usr/bin/env bash
# 检查 Live2D 接入所需的两样东西是否就位：Cubism Core 运行库，和一个模型。
set -uo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CORE="$ROOT/Vendor/CubismCore"
ok=0

echo "▸ Cubism Core"
if [ -f "$CORE/include/Live2DCubismCore.h" ]; then
  echo "  ✅ 头文件: Vendor/CubismCore/include/Live2DCubismCore.h"
else
  echo "  ❌ 缺少 include/Live2DCubismCore.h"
  echo "     从 https://www.live2d.com/download/cubism-sdk/download-native/ 下载 SDK，"
  echo "     把里面的 Core 目录复制成 Vendor/CubismCore/（详见 Vendor/README.md）"
  ok=1
fi

# 必须是 lib/macos/<arch>/ 下那个。
#
# SDK 里带了十几个平台的同名静态库，其中 experimental/catalyst 的架构名
# 和原生 macOS 一模一样（x86_64 + arm64），但它是 iOS-on-Mac 的 ABI，
# 链进原生 AppKit 应用会失败。所以这里按路径精确指定，不能用 find 撞运气。
ARCH="$(uname -m)"
LIB="$CORE/lib/macos/$ARCH/libLive2DCubismCore.a"
if [ -f "$LIB" ]; then
  echo "  ✅ 静态库: ${LIB#$ROOT/}"
  # 变量一律加花括号：后面紧跟全角括号时，bash 会把多字节字符的首字节
  # 也当成变量名的一部分，报 "unbound variable"。
  echo "     架构: $(lipo -archs "$LIB" 2>/dev/null || echo '未知')（本机 ${ARCH}）"
else
  echo "  ❌ 找不到 lib/macos/${ARCH}/libLive2DCubismCore.a"
  echo "     注意：不要用 experimental/catalyst 那个，它是 Mac Catalyst 的 ABI，链不进原生应用。"
  ok=1
fi

echo
echo "▸ 模型"
found=0
while IFS= read -r m; do
  echo "  ✅ ${m#$ROOT/}"
  found=1
done < <(find "$ROOT" -name '*.model3.json' -not -path '*/.build/*' 2>/dev/null | head -5)
if [ $found -eq 0 ]; then
  echo "  ❌ 没有找到任何 .model3.json"
  ok=1
fi

echo
[ $ok -eq 0 ] && echo "全部就位，可以开始接入。" || echo "还缺东西，见上面的提示。"
exit $ok

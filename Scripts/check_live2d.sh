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

LIB="$(find "$CORE/lib" -name 'libLive2DCubismCore.a' 2>/dev/null | head -1)"
if [ -n "$LIB" ]; then
  echo "  ✅ 静态库: ${LIB#$ROOT/}"
  echo "     支持架构: $(lipo -archs "$LIB" 2>/dev/null || echo '未知')"
else
  echo "  ❌ 找不到 libLive2DCubismCore.a（应在 Vendor/CubismCore/lib/macos/ 下）"
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

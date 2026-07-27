#!/usr/bin/env bash
# 把 SPM 可执行文件打包成一个可以双击运行的 .app。
#
# 刻意不引入 Xcode 工程文件：一个 Package.swift + 这个脚本就是全部构建系统，
# 维护成本最低，也不会有 .pbxproj 冲突。
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_NAME="WithSnozzy"
CONFIG="${1:-release}"
APP="$ROOT/dist/$APP_NAME.app"

echo "▸ 编译 ($CONFIG)…"
swift build -c "$CONFIG" --package-path "$ROOT"
BIN_DIR="$(swift build -c "$CONFIG" --package-path "$ROOT" --show-bin-path)"

echo "▸ 组装 app 包…"
rm -rf "$APP"
mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources"

cp "$BIN_DIR/$APP_NAME" "$APP/Contents/MacOS/$APP_NAME"
cp "$ROOT/Resources/Info.plist" "$APP/Contents/Info.plist"
printf 'APPL????' > "$APP/Contents/PkgInfo"

# release 构建剥掉本地符号，能省掉一大截体积。
if [ "$CONFIG" = "release" ]; then
  strip -x "$APP/Contents/MacOS/$APP_NAME" 2>/dev/null || true
fi

# 手绘素材（如果有）。放进 Resources/Assets/，运行时从 Bundle 里取。
if [ -d "$ROOT/Assets" ] && [ -n "$(ls -A "$ROOT/Assets" 2>/dev/null)" ]; then
  mkdir -p "$APP/Contents/Resources/Assets"
  cp "$ROOT/Assets/"* "$APP/Contents/Resources/Assets/" 2>/dev/null || true
  echo "▸ 已打包手绘素材 ($(ls "$ROOT/Assets" | wc -l | tr -d ' ') 个文件)"
fi

# 图标。
#
# 由刚编出来的二进制自己画：`--icon` 会用和游戏里同一套渲染代码输出全套尺寸。
# 好处是仓库里一个二进制文件都不用存，而且改了 Snozzy 的建模图标自动跟着变。
ICONSET="$(mktemp -d)/AppIcon.iconset"
if "$BIN_DIR/$APP_NAME" --icon "$ICONSET" >/dev/null 2>&1; then
  if iconutil -c icns "$ICONSET" -o "$APP/Contents/Resources/AppIcon.icns" 2>/dev/null; then
    echo "▸ 图标已生成"
  else
    echo "  (iconutil 失败，跳过图标)"
  fi
  rm -rf "$(dirname "$ICONSET")"
else
  echo "  (图标生成失败，跳过)"
fi

# 自签名。本地自用不需要开发者证书，但签一下能让 macOS 记住窗口位置和权限。
codesign --force --sign - "$APP" >/dev/null 2>&1 || echo "  (跳过签名)"

SIZE="$(du -sh "$APP" | cut -f1)"
echo "▸ 完成: $APP  ($SIZE)"

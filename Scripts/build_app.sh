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

# 图标（由 Scripts/make_icon.swift 生成，缺失时跳过，不影响运行）。
if [ -f "$ROOT/Scripts/make_icon.swift" ]; then
  "$ROOT/Scripts/make_icon.sh" "$APP/Contents/Resources/AppIcon.icns" 2>/dev/null || true
fi

# 自签名。本地自用不需要开发者证书，但签一下能让 macOS 记住窗口位置和权限。
codesign --force --sign - "$APP" >/dev/null 2>&1 || echo "  (跳过签名)"

SIZE="$(du -sh "$APP" | cut -f1)"
echo "▸ 完成: $APP  ($SIZE)"

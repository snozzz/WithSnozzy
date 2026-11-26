#!/usr/bin/env bash
# Validate and bundle Sources/WithSnozzy/Realtime3D/room.js (+ src/*.js) with
# vendored Three.js into room.bundle.js using local bun. Zero network access.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RT="$ROOT/Sources/WithSnozzy/Realtime3D"
VENDOR="$ROOT/Vendor/ThreeJS"

command -v node >/dev/null || { echo "missing node"; exit 1; }
command -v bun  >/dev/null || { echo "missing bun"; exit 1; }

echo "▸ 语法检查 JS 模块…"
node --check "$RT/room.js"
if [ -d "$RT/src" ]; then
  for f in "$RT"/src/*.js; do
    [ -f "$f" ] && node --check "$f"
  done
fi

STAGE="$(mktemp -d /tmp/withsnozzy-bundle.XXXXXX)"
trap 'rm -rf "$STAGE"' EXIT
ln -s "$VENDOR" "$STAGE/vendor"
ln -s "$RT/room.js" "$STAGE/room.js"
if [ -d "$RT/src" ]; then
  ln -s "$RT/src" "$STAGE/src"
fi

echo "▸ 打包 room.bundle.js…"
bun build "$STAGE/room.js" \
  --bundle \
  --minify \
  --target=browser \
  --format=iife \
  --outfile="$RT/room.bundle.js"

SIZE="$(du -sh "$RT/room.bundle.js" | cut -f1)"
echo "▸ 完成: $RT/room.bundle.js ($SIZE)"

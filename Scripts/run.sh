#!/usr/bin/env bash
# 构建并启动。开发时用 debug 更快：Scripts/run.sh debug
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONFIG="${1:-release}"

"$ROOT/Scripts/build_app.sh" "$CONFIG"

# 重启前先关掉正在跑的实例，避免开出两个 Snozzy。
pkill -x WithSnozzy 2>/dev/null || true
sleep 0.3
open "$ROOT/dist/WithSnozzy.app"

#!/bin/bash
# 起 Snozzy 的语音合成服务。第一次要等半分钟加载模型。
#
#   ./Scripts/tts_serve.sh            # 前台跑，Ctrl-C 停
#   ./Scripts/tts_serve.sh --bg       # 后台跑，日志在 /tmp/snozzy-tts.log
#
# 服务不在的时候 app 会自动退回系统 TTS，所以不起它也不影响用。
set -e
ROOT="${SNOZZY_TTS_ROOT:-$HOME/earn_sth/snozzy-tts}"
PY="$ROOT/venv/bin/python"
[ -x "$PY" ] || { echo "找不到 $PY —— 语音服务还没装，见 HANDOFF 第二节" >&2; exit 1; }
SELF="$(cd "$(dirname "$0")" && pwd)/tts_server.py"

if [ "$1" = "--bg" ]; then
  pkill -f "tts_server.py" 2>/dev/null || true
  nohup "$PY" "$SELF" > /tmp/snozzy-tts.log 2>&1 &
  echo "后台启动中，日志 /tmp/snozzy-tts.log"
  for i in $(seq 1 60); do
    sleep 1
    curl -s --max-time 2 localhost:9880/health >/dev/null 2>&1 && {
      echo "▸ 就绪：$(curl -s localhost:9880/health)"; exit 0; }
  done
  echo "等了 60 秒还没起来，看日志：tail /tmp/snozzy-tts.log" >&2; exit 1
fi
exec "$PY" "$SELF"

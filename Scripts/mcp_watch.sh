#!/bin/bash
# 盯着 ChatGPT 到底有没有来问 Snozzy。
#
#   ./Scripts/mcp_watch.sh
#
# 为什么需要这个：**光看她的回答判断不出来**。模型完全可能凭上下文猜一个
# 像模像样的答案，而猜对的时候和真查过长得一模一样。这个脚本把问题变成
# "那一秒有没有多出一行"——有就是真调了，没有就是编的。
set -e
LOG="$HOME/Library/Application Support/WithSnozzy/mcp.log"

echo "▸ 插件状态"
codex plugin list 2>/dev/null | grep -i withsnozzy || echo "  ✗ 没装。先跑 ./Scripts/install_plugin.sh"
echo
echo "▸ WithSnozzy 开着吗"
if pgrep -f "WithSnozzy.app/Contents/MacOS/WithSnozzy$" >/dev/null; then
  echo "  ✓ 开着（状态是实时的）"
else
  echo "  · 没开。工具照样能答，但「在放什么」那类会是上次的快照"
fi
echo
: > "$LOG"
echo "▸ 日志已清空，开始盯着。现在去 ChatGPT 里问她。"
echo "  有反应 = 真的来查了；一直空着 = 她在编。Ctrl-C 退出。"
echo "────────────────────────────────────────────"
tail -f "$LOG"

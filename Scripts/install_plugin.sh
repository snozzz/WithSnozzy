#!/bin/bash
# 把 WithSnozzy 挂成 ChatGPT/Codex 的本地插件，让 GPT 能问到待办和状态。
#
#   ./Scripts/install_plugin.sh
#
# 做三件事：把 .mcp.json 里的可执行文件路径填成这台机器上真实的位置、
# 把 Plugin/ 注册成本地 marketplace、装上。重复跑是安全的。
#
# **路径必须是绝对的、而且要指向真实存在的文件。** MCP 服务器是 ChatGPT
# 另外拉起来的进程，它的工作目录和环境变量都和终端不一样，写相对路径
# 或者依赖 PATH 一定找不到。写错的表现是插件装得上、但一调用就静默失败。
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

# 优先用 /Applications 里的（那才是稳定位置），没有就用 dist/ 里刚构建的
APP="/Applications/WithSnozzy.app/Contents/MacOS/WithSnozzy"
if [ ! -x "$APP" ]; then
  APP="$ROOT/dist/WithSnozzy.app/Contents/MacOS/WithSnozzy"
fi
if [ ! -x "$APP" ]; then
  echo "找不到 WithSnozzy 的可执行文件。先跑 ./Scripts/build_app.sh release" >&2
  exit 1
fi
echo "▸ MCP 服务器: $APP"

# 路径填进**启动壳**里，不填进 `.mcp.json`。
#
# `.mcp.json` 里的 command 必须是**相对路径 + cwd "."**，照抄 OpenAI 自己那几个
# 跑得起来的插件的形状（computer-use 写的是 `./bin/computer-use-client-launcher`）。
# 第一版这里写的是绝对路径，结果 ChatGPT 压根没去启动那个服务器——
# 插件在菜单里看得见、也挂得上，但 mcp.log 一行都没有，查了两轮才发现。
LAUNCHER="$ROOT/Plugin/plugins/withsnozzy/bin/withsnozzy-mcp"
python3 - "$LAUNCHER" "$APP" <<'PY'
import pathlib, re, sys
p, app = pathlib.Path(sys.argv[1]), sys.argv[2]
s = p.read_text()
s = re.sub(r'^APP="[^"]*"$', f'APP="{app}"', s, count=1, flags=re.M)
p.write_text(s)
print(f"▸ 已把路径写进 bin/{p.name}")
PY
chmod +x "$LAUNCHER"

codex plugin marketplace add "$ROOT/Plugin" >/dev/null 2>&1 || true
# 已经装过的话先卸掉，否则版本号没变时不会重新拷贝
codex plugin remove withsnozzy@withsnozzy-local >/dev/null 2>&1 || true
codex plugin add withsnozzy@withsnozzy-local

echo
echo "装好了。验证："
echo "  codex plugin list | grep withsnozzy"
echo
echo "然后在 ChatGPT 桌面端的对话框里应该能看到「Snozzy」这个工具。"
echo "语音模式能不能调工具要你自己试——OpenAI 没有公开说明，我在这边验不了。"

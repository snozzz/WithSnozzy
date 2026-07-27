#!/usr/bin/env zsh
set -euo pipefail

cd /Users/snoz/earn_sth/relax
mkdir -p .codex-automation
claude_bin="/Users/snoz/.nvm/versions/node/v22.14.0/bin/claude"

done_file=".codex-automation/resume-claude-at-2.done"
if [[ -f "$done_file" ]]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] already completed; exiting"
  exit 0
fi

target_epoch="$(date -j -f '%Y-%m-%d %H:%M:%S' '2026-07-27 02:01:00' '+%s')"
now_epoch="$(date '+%s')"
sleep_seconds=$(( target_epoch - now_epoch ))

if (( sleep_seconds > 0 )); then
  echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] waiting ${sleep_seconds}s for 02:01 refresh window"
  sleep "$sleep_seconds"
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] starting claude continuation"

prompt="
继续当前目录这个项目中刚才未完成的工作。

要求：
1. 先检查 git diff、项目结构和现有实现，理解当前进度，不要覆盖已有改动。
2. 继续完成原本正在做的项目目标。
3. 做完核心功能后，对整体内容进行丰富和优化：功能完整度、界面细节、交互体验、文案/资源内容、代码结构和边界状态都要过一遍。
4. 运行合适的构建、测试或验证命令；如果有失败，优先修复。
5. 最后给出简洁总结：完成了什么、改了哪些关键文件、验证结果、还有什么后续建议。
"

claude_exit_status=1
for attempt in 1 2 3; do
  echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] claude attempt ${attempt}/3"
  if "$claude_bin" --continue --dangerously-skip-permissions --print "$prompt"; then
    claude_exit_status=0
    break
  fi

  claude_exit_status=$?
  echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] claude exited with ${claude_exit_status}"
  if (( attempt < 3 )); then
    echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] waiting 600s before retry"
    sleep 600
  fi
done

echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] finished with status ${claude_exit_status}"
date '+%Y-%m-%d %H:%M:%S %Z' > "$done_file"

launchctl bootout "gui/$(id -u)" "$HOME/Library/LaunchAgents/com.snoz.resume-claude-relax.plist" >/dev/null 2>&1 || true

exit "$claude_exit_status"

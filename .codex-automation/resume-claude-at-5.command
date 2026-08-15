#!/usr/bin/env zsh
set -u

project_dir="/Users/snoz/earn_sth/relax"
automation_dir="${project_dir}/.codex-automation"
claude_bin="/Users/snoz/.nvm/versions/node/v22.14.0/bin/claude"
claude_project_dir="/Users/snoz/.claude/projects/-Users-snoz-earn-sth-relax"
launch_agent="${HOME}/Library/LaunchAgents/com.snoz.resume-claude-relax-5am.plist"
log_file="${automation_dir}/claude-5am.log"
err_file="${automation_dir}/claude-5am.err"
done_file="${automation_dir}/claude-5am.done"

mkdir -p "$automation_dir"
cd "$project_dir" || exit 1

{
  echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] Terminal runner started"

  if [[ -f "$done_file" ]]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] done marker exists; exiting"
    exit 0
  fi

  target_epoch="$(date -j -f '%Y-%m-%d %H:%M:%S' '2026-07-30 05:01:00' '+%s')"
  now_epoch="$(date '+%s')"
  sleep_seconds=$(( target_epoch - now_epoch ))
  if (( sleep_seconds > 0 )); then
    echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] waiting ${sleep_seconds}s for 05:01"
    sleep "$sleep_seconds"
  fi

  prompt="
继续当前目录这个项目中最新 Claude session 未完成的工作。

要求：
1. 先检查 git status、git diff、项目结构和现有实现，理解当前进度，不要覆盖已有改动。
2. 继续完成原本正在做的新 Claude 任务。
3. 做完核心功能后，对整体内容进行丰富和优化：功能完整度、界面细节、交互体验、文案/资源内容、代码结构、边界状态和 README 都要过一遍。
4. 运行合适的构建、测试或验证命令；如果有失败，优先修复。
5. 最后给出简洁总结：完成了什么、改了哪些关键文件、验证结果、还有什么后续建议。
"

  claude_exit_status=1
  for attempt in 1 2 3 4 5 6; do
    session_files=("${claude_project_dir}"/*.jsonl(N.om))
    latest_session_file="${session_files[1]:-}"
    if [[ -z "$latest_session_file" ]]; then
      echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] no Claude session file found in ${claude_project_dir}"
      claude_exit_status=2
    else
      latest_session_id="${latest_session_file:t:r}"
      attempt_log="${automation_dir}/claude-5am-attempt-${attempt}.log"
      attempt_err="${automation_dir}/claude-5am-attempt-${attempt}.err"

      echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] attempt ${attempt}/6 using session ${latest_session_id}"
      "$claude_bin" --resume "$latest_session_id" --dangerously-skip-permissions --print "$prompt" >"$attempt_log" 2>"$attempt_err"
      claude_exit_status=$?

      cat "$attempt_log"
      if [[ -s "$attempt_err" ]]; then
        echo "--- stderr attempt ${attempt} ---" >&2
        cat "$attempt_err" >&2
      fi

      if (( claude_exit_status == 0 )) && ! grep -Eiq 'session limit|Failed to authenticate|403 Request not allowed|resets [0-9]+am' "$attempt_log" "$attempt_err"; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] Claude continuation completed"
        date '+%Y-%m-%d %H:%M:%S %Z' > "$done_file"
        break
      fi

      echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] attempt ${attempt} did not complete cleanly; status=${claude_exit_status}"
    fi

    if (( attempt < 6 )); then
      echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] waiting 300s before retry"
      sleep 300
    fi
  done

  echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] final status ${claude_exit_status}"
  launchctl bootout "gui/$(id -u)" "$launch_agent" >/dev/null 2>&1 || true
  exit "$claude_exit_status"
} >>"$log_file" 2>>"$err_file"

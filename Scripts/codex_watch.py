#!/usr/bin/env python3
"""实时看 Codex 到底在干什么。

    ./Scripts/codex_watch.py

## 为什么需要它

跟 Codex 语音对话时，它说"我去搜一下"然后就没下文了——问它还是说在搜，
而界面上**一个字的进度都看不到**：不知道它在搜什么、搜了几次、
是卡住了还是在循环、还是压根没发出去。

其实全都记着，在 `~/.codex/sessions/<年>/<月>/<日>/rollout-*.jsonl` 里，
逐条记着每一次工具调用、每一段推理、每一条回复。只是没有入口去看。
这个脚本就是那个入口。

## 它解决的核心问题：区分「在干活」和「卡住了」

这两件事在界面上长得一模一样（都是转圈），但在这里完全不同：

- 在干活 → 一条条新记录不停冒出来
- 卡住了 → **最后一条是某个工具调用，然后再没有下文**

所以对**没返回的调用会一直报它等了多久**（`← 还没返回，已 47 秒`）。
一个正常的网页搜索几秒就回来了；卡到半分钟以上基本就是出事了。

## 会自动跟到新会话

语音里每问一轮常常是一个新会话（新的 rollout 文件），所以这里不是简单
`tail -f` 一个文件，而是**盯着目录**，一有更新的文件就切过去。
不这么做的话，你盯着的那个文件在第二轮之后就永远不动了。
"""
import json
import os
import sys
import time
from datetime import datetime

SESSIONS = os.path.expanduser("~/.codex/sessions")
# 一次工具调用超过这么久还没返回，就当它卡住了，开始每隔几秒喊一次
STUCK_AFTER = 12.0


def newest_rollout():
    """最近改动过的那个 rollout 文件。"""
    best, best_mtime = None, 0.0
    for root, _, files in os.walk(SESSIONS):
        for f in files:
            if not (f.startswith("rollout-") and f.endswith(".jsonl")):
                continue
            p = os.path.join(root, f)
            try:
                m = os.path.getmtime(p)
            except OSError:
                continue
            if m > best_mtime:
                best, best_mtime = p, m
    return best


def short(text, n=90):
    text = " ".join(str(text).split())
    return text if len(text) <= n else text[:n - 1] + "…"


def describe(payload):
    """把一条记录压成一行人话。返回 (标记, 文字, 是不是"发起了一个还没回来的调用")。"""
    t = payload.get("type")

    if t == "task_started":
        return "▸", "开始干活", False
    if t == "task_complete":
        return "✓", "这一轮完事了", False
    if t == "user_message":
        return "你", short(payload.get("message", "")), False
    if t == "agent_message":
        return "它", short(payload.get("message", "")), False
    if t == "reasoning":
        # 推理**正文是加密的**（`encrypted_content`），只有摘要可能给。
        # 而摘要经常是空数组——那时候就只报"在想"，别印一行空的"在想："。
        parts = payload.get("summary") or []
        if isinstance(parts, list):
            txt = " ".join(x.get("text", "") if isinstance(x, dict) else str(x)
                           for x in parts).strip()
        else:
            txt = str(parts).strip()
        return "…", ("在想：" + short(txt, 70)) if txt else "在想（摘要没给）", False
    if t == "token_count":
        info = payload.get("info") or {}
        used = info.get("total_token_usage", {}).get("total_tokens")
        return "·", f"已用 {used} tokens" if used else "计了一次 token", False

    # ── 工具调用 ──
    if t in ("custom_tool_call", "function_call", "mcp_tool_call_begin"):
        name = payload.get("name") or payload.get("tool_name") or "?"
        args = payload.get("arguments") or payload.get("input") or ""
        inv = payload.get("invocation") or {}
        if inv:
            name = f"{inv.get('server', '')}/{inv.get('tool', name)}".strip("/")
            args = inv.get("arguments") or args
        return "→", f"调用 {name}  {short(args, 60)}", True
    if t in ("custom_tool_call_output", "function_call_output", "mcp_tool_call_end"):
        out = payload.get("output") or payload.get("result") or ""
        if isinstance(out, dict):
            out = out.get("content") or out.get("text") or json.dumps(out, ensure_ascii=False)
        ok = "失败" if payload.get("is_error") or payload.get("success") is False else "回来了"
        return "←", f"{ok}  {short(out, 70)}", False
    if t == "web_search_begin":
        return "→", "网页搜索：" + short(payload.get("query", "")), True
    if t == "web_search_end":
        return "←", "搜索回来了", False
    if t == "error":
        return "✗", short(payload.get("message", "出错了")), False
    if t == "stream_error":
        return "✗", "连接出错：" + short(payload.get("message", "")), False
    return None


def main():
    if not os.path.isdir(SESSIONS):
        print(f"找不到 {SESSIONS}——这台机器上还没跑过 codex？")
        return 1

    print("▸ 盯着 Codex 的会话记录。去 ChatGPT 里用 Work/Codex 模式说话。")
    print("  一条条冒出来 = 在干活；卡在某个「调用」上不动 = 出事了。Ctrl-C 退出。")
    print("─" * 62)

    path, fh, pos = None, None, 0
    pending = None            # (什么时候发起的, 叫什么)
    warned_at = 0.0

    try:
        while True:
            latest = newest_rollout()
            if latest and latest != path:
                if fh:
                    fh.close()
                path, pos = latest, 0
                fh = open(path, "r", errors="replace")
                stamp = datetime.now().strftime("%H:%M:%S")
                print(f"\n[{stamp}] ── 新会话 {os.path.basename(path)[:38]}… ──")
                pending = None

            if fh:
                # **必须用 `readline()`，不能 `for line in fh`。**
                # 迭代文件对象会开一个预读缓冲，Python 因此禁掉 `tell()`
                # （OSError: telling position disabled by next() call），
                # 而我们要靠 `tell()` 记住读到哪儿了。
                fh.seek(pos)
                while True:
                    line = fh.readline()
                    if not line:
                        break
                    if not line.endswith("\n"):
                        # 半行——文件正在被写。**不推进 pos**，下一轮重读整行
                        break
                    pos = fh.tell()
                    try:
                        rec = json.loads(line)
                    except ValueError:
                        continue
                    payload = rec.get("payload")
                    if not isinstance(payload, dict):
                        continue
                    got = describe(payload)
                    if not got:
                        continue
                    mark, text, starts_call = got
                    stamp = datetime.now().strftime("%H:%M:%S")
                    if mark == "←" and pending:
                        text += f"（等了 {time.time() - pending[0]:.1f} 秒）"
                    print(f"[{stamp}] {mark} {text}")
                    if starts_call:
                        pending, warned_at = (time.time(), text), 0.0
                    elif mark == "←":
                        pending = None

            # 有调用发出去但一直没回来 —— 这正是"一直在搜"的样子
            if pending:
                waited = time.time() - pending[0]
                if waited > STUCK_AFTER and time.time() - warned_at > 5:
                    warned_at = time.time()
                    print(f"          ⏳ 上面那个调用还没返回，已经 {waited:.0f} 秒")
            time.sleep(0.4)
    except KeyboardInterrupt:
        print("\n收工。")
        return 0


if __name__ == "__main__":
    sys.exit(main())

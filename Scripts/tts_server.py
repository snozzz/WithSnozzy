#!/usr/bin/env python3
"""Snozzy 的嗓子：常驻的本机语音合成服务。

    ./Scripts/tts_serve.sh          # 起服务（第一次要等半分钟加载模型）
    curl -s -X POST localhost:9880/tts -d '{"text":"在呢"}' -o a.wav

## 为什么是常驻服务而不是每次起一个进程

加载模型要 **30 多秒**，合成一句只要 **1.5 秒**。每句话重开一个进程的话，
延迟被启动完全支配——和对话那条路上"每个新进程都要重付一遍会话预热"
是同一个账（见 `LiveSession`）。所以模型只加载一次，之后一直待着。

## 协议刻意做得很笨

`POST /tts {"text": "..."}` → 一段 WAV。就这样。

**不把 GPT-SoVITS 的参数暴露出去**：那些参数（top_k、temperature、
参考音、语言标记）是这个引擎特有的，暴露了 Swift 那边就绑死在这个引擎上。
以后换 CosyVoice、IndexTTS，只改这个文件，`Speaking.swift` 一行都不用动。

## 踩过的四个坑，都固化在下面了

1. **参考音必须 3–10 秒**，短了长了都直接报错。原始语音多是 20–40 秒或者
   1–2 秒，要么切要么拼
2. **本地推理不需要网络，但代理环境变量会把它卡死**——httpx 见到 SOCKS 代理
   就要 socksio，没有就抛 ImportError。所以进程内先把代理变量清掉
3. **`dict_language` 的键是英文**（`Chinese`），不是 `中文`
4. **torchaudio 2.9 起移除了旧解码后端**，`load` 要 torchcodec。不去趟版本
   泥潭，用 soundfile 顶掉它
"""
import io
import json
import os
import sys
import threading
import time
import wave
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

# ── 坑 2：先清代理，再 import 任何会碰网络的东西 ──────────────────
for k in ("http_proxy", "https_proxy", "all_proxy",
          "HTTP_PROXY", "HTTPS_PROXY", "ALL_PROXY"):
    os.environ.pop(k, None)
os.environ["no_proxy"] = "*"
os.environ.setdefault("PYTORCH_ENABLE_MPS_FALLBACK", "1")

ROOT = os.path.expanduser(os.environ.get("SNOZZY_TTS_ROOT",
                                         "~/earn_sth/snozzy-tts"))
GSV = os.path.join(ROOT, "GPT-SoVITS")
PORT = int(os.environ.get("SNOZZY_TTS_PORT", "9880"))
# 用户挑的音色。换音色就改这里（或者传 SNOZZY_VOICE）。
VOICE = os.environ.get("SNOZZY_VOICE", "Nahida")

sys.path.insert(0, GSV)
sys.path.insert(0, os.path.join(GSV, "GPT_SoVITS"))
os.chdir(GSV)                       # 它内部有一堆相对路径

import soundfile as sf              # noqa: E402
import torch, torchaudio            # noqa: E402,E401


# ── 坑 4：torchaudio 的新 load 要 torchcodec，拿 soundfile 顶掉 ────
def _load(path, *a, **k):
    data, sr = sf.read(str(path), dtype="float32", always_2d=True)
    return torch.from_numpy(data.T.copy()), sr


torchaudio.load = _load

BASE = "GPT_SoVITS/pretrained_models/gsv-v2final-pretrained"
os.environ["gpt_path"] = f"{BASE}/s1bert25hz-5kh-longer-epoch=12-step=369668.ckpt"
os.environ["sovits_path"] = f"{BASE}/s2G2333k.pth"

from GPT_SoVITS.inference_webui import (  # noqa: E402
    change_gpt_weights, change_sovits_weights, get_tts_wav,
)

print(f"[snozzy-tts] 加载模型…（半分钟左右，只此一次）", flush=True)
_t0 = time.time()
change_gpt_weights(os.environ["gpt_path"])
change_sovits_weights(os.environ["sovits_path"])

with open(os.path.join(ROOT, "voices/genshin/refs.json"), encoding="utf-8") as f:
    REF = json.load(f)[VOICE]
print(f"[snozzy-tts] 就绪，用了 {time.time() - _t0:.0f} 秒。"
      f"音色 {VOICE}，参考音「{REF['text'][:20]}…」", flush=True)

# 模型只有一份，同时来两个请求会串味。串行化。
_lock = threading.Lock()


def synth(text):
    """合成一句，返回 WAV 字节。"""
    with _lock:
        gen = get_tts_wav(
            ref_wav_path=REF["path"], prompt_text=REF["text"],
            prompt_language="Chinese",          # 坑 3：键是英文
            text=text, text_language="Chinese",
            how_to_cut="No slice",              # 断句在 Swift 那边做完了
            top_k=15, top_p=1.0, temperature=1.0, ref_free=False, speed=1.0)
        sr, audio = next(gen)
    buf = io.BytesIO()
    with wave.open(buf, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sr)
        w.writeframes(audio.tobytes() if audio.dtype.name == "int16"
                      else (audio * 32767).astype("int16").tobytes())
    return buf.getvalue()


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a):
        pass                                    # 默认那套访问日志太吵

    def do_GET(self):
        if self.path.rstrip("/") == "/health":
            body = json.dumps({"ok": True, "voice": VOICE}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        else:
            self.send_error(404)

    def do_POST(self):
        if self.path.rstrip("/") != "/tts":
            self.send_error(404)
            return
        try:
            n = int(self.headers.get("Content-Length", 0))
            text = (json.loads(self.rfile.read(n)) or {}).get("text", "").strip()
        except Exception:
            self.send_error(400, "bad json")
            return
        if not text:
            self.send_error(400, "empty text")
            return
        t0 = time.time()
        try:
            wav = synth(text)
        except Exception as e:
            print(f"[snozzy-tts] 合成失败：{e}", flush=True)
            self.send_error(500, str(e)[:200])
            return
        print(f"[snozzy-tts] {time.time() - t0:4.1f}s  {text[:24]}", flush=True)
        self.send_response(200)
        self.send_header("Content-Type", "audio/wav")
        self.send_header("Content-Length", str(len(wav)))
        self.end_headers()
        self.wfile.write(wav)


if __name__ == "__main__":
    # 只听本机。这是给 app 用的内部服务，没有任何理由对外。
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()

#!/usr/bin/env python3
"""把一堆透明 PNG 拼成 Live2D Cubism 能导入的分层 PSD。

Cubism 建模只认 PSD，而 Python 生态里没有能**写**分层 PSD 的可靠库
（psd-tools 只读，pytoshop 久未维护且装不上）。所以这里直接按
Adobe 的文件格式规范手写，只依赖 numpy + Pillow。

用法:
    python3 Scripts/build_psd.py Art/parts/ --manifest Art/parts/layers.json \\
        --out Art/snozzy.psd

清单格式（从上到下，就是 PS 图层面板里看到的顺序）:
    {"layers": [
        {"name": "iris_L",     "file": "iris_L.png",     "group": "eye_L", "at": [612, 704]},
        {"name": "ahoge",      "file": "ahoge.png",      "group": "hair_front"},
        {"name": "face",       "file": "face.png",       "group": "face"}
    ]}

`group` 相邻相同的会被合并成一个 PSD 图层组。Cubism 导入时会把图层组
变成"部件"（パーツ），是模型树的组织单位，值得费这点事。

不带 `at` 的图必须是整张画布大小（`split_layers.py` 抽出来的就是）。
带 `at` 的图按 [x, y] 摆放，尺寸随意——眼球、瞳孔这类小零件是单独生成
再定位的，不可能整张画布那么大。
"""

import argparse
import json
import os
import struct
import sys

try:
    import numpy as np
    from PIL import Image
except ImportError:
    sys.exit("需要 Pillow 和 numpy：pip3 install pillow numpy")


# ---------------------------------------------------------------- 字节序原语
# PSD 通篇大端。包一层是为了下面的结构定义能一眼看出字段宽度。

def u16(v): return struct.pack(">H", v)
def i16(v): return struct.pack(">h", v)
def u32(v): return struct.pack(">I", v)
def i32(v): return struct.pack(">i", v)


def pad_to(data, n):
    """补零到 n 的整数倍。PSD 里几乎每个变长块都有对齐要求。"""
    r = len(data) % n
    return data if r == 0 else data + b"\0" * (n - r)


def pascal_name(name):
    """图层名的老式 Pascal 字符串。补齐到 4 字节。

    这个字段只能存单字节编码，中文会变成问号——真正的名字靠后面的
    'luni' 块传 UTF-16。两个都要写：老解析器读前者，Photoshop 和
    Cubism 读后者。
    """
    raw = name.encode("ascii", "replace")[:255]
    return pad_to(bytes([len(raw)]) + raw, 4)


def additional(key, data):
    """附加图层信息块：'8BIM' + 四字符键 + 长度 + 数据。"""
    data = pad_to(data, 4)
    return b"8BIM" + key + u32(len(data)) + data


# ---------------------------------------------------------------- PackBits

def packbits(row):
    """PSD 用的 RLE 行压缩。

    不压的话一张 2048² 的画布光合并预览就 16MB，再加三十个图层能到几百兆，
    每次改一版都要等半天。动漫风格大片平涂，PackBits 压缩比很可观。
    """
    out = bytearray()
    n = len(row)
    i = 0
    while i < n:
        # 先看有没有连续重复（至少 3 个才值得编码成游程）
        run = 1
        while i + run < n and row[i + run] == row[i] and run < 128:
            run += 1
        if run >= 3:
            out.append(257 - run)
            out.append(row[i])
            i += run
            continue
        # 否则收集一段互不相同的字面量，遇到 3 连重复就停
        start = i
        i += 1
        while i < n and i - start < 128:
            if i + 2 < n and row[i] == row[i + 1] == row[i + 2]:
                break
            i += 1
        length = i - start
        out.append(length - 1)
        out += row[start:i]
    return bytes(out)


def rle_rows(plane):
    """把一个 uint8 平面逐行压缩，返回 (行长度表, 压缩数据)。

    分成两半返回是必须的：图层通道段和合并图像段对这两截的排布方式不同，
    见 `rle_channel` 和 `write_psd` 里各自的注释。
    """
    rows = [packbits(plane[y].tobytes()) for y in range(plane.shape[0])]
    return b"".join(u16(len(r)) for r in rows), b"".join(rows)


def rle_channel(plane):
    """图层通道的排布：本通道的行长度表紧跟本通道的数据。"""
    counts, data = rle_rows(plane)
    return counts + data


# ---------------------------------------------------------------- 图层

class Layer:
    """一个 PSD 图层。`section` 非 None 时它是组的开/闭标记而不是像素图层。"""

    def __init__(self, name, rgba=None, offset=(0, 0), section=None):
        self.name = name
        self.section = section
        if rgba is None:
            # 组标记图层没有像素，写成 0×0 的空矩形。
            self.top = self.left = self.bottom = self.right = 0
            self.planes = None
        else:
            y, x = offset
            self.top, self.left = y, x
            self.bottom, self.right = y + rgba.shape[0], x + rgba.shape[1]
            # 通道顺序 alpha, R, G, B —— 和下面 record 里声明的 id 顺序一致。
            self.planes = [rgba[:, :, 3], rgba[:, :, 0], rgba[:, :, 1], rgba[:, :, 2]]

    def channel_blocks(self):
        """每个通道的数据块：压缩方式(2) + RLE 数据。"""
        if self.planes is None:
            # 空图层仍然要给四个通道各写一个"空"块，否则 Photoshop 判定文件损坏。
            return [u16(1) for _ in range(4)]
        return [u16(1) + rle_channel(p) for p in self.planes]

    def record(self, blocks):
        b = i32(self.top) + i32(self.left) + i32(self.bottom) + i32(self.right)
        b += u16(4)
        for cid, blk in zip((-1, 0, 1, 2), blocks):
            b += i16(cid) + u32(len(blk))
        # 混合模式签名 + 'norm' + 不透明度 + 裁剪 + 标志位 + 填充
        b += b"8BIM" + b"norm" + bytes([255, 0, 0, 0])

        extra = u32(0)          # 图层蒙版数据：无
        extra += u32(0)         # 混合范围：无
        extra += pascal_name(self.name)
        extra += additional(b"luni", u32(len(self.name)) + self.name.encode("utf-16-be"))
        if self.section is not None:
            extra += additional(b"lsct", u32(self.section))
        return b + u32(len(extra)) + extra


def flatten_groups(entries, images):
    """把「带 group 字段的平铺清单」展开成 PSD 需要的图层序列。

    PSD 里的组是用两个哑图层夹出来的：内容下方一个 type=3 的分隔标记，
    上方一个 type=1 的文件夹图层。而且**文件里的顺序是从下往上**，
    和人看图层面板的顺序正好相反。这个函数是这两件事的唯一集中处。
    """
    out = []          # 自底向上
    current = None

    for entry in reversed(entries):        # 反过来 = 自底向上
        group = entry.get("group")
        if group != current:
            if current is not None:
                out.append(Layer(current, section=1))       # 收上一个组
            if group is not None:
                out.append(Layer("</Layer group>", section=3))   # 开新组的底标记
            current = group
        rgba, offset = images[entry["name"]]
        out.append(Layer(entry["name"], rgba, offset))

    if current is not None:
        out.append(Layer(current, section=1))
    return out


# ---------------------------------------------------------------- 组装

def trim_with_offset(rgba):
    """裁掉四周全透明的边，返回 (裁好的图, (y, x) 偏移)。

    不裁的话每个图层都是整张画布大小，三十个图层就是三十份画布，
    文件体积和 Cubism 的导入耗时都会失控。
    """
    alpha = rgba[:, :, 3]
    rows = np.where((alpha > 0).any(axis=1))[0]
    cols = np.where((alpha > 0).any(axis=0))[0]
    if len(rows) == 0 or len(cols) == 0:
        return rgba[:1, :1], (0, 0)
    y0, y1 = int(rows[0]), int(rows[-1]) + 1
    x0, x1 = int(cols[0]), int(cols[-1]) + 1
    return rgba[y0:y1, x0:x1], (y0, x0)


def composite(entries, images, size):
    """算一张合并预览。

    PSD 末尾必须有这张图，很多读取器（包括 Pillow 和一部分预览工具）
    只认它。顺便也是给人看"这一堆零件拼起来对不对"的最快方式。
    """
    h, w = size
    base = np.zeros((h, w, 4), dtype=float)
    for entry in entries[::-1]:            # 从下往上叠
        rgba, (y, x) = images[entry["name"]]
        sub = base[y:y + rgba.shape[0], x:x + rgba.shape[1]]
        src = rgba.astype(float) / 255.0
        a = src[:, :, 3:4]
        sub[:, :, :3] = src[:, :, :3] * 255.0 * a + sub[:, :, :3] * (1 - a)
        sub[:, :, 3:4] = a * 255.0 + sub[:, :, 3:4] * (1 - a)
    return np.clip(base, 0, 255).astype(np.uint8)


def write_psd(path, entries, images, size):
    h, w = size
    layers = flatten_groups(entries, images)

    # 图层记录里要写通道数据的长度，所以得先把数据算出来。
    blocks = [layer.channel_blocks() for layer in layers]
    records = b"".join(layer.record(blk) for layer, blk in zip(layers, blocks))
    channel_data = b"".join(b"".join(blk) for blk in blocks)

    layer_info = pad_to(i16(len(layers)) + records + channel_data, 2)
    layer_section = u32(len(layer_info)) + layer_info + u32(0)   # 尾部是全局蒙版信息

    # 合并图像段的 RLE 排布和图层通道段**不一样**：这里是
    # 「四个通道的行长度表全部连在一起，然后才是四个通道的数据」。
    # 按图层那样交错写，文件会被判定成截断。
    merged = composite(entries, images, size)
    parts = [rle_rows(np.ascontiguousarray(merged[:, :, c])) for c in (0, 1, 2, 3)]
    merged_data = u16(1) + b"".join(c for c, _ in parts) + b"".join(d for _, d in parts)

    with open(path, "wb") as f:
        f.write(b"8BPS" + u16(1) + b"\0" * 6)
        f.write(u16(4) + u32(h) + u32(w) + u16(8) + u16(3))   # RGBA, 8bit, RGB 模式
        f.write(u32(0))                                        # 颜色模式数据：无
        f.write(u32(0))                                        # 图像资源：无
        f.write(u32(len(layer_section)) + layer_section)
        f.write(merged_data)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("parts_dir", help="放零件 PNG 的目录")
    ap.add_argument("--manifest", help="图层清单 JSON，默认取 <parts_dir>/layers.json")
    ap.add_argument("--out", default="snozzy.psd")
    ap.add_argument("--canvas", help="画布尺寸，如 2048x2048。"
                                     "不给就取第一个整画布图层的尺寸")
    args = ap.parse_args()

    manifest_path = args.manifest or os.path.join(args.parts_dir, "layers.json")
    with open(manifest_path) as f:
        entries = json.load(f)["layers"]

    size = None
    if args.canvas:
        w, h = (int(v) for v in args.canvas.lower().split("x"))
        size = (h, w)

    # 先过一遍整画布的图层，把画布尺寸定下来——带 `at` 的小零件是相对
    # 画布定位的，必须先知道画布多大才能校验它们没有越界。
    loaded, missing = {}, []
    for entry in entries:
        name = entry["file"]
        if name in loaded:
            continue
        path = os.path.join(args.parts_dir, name)
        if not os.path.exists(path):
            missing.append(name)
            continue
        rgba = np.array(Image.open(path).convert("RGBA"))
        loaded[name] = rgba
        if "at" not in entry:
            if size is None:
                size = rgba.shape[:2]
            elif rgba.shape[:2] != size:
                sys.exit(f"{name} 尺寸 {rgba.shape[1]}×{rgba.shape[0]} 与画布 "
                         f"{size[1]}×{size[0]} 不一致。不带 at 的零件必须是整张画布。")

    if missing:
        sys.exit("清单里这些文件不存在：" + ", ".join(missing))
    if size is None:
        sys.exit("清单是空的，或者全都带 at —— 那就得用 --canvas 显式指定画布尺寸")

    images = {}
    for entry in entries:
        rgba = loaded[entry["file"]]
        if "at" in entry:
            x, y = entry["at"]
            if y + rgba.shape[0] > size[0] or x + rgba.shape[1] > size[1]:
                sys.exit(f"{name} 放在 ({x},{y}) 会超出 {size[1]}×{size[0]} 的画布")
            trimmed, (dy, dx) = trim_with_offset(rgba)
            images[entry["name"]] = (trimmed, (y + dy, x + dx))
        else:
            images[entry["name"]] = trim_with_offset(rgba)

    # 缺图层的清单是常态（一边生图一边补），所以只警告不报错。
    write_psd(args.out, entries, images, size)
    mb = os.path.getsize(args.out) / 1e6
    print(f"▸ {args.out}  {size[1]}×{size[0]}  {len(entries)} 个图层  {mb:.1f} MB")
    for entry in entries:
        rgba, (y, x) = images[entry["name"]]
        print(f"    {entry.get('group', '-'):<14} {entry['name']:<18} "
              f"{rgba.shape[1]}×{rgba.shape[0]} @ ({x},{y})")


if __name__ == "__main__":
    main()

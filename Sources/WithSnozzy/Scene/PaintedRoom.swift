import SwiftUI

/// 用手绘素材渲染的房间背景。
///
/// 关键设计：手绘图里的窗洞是**透明的**，程序化的天空画在它后面。
/// 这样昼夜循环、下雨下雪仍然是活的——如果把天空一起画死在图里，
/// 这个房间就永远停在某一个时刻了。
struct PaintedRoomBackdrop: View {
    let assets: SceneAssets
    let palette: Palette
    let weather: Weather
    var t: Double = 0

    var body: some View {
        GeometryReader { geo in
            let size = geo.size
            let roomRect = assets.roomFrame(in: size)

            ZStack(alignment: .topLeading) {
                // 底色：房间图左右裁切后可能有露白，用墙的深色兜底。
                palette.wallShade.darker(0.35).color

                // 1. 天空 —— 塞进窗洞
                if let win = assets.windowFrame(in: size) {
                    SkyView(palette: palette, weather: weather, t: t)
                        .frame(width: win.width, height: win.height)
                        // 玻璃：窗外的光往画面里渗一点，再压一道从左上来的反光。
                        // 不做这两笔的话天空像一块贴上去的补丁，边缘是刀切的。
                        .overlay {
                            LinearGradient(
                                colors: [.white.opacity(0.05), .clear, .white.opacity(0.02)],
                                startPoint: .topLeading, endPoint: .bottomTrailing)
                        }
                        .overlay {
                            RoundedRectangle(cornerRadius: 2)
                                .stroke(palette.skyBottom.color(0.5), lineWidth: 3)
                                .blur(radius: 3)
                        }
                        .offset(x: win.minX, y: win.minY)
                        .shadow(color: Palette.neonCyan.color(0.30 * palette.star),
                                radius: win.width * 0.10)
                }

                // 2. 手绘房间
                if let room = assets.room {
                    Image(nsImage: room)
                        .resizable()
                        .interpolation(.high)
                        .frame(width: roomRect.width, height: roomRect.height)
                        .offset(x: roomRect.minX, y: roomRect.minY)
                }
            }
            // 3. 时段调色。
            //    手绘图自带一套暖色光照，所以这里只做整体的明暗和冷暖偏移，
            //    压得太狠会把画师画的层次全糊掉。
            .colorMultiply(PaintedRoom.ambient(palette).color)
            .overlay {
                // 4. 台灯光晕
                RadialGradient(
                    colors: [palette.lamp.color(0.20 * palette.lampGlow), .clear],
                    center: .init(x: 0.86, y: 0.30),
                    startRadius: 0,
                    endRadius: max(size.width, size.height) * 0.5)
                .blendMode(.plusLighter)
                .allowsHitTesting(false)
            }
            .overlay {
                // 5. 暗角
                RadialGradient(
                    colors: [.clear, .black.opacity(0.42)],
                    center: .init(x: 0.5, y: 0.45),
                    startRadius: min(size.width, size.height) * 0.30,
                    endRadius: max(size.width, size.height) * 0.78)
                .allowsHitTesting(false)
            }
        }
        .ignoresSafeArea()
    }
}

/// 用手绘素材渲染的桌面前景。
struct PaintedRoomForeground: View, Equatable {
    let assets: SceneAssets
    let palette: Palette

    static func == (a: PaintedRoomForeground, b: PaintedRoomForeground) -> Bool {
        a.palette == b.palette && a.assets.loadedFrom == b.assets.loadedFrom
    }

    var body: some View {
        GeometryReader { geo in
            let rect = assets.deskFrame(in: geo.size)
            if let desk = assets.desk {
                Image(nsImage: desk)
                    .resizable()
                    .interpolation(.high)
                    .frame(width: rect.width, height: rect.height)
                    .offset(x: rect.minX, y: rect.minY)
                    .colorMultiply(PaintedRoom.ambient(palette).color)
            }
        }
        .allowsHitTesting(false)
        .ignoresSafeArea()
    }
}

enum PaintedRoom {
    /// 时段环境光。
    ///
    /// 和角色用同一套思路：夜间只压暗、几乎不偏色。
    /// 手绘图里画师已经把暖光画进去了，再整体染一遍橙色只会让它变脏。
    static func ambient(_ palette: Palette) -> RGB {
        let glow = clamp(palette.lampGlow, 0, 1)
        return RGB.lerp(RGB(1.0, 1.0, 1.0), RGB(0.62, 0.58, 0.66), glow)
    }
}

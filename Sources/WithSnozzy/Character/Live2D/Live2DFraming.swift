#if LIVE2D

import simd

/// Live2D 模型的取景。
///
/// 用「视图中心对准模型空间的哪个点」+「视图宽度覆盖多少模型单位」来描述，
/// 而不是缩放系数加偏移量——前者能直接对着画面调，后者要反复试凑。
struct Live2DFraming: Equatable {
    /// 放在视图正中的模型空间坐标。
    var focus: SIMD2<Float>
    /// 视图宽度对应多少模型单位。越小越近。
    var unitsAcross: Float

    /// 全身。诊断用。
    static let fullBody = Live2DFraming(focus: SIMD2(0, -0.05), unitsAcross: 1.0)

    /// 半身像：房间场景里用这个，下半身反正会被桌子挡住。
    static let bust = Live2DFraming(focus: SIMD2(0, 0.30), unitsAcross: 0.62)

    /// 更紧的取景，迷你播放器和桌宠模式用。
    static let closeUp = Live2DFraming(focus: SIMD2(0, 0.42), unitsAcross: 0.48)
}

#endif

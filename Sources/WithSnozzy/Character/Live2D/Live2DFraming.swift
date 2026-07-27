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

    /// 伏案：房间场景里用这个。
    ///
    /// focus.y 比"半身像"更高，意味着镜头顺着模型往上挪，人在画面里坐得更低——
    /// 桌沿于是切在手肘而不是胯部。人真的坐在桌前时，你看到的就是这个高度。
    /// unitsAcross 收窄一点把人拉近，"离桌子很近"才有伏案的感觉。
    static let bust = Live2DFraming(focus: SIMD2(0, 0.40), unitsAcross: 0.55)

    /// 更紧的取景，迷你播放器和桌宠模式用。
    static let closeUp = Live2DFraming(focus: SIMD2(0, 0.42), unitsAcross: 0.48)
}

#endif

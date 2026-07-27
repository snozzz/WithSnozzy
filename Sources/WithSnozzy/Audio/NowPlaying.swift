import Foundation
import MediaPlayer

/// 接管系统的「正在播放」与媒体键。
///
/// 走 `MPRemoteCommandCenter` 而不是自己装事件监听：
/// 前者不需要任何权限，而且顺带能出现在控制中心和锁屏的播放控件里；
/// 后者（CGEventTap）要用户去系统设置里授权辅助功能，为了一个陪伴应用不值得。
@MainActor
final class NowPlaying {

    var onPlay: (() -> Void)?
    var onPause: (() -> Void)?
    var onToggle: (() -> Void)?
    var onNext: (() -> Void)?
    var onPrevious: (() -> Void)?

    private var configured = false

    func configure() {
        guard !configured else { return }
        configured = true

        let center = MPRemoteCommandCenter.shared()

        center.playCommand.addTarget { [weak self] _ in
            self?.onPlay?()
            return .success
        }
        center.pauseCommand.addTarget { [weak self] _ in
            self?.onPause?()
            return .success
        }
        // 耳机线控和部分键盘发的是 toggle 而不是 play/pause。
        center.togglePlayPauseCommand.addTarget { [weak self] _ in
            self?.onToggle?()
            return .success
        }
        center.nextTrackCommand.addTarget { [weak self] _ in
            self?.onNext?()
            return .success
        }
        center.previousTrackCommand.addTarget { [weak self] _ in
            self?.onPrevious?()
            return .success
        }

        // 用不到的命令要显式关掉，否则系统播放控件上会出现一排点不动的按钮。
        for command in [center.seekForwardCommand, center.seekBackwardCommand,
                        center.skipForwardCommand, center.skipBackwardCommand,
                        center.changePlaybackPositionCommand, center.ratingCommand,
                        center.likeCommand, center.dislikeCommand] {
            command.isEnabled = false
        }
    }

    func update(title: String, subtitle: String, isPlaying: Bool) {
        let center = MPNowPlayingInfoCenter.default()
        center.nowPlayingInfo = [
            MPMediaItemPropertyTitle: title,
            MPMediaItemPropertyArtist: subtitle,
            MPMediaItemPropertyAlbumTitle: "With Snozzy",
            MPNowPlayingInfoPropertyPlaybackRate: isPlaying ? 1.0 : 0.0,
        ]
        center.playbackState = isPlaying ? .playing : .paused
    }

    func clear() {
        MPNowPlayingInfoCenter.default().nowPlayingInfo = nil
        MPNowPlayingInfoCenter.default().playbackState = .stopped
    }
}

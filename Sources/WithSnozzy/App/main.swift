import AppKit

/// 进程入口。
///
/// **存在的唯一理由：MCP 服务器不能等 AppKit 起来。**
///
/// 原来 `--mcp` 是在 `AppDelegate.applicationDidFinishLaunching` 里处理的，
/// 和别的几个命令行自检一样。从终端跑没问题，但被**别的 app 当子进程拉起来**
/// 的时候会死在 AppKit 的启动握手里：实测 ChatGPT 起的那个进程一直卡在
/// `AEProcessAppleEvent → NSAppleEventManager`，`applicationDidFinishLaunching`
/// 一次都没跑到，于是 stdin 根本没人读——进程活着、CPU 0%、五分钟一动不动。
///
/// 从外面看，这个 bug 长得和"插件没装上"一模一样：菜单里有、挂得上、
/// 服务器进程也在，就是一个工具都不暴露。查了三轮才看到那根调用栈。
///
/// 所以 stdio 那条路要在**任何 AppKit 代码之前**接管，走完就退出，
/// 一个窗口、一个 NSApplication 都不要。
if MCPServer.isRequested {
    MCPServer.run()
}

// 别的都要 UI（或者至少要 AppKit 的运行循环），交给 SwiftUI。
WithSnozzyApp.main()

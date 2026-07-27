// swift-tools-version: 6.0
import Foundation
import PackageDescription

// WithSnozzy — 零第三方依赖。所有音频与美术均为运行时程序化生成。
//
// 唯一的例外是可选的 Live2D 支持：如果 Vendor/CubismCore/ 存在，
// 就编进 Live2D 渲染管线；不存在时整个包照常编译，用矢量绘制的 Snozzy。
// 这样「克隆下来就能编译」这条承诺不会被第三方 SDK 破坏。

let root = Context.packageDirectory
let coreHeader = "\(root)/Vendor/CubismCore/include/Live2DCubismCore.h"

#if arch(arm64)
let coreArch = "arm64"
#else
let coreArch = "x86_64"
#endif

// 必须是 lib/macos/<arch>/。SDK 里 experimental/catalyst 的架构名和它一样，
// 但那是 Mac Catalyst 的 ABI，链进原生 AppKit 应用会失败。
let coreLibDir = "\(root)/Vendor/CubismCore/lib/macos/\(coreArch)"

let hasCore = FileManager.default.fileExists(atPath: coreHeader)
    && FileManager.default.fileExists(atPath: "\(coreLibDir)/libLive2DCubismCore.a")

var appDependencies: [Target.Dependency] = []
var appSwiftSettings: [SwiftSetting] = [.swiftLanguageMode(.v5)]
var appLinkerSettings: [LinkerSetting] = []
var extraTargets: [Target] = []

if hasCore {
    appDependencies.append("CCubismCore")
    appSwiftSettings.append(.define("LIVE2D"))
    appLinkerSettings.append(.unsafeFlags(["-L\(coreLibDir)", "-lLive2DCubismCore"]))
    extraTargets.append(.systemLibrary(name: "CCubismCore", path: "Sources/CCubismCore"))
}

let package = Package(
    name: "WithSnozzy",
    platforms: [.macOS(.v14)],
    products: [
        .executable(name: "WithSnozzy", targets: ["WithSnozzy"])
    ],
    targets: [
        .executableTarget(
            name: "WithSnozzy",
            dependencies: appDependencies,
            path: "Sources/WithSnozzy",
            swiftSettings: appSwiftSettings,
            linkerSettings: appLinkerSettings
        )
    ] + extraTargets
)

// swift-tools-version: 6.0
import PackageDescription

// WithSnozzy — 零第三方依赖。所有音频与美术均为运行时程序化生成。
let package = Package(
    name: "WithSnozzy",
    platforms: [.macOS(.v14)],
    products: [
        .executable(name: "WithSnozzy", targets: ["WithSnozzy"])
    ],
    targets: [
        .executableTarget(
            name: "WithSnozzy",
            path: "Sources/WithSnozzy",
            swiftSettings: [.swiftLanguageMode(.v5)]
        )
    ]
)

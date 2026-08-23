// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "SnozzySanctuary",
    platforms: [
        .macOS(.v14)
    ],
    products: [
        .library(name: "SnozzyDomain", targets: ["SnozzyDomain"]),
        .library(name: "SnozzyWorld", targets: ["SnozzyWorld"]),
        .library(name: "SnozzyData", targets: ["SnozzyData"]),
        .library(name: "SnozzyAssets", targets: ["SnozzyAssets"]),
        .library(name: "SnozzyAudio", targets: ["SnozzyAudio"]),
        .library(name: "SnozzyPlatform", targets: ["SnozzyPlatform"]),
        .library(name: "SnozzyRuntime", targets: ["SnozzyRuntime"]),
        .library(name: "SnozzyScene", targets: ["SnozzyScene"]),
        .library(name: "SnozzyUI", targets: ["SnozzyUI"]),
        .executable(name: "SnozzySanctuary", targets: ["SnozzySanctuaryApp"]),
        .executable(name: "SnozzyLab", targets: ["SnozzyLab"])
    ],
    targets: [
        .target(name: "SnozzyDomain"),
        .target(
            name: "SnozzyWorld",
            dependencies: ["SnozzyDomain"]
        ),
        .target(
            name: "SnozzyData",
            dependencies: ["SnozzyDomain"]
        ),
        .target(
            name: "SnozzyAssets",
            dependencies: ["SnozzyDomain"]
        ),
        .target(
            name: "SnozzyAudio",
            dependencies: ["SnozzyDomain"]
        ),
        .target(
            name: "SnozzyPlatform",
            dependencies: ["SnozzyDomain"]
        ),
        .target(
            name: "SnozzyRuntime",
            dependencies: ["SnozzyDomain", "SnozzyWorld", "SnozzyData", "SnozzyAudio", "SnozzyPlatform"]
        ),
        .target(
            name: "SnozzyScene",
            dependencies: ["SnozzyDomain", "SnozzyWorld", "SnozzyAssets"]
        ),
        .target(
            name: "SnozzyUI",
            dependencies: ["SnozzyDomain", "SnozzyWorld", "SnozzyScene", "SnozzyPlatform"]
        ),
        .executableTarget(
            name: "SnozzySanctuaryApp",
            dependencies: [
                "SnozzyDomain",
                "SnozzyWorld",
                "SnozzyData",
                "SnozzyAssets",
                "SnozzyAudio",
                "SnozzyPlatform",
                "SnozzyRuntime",
                "SnozzyScene",
                "SnozzyUI"
            ]
        ),
        .executableTarget(
            name: "SnozzyLab",
            dependencies: ["SnozzyDomain", "SnozzyWorld", "SnozzyScene", "SnozzyUI"]
        ),
        .testTarget(
            name: "SnozzyWorldTests",
            dependencies: ["SnozzyDomain", "SnozzyWorld"]
        ),
        .testTarget(
            name: "SnozzyDataTests",
            dependencies: ["SnozzyData", "SnozzyDomain"]
        ),
        .testTarget(
            name: "SnozzyAssetsTests",
            dependencies: ["SnozzyAssets"]
        ),
        .testTarget(
            name: "SnozzySceneTests",
            dependencies: ["SnozzyAssets", "SnozzyScene", "SnozzyWorld"]
        ),
        .testTarget(
            name: "SnozzyUITests",
            dependencies: ["SnozzyDomain", "SnozzyScene", "SnozzyUI", "SnozzyWorld"]
        ),
        .testTarget(
            name: "SnozzyRuntimeTests",
            dependencies: ["SnozzyAudio", "SnozzyData", "SnozzyDomain", "SnozzyRuntime", "SnozzyWorld"]
        ),
        .testTarget(name: "SnozzyArchitectureTests")
    ],
    swiftLanguageModes: [.v6]
)

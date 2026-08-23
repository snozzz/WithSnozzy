# Acceptance

## Phase-one gates

All commands run from `SnozzySanctuary/`:

```bash
swift test
swift build -c release
./Scripts/build_app.sh release
swift run -c release SnozzyLab --assetcheck
swift run -c release SnozzyLab --layercheck
swift run -c release SnozzyLab --rootsnapshot /tmp/snozzy-sanctuary-root.png
swift run -c release SnozzyLab --scenesnapshot /tmp/snozzy-sanctuary-scene.png
swift run -c release SnozzyLab --storagecheck /tmp/snozzy-sanctuary-storage.png
swift run -c release SnozzyLab --responsivecheck /tmp/snozzy-sanctuary-responsive
swift run -c release SnozzyLab --compactcheck /tmp/snozzy-sanctuary-compact.png
```

Required results:

- all reducer replay, deterministic random, focus transition, and dependency tests pass;
- release compilation succeeds under Swift 6 language mode;
- `dist/Snozzy Sanctuary.app` contains the release executable, `Info.plist`, asset catalog, and storylets;
- bundle identifier is `com.snozzz.snozzysanctuary` and minimum macOS is 14;
- root snapshot renders the real `SanctuaryRootView` with a fixed clock, while scene snapshot renders the production `SceneSurface`;
- responsive includes an open “现在” panel; compact still uses the shared `CharacterComposite`;
- Runtime integration proves one echo, one coalesced save, one heartbeat owner, and begin/cancel/finish performance callbacks;
- storagecheck visibly reports a recoverable/read-only error, its quarantine path, and a retry action while world-changing controls are disabled;
- assetcheck reports 66 SHA/dimension-validated records, five atomic packs, and eight polygon hotspots;
- layercheck reports `window → room → legs → body → desk → hands/props → face → feedback`;
- no file outside `SnozzySanctuary/` changes during build/test;
- application support path is `~/Library/Application Support/SnozzySanctuary`.

## Feature acceptance template

Every later feature adds:

1. a deterministic event-stream test;
2. a measurable visual/audio/interaction gate;
3. a negative probe that deliberately violates the contract;
4. a Lab artifact generated through the production surface;
5. a brief resource report describing the measured scenario.

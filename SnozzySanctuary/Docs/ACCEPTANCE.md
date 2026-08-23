# Acceptance

## Phase-one gates

All commands run from `SnozzySanctuary/`:

```bash
swift test
swift build -c release
./Scripts/build_app.sh release
swift run -c release SnozzyLab --smoke /tmp/snozzy-sanctuary-smoke.png
```

Required results:

- all reducer replay, deterministic random, focus transition, and dependency tests pass;
- release compilation succeeds under Swift 6 language mode;
- `dist/Snozzy Sanctuary.app` contains the release executable, `Info.plist`, asset catalog, and storylets;
- bundle identifier is `com.snozzz.snozzysanctuary` and minimum macOS is 14;
- Lab writes a non-empty PNG and reports `surface=SceneSurface`;
- no file outside `SnozzySanctuary/` changes during build/test;
- application support path is `~/Library/Application Support/SnozzySanctuary`.

## Feature acceptance template

Every later feature adds:

1. a deterministic event-stream test;
2. a measurable visual/audio/interaction gate;
3. a negative probe that deliberately violates the contract;
4. a Lab artifact generated through the production surface;
5. a brief resource report describing the measured scenario.

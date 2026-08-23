# Architecture

## Non-negotiable flow

```text
external input
    -> AppEvent
    -> WorldReducer (pure)
    -> WorldState + [Effect]
    -> boundary handlers

WorldState + one tick
    -> SceneSnapshot
    -> SceneSurface(snapshot, assets, geometry)
```

Business code never calls `Date`, system randomness, or constructs a timer. Platform code supplies `Clock` and `RandomSource`; event payloads carry their resolved values. The reducer is therefore replayable byte-for-byte from the same initial state and event stream.

The scene receives one immutable `SceneSnapshot` per UI tick. Face, body, light, particles, focus feedback, and future action rigs must read that same snapshot. A scene subview must never read a clock independently.

`SceneSurface` is the only production scene composition. The app and `SnozzyLab` instantiate it directly. Diagnostic views may frame or annotate it, but may not recreate its room/character/foreground layers.

## Dependency direction

```text
SnozzyDomain
  <- SnozzyWorld
  <- SnozzyData / SnozzyAssets / SnozzyAudio / SnozzyPlatform

SnozzyDomain + SnozzyWorld + SnozzyAssets
  <- SnozzyScene

SnozzyWorld + SnozzyScene + SnozzyPlatform
  <- SnozzyUI

all modules
  <- SnozzySanctuaryApp

SnozzyWorld + SnozzyScene + SnozzyUI
  <- SnozzyLab
```

No lower layer imports UI, Scene, or App. Architecture tests scan every source import and fail on an undeclared edge.

## State and persistence

`WorldState` is versioned and Codable. The phase-one JSON store is deliberately isolated in `SnozzyData`; the domain knows only the `WorldStatePersisting` protocol. User data belongs under `~/Library/Application Support/SnozzySanctuary`, never under the old WithSnozzy directory.

## Evolution seams

- Replace `SilentAudioController` with the real DSP actor behind `AudioHandling`.
- Extend `Effect` for asset warming, persistence scheduling, speech, and external integrations.
- Add validated asset records without teaching Scene about filesystem layout.
- Add action state to Domain/World, then derive all pose channels in `SceneSnapshot`.
- Keep diagnostic rendering on `SceneSurface`; add overlays around it in Lab.

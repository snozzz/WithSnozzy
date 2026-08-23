# Architecture

## Non-negotiable flow

```text
external input
    -> AppEvent
    -> WorldReducer (pure)
    -> WorldState + [Effect]
    -> SnozzyRuntime drains effects to stability
    -> one heartbeat / coalesced save / random / audio / performance

WorldState + one tick
    -> SceneSnapshot
    -> SceneSurface(snapshot, assets, geometry)
```

Business code never calls `Date`, system randomness, or constructs a timer. Platform code supplies `Clock` and `RandomSource`; event payloads carry their resolved values. The reducer is therefore replayable byte-for-byte from the same initial state and event stream.

`PerformanceState` is process-local even though it remains in reducer state for coordination. Runtime strips active/queued performances from every durable save and sanitizes older saves on launch. Lifecycle generations isolate cancelled drains, so a stopped generation cannot recreate heartbeat or performance tasks. Persistence failures become observable ready/starting/read-only/failed state consumed by production UI.

The scene receives one immutable `SceneSnapshot` per UI tick. Face, body, light, particles, focus feedback, and future action rigs must read that same snapshot. A scene subview must never read a clock independently.

`SceneSurface` is the only production scene composition. The app and `SnozzyLab --scenesnapshot` instantiate it directly. `--rootsnapshot` renders the real `SanctuaryRootView` with a fixed clock and side-effect-free injected sink. Diagnostic views may frame or annotate the production surface, but may not recreate its room/character/foreground layers.

The immutable production layer order is `window → room → legs → body → desk → hands/props → face → feedback`. Complete-room and floating-companion presentations both consume `CharacterComposite` and one `SceneSnapshot`; the compact surface only changes the crop. All layers share one 1536×1024 canvas transform, preserving 3:2 without stretching at every window ratio.

## Dependency direction

```text
SnozzyDomain
  <- SnozzyWorld
  <- SnozzyData / SnozzyAssets / SnozzyAudio / SnozzyPlatform

SnozzyWorld + SnozzyData + SnozzyAudio + SnozzyPlatform
  <- SnozzyRuntime

SnozzyDomain + SnozzyWorld + SnozzyAssets
  <- SnozzyScene

SnozzyWorld + SnozzyScene + SnozzyPlatform
  <- SnozzyUI

all modules
  <- SnozzySanctuaryApp

SnozzyDomain + SnozzyWorld + SnozzyScene + SnozzyUI
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

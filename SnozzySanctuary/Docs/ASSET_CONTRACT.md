# Asset Contract

## Addressing

Runtime code addresses assets only by IDs declared in `Resources/AssetCatalog.json`. It must not glob directories or infer related frames from filenames. `relativePath` is resolved from the resource root after the catalog is decoded.

## Coordinate contract

- Logical canvas: 1536×1024.
- Raster variants declare `pixelScale`; actual pixels must equal logical rect × scale.
- Room, character, occluder, prop, hand, face, and effect layers share the same camera and logical canvas.
- Geometry is transformed once by `SceneSurface`; individual layers never calculate their own viewport scale.

## Publication

`ArtSource` contains sources and prompts. Shipping output goes to `Resources/AssetsV2`. `AssetsLegacy` is compatibility-only. A multi-file action or expression set is atomic: missing or mismatched files disable the full set, never a subset.

Before adding a production raster set, its manifest must cover:

1. logical rect and pixel scale;
2. frame order and frame duration;
3. channel/layer role and occlusion order;
4. source hashes or a generation revision;
5. expected bounds and continuity gates;
6. a fallback policy that cannot mix incompatible generations.

## Required measurements

- Premultiplied-RGBA reconstruction for split layers.
- Silhouette XOR/IoU for animation continuity.
- Frame extent for crop safety.
- Pixel-difference screenshots at real supported window sizes.
- Explicit negative probes proving every important gate can fail.

The phase-one programmatic fallback is intentionally marked `isFallback`; it is a boot/smoke surface, not final character art.

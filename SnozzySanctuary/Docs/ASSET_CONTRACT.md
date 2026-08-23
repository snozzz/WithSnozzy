# Asset Contract

## Addressing

Runtime code addresses assets only by IDs declared in `Resources/AssetCatalog.json`. It must not glob directories or infer related frames from filenames. `relativePath` is resolved from the verified app-bundle resource root after the catalog is decoded.

Every record carries a SHA-256 digest. Raster records must carry non-optional exact physical dimensions, logical rect, and a positive pixel scale. Every atomic pack lists exactly the same IDs as the records that name that pack. A missing field, file, symlink, traversal path, digest mismatch, dimension mismatch, or partial pack fails the complete load.

Production uses `AssetLibrary(bundle:)` only. The explicit-root initializer exists solely for tests and SnozzyLab; there is no executable-relative or current-working-directory fallback.

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

The approved import is a closed whitelist in `Scripts/import_legacy_assets.py`. It contains the Blender body/headphones, five leg poses and transitions, 2× hands, 2× face patches, and four cat frames. It explicitly excludes Live2D, realtime 3D, vector Snozzy, obsolete 1× hands, and unvalidated optional action packs.

The V2 room source, exact final prompt, mask, and drift report live in `ArtSource`. Reported drift is window 0 px, desk-edge median 0 px, and monitor-right-edge 1 px.

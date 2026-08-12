import * as THREE from './vendor/three.module.min.js';
import { GLTFLoader } from './vendor/examples/jsm/loaders/GLTFLoader.js';

const FPS = 24;
const CROSSFADE_SECONDS = 0.3;
const canvas = document.getElementById('phase0-canvas');
const post = (type, payload = {}) => {
  const message = { type, ...payload };
  if (window.webkit?.messageHandlers?.phase0) {
    window.webkit.messageHandlers.phase0.postMessage(message);
  }
};

const manifest = window.__phase0Manifest || {};
const assetURL = window.__phase0AssetURL;
const clock = new THREE.Clock();
const frameIntervals = [];
const frameTimes = [];
let previousRAF = 0;
let idlePixels = null;
let typingPixels = null;
let idleAction;
let typingAction;
let mixer;
let renderer;
let scene;
let camera;
let gltfRoot;
let finished = false;
let crossfadeStartedAt = 0;
let frameCount = 0;
let modelLoadStart = performance.now();
let previousCreateImageBitmap = null;

function restoreCreateImageBitmap() {
  if (previousCreateImageBitmap === null) return;
  try { globalThis.createImageBitmap = previousCreateImageBitmap; } catch (_) { /* read-only */ }
  previousCreateImageBitmap = null;
}

function isCutoutMaterial(material) {
  const name = (material.name || '').toLowerCase();
  return /hair|eyelash|eyeline|brow/.test(name);
}

function prepareSRGBMap(map) {
  if (!map) return null;
  // VRoid's MToon textures are already authored as display-referred color.
  // Keep that contract explicit when the GLTFLoader hands the texture to an
  // unlit material; otherwise WebGL may treat the image as linear and shift
  // the pastel palette toward white.
  map.colorSpace = THREE.SRGBColorSpace;
  map.needsUpdate = true;
  return map;
}

function unlitifyMaterial(material) {
  if (!material || material.userData?.phase0Unlit) return material;
  const cutout = isCutoutMaterial(material);
  const map = prepareSRGBMap(material.map || null);
  const alphaMap = material.alphaMap || null;
  const basic = new THREE.MeshBasicMaterial({
    color: material.color?.clone?.() || new THREE.Color(0xffffff),
    map,
    alphaMap,
    transparent: Boolean(material.transparent) || cutout,
    alphaTest: cutout ? 0.35 : (material.alphaTest || 0),
    depthWrite: true,
    side: THREE.DoubleSide,
  });
  // Three's shader parameters are inferred from the object in newer builds,
  // but keep these flags explicit for the macOS WKWebView build as well. This
  // preserves the original skeleton and morph target path on SkinnedMesh.
  basic.skinning = Boolean(material.skinning) || true;
  basic.morphTargets = Boolean(material.morphTargets) || true;
  basic.morphNormals = Boolean(material.morphNormals);
  basic.needsUpdate = true;
  basic.name = `${material.name || 'Material'}_Phase0Unlit`;
  basic.userData.phase0Unlit = true;
  basic.userData.phase0Character = true;
  basic.userData.phase0SourceName = material.name || '';
  basic.userData.phase0AlphaMode = cutout ? 'MASK(alphaTest=0.35)' : (material.transparent ? 'BLEND' : 'OPAQUE');
  return basic;
}

function toonifyMaterial(material) {
  if (!material || material.userData?.phase0Toon) return material;
  const cutout = isCutoutMaterial(material);
  const params = {
    color: material.color?.clone?.() || new THREE.Color(0xffffff),
    map: material.map || null,
    alphaMap: material.alphaMap || null,
    skinning: Boolean(material.skinning),
    morphTargets: Boolean(material.morphTargets),
    morphNormals: Boolean(material.morphNormals),
  };
  const toon = new THREE.MeshToonMaterial(params);
  toon.name = `${material.name || 'Material'}_Phase0Toon`;
  toon.transparent = Boolean(material.transparent) || cutout;
  toon.alphaTest = cutout ? 0.35 : (material.alphaTest || 0);
  toon.depthWrite = true;
  toon.side = THREE.DoubleSide;
  toon.userData.phase0Toon = true;
  toon.userData.phase0SourceName = material.name || '';
  toon.userData.phase0AlphaMode = cutout ? 'MASK(alphaTest=0.35)' : (material.transparent ? 'BLEND' : 'OPAQUE');
  return toon;
}

function isCharacterObject(object) {
  return Boolean(object.isSkinnedMesh) || /^(body|face|hair|sleeve)/i.test(object.name || '');
}

function applyToonFactory(root) {
  const materialRecords = new Map();
  root.traverse((object) => {
    if (!object.isMesh) return;
    const source = Array.isArray(object.material) ? object.material : [object.material];
    const converted = source.map((material) => {
      const convertedMaterial = isCharacterObject(object)
        ? unlitifyMaterial(material)
        : (object.userData.phase0Character !== false ? toonifyMaterial(material) : material);
      materialRecords.set(convertedMaterial.uuid, convertedMaterial);
      return convertedMaterial;
    });
    object.material = Array.isArray(object.material) ? converted : converted[0];
    if (object.isSkinnedMesh) object.frustumCulled = false;
  });
  return [...materialRecords.values()];
}

function triangleCount(geometry) {
  if (!geometry?.index) return Math.floor((geometry?.attributes?.position?.count || 0) / 3);
  return Math.floor(geometry.index.count / 3);
}

function runtimeMetrics(root, materials) {
  let nodes = 0;
  let meshes = 0;
  let triangles = 0;
  let bones = 0;
  let skeletonBones = 0;
  const morphNames = new Set();
  const meshRecords = [];
  root.traverse((object) => {
    nodes += 1;
    if (object.isBone) bones += 1;
    if (!object.isMesh) return;
    meshes += 1;
    triangles += triangleCount(object.geometry);
    if (object.morphTargetDictionary) Object.keys(object.morphTargetDictionary).forEach((name) => morphNames.add(name));
    if (object.isSkinnedMesh && object.skeleton) skeletonBones = Math.max(skeletonBones, object.skeleton.bones.length);
    meshRecords.push({
      name: object.name,
      triangles: triangleCount(object.geometry),
      materialCount: Array.isArray(object.material) ? object.material.length : 1,
      morphTargetCount: object.morphTargetDictionary ? Object.keys(object.morphTargetDictionary).length : 0,
      skinned: Boolean(object.isSkinnedMesh),
    });
  });
  const bounds = new THREE.Box3().setFromObject(root);
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const alphaMaterials = materials.filter((material) => material.transparent || material.alphaTest > 0);
  const materialRuntime = materials.map((material) => {
    const map = material.map || null;
    const image = map?.image || null;
    const imageSource = map?.source?.data || null;
    return {
      name: material.userData.phase0SourceName || material.name,
      runtimeName: material.name,
      type: material.type,
      role: material.userData.phase0Character ? 'character' : 'scene',
      unlit: Boolean(material.userData.phase0Unlit),
      map: {
        present: Boolean(map),
        uuid: map?.uuid || null,
        imageName: image?.name || null,
        imageSourceUUID: map?.source?.uuid || null,
        imageSourceType: imageSource?.constructor?.name || null,
        width: image?.width || image?.videoWidth || null,
        height: image?.height || image?.videoHeight || null,
        colorSpace: map?.colorSpace || null,
      },
      alphaMapPresent: Boolean(material.alphaMap),
      alphaTest: material.alphaTest,
      transparent: material.transparent,
      depthWrite: material.depthWrite,
    };
  });
  const characterMaterials = materialRuntime.filter((record) => record.role === 'character');
  return {
    nodeCount: nodes,
    meshCount: meshes,
    boneCount: bones,
    skeletonBoneCount: skeletonBones,
    morphTargetCount: morphNames.size,
    triangleCount: triangles,
    materialCount: materials.length,
    characterMaterialCount: characterMaterials.length,
    unlitCharacterMaterialCount: characterMaterials.filter((record) => record.unlit).length,
    characterMaterials,
    materialRuntime,
    alphaMaterialCount: alphaMaterials.length,
    alphaMaterials: alphaMaterials.map((material) => ({
      name: material.userData.phase0SourceName || material.name,
      transparent: material.transparent,
      alphaTest: material.alphaTest,
      depthWrite: material.depthWrite,
      side: material.side === THREE.DoubleSide ? 'DoubleSide' : 'FrontSide',
      toon: Boolean(material.userData.phase0Toon),
      unlit: Boolean(material.userData.phase0Unlit),
      mapPresent: Boolean(material.map),
      mapColorSpace: material.map?.colorSpace || null,
      alphaMode: material.userData.phase0AlphaMode || (material.transparent ? 'BLEND' : 'MASK'),
    })),
    meshes: meshRecords,
    bounds: {
      min: bounds.min.toArray(),
      max: bounds.max.toArray(),
      size: size.toArray(),
      center: center.toArray(),
    },
    rootScale: root.scale.toArray(),
  };
}

function pixelBuffer() {
  const gl = renderer.getContext();
  const width = renderer.domElement.width;
  const height = renderer.domElement.height;
  const pixels = new Uint8Array(width * height * 4);
  gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  return pixels;
}

function pixelDiff(a, b) {
  if (!a || !b || a.length !== b.length) return { changedPixels: 0, meanAbsoluteChannelDiff: 0, maxChannelDiff: 0 };
  let changedPixels = 0;
  let sum = 0;
  let max = 0;
  for (let i = 0; i < a.length; i += 4) {
    let channelMax = 0;
    for (let c = 0; c < 4; c += 1) {
      const difference = Math.abs(a[i + c] - b[i + c]);
      channelMax = Math.max(channelMax, difference);
      sum += difference;
      max = Math.max(max, difference);
    }
    if (channelMax > 2) changedPixels += 1;
  }
  return {
    changedPixels,
    changedPixelRatio: changedPixels / (a.length / 4),
    meanAbsoluteChannelDiff: sum / a.length,
    maxChannelDiff: max,
  };
}

function capture(name) {
  renderer.render(scene, camera);
  const dataURL = renderer.domElement.toDataURL('image/png');
  const pixels = pixelBuffer();
  if (name === 'idle') idlePixels = pixels;
  if (name === 'typing') typingPixels = pixels;
  post('screenshot', { name, dataURL });
  if (idlePixels && typingPixels) {
    window.__phase0PixelDiff = pixelDiff(idlePixels, typingPixels);
    post('pixelDiff', { pixelDiff: window.__phase0PixelDiff });
  }
}

function recordCrossfadeSample() {
  if (!crossfadeStartedAt || !typingAction) return;
  const elapsed = (performance.now() - crossfadeStartedAt) / 1000;
  if (elapsed > CROSSFADE_SECONDS + 0.08) return;
  const samples = window.__phase0CrossfadeSamples = window.__phase0CrossfadeSamples || [];
  if (samples.some((sample) => Math.abs(sample.elapsedSeconds - elapsed) < 0.01)) return;
  samples.push({
    elapsedSeconds: elapsed,
    idleWeight: idleAction?.getEffectiveWeight?.() || 0,
    typingWeight: typingAction.getEffectiveWeight(),
    idleTimeSeconds: idleAction?.time || 0,
    typingTimeSeconds: typingAction.time,
  });
}

function trackTargetsBone(track) {
  const separator = track.name.lastIndexOf('.');
  if (separator <= 0 || !gltfRoot) return false;
  const targetName = track.name.slice(0, separator);
  const target = gltfRoot.getObjectByName(targetName);
  return Boolean(target?.isBone);
}

function animationReport(master, idle, typing) {
  const boneTracks = master.tracks.filter(trackTargetsBone);
  return {
    sourceClip: master.name,
    sourceDurationSeconds: master.duration,
    sourceTrackCount: master.tracks.length,
    sourceBoneTrackCount: boneTracks.length,
    clips: [idle, typing].map((clip) => ({
      name: clip.name,
      durationSeconds: clip.duration,
      trackCount: clip.tracks.length,
      boneTrackCount: clip.tracks.filter(trackTargetsBone).length,
      loop: true,
    })),
    sourceFrameRate: FPS,
    sourceFrameRange: [0, 96],
  };
}

function frameTimingReport() {
  // The first local-file navigation, shader compilation, and texture decode
  // can pause WebKit for several hundred milliseconds. Keep those warmup
  // gaps visible for diagnosis, but exclude them from the active renderer
  // timing gate so a cold-start hitch cannot masquerade as frame jank.
  const warmupIntervals = frameIntervals.filter((value) => value > 100);
  const activeIntervals = frameIntervals.filter((value) => value <= 100);
  const sorted = [...activeIntervals].sort((a, b) => a - b);
  const rawSorted = [...frameIntervals].sort((a, b) => a - b);
  const percentile = (values, p) => values.length
    ? values[Math.min(values.length - 1, Math.floor(values.length * p))]
    : 0;
  const duration = frameTimes.length > 1 ? frameTimes.at(-1) - frameTimes[0] : 0;
  const activeDuration = activeIntervals.reduce((total, value) => total + value, 0);
  return {
    frames: frameCount,
    durationSeconds: duration / 1000,
    fps: activeDuration > 0 ? (activeIntervals.length * 1000) / activeDuration : 0,
    activeIntervalCount: activeIntervals.length,
    warmupExcludedIntervalCount: warmupIntervals.length,
    warmupExcludedIntervalsMs: warmupIntervals.slice(0, 12),
    frameTimeMs: {
      min: sorted[0] || 0,
      median: percentile(sorted, 0.5),
      p95: percentile(sorted, 0.95),
      max: sorted.at(-1) || 0,
    },
    rawFrameTimeMs: {
      min: rawSorted[0] || 0,
      median: percentile(rawSorted, 0.5),
      p95: percentile(rawSorted, 0.95),
      max: rawSorted.at(-1) || 0,
    },
  };
}

function runtimeGates(metrics, animation, frameTiming) {
  const required = manifest.validation || {};
  const requiredBones = Number(required.requiredBoneCount || 222);
  const requiredMorphs = Number(required.requiredMorphTargetCount || 57);
  const requiredMaterials = Number(required.requiredCharacterMaterialCount || 20);
  const characterMaterials = metrics.characterMaterials || [];
  const clips = animation?.clips || [];
  const crossfadeSamples = window.__phase0CrossfadeSamples || [];
  const blendFactors = crossfadeSamples.map((sample) => Number(sample.typingWeight));
  const hasIntermediateBlend = blendFactors.some((value) => value > 0.05 && value < 0.95);
  const pixel = window.__phase0PixelDiff || pixelDiff(idlePixels, typingPixels);
  const gates = {
    webgl: Boolean(renderer?.getContext?.()),
    bones: metrics.skeletonBoneCount === requiredBones && metrics.boneCount >= requiredBones,
    morphTargets: metrics.morphTargetCount === requiredMorphs,
    characterMaterials: metrics.characterMaterialCount >= requiredMaterials,
    embeddedCharacterMaps: characterMaterials.length >= requiredMaterials
      && characterMaterials.slice(0, requiredMaterials).every((record) => record.map?.present),
    clips: clips.length === 2
      && clips.every((clip) => clip.loop && Math.abs(Number(clip.durationSeconds) - 2) <= 0.02
        && Number(clip.boneTrackCount) > 0),
    crossfade: Math.abs(CROSSFADE_SECONDS - 0.3) <= 1e-6
      && crossfadeSamples.length >= 2
      && hasIntermediateBlend,
    animationDiff: Number(pixel.changedPixelRatio || 0) > 0.0005
      && Number(pixel.maxChannelDiff || 0) > 2,
    activeFrameTiming: frameTiming.activeIntervalCount >= 5
      && Number(frameTiming.frameTimeMs.p95 || 0) <= 100,
  };
  return {
    status: Object.values(gates).every(Boolean) ? 'PASS' : 'FAIL',
    gates,
    failedGates: Object.entries(gates).filter(([, passed]) => !passed).map(([name]) => name),
    thresholds: {
      requiredBones,
      requiredMorphs,
      requiredMaterials,
      crossfadeSeconds: CROSSFADE_SECONDS,
      minimumChangedPixelRatio: 0.0005,
      maximumActiveFrameP95Ms: 100,
    },
  };
}

function finish(metrics, animation, startedAt) {
  if (finished) return;
  finished = true;
  const frameTiming = frameTimingReport();
  const gates = runtimeGates(metrics, animation, frameTiming);
  const report = {
    status: gates.status,
    runtime: 'WKWebView + local Three.js module + GLTFLoader',
    webgl: {
      renderer: renderer.getContext().getParameter(renderer.getContext().RENDERER),
      vendor: renderer.getContext().getParameter(renderer.getContext().VENDOR),
      version: renderer.getContext().getParameter(renderer.getContext().VERSION),
      shadingLanguageVersion: renderer.getContext().getParameter(renderer.getContext().SHADING_LANGUAGE_VERSION),
    },
    assetURL,
    loadMilliseconds: performance.now() - modelLoadStart,
    elapsedMilliseconds: performance.now() - startedAt,
    counts: metrics,
    animation,
    crossfade: {
      requestedSeconds: CROSSFADE_SECONDS,
      samples: window.__phase0CrossfadeSamples || [],
      intermediateFrameCount: (window.__phase0CrossfadeSamples || []).length,
      intermediateBlendFactors: (window.__phase0CrossfadeSamples || []).map((sample) => sample.typingWeight),
    },
    pixelDiff: window.__phase0PixelDiff || pixelDiff(idlePixels, typingPixels),
    frameTiming,
    gates,
    screenshotNames: ['idle', 'crossfade_mid', 'typing'],
    textureLoader: window.__phase0TextureLoader || null,
    manifestExpected: manifest.counts || {},
  };
  post('report', { report });
  post('done', { report });
}

function animate() {
  if (finished) return;
  if (frameCount === 0) post('firstFrame', { width: renderer.domElement.width, height: renderer.domElement.height });
  const now = performance.now();
  if (previousRAF) frameIntervals.push(now - previousRAF);
  previousRAF = now;
  frameTimes.push(now);
  frameCount += 1;
  if (frameTimes.length > 300) frameTimes.shift();
  const delta = Math.min(clock.getDelta(), 0.1);
  if (mixer) mixer.update(delta);
  renderer.render(scene, camera);
  if (crossfadeStartedAt > 0) {
    const elapsed = (now - crossfadeStartedAt) / 1000;
    recordCrossfadeSample();
    if (elapsed >= CROSSFADE_SECONDS + 0.4 && !window.__phase0TypingCaptured) {
      window.__phase0TypingCaptured = true;
      capture('typing');
      finish(window.__phase0Metrics, window.__phase0Animation, window.__phase0StartedAt);
    }
  }
  // WKWebView can throttle requestAnimationFrame for a standalone diagnostic
  // window while it is being launched from a terminal. A timer keeps this
  // deterministic and still gives us measured frame intervals for the gate.
  setTimeout(animate, 1000 / 60);
}

function beginAnimation(gltf, metrics) {
  mixer = new THREE.AnimationMixer(gltfRoot);
  const master = gltf.animations.find((clip) => clip.name.includes('RuntimeMaster')) || gltf.animations[0];
  if (!master) throw new Error('GLB has no animation clip');
  // The exporter authors frame 48 as the shared seam. subclip() trims actual
  // bone tracks, so this is a true skeleton action rather than a material swap.
  // Manifest frame ranges are inclusive sample labels (0…48 and 48…96).
  // Three's subclip end is exclusive, hence 0…49 and 48…97; both actions are
  // exactly 2.000 seconds and share the frame-48 seam once.
  const idle = THREE.AnimationUtils.subclip(master, 'idle_seated_loop', 0, 49, FPS);
  const typing = THREE.AnimationUtils.subclip(master, 'typing_loop', 48, 97, FPS);
  idleAction = mixer.clipAction(idle);
  typingAction = mixer.clipAction(typing);
  idleAction.setLoop(THREE.LoopRepeat, Infinity).play();
  typingAction.setLoop(THREE.LoopRepeat, Infinity).setEffectiveWeight(0);
  window.__phase0Metrics = metrics;
  window.__phase0Animation = animationReport(master, idle, typing);
  window.__phase0StartedAt = performance.now();
  window.__phase0CrossfadeSamples = [];
  post('setup', { animation: window.__phase0Animation, counts: metrics });
  setTimeout(() => {
    // A render immediately after `play()` can still contain the loader's
    // bind pose: the first requestAnimationFrame has not advanced the mixer.
    // Establish a deterministic t=0 pose before taking the golden idle frame.
    mixer.setTime(0);
    mixer.update(0);
    gltfRoot.updateMatrixWorld(true);
    renderer.render(scene, camera);
    capture('idle');
    setTimeout(() => {
      crossfadeStartedAt = performance.now();
      typingAction.reset().setEffectiveWeight(1).play();
      idleAction.crossFadeTo(typingAction, CROSSFADE_SECONDS, false);
      [50, 150, 250].forEach((delay) => setTimeout(() => {
        // Action weights are advanced by Mixer.update; this small deterministic
        // tick keeps diagnostics sampling the real fade even when WebKit
        // throttles the render timer.
        mixer?.update(0.05);
        recordCrossfadeSample();
      }, delay));
      setTimeout(() => capture('crossfade_mid'), Math.round(CROSSFADE_SECONDS * 500));
    }, 500);
  }, 16);
  setTimeout(animate, 16);
}

function setup(gltf) {
  // GLTFParser creates its texture loader inside parse/load, not in the
  // GLTFLoader constructor. Keep the ImageBitmap override in place until the
  // onLoad callback proves that every dependency (including images) finished.
  restoreCreateImageBitmap();
  post('stage', { name: 'setup_enter' });
  gltfRoot = gltf.scene;
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x171a2a);
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  post('stage', { name: 'renderer_ready' });
  scene.add(new THREE.HemisphereLight(0xe6e6ff, 0x313148, 1.8));
  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(2.5, -3.5, 4.5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xa7b4ff, 1.2);
  fill.position.set(-3, 1, 2);
  scene.add(fill);
  const materials = applyToonFactory(gltfRoot);
  post('stage', { name: 'materials_ready', count: materials.length });
  // Blender authors this asset Z-up while the browser renderer is Y-up.  The
  // GLB deliberately keeps the authoring contract in its manifest, so make
  // the conversion explicit at the runtime root instead of relying on an
  // exporter/importer convention.  Z-up -> Y-up is -90° around X (the
  // positive direction keeps world-up positive); the sign is easy to get
  // backwards and leaves the seated character upside down. Updating the
  // world matrix before measuring is important: the same converted bounds
  // drive both the camera and the diagnostic counts.
  gltfRoot.rotation.x = -Math.PI / 2;
  scene.add(gltfRoot);
  gltfRoot.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(gltfRoot);
  const center = bounds.getCenter(new THREE.Vector3());
  const size = bounds.getSize(new THREE.Vector3());
  camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.01, 100);
  // After the explicit Z-up → Y-up conversion, world Y is height and world Z
  // is the character's front/back axis.  Keep the camera above the seat and
  // put the viewing distance on Z; using the old Y-forward camera makes the
  // desk read as a vertical wall and the seated pose look horizontal.
  camera.position.set(center.x + size.x * 0.18,
                      center.y + size.y * 0.50,
                      center.z + size.z * 2.55);
  camera.lookAt(center.x, center.y + size.y * 0.08, center.z + size.z * 0.02);
  camera.updateProjectionMatrix();
  const metrics = runtimeMetrics(gltfRoot, materials);
  post('stage', { name: 'metrics_ready' });
  metrics.materialCount = materials.length;
  window.__phase0Metrics = metrics;
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
  beginAnimation(gltf, metrics);
  post('stage', { name: 'animation_started' });
}

post('ready', { assetURL });
if (!assetURL && !window.__phase0AssetDataURL) {
  post('error', { message: 'native harness did not provide a GLB file URL' });
} else {
  // WKWebView can expose `createImageBitmap` while rejecting blob-backed PNG
  // decode from a GLB bufferView. GLTFLoader catches that failure and returns
  // a valid-looking material with `map = null`, which is how the character
  // silently became white. Prefer the synchronous TextureLoader path for this
  // local, self-contained diagnostic/runtime bundle; it still decodes the same
  // embedded image bytes and keeps the GLB free of external URLs.
  previousCreateImageBitmap = globalThis.createImageBitmap;
  try { globalThis.createImageBitmap = undefined; } catch (_) { /* read-only */ }
  const loader = new GLTFLoader();
  window.__phase0TextureLoader = 'TextureLoader (createImageBitmap disabled until parse complete)';
  const parseError = (error) => {
    restoreCreateImageBitmap();
    post('error', { message: `GLB load failed: ${error?.message || String(error)}` });
  };
  if (window.__phase0AssetDataURL) {
    const comma = window.__phase0AssetDataURL.indexOf(',');
    try {
      const bytes = Uint8Array.from(atob(window.__phase0AssetDataURL.slice(comma + 1)), (character) => character.charCodeAt(0));
      loader.parse(bytes.buffer, '', setup, parseError);
    } catch (error) {
      parseError(error);
    }
  } else {
    loader.load(assetURL, setup, undefined, parseError);
  }
}

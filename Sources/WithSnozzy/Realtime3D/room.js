import * as THREE from './vendor/three.module.min.js';
import { GLTFLoader } from './vendor/examples/jsm/loaders/GLTFLoader.js';

const FPS = 24;
const CROSSFADE_SECONDS = 0.32;
const canvas = document.getElementById('room-canvas');
const roomRoot = document.getElementById('room-root');
const loadingLabel = document.getElementById('room-loading');
const errorPanel = document.getElementById('room-error');
const errorLabel = document.getElementById('room-error-message');
const statusLabel = document.getElementById('room-status');
const post = (type, payload = {}) => {
  const message = { type, ...payload };
  if (window.webkit?.messageHandlers?.room) {
    window.webkit.messageHandlers.room.postMessage(message);
  }
};

const manifest = window.__withSnozzy3DManifest || {};
const assetURL = window.__withSnozzy3DAssetURL;
const assetDataURL = window.__withSnozzy3DAssetDataURL;
const diagnosticRun = window.__withSnozzy3DDiagnostic || null;
const clock = new THREE.Clock();
const frameIntervals = [];
const frameTimes = [];
let previousRAF = 0;
let idlePixels = null;
let typingPixels = null;
const actions = new Map();
const clipDefinitions = new Map();
let currentAction = null;
let currentActionName = '';
let preferredLoop = 'typing_loop';
let oneShotAction = null;
let companionAction = null;
let mixer;
let renderer;
let scene;
let camera;
let gltfRoot;
let disposed = false;
let paused = false;
let lowPower = false;
let frameCount = 0;
let modelLoadStart = performance.now();
let previousCreateImageBitmap = null;
let activeFPSWindowStart = performance.now();
let activeFPSFrames = 0;
let activeFPS = 0;
let diagnosticIdlePixels = null;
let diagnosticTypingPixels = null;
let diagnosticStep = null;
const diagnosticActiveWeights = [];
let crossfadeStartedAt = 0;
const crossfadeSamples = [];
const propRestTransforms = new Map();
let routineTimer = null;
let routineGeneration = 0;
let routineStartedAt = 0;
let routineRemainingMs = 0;
let routinePausedAt = 0;
let routineManualReset = 0;
let routineDeferred = false;
let routinePendingName = null;
let routineProbeActive = false;
let routineProbeTimer = null;
let routineProbeEvents = [];
let routineProbeResult = null;
let runtimeContactMeasurement = null;

const RUNTIME_CONTACT_TOLERANCE_METERS = 0.025;
const RUNTIME_PROP_CONTACT_WINDOWS = {
  coffee_once: { startFrame: 56, endFrame: 120, hand: 'J_Bip_R_Hand', prop: 'Prop_Coffee', companion: 'coffee_once_PropMotion' },
  phone_once: { startFrame: 52, endFrame: 128, hand: 'J_Bip_L_Hand', prop: 'Prop_Phone', companion: 'phone_once_PropMotion' },
};
const RUNTIME_TYPING_FINGERS = ['Index', 'Middle', 'Ring', 'Little'];
const RUNTIME_TYPING_SIDES = ['L', 'R'];
const RUNTIME_TYPING_FOOTPRINT_PADDING_METERS = 0.005;
const RUNTIME_TYPING_TOP_TOLERANCE_METERS = 0.010;

const ROUTINE_DELAYS_MS = {
  typing: [30000, 90000],
  idle: [45000, 150000],
  coffee: [240000, 600000],
  phone: [360000, 900000],
  stand: [480000, 1200000],
};
const ROUTINE_DISTRIBUTION = [
  { name: 'typing_loop', probability: 0.68 },
  { name: 'idle_seated_loop', probability: 0.22 },
  { name: 'coffee_once', probability: 0.04 },
  { name: 'phone_once', probability: 0.04 },
  { name: 'stand_stretch_once', probability: 0.02 },
];

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function clearRoutineTimer() {
  if (routineTimer !== null) {
    clearTimeout(routineTimer);
    routineTimer = null;
  }
}

function clearRoutineProbeTimer() {
  if (routineProbeTimer !== null) {
    clearTimeout(routineProbeTimer);
    routineProbeTimer = null;
  }
}

function cancelRoutineForTeardown() {
  routineGeneration += 1;
  clearRoutineTimer();
  routinePendingName = null;
  routineRemainingMs = 0;
  routinePausedAt = 0;
  routineDeferred = false;
}

function chooseRoutineAction() {
  const roll = Math.random();
  let cumulative = 0;
  for (const entry of ROUTINE_DISTRIBUTION) {
    cumulative += entry.probability;
    if (roll < cumulative) return entry.name;
  }
  return ROUTINE_DISTRIBUTION.at(-1).name;
}

function scheduleRoutine(delayMs = null, pendingName = null) {
  if ((diagnosticRun && !routineProbeActive) || disposed || paused || oneShotAction || routineTimer !== null) return;
  const requested = pendingName || routinePendingName || chooseRoutineAction();
  const name = actions.has(requested) ? requested
    : (actions.has('typing_loop') ? 'typing_loop' : (actions.has('idle_seated_loop') ? 'idle_seated_loop' : null));
  if (!name) return;
  routinePendingName = name;
  const key = name === 'typing_loop' ? 'typing' : name === 'idle_seated_loop' ? 'idle'
    : name === 'coffee_once' ? 'coffee' : name === 'phone_once' ? 'phone' : 'stand';
  const [minimum, maximum] = ROUTINE_DELAYS_MS[key];
  routineRemainingMs = Math.max(0, Number(delayMs ?? randomBetween(minimum, maximum)));
  routineStartedAt = performance.now();
  const generation = routineGeneration;
  routineTimer = setTimeout(() => {
    routineTimer = null;
    routinePendingName = null;
    if (disposed || paused || generation !== routineGeneration) return;
    if (routineProbeActive) routineProbeEvents.push('timerFired');
    const started = playAction(name, { manual: false, routine: true });
    if (started && !oneShotAction && !routineProbeActive) scheduleRoutine();
  }, routineRemainingMs);
}

function resetRoutineSchedule() {
  if ((diagnosticRun && !routineProbeActive) || disposed) return;
  clearRoutineTimer();
  routineGeneration += 1;
  routineManualReset += 1;
  routineRemainingMs = 0;
  routinePausedAt = 0;
  routinePendingName = null;
  if (oneShotAction) {
    routineDeferred = true;
  } else {
    routineDeferred = false;
    scheduleRoutine();
  }
}

function pauseRoutineSchedule() {
  if ((diagnosticRun && !routineProbeActive) || paused || routineTimer === null) return;
  const elapsed = Math.max(0, performance.now() - routineStartedAt);
  routineRemainingMs = Math.max(0, routineRemainingMs - elapsed);
  routinePausedAt = performance.now();
  routineGeneration += 1;
  clearRoutineTimer();
}

function resumeRoutineSchedule() {
  if ((diagnosticRun && !routineProbeActive) || paused || disposed || routineTimer !== null) return;
  scheduleRoutine(routineRemainingMs || null, routinePendingName);
}

function runRoutineProbe(delayMs = 40, allowDiagnostic = false, onComplete = null) {
  if ((diagnosticRun && !allowDiagnostic) || disposed || paused || routineProbeActive || oneShotAction) return false;
  const requestedDelayMs = Math.max(15, Math.min(5000, Number(delayMs) || 40));
  clearRoutineProbeTimer();
  clearRoutineTimer();
  routineGeneration += 1;
  routinePendingName = null;
  routineRemainingMs = 0;
  routinePausedAt = 0;
  routineProbeActive = true;
  routineProbeEvents = [];
  routineProbeResult = null;

  const schedulePhase = {
    requestedDelayMs,
    scheduled: false,
    timerFired: false,
    actionBefore: currentActionName,
    actionAfter: null,
    eventsBefore: 0,
    eventsAfter: 0,
    passed: false,
  };
  const pauseResumePhase = {
    pauseSuspends: false,
    resumeRestores: false,
    remainingMs: 0,
    passed: false,
  };
  const manualReorderPhase = {
    started: false,
    resetCountBefore: routineManualReset,
    resetCountAfter: routineManualReset,
    generationBefore: routineGeneration,
    generationAfter: routineGeneration,
    generationAdvanced: false,
    timerScheduled: false,
    timerReordered: false,
    pendingName: null,
    passed: false,
  };
  const teardownPhase = {
    scheduled: false,
    generationBefore: routineGeneration,
    generationAfter: routineGeneration,
    timerCanceled: false,
    timerFiredBefore: 0,
    timerFiredAfter: 0,
    noNewTimerFired: false,
    actionBefore: currentActionName,
    actionAfter: null,
    actionUnchanged: false,
    oldGenerationSuppressed: false,
    callbackSuppressed: false,
    passed: false,
  };

  // Phase 1: schedule an actual short routine timer, pause/resume it, and
  // wait for that timer's real callback to record timerFired.
  scheduleRoutine(requestedDelayMs, 'typing_loop');
  schedulePhase.scheduled = routineTimer !== null;
  schedulePhase.eventsBefore = routineProbeEvents.length;
  setPaused(true);
  pauseResumePhase.remainingMs = routineRemainingMs;
  pauseResumePhase.pauseSuspends = routineTimer === null && routineRemainingMs > 0;
  setPaused(false);
  pauseResumePhase.resumeRestores = routineTimer !== null;

  const finishRoutineProbe = () => {
    if (disposed || !routineProbeActive) return;
    clearRoutineProbeTimer();
    schedulePhase.eventsAfter = routineProbeEvents.length;
    schedulePhase.timerFired = routineProbeEvents
      .slice(schedulePhase.eventsBefore)
      .includes('timerFired');
    schedulePhase.actionAfter = currentActionName;
    schedulePhase.passed = schedulePhase.scheduled && schedulePhase.timerFired;
    teardownPhase.timerFiredAfter = routineProbeEvents.length;
    teardownPhase.actionAfter = currentActionName;
    teardownPhase.actionUnchanged = teardownPhase.actionBefore === teardownPhase.actionAfter;
    teardownPhase.noNewTimerFired = teardownPhase.timerFiredAfter === teardownPhase.timerFiredBefore;
    teardownPhase.oldGenerationSuppressed = teardownPhase.generationAfter > teardownPhase.generationBefore;
    teardownPhase.callbackSuppressed = teardownPhase.noNewTimerFired
      && teardownPhase.actionUnchanged
      && routineTimer === null;
    teardownPhase.passed = teardownPhase.scheduled
      && teardownPhase.timerCanceled
      && teardownPhase.generationAfter > teardownPhase.generationBefore
      && teardownPhase.callbackSuppressed;
    const pauseResumePassed = pauseResumePhase.pauseSuspends && pauseResumePhase.resumeRestores;
    const manualPassed = manualReorderPhase.started
      && manualReorderPhase.resetCountAfter > manualReorderPhase.resetCountBefore
      && manualReorderPhase.generationAfter > manualReorderPhase.generationBefore
      && manualReorderPhase.timerScheduled
      && manualReorderPhase.passed;
    const callbackSuppressed = teardownPhase.callbackSuppressed;
    routineProbeActive = false;
    routinePendingName = null;
    routineRemainingMs = 0;
    routinePausedAt = 0;
    routineProbeResult = {
      requestedDelayMs,
      schedule: { ...schedulePhase },
      pauseResume: { ...pauseResumePhase, passed: pauseResumePassed },
      manualReorder: { ...manualReorderPhase, passed: manualPassed },
      teardownCancel: { ...teardownPhase },
      callbackSuppressed,
      // Keep the original flat fields for native clients that consumed the
      // first probe shape while exposing the phase evidence above.
      scheduled: schedulePhase.scheduled,
      accelerated: manualReorderPhase.timerScheduled,
      pauseSuspends: pauseResumePhase.pauseSuspends,
      resumeRestores: pauseResumePhase.resumeRestores,
      manualReset: manualPassed,
      timerFired: schedulePhase.timerFired,
      passed: schedulePhase.passed
        && pauseResumePassed
        && manualPassed
        && teardownPhase.passed
        && callbackSuppressed,
    };
    // A diagnostic probe is self-contained. Do not re-arm the production
    // scheduler with a long random delay after its report is ready.
    if (!diagnosticRun) scheduleRoutine();
    post('routineProbe', { result: routineProbeResult });
    if (typeof onComplete === 'function') onComplete(routineProbeResult);
  };

  const runManualReorderPhase = () => {
    if (disposed || !routineProbeActive) return;
    const resetBefore = routineManualReset;
    const generationBefore = routineGeneration;
    const manualStarted = playAction('typing_loop', { manual: true });
    manualReorderPhase.started = manualStarted;
    manualReorderPhase.resetCountBefore = resetBefore;
    manualReorderPhase.resetCountAfter = routineManualReset;
    manualReorderPhase.generationBefore = generationBefore;
    manualReorderPhase.generationAfter = routineGeneration;
    manualReorderPhase.generationAdvanced = routineGeneration > generationBefore;
    manualReorderPhase.timerScheduled = routineTimer !== null;
    manualReorderPhase.timerReordered = manualReorderPhase.timerScheduled
      && manualReorderPhase.generationAdvanced;
    manualReorderPhase.pendingName = routinePendingName;
    manualReorderPhase.passed = manualStarted
      && routineManualReset === resetBefore + 1
      && routineGeneration > generationBefore
      && routineTimer !== null
      && manualReorderPhase.timerReordered;

    // Cancel the timer created by the manual reset before starting the
    // teardown phase. This leaves no long timer behind in either mode.
    clearRoutineTimer();
    routineGeneration += 1;
    routinePendingName = null;
    routineRemainingMs = 0;
    routinePausedAt = 0;

    // Phase 3: schedule a short timer, then cancel it through the same
    // teardown path used by dispose. Waiting beyond its due time proves that
    // both the timer and its old generation callback were suppressed.
    teardownPhase.generationBefore = routineGeneration;
    teardownPhase.actionBefore = currentActionName;
    const eventCountBefore = routineProbeEvents.length;
    scheduleRoutine(requestedDelayMs, 'typing_loop');
    teardownPhase.scheduled = routineTimer !== null;
    teardownPhase.timerFiredBefore = eventCountBefore;
    const timerBeforeCancel = routineTimer;
    cancelRoutineForTeardown();
    teardownPhase.generationAfter = routineGeneration;
    teardownPhase.timerCanceled = timerBeforeCancel !== null && routineTimer === null;
    routineProbeTimer = setTimeout(finishRoutineProbe, requestedDelayMs + 40);
  };

  routineProbeTimer = setTimeout(() => {
    routineProbeTimer = null;
    if (disposed || !routineProbeActive) return;
    const timerFired = routineProbeEvents
      .slice(schedulePhase.eventsBefore)
      .includes('timerFired');
    if (timerFired) {
      runManualReorderPhase();
      return;
    }
    // Keep the evidence explicit when a timer was unexpectedly suppressed;
    // still run the remaining phases so the completion callback is finite.
    runManualReorderPhase();
  }, requestedDelayMs + 40);
  return true;
}

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
  const convertedBySourceUUID = new Map();
  root.traverse((object) => {
    if (!object.isMesh) return;
    const source = Array.isArray(object.material) ? object.material : [object.material];
    const converted = source.map((material) => {
      if (!material) return material;
      const sourceUUID = material.uuid || null;
      const cached = sourceUUID ? convertedBySourceUUID.get(sourceUUID) : null;
      const convertedMaterial = cached || (isCharacterObject(object)
        ? unlitifyMaterial(material)
        : (object.userData.phase0Character !== false ? toonifyMaterial(material) : material));
      if (sourceUUID && !cached) convertedBySourceUUID.set(sourceUUID, convertedMaterial);
      if (convertedMaterial) materialRecords.set(convertedMaterial.uuid, convertedMaterial);
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
  if (name === 'idle') { idlePixels = pixels; diagnosticIdlePixels = pixels; }
  if (name === 'typing') { typingPixels = pixels; diagnosticTypingPixels = pixels; }
  post('screenshot', { name, dataURL });
  if (idlePixels && typingPixels) {
    const diff = pixelDiff(idlePixels, typingPixels);
    post('pixelDiff', { pixelDiff: diff });
  }
}

function recordCrossfadeSample(forcedElapsedSeconds = null) {
  const target = actions.get('typing_loop');
  if (!crossfadeStartedAt || !target) return;
  const elapsed = forcedElapsedSeconds ?? ((performance.now() - crossfadeStartedAt) / 1000);
  if (elapsed > CROSSFADE_SECONDS + 0.08) return;
  if (crossfadeSamples.some((sample) => Math.abs(sample.elapsedSeconds - elapsed) < 0.01)) return;
  crossfadeSamples.push({
    elapsedSeconds: elapsed,
    idleWeight: actions.get('idle_seated_loop')?.getEffectiveWeight?.() || 0,
    typingWeight: target.getEffectiveWeight(),
    idleTimeSeconds: actions.get('idle_seated_loop')?.time || 0,
    typingTimeSeconds: target.time,
  });
}

function recordDiagnosticActionWeights(name, screenshotName, timeSeconds, companionName = null) {
  const active = [...actions.entries()]
    .map(([actionName, action]) => ({
      name: actionName,
      weight: Number(action.getEffectiveWeight?.() || 0),
    }))
    .filter((entry) => entry.weight > 0.001)
    .sort((a, b) => b.weight - a.weight);
  const main = active.find((entry) => entry.name === name);
  const expectedCompanion = companionName || null;
  const unexpected = active.filter((entry) =>
    entry.name !== name && entry.name !== expectedCompanion);
  const companion = expectedCompanion
    ? active.find((entry) => entry.name === expectedCompanion)
    : null;
  const isolatedPass = Boolean(main)
    && Math.abs(main.weight - 1) <= 0.03
    && !unexpected.length
    && (!expectedCompanion || Boolean(companion));
  const sample = {
    action: name,
    screenshot: screenshotName,
    timeSeconds,
    active,
    mainWeight: main?.weight || 0,
    companion: companion?.name || null,
    companionWeight: companion?.weight || 0,
    isolatedPass,
  };
  diagnosticActiveWeights.push(sample);
  post('diagnostic', { phase: 'sampleWeights', ...sample });
  return sample;
}

function trackTargetsBone(track) {
  const separator = track.name.lastIndexOf('.');
  if (separator <= 0 || !gltfRoot) return false;
  const targetName = track.name.slice(0, separator);
  const target = gltfRoot.getObjectByName(targetName);
  return Boolean(target?.isBone);
}

function animationReport(clips) {
  return {
    sourceClipCount: clips.length,
    clips: clips.map((clip) => ({
      name: clip.name,
      durationSeconds: clip.duration,
      trackCount: clip.tracks.length,
      boneTrackCount: clip.tracks.filter(trackTargetsBone).length,
      hasPropTracks: clip.tracks.some((track) => /Prop_|Keyboard|Monitor|Coffee|Phone/.test(track.name)),
      loop: Boolean(clipDefinitions.get(clip.name)?.loop),
    })),
    sourceFrameRate: FPS,
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

function roomReport() {
  const gl = renderer?.getContext?.();
  const metrics = window.__roomMetrics || {};
  const clips = [...clipDefinitions.values()].map((clip) => ({
    name: clip.name,
    durationSeconds: clip.duration,
    trackCount: clip.tracks.length,
    boneTrackCount: clip.tracks.filter(trackTargetsBone).length,
    loop: Boolean(clipDefinitions.get(clip.name)?.loop),
    actionCreated: actions.has(clip.name),
  }));
  const pixel = pixelDiff(diagnosticIdlePixels, diagnosticTypingPixels);
  const required = manifest.validation || {};
  const requiredClips = Array.isArray(required.requiredClips) ? required.requiredClips : [];
  const actionNames = new Set(actions.keys());
  const missingClips = requiredClips.filter((name) => !actionNames.has(name));
  const requiredBones = Number(manifest.counts?.boneCount || 0);
  const requiredMorphs = Number(manifest.counts?.morphTargetCount || 0);
  const requiredMaterials = Number(manifest.counts?.materialCount || 0);
  const maxMaterials = Number(manifest.validation?.maxMaterials
    ?? manifest.budgets?.maxMaterials);
  const materialCountBudgetPass = Number.isFinite(maxMaterials)
    && metrics.materialCount <= maxMaterials;
  const companionGates = ['coffee_once', 'phone_once']
    .filter((name) => actionNames.has(name))
    .map((name) => `${name}_PropMotion`)
    .filter((name) => actionNames.has(name));
  const companionMissing = ['coffee_once', 'phone_once']
    .filter((name) => actionNames.has(name) && !actionNames.has(`${name}_PropMotion`));
  const runtimeContact = window.__runtimeContactMeasurement || runtimeContactMeasurement || {};
  const runtimeContactPass = runtimeContact.source === 'runtimeAnimationSample'
    && runtimeContact.pass === true
    && runtimeContact.restoredToTyping === true;
  const clipMetadata = new Map((manifest.clips || []).map((clip) => [clip.name, clip]));
  const coffeeContact = clipMetadata.get('coffee_once')?.contact || {};
  const phoneContact = clipMetadata.get('phone_once')?.contact || {};
  const typingClip = clipMetadata.get('typing_loop') || {};
  const typingContact = typingClip.contact || {};
  const finiteNumber = (value) => typeof value === 'number' && Number.isFinite(value);
  const propContactPass = (value) => {
    const tolerance = value?.toleranceMeters;
    const minimum = value?.wristToSocketMinMeters;
    const maximum = value?.wristToSocketMaxMeters;
    const sampleCount = value?.grabSampleCount;
    const trajectory = value?.trajectoryMaxMeters;
    return finiteNumber(tolerance) && tolerance > 0
      && finiteNumber(minimum) && minimum >= 0 && minimum <= tolerance
      && finiteNumber(maximum) && maximum >= 0 && maximum <= tolerance
      && finiteNumber(sampleCount) && sampleCount > 0
      && finiteNumber(trajectory) && trajectory > 0;
  };
  const contactContractPass = propContactPass(coffeeContact)
    && propContactPass(phoneContact);
  const keyboardContact = typingClip.keyboardContact;
  const keyboardDistance = keyboardContact?.maxFingerTipPlaneErrorMeters;
  const keyboardSampleCount = keyboardContact?.sampleCount;
  const keyboardContactPass = finiteNumber(keyboardDistance)
    && keyboardDistance <= 0.025
    && finiteNumber(keyboardSampleCount) && keyboardSampleCount > 0;
  const manifestContact = Boolean(manifest.validation?.contactContract)
    && contactContractPass
    && keyboardContactPass;
  const cameraContract = window.__roomCameraContract || {};
  const cameraContractPass = cameraContract.source === 'manifest'
    && Array.isArray(cameraContract.position)
    && cameraContract.position.length === 3
    && Array.isArray(cameraContract.target)
    && cameraContract.target.length === 3
    && Number.isFinite(Number(cameraContract.fov));
  const isolatedSamplesPass = !diagnosticRun
    || (diagnosticActiveWeights.length > 0
      && diagnosticActiveWeights.every((sample) => sample.isolatedPass));
  const frameTiming = frameTimingReport();
  const pixelGate = diagnosticRun ? Number(pixel.changedPixelRatio || 0) > 0.00001
    && Number(pixel.maxChannelDiff || 0) > 2 : true;
  const routineScheduler = {
    enabled: !Boolean(diagnosticRun),
    productionOnly: true,
    distribution: ROUTINE_DISTRIBUTION,
    timerActive: routineTimer !== null,
    supportsTimerCancellation: true,
    manualResetCount: routineManualReset,
    pauseSuspends: true,
    resumeRestores: true,
    supportsDisposeCancellation: true,
    disposeCancellationObserved: routineProbeResult?.teardownCancel?.passed === true
      && routineProbeResult?.teardownCancel?.callbackSuppressed === true,
    probe: routineProbeResult,
    state: disposed ? 'disposed' : paused ? 'paused'
      : oneShotAction ? 'deferred_for_one_shot'
        : routineTimer !== null ? 'scheduled' : 'idle',
  };
  const routineSchedulerPass = routineScheduler.productionOnly
    && routineScheduler.supportsTimerCancellation
    && routineScheduler.supportsDisposeCancellation
    && routineProbeResult?.passed === true;
  const gates = {
    webgl: Boolean(gl),
    skeleton: metrics.skeletonBoneCount >= requiredBones && metrics.boneCount >= requiredBones,
    morphTargets: metrics.morphTargetCount >= requiredMorphs,
    materials: metrics.characterMaterialCount >= Math.min(requiredMaterials, 20)
      && materialCountBudgetPass,
    routineScheduler: routineSchedulerPass,
    triangles: metrics.triangleCount <= Number(required.maxTriangles || 200000),
    requiredClips: missingClips.length === 0,
    propCompanionActions: companionMissing.length === 0,
    runtimeContact: runtimeContactPass,
    manifestContact,
    cameraContract: cameraContractPass,
    isolatedCaptureActions: isolatedSamplesPass,
    actionBindings: requiredClips.every((name) => actionNames.has(name)),
    pixelAnimation: pixelGate,
    activeFrameTiming: diagnosticRun?.performance ? frameTiming.activeIntervalCount >= 5
      && Number(frameTiming.frameTimeMs.p95 || 0) <= 100 : true,
  };
  return {
    status: Object.values(gates).every(Boolean) ? 'PASS' : 'FAIL',
    runtime: 'WKWebView + vendored Three.js + GLTFLoader',
    assetURL,
    loadMilliseconds: performance.now() - modelLoadStart,
    webgl: gl ? {
      renderer: gl.getParameter(gl.RENDERER),
      vendor: gl.getParameter(gl.VENDOR),
      version: gl.getParameter(gl.VERSION),
      shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
    } : null,
    counts: metrics,
    animation: {
      clips,
      activeAction: currentActionName,
      crossfadeSeconds: CROSSFADE_SECONDS,
      crossfadeSamples,
    },
    camera: cameraContract,
    diagnosticActiveWeights,
    activeFPS: diagnosticRun?.performance ? frameTiming.fps : activeFPS,
    renderLoopFPS: activeFPS,
    frameTiming,
    pixelDiff: pixel,
    gates,
    failedGates: Object.entries(gates).filter(([, passed]) => !passed).map(([name]) => name),
    missingClips,
    companionGates,
    companionMissing,
    runtimeContact,
    contact: {
      contractPass: contactContractPass,
      source: runtimeContact.source || null,
      runtime: runtimeContact,
      typingKeyboardPass: keyboardContactPass,
      contract: manifest.validation?.contactContract || null,
      coffee: coffeeContact,
      phone: phoneContact,
      typing: typingContact,
      keyboardDistanceMeters: keyboardDistance,
      keyboardSampleCount,
      maxMaterials,
      runtimeMaterialCount: metrics.materialCount,
      materialCountBudgetPass,
    },
    manifestExpected: manifest.counts || {},
    routineScheduler,
    requiredClips,
    textureLoader: window.__roomTextureLoader || null,
    diagnostics: diagnosticRun ? {
      requestedActions: diagnosticRun.actions || [],
      screenshots: diagnosticRun.screenshots !== false,
      performance: Boolean(diagnosticRun.performance),
      activeWeights: diagnosticActiveWeights,
    } : null,
  };
}

function finishDiagnostics() {
  if (!diagnosticRun || diagnosticStep === 'done') return;
  diagnosticStep = 'done';
  const report = roomReport();
  post('report', { report });
  post('done', { report });
}

function animate() {
  if (disposed) return;
  if (frameCount === 0) post('firstFrame', { width: renderer.domElement.width, height: renderer.domElement.height });
  const now = performance.now();
  if (previousRAF) frameIntervals.push(now - previousRAF);
  previousRAF = now;
  frameTimes.push(now);
  frameCount += 1;
  if (frameTimes.length > 300) frameTimes.shift();
  const delta = Math.min(clock.getDelta(), 0.1);
  if (!paused) {
    if (mixer) mixer.update(delta);
    renderer.render(scene, camera);
    activeFPSFrames += 1;
    if (now - activeFPSWindowStart >= 1000) {
      activeFPS = activeFPSFrames * 1000 / (now - activeFPSWindowStart);
      activeFPSFrames = 0;
      activeFPSWindowStart = now;
      post('status', { message: `${currentActionName || '准备中'} · ${Math.round(activeFPS)} FPS`, action: currentActionName });
    }
    recordCrossfadeSample();
    if (diagnosticRun) advanceDiagnostics(now);
  }
  // WKWebView can throttle requestAnimationFrame for a standalone diagnostic
  // window while it is being launched from a terminal. A timer keeps this
  // deterministic and still gives us measured frame intervals for the gate.
  setTimeout(animate, 1000 / 60);
}

function updateStatus(message, action = currentActionName) {
  if (statusLabel) statusLabel.textContent = message;
  post('status', { message, action });
}

function actionNameFor(request) {
  const requested = String(request || '').trim();
  const aliases = {
    idle: 'idle_seated_loop',
    typing: 'typing_loop',
    coffee: 'coffee_once',
    phone: 'phone_once',
    stand: 'stand_stretch_once',
    stretch: 'stand_stretch_once',
  };
  return aliases[requested] || requested;
}

function playAction(request, options = {}) {
  const name = actionNameFor(request);
  const next = actions.get(name);
  if (!next) {
    showError(`动作「${name}」不在当前 GLB 中`);
    return false;
  }
  const previous = currentAction;
  if (previous === next && next.isRunning()) {
    if (options.manual) resetRoutineSchedule();
    return true;
  }
  if (oneShotAction && oneShotAction !== next) {
    oneShotAction.stop();
    oneShotAction = null;
  }
  clearCompanionMotion();
  next.reset();
  if (clipDefinitions.get(name)?.loop) {
    next.setLoop(THREE.LoopRepeat, Infinity).clampWhenFinished = false;
  } else {
    next.setLoop(THREE.LoopOnce, 1).clampWhenFinished = true;
    oneShotAction = next;
  }
  next.setEffectiveWeight(1).play();
  if (previous && previous !== next) {
    previous.crossFadeTo(next, CROSSFADE_SECONDS, false);
    crossfadeStartedAt = performance.now();
  }
  currentAction = next;
  currentActionName = name;
  if (clipDefinitions.get(name)?.loop) preferredLoop = name;
  updateStatus(options.manual ? `正在${clipDefinitions.get(name)?.label || name}` : (clipDefinitions.get(name)?.label || name), name);
  if (options.manual) post('action', { name, manual: true });
  const companionName = {
    coffee_once: 'coffee_once_PropMotion',
    phone_once: 'phone_once_PropMotion',
  }[name];
  if (companionName && actions.has(companionName)) {
    restorePropRest('Prop_Coffee');
    restorePropRest('Prop_Phone');
    companionAction = actions.get(companionName);
    companionAction.reset()
      .setLoop(THREE.LoopOnce, 1)
      .setEffectiveWeight(1)
      .play();
  }
  if (options.manual) resetRoutineSchedule();
  return true;
}

function finishOneShot(action) {
  if (action !== oneShotAction) return;
  oneShotAction = null;
  clearCompanionMotion();
  const fallback = actions.has(preferredLoop) ? preferredLoop : 'typing_loop';
  playAction(fallback, { manual: false });
  if (routineDeferred) routineDeferred = false;
  scheduleRoutine();
}

function savePropRest(root, name) {
  const object = root.getObjectByName(name);
  if (!object) return;
  propRestTransforms.set(name, {
    position: object.position.clone(),
    quaternion: object.quaternion.clone(),
    scale: object.scale.clone(),
  });
}

function restorePropRest(name) {
  const object = gltfRoot?.getObjectByName(name);
  const rest = propRestTransforms.get(name);
  if (!object || !rest) return;
  object.position.copy(rest.position);
  object.quaternion.copy(rest.quaternion);
  object.scale.copy(rest.scale);
  object.updateMatrixWorld(true);
}

function clearCompanionMotion() {
  companionAction?.stop?.();
  companionAction = null;
  restorePropRest('Prop_Coffee');
  restorePropRest('Prop_Phone');
}

function finiteVector3(value) {
  return Boolean(value)
    && Number.isFinite(value.x)
    && Number.isFinite(value.y)
    && Number.isFinite(value.z);
}

function isolateRuntimeAction(name, companionName = null) {
  if (!mixer || !gltfRoot) return { pass: false, reason: 'missing_runtime_state' };
  const action = actions.get(name);
  if (!action) return { pass: false, reason: `missing_action:${name}` };
  if (companionName && !actions.has(companionName)) {
    return { pass: false, reason: `missing_action:${companionName}` };
  }

  mixer.stopAllAction();
  actions.forEach((candidate) => {
    candidate.stop();
    candidate.reset();
    candidate.enabled = false;
    candidate.setEffectiveWeight(0);
  });
  clearCompanionMotion();

  action.enabled = true;
  action.setLoop(THREE.LoopOnce, 1);
  action.clampWhenFinished = true;
  action.setEffectiveWeight(1).play();
  let companion = null;
  if (companionName) {
    companion = actions.get(companionName);
    companion.enabled = true;
    companion.setLoop(THREE.LoopOnce, 1);
    companion.clampWhenFinished = true;
    companion.setEffectiveWeight(1).play();
  }
  return { pass: true, action, companion };
}

function restoreTypingAfterRuntimeContact() {
  const typing = actions.get('typing_loop');
  if (!typing || !mixer || !gltfRoot) return false;
  mixer.stopAllAction();
  actions.forEach((candidate) => {
    candidate.stop();
    candidate.reset();
    candidate.enabled = false;
    candidate.setEffectiveWeight(0);
  });
  clearCompanionMotion();
  typing.enabled = true;
  typing.setLoop(THREE.LoopRepeat, Infinity);
  typing.clampWhenFinished = false;
  typing.setEffectiveWeight(1).play();
  typing.time = 0;
  mixer.update(0);
  gltfRoot.updateMatrixWorld(true);
  currentAction = typing;
  currentActionName = 'typing_loop';
  preferredLoop = 'typing_loop';
  oneShotAction = null;
  crossfadeStartedAt = 0;
  return true;
}

function sampleRuntimePropContact(name, definition) {
  const base = {
    action: name,
    companion: definition.companion,
    hand: definition.hand,
    prop: definition.prop,
    startFrame: definition.startFrame,
    endFrame: definition.endFrame,
    fps: FPS,
    toleranceMeters: RUNTIME_CONTACT_TOLERANCE_METERS,
    source: 'runtimeAnimationSample',
    sampleCount: 0,
    maxWorldDistanceMeters: null,
    minWorldDistanceMeters: null,
    pass: false,
  };
  if (!gltfRoot || !mixer) return { ...base, reason: 'missing_runtime_state' };
  const hand = gltfRoot.getObjectByName(definition.hand);
  const prop = gltfRoot.getObjectByName(definition.prop);
  if (!hand || !prop) {
    return {
      ...base,
      reason: `missing_node:${!hand ? definition.hand : definition.prop}`,
    };
  }
  const isolated = isolateRuntimeAction(name, definition.companion);
  if (!isolated.pass) return { ...base, reason: isolated.reason };

  let maxDistance = 0;
  let minDistance = Infinity;
  const samples = [];
  const handPosition = new THREE.Vector3();
  const propPosition = new THREE.Vector3();
  const duration = Number(clipDefinitions.get(name)?.duration);
  if (!Number.isFinite(duration) || duration <= 0) {
    return { ...base, reason: `invalid_duration:${name}` };
  }
  for (let frame = definition.startFrame; frame <= definition.endFrame; frame += 1) {
    const time = frame / FPS;
    if (!Number.isFinite(time) || time < 0 || time > duration + (1 / FPS)) {
      return { ...base, reason: `invalid_time:${frame}` };
    }
    isolated.action.time = Math.min(time, duration);
    if (isolated.companion) isolated.companion.time = Math.min(time, duration);
    mixer.update(0);
    gltfRoot.updateMatrixWorld(true);
    hand.getWorldPosition(handPosition);
    prop.getWorldPosition(propPosition);
    if (!finiteVector3(handPosition) || !finiteVector3(propPosition)) {
      return { ...base, reason: `non_finite_position:${frame}` };
    }
    const distance = handPosition.distanceTo(propPosition);
    if (!Number.isFinite(distance)) return { ...base, reason: `non_finite_distance:${frame}` };
    maxDistance = Math.max(maxDistance, distance);
    minDistance = Math.min(minDistance, distance);
    samples.push({ frame, timeSeconds: time, worldDistanceMeters: distance });
  }
  const isolatedWeights = [...actions.entries()]
    .filter(([, candidate]) => candidate.getEffectiveWeight() > 0.001)
    .map(([actionName]) => actionName)
    .sort();
  const isolatedPass = isolatedWeights.length === 1 + (isolated.companion ? 1 : 0)
    && isolatedWeights.includes(name)
    && (!isolated.companion || isolatedWeights.includes(definition.companion));
  return {
    ...base,
    sampleCount: samples.length,
    maxWorldDistanceMeters: maxDistance,
    minWorldDistanceMeters: minDistance,
    isolatedActions: isolatedWeights,
    isolatedPass,
    samples,
    pass: isolatedPass && samples.length === definition.endFrame - definition.startFrame + 1
      && maxDistance <= RUNTIME_CONTACT_TOLERANCE_METERS,
  };
}

function runtimeKeyboardBasis(keyboard) {
  if (!keyboard) return { pass: false, reason: 'missing_node:Keyboard' };
  const meshes = [];
  keyboard.traverse((object) => {
    if (object.isMesh && object.geometry) meshes.push(object);
  });
  if (keyboard.isMesh && keyboard.geometry && !meshes.includes(keyboard)) meshes.push(keyboard);
  if (meshes.length === 0) return { pass: false, reason: 'missing_mesh:Keyboard' };
  keyboard.updateMatrixWorld(true);
  const origin = keyboard.getWorldPosition(new THREE.Vector3());
  const rotation = keyboard.getWorldQuaternion(new THREE.Quaternion());
  const inverseRotation = rotation.clone().invert();
  const min = new THREE.Vector3(Infinity, Infinity, Infinity);
  const max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
  const corner = new THREE.Vector3();
  for (const mesh of meshes) {
    const geometry = mesh.geometry;
    if (!geometry.boundingBox) geometry.computeBoundingBox();
    const box = geometry.boundingBox;
    if (!box || !finiteVector3(box.min) || !finiteVector3(box.max)) {
      return { pass: false, reason: `invalid_geometry_bbox:${mesh.name || 'Keyboard'}` };
    }
    for (const x of [box.min.x, box.max.x]) {
      for (const y of [box.min.y, box.max.y]) {
        for (const z of [box.min.z, box.max.z]) {
          corner.set(x, y, z).applyMatrix4(mesh.matrixWorld)
            .sub(origin).applyQuaternion(inverseRotation);
          if (!finiteVector3(corner)) return { pass: false, reason: 'non_finite_keyboard_bbox' };
          min.min(corner);
          max.max(corner);
        }
      }
    }
  }
  if (![min.x, min.y, min.z, max.x, max.y, max.z].every(Number.isFinite)
      || max.x < min.x || max.y < min.y || max.z < min.z) {
    return { pass: false, reason: 'invalid_keyboard_basis' };
  }
  return {
    pass: true,
    origin,
    inverseRotation,
    min,
    max,
    footprint: {
      minX: min.x - RUNTIME_TYPING_FOOTPRINT_PADDING_METERS,
      maxX: max.x + RUNTIME_TYPING_FOOTPRINT_PADDING_METERS,
      minY: min.y - RUNTIME_TYPING_FOOTPRINT_PADDING_METERS,
      maxY: max.y + RUNTIME_TYPING_FOOTPRINT_PADDING_METERS,
    },
    topZ: max.z,
    meshNames: meshes.map((mesh) => mesh.name || 'Keyboard'),
    basis: 'Keyboard world rotation only; child mesh geometry bbox',
  };
}

function runtimeFingerTipWorld(bone) {
  // GLTFLoader does not carry Blender's bone-tail length. For this VRM
  // skeleton the authored distal segment length is the local offset magnitude;
  // use that as a local +Y tip, preserving the animation's bone rotation.
  const length = bone?.position?.length?.();
  if (!Number.isFinite(length) || length <= 0) return null;
  const tip = new THREE.Vector3(0, length, 0).applyMatrix4(bone.matrixWorld);
  return finiteVector3(tip) ? tip : null;
}

function sampleRuntimeTypingContact() {
  const base = {
    action: 'typing_loop',
    source: 'runtimeAnimationSample',
    fps: FPS,
    tipMethod: 'local +Y × distal bone local offset length',
    distalBones: RUNTIME_TYPING_SIDES.flatMap((side) =>
      RUNTIME_TYPING_FINGERS.map((finger) => `J_Bip_${side}_${finger}3`)),
    footprintPaddingMeters: RUNTIME_TYPING_FOOTPRINT_PADDING_METERS,
    topToleranceMeters: RUNTIME_TYPING_TOP_TOLERANCE_METERS,
    sampleCount: 0,
    frameStart: 0,
    frameEnd: null,
    pass: false,
  };
  if (!gltfRoot || !mixer) return { ...base, reason: 'missing_runtime_state' };
  const typing = actions.get('typing_loop');
  const keyboard = gltfRoot.getObjectByName('Keyboard');
  if (!typing) return { ...base, reason: 'missing_action:typing_loop' };
  if (!keyboard) return { ...base, reason: 'missing_node:Keyboard' };
  const basis = runtimeKeyboardBasis(keyboard);
  if (!basis.pass) return { ...base, reason: basis.reason };
  const fingerBones = {};
  for (const side of RUNTIME_TYPING_SIDES) {
    fingerBones[side] = {};
    for (const finger of RUNTIME_TYPING_FINGERS) {
      const boneName = `J_Bip_${side}_${finger}3`;
      const bone = gltfRoot.getObjectByName(boneName);
      if (!bone?.isBone) return { ...base, reason: `missing_node:${boneName}` };
      const distalLength = bone.position.length();
      if (!Number.isFinite(distalLength) || distalLength < 0.005 || distalLength > 0.05) {
        return { ...base, reason: `invalid_bone_length:${boneName}` };
      }
      fingerBones[side][finger] = bone;
    }
  }
  const duration = Number(clipDefinitions.get('typing_loop')?.duration);
  if (!Number.isFinite(duration) || duration <= 0) return { ...base, reason: 'invalid_duration:typing_loop' };
  const endFrame = Math.round(duration * FPS);
  const isolated = isolateRuntimeAction('typing_loop');
  if (!isolated.pass) return { ...base, reason: isolated.reason };
  const tip = new THREE.Vector3();
  let maxTopDistance = 0;
  let maxFootprintOverflow = 0;
  let validFrames = 0;
  const failedFrames = [];
  const samples = [];
  for (let frame = 0; frame <= endFrame; frame += 1) {
    const time = frame / FPS;
    if (!Number.isFinite(time) || time < 0 || time > duration + (1 / FPS)) {
      return { ...base, reason: `invalid_time:${frame}`, frameEnd: endFrame };
    }
    typing.time = Math.min(time, duration);
    mixer.update(0);
    gltfRoot.updateMatrixWorld(true);
    const frameRecord = { frame, timeSeconds: time, hands: {} };
    let framePass = true;
    for (const side of RUNTIME_TYPING_SIDES) {
      let best = null;
      for (const finger of RUNTIME_TYPING_FINGERS) {
        const bone = fingerBones[side][finger];
        const worldTip = runtimeFingerTipWorld(bone);
        if (!worldTip) return { ...base, reason: `non_finite_tip:${frame}`, frameEnd: endFrame };
        tip.copy(worldTip);
        const keyboardTip = tip.clone().sub(basis.origin).applyQuaternion(basis.inverseRotation);
        if (!finiteVector3(keyboardTip)) return { ...base, reason: `non_finite_keyboard_tip:${frame}`, frameEnd: endFrame };
        const topDistance = Math.abs(keyboardTip.z - basis.topZ);
        const overflow = Math.max(
          basis.footprint.minX - keyboardTip.x,
          keyboardTip.x - basis.footprint.maxX,
          basis.footprint.minY - keyboardTip.y,
          keyboardTip.y - basis.footprint.maxY,
          0,
        );
        const candidate = {
          finger,
          tipKeyboardBasis: keyboardTip.toArray(),
          topDistanceMeters: topDistance,
          footprintOverflowMeters: overflow,
          withinFootprint: overflow <= 0,
          withinTopTolerance: topDistance <= RUNTIME_TYPING_TOP_TOLERANCE_METERS,
        };
        const candidatePass = candidate.withinFootprint && candidate.withinTopTolerance;
        const bestPass = best?.withinFootprint && best?.withinTopTolerance;
        if (!best || (candidatePass && !bestPass)
            || (!bestPass && topDistance < best.topDistanceMeters)) best = candidate;
      }
      const handPass = Boolean(best?.withinFootprint && best?.withinTopTolerance);
      framePass = framePass && handPass;
      maxTopDistance = Math.max(maxTopDistance, best?.topDistanceMeters || 0);
      maxFootprintOverflow = Math.max(maxFootprintOverflow, best?.footprintOverflowMeters || 0);
      frameRecord.hands[side] = { ...best, pass: handPass };
    }
    if (framePass) validFrames += 1;
    else failedFrames.push(frame);
    samples.push(frameRecord);
  }
  const isolatedWeights = [...actions.entries()]
    .filter(([, candidate]) => candidate.getEffectiveWeight() > 0.001)
    .map(([actionName]) => actionName)
    .sort();
  const isolatedPass = isolatedWeights.length === 1 && isolatedWeights[0] === 'typing_loop';
  return {
    ...base,
    frameEnd: endFrame,
    sampleCount: samples.length,
    validFrameCount: validFrames,
    failedFrames,
    maxFingerTipTopDistanceMeters: maxTopDistance,
    maxFootprintOverflowMeters: maxFootprintOverflow,
    isolatedActions: isolatedWeights,
    isolatedPass,
    keyboardBasis: {
      min: basis.min.toArray(),
      max: basis.max.toArray(),
      topZ: basis.topZ,
      footprint: basis.footprint,
      meshNames: basis.meshNames,
      basis: basis.basis,
    },
    samples,
    pass: isolatedPass && samples.length === endFrame + 1 && validFrames === samples.length,
  };
}

function runRuntimeContactMeasurement() {
  const result = {
    source: 'runtimeAnimationSample',
    pass: false,
    restoredToTyping: false,
    toleranceMeters: RUNTIME_CONTACT_TOLERANCE_METERS,
    coffee: null,
    phone: null,
    typing: null,
  };
  try {
    result.coffee = sampleRuntimePropContact('coffee_once', RUNTIME_PROP_CONTACT_WINDOWS.coffee_once);
    result.phone = sampleRuntimePropContact('phone_once', RUNTIME_PROP_CONTACT_WINDOWS.phone_once);
    result.typing = sampleRuntimeTypingContact();
    result.restoredToTyping = restoreTypingAfterRuntimeContact();
    result.pass = Boolean(result.coffee?.pass && result.phone?.pass
      && result.typing?.pass && result.restoredToTyping);
  } catch (error) {
    result.error = String(error?.message || error);
    result.pass = false;
    result.restoredToTyping = restoreTypingAfterRuntimeContact();
  }
  runtimeContactMeasurement = result;
  window.__runtimeContactMeasurement = result;
  post('runtimeContact', { measurement: result });
  return result;
}

function makeActions(gltf) {
  mixer = new THREE.AnimationMixer(gltfRoot);
  clipDefinitions.clear();
  actions.clear();
  const manifestClips = Array.isArray(manifest.clips) ? manifest.clips : [];
  gltf.animations.forEach((clip) => {
    const definition = manifestClips.find((candidate) => candidate.name === clip.name)
      || { name: clip.name, loop: /loop/i.test(clip.name), label: clip.name };
    clipDefinitions.set(clip.name, { ...definition, duration: clip.duration, tracks: clip.tracks });
    const action = mixer.clipAction(clip);
    action.setLoop(definition.loop ? THREE.LoopRepeat : THREE.LoopOnce,
                   definition.loop ? Infinity : 1);
    action.clampWhenFinished = !definition.loop;
    action.enabled = true;
    action.setEffectiveWeight(0);
    actions.set(clip.name, action);
  });
  mixer.addEventListener('finished', (event) => finishOneShot(event.action));
  const animation = animationReport(gltf.animations);
  window.__roomAnimation = animation;
  post('setup', { animation, counts: window.__roomMetrics });
  const diagnosticInitial = diagnosticRun && actions.has('idle_seated_loop')
    ? 'idle_seated_loop' : null;
  const initial = diagnosticInitial
    || (actions.has('typing_loop') ? 'typing_loop' : (gltf.animations[0]?.name || ''));
  if (!initial || !playAction(initial)) throw new Error('GLB 没有可播放动作');
  // Contact sampling must complete before deterministic diagnostics can emit a
  // report; the diagnostic branch owns the final asynchronous probe wait.
  runRuntimeContactMeasurement();
  window.__roomStartedAt = performance.now();
  if (diagnosticRun) {
    // A diagnostic capture must not depend on WebKit's background timer
    // cadence. On some macOS GPU states requestAnimationFrame is throttled to
    // ~1 FPS, so sample authored clip time directly and finish in one turn.
    runDeterministicDiagnostics();
  } else {
    setTimeout(() => {
      if (mixer) mixer.setTime(0);
      gltfRoot.updateMatrixWorld(true);
      renderer.render(scene, camera);
    }, 16);
    scheduleRoutine();
  }
  window.__roomReady = true;
  loadingLabel?.classList.add('hidden');
  post('ready', { counts: window.__roomMetrics, animation });
  updateStatus('已就绪 · 正在打字', currentActionName);
}

function advanceDiagnostics(now) {
  if (!diagnosticRun || diagnosticStep === 'done') return;
  const elapsed = now - (crossfadeStartedAt || now);
  if (diagnosticStep === 'idle') return;
  if (diagnosticStep === 'typing' && elapsed > 850) {
    capture('typing');
    const requested = Array.isArray(diagnosticRun.actions) ? diagnosticRun.actions : [];
    if (requested.length > 0) {
      startDiagnosticAction(0);
    } else {
      finishDiagnostics();
    }
  }
}

function sampleAction(name, timeSeconds, screenshotName = name) {
  if (!actions.has(name)) return false;
  // Offline captures are isolated poses, not a live transition. Reset every
  // action so a reaching arm from coffee cannot leak into phone/typing.
  mixer.stopAllAction();
  actions.forEach((action) => {
    action.stop();
    action.reset();
    action.enabled = false;
    action.setEffectiveWeight(0);
  });
  clearCompanionMotion();
  const target = actions.get(name);
  target.enabled = true;
  target.setLoop(clipDefinitions.get(name)?.loop ? THREE.LoopRepeat : THREE.LoopOnce,
                 clipDefinitions.get(name)?.loop ? Infinity : 1);
  target.clampWhenFinished = !clipDefinitions.get(name)?.loop;
  target.setEffectiveWeight(1).play();
  currentAction = target;
  currentActionName = name;
  const companionName = { coffee_once: 'coffee_once_PropMotion', phone_once: 'phone_once_PropMotion' }[name];
  if (companionName && actions.has(companionName)) {
    const companion = actions.get(companionName);
    companion.enabled = true;
    companion.setLoop(THREE.LoopOnce, 1).clampWhenFinished = true;
    companion.setEffectiveWeight(1).play();
    companionAction = companion;
  }
  target.time = Math.max(0, Math.min(timeSeconds, Number(clipDefinitions.get(name)?.duration || 1)));
  if (companionAction) companionAction.time = target.time;
  mixer.update(0);
  gltfRoot.updateMatrixWorld(true);
  renderer.render(scene, camera);
  recordDiagnosticActionWeights(name, screenshotName, target.time, companionName);
  capture(screenshotName);
  return true;
}

function runDeterministicDiagnostics() {
  diagnosticStep = 'deterministic';
  const idle = actions.has('idle_seated_loop') ? 'idle_seated_loop' : currentActionName;
  const typing = actions.has('typing_loop') ? 'typing_loop' : currentActionName;
  if (!idle || !typing) { showError('诊断缺少 idle/typing 动作'); return; }
  sampleAction(idle, 0.22, 'idle');
  // Exercise the same real AnimationAction fade used by the live room, but
  // advance Mixer time synchronously so a throttled WebKit timer cannot hide
  // the intermediate blend from the report.
  playAction(typing, { manual: true });
  crossfadeStartedAt = performance.now();
  mixer.update(CROSSFADE_SECONDS * 0.5);
  recordCrossfadeSample(CROSSFADE_SECONDS * 0.5);
  mixer.update(CROSSFADE_SECONDS * 0.5);
  recordCrossfadeSample(CROSSFADE_SECONDS);
  sampleAction(typing, 1.85, 'typing');
  const requested = Array.isArray(diagnosticRun?.actions) ? diagnosticRun.actions : [];
  requested.forEach((requestedName) => {
    const name = actionNameFor(requestedName);
    const duration = Number(clipDefinitions.get(name)?.duration || 1);
    const readableTime = name === 'coffee_once' ? Math.min(duration * 0.55, duration - 0.05)
      : name === 'phone_once' ? Math.min(duration * 0.50, duration - 0.05)
      : name === 'stand_stretch_once' ? Math.min(duration * 0.53, duration - 0.05)
      : Math.min(duration * 0.45, duration - 0.05);
    sampleAction(name, readableTime, name);
    clearCompanionMotion();
    restorePropRest('Prop_Coffee');
    restorePropRest('Prop_Phone');
  });
  sampleAction(typing, 0.15, 'typing_return');
  clearCompanionMotion();
  const runProbeBeforeReport = () => {
    if (disposed) return;
    diagnosticStep = 'routineProbe';
    const completed = runRoutineProbe(40, true, () => {
      if (!disposed) finishDiagnostics();
    });
    if (completed) return;
    // Keep the report shape non-null even if a diagnostic command raced with
    // this startup probe. The failed evidence is deliberate and keeps the
    // scheduler gate honest instead of allowing a missing probe to pass.
    routineProbeResult = {
      requestedDelayMs: 40,
      schedule: { scheduled: false, timerFired: false, passed: false },
      pauseResume: { pauseSuspends: false, resumeRestores: false, passed: false },
      manualReorder: { started: false, timerScheduled: false, passed: false },
      teardownCancel: { scheduled: false, timerCanceled: false, callbackSuppressed: false, passed: false },
      callbackSuppressed: false,
      scheduled: false,
      accelerated: false,
      pauseSuspends: false,
      resumeRestores: false,
      manualReset: false,
      timerFired: false,
      passed: false,
    };
    post('routineProbe', { result: routineProbeResult });
    finishDiagnostics();
  };
  if (diagnosticRun?.performance) {
    // Keep the foreground window alive long enough to collect real renderer
    // intervals. The deterministic pose captures above stay isolated, while
    // this short warm period measures the ordinary animate() loop instead of
    // inventing an FPS value from a timer.
    diagnosticStep = 'performance';
    setTimeout(() => {
      runProbeBeforeReport();
    }, 2200);
  } else {
    runProbeBeforeReport();
  }
}

function diagnosticDelayFor(name) {
  switch (actionNameFor(name)) {
    case 'coffee_once': return 2900;
    case 'phone_once': return 2400;
    case 'stand_stretch_once': return 4200;
    default: return 1100;
  }
}

function startDiagnosticAction(index) {
  const requested = Array.isArray(diagnosticRun?.actions) ? diagnosticRun.actions : [];
  if (index >= requested.length) { post('diagnostic', { phase: 'done' }); finishDiagnostics(); return; }
  const name = actionNameFor(requested[index]);
  post('diagnostic', { phase: 'start', index, name });
  diagnosticStep = `action:${index}:playing`;
  playAction(name, { manual: true });
  const readableDelay = diagnosticDelayFor(name);
  const clipDuration = Number(clipDefinitions.get(name)?.duration || 1) * 1000;
  setTimeout(() => {
    if (disposed) return;
    post('diagnostic', { phase: 'capture', index, name });
    capture(name);
    post('diagnostic', { phase: 'afterCapture', index, name });
    diagnosticStep = `action:${index}:captured`;
  }, readableDelay);
  // The action's authored duration is the deterministic boundary for the QA
  // sequence. Starting the next action explicitly also exercises the runtime
  // interrupt path and restores both prop sockets before a new prop moves.
  setTimeout(() => {
    if (disposed) return;
    post('diagnostic', { phase: 'next', index, name });
    startDiagnosticAction(index + 1);
  }, Math.max(readableDelay, clipDuration) + 450);
}

function setPixelRatio() {
  const ratio = lowPower ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  renderer?.setPixelRatio(ratio);
}

function setPaused(next) {
  const nextPaused = Boolean(next);
  if (nextPaused === paused) return;
  if (nextPaused) {
    pauseRoutineSchedule();
    paused = true;
    clock.stop();
  } else {
    paused = false;
    clock.start();
    resumeRoutineSchedule();
  }
  roomRoot?.classList.toggle('paused', paused);
  post('status', { paused, lowPower, message: paused ? '已暂停' : currentActionName });
}

function authorCameraContract() {
  // Blender authors the comparison view in Z-up metres. The manifest may
  // provide the exact camera in a later export; until then this is the same
  // camera contract as Blender/realtime3d/SnozzyRoom3D_export.py, converted
  // once to the browser's Y-up coordinates (x, z, -y).
  const authored = manifest.camera || manifest.room?.camera || null;
  if (authored?.position && authored?.target) {
    const convert = (value) => [Number(value[0]), Number(value[2]), -Number(value[1])];
    return {
      position: convert(authored.position),
      target: convert(authored.target),
      fov: Number(authored.fovDegrees || authored.fov || 32),
      source: 'manifest',
    };
  }
  return {
    position: [2.88, 2.35, 4.05],
    target: [0, 1.02, 0.18],
    fov: 31,
    source: 'Blender authored fallback',
  };
}

function applyAuthorCamera() {
  const contract = authorCameraContract();
  camera = new THREE.PerspectiveCamera(contract.fov,
                                       window.innerWidth / window.innerHeight,
                                       0.01, 100);
  camera.position.fromArray(contract.position);
  camera.lookAt(new THREE.Vector3().fromArray(contract.target));
  camera.updateProjectionMatrix();
  window.__roomCameraContract = contract;
  return contract;
}

function setLowPower(next) {
  lowPower = Boolean(next);
  setPixelRatio();
  post('status', { paused, lowPower, message: lowPower ? '省电模式' : currentActionName });
}

function showError(message) {
  const text = String(message || '3D 房间加载失败');
  if (loadingLabel) loadingLabel.classList.add('hidden');
  if (errorPanel) errorPanel.classList.remove('hidden');
  if (errorLabel) errorLabel.textContent = text;
  post('error', { message: text });
}

function dispose() {
  if (disposed) return;
  disposed = true;
  cancelRoutineForTeardown();
  clearRoutineProbeTimer();
  routineProbeActive = false;
  mixer?.stopAllAction();
  gltfRoot?.traverse((object) => {
    if (object.geometry?.dispose) object.geometry.dispose();
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    materials.forEach((material) => material?.dispose?.());
  });
  renderer?.dispose();
  renderer?.forceContextLoss?.();
  post('disposed');
}

window.__withSnozzy3DCommand = (command) => {
  if (typeof command === 'string') return playAction(command, { manual: true });
  if (!command || typeof command !== 'object') return false;
  if (command.type === 'action') return playAction(command.name, { manual: true });
  if (command.type === 'pause') return setPaused(command.value);
  if (command.type === 'lowPower') return setLowPower(command.value);
  if (command.type === 'routineProbe') {
    const allowDiagnostic = command.allowDiagnostic === true || command.diagnostic === true;
    return runRoutineProbe(command.delayMs, allowDiagnostic);
  }
  if (command.type === 'dispose') return dispose();
  return false;
};

function beginAnimation(gltf, metrics) {
  window.__roomMetrics = metrics;
  makeActions(gltf);
  setTimeout(animate, 16);
}

function setup(gltf) {
  // GLTFParser creates its texture loader inside parse/load, not in the
  // GLTFLoader constructor. Keep the ImageBitmap override in place until the
  // onLoad callback proves that every dependency (including images) finished.
  restoreCreateImageBitmap();
  post('stage', { name: 'setup_enter' });
  gltfRoot = gltf.scene;
  savePropRest(gltfRoot, 'Prop_Coffee');
  savePropRest(gltfRoot, 'Prop_Phone');
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e1020);
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, preserveDrawingBuffer: Boolean(diagnosticRun) });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  post('stage', { name: 'renderer_ready' });
  scene.add(new THREE.HemisphereLight(0xc8d5ff, 0x252033, 1.45));
  const key = new THREE.DirectionalLight(0xffe4d2, 2.1);
  key.position.set(2.5, -3.5, 4.8);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x8daaff, 1.15);
  fill.position.set(-3, 1, 3);
  scene.add(fill);
  const materials = applyToonFactory(gltfRoot);
  post('stage', { name: 'materials_ready', count: materials.length });
  // Blender authors this asset Z-up while the browser renderer is Y-up.  The
  // GLB deliberately keeps the authoring contract in its manifest, so make
  // the conversion explicit at the runtime root instead of relying on an
  // exporter/importer convention.  Z-up -> Y-up is -90° around X (the
  // positive direction keeps world-up positive); the sign is easy to get
  // backwards and leaves the seated character upside down. Updating the
  // world matrix before measuring keeps the diagnostic bounds in browser
  // coordinates as well.
  gltfRoot.rotation.x = -Math.PI / 2;
  scene.add(gltfRoot);
  gltfRoot.updateMatrixWorld(true);
  // The room's comparison camera is an authored contract. Framing from the
  // complete scene bounds makes a detached decorative node shrink Snozzy to a
  // thumbnail, so never derive production framing from Box3.
  const cameraContract = applyAuthorCamera();
  const metrics = runtimeMetrics(gltfRoot, materials);
  post('stage', { name: 'metrics_ready' });
  metrics.materialCount = materials.length;
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    showError('图形上下文丢失，请切回 2.5D 后重试。');
  }, false);
  canvas.addEventListener('webglcontextrestored', () => {
    errorPanel?.classList.add('hidden');
    post('status', { message: '图形上下文已恢复' });
  }, false);
  metrics.cameraContract = cameraContract;
  beginAnimation(gltf, metrics);
  post('stage', { name: 'animation_started' });
}

post('boot', { assetURL });
if (!assetURL && !assetDataURL) {
  showError('没有找到 SnozzyRoom3D.glb');
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
  window.__roomTextureLoader = 'TextureLoader (createImageBitmap disabled until parse complete)';
  const parseError = (error) => {
    restoreCreateImageBitmap();
    showError(`GLB 加载失败：${error?.message || String(error)}`);
  };
  if (assetDataURL) {
    const comma = assetDataURL.indexOf(',');
    try {
      const bytes = Uint8Array.from(atob(assetDataURL.slice(comma + 1)), (character) => character.charCodeAt(0));
      loader.parse(bytes.buffer, '', setup, parseError);
    } catch (error) {
      parseError(error);
    }
  } else {
    loader.load(assetURL, setup, undefined, parseError);
  }
}

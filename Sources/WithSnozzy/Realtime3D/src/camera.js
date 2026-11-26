/**
 * Smooth damped interior orbit camera + 4 authored presets (overview/desk/closeup/window).
 * Strictly preserves the manifest camera contract in diagnostic mode and clamps orbit
 * inside the room walls so the user can never clip out of bounds.
 */
import * as THREE from '../vendor/three.module.min.js';

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

function damp(a, b, lambda, dt) {
  return THREE.MathUtils.lerp(a, b, 1 - Math.exp(-lambda * Math.max(0, dt)));
}

/** Convert Blender Z-up [x, y, z] -> Three.js Y-up [x, z, -y]. */
function fromBlender(arr) {
  return new THREE.Vector3(Number(arr[0]), Number(arr[2]), -Number(arr[1]));
}

export function createCameraController(camera, domElement, manifest, { diagnosticRun = false, onPresetChange = null } = {}) {
  const presets = {};
  const rawPresets = manifest.cameraPresets || {};
  for (const [key, spec] of Object.entries(rawPresets)) {
    if (!spec?.position || !spec?.target) continue;
    presets[key] = {
      key,
      label: spec.label || key,
      position: fromBlender(spec.position),
      target: fromBlender(spec.target),
      fov: Number(spec.fovDegrees || spec.fov || 42),
    };
  }
  if (!presets.overview) {
    const cam = manifest.camera || {};
    presets.overview = {
      key: 'overview',
      label: '全景工位',
      position: cam.position ? fromBlender(cam.position) : new THREE.Vector3(1.28, 1.58, 2.72),
      target: cam.target ? fromBlender(cam.target) : new THREE.Vector3(-0.02, 1.04, 0.10),
      fov: Number(cam.fovDegrees || 45),
    };
  }

  let activePresetKey = 'overview';
  const currentTarget = presets.overview.target.clone();
  const desiredTarget = presets.overview.target.clone();
  let currentFov = presets.overview.fov;
  let desiredFov = presets.overview.fov;

  const sphericalCurrent = new THREE.Spherical();
  const sphericalDesired = new THREE.Spherical();
  const offsetVec = new THREE.Vector3();

  function syncSphericalFromPreset(preset, instant) {
    desiredTarget.copy(preset.target);
    desiredFov = preset.fov;
    offsetVec.copy(preset.position).sub(preset.target);
    sphericalDesired.setFromVector3(offsetVec);
    if (instant) {
      currentTarget.copy(desiredTarget);
      sphericalCurrent.copy(sphericalDesired);
      currentFov = desiredFov;
      applyToCamera(0);
    }
  }

  // Interior room spherical limits so user can never orbit behind walls or under floor
  const LIMITS = {
    minRadius: 0.85,
    maxRadius: 3.45,
    minPolar: 0.92,   // looking slightly down from upper room
    maxPolar: 1.56,   // never clipping below desk/floor plane
    minAzimuth: -0.68,
    maxAzimuth: 1.05,
  };

  function clampDesired() {
    sphericalDesired.radius = clamp(sphericalDesired.radius, LIMITS.minRadius, LIMITS.maxRadius);
    sphericalDesired.phi = clamp(sphericalDesired.phi, LIMITS.minPolar, LIMITS.maxPolar);
    sphericalDesired.theta = clamp(sphericalDesired.theta, LIMITS.minAzimuth, LIMITS.maxAzimuth);
  }

  let clock = 0;
  function applyToCamera(dt) {
    clock += dt;
    if (dt > 0) {
      currentTarget.lerp(desiredTarget, 1 - Math.exp(-7.5 * dt));
      sphericalCurrent.radius = damp(sphericalCurrent.radius, sphericalDesired.radius, 8.5, dt);
      sphericalCurrent.phi = damp(sphericalCurrent.phi, sphericalDesired.phi, 8.5, dt);
      sphericalCurrent.theta = damp(sphericalCurrent.theta, sphericalDesired.theta, 8.5, dt);
      currentFov = damp(currentFov, desiredFov, 7.5, dt);
    }

    offsetVec.setFromSpherical(sphericalCurrent);
    camera.position.copy(currentTarget).add(offsetVec);

    // Subtle organic breathing drift in live mode (strictly off in diagnostics!)
    if (!diagnosticRun) {
      camera.position.x += Math.sin(clock * 0.42) * 0.007;
      camera.position.y += Math.cos(clock * 0.34) * 0.005;
    }

    camera.lookAt(currentTarget);
    if (Math.abs(camera.fov - currentFov) > 0.01) {
      camera.fov = currentFov;
      camera.updateProjectionMatrix();
    }
  }

  syncSphericalFromPreset(presets.overview, true);

  // Pointer orbit & scroll zoom handlers
  let dragging = false;
  let movedSinceDown = false;
  let downX = 0;
  let downY = 0;
  let lastX = 0;
  let lastY = 0;
  let pointerId = null;

  function onPointerDown(e) {
    if (diagnosticRun || e.button !== 0) return;
    dragging = true;
    movedSinceDown = false;
    pointerId = e.pointerId;
    downX = lastX = e.clientX;
    downY = lastY = e.clientY;
    try { domElement.setPointerCapture(pointerId); } catch (_) { /* ignore */ }
  }

  function onPointerMove(e) {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    if (!movedSinceDown && Math.hypot(e.clientX - downX, e.clientY - downY) > 5) {
      movedSinceDown = true;
    }
    if (!movedSinceDown) return;
    sphericalDesired.theta -= dx * 0.0046;
    sphericalDesired.phi -= dy * 0.0038;
    clampDesired();
  }

  function onPointerUp(e) {
    if (!dragging) return;
    dragging = false;
    if (pointerId !== null) {
      try { domElement.releasePointerCapture(pointerId); } catch (_) { /* ignore */ }
      pointerId = null;
    }
  }

  function onWheel(e) {
    if (diagnosticRun) return;
    e.preventDefault();
    const delta = clamp(e.deltaY, -120, 120) * 0.0022;
    sphericalDesired.radius += delta;
    clampDesired();
  }

  function onDblClick() {
    if (diagnosticRun) return;
    setPreset(activePresetKey, false);
  }

  if (domElement && !diagnosticRun) {
    domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    domElement.addEventListener('wheel', onWheel, { passive: false });
    domElement.addEventListener('dblclick', onDblClick);
  }

  function setPreset(key, instant = false) {
    const target = presets[key];
    if (!target) return false;
    activePresetKey = key;
    syncSphericalFromPreset(target, instant);
    if (typeof onPresetChange === 'function') onPresetChange(key, target.label);
    return true;
  }

  return {
    presets,
    setPreset,
    getActivePreset() { return activePresetKey; },
    wasDragged() { return movedSinceDown; },
    update(dt) {
      if (diagnosticRun) return;
      applyToCamera(dt);
    },
    dispose() {
      if (!domElement) return;
      domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      domElement.removeEventListener('wheel', onWheel);
      domElement.removeEventListener('dblclick', onDblClick);
    },
  };
}

/**
 * Real-time 60fps character life engine for Snozzy:
 * - 57 VRM Face morph targets (organic blinking, contextual expressions, blush, lip-sync)
 * - Subtle eye-tracking on J_Adj_L/R_FaceEye + micro head follow
 * - Damped spring-bone physics on J_Sec_Hair* twin-tails & bangs
 * - Beat-reactive 3D Headphones visibility + glow + spinning shelf vinyl record
 * - Real-time 3D head projection for SwiftUI speech bubble anchoring
 */
import * as THREE from '../vendor/three.module.min.js';

const VOWELS = ['Fcl_MTH_A', 'Fcl_MTH_I', 'Fcl_MTH_U', 'Fcl_MTH_E', 'Fcl_MTH_O'];

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

function damp(current, target, lambda, dt) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * Math.max(0, dt)));
}

export function createLifeEngine(gltfRoot, sharedUniforms) {
  // 1. Collect all Face morph-capable meshes
  const morphMeshes = [];
  const hairSprings = [];
  const eyeBones = [];
  const foxTipBones = [];
  let headBone = null;
  let hpBody = null;
  let hpGlow = null;
  let vinylDisc = null;

  gltfRoot.traverse((obj) => {
    if (obj.isMesh && obj.morphTargetDictionary && obj.morphTargetInfluences) {
      morphMeshes.push(obj);
    }
    const name = obj.name || '';
    if (obj.isBone) {
      if (name === 'J_Bip_C_Head') headBone = obj;
      if (name === 'J_Adj_L_FaceEye' || name === 'J_Adj_R_FaceEye') {
        eyeBones.push({ bone: obj, restQ: obj.quaternion.clone() });
      }
      if (name.startsWith('J_Sec_Hair') && !name.endsWith('_end')) {
        const match = name.match(/J_Sec_Hair(\d+)/);
        const depth = match ? Number(match[1]) : 1;
        hairSprings.push({
          bone: obj,
          restQ: obj.quaternion.clone(),
          depth,
          seed: (hairSprings.length * 1.37) % 6.28,
          ax: 0, az: 0,
          vx: 0, vz: 0,
        });
      }
      if (/^J_Opt_C_FoxTail[345]_01$/.test(name)) {
        foxTipBones.push(obj);
      }
    }
    if (name === 'Headphones_3D') hpBody = obj;
    if (name === 'Headphones_Glow') hpGlow = obj;
    if (name === 'VinylDisc') vinylDisc = obj;
  });

  // Track smoothed morph weights by morph name
  const currentMorphs = new Map();
  const targetMorphs = new Map();

  // Organic blink state
  let blinkTimer = 1.4;
  let blinkPhase = -1; // -1 = open, 0..1 = active blink
  let doubleBlinkQueued = false;

  // Pointer normalized screen coordinates (-1..1), smoothly damped
  const pointerTarget = { x: 0, y: 0, active: false };
  const gaze = { x: 0, y: 0 };

  // Head motion tracker for hair spring-bone inertia
  const prevHeadPos = new THREE.Vector3();
  const curHeadPos = new THREE.Vector3();
  const headVel = new THREE.Vector3();
  let hasPrevHead = false;

  // Pet / celebration pulse timers
  let petTimer = 0;
  let elapsed = 0;
  let blushCurrent = 0;

  // Reusable scratch math objects (zero per-frame GC churn!)
  const tmpEuler = new THREE.Euler(0, 0, 0, 'XYZ');
  const tmpQuat = new THREE.Quaternion();
  const tmpWorld = new THREE.Vector3();

  function setTarget(name, value) {
    const prev = targetMorphs.get(name) || 0;
    targetMorphs.set(name, Math.max(prev, clamp(value, 0, 1)));
  }

  function computeExpressions(dt, state, actionName) {
    targetMorphs.clear();

    const mood = clamp(Number(state.mood ?? 0.6), 0, 1);
    const drowsy = clamp(Number(state.drowsy ?? 0), 0, 1);
    const celebration = clamp(Number(state.celebration ?? 0), 0, 1);
    const talking = Boolean(state.sheIsTalking);

    if (petTimer > 0) petTimer = Math.max(0, petTimer - dt);
    const petStrength = actionName === 'pet_happy_once' ? 1.0 : Math.min(1, petTimer / 1.2);

    // Subtle baseline warmth so Snozzy always feels present & gentle
    setTarget('Fcl_MTH_Fun', 0.14 + mood * 0.18);
    setTarget('Fcl_BRW_Fun', 0.10 + mood * 0.12);

    let suppressBlink = false;
    let blushTarget = 0.06 + mood * 0.08;

    if (petStrength > 0.05) {
      setTarget('Fcl_EYE_Joy', 0.90 * petStrength);
      setTarget('Fcl_MTH_Joy', 0.68 * petStrength);
      setTarget('Fcl_BRW_Joy', 0.55 * petStrength);
      blushTarget = Math.max(blushTarget, 0.92 * petStrength);
      suppressBlink = petStrength > 0.5;
    } else if (celebration > 0.05) {
      setTarget('Fcl_EYE_Joy', 0.85 * celebration);
      setTarget('Fcl_MTH_Joy', 0.72 * celebration);
      setTarget('Fcl_BRW_Joy', 0.48 * celebration);
      blushTarget = Math.max(blushTarget, 0.70 * celebration);
      suppressBlink = celebration > 0.5;
    } else if (actionName === 'coffee_once') {
      setTarget('Fcl_EYE_Close', 0.46);
      setTarget('Fcl_MTH_Fun', 0.42);
      setTarget('Fcl_BRW_Fun', 0.34);
      blushTarget = Math.max(blushTarget, 0.28);
      suppressBlink = true;
    } else if (actionName === 'stand_stretch_once') {
      setTarget('Fcl_EYE_Fun', 0.72);
      setTarget('Fcl_MTH_O', 0.36);
      setTarget('Fcl_BRW_Fun', 0.38);
      blushTarget = Math.max(blushTarget, 0.24);
      suppressBlink = true;
    } else if (actionName === 'chin_rest_loop') {
      setTarget('Fcl_EYE_Fun', 0.24);
      setTarget('Fcl_MTH_Fun', 0.46);
      setTarget('Fcl_BRW_Fun', 0.28);
      blushTarget = Math.max(blushTarget, 0.36);
    } else if (actionName === 'listen_music_loop') {
      setTarget('Fcl_EYE_Close', 0.34);
      setTarget('Fcl_MTH_Fun', 0.38);
      setTarget('Fcl_BRW_Fun', 0.26);
    } else if (actionName === 'drowsy_nod_loop' || drowsy > 0.25) {
      const sleepAmt = actionName === 'drowsy_nod_loop' ? Math.max(0.75, drowsy) : drowsy;
      setTarget('Fcl_EYE_Close', 0.78 * sleepAmt);
      setTarget('Fcl_MTH_Small', 0.24 * sleepAmt);
      suppressBlink = sleepAmt > 0.65;
    } else if (actionName === 'phone_once' || actionName === 'write_note_once') {
      setTarget('Fcl_MTH_Fun', 0.28);
      setTarget('Fcl_BRW_Fun', 0.18);
    }

    // Organic blinking
    if (!suppressBlink) {
      if (blinkPhase >= 0) {
        blinkPhase += dt / 0.15;
        if (blinkPhase >= 1) {
          blinkPhase = -1;
          if (doubleBlinkQueued) {
            doubleBlinkQueued = false;
            blinkTimer = 0.14;
          } else {
            blinkTimer = 2.6 + Math.random() * 3.6;
            doubleBlinkQueued = Math.random() < 0.18;
          }
        } else {
          const curve = Math.sin(blinkPhase * Math.PI);
          setTarget('Fcl_EYE_Close', curve * 0.96);
        }
      } else {
        blinkTimer -= dt;
        if (blinkTimer <= 0) blinkPhase = 0;
      }
    }

    // Real-time multi-vowel lip-sync when Snozzy is talking!
    if (talking) {
      const syll = elapsed * 8.2;
      const idx = Math.floor(syll) % VOWELS.length;
      const env = Math.max(0, Math.sin((syll - Math.floor(syll)) * Math.PI));
      const amp = 0.32 + 0.42 * (0.5 + 0.5 * Math.sin(elapsed * 3.7));
      setTarget(VOWELS[idx], env * amp);
      setTarget('Fcl_MTH_Fun', 0.22);
    }

    // Smoothly damp blush shader uniform
    blushCurrent = damp(blushCurrent, blushTarget, 5.5, dt);
    if (sharedUniforms?.uBlush) {
      sharedUniforms.uBlush.value = blushCurrent;
    }

    // Apply damped morph targets across all Face meshes
    const allKeys = new Set([...currentMorphs.keys(), ...targetMorphs.keys()]);
    for (const key of allKeys) {
      const cur = currentMorphs.get(key) || 0;
      const tgt = targetMorphs.get(key) || 0;
      const rate = key === 'Fcl_EYE_Close' ? 28.0 : (talking && VOWELS.includes(key) ? 22.0 : 9.0);
      const next = damp(cur, tgt, rate, dt);
      if (next < 0.001 && tgt === 0) currentMorphs.delete(key);
      else currentMorphs.set(key, next);
    }

    for (const mesh of morphMeshes) {
      const dict = mesh.morphTargetDictionary;
      const inf = mesh.morphTargetInfluences;
      for (const name of Object.keys(dict)) {
        const idx = dict[name];
        inf[idx] = currentMorphs.get(name) || 0;
      }
    }
  }

  function updateEyeAndHeadGaze(dt, actionName, allowAdditiveHead) {
    let wantX = 0;
    let wantY = 0;
    if (actionName === 'chin_rest_loop' || actionName === 'pet_happy_once') {
      wantX = pointerTarget.active ? pointerTarget.x * 0.55 : 0.05;
      wantY = pointerTarget.active ? pointerTarget.y * 0.45 : 0.05;
    } else if (actionName === 'phone_once' || actionName === 'write_note_once') {
      wantX = 0.25;
      wantY = -0.35;
    } else if (pointerTarget.active) {
      wantX = pointerTarget.x * 0.65;
      wantY = pointerTarget.y * 0.48;
    } else {
      // Gentle living micro-saccade toward monitor
      wantX = -0.22 + Math.sin(elapsed * 0.7) * 0.10;
      wantY = -0.05 + Math.cos(elapsed * 0.55) * 0.06;
    }

    gaze.x = damp(gaze.x, clamp(wantX, -1, 1), 6.5, dt);
    gaze.y = damp(gaze.y, clamp(wantY, -1, 1), 6.5, dt);

    // Rotate eye bones slightly (subtle ±7° yaw, ±5° pitch -> never creepy!)
    for (const entry of eyeBones) {
      tmpEuler.set(
        clamp(-gaze.y * 0.085, -0.10, 0.10),
        0,
        clamp(gaze.x * 0.12, -0.14, 0.14),
      );
      tmpQuat.setFromEuler(tmpEuler);
      entry.bone.quaternion.copy(entry.restQ).multiply(tmpQuat);
    }

    // Ultra-subtle additive head follow toward pointer during idle/typing/chin_rest
    if (allowAdditiveHead && headBone && pointerTarget.active
      && (actionName === 'idle_seated_loop' || actionName === 'typing_loop' || actionName === 'chin_rest_loop')) {
      tmpEuler.set(
        clamp(-gaze.y * 0.055, -0.07, 0.07),
        clamp(gaze.x * 0.075, -0.09, 0.09),
        0,
      );
      tmpQuat.setFromEuler(tmpEuler);
      headBone.quaternion.multiply(tmpQuat);
    }
  }

  function updateHairSprings(dt, state) {
    if (!headBone || hairSprings.length === 0) return;

    // Measure head world linear velocity to inject natural swing inertia into twin-tails
    headBone.getWorldPosition(curHeadPos);
    if (hasPrevHead && dt > 0.0005) {
      headVel.subVectors(curHeadPos, prevHeadPos).divideScalar(Math.max(dt, 0.016));
      headVel.clampLength(0, 1.8);
    } else {
      headVel.set(0, 0, 0);
      hasPrevHead = true;
    }
    prevHeadPos.copy(curHeadPos);

    const step = Math.min(dt, 0.033);
    const pulse = Number(state.beatPulse || 0);
    const stiffness = 26.0;
    const damping = 5.4;

    for (const s of hairSprings) {
      const depthGain = 0.55 + s.depth * 0.45;
      // Gentle living indoor breeze + music groove + head inertia
      const breezeX = Math.sin(elapsed * 1.45 + s.seed) * 0.024 * depthGain
        + Math.sin(elapsed * 2.8 + s.seed) * 0.012 * pulse * depthGain;
      const breezeZ = Math.cos(elapsed * 1.25 + s.seed * 1.3) * 0.020 * depthGain;

      const targetX = clamp(breezeX - headVel.z * 0.22 * depthGain - headVel.y * 0.14 * depthGain, -0.34, 0.34);
      const targetZ = clamp(breezeZ + headVel.x * 0.25 * depthGain, -0.34, 0.34);

      const forceX = (targetX - s.ax) * stiffness - s.vx * damping;
      const forceZ = (targetZ - s.az) * stiffness - s.vz * damping;
      s.vx += forceX * step;
      s.vz += forceZ * step;
      s.ax = clamp(s.ax + s.vx * step, -0.42, 0.42);
      s.az = clamp(s.az + s.vz * step, -0.42, 0.42);

      tmpEuler.set(s.ax, 0, s.az);
      tmpQuat.setFromEuler(tmpEuler);
      s.bone.quaternion.copy(s.restQ).multiply(tmpQuat);
    }

    // Subtle happy micro-wag on fox tail tips layered cleanly over animation
    const mood = clamp(Number(state.mood ?? 0.6), 0, 1);
    const wagAmp = 0.035 + mood * 0.035 + pulse * 0.04;
    foxTipBones.forEach((bone, idx) => {
      const wave = Math.sin(elapsed * (2.6 + mood * 1.4) + idx * 0.7) * wagAmp;
      tmpEuler.set(0, 0, wave);
      tmpQuat.setFromEuler(tmpEuler);
      bone.quaternion.multiply(tmpQuat);
    });
  }

  function updateAccessories(dt, state, actionName) {
    // 3D Headphones appear when music is playing or during listen_music_loop
    const wearHeadphones = Boolean(state.isPlaying) || actionName === 'listen_music_loop';
    if (hpBody) hpBody.visible = wearHeadphones;
    if (hpGlow) hpGlow.visible = wearHeadphones;

    // Spin the shelf vinyl record cleanly in-plane around its spindle axis
    if (vinylDisc && state.isPlaying) {
      vinylDisc.rotateZ(dt * 0.85);
    }
  }

  return {
    setPointer(nx, ny, active = true) {
      pointerTarget.x = clamp(nx, -1, 1);
      pointerTarget.y = clamp(ny, -1, 1);
      pointerTarget.active = Boolean(active);
    },
    triggerPet() {
      petTimer = 3.2;
    },
    getHeadWorldPosition(out = new THREE.Vector3()) {
      if (!headBone) return out.set(0, 1.15, 0);
      headBone.getWorldPosition(out);
      return out;
    },
    getHeadScreenPoint(camera) {
      if (!headBone || !camera) return { x: 0.52, y: 0.30 };
      headBone.getWorldPosition(tmpWorld);
      tmpWorld.y += 0.24; // float nicely above crown
      tmpWorld.project(camera);
      return {
        x: clamp((tmpWorld.x + 1) * 0.5, 0.14, 0.86),
        y: clamp((1 - tmpWorld.y) * 0.5, 0.10, 0.72),
      };
    },
    update(dt, state, actionName, { allowAdditiveHead = true } = {}) {
      elapsed += dt;
      computeExpressions(dt, state, actionName);
      updateEyeAndHeadGaze(dt, actionName, allowAdditiveHead);
      updateHairSprings(dt, state);
      updateAccessories(dt, state, actionName);
    },
  };
}

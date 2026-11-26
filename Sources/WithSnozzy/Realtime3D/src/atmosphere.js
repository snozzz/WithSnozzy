/**
 * Dynamic time-of-day lighting, soft shadows, 3D outdoor parallax city & sky,
 * album constellation stars, animated 3D rain/snow, coffee steam, dust motes,
 * and heart/sparkle reaction bursts.
 */
import * as THREE from '../vendor/three.module.min.js';

// Four curated bright-cyber pastel lighting presets interpolated continuously by sceneHour.
const MOODS = [
  {
    hour: 1.5, // Midnight bright-cyber cozy
    bg: 0x161730,
    skyTop: '#0d1236', skyMid: '#24235e', skyBot: '#6a4892',
    hemiSky: 0x8ea6f0, hemiGround: 0x261c3a, hemiInt: 0.82,
    keyColor: 0xb6ccff, keyInt: 0.92, keyPos: [-1.1, 2.45, 1.85],
    winColor: 0x84a8ff, winInt: 0.58,
    fillColor: 0xf4a4d4, fillInt: 0.36,
    lampInt: 1.85, lampColor: 0xffc680,
    rimColor: 0xffb2e0, rimStrength: 0.85,
    moodTint: 0xedeaff,
    ledScale: 1.25,
    starsAlpha: 0.96,
    cityLit: 1.0,
    exposure: 0.98,
  },
  {
    hour: 7.0, // Soft pastel dawn
    bg: 0x2a2442,
    skyTop: '#4e5b9c', skyMid: '#c88bb8', skyBot: '#ffd4b8',
    hemiSky: 0xffdfd2, hemiGround: 0x52425e, hemiInt: 1.05,
    keyColor: 0xffd8be, keyInt: 1.28, keyPos: [-1.3, 2.55, 1.95],
    winColor: 0xffc49c, winInt: 0.78,
    fillColor: 0xbad0ff, fillInt: 0.42,
    lampInt: 0.75, lampColor: 0xffd29a,
    rimColor: 0xffccb0, rimStrength: 0.72,
    moodTint: 0xfff8f4,
    ledScale: 0.72,
    starsAlpha: 0.24,
    cityLit: 0.35,
    exposure: 0.98,
  },
  {
    hour: 13.0, // Airy crisp pastel day
    bg: 0x3b486b,
    skyTop: '#5ca2ee', skyMid: '#a2d2ff', skyBot: '#eef5ff',
    hemiSky: 0xf2f7ff, hemiGround: 0x6a607e, hemiInt: 1.18,
    keyColor: 0xfffaf0, keyInt: 1.48, keyPos: [-1.2, 2.70, 1.90],
    winColor: 0xdaf0ff, winInt: 0.75,
    fillColor: 0xc8ddff, fillInt: 0.46,
    lampInt: 0.25, lampColor: 0xffe2ba,
    rimColor: 0xe6f2ff, rimStrength: 0.52,
    moodTint: 0xffffff,
    ledScale: 0.45,
    starsAlpha: 0.0,
    cityLit: 0.06,
    exposure: 0.96,
  },
  {
    hour: 19.2, // Dreamy golden/sakura lo-fi dusk
    bg: 0x281e3d,
    skyTop: '#242264', skyMid: '#9c5294', skyBot: '#ffaa88',
    hemiSky: 0xf8c0b8, hemiGround: 0x3d2a4e, hemiInt: 0.94,
    keyColor: 0xffbea2, keyInt: 1.18, keyPos: [-1.2, 2.40, 1.85],
    winColor: 0xff947c, winInt: 0.80,
    fillColor: 0x98b0ff, fillInt: 0.40,
    lampInt: 1.45, lampColor: 0xffc076,
    rimColor: 0xffb2c8, rimStrength: 0.88,
    moodTint: 0xfff0ec,
    ledScale: 1.08,
    starsAlpha: 0.62,
    cityLit: 0.82,
    exposure: 0.98,
  },
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpColorHex(hexA, hexB, t, out = new THREE.Color()) {
  const ca = new THREE.Color(hexA);
  const cb = new THREE.Color(hexB);
  return out.copy(ca).lerp(cb, t);
}

function lerpCssColor(hexA, hexB, t) {
  const c = lerpColorHex(hexA, hexB, t);
  return `#${c.getHexString()}`;
}

function sampleMood(hourRaw) {
  const h = ((Number(hourRaw) % 24) + 24) % 24;
  // Find bracketing presets around 24h ring
  let a = MOODS[MOODS.length - 1];
  let b = MOODS[0];
  let span = (b.hour + 24) - a.hour;
  let dist = (h >= a.hour) ? (h - a.hour) : (h + 24 - a.hour);
  for (let i = 0; i < MOODS.length - 1; i += 1) {
    if (h >= MOODS[i].hour && h <= MOODS[i + 1].hour) {
      a = MOODS[i];
      b = MOODS[i + 1];
      span = b.hour - a.hour;
      dist = h - a.hour;
      break;
    }
  }
  const t = Math.max(0, Math.min(1, span > 0 ? dist / span : 0));
  const s = t * t * (3 - 2 * t);
  return {
    bg: lerpColorHex(a.bg, b.bg, s),
    skyTop: lerpCssColor(a.skyTop, b.skyTop, s),
    skyMid: lerpCssColor(a.skyMid, b.skyMid, s),
    skyBot: lerpCssColor(a.skyBot, b.skyBot, s),
    hemiSky: lerpColorHex(a.hemiSky, b.hemiSky, s),
    hemiGround: lerpColorHex(a.hemiGround, b.hemiGround, s),
    hemiInt: lerp(a.hemiInt, b.hemiInt, s),
    keyColor: lerpColorHex(a.keyColor, b.keyColor, s),
    keyInt: lerp(a.keyInt, b.keyInt, s),
    keyPos: [lerp(a.keyPos[0], b.keyPos[0], s), lerp(a.keyPos[1], b.keyPos[1], s), lerp(a.keyPos[2], b.keyPos[2], s)],
    winColor: lerpColorHex(a.winColor, b.winColor, s),
    winInt: lerp(a.winInt, b.winInt, s),
    fillColor: lerpColorHex(a.fillColor, b.fillColor, s),
    fillInt: lerp(a.fillInt, b.fillInt, s),
    lampInt: lerp(a.lampInt, b.lampInt, s),
    lampColor: lerpColorHex(a.lampColor, b.lampColor, s),
    rimColor: lerpColorHex(a.rimColor, b.rimColor, s),
    rimStrength: lerp(a.rimStrength, b.rimStrength, s),
    moodTint: lerpColorHex(a.moodTint, b.moodTint, s),
    ledScale: lerp(a.ledScale, b.ledScale, s),
    starsAlpha: lerp(a.starsAlpha, b.starsAlpha, s),
    cityLit: lerp(a.cityLit, b.cityLit, s),
    exposure: lerp(a.exposure, b.exposure, s),
  };
}

function makeSoftCircleSprite(innerCss, outerCss) {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, innerCss);
  g.addColorStop(0.5, innerCss);
  g.addColorStop(1, outerCss);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeHeartSprite() {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ff98cc';
  ctx.shadowColor = '#ffc8e6';
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.moveTo(32, 50);
  ctx.bezierCurveTo(10, 34, 10, 14, 32, 24);
  ctx.bezierCurveTo(54, 14, 54, 34, 32, 50);
  ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createAtmosphere(scene, renderer, sharedUniforms, emissiveRegistry) {
  const group = new THREE.Group();
  group.name = 'AtmosphereSystem';
  scene.add(group);

  // ── 1. Lighting Rig + Soft Shadows ──────────────────────────────────────
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const hemi = new THREE.HemisphereLight(0xc8d5ff, 0x342848, 1.35);
  group.add(hemi);

  const keyLight = new THREE.DirectionalLight(0xffe6d4, 1.85);
  keyLight.position.set(-1.6, 2.8, -2.5);
  keyLight.target.position.set(0.0, 0.82, 0.32);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 9.0;
  keyLight.shadow.camera.left = -2.2;
  keyLight.shadow.camera.right = 2.2;
  keyLight.shadow.camera.top = 2.2;
  keyLight.shadow.camera.bottom = -1.6;
  keyLight.shadow.bias = -0.0007;
  keyLight.shadow.normalBias = 0.022;
  group.add(keyLight);
  group.add(keyLight.target);

  // Soft directional backlight pouring from the open window onto hair & desk
  const windowLight = new THREE.DirectionalLight(0xffb49a, 0.95);
  windowLight.position.set(-1.15, 2.05, -2.35);
  windowLight.target.position.set(0.0, 0.92, 0.35);
  group.add(windowLight);
  group.add(windowLight.target);

  // Warm front-right fill so Snozzy's face & pastel sweater stay clean & dimensional
  const fillLight = new THREE.DirectionalLight(0xc8d8ff, 0.65);
  fillLight.position.set(2.2, 1.9, 2.8);
  group.add(fillLight);

  // Warm Desk Lamp PointLight (Blender (0.72, -0.32, 1.15) -> Three (0.72, 1.15, 0.32))
  const deskLampLight = new THREE.PointLight(0xffcb82, 2.4, 3.8, 1.6);
  deskLampLight.position.set(0.72, 1.14, 0.32);
  group.add(deskLampLight);

  // Soft lavender-pink ambient bounce from monitors + LED desk trim
  const cyberAccentLight = new THREE.PointLight(0xffa4dc, 0.85, 3.2, 1.8);
  cyberAccentLight.position.set(-0.25, 1.05, 0.58);
  group.add(cyberAccentLight);

  // ── 2. Live 3D Outdoor Window World (behind z = -1.48 in Three Y-up) ───
  const skyCanvas = document.createElement('canvas');
  skyCanvas.width = 512;
  skyCanvas.height = 384;
  const skyCtx = skyCanvas.getContext('2d');
  const skyTex = new THREE.CanvasTexture(skyCanvas);
  skyTex.colorSpace = THREE.SRGBColorSpace;
  const skyPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(7.6, 5.2),
    new THREE.MeshBasicMaterial({ map: skyTex, fog: false }),
  );
  skyPlane.position.set(-0.90, 1.80, -5.8);
  group.add(skyPlane);

  // Parallax 3D Cyber-Lo-Fi City Skyline set along the lower horizon so the
  // glowing twilight sky, moon, clouds & constellation shine cleanly above!
  const cityGroup = new THREE.Group();
  const cityMat = new THREE.MeshBasicMaterial({ color: 0x221d42 });
  const winLitMat = new THREE.MeshBasicMaterial({ color: 0xffd2a8, transparent: true, opacity: 0.9 });
  const winCyanMat = new THREE.MeshBasicMaterial({ color: 0x8ef0ff, transparent: true, opacity: 0.85 });
  const winPinkMat = new THREE.MeshBasicMaterial({ color: 0xff98cc, transparent: true, opacity: 0.85 });
  const buildingSpecs = [
    // [x, baseY, z, w, h, d] — skyline tops stay at 1.28..1.72m, leaving upper 60% sky wide open!
    [-3.10, 0.0, -5.0, 0.52, 1.55, 0.32],
    [-2.52, 0.0, -4.4, 0.44, 1.72, 0.30],
    [-2.02, 0.0, -4.8, 0.46, 1.42, 0.32],
    [-1.54, 0.0, -4.2, 0.42, 1.62, 0.30],
    [-1.08, 0.0, -4.6, 0.48, 1.48, 0.32],
    [-0.58, 0.0, -4.3, 0.44, 1.66, 0.30],
    [-0.10, 0.0, -4.9, 0.50, 1.38, 0.32],
    [0.42, 0.0, -4.5, 0.46, 1.58, 0.30],
  ];
  buildingSpecs.forEach(([bx, by, bz, bw, bh, bd], idx) => {
    const tower = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), cityMat);
    tower.position.set(bx, by + bh * 0.5, bz);
    cityGroup.add(tower);
    // Crisp tiny glowing apartment window grid
    for (let row = 0; row < 5; row += 1) {
      const wy = bh - 0.14 - row * 0.12;
      if (wy < 0.92) continue;
      for (let col = -1; col <= 1; col += 1) {
        if ((row * 3 + col + idx) % 3 === 0) continue;
        const matChoice = (row + col + idx) % 5 === 0
          ? winPinkMat
          : ((row + idx) % 4 === 0 ? winCyanMat : winLitMat);
        const pane = new THREE.Mesh(new THREE.PlaneGeometry(0.055, 0.036), matChoice);
        pane.position.set(bx + col * (bw * 0.25), wy, bz + bd * 0.5 + 0.01);
        cityGroup.add(pane);
      }
    }
  });
  group.add(cityGroup);

  // ── 3. Animated 3D Rain & Snow outside the window ──────────────────────
  const RAIN_COUNT = 160;
  const rainGeo = new THREE.BufferGeometry();
  const rainPos = new Float32Array(RAIN_COUNT * 6);
  const rainMeta = [];
  for (let i = 0; i < RAIN_COUNT; i += 1) {
    const rx = -2.2 + Math.random() * 2.6;
    const ry = 0.8 + Math.random() * 2.0;
    const rz = -1.62 - Math.random() * 1.1;
    const speed = 2.6 + Math.random() * 1.4;
    rainMeta.push({ x: rx, y: ry, z: rz, speed });
    rainPos[i * 6 + 0] = rx; rainPos[i * 6 + 1] = ry; rainPos[i * 6 + 2] = rz;
    rainPos[i * 6 + 3] = rx - 0.025; rainPos[i * 6 + 4] = ry - 0.14; rainPos[i * 6 + 5] = rz;
  }
  rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
  const rainLines = new THREE.LineSegments(
    rainGeo,
    new THREE.LineBasicMaterial({ color: 0xbce2ff, transparent: true, opacity: 0.48 }),
  );
  rainLines.visible = false;
  group.add(rainLines);

  const SNOW_COUNT = 120;
  const snowGeo = new THREE.BufferGeometry();
  const snowPos = new Float32Array(SNOW_COUNT * 3);
  const snowMeta = [];
  for (let i = 0; i < SNOW_COUNT; i += 1) {
    const sx = -2.1 + Math.random() * 2.4;
    const sy = 0.85 + Math.random() * 1.9;
    const sz = -1.58 - Math.random() * 1.2;
    snowMeta.push({ x: sx, y: sy, z: sz, speed: 0.26 + Math.random() * 0.24, phase: Math.random() * 6.28 });
    snowPos[i * 3 + 0] = sx; snowPos[i * 3 + 1] = sy; snowPos[i * 3 + 2] = sz;
  }
  snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
  const snowTex = makeSoftCircleSprite('rgba(255,255,255,0.95)', 'rgba(220,238,255,0)');
  const snowPoints = new THREE.Points(
    snowGeo,
    new THREE.PointsMaterial({ map: snowTex, size: 0.048, transparent: true, opacity: 0.85, depthWrite: false }),
  );
  snowPoints.visible = false;
  group.add(snowPoints);

  // ── 4. Cozy Indoor Particles: Coffee Steam, Floating Dust, Heart Bursts ─
  const steamTex = makeSoftCircleSprite('rgba(255,248,244,0.34)', 'rgba(255,248,244,0)');
  const steamParticles = [];
  for (let i = 0; i < 12; i += 1) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: steamTex, transparent: true, opacity: 0.0, depthWrite: false,
    }));
    sp.scale.set(0.06, 0.06, 1);
    group.add(sp);
    steamParticles.push({ sprite: sp, age: (i / 12) * 2.4, life: 2.4, drift: (Math.random() - 0.5) * 0.025 });
  }

  const DUST_COUNT = 34;
  const dustGeo = new THREE.BufferGeometry();
  const dustPos = new Float32Array(DUST_COUNT * 3);
  const dustMeta = [];
  for (let i = 0; i < DUST_COUNT; i += 1) {
    const dx = -1.2 + Math.random() * 2.4;
    const dy = 0.78 + Math.random() * 1.35;
    const dz = -1.0 + Math.random() * 1.9;
    dustMeta.push({ x: dx, y: dy, z: dz, phase: Math.random() * 6.28, speed: 0.2 + Math.random() * 0.3 });
    dustPos[i * 3 + 0] = dx; dustPos[i * 3 + 1] = dy; dustPos[i * 3 + 2] = dz;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dustTex = makeSoftCircleSprite('rgba(255,242,216,0.75)', 'rgba(255,220,245,0)');
  const dustPoints = new THREE.Points(
    dustGeo,
    new THREE.PointsMaterial({ map: dustTex, size: 0.028, transparent: true, opacity: 0.55, depthWrite: false }),
  );
  group.add(dustPoints);

  const heartTex = makeHeartSprite();
  const hearts = [];
  for (let i = 0; i < 14; i += 1) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: heartTex, transparent: true, opacity: 0, depthWrite: false,
    }));
    sp.visible = false;
    group.add(sp);
    hearts.push({ sprite: sp, active: false, age: 0, life: 1.5, vx: 0, vy: 0, vz: 0 });
  }

  // Constellation star layout positioned right inside the upper window sky view
  const constellationPts = [
    [186, 152], [208, 138], [234, 146], [254, 128], [278, 138], [302, 122],
    [324, 140], [344, 132], [362, 154], [336, 170], [306, 162], [272, 168],
  ];

  let lastSkyDrawKey = '';
  let skyClock = 0;
  let lampOn = true;
  let crystalColorIndex = 0;
  const CRYSTAL_COLORS = [0x6ae6ff, 0xff8ed0, 0xc8a4ff, 0x86f5c8, 0xffd288];

  function redrawSky(mood, state) {
    const w = skyCanvas.width;
    const h = skyCanvas.height;
    const g = skyCtx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, mood.skyTop);
    g.addColorStop(0.54, mood.skyMid);
    g.addColorStop(1, mood.skyBot);
    skyCtx.fillStyle = g;
    skyCtx.fillRect(0, 0, w, h);

    // Subtle rain overcast veil when raining
    if (state.weather === 'rain') {
      skyCtx.fillStyle = 'rgba(28,36,58,0.28)';
      skyCtx.fillRect(0, 0, w, h);
    }

    // Moon (night/dusk) or warm sun glow (day/dawn) framed cleanly in upper-left window pane
    const hr = ((Number(state.sceneHour ?? 20) % 24) + 24) % 24;
    if (hr < 6.5 || hr > 18.2) {
      const mx = 198;
      const my = 152;
      const mg = skyCtx.createRadialGradient(mx, my, 6, mx, my, 52);
      mg.addColorStop(0, 'rgba(255,248,225,0.92)');
      mg.addColorStop(0.45, 'rgba(255,230,245,0.28)');
      mg.addColorStop(1, 'rgba(255,230,245,0)');
      skyCtx.fillStyle = mg;
      skyCtx.beginPath();
      skyCtx.arc(mx, my, 52, 0, Math.PI * 2);
      skyCtx.fill();
      skyCtx.fillStyle = '#fff9e6';
      skyCtx.beginPath();
      skyCtx.arc(mx, my, 17, 0, Math.PI * 2);
      skyCtx.fill();
    } else {
      const sx = 180 + ((hr - 6.5) / 11.7) * 165;
      const sy = 175 - Math.sin(((hr - 6.5) / 11.7) * Math.PI) * 44;
      const sg = skyCtx.createRadialGradient(sx, sy, 6, sx, sy, 74);
      sg.addColorStop(0, 'rgba(255,250,224,0.94)');
      sg.addColorStop(0.4, 'rgba(255,212,188,0.34)');
      sg.addColorStop(1, 'rgba(255,212,188,0)');
      skyCtx.fillStyle = sg;
      skyCtx.beginPath();
      skyCtx.arc(sx, sy, 74, 0, Math.PI * 2);
      skyCtx.fill();
    }

    // Drifting soft pastel clouds
    skyCtx.fillStyle = hr < 6.5 || hr > 19.5 ? 'rgba(165,148,215,0.14)' : 'rgba(255,248,255,0.24)';
    for (let i = 0; i < 4; i += 1) {
      const cx = ((i * 155 + skyClock * (4 + i)) % (w + 160)) - 80;
      const cy = 148 + (i % 2) * 42;
      skyCtx.beginPath();
      skyCtx.ellipse(cx, cy, 78, 18, 0, 0, Math.PI * 2);
      skyCtx.fill();
    }

    // Background stars + Album Constellation (0..12 playable tracks!)
    if (mood.starsAlpha > 0.05) {
      skyCtx.fillStyle = `rgba(255,250,255,${0.55 * mood.starsAlpha})`;
      for (let i = 0; i < 42; i += 1) {
        const sx = (i * 97 + 31) % w;
        const sy = (i * 53 + 17) % 190;
        const twinkle = 0.65 + 0.35 * Math.sin(skyClock * 2.1 + i);
        skyCtx.globalAlpha = mood.starsAlpha * twinkle;
        skyCtx.beginPath();
        skyCtx.arc(sx, sy, 1.3 + (i % 2) * 0.7, 0, Math.PI * 2);
        skyCtx.fill();
      }
      skyCtx.globalAlpha = 1;

      const count = Math.max(0, Math.min(12, Number(state.playableTracks || 0)));
      if (count > 0) {
        skyCtx.strokeStyle = `rgba(255,236,184,${0.48 * mood.starsAlpha})`;
        skyCtx.lineWidth = 1.4;
        skyCtx.beginPath();
        for (let i = 0; i < count; i += 1) {
          const [px, py] = constellationPts[i];
          if (i === 0) skyCtx.moveTo(px, py);
          else skyCtx.lineTo(px, py);
        }
        skyCtx.stroke();
        for (let i = 0; i < count; i += 1) {
          const [px, py] = constellationPts[i];
          skyCtx.fillStyle = `rgba(255,245,204,${0.95 * mood.starsAlpha})`;
          skyCtx.beginPath();
          skyCtx.arc(px, py, 3.2, 0, Math.PI * 2);
          skyCtx.fill();
        }
      }
    }
    skyTex.needsUpdate = true;
  }

  const tmpPos = new THREE.Vector3();

  return {
    toggleLamp() {
      lampOn = !lampOn;
      return lampOn;
    },
    isLampOn() {
      return lampOn;
    },
    cycleCrystalColor() {
      crystalColorIndex = (crystalColorIndex + 1) % CRYSTAL_COLORS.length;
      const mat = emissiveRegistry.get('led_cyan');
      if (mat) mat.emissive.setHex(CRYSTAL_COLORS[crystalColorIndex]);
      return CRYSTAL_COLORS[crystalColorIndex];
    },
    spawnHearts(origin, count = 7) {
      let spawned = 0;
      for (const h of hearts) {
        if (h.active) continue;
        h.active = true;
        h.age = 0;
        h.life = 1.15 + Math.random() * 0.55;
        h.sprite.position.set(
          origin.x + (Math.random() - 0.5) * 0.22,
          origin.y + 0.08 + Math.random() * 0.08,
          origin.z + (Math.random() - 0.5) * 0.14,
        );
        h.vx = (Math.random() - 0.5) * 0.16;
        h.vy = 0.26 + Math.random() * 0.18;
        h.vz = (Math.random() - 0.5) * 0.10;
        h.sprite.scale.set(0.055, 0.055, 1);
        h.sprite.visible = true;
        spawned += 1;
        if (spawned >= count) break;
      }
    },
    setLowPower(low) {
      renderer.shadowMap.enabled = !low;
      keyLight.castShadow = !low;
    },
    update(dt, state, gltfRoot) {
      skyClock += dt;
      const hour = Number.isFinite(Number(state.sceneHour)) ? Number(state.sceneHour) : 20.5;
      const mood = sampleMood(hour);

      scene.background = mood.bg;
      renderer.toneMappingExposure = mood.exposure;

      hemi.color.copy(mood.hemiSky);
      hemi.groundColor.copy(mood.hemiGround);
      hemi.intensity = mood.hemiInt;

      keyLight.color.copy(mood.keyColor);
      keyLight.intensity = mood.keyInt * (state.weather === 'rain' ? 0.78 : 1.0);
      keyLight.position.set(mood.keyPos[0], mood.keyPos[1], mood.keyPos[2]);

      windowLight.color.copy(mood.winColor);
      windowLight.intensity = mood.winInt * (state.weather === 'rain' ? 0.55 : 1.0);

      fillLight.color.copy(mood.fillColor);
      fillLight.intensity = mood.fillInt;

      const lampMult = lampOn ? 1.0 : 0.05;
      deskLampLight.color.copy(mood.lampColor);
      deskLampLight.intensity = mood.lampInt * lampMult;

      const pulse = Number(state.beatPulse || 0);
      cyberAccentLight.intensity = (0.72 + pulse * 0.45) * mood.ledScale;

      // Update character shader uniforms (rim light + mood tint)
      sharedUniforms.uRimColor.value.copy(mood.rimColor);
      sharedUniforms.uRimStrength.value = mood.rimStrength;
      sharedUniforms.uMoodTint.value.copy(mood.moodTint);

      // Modulate emissive props & beat-reactive neon strips
      const ledPink = emissiveRegistry.get('led_pink');
      if (ledPink) ledPink.emissiveIntensity = (1.35 + pulse * 0.75) * mood.ledScale;
      const ledCyan = emissiveRegistry.get('led_cyan');
      if (ledCyan) ledCyan.emissiveIntensity = (1.25 + pulse * 0.55) * mood.ledScale;
      const lampMat = emissiveRegistry.get('lamp_bulb');
      if (lampMat) lampMat.emissiveIntensity = lampOn ? (1.2 + mood.lampInt * 0.45) : 0.08;

      // City window brightness tracks dusk/night
      cityMat.color.copy(mood.bg).multiplyScalar(0.85);
      winLitMat.opacity = 0.08 + mood.cityLit * 0.85;
      winCyanMat.opacity = 0.06 + mood.cityLit * 0.78;
      winPinkMat.opacity = 0.06 + mood.cityLit * 0.78;

      // Redraw outdoor sky canvas at ~4 Hz or whenever hour/weather/tracks change
      const skyKey = `${Math.round(hour * 10)}|${state.weather}|${state.playableTracks || 0}|${Math.floor(skyClock * 4)}`;
      if (skyKey !== lastSkyDrawKey) {
        lastSkyDrawKey = skyKey;
        redrawSky(mood, state);
      }

      // Weather particles
      const wx = state.weather || 'clear';
      rainLines.visible = wx === 'rain';
      snowPoints.visible = wx === 'snow';
      if (wx === 'rain') {
        const arr = rainGeo.attributes.position.array;
        for (let i = 0; i < RAIN_COUNT; i += 1) {
          const m = rainMeta[i];
          m.y -= m.speed * dt;
          m.x -= 0.45 * dt;
          if (m.y < 0.72) {
            m.y = 2.65 + Math.random() * 0.3;
            m.x = -2.1 + Math.random() * 2.5;
          }
          arr[i * 6 + 0] = m.x; arr[i * 6 + 1] = m.y; arr[i * 6 + 2] = m.z;
          arr[i * 6 + 3] = m.x - 0.028; arr[i * 6 + 4] = m.y - 0.14; arr[i * 6 + 5] = m.z;
        }
        rainGeo.attributes.position.needsUpdate = true;
      } else if (wx === 'snow') {
        const arr = snowGeo.attributes.position.array;
        for (let i = 0; i < SNOW_COUNT; i += 1) {
          const m = snowMeta[i];
          m.y -= m.speed * dt;
          m.x += Math.sin(skyClock * 1.4 + m.phase) * 0.12 * dt;
          if (m.y < 0.78) {
            m.y = 2.65 + Math.random() * 0.25;
            m.x = -2.0 + Math.random() * 2.3;
          }
          arr[i * 3 + 0] = m.x; arr[i * 3 + 1] = m.y; arr[i * 3 + 2] = m.z;
        }
        snowGeo.attributes.position.needsUpdate = true;
      }

      // Coffee steam follows LIVE Prop_Coffee world transform!
      const coffeeNode = gltfRoot?.getObjectByName('Prop_Coffee');
      if (coffeeNode) {
        coffeeNode.getWorldPosition(tmpPos);
        for (const p of steamParticles) {
          p.age += dt;
          if (p.age >= p.life) p.age -= p.life;
          const u = p.age / p.life;
          p.sprite.position.set(
            tmpPos.x + Math.sin(skyClock * 1.6 + u * 5) * 0.014 + p.drift * u * 12,
            tmpPos.y + 0.06 + u * 0.24,
            tmpPos.z + Math.cos(skyClock * 1.3 + u * 4) * 0.012,
          );
          const sc = 0.045 + u * 0.09;
          p.sprite.scale.set(sc, sc, 1);
          p.sprite.material.opacity = Math.sin(u * Math.PI) * 0.36;
        }
      }

      // Cozy floating dust motes
      const dArr = dustGeo.attributes.position.array;
      for (let i = 0; i < DUST_COUNT; i += 1) {
        const m = dustMeta[i];
        dArr[i * 3 + 0] = m.x + Math.sin(skyClock * m.speed + m.phase) * 0.06;
        dArr[i * 3 + 1] = m.y + Math.cos(skyClock * m.speed * 0.8 + m.phase) * 0.04;
        dArr[i * 3 + 2] = m.z;
      }
      dustGeo.attributes.position.needsUpdate = true;

      // Active heart reaction sprites
      for (const h of hearts) {
        if (!h.active) continue;
        h.age += dt;
        if (h.age >= h.life) {
          h.active = false;
          h.sprite.visible = false;
          continue;
        }
        const u = h.age / h.life;
        h.sprite.position.x += h.vx * dt;
        h.sprite.position.y += h.vy * dt;
        h.sprite.position.z += h.vz * dt;
        const sc = 0.055 * (1 + Math.sin(u * Math.PI) * 0.35);
        h.sprite.scale.set(sc, sc, 1);
        h.sprite.material.opacity = u < 0.2 ? u / 0.2 : (1 - u) / 0.8;
      }
    },
    dispose() {
      skyTex.dispose();
      snowTex.dispose();
      steamTex.dispose();
      dustTex.dispose();
      heartTex.dispose();
      group.traverse((o) => {
        o.geometry?.dispose?.();
        if (Array.isArray(o.material)) o.material.forEach((m) => m?.dispose?.());
        else o.material?.dispose?.();
      });
    },
  };
}

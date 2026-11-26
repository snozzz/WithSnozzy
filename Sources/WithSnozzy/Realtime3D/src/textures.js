/**
 * Procedural Canvas2D PBR textures for SnozzyRoom3D.
 * Zero external downloads, deterministic seeded grain, tiny memory footprint.
 */
import * as THREE from '../vendor/three.module.min.js';

function makeCanvas(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  return canvas;
}

function seededRandom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function finalizeTexture(canvas, { repeatX = 1, repeatY = 1, srgb = true } = {}) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

/** Pale Scandinavian oak wood grain for desk, shelves & window sill. */
function buildOakWoodTexture() {
  const canvas = makeCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  const rng = seededRandom(1024);

  const grad = ctx.createLinearGradient(0, 0, 512, 0);
  grad.addColorStop(0, '#ead8c7');
  grad.addColorStop(0.5, '#f0e0d0');
  grad.addColorStop(1, '#e7d4c2');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // Subtle wide plank bands
  const planks = 4;
  const ph = 512 / planks;
  for (let p = 0; p < planks; p += 1) {
    const shade = (rng() - 0.5) * 10;
    ctx.fillStyle = shade > 0
      ? `rgba(255,248,240,${Math.abs(shade) / 180})`
      : `rgba(130,96,70,${Math.abs(shade) / 180})`;
    ctx.fillRect(0, p * ph, 512, ph);
    ctx.fillStyle = 'rgba(140,104,78,0.13)';
    ctx.fillRect(0, p * ph, 512, 1.5);
  }

  // Fine horizontal wood grain waves
  for (let i = 0; i < 240; i += 1) {
    const y = rng() * 512;
    const amp = 1.2 + rng() * 2.8;
    const freq = 0.008 + rng() * 0.014;
    const phase = rng() * Math.PI * 2;
    ctx.strokeStyle = i % 3 === 0
      ? `rgba(165,126,96,${0.04 + rng() * 0.06})`
      : `rgba(255,248,238,${0.05 + rng() * 0.05})`;
    ctx.lineWidth = 0.7 + rng() * 1.4;
    ctx.beginPath();
    for (let x = 0; x <= 512; x += 16) {
      const yy = y + Math.sin(x * freq + phase) * amp;
      if (x === 0) ctx.moveTo(x, yy);
      else ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }
  return finalizeTexture(canvas, { repeatX: 2, repeatY: 2 });
}

/** Warm hardwood floor planks. */
function buildFloorTexture() {
  const canvas = makeCanvas(512, 512);
  const ctx = canvas.getContext('2d');
  const rng = seededRandom(2048);

  ctx.fillStyle = '#c8ab96';
  ctx.fillRect(0, 0, 512, 512);

  const rows = 8;
  const rh = 512 / rows;
  for (let r = 0; r < rows; r += 1) {
    const offset = (r % 2) * 180;
    for (let c = -1; c < 3; c += 1) {
      const x = c * 256 + offset;
      const tone = 192 + Math.floor((rng() - 0.5) * 18);
      ctx.fillStyle = `rgb(${tone}, ${Math.floor(tone * 0.85)}, ${Math.floor(tone * 0.74)})`;
      ctx.fillRect(x, r * rh, 254, rh - 2);
      // Soft wood fiber lines inside plank
      for (let g = 0; g < 9; g += 1) {
        const gy = r * rh + 4 + rng() * (rh - 8);
        ctx.strokeStyle = `rgba(125,90,68,${0.06 + rng() * 0.07})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + 2, gy);
        ctx.lineTo(x + 252, gy + (rng() - 0.5) * 3);
        ctx.stroke();
      }
    }
    ctx.fillStyle = 'rgba(92,66,52,0.18)';
    ctx.fillRect(0, r * rh + rh - 2, 512, 2);
  }
  return finalizeTexture(canvas, { repeatX: 4, repeatY: 4 });
}

/** Soft woven pastel fabric for rug & desk mat. */
function buildRugTexture() {
  const canvas = makeCanvas(256, 256);
  const ctx = canvas.getContext('2d');
  const rng = seededRandom(3072);

  ctx.fillStyle = '#e5d8ee';
  ctx.fillRect(0, 0, 256, 256);

  for (let y = 0; y < 256; y += 4) {
    for (let x = 0; x < 256; x += 4) {
      const checker = ((x + y) / 4) % 2 === 0;
      const jitter = (rng() - 0.5) * 12;
      const base = checker ? 236 : 222;
      const r = Math.min(255, Math.max(0, base + jitter));
      const g = Math.min(255, Math.max(0, base - 10 + jitter));
      const b = Math.min(255, Math.max(0, base + 12 + jitter));
      ctx.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
      ctx.fillRect(x, y, 4, 4);
    }
  }
  // Subtle stitch threads
  ctx.strokeStyle = 'rgba(255,255,255,0.14)';
  ctx.lineWidth = 1;
  for (let y = 2; y < 256; y += 8) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(256, y);
    ctx.stroke();
  }
  return finalizeTexture(canvas, { repeatX: 6, repeatY: 6 });
}

/** Soft tactile plaster wall finish. */
function buildWallTexture() {
  const canvas = makeCanvas(256, 256);
  const ctx = canvas.getContext('2d');
  const rng = seededRandom(4096);

  ctx.fillStyle = '#ece9f5';
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 3600; i += 1) {
    const x = rng() * 256;
    const y = rng() * 256;
    const s = 1 + rng() * 2.5;
    ctx.fillStyle = rng() > 0.5 ? 'rgba(255,255,255,0.08)' : 'rgba(170,160,198,0.06)';
    ctx.fillRect(x, y, s, s);
  }
  return finalizeTexture(canvas, { repeatX: 4, repeatY: 4 });
}

/** Rich espresso crema with cute steamed milk heart latte art. */
function buildCoffeeLatteTexture() {
  const canvas = makeCanvas(256, 256);
  const ctx = canvas.getContext('2d');
  const cx = 128;
  const cy = 128;
  const grad = ctx.createRadialGradient(cx, cy, 12, cx, cy, 124);
  grad.addColorStop(0, '#805236');
  grad.addColorStop(0.7, '#583420');
  grad.addColorStop(1, '#3b2113');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);

  // Steamed milk swirl ring
  ctx.strokeStyle = 'rgba(248,236,222,0.52)';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(cx, cy, 66, 0, Math.PI * 2);
  ctx.stroke();

  // Heart latte art in center
  ctx.fillStyle = 'rgba(252,243,234,0.88)';
  ctx.beginPath();
  ctx.moveTo(cx, cy + 34);
  ctx.bezierCurveTo(cx - 48, cy + 4, cx - 44, cy - 42, cx, cy - 16);
  ctx.bezierCurveTo(cx + 44, cy - 42, cx + 48, cy + 4, cx, cy + 34);
  ctx.fill();
  return finalizeTexture(canvas, { repeatX: 1, repeatY: 1 });
}

/**
 * Dual framed poster & vinyl cover atlas:
 * - Left half UV [0.0..0.5]: "MIDNIGHT LOFI · SNOZZY" pastel cyber twilight art
 * - Right half UV [0.5..1.0]: "TWELVE SONGS · STARLIGHT" celestial botanical print
 */
function buildPosterAtlasTexture() {
  const canvas = makeCanvas(1024, 680);
  const ctx = canvas.getContext('2d');
  const rng = seededRandom(7777);

  // ── Left half [0..512]: Pastel Cyber Synthwave City Poster ──────────────
  // Back-wall UV runs +X right-to-left when facing -Y, so pre-mirror horizontally
  // so typography reads crisply left-to-right on both PosterArtSide & VinylSleeve!
  ctx.save();
  ctx.translate(512, 0);
  ctx.scale(-1, 1);

  const skyL = ctx.createLinearGradient(0, 0, 0, 680);
  skyL.addColorStop(0, '#2a2252');
  skyL.addColorStop(0.42, '#6d4b8e');
  skyL.addColorStop(0.72, '#e88eb2');
  skyL.addColorStop(1, '#ffd0be');
  ctx.fillStyle = skyL;
  ctx.fillRect(0, 0, 512, 680);

  // Soft stars
  for (let i = 0; i < 65; i += 1) {
    const x = 20 + rng() * 472;
    const y = 20 + rng() * 290;
    const r = 0.8 + rng() * 2.0;
    ctx.fillStyle = `rgba(255,248,255,${0.35 + rng() * 0.65})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Luminous pastel sunset moon/sun disc with synthwave stripes
  ctx.save();
  ctx.beginPath();
  ctx.arc(256, 305, 118, 0, Math.PI * 2);
  ctx.clip();
  const sunG = ctx.createLinearGradient(0, 185, 0, 425);
  sunG.addColorStop(0, '#fff4dc');
  sunG.addColorStop(0.5, '#ffb5cc');
  sunG.addColorStop(1, '#ff77a8');
  ctx.fillStyle = sunG;
  ctx.fillRect(130, 180, 260, 250);
  ctx.fillStyle = '#5c3c7e';
  for (let sy = 318; sy < 420; sy += 18) {
    ctx.fillRect(130, sy, 260, 4 + (sy - 318) * 0.05);
  }
  ctx.restore();

  // Dreamy clouds
  ctx.fillStyle = 'rgba(255,222,238,0.34)';
  for (const [cx, cy, rx, ry] of [[125, 255, 86, 16], [390, 225, 92, 18], [210, 390, 115, 14]]) {
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Stylized cyber city silhouette
  const bldgs = [
    [12, 430, 58, 250], [64, 390, 62, 290], [118, 450, 52, 230],
    [166, 368, 70, 312], [232, 412, 54, 268], [282, 355, 68, 325],
    [346, 405, 58, 275], [398, 376, 62, 304], [452, 432, 56, 248],
  ];
  for (const [bx, by, bw, bh] of bldgs) {
    ctx.fillStyle = '#241c44';
    ctx.fillRect(bx, by, bw, bh);
    // Tiny glowing neon windows
    for (let wy = by + 16; wy < 620; wy += 16) {
      for (let wx = bx + 9; wx < bx + bw - 12; wx += 14) {
        if (rng() < 0.52) {
          ctx.fillStyle = rng() < 0.55 ? '#ffaad0' : (rng() < 0.7 ? '#8ef0ff' : '#ffe8a8');
          ctx.fillRect(wx, wy, 7, 8);
        }
      }
    }
  }

  // Minimalist poster border & typography
  ctx.strokeStyle = 'rgba(255,244,252,0.55)';
  ctx.lineWidth = 3;
  ctx.strokeRect(24, 24, 464, 632);
  ctx.fillStyle = 'rgba(255,250,255,0.92)';
  ctx.font = '600 28px -apple-system, "SF Pro Rounded", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('MIDNIGHT LO-FI', 256, 86);
  ctx.fillStyle = 'rgba(255,216,238,0.82)';
  ctx.font = '500 15px -apple-system, "SF Pro Rounded", sans-serif';
  ctx.fillText('WITH SNOZZY  ·  VOL. 01', 256, 114);
  ctx.fillStyle = 'rgba(255,244,250,0.82)';
  ctx.font = '500 14px -apple-system, "SF Pro Rounded", sans-serif';
  ctx.fillText('SIDE A  ·  RAINY WINDOW SESSIONS', 256, 632);
  ctx.restore();

  // ── Right half [512..1024]: Celestial Constellation & Sakura Art Print ──
  const bgR = ctx.createLinearGradient(512, 0, 1024, 680);
  bgR.addColorStop(0, '#f5ecfa');
  bgR.addColorStop(0.55, '#e8e0f8');
  bgR.addColorStop(1, '#dce8fa');
  ctx.fillStyle = bgR;
  ctx.fillRect(512, 0, 512, 680);

  // Soft decorative watercolor arch
  const archG = ctx.createLinearGradient(512, 110, 512, 540);
  archG.addColorStop(0, '#6a5b9e');
  archG.addColorStop(0.55, '#b689c8');
  archG.addColorStop(1, '#f7bfd6');
  ctx.fillStyle = archG;
  ctx.beginPath();
  ctx.arc(768, 280, 165, Math.PI, 0);
  ctx.lineTo(933, 520);
  ctx.lineTo(603, 520);
  ctx.closePath();
  ctx.fill();

  // Golden constellation ring inside arch
  const pts = [];
  for (let i = 0; i < 8; i += 1) {
    const a = -Math.PI * 0.85 + (i / 7) * Math.PI * 1.15;
    pts.push([768 + Math.cos(a) * 105, 315 + Math.sin(a) * 95]);
  }
  ctx.strokeStyle = 'rgba(255,242,208,0.68)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  pts.forEach(([x, y], idx) => (idx === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
  ctx.stroke();
  for (const [x, y] of pts) {
    ctx.fillStyle = '#fff9e6';
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Crescent moon
  ctx.fillStyle = '#fff7e6';
  ctx.beginPath();
  ctx.arc(768, 245, 42, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#8b6eb3';
  ctx.beginPath();
  ctx.arc(786, 236, 35, 0, Math.PI * 2);
  ctx.fill();

  // Floating sakura petals
  ctx.fillStyle = 'rgba(255,214,232,0.88)';
  for (const [px, py, ang] of [[650, 440, 0.4], [840, 400, -0.5], [730, 480, 0.9], [875, 470, 0.2]]) {
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(ang);
    ctx.beginPath();
    ctx.ellipse(0, 0, 11, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // Clean gallery print caption
  ctx.strokeStyle = 'rgba(116,96,158,0.28)';
  ctx.lineWidth = 2;
  ctx.strokeRect(540, 32, 456, 616);
  ctx.fillStyle = '#4f4074';
  ctx.font = '600 22px -apple-system, "SF Pro Rounded", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('TWELVE SONGS', 768, 578);
  ctx.fillStyle = '#7e6ca6';
  ctx.font = '500 13px -apple-system, "SF Pro Rounded", sans-serif';
  ctx.fillText('STARLIGHT CONSTELLATION  ·  EDITION 2026', 768, 606);

  const tex = finalizeTexture(canvas, { repeatX: 1, repeatY: 1 });
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.flipY = false; // glTF UV convention matches Blender export
  return tex;
}

export function createProceduralTextures() {
  const textures = {
    wood: buildOakWoodTexture(),
    floor: buildFloorTexture(),
    rug: buildRugTexture(),
    wall: buildWallTexture(),
    coffee_liquid: buildCoffeeLatteTexture(),
    poster_atlas: buildPosterAtlasTexture(),
  };
  return {
    textures,
    dispose() {
      Object.values(textures).forEach((t) => t?.dispose?.());
    },
  };
}

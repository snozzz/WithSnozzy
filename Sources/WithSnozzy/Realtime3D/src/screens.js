/**
 * Live animated CanvasTextures for Main Monitor, Side Monitor, and Phone.
 * Updates cleanly at ~12 Hz to preserve buttery 60fps while bringing the desk alive.
 */
import * as THREE from '../vendor/three.module.min.js';

const MONITOR_MODES = ['typing', 'composing', 'researching', 'planning', 'resting'];

function createScreenCanvas(w, h, flipX = false, flipY = false) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = flipY;
  if (flipX) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = -1;
    texture.offset.x = 1;
  }
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return { canvas, ctx, texture };
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

function drawMainMonitor(ctx, w, h, time, state, modeOverride) {
  const mode = modeOverride || state.activity || 'typing';
  const pulse = state.beatPulse || 0;

  // Base deep pastel-indigo IDE glass background
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#14172b');
  bg.addColorStop(1, '#1d1935');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // Top macOS-inspired slim title bar
  ctx.fillStyle = 'rgba(255,255,255,0.06)';
  ctx.fillRect(0, 0, w, 26);
  for (const [idx, color] of [['#ff7ca8', 0], ['#ffd27d', 1], ['#7ce8c8', 2]].map(([c, i]) => [i, c])) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(16 + idx * 14, 13, 4.2, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(235,232,255,0.72)';
  ctx.font = '600 11px -apple-system, "SF Pro Rounded", sans-serif';
  const titles = {
    typing: 'SnozzyRoom3D.swift — WithSnozzy',
    composing: 'Track_04_RainyWindow.daw — Lo-Fi Synth',
    researching: 'Music Theory · Extended Jazz Chords',
    planning: 'Today Focus & Tasks',
    resting: 'Ambient Mode · Take a Breath',
    takingBreak: 'Break Time · Warm Coffee',
  };
  ctx.textAlign = 'left';
  ctx.fillText(titles[mode] || titles.typing, 64, 17);

  if (mode === 'composing') {
    // Pastel synthwave DAW piano roll
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    ctx.fillRect(10, 34, 48, h - 46);
    for (let r = 0; r < 11; r += 1) {
      const y = 38 + r * 24;
      ctx.fillStyle = r % 2 === 0 ? 'rgba(255,255,255,0.045)' : 'rgba(255,255,255,0.015)';
      ctx.fillRect(62, y, w - 74, 21);
      ctx.fillStyle = [1, 3, 6, 8, 10].includes(r) ? '#3b3556' : '#dcd6f5';
      ctx.fillRect(14, y + 2, 40, 17);
    }
    // Scrolling pastel MIDI notes
    const scroll = (time * 38) % (w - 80);
    const notes = [
      [0, 2, 68, '#ff9bc4'], [82, 4, 54, '#7ce8ff'], [150, 1, 76, '#c7a4ff'],
      [238, 5, 62, '#ff9bc4'], [312, 3, 88, '#95f2d8'], [40, 7, 94, '#a6b8ff'],
      [188, 6, 72, '#ffd0a6'], [290, 8, 64, '#ff9bc4'], [380, 2, 58, '#7ce8ff'],
    ];
    for (const [nx, row, nw, color] of notes) {
      const x = 66 + ((nx - scroll + (w - 74)) % (w - 74));
      const y = 40 + row * 24;
      const drawW = Math.min(nw, w - 14 - x);
      if (drawW > 6) {
        ctx.fillStyle = color;
        roundRect(ctx, x, y, drawW, 17, 5);
        ctx.fill();
      }
    }
    // Glowing playhead
    const px = 68 + ((time * 95) % (w - 86));
    ctx.strokeStyle = '#ff95c8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px, 34);
    ctx.lineTo(px, h - 12);
    ctx.stroke();
  } else if (mode === 'planning') {
    // Sleek pastel kanban / focus cards
    const cols = [
      { title: 'TODAY', accent: '#ff96c2', items: ['Finish 3D shaders', 'Record synth chord', 'Warm latte break'] },
      { title: 'IN PROGRESS', accent: '#7ce8ff', items: ['WithSnozzy Steam build', 'Album track #4 mix'] },
    ];
    cols.forEach((col, ci) => {
      const cx = 18 + ci * 242;
      ctx.fillStyle = 'rgba(255,255,255,0.05)';
      roundRect(ctx, cx, 40, 228, h - 56, 12);
      ctx.fill();
      ctx.fillStyle = col.accent;
      ctx.font = '700 11px -apple-system, sans-serif';
      ctx.fillText(col.title, cx + 14, 62);
      col.items.forEach((label, li) => {
        const cy = 76 + li * 62;
        ctx.fillStyle = 'rgba(255,255,255,0.075)';
        roundRect(ctx, cx + 12, cy, 204, 50, 9);
        ctx.fill();
        ctx.fillStyle = col.accent;
        ctx.beginPath();
        ctx.arc(cx + 28, cy + 25, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(250,246,255,0.88)';
        ctx.font = '500 12px -apple-system, sans-serif';
        ctx.fillText(label, cx + 44, cy + 29);
      });
    });
  } else if (mode === 'researching') {
    // Clean pastel browser / chord diagram article
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    roundRect(ctx, 18, 38, w - 36, 26, 8);
    ctx.fill();
    ctx.fillStyle = 'rgba(170,218,255,0.82)';
    ctx.font = '500 11px -apple-system, monospace';
    ctx.fillText('https://lofi.notes/chords/maj9-voicings', 30, 55);
    ctx.fillStyle = '#f5d4ff';
    ctx.font = '700 18px -apple-system, "SF Pro Rounded", sans-serif';
    ctx.fillText('Dreamy Lo-Fi Voicings', 24, 98);
    // Animated harmonic wave diagram
    ctx.strokeStyle = '#7ce8ff';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let x = 24; x < w - 24; x += 6) {
      const y = 165 + Math.sin(x * 0.035 + time * 2.4) * 24 + Math.cos(x * 0.07 - time) * 10;
      if (x === 24) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    // Soft article lines
    for (let i = 0; i < 4; i += 1) {
      ctx.fillStyle = 'rgba(230,226,255,0.22)';
      roundRect(ctx, 24, 218 + i * 20, (i === 3 ? 260 : 420), 8, 4);
      ctx.fill();
    }
  } else if (mode === 'resting' || mode === 'takingBreak') {
    // Cozy glowing ambient clock
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const glow = ctx.createRadialGradient(w * 0.5, h * 0.52, 16, w * 0.5, h * 0.52, 175);
    glow.addColorStop(0, `rgba(255,152,208,${0.26 + pulse * 0.14})`);
    glow.addColorStop(1, 'rgba(20,23,43,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 26, w, h - 26);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#fff5fb';
    ctx.font = '700 72px -apple-system, "SF Pro Rounded", sans-serif';
    ctx.fillText(`${hh}:${mm}`, w * 0.5, h * 0.56);
    ctx.fillStyle = 'rgba(220,210,255,0.72)';
    ctx.font = '500 14px -apple-system, "SF Pro Rounded", sans-serif';
    ctx.fillText(mode === 'takingBreak' ? '☕  warm coffee break  ·  with snozzy' : '✦  stay cozy  ·  lo-fi companion', w * 0.5, h * 0.72);
    ctx.textAlign = 'left';
  } else {
    // Default 'typing': pastel-dark code editor with animated cursor & syntax highlights
    ctx.fillStyle = 'rgba(255,255,255,0.035)';
    ctx.fillRect(0, 26, 98, h - 26);
    const files = ['Room.swift', 'Shader.glsl', 'LifeRig.js', 'Synth.dsp', 'Album.json'];
    files.forEach((f, idx) => {
      if (idx === 1) {
        ctx.fillStyle = 'rgba(255,154,205,0.18)';
        roundRect(ctx, 8, 38 + idx * 24, 82, 20, 5);
        ctx.fill();
      }
      ctx.fillStyle = idx === 1 ? '#ffd8ec' : 'rgba(210,208,238,0.52)';
      ctx.font = '500 10.5px -apple-system, monospace';
      ctx.fillText(f, 16, 52 + idx * 24);
    });

    const lines = [
      [['#ff93c8', 'struct '], ['#87ebff', 'LofiRoom'], ['#e8e4ff', ' {']],
      [['#c7a4ff', '  let '], ['#e8e4ff', 'mood = '], ['#ffd594', '.brightCyber']],
      [['#c7a4ff', '  let '], ['#e8e4ff', 'bpm  = '], ['#92f5d2', '76.0']],
      [['#ff93c8', '  func '], ['#87ebff', 'render'], ['#e8e4ff', '(dt: Double) {']],
      [['#92f5d2', '    // soft pastel rim + snow']],
      [['#e8e4ff', '    sky.blend(hour: '], ['#ffd594', 'sceneHour'], ['#e8e4ff', ')']],
      [['#e8e4ff', '    snozzy.updateSpringHair(dt)']],
      [['#e8e4ff', '    coffee.emitSteam(warmth: '], ['#ffd594', '1.0'], ['#e8e4ff', ')']],
      [['#ff93c8', '    return '], ['#87ebff', 'cozyFrame'], ['#e8e4ff', '()']],
      [['#e8e4ff', '  }']],
      [['#e8e4ff', '}']],
    ];
    const activeLine = Math.floor(time * 0.9) % lines.length;
    lines.forEach((tokens, li) => {
      const y = 52 + li * 22;
      if (li === activeLine) {
        ctx.fillStyle = 'rgba(130,190,255,0.09)';
        ctx.fillRect(104, y - 14, w - 114, 19);
      }
      ctx.fillStyle = 'rgba(180,175,215,0.34)';
      ctx.font = '500 11px ui-monospace, Menlo, monospace';
      ctx.fillText(String(li + 1).padStart(2, ' '), 108, y);
      let x = 132;
      for (const [color, text] of tokens) {
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        x += ctx.measureText(text).width;
      }
      if (li === activeLine && Math.floor(time * 2.4) % 2 === 0) {
        ctx.fillStyle = '#ff96c8';
        ctx.fillRect(x + 2, y - 11, 7, 13);
      }
    });
  }

  // Subtle bottom status bar
  ctx.fillStyle = 'rgba(255,156,208,0.16)';
  ctx.fillRect(0, h - 18, w, 18);
  ctx.fillStyle = 'rgba(255,226,242,0.85)';
  ctx.font = '600 9.5px -apple-system, monospace';
  ctx.fillText(`● LIVE  ·  ${String(mode).toUpperCase()}  ·  ${state.isPlaying ? '♪ PLAYING' : 'QUIET'}`, 12, h - 6);
}

function drawSideMonitor(ctx, w, h, time, state) {
  const playing = Boolean(state.isPlaying);
  const pulse = state.beatPulse || 0;
  const tracks = Math.max(0, Math.min(12, Number(state.playableTracks || 0)));

  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#181530');
  bg.addColorStop(1, '#261b42');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // Header
  ctx.fillStyle = 'rgba(255,255,255,0.06)';
  ctx.fillRect(0, 0, w, 34);
  ctx.fillStyle = playing ? '#ff94c8' : '#96a2cf';
  ctx.beginPath();
  ctx.arc(18, 17, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#f5efff';
  ctx.font = '600 12px -apple-system, "SF Pro Rounded", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(state.trackTitle || (playing ? 'Lo-Fi Radio · Chill' : 'Music Paused'), 32, 21);

  // Spectrum visualizer bars
  const bars = 18;
  const barX0 = 18;
  const barW = 10;
  const barGap = 4;
  const baseY = h - 54;
  for (let i = 0; i < bars; i += 1) {
    const wave = playing
      ? (0.28 + 0.42 * Math.abs(Math.sin(time * 4.4 + i * 0.55)) + 0.30 * pulse * Math.cos(i * 0.4))
      : (0.08 + 0.04 * Math.sin(time * 1.2 + i * 0.7));
    const bh = Math.max(6, Math.min(110, wave * 108));
    const grad = ctx.createLinearGradient(0, baseY - bh, 0, baseY);
    grad.addColorStop(0, '#84eeff');
    grad.addColorStop(0.55, '#c9a0ff');
    grad.addColorStop(1, '#ff8fc4');
    ctx.fillStyle = grad;
    roundRect(ctx, barX0 + i * (barW + barGap), baseY - bh, barW, bh, 4);
    ctx.fill();
  }

  // Right-side Focus Ring
  const rcx = w - 62;
  const rcy = 108;
  const rad = 36;
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.arc(rcx, rcy, rad, 0, Math.PI * 2);
  ctx.stroke();

  const phase = state.focusPhase || 'idle';
  const ringColor = phase === 'work' ? '#ff90c4' : (phase === 'idle' ? '#b8a4ff' : '#7ef0d2');
  const progress = phase === 'idle' ? (0.35 + 0.15 * Math.sin(time * 0.6)) : 0.72;
  ctx.strokeStyle = ringColor;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(rcx, rcy, rad, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress);
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#fff5fb';
  ctx.font = '700 12px -apple-system, "SF Pro Rounded", sans-serif';
  ctx.fillText(phase === 'work' ? 'FOCUS' : (phase === 'idle' ? 'COZY' : 'BREAK'), rcx, rcy + 4);

  // Album 12-star constellation progress bar at bottom
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(230,220,255,0.68)';
  ctx.font = '500 10px -apple-system, "SF Pro Rounded", sans-serif';
  ctx.fillText(`ALBUM  ${tracks} / 12`, 18, h - 20);
  for (let s = 0; s < 12; s += 1) {
    ctx.fillStyle = s < tracks ? '#ffd98a' : 'rgba(255,255,255,0.18)';
    ctx.beginPath();
    ctx.arc(116 + s * 19, h - 24, s < tracks ? 4 : 2.6, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawPhoneScreen(ctx, w, h, time, state) {
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#362a64');
  bg.addColorStop(0.55, '#6a4d8e');
  bg.addColorStop(1, '#d98eb4');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 38px -apple-system, "SF Pro Rounded", sans-serif';
  ctx.fillText(`${hh}:${mm}`, w * 0.5, 86);

  // Cute pastel chat notification cards
  const cards = [
    { name: 'Snozzy ♪', text: state.isPlaying ? '这首鼓点很舒服呢' : '要不要放点轻音乐？' },
    { name: 'Focus', text: state.focusPhase === 'work' ? '专注进行中 ✨' : '记得喝一口温咖啡 ☕' },
  ];
  cards.forEach((card, i) => {
    const y = 122 + i * 74;
    ctx.fillStyle = 'rgba(255,255,255,0.22)';
    roundRect(ctx, 14, y, w - 28, 60, 14);
    ctx.fill();
    ctx.textAlign = 'left';
    ctx.fillStyle = '#fff5fb';
    ctx.font = '700 12px -apple-system, "SF Pro Rounded", sans-serif';
    ctx.fillText(card.name, 26, y + 22);
    ctx.fillStyle = 'rgba(255,248,255,0.88)';
    ctx.font = '500 11px -apple-system, "SF Pro Rounded", sans-serif';
    ctx.fillText(card.text, 26, y + 43);
  });

  // Glowing home pill
  const glow = 0.5 + 0.5 * Math.sin(time * 2.5);
  ctx.fillStyle = `rgba(255,255,255,${0.45 + 0.35 * glow})`;
  roundRect(ctx, w * 0.5 - 32, h - 18, 64, 5, 2.5);
  ctx.fill();
}

export function createLiveScreens() {
  const main = createScreenCanvas(512, 320, true, false);
  const side = createScreenCanvas(384, 256, true, false);
  const phone = createScreenCanvas(192, 320, true, true);

  let elapsed = 0;
  let accum = 999; // force initial draw on frame 0
  let modeOverrideIndex = -1;

  function renderAll(state) {
    const override = modeOverrideIndex >= 0 ? MONITOR_MODES[modeOverrideIndex] : null;
    drawMainMonitor(main.ctx, main.canvas.width, main.canvas.height, elapsed, state, override);
    drawSideMonitor(side.ctx, side.canvas.width, side.canvas.height, elapsed, state);
    drawPhoneScreen(phone.ctx, phone.canvas.width, phone.canvas.height, elapsed, state);
    main.texture.needsUpdate = true;
    side.texture.needsUpdate = true;
    phone.texture.needsUpdate = true;
  }

  return {
    textures: {
      screen_main: main.texture,
      screen_side: side.texture,
      screen_phone: phone.texture,
    },
    cycleMainMode(state) {
      modeOverrideIndex = (modeOverrideIndex + 1) % MONITOR_MODES.length;
      renderAll(state);
      return MONITOR_MODES[modeOverrideIndex];
    },
    update(dt, state, force = false) {
      elapsed += dt;
      accum += dt;
      if (!force && accum < 0.085) return; // ~12 Hz crisp animation, ultra-low GPU cost
      accum = 0;
      renderAll(state);
    },
    dispose() {
      main.texture.dispose();
      side.texture.dispose();
      phone.texture.dispose();
    },
  };
}

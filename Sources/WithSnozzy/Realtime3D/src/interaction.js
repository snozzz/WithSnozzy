/**
 * Direct raycasted 3D desk & room interactions with floating hover tooltips,
 * cursor feedback, plushie squash-stretch physics, and SwiftUI event callbacks.
 */
import * as THREE from '../vendor/three.module.min.js';

const WEATHER_CYCLE = ['clear', 'rain', 'snow'];

const TARGET_RULES = [
  { id: 'head', label: '摸摸 Snozzy', match: /^(Face|Hair001|Headphones_3D|Headphones_Glow)/i },
  { id: 'coffee', label: '喝一口热咖啡', match: /^(Prop_Coffee|CoffeeMug|CoffeeLiquid|CoffeeCoaster|MugHandle)/i },
  { id: 'phone', label: '看看手机消息', match: /^(Prop_Phone|PhoneBody|PhoneScreen|PhoneCamera)/i },
  { id: 'notebook', label: '写一笔笔记', match: /^(Prop_Pen|Notebook|Pen)/i },
  { id: 'keyboard', label: '专心敲键盘', match: /^(Keyboard|Kbd|Mouse)/i },
  { id: 'lamp', label: '开关台灯氛围', match: /^(DeskLamp|Lamp|ShelfOrbLamp|OrbBase|FloorLamp)/i },
  { id: 'monitor', label: '切换电脑画面', match: /^(MainMonitor|Monitor|SideMonitor)/i },
  { id: 'music', label: '播放 / 暂停音乐', match: /^(Vinyl|RetroStereo|Stereo|DeskSoundbar)/i },
  { id: 'window', label: '切换窗外天气', match: /^(Window|Curtain)/i },
  { id: 'plushie', label: '捏一捏小摆件', match: /^DeskPlushie/i },
  { id: 'crystal', label: '切换水晶光色', match: /^Crystal/i },
];

function classifyObject(obj) {
  let cur = obj;
  while (cur) {
    const name = cur.name || '';
    for (const rule of TARGET_RULES) {
      if (rule.match.test(name)) return rule;
    }
    cur = cur.parent;
  }
  return null;
}

export function createInteractionController({
  canvas,
  tooltipEl,
  camera,
  gltfRoot,
  cameraController,
  lifeEngine,
  atmosphere,
  liveScreens,
  roomState,
  playAction,
  post,
  diagnosticRun = false,
}) {
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();

  // Collect interactive meshes once for fast O(N) raycasting
  const pickTargets = [];
  gltfRoot.traverse((obj) => {
    if (!obj.isMesh) return;
    if (classifyObject(obj)) pickTargets.push(obj);
  });

  // Plushie squash-and-stretch animation state
  const plushie = gltfRoot.getObjectByName('DeskPlushie');
  const plushieBaseScale = plushie ? plushie.scale.clone() : new THREE.Vector3(1, 1, 1);
  let plushieBounce = 0;

  let lastHoverCheck = 0;
  let hoveredRule = null;

  function hideTooltip() {
    if (tooltipEl) tooltipEl.classList.add('hidden');
    if (canvas) canvas.style.cursor = 'grab';
  }

  function showTooltip(label, clientX, clientY) {
    if (!tooltipEl) return;
    tooltipEl.textContent = label;
    tooltipEl.style.left = `${Math.min(window.innerWidth - 130, clientX + 14)}px`;
    tooltipEl.style.top = `${Math.max(54, clientY - 34)}px`;
    tooltipEl.classList.remove('hidden');
    if (canvas) canvas.style.cursor = 'pointer';
  }

  function updateNDC(e) {
    const rect = canvas.getBoundingClientRect();
    ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    return rect;
  }

  function pickAtPointer(e) {
    updateNDC(e);
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObjects(pickTargets, false);
    for (const hit of hits) {
      if (!hit.object.visible) continue;
      const rule = classifyObject(hit.object);
      if (rule) return { rule, hit };
    }
    return null;
  }

  function onPointerMove(e) {
    if (diagnosticRun) return;
    updateNDC(e);
    lifeEngine?.setPointer(ndc.x, ndc.y, true);

    if (e.buttons !== 0) {
      hideTooltip();
      if (canvas) canvas.style.cursor = 'grabbing';
      return;
    }

    const now = performance.now();
    if (now - lastHoverCheck < 42) {
      if (hoveredRule) showTooltip(hoveredRule.label, e.clientX, e.clientY);
      return;
    }
    lastHoverCheck = now;
    const picked = pickAtPointer(e);
    hoveredRule = picked?.rule || null;
    if (hoveredRule) {
      showTooltip(hoveredRule.label, e.clientX, e.clientY);
    } else {
      hideTooltip();
    }
  }

  function onPointerLeave() {
    hoveredRule = null;
    hideTooltip();
    lifeEngine?.setPointer(0, 0, false);
  }

  function onPointerUp(e) {
    if (diagnosticRun || e.button !== 0 || cameraController.wasDragged()) return;
    const picked = pickAtPointer(e);
    if (!picked) return;
    const { rule, hit } = picked;

    switch (rule.id) {
      case 'head':
        lifeEngine?.triggerPet();
        atmosphere?.spawnHearts(lifeEngine.getHeadWorldPosition(), 8);
        playAction('pet_happy_once', { manual: true });
        post('interaction', { target: 'head', action: 'pet' });
        break;
      case 'coffee':
        playAction('coffee_once', { manual: true });
        post('interaction', { target: 'coffee', action: 'coffee' });
        break;
      case 'phone':
        playAction('phone_once', { manual: true });
        post('interaction', { target: 'phone', action: 'phone' });
        break;
      case 'notebook':
        playAction('write_note_once', { manual: true });
        post('interaction', { target: 'notebook', action: 'write' });
        break;
      case 'keyboard':
        playAction('typing_loop', { manual: true });
        post('interaction', { target: 'keyboard', action: 'typing' });
        break;
      case 'lamp': {
        const lampOn = atmosphere ? atmosphere.toggleLamp() : true;
        post('interaction', { target: 'lamp', action: 'toggleLamp', lampOn });
        break;
      }
      case 'monitor': {
        const nextMode = liveScreens ? liveScreens.cycleMainMode(roomState) : 'typing';
        post('interaction', { target: 'monitor', action: 'cycleMonitor', mode: nextMode });
        break;
      }
      case 'music':
        post('interaction', { target: 'music', action: 'toggleMusic' });
        break;
      case 'window': {
        const curIdx = WEATHER_CYCLE.indexOf(roomState.weather || 'clear');
        const nextWeather = WEATHER_CYCLE[(curIdx + 1) % WEATHER_CYCLE.length];
        roomState.weather = nextWeather;
        post('interaction', { target: 'window', action: 'cycleWeather', weather: nextWeather });
        break;
      }
      case 'plushie':
        plushieBounce = 1.0;
        atmosphere?.spawnHearts(hit.point, 4);
        post('interaction', { target: 'plushie', action: 'pokePlushie' });
        break;
      case 'crystal': {
        const colorHex = atmosphere ? atmosphere.cycleCrystalColor() : 0x6ae6ff;
        atmosphere?.spawnHearts(hit.point, 4);
        post('interaction', { target: 'crystal', action: 'cycleCrystal', color: colorHex });
        break;
      }
      default:
        break;
    }
  }

  if (canvas && !diagnosticRun) {
    canvas.style.cursor = 'grab';
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);
    canvas.addEventListener('pointerup', onPointerUp);
  }

  return {
    update(dt) {
      if (plushie && plushieBounce > 0.001) {
        plushieBounce = Math.max(0, plushieBounce - dt * 1.45);
        const w = Math.sin(plushieBounce * Math.PI * 3.5) * plushieBounce * 0.22;
        plushie.scale.set(
          plushieBaseScale.x * (1 + w),
          plushieBaseScale.y * (1 + w),
          plushieBaseScale.z * (1 - w * 1.2),
        );
        if (plushieBounce <= 0.001) plushie.scale.copy(plushieBaseScale);
      }
    },
    dispose() {
      if (!canvas) return;
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      canvas.removeEventListener('pointerup', onPointerUp);
    },
  };
}

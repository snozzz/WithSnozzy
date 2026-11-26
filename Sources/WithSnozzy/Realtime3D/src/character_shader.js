/**
 * Anime cel + Fresnel rim shader for Snozzy and rich PBR room materials.
 * Preserves the exact material count budget (<= 40) and runtime report metadata.
 */
import * as THREE from '../vendor/three.module.min.js';

function isCutoutMaterial(material) {
  const name = (material?.name || '').toLowerCase();
  return /hair|eyelash|eyeline|brow/.test(name);
}

function isEyeMaterial(material) {
  const name = (material?.name || '').toLowerCase();
  return /eye|highlight|iris/.test(name);
}

function isFaceSkinMaterial(material) {
  const name = (material?.name || '').toLowerCase();
  return /face_00_skin/.test(name);
}

export function isCharacterMaterial(material) {
  const name = material?.name || '';
  return !name.startsWith('Room3D_');
}

function prepareSRGBMap(map) {
  if (!map) return null;
  map.colorSpace = THREE.SRGBColorSpace;
  map.needsUpdate = true;
  return map;
}

/**
 * Balanced anime cel + Fresnel rim + reactive cheek blush built cleanly on
 * MeshLambertMaterial so Three.js SkinnedMesh & MorphTargets remain 100% native.
 *
 * Math: ~72% self-lit crisp VRoid MToon albedo + ~28% soft directional/ambient
 * sculpting = vivid anime saturation with real 3D lighting integration and ZERO
 * overexposure washout.
 */
function upgradeCharacterMaterial(source, sharedUniforms) {
  const cutout = isCutoutMaterial(source);
  const eye = isEyeMaterial(source);
  const faceSkin = isFaceSkinMaterial(source);
  const map = prepareSRGBMap(source.map || null);
  const alphaMap = source.alphaMap || null;

  const diffuseScale = eye ? 0.14 : 0.28;
  const baseCol = (source.color?.clone?.() || new THREE.Color(0xffffff)).multiplyScalar(diffuseScale);

  const mat = new THREE.MeshLambertMaterial({
    color: baseCol,
    map,
    alphaMap,
    emissive: new THREE.Color(0xffffff),
    emissiveMap: map,
    emissiveIntensity: eye ? 0.88 : 0.72,
    transparent: Boolean(source.transparent) || cutout,
    alphaTest: cutout ? 0.35 : (source.alphaTest || 0),
    depthWrite: true,
    side: THREE.DoubleSide,
  });

  // Inject smooth Fresnel anime rim light + subtle blush on face skin
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uRimColor = sharedUniforms.uRimColor;
    shader.uniforms.uRimStrength = sharedUniforms.uRimStrength;
    shader.uniforms.uMoodTint = sharedUniforms.uMoodTint;
    shader.uniforms.uBlush = sharedUniforms.uBlush;

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform vec3 uRimColor;
        uniform float uRimStrength;
        uniform vec3 uMoodTint;
        uniform float uBlush;`,
      )
      .replace(
        '#include <dithering_fragment>',
        `vec3 viewDirAnime = normalize(vViewPosition);
         vec3 normAnime = normalize(vNormal);
         float ndv = clamp(abs(dot(normAnime, viewDirAnime)), 0.0, 1.0);
         float rim = pow(1.0 - ndv, 3.2) * uRimStrength;
         gl_FragColor.rgb *= uMoodTint;
         gl_FragColor.rgb += uRimColor * rim * ${eye ? '0.06' : '0.22'};
         ${faceSkin ? 'gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(1.06, 0.88, 0.93) + vec3(0.05, 0.0, 0.02), uBlush * 0.45);' : ''}
         #include <dithering_fragment>`,
      );
  };
  mat.customProgramCacheKey = () => `snozzy-anime-${eye ? 'eye' : faceSkin ? 'face' : 'std'}`;

  mat.name = `${source.name || 'Material'}_AnimeCel`;
  mat.userData.phase0Unlit = true;
  mat.userData.phase0Character = true;
  mat.userData.phase0SourceName = source.name || '';
  mat.userData.phase0AlphaMode = cutout ? 'MASK(alphaTest=0.35)' : (source.transparent ? 'BLEND' : 'OPAQUE');
  return mat;
}

/**
 * Upgrade curated room materials to crisp PBR MeshStandardMaterial wired with
 * procedural textures, live CanvasTexture screens, and dynamic emissive slots.
 */
function upgradeRoomMaterial(source, procTextures, screenTextures, emissiveRegistry) {
  const rawName = source.name || '';
  const key = rawName.replace(/^Room3D_/, '');

  const isScreen = key === 'screen_main' || key === 'screen_side' || key === 'screen_phone';
  const isEmissiveProp = key === 'led_pink' || key === 'led_cyan' || key === 'lamp_bulb';

  const baseColor = source.color?.clone?.() || new THREE.Color(0xffffff);
  let map = source.map || null;
  let roughness = typeof source.roughness === 'number' ? source.roughness : 0.72;
  let metalness = typeof source.metalness === 'number' ? source.metalness : 0.04;
  let emissive = source.emissive?.clone?.() || new THREE.Color(0x000000);
  let emissiveMap = null;
  let emissiveIntensity = typeof source.emissiveIntensity === 'number' ? source.emissiveIntensity : 0.0;

  if (key === 'wood' && procTextures.wood) {
    map = procTextures.wood;
    baseColor.setHex(0xffffff);
    roughness = 0.56;
  } else if (key === 'floor' && procTextures.floor) {
    map = procTextures.floor;
    baseColor.setHex(0xffffff);
    roughness = 0.62;
  } else if (key === 'rug' && procTextures.rug) {
    map = procTextures.rug;
    baseColor.setHex(0xf3eaf8);
    roughness = 0.94;
  } else if (key === 'wall' && procTextures.wall) {
    map = procTextures.wall;
    baseColor.setHex(0xffffff);
    roughness = 0.88;
  } else if (key === 'coffee_liquid' && procTextures.coffee_liquid) {
    map = procTextures.coffee_liquid;
    baseColor.setHex(0xffffff);
    roughness = 0.22;
  } else if (key === 'poster_atlas' && procTextures.poster_atlas) {
    map = procTextures.poster_atlas;
    baseColor.setHex(0xffffff);
    roughness = 0.50;
    emissive.setHex(0xffffff);
    emissiveMap = procTextures.poster_atlas;
    emissiveIntensity = 0.14;
  } else if (key === 'ceramic') {
    roughness = 0.24;
    metalness = 0.04;
  } else if (key === 'metal') {
    roughness = 0.34;
    metalness = 0.55;
  } else if (isScreen && screenTextures[key]) {
    map = screenTextures[key];
    baseColor.setHex(0xffffff);
    emissive.setHex(0xffffff);
    emissiveMap = screenTextures[key];
    emissiveIntensity = 0.95;
    roughness = 0.18;
    metalness = 0.06;
  } else if (key === 'led_pink') {
    emissive.setHex(0xff7ec4);
    emissiveIntensity = 1.65;
    roughness = 0.28;
  } else if (key === 'led_cyan') {
    emissive.setHex(0x6ae6ff);
    emissiveIntensity = 1.55;
    roughness = 0.28;
  } else if (key === 'lamp_bulb') {
    emissive.setHex(0xffd48f);
    emissiveIntensity = 2.0;
    roughness = 0.25;
  }

  const mat = new THREE.MeshStandardMaterial({
    color: baseColor,
    map,
    roughness,
    metalness,
    emissive,
    emissiveMap,
    emissiveIntensity,
    transparent: Boolean(source.transparent),
    alphaTest: source.alphaTest || 0,
    side: isScreen ? THREE.FrontSide : THREE.DoubleSide,
  });

  mat.name = `${rawName || 'RoomMat'}_PBR`;
  mat.userData.phase0Character = false;
  mat.userData.phase0SourceName = rawName;
  mat.userData.room3dKey = key;

  if (isEmissiveProp || isScreen) {
    emissiveRegistry.set(key, mat);
  }
  return mat;
}

export function applyRoomMaterialPipeline(root, procTextures, screenTextures) {
  const sharedUniforms = {
    uRimColor: { value: new THREE.Color(0xffc2e4) },
    uRimStrength: { value: 0.72 },
    uMoodTint: { value: new THREE.Color(0xffffff) },
    uBlush: { value: 0.0 },
  };
  const materialRecords = new Map();
  const convertedBySourceUUID = new Map();
  const emissiveRegistry = new Map();

  root.traverse((object) => {
    if (!object.isMesh) return;
    const sourceList = Array.isArray(object.material) ? object.material : [object.material];
    const converted = sourceList.map((source) => {
      if (!source) return source;
      const isChar = isCharacterMaterial(source);
      const cacheKey = source.uuid;
      let mat = convertedBySourceUUID.get(cacheKey);
      if (!mat) {
        mat = isChar
          ? upgradeCharacterMaterial(source, sharedUniforms)
          : upgradeRoomMaterial(source, procTextures, screenTextures, emissiveRegistry);
        convertedBySourceUUID.set(cacheKey, mat);
      }
      materialRecords.set(mat.uuid, mat);
      return mat;
    });
    object.material = Array.isArray(object.material) ? converted : converted[0];

    if (object.isSkinnedMesh) {
      object.frustumCulled = false;
      object.castShadow = true;
      object.receiveShadow = false;
    } else {
      const n = object.name || '';
      const isFloorOrWall = /^(Floor|Rug|Wall|Baseboard|Wainscot|Ceiling|DeskMat)/.test(n);
      const isEmissive = /(LED|Glow|Bulb|Fairy|Screen|Orb|Crystal)/.test(n);
      object.castShadow = !isFloorOrWall && !isEmissive;
      object.receiveShadow = !isEmissive;
    }
  });

  return {
    materials: [...materialRecords.values()],
    sharedUniforms,
    emissiveRegistry,
  };
}

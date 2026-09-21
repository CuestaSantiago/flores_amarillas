const garden = document.getElementById('garden');
const music = document.getElementById('gardenMusic');
const musicToggle = document.getElementById('musicToggle');
const musicStatus = document.getElementById('musicStatus');
const musicHint = document.getElementById('musicHint');
const floatingPetals = document.getElementById('floatingPetals');
const sunflowerBack = document.getElementById('sunflowerBack');
const sunflowerMid = document.getElementById('sunflowerMid');
const sunflowerFront = document.getElementById('sunflowerFront');
const wildBlooms = document.getElementById('wildBlooms');
const tulipBack = document.getElementById('tulipBack');
const tulipFront = document.getElementById('tulipFront');

const extraFlowers = [
  { template: 0, x: '-62vw', scale: .44, bottom: '-1vmin', z: 4, opacity: .48, edge: true },
  { template: 0, x: '-44vw', scale: .72, bottom: '-4vmin', z: 6, opacity: .86 },
  { template: 1, x: '42vw', scale: .74, bottom: '-4vmin', z: 6, opacity: .86 },
  { template: 2, x: '-30vw', scale: .62, bottom: '0vmin', z: 7, opacity: .9 },
  { template: 0, x: '30vw', scale: .58, bottom: '1vmin', z: 7, opacity: .89 },
  { template: 1, x: '-18vw', scale: .54, bottom: '0vmin', z: 7, opacity: .84 },
  { template: 2, x: '17vw', scale: .52, bottom: '-1vmin', z: 7, opacity: .84 },
  { template: 0, x: '-53vw', scale: .48, bottom: '-1vmin', z: 5, opacity: .68, edge: true },
  { template: 1, x: '53vw', scale: .46, bottom: '-1vmin', z: 5, opacity: .68, edge: true },
  { template: 2, x: '-8vw', scale: .48, bottom: '3vmin', z: 8, opacity: .9 },
  { template: 0, x: '8vw', scale: .46, bottom: '2vmin', z: 8, opacity: .88 },
  { template: 1, x: '-38vw', scale: .38, bottom: '2vmin', z: 5, opacity: .58, back: true },
  { template: 2, x: '38vw', scale: .36, bottom: '1vmin', z: 5, opacity: .56, back: true },
  { template: 0, x: '-26vw', scale: .32, bottom: '-2vmin', z: 4, opacity: .48, back: true },
  { template: 1, x: '25vw', scale: .3, bottom: '-2vmin', z: 4, opacity: .48, back: true },
  { template: 2, x: '-58vw', scale: .34, bottom: '-1vmin', z: 4, opacity: .42, edge: true },
  { template: 0, x: '58vw', scale: .34, bottom: '-1vmin', z: 4, opacity: .42, edge: true },
  { template: 1, x: '-47vw', scale: .5, bottom: '0vmin', z: 6, opacity: .74 },
  { template: 2, x: '47vw', scale: .5, bottom: '0vmin', z: 6, opacity: .74 },
  { template: 0, x: '-33vw', scale: .44, bottom: '3vmin', z: 8, opacity: .84 },
  { template: 1, x: '33vw', scale: .44, bottom: '3vmin', z: 8, opacity: .84 },
  { template: 2, x: '-3vw', scale: .4, bottom: '4vmin', z: 9, opacity: .82 },
  { template: 0, x: '4vw', scale: .38, bottom: '4vmin', z: 9, opacity: .82 }
];

const sunflowerLayouts = {
  back: [
    { x: 5, stem: 18, size: 42, scale: .72, sway: '-2.4deg', delay: '.3s' },
    { x: 14, stem: 20, size: 46, scale: .76, sway: '2deg', delay: '.5s' },
    { x: 23, stem: 22, size: 44, scale: .8, sway: '-1.5deg', delay: '.1s' },
    { x: 35, stem: 19, size: 48, scale: .78, sway: '1.6deg', delay: '.4s' },
    { x: 46, stem: 24, size: 50, scale: .82, sway: '-2.1deg', delay: '.7s' },
    { x: 57, stem: 21, size: 46, scale: .78, sway: '1.3deg', delay: '.2s' },
    { x: 67, stem: 18, size: 44, scale: .74, sway: '-1.8deg', delay: '.6s' },
    { x: 77, stem: 20, size: 49, scale: .8, sway: '1.7deg', delay: '.35s' },
    { x: 87, stem: 17, size: 41, scale: .7, sway: '-1.1deg', delay: '.55s' },
    { x: 94, stem: 19, size: 40, scale: .68, sway: '1.2deg', delay: '.25s' },
    { x: 72, stem: 17, size: 38, scale: .64, sway: '-1.3deg', delay: '.42s' },
    { x: 30, stem: 18, size: 40, scale: .66, sway: '1.1deg', delay: '.18s' }
  ],
  mid: [
    { x: 3, stem: 22, size: 52, scale: .92, sway: '-1.7deg', delay: '.55s' },
    { x: 10, stem: 26, size: 62, scale: 1, sway: '2deg', delay: '.2s' },
    { x: 18, stem: 25, size: 58, scale: .98, sway: '-2.1deg', delay: '.4s' },
    { x: 28, stem: 30, size: 66, scale: 1.05, sway: '1.4deg', delay: '.85s' },
    { x: 38, stem: 25, size: 60, scale: .97, sway: '-1.4deg', delay: '.32s' },
    { x: 48, stem: 31, size: 68, scale: 1.08, sway: '1.8deg', delay: '.6s' },
    { x: 58, stem: 24, size: 58, scale: .96, sway: '-2deg', delay: '.15s' },
    { x: 66, stem: 28, size: 64, scale: 1.02, sway: '1.1deg', delay: '.74s' },
    { x: 75, stem: 24, size: 58, scale: .96, sway: '-1.2deg', delay: '.25s' },
    { x: 84, stem: 29, size: 66, scale: 1.04, sway: '1.5deg', delay: '.66s' },
    { x: 92, stem: 23, size: 52, scale: .92, sway: '-1.8deg', delay: '.38s' },
    { x: 52, stem: 27, size: 62, scale: 1.02, sway: '-1.2deg', delay: '.48s' },
    { x: 88, stem: 25, size: 56, scale: .96, sway: '1.1deg', delay: '.58s' },
    { x: 7, stem: 24, size: 54, scale: .94, sway: '-1.1deg', delay: '.22s' }
  ],
  front: [
    { x: 7, stem: 21, size: 58, scale: .98, sway: '-1.8deg', delay: '.45s' },
    { x: 16, stem: 24, size: 62, scale: 1.06, sway: '1.8deg', delay: '.28s' },
    { x: 24, stem: 19, size: 54, scale: .9, sway: '-1deg', delay: '.8s' },
    { x: 36, stem: 23, size: 66, scale: 1.08, sway: '2deg', delay: '.2s' },
    { x: 47, stem: 20, size: 58, scale: .95, sway: '-1.3deg', delay: '.5s' },
    { x: 59, stem: 22, size: 62, scale: 1, sway: '1.3deg', delay: '.68s' },
    { x: 72, stem: 20, size: 57, scale: .94, sway: '-1.6deg', delay: '.4s' },
    { x: 83, stem: 23, size: 64, scale: 1.05, sway: '1.4deg', delay: '.76s' },
    { x: 94, stem: 18, size: 52, scale: .88, sway: '-1deg', delay: '.24s' },
    { x: 29, stem: 20, size: 56, scale: .92, sway: '1.2deg', delay: '.31s' },
    { x: 52, stem: 21, size: 60, scale: .98, sway: '-1.1deg', delay: '.54s' },
    { x: 66, stem: 19, size: 54, scale: .9, sway: '1deg', delay: '.71s' }
  ]
};

const bloomPalette = ['#ffe461', '#ffeb86', '#fce25a', '#fff0a8'];

const tulipLayouts = {
  back: [
    { x: 8, stem: 10, size: 18, tilt: '-6deg', delay: '.1s' },
    { x: 20, stem: 12, size: 20, tilt: '5deg', delay: '.2s' },
    { x: 33, stem: 11, size: 19, tilt: '-4deg', delay: '.3s' },
    { x: 45, stem: 13, size: 21, tilt: '3deg', delay: '.15s' },
    { x: 56, stem: 11, size: 18, tilt: '-5deg', delay: '.38s' },
    { x: 69, stem: 12, size: 19, tilt: '4deg', delay: '.18s' },
    { x: 81, stem: 11, size: 18, tilt: '-4deg', delay: '.28s' },
    { x: 92, stem: 10, size: 17, tilt: '3deg', delay: '.4s' }
  ],
  front: [
    { x: 4, stem: 12, size: 22, tilt: '-5deg', delay: '.12s' },
    { x: 14, stem: 11, size: 20, tilt: '4deg', delay: '.24s' },
    { x: 27, stem: 13, size: 23, tilt: '-3deg', delay: '.32s' },
    { x: 40, stem: 12, size: 21, tilt: '5deg', delay: '.14s' },
    { x: 52, stem: 13, size: 24, tilt: '-4deg', delay: '.42s' },
    { x: 64, stem: 11, size: 20, tilt: '3deg', delay: '.22s' },
    { x: 76, stem: 12, size: 22, tilt: '-5deg', delay: '.35s' },
    { x: 88, stem: 11, size: 19, tilt: '4deg', delay: '.18s' },
    { x: 96, stem: 10, size: 18, tilt: '-3deg', delay: '.28s' }
  ]
};

function createTulip(config, bedClass) {
  const flower = document.createElement('div');
  flower.className = `tulip ${bedClass}`.trim();
  flower.style.setProperty('--x', `${config.x}%`);
  flower.style.setProperty('--stem', `${config.stem}vmin`);
  flower.style.setProperty('--size', `${config.size}px`);
  flower.style.setProperty('--tilt', config.tilt);
  flower.style.setProperty('--delay', config.delay || '0s');
  flower.innerHTML = `
    <span class="tulip__stem"></span>
    <span class="tulip__leaf tulip__leaf--left"></span>
    <span class="tulip__leaf tulip__leaf--right"></span>
    <span class="tulip__head">
      <i class="tulip__petal tulip__petal--left"></i>
      <i class="tulip__petal tulip__petal--center"></i>
      <i class="tulip__petal tulip__petal--right"></i>
    </span>
  `;
  return flower;
}

function buildTulipLayer(target, configs, bedClass) {
  if (!target) return;
  target.innerHTML = '';
  configs.forEach((config) => target.appendChild(createTulip(config, bedClass)));
}

function buildExtraFlowers() {
  if (!garden) return;

  const templates = Array.prototype.filter.call(garden.children, (child) => child.classList && child.classList.contains('flower')).slice(0, 3);
  if (templates.length < 3) return;

  extraFlowers.forEach((config, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'extra-flower-wrap';
    if (config.edge) wrapper.classList.add('extra-flower-wrap--edge');
    if (config.back) wrapper.classList.add('extra-flower-wrap--back');

    wrapper.style.setProperty('--extra-x', config.x);
    wrapper.style.setProperty('--extra-scale', config.scale);
    wrapper.style.setProperty('--extra-bottom', config.bottom);
    wrapper.style.setProperty('--extra-z', config.z);
    wrapper.style.setProperty('--extra-opacity', config.opacity);
    wrapper.style.setProperty('--extra-delay', `${(index % 5) * .16}s`);

    const flower = templates[config.template].cloneNode(true);
    flower.setAttribute('aria-hidden', 'true');
    wrapper.appendChild(flower);
    garden.appendChild(wrapper);
  });
}

function createSunflower(config, index, bedClass = '') {
  const flower = document.createElement('div');
  flower.className = `sunflower ${bedClass}`.trim();
  flower.style.setProperty('--x', `${config.x}vw`);
  flower.style.setProperty('--stem', `${config.stem}vmin`);
  flower.style.setProperty('--size', `${config.size}px`);
  flower.style.setProperty('--scale', config.scale);
  flower.style.setProperty('--sway', config.sway);
  flower.style.setProperty('--delay', config.delay || `${index * 0.06}s`);

  flower.innerHTML = `
    <span class="sunflower__stem"></span>
    <span class="sunflower__leaf sunflower__leaf--left"></span>
    <span class="sunflower__leaf sunflower__leaf--right"></span>
    <span class="sunflower__head">
      <span class="sunflower__petals">
        ${Array.from({ length: 12 }, (_, petal) => `<i style="--petal:${petal}"></i>`).join('')}
      </span>
      <span class="sunflower__core"></span>
    </span>
  `;

  return flower;
}

function buildSunflowerLayer(target, configs, bedClass) {
  if (!target) return;
  target.innerHTML = '';
  configs.forEach((config, index) => target.appendChild(createSunflower(config, index, bedClass)));
}

function buildWildBlooms() {
  if (!wildBlooms) return;

  const isSmallScreen = window.matchMedia('(max-width: 760px)').matches;
  const total = isSmallScreen ? 22 : 46;

  for (let index = 0; index < total; index += 1) {
    const bloom = document.createElement('span');
    const left = (index / total) * 100 + (Math.random() * 4 - 2);
    bloom.className = 'wild-bloom';
    bloom.style.setProperty('--x', `${Math.min(98, Math.max(2, left)).toFixed(2)}%`);
    bloom.style.setProperty('--size', `${(12 + Math.random() * 12).toFixed(1)}px`);
    bloom.style.setProperty('--stem', `${(5 + Math.random() * 6).toFixed(1)}vmin`);
    bloom.style.setProperty('--delay', `${(Math.random() * 1.1).toFixed(2)}s`);
    bloom.style.setProperty('--bloom', bloomPalette[index % bloomPalette.length]);
    bloom.style.setProperty('--tilt', `${(-7 + Math.random() * 14).toFixed(1)}deg`);
    wildBlooms.appendChild(bloom);
  }
}

function buildPetals() {
  if (!floatingPetals) return;

  const isSmallScreen = window.matchMedia('(max-width: 700px)').matches;
  const amount = isSmallScreen ? 22 : 42;

  for (let index = 0; index < amount; index += 1) {
    const petal = document.createElement('span');
    const sideBias = index % 2 === 0 ? Math.random() * 38 : 62 + Math.random() * 38;

    petal.style.setProperty('--petal-x', `${sideBias.toFixed(1)}%`);
    petal.style.setProperty('--petal-size', `${(.55 + Math.random() * .92).toFixed(2)}`);
    petal.style.setProperty('--petal-delay', `${(Math.random() * 8).toFixed(2)}s`);
    petal.style.setProperty('--petal-duration', `${(8 + Math.random() * 8).toFixed(2)}s`);
    petal.style.setProperty('--petal-drift', `${(-60 + Math.random() * 120).toFixed(0)}px`);
    petal.style.setProperty('--petal-rotate', `${(-35 + Math.random() * 70).toFixed(0)}deg`);

    floatingPetals.appendChild(petal);
  }
}

function setMusicUi(isPlaying, needsInteraction = false) {
  if (!musicToggle || !musicStatus) return;

  musicToggle.classList.toggle('is-playing', isPlaying);
  musicToggle.classList.toggle('needs-interaction', needsInteraction);
  musicToggle.setAttribute('aria-pressed', String(isPlaying));
  musicToggle.setAttribute('aria-label', isPlaying ? 'Pausar música' : 'Reproducir música');
  musicStatus.textContent = isPlaying ? 'Música encendida' : 'Activar música';

  if (musicHint) {
    if (isPlaying) {
      musicHint.classList.remove('is-visible');
    } else if (needsInteraction) {
      musicHint.classList.add('is-visible');
    }
  }
}

function fadeMusicIn(targetVolume = .72) {
  if (!music) return;

  music.volume = 0;
  const steps = 18;
  let step = 0;

  const fade = window.setInterval(() => {
    step += 1;
    music.volume = Math.min(targetVolume, targetVolume * (step / steps));

    if (step >= steps || music.paused) {
      window.clearInterval(fade);
    }
  }, 80);
}

async function playMusic() {
  if (!music) return false;

  try {
    await music.play();
    fadeMusicIn();
    setMusicUi(true);
    return true;
  } catch (error) {
    setMusicUi(false, true);
    return false;
  }
}

function pauseMusic() {
  if (!music) return;
  music.pause();
  setMusicUi(false, false);
}

if (musicToggle && music) {
  musicToggle.addEventListener('click', async () => {
    if (music.paused) {
      await playMusic();
    } else {
      pauseMusic();
    }
  });

  music.addEventListener('play', () => setMusicUi(true));
  music.addEventListener('pause', () => setMusicUi(false, false));
}

window.addEventListener('load', async () => {
  buildExtraFlowers();
  buildSunflowerLayer(sunflowerBack, sunflowerLayouts.back, 'sunflower--back');
  buildTulipLayer(tulipBack, tulipLayouts.back, 'tulip--back');
  buildSunflowerLayer(sunflowerMid, sunflowerLayouts.mid, 'sunflower--mid');
  buildSunflowerLayer(sunflowerFront, sunflowerLayouts.front, 'sunflower--front');
  buildTulipLayer(tulipFront, tulipLayouts.front, 'tulip--front');
  buildWildBlooms();
  buildPetals();

  window.setTimeout(() => {
    document.body.classList.remove('container');
    document.body.classList.add('garden-ready');
  }, 180);

  let musicWasRequested = false;
  try {
    musicWasRequested = sessionStorage.getItem('yellowFlowersMusicRequested') === 'true';
    sessionStorage.removeItem('yellowFlowersMusicRequested');
  } catch (error) {
    musicWasRequested = false;
  }

  if (musicWasRequested) {
    const started = await playMusic();

    if (!started) {
      document.addEventListener('pointerdown', (event) => {
        const target = event.target;
        if (target && typeof target.closest === 'function' && target.closest('#musicToggle')) return;
        playMusic();
      }, { once: true });
    }
  } else {
    const started = await playMusic();
    if (!started) setMusicUi(false, true);
  }
});

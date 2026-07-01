const CONFIG = {
  secretPassword: "alexandra",
  secretLetter:
    "Para Alexandra: si llegaste hasta aquí, quería que encontraras algo más íntimo. Gracias por ser mi calma, mi alegría y esa persona que convierte cualquier día común en algo que vale la pena recordar.",
  surpriseLetter:
    "Alexandra, esta carta apareció sin avisar porque quería que esta página también tuviera un momento inesperado, como esos pensamientos bonitos que llegan de pronto cuando pienso en ti.",
  surpriseNotificationDelay: 12000,
};

const dailyMessages = [
  "Alexandra, hoy quiero recordarte algo simple: incluso en los días silenciosos, sigues siendo una de mis partes favoritas del mundo.",
  "Ojalá esta página te abrace un poquito cada vez que la abras, Alexandra.",
  "No necesitaba una fecha perfecta para hacerte esto. Solo necesitaba pensar en Alexandra.",
  "Alexandra, eres hogar en forma de persona, y eso no se encuentra todos los días.",
];

const letters = [
  {
    title: "Ábreme cuando estés triste.",
    body: "Respira conmigo, Alexandra. No tienes que poder con todo ahora. Estoy orgulloso de ti por seguir aquí, incluso cuando el día pesa.",
  },
  {
    title: "Ábreme cuando me extrañes.",
    body: "Cierra los ojos un momento, Alexandra. Imagina mi mano buscando la tuya y mi voz diciéndote que también te extraño mucho.",
  },
  {
    title: "Ábreme cuando necesites sonreír.",
    body: "Me encanta esa sonrisa tuya, Alexandra, esa que aparece poquito a poco, como si el mundo se iluminara sin hacer ruido.",
  },
  {
    title: "Ábreme cuando quieras recordar cuánto significas para mí.",
    body: "Alexandra, significas ternura, paz, ilusión y futuro. Significas muchísimo más de lo que mis palabras alcanzan a decir.",
  },
  {
    title: "Ábreme cuando tengas un día difícil.",
    body: "Este día no define tu belleza, tu fuerza ni tu valor, Alexandra. Solo es un día. Yo sigo viéndote con los mismos ojos llenos de cariño.",
  },
  {
    title: "Ábreme cuando quieras sentirte abrazada.",
    body: "Este es mi abrazo guardado para ti, Alexandra: lento, fuerte, sin prisa, de esos que dicen 'aquí estoy' sin necesitar más.",
  },
];

const songs = [
  {
    name: "Solo Tú",
    artist: "Jaci Velasquez",
    reason: "Porque suena a una promesa tranquila, de esas que se guardan con cariño.",
    url: "https://www.youtube.com/results?search_query=Jaci+Velasquez+Solo+Tu",
    audioSrc: "assets/audio/solo-tu.mp3",
  },
  {
    name: "Mi Alma Entre Tus Manos",
    artist: "Jorge Pardo",
    reason: "Porque tiene esa forma íntima de decir que alguien ocupa un lugar muy profundo.",
    url: "https://www.youtube.com/results?search_query=Jorge+Pardo+Mi+Alma+Entre+Tus+Manos",
    audioSrc: "assets/audio/mi-alma-entre-tus-manos.mp3",
  },
  {
    name: "No Morirá",
    artist: "No Matter What",
    reason: "Porque hay canciones que se sienten como esperanza, fe y amor permaneciendo.",
    url: "https://www.youtube.com/results?search_query=No+Morira+No+Matter+What",
    audioSrc: "assets/audio/dlg-no-morira.mp3",
  },
];

const specialDates = [
  {
    date: "Agrega una fecha",
    title: "El día que quiero recordar",
    note: "Escribe aquí una fecha importante para ustedes y por qué merece quedarse guardada.",
  },
  {
    date: "Próximo recuerdo",
    title: "Un plan bonito",
    note: "Puedes usar este espacio para una salida, una promesa o una sorpresa que quieras preparar.",
  },
];

const photoMemories = [
  {
    title: "Alexandra",
    note: "Una de esas fotitos que hacen que este rincón se sienta todavía más suyo.",
    src: "assets/images/foto1.jpeg",
  },
  {
    title: "Mi foto favorita de Alexandra",
    note: "Un recuerdo para mirar despacio, como quien guarda algo bonito cerca del corazón.",
    src: "assets/images/foto2.jpeg",
  },
];

const littleThings = [
  "La manera en que Alexandra hace que lo cotidiano se sienta especial.",
  "Tu forma de escuchar, Alexandra, incluso cuando no sabes cuánto ayuda.",
  "La ternura que aparece en tus detalles más pequeños.",
  "Tu risa, porque cambia el ambiente completo.",
  "Tu fuerza tranquila, esa que no presume y aun así sostiene.",
  "La paz que siento cuando pienso en Alexandra.",
];

const surprises = [
  "Alexandra, hoy mereces algo bonito, aunque sea pequeño: una pausa, una sonrisa y saber que te quiero.",
  "Estoy pensando en Alexandra. Sí, justo ahora que abriste esto.",
  "Nunca olvides lo mucho que iluminas mi vida, Alexandra.",
  "Si el día se siente pesado, guarda esta frase: estoy contigo.",
  "Hay personas que son lugar seguro. Alexandra, tú eres el mío.",
];

const spiritualCorner = {
  verses: [
    {
      reference: "Jeremías 29:11",
      verse: "Escribe aquí el versículo completo que quieres compartir con Alexandra.",
      reflection: "Escribe aquí tu reflexión personal sobre lo que este versículo significa para ustedes.",
    },
    {
      reference: "1 Corintios 13:4",
      verse: "Escribe aquí otro versículo importante para ustedes.",
      reflection: "Agrega una reflexión tranquila, sincera y escrita por ti.",
    },
    {
      reference: "Salmos 46:10",
      verse: "Escribe aquí el texto del versículo que quieras guardar en este rincón.",
      reflection: "Agrega aquí por qué este versículo les da paz, esperanza o dirección.",
    },
  ],
  wish: {
    title: "Mi mayor deseo",
    text: "Mi mayor deseo es que nuestra relación siempre tenga paz, fe y un amor que nos acerque a lo bueno. Que podamos cuidarnos con ternura, orar por nuestros días y encontrar esperanza incluso en los momentos difíciles.",
  },
};

const body = document.body;
const giftBox = document.querySelector("#gift-box");
const openGiftButton = document.querySelector("#open-gift");
const experience = document.querySelector("#experience");
const canvas = document.querySelector("#star-canvas");
const context = canvas.getContext("2d");
const cursorHalo = document.querySelector("#cursor-halo");
const messageToast = document.querySelector("#message-toast");
const specialLetterModal = document.querySelector("#special-letter-modal");
const specialLetterText = document.querySelector("#special-letter-text");
const audioPlayer = document.querySelector("#audio-player");
const playerTitle = document.querySelector("#player-title");
const playerArtist = document.querySelector("#player-artist");
const playerCurrent = document.querySelector("#player-current");
const playerDuration = document.querySelector("#player-duration");
const playerProgress = document.querySelector("#player-progress");
const playerToggle = document.querySelector("#player-toggle");
const playerPrev = document.querySelector("#player-prev");
const playerNext = document.querySelector("#player-next");
const musicPlayer = document.querySelector("#music-player");
const timeGreeting = document.querySelector("#time-greeting");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let stars = [];
let particles = [];
let shootingStars = [];
let animationStarted = false;
let notificationShown = false;
let dailyMessageStarted = false;
let skyFade = 1;
let nextShootingStarAt = 0;
let cursorX = -200;
let cursorY = -200;
let haloX = -200;
let haloY = -200;
let currentSongIndex = 0;
let constellationStartedAt = 0;
let activeTheme = "night";
let themeStarVisibility = 1;

const constellationStars = [
  [0.02, 0.84], [0.06, 0.18], [0.1, 0.84], [0.055, 0.54],
  [0.15, 0.16], [0.15, 0.84], [0.22, 0.84],
  [0.27, 0.16], [0.27, 0.84], [0.34, 0.84], [0.27, 0.5], [0.33, 0.5], [0.34, 0.16],
  [0.39, 0.18], [0.47, 0.84], [0.47, 0.18], [0.39, 0.84],
  [0.52, 0.84], [0.56, 0.18], [0.6, 0.84], [0.545, 0.55],
  [0.65, 0.84], [0.65, 0.18], [0.72, 0.84], [0.72, 0.18],
  [0.77, 0.84], [0.77, 0.18], [0.84, 0.84], [0.84, 0.18], [0.805, 0.5],
  [0.89, 0.84], [0.89, 0.18], [0.96, 0.2], [0.97, 0.44], [0.89, 0.52], [0.98, 0.84],
];

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function typeText(element, text, speed = 28, onComplete) {
  element.textContent = "";
  element.classList.add("typing-caret");

  if (prefersReducedMotion) {
    element.textContent = text;
    element.classList.remove("typing-caret");
    if (onComplete) onComplete();
    return;
  }

  let index = 0;
  const write = () => {
    element.textContent = text.slice(0, index);
    index += 1;

    if (index <= text.length) {
      window.setTimeout(write, speed);
      return;
    }

    element.classList.remove("typing-caret");
    if (onComplete) onComplete();
  };

  write();
}

function renderDailyMessage() {
  const message = document.querySelector("#daily-message");
  message.dataset.message = pickRandom(dailyMessages);
  message.textContent = "";
}

function applyDynamicTheme() {
  const hour = new Date().getHours();
  const themeConfig = getThemeConfig(hour);

  activeTheme = themeConfig.name;
  themeStarVisibility = themeConfig.starVisibility;
  body.classList.remove("theme-morning", "theme-afternoon", "theme-night");
  body.classList.add(`theme-${themeConfig.name}`);
  timeGreeting.textContent = themeConfig.greeting;
}

function getThemeConfig(hour) {
  if (hour >= 6 && hour < 12) {
    return {
      name: "morning",
      starVisibility: 0.12,
      greeting: "Buenos días. Espero que hoy tengas un día muy bonito. ☀️",
    };
  }

  if (hour >= 12 && hour < 19) {
    return {
      name: "afternoon",
      starVisibility: 0.24,
      greeting: "Espero que estés teniendo un bonito día. 🌤️",
    };
  }

  return {
    name: "night",
    starVisibility: 1,
    greeting: "Si hoy fue un día largo, descansa. Este pequeño rincón siempre estará aquí para ti. 🌙",
  };
}

function startDailyMessage() {
  if (dailyMessageStarted) return;

  const message = document.querySelector("#daily-message");
  dailyMessageStarted = true;
  typeText(message, message.dataset.message, 24, () => {
    message.classList.add("is-complete");
    window.setTimeout(() => message.classList.remove("is-complete"), 1400);
  });
}

function renderLetters() {
  const grid = document.querySelector("#letters-grid");

  letters.forEach((letter) => {
    const card = createElement("button", "letter-card");
    card.type = "button";
    card.setAttribute("aria-expanded", "false");

    const title = createElement("h3", "", letter.title);
    const paper = createElement("div", "letter-card__paper");
    const paragraph = createElement("p");
    paragraph.dataset.message = letter.body;
    paper.append(paragraph);

    card.append(title, paper);
    card.addEventListener("click", () => openLetter(card, paragraph));

    grid.append(card);
  });
}

function openLetter(card, paragraph) {
  const isOpen = card.classList.toggle("is-open");
  card.setAttribute("aria-expanded", String(isOpen));

  if (!isOpen) {
    paragraph.textContent = "";
    paragraph.classList.remove("typing-caret");
    return;
  }

  window.setTimeout(() => {
    typeText(paragraph, paragraph.dataset.message, 18);
  }, prefersReducedMotion ? 0 : 720);
}

function renderMusic() {
  const grid = document.querySelector("#music-grid");

  songs.forEach((song, index) => {
    const card = createElement("article", "music-card");
    card.dataset.songIndex = String(index);
    card.append(
      createElement("h3", "", song.name),
      createElement("p", "", `${song.artist} · ${song.reason}`)
    );

    const playerButton = createElement("button", "music-card__play", "Usar en reproductor");
    playerButton.type = "button";
    playerButton.addEventListener("click", () => loadSong(index, true));

    const link = createElement("a", "", "Abrir canción");
    link.href = song.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    card.append(playerButton, link);
    grid.append(card);
  });

  loadSong(0, false);
}

function setupMusicPlayer() {
  playerToggle.addEventListener("click", togglePlayer);
  playerPrev.addEventListener("click", () => changeSong(-1));
  playerNext.addEventListener("click", () => changeSong(1));

  audioPlayer.addEventListener("timeupdate", updatePlayerProgress);
  audioPlayer.addEventListener("loadedmetadata", updatePlayerProgress);
  audioPlayer.addEventListener("ended", () => changeSong(1));

  playerProgress.addEventListener("input", () => {
    if (!audioPlayer.duration) return;
    audioPlayer.currentTime = (Number(playerProgress.value) / 100) * audioPlayer.duration;
  });
}

function loadSong(index, shouldPlay) {
  currentSongIndex = (index + songs.length) % songs.length;
  const song = songs[currentSongIndex];

  playerTitle.textContent = song.name;
  playerArtist.textContent = song.audioSrc
    ? `${song.artist} · ${song.reason}`
    : `${song.artist} · Agrega el archivo en assets/audio para reproducirla aquí.`;

  audioPlayer.pause();
  audioPlayer.src = song.audioSrc;
  audioPlayer.load();
  playerToggle.textContent = "Play";
  musicPlayer.classList.remove("is-playing");
  updateActiveSongCard();
  updatePlayerProgress();

  if (shouldPlay) playCurrentSong();
}

function togglePlayer() {
  if (audioPlayer.paused) {
    playCurrentSong();
    return;
  }

  audioPlayer.pause();
  playerToggle.textContent = "Play";
  musicPlayer.classList.remove("is-playing");
}

function playCurrentSong() {
  if (!songs[currentSongIndex].audioSrc) {
    playerArtist.textContent = "Aún falta agregar el archivo de audio de esta canción.";
    return;
  }

  audioPlayer.play().then(() => {
    playerToggle.textContent = "Pausa";
    musicPlayer.classList.add("is-playing");
  }).catch(() => {
    playerArtist.textContent = "El navegador no pudo reproducir este archivo. Revisa la ruta o el formato.";
  });
}

function changeSong(direction) {
  loadSong(currentSongIndex + direction, !audioPlayer.paused);
}

function updatePlayerProgress() {
  const current = audioPlayer.currentTime || 0;
  const duration = audioPlayer.duration || 0;
  const percent = duration ? (current / duration) * 100 : 0;

  playerCurrent.textContent = formatTime(current);
  playerDuration.textContent = duration ? formatTime(duration) : "0:00";
  playerProgress.value = String(percent);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remaining}`;
}

function updateActiveSongCard() {
  document.querySelectorAll(".music-card").forEach((card) => {
    card.classList.toggle("is-active", Number(card.dataset.songIndex) === currentSongIndex);
  });
}

function renderDatesAndPhotos() {
  const datesList = document.querySelector("#dates-list");
  const photoGrid = document.querySelector("#photo-grid");

  specialDates.forEach((memory) => {
    datesList.append(createDateCard(memory));
  });

  photoMemories.forEach((photo) => {
    photoGrid.append(createPhotoCard(photo));
  });
}

function createDateCard(memory) {
  const card = createElement("article", "date-card");
  const time = createElement("time", "", memory.date);
  const title = createElement("h4", "", memory.title);
  const note = createElement("p", "", memory.note);

  card.append(time, title, note);
  return card;
}

function createPhotoCard(photo) {
  const card = createElement("article", "photo-card");
  const visual = photo.src ? createElement("img") : createElement("div", "photo-placeholder", "＋");

  if (photo.src) {
    visual.src = photo.src;
    visual.alt = photo.title;
    visual.loading = "lazy";
  }

  const bodyContent = createElement("div", "photo-card__body");
  bodyContent.append(createElement("h4", "", photo.title), createElement("p", "", photo.note));
  card.append(visual, bodyContent);
  return card;
}

function setupPhotoUpload() {
  const input = document.querySelector("#photo-upload");
  const photoGrid = document.querySelector("#photo-grid");

  input.addEventListener("change", () => {
    [...input.files].forEach((file) => {
      if (!file.type.startsWith("image/")) return;

      const imageUrl = URL.createObjectURL(file);
      photoGrid.prepend(
        createPhotoCard({
          title: file.name.replace(/\.[^.]+$/, ""),
          note: "Foto cargada para esta visita.",
          src: imageUrl,
        })
      );
    });

    input.value = "";
  });
}

function renderLittleThings() {
  const grid = document.querySelector("#little-grid");

  littleThings.forEach((thing) => {
    const card = createElement("article", "little-card");
    card.append(createElement("p", "", thing));
    grid.append(card);
  });
}

function renderSpiritualCorner() {
  const grid = document.querySelector("#spiritual-verses");
  const wish = document.querySelector("#spiritual-wish");

  spiritualCorner.verses.forEach((item) => {
    const card = createElement("button", "spiritual-card");
    card.type = "button";
    card.setAttribute("aria-expanded", "false");

    const inner = createElement("span", "spiritual-card__inner");
    const front = createElement("span", "spiritual-card__face spiritual-card__front");
    const back = createElement("span", "spiritual-card__face spiritual-card__back");

    front.append(
      createElement("span", "", "Versículo favorito"),
      createElement("strong", "", item.reference)
    );

    back.append(
      createElement("h3", "", item.reference),
      createElement("p", "", item.verse),
      createElement("p", "spiritual-card__reflection", item.reflection)
    );

    inner.append(front, back);
    card.append(inner);

    card.addEventListener("click", () => {
      const isOpen = card.classList.toggle("is-open");
      card.setAttribute("aria-expanded", String(isOpen));
    });

    grid.append(card);
  });

  wish.append(
    createElement("p", "eyebrow", "Deseo y esperanza"),
    createElement("h3", "", spiritualCorner.wish.title),
    createElement("p", "", spiritualCorner.wish.text)
  );
}

function setupSurprises() {
  const button = document.querySelector("#surprise-button");
  const message = document.querySelector("#surprise-message");

  button.addEventListener("click", () => {
    message.textContent = pickRandom(surprises);
    message.animate(
      [
        { opacity: 0, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 420, easing: "ease", fill: "both" }
    );
  });
}

function setupSecretCorner() {
  const form = document.querySelector("#secret-form");
  const input = document.querySelector("#secret-password");
  const letter = document.querySelector("#secret-letter");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isCorrect = input.value.trim() === CONFIG.secretPassword;

    if (!isCorrect) {
      input.value = "";
      input.placeholder = "Prueba con otra palabra";
      form.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-7px)" },
          { transform: "translateX(7px)" },
          { transform: "translateX(0)" },
        ],
        { duration: 240, easing: "ease" }
      );
      return;
    }

    letter.hidden = false;
    typeText(letter, CONFIG.secretLetter, 18);
    form.style.display = "none";
  });
}

function setupRevealObservers() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal-section, .finale").forEach((section) => {
    observer.observe(section);
  });
}

function setupSpecialNotification() {
  messageToast.addEventListener("click", openSpecialLetter);

  document.querySelectorAll("[data-close-special]").forEach((element) => {
    element.addEventListener("click", closeSpecialLetter);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSpecialLetter();
  });
}

function scheduleSpecialNotification() {
  if (notificationShown) return;
  notificationShown = true;

  window.setTimeout(() => {
    if (!body.classList.contains("gift-opened")) return;
    messageToast.hidden = false;
  }, prefersReducedMotion ? 1200 : CONFIG.surpriseNotificationDelay);
}

function openSpecialLetter() {
  messageToast.hidden = true;
  specialLetterModal.classList.add("is-open");
  specialLetterModal.setAttribute("aria-hidden", "false");
  typeText(specialLetterText, CONFIG.surpriseLetter, 18);
}

function closeSpecialLetter() {
  specialLetterModal.classList.remove("is-open");
  specialLetterModal.setAttribute("aria-hidden", "true");
}

function setupCursorHalo() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  window.addEventListener("pointermove", (event) => {
    body.classList.add("has-cursor");
    cursorX = event.clientX;
    cursorY = event.clientY;
  });
}

function updateCursorHalo() {
  haloX += (cursorX - haloX) * 0.12;
  haloY += (cursorY - haloY) * 0.12;
  cursorHalo.style.transform = `translate3d(${haloX}px, ${haloY}px, 0)`;
}

function setupParallax() {
  window.addEventListener("scroll", updateScrollEffects, { passive: true });
  updateScrollEffects();
}

function updateScrollEffects() {
  const scrollY = window.scrollY || 0;
  const finale = document.querySelector("#finale");
  const finaleRect = finale.getBoundingClientRect();
  const finalProgress = Math.min(
    1,
    Math.max(0, (window.innerHeight - finaleRect.top) / window.innerHeight)
  );

  skyFade = Math.max(0.34, 1 - finalProgress * 0.46);
  document.documentElement.style.setProperty("--sky-shift", `${scrollY * 0.045}px`);
  document.documentElement.style.setProperty("--final-darkness", String(finalProgress * 0.52));

  if (finalProgress > 0.18) messageToast.hidden = true;
  if (finalProgress > 0.25) fadePageAudio(finalProgress);
}

function fadePageAudio(progress) {
  const fade = Math.max(0, 1 - (progress - 0.25) / 0.75);
  document.querySelectorAll("audio").forEach((audio) => {
    audio.volume = fade;
  });
}

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  const starCount = Math.min(170, Math.max(80, Math.floor(window.innerWidth / 7)));
  stars = Array.from({ length: starCount }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 1.35 + 0.18,
    speed: Math.random() * 0.08 + 0.015,
    baseAlpha: Math.random() * 0.48 + 0.18,
    phase: Math.random() * Math.PI * 2,
    twinkle: Math.random() * 0.018 + 0.006,
  }));
}

function burstParticles() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  particles = Array.from({ length: prefersReducedMotion ? 22 : 86 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2.8 + 0.8;

    return {
      x: centerX,
      y: centerY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.8,
      life: Math.random() * 70 + 50,
      age: 0,
      radius: Math.random() * 2.4 + 1,
    };
  });
}

function spawnShootingStar(now) {
  if (activeTheme !== "night" || now < nextShootingStarAt || !body.classList.contains("gift-opened")) return;

  nextShootingStarAt = now + 7000 + Math.random() * 8000;
  shootingStars.push({
    x: Math.random() * window.innerWidth * 0.75,
    y: Math.random() * window.innerHeight * 0.38,
    vx: 7 + Math.random() * 3,
    vy: 2.4 + Math.random() * 1.2,
    life: 70,
    age: 0,
    length: 130 + Math.random() * 80,
  });
}

function drawSky(now = 0) {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  spawnShootingStar(now);

  stars.forEach((star) => {
    star.y += star.speed;
    star.phase += star.twinkle;

    if (star.y > window.innerHeight + 8) {
      star.y = -8;
      star.x = Math.random() * window.innerWidth;
    }

    const pulse = (Math.sin(star.phase) + 1) / 2;
    const alpha = (star.baseAlpha + pulse * 0.36) * skyFade * themeStarVisibility;

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    context.fill();
  });

  shootingStars = shootingStars.filter((star) => star.age < star.life);
  shootingStars.forEach((star) => {
    star.age += 1;
    star.x += star.vx;
    star.y += star.vy;

    const opacity = (1 - star.age / star.life) * 0.72 * skyFade * themeStarVisibility;
    const gradient = context.createLinearGradient(
      star.x,
      star.y,
      star.x - star.length,
      star.y - star.length * 0.32
    );
    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
    gradient.addColorStop(0.3, `rgba(234, 216, 173, ${opacity * 0.55})`);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    context.beginPath();
    context.moveTo(star.x, star.y);
    context.lineTo(star.x - star.length, star.y - star.length * 0.32);
    context.lineWidth = 1.3;
    context.strokeStyle = gradient;
    context.stroke();
  });

  particles = particles.filter((particle) => particle.age < particle.life);
  particles.forEach((particle) => {
    particle.age += 1;
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += 0.018;

    const opacity = (1 - particle.age / particle.life) * skyFade;
    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(234, 216, 173, ${opacity})`;
    context.shadowBlur = 18;
    context.shadowColor = "rgba(234, 216, 173, 0.9)";
    context.fill();
    context.shadowBlur = 0;
  });

  drawConstellation(now);
  updateCursorHalo();
  requestAnimationFrame(drawSky);
}

function drawConstellation(now) {
  if (!constellationStartedAt) return;

  const age = now - constellationStartedAt;
  const fadeIn = Math.min(1, age / 2200);
  const fadeOut = age > 10500 ? Math.max(0, 1 - (age - 10500) / 2800) : 1;
  const opacity = fadeIn * fadeOut * skyFade;

  if (opacity <= 0) {
    constellationStartedAt = 0;
    return;
  }

  const width = Math.min(window.innerWidth * 0.82, 780);
  const height = width * 0.16;
  const startX = (window.innerWidth - width) / 2;
  const startY = Math.max(90, window.innerHeight * 0.16);

  context.save();
  context.font = `600 ${Math.max(24, Math.min(56, width / 11))}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
  context.textAlign = "center";
  context.letterSpacing = "0.18em";
  context.fillStyle = `rgba(255, 255, 255, ${opacity * 0.14})`;
  context.shadowBlur = 14;
  context.shadowColor = `rgba(234, 216, 173, ${opacity * 0.55})`;
  context.fillText("ALEXANDRA", window.innerWidth / 2, startY + height * 0.72);

  context.lineWidth = 1;
  context.strokeStyle = `rgba(234, 216, 173, ${opacity * 0.28})`;
  context.fillStyle = `rgba(255, 255, 255, ${opacity * 0.82})`;
  context.beginPath();
  constellationStars.forEach(([x, y], index) => {
    const px = startX + x * width;
    const py = startY + y * height;
    if (index === 0) context.moveTo(px, py);
    else context.lineTo(px, py);
  });
  context.stroke();

  constellationStars.forEach(([x, y]) => {
    const px = startX + x * width;
    const py = startY + y * height;
    context.beginPath();
    context.arc(px, py, 2.1, 0, Math.PI * 2);
    context.fill();
  });

  context.restore();
}

function openGift(event) {
  if (event && event.cancelable) event.preventDefault();
  if (openGiftButton.disabled || body.classList.contains("gift-opened")) return;

  giftBox.classList.add("opening");
  body.classList.add("magic-started");
  openGiftButton.disabled = true;
  burstParticles();

  setTimeout(() => {
    body.classList.add("gift-opened");
    experience.scrollIntoView({ block: "start" });
    startDailyMessage();
    scheduleSpecialNotification();
    window.setTimeout(() => {
      constellationStartedAt = performance.now();
    }, prefersReducedMotion ? 300 : 3200);
  }, prefersReducedMotion ? 120 : 900);
}

function init() {
  applyDynamicTheme();
  renderDailyMessage();
  renderLetters();
  renderMusic();
  renderDatesAndPhotos();
  renderLittleThings();
  renderSpiritualCorner();
  setupMusicPlayer();
  setupPhotoUpload();
  setupSurprises();
  setupSecretCorner();
  setupSpecialNotification();
  setupRevealObservers();
  setupCursorHalo();
  setupParallax();
  resizeCanvas();

  window.addEventListener("resize", resizeCanvas);
  window.setInterval(applyDynamicTheme, 60 * 1000);
  openGiftButton.addEventListener("click", openGift);
  openGiftButton.addEventListener("touchend", openGift, { passive: false });

  if (!animationStarted) {
    animationStarted = true;
    drawSky();
  }
}

init();

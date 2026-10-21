// ========== DONNÉES ==========
const STEAM_URL = "https://store.steampowered.com/app/4383310/GraveDiggers/";

const TYPES = {
  pro: { label: "Expérience pro", c1: "#ff4f7b", c2: "#f59e0b" },
  moteur: { label: "Unity & Unreal", c1: "#8b5cf6", c2: "#38bdf8" },
  rendu: { label: "Moteurs & rendu", c1: "#38bdf8", c2: "#22d3ee" },
  natif: { label: "Jeux sans moteur", c1: "#f97316", c2: "#ff4f7b" },
  web: { label: "Web & BDD", c1: "#10b981", c2: "#38bdf8" }
};

// "rank" définit l'ordre "À la une" (plus petit = plus haut)
const PROJECTS = [
  {
    id: "gravediggers",
    title: "GraveDiggers",
    types: ["pro", "moteur"],
    tech: ["C#", "Unity"],
    cover: "GraveDiggers",
    featured: true,
    rank: 1,
    summary: "Jeu coopératif en ligne jusqu'à 4 joueurs, publié sur Steam. Développé pendant mon stage, je poursuis le projet en parallèle de mes études.",
    details: [
      "Programmation réseau pour le multijoueur en ligne (jusqu'à 4 joueurs)",
      "Système d'inventaire : joueur, sac et coffre",
      "Mini-casino jouable : blackjack et machine à sous",
      "Conception et intégration des objets du jeu"
    ],
    link: { label: "Voir sur Steam", url: STEAM_URL },
    media: [{ type: "video", src: "assets/video/GraveDiggers.mp4" }]
  },
  {
    id: "dx12",
    title: "Moteur 3D DirectX 12 & Shoot'em up",
    types: ["rendu"],
    tech: ["C++", "DirectX 12"],
    cover: "DirectX 12",
    featured: true,
    rank: 2,
    summary: "Moteur 3D développé de zéro avec DirectX 12, et un shoot'em up spatial construit dessus.",
    details: [
      "Pipeline de rendu DirectX 12",
      "Gestion de la caméra et des entrées",
      "Jeu Space Shooter complet utilisant le moteur"
    ],
    media: [{ type: "video", src: "assets/video/directx.mp4" }]
  },
  {
    id: "bomberman",
    title: "Bomberman",
    types: ["moteur"],
    tech: ["Unreal Engine", "Blueprints", "C++"],
    cover: "Bomberman",
    rank: 3,
    summary: "Bomberman en multijoueur local sous Unreal Engine.",
    details: [
      "Multijoueur local",
      "Animations et skeletal meshes",
      "Éclairage et mise en place de l'environnement"
    ],
    media: [{ type: "video", src: "assets/video/BomberMan.mp4" }]
  },
  {
    id: "shaders",
    title: "Shaders réalistes de ciel et d'éclairage",
    types: ["rendu"],
    tech: ["C++", "OpenGL", "GLSL"],
    cover: "GLSL",
    rank: 4,
    summary: "Scène réaliste avec insertion de modèles 3D, shaders de ciel et d'éclairage.",
    details: [
      "Shader de ciel réaliste",
      "Modèles d'éclairage en GLSL",
      "Import et rendu de modèles 3D"
    ],
    media: [
      { type: "img", src: "assets/images/shader/image1.png" },
      { type: "img", src: "assets/images/shader/image2.png" },
      { type: "img", src: "assets/images/shader/image3.png" }
    ]
  },
  {
    id: "gwent",
    title: "Deckbuilding inspiré de Gwent",
    types: ["natif"],
    tech: ["C++", "SFML"],
    cover: "Gwent",
    rank: 5,
    summary: "Jeu de cartes inspiré du Gwent de The Witcher 3, développé sans moteur.",
    details: [
      "Programmation complète des règles du jeu de cartes",
      "Jeu en local",
      "Interface et rendu avec SFML"
    ],
    media: [
      { type: "img", src: "assets/images/c++/gwent1.png" },
      { type: "img", src: "assets/images/c++/gwent2.png" }
    ]
  },
  {
    id: "physique",
    title: "Moteur physique",
    types: ["rendu"],
    tech: ["Processing"],
    cover: "Physique",
    rank: 6,
    summary: "Moteur physique développé avec Processing.",
    details: [
      "Moteur physique écrit de zéro",
      "Visualisation des simulations avec Processing"
    ],
    media: [{ type: "video", src: "assets/video/MoteurPhysique.mp4" }]
  },
  {
    id: "casse-ue",
    title: "Casse-briques Unreal",
    types: ["moteur"],
    tech: ["Unreal Engine", "Blueprints", "C++"],
    cover: "Breakout UE",
    rank: 7,
    summary: "Casse-briques sous Unreal Engine avec un vrai travail d'ambiance.",
    details: [
      "Physique et collisions",
      "Ambiance, éclairage et environnement"
    ],
    media: [{ type: "video", src: "assets/video/CasseBriques.mp4" }]
  },
  {
    id: "smallworld",
    title: "Smallworld",
    types: ["natif"],
    tech: ["Java", "Swing"],
    cover: "Smallworld",
    rank: 8,
    summary: "Adaptation du jeu de plateau Smallworld avec système de sauvegarde.",
    details: [
      "Règles du jeu de plateau",
      "SaveManager : sauvegarde et chargement de partie",
      "Interface en Java Swing"
    ],
    media: [{ type: "img", src: "assets/images/java/small.png" }]
  },
  {
    id: "enigme",
    title: "Jeu d'énigmes et d'enquête",
    types: ["moteur"],
    tech: ["C#", "Unity"],
    cover: "Énigme",
    rank: 9,
    summary: "Jeu d'énigmes et d'enquête développé sous Unity.",
    details: ["Mécaniques d'énigmes et d'enquête", "Scripts de gameplay en C#"],
    media: [
      { type: "img", src: "assets/images/c/HIH1.png" },
      { type: "img", src: "assets/images/c/HIH2.png" }
    ]
  },
  {
    id: "ascii",
    title: "Jeu au tour par tour en ASCII",
    types: ["natif"],
    tech: ["C#"],
    cover: "ASCII",
    rank: 10,
    summary: "Jeu de combat au tour par tour entièrement en ASCII dans la console.",
    details: ["Système de combat au tour par tour", "Rendu ASCII dans la console"],
    media: [{ type: "video", src: "assets/video/onepiece.mp4" }]
  },
  {
    id: "casse-sfml",
    title: "Casse-briques SFML",
    types: ["natif"],
    tech: ["C++", "SFML"],
    cover: "Breakout",
    rank: 11,
    summary: "Casse-briques développé sans moteur en C++.",
    details: ["Boucle de jeu et collisions", "Rendu 2D avec SFML"],
    media: [{ type: "img", src: "assets/images/c++/casse.png" }]
  },
  {
    id: "ministudio",
    title: "MiniStudio · Shoot'em up",
    types: ["natif"],
    tech: ["Python", "Pygame"],
    cover: "MiniStudio",
    rank: 12,
    summary: "Shoot'em up 2D réalisé avec Pygame.",
    details: ["Gameplay shoot'em up 2D", "Boucle de jeu et rendu avec Pygame"],
    media: [{ type: "img", src: "assets/images/python/bird.png" }]
  },
  {
    id: "2048",
    title: "2048",
    types: ["natif"],
    tech: ["C++", "SDL"],
    cover: "2048",
    rank: 13,
    summary: "Le célèbre puzzle 2048 en C++ avec SDL.",
    details: ["Logique de fusion des tuiles", "Rendu et entrées avec SDL"],
    media: [{ type: "video", src: "assets/video/2048-demo.mp4" }]
  },
  {
    id: "demineur",
    title: "Démineur",
    types: ["natif"],
    tech: ["C", "SDL"],
    cover: "Démineur",
    rank: 14,
    summary: "Démineur classique en C avec SDL.",
    details: ["Génération de grille et propagation des cases vides", "Rendu et entrées avec SDL"],
    media: [{ type: "video", src: "assets/video/demineur-demo.mp4" }]
  },
  {
    id: "morpion",
    title: "Morpion avec IA",
    types: ["natif"],
    tech: ["Python"],
    cover: "Morpion IA",
    rank: 15,
    summary: "Morpion jouable contre une intelligence artificielle.",
    details: ["IA adverse pour le joueur solo"],
    media: []
  },
  {
    id: "web-briques",
    title: "Site web sur un jeu de briques",
    types: ["web"],
    tech: ["Python", "SQL"],
    cover: "Web",
    rank: 16,
    summary: "Site web autour d'un jeu de briques, avec gestion de base de données.",
    details: ["Back-end en Python", "Modélisation et requêtes SQL"],
    media: [
      { type: "img", src: "assets/images/python/web1.png" },
      { type: "img", src: "assets/images/python/web2.png" }
    ]
  }
];

// ========== ÉTAT ==========
const state = { type: "all", tech: "all", sort: "featured" };

const grid = document.getElementById("project-grid");
const typeFilters = document.getElementById("type-filters");
const techFilter = document.getElementById("tech-filter");
const sortSelect = document.getElementById("sort");
const resultCount = document.getElementById("result-count");
const empty = document.getElementById("empty");

const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html !== undefined) node.innerHTML = html;
  return node;
};

const ICON_MEDIA = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 16 5-5 4 4 3-3 6 6"/></svg>';
const ICON_PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M8 5v14l11-7z"/></svg>';

function placeholder(project) {
  const t = TYPES[project.types[0]];
  const ph = el("div", "cover-placeholder", `<span>${project.cover}</span>`);
  ph.style.setProperty("--c1", t.c1 + "66");
  ph.style.setProperty("--c2", t.c2 + "55");
  return ph;
}

function mediaNode(m, autoplay) {
  if (m.type === "video") {
    const v = document.createElement("video");
    v.src = m.src + (autoplay ? "" : "#t=1");
    v.muted = autoplay;
    v.playsInline = true;
    v.preload = "metadata";
    if (autoplay) {
      v.controls = true;
      v.autoplay = true;
    } else {
      v.loop = true;
    }
    return v;
  }
  const img = document.createElement("img");
  img.src = m.src;
  img.alt = "";
  img.loading = "lazy";
  img.decoding = "async";
  return img;
}

// ========== FILTRES ==========
function buildFilters() {
  const entries = [["all", "Tous", PROJECTS.length]].concat(
    Object.entries(TYPES).map(([key, t]) => [key, t.label, PROJECTS.filter(p => p.types.includes(key)).length])
  );

  entries.forEach(([key, label, count]) => {
    const b = el("button", "chip", `${label}<span class="count">${count}</span>`);
    b.type = "button";
    b.dataset.type = key;
    b.setAttribute("aria-pressed", key === state.type);
    b.addEventListener("click", () => {
      state.type = key;
      typeFilters.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c === b));
      render();
    });
    typeFilters.appendChild(b);
  });

  const techs = [...new Set(PROJECTS.flatMap(p => p.tech))].sort((a, b) => a.localeCompare(b, "fr"));
  techs.forEach(t => techFilter.appendChild(new Option(t, t)));

  techFilter.addEventListener("change", () => { state.tech = techFilter.value; render(); });
  sortSelect.addEventListener("change", () => { state.sort = sortSelect.value; render(); });
  document.getElementById("reset-filters").addEventListener("click", resetFilters);
}

function resetFilters() {
  state.type = "all";
  state.tech = "all";
  techFilter.value = "all";
  typeFilters.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c.dataset.type === "all"));
  render();
}

function visibleProjects() {
  const list = PROJECTS.filter(p =>
    (state.type === "all" || p.types.includes(state.type)) &&
    (state.tech === "all" || p.tech.includes(state.tech))
  );
  const byName = (a, b) => a.title.localeCompare(b.title, "fr");
  if (state.sort === "az") list.sort(byName);
  else if (state.sort === "za") list.sort((a, b) => byName(b, a));
  else list.sort((a, b) => a.rank - b.rank);
  return list;
}

// ========== RENDU DES CARTES ==========
function card(project, index) {
  const showFeatured = project.featured && state.sort === "featured";
  const c = el("article", "card" + (showFeatured ? " featured" : ""));
  c.tabIndex = 0;
  c.setAttribute("role", "button");
  c.style.animationDelay = `${Math.min(index, 8) * 50}ms`;
  c.setAttribute("aria-label", `Voir le projet ${project.title}`);

  const cover = el("div", "card-cover");
  const first = project.media[0];
  if (first) {
    const m = mediaNode(first, false);
    if (first.type === "video") {
      m.muted = true;
      c.addEventListener("mouseenter", () => m.play().catch(() => {}));
      c.addEventListener("mouseleave", () => m.pause());
    }
    cover.appendChild(m);
  } else {
    cover.appendChild(placeholder(project));
  }

  const badges = el("div", "cover-badges");
  badges.appendChild(el("span", "pill", TYPES[project.types[0]].label));
  if (project.types.includes("pro")) badges.appendChild(el("span", "pill pill-star", "★ Publié sur Steam"));
  cover.appendChild(badges);

  if (project.media.length) {
    const isVideo = project.media.some(m => m.type === "video");
    cover.appendChild(el("span", "pill media-count", (isVideo ? ICON_PLAY + "Vidéo" : ICON_MEDIA + project.media.length)));
  }

  const body = el("div", "card-body");
  body.appendChild(el("span", "card-meta", project.tech[0] === "C#" || project.tech[0] === "C++" ? project.tech.slice(0, 2).join(" · ") : project.tech[0]));
  body.appendChild(el("h3", "", project.title));
  body.appendChild(el("p", "", project.summary));
  const tags = el("ul", "tags");
  project.tech.forEach(t => tags.appendChild(el("li", "", t)));
  body.appendChild(tags);

  c.append(cover, body);
  c.addEventListener("click", () => openModal(project));
  c.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(project);
    }
  });
  return c;
}

function render() {
  const list = visibleProjects();
  grid.replaceChildren(...list.map(card));
  empty.hidden = list.length > 0;
  resultCount.textContent = `${list.length} projet${list.length > 1 ? "s" : ""} affiché${list.length > 1 ? "s" : ""}`;
}

// ========== MODALE ==========
const modal = document.getElementById("modal");
const modalMedia = document.getElementById("modal-media");
const modalThumbs = document.getElementById("modal-thumbs");

function showMedia(project, i) {
  modalMedia.replaceChildren(project.media.length ? mediaNode(project.media[i], true) : placeholder(project));
  modalThumbs.querySelectorAll(".thumb").forEach((t, j) => t.setAttribute("aria-current", i === j));
}

function openModal(project) {
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-summary").textContent = project.summary;

  const types = document.getElementById("modal-types");
  types.replaceChildren(...project.types.map(t => el("span", "pill", TYPES[t].label)));

  const details = document.getElementById("modal-details");
  details.replaceChildren(...project.details.map(d => el("li", "", d)));

  const link = document.getElementById("modal-link");
  link.hidden = !(project.link && project.link.url);
  if (!link.hidden) {
    link.href = project.link.url;
    link.querySelector("span").textContent = project.link.label;
  }

  const tech = document.getElementById("modal-tech");
  tech.replaceChildren(...project.tech.map(t => el("li", "", t)));

  modalThumbs.replaceChildren();
  if (project.media.length > 1) {
    project.media.forEach((m, i) => {
      const t = el("button", "thumb");
      t.type = "button";
      t.setAttribute("aria-label", `Média ${i + 1}`);
      t.appendChild(mediaNode(m, false));
      t.addEventListener("click", () => showMedia(project, i));
      modalThumbs.appendChild(t);
    });
  }
  showMedia(project, 0);

  modal.showModal();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.close();
}

modal.addEventListener("close", () => {
  modalMedia.replaceChildren();
  document.body.style.overflow = "";
});
document.getElementById("modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

// ========== NAVIGATION MOBILE ==========
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", false);
}));

// Lien actif selon la section visible
const sections = [...document.querySelectorAll("main section[id]")];
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => navObserver.observe(s));

// ========== APPARITION AU SCROLL ==========
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(r => revealObserver.observe(r));

// ========== INIT ==========
document.getElementById("year").textContent = new Date().getFullYear();
buildFilters();
render();

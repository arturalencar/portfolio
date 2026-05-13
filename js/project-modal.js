/**
 * project-modal.js — Modal de detalhes do projeto
 *
 * Gerencia abertura/fechamento do modal e galeria de imagens.
 * Os dados de cada projeto são definidos no objeto PROJECTS.
 * O modal é reutilizado para todos os projetos, trocando apenas o conteúdo.
 */

// ── DADOS DOS PROJETOS ──────────────────────────────────────────────────────
const PROJECTS = [
    {
        id: 'cbm-log',
        name: 'CBM-SE LOG',
        badge: { text: 'FINISHED', class: 'badge--success' },
        description:
            'This web application was developed to streamline the management of material and equipment loans within the Sergipe Military Fire Department (CBMSE). It provides a centralized platform for registering and monitoring loans, tracking return deadlines, managing inventory, and overseeing inspection protocols. By replacing manual procedures with a digital solution, the system enhances operational efficiency, improves resource control, and minimizes errors in equipment management.',
        tech: ['VUE.js', 'TypeScript', 'Supabase'],
        images: [
            'assets/images/cbm-log/visao-geral-de-inventario.png',
            'assets/images/cbm-log/add-novo-equipamento.png',
            'assets/images/cbm-log/gerenciar-equipamento.png',
            'assets/images/cbm-log/gestao-de-cautelas.png',
            'assets/images/cbm-log/realizar-cautela.png',
            'assets/images/cbm-log/gestao-de-bombeiros.png',
            'assets/images/cbm-log/add-novo-bombeiro.png',
        ],
        progress: {
            value: 100,
            color: '#00cc66ab',
            label: 'LAP COMPLETE — 100%',
        },
        repo: 'https://github.com/CBMSE-Logistica/sistema_cautelas',
        live: 'https://sistema-cautelas.vercel.app',
    },
    {
        id: 'cuidagro',
        name: 'CUIDAGRO',
        badge: { text: 'FINISHED', class: 'badge--success' },
        description:
            'CuidAgro is a technological solution aimed at promoting health in rural areas, focusing on the prevention of diseases caused by exposure to pesticides. The system allows for integrated monitoring of farmers health, offering support for early diagnoses, generation of strategic reports, and decision-making by health professionals and public managers.',
        tech: ['Java', 'SpringBoot', 'React', 'TypeScript', 'PostgreSQL'],
        images: [
            'assets/images/cuidagro/cuidagro-tela-login.png',
        ],
        progress: { value: 100, color: '#00cc66ab', label: 'LAP COMPLETE — 100%' },
        repo: 'https://github.com/raphamatoss/cuidagro',
        live: 'https://cuidagro-xi.vercel.app/login',
    },
    // {
    //     id: 'gamma',
    //     name: 'LAP 3 — PROJETO GAMMA',
    //     badge: { text: 'QUALIFYING', class: 'badge--danger' },
    //     description:
    //         'Dashboard de monitoramento de APIs em tempo real com gráficos de performance, alertas de uptime e métricas de latência. Construído com Node.js e MongoDB para alta escalabilidade e ingestão de dados em tempo real.',
    //     tech: ['Node.js', 'TypeScript', 'MongoDB', 'Socket.IO', 'Chart.js'],
    //     images: [
    //         'assets/images/project-gamma.png',
    //         'assets/images/project-gamma.png',
    //         'assets/images/project-gamma.png',
    //     ],
    //     progress: { value: 50, color: '#ff5500b0', label: 'QUALIFYING — 50%' },
    //     repo: 'https://github.com/arturalencar/projeto-gamma',
    //     live: '',
    // },
];

// ── ÍCONES SVG ──────────────────────────────────────────────────────────────
const ICON = {
    back: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"/></svg>`,
    live: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-26.37,144H154.37a142.61,142.61,0,0,1-26.37,64.47A142.61,142.61,0,0,1,101.63,168Zm-3.87-16A157.44,157.44,0,0,1,96,128a157.44,157.44,0,0,1,1.76-24h60.48A157.44,157.44,0,0,1,160,128a157.44,157.44,0,0,1-1.76,24ZM40,128a87.61,87.61,0,0,1,3.33-24H81.49a174.66,174.66,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128Zm114.37-40H101.63a142.61,142.61,0,0,1,26.37-64.47A142.61,142.61,0,0,1,154.37,88Zm20.14,16h38.16a87.61,87.61,0,0,1,0,48H174.51a174.66,174.66,0,0,0,0-48Zm29.36-16H170.94a168.49,168.49,0,0,0-22.41-55.56A88.19,88.19,0,0,1,203.87,88ZM107.47,32.44A168.49,168.49,0,0,0,85.06,88H52.13A88.19,88.19,0,0,1,107.47,32.44ZM52.13,168H85.06a168.49,168.49,0,0,0,22.41,55.56A88.19,88.19,0,0,1,52.13,168Zm96.4,55.56A168.49,168.49,0,0,0,170.94,168h32.93A88.19,88.19,0,0,1,148.53,223.56Z"/></svg>`,
    arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"/></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,0,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"/></svg>`,
};

// ── ESTADO ──────────────────────────────────────────────────────────────────
let currentSlide = 0;
let currentProject = null;
let overlayEl = null;

// ── BUILD DO MODAL (chamado uma vez) ────────────────────────────────────────
function buildModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'project-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Detalhes do projeto');

    overlay.innerHTML = `
    <div class="modal">
      <!-- Back (mobile) -->
      <button class="modal__back" id="modal-back" type="button">
        ${ICON.back}
        <span>BACK TO GRID</span>
      </button>

      <!-- Close X (desktop) -->
      <button class="modal__close" id="modal-close" type="button" aria-label="Fechar modal">
        ${ICON.close}
      </button>

      <!-- Galeria de imagens -->
      <div class="modal__gallery">
        <button class="modal__gallery-arrow modal__gallery-arrow--prev" id="gallery-prev" type="button" aria-label="Imagem anterior">
          ${ICON.arrowLeft}
        </button>
        <div class="modal__gallery-track" id="gallery-track"></div>
        <button class="modal__gallery-arrow modal__gallery-arrow--next" id="gallery-next" type="button" aria-label="Próxima imagem">
          ${ICON.arrowRight}
        </button>
        <div class="modal__gallery-dots" id="gallery-dots"></div>
      </div>

      <!-- Corpo -->
      <div class="modal__body">
        <div class="modal__header">
          <h2 class="modal__name" id="modal-name"></h2>
          <span class="badge" id="modal-badge"></span>
        </div>

        <p class="modal__description" id="modal-description"></p>

        <div class="modal__tech-stack">
          <div class="modal__section-label">TECH STACK</div>
          <div class="modal__tech-list" id="modal-tech"></div>
        </div>

        <div class="modal__progress">
          <div class="modal__section-label">LAP PROGRESS</div>
          <div class="modal__progress-bar">
            <div class="modal__progress-fill" id="modal-progress-fill"></div>
          </div>
          <span class="modal__progress-label" id="modal-progress-label"></span>
        </div>

        <div class="modal__actions">
          <a class="modal__action-link modal__action-link--repo" id="modal-repo-link" href="#" target="_blank" rel="noopener">
            ${ICON.github}
            <span>REPOSITORY</span>
          </a>
          <a class="modal__action-link modal__action-link--live" id="modal-live-link" href="#" target="_blank" rel="noopener">
            ${ICON.live}
            <span>LIVE APP</span>
          </a>
        </div>
      </div>
    </div>
  `;

    document.body.appendChild(overlay);
    overlayEl = overlay;

    // ── EVENT LISTENERS ──────────────────────────────────────────────────────
    // Fechar via back/close
    overlay.querySelector('#modal-back').addEventListener('click', closeModal);
    overlay.querySelector('#modal-close').addEventListener('click', closeModal);

    // Fechar via clique no overlay (desktop)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    // Fechar via Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlayEl.classList.contains('is-active')) {
            closeModal();
        }
    });

    // Galeria: setas
    overlay
        .querySelector('#gallery-prev')
        .addEventListener('click', () => slideTo(currentSlide - 1));
    overlay
        .querySelector('#gallery-next')
        .addEventListener('click', () => slideTo(currentSlide + 1));

    // Galeria: swipe no mobile
    let touchStartX = 0;
    const gallery = overlay.querySelector('.modal__gallery');
    gallery.addEventListener(
        'touchstart',
        (e) => {
            touchStartX = e.changedTouches[0].clientX;
        },
        { passive: true },
    );
    gallery.addEventListener(
        'touchend',
        (e) => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                slideTo(diff > 0 ? currentSlide + 1 : currentSlide - 1);
            }
        },
        { passive: true },
    );
}

// ── POPULAR MODAL COM DADOS DO PROJETO ──────────────────────────────────────
function populateModal(project) {
    currentProject = project;
    currentSlide = 0;

    // Nome + badge
    document.getElementById('modal-name').textContent = project.name;
    const badge = document.getElementById('modal-badge');
    badge.textContent = project.badge.text;
    badge.className = `badge ${project.badge.class}`;

    // Descrição
    document.getElementById('modal-description').textContent =
        project.description;

    // Tech pills
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = project.tech
        .map((t) => `<span class="modal__tech-pill">${t}</span>`)
        .join('');

    // Progresso
    const fill = document.getElementById('modal-progress-fill');
    fill.style.width = '0%';
    fill.style.background = project.progress.color;
    document.getElementById('modal-progress-label').textContent =
        project.progress.label;

    // Galeria
    const track = document.getElementById('gallery-track');
    track.innerHTML = project.images
        .map(
            (src, i) =>
                `<img src="${src}" alt="${project.name} screenshot ${i + 1}" loading="lazy" />`,
        )
        .join('');
    track.style.transform = 'translateX(0)';

    // Dots
    const dots = document.getElementById('gallery-dots');
    dots.innerHTML = project.images
        .map(
            (_, i) =>
                `<button class="modal__gallery-dot${i === 0 ? ' is-active' : ''}" data-index="${i}" type="button" aria-label="Ir para imagem ${i + 1}"></button>`,
        )
        .join('');

    dots.querySelectorAll('.modal__gallery-dot').forEach((dot) => {
        dot.addEventListener('click', () => slideTo(Number(dot.dataset.index)));
    });

    // Links
    const repoLink = document.getElementById('modal-repo-link');
    repoLink.href = project.repo || '#';
    if (!project.repo) {
        repoLink.style.opacity = '0.35';
        repoLink.style.pointerEvents = 'none';
    } else {
        repoLink.style.opacity = '';
        repoLink.style.pointerEvents = '';
    }

    const liveLink = document.getElementById('modal-live-link');
    liveLink.href = project.live || '#';
    if (!project.live) {
        liveLink.style.opacity = '0.35';
        liveLink.style.pointerEvents = 'none';
    } else {
        liveLink.style.opacity = '';
        liveLink.style.pointerEvents = '';
    }

    // Animar barra de progresso após abertura
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            fill.style.width = `${project.progress.value}%`;
        });
    });
}

// ── SLIDE DA GALERIA ────────────────────────────────────────────────────────
function slideTo(index) {
    if (!currentProject) return;
    const total = currentProject.images.length;
    // Wrap-around
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentSlide = index;

    const track = document.getElementById('gallery-track');
    track.style.transform = `translateX(-${index * 100}%)`;

    // Update dots
    document.querySelectorAll('.modal__gallery-dot').forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
    });
}

// ── ABRIR / FECHAR ──────────────────────────────────────────────────────────
function openModal(projectId) {
    const project = PROJECTS.find((p) => p.id === projectId);
    if (!project) return;

    populateModal(project);
    overlayEl.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    overlayEl.querySelector('.modal').focus();
}

function closeModal() {
    overlayEl.classList.remove('is-active');
    document.body.style.overflow = '';
    currentProject = null;
}

// ── INIT ────────────────────────────────────────────────────────────────────
export function initProjectModal() {
    buildModal();

    // Vincula clique nos cards
    document.querySelectorAll('.project-card').forEach((card) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const id = card.dataset.projectId;
            if (id) openModal(id);
        });
    });
}

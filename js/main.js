/**
 * main.js — Ponto de entrada JavaScript
 *
 * Inicializa todos os módulos após o DOM estar pronto.
 */

import { initFuelBars } from './fuel-bars.js';
import { initLapCards  } from './lap-cards.js';
import { initProjectModal } from './project-modal.js';

function init() {
  initFuelBars();
  initLapCards();
  initProjectModal();
}

// Garante execução após parse completo do DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

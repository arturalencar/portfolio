/**
 * main.js — Ponto de entrada JavaScript
 *
 * Inicializa todos os módulos após o DOM estar pronto.
 * Para adicionar novos módulos:
 *   1. Crie js/nome-do-modulo.js
 *   2. Importe e chame aqui dentro de init()
 */

import { initFuelBars } from './fuel-bars.js';
import { initLapCards  } from './lap-cards.js';

function init() {
  initFuelBars();
  initLapCards();
}

// Garante execução após parse completo do DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

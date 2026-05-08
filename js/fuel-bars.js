/**
 * fuel-bars.js
 *
 * Dispara a animação de preenchimento das barras apenas quando
 * elas entram na viewport — evita que a animação aconteça antes
 * do usuário rolar até a seção.
 *
 * Usa IntersectionObserver para performance máxima (sem scroll listeners).
 */

const ANIMATION_CLASS      = 'anim-fill-up';
const ANIMATION_CLASS_SLOW = 'anim-fill-up--slow';

/**
 * Remove a classe de animação e a reaplica para forçar restart.
 * @param {HTMLElement} el
 * @param {string} cls
 */
function restartAnimation(el, cls) {
  el.classList.remove(cls);
  // Força reflow para que o browser reconheça a remoção
  void el.offsetWidth;
  el.classList.add(cls);
}

/**
 * Inicializa o observer das barras de fuel.
 * Quando a seção entra na tela, reinicia a animação de todas as barras filhas.
 */
function initFuelBars() {
  const fuelSection = document.querySelector('[aria-labelledby="label-fuel"]');
  if (!fuelSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // Anima barras normais
        fuelSection.querySelectorAll(`.${ANIMATION_CLASS}`).forEach((el) => {
          restartAnimation(el, ANIMATION_CLASS);
        });

        // Desconecta após primeira execução — anima só uma vez
        observer.disconnect();
      });
    },
    { threshold: 0.2 } // dispara quando 20% da seção está visível
  );

  observer.observe(fuelSection);
}

export { initFuelBars };

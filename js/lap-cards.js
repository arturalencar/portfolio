/**
 * lap-cards.js
 *
 * Anima as barras de progresso dos lap cards quando entram na viewport.
 * Mesmo padrão do fuel-bars, mas para a seção Race History.
 */

const ANIMATION_CLASS_SLOW = 'anim-fill-up--slow';

/**
 * @param {HTMLElement} el
 * @param {string} cls
 */
function restartAnimation(el, cls) {
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}

function initLapCards() {
  const section = document.querySelector('[aria-labelledby="label-history"]');
  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        section.querySelectorAll(`.${ANIMATION_CLASS_SLOW}`).forEach((el) => {
          restartAnimation(el, ANIMATION_CLASS_SLOW);
        });

        observer.disconnect();
      });
    },
    { threshold: 0.15 }
  );

  observer.observe(section);
}

export { initLapCards };

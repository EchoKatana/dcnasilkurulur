/* app.js — SKESK Discord Kurulum Rehberi */

// ── Scroll Reveal ──────────────────────────────────────────
(function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.download-card, .method-block, .step-item, .faq-item, .warning-card, .section-header'
  );

  targets.forEach(el => el.setAttribute('data-reveal', ''));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger children of the same parent
            const siblings = Array.from(entry.target.parentElement.children);
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, idx * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach(el => observer.observe(el));
  } else {
    // Fallback: just show everything
    targets.forEach(el => el.classList.add('visible'));
  }
})();

// ── Smooth anchor links ────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

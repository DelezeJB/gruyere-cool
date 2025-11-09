document.addEventListener('DOMContentLoaded', () => {
  // Enhance <details> as before
  document.querySelectorAll('details').forEach(d => {
    d.addEventListener('toggle', () => {
      d.toggleAttribute('aria-expanded', d.open);
    });
  });

  // Minimal lightbox
  const backdrop = document.createElement('div');
  backdrop.className = 'lightbox-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  backdrop.innerHTML = '<button class="lightbox-close" aria-label="Fermer">Fermer</button><img alt="">';
  document.body.appendChild(backdrop);

  const imgEl = backdrop.querySelector('img');
  const closeBtn = backdrop.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    imgEl.src = src;
    imgEl.alt = alt || '';
    backdrop.setAttribute('aria-hidden', 'false');
  }
  function closeLightbox() {
    backdrop.setAttribute('aria-hidden', 'true');
    imgEl.src = '';
    imgEl.alt = '';
  }

  document.body.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-lightbox="gal"]');
    if (a) {
      e.preventDefault();
      const img = a.querySelector('img');
      openLightbox(a.getAttribute('href'), img ? img.getAttribute('alt') : '');
    }
    if (e.target === backdrop) closeLightbox();
  });
  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
});

// Small script: enhance details toggles
document.addEventListener('DOMContentLoaded', () => {
  const details = document.querySelectorAll('details');
  details.forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) d.setAttribute('aria-expanded', 'true');
      else d.removeAttribute('aria-expanded');
    });
  });
});

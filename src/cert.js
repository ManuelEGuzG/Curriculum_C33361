/* ═══════════════════════════════════════════
   cert.js — Lógica compartida para páginas
   de certificados y documentos
═══════════════════════════════════════════ */

(function () {
  'use strict';

  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const docImg      = document.getElementById('doc-img');
  const btnZoom     = document.getElementById('btn-zoom');

  function openLightbox() {
    if (!docImg || !docImg.src || docImg.naturalWidth === 0) return;
    lightboxImg.src = docImg.src;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Abrir con botón o clic en la imagen
  if (btnZoom)  btnZoom.addEventListener('click', openLightbox);
  if (docImg)   docImg.addEventListener('click', openLightbox);

  // Click en la card también abre
  const card = document.querySelector('.cert-preview__card');
  if (card) card.addEventListener('click', openLightbox);

  // Cerrar
  if (lightbox) lightbox.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

})();
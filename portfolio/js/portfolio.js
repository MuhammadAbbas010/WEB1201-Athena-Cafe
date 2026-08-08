// =====================================================
// portfolio.js – CV Portfolio pages functionality
// Tüm member sayfaları için tek dosya
// =====================================================

(function() {
  'use strict';

  // ── Auto-update copyright year ──
  const yearSpans = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(el => { el.textContent = currentYear; });

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Tech tag click feedback ──
  const techTags = document.querySelectorAll('.cv-skill');
  techTags.forEach(tag => {
    tag.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });

  // ── Photo placeholder click feedback ──
  const photoPlaceholders = document.querySelectorAll('.cv-photo-placeholder');
  photoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', function() {
      const text = this.querySelector('.photo-text');
      if (text) {
        text.textContent = '📸 Click to add';
        setTimeout(() => {
          text.textContent = 'Add Photo';
        }, 2000);
      }
    });
  });

  console.log('✨ CV Portfolio page loaded successfully');
})();
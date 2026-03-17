/* ═══════════════════════════════════════════
   CV — Manuel Esteban Guzmán Gómez
   script.js
═══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Intersection Observer for fade-in animations ── */
  function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const delay = parseInt(el.dataset.delay || '0', 10);

          setTimeout(() => {
            el.classList.add('is-visible');
          }, delay);

          observer.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* ── Animate progress bars (language & skill bars) ── */
  function initProgressBars() {
    const bars = document.querySelectorAll(
      '.lang-item__fill, .skill-bar-item__fill'
    );
    if (!bars.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    bars.forEach((bar) => observer.observe(bar));
  }

  /* ── Staggered timeline dots pulse on entry ── */
  function initTimelineDots() {
    const items = document.querySelectorAll('.timeline__item');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const dot = entry.target.querySelector('.timeline__dot');
          if (!dot) return;

          dot.style.transition = 'transform .35s cubic-bezier(.34,1.56,.64,1), border-color .35s';
          dot.style.transform = 'scale(1.5)';
          dot.style.borderColor = '#d4b97a';

          setTimeout(() => {
            dot.style.transform = 'scale(1)';
          }, 350);

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.8 }
    );

    items.forEach((item) => observer.observe(item));
  }

  /* ── Skill tag hover ripple ── */
  function initSkillTagRipple() {
    const tags = document.querySelectorAll('.skill-tag');

    tags.forEach((tag) => {
      tag.addEventListener('mouseenter', () => {
        tag.style.transition = 'background .2s, border-color .2s, transform .15s';
        tag.style.transform = 'translateY(-1px)';
      });
      tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0)';
      });
    });
  }

  /* ── Tech tags pop in on exp-card hover ── */
  function initExpCardHover() {
    const cards = document.querySelectorAll('.exp-card');

    cards.forEach((card) => {
      const tags = card.querySelectorAll('.exp-card__tags span');

      card.addEventListener('mouseenter', () => {
        tags.forEach((tag, i) => {
          tag.style.transition = `transform .22s ${i * 40}ms, background .2s, border-color .2s`;
          tag.style.transform = 'translateY(-2px)';
          tag.style.background = '#f9f6f1';
          tag.style.borderColor = '#b89a5e';
          tag.style.color = '#b89a5e';
        });
      });

      card.addEventListener('mouseleave', () => {
        tags.forEach((tag) => {
          tag.style.transform = 'translateY(0)';
          tag.style.background = '';
          tag.style.borderColor = '';
          tag.style.color = '';
        });
      });
    });
  }

  /* ── Contact items subtle lift ── */
  function initContactHover() {
    const items = document.querySelectorAll('a.contact-item');

    items.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        item.style.transition = 'color .2s, transform .2s';
        item.style.transform = 'translateY(-1px)';
      });
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
      });
    });
  }

  /* ── Print button (optional — auto-injects if needed) ── */
  function initPrintButton() {
    // Allows keyboard shortcut Ctrl+P / Cmd+P to work natively.
    // Optionally, you can inject a floating print button here.
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        // Let the browser handle it — our @media print CSS takes care of styling.
      }
    });
  }

  /* ── Boot ── */
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initProgressBars();
    initTimelineDots();
    initSkillTagRipple();
    initExpCardHover();
    initContactHover();
    initPrintButton();
  });
})();
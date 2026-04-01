/* =====================================================
   TechStack Comparisons — main.js
   ===================================================== */

(function () {
  'use strict';

  /* ---- Tab navigation ---- */
  const navBtns   = document.querySelectorAll('.nav-btn');
  const sections  = document.querySelectorAll('.section');
  const hero      = document.getElementById('hero');

  function showSection(id) {
    sections.forEach(s => s.classList.remove('active'));
    navBtns.forEach(b => b.classList.remove('active'));

    const target = document.getElementById(id);
    if (target) target.classList.add('active');

    const btn = document.querySelector(`.nav-btn[data-target="${id}"]`);
    if (btn) btn.classList.add('active');

    if (id !== 'home') {
      hero.style.display = 'none';
    } else {
      hero.style.display = '';
      sections.forEach(s => s.classList.remove('active'));
    }

    // Close mobile nav
    closeMobileNav();

    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#' + id);
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target) showSection(target);
    });
  });

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav   = document.getElementById('main-nav');
  const overlay   = document.getElementById('nav-overlay');

  function openMobileNav() {
    mainNav.classList.add('open');
    if (overlay) overlay.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mainNav.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  // Close nav when clicking the overlay
  if (overlay) {
    overlay.addEventListener('click', closeMobileNav);
  }

  // Close nav on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) {
      closeMobileNav();
      navToggle.focus();
    }
  });

  // Close nav when resizing into desktop layout to avoid stuck scroll lock
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mainNav.classList.contains('open')) {
      closeMobileNav();
    }
  });

  /* ---- Inner tabs within sections ---- */
  document.querySelectorAll('.inner-tabs').forEach(tabBar => {
    tabBar.querySelectorAll('.inner-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const group = tab.closest('.inner-tab-group');
        group.querySelectorAll('.inner-tab').forEach(t => t.classList.remove('active'));
        group.querySelectorAll('.inner-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const panel = group.querySelector('#' + tab.dataset.panel);
        if (panel) panel.classList.add('active');
      });
    });
  });

  /* ---- Back-to-top ---- */
  const backTop = document.getElementById('back-top');
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 300);
  });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---- Animate score bars on visibility ---- */
  const fills = document.querySelectorAll('.score-fill');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.dataset.width || '0%';
        io.unobserve(el);
      }
    });
  }, { threshold: 0.2 });
  fills.forEach(el => {
    const w = el.style.width;
    el.dataset.width = w;
    el.style.width = '0%';
    io.observe(el);
  });

  /* ---- Hash routing on load ---- */
  const hash = location.hash.replace('#', '');
  if (hash && document.getElementById(hash) && hash !== 'home') {
    showSection(hash);
  }
})();

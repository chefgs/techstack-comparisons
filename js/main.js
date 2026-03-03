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
    document.getElementById('main-nav').classList.remove('open');
    document.getElementById('nav-toggle').setAttribute('aria-expanded', 'false');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#' + id);
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      showSection(target);
    });
  });

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('nav-toggle');
  navToggle.addEventListener('click', () => {
    const nav = document.getElementById('main-nav');
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
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

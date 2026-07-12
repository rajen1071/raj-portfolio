document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
          const navMenu = document.getElementById('navMenu');
          if (navMenu.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
          }
        }
      }
    });
  });

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });

    // Navbar shadow on scroll
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  // ===== Scroll reveal animations =====
  const revealSelectors = [
    '.skill-card', '.project-card', '.auto-card', '.cert-card',
    '.exp-tab-btn', '.code-card', '.stat-item', '.timeline-item'
  ];
  const revealEls = document.querySelectorAll(revealSelectors.join(','));

  revealEls.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ===== Stat count-up animation =====
  const statHeadings = document.querySelectorAll('.stat-item h3');

  function animateCount(el) {
    const raw = el.textContent.trim();
    const match = raw.match(/^([\d.]+)(.*)$/);
    if (!match) return;

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isDecimal = match[1].includes('.');
    const duration = 1200;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = (isDecimal ? value.toFixed(1) : Math.round(value)) + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = raw;
      }
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window && statHeadings.length) {
    const statsBar = document.querySelector('.stats-bar');
    const statObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          statHeadings.forEach(animateCount);
          obs.disconnect();
        }
      });
    }, { threshold: 0.4 });

    if (statsBar) statObserver.observe(statsBar);
  }

  // ===== Certificate modal =====
  const certModal = document.getElementById('certModal');
  if (certModal) {
    certModal.addEventListener('show.bs.modal', function (event) {
      const trigger = event.relatedTarget;
      if (!trigger) return;
      const img = trigger.getAttribute('data-img');
      const title = trigger.getAttribute('data-title');
      const sub = trigger.getAttribute('data-sub');

      certModal.querySelector('#certModalImg').src = img;
      certModal.querySelector('#certModalTitle').textContent = title;
      certModal.querySelector('#certModalSub').textContent = sub;
    });
  }

  // ===== Work Experience tabs =====
  const expTabBtns = document.querySelectorAll('.exp-tab-btn');
  const expPanels = document.querySelectorAll('.exp-panel');

  expTabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = btn.getAttribute('data-target');

      expTabBtns.forEach(function (b) { b.classList.remove('active'); });
      expPanels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
});
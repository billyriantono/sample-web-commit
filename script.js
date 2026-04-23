/**
 * RheaOS Landing Page Scripts
 */

(function () {
  'use strict';

  /* ============================================================
     NAVBAR SCROLL EFFECT
  ============================================================ */
  const navbar = document.getElementById('mainNav');
  if (navbar) {
    const updateNavbar = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
  }

  /* ============================================================
     CLOSE MOBILE NAV ON LINK CLICK
  ============================================================ */
  document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.querySelector('.navbar-collapse.show');
      if (collapse && typeof bootstrap !== 'undefined') {
        bootstrap.Collapse.getOrCreateInstance(collapse).hide();
      }
    });
  });

  /* ============================================================
     REVEAL ANIMATIONS (Intersection Observer)
  ============================================================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  /* ============================================================
     ANIMATED COUNTERS
  ============================================================ */
  const animateCount = (el, target) => {
    const duration = parseInt(el.dataset.duration) || 2000;
    const suffix = el.dataset.suffix || '';
    const startTime = performance.now();

    const isFloat = String(target).includes('.');
    const decimalPlaces = isFloat ? (String(target).split('.')[1] || '').length : 0;

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;

      if (isFloat) {
        el.textContent = value.toFixed(decimalPlaces) + suffix;
      } else {
        el.textContent = Math.round(value) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.dataset.counter);
        if (!isNaN(target)) {
          animateCount(entry.target, target);
        }
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => {
    counterObserver.observe(el);
  });

  /* ============================================================
     PARALLAX ORBS ON MOUSE MOVE
  ============================================================ */
  const orbs = document.querySelectorAll('[data-parallax]');
  if (orbs.length > 0) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);

      orbs.forEach(orb => {
        const strength = parseFloat(orb.dataset.parallax) || 12;
        orb.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
    }, { passive: true });
  }

  /* ============================================================
     DOWNLOAD PROGRESS SIMULATION
  ============================================================ */
  document.querySelectorAll('.simulate-download').forEach(button => {
    button.addEventListener('click', function () {
      const panel = this.closest('.download-platform') || this.closest('.download-panel');
      const progress = panel ? panel.querySelector('.progress-sim') : null;
      const bar = progress ? progress.querySelector('.bar') : null;
      const platform = this.dataset.platform || 'file';
      let value = 0;

      // Disable button and show preparing state
      this.disabled = true;
      this.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Menyiapkan ${platform}...`;

      if (progress) {
        progress.style.display = 'block';
        bar.style.width = '0%';
      }

      const timer = setInterval(() => {
        value += Math.floor(Math.random() * 18) + 8;
        if (value >= 100) {
          value = 100;
          clearInterval(timer);
          if (bar) bar.style.width = '100%';
          setTimeout(() => {
            this.innerHTML = `<i class="bi bi-check-circle me-2"></i>Download Siap`;
          }, 250);
        } else {
          if (bar) bar.style.width = value + '%';
        }
      }, 260);
    });
  });

  /* ============================================================
     NEWSLETTER FORM
  ============================================================ */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMessage = document.getElementById('newsletterMessage');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailInput = document.getElementById('newsletterEmail');
      const email = emailInput ? emailInput.value.trim() : '';
      const submitBtn = this.querySelector('button[type="submit"]');

      if (!email) return;

      // Disable button and show sending state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Mengirim...';
      }

      if (newsletterMessage) {
        newsletterMessage.textContent = '';
      }

      // Simulate API call
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="bi bi-send me-2"></i>Gabung';
        }

        if (newsletterMessage) {
          newsletterMessage.textContent = `Terima kasih! ${email} berhasil ditambahkan ke newsletter RheaOS.`;
          newsletterMessage.style.color = '#7dd3fc';
        }

        if (emailInput) emailInput.value = '';
      }, 1100);
    });
  }

})();
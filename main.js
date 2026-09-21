/**
 * ========================================================
 * CircuitHubs Technologies PVT LTD - Main Script
 * ========================================================
 * Dynamically loads content from Assets/data.js and handles
 * interactive features (loader, navigation, scrolling).
 */

document.addEventListener('DOMContentLoaded', () => {

  // ======================================================
  // 1. RENDER SITE CONTENT FROM Assets/data.js
  // ======================================================
  function loadContent() {
    const data = window.SITE_DATA;
    if (!data) {
      hideLoader();
      return;
    }

    // Helper functions for safe element updates
    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el && text) el.textContent = text;
    };

    const setHtml = (id, html) => {
      const el = document.getElementById(id);
      if (el && html) el.innerHTML = html;
    };

    // 1.1 Render Hero Section
    if (data.hero) {
      setHtml('hero-label', data.hero.labelHtml);
      setHtml('hero-title', data.hero.titleHtml);
      setText('hero-desc', data.hero.description);
      if (data.hero.primaryButtonText) {
        setHtml('hero-primary-btn', `${data.hero.primaryButtonText} <i class="fas fa-arrow-right"></i>`);
      }
      if (data.hero.secondaryButtonText) {
        setText('hero-secondary-btn', data.hero.secondaryButtonText);
      }
      const heroImg = document.getElementById('hero-img');
      if (heroImg && data.hero.heroImage) {
        heroImg.src = data.hero.heroImage;
      }
    }

    // 1.2 Render About Us Section
    if (data.aboutUs) {
      setHtml('about-title', data.aboutUs.titleHtml);
      const aboutContent = document.getElementById('about-content');
      if (aboutContent && Array.isArray(data.aboutUs.paragraphs)) {
        aboutContent.innerHTML = data.aboutUs.paragraphs
          .map(p => `<p>${p}</p>`)
          .join('');
      }
    }

    // 1.3 Render Services Grid (7 Services)
    if (data.services) {
      setText('services-label', data.services.label);
      setHtml('services-title', data.services.titleHtml);
      setText('services-subtitle', data.services.subtitle);

      const servicesGrid = document.getElementById('services-grid');
      if (servicesGrid && Array.isArray(data.services.cards)) {
        servicesGrid.innerHTML = data.services.cards.map((card, idx) => `
          <div class="expertise-card ${card.colorClass || `card-color-${idx + 1}`}">
            <div class="expertise-top">
              <div class="expertise-icon"><i class="${card.icon || 'fas fa-cogs'}"></i></div>
            </div>
            <h3>${card.title || ''}</h3>
            <p>${card.description || ''}</p>
            <a href="${card.href || '#contact'}" class="read-more">Read More <i class="fas fa-angle-double-right"></i></a>
          </div>
        `).join('');
      }
    }

    // 1.4 Render Team Members Grid
    if (data.team) {
      setText('team-label', data.team.label);
      setHtml('team-title', data.team.titleHtml);
      setHtml('team-subtitle', data.team.subtitle);

      const teamGrid = document.getElementById('team-grid');
      if (teamGrid && Array.isArray(data.team.members)) {
        teamGrid.innerHTML = data.team.members.map(member => {
          // Render social buttons if provided
          const socialsHtml = Array.isArray(member.socials) && member.socials.length > 0
            ? `<div class="leader-socials">
                ${member.socials.map(s => `
                  <a href="${s.href || '#'}" class="leader-social-btn" title="${s.title || ''}">
                    <i class="${s.icon || 'fas fa-link'}"></i>
                  </a>
                `).join('')}
               </div>`
            : '';

          // Render email row if provided
          const emailHtml = member.email
            ? `<div class="leader-email-row">
                <span class="leader-email-icon teal-icon"><i class="fas fa-envelope"></i></span>
                <a href="mailto:${member.email}" class="leader-email-text">${member.email}</a>
               </div>`
            : '';

          // Render member photo
          const photoHtml = member.image
            ? `<div class="leader-photo-wrap">
                <img src="${member.image}" alt="${member.name || 'Team member'}" class="leader-photo">
               </div>`
            : '';

          return `
            <div class="leader-card leader-card-${member.theme || 'teal'}">
              <div class="leader-accent-bar"></div>
              ${photoHtml}
              <div class="leader-info">
                <h3 class="leader-name">${member.name || ''}</h3>
                <p class="leader-title">${member.title || ''}</p>
                <div class="leader-divider"></div>
                ${emailHtml}
                ${socialsHtml}
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // 1.5 Render Footer Section
    if (data.footer) {
      setText('footer-vision-title', data.footer.visionTitle);
      setText('footer-vision-text', data.footer.visionText);
      setText('footer-our-mission-title', data.footer.ourMissionTitle);
      setText('footer-our-mission-text', data.footer.ourMissionText);
      setText('footer-mission-title', data.footer.missionTitle);
      setText('footer-follow-title', data.footer.followTitle);
      setHtml('footer-copyright', data.footer.copyrightHtml);

      // Contact links list
      const missionList = document.getElementById('footer-mission-list');
      if (missionList && Array.isArray(data.footer.missionContacts)) {
        missionList.innerHTML = data.footer.missionContacts.map(item => `
          <a href="${item.href || '#'}" class="mission-contact-item"${item.targetBlank ? ' target="_blank"' : ''}>
            <i class="${item.icon || 'fas fa-chevron-right'}"></i>
            <span>${item.text || ''}</span>
          </a>
        `).join('');
      }

      // Footer social media icons
      const footerSocials = document.getElementById('footer-socials');
      if (footerSocials && Array.isArray(data.footer.socialLinks)) {
        footerSocials.innerHTML = data.footer.socialLinks.map(s => `
          <a href="${s.href || '#'}" class="social-btn" title="${s.title || ''}">
            <i class="${s.icon || 'fas fa-link'}"></i>
          </a>
        `).join('');
      }

      // Bottom footer links
      const footerLinks = document.getElementById('footer-bottom-links');
      if (footerLinks && Array.isArray(data.footer.bottomLinks)) {
        footerLinks.innerHTML = data.footer.bottomLinks.map((link, idx) => `
          <a href="${link.href || '#'}">${link.label || ''}</a>
          ${idx < data.footer.bottomLinks.length - 1 ? '<span>|</span>' : ''}
        `).join('');
      }
    }

    // Attach animation observers and card tilt
    observeFadeElements();
    initCardTilt();
    hideLoader();
  }

  // ======================================================
  // 2. PAGE LOADER
  // ======================================================
  function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 600);
    }
  }

  // Loader safety timeout (max 2 seconds)
  setTimeout(hideLoader, 2000);

  // ======================================================
  // 3. SCROLL PROGRESS & NAVBAR STYLING
  // ======================================================
  const scrollProgress = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Update scroll progress bar
    if (scrollProgress && totalHeight > 0) {
      scrollProgress.style.width = `${(scrollY / totalHeight) * 100}%`;
    }

    // Toggle solid background on navbar when scrolled
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 50);
    }
  }, { passive: true });

  // ======================================================
  // 4. MOBILE NAVIGATION DRAWER
  // ======================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  function toggleMobileMenu(isOpen) {
    if (!mobileMenu || !mobileMenuBtn) return;
    const open = typeof isOpen === 'boolean' ? isOpen : !mobileMenu.classList.contains('active');
    mobileMenu.classList.toggle('active', open);
    mobileMenuBtn.classList.toggle('open', open);
    mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(false));
    });

    // Close menu with ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggleMobileMenu(false);
    });
  }

  // ======================================================
  // 5. SMOOTH SCROLLING FOR NAVIGATION LINKS
  // ======================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 75,
          behavior: 'smooth'
        });
      }
    });
  });

  // ======================================================
  // 6. SCROLL FADE-IN ANIMATIONS
  // ======================================================
  let fadeObserver;
  function observeFadeElements() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      return;
    }

    if (fadeObserver) fadeObserver.disconnect();

    fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in:not(.visible), .expertise-card, .leader-card').forEach(el => {
      fadeObserver.observe(el);
    });
  }

  // ======================================================
  // 7. BACK TO TOP BUTTON
  // ======================================================
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.pageYOffset > 300);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ======================================================
  // 8. CARD TILT INTERACTION
  // ======================================================
  function initCardTilt() {
    document.querySelectorAll('.expertise-card, .leader-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
        card.style.transform = `translateY(-6px) rotateX(${-y}deg) rotateY(${x}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // Start loading data
  loadContent();
  observeFadeElements();
});
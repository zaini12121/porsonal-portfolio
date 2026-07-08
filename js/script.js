document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  // PAGE PROGRESS BAR
  // ============================================================
  const progressBar = document.createElement("div");
  progressBar.className = "page-progress";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop    = window.scrollY;
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + "%";
  });

  // ============================================================
  // CUSTOM CURSOR
  // ============================================================
  const cursorDot  = document.createElement("div");
  const cursorRing = document.createElement("div");
  cursorDot.className  = "cursor-dot";
  cursorRing.className = "cursor-ring";
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top  = mouseY + "px";
  });

  // Smooth ring follow
  function animateCursor() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + "px";
    cursorRing.style.top  = ringY + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effect on interactive elements
  const hoverEls = document.querySelectorAll("a, button, .project-card, .skills-card, .highlight-card, .timeline-card, .social-btn");
  hoverEls.forEach(el => {
    el.addEventListener("mouseenter", () => cursorRing.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursorRing.classList.remove("hover"));
  });



  // ============================================================
  // SPLASH SCREEN
  // ============================================================
  const splash = document.getElementById("splash-screen");
  if (splash) {
    setTimeout(() => {
      splash.classList.add("fade-out");
      setTimeout(() => splash.remove(), 700);
    }, 2600);
  }

  // ============================================================
  // TYPEWRITER EFFECT
  // ============================================================
  const roles = [
    "AI & Data Science Student",
    "AI-Driven Developer",
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
    "Vibe Coder",
    "Full-Stack Developer"
  ];
  let roleIdx = 0, charIdx = 0, currentWord = "", isDeleting = false;
  const typingTextEl = document.querySelector(".typing-text");

  function typeWriter() {
    if (!typingTextEl) return;
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      currentWord = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      currentWord = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    typingTextEl.textContent = currentWord;
    let typeSpeed = isDeleting ? 35 : 70;

    if (!isDeleting && currentWord === currentRole) {
      typeSpeed = 1400;
      isDeleting = true;
    } else if (isDeleting && currentWord === "") {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 300;
    }
    setTimeout(typeWriter, typeSpeed);
  }
  setTimeout(typeWriter, 500);

  // ============================================================
  // FLOATING BACKGROUND PARTICLES
  // ============================================================
  const particleContainer = document.querySelector(".particle-container");
  if (particleContainer) {
    const numParticles = 18;
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("span");
      particle.classList.add("particle");

      const left     = (i * 37) % 100;
      const delay    = (i % 7) * 0.6;
      const duration = 8 + (i % 5) * 2;
      const size     = 3 + (i % 4) * 2;

      particle.style.cssText = `left:${left}%;width:${size}px;height:${size}px;animation-delay:${delay}s;animation-duration:${duration}s;`;
      particleContainer.appendChild(particle);
    }
  }

  // ============================================================
  // HEADER SCROLL STATE
  // ============================================================
  const header = document.querySelector("header");
  function handleScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // ============================================================
  // SCROLL REVEAL — IntersectionObserver
  // ============================================================
  // Auto-add reveal classes to elements
  const revealTargets = [
    { selector: "#about .about-image-container",    classes: "reveal reveal-left" },
    { selector: "#about .about-text-container",     classes: "reveal reveal-right" },
    { selector: "#about .highlight-card",           classes: "reveal reveal-scale" },
    { selector: ".section-tag",                     classes: "reveal" },
    { selector: ".section-title",                   classes: "reveal delay-1" },
    { selector: ".section-desc",                    classes: "reveal delay-2" },
    { selector: ".skills-card",                     classes: "reveal reveal-scale" },
    { selector: ".project-card",                    classes: "reveal" },
    { selector: ".timeline-item",                   classes: "reveal reveal-left" },
    { selector: ".contact-card",                    classes: "reveal reveal-scale" },
    { selector: ".hero-badge",                      classes: "reveal" },
    { selector: ".hero-title",                      classes: "reveal delay-1" },
    { selector: ".typing-container",                classes: "reveal delay-2" },
    { selector: ".hero-description",                classes: "reveal delay-3" },
    { selector: ".hero-buttons",                    classes: "reveal delay-4" },
    { selector: ".hero-stats",                      classes: "reveal delay-5" },
  ];

  revealTargets.forEach(({ selector, classes }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      classes.split(" ").forEach(c => el.classList.add(c));
      // Add stagger delay for grid items
      if (["skills-card","project-card","highlight-card"].some(s => selector.includes(s))) {
        el.style.transitionDelay = (i * 0.1) + "s";
      }
      if (selector.includes("timeline-item")) {
        el.style.transitionDelay = (i * 0.15) + "s";
      }
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  // ============================================================
  // MOBILE MENU TOGGLE
  // ============================================================
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-links a");

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
    
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    }

    mobileMenuLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });
  }

  // ============================================================
  // ACTIVE NAV LINKS (IntersectionObserver)
  // ============================================================
  const sections  = document.querySelectorAll("section[id]");
  const navLinks  = document.querySelectorAll(".nav-links a, .mobile-menu-links a");

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-20% 0px -60% 0px", threshold: 0 });

  sections.forEach(s => navObserver.observe(s));

  // ============================================================
  // PROJECT CARD — RIPPLE EFFECT ON CLICK
  // ============================================================
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", function (e) {
      const rect   = this.getBoundingClientRect();
      const circle = document.createElement("span");
      circle.className = "ripple-circle";
      const size = Math.max(rect.width, rect.height) * 2;
      circle.style.cssText = `
        width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top - size/2}px;
      `;
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });

    // 3D tilt on mouse move
    card.addEventListener("mousemove", function (e) {
      const rect   = this.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      const tiltX  = ((e.clientY - centerY) / (rect.height / 2)) * 5;
      const tiltY  = -((e.clientX - centerX) / (rect.width  / 2)) * 5;
      this.style.transform = `translateY(-12px) scale(1.02) perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });

  // ============================================================
  // SKILLS CARD — staggered item reveal on card hover
  // ============================================================
  document.querySelectorAll(".skills-card").forEach(card => {
    const items = card.querySelectorAll(".skills-item");
    card.addEventListener("mouseenter", () => {
      items.forEach((item, i) => {
        item.style.transitionDelay = (i * 0.05) + "s";
        item.style.opacity = "1";
        item.style.transform = "translateX(4px)";
      });
    });
    card.addEventListener("mouseleave", () => {
      items.forEach(item => {
        item.style.transitionDelay = "0s";
        item.style.opacity = "";
        item.style.transform = "";
      });
    });
  });

  // ============================================================
  // COUNTER ANIMATION for hero stats
  // ============================================================
  const statNumbers = document.querySelectorAll(".stat-number");
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "countUp 0.8s ease backwards";
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => counterObserver.observe(el));

  // ============================================================
  // MAGNETIC EFFECT on social buttons
  // ============================================================
  document.querySelectorAll(".social-btn").forEach(btn => {
    btn.addEventListener("mousemove", function (e) {
      const rect    = this.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width  / 2);
      const offsetY = e.clientY - (rect.top  + rect.height / 2);
      this.style.transform = `translate(${offsetX * 0.3}px, ${offsetY * 0.3 - 6}px) scale(1.1)`;
    });
    btn.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });

  // ============================================================
  // TOAST NOTIFICATION
  // ============================================================
  const toastContainer  = document.getElementById("toast");
  const toastMessage    = document.getElementById("toast-message");
  const toastIconSuccess = document.querySelector(".toast-success-icon");
  const toastIconError   = document.querySelector(".toast-error-icon");

  function showToast(message, type = "success") {
    if (!toastContainer || !toastMessage) return;
    toastMessage.textContent = message;
    toastContainer.className = `custom-toast ${type} show`;
    if (type === "success") {
      toastIconSuccess.style.display = "block";
      toastIconError.style.display   = "none";
    } else {
      toastIconSuccess.style.display = "none";
      toastIconError.style.display   = "block";
    }
    setTimeout(() => toastContainer.classList.remove("show"), 3000);
  }

  // ============================================================
  // CONTACT FORM
  // ============================================================
  const contactForm = document.getElementById("contact-form");
  const submitBtn   = document.getElementById("submit-btn");

  if (contactForm && submitBtn) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name    = document.getElementById("form-name").value.trim();
      const email   = document.getElementById("form-email").value.trim();
      const message = document.getElementById("form-message").value.trim();

      if (name.length < 2) {
        showToast("Name must be at least 2 characters.", "error");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast("Please enter a valid email address.", "error");
        return;
      }
      if (message.length < 10) {
        showToast("Message must be at least 10 characters.", "error");
        return;
      }

      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending... <svg style="display:inline-block;animation:spin 1s linear infinite;margin-left:.25rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>';

      if (!document.getElementById("spin-animation-style")) {
        const style = document.createElement("style");
        style.id = "spin-animation-style";
        style.textContent = "@keyframes spin { 100% { transform: rotate(360deg); } }";
        document.head.appendChild(style);
      }

      const formData = new FormData();
      formData.append("access_key", "66800f8e-e641-4519-8c1b-170e662560d6"); 
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      .then(async (response) => {
        if (response.status == 200) {
          showToast("Message sent successfully!", "success");
          contactForm.reset();
        } else {
          showToast("Something went wrong!", "error");
        }
      })
      .catch(error => {
        showToast("Something went wrong!", "error");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
    });
  }

  // ============================================================
  // FOOTER YEAR
  // ============================================================
  const footerYear = document.getElementById("footer-year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  // ============================================================
  // PARALLAX on hero orbs (subtle)
  // ============================================================
  const heroOrbs = document.querySelectorAll(".hero-orbs .orb");
  window.addEventListener("mousemove", (e) => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    heroOrbs.forEach((orb, i) => {
      const depth = (i + 1) * 12;
      orb.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
    });
  });

  // ============================================================
  // FLOATING SOCIAL VISIBILITY
  // ============================================================
  const floatingSocial = document.querySelector(".floating-social");
  const homeSection = document.getElementById("home");
  if (floatingSocial && homeSection) {
    const socialObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          floatingSocial.classList.remove("hidden-social");
        } else {
          floatingSocial.classList.add("hidden-social");
        }
      });
    }, { threshold: 0.1 });
    socialObserver.observe(homeSection);
  }

  // ============================================================
  // POLICY MODALS
  // ============================================================
  const policies = {
    privacy: {
      title: "Privacy Policy",
      content: "Your privacy is important to us. This portfolio collects minimal data necessary for communication purposes only. No third-party tracking or advertising cookies are used. Any information submitted via the contact form is kept strictly confidential."
    },
    terms: {
      title: "Terms of Service",
      content: "By using this website, you agree to interact respectfully. The content provided here is for informational and portfolio demonstration purposes. The projects showcased are intellectual property and may not be copied without permission."
    },
    cookie: {
      title: "Cookie Policy",
      content: "This website uses essential cookies only to ensure you get the best experience, such as remembering your preferences. We do not use advertising or tracking cookies. By continuing to use the site, you agree to this."
    }
  };

  const policyLinks = document.querySelectorAll(".policy-link");
  const policyModal = document.getElementById("policy-modal");
  
  if (policyModal) {
    const policyModalTitle = document.getElementById("policy-modal-title");
    const policyModalContent = document.getElementById("policy-modal-content");
    const policyModalClose = document.querySelector(".policy-modal-close");
    const policyModalBackdrop = document.querySelector(".policy-modal-backdrop");

    policyLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const type = link.getAttribute("data-policy");
        if (policies[type]) {
          policyModalTitle.textContent = policies[type].title;
          policyModalContent.textContent = policies[type].content;
          policyModal.classList.add("active");
        }
      });
    });

    const closeModal = () => policyModal.classList.remove("active");
    if (policyModalClose) policyModalClose.addEventListener("click", closeModal);
    if (policyModalBackdrop) policyModalBackdrop.addEventListener("click", closeModal);
  }

  // ============================================================
  // 3D SHOWCASE CAROUSEL
  // ============================================================
  const projectsData = [
    {
      title: "Paper GenAI",
      description: "An AI-powered tool designed to streamline document and paper generation using advanced language models.",
      image: "assets/paper-genai.png",
      liveLink: "https://paper-genai.vercel.app",
      githubLink: "#",
      status: "Live"
    },
    {
      title: "Speed Lab",
      description: "A feature-rich typing speed testing and network diagnostic tool built for performance tracking.",
      image: "assets/speed lab.png",
      liveLink: "https://speed-lab.vercel.app",
      githubLink: "#",
      status: "Live"
    },
    {
      title: "Zainulabdin Project",
      description: "Modern personal project showcase and portfolio with interactive UI and animations.",
      image: "assets/portfolio-preview.webp",
      liveLink: "https://zainulabdin-project.vercel.app",
      githubLink: "#",
      status: "Live"
    },
    {
      title: "Student Portal",
      description: "Dual-role login (Admin & Student) with separate dashboards, attendance system, monthly fee tracker (paid/unpaid).",
      image: "assets/portfolio-preview.webp",
      liveLink: "#",
      githubLink: "https://github.com/zaini12121",
      status: "Private Code"
    },
    {
      title: "QR Menu System",
      description: "Customers scan a QR code to open a digital restaurant menu, place online orders and book tables.",
      image: "assets/portfolio-preview.webp",
      liveLink: "#",
      githubLink: "https://github.com/zaini12121",
      status: "Private Code"
    }
  ];

  const track = document.getElementById('card-track');
  const dotsContainer = document.getElementById('carousel-dots');

  if (track) {
    let currentIndex = 0;

    function initCarousel() {
      track.innerHTML = '';
      projectsData.forEach((project, i) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'tilt-card-wrapper';
        wrapper.dataset.index = i;
        
        wrapper.addEventListener('click', () => {
          if (currentIndex !== i) {
             changeSlide(i);
          }
        });

        wrapper.addEventListener('mousemove', (e) => {
          if (currentIndex !== i) return;
          wrapper.style.transition = 'none';
          const rect = wrapper.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const mouseX = e.clientX - centerX;
          const mouseY = e.clientY - centerY;
          const rotateX = (mouseY / (rect.height / 2)) * -15;
          const rotateY = (mouseX / (rect.width / 2)) * 15;
          wrapper.style.transform = `translateX(0) scale(1) translateZ(50px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        wrapper.addEventListener('mouseleave', () => {
          if (currentIndex !== i) return;
          wrapper.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.6s ease, opacity 0.6s ease';
          wrapper.style.transform = `translateX(0) scale(1) translateZ(50px) rotateX(0deg) rotateY(0deg)`;
        });

        const liveBtnHtml = project.liveLink !== "#" ? `<a href="${project.liveLink}" target="_blank" class="btn-live" onclick="event.stopPropagation()">Live Demo</a>` : '';
        const gitBtnHtml = project.githubLink !== "#" ? `<a href="${project.githubLink}" target="_blank" class="btn-git" onclick="event.stopPropagation()">Git Code</a>` : '';
        
        wrapper.innerHTML = `
          <article class="project-card glass glow-border project-carousel-card">
            <div class="project-image-wrapper">
              <img src="${project.image}" alt="${project.title}" class="project-img" style="width: 100%; height: 100%; object-fit: cover; border-top-left-radius: inherit; border-top-right-radius: inherit;">
              <span class="project-status glass" style="position: absolute; top: 1rem; right: 1rem; padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.75rem;">✓ ${project.status}</span>
              <div class="project-image-gradient" style="position: absolute; inset: 0; background: linear-gradient(to top, hsl(150 20% 8%), transparent);"></div>
            </div>
            <div class="card-body">
              <h3 class="card-title text-gradient" style="margin-bottom: 0.5rem; font-size: 1.5rem; font-weight: 700;">${project.title}</h3>
              <p class="card-desc text-muted" style="font-size: 0.9rem; line-height: 1.5;">${project.description}</p>
              <div class="card-actions" style="display: flex; justify-content: space-between; gap: 1rem; margin-top: 1rem;">
                ${liveBtnHtml}
                ${gitBtnHtml}
              </div>
            </div>
          </article>
        `;
        track.appendChild(wrapper);
      });
      createDots();
      updateCarousel();
    }

    function updateCarousel() {
      const cards = track.querySelectorAll('.tilt-card-wrapper');
      cards.forEach((card, i) => {
        const offset = i - currentIndex;
        
        if (offset === 0) {
          card.style.transform = `translateX(0) scale(1) translateZ(50px) rotateX(0deg) rotateY(0deg)`;
          card.style.filter = `blur(0px)`;
          card.style.opacity = `1`;
          card.style.zIndex = `10`;
          card.style.pointerEvents = 'auto';
        } else {
          const direction = offset > 0 ? 1 : -1;
          const absOffset = Math.abs(offset);
          
          const isMobile = window.innerWidth <= 768;
          const baseOffset = isMobile ? 120 : 180;
          const multiOffset = isMobile ? 40 : 60;
          
          const translateX = direction * (baseOffset + absOffset * multiOffset); 
          const scale = Math.max(0.6, 1 - absOffset * 0.15);
          const zIndex = 10 - absOffset;
          const blur = absOffset * 4;
          const opacity = Math.max(0, 1 - absOffset * 0.4);
          const rotateY = direction * -20;

          card.style.transform = `translateX(${translateX}px) scale(${scale}) translateZ(${-absOffset * 80}px) rotateY(${rotateY}deg)`;
          card.style.filter = `blur(${blur}px)`;
          card.style.opacity = `${opacity}`;
          card.style.zIndex = `${zIndex}`;
          card.style.pointerEvents = 'auto';
        }
      });
      
      if (dotsContainer) {
        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }
    }

    function createDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      projectsData.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => changeSlide(index));
        dotsContainer.appendChild(dot);
      });
    }

    function changeSlide(newIndex) {
      if (newIndex < 0 || newIndex >= projectsData.length) return;
      currentIndex = newIndex;
      updateCarousel();
    }
    
    // Allow touch swiping
    let startX = 0;
    let endX = 0;
    track.addEventListener('touchstart', e => {
      startX = e.changedTouches[0].screenX;
    }, {passive: true});
    track.addEventListener('touchend', e => {
      endX = e.changedTouches[0].screenX;
      if (startX - endX > 50 && currentIndex < projectsData.length - 1) {
        changeSlide(currentIndex + 1);
      } else if (endX - startX > 50 && currentIndex > 0) {
        changeSlide(currentIndex - 1);
      }
    }, {passive: true});

    // Allow window resize to update layout
    window.addEventListener('resize', updateCarousel);

    initCarousel();
  }

});

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
  // BACK TO TOP BUTTON
  // ============================================================
  const backBtn = document.createElement("button");
  backBtn.className = "back-to-top";
  backBtn.setAttribute("aria-label", "Back to top");
  backBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`;
  document.body.appendChild(backBtn);

  window.addEventListener("scroll", () => {
    backBtn.classList.toggle("visible", window.scrollY > 400);
  });
  backBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

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
  // ACTIVE NAV LINKS (IntersectionObserver)
  // ============================================================
  const sections  = document.querySelectorAll("section[id]");
  const navLinks  = document.querySelectorAll(".nav-links a, .mobile-nav a");

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

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast("Message sent successfully!", "success");
      }, 1500);
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

});

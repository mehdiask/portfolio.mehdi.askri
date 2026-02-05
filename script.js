const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const icon = toggle.querySelector(".icon");
const text = toggle.querySelector(".text");

toggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme");

  if (theme === "light") {
    html.setAttribute("data-theme", "dark");
    icon.textContent = "☀️";
    text.textContent = "Normal";
  } else {
    html.setAttribute("data-theme", "light");
    icon.textContent = "🌙";
    text.textContent = "Dark";
  }
});

// ===== SECTION FADE-IN ANIMATION =====
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.30 }
);

sections.forEach(section => observer.observe(section));

// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===== MOBILE NAV ACTIVE LINK =====
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const sectionsMobile = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sectionsMobile.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  mobileLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// ===== MOBILE MENU =====
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

// ===== MOBILE THEME TOGGLE (SYNC) =====
const mobileThemeBtn = document.getElementById("theme-toggle-mobile");

if (mobileThemeBtn) {
  mobileThemeBtn.addEventListener("click", () => {
    toggle.click(); // reuse existing theme logic
  });
}

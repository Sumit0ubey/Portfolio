let typed = new Typed(".multuple-text", {
  strings: ["Backend Developer", "Python Developer", "Java Developer", "Android Developer", "Human"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu || !icon) return;
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

function setIcon(elId, lightSrc, darkSrc, isDark) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.src = isDark ? darkSrc : lightSrc;
}

function applyThemeIcons() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  setIcon("linkedin-1", "./resources/linkedin.png", "./resources/linkedIn-dark.png", isDark);
  setIcon("linkedin-2", "./resources/linkedin.png", "./resources/linkedIn-dark.png", isDark);
  setIcon("github", "./resources/github.png", "./resources/github-dark.png", isDark);
  setIcon("email", "./resources/email.png", "./resources/email-dark.png", isDark);
  setIcon("education", "./resources/education.png", "./resources/eduction-dark.png", isDark);

  // your achievement icons use experience.png in light mode
  setIcon("achivement-1", "./resources/experience.png", "./resources/achievement-dark.png", isDark);
  setIcon("achivement-2", "./resources/experience.png", "./resources/achievement-dark.png", isDark);
  setIcon("achivement-3", "./resources/experience.png", "./resources/achievement-dark.png", isDark);
}

// Apply on load
applyThemeIcons();

// Also update when user changes system theme while page is open
const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
if (themeMedia.addEventListener) {
  themeMedia.addEventListener("change", applyThemeIcons);
} else {
  // Safari fallback
  themeMedia.addListener(applyThemeIcons);
}
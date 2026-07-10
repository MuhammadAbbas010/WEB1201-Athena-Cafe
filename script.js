const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const header = document.querySelector("[data-header]");
const themeColor = document.querySelector('meta[name="theme-color"]');

const getTheme = () => root.dataset.theme === "dark" ? "dark" : "light";

function updateThemeControl() {
  const isDark = getTheme() === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  themeColor.setAttribute("content", isDark ? "#1d0907" : "#fbf8f0");
}

function setTheme(theme) {
  theme === "dark" ? root.dataset.theme = "dark" : delete root.dataset.theme;
  try { localStorage.setItem("athena-theme", theme); } catch (_) {}
  updateThemeControl();
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  mobileNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

themeToggle.addEventListener("click", () => setTheme(getTheme() === "dark" ? "light" : "dark"));
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  mobileNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});
mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
window.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
window.addEventListener("resize", () => { if (window.innerWidth > 920) closeMenu(); });
window.addEventListener("scroll", () => header.classList.toggle("is-fixed", window.scrollY > 260), { passive: true });
document.querySelector("[data-year]").textContent = new Date().getFullYear();
updateThemeControl();

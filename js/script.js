const pageRoot = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNavigation = document.querySelector("[data-mobile-nav]");
const siteHeader = document.querySelector("[data-header]");
const themeColourMeta = document.querySelector('meta[name="theme-color"]');

/** Returns the theme currently applied to the document. */
function getCurrentTheme() {
  return pageRoot.dataset.theme === "dark" ? "dark" : "light";
}

/** Keeps the toggle's spoken label and state synchronized with the page. */
function updateThemeControl() {
  const isDarkTheme = getCurrentTheme() === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDarkTheme));
  themeToggle.setAttribute(
    "aria-label",
    `Switch to ${isDarkTheme ? "light" : "dark"} theme`,
  );
  themeColourMeta.setAttribute("content", isDarkTheme ? "#1d0907" : "#fbf8f0");
}

/** Applies and saves a user-selected colour theme. */
function setTheme(theme) {
  if (theme === "dark") {
    pageRoot.dataset.theme = "dark";
  } else {
    delete pageRoot.dataset.theme;
  }

  try {
    localStorage.setItem("athena-theme", theme);
  } catch (error) {
    // The visual toggle still works when storage is blocked by the browser.
  }

  updateThemeControl();
}

/** Closes the mobile menu and removes hidden links from the tab order. */
function closeMobileMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  mobileNavigation.classList.remove("is-open");
  mobileNavigation.hidden = true;
  document.body.classList.remove("menu-open");
}

/** Opens the mobile navigation as an accessible, keyboard-reachable panel. */
function openMobileMenu() {
  mobileNavigation.hidden = false;
  mobileNavigation.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation");
  document.body.classList.add("menu-open");
}

themeToggle.addEventListener("click", () => {
  setTheme(getCurrentTheme() === "dark" ? "light" : "dark");
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeMobileMenu() : openMobileMenu();
});

mobileNavigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMobileMenu));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMobileMenu();
    menuToggle.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 920) closeMobileMenu();
});

window.addEventListener(
  "scroll",
  () => siteHeader.classList.toggle("is-fixed", window.scrollY > 260),
  { passive: true },
);

document.querySelector("[data-year]").textContent = new Date().getFullYear();
updateThemeControl();
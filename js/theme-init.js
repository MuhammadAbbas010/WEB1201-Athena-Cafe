/**
 * Applies a saved theme before the page is painted to prevent a flash of the
 * light theme when a returning visitor previously selected dark mode.
 */
(function initialiseSavedTheme() {
  try {
    if (localStorage.getItem("athena-theme") === "dark") {
      document.documentElement.dataset.theme = "dark";
    }
  } catch (error) {
    // Storage may be unavailable in strict privacy modes; light remains default.
  }
})();

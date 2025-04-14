// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const html = document.documentElement;

  // Check for saved dark mode preference
  if (
    localStorage.getItem("darkMode") === "true" ||
    (!localStorage.getItem("darkMode") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
  }

  // Toggle dark mode
  darkModeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("darkMode", html.classList.contains("dark"));
  });

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("darkMode")) {
        if (e.matches) {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }
      }
    });
});

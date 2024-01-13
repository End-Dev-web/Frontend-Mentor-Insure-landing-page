// Preloading
const preloading = document.querySelector("[preloading-animation]");

window.addEventListener("load", () => {
  preloading.classList.add("hide-loading");
});

// Sidebar

const primyNavigation = document.querySelector("[primary-navigation]");
const navToggle = document.querySelector("[mobile-nav-toggle]");

navToggle.addEventListener("click", () => {
  const visibility = primyNavigation.getAttribute("data-visible");

  if (visibility === "false") {
    primyNavigation.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    primyNavigation.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Fixed Nav
const navbar = document.querySelector("[fixed-nav]");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

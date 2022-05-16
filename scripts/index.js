const body = document.querySelector("body");
const header_logo = document.querySelector(".header_logo");
const footer_logo = document.querySelector(".footer_logo");
const sub_nav_btn = document.querySelector(".sub_nav_btn");
const sub_nav = document.querySelector(".sub_nav");
const theme_toggle = document.querySelector(".theme_toggle");
const search_bar = document.querySelector(".search_bar");
const nav_search_btn = document.querySelector(".nav_search_btn");
// theme fetch
window.onload = () => {
  const themeMode = localStorage.getItem("theme");
  themeMode === "dark"
    ? body.classList.add("dark")
    : body.classList.remove("dark");
  handleLogoChange();
  handleThemeIconChange();
};

//theme toggle
const handleThemeToggle = () => {
  body.classList.toggle("dark");
  body.classList.value === "dark"
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
  handleLogoChange();
  handleThemeIconChange();
};

const handleLogoChange = () => {
  body.classList.value === "dark"
    ? ((header_logo.src = "./assets/logo_dark.svg"),
      (footer_logo.src = "./assets/logo-big_dark.svg"))
    : ((header_logo.src = "./assets/logo.svg"),
      (footer_logo.src = "./assets/logo-big_light.svg"));
};

const handleThemeIconChange = () => {
  body.classList.value === "dark"
    ? (theme_toggle.src = "./assets/dark-icon.svg")
    : (theme_toggle.src = "./assets/light_icon.svg");
};

// sub nav toggle
const handleSubNavToggle = () => {
  sub_nav_btn.classList.toggle("active");
  sub_nav.classList.toggle("active");
};

function closeSubNav() {
  sub_nav.classList.remove("active");
  sub_nav_btn.classList.remove("active");
}
document.addEventListener("click", (e) => {
  !sub_nav_btn.contains(e.target) &&
    sub_nav.classList.contains("active") &&
    closeSubNav();
});

// search
const handleSearchBarToggle = () => {
  search_bar.classList.toggle("active");
  nav_search_btn.classList.toggle("active");
};

function closeSearch() {
  nav_search_btn.classList.remove("active");
  search_bar.classList.remove("active");
}

document.addEventListener("click", (e) => {
  if (
    !nav_search_btn.contains(e.target) &&
    search_bar.classList.contains("active") &&
    !search_bar.contains(e.target)
  ) {
    closeSearch();
  }
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1,
  navigation: {
    nextEl: ".slider_nav_next-btn",
    prevEl: ".slider_nav_prev-btn",
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
});

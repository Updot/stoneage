const body = document.querySelector("body");
const footer_logo = document.querySelector(".footer_logo");
const sub_nav_btn = document.querySelector(".sub_nav_btn");
const sub_nav = document.querySelector(".sub_nav");
const theme_toggle = document.querySelector(".theme_toggle");
const search_bar = document.querySelector(".search_bar");
const nav_search_btn = document.querySelector(".nav_search_btn");
const header_logo = document.querySelector(".header_logo");
const nav_item_logo = document.querySelector(".nav_item_logo");
const dropdown_btn = document.querySelector(".active-category");
const mob_dropdown = document.querySelector(".mob-nav_dropdown");
const desktopNavCategory = document.querySelector(".nav_section-category");
const mobileNavCategory = document.querySelector(
  ".mob-nav_section-category-list"
);

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
    ? (footer_logo.src = "./assets/logo-big_dark.svg")
    : (footer_logo.src = "./assets/logo-big_light.svg");

  window.location.pathname === "/" &&
    (body.classList.value === "dark"
      ? (header_logo.src = "./assets/logo_dark.svg")
      : (header_logo.src = "./assets/logo.svg"));
};

const handleThemeIconChange = () => {
  body.classList.value === "dark"
    ? (theme_toggle.src = "./assets/light_icon.svg")
    : (theme_toggle.src = "./assets/dark-icon.svg");
};

// sub nav toggle
function toggleNavLogo() {
  sub_nav.classList.contains("active") ||
  search_bar.classList.contains("active") ||
  mob_dropdown.classList.contains("active")
    ? body.classList.value === "dark"
      ? (nav_item_logo.src = "./assets/active-dark-logo.svg")
      : (nav_item_logo.src = "./assets/active-light-logo.svg")
    : (nav_item_logo.src = "./assets/logo2.svg");
}

const handleSubNavToggle = () => {
  sub_nav_btn.classList.toggle("active");
  sub_nav.classList.toggle("active");
  toggleNavLogo();
};

function closeSubNav() {
  sub_nav.classList.remove("active");
  sub_nav_btn.classList.remove("active");
  toggleNavLogo();
}
document.addEventListener("click", (e) => {
  !sub_nav_btn.contains(e.target) &&
    sub_nav.classList.contains("active") &&
    closeSubNav();
});

// category toggle
const handleCategoryDropdownToggle = () => {
  dropdown_btn.classList.toggle("active");
  mob_dropdown.classList.toggle("active");
  toggleNavLogo();
};

function closeCategoryDropDown() {
  mob_dropdown.classList.remove("active");
  dropdown_btn.classList.remove("active");
  toggleNavLogo();
}
document.addEventListener("click", (e) => {
  !dropdown_btn.contains(e.target) &&
    mob_dropdown.classList.contains("active") &&
    closeCategoryDropDown();
});

// search
const handleSearchBarToggle = () => {
  search_bar.classList.toggle("active");
  nav_search_btn.classList.toggle("active");
  toggleNavLogo();
};

function closeSearch() {
  nav_search_btn.classList.remove("active");
  search_bar.classList.remove("active");
  toggleNavLogo();
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

const categoriesArr = ["lifestyle", "entertainment", "health", "biology"];
const mob_active_category = document.querySelector(".active-category");
mob_active_category.innerHTML = `
<a href="javascript:void(0)" class="t-tagline-50r" onclick="handleCategoryDropdownToggle()">${categoriesArr[0]}</a>
`;
categoriesArr.forEach((category) => {
  const desk_category_btn = document.createElement("button");
  desk_category_btn.classList.add("nav_item_category");
  desk_category_btn.innerHTML = `
  <a href="#" class="t-tagline-50r">${category}</a>
  `;
  desktopNavCategory.appendChild(desk_category_btn);
  // mobileNavCategory.innerHTML = "";
  const mob_category_btn = document.createElement("button");
  mob_category_btn.classList.add("mobile-nav_item_category");
  mob_category_btn.innerHTML = `
  <a href="#" class="t-tagline-50r">${category}</a>
  `;
  mobileNavCategory.appendChild(mob_category_btn);
});

const body = document.querySelector("body");
const nav_logo = document.querySelector(".nav_logo");

// theme fetch
window.onload = () => {
  const themeMode = localStorage.getItem("theme");
  themeMode === "dark"
    ? body.classList.add("dark")
    : body.classList.remove("dark");
  handleNavLogoChange();
};

//theme toggle
const handleThemeToggle = () => {
  body.classList.toggle("dark");
  body.classList.value === "dark"
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
  handleNavLogoChange();
};

const handleNavLogoChange = () => {
  body.classList.value === "dark"
    ? (nav_logo.src = "./assets/logo_dark.svg")
    : (nav_logo.src = "./assets/logo.svg");
};

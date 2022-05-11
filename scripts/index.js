const body = document.querySelector("body");
const header_logo = document.querySelector(".header_logo");

// theme fetch
window.onload = () => {
  const themeMode = localStorage.getItem("theme");
  themeMode === "dark"
    ? body.classList.add("dark")
    : body.classList.remove("dark");
  handleHeaderLogoChange();
};

//theme toggle
const handleThemeToggle = () => {
  body.classList.toggle("dark");
  body.classList.value === "dark"
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
  handleHeaderLogoChange();
};

const handleHeaderLogoChange = () => {
  body.classList.value === "dark"
    ? (header_logo.src = "./assets/logo_dark.svg")
    : (header_logo.src = "./assets/logo.svg");
};

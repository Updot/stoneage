const body = document.querySelector("body");
const banner = document.querySelector(".banner-image");
window.onload = () => {
  const themeMode = localStorage.getItem("theme");
  themeMode === "dark"
    ? body.classList.add("dark")
    : body.classList.remove("dark");
  handleBannerChange();
};

const handleBannerChange = () => {
  body.classList.value === "dark"
    ? (banner.src = "./assets/404-banner-dark.svg")
    : (banner.src = "./assets/404-banner-light.svg");
};

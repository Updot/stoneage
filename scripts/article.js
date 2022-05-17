const body = document.querySelector("body");
const footer_logo = document.querySelector(".footer_logo");
const sub_nav_btn = document.querySelector(".sub_nav_btn");
const sub_nav = document.querySelector(".sub_nav");
const theme_toggle = document.querySelector(".theme_toggle");
const search_bar = document.querySelector(".search_bar");
const nav_search_btn = document.querySelector(".nav_search_btn");
const commentScrollArea = document.querySelector(".comment-scroll-area");
const other_articles_scrollarea = document.querySelector(
  ".other_articles-scroll-area"
);
const share_options = document.querySelector(".share_options-wrap");
// theme fetch
window.onload = () => {
  const themeMode = localStorage.getItem("theme");
  themeMode === "dark"
    ? body.classList.add("dark")
    : body.classList.remove("dark");
  handleLogoChange();
  handleThemeIconChange();
  handleCommentFetch();
  handleArticlesFetch();
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

//SHARE

const handleShareBtn = () => {
  console.log("Dsadsad");
  share_options.classList.toggle("active");
};

// API CALLS
const handleCommentFetch = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const data = await response.json();

  data.slice(0, 10).forEach((comment) => {
    const commentItem = document.createElement("div");
    commentItem.classList.add("comment-row");
    commentItem.innerHTML = `
    <div class="col-2 comment-author-column">
        <div class="comment-author-avatar"></div>
    </div>
    <div class="col-9 comment-content-column">
        <p class="t-tagline-100m">${comment.name}</p>
        <p class="t-tagline-50r">
            ${comment.body}
        </p>
        <small>01/02/2022</small>
    </div>
    `;
    commentScrollArea.appendChild(commentItem);
  });
};

const handleArticlesFetch = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  data.slice(0, 10).forEach((post) => {
    const articleItem = document.createElement("div");
    articleItem.classList.add("other_article-column");
    articleItem.classList.add("col-4");
    articleItem.innerHTML = `
    <div class="other_article-post">
        <div class="other_article-banner"></div>
        <p class="other_article-heading t-tagline-200b">
            ${post.title}
        </p>
        <p class="other_article-para t-tagline-100r">
            ${post.body}
        </p>

        <a class="other_article-link" href="#">
            <p class="t-tagline-50r">Read More</p>
            <svg width="12" height="12" viewBox="0 0 17 17" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M4 1.75H15.25V13M15.25 1.75L1.75 15.25L15.25 1.75Z" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </a>
    </div>
    `;
    other_articles_scrollarea.appendChild(articleItem);
  });
};

class Article {
  constructor() {
    this.article_wrapper = document.querySelector(".article_wrapper");
    // this.article_wrapper.classList.add("loading");
    // this.article_wrapper.classList.remove("loading");
  }

  render(data, pageNum) {
    this.article_wrapper.innerHTML = "";
    const articles = data.slice((pageNum - 1) * 5, pageNum * 5);
    articles.forEach((post) => {
      const articleItem = document.createElement("div");
      articleItem.classList.add("article_container");
      articleItem.innerHTML = `
        <div class="article_image-wrapper">
          <img src="assets/articles.svg" alt="article image" />
        </div>
        <div class="article_content-wrapper">
          <h4 class="t-tagline-100m">${post.title}</h4>
          <p class="t-tagline-50r">
            ${post.body}
          </p>
          <a href="/article.html" class="article_content_cta-link">
            <small class="t-tagline-50">Read more.</small>

            <svg width="12" height="12" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 1.75H15.25V13M15.25 1.75L1.75 15.25L15.25 1.75Z" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </a>

        </div>
        `;
      this.article_wrapper.appendChild(articleItem);
    });
    this._renderPagination(data, pageNum);
  }

  _renderPagination(data, pageNum) {
    const pagination = document.querySelector(".pagenum_container");
    pagination.innerHTML = "";
    const firstFive = window.innerWidth > 768 ? 5 : 3;
    const totalPages = Math.ceil(data.length / 5);
    if (firstFive > 1) {
      for (let i = 1; i <= firstFive; i++) {
        const pagenum_btn = document.createElement("button");
        pagenum_btn.classList.add("pagenum_btn");
        pagenum_btn.innerHTML = i;
        if (i === pageNum) {
          pagenum_btn.classList.add("active");
        }
        pagination.appendChild(pagenum_btn);
      }
    }

    const prevNav = document.querySelector(".navigation-btn-p");
    const nextNav = document.querySelector(".navigation-btn-n");

    if (pageNum === 1 || totalPages === 1 || data.length === 0) {
      prevNav.classList.add("disabled");
      prevNav.classList.add("inactive");
    } else {
      prevNav.classList.remove("disabled");
      prevNav.classList.remove("inactive");
    }

    if (pageNum === totalPages || totalPages === 1 || data.length === 0) {
      nextNav.classList.add("disabled");
      nextNav.classList.add("inactive");
    } else {
      nextNav.classList.remove("disabled");
      nextNav.classList.remove("inactive");
    }
  }
}

// Instantiate the Article class
const articlesInstance = new Article();

// Get the data from the server
const handleArticlesFetch = async (pageNum) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  articlesInstance.render(data, pageNum ? pageNum : 1);
};
handleArticlesFetch();

// Pagination
const pagination = document.querySelector(".pagenum_container");
pagination.addEventListener("click", (e) => {
  if (e.target.classList.contains("pagenum_btn")) {
    const pageNum = parseInt(e.target.innerHTML);
    handleArticlesFetch(pageNum);
  }
});

// Handle the next button
const handleNavigateNext = () => {
  const currentPage = parseInt(pagination.querySelector(".active").innerHTML);
  const totalPages = parseInt(
    pagination.querySelector(".pagenum_btn:last-child").innerHTML
  );
  if (currentPage < totalPages) {
    handleArticlesFetch(currentPage + 1);
  }
};

// Handle the previous button
const handleNavigatePrev = () => {
  const currentPage = parseInt(pagination.querySelector(".active").innerHTML);
  const firstPage = parseInt(
    pagination.querySelector(".pagenum_btn:first-child").innerHTML
  );
  if (currentPage > firstPage) {
    handleArticlesFetch(currentPage - 1);
  }
};

// search
const search = document.querySelector(".nav_search_bar");
search.addEventListener("keyup", async (e) => {
  const searchTerm = e.target.value;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  const filteredData = data.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  articlesInstance.render(filteredData.length > 0 ? filteredData : data, 1);
});
//Story slider
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

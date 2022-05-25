const article_wrapper = document.querySelector(".article_wrapper");

const handleArticlesFetch = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  data.slice(0, 5).forEach((post) => {
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
    article_wrapper.appendChild(articleItem);
  });
};

handleArticlesFetch();

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

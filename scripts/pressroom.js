const other_articles_scrollarea = document.querySelector(
  ".other_articles-scroll-area"
);
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

handleArticlesFetch();

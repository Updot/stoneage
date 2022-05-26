$(() => {
  $("#faq-search").on("keyup", () => {
    let search = $("#faq-search").val();
    $("#faq-search-results").html("");
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      type: "GET",
      success: (data) => {
        let results = data.filter((item) => {
          return (
            search && item.title.toLowerCase().includes(search.toLowerCase())
          );
        });
        results.length > 0
          ? $("#faq-search-results").addClass("active")
          : $("#faq-search-results").removeClass("active");
        results.forEach((item) => {
          $("#faq-search-results").append(
            `<li class="search-result-item">${item.title}</li>`
          );
        });
      },
    });
  });
});

$("#faq-search-results").on("click", (e) => {
  $("#faq-search").val($(e.target).text());
  $("#faq-search-results").removeClass("active");
});

document.addEventListener("click", () => {
  document.querySelector("#faq-search-results").innerHTML = "";
  $("#faq-search-results").removeClass("active");
});

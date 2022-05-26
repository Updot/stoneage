const form = document.querySelector("form");

const handleSubmitForm = (e) => {
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Thanks for your submission!");
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            let status = data["errors"]
              .map((error) => error["message"])
              .join(", ");
            alert(status);
          } else {
            alert("Oops! There was a problem submitting your form");
          }
        });
      }
    })
    .catch((error) => {
      alert("Oops! There was a problem submitting your form");
    });
};

form.addEventListener("submit", handleSubmitForm);

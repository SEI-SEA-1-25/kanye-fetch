let kquote = document.getElementById("kquote");

let resetButton = document.getElementById("reset");

function getQuote() {
  fetch("https://api.kanye.rest/")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let posts = json.quote;
      console.log(posts);

      kquote.innerText = posts;
    });
}

resetButton.addEventListener("click", getQuote);

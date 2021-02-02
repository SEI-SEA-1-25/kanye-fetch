let wisdom = document.querySelector("p");
let button = document.querySelector("button");
//let buttonMore =

button.addEventListener("click", kanYe);

function kanYe(event) {
  event.preventDefault();
  fetch("https://api.kanye.rest/")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let randomWisdom = json.quote;
      wisdom.innerText = `"${randomWisdom}"`;
      button.innerText = "Tell me more...";
    });
}

let resetButton = document.querySelector("button");

fetch("https://api.kanye.rest")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
    let randomQuote = json.quote;
    createEl(randomQuote);
  });

//new function
function createEl(randomQuote) {
  let divEL = document.createElement("div");
  let h2El = document.createElement("h2");
  document.querySelector(".quoteWrap").appendChild(divEL);
  divEL.appendChild(h2El).innerText = `${randomQuote}`;

  return divEL;
}
resetButton.addEventListener("click", createEl);

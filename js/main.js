let randomQuote = document.querySelector(".quoteWrap");
let resetButton = document.querySelector("button");

resetButton.addEventListener("click", kanYe);

function kanYe(event) {
  event.preventDefault();
  fetch("https://api.kanye.rest/")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      // console.log(json);
      let random = json;
      let randomWisdom = random.quote;
      randomQuote.innerText = `"${randomWisdom}" -Yeezus`;
      resetButton.innerText = "Tell me more...";
    });
}

// //new function
// function createEl(randomQuote) {
//   let divEL = document.createElement("div");
//   let h2El = document.createElement("h2");
//   document.querySelector(".quoteWrap").appendChild(divEL);
//   divEL.appendChild(h2El).innerText = `${randomQuote}`;

//   return divEL;
// }

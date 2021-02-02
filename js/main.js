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
      getKim();
    });
}

const kanyeOrSadKim = document.querySelector("#gif");

function getKim() {
  const randomNumber = Math.floor(Math.random() * Math.floor(10));
  if (randomNumber === 5) {
    //if randomNumber = 10 add kim
    kanyeOrSadKim.src = "images&gifs/kimCrying.gif";
  } else {
    kanyeOrSadKim.src = "images&gifs/KanyeGif1.gif";
    //hide image of sobbing
  }
}

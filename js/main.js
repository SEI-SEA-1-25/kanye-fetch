let tweet = document.querySelector(".container");
let reset = document.querySelector("button");

function gimmeWisdom(event) {
    event.preventDefault();
    fetch("https://api.kanye.rest/")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        // console.log(json);
        let random = json;
        let ranQuote = random.quote;
        tweet.innerText = `"${ranQuote}" by Yeezy`;
        reset.innerText = "More wisdom plz";
        document.querySelector(".container").style.textAlign = "center"
      });
  }
  reset.addEventListener("click", gimmeWisdom);
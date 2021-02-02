let tweet = document.querySelector(".container");
let reset = document.querySelector("button");

reset.addEventListener("click", gimmeWisdom);

function gimmeWisdom(event) {
    event.preventDefault();
    fetch("https://api.kanye.rest/")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        // console.log(json);
        let random = json;
        let randomWisdom = random.quote;
        tweet.innerText = `"${randomWisdom}" -Yeezy`;
        reset.innerText = "More wisdom plz";
        document.querySelector(".container").style.textAlign = "center"
      });
  }
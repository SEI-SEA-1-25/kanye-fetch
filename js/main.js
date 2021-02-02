//DOM Operators
let buttonEl = document.querySelector(".newquote");
let quoteEl= document.querySelector(".kanye-quote");


//Page Start
buttonEl.addEventListener('click', newQuote);



function newQuote() {

fetch('https://api.kanye.rest')
.then(function(response) {
    return response.json();
 })
    .then(function(json){
    let newText = json.quote;
    quoteEl.innerText = newText;
 })

}


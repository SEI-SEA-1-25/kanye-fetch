console.log("👀")

let shuffleQ = document.querySelector('#shuffle');

shuffleQ.addEventListener('click', quotes);

function quotes() {
fetch('https://api.kanye.rest/')
.then(function(response){
return response.json();
})

.then(function(json){
    //accessing api and passing data to variable
    let quotes = json.quote;
    //accessing DOM and creating a variable representative
    let randomQuote = document.querySelector('h3');
    //modifying text from DOM with API data
    randomQuote.innerText = quotes;
})
};


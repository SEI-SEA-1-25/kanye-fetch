// Variables

// DOM References
let quoteContainer = document.querySelector('#quote-container');
let newQuote = document.querySelector('#quote-button');
console.log(generateQuote);

// Event Listeners
newQuote.addEventListener("click", generateQuote); // search is a callback function

// Functions
// Generate new quote
function generateQuote(event) {
  event.preventDefault();
  // console.log(searchQuery);
  fetch("https://api.kanye.rest/")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    clear();
    let yeQuote = json;
    let quote = yeQuote.quote;
    let divEl = fillQuote(quote);
    quoteContainer.appendChild(divEl);
    divEl.classList.add("class1");
  });
}

// clear previous quotes

function clear() {
  while (quoteContainer.firstChild) {
    quoteContainer.removeChild(quoteContainer.firstChild);
  }
}

// Fill quote container
function fillQuote(quote) {
    let divEl = document.createElement("div");
    let pEl = document.createElement("p");
    pEl.textContent = quote;
  
    divEl.appendChild(pEl);
    // return a div back
    return divEl;
  }
  console.log(newQuote);
  



// console.log("👀")

let quoteContainer = document.querySelector('#quote-container')

const kanyeQuotes = () => {

    fetch(`https://api.kanye.rest/`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
    console.log(json);
    createQuote()
    let quote = json.quote;
    
    })

}

const createQuote = () => {
    let h2El = document.createElement('h2')
    h2El.textContent = quote;
    
    while(quoteContainer.firstChild) {
    quoteContainer.removeChild(quoteContainer.firstChild)
   }
}


// const createQuote = () => {
//     let divEl = document.createElement('div')

//     let h2El = document.createElement('h2')
//     h2El.textContent = quote;

//     divEl.appendChild(h2El)

//     return divEl
// }


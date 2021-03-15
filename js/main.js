let quoteContainer = document.querySelector('#quote-container')
let reset = document.getElementById('reset')

const kanyeQuotes = () => {

    fetch(`https://api.kanye.rest/`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            let quote = json.quote;
            let quoteDiv = createQuote(quote)
            quoteContainer.appendChild(quoteDiv)
        })

}

reset.addEventListener('click', kanyeQuotes)

const createQuote = (quote) => {
    let div = document.createElement('div')
    let h2El = document.createElement('h2')
    h2El.textContent = quote;
    div.appendChild(h2El)

    return div;
}

kanyeQuotes()
let quoteContainer = document.querySelector('#quote-container')

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

const createQuote = (quote) => {
    let div = document.createElement('div')
    let h2El = document.createElement('h2')
    h2El.textContent = quote;
    div.appendChild(h2El)

    return div;
}

kanyeQuotes()
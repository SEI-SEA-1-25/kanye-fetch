console.log("👀")


//DOM references
let quoteContainer = document.querySelector('#quote-container');
let form = document.querySelector('#search-form')
let textEl = document.querySelector('.bottom-text')

//event listeners
form.addEventListener('submit', findQuote)

// functions
function findQuote(event) {
    event.preventDefault();

    fetch(`https://api.kanye.rest`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        clear();
        let quote = json.quote;
        
        textEl.innerText = `Yo, Taylor, I'm really happy for you, and I'mma let you finish, but ${quote}`
    })
}

function clear() {
        // while the post-container still has child divs, remove the first child.
    while(quoteContainer.firstChild) {
         quoteContainer.removeChild(quoteContainer.firstChild)
    }
}
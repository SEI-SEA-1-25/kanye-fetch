

fetch('https://api.kanye.rest/')
        .then(function(response){
            return response.json();
        })
        .then(function(json) {

            let kanyeQuote = json.quote;
            let quoteContainer = document.querySelector('#quote_container')
            
            quoteContainer.innerText = kanyeQuote + "- Kanye West"
        
        })
newQuoteButton = document.querySelector('#new_quote')
newQuoteButoon = addEventListener('click', function(){
    fetch('https://api.kanye.rest/')
        .then(function(response){
            return response.json();
        })
        .then(function(json) {

            let kanyeQuote = json.quote;
            let quoteContainer = document.querySelector('#quote_container')
            
            quoteContainer.innerText = kanyeQuote + "- Kanye West"
        
        })
}
)







        





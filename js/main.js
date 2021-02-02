let divEl = document.createElement('div')
let h2El = document.createElement('h2')
let bodyEl = document.querySelector('body');
let quoteBtn = document.querySelector('#refreshBtn');

quoteBtn.addEventListener('click', function(buttonClicked) {
    fetch ('https://api.kanye.rest/')
    .then(function(response) {
        return response.json();
    })
    .then(function (json) {
        let kanyeQuotes = json.quote
        createEl();
        h2El.innerText = `"${kanyeQuotes}"`;
    })
})

function createEl() {
    divEl.appendChild(h2El)
    bodyEl.appendChild(divEl)
}
    

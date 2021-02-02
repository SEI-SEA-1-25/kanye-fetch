function fetchAndDisplay() {
    fetch('https://api.kanye.rest')
        .then(function(west) {
            return west.json()
    })
.then(function(data) {
    const quote = data.quote

    document.querySelector('#quote-zone').
    innerText = quote
    })
}

fetchAndDisplay()

const button = document.querySelector
('#generate-quote')
button.addEventListner('click', fetchAndDisplay)
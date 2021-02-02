function kQuote() {
    fetch('https://api.kanye.rest')
    .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            let kanTent = document.querySelector("h2")
                kanTent.innerText = json.quote;
                // document.body.appendChild(kanTent)
        });
}
kQuote()

const kNowledge = document.querySelector('#kWords')
kNowledge.addEventListener('click', function() {
    kQuote()
})
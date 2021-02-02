// make a fetch request-get
// .then() json
// post data to main page
// create button to start from step 1

//let newQuote = document.querySelector('#button').value;
button.addEventListener('click', quotes);

function quotes() {

    fetch('https://api.kanye.rest/')
        .then(function(response) {
            return response.json();

        })
        .then(function(json) {
            let quotes = json.quote;
            //console.log(quotes);
            document.querySelector('#statement').innerText = quotes;

        })

    //console.log(newQuote);

}


//let h1El = document.querySelector('#statement');
const quotesCo = document.querySelector('#post-container');
const reloadButton = document.querySelector('.button');



fetch('https://api.kanye.rest')
.then(function(response) {
    return response.json();
})

.then(function(json) {
    let quotes = json.quote;
    console.log(quotes);

    let h1El = createPost(quotes);
    quotesCo.appendChild(h1El);
})

// let h1El = createPost(quote);
// h1El.appendchild(h1El);


const createPost =(quotes) => {
    let h1El =document.createElement('h1');
    h1El.textContent = quotes;
    return h1El;

    console.log(quotes);
}



function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);



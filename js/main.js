//DOM Elements
let refresh = document.querySelector("#refreshme");
refresh.classList.add("buttstyle");

//Event Listeners
refresh.addEventListener("click", ()=> location.reload());



//Fetching data
fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((json) => {
        let kanyeObject = json.quote;

        let kanQuotes = kanyeObject;
        let hisQuotes = document.querySelector("#quotes").textContent = `${kanyeObject}`;
});



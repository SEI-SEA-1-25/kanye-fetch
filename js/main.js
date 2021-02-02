
let h2El = document.querySelector('h2');

let quoButton = document.querySelector('.quoButton');
 quoButton.addEventListener('click', generateQuo)

// //function 
  function generateQuo(event) {
    event.preventDefault;

fetch('https://api.kanye.rest/') 
    .then(function(response) {
    return response.json();
 })
    .then(function(json) {
    console.log(json);
    let quote = json;

    h2El.textContent = json.quote;

 }) .catch(error => {
    console.log(error)
 }) 
}

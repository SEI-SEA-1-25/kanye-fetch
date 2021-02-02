// const response = null

// // these lines do not run in order .then waits to run
// fetch ('https://api.kanye.rest/') // long-running operation (any function that returns a promise), script will keep executing past it
// .then(function(res){
//   response = res
// })

// console.log(response) // move into function to make it fire after the fetch completes

// fetch is a function that we invoke, not define, so it doesn't need curly braces

// AWAIT
// code below will not run until this line is finished, can be used with any function that returns a promise
// parallels to .then

// fetch ('https://api.kanye.rest/') // long-running operation (any function that returns a promise), script will keep executing past it
// .then(function(res){
//   return res.json
// }
// .then(function(data) {
//   console.log(data) // put it on the screen etc
// })
// .catch(error) => {
//   // handle the error however
// })

// is the same as =

// await has to be used inside of an async function that you create

async function fetchKanyeData() {
  try { // try catch
    const res = await fetch("https://api.kanye.rest/");
    const data = await res.json(); 
    console.log(data); // put it on the screen etc
  } catch (err) {
    console.log('oh noooo')
  }

}
fetchKanyeData();


/*HOMEWORK */
// Variables

// DOM References
// let quoteContainer = document.querySelector('#quote-container');
// let newQuote = document.querySelector('#quote-button');
// console.log(generateQuote);

// // Event Listeners
// newQuote.addEventListener("click", generateQuote); // search is a callback function

// // Functions
// // Generate new quote
// function generateQuote(event) {
//   event.preventDefault();
//   // console.log(searchQuery);
//   fetch("https://api.kanye.rest/")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (json) {
//     clear();
//     let yeQuote = json;
//     let quote = yeQuote.quote;
//     let divEl = fillQuote(quote);
//     quoteContainer.appendChild(divEl);
//     divEl.classList.add("class1");
//   });
// }

// // clear previous quotes

// function clear() {
//   while (quoteContainer.firstChild) {
//     quoteContainer.removeChild(quoteContainer.firstChild);
//   }
// }

// // Fill quote container
// function fillQuote(quote) {
//     let divEl = document.createElement("div");
//     let pEl = document.createElement("p");
//     pEl.textContent = quote;

//     divEl.appendChild(pEl);
//     // return a div back
//     return divEl;
//   }
//   console.log(newQuote);

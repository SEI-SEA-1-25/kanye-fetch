// DOM references
// let postContainer = document.querySelector('#post-container');
//Vars
//DOM References
//Event Listeners
//Functions
fetch("https://api.kanye.rest")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  });

let postContainer = document.querySelector('body')
let h1 = document.querySelector('h3')
let button = document.querySelector('#button')

button.addEventListener('click' , getData)



function getData(){
    fetch('https://api.kanye.rest/')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        let posts = json.quote;
        h1.innerHTML = `"${posts}"`
    })
}
getData()
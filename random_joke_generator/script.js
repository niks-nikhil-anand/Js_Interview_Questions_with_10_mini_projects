let joke = document.getElementById("joke");
let btn = document.getElementById("btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    joke.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        
        joke.textContent = `${item.joke}`
        joke.classList.add("fade");
    });
}
window.onload = () => {
    getJoke(); // Corrected the syntax
};
btn.addEventListener("click" , getJoke );

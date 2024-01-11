let username = document.querySelector('.hello').value;
document.getElementById("myForm").addEventListener("submit" , function(event)  {
    event.preventDefault();
    let username = document.querySelector('.hello').value;
    getData(username)
})



async function getData(username){
    await fetch(`https://api.github.com/users/${username}`)
    .then((res)=> res.json())
    .then((res) => {
        let name = document.querySelector(".name")
        name.innerHTML = `<h4>${username}</h4>`;
    
        let image = document.querySelector(".avtaar")
        image.innerHTML = `<img src="${res.avatar_url}" alt="">` 
    })
    
}



let username = document.querySelector('.hello').value;
document.getElementById("myForm").addEventListener("submit" , function(event)  {
    event.preventDefault();
    let username = document.querySelector('.hello').value;
    getData(username)
})



async function getData(username) {
    await fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((res) => {
            let name = document.querySelector(".name");
            name.innerHTML = `<h4>${username}</h4>`;

            let image = document.querySelector(".avtaar");
            image.innerHTML = `<img src="${res.avatar_url}" alt="avataar">`;

            let list = document.querySelector(".list");

           
            list.innerHTML = `<li>
                <h3>Full Name:-</h3>
                <h4>${res.name}</h4>
            </li>
            <li>
                <h3>Username:- </h3>
                <h4>${res.login}</h4>
            </li>
            <li>
                <h3>Location:-</h3>
                <h4>${res.location}</h4>
            </li>
            <li>
                <h3>Total Followers:- </h3>
                <h4>${res.followers}</h4>
            </li>
            <li>
                <h3>About:- </h3>
                <h4>${res.bio}</h4>
            </li>`;
        })
        .catch((error) => console.error('Error fetching GitHub user data:', error));
        document.querySelector('.hello').value = '';
       

}



let user = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
    },
];

user.forEach(value => {
    let element = document.createElement("div");
    element.classList.add("box-outer")
    element.innerHTML = `
    
    <div class="id">
    <h1 class="id-1">id -<span class="id1">${value.id}</span></h1>
    </div>
    <div class="name">
    <h2 class="name-1">Name -<span class="name1">${value.name}</span></h2>
    </div>
    <div class="uesr">
    <h2 class="username">username -<span class="user1">${value.username}</span></h2>
    </div>
    <div class="email">
    <h2 class="email-1">Email -<span class="email1">${value.email}</span></h2>
    </div>  
    `
    let append = document.querySelector(".continor")
    append.appendChild(element)
});
let count = 10
function add() {
    count++
    let inp_name = document.querySelector("#name").value;
    let inp_user = document.querySelector("#user").value;
    let inp_emai = document.querySelector("#email").value;
    let element1 = document.createElement("div")
    element1.classList.add("box-outer")

    let name = document.querySelector(".name1").innerHTML = inp_name;
    let username = document.querySelector(".user1").innerHTML = inp_user
    let emai = document.querySelector(".email1").innerHTML = inp_emai
    element1.innerHTML = `  
 <div class="id">
 <h1 class="id-1">id -<span class="id1">${count}</span></h1>
 </div>
 <div class="name">
 <h2 class="name-1">Name -<span class="name1">${name}</span></h2>
 </div>
 <div class="uesr">
 <h2 class="username">username -<span class="user1">${username}</span></h2>
 </div>
 <div class="email">
 <h2 class="email-1">Email -<span class="email1">${inp_emai}</span></h2>
 </div>  `
    let append = document.querySelector(".continor")
    append.appendChild(element1)
}
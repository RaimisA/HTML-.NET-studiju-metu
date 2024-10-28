localStorage.setItem("Name", "Raimis");
localStorage.setItem("IsLoggedIn", true);

const h1Element = document.getElementById("hello");

const name = localStorage.getItem("Name");

const IsLoggedIn = localStorage.getItem("IsLoggedIn") === "true";

 let text = `Hello, ${name}!`;

 if(IsLoggedIn) {
     text = text + " You are Admin!";
 }
h1Element.innerText = text;


const user = {
    name: "Raimis",
    age: 20,
    degree: "Bachelors",
    hobbies: ["Football", "Basketball", "Tennis"],
    address: {
        city: "Vilnius",
        street: "Gedimino pr.",
    },
};

const userJsonString = JSON.stringify(user);

localStorage.setItem("user", userJsonString);
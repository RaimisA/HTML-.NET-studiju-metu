console.log(`--------IF--------`);

console.log(`------Paprastas IF---------`);

let skaicius = 10;
if (skaicius > 5) {
    console.log(`Skaicius yra didesnis uz 5`);
}

let tekstas = `Labas`;
if (tekstas === `Labas`) {
    console.log(`Tekstas yra Labas`);
}

let teiginys = true;
if (teiginys) {
    console.log(`Teiginys yra true`);
}

//if else struktura

console.log(`------IF ELSE---------`);

let skaicius1 = 3;
if (skaicius1 > 5) {
    console.log(`Skaicius yra didesnis uz 5`);
} else {
    console.log(`Skaicius yra mazesnis arba lygus 5`);
}

//if else if else struktura

console.log(`------IF ELSE IF ELSE---------`);

let skaicius2 = 7;

if (skaicius2 > 10) {
    console.log(`Skaicius yra didesnis uz 10`);
} else if (skaicius2 > 5) {
    console.log(`Skaicius yra didesnis uz 5`);
} else {
    console.log(`Skaicius yra mazesnis arba lygus 5`);
}

//Salyginiai teiginiai su ne loginemis reiksmemis

console.log(`------Salyginiai teiginiai su ne loginemis reiksmemis---------`);

let vardas = ``;
if (vardas) {
    console.log(`Vardas yra nurodytas`);
} else {
    console.log(`Vardas nera nurodytas`);
}

let someVariable = `kazkas`;
if (someVariable !==null && someVariable !==undefined && someVariable !==``) {
    console.log(`Kintamasis yra nurodytas`);
}

//taciau galima rasyti paprasciau

if (someVariable) {
    //veiksmai
}

if(false) {
    console.log(`false`);
} else {
    console.log(`ne false`);
} 

if(0) {
    console.log(`0`);
} else {
    console.log(`ne 0`);
}


    function checkAccess(user) {
        return user.isLoggedIn && user.isAdmin || "Access Denied";
    }
 
    let user1 = { isLoggedIn: true, isAdmin: false };
    let user2 = { isLoggedIn: true, isAdmin: true };
 
    console.log(checkAccess(user1)); // ?
    console.log(checkAccess(user2)); // ?


let age = "18";
let access = parseInt(age) >= 18 ? "Granted" : "Denied";
console.log(access); 
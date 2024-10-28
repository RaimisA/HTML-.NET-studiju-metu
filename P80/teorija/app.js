console.log("Hello World from external JavaScript");

var name = "John Doe";
let age = 25;
const address = "123 Main St";

console.log(`name: ${name} age: ${age} address: ${address}`);

age += " dvidesimt penki";
console.log(`name: ${name} age: ${age} address: ${address}`);


var status = "Working";
if (true) {
    var status = "Playing";
    console.log("Status inside scope (using var) " + status);
}
console.log("Status outside scope (using var) " + status);

let status2 = "Working";
if (true) {
    let status2 = "Playing";
    console.log("Status inside scope (using let) " + status2);
}
console.log("Status outside scope (using let) " + status2);

// address = "456 Elm St";
console.log(`KODAS PO KLAIDOS`);

let tekstas = "Labas vakaras"; // string
let skaicius = 5; // number
let skaicius_kaip_tekstas = "5"; // string
let slankiojo_kablelio_skaicius = 5.5050505; // number
let loginis_kintamasis_teisybe = true; // boolean
let loginis_kintamasis_netesybe = false; // boolean
let objektas = {vardas: "Jonas", pavarde: "Jonaitis"}; // object
let masyvas = [1, 2, 3, 4, 5]; // array
let funkcija = function() {
    console.log("Labas pasauli");
}; // function
let nieko // undefined
let nieko_nera = null; // null
console.log(("-----------------"));
console.log(typeof tekstas);
console.log(typeof skaicius);
console.log(typeof skaicius_kaip_tekstas);
console.log(typeof slankiojo_kablelio_skaicius);
console.log(typeof loginis_kintamasis_teisybe);
console.log(typeof loginis_kintamasis_netesybe);
console.log(typeof objektas);
console.log(typeof masyvas);
console.log(typeof funkcija);
console.log(typeof nieko);
console.log(typeof nieko_nera);
console.log("NaN-", typeof NaN);

var a = tekstas - skaicius + 88;
console.log("nesamones", a);
console.log("nesamones", typeof a);

//funkcija, kuri nepriima parametru ir nieko negrazina
function functionName() {
    // kazkoks funkcijos kodas
    console.log("Function called");
}

//funkcija, kuri priima viena parametra ir nieko negrazina
function functionName1(param1) {
    // kazkoks funkcijos kodas
}

//funkcija, kuri priima du parametrus ir nieko negrazina
function functionName2(param1, param2) {
    // kazkoks funkcijos kodas
}

//funkcija be parametru, kuri grazina skaiciu
function functionName3() {
    // kazkoks funkcijos kodas
    return 5;
}

//funkcija su vienu parametru, kuri grazina skaiciu + parametras
function functionName4(param1) {
    // kazkoks funkcijos kodas
    return 5 + param1;
}

//funkcija, kuri sumuoja du parametrus ir isveda i console
function sum(a, b) {
    console.log(a + b);
    return a + b;
}

//funkcija, kur kviecia funkcija sum
function sumCaller() {
    const a = sum(5, 10);
    console.log("a= ", a);
}
sumCaller();

function calculations() {
    //deklaruojame kintamuosius
    let a = 11;
    let b = 5;

    //sudetis
    let suma = a + b;
    console.log(`Sudetis ${a}+${b}`, suma);
    
    //atimtis
    let skirtumas = a - b;
    console.log(`Atimtis ${a}-${b}`, skirtumas);

    //daugyba
    let sandauga = a * b;
    console.log(`Daugyba ${a}*${b}`, sandauga);

    //dalyba
    let dalmuo = a / b;
    console.log(`Dalyba ${a}/${b}`, dalmuo);
}

let temperature = 7;
console.log(`Temperature: ${temperature}C`);
let userName = "Raimondas";
console.log(`Hi ${userName}. How are you?`);
const pi = 3.14159;
console.log(`PI number is ${pi}`);

//funkcija, kuri priima keturis parametrus
function calculations1(a, b, c, d) {
    //sudetis
    //skaiciuoja suma ir priskiria kintamajam
    let suma = a + b + c + d;
    //isvedame i console
    console.log(`Sudetis ${a}+${b}+${c}+${d} =`, suma);
    
    //atimtis
    //skaiciuoja skirtuma ir priskiria kintamajam
    let skirtumas = a - b - c - d;
    //isvedame i console
    console.log(`Atimtis ${a}-${b}-${c}-${d} =`, skirtumas);

    //daugyba
    //skaiciuoja sandauga ir priskiria kintamajam
    let sandauga = a * b * c * d;
    //isvedame i console
    console.log(`Daugyba ${a}*${b}*${c}*${d} =`, sandauga);

    //dalyba
    //skaiciuoja dalmeni ir priskiria kintamajam
    let dalmuo = a / b / c / d;
    //isvedame i console
    console.log(`Dalyba ${a}/${b}/${c}/${d} =`, dalmuo);
}

let result = 10 / 0;
console.log(result);
const result2 = 0 / 0;
console.log(result2);
console.log(typeof result);
console.log(typeof result2);

function isbiggerThan(value1, value2) {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return value1 > value2;
}

try {
    console.log(isbiggerThan(10, 5)); // true
    console.log(isbiggerThan(10)); // Error: Both arguments must be numbers
} catch (error) {
    console.error(error.message);
}


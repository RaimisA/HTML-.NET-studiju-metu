console.log(`---------Function statement---------`);

console.log(`basic function declaration:`);

function greet() {
    console.log(`Hello, World!`);
}

greet();

console.log("Function with 1 parameter:");

function greet2(name) {
    console.log(`Hello, ${name}!`);
}

greet2(`John`);

console.log("Function with 2 parameters and default value:");

function greetFrom(name, country = `Lithuania`) {
    console.log(`Hello, ${name} from ${country}!`);
}

greetFrom(`John`, `USA`);
greetFrom(`John`);
greetFrom();

console.log("Function with 2 parameters and return value:");

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));


console.log(`---------Function expression---------`);
const sayGoodbye = function (toName) {
    console.log(`Goodbye, ${toName}!`);
}

sayGoodbye(`John`);

console.log(`---------Arrow function---------`);

const getData = () => {
    return`Data is here!`;
}

const data = getData();
console.log(data);

console.log(`---------Arrow function with 2 parameters--------`);

const sum2 = (a, b) => {
    return a + b;
}

console.log(sum2(2, 3));

console.log(`---------Arrow function with 1 parameter--------`);

const greet3 = (name) => {
    console.log(`Hello, ${name}!`);
}

greet3(`John`);

//uzduotis 4

let userName = `Jonas`;
function showMessage() {
    userName = `Petras`;
    let message = `Hello, ${userName}!`;
    console.log(message);
}

console.log(userName);
showMessage();
console.log(userName);

//uzduotis 5

function canDrinkEnergyDrink(age) {
    if (age >= 18) {
        return alert(`You can drink energy drink!`);
    } else {
        return confirm("Did your parents give you permission?");
    }
}

// canDrinkEnergyDrink(17);


function canDrinkEnergyDrinkTernary(age) {
    return age >= 18 ? alert(`You can drink energy drink!`) : confirm("Did your parents give you permission?");
}

// canDrinkEnergyDrinkTernary(17);


//uzduotis 6

let employees = [`Jonas`, `Petras`, `Asta`, `Rita`, `Tomas`, `Mindaugas`, `Dalia`, `Saulius`, `Inga`];

//funkcija be parametru
function showEmployees() {
    console.log(employees);
}

const showEmployees2 = function() {
    console.log(employees);
};

const showEmployees3 = () => console.log(employees);

showEmployees();

//funkcija su 1 parametru name, kuris pridedamas i sarasa

function addEmployee(name) {
    employees.push(name);
}

const addEmployee2 = function(name) {
    employees.push(name);
};

const addEmployee3 = (name) => employees.push(name);



addEmployee(`Ieva`);
addEmployee(`Rasa`);
addEmployee(`Vaida`);

showEmployees();

//funkcija, kuri tikrina ar darbuotojas su vardu name egzistuoja sarase.
function isEmployee(name) {
    let result = false;
    employees.forEach(employee => {
        if (employee === name) {
            result = true;
        }
    });
    return result;
    
};

const isEmployee2 = function(name) {
    let result = false;
    employees.forEach(employee => {
        if (employee === name) {
            result = true;
        }
    });
    return result;
};


const isEmployee3 = (name) => {
    let result = false;
    employees.forEach(employee => {
        if (employee === name) {
            result = true;
        }
    });
    return result;
};


console.log(isEmployee(`Asta`));

//funkcija su 2 parametrais name ir newName, kuris pakeicia darbuotojo varda oldName i newName. Use indexOf

function changeEmployeeName(oldName, newName= `Anonimas`) {
    let index = employees.indexOf(oldName);
    if (index !== -1) {
        employees[index] = newName;
    }
    if (oldName === ``) {
        console.error(`Employee not found`);
    }
}

const changeEmployeeName2 = function(oldName, newName= `Anonimas`) {
    let index = employees.indexOf(oldName);
    if (index !== -1) {
        employees[index] = newName;
    }
    if (oldName === ``) {
        console.error(`Employee not found`);
    }
}

const changeEmployeeName3 = (oldName, newName= `Anonimas`) => {
    let index = employees.indexOf(oldName);
    if (index !== -1) {
        employees[index] = newName;
    }
    if (oldName === ``) {
        console.error(`Employee not found`);
    }
}

changeEmployeeName('Jonas');

showEmployees();




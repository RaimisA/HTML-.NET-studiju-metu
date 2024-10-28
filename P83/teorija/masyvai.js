console.log('----------Masyvai------------');
//sukurti masyva is filmu

let movies = ['Lord of the rings',
'Harry Potter',
'Pirates of the caribbean',
'Inception',
'Gladiator',
];

//isvedame i console
console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);
console.log(movies[4]);
console.log(movies[5]);
console.log(movies[6]);

//pakeiskime kelis pavadinimus

movies[0] = 'The Hobbit';
movies[1] = 'Fantastic Beasts';

console.log(`--------Pakeistas masyvas--------`);
console.log(movies);

//pridedam nauja elementa i masyva

movies[7] = 'The Matrix';

console.log(`--------Pridetas naujas elementas--------`);
console.log(movies);

for (let m of movies) {
    console.log(m);
}

movies.push(404055);
movies[5] = true;
movies[6] = {};
console.log(movies);

movies.forEach(m => {
     console.log(typeof m)}
    );


//elemento pasalinimas is masyvo

movies.pop();
console.log(movies);

//masyvo ilgis

console.log(movies.length);

//masyvas masyve

let players = [
    [`jonas`, [`pirmas`,8,7,6]],
    [`petras`, [8,7,6]],
    [ `antanas`, [8,7,6]]
];

//isvedimas i console

console.log(players[0][1][0]);
console.log(players[1][1][1]);
console.log(players[2][1][2]);

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length);

fruits.forEach(fruit => {
    console.log(fruit);
});

//uzduotis nr 2

fruits.push("Banana");
fruits[0] = "Pineapple";

fruits.forEach(fruit => {
    console.log(fruit);
});

console.log(fruits.length);


let employees = [`Jonas`, `Petras`, `Asta`, `Rita`, `Tomas`, `Mindaugas`, `Dalia`, `Saulius`, `Inga`];

employees.forEach(employee => {
    console.log(employee);
});

employees.push(`Ieva`, `Rasa`, `Vaida`, `Darius`);


console.log(`--------Prideti nauji darbuotojai--------`);

employees.forEach(employee => {
    console.log(employee);
});

employees = employees.filter(employee => !employee.endsWith('s') && !employee.endsWith('S'));

console.log(employees);


console.log(`--------Pasalinti darbuotojai--------`);

console.log(employees);

employees.forEach(employee => {
    console.log(employee);
});

console.log(`--------Pridetos pavardes--------`);

employees[2] += `Astaite`;
employees[3] += `Ritaite`;

employees.forEach(employee => {
    console.log(employee);
});






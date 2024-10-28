let vardai = ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas', 'Rita', 'Mindaugas'];
let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8];
let spalvos = ['Raudona', 'Zalia', 'Melyna', 'Geltona', 'Juoda'];

//1 uzduotis

let pirmiTrysVardai = vardai.slice(0, 3);

console.log(pirmiTrysVardai);

//2 uzduotis

let iskirptiSkaiciai = skaiciai.slice(3, 6);

console.log(iskirptiSkaiciai);

//3 uzduotis

let paskutinesDviSpalvos = spalvos.slice(-2);

console.log(paskutinesDviSpalvos);

//4 uzduotis

let vardaiCopy = vardai.slice().concat('Antanas');

console.log(vardai);
console.log(vardaiCopy);

//5 uzduotis

let firstAndLast = skaiciai.slice(1, -1);

console.log(firstAndLast);

let dvimatisMasyvas = 
[
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];

let naujasDvimatisMasyvas = dvimatisMasyvas.slice(0, 2);

console.log(naujasDvimatisMasyvas);

//6 uzduotis
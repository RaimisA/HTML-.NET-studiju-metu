let words = ['JavaScript', 'yra', 'galinga', 'kalba'];


//1 uzduotis
let joinedWords = words.join('');

console.log(joinedWords);

//2 uzduotis

let joinedWords2 = words.join(' ');

console.log(joinedWords2);

//4 uzduotis

let joinedWords4 = words.join('--');

console.log(joinedWords4);

//5 uzduotis

let joinedWords5 = words.join('!, ');

joinedWords5 += '!';

console.log(joinedWords5);

//6 uzduotis

//let joinedWords6 = words.join();
let joinedWords6 = words.toString();

console.log(joinedWords6);

//7 uzduotis

let darbuotojai = [
    ['Jonas', 'Jonaitis', 30, 'Programuotojas'],
    ['Asta', 'Astaitė', 25, 'Projektų vadovė'],
    ['Petras', 'Petraitis', 35, 'Analitikas'],
    ['Inga', 'Ingaitytė', 28, 'Testuotoja']
];

for (let d of darbuotojai)
{
    console.log(d.join(','));
}

console.log(darbuotojai);





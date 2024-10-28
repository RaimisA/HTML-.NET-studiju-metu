let pirmasMasyvas = [1, 2, 3];
let antrasMasyvas = [4, 5, 6];
let vardai1 = ['Jonas', 'Petras'];
let vardai2 = ['Asta', 'Inga'];
let spalvos = ['Raudona', 'Zalia', 'Melyna'];

// uzduotis 1
let naujasMasyvas = pirmasMasyvas.concat(antrasMasyvas);

console.log(naujasMasyvas);

// uzduotis 2
let naujasVarduMasyvas = vardai1.concat(vardai2, 'Antanas', 'Rita');
console.log(naujasVarduMasyvas);

// uzduotis 3
let naujasSpalvuMasyvas = spalvos.concat('Geltona');
console.log(naujasSpalvuMasyvas);

console.log(spalvos); //originalus masyvas nepasikeicia

// uzduotis 4
let naujasString = 'Labas'.concat(' ', 'Vakaras');
console.log(naujasString);


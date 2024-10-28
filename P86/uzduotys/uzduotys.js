
//uzduotis nr. 2
const person = {
    name: 'Petras',
    toysArray: ['kamuolys', 'masina', 'lėlė'],
    yearsOld: 55,
    birthDay: true,
    totalToys: null,
    friends: [
        {
            name: 'Jonas',
            occupation: 'daktaras',
        },
        {
            name: 'Antanas',
            occupation: 'vairuotojas',
        },
        {
            name: 'Kazys',
            occupation: 'mokytojas',
        }
    ],   
};

console.log(person);
('------------------------------------');
if (person.birthDay) {
    person.toysArray.shift();

    person.toysArray.push('Alus');

    person.yearsOld += 1;

    person.totalToys = person.toysArray.length;

    person.friends.forEach(friend => {
        console.log(`${friend.name} yra ${friend.occupation}`);
    });
}
('------------------------------------');
console.log(person);

//uzduotis nr. 3

const person2 = {
    name: 'Rosa',
    age: 120,
    alive: false,
    interests: ["swimming", "cards"],
};

// 1. Pakeisti vardą
person2.name = 'Rosita';

// 2. Sugeneruoti atsitiktinį amžių nuo 20 iki 120
const generateAge = () => {
    return Math.floor(Math.random() * (100)) + 20;
};

person2.age = generateAge();

// 3. Patikrinti, ar šis asmuo yra jaunesnis nei 100 metų
if (person2.age < 100) {
    person2.alive = !person.alive;

    person2.interests.push('enjoying life');
}

// 4. Iš‘console log‘inti atnaujintą masyvą
console.log(person2);
    


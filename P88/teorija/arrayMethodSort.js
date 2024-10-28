let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Sort the array in ascending order

console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// Sort with compare function

// sort atvirkščiai

let numbers = [4, 2, 5, 1, 3];

console.log(numbers.sort((a, b) => b - a)); // [ 5, 4, 3, 2, 1 ]

let people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jack', age: 40 }
];

let sortedPeople = people.sort((a, b) => a.age - b.age);
console.log(sortedPeople);

filterAndSortStudents = () => {
    let students = [
        { name: 'Jonas', grade: 4 },
        { name: 'Asta', grade: 9 },
        { name: 'Petras', grade: 6 },
        { name: 'Inga', grade: 2 },
        { name: 'Tomas', grade: 8 }
    ];
    let filteredStudents = students.filter(student => student.grade > 5);
    let sortedStudents = filteredStudents.sort((a, b) => b.grade - a.grade);
    return sortedStudents;
}

console.log(filterAndSortStudents());


/*----------------------------
Užduotis 5: Suraskite ir susumuokite unikalius teigiamus skaičius
 
Turite masyvą, kuriame yra teigiami ir neigiami skaičiai, kai kurie iš jų pasikartoja. Raskite unikalius teigiamus skaičius, surikiuokite juos didėjančia tvarka ir susumuokite.
 
Pradiniai duomenys:
let numbers = [3, -1, 4, 3, -2, 5, -3, 4, 6, 7];
 
Laukiamas rezultatas:
Surikiuoti unikalūs teigiami skaičiai: [3, 4, 5, 6, 7]
Suma: 25
*/

findAndSumUniquePositiveNumbers = () => {
    let numbers = [3, -1, 4, 3, -2, 5, -3, 4, 6, 7];
    let uniquePositiveNumbers = numbers.filter(number => number > 0)
        .filter((number, index, array) => array.indexOf(number) === index)
        .sort((a, b) => a - b);
    
    let sum = 0;
    uniquePositiveNumbers.map(number => sum += number);

    return { uniquePositiveNumbers, sum };
}
console.log(findAndSumUniquePositiveNumbers());
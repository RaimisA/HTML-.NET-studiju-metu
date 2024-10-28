oddNumbers = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let odd = numbers.filter(x => x % 2 !== 0);
    return odd;
}
console.log(oddNumbers());

findNames = () => {
    let names = ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas'];
    let namesLongerThan4 = names.filter(x => x.length > 4);
    return namesLongerThan4;
}
console.log(findNames());

fiterAge = () => {
    let people = [
        { name: 'Jonas', age: 25 },
        { name: 'Asta', age: 30 },
        { name: 'Petras', age: 35 },
        { name: 'Inga', age: 28 },
        { name: 'Tomas', age: 40 }];
    let olderThan30 = people.filter(x => x.age > 30);
    return olderThan30;
}
console.log(fiterAge());

filterNames = () => {
    let people = [
    { name: 'Jonas', age: 25 },
    { name: 'Asta', age: 30 },
    { name: 'Petras', age: 35 },
    { name: 'Inga', age: 28 },
    { name: 'Tomas', age: 40 }];
    let filterFirstJ = people.filter(x => x.name[0] === 'J');
    return filterFirstJ;
}
console.log(filterNames());
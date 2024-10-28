const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    hobbies: ['reading', 'music', 'sports'],
    address: {
        country: 'Lithuania',
        city: 'Siauliai'
    },
    getInitials() {
        return this.firstName[0] + this.lastName[0];
    },
};

console.log(person.getInitials());
person.hobbies.push('Gaminti maistą(Cookinti)');
console.log(person.hobbies);
console.log(person.hobbies[1]);
console.log(person.address.city);

person.email  = `john.doe@jonas.com`;
console.log(person.email);
person.isAgeOfConsent = function () {
    return this.age >= 18;
}

console.log(person.isAgeOfConsent());

const deepCopy = JSON.parse(JSON.stringify(person)); //deep copy

const {firstName, lastName, age} = person; //destruktūrizacija

console.log(firstName, lastName, age);

const newPerson = {firstName, vardas: lastName, age};
console.log(newPerson);
console.log(`---relational operators---`);

console.log(`---lygybe---`);
//lygybe (==). Sis operatorius tikrina ar du operandai yra lygus. Jei jie yra lygus, grazina true, kitu atveju - false.

let a1 = 5;
let b1 = 5;

console.log(`a1 == b1: ${a1 == b1}`); //true

let a2 = 5;
let b2 = 10;

console.log(`a2 == b2: ${a2 == b2}`); //false

let a3 = `5`;
let b3 = 5;

console.log(`a3 == b3: ${a3 == b3}`); //true

let a4 = `John`;
let b4 = `Doe`;

console.log(`a4 == b4: ${a4 == b4}`); //false

//idomesnis dalykas su objektais

let obj1 = { value: 10 };
let obj2 = { value: 10 };

console.log(`obj1 == obj2: ${obj1 == obj2}`); //false
let obj3 = obj1;
console.log(`obj1 == obj3: ${obj1 == obj3}`); //true

//nelygybe (!=). Sis operatorius tikrina ar du operandai nera lygus. Jei jie nera lygus, grazina true, kitu atveju - false.
console.log(`Nelygybe (!=)`);
console.log(`a1 != b1: ${a1 != b1}`); //false
console.log(`a2 != b2: ${a2 != b2}`); //true
console.log(`a3 != b3: ${a3 != b3}`); //false
console.log(`a4 != b4: ${a4 != b4}`); //true

//grieztas lygumas (===). Sis operatorius tikrina ar du operandai yra lygus ir ar jie yra tokio pacio tipo. Jei jie yra lygus ir tokio pacio tipo, grazina true, kitu atveju - false.

console.log(`Grieztas lygumas (===)`);
console.log(`a1 === b1: ${a1 === b1}`); //true
console.log(`a2 === b2: ${a2 === b2}`); //false
console.log(`a3 === b3: ${a3 === b3}`); //false
console.log(`a4 === b4: ${a4 === b4}`); //false

//grieztas nelygumas (!==). Sis operatorius tikrina ar du operandai nera lygus arba nera tokio pacio tipo. Jei jie nera lygus arba nera tokio pacio tipo, grazina true, kitu atveju - false.

console.log(`Grieztas nelygumas (!==)`);
console.log(`a1 !== b1: ${a1 !== b1}`); //false
console.log(`a2 !== b2: ${a2 !== b2}`); //true
console.log(`a3 !== b3: ${a3 !== b3}`); //true
console.log(`a4 !== b4: ${a4 !== b4}`); //true

//daugiau (>). Sis operatorius tikrina ar pirmasis operandas yra didesnis uz antraji. Jei taip, grazina true, kitu atveju - false.

console.log(`Daugiau (>)`);
let c1 = 5;
let d1 = 3;

console.log(`c1 > d1: ${c1 > d1}`); //true

let c2 = 3;
let d2 = 5;

console.log(`c2 > d2: ${c2 > d2}`); //false

let c3 = `John`;
let d3 = `Doe`;

console.log(`c3 > d3: ${c3 > d3}`); //true

//idojesnis atvejis su skaiciais kaip tekstu

let c4 = `2`;
let d4 = `12`;

console.log(`c4 > d4: ${c4 > d4}`); //true
console.log(`apple > banana: ${`apple` > `banana`}`); //false
console.log(`A> a: ${`A` > `a`}`); //false

//Automatinė tipų konversija palyginant skaičius ir simbolius
console.log(`Automatinė tipų konversija palyginant skaičius ir simbolius`);
console.log(`10 > 5: ${10 > 5}`); //true
console.log(`5` < 10); //true
console.log(`5 < '12': ${5 < `12`}`); //true

//maziau (<). Sis operatorius tikrina ar pirmasis operandas yra mazesnis uz antraji. Jei taip, grazina true, kitu atveju - false.

console.log(`Maziau (<)`);
console.log(`c1 < d1: ${c1 < d1}`); //false
console.log(`c2 < d2: ${c2 < d2}`); //true
console.log(`c3 < d3: ${c3 < d3}`); //false

//daugiau arba lygu (>=). Sis operatorius tikrina ar pirmasis operandas yra didesnis arba lygus uz antraji. Jei taip, grazina true, kitu atveju - false.

console.log(`Daugiau arba lygu (>=)`);
console.log(`c1 >= d1: ${c1 >= d1}`); //true
console.log(`c2 >= d2: ${c2 >= d2}`); //false
console.log(`c3 >= d3: ${c3 >= d3}`); //true

//maziau arba lygu (<=). Sis operatorius tikrina ar pirmasis operandas yra mazesnis arba lygus uz antraji. Jei taip, grazina true, kitu atveju - false.

console.log(`Maziau arba lygu (<=)`);
console.log(`c1 <= d1: ${c1 <= d1}`); //false
console.log(`c2 <= d2: ${c2 <= d2}`); //true
console.log(`c3 <= d3: ${c3 <= d3}`); //false

//palyginmas su null, undefined ir NaN

console.log(`Palyginmas su null, undefined ir NaN`);

console.log(`null == 0: ${null == 0}`); //false
console.log(`null < 1: ${null < 1}`); //true
console.log(`null > 1: ${null > 1}`); //false
console.log(`null == undefined: ${null == undefined}`); //true
console.log(`null === undefined: ${null === undefined}`); //false
console.log(`undefined > 0: ${undefined > 0}`); //false
console.log(`undefined < 0: ${undefined < 0}`); //false
console.log(`undefined == 0: ${undefined == 0}`); //false
console.log(`NaN == NaN`, NaN == NaN); //false


//santykiniai operatoriai su boolean reiksmemis

console.log(`Santykiniai operatoriai su boolean reiksmemis`);

console.log(`true > false: ${true > false}`); //true
console.log(`true < false: ${true < false}`); //false
console.log(`true == false: ${true == false}`); //false
console.log(`true >= false: ${true >= false}`); //true
console.log(`false == 0: ${false == 0}`); //true
console.log(`true == 1: ${true == 1}`); //true

//funkciju grazinamu reiksmiu palyginimas

console.log(`Funkciju grazinamu reiksmiu palyginimas`);

function return5() {
    return 5;
}

console.log(`return5() === 5: ${return5() === 5}`); //true



let x = 5;
const y = x++;

console.log(`x: ${x}, y: ${y}`); //x: 6, y: 5
  


    // let x5 = '7';
    // let y5 = 7;
    // console.log(x5 == y5);
    // console.log(x5 === y5);

    console.log(NaN == NaN);
    let a = 0;
    let b = false;
    console.log(a == b);
    console.log(a === b);

    console.log(5 < 6 < 7);
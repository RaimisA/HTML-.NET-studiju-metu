//And (&&) operatorius grazina true, jei abu operandai yra true. Kitu atveju grazina false.
console.log(`And (&&) operatorius`);
let a1 = true;
let b1 = true;

console.log(`a1 && b1: ${a1 && b1}`); //true

let a2 = true;
let b2 = false;

console.log(`a2 && b2: ${a2 && b2}`); //false

let a3 = false;
let b3 = true;

console.log(`a3 && b3: ${a3 && b3}`); //false

let a4 = false;
let b4 = false;

console.log(`a4 && b4: ${a4 && b4}`); //false

console.log (5 > 3 && 10 < 15); //true

//or (||) operatorius grazina true, jei bent vienas is operandu yra true. Kitu atveju grazina false.

console.log(`Or (||) operatorius`);

console.log(`a1 || b1: ${a1 || b1}`); //true
console.log(`a2 || b2: ${a2 || b2}`); //true
console.log(`a3 || b3: ${a3 || b3}`); //true
console.log(`a4 || b4: ${a4 || b4}`); //false

//not (!) operatorius grazina true, jei operandas yra false. Kitu atveju grazina false.

console.log(`Not (!) operatorius`);

console.log(`!a1: ${!a1}`); //false
console.log(`!a3: ${!a3}`); //true

//Trumpinimas (short-circuit evaluation)

console.log(`Trumpinimas (short-circuit evaluation)`);

let x = false;
let y = 10;

console.log(`x && y`, x && y); //false (kadangi x yra false, y netikrinimas)

let x1 = true;
let y1 = 10;

console.log(`x1 !! y1`, x1 || y1); //true (kadangi x yra true, y netikrinimas)


//loginiai operatoriai su ne logininemis reiksmemis

console.log(`loginiai operatoriai su ne logininemis reiksmemis`);

console.log(0 || "tekstas"); //tekstas
console.log(0 && "tekstas"); //0



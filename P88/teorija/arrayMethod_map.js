let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

//1. Parasykite funkcija, kur sukuria ir grazina skaiciu masyva, kurio elementai padauginti is 2

arrDoubled = () => {
    let doubledNumber = numbers.map(x => x * 2);
    return doubledNumber;
}

console.log(arrDoubled());

arrMultiplied = (number, arr) => {
    let multipliedNumbers = arr.map(x => x * number);
    return multipliedNumbers;
}

console.log(arrMultiplied(2, numbers));

const budgets = [
  {
    name: "Rytis",
    budget: 50,
  },
  {
    name: "Saulė",
    budget: 230,
  },
  {
    name: "Paulius",
    budget: 1500,
  },
  {
    name: "Gytis",
    budget: 92,
  },
  {
    name: "Sandra",
    budget: 7,
  },
];

const getBudgets = (arr) => {
    let sum = 0;
    arr.map(x => sum += x.budget);
    return sum;
}

console.log(getBudgets(budgets));

const getNames = (arr) => {
    return arr.map(x => x.name);
}
console.log(getNames(budgets));
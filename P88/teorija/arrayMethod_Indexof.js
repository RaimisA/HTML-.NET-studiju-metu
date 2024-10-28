uzduotis1 = () => {
    let vardai = ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas', 'Petras'];
    console.log(vardai.indexOf('Petras'));
}
uzduotis1();

uzduotis2 = () => {
    let skaiciai = [1, 2, 3, 4, 5, 3, 7, 8];
    let targetNumber = 3;
    let fromIndex = 4;
    console.log(skaiciai.indexOf(targetNumber, fromIndex));
}
uzduotis2();

uzduotis3 = () => {
    let spalvos = ['Raudona', 'Žalia', 'Mėlyna', 'Geltona', 'Žalia'];
    let spalva = 'Geltona';
    let result = spalvos.indexOf(spalva) !== -1 ? 'Suradau' : 'Nerasta';
    console.log(result);
}
uzduotis3();

uzduotis4 = (vardas) => {
    let vardai = ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas', 'Petras', 'Tomas', 'Petras'];
    let index = vardai.indexOf(vardas);
    let result = vardai.indexOf(vardas, index + 1);
    console.log(result);
}

uzduotis4();

uzduotis5 = (number) => {
    let skaiciai = [1, 2, 3, 4, 5, 3, 7, 8, 3, 3];
    let index = skaiciai.indexOf(number);
    let result = [];
    while (index !== -1) {
        result.push(index);
        index = skaiciai.indexOf(number, index + 1);
    }
    console.log(result);
}

uzduotis5(3);
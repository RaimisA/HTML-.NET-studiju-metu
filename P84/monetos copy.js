// Initial coin quantities
const monetos_rankoje = [3, 1, 10, 5, 0, 2, 7, 4];

// Coin weights in grams
const svoriai = [2.3, 3.06, 3.92, 4.10, 5.74, 7.80, 7.50, 8.50];

let bendras_svoris = 0;

// Function to calculate total weight

const getBendrasSvoris = () => {
    bendras_svoris = 0;
    for (let i = 0; i < monetos_rankoje.length; i++) {
        bendras_svoris += monetos_rankoje[i] * svoriai[i];
    }
    return bendras_svoris.toFixed(2);
};

const pridetiMoneta = (index, amount) => {
    if (monetos_rankoje[index] + amount >= 0)
        monetos_rankoje[index] += amount;
    console.log(`---------------------------------`);
    console.log(`Monetos rankoje`, monetos_rankoje);
    console.log(`Turimas svoris`, getBendrasSvoris());
}

remove_1ct.onclick = () => pridetiMoneta(0, -1);
add_1ct.onclick = () => pridetiMoneta(0, +1);

remove_2ct.onclick = () => pridetiMoneta(1, -1);
add_2ct.onclick = () => pridetiMoneta(1, +1);

remove_5ct.onclick = () => pridetiMoneta(2, -1);
add_5ct.onclick = () => pridetiMoneta(2, +1);

remove_10ct.onclick = () => pridetiMoneta(3, -1);
add_10ct.onclick = () => pridetiMoneta(3, +1);

remove_20ct.onclick = () => pridetiMoneta(4, -1);
add_20ct.onclick = () => pridetiMoneta(4, +1);

remove_50ct.onclick = () => pridetiMoneta(5, -1);
add_50ct.onclick = () => pridetiMoneta(5, +1);

remove_1e.onclick = () => pridetiMoneta(6, -1);
add_1e.onclick = () => pridetiMoneta(6, +1);

remove_2e.onclick = () => pridetiMoneta(7, -1);
add_2e.onclick = () => pridetiMoneta(7, +1);

console.log(getBendrasSvoris());

// Modifikuokite monetų svorio skaičiuoklės kodą taip, kad jis atvaizduotų:
// - Kiekvieno nominalo monetų turimą kiekį
// - Kiekvieno nominalo monetų turimą svorį
// - Padarykite, kad Nominalo svoris būtu neįhardkodintas, o paimtas iš masyvo

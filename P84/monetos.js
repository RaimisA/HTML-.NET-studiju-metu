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

const updateDisplay = () => {
    updateCoinQuantities();
    updateCoinWeights();
    updateTotalWeight();
    console.log(getBendrasSvoris());
};

const updateCoinQuantities = () => {
    const coinTypes = ['1ct', '2ct', '5ct', '10ct', '20ct', '50ct', '1e', '2e'];
    for (let i = 0; i < monetos_rankoje.length; i++) {
        const rankojeElement = document.getElementById(`rankoje_${coinTypes[i]}`);
        if (rankojeElement) {
            rankojeElement.innerText = monetos_rankoje[i];
        }
    }
};

const updateCoinWeights = () => {
    const coinTypes = ['1ct', '2ct', '5ct', '10ct', '20ct', '50ct', '1e', '2e'];
    for (let i = 0; i < monetos_rankoje.length; i++) {
        const turimasSvorisElement = document.getElementById(`turimas_svoris_${coinTypes[i]}`);
        const nominaloSvorisElement = document.getElementById(`nominalo_svoris_${coinTypes[i]}`);
        if (turimasSvorisElement && nominaloSvorisElement) {
            turimasSvorisElement.innerText = (monetos_rankoje[i] * svoriai[i]).toFixed(2);
            nominaloSvorisElement.innerText = svoriai[i];
        }
    }
};

const updateTotalWeight = () => {
    const bendrasSvorisElement = document.getElementById('bendras_svoris');
    if (bendrasSvorisElement) {
        bendrasSvorisElement.innerText = `Turimas svoris: ${getBendrasSvoris()} g`;
    }
};

const pridetiMoneta = (index, amount) => {
    if (monetos_rankoje[index] + amount >= 0)
        monetos_rankoje[index] += amount;
    updateDisplay();
}

// Attach event listeners dynamically
const coinTypes = ['1ct', '2ct', '5ct', '10ct', '20ct', '50ct', '1e', '2e'];
coinTypes.forEach((type, index) => {
    document.getElementById(`remove_${type}`).onclick = () => pridetiMoneta(index, -1);
    document.getElementById(`add_${type}`).onclick = () => pridetiMoneta(index, +1);
});

updateDisplay();

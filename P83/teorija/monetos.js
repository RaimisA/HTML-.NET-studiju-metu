// Initial coin quantities
let coinQuantities = [3, 1, 10, 5, 0, 2, 7, 4];

// Coin weights in grams
const coinWeights = {
    1: 2.3,
    2: 3.06,
    5: 3.92,
    10: 4.10,
    20: 5.74,
    50: 7.80,
    100: 7.50,
    200: 8.50
};

// Function to calculate total weight
function calculateTotalWeight() {
    let totalWeight = 0;
    const coinValues = [1, 2, 5, 10, 20, 50, 100, 200];
    
    for (let i = 0; i < coinQuantities.length; i++) {
        switch (coinValues[i]) {
            case 1:
                totalWeight += coinQuantities[i] * coinWeights[1];
                break;
            case 2:
                totalWeight += coinQuantities[i] * coinWeights[2];
                break;
            case 5:
                totalWeight += coinQuantities[i] * coinWeights[5];
                break;
            case 10:
                totalWeight += coinQuantities[i] * coinWeights[10];
                break;
            case 20:
                totalWeight += coinQuantities[i] * coinWeights[20];
                break;
            case 50:
                totalWeight += coinQuantities[i] * coinWeights[50];
                break;
            case 100:
                totalWeight += coinQuantities[i] * coinWeights[100];
                break;
            case 200:
                totalWeight += coinQuantities[i] * coinWeights[200];
                break;
        }
    }
    
    return totalWeight.toFixed(2);
}

// Function to update coin quantity and recalculate weight
function updateCoinQuantity(index, increment) {
    coinQuantities[index] += increment;
    console.log(`Total weight: ${calculateTotalWeight()} grams`);
}

// Create buttons and add event listeners
window.onload = function() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    
    for (let i = 0; i < coinQuantities.length; i++) {
        const incrementButton = document.createElement('button');
        incrementButton.innerText = `Add coin ${i + 1}`;
        incrementButton.addEventListener('click', () => updateCoinQuantity(i, 1));
        container.appendChild(incrementButton);
        
        const decrementButton = document.createElement('button');
        decrementButton.innerText = `Remove coin ${i + 1}`;
        decrementButton.addEventListener('click', () => updateCoinQuantity(i, -1));
        container.appendChild(decrementButton);
    }
    
    console.log(`Initial total weight: ${calculateTotalWeight()} grams`);
};


function checkAccess(age) {
    let access = age >= 18 ? "Granted" : "Denied";
    console.log(typeof(access));
}

checkAccess("18");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

function arPalindromas(zodis) {
    let atvirksciasZodis = '';
    for (let i = zodis.length - 1; i >= 0; i--) {
        atvirksciasZodis += zodis[i];
    }
    if (zodis === atvirksciasZodis) {
        console.log(zodis + ' - palindromas');
    } else {
        console.log(zodis + ' - ne palindromas');
    }
}

//testuojam
arPalindromas('savas'); //palindromas
arPalindromas('kazkas'); //ne palindromas
arPalindromas('kayak'); //palindromas
arPalindromas('rotator'); //palindromas
arPalindromas('mama'); //ne palindromas

//pasirinkau šiuos žodžius, kad patikrinti abu variantus, kai žodis yra palindromas ir kai ne.



function sumaIki100(x) {
    let suma = 0;
    for (let i = x; i <= 100; i++) {
        suma += i;
    }
    return suma;
}

// Testtuojam
console.log(sumaIki100(-1)); //5049
console.log(sumaIki100(0)); //5050
console.log(sumaIki100(1)); //5050

console.log(sumaIki100(99)); //199
console.log(sumaIki100(100)); //100
console.log(sumaIki100(101)); //0

// Testuoju su ribinėmis reikšmėmis.

// Coin weights in grams
const weights = {
    '1ct': 2.3,
    '2ct': 3.06,
    '5ct': 3.92,
    '10ct': 4.10,
    '50ct': 7.80,
    '1€': 7.50,
    '2€': 8.50
};

let totalWeight = 0;

// Function to get user input
function getCoinAmount(coinType) {
    return parseInt(prompt(`Enter the number of ${coinType} coins:`), 10);
}

// List of coin types
const coinTypes = ['1ct', '2ct', '5ct', '10ct', '50ct', '1€', '2€'];

for (let coin of coinTypes) {
    let amount = getCoinAmount(coin);
    switch (coin) {
        case '1ct':
            totalWeight += amount * weights['1ct'];
            break;
        case '2ct':
            totalWeight += amount * weights['2ct'];
            break;
        case '5ct':
            totalWeight += amount * weights['5ct'];
            break;
        case '10ct':
            totalWeight += amount * weights['10ct'];
            break;
        case '50ct':
            totalWeight += amount * weights['50ct'];
            break;
        case '1€':
            totalWeight += amount * weights['1€'];
            break;
        case '2€':
            totalWeight += amount * weights['2€'];
            break;
        default:
            console.log('Unknown coin type');
    }
}

console.log(`Total weight of the coins is ${totalWeight} grams.`);
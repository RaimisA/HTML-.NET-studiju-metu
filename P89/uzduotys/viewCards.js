document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    const flipCardButton = document.getElementById('flipCard');
    const nextCardButton = document.getElementById('nextCard');
    const prevCardButton = document.getElementById('prevCard');
    const addMoreCardsButton = document.getElementById('addMoreCards');

    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    let currentIndex = 0;
    let isFlipped = false;

    const updateCard = () => {
        if (cards.length === 0) {
            cardContainer.querySelector('.front').textContent = 'No cards available';
            cardContainer.querySelector('.back').textContent = '';
        } else {
            cardContainer.querySelector('.front').textContent = cards[currentIndex].frontText;
            cardContainer.querySelector('.back').textContent = cards[currentIndex].backText;
        }
    };

    flipCardButton.addEventListener('click', () => {
        isFlipped = !isFlipped;
        cardContainer.querySelector('.card').classList.toggle('flipped', isFlipped);
    });

    nextCardButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCard();
    });

    prevCardButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCard();
    });

    addMoreCardsButton.addEventListener('click', () => {
        window.location.href = 'uzduotis4.html';
    });

    updateCard();
});
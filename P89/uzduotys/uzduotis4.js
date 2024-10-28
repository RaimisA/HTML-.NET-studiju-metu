document.addEventListener('DOMContentLoaded', () => {
    const cardForm = document.getElementById('cardForm');
    const viewCardsButton = document.getElementById('viewCards');

    cardForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const frontText = document.getElementById('frontText').value;
        const backText = document.getElementById('backText').value;

        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.push({ frontText, backText });
        localStorage.setItem('cards', JSON.stringify(cards));

        alert('Card saved!');
        cardForm.reset();
    });

    viewCardsButton.addEventListener('click', () => {
        window.location.href = 'viewCards.html';
    });
});
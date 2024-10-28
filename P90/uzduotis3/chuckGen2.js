document.getElementById('addJoke').addEventListener('click', () => {
    const cardContainer = document.getElementById('cardContainer');
    const totalCardsSpan = document.getElementById('totalCards');
    const totalCharactersSpan = document.getElementById('totalCharacters');

    const apiUrl = `https://api.chucknorris.io/jokes/random`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const card = document.createElement('div');
            card.classList.add('joke-card');

            const imgElement = document.createElement('img');
            imgElement.src = 'https://picsum.photos/200'; 
            card.appendChild(imgElement);

            const jokeElement = document.createElement('p');
            jokeElement.textContent = data.value;
            card.appendChild(jokeElement);

            const updatedElement = document.createElement('p');
            updatedElement.textContent = `Updated: ${data.updated_at}`;
            card.appendChild(updatedElement);

            const linkElement = document.createElement('a');
            linkElement.href = data.url;
            linkElement.textContent = 'Link to Joke';
            linkElement.target = '_blank';
            card.appendChild(linkElement);

            const changeColorButton = document.createElement('button');
            changeColorButton.textContent = 'Change Color';
            changeColorButton.addEventListener('click', () => {
                card.style.background = `linear-gradient(${getRandomColor()}, ${getRandomColor()})`;
            });
            card.appendChild(changeColorButton);

            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.addEventListener('click', () => {
                cardContainer.removeChild(card);
                updateStats();
            });
            card.appendChild(closeButton);

            cardContainer.appendChild(card);
            updateStats();
        });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function updateStats() {
        const cards = cardContainer.getElementsByClassName('joke-card');
        totalCardsSpan.textContent = `Total Cards: ${cards.length}`;

        let totalCharacters = 0;
        for (let card of cards) {
            const jokeText = card.querySelector('p').textContent;
            totalCharacters += jokeText.length;
        }
        totalCharactersSpan.textContent = `Total Characters: ${totalCharacters}`;
    }
});
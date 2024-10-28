document.getElementById('generateJokes').addEventListener('click', () => {
    const jokeCount = document.getElementById('jokeCount').value;
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerHTML = '';

    if (jokeCount > 0) {
        const apiUrl = `https://api.chucknorris.io/jokes/random`;

        for (let i = 0; i < jokeCount; i++) {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const jokeElement = document.createElement('p');
                    jokeElement.textContent = data.value;
                    jokeContainer.appendChild(jokeElement);
                });
        }
    } else {
        jokeContainer.textContent = 'Please enter a valid number.';
    }
});
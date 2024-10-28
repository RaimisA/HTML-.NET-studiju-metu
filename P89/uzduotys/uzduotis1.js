document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const displayText = document.getElementById('displayText');
    const form = document.getElementById('myForm');

    textInput.addEventListener('keyup', () => {
        displayText.textContent = textInput.value;
    });

    form.addEventListener('submit', () => {
        localStorage.setItem('savedText', textInput.value);
        alert('Text saved to LocalStorage!');
    });
});
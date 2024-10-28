document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const displayText = document.getElementById('displayText');
    const form = document.getElementById('myForm');

    textInput.addEventListener('keyup', () => {
        displayText.textContent = textInput.value;
    });

    form.addEventListener('submit', () => {
        let texts = JSON.parse(localStorage.getItem('texts')) || [];
        texts.push(textInput.value);
        localStorage.setItem('texts', JSON.stringify(texts));

        const randomText = texts[Math.floor(Math.random() * texts.length)];
        
        alert("random text from array: " + randomText);
    });
});
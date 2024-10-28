document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('number');
    const form = inputField.parentElement;

    inputField.addEventListener('blur', () => {
        const value = inputField.value.trim();

        const existingMessageBox = document.querySelector('.message-box');
        if (existingMessageBox) {
            existingMessageBox.remove();
        }

        if (value === '') {
            return;
        }

        const messageBox = document.createElement('p');
        messageBox.classList.add('message-box');

        if (isNaN(value) || value < 0 || value > 99) {
            messageBox.innerText = `Tai yra ne skaičius ARBA mažesnis už 0 ARBA didesnis už 99, jūs įvedėte ${value}`;
            messageBox.classList.add('below');
        } else {
            messageBox.innerText = 'Tai yra skaičius tarp 0 ir 99.';
            messageBox.classList.add('above');
        }

        form.appendChild(messageBox);
    });
});
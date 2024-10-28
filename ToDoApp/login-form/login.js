document.addEventListener('DOMContentLoaded', function() {
    const BASE_URL = 'https://localhost:7171/api';
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch(`${BASE_URL}/Auth?username=${username}&password=${password}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Invalid credentials');
            }
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = '../todo/todo.html';
        })
        .catch(error => {
            document.getElementById('error-message').style.display = 'block';
            console.error('Error:', error);
        });
    });
});
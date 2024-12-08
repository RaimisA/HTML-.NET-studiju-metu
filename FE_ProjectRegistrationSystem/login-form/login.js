document.addEventListener('DOMContentLoaded', function() {
    const BASE_URL = 'https://localhost:7117/api';
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = { username: username, password: password };

        fetch(`${BASE_URL}/Authentication/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Invalid credentials');
            }
        })
        .then(data => {
            const token = data.token;
            const payload = JSON.parse(atob(token.split('.')[1]));
            const personId = payload.PersonId;

            if (!personId) {
                throw new Error('PersonId claim not found in token');
            }

            localStorage.setItem('token', token);
            localStorage.setItem('personId', personId);
            localStorage.setItem('username', username); // Store the username
            window.location.href = '../userRegSys/userRegSys.html';
        })
        .catch(error => {
            document.getElementById('error-message').style.display = 'block';
            console.error('Error during login:', error);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const BASE_URL = 'https://localhost:7117/api';
    const registerForm = document.getElementById('register-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            errorMessage.style.display = 'block';
            return;
        }

        const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
        if (!passwordPattern.test(password)) {
            errorMessage.textContent = 'Password must be at least 6 characters long, contain at least one uppercase letter, and at least one special symbol.';
            errorMessage.style.display = 'block';
            return;
        }

        const user = { username: username, password: password };

        fetch(`${BASE_URL}/Authentication/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(errorData.error || 'Network response was not ok');
                });
            }
            return response.text();
        })
        .then(text => {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000);
        })
        .catch(error => {
            errorMessage.textContent = 'Registration failed. Please try again.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        });
    });
});
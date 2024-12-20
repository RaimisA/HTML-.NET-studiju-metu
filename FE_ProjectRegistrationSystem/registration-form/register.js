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

        const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (!passwordPattern.test(password)) {
            errorMessage.textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter, and at least one special symbol.';
            errorMessage.style.display = 'block';
            return;
        }

        const user = { username: username, password: password, confirmPassword: confirmPassword };

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
                    console.error('Error data:', errorData); // Log the error data
                    if (response.status === 400 && errorData.message === 'User already exists.') {
                        throw new Error('User already exists');
                    } else {
                        throw new Error(errorData.message || 'Network response was not ok');
                    }
                });
            }
            return response.json();
        })
        .then(data => {
            successMessage.textContent = 'Registration successful. Redirecting to Login';
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            setTimeout(() => {
                window.location.href = '../login-form/login.html';
            }, 2000);
        })
        .catch(error => {
            console.error('Error during registration:', error); // Log the error
            if (error.message === 'User already exists') {
                errorMessage.textContent = 'User already exists. Please choose a different username.';
            } else {
                errorMessage.textContent = 'Registration failed. Please try again.';
            }
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        });
    });
});

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}
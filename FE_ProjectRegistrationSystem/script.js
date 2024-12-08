document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('register-button');
    const loginButton = document.getElementById('login-button');

    registerButton.addEventListener('click', function() {
        window.location.href = 'registration-form/register.html';
    });

    loginButton.addEventListener('click', function() {
        window.location.href = 'login-form/login.html';
    });
});
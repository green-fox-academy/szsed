'use strict';

const icon = document.querySelector('i');
const passwordField = document.querySelector('input[type="password"]');

icon.addEventListener('click', () => {
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
    passwordField.getAttribute('type') === 'password' ?
        passwordField.setAttribute('type', 'text') :
        passwordField.setAttribute('type', 'password');
});
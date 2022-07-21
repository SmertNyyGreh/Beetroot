import { loginData } from './data.js';

const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password-input');
const passwordShowButton = document.getElementById('password-show-button');
const passwordHideButton = document.getElementById('password-hide-button');
const closedModalButoon = document.querySelector('.button-closed-modal');
const modalWindov = document.querySelector('.div-confirm-login');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const userName = formData.get('username');
  const password = formData.get('password');

  if (userName === loginData.username && password === loginData.password) {
    setTimeout(() => modalWindov.style.display='block', 1000);
  } else setTimeout(() => alert('Username or password is incorrect'), 1000);
});

passwordShowButton.addEventListener('click', () => {
  if (passwordInput.getAttribute('type') === 'password') { // getAttribute('type') - дістаємо значення атрибута type у інпута
    passwordInput.setAttribute('type', 'text'); // setAttribute - змінюємо значення атрибута type на text
    passwordShowButton.style.display = 'none';
    passwordHideButton.style.display = 'block';
  }
});

passwordHideButton.addEventListener('click', () => {
  if (passwordInput.getAttribute('type') === 'text') {
    passwordInput.setAttribute('type', 'password');
    passwordShowButton.style.display = 'block';
    passwordHideButton.style.display = 'none';
  }
});

function changeStyleClosedButton(){
   modalWindov.style.display='none';
   closedModalButoon.removeEventListener('click', )
}
closedModalButoon.addEventListener('click', changeStyleClosedButton);

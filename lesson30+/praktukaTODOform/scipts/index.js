import { a } from "../scipts/todoList.js";

const button = document.querySelector('#button');

button.addEventListener('click', a);

document.addEventListener('contextmenu', (e) => {
   e.preventDefault();
});


// const loginForm = document.querySelector('#login-form');

// loginForm.addEventListener('submit', (event) => {
//    event.preventDefault();
//    const formData = new FormData(event.target);

//    const userName = formData.get('username');
//    const password = formData.get('password');
//    console.log(userName);
//    console.log(password);
// });

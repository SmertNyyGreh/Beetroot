const todoList = document.querySelector('#todoList');
const doneList = document.querySelector('#doneList');
const undoneList = document.querySelector('#undoneList');
const input = document.querySelector('input');

const a = () => {
   if (input.value !== '') {
      const liElement = document.createElement('li');
      liElement.innerText = input.value;
      todoList.appendChild(liElement);
      input.value = '';
      liElement.addEventListener('dblclick', (e) => {
         liElement.remove();
         doneList.appendChild(liElement);
      });
      liElement.addEventListener('mousedown', (e) => {
         if (e.button === 2) {
            liElement.remove();
            undoneList.appendChild(liElement);
         }
      });
   } //else alert('a');
};

export { a };

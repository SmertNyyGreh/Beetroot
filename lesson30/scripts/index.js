const idDiv = document.getElementById('div');

const key = {
   cntrl: false,
   e: false,
   s: false,
};

document.addEventListener('keydown', (event) => {
   if (event.key === 'Control') {
      key.cntrl = true;
   } else if (event.key === 'e' || event.key === 'у') {
      key.e = true;
   } else if (event.key === 's' || event.key === 'ы' || event.key === 'і') {
      key.s = true;
   }
   if (key.cntrl && key.e) {
      event.preventDefault();
      idDiv.style.display = 'none';
      const body = document.body;
      const elementTextarea = document.createElement('textarea');
      body.appendChild(elementTextarea);
      elementTextarea.innerHTML = idDiv.textContent;
   } else if (key.cntrl && key.s) {
      event.preventDefault();
      const elementTextarea = document.body.children[3];
      elementTextarea.style.display = 'none';
      idDiv.style.display = 'block';
      elementTextarea.addEventListener('change', (event) => {
         idDiv.innerHTML = event.target.value;
      })
   }
});

document.addEventListener('keyup', (event) => {
   event.preventDefault();
   if (event.key === 'Control') {
      key.cntrl = false;
   } else if (event.key === 'e' || event.key === 'у') {
      key.e = false;
   } else if (event.key === 's' || event.key === 'ы' || event.key === 'і') {
      key.s = false;
   }
});

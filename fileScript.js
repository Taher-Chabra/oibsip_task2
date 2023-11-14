const dialogButtons = document.querySelectorAll('[data-bs-toggle = modal]');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.btn-close');
const backdrop = document.querySelector('.modal-backdrop');
const body = document.body;

//Blur background and disable pointer events
dialogButtons.forEach( button => {
   button.addEventListener('click', function() {
      backdrop.style.display = 'block';
      body.style.pointerEvents = 'none'
   });
});

//Un-blur background and enable pointer events
closeButtons.forEach(button => {
   button.addEventListener('click', function() {
      backdrop.style.display = 'none';
      body.style.pointerEvents = 'all'
   });
});
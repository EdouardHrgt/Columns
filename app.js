const buttons = document.querySelectorAll('.buttons');
let container = document.querySelector('.modal-container');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.modal-title i');

    modal.classList.add('modal-active');
    overlay.classList.add('overlay-active');

    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('overlay-active');
      modal.classList.remove('modal-active');
    });

  });
});

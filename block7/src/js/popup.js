const popup = document.querySelector('.popup');
const popupMenu = document.querySelector('.popup__menu');
const body = document.body;

popupMenu.addEventListener('click', popupMenuHandler);

function popupMenuHandler() {
  popup.classList.toggle('open');
  body.classList.toggle('noscroll');
}


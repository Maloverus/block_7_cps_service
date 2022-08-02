const menuListBtn = document.querySelectorAll('.menu-list__btn');
const popupMenuListItem = document.querySelectorAll('.popup-menu__list-item');


function toggleClass(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (e) {
      let current = this;
      for (let i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          elem[i].classList.remove('active');
        } else if (current.classList.contains('active') === true) {
          current.classList.remove('active');
        } else {
          current.classList.add('active')
        }
      }
      e.preventDefault();
    });
  }
}

function toggleClassPopup(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (e) {
      let current = this;
      for (let i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          elem[i].classList.remove('popup-menu__list-item--active');
        } else if (current.classList.contains('popup-menu__list-item--active') === true) {
          current.classList.remove('popup-menu__list-item--active');
        } else {
          current.classList.add('popup-menu__list-item--active')
        }
      }
      e.preventDefault();
    });
  }
}

toggleClass(menuListBtn);
toggleClassPopup(popupMenuListItem);

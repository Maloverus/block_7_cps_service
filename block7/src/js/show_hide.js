const showHideButton = document.querySelector('.show-hide__button');
const aboutUs = document.querySelector('.about-us');
const heightAboutUs = aboutUs.style.height;
const height = '100%';


showHideButton.addEventListener('click', showHide);

function showHide() {
  if (aboutUs.style.height < height) {
    aboutUs.style.height = height;
    showHideButton.textContent = "Скрыть";
  }
  else {
    aboutUs.style.height = heightAboutUs;
    showHideButton.textContent = "Читать далее";

  }
}

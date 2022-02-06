const popup = document.querySelector('#popupMenu');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.classList.remove('popup_hidden');
}

function closePopup() {
  const popup = document.querySelector('.popup_opened');
  popup.classList.remove('popup_opened');
  popup.classList.add('popup_hidden');
}

function showMenu() {
  openPopup(popup);
}

function closeMenu() {
  closePopup(popup);
}

const menu = document.querySelector('.header__menu-button');
menu.addEventListener('click', showMenu);

const about = document.querySelector('#about-link-item');
about.addEventListener('click', closeMenu);

const looks = document.querySelector('#looks-link-item');
looks.addEventListener('click', closeMenu);

const footer = document.querySelector('#footer-link-item');
footer.addEventListener('click', closeMenu);

const closeButtons = document.querySelector('.popup__close');
closeButtons.addEventListener('click', closeMenu);

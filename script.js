const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const icon = hamburger.querySelector('.fa-bars');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('mobile-list-active');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
})
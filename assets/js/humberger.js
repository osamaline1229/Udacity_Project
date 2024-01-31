const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navbar');
const navMenu_1 = document.getElementById('navbar-1');


hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('active');
  navMenu_1.classList.toggle('active');
});
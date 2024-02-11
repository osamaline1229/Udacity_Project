const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navbar');


hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('active');
});
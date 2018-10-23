let navButton = document.querySelector('div.burger');
let navbar = document.querySelector('div.navbar');

navButton.addEventListener('click', toggleNav);

function toggleNav () {
  navbar.classList.toggle('open');
}

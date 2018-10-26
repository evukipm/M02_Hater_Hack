let openButton = document.querySelector('div.menu div.nav-elements');
let navbar = document.querySelector('div.navbar');
let closeButton = document.querySelector('div.fas div.fa-sort-up');

openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);

function openNav () {
  navbar.classList.add('open');
}

function closeNav () {
  navbar.classList.remove('open');
}

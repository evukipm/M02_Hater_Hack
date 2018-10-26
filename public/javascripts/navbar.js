let openButton = document.querySelector('i.fa-bars');
let navbar = document.querySelector('div.navbar');
let closeButton = document.querySelector('i.fa-sort-up');
let mainContainer = document.querySelector('div.main-container');

openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);

function openNav () {
  navbar.classList.add('open');
  mainContainer.classList.add('move');
}

function closeNav () {
  navbar.classList.remove('open');
  mainContainer.classList.remove('move');
}

let openButton = document.querySelector('i.fa-bars');
let navbar = document.querySelector('div.navbar');
let closeButton = document.querySelector('i.fa-sort-up');

openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);

function openNav () {
  navbar.classList.add('open');
}

function closeNav () {
  navbar.classList.remove('open');
}

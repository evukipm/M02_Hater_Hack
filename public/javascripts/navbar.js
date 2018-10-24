let openButton = document.querySelector('div.burger');
let navbar = document.querySelector('div.navbar');
let closeButton = document.querySelector('div.nav-close');
let post = document.querySelector('div.post-container');

openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);

function openNav () {
  navbar.classList.add('open');
  post.classList.add('move');
}

function closeNav () {
  navbar.classList.remove('open');
  post.classList.remove('move');
}

const navbar = document.querySelector('.navbar');
const search = document.querySelector('.search-box');

let mediaqueryList = window.matchMedia("(min-width: 769px)");

document.querySelector('.navbar-responsive').onclick = () => {
  navbar.classList.remove('inactiveNav');
  navbar.classList.add('activeNav');
};
document.querySelector('.navbar-closed').onclick = () => {
  navbar.classList.add('inactiveNav');
  navbar.classList.remove('activeNav');
};
document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
};

if(mediaqueryList.matches) {
  navbar.classList.remove('inactiveNav');
  navbar.classList.remove('activeNav');
}

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
}


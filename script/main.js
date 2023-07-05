const navbar = document.querySelector('.navbar');
const search = document.querySelector('.search-box');

// let mediaqueryList = window.matchMedia("(min-width: 769px)");

let activeNavbar = false;

document.querySelector('.navbar-responsive').onclick = () => {

  if(activeNavbar) {
    navbar.classList.add('navbar--inactive');
    navbar.classList.remove('navbar--active');
  }
  else {
    navbar.classList.remove('navbar--inactive');
    navbar.classList.add('navbar--active');
  }

  activeNavbar = !activeNavbar;
};
document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('search-box--active');
};

// if(mediaqueryList.matches) {
//   navbar.classList.remove('inactiveNav');
//   navbar.classList.remove('activeNav');
// }

// mediaqueryList.addListener(function(EventoMediaQueryList) {
//   if(EventoMediaQueryList.matches) {
//     navbar.classList.remove('inactiveNav');
//     navbar.classList.remove('activeNav');
//   }
//   else {
//     navbar.classList.add('inactiveNav');
//   }
// });


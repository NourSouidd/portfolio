import "bootstrap";

const navbar = document.querySelector('.navbar-portfolio');
console.log(navbar);
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
      navbar.classList.add('navbar-purple');
    } else {
      navbar.classList.remove('navbar-purple');
    }
  });
}
// const initUpdateNavbarOnScroll = () => {
// }

// document.addEventListener('turbolinks:load', () => {
//   initUpdateNavbarOnScroll();
// });

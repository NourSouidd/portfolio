import "bootstrap";

const navbar = document.querySelector('.navbar-portfolio');
console.log(navbar);
if (navbar) {
  window.addEventListener('scroll', () => {
    const banner = (70 / 100) * window.innerHeight
    if (window.scrollY >= banner) {
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

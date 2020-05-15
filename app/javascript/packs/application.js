import "bootstrap";
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
const initSweetalert = (selector, options = {}) => {
  const swalButton = document.querySelector(selector);
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal(options);
    });
  }
};

initSweetalert('.confirm', {
  title: "Thank you! 🙂",
  text: "Can't wait to work with you.",
  icon: "success",
  buttons: false,
  timer: 2500,
});





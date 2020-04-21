import "bootstrap";
// import initUpdateNavbarOnScroll from "./navbar.js";

// particlesJS.load(@dom-id, @path-json, @callback (optional));
document.addEventListener('turbolinks:load', () => {
  console.log('heyyy');
  initUpdateNavbarOnScroll();
});

const initUpdateNavbarOnScroll = () => {
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
}


// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

import "bootstrap";


const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-portfolio');
  console.log("heyy");
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

document.addEventListener('turbolinks:load', () => {
  initUpdateNavbarOnScroll();
});

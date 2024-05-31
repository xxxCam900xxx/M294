const menuToggle= document.querySelector('button.mobile-menu-toggle');
const mobileMenu= document.querySelector('nav.mobile-menu');

menuToggle.addEventListener('click', function () {
    if (menuToggle.classList.contains('active')) {
      mobileMenu.classList.remove('open');
      menuToggle.classList.remove('active');
    } else {
      mobileMenu.classList.add('open');
      menuToggle.classList.add('active');
    }
  })
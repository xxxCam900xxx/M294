const menuToggle= document.querySelector('button.mobile-menu-toggle');
const mobileMenu= document.querySelector('nav.mobile-menu');

menuToggle.addEventListener('click', function () {
    if(mobileMenu.classList.contains('open')){
      mobileMenu.classList.remove('open');
      menuToggle.innerHTML = 'Menu';
    } else {
      mobileMenu.classList.add('open');
      menuToggle.innerHTML = 'Close';
    }
  })
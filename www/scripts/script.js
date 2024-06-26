//AOS animation
AOS.init({
  // once: true,
});

//Open/Close burger menu
const burger = document.querySelector('.js-header-burger');
const nav = document.querySelector('.js-nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

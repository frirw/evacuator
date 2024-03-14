const scrollUpButton = document.querySelector('.scroll-up-btn');

scrollUpButton.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    scrollUpButton.classList.add('show');
    scrollUpButton.classList.remove('hide');
  } else {
    scrollUpButton.classList.add('hide');
    scrollUpButton.classList.remove('show');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const service = document.querySelector('.main-nav__service');
service.addEventListener('click', scrollServiceHandler);
function scrollServiceHandler () {
  event.preventDefault();
  window.scrollTo(0, 6250);
}

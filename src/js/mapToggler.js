console.log('This is rainbows.js');
const mapTrigger = document.querySelector('.map__header');
const openMap = document.querySelector('.map__map');
function toggleHandler () {
  if (openMap.style.display === 'none') {
    openMap.style.display = 'block'
    window.initMap();
  } else {
    openMap.style.display = 'none'
  }
};
mapTrigger.addEventListener('click', toggleHandler);

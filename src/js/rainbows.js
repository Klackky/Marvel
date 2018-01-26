console.log('This is rainbows.js');
const mapTrigger = document.querySelector('.map');
const map = document.querySelector('.map__map');
mapTrigger.addEventListener('click', toggleHandler);
function toggleHandler () {
  if (map.style.display === 'none') {
    map.style.display = 'block'
  } else {
    map.style.display = 'none'
  }
};

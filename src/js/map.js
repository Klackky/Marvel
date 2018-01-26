'use strict';
function initMap() {
     var uluru = {lat: -33.925752, lng: 18.429870};
     var map = new google.maps.Map(document.querySelector('.map__map'), {
       zoom: 16,
       center: uluru
     });
     var marker = new google.maps.Marker({
       position: uluru,
       map: map
     });
   }
window.initMap = initMap;

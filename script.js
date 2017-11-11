const APIKEY="AIzaSyBqYGSObfjSXEGV-ZfiLEqmf4P6JQ8KU6k";
var email = document.getElementById('name');

var phone = document.getElementById('email');
var name = document.getElementById('name');
var address = document.getElementById('address');
var search = document.getElementById('search');

 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
        var marker = new google.maps.Marker({
          position: {lat: -34.397, lng: 150.644},
          map: map,
          title: 'Hello World!'
        });

        var autocomplete = new google.maps.places.Autocomplete(search);
        autocomplete.addListener('place_changed', function() {
       
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
          marker.setPosition(place.geometry.location);
address.textContent = place.formatted_address;
          marker.setVisible(true);
          });
      }
let map;

function initMap() {
  const locationInput = document.getElementById("location");
  if (locationInput) {
    const service = new google.maps.places.PlacesService(map);
    service.textSearch({ location: map.getCenter(), query: locationInput.value }, displayResults);
  }
}

function displayResults(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    const marker = new google.maps.Marker({
      position: results[0].geometry.location,
      map: map,
      title: results[0].formatted_address,
    });
    map.setCenter(results[0].geometry.location);
  }
}

function codeAddress() {
  const locationInput = document.getElementById("location");
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: locationInput.value }, (results, status) => {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      locationInput.value = "";
    } else {
      alert("Geocode was not successful: " + status);
    }
  });
}
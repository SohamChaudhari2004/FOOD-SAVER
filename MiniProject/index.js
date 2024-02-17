document.addEventListener("DOMContentLoaded", function() {
    // Fetch data for hostels
    fetch('https://yelpapiserg-osipchukv1.p.rapidapi.com/getAutocomplete')
        .then(response => response.json())
        .then(data => {
            const hostelList = document.querySelector('#hostels .listings');
            data.forEach(hostel => {
                const listItem = document.createElement('li');
                listItem.textContent = hostel.name; // Adjust this according to your data structure
                hostelList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching hostels:', error));

    // Fetch data for hotels
    fetch('https://example.com/api/hotels')
        .then(response => response.json())
        .then(data => {
            const hotelList = document.querySelector('#hotels .listings');
            data.forEach(hotel => {
                const listItem = document.createElement('li');
                listItem.textContent = hotel.name; // Adjust this according to your data structure
                hotelList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching hotels:', error));

    // Fetch data for caterers
    fetch('https://example.com/api/caterers')
        .then(response => response.json())
        .then(data => {
            const catererList = document.querySelector('#caterers .listings');
            data.forEach(caterer => {
                const listItem = document.createElement('li');
                listItem.textContent = caterer.name; // Adjust this according to your data structure
                catererList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching caterers:', error));
});

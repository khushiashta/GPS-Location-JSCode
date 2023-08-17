// Check if Geolocation is available in the browser
if ("geolocation" in navigator) {
    // Get the reference to the HTML element where we want to display the location
    const locationElement = document.getElementById("location");
  
    // Get the user's current position
    navigator.geolocation.getCurrentPosition(
      function(position) {
        // Extract latitude and longitude from the position object
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        // Display the location on the webpage
        locationElement.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
      },
      function(error) {
        locationElement.innerHTML = "Error getting location: " + error.message;
      }
    );
  } else {
    console.error("Geolocation is not available in this browser.");
  }
  
// Function to get a greeting message based on the time of day
function getGreeting() {
    let hours = new Date().getHours();
    if (hours < 12) return "Good Morning!";
    else if (hours < 18) return "Good Afternoon!";
    else return "Good Evening!";
}

// Function to get the current location using the Geolocation API
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById("location").innerText = 
                "Your location: Latitude " + position.coords.latitude + ", Longitude " + position.coords.longitude;
        });
    } else {
        document.getElementById("location").innerText = "Location access denied.";
    }
}

// Set the dynamic content when the page load
window.onload = function() {
    document.getElementById("greeting").innerText = getGreeting();
    getLocation();
    document.getElementById("datetime").innerText = new Date().toLocaleString();
};

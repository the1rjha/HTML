function getWeather() {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
    let lowTemp = document.getElementById('lowTemp');
    let highTemp = document.getElementById('highTemp');
    let feelsLike = document.getElementById('feelsLike');
    let humidity = document.getElementById('humidity');


    let api = 'https://api.openweathermap.org/data/2.5/weather'
    let apiKey = 'a1f50da597fa3c8d3cbb9696847a0702'

    location.innerHTML = "Locating...";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        let url =
            api +
            "?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=" +
            apiKey +
            "&units=imperial";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let temp = data.main.temp;
                temperature.innerHTML = "Welcome! The current temperature is " + temp + "°F";
                location.innerHTML =
                    data.name + " (" + latitude + "°, " + longitude + "°)";
                description.innerHTML = "Your current weather is " + data.weather[0].main;
                lowTemp.innerHTML = "Low: " + data.main.temp_min + "°F";
                highTemp.innerHTML = "High: " + data.main.temp_max + "°F";
                feelsLike.innerHTML = "Feels Like: " + data.main.feels_like + "°F";
                humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
            });
    }

    function error() {
        location.innerHTML = "Unable to retrieve your location";
    }
}

getWeather();
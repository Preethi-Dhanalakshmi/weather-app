const apiKey = "f9d5daa76117687efb69432b4f318537";

const cityInput = document.getElementById("city");
const getWeather = document.getElementById("get-weather");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

getWeather.addEventListener("click", function () {
    const city = cityInput.value;
    if (city) {
        getWeatherInfo(city);
    }
    else {
        alert("Please enter a city");
    }
})

function getWeatherInfo(city) {
    fetch((`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`))
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                cityName.textContent = `${data.name}, ${data.sys.country}`;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                description.textContent = `Weather: ${data.weather[0].description}`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
                wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
            }
            else {
                alert("City not found");
            }
        })
        .catch(error => alert("Error fetching weather data"));
}

cityInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        const city = cityInput.value;
        if(city) {
            getWeatherInfo(city);
        }
    }
})

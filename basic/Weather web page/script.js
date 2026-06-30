const apiurl = "https://wttr.in/";

var search = document.querySelector(".search input");
var btn = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    if (!city.trim()) {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(apiurl + city + "?format=j1");
        
        if (!response.ok) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            var data = await response.json();
            
            var cityName = document.querySelector(".city");
            var temp = document.querySelector(".temp");
            var humidity = document.querySelector(".humidity");
            var wind = document.querySelector(".wind");

            const current = data.current_condition[0];
            const location = data.nearest_area[0];

            cityName.innerHTML = location.areaName[0].value;
            temp.innerHTML = current.temp_C + "°C";
            humidity.innerHTML = current.humidity + "%";
            wind.innerHTML = current.windspeedKmph + " km/h";

            // Map weather condition to icon
            const condition = current.weatherDesc[0].value.toLowerCase();
            
            if (condition.includes("cloud")) {
                weatherIcon.src = "images/clouds.png";
            }
            else if (condition.includes("clear") || condition.includes("sunny")) {
                weatherIcon.src = "images/clear.png";
            }
            else if (condition.includes("rain")) {
                weatherIcon.src = "images/rain.png";
            }
            else if (condition.includes("drizzle")) {
                weatherIcon.src = "images/drizzle.png";
            }
            else if (condition.includes("mist") || condition.includes("fog")) {
                weatherIcon.src = "images/mist.png";
            }
            else if (condition.includes("snow")) {
                weatherIcon.src = "images/snow.png";
            }
            else {
                weatherIcon.src = "images/clear.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

btn.addEventListener("click", () => {
    checkWeather(search.value);
});

// Allow Enter key to search
search.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(search.value);
    }
});


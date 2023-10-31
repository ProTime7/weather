const apiKey = "7cd2998601ed854a1526828a728f19a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            throw new Error('City not found');
        }
        const data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Mist":
            case "Haze":
                weatherIcon.src = "images/mist.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png";
                break;
            default:
                // Handle any other weather condition here
                break;
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    } catch (error) {
        console.error('Error:', error);
        // You might want to display an error message to the user here.
    }
}

searchBtn.addEventListener("click", () => {
    if (searchBox.value) {
        checkWeather(searchBox.value);
    }
});
   
 













/*   const apiKey = "7cd2998601ed854a1526828a728f19a6";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";


    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

  

    async function checkWeather(city){
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    }


searchBtn?.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    })

*/
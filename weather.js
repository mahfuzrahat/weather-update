const apiKey = "a1bd422bc47ea26bae9876f23a5b1d8a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".see-weather").style.display = "none";
    }
    const data = await response.json();

console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp);
    document.querySelector('.lead').innerHTML = data.main.humidity + "%";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://openweathermap.org/img/wn/03d@2x.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "https://openweathermap.org/img/wn/01d@2x.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "https://openweathermap.org/img/wn/10d@2x.png";
    }
    else if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "https://openweathermap.org/img/wn/11d@2x.png";
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "https://openweathermap.org/img/wn/50d@2x.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
    }

    document.querySelector(".see-weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

// checkWeather().then(data =>{
//     displayData(data);
// });

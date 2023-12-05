const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric"
const apiKey = "ad8a600eae0614b391b62745648429a3"
const city = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weather_icon=document.querySelector(".weather-icon ");
const weather = document.querySelector(".weather");

async function checkWeather(city){
    const response =await fetch(apiURL+`&q=${city}`+`&appid=${apiKey}`)
    
    if(response.status == 404){
        weather.style.display = "none";
        document.querySelector(".error p").style.display = 'block'
        document.querySelector(".error p").innerHTML = "A CITY IS NOT FOUND!"
    }
    else{
    document.querySelector(".error p").style.display = 'none'
    weather.style.display = "block";
    let data = await response.json()
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C"
    document.querySelector(".wind").innerHTML = data.wind.speed+"Km/h"
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"

    switch(data.weather[0].main){
        case 'Clouds':weather_icon.src = "images/clouds.png"
        break
        case 'Clear':weather_icon.src = "images/clear.png"
        break
        case 'Drizzle':weather_icon.src = "images/drizzle.png"
        break
        case 'Rain':weather_icon.src = "images/rain.png"
        break
        case 'Mist':weather_icon.src = "images/mist.png"
        break
        case 'Snow':weather_icon.src = "images/snow.png"
        break;
        default:break;
        
    }
    }
    
}

btn.addEventListener("click", ()=>{
    checkWeather(city.value)
})


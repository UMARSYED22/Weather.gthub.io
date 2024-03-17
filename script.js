


const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const wind = document.querySelector(".wind");


btn.addEventListener("click", () => {
    let city = input.value;
    getWeather(city);
})

function getWeather(city) {
    console.log(city);
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'d8dfc9e22496545221cec8ca7c00cf12'}`
    ).then(response => response.json()).then(data => {
      console.log(data);
      const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src=http://openweathermap.org/img/wn/${iconCode}.png alt="weather icon"/>`;
        
        const weatherCity = data.name;
        const weatherCountry = data.sys.country;

        weather.innerHTML = `${weatherCity}, ${weatherCountry}`; 
        
        let weatherTemp = data.main.temp;
        weatherTemp = weatherTemp - 273;
        const temp = weatherTemp.toFixed(2);
        temperature.innerHTML = `${temp}°C`;


        const weatherDisc = data.weather[0].description;
        description.innerHTML = `${weatherDisc}`;

        let windSpeed = data.wind.speed;
        wind.innerHTML = `Wind speed:${windSpeed}`;

;    })

}





async function fetchWeather(){

    try{
        const results = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Jefferson,GA,USA&appid=8258fd57a20f6bd840ddb16efb9a1f1b&units=imperial");
        const weatherData = await results.json();
        console.log(weatherData);
        const cityName =weatherData.name;
        const currentTemp=weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        console.log( `In ${cityName} it is ${currentTemp}°F it is ${weatherDescription}`);
        const weatherElement = document.getElementById("weather");
        weatherElement.innerHTML = `<p>In ${cityName} it is ${currentTemp}°F it is ${weatherDescription}</p>`
        
    }
    catch(e){
        console.log("Something went wrong fetching the weather API", e);
    }
}
fetchWeather();
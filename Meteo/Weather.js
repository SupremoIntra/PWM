async function getWeather() {
    var response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45&lon=9&appid=d521f1063b7a24296186cad58fc18a3e&units=metric", { method: "GET" });
    let jsonObj = await response.json();
    console.log(jsonObj);
    document.getElementById('weather-temp').innerText = jsonObj.main.temp + "°";


}
getWeather();
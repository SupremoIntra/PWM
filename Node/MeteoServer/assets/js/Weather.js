async function getWeather() {
    var response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45&lon=9&appid=d521f1063b7a24296186cad58fc18a3e&units=metric", { method: "GET" });
    let weather = await response.json();
    console.log(weather);
    document.getElementById('weather-temp').innerText = weather.main.temp + "°";



    var response_img = fetch('https://api.unsplash.com/search/photos?query=' + weather.weather.main + '&client_id=CNSN5BQqYyRdwg9hD0o14HIWFVTTbl9qO5wgkcK_y3c');

    let image = await response_img.json();
    document.getElementById('copertina').src = image;
}

getWeather();
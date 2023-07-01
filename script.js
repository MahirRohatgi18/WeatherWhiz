const searchCity = async() => {

   // const city = document.getElementById('city-input').value;
   const city = document.getElementById('city-input').value;
    //console.log(city);
    const data = await fetchWeatherData(city);
    ShowData(data);
}
  

const fetchWeatherData = async (city) => {
   

    
    const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '39424362c5msh251ceb409798a0cp17427ajsn0db1752e27f1',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const JsonResponse =  JSON.parse(result);

      return JsonResponse;




     /* const LatLong = JsonResponse.coord;
      const mainObj = JsonResponse.main;
      const temperature = mainObj.temp;
      const feelsLike = mainObj.feels_like;
      const minTemperature = mainObj.temp_min;
      const maxTemperature = mainObj.temp_max; 
      */


      //console.log(JsonResponse);
      //console.log(LatLong);
      //console.log(temperature);
    } catch (error) {
      console.error(error);
    }
  };



ShowData = (data) => {
   // const weatherData = fetchWeatherData();
    document.getElementById("city-name").innerText = data.name;
    document.getElementById("weather-type").innerText = data.weather[0].main;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("min-temp").innerText = data.main.temp_min;
    document.getElementById("max-temp").innerText = data.main.temp_max;
  }




function getWeather() {
  const location = document.getElementById('location').value;
  const apiKey = 'b98132b6bb364ca0bed160016252903';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          if (data.error) {
              document.getElementById('weather-info').innerHTML = `Error: ${data.error.message}`;
          } else {
              const temp = data.current.temp_c;
              const cityName = data.location.name;
              const country = data.location.country;
              document.getElementById('weather-info').innerHTML = 
                  `Current Temperature in ${cityName}, ${country}: ${temp}°C`;
          }
      })
      .catch(error => {
          document.getElementById('weather-info').innerHTML = `Error fetching data: ${error.message}`;
      });
}

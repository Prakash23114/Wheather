async function getWeather() {
  const cityName = document.getElementById("cityInput").value;
  const apiKey = "ab2973ffa0bf25dbd708d98ee4e1153c";  //key change kar 30 min mei
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data); 

    if (!response.ok) {
      throw new Error(data.message || "City not found or API error.");
    }

    document.getElementById("cityName").innerText = `📍 ${data.name}`;
    document.getElementById("tempInfo").innerText = `🌡️ Temperature: ${data.main.temp} °C`;
    document.getElementById("weatherType").innerText = `🌥️ Condition: ${data.weather[0].main}`;
    document.getElementById("humidityInfo").innerText = `💧 Humidity: ${data.main.humidity}%`;

    document.getElementById("weatherBox").classList.remove("d-none");

  } catch (error) {
    alert(error.message);
  }
}



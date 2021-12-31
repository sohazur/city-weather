const API_KEY = `5437efdcdf46c4ba32ecd9a864d6a37e`;

loadCityTemp = () => {
  const city = document.getElementById("city-name").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => displayCityTemp(data));
};

displayCityTemp = (city) => {
  document.getElementById("city-name-display").innerHTML = `
  <img src="https://openweathermap.org/img/wn/${
    city.weather[0].icon
  }@2x.png" alt="" />
  <h1 class="lead">${city.weather[0].main}</h1>
        <h1>${city.name} <small>(${secondsToGMT(city.timezone)})</small></h1>
        <h2><span>${kelvinToCelcius(city.main.temp)}</span>&deg;C</h2>
        <h4>Feels Like: <span>${kelvinToCelcius(
          city.main.feels_like
        )}</span>&deg;C</h4>
        <h4>Humidity: <span>${city.main.humidity}</span>%</h4>
        <h5>Sunrise (local time): ${unixToNormalTime(city.sys.sunrise)}</h5>
        <h5>Sunset (local time): ${unixToNormalTime(city.sys.sunset)}</h5>
        
  `;
  console.log(city);
};

kelvinToCelcius = (kelvin) => {
  celcius = kelvin - 273.16;
  return celcius.toFixed(2);
};

unixToNormalTime = (unix) => {
  const date = new Date(unix * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();
  const formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};

secondsToGMT = (time) => {
  hours = time / 3600;
  if (hours >= 0) {
    return `GMT +${hours}`;
  } else {
    return `GMT ${hours}`;
  }
};

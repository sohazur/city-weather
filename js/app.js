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
        <h1>${city.name}</h1>
        <h3><span>${kelvinToCelcius(city.main.temp)}</span>&deg;C</h3>
        
  `;

  console.log(city);
};

kelvinToCelcius = (kelvin) => {
  celcius = kelvin - 273.16;
  return celcius.toFixed(2);
};

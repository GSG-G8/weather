let cityName = 'cairo';
let urlweather = (cityName) => `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${id}&units=metric`;
const submitBtn = document.querySelector('.form__button');
const cityInput = document.querySelector('.form__input');
const container = document.querySelector('.container');

///
const cleardate = myNode => {
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
};
const weatherInfo = data => {
  

  const city = document.createElement('h1');
  city.textContent = data.name;
  container.appendChild(city);

  const descriptin = document.createElement('h2');
  descriptin.textContent = data.weather[0].description;
  container.appendChild(descriptin);

  const temp = document.createElement('h2');
  temp.textContent = `${Math.round(data.main.temp)}℃`;
  container.appendChild(temp);
};

cityInput.addEventListener('onchange', e => {
 cityName = document.querySelector('.form__input').value;
});

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  cleardate(container);
  request(urlweather(cityInput.value), weatherInfo);
});

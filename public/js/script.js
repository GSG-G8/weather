const city = document.getElementById('city');
const id = '795a73f80e1447a92a70669a7c739689';
const apiKey =process.env.API_KEY;
console.log(apiKey)
const urlweather = (cityName) => `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
const submitBtn = document.querySelector('.form__button');
const container = document.querySelector('.container');

const cleardate = (myNode) => {
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
};

const autoComplete = (data) => {
  data.forEach((element) => {
    const option = document.createElement('option');
    option.value = element;
    city.appendChild(option);
  });
};

const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', () => {
  cleardate(city);
  request(`/cities?q=${searchInput.value}`, autoComplete);
});

const weatherInfo = (data) => {
  const cityName = document.createElement('h1');
  cityName.textContent = data.name;
  container.appendChild(cityName);

  const descriptin = document.createElement('h2');
  descriptin.textContent = data.weather[0].description;
  container.appendChild(descriptin);

  const temp = document.createElement('h2');
  temp.textContent = `${Math.round(data.main.temp)}℃`;
  container.appendChild(temp);
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cleardate(container);
  request(urlweather(searchInput.value), weatherInfo);
});

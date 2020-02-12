// const urlweather = `https://api.openweathermap.org/data/2.5/weather?lat=31.5&lon=34.5&appid=${id}&units=metric`;
const request = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = xhr.responseText;
      data = JSON.parse(data);
      callback(data);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};

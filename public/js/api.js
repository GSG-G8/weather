const request = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = xhr.responseText;
        data = JSON.parse(data);
        callback(data);
      }
      } else {
        console.log(xhr.status);
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};

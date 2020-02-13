const request = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = xhr.responseText;
        data = JSON.parse(data);
        callback(data);
      } else if (xhr.status === 500) {
        Response.writeHead(500, { 'Content-Type': 'text/html' });
        Response.end('<h1>server error</h1>');
      } else {
        Response.writeHead(404, { 'Content-Type': 'text/html' });
        Response.end('<h1>page not found</h1>');
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};

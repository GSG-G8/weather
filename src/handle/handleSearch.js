const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const filter = require('./logic');


module.exports = (request, response) => {
  const endpoint = request.url;
  const searchValue = qs.parse(endpoint.split('?')[1]);
  const name = searchValue.q;
  const pathjson = path.join(__dirname, '..', 'city.json');
  fs.readFile(pathjson, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>Internal Server Error</h1>');
    } else {
      const data = JSON.parse(file);
      const result = filter(data, name);
      // const result = data.filter((e) => e.toLowerCase().startsWith(name)).slice(0, 20);
      response.end(JSON.stringify(result));
    }
  });
};

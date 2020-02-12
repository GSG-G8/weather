const fs = require('fs');
const path = require('path');
const qs = require('querystring');


module.exports = (request, response) => {
  const endpoint = request.url;
  console.log(endpoint)
  const searchValue = qs.parse(endpoint.split('?')[1]);
  console.log(endpoint)
  
  const name = searchValue.q;
  const pathjson = path.join(__dirname, '..', 'city.json');
  fs.readFile(pathjson, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>Internal Server Error</h1>');
    } else {
      const data = JSON.parse(file);
      const result = data.filter((e) => e.toLowerCase().startsWith(name)).slice(0, 20);
      response.end(JSON.stringify(result));
    }
  });
};

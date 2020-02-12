
const fs = require('fs');
const qs = require('querystring');
const path = require('path');

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint.includes('/cities?q=')) {
    const searchValue = qs.parse(endpoint.split('?')[1]);
    const name = searchValue.q;
    const pathjson = path.join(__dirname, 'city.json');
    fs.readFile(pathjson, (error, file) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end('internal server error');
      } else {
        const data = JSON.parse(file);
        // const cityToSEarch = name.charAt(0).toUpperCase() + name.slice(1);
        const result = data.filter((e) => e.toLowerCase().startsWith(name)).slice(0, 20);
        response.end(JSON.stringify(result));
      }
    });
  }
};

module.exports = router;

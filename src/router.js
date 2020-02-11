
const fs = require('fs');

const path = require('path');

const router = (request, response) => {
  const endpoint = request.url;
  // cnsole.log(endpoint);

  if (endpoint.includes('cai')) {
    const pathjson = path.join(__dirname, 'city.json');
    fs.readFile(pathjson, (error, file) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/html' });
      } else {
        const data = JSON.parse(file);
        const searchValue = 'cai'.charAt(0).toUpperCase() + 'cai'.slice(1);
        const result = data.filter((e) => e.includes(searchValue));
        console.log(result);
      }
    });
  }
};

module.exports = router;

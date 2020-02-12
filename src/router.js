const handleMain = require('./handle/handleHome');
const handlePublic = require('./handle/handlePublic');
const handleSearch = require('./handle/handleSearch');


const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    handleMain(request, response);
  } else if (endpoint.includes('public')) {
    handlePublic(request, response);
  } else if (endpoint.includes('/cities')) {
    handleSearch(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('<h1>not found </h1>');
    response.end();
  }
};

module.exports = router;

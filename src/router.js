const handleMain = require('./handle/handleHome');
const handlePublic = require('./handle/handlePublic');
const handleSearch = require('./handle/handleSearch');


const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    handleMain(request, response);
  } else if (endpoint.includes('public')) {
    handlePublic(request, response);
  } else if (endpoint.includes('/cities?q=')) {
    handleSearch(request, response);
  }
};

module.exports = router;

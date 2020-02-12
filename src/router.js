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
  }else{
    console.log(2222, request.url)
  }
};

module.exports = router;

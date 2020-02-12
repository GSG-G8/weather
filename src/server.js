const http = require('http');
const router = require('./router');
require('dotenv').config();
const PORT = process.env.PORT || 3030;

const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`we listen on post http://localhost:${PORT}`);
});

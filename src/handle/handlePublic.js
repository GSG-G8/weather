const fs = require('fs');
const path = require('path');

const mimeTypes = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'image/jpg',
  js: 'text/javascript',
  json: 'application/json',
  ico: 'image/x-icon',
  png: 'image/png',
};
module.exports = (request, response) => {
  const endpoint = request.url;
  const ext = endpoint.split('.')[1];
  const filePath = endpoint.split('/');
  fs.readFile(path.join(__dirname, '..', '..', ...filePath), (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.write('<h1>Internal Server Error </h1>');
      response.end();
    } else {
      response.writeHead(200, { 'Content-Type': mimeTypes[ext] });
      response.end(file);
    }
  });
};

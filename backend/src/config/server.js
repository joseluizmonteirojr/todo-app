const express = require('express');
const bodyParser = require('body-parser');
const port = 3003;
const server = express();
const allowsCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowsCors);

server.listen(port, () => {
    console.log(`****BACKEND is running on port: ${port}.****`)
});

module.exports = server;
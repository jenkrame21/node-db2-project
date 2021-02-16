const express = require("express");
const helmet = require("helmet");

const dealersRouter = require('./dealers/dealers-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dealers', dealersRouter);

module.exports = server;
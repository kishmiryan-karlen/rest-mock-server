#!/usr/bin/env node

const restify = require('restify');
const { DataHelper } = require('./src/data-helper');
const { Resource } = require('./src/resource');


const server = restify.createServer();
const port = process.env.PORT || 3003;
server.use(restify.plugins.bodyParser());

DataHelper.init(process.argv);
Resource.init(process.argv, server);

server.listen(port, () => {
  console.log(`\nREST Mock Server is running on port: ${port} ...\n`);
});
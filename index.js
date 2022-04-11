#!/usr/bin/env node

const restify = require('restify');
const { getArg } = require('./src/arg-helper');
const { Data } = require('./src/data');
const { Resource } = require('./src/resource');


const server = restify.createServer();
const port = getArg('port') || 3003;
server.use(restify.plugins.bodyParser());

Data.init();
Resource.init(server);

server.listen(port, () => {
  console.log(`\nREST Mock Server is running on port: ${port} ...\n`);
});
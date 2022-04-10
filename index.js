const restify = require('restify');
const { Resource } = require('./src/resource');

const server = restify.createServer();
const port = process.env.PORT || 3003;
server.use(restify.plugins.bodyParser());

Resource.add('users', server);
Resource.add('posts', server);

server.listen(port, () => {
  console.log(`REST Mock Server is running on port: ${port} ...`);
});
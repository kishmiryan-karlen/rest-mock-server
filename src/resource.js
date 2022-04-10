const { Handler } = require('./handler');

class Resource {
  static add(type, server) {
    const handler = new Handler(type);

    server.post(`/${type}`, handler.create.bind(handler));
    server.get(`/${type}/:id`, handler.read.bind(handler));
    server.get(`/${type}`, handler.readAll.bind(handler));
    server.put(`/${type}/:id`, handler.update.bind(handler));
    server.del(`/${type}/:id`, handler.delete.bind(handler));
  }
}

module.exports = {
  Resource,
};
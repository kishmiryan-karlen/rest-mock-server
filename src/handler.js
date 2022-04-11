const { Action } = require('./action');
const { Data } = require('./data');

class Handler {
  constructor(type) {
    this.type = type;
    this.action = new Action(type);
  }

  async create(req, res) {
    const data = await Data.read();

    try {
      const [newData, resource] = await this.action.create(data, req.body);
      Data.write(newData);
      res.json(resource);
    } catch (error) {
      console.log(error)
      res.send(error.message);
    }
  }

  async read(req, res) {
    const data = await Data.read();

    try {
      const resource = await this.action.read(data, req.params.id);
      res.json(resource);
    } catch (error) {
      res.send(error.message);
    }
  }

  async readAll(req, res) {
    const data = await Data.read();

    try {
      const resources = await this.action.readAll(data);
      res.json(resources);
    } catch (error) {
      res.send(error.message);
    }
  }

  async update(req, res) {
    const data = await Data.read();

    try {
      const [newData, resource] = await this.action.update(data, req.params.id, req.body);
      Data.write(newData);
      res.json(resource);
    } catch (error) {
      res.send(error.message);
    }
  }

  async delete(req, res) {
    const data = await Data.read();

    try {
      const [newData, resourceId] = await this.action.delete(data, req.params.id);
      Data.write(newData);
      res.json(resourceId);
    } catch (error) {
      res.send(error.message);
    }
  }
}

module.exports = {
  Handler,
};
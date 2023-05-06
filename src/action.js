const { v4: uuidv4 } = require('uuid');

class Action {
  constructor(type) {
    this.type = type;
  }

  create(data, resource) {
    if (!resource) {
      throw new Error('The payload is empty');
    }

    if (!data[this.type]) {
      data[this.type] = [];
    }

    const resourceObj = {
      id: uuidv4(),
      ...resource,
    };

    data[this.type].push(resourceObj);

    return [data, resourceObj];
  }

  read(data, id) {
    const resource = (data[this.type] || []).find(resource => resource.id === id);

    if (!resource) {
      throw new Error('The resource does not exist');
    }

    return resource;
  }

  readAll(data) {
    const resources = data[this.type] || [];

    return resources;
  }

  update(data, id, resource) {
    const resourceInd = (data[this.type] || []).findIndex(resource => resource.id === id);

    if (resourceInd < 0) {
      throw new Error('The resource does not exist');
    }

    const resourceObj = {
      id,
      ...resource,
    };

    data[this.type][resourceInd] = resourceObj;

    return [data, resourceObj];
  }

  delete(data, id) {
    const resourceInd = (data[this.type] || []).findIndex(resource => resource.id === id);

    if (resourceInd < 0) {
      throw new Error('The resource does not exist');
    }

    data[this.type].splice(resourceInd, 1);

    return [data, id];
  };
}

module.exports = {
  Action,
};
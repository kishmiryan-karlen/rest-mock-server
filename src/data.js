const fs = require('fs/promises');
const { getArg } = require('./arg-helper');

class Data {
  static dataFile;

  static init() {
    const dataFilePath = getArg('data');
    Data.dataFile = dataFilePath || `./data-${Date.now()}.json`;

    return fs.readFile(Data.dataFile, 'utf-8').then((value) => {
      if (!value) {
        return fs.writeFile(Data.dataFile, '{}', 'utf-8');
      }

      try {
        JSON.parse(value);
      } catch (err) {
        throw new Error('The specified data file has a non-JSON content');
      }

      return Promise.resolve();
    }).catch(err => {
      if (err.code === 'ENOENT') {
        return fs.writeFile(Data.dataFile, '{}', 'utf-8');
      }

      return console.log(err);
    });
  }
  static read() {
    return fs.readFile(Data.dataFile, 'utf-8').then((value) => JSON.parse(value));
  }

  static write(data) {
    return fs.writeFile(Data.dataFile, JSON.stringify(data, null, 2), 'utf-8');
  }
}

module.exports = {
  Data,
};
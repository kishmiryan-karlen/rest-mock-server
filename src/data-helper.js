const fs = require('fs/promises');

class DataHelper {
  static read() {
    return fs.readFile('./data.json').then((value) => JSON.parse(value));
  }

  static write(data) {
    return fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8');
  }
}

module.exports = {
  DataHelper,
};
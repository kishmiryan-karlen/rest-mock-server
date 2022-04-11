const fs = require('fs/promises');

class DataHelper {
  static dataFile;

  static init(processArgs) {
    const dataArg = processArgs.find(arg => arg.startsWith('--data='));
    const dataFilePath = (dataArg && dataArg.split('=')[1]) || '';

    DataHelper.dataFile = dataFilePath || `./data-${Date.now()}.json`;

    return fs.readFile(DataHelper.dataFile, 'utf-8').then((value) => {
      if (!value) {
        return fs.writeFile(DataHelper.dataFile, '{}', 'utf-8');
      }

      try {
        JSON.parse(value);
      } catch (err) {
        throw new Error('The specified data file has a non-JSON content');
      }

      return Promise.resolve();
    }).catch(err => {
      if (err.code === 'ENOENT') {
        return fs.writeFile(DataHelper.dataFile, '{}', 'utf-8');
      }

      return console.log(err);
    });
  }
  static read() {
    return fs.readFile(DataHelper.dataFile, 'utf-8').then((value) => JSON.parse(value));
  }

  static write(data) {
    return fs.writeFile(DataHelper.dataFile, JSON.stringify(data, null, 2), 'utf-8');
  }
}

module.exports = {
  DataHelper,
};
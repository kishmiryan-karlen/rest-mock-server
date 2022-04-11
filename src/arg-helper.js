module.exports = {
  getArg(argName) {
    const arg = process.argv.find(arg => arg.startsWith(`--${argName}=`));
    const argValue = (arg && arg.split('=')[1]) || '';
    return argValue;
  },
};
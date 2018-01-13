const Good = require('good');

const options = {
  ops: {
    interval: 1000,
  },
  reporters: {
    myConsoleReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }],
    }, {
      module: 'good-console',
    }, 'stdout'],
    myFileReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ ops: '*' }],
    }, {
      module: 'good-squeeze',
      name: 'SafeJson',
    }, {
      module: 'good-file',
      args: ['./log/awesome_log'],
    }],
    myHTTPReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ error: '*' }],
    }],
  },
};

module.exports = {
  plugin: {
    name: 'Good',
    ...Good,
  },
  options,
};

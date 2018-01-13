const Hapi = require('hapi');
const logging = require('./logging');

const server = Hapi.server({
  host: 'localhost',
  port: 8000,
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, h) {
    return 'Hello <strong>world</strong>';
  },
});

async function start() {
  try {
    await server.register(logging);

    await server.start();
  } catch (err) {
    console.log(err);

    process.exit();
  }
}

start();

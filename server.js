const http = require('http');
const { APP_PORT } = require('./config');
const {
  parseRequest,
  prepareRouteName,
  useJsonResponse,
} = require('./utils/routes.helper');
const { routes, handleNotFound } = require('./app/routes');

const server = http.createServer(async (req, res) => {
  parseRequest(req);
  useJsonResponse(res);

  const route = prepareRouteName(req);

  console.log(`Request - ${req.method} ${req.url}`);

  const handler = routes[route] || handleNotFound;

  return handler(req, res);
});

server.listen(APP_PORT, () => {
  console.log(`Application started on port ${APP_PORT}`);
});

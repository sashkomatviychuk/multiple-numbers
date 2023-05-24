/**
 * Parses query string to object of query params
 *
 * @param {string} qs
 * @returns {object}
 */
const parseQueryString = (qs) => {
  const params = {};

  qs.split('&').forEach((param) => {
    const [name = '', value = ''] = param.split('=');

    if (name) {
      params[name] = isNaN(value) ? value : parseInt(value);
    }
  });

  return params;
};

/**
 * Adds to request object url `pathname` and parsed query string
 *
 * @param {import('http').IncomingMessage} req
 * @returns {import('http').IncomingMessage & { pathname: string, query: object }}
 */
const parseRequest = (req) => {
  const [pathname, queryString = ''] = req.url.split('?');

  req.pathname = pathname;
  req.query = parseQueryString(queryString);
};

/**
 * Route name consists of url pathname and request method
 *
 * @param {import('http').IncomingMessage & { pathname: string }} req
 * @returns {string}
 */
const prepareRouteName = (req) => {
  const { pathname = '', method = '' } = req;

  return `${method} ${pathname}`;
};

/**
 * Creates `json()` function on "response" object
 * to manage json response
 *
 * @param {import('http').ServerResponse} res
 * @return {void}
 */
const useJsonResponse = (res) => {
  res.json = (statusCode, data) => {
    res.writeHead(statusCode, {
      'Content-Type': 'application/json',
    });

    return res.end(JSON.stringify(data));
  };
};

module.exports = {
  parseRequest,
  prepareRouteName,
  useJsonResponse,
};

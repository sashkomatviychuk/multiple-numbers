const { replaceNumberIfHasMultiple } = require('./services/numbers.service');

async function handleHome(req, res) {
  const { number } = req.query;

  if (isNaN(number)) {
    return res.json(400, {
      error: 'Parameter "number" should be a valid number',
    });
  }

  const result = replaceNumberIfHasMultiple(number);

  return res.json(200, {
    result,
  });
}

async function handleNotFound(req, res) {
  return res.json(404, { error: 'Not found' });
}

module.exports = {
  routes: {
    'GET /': handleHome,
  },
  handleNotFound,
};

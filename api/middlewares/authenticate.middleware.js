const utils = require('../utils');

function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: utils.httpErrors(401) });
  }
  const token = authHeader.split(' ')[1];
  if (token !== process.env.PROVIDER_SECRET_API) {
      return res.status(403).json({ error: utils.httpErrors(403) });
  }
  next();
}

module.exports = authenticate;
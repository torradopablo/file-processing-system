const authenticate = require('./authenticate.middleware');
const validateSchema = require('./validate.middleware');

module.exports = {
  authenticate,
  validateSchema
};

const utils = require('../utils');

function validateSchema(schema) {
    return (req, res, next) => {
  
      const isValid = utils.validateJSONSchema(req.body, schema);
  
      if (isValid) {
        next();
      } else {
        res.status(400).json({ error: 'Invalid schema' });
      }
    };
  }
  
module.exports = validateSchema;
  
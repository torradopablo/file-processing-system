function validateSchema(model) {
    return (req, res, next) => {
      const Model = require(`../models/${model}.json`);
  
      const fields = Object.keys(Model);
      const requestFields = Object.keys(req.body);
  
      const isValid = fields.every(field => requestFields.includes(field));
  
      if (isValid) {
        next();
      } else {
        res.status(400).json({ error: 'Invalid input schema' });
      }
    };
  }
  
module.exports = validateSchema;
  
const services = require('../services/file.service');

exports.getFiles = async (req, res) => {
  try {
    const files = await services.getFiles();
      res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

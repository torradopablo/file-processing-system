const services = require('../services/file.service');

const getFiles = async (req, res) => {
  try {
    const files = await services.getFiles();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getFilesData = async (req, res) => {
  try {
    const files = await services.getFiles();
    const data = await services.getFilesData(files.files);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getFiles,
  getFilesData,
};

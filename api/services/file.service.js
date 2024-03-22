const axios = require('axios');

async function getFiles() {
  try {
    const url = `${process.env.PROVIDER_API_URL}/files`;
    console.log(url)
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.PROVIDER_SECRET_API}`,
      }
    });
    return response.data;
  } catch (error) {console.log(error)
    throw new Error(`Error fetching files: ${error.message}`);
  }
}

module.exports = {
  getFiles
};

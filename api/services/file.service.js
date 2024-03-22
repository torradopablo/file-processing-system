const axios = require('axios');

const headers = {
  'Authorization': `Bearer ${process.env.PROVIDER_SECRET_API}`,
}

async function getFiles() {
  try {
    const url = `${process.env.PROVIDER_API_URL}/files`;
    const response = await axios.get(url, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching files: ${error.message}`);
  }
};


async function getFilesData(files){
  const url = `${process.env.PROVIDER_API_URL}/file`;
  try {
    const fileInfoArray = [];
    let count=0;
    for (const file of files) {
      try{
        const response = await axios.get(`${url}/${file}`,{
          headers: headers,
        });
        fileInfoArray.push({
          file: file,
          lines: [],
        });
        response.data.split('\n').forEach((line,index)=>{
          if(index>0){
            const lineFormated = line.split(',');
            fileInfoArray[count].lines.push({
              text: lineFormated[1]??null,
              number: lineFormated[2]?eval(lineFormated[2]):null,
              hex: lineFormated[3]??null,
            })
          }
        })
        count++;
      } catch(error) {}
    }
    return fileInfoArray;
  } catch (error) {
    throw new Error(`Error fetching files: ${error.message}`);
  }
}




module.exports = {
  getFiles,
  getFilesData,
};

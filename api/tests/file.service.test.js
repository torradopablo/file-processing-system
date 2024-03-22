const { expect } = require('chai');
const fileService = require('../services/file.service');

describe('files.service', () => {
  describe('getFiles', () => {
    it('should return a response that matches the defined schema', async() => {
      const response = await fileService.getFiles();
      expect(response).to.be.an('object');
      expect(response).to.have.property('files');
      expect(response.files).to.be.an('array');
      response.files.forEach(file => {
        expect(file).to.be.a('string');
      });
    });
  });
});

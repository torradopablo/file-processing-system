const { expect } = require('chai');
const services = require('../services');
const definition = require('../definition.json');
const utils = require('../utils');

describe('files.service', () => {
  describe('getFiles', () => {
    it('should return a response that matches the defined schema', async() => {
      const data = await services.fileService.getFiles();
      expect(utils.validateJSONSchema(data, definition.definitions.Files)).to.be.true;
    });
  });
});

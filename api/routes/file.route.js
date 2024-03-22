const express = require('express');
const router = express.Router();
const constrollers = require('../controllers');
const middlewares = require('../middlewares');
const definition = require('../definition.json');

router.get('/list',
    middlewares.authenticate,
    constrollers.fileController.getFiles,
    middlewares.validateSchema(definition.definitions.Files),
);


router.get('/data',
    middlewares.authenticate,
    constrollers.fileController.getFilesData,
    middlewares.validateSchema(definition.definitions.Data),
);

module.exports = router;

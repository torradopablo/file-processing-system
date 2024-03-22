const express = require('express');
const router = express.Router();
const constrollers = require('../controllers');
const middlewares = require('../middlewares');
const definition = require('../definition.json');

router.get('/',
    //middlewares.authenticate,
    constrollers.fileController.getFiles,
    //middlewares.validateSchema(definition.definitions.File),
);

module.exports = router;

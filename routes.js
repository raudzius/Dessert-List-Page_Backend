const express = require('express');
const router = express.Router();
const { getList, getDetails, postNewRecord } = require('./controller');

router.get('/list', getList);
router.get('/details', getDetails);
router.post('/newRecord', postNewRecord);

module.exports = router;

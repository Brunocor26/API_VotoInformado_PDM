const express = require('express');
const router = express.Router();
const { getDates, createDate } = require('../controllers/dateController');

router.route('/').get(getDates).post(createDate);

module.exports = router;

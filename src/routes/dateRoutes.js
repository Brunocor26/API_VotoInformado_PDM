const express = require('express');
const router = express.Router();
const { getDates, createDate, voteDebate } = require('../controllers/dateController');

router.route('/').get(getDates).post(createDate);
router.route('/:id/vote').post(voteDebate);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getDates, createDate, voteDebate, seedDebates } = require('../controllers/dateController');

router.route('/').get(getDates).post(createDate);
router.route('/:id/vote').post(voteDebate);
router.route('/seed').post(seedDebates);

module.exports = router;

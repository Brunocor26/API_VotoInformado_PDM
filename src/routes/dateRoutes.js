const express = require('express');
const router = express.Router();
const { getDates, createDate, voteDebate, seedDebates } = require('../controllers/dateController');

const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getDates).post(protect, admin, createDate);
router.route('/:id/vote').post(voteDebate);
router.route('/seed').post(seedDebates);

module.exports = router;

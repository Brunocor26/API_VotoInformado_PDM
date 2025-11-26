const express = require('express');
const router = express.Router();
const { getCandidates, getCandidateById, createCandidate } = require('../controllers/candidateController');

router.route('/').get(getCandidates).post(createCandidate);
router.route('/:id').get(getCandidateById);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getPetitions, createPetition, signPetition } = require('../controllers/petitionController');

router.route('/').get(getPetitions).post(createPetition);
router.route('/:id/sign').post(signPetition);

module.exports = router;

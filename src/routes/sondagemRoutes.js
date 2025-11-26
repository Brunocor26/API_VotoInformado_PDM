const express = require('express');
const router = express.Router();
const { getSondagens, createSondagem } = require('../controllers/sondagemController');

router.route('/').get(getSondagens).post(createSondagem);

module.exports = router;

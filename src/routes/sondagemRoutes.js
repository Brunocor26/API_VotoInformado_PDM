const express = require('express');
const router = express.Router();
const { getSondagens, createSondagem } = require('../controllers/sondagemController');

const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getSondagens).post(protect, admin, createSondagem);

module.exports = router;

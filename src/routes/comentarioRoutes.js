const express = require('express');
const router = express.Router();
const { getComentariosByPeticao, createComentario } = require('../controllers/comentarioController');

router.route('/').post(createComentario);
router.route('/:peticaoId').get(getComentariosByPeticao);

module.exports = router;

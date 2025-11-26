const Comentario = require('../models/Comentario');

// @desc    Get comments for a petition
// @route   GET /api/comentarios/:peticaoId
// @access  Public
const getComentariosByPeticao = async (req, res) => {
    try {
        const comentarios = await Comentario.find({ peticaoId: req.params.peticaoId });
        res.json(comentarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a comment
// @route   POST /api/comentarios
// @access  Private
const createComentario = async (req, res) => {
    try {
        const { autorId, autorNome, peticaoId, texto } = req.body;

        const comentario = await Comentario.create({
            autorId,
            autorNome,
            peticaoId,
            texto,
            dataCriacao: Date.now()
        });

        res.status(201).json(comentario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getComentariosByPeticao,
    createComentario
};

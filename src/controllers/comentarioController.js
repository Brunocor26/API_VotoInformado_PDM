const Comentario = require('../models/Comentario');

// @desc    Get comments for a petition
// @route   GET /api/comentarios/:peticaoId
// @access  Public
const getComentariosByPeticao = async (req, res) => {
    try {
        const comentarios = await Comentario.find({ peticaoId: req.params.peticaoId }).sort({ dataCriacao: -1 });
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
        const { texto, peticaoId } = req.body;

        // Assuming req.user is populated
        const autorId = req.user ? req.user._id : req.body.autorId;
        const autorNome = req.user ? req.user.name : req.body.autorNome;

        const comentario = await Comentario.create({
            texto,
            peticaoId,
            autorId,
            autorNome
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

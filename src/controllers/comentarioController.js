const Comentario = require('../models/Comentario');

/**
 * Retrieves comments for a specific petition.
 */
const getComentariosByPeticao = async (req, res) => {
    try {
        const comentarios = await Comentario.find({ peticaoId: req.params.peticaoId }).sort({ dataCriacao: -1 });
        res.json(comentarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Creates a new comment on a petition.
 */
const createComentario = async (req, res) => {
    try {
        const { texto, peticaoId } = req.body;

        // Use authenticated user if available, otherwise fallback to body params

        const autorId = req.user ? req.user._id : req.body.autorId;
        const autorNome = req.user ? req.user.name : req.body.autorNome;
        const autorPhotoUrl = req.user ? req.user.photoUrl : req.body.autorPhotoUrl;

        const comentario = await Comentario.create({
            texto,
            peticaoId,
            autorId,
            autorNome,
            autorPhotoUrl
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

const Sondagem = require('../models/Sondagem');

/**
 * Retrieves all polls (sondagens).
 */
const getSondagens = async (req, res) => {
    try {
        const sondagens = await Sondagem.find();
        res.json(sondagens);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Creates a new poll.
 */
const createSondagem = async (req, res) => {
    try {
        const sondagem = await Sondagem.create(req.body);
        res.status(201).json(sondagem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getSondagens,
    createSondagem
};

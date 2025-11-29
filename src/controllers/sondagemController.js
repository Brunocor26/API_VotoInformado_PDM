const Sondagem = require('../models/Sondagem');

// @desc    Get all sondagens
// @route   GET /api/sondagens
// @access  Public
const getSondagens = async (req, res) => {
    try {
        const sondagens = await Sondagem.find();
        res.json(sondagens);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a sondagem
// @route   POST /api/sondagens
// @access  Private/Admin
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

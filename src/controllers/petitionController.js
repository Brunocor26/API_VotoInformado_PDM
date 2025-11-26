const Petition = require('../models/Peticao');

// @desc    Get all petitions
// @route   GET /api/petitions
// @access  Public
const getPetitions = async (req, res) => {
    try {
        const petitions = await Petition.find({});
        res.json(petitions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a petition
// @route   POST /api/petitions
// @access  Private
const createPetition = async (req, res) => {
    try {
        const { criadorId, criadorNome, descricao, titulo } = req.body;

        const petition = await Petition.create({
            criadorId,
            criadorNome,
            descricao,
            titulo,
            dataCriacao: Date.now(),
            totalAssinaturas: 0,
            assinaturas: []
        });

        res.status(201).json(petition);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Sign a petition
// @route   POST /api/petitions/:id/sign
// @access  Private
const signPetition = async (req, res) => {
    try {
        const petition = await Petition.findById(req.params.id);
        const { userId } = req.body; // Assuming userId is sent in body

        if (!petition) {
            return res.status(404).json({ message: 'Petition not found' });
        }

        if (petition.assinaturas.includes(userId)) {
            return res.status(400).json({ message: 'User already signed' });
        }

        petition.assinaturas.push(userId);
        petition.totalAssinaturas = petition.assinaturas.length;
        await petition.save();

        res.json(petition);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getPetitions,
    createPetition,
    signPetition
};

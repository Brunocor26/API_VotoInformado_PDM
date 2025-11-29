const Petition = require('../models/Petition');

// @desc    Get all petitions
// @route   GET /api/petitions
// @access  Public
const getPetitions = async (req, res) => {
    try {
        const petitions = await Petition.find().sort({ dataCriacao: -1 });
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
        const { titulo, descricao, imageUrl } = req.body;

        // Assuming req.user is populated by auth middleware
        // If auth is loose, we might need to rely on body params, but better to use req.user
        // For now, let's assume req.user exists if protected, or fallback to body

        const criadorId = req.user ? req.user._id : req.body.criadorId;
        const criadorNome = req.user ? req.user.name : req.body.criadorNome;

        const petition = await Petition.create({
            titulo,
            descricao,
            criadorId,
            criadorNome,
            imageUrl
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

        if (!petition) {
            return res.status(404).json({ message: 'Petition not found' });
        }

        const userId = req.user ? req.user._id.toString() : req.body.userId;

        if (petition.assinaturas.includes(userId)) {
            return res.status(400).json({ message: 'User already signed' });
        }

        petition.assinaturas.push(userId);
        await petition.save();

        res.json({ message: 'Petition signed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Upload petition image
// @route   POST /api/petitions/upload
// @access  Private
const uploadPetitionImage = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    // Construct relative URL for the uploaded file
    const imageUrl = `/uploads/petitions/${req.file.filename}`;

    res.json({ imageUrl });
};

// @desc    Delete a petition
// @route   DELETE /api/petitions/:id
// @access  Private
const deletePetition = async (req, res) => {
    try {
        const petition = await Petition.findById(req.params.id);

        if (!petition) {
            return res.status(404).json({ message: 'Petition not found' });
        }

        await Petition.deleteOne({ _id: req.params.id });
        res.json({ message: 'Petition removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getPetitions,
    createPetition,
    signPetition,
    uploadPetitionImage,
    deletePetition
};

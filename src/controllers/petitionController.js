const Petition = require('../models/Petition');

/**
 * Retrieves all petitions, sorted by creation date (newest first).
 */
const getPetitions = async (req, res) => {
    try {
        const petitions = await Petition.find().sort({ dataCriacao: -1 });
        res.json(petitions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Creates a new petition.
 */
const createPetition = async (req, res) => {
    try {
        const { titulo, descricao, imageUrl } = req.body;

        // Use authenticated user if available, otherwise fallback to body params (e.g. for testing)


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

/**
 * Signs a petition.
 * Ensures a user can only sign once.
 */
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

/**
 * Handles image upload for a petition.
 * Returns the relative URL of the uploaded image.
 */
const uploadPetitionImage = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    // Construct relative URL for the uploaded file
    const imageUrl = `/uploads/petitions/${req.file.filename}`;

    res.json({ imageUrl });
};

/**
 * Deletes a petition by ID.
 */
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

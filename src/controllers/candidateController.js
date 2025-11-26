const Candidate = require('../models/Candidato');

// @desc    Get all candidates
// @route   GET /api/candidates
// @access  Public
const getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find({});
        res.json(candidates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single candidate
// @route   GET /api/candidates/:id
// @access  Public
const getCandidateById = async (req, res) => {
    try {
        const candidate = await Candidate.findOne({ id: req.params.id }); // Using custom 'id' field
        if (candidate) {
            res.json(candidate);
        } else {
            res.status(404).json({ message: 'Candidate not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a candidate
// @route   POST /api/candidates
// @access  Private/Admin (To be protected)
const createCandidate = async (req, res) => {
    try {
        const { id, nome, biografiaCurta, cargosPrincipais, fotoId, fotoNome, partido, profissao, siteOficial } = req.body;

        const candidateExists = await Candidate.findOne({ id });
        if (candidateExists) {
            return res.status(400).json({ message: 'Candidate already exists' });
        }

        const candidate = await Candidate.create({
            id,
            nome,
            biografiaCurta,
            cargosPrincipais,
            fotoId,
            fotoNome,
            partido,
            profissao,
            siteOficial
        });

        res.status(201).json(candidate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getCandidates,
    getCandidateById,
    createCandidate
};

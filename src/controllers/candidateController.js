const Candidate = require('../models/Candidate');

/**
 * Retrieves all candidates from the database.
 */
const getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find();
        res.json(candidates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Retrieves a single candidate by their ID.
 */
const getCandidateById = async (req, res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (candidate) {
            res.json(candidate);
        } else {
            res.status(404).json({ message: 'Candidate not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Creates a new candidate.
 * Handles optional photo upload.
 */
const createCandidate = async (req, res) => {
    try {
        let candidateData = req.body;
        
        if (req.file) {
            // Store the relative path to the uploaded file
            candidateData.photoUrl = req.file.path;
        }

        const candidate = await Candidate.create(candidateData);
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

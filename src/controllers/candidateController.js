const Candidate = require('../models/Candidate');

// @desc    Get all candidates
// @route   GET /api/candidates
// @access  Public
const getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find();
        res.json(candidates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get candidate by ID
// @route   GET /api/candidates/:id
// @access  Public
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

// @desc    Create a candidate
// @route   POST /api/candidates
// @access  Private/Admin
const createCandidate = async (req, res) => {
    try {
        let candidateData = req.body;
        
        if (req.file) {
            // If running locally, this URL might need to be full path or relative depending on how app consumes it
            // For now, storing relative path 'uploads/candidates/filename'
            // The Android app or frontend should prepend the base URL
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

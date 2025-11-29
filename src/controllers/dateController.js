const DateEvent = require('../models/DateEvent');

// @desc    Get all dates/events
// @route   GET /api/dates
// @access  Public
const getDates = async (req, res) => {
    try {
        const dates = await DateEvent.find();
        res.json(dates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a date/event
// @route   POST /api/dates
// @access  Private
const createDate = async (req, res) => {
    try {
        const dateEvent = await DateEvent.create(req.body);
        res.status(201).json(dateEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Vote in a debate
// @route   POST /api/dates/:id/vote
// @access  Private
const voteDebate = async (req, res) => {
    try {
        const { userId, candidateId } = req.body;
        const dateEvent = await DateEvent.findById(req.params.id);

        if (!dateEvent) {
            return res.status(404).json({ message: 'Debate not found' });
        }

        if (!dateEvent.votes) {
            dateEvent.votes = [];
        }

        // Check if user already voted
        const alreadyVoted = dateEvent.votes.find(v => v.userId === userId);
        if (alreadyVoted) {
            return res.status(400).json({ message: 'User already voted' });
        }

        dateEvent.votes.push({ userId, candidateId });
        await dateEvent.save();

        res.json(dateEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getDates,
    createDate,
    voteDebate
};

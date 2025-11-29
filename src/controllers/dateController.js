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

module.exports = {
    getDates,
    createDate
};

module.exports = {
    getDates,
    createDate
};

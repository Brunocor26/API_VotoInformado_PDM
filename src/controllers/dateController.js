const DateModel = require('../models/Date');

// @desc    Get all dates/events
// @route   GET /api/dates
// @access  Public
const getDates = async (req, res) => {
    try {
        const dates = await DateModel.find({});
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
        const { category, date, idCandidato1, idCandidato2, time, title } = req.body;

        const newDate = await DateModel.create({
            category,
            date,
            idCandidato1,
            idCandidato2,
            time,
            title
        });

        res.status(201).json(newDate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getDates,
    createDate
};

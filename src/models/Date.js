const mongoose = require('mongoose');

const dateSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    date: {
        type: String, // Storing as string "YYYY-MM-DD" to match
        required: true
    },
    idCandidato1: {
        type: String,
        required: false
    },
    idCandidato2: {
        type: String,
        required: false
    },
    time: {
        type: String, // "HH:MM"
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Date', dateSchema);
